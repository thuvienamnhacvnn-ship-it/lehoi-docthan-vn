/**
 * Soát giao diện ở bề ngang điện thoại thật (390×844).
 *
 * Chrome headless ép cửa sổ tối thiểu 500px, nên đo bằng cách khác: mở Chrome với
 * cổng gỡ lỗi, dùng CDP đặt Emulation.setDeviceMetricsOverride đúng 390px rồi
 * chụp ảnh + đo phần tử nào tràn ra ngoài khung.
 *
 * Chạy:  node scripts/mobile-audit.mjs [width] [height]
 */
import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { ensureServer } from './lib/server.mjs';

const WIDTH = Number(process.argv[2] ?? 390);
const HEIGHT = Number(process.argv[3] ?? 844);
const BASE = process.env.OBN_BASE ?? 'http://localhost:3045';
const OUT = path.join(os.tmpdir(), 'obn-mobile');
const PORT = 9333;

const CHROME = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
];

const ROUTES = [
  '/', '/experience', '/one-beat-night', '/program', '/map', '/artists',
  '/mega-zone', '/community', '/news', '/tickets', '/partners', '/press',
  '/faq', '/visitor-guide', '/contact', '/account', '/gallery',
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function findChrome() {
  for (const c of CHROME) {
    try {
      await fs.access(c);
      return c;
    } catch {
      /* thử đường dẫn kế tiếp */
    }
  }
  throw new Error('Không tìm thấy chrome.exe');
}

/** Một phiên CDP tối giản trên WebSocket có sẵn của Node 22+. */
class Cdp {
  constructor(ws) {
    this.ws = ws;
    this.id = 0;
    this.pending = new Map();
    ws.addEventListener('message', (e) => {
      const msg = JSON.parse(e.data);
      const p = this.pending.get(msg.id);
      if (p) {
        this.pending.delete(msg.id);
        msg.error ? p.reject(new Error(JSON.stringify(msg.error))) : p.resolve(msg.result);
      }
    });
  }
  send(method, params = {}) {
    const id = ++this.id;
    this.ws.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve, reject) => this.pending.set(id, { resolve, reject }));
  }
}

async function main() {
  await fs.mkdir(OUT, { recursive: true });
  const server = await ensureServer(BASE);
  const chrome = await findChrome();
  const userDir = path.join(os.tmpdir(), 'obn-cdp-profile');

  const proc = spawn(
    chrome,
    [
      '--headless=new',
      '--disable-gpu',
      '--hide-scrollbars',
      `--remote-debugging-port=${PORT}`,
      `--user-data-dir=${userDir}`,
      '--no-first-run',
      'about:blank',
    ],
    { stdio: 'ignore', detached: false },
  );

  // Đợi cổng gỡ lỗi mở
  let target = null;
  for (let i = 0; i < 40 && !target; i++) {
    await sleep(400);
    try {
      const list = await fetch(`http://127.0.0.1:${PORT}/json/list`).then((r) => r.json());
      target = list.find((t) => t.type === 'page');
    } catch {
      /* chưa sẵn sàng */
    }
  }
  if (!target) {
    proc.kill();
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
  await cdp.send('Emulation.setDeviceMetricsOverride', {
    width: WIDTH,
    height: HEIGHT,
    deviceScaleFactor: 2,
    mobile: true,
  });
  await cdp.send('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });

  const report = [];

  for (const route of ROUTES) {
    await cdp.send('Page.navigate', { url: BASE + route });
    await sleep(2200);

    // Cuộn hết trang để kích hoạt tải lười + hiệu ứng, rồi về đầu trang
    await cdp.send('Runtime.evaluate', {
      expression: `(async () => {
        // Tắt cuộn mượt, nếu không ảnh chụp rơi vào giữa lúc trang còn đang trôi về đầu
        document.documentElement.style.scrollBehavior = 'auto';
        const step = innerHeight * 0.9;
        for (let y = 0; y < document.body.scrollHeight; y += step) {
          window.scrollTo(0, y);
          await new Promise(r => setTimeout(r, 90));
        }
        window.scrollTo(0, 0);
        await new Promise(r => setTimeout(r, 900));
      })()`,
      awaitPromise: true,
    });

    const { result } = await cdp.send('Runtime.evaluate', {
      expression: `JSON.stringify({
        vw: innerWidth,
        scrollW: document.documentElement.scrollWidth,
        overflowPx: Math.max(0, document.documentElement.scrollWidth - innerWidth),
        height: document.body.scrollHeight,
        offenders: [...document.querySelectorAll('body *')]
          .filter(el => {
            const r = el.getBoundingClientRect();
            if (r.width === 0 || r.height === 0) return false;
            if (r.right <= innerWidth + 1) return false;
            // bỏ qua phần tử nằm trong vùng cuộn ngang cố ý (.rail)
            return !el.closest('.rail');
          })
          .slice(0, 6)
          .map(el => el.tagName + '.' + String(el.className).slice(0, 48) + ' right=' + Math.round(el.getBoundingClientRect().right)),
        tinyTargets: [...document.querySelectorAll('a,button,input,select')]
          .filter(el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0 && r.height < 32; })
          .slice(0, 6)
          .map(el => (el.textContent || el.getAttribute('aria-label') || el.tagName).trim().slice(0, 26) + ' h=' + Math.round(el.getBoundingClientRect().height)),
        images: document.images.length,
        brokenImages: [...document.images].filter(i => i.complete && i.naturalWidth === 0).map(i => i.currentSrc).slice(0, 4)
      })`,
      returnByValue: true,
    });

    const data = JSON.parse(result.value);
    report.push({ route, ...data });

    const shot = await cdp.send('Page.captureScreenshot', { format: 'jpeg', quality: 78, captureBeyondViewport: false });
    const name = route === '/' ? 'home' : route.slice(1).replace(/\//g, '-');
    await fs.writeFile(path.join(OUT, `${name}.jpg`), Buffer.from(shot.data, 'base64'));

    const flag = data.overflowPx > 1 || data.brokenImages.length ? ' ❌' : ' ✓';
    console.log(
      `${route.padEnd(18)} tràn ${String(data.overflowPx).padStart(4)}px · cao ${String(data.height).padStart(6)}px · ${String(data.images).padStart(3)} ảnh${flag}`,
    );
    if (data.offenders.length) console.log('   tràn:', data.offenders.join(' | '));
    if (data.brokenImages.length) console.log('   ảnh hỏng:', data.brokenImages.join(' | '));
    if (data.tinyTargets.length) console.log('   vùng chạm nhỏ:', data.tinyTargets.join(' | '));
  }

  await fs.writeFile(path.join(OUT, 'report.json'), JSON.stringify(report, null, 2), 'utf8');
  console.log(`\nẢnh chụp: ${OUT}`);

  ws.close();
  proc.kill();
  await server.stop();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
