/**
 * Bảo đảm có server để soi.
 *
 * Tiến trình nền khởi từ phiên làm việc hay bị dọn giữa chừng, nên script soi giao diện
 * không được tin là server đang chạy. Hàm này: gọi thử, không được thì tự bật `next start`,
 * chờ sẵn sàng, và trả về hàm dọn — chỉ tắt đúng server do chính nó bật.
 */
import { spawn } from 'node:child_process';
import path from 'node:path';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function reachable(base) {
  try {
    const res = await fetch(base, { signal: AbortSignal.timeout(4000) });
    return res.ok;
  } catch {
    return false;
  }
}

export async function ensureServer(base = 'http://localhost:3045') {
  if (await reachable(base)) return { started: false, stop: async () => {} };

  const projectRoot = path.resolve(import.meta.dirname, '..', '..');
  const port = new URL(base).port || '3000';
  const bin = path.join(projectRoot, 'node_modules', 'next', 'dist', 'bin', 'next');

  console.log(`(server chưa chạy — tự bật next start -p ${port})`);
  const proc = spawn(process.execPath, [bin, 'start', '-p', port], {
    cwd: projectRoot,
    stdio: 'ignore',
    windowsHide: true,
  });

  for (let i = 0; i < 40; i++) {
    await sleep(500);
    if (await reachable(base)) {
      return {
        started: true,
        stop: async () => {
          proc.kill();
          await sleep(300);
        },
      };
    }
  }

  proc.kill();
  throw new Error(`Không bật được server ở ${base} — thử chạy "npm run build" trước.`);
}
