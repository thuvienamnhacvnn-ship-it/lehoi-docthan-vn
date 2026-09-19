import type { MetadataRoute } from 'next';

/**
 * Cho máy tìm kiếm vào đọc mọi trang, trừ trang mất mạng (nó không có nội dung thật)
 * và trang tài khoản (chỉ có dữ liệu lưu trên máy người dùng, lên kết quả tìm kiếm là vô nghĩa).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/offline', '/account'] }],
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3045'}/sitemap.xml`,
  };
}
