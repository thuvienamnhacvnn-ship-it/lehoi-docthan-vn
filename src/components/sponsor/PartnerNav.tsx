'use client';

import { useEffect, useRef, useState } from 'react';
import { partnerPortalModules } from '@/data/sponsor';

/**
 * Điều hướng phụ dính theo trang đối tác (§12).
 *
 * Xác định mục đang xem bằng cách đo vị trí từng mục khi cuộn, không dùng
 * IntersectionObserver: trên màn hình hẹp có lúc không mục nào lọt vào dải quan sát,
 * khi đó IO không bắn sự kiện và thanh này kẹt ở mục cũ đã cuộn qua từ lâu.
 * Trên mobile, viên đang xem được kéo vào tầm nhìn của dải cuộn ngang.
 */
export function PartnerNav() {
  const [active, setActive] = useState(partnerPortalModules[0].id);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const targets = partnerPortalModules
      .map((m) => document.getElementById(m.anchor.slice(1)))
      .filter((el): el is HTMLElement => Boolean(el));
    if (targets.length === 0) return;

    let raf = 0;
    const measure = () => {
      raf = 0;
      const line = window.innerHeight * 0.3;
      let current = targets[0].id;
      for (const t of targets) {
        if (t.getBoundingClientRect().top <= line) current = t.id;
        else break;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const pill = list.querySelector<HTMLElement>(`[data-module="${active}"]`);
    if (!pill) return;
    const left = pill.offsetLeft - list.clientWidth / 2 + pill.clientWidth / 2;
    list.scrollTo({ left: Math.max(0, left), behavior: 'smooth' });
  }, [active]);

  return (
    <nav
      aria-label="Mục lục trang đối tác"
      className="sticky z-40 border-y backdrop-blur"
      style={{ top: 'var(--nav-h)', borderColor: 'var(--env-line)', background: 'rgb(5 5 7 / 0.72)' }}
    >
      <div className="wrap">
        <ul ref={listRef} className="rail py-3">
          {partnerPortalModules.map((m) => (
            <li key={m.id}>
              <a
                href={m.anchor}
                data-module={m.id}
                className="block whitespace-nowrap rounded-full px-3.5 py-1.5 text-[0.76rem] font-semibold transition-colors"
                style={{
                  background: active === m.id ? 'var(--color-gold)' : 'transparent',
                  color: active === m.id ? '#16120a' : 'rgb(244 241 234 / 0.6)',
                }}
                aria-current={active === m.id ? 'true' : undefined}
              >
                {m.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
