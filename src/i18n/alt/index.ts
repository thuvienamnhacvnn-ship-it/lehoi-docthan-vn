import type { Locale } from '../config';
import type { AltFor } from './types';
import { altVi } from './vi';
import { altEn } from './en';
import { altZh } from './zh';
import { altJa } from './ja';
import { altKo } from './ko';

/** Mô tả ảnh theo thứ tiếng. Nhẹ nên nạp thẳng, không cần tách gói. */
const TABLE: Record<Locale, AltFor> = {
  vi: altVi,
  en: altEn,
  zh: altZh,
  ja: altJa,
  ko: altKo,
};

/**
 * Mô tả một tấm ảnh. Ảnh nào chưa có trong bảng (ảnh mới thêm chưa kịp viết mô tả)
 * thì trả về chuỗi rỗng — alt rỗng đúng chuẩn cho ảnh trang trí, còn hơn đọc lên
 * một câu sai thứ tiếng.
 */
export function altFor(locale: Locale, assetId: string): string {
  return (TABLE[locale] as Record<string, string>)[assetId] ?? '';
}
