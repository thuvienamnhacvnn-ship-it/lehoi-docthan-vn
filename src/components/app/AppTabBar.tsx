'use client';

import { L } from '../system/L';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useI18n } from '@/i18n/I18nProvider';

/**
 * THANH TAB DƯỚI — phần làm cho bản điện thoại ra dáng ứng dụng chứ không phải trang web thu nhỏ.
 *
 * Cách hành xử lấy từ các app sự kiện tốt:
 *  - năm tab cố định, ngón cái với tới được, nhãn luôn hiện (biểu tượng không chữ thì đoán mò);
 *  - vệt vàng trượt sang tab đang mở thay vì hiện/tắt phựt một cái;
 *  - cuộn xuống thì thanh tụt đi nhường màn hình cho nội dung, cuộn lên là hiện lại ngay;
 *  - chừa đúng vạch home của iPhone bằng safe-area, không đoán bằng số px.
 *
 * Chỉ có trên màn hình hẹp; desktop vẫn dùng thanh trên + menu lớn.
 */

interface Tab {
  href: string;
  /** Khoá trong t.appTabs — nhãn lấy theo thứ tiếng đang đọc. */
  labelKey: 'festival' | 'program' | 'map' | 'tickets' | 'account';
  /** Vẽ tay để không phải kéo thêm thư viện icon; nét mảnh cho hợp chữ. */
  icon: (active: boolean) => React.ReactNode;
  /** Các trang con cũng phải làm sáng tab cha. */
  match?: string[];
}

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const TABS: Tab[] = [
  {
    href: '/',
    labelKey: 'festival',
    icon: (a) => (
      <>
        <path d="M3 10.5 12 3l9 7.5" {...stroke} />
        <path d="M5.5 9.5V20h13V9.5" {...stroke} />
        {a && <path d="M9.5 20v-5h5v5" {...stroke} />}
      </>
    ),
    match: ['/experience', '/one-beat-night', '/community', '/mega-zone'],
  },
  {
    href: '/program',
    labelKey: 'program',
    icon: () => (
      <>
        <rect x="3.5" y="5" width="17" height="15.5" rx="3" {...stroke} />
        <path d="M3.5 9.5h17M8 3v4M16 3v4" {...stroke} />
        <path d="M7.5 13.5h5M7.5 16.5h8" {...stroke} />
      </>
    ),
    match: ['/artists', '/news'],
  },
  {
    href: '/map',
    labelKey: 'map',
    icon: () => (
      <>
        <path d="m3.5 6.5 5.5-2 6 2.4 5.5-2v14l-5.5 2-6-2.4-5.5 2z" {...stroke} />
        <path d="M9 4.5v14.4M15 6.9v14.3" {...stroke} />
      </>
    ),
    match: ['/visitor-guide'],
  },
  {
    href: '/tickets',
    labelKey: 'tickets',
    icon: () => (
      <>
        <path d="M3.5 8.5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v1.3a2.2 2.2 0 0 0 0 4.4v1.3a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-1.3a2.2 2.2 0 0 0 0-4.4z" {...stroke} />
        <path d="M14 7v2M14 11v2M14 15v2" {...stroke} strokeDasharray="0.1 2.6" />
      </>
    ),
    match: ['/partners', '/press'],
  },
  {
    href: '/account',
    labelKey: 'account',
    icon: () => (
      <>
        <circle cx="12" cy="8.5" r="3.6" {...stroke} />
        <path d="M4.8 20.2a7.4 7.4 0 0 1 14.4 0" {...stroke} />
      </>
    ),
    match: ['/faq', '/contact'],
  },
];

export function AppTabBar() {
  const { t } = useI18n();
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  const index = (() => {
    const exact = TABS.findIndex((t) => t.href === pathname);
    if (exact !== -1) return exact;
    const sub = TABS.findIndex((t) => t.match?.some((m) => pathname.startsWith(m)));
    return sub === -1 ? 0 : sub;
  })();

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const dy = y - lastY.current;
      // Ngưỡng 8px để thanh không rung khi ngón tay chỉ nhích nhẹ
      if (Math.abs(dy) > 8) {
        setHidden(dy > 0 && y > 220);
        lastY.current = y;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      aria-label={t.appTabs.nav}
      className="app-tabbar lg:hidden"
      data-hidden={hidden || undefined}
    >
      <div className="app-tabbar__glass" aria-hidden />
      <div className="app-tabbar__row">
        {/* Vệt sáng trượt theo tab đang mở */}
        <span
          aria-hidden
          className="app-tabbar__marker"
          style={{ transform: `translateX(${index * 100}%)` }}
        >
          <span className="app-tabbar__marker-bar" />
          <span className="app-tabbar__marker-glow" />
        </span>

        {TABS.map((tab, i) => {
          const active = i === index;
          return (
            <L
              key={tab.href}
              href={tab.href}
              aria-current={active ? 'page' : undefined}
              className="app-tab"
              data-active={active || undefined}
            >
              <svg viewBox="0 0 24 24" width="23" height="23" aria-hidden className="app-tab__icon">
                {tab.icon(active)}
              </svg>
              <span className="app-tab__label">{t.appTabs[tab.labelKey]}</span>
            </L>
          );
        })}
      </div>
    </nav>
  );
}
