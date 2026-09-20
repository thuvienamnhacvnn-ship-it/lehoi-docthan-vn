import type { MetadataRoute } from 'next';
import { LOCALES } from '@/i18n/config';

/**
 * Cho máy tìm kiếm vào đọc mọi trang, trừ trang mất mạng (không có nội dung thật) và
 * trang tài khoản (chỉ chứa dữ liệu lưu trên máy người dùng). Cả hai tồn tại ở năm
 * thứ tiếng nên phải chặn đủ năm đường dẫn.
 */
export default function robots(): MetadataRoute.Robots {
  const disallow = LOCALES.flatMap((l) => [`/${l}/offline`, `/${l}/account`]);
  return {
    rules: [{ userAgent: '*', allow: '/', disallow }],
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3045'}/sitemap.xml`,
  };
}
