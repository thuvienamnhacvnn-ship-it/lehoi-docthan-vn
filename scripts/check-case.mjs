/**
 * Soát hoa/thường trong đường dẫn import.
 *
 * Windows không phân biệt `Foo.tsx` với `foo.tsx`, Linux thì có. Vercel dựng trên Linux,
 * nên một chữ hoa sai chỗ sẽ cho lỗi "Module not found" ở đó mà ở máy này không bao giờ
 * thấy. Script này so từng đường dẫn import với tên tệp THẬT trên đĩa.
 *
 * Kiểm luôn cả đường dẫn ảnh trong registry: cùng một cái bẫy, chỉ khác là hỏng lúc chạy
 * chứ không phải lúc dựng.
 *
 *   node scripts/check-case.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const SRC = path.join(ROOT, 'src');

/** Tên thật của mọi tệp, tra theo bản chữ thường. */
const realByLower = new Map();
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'node_modules' || e.name === '.next' || e.name === '.git') continue;
      walk(p);
    } else {
      realByLower.set(p.toLowerCase(), p);
    }
  }
})(ROOT);

const problems = [];

/** Đường dẫn có tồn tại ĐÚNG hoa/thường không. */
function checkPath(absNoExt, from, spec) {
  const exts = ['', '.ts', '.tsx', '.js', '.jsx', '.mjs', '/index.ts', '/index.tsx'];
  for (const ext of exts) {
    const want = absNoExt + ext;
    const real = realByLower.get(want.toLowerCase());
    if (!real) continue;
    if (real !== want) {
      problems.push({ from, spec, want, real });
    }
    return true;
  }
  return false;
}

const files = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(tsx?|mjs)$/.test(e.name)) files.push(p);
  }
})(SRC);

for (const f of files) {
  const src = fs.readFileSync(f, 'utf8');
  for (const m of src.matchAll(/from\s+'([^']+)'/g)) {
    const spec = m[1];
    let abs = null;
    if (spec.startsWith('@/')) abs = path.join(SRC, spec.slice(2));
    else if (spec.startsWith('.')) abs = path.resolve(path.dirname(f), spec);
    else continue; // gói ngoài
    checkPath(abs, path.relative(ROOT, f), spec);
  }
}

// Ảnh trong registry
const reg = path.join(SRC, 'data/assets.generated.ts');
if (fs.existsSync(reg)) {
  const s = fs.readFileSync(reg, 'utf8');
  for (const m of s.matchAll(/'(\/assets\/[^']+\.webp)'/g)) {
    const want = path.join(ROOT, 'public', m[1]);
    const real = realByLower.get(want.toLowerCase());
    if (!real) problems.push({ from: 'assets.generated.ts', spec: m[1], want, real: '(không có tệp)' });
    else if (real !== want) problems.push({ from: 'assets.generated.ts', spec: m[1], want, real });
  }
}

if (problems.length === 0) {
  console.log('Hoa/thường khớp hết. Dựng trên Linux sẽ không vỡ vì lý do này.');
} else {
  for (const p of problems) {
    console.log(`\n${p.from}\n  viết:  ${p.spec}\n  thật:  ${path.relative(ROOT, p.real).replace(/\\/g, '/')}`);
  }
  console.log(`\n${problems.length} chỗ lệch hoa/thường.`);
  process.exitCode = 1;
}
