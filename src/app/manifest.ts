import type { MetadataRoute } from 'next';
import { festival } from '@/data/festival';

/**
 * Bản kê khai để điện thoại cài web này về màn hình chính và mở ra như một ứng dụng thật
 * (không thanh địa chỉ, có icon riêng, có màn hình chờ).
 *
 * Next dựng file này thành /manifest.webmanifest lúc build, không cần viết tay JSON.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${festival.name} · ${festival.subtitle}`,
    short_name: 'ONE BEAT',
    description: festival.positioning,
    lang: 'vi',
    dir: 'ltr',
    start_url: '/?app=1',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#050507',
    theme_color: '#050507',
    categories: ['entertainment', 'music', 'events', 'lifestyle'],
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
    // Nhấn giữ icon trên màn hình chính sẽ hiện mấy lối tắt này.
    shortcuts: [
      { name: 'Mua vé', short_name: 'Vé', url: '/tickets?app=1', icons: [{ src: '/icons/icon-192.png', sizes: '192x192' }] },
      { name: 'Lịch trình', short_name: 'Lịch', url: '/program?app=1', icons: [{ src: '/icons/icon-192.png', sizes: '192x192' }] },
      { name: 'Bản đồ lễ hội', short_name: 'Bản đồ', url: '/map?app=1', icons: [{ src: '/icons/icon-192.png', sizes: '192x192' }] },
      { name: 'Vé của tôi', short_name: 'Của tôi', url: '/account?app=1', icons: [{ src: '/icons/icon-192.png', sizes: '192x192' }] },
    ],
  };
}
