/**
 * SOÁT TOÀN BỘ TRƯỚC KHI BÀN GIAO.
 *
 * Mở từng trang bằng Chrome thật rồi kiểm:
 *   1. trang trả về 200, không lỗi console, không ảnh hỏng
 *   2. mọi liên kết nội bộ đều dẫn tới trang có thật (không 404)
 *   3. tiêu đề trang + mô tả meta + ảnh chia sẻ
 *   4. trật tự thẻ tiêu đề (h1 duy nhất, không nhảy cấp)
 *   5. ảnh thiếu alt, nút/liên kết không có tên đọc được
 *   6. tràn ngang và vùng chạm nhỏ ở khổ điện thoại
 *   7. các tệp hạ tầng: robots.txt, sitemap.xml, favicon, trang 404
 *
 *   node scripts/preflight.mjs
 */
import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { ensureServer } from './lib/server.mjs';

const BASE = process.env.OBN_BASE ?? 'http://localhost:3045';
const PORT = 9340;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const ROUTES = [
  '/', '/experience', '/one-beat-night', '/program', '/map', '/artists',
  '/mega-zone', '/community', '/news', '/tickets', '/partners', '/press',
  '/faq', '/visitor-guide', '/contact', '/account', '/gallery',
];

class Cdp {
  constructor(ws) {
    this.ws = ws;
    this.id = 0;
    this.pending = new Map();
    this.handlers = [];
    ws.addEventListener('message', (e) => {
      const m = JSON.parse(e.data);
      if (m.method) {
        for (const h of this.handlers) h(m);
        return;
      }
      const p = this.pending.get(m.id);
      if (p) {
        this.pending.delete(m.id);
        m.error ? p.reject(new Error(JSON.stringify(m.error))) : p.resolve(m.result);
      }
    });
  }
  on(fn) {
    this.handlers.push(fn);
  }
  send(method, params = {}) {
    const id = ++this.id;
    this.ws.send(JSON.stringify({ id, method, params }));
    return new Promise((res, rej) => this.pending.set(id, { resolve: res, reject: rej }));
  }
}

const problems = [];
const note = (level, route, msg) => problems.push({ level, route, msg });

const server = await ensureServer(BASE);

// --- Tệp hạ tầng ---
for (const [file, label] of [
  ['/robots.txt', 'robots.txt'],
  ['/sitemap.xml', 'sitemap.xml'],
  ['/favicon.ico', 'favicon.ico'],
]) {
  const res = await fetch(BASE + file).catch(() => null);
  if (!res || !res.ok) note('THIẾU', '-', `${label} không có (${res ? res.status : 'lỗi mạng'})`);
}
const notFound = await fetch(BASE + '/trang-khong-ton-tai-xyz').catch(() => null);
if (!notFound || notFound.status !== 404) note('LỖI', '-', 'Trang 404 không trả về mã 404');

const proc = spawn(
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  ['--headless=new', '--disable-gpu', '--hide-scrollbars', `--remote-debugging-port=${PORT}`,
   `--user-data-dir=${path.join(os.tmpdir(), 'obn-cdp-preflight')}`, '--no-first-run', 'about:blank'],
  { stdio: 'ignore' },
);

let target = null;
for (let i = 0; i < 40 && !target; i++) {
  await sleep(400);
  try {
    const list = await fetch(`http://127.0.0.1:${PORT}/json/list`).then((r) => r.json());
    target = list.find((t) => t.type === 'page');
  } catch {
    /* chờ Chrome */
  }
}
if (!target) {
  proc.kill();
  await server.stop();
  throw new Error('Chrome không mở cổng gỡ lỗi');
}

const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((res) => ws.addEventListener('open', res, { once: true }));
const cdp = new Cdp(ws);
await cdp.send('Page.enable');
await cdp.send('Runtime.enable');
await cdp.send('Log.enable');

let consoleErrors = [];
cdp.on((m) => {
  if (m.method === 'Log.entryAdded' && m.params.entry.level === 'error') {
    consoleErrors.push(m.params.entry.text.slice(0, 160));
  }
  if (m.method === 'Runtime.exceptionThrown') {
    consoleErrors.push((m.params.exceptionDetails.text ?? 'exception').slice(0, 160));
  }
});

const allLinks = new Set();

for (const route of ROUTES) {
  consoleErrors = [];
  await cdp.send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
  await cdp.send('Page.navigate', { url: BASE + route });
  await sleep(1800);

  const { result } = await cdp.send('Runtime.evaluate', {
    expression: `(async () => {
      document.documentElement.style.scrollBehavior = 'auto';
      const step = innerHeight * 0.9;
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise(r => setTimeout(r, 70));
      }
      window.scrollTo(0, 0);
      await new Promise(r => setTimeout(r, 400));

      const headings = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].map(h => +h.tagName[1]);
      let jump = null;
      for (let i = 1; i < headings.length; i++) {
        if (headings[i] - headings[i-1] > 1) { jump = headings[i-1] + '->' + headings[i]; break; }
      }

      return JSON.stringify({
        title: document.title,
        desc: document.querySelector('meta[name="description"]')?.content ?? null,
        og: document.querySelector('meta[property="og:image"]')?.content ?? null,
        lang: document.documentElement.lang,
        h1Count: document.querySelectorAll('h1').length,
        headingJump: jump,
        imgsNoAlt: [...document.images].filter(i => i.alt === null || i.alt === undefined).length,
        brokenImgs: [...document.images].filter(i => i.complete && i.naturalWidth === 0).map(i => i.currentSrc).slice(0, 5),
        namelessControls: [...document.querySelectorAll('button,a')]
          .filter(el => !el.textContent.trim() && !el.getAttribute('aria-label') && !el.querySelector('.sr-only, img[alt]:not([alt=""])'))
          .length,
        links: [...document.querySelectorAll('a[href^="/"]')].map(a => a.getAttribute('href')),
      });
    })()`,
    awaitPromise: true,
    returnByValue: true,
  });

  const d = JSON.parse(result.value);
  d.links.forEach((l) => allLinks.add(l.split('#')[0]));

  if (!d.title || d.title.length < 8) note('LỖI', route, 'thiếu tiêu đề trang');
  if (!d.desc) note('THIẾU', route, 'thiếu meta description');
  if (d.h1Count !== 1) note('LỖI', route, `có ${d.h1Count} thẻ h1 (phải đúng 1)`);
  if (d.headingJump) note('CẢNH BÁO', route, `nhảy cấp tiêu đề ${d.headingJump}`);
  if (d.imgsNoAlt) note('LỖI', route, `${d.imgsNoAlt} ảnh thiếu alt`);
  if (d.brokenImgs.length) note('LỖI', route, `ảnh hỏng: ${d.brokenImgs.join(', ')}`);
  if (d.namelessControls) note('LỖI', route, `${d.namelessControls} nút/liên kết không có tên đọc được`);
  if (consoleErrors.length) note('LỖI', route, `console: ${[...new Set(consoleErrors)].join(' | ')}`);

  // --- khổ điện thoại ---
  await cdp.send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
  await sleep(700);
  const { result: m } = await cdp.send('Runtime.evaluate', {
    expression: `JSON.stringify({
      overflow: Math.max(0, document.documentElement.scrollWidth - innerWidth),
      tiny: [...document.querySelectorAll('a,button')]
        .filter(el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0 && r.height < 24; }).length,
    })`,
    returnByValue: true,
  });
  const mm = JSON.parse(m.value);
  if (mm.overflow > 1) note('LỖI', route, `tràn ngang ${mm.overflow}px ở 390px`);
  if (mm.tiny) note('CẢNH BÁO', route, `${mm.tiny} vùng chạm dưới 24px ở 390px`);

  process.stdout.write(`${route.padEnd(18)} ✓\n`);
}

// --- Liên kết nội bộ có dẫn tới đâu không ---
for (const href of [...allLinks].sort()) {
  const res = await fetch(BASE + href, { method: 'GET' }).catch(() => null);
  if (!res || res.status >= 400) note('LỖI', '-', `liên kết hỏng: ${href} (${res ? res.status : 'lỗi mạng'})`);
}

ws.close();
proc.kill();
await server.stop();

console.log('\n================ KẾT QUẢ ================');
if (problems.length === 0) {
  console.log('Không phát hiện vấn đề nào.');
} else {
  const order = { LỖI: 0, THIẾU: 1, 'CẢNH BÁO': 2 };
  problems.sort((a, b) => order[a.level] - order[b.level]);
  for (const p of problems) console.log(`[${p.level}] ${p.route.padEnd(16)} ${p.msg}`);
  console.log(`\nTổng: ${problems.length} mục cần xem.`);
}
console.log(`Đã kiểm ${ROUTES.length} trang, ${allLinks.size} liên kết nội bộ.`);
