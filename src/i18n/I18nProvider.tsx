'use client';

import { createContext, useContext, type ReactNode } from 'react';
import type { Locale } from './config';
import type { MessagesFor } from './types';

/**
 * Đưa bộ chữ và mã ngôn ngữ xuống cho các component chạy phía trình duyệt.
 *
 * Component máy chủ thì gọi thẳng `getMessages(locale)` — không cần context. Cái này chỉ
 * dành cho những chỗ có tương tác (bộ lọc lịch trình, ví vé, menu lớn…), vì chúng không
 * nhận được params của route.
 */

interface I18nValue {
  locale: Locale;
  t: MessagesFor;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({
  locale,
  messages,
  children,
}: {
  locale: Locale;
  messages: MessagesFor;
  children: ReactNode;
}) {
  return <I18nContext.Provider value={{ locale, t: messages }}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    // Quên bọc provider thì hỏng câm lặng rất khó tìm — báo thẳng ra cho biết đường chữa.
    throw new Error('useI18n phải nằm trong <I18nProvider>. Kiểm tra lại layout của [locale].');
  }
  return ctx;
}

/** Ghép đường dẫn theo thứ tiếng đang mở — dùng cho mọi <Link> trong component client. */
export function useLocaleHref(): (path: string) => string {
  const { locale } = useI18n();
  return (path: string) => {
    const clean = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
    return `/${locale}${clean}`;
  };
}
