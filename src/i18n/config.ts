/**
 * Năm thứ tiếng của ONE BEAT NIGHT.
 *
 * Tiếng Việt là bản gốc — mọi câu chữ viết ở `messages/vi.ts` trước, bốn bản kia dịch theo.
 * Đường dẫn luôn có mã ngôn ngữ (`/vi/...`, `/en/...`) để không bao giờ phải đoán xem
 * một URL trần thuộc thứ tiếng nào; `/` do middleware đưa về đúng bản.
 */

export const LOCALES = ['vi', 'en', 'zh', 'ja', 'ko'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'vi';

export interface LocaleInfo {
  /** Tên thứ tiếng viết bằng chính thứ tiếng đó — người đọc nhận ra ngay. */
  native: string;
  /** Viết tắt hiện trên nút đổi ngôn ngữ ở thanh điều hướng. */
  short: string;
  /** Giá trị cho thuộc tính lang của thẻ html và cho hreflang. */
  html: string;
  /** Mã vùng cho Open Graph. */
  og: string;
  /** Thứ tiếng này có dùng chữ Hán/Kana/Hangul không — quyết định bộ chữ nào được nạp. */
  cjk: boolean;
}

export const LOCALE_INFO: Record<Locale, LocaleInfo> = {
  vi: { native: 'Tiếng Việt', short: 'VI', html: 'vi', og: 'vi_VN', cjk: false },
  en: { native: 'English', short: 'EN', html: 'en', og: 'en_US', cjk: false },
  zh: { native: '简体中文', short: '中', html: 'zh-Hans', og: 'zh_CN', cjk: true },
  ja: { native: '日本語', short: '日', html: 'ja', og: 'ja_JP', cjk: true },
  ko: { native: '한국어', short: '한', html: 'ko', og: 'ko_KR', cjk: true },
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/**
 * Chọn thứ tiếng hợp nhất từ header Accept-Language.
 * Chỉ đọc phần mã ngôn ngữ, bỏ mã vùng: `zh-TW` và `zh-CN` đều về `zh`.
 */
export function pickLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return DEFAULT_LOCALE;

  const wanted = acceptLanguage
    .split(',')
    .map((part) => {
      const [tag, q] = part.trim().split(';q=');
      return { tag: tag.trim().toLowerCase(), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of wanted) {
    const base = tag.split('-')[0];
    if (isLocale(base)) return base;
  }
  return DEFAULT_LOCALE;
}

/** Ghép đường dẫn có mã ngôn ngữ. `localeHref('en', '/tickets')` -> `/en/tickets`. */
export function localeHref(locale: Locale, path: string): string {
  const clean = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${clean}`;
}
