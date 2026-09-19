'use client';

import { L } from '../system/L';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { primaryNav, festival } from '@/data/festival';
import { MegaMenu } from '@/components/shell/MegaMenu';
import { useEnvironment } from '@/components/system/EnvironmentProvider';
import { LanguageSwitcher } from '@/components/shell/LanguageSwitcher';
import { useI18n } from '@/i18n/I18nProvider';

/**
 * Điều hướng (§15): desktop tối giản, dính nhưng kín đáo; đổi sắc theo môi trường NGÀY/ĐÊM.
 * Mobile: menu toàn màn hình, vùng chạm lớn. Nút vé luôn với tới được mà không phiền.
 */
export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { env, progress } = useEnvironment();
  const { t } = useI18n();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-100 transition-[background-color,backdrop-filter,border-color] duration-500"
        style={{
          height: 'var(--nav-h)',
          backgroundColor: scrolled
            ? env === 'day'
              ? 'rgb(244 241 234 / 0.82)'
              : 'rgb(5 5 7 / 0.72)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(18px) saturate(140%)' : 'none',
          borderBottom: `1px solid ${scrolled ? 'var(--env-line)' : 'transparent'}`,
          // Chưa cuộn = đang nằm trên banner tối, kể cả ở trang giao diện sáng -> chữ sáng.
          color: scrolled ? 'var(--env-fg)' : '#f4f1ea',
        }}
      >
        <div className="wrap flex h-full items-center justify-between gap-6">
          <L href="/" className="group flex items-center gap-3" aria-label={`${t.brand.name} — ${t.common.home}`}>
            <img
              src="/assets/KIT-01/02-emblem-trong-suot-480.webp"
              alt=""
              aria-hidden
              width={44}
              height={44}
              className="fx-i-beat h-9 w-9 object-contain"
            />
            <span className="hidden sm:block leading-none">
              <span className="font-display text-[0.95rem] tracking-[0.01em]">ONE BEAT NIGHT</span>
              <span className="kicker mt-1 block text-[0.54rem]">{t.brand.subtitle}</span>
            </span>
          </L>

          <nav aria-label={t.common.mainNav} className="hidden items-center gap-7 lg:flex">
            {primaryNav.map((item) => {
              const active = pathname.endsWith(item.href);
              return (
                <L
                  key={item.href}
                  href={item.href}
                  className="fx-t-underline relative py-3 text-[0.86rem] font-medium transition-opacity hover:opacity-100"
                  style={{ opacity: active ? 1 : 0.68 }}
                >
                  {t.nav[item.key]}
                  {active && (
                    <span
                      className="absolute bottom-1.5 left-0 h-px w-full"
                      style={{ background: 'var(--env-accent)' }}
                    />
                  )}
                </L>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />
            <L
              href="/tickets"
              className="fx-b-press rounded-full px-4 py-2 text-[0.8rem] font-bold tracking-wide"
              style={{ background: 'var(--color-gold)', color: '#16120a' }}
            >
              {t.common.tickets}
            </L>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="site-menu"
              className="fx-b-press group flex h-11 items-center gap-2.5 rounded-full border pl-4 pr-3.5 text-[0.78rem] font-bold uppercase tracking-[0.18em] transition-colors duration-300"
              style={{
                borderColor: open ? 'var(--color-gold)' : 'var(--env-card-line)',
                color: open ? 'var(--color-gold)' : 'inherit',
              }}
            >
              <span className="hidden sm:inline">{open ? t.common.close : t.common.menu}</span>
              <span className="sr-only sm:hidden">{open ? t.common.closeMenu : t.common.openMenu}</span>
              <span className="relative block h-3 w-5" aria-hidden>
                <span
                  className="absolute left-0 block h-px w-full transition-all duration-300"
                  style={{
                    background: 'currentColor',
                    top: open ? '6px' : '1px',
                    transform: open ? 'rotate(45deg)' : 'none',
                  }}
                />
                <span
                  className="absolute left-0 block h-px transition-all duration-300"
                  style={{
                    background: 'currentColor',
                    top: '6px',
                    width: open ? '0%' : '70%',
                    opacity: open ? 0 : 1,
                  }}
                />
                <span
                  className="absolute left-0 block h-px w-full transition-all duration-300"
                  style={{
                    background: 'currentColor',
                    top: open ? '6px' : '11px',
                    transform: open ? 'rotate(-45deg)' : 'none',
                  }}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Tiến độ cuộn — mảnh, đổi màu theo môi trường */}
        <div
          className="absolute inset-x-0 bottom-0 h-px origin-left"
          style={{
            transform: `scaleX(${progress})`,
            background: 'linear-gradient(90deg, var(--color-purple), var(--color-magenta), var(--color-gold))',
            opacity: scrolled ? 1 : 0,
            transition: 'opacity 400ms',
          }}
        />
      </header>

      <MegaMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
