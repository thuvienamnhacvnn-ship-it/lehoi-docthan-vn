/**
 * Địa chỉ gốc của website.
 *
 * Thứ tự ưu tiên:
 *  1. `NEXT_PUBLIC_SITE_URL` — tên miền thật, đặt trong phần Environment Variables của dự án.
 *  2. `VERCEL_PROJECT_PRODUCTION_URL` — tên miền production Vercel tự gán, ổn định giữa các
 *     lần deploy. Dùng cái này cho sitemap và ảnh chia sẻ.
 *  3. `VERCEL_URL` — địa chỉ của riêng một lần deploy (bản xem trước). Chỉ dùng khi chưa
 *     có hai cái trên.
 *  4. localhost — lúc chạy ở máy.
 *
 * Trước đây mọi nơi đều ghi cứng `http://localhost:3045`, nên bản deploy khai sitemap,
 * hreflang và ảnh chia sẻ trỏ về máy cá nhân — máy tìm kiếm và Facebook không lấy được gì.
 */
export function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, '');

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;

  return 'http://localhost:3045';
}
