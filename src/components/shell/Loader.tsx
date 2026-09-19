'use client';

import { useEffect, useState } from 'react';

/**
 * Màn chờ điện ảnh quanh biểu tượng chính (§19). Ngắn: tắt ngay khi trang sẵn sàng,
 * chặn trên tối đa 1100ms, và chỉ hiện một lần mỗi phiên.
 */
export function Loader() {
  const [show, setShow] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('obn-loaded')) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sessionStorage.setItem('obn-loaded', '1');
      return;
    }
    setShow(true);
    const finish = () => {
      sessionStorage.setItem('obn-loaded', '1');
      setLeaving(true);
      window.setTimeout(() => setShow(false), 520);
    };
    const hard = window.setTimeout(finish, 1100);
    const soft = window.setTimeout(finish, 620);
    return () => {
      window.clearTimeout(hard);
      window.clearTimeout(soft);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-200 grid place-items-center transition-opacity duration-500"
      style={{ background: '#050507', opacity: leaving ? 0 : 1, pointerEvents: leaving ? 'none' : 'auto' }}
    >
      <div className="relative grid place-items-center">
        <span
          className="absolute h-40 w-40 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgb(123 44 255 / 0.45), transparent 68%)',
            animation: 'obn-pulse 1.6s var(--ease-pulse) infinite',
          }}
        />
        <img
          src="/assets/KIT-01/02-emblem-trong-suot-480.webp"
          alt=""
          width={112}
          height={112}
          className="relative h-24 w-24 object-contain"
          style={{ animation: 'obn-reveal 700ms var(--ease-reveal) both' }}
        />
      </div>
      <p
        className="kicker absolute bottom-16"
        style={{ color: 'rgb(244 241 234 / 0.4)', animation: 'obn-reveal 700ms 160ms var(--ease-reveal) both' }}
      >
        One Beat Night
      </p>
    </div>
  );
}
