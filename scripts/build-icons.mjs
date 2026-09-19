/**
 * Sinh bộ icon cho bản cài về máy (PWA) từ biểu tượng gốc trong KIT-01.
 * Dùng ffmpeg vì máy này không cài được sharp (Smart App Control chặn native binding).
 *
 *   node scripts/build-icons.mjs
 */
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import fs from 'node:fs/promises';
import path from 'node:path';

const run = promisify(execFile);
const SRC = 'E:/Works/Concert/KIT-01/02-emblem-trong-suot.png';
const OUT = path.join(process.cwd(), 'public', 'icons');
/** Nền icon: tím than của lễ hội, không dùng đen tuyền để icon không chìm trên màn hình tối. */
const BG = '0x0B0716';

await fs.mkdir(OUT, { recursive: true });

/** Biểu tượng trong suốt, không nền — Android dùng cho icon thường. */
async function transparent(size) {
  const out = path.join(OUT, `icon-${size}.png`);
  await run('ffmpeg', ['-y', '-loglevel', 'error', '-i', SRC,
    '-vf', `scale=${size}:${size}:flags=lanczos`, '-frames:v', '1', out]);
  return out;
}

/**
 * Icon có nền. `inset` là tỉ lệ chừa trống quanh biểu tượng:
 *  - maskable phải chừa 20% mỗi bên vì Android sẽ cắt tròn/vuông bo tuỳ máy;
 *  - icon iOS chỉ cần chừa ít, iOS tự bo góc.
 */
async function onBackground(size, inset, name) {
  const inner = Math.round(size * (1 - inset * 2));
  const out = path.join(OUT, name);
  await run('ffmpeg', ['-y', '-loglevel', 'error', '-i', SRC,
    '-filter_complex',
    `[0:v]scale=${inner}:${inner}:flags=lanczos[fg];` +
    `color=c=${BG}:s=${size}x${size}[bg];` +
    `[bg][fg]overlay=(W-w)/2:(H-h)/2:format=auto`,
    '-frames:v', '1', out]);
  return out;
}

const made = [
  await transparent(192),
  await transparent(512),
  await onBackground(512, 0.2, 'icon-maskable-512.png'),
  await onBackground(180, 0.08, 'apple-touch-icon.png'),
  await onBackground(32, 0.04, 'favicon-32.png'),
];

for (const f of made) {
  const { size } = await fs.stat(f);
  console.log(`${path.basename(f).padEnd(26)} ${(size / 1024).toFixed(1)} KB`);
}
