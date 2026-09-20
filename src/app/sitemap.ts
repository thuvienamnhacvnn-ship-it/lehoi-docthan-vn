import type { MetadataRoute } from 'next';
import { LOCALES, LOCALE_INFO } from '@/i18n/config';
import { siteUrl } from '@/lib/site-url';

/** Trang tĩnh, không có nội dung sinh động -> liệt kê thẳng, không cần đọc CSDL. */
const PATHS: { path: string; priority: number }[] = [
  { path: '', priority: 1 },
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

/**
 * Mỗi trang xuất hiện năm lần, một lần cho mỗi thứ tiếng, và mỗi mục khai luôn bốn bản
 * còn lại ở `alternates` — máy tìm kiếm cần biết đây là cùng một trang chứ không phải
 * năm trang trùng nội dung.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const now = new Date();

  return LOCALES.flatMap((locale) =>
    PATHS.map(({ path, priority }) => ({
      url: `${base}/${locale}${path}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority,
      alternates: {
        languages: Object.fromEntries([
          ...LOCALES.map((l) => [LOCALE_INFO[l].html, `${base}/${l}${path}`]),
          ['x-default', `${base}/vi${path}`],
        ]),
      },
    })),
  );
}
