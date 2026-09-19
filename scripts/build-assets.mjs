/**
 * ONE BEAT NIGHT — pipeline ảnh.
 *
 * Nguồn sự thật: E:/Works/Concert/assets-manifest.json (164 mục, tên file gốc).
 * Việc của script:
 *   1. Sinh dẫn xuất WebP 3 chiều rộng (480/960/1600) vào public/assets/<KIT>/ — giữ NGUYÊN tên gốc.
 *   2. Sinh LQIP base64 (20px) chèn thẳng vào registry -> blur placeholder, không thêm request.
 *   3. Xuất registry TypeScript src/data/assets.generated.ts theo đúng schema §05 của build prompt.
 *
 * Không đổi tên, không gộp, không thay ảnh thiếu bằng ảnh khác (luật dự án).
 */
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';

const run = promisify(execFile);

const SOURCE_ROOT = process.env.OBN_SOURCE_ROOT ?? 'E:/Works/Concert';
const MANIFEST = path.join(SOURCE_ROOT, 'assets-manifest.json');
const PROJECT = path.resolve(import.meta.dirname, '..');
const OUT_DIR = path.join(PROJECT, 'public/assets');
const REGISTRY = path.join(PROJECT, 'src/data/assets.generated.ts');
const WIDTHS = [480, 960, 1600];
const CONCURRENCY = Math.max(2, Math.min(6, os.cpus().length - 2));

/** Ảnh trong 00-anh-cu-trong-chat giữ thư mục riêng, đường dẫn web gọn hơn. */
const publicPathFor = (file) => {
  const parts = file.split('/');
  if (parts[0] === '00-anh-cu-trong-chat') return ['legacy', ...parts.slice(2)].join('/');
  return parts.join('/');
};

const slug = (file) =>
  publicPathFor(file)
    .replace(/\.png$/i, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();

const aspectOf = (w, h) => {
  const r = w / h;
  if (Math.abs(r - 16 / 9) < 0.05) return '16:9';
  if (Math.abs(r - 9 / 16) < 0.05) return '9:16';
  if (Math.abs(r - 1) < 0.03) return '1:1';
  if (Math.abs(r - 3 / 2) < 0.05) return '3:2';
  if (Math.abs(r - 2 / 3) < 0.05) return '2:3';
  return w + ':' + h;
};

/** KIT -> danh mục nội dung. */
const CATEGORY = {
  'KIT-01': 'brand',
  'KIT-02': 'day-festival',
  'KIT-03': 'one-beat-night',
  'KIT-04': 'community',
  'KIT-05': 'sponsor',
  'KIT-06': 'journey',
  '00-anh-cu-trong-chat': 'legacy',
};

/** Ảnh nền đen dùng mix-blend-mode: screen (theo HUONG-DAN-ANH-WEBAPP.md). */
const SCREEN_BLEND = new Set([
  'KIT-01/24-overlay-confetti.png',
  'KIT-01/25-overlay-light-beams.png',
]);

const PRIORITY_FILES = new Set([
  'KIT-01/02-emblem-trong-suot.png',
  'KIT-01/03-hero-desktop.png',
  'KIT-01/04-hero-mobile.png',
]);

const ANIMATION_PRESET = {
  brand: 'reveal',
  'day-festival': 'expand',
  'one-beat-night': 'pulse',
  community: 'connect',
  sponsor: 'flow',
  journey: 'travel',
  legacy: 'reveal',
};

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function encode(src, dest, width) {
  await fs.mkdir(path.dirname(dest), { recursive: true });
  await run('ffmpeg', [
    '-hide_banner', '-loglevel', 'error', '-y',
    '-i', src,
    '-vf', 'scale=' + width + ':-2:flags=lanczos',
    '-c:v', 'libwebp', '-compression_level', '6',
    '-q:v', width >= 1600 ? '76' : '80',
    dest,
  ]);
}

async function lqip(src) {
  const tmp = path.join(os.tmpdir(), 'obn-lqip-' + Math.random().toString(36).slice(2) + '.webp');
  await run('ffmpeg', [
    '-hide_banner', '-loglevel', 'error', '-y',
    '-i', src, '-vf', 'scale=20:-2:flags=lanczos',
    '-c:v', 'libwebp', '-q:v', '35', tmp,
  ]);
  const buf = await fs.readFile(tmp);
  await fs.rm(tmp, { force: true });
  return 'data:image/webp;base64,' + buf.toString('base64');
}

async function pool(items, worker) {
  let i = 0;
  let done = 0;
  const next = async () => {
    while (i < items.length) {
      const idx = i++;
      await worker(items[idx], idx);
      done++;
      if (done % 10 === 0 || done === items.length) {
        process.stdout.write('  ... ' + done + '/' + items.length + '\n');
      }
    }
  };
  await Promise.all(Array.from({ length: CONCURRENCY }, next));
}

const esc = (s) => String(s ?? '').replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, ' ');

async function main() {
  const manifest = JSON.parse(await fs.readFile(MANIFEST, 'utf8'));
  const blocked = manifest.rules?.doNotUse ?? [];
  const assets = manifest.assets.filter((a) => !blocked.some((b) => a.file.startsWith(b)));

  console.log('ONE BEAT NIGHT — ' + assets.length + ' ảnh từ manifest (bỏ ' +
    (manifest.assets.length - assets.length) + ' mục cấm dùng).');

  const force = process.argv.includes('--force');
  const records = [];
  const missing = [];

  await pool(assets, async (a) => {
    const src = path.join(SOURCE_ROOT, a.file);
    if (!(await exists(src))) {
      missing.push(a.file);
      return;
    }

    const rel = publicPathFor(a.file).replace(/\.png$/i, '');
    const variants = {};
    for (const w of WIDTHS) {
      if (w > a.w * 1.05) continue; // không phóng to quá kích thước gốc
      const dest = path.join(OUT_DIR, rel + '-' + w + '.webp');
      if (force || !(await exists(dest))) await encode(src, dest, w);
      variants[w] = '/assets/' + rel + '-' + w + '.webp';
    }
    if (Object.keys(variants).length === 0) {
      const dest = path.join(OUT_DIR, rel + '-' + a.w + '.webp');
      if (force || !(await exists(dest))) await encode(src, dest, a.w);
      variants[a.w] = '/assets/' + rel + '-' + a.w + '.webp';
    }

    const blurPath = path.join(OUT_DIR, rel + '.lqip.txt');
    let blur;
    if (!force && (await exists(blurPath))) blur = await fs.readFile(blurPath, 'utf8');
    else {
      blur = await lqip(src);
      await fs.writeFile(blurPath, blur, 'utf8');
    }

    const kit = a.file.split('/')[0];
    const category = CATEGORY[kit] ?? 'other';
    const widths = Object.keys(variants).map(Number).sort((x, y) => x - y);
    const portrait = a.h > a.w;

    records.push({
      id: slug(a.file),
      kit,
      filename: a.file,
      src: variants[widths[widths.length - 1]],
      mobileSrc: variants[widths[0]],
      srcSet: widths.map((w) => variants[w] + ' ' + w + 'w').join(', '),
      widths,
      width: a.w,
      height: a.h,
      aspectRatio: aspectOf(a.w, a.h),
      orientation: portrait ? 'portrait' : a.w === a.h ? 'square' : 'landscape',
      category,
      section: a.section,
      purpose: a.use,
      alt: a.note ? a.use + ' — ' + a.note : a.use,
      priority: PRIORITY_FILES.has(a.file),
      loadingStrategy: PRIORITY_FILES.has(a.file) ? 'eager' : 'lazy',
      focalPoint: a.objectPosition ?? 'center center',
      overlayMode: SCREEN_BLEND.has(a.file) ? 'screen' : a.alpha ? 'alpha' : 'none',
      parallaxStrength: category === 'journey' || category === 'brand' ? 0.18 : 0.1,
      animationPreset: ANIMATION_PRESET[category] ?? 'reveal',
      status: 'ready',
      blurDataURL: blur,
      textSide: a.textSide ?? null,
    });
  });

  records.sort((a, b) => a.filename.localeCompare(b.filename, 'en'));

  const body = records
    .map(
      (r) => [
        '  {',
        "    id: '" + esc(r.id) + "',",
        "    kit: '" + esc(r.kit) + "',",
        "    filename: '" + esc(r.filename) + "',",
        "    src: '" + esc(r.src) + "',",
        "    mobileSrc: '" + esc(r.mobileSrc) + "',",
        "    srcSet: '" + esc(r.srcSet) + "',",
        '    widths: [' + r.widths.join(', ') + '],',
        '    width: ' + r.width + ',',
        '    height: ' + r.height + ',',
        "    aspectRatio: '" + r.aspectRatio + "',",
        "    orientation: '" + r.orientation + "',",
        "    category: '" + r.category + "',",
        "    section: '" + esc(r.section) + "',",
        "    purpose: '" + esc(r.purpose) + "',",
        "    alt: '" + esc(r.alt) + "',",
        '    priority: ' + r.priority + ',',
        "    loadingStrategy: '" + r.loadingStrategy + "',",
        "    focalPoint: '" + esc(r.focalPoint) + "',",
        "    overlayMode: '" + r.overlayMode + "',",
        '    parallaxStrength: ' + r.parallaxStrength + ',',
        "    animationPreset: '" + r.animationPreset + "',",
        "    status: 'ready',",
        '    textSide: ' + (r.textSide ? "'" + esc(r.textSide) + "'" : 'null') + ',',
        "    blurDataURL: '" + r.blurDataURL + "',",
        '  },',
      ].join('\n'),
    )
    .join('\n');

  const file = [
    '// TỰ SINH bởi scripts/build-assets.mjs — đừng sửa tay.',
    '// Nguồn: ' + MANIFEST.replace(/\\/g, '/'),
    '// ' + records.length + ' ảnh sẵn sàng. Registry mở tới ASSET_TARGET slot (§05 build prompt).',
    "import type { FestivalAsset } from '@/types/assets';",
    '',
    'export const ASSET_TARGET = 180;',
    "export const GENERATED_AT = '" + new Date().toISOString() + "';",
    '',
    'export const assets: FestivalAsset[] = [',
    body,
    '];',
    '',
  ].join('\n');

  await fs.mkdir(path.dirname(REGISTRY), { recursive: true });
  await fs.writeFile(REGISTRY, file, 'utf8');

  console.log('\nXong: ' + records.length + ' ảnh -> ' + path.relative(PROJECT, REGISTRY));
  if (missing.length) {
    console.warn('THIẾU ' + missing.length + ' file nguồn:\n  ' + missing.join('\n  '));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
