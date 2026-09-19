'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { LOCALES, LOCALE_INFO, type Locale } from '@/i18n/config';
import { useI18n } from '@/i18n/I18nProvider';

/**
 * Nút đổi thứ tiếng.
 *
 * Đổi ngôn ngữ thì GIỮ NGUYÊN trang đang đọc: đang ở `/vi/tickets` bấm sang tiếng Nhật
 * là ra `/ja/tickets`, không bị ném về trang chủ. Lựa chọn được ghi vào cookie để lần
 * sau vào thẳng `/` cũng ra đúng bản, không bị cài đặt máy kéo về.
 *
 * Tên mỗi thứ tiếng viết bằng chính thứ tiếng đó — người Hàn tìm chữ "한국어" nhanh hơn
 * tìm chữ "Tiếng Hàn".
 */
export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, t } = useI18n();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    window.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  /** Bỏ mã ngôn ngữ hiện tại ra khỏi đường dẫn để ghép mã mới vào. */
  const restOfPath = (() => {
    const parts = pathname.split('/').filter(Boolean);
    if (parts[0] && (LOCALES as readonly string[]).includes(parts[0])) parts.shift();
    return parts.length ? `/${parts.join('/')}` : '';
  })();

  const go = (next: Locale) => {
    try {
      document.cookie = `obn-locale=${next}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
    } catch {
      /* chặn cookie thì vẫn đổi được, chỉ là lần sau không nhớ */
    }
    setOpen(false);
    router.push(`/${next}${restOfPath}`);
  };

  return (
    <div ref={boxRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t.common.changeLanguage}
        className="fx-b-press flex h-11 items-center gap-1.5 rounded-full border px-3 text-[0.78rem] font-bold uppercase tracking-[0.12em] transition-colors duration-300"
        style={{
          borderColor: open ? 'var(--color-gold)' : 'var(--env-card-line)',
          color: open ? 'var(--color-gold)' : 'inherit',
        }}
      >
        {/* Quả địa cầu vẽ tay — một biểu tượng ai cũng hiểu, không phụ thuộc chữ nghĩa */}
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden>
          <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="3.6" ry="8.5" fill="none" stroke="currentColor" strokeWidth="1.3" />
          <path d="M3.6 9.4h16.8M3.6 14.6h16.8" fill="none" stroke="currentColor" strokeWidth="1.3" />
        </svg>
        {!compact && <span>{LOCALE_INFO[locale].short}</span>}
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t.common.language}
          className="absolute right-0 top-[calc(100%+8px)] z-10 min-w-[11rem] overflow-hidden rounded-[var(--radius-sm)] border py-1.5 shadow-2xl"
          style={{
            borderColor: 'var(--env-card-line)',
            background: 'color-mix(in srgb, var(--env-bg-2) 96%, transparent)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {LOCALES.map((l) => {
            const active = l === locale;
            return (
              <li key={l} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => go(l)}
                  lang={LOCALE_INFO[l].html}
                  className="flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-[0.86rem] transition-colors"
                  style={{
                    color: active ? 'var(--color-gold)' : 'var(--env-fg)',
                    fontWeight: active ? 700 : 500,
                  }}
                >
                  {LOCALE_INFO[l].native}
                  {active && (
                    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden>
                      <path d="m5 12.5 4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
