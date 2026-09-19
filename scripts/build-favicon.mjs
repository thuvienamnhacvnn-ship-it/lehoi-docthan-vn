/**
 * Gói favicon-32.png thành public/favicon.ico.
 *
 * Next đã sinh /icon.png, nhưng vẫn còn trình duyệt, trình đọc RSS và công cụ kiểm tra
 * gõ thẳng /favicon.ico — thiếu là ăn một dòng 404 trong log mỗi lượt truy cập.
 *
 * Định dạng ICO từ Windows Vista trở đi cho phép nhét nguyên một tệp PNG vào trong,
 * nên chỉ cần viết 6 byte đầu tệp + 16 byte mô tả ảnh rồi dán PNG vào sau.
 *
 *   node scripts/build-favicon.mjs
 */
import fs from 'node:fs/promises';
import path from 'node:path';

const src = path.join(process.cwd(), 'public', 'icons', 'favicon-32.png');
const out = path.join(process.cwd(), 'public', 'favicon.ico');
const png = await fs.readFile(src);

const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // dự trữ, luôn 0
header.writeUInt16LE(1, 2); // 1 = ảnh biểu tượng (không phải con trỏ chuột)
header.writeUInt16LE(1, 4); // số ảnh trong tệp

const entry = Buffer.alloc(16);
entry.writeUInt8(32, 0); // rộng 32px
entry.writeUInt8(32, 1); // cao 32px
entry.writeUInt8(0, 2); // số màu bảng màu — 0 vì ảnh màu thật
entry.writeUInt8(0, 3); // dự trữ
entry.writeUInt16LE(1, 4); // số lớp
entry.writeUInt16LE(32, 6); // bit trên mỗi điểm ảnh
entry.writeUInt32LE(png.length, 8);
entry.writeUInt32LE(header.length + entry.length, 12); // PNG bắt đầu ở đâu

await fs.writeFile(out, Buffer.concat([header, entry, png]));
const { size } = await fs.stat(out);
console.log(`favicon.ico  ${(size / 1024).toFixed(1)} KB`);
