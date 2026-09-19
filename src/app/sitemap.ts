import type { MetadataRoute } from 'next';

/** Trang tĩnh, không có nội dung sinh động -> liệt kê thẳng, không cần đọc CSDL. */
const ROUTES: { path: string; priority: number }[] = [
  { path: '/', priority: 1 },
  { path: '/one-beat-night', priority: 0.8 },
  { path: '/experience', priority: 0.9 },
  { path: '/program', priority: 0.9 },
  { path: '/map', priority: 0.8 },
  { path: '/artists', priority: 0.8 },
  { path: '/mega-zone', priority: 0.7 },
  { path: '/community', priority: 0.7 },
  { path: '/tickets', priority: 1 },
  { path: '/partners', priority: 0.8 },
  { path: '/press', priority: 0.6 },
  { path: '/news', priority: 0.7 },
  { path: '/gallery', priority: 0.6 },
  { path: '/visitor-guide', priority: 0.7 },
  { path: '/faq', priority: 0.6 },
  { path: '/contact', priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3045';
  const now = new Date();
  return ROUTES.map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority,
  }));
}
