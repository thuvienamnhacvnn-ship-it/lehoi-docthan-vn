/**
 * Chụp một khối cụ thể của trang ở bề ngang tuỳ chọn.
 *
 * Dùng khi cần soi lại bố cục: tab Chrome nằm nền sẽ bị đóng băng animation
 * (reveal kẹt ở opacity 0), chụp qua CDP thì không dính chuyện đó.
 *
 *   node scripts/shot.mjs <đường-dẫn> <selector|top> [width] [height] [tên-file]
 *   node scripts/shot.mjs / "h2:nth-of-type(1)" 1440 900 audience
 */
import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { ensureServer } from './lib/server.mjs';

const [, , route = '/', selector = 'top', wArg = '1440', hArg = '900', name = 'shot'] = process.argv;
const WIDTH = Number(wArg);
const HEIGHT = Number(hArg);
const BASE = process.env.OBN_BASE ?? 'http://localhost:3045';
const OUT = path.join(os.tmpdir(), 'obn-shots');
const PORT = 9334;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const server = await ensureServer(BASE);

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

const chrome = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

const proc = spawn(
  chrome,
  [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${path.join(os.tmpdir(), 'obn-cdp-shot')}`,
    '--no-first-run',
    'about:blank',
  ],
  { stdio: 'ignore' },
);

await fs.mkdir(OUT, { recursive: true });

let target = null;
for (let i = 0; i < 40 && !target; i++) {
  await sleep(400);
  try {
    const list = await fetch(`http://127.0.0.1:${PORT}/json/list`).then((r) => r.json());
    target = list.find((t) => t.type === 'page');
  } catch {
    /* chờ Chrome mở cổng */
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
  deviceScaleFactor: 1,
  mobile: WIDTH < 700,
});
await cdp.send('Page.navigate', { url: BASE + route });
await sleep(2500);

if (selector !== 'top') {
  await cdp.send('Runtime.evaluate', {
    expression: `(async () => {
      document.documentElement.style.scrollBehavior = 'auto';
      const el = document.querySelector(${JSON.stringify(selector)})
        || [...document.querySelectorAll('h1,h2,h3,p,section')].find(e => e.textContent.includes(${JSON.stringify(selector)}));
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 110;
        window.scrollTo(0, Math.max(0, y));
      }
      await new Promise(r => setTimeout(r, 1200));
    })()`,
    awaitPromise: true,
  });
}

const shot = await cdp.send('Page.captureScreenshot', { format: 'jpeg', quality: 82 });
const file = path.join(OUT, `${name}.jpg`);
await fs.writeFile(file, Buffer.from(shot.data, 'base64'));
console.log(file);

ws.close();
proc.kill();
await server.stop();
