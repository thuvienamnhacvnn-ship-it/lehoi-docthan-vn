/**
 * Soát ảnh THẬT SỰ hiện ra trên trang.
 *
 * Bản đầu chỉ tìm id trong mã nguồn — sai, vì rất nhiều ảnh được khai trong file dữ liệu
 * (portraitAssetId, detailAssetIds…) nhưng không component nào vẽ ra. Bản này mở từng trang
 * bằng Chrome, cuộn hết trang cho ảnh lười tải xong, rồi đọc đúng những gì có trong DOM.
 *
 * Trang /gallery bị loại khỏi phép đếm: nó hiển thị cả kho nên tính vào thì ảnh nào cũng
 * "đã dùng", trong khi mục tiêu là mỗi ảnh phải có chỗ đứng trong nội dung.
 *
 *   node scripts/asset-usage.mjs
 *   node scripts/asset-usage.mjs --used   # kèm danh sách đã hiện + hiện ở trang nào
 */
import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { ensureServer } from './lib/server.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const BASE = process.env.OBN_BASE ?? 'http://localhost:3045';
const PORT = 9335;

const ROUTES = [
  '/', '/experience', '/one-beat-night', '/program', '/map', '/artists',
  '/mega-zone', '/community', '/news', '/tickets', '/partners', '/press',
  '/faq', '/visitor-guide', '/contact', '/account',
];

const KIT_LABEL = {
  'KIT-01': 'Thương hiệu / Hero',
  'KIT-02': 'Day Festival',
  'KIT-03': 'One Beat Night',
  'KIT-04': 'Cộng đồng / Truyền thông',
  'KIT-05': 'Tài trợ / Thương mại',
  'KIT-06': 'Hành trình / Vận hành',
  LEGACY: 'Ảnh cũ dùng được',
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

class Cdp {
  constructor(ws) {
    this.ws = ws;
    this.id = 0;
    this.pending = new Map();
    ws.addEventListener('message', (e) => {
      const m = JSON.parse(e.data);
      const p = this.pending.get(m.id);
      if (p) {
        this.pending.delete(m.id);
        m.error ? p.reject(new Error(JSON.stringify(m.error))) : p.resolve(m.result);
      }
    });
  }
  send(method, params = {}) {
    const id = ++this.id;
    this.ws.send(JSON.stringify({ id, method, params }));
    return new Promise((res, rej) => this.pending.set(id, { resolve: res, reject: rej }));
  }
}

const registry = await fs.readFile(path.join(ROOT, 'src/data/assets.generated.ts'), 'utf8');
/** id -> đường dẫn web (không kèm hậu tố kích thước) */
const assets = [];
for (const block of registry.split('  {').slice(1)) {
  const id = block.match(/id: '([^']+)'/)?.[1];
  const src = block.match(/src: '([^']+)'/)?.[1];
  if (id && src) assets.push({ id, stem: src.replace(/-\d+\.webp$/, '') });
}

const server = await ensureServer(BASE);
const proc = spawn(
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${path.join(os.tmpdir(), 'obn-cdp-usage')}`,
    '--no-first-run',
    'about:blank',
  ],
  { stdio: 'ignore' },
);

let target = null;
for (let i = 0; i < 40 && !target; i++) {
  await sleep(400);
  try {
    const list = await fetch(`http://127.0.0.1:${PORT}/json/list`).then((r) => r.json());
    target = list.find((t) => t.type === 'page');
  } catch {
    /* chờ */
  }
}
if (!target) {
  proc.kill();
  await server.stop();
  throw new Error('Chrome không mở cổng gỡ lỗi');
}

const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((res, rej) => {
  ws.addEventListener('open', res, { once: true });
  ws.addEventListener('error', rej, { once: true });
});
const cdp = new Cdp(ws);
await cdp.send('Page.enable');
await cdp.send('Runtime.enable');
await cdp.send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });

/** stem -> danh sách trang đã thấy */
const seen = new Map();

for (const route of ROUTES) {
  await cdp.send('Page.navigate', { url: BASE + route });
  await sleep(1600);

  const { result } = await cdp.send('Runtime.evaluate', {
    expression: `(async () => {
      document.documentElement.style.scrollBehavior = 'auto';
      const found = new Set();
      const collect = () => {
        for (const img of document.images) {
          const s = img.currentSrc || img.src;
          if (s) found.add(s);
        }
        // ảnh đặt bằng CSS (background-image) cũng tính
        for (const el of document.querySelectorAll('*')) {
          const bg = getComputedStyle(el).backgroundImage;
          if (bg && bg.includes('/assets/')) {
            for (const m of bg.matchAll(/url\\("?([^")]+)"?\\)/g)) found.add(m[1]);
          }
        }
      };
      collect();
      const step = innerHeight * 0.8;
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise(r => setTimeout(r, 140));
        collect();
      }
      // mở thêm các bảng chi tiết có thể chứa ảnh (ví dụ bảng khu của bản đồ)
      for (const b of [...document.querySelectorAll('[role="button"], polygon[role="button"]')].slice(0, 12)) {
        try { b.dispatchEvent(new MouseEvent('click', { bubbles: true })); } catch {}
        await new Promise(r => setTimeout(r, 120));
        collect();
      }
      return JSON.stringify([...found]);
    })()`,
    awaitPromise: true,
    returnByValue: true,
  });

  const urls = JSON.parse(result.value);
  let hits = 0;
  for (const url of urls) {
    const m = url.match(/\/assets\/(.+?)-\d+\.webp/);
    if (!m) continue;
    const stem = `/assets/${m[1]}`;
    if (!seen.has(stem)) seen.set(stem, []);
    if (!seen.get(stem).includes(route)) seen.get(stem).push(route);
    hits++;
  }
  console.log(`${route.padEnd(18)} ${String(urls.length).padStart(3)} ảnh trong DOM`);
}

ws.close();
proc.kill();
await server.stop();

const used = assets.filter((a) => seen.has(a.stem));
const unused = assets.filter((a) => !seen.has(a.stem));

console.log(`\nTổng ảnh trong thư viện:      ${assets.length}`);
console.log(`Thật sự hiện ra trên trang:   ${used.length}`);
console.log(`CHƯA hiện ở trang nào:        ${unused.length}\n`);

const byKit = {};
for (const a of unused) {
  const key = a.id.startsWith('legacy-') ? 'LEGACY' : a.id.slice(0, 6).replace('kit', 'KIT').toUpperCase();
  (byKit[key] ??= []).push(a.id);
}
for (const [kit, ids] of Object.entries(byKit).sort()) {
  console.log(`${kit} — ${KIT_LABEL[kit] ?? ''} (${ids.length})`);
  for (const id of ids) console.log(`   ${id}`);
  console.log('');
}

if (process.argv.includes('--used')) {
  console.log('--- Đã hiện ---');
  for (const a of used) console.log(`${a.id}  ←  ${seen.get(a.stem).join(', ')}`);
}

await fs.writeFile(
  path.join(os.tmpdir(), 'obn-asset-usage.json'),
  JSON.stringify({ used: used.map((a) => a.id), unused: unused.map((a) => a.id) }, null, 2),
  'utf8',
);
