'use client';

import { L } from '../system/L';
import { useEffect, useRef, useState } from 'react';
import { AssetImage } from '@/components/media/AssetImage';
import { StageLights } from '@/components/night/StageLights';
import { Pending } from '@/components/system/Pending';
import { menuNav } from '@/data/festival';
import { useI18n } from '@/i18n/I18nProvider';

/**
 * MENU LỚN — bản dựng lại cho ra dáng một lễ hội lớn.
 *
 * Bản cũ chỉ là bốn cột chữ đổ ra màn hình. Bản này là một màn hình riêng:
 *  - nền có dàn đèn chạy nhẹ và một lớp ảnh mờ đổi theo mục đang trỏ tới;
 *  - mỗi mục là một dòng lớn có số thứ tự, gạch vàng kéo ngang khi trỏ tới;
 *  - cột phải là khung xem trước: ảnh của mục đang trỏ + mô tả + thông tin lễ hội;
 *  - mở ra thì các dòng lần lượt trồi lên, không phải hiện cả khối cùng lúc.
 *
 * Bàn phím: Esc đóng, Tab quanh vòng trong menu, mở ra thì tiêu điểm nhảy vào mục đầu.
 */

let running = 0;
/** Đánh số chạy liên tục qua mọi nhóm — các nhóm không bằng số mục nên không thể tính bằng công thức. */
const groups = menuNav.map((g) => ({
  ...g,
  items: g.items.map((i) => ({ ...i, groupKey: g.key, n: ++running })),
}));

const allItems = groups.flatMap((g) => g.items);

export function MegaMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useI18n();
  const [hovered, setHovered] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const active = allItems.find((i) => i.href === hovered) ?? allItems[0];

  useEffect(() => {
    if (!open) {
      setHovered(null);
      return;
    }
    const t = window.setTimeout(() => firstLinkRef.current?.focus(), 120);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;
      const panel = panelRef.current;
      if (!panel) return;
      const focusable = panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <div
      id="site-menu"
      ref={panelRef}
      hidden={!open}
      className="fixed inset-0 z-99 overflow-y-auto"
      style={{ background: '#050507' }}
      role="dialog"
      aria-modal="true"
      aria-label={t.common.menuDialog}
    >
      {/* Nền: ảnh của mục đang trỏ + dàn đèn chạy nhẹ */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {allItems.map((item) => (
          <div
            key={item.href}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: active.href === item.href ? 0.22 : 0 }}
          >
            <AssetImage id={item.assetId} sizes="full" fill />
          </div>
        ))}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(105deg, #050507 18%, rgb(5 5 7 / 0.72) 55%, rgb(5 5 7 / 0.9))' }}
        />
        <StageLights className="mix-blend-screen opacity-60" count={7} intensity={0.5} bpm={92} direction="up" />
      </div>

      <div
        className="wrap relative flex min-h-full flex-col justify-between"
        style={{ paddingTop: 'calc(var(--nav-h) + 2.5rem)', paddingBottom: '3rem' }}
      >
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.85fr] lg:items-start">
          {/* ---- Danh sách mục ---- */}
          <nav aria-label={t.common.fullNav}>
            {groups.map((group, gi) => (
              <div key={group.key} className="mb-9 last:mb-0">
                <p
                  className="kicker mb-3"
                  style={{
                    color: 'rgb(244 241 234 / 0.35)',
                    opacity: open ? 1 : 0,
                    transform: open ? 'none' : 'translateY(12px)',
                    transition: `opacity 420ms ${gi * 60 + 80}ms, transform 520ms ${gi * 60 + 80}ms var(--ease-reveal)`,
                  }}
                >
                  {t.menu.groups[group.key]}
                </p>

                <ul>
                  {group.items.map((item) => {
                    const isOn = active.href === item.href;
                    const order = item.n - 1;
                    return (
                      <li key={item.href}>
                        <L
                          ref={item.n === 1 ? firstLinkRef : undefined}
                          href={item.href}
                          onClick={onClose}
                          onMouseEnter={() => setHovered(item.href)}
                          onFocus={() => setHovered(item.href)}
                          className="group relative flex items-baseline gap-4 py-2.5 sm:gap-6"
                          style={{
                            opacity: open ? 1 : 0,
                            transform: open ? 'none' : 'translateY(18px)',
                            transition: `opacity 460ms ${order * 45 + 140}ms, transform 620ms ${order * 45 + 140}ms var(--ease-reveal)`,
                          }}
                        >
                          <span
                            className="num-oversized w-8 shrink-0 text-[0.8rem] transition-colors duration-300"
                            style={{ color: isOn ? 'var(--color-gold)' : 'rgb(244 241 234 / 0.28)' }}
                          >
                            {String(item.n).padStart(2, '0')}
                          </span>

                          <span className="min-w-0">
                            <span
                              className="font-display block text-[clamp(1.5rem,3.4vw,2.6rem)] leading-[1.05] transition-[color,transform] duration-300"
                              style={{
                                color: isOn ? '#ffffff' : 'rgb(244 241 234 / 0.72)',
                                transform: isOn ? 'translateX(10px)' : 'none',
                              }}
                            >
                              {t.menu.items[item.href].label}
                            </span>
                            <span
                              className="mt-0.5 block text-[0.8rem] transition-[opacity,transform] duration-300"
                              style={{
                                color: 'rgb(244 241 234 / 0.5)',
                                opacity: isOn ? 1 : 0.55,
                                transform: isOn ? 'translateX(10px)' : 'none',
                              }}
                            >
                              {t.menu.items[item.href].desc}
                            </span>
                          </span>

                          {/* Gạch vàng kéo ngang khi trỏ tới */}
                          <span
                            aria-hidden
                            className="absolute bottom-0 left-0 h-px origin-left transition-transform duration-500"
                            style={{
                              width: '100%',
                              background:
                                'linear-gradient(90deg, var(--color-gold), rgb(245 185 66 / 0.15) 70%, transparent)',
                              transform: isOn ? 'scaleX(1)' : 'scaleX(0)',
                              transitionTimingFunction: 'var(--ease-reveal)',
                            }}
                          />
                        </L>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>

          {/* ---- Khung xem trước ---- */}
          <aside
            className="hidden lg:block lg:sticky lg:top-[calc(var(--nav-h)+2.5rem)]"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? 'none' : 'translateY(24px)',
              transition: 'opacity 520ms 220ms, transform 700ms 220ms var(--ease-reveal)',
            }}
          >
            <div className="overflow-hidden rounded-[var(--radius-lg)] border" style={{ borderColor: 'rgb(244 241 234 / 0.14)' }}>
              <div className="relative">
                {allItems.map((item) => (
                  <div
                    key={item.href}
                    className="transition-opacity duration-500"
                    style={{
                      opacity: active.href === item.href ? 1 : 0,
                      position: active.href === item.href ? 'relative' : 'absolute',
                      inset: active.href === item.href ? undefined : 0,
                    }}
                  >
                    <AssetImage id={item.assetId} sizes="third" ratio="4 / 3" className="w-full" scrim="bottom" />
                  </div>
                ))}
              </div>
              <div className="p-6">
                <p className="kicker" style={{ color: 'var(--color-gold)' }}>
                  {t.menu.groups[active.groupKey]}
                </p>
                <p className="font-display mt-2 text-[1.35rem]" style={{ color: '#f4f1ea' }}>
                  {t.menu.items[active.href].label}
                </p>
                <p className="mt-2 text-[0.86rem] leading-relaxed" style={{ color: 'rgb(244 241 234 / 0.58)' }}>
                  {t.menu.items[active.href].desc}
                </p>
              </div>
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-5 text-[0.78rem]">
              <div>
                <dt className="kicker mb-2" style={{ color: 'rgb(244 241 234 / 0.32)' }}>
                  {t.common.eventDate}
                </dt>
                <dd>
                  <Pending k="EVENT_DATE" tone="quiet" />
                </dd>
              </div>
              <div>
                <dt className="kicker mb-2" style={{ color: 'rgb(244 241 234 / 0.32)' }}>
                  {t.common.venue}
                </dt>
                <dd>
                  <Pending k="VENUE" tone="quiet" />
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <L
                href="/tickets"
                onClick={onClose}
                className="fx-b-press rounded-full px-5 py-2.5 text-[0.82rem] font-bold"
                style={{ background: 'var(--color-gold)', color: '#16120a' }}
              >
                {t.common.ticketsFull}
              </L>
              <L
                href="/partners"
                onClick={onClose}
                className="fx-b-fill fx-b-press rounded-full border px-5 py-2.5 text-[0.82rem] font-semibold"
                style={{ borderColor: 'rgb(244 241 234 / 0.25)', color: '#f4f1ea' }}
              >
                {t.common.becomePartner}
              </L>
            </div>
          </aside>
        </div>

        {/* ---- Chân menu ---- */}
        <div
          className="mt-12 border-t pt-6"
          style={{
            borderColor: 'rgb(244 241 234 / 0.12)',
            opacity: open ? 1 : 0,
            transition: 'opacity 500ms 420ms',
          }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="font-display gold-text text-[0.95rem] tracking-[0.16em]">
              {t.brand.slogan.toUpperCase()}
            </p>
            <p className="text-[0.75rem]" style={{ color: 'rgb(244 241 234 / 0.4)' }}>
              {t.brand.city} · {t.brand.country}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
