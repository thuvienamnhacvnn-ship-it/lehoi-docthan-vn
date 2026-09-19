/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ảnh đã được tiền xử lý sang WebP nhiều kích thước bởi scripts/build-assets.mjs,
  // phục vụ bằng <img srcset> nên không cần bộ tối ưu ảnh runtime (và không cần sharp).
  images: { unoptimized: true },
  // Mở dev server bằng 127.0.0.1 vẫn hydrate được.
  allowedDevOrigins: ['127.0.0.1', 'localhost'],
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
