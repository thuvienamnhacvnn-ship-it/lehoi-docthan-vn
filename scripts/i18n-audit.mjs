/**
 * Dò những câu tiếng Việt CÒN NẰM CỨNG trong mã nguồn.
 *
 * Bỏ qua chú thích (// và block) vì chú thích viết tiếng Việt là cố ý — chúng dành cho
 * người sửa code, không hiện ra cho khách. Chỉ báo phần chữ thật sự hiển thị:
 * nội dung giữa các thẻ JSX, và giá trị chuỗi của các thuộc tính hay hiện ra
 * (title, alt, label, placeholder, lead, kicker, aria-label…).
 *
 *   node scripts/i18n-audit.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.join(process.cwd(), 'src');
/** Dấu tiếng Việt — đủ để nhận ra một câu tiếng Việt, không nhầm với tiếng Anh. */
const VN = /[àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ]/i;

/** Bỏ chú thích để không đếm nhầm. */
function stripComments(src) {
  return src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
}

const files = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      // Bộ chữ và dữ liệu gốc ĐƯỢC PHÉP chứa tiếng Việt — đó là nguồn.
      if (['i18n', 'data'].includes(e.name)) continue;
      walk(p);
    } else if (/\.tsx?$/.test(e.name)) files.push(p);
  }
})(ROOT);

const ATTRS = /\b(title|alt|label|lead|kicker|placeholder|aria-label|summary|note|description)=["']([^"']{4,})["']/g;

let total = 0;
const report = [];

for (const f of files) {
  const src = stripComments(fs.readFileSync(f, 'utf8'));
  const hits = [];

  // 1. chữ nằm giữa hai thẻ JSX
  for (const m of src.matchAll(/>\s*([^<>{}\n][^<>{}]{3,})\s*</g)) {
    const text = m[1].trim();
    if (VN.test(text)) hits.push(text.slice(0, 64));
  }
  // 2. chuỗi trong các thuộc tính hiện ra màn hình
  for (const m of src.matchAll(ATTRS)) {
    if (VN.test(m[2])) hits.push(`${m[1]}="${m[2].slice(0, 54)}"`);
  }

  if (hits.length) {
    total += hits.length;
    report.push({ file: path.relative(ROOT, f).replace(/\\/g, '/'), hits });
  }
}

report.sort((a, b) => b.hits.length - a.hits.length);
for (const r of report) {
  console.log(`\n${r.file}  (${r.hits.length})`);
  for (const h of r.hits.slice(0, 4)) console.log('   ', h);
  if (r.hits.length > 4) console.log(`    … và ${r.hits.length - 4} chỗ nữa`);
}
console.log(`\nTổng: ${total} chỗ còn tiếng Việt cứng, trong ${report.length} tệp.`);
