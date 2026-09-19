import 'server-only';

import type { Locale } from './config';
import type { MessagesFor } from './types';

/**
 * Nạp bộ chữ cho một thứ tiếng, phía máy chủ.
 *
 * Năm bản nằm ở năm import động nên bản nào không dùng tới thì không vào gói JS gửi
 * xuống trình duyệt — mở trang tiếng Việt không phải tải kèm bốn thứ tiếng kia.
 */
const loaders: Record<Locale, () => Promise<{ default: MessagesFor }>> = {
  vi: () => import('./messages/vi').then((m) => ({ default: m.vi as MessagesFor })),
  en: () => import('./messages/en').then((m) => ({ default: m.en })),
  zh: () => import('./messages/zh').then((m) => ({ default: m.zh })),
  ja: () => import('./messages/ja').then((m) => ({ default: m.ja })),
  ko: () => import('./messages/ko').then((m) => ({ default: m.ko })),
};

export async function getMessages(locale: Locale): Promise<MessagesFor> {
  const mod = await loaders[locale]();
  return mod.default;
}
