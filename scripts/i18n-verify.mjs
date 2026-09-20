/**
 * KIỂM CHỨNG DỊCH — đọc chữ THẬT trên trang đã dựng, không đọc mã nguồn.
 *
 * Công cụ dò mã nguồn (`i18n-audit.mjs`) chỉ thấy chuỗi viết thẳng trong JSX; chữ lấy
 * từ biến thì nó chịu. Công cụ này làm ngược lại: mở từng trang của từng thứ tiếng bằng
 * Chrome thật, lấy toàn bộ chữ người dùng nhìn thấy (kể cả alt ảnh, aria-label, title),
 * rồi đếm xem còn bao nhiêu dấu tiếng Việt lọt vào bản không phải tiếng Việt.
 *
 * Tên riêng được bỏ qua: ONE BEAT NIGHT, Trạm Gặp trong bản tiếng Việt, tên thành phố…
 * — danh sách ở ALLOW bên dưới.
 *
 *   node scripts/i18n-verify.mjs
 */
import { spawn } from 'node:child_process';
import path from 'node:path';
import os from 'node:os';
import { ensureServer } from './lib/server.mjs';

const BASE = process.env.OBN_BASE ?? 'http://localhost:3045';
const PORT = 9360;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const LOCALES = ['en', 'zh', 'ja', 'ko'];
const PATHS = [
  '', '/experience', '/one-beat-night', '/program', '/map', '/artists',
  '/mega-zone', '/community', '/news', '/tickets', '/partners', '/press',
  '/faq', '/visitor-guide', '/contact', '/account', '/gallery',
];

/** Chuỗi được phép xuất hiện nguyên văn ở mọi thứ tiếng (tên riêng, thương hiệu). */
const ALLOW = [
  'ONE BEAT NIGHT',
  'One Beat Night',
  'Trạm Gặp',
  'Gặp mình',
  'Gặp nhau',
  'Gặp hạnh phúc',
  'GẶP MÌNH',
  'GẶP NHAU',
  'GẶP HẠNH PHÚC',
  'Việt Nam',
  'Hồ Chí Minh',
  'Tiếng Việt',
  'LỄ HỘI ĐỘC THÂN',
  // 'café' là chữ mượn có dấu, hợp lệ trong tiếng Anh — không phải chữ Việt sót lại.
  'café',
  'Café',
];

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

const server = await ensureServer(BASE);
const proc = spawn(
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  ['--headless=new', '--disable-gpu', '--hide-scrollbars', `--remote-debugging-port=${PORT}`,
   `--user-data-dir=${path.join(os.tmpdir(), 'obn-cdp-verify')}`, '--no-first-run', 'about:blank'],
  { stdio: 'ignore' },
);

let target = null;
for (let i = 0; i < 40 && !target; i++) {
  await sleep(400);
  try {
    target = (await fetch(`http://127.0.0.1:${PORT}/json/list`).then((r) => r.json())).find((t) => t.type === 'page');
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
await new Promise((r) => ws.addEventListener('open', r, { once: true }));
const cdp = new Cdp(ws);
await cdp.send('Page.enable');
await cdp.send('Runtime.enable');
await cdp.send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });

const findings = [];

for (const locale of LOCALES) {
  for (const p of PATHS) {
    const route = `/${locale}${p}`;
    await cdp.send('Page.navigate', { url: BASE + route });
    await sleep(1500);

    const { result } = await cdp.send('Runtime.evaluate', {
      expression: `(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += innerHeight * 0.9) {
          window.scrollTo(0, y); await new Promise(f => setTimeout(f, 50));
        }
        window.scrollTo(0, 0); await new Promise(f => setTimeout(f, 200));

        const chunks = [];
        // chữ nhìn thấy
        // Bỏ qua <script>/<style>: payload của Next nằm trong script, không ai đọc nó.
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
          acceptNode: (node) =>
            /^(SCRIPT|STYLE|TEMPLATE|NOSCRIPT)$/.test(node.parentElement?.tagName ?? '')
              ? NodeFilter.FILTER_REJECT
              : NodeFilter.FILTER_ACCEPT,
        });
        let n;
        while ((n = walker.nextNode())) {
          const s = n.nodeValue.trim();
          if (s) chunks.push(s);
        }
        // chữ chỉ trình đọc màn hình nghe được
        for (const el of document.querySelectorAll('[alt],[aria-label],[title],[placeholder]')) {
          for (const a of ['alt', 'aria-label', 'title', 'placeholder']) {
            const v = el.getAttribute(a);
            if (v && v.trim()) chunks.push(v.trim());
          }
        }
        return JSON.stringify(chunks);
      })()`,
      awaitPromise: true,
      returnByValue: true,
    });

    const chunks = JSON.parse(result.value);
    const VN = /[àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđĐ]/;
    const bad = new Set();
    for (const raw of chunks) {
      let s = raw;
      for (const a of ALLOW) s = s.split(a).join('');
      if (VN.test(s)) bad.add(raw.slice(0, 90));
    }
    if (bad.size) findings.push({ route, items: [...bad] });
    process.stdout.write(`${route.padEnd(24)} ${bad.size === 0 ? '✓' : `✗ ${bad.size}`}\n`);
  }
}

ws.close();
proc.kill();
await server.stop();

console.log('\n================ KẾT QUẢ ================');
if (findings.length === 0) {
  console.log('Không còn chữ tiếng Việt lọt sang bản khác. Dịch đủ 100%.');
} else {
  for (const f of findings) {
    console.log(`\n${f.route}`);
    for (const it of f.items.slice(0, 6)) console.log('   ', it);
    if (f.items.length > 6) console.log(`    … và ${f.items.length - 6} chỗ nữa`);
  }
  console.log(`\nTổng: ${findings.reduce((a, f) => a + f.items.length, 0)} chỗ, trong ${findings.length} trang.`);
}
