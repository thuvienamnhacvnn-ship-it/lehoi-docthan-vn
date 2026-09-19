'use client';

import { useEffect, useRef, useState } from 'react';
import { AssetImage } from '@/components/media/AssetImage';
import { getAssets } from '@/lib/assets';

/**
 * TƯƠNG TÁC CHỮ KÝ F — BỨC TƯỜNG HÌNH ẢNH TỪ TÍNH (§17-F).
 *
 * Ảnh phản ứng nhẹ với con trỏ (nghiêng + trồi lên), bấm thì mở lớn kiểu điện ảnh.
 * Hiệu ứng từ tính chỉ bật trên thiết bị có chuột thật và khi người dùng không tắt chuyển động.
 */
export function MediaWall({ ids, columns = 4 }: { ids: string[]; columns?: number }) {
  const assets = getAssets(ids);
  const [open, setOpen] = useState<string | null>(null);
  const [magnetic, setMagnetic] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setMagnetic(fine && !reduced);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const openAsset = assets.find((a) => a.id === open) ?? null;

  return (
    <>
      <div
        className="grid gap-3"
        style={{ gridTemplateColumns: `repeat(auto-fill, minmax(min(100%, ${100 / columns > 20 ? 240 : 200}px), 1fr))` }}
      >
        {assets.map((a, i) => (
          <MagneticTile key={a.id} magnetic={magnetic} onOpen={() => setOpen(a.id)} index={i}>
            <AssetImage
              id={a.id}
              sizes="thumb"
              ratio={a.orientation === 'portrait' ? '3 / 4' : a.orientation === 'square' ? '1 / 1' : '4 / 3'}
              className="rounded-[var(--radius-sm)]"
            />
          </MagneticTile>
        ))}
      </div>

      {openAsset && (
        <div
          className="fixed inset-0 z-150 grid place-items-center p-4"
          style={{ background: 'rgb(5 5 7 / 0.93)', animation: 'obn-reveal 320ms var(--ease-reveal) both' }}
          role="dialog"
          aria-modal="true"
          aria-label={openAsset.purpose}
          onClick={() => setOpen(null)}
        >
          <figure className="max-h-full w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <AssetImage id={openAsset.id} sizes="full" className="rounded-[var(--radius-md)]" priority />
            <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-3">
              <span className="text-[0.88rem]" style={{ color: 'rgb(244 241 234 / 0.8)' }}>
                {openAsset.purpose}
              </span>
              <span className="kicker" style={{ color: 'rgb(244 241 234 / 0.4)' }}>
                {openAsset.kit} · {openAsset.section}
              </span>
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={() => setOpen(null)}
            className="fixed right-5 top-5 grid h-11 w-11 place-items-center rounded-full border text-xl"
            style={{ borderColor: 'rgb(244 241 234 / 0.3)', color: '#f4f1ea' }}
            aria-label="Đóng ảnh"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}

function MagneticTile({
  children,
  magnetic,
  onOpen,
  index,
}: {
  children: React.ReactNode;
  magnetic: boolean;
  onOpen: () => void;
  index: number;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  const onMove = (e: React.MouseEvent) => {
    if (!magnetic) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
    const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
    el.style.transform = `perspective(900px) rotateY(${dx * 7}deg) rotateX(${-dy * 7}deg) translateZ(18px) scale(1.035)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = '';
  };

  return (
    <button
      ref={ref}
      type="button"
      onMouseMove={onMove}
      onMouseLeave={reset}
      onClick={onOpen}
      className="block w-full overflow-hidden rounded-[var(--radius-sm)] text-left transition-transform duration-300"
      style={{ transitionTimingFunction: 'var(--ease-reveal)', animationDelay: `${index * 18}ms` }}
    >
      {children}
    </button>
  );
}
