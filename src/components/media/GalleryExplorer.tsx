'use client';

import { useMemo, useState } from 'react';
import { AssetImage } from '@/components/media/AssetImage';
import { useStringSet } from '@/hooks/useFestivalState';
import { useSpotlight } from '@/hooks/useSpotlight';
import { libraryAssets, assetStats } from '@/lib/assets';
import type { AssetKit } from '@/types/assets';
import { altFor } from '@/i18n/alt';
import { useI18n } from '@/i18n/I18nProvider';


/**
 * Thư viện hình ảnh — làm cho toàn bộ bộ ảnh của dự án dùng được, không chỉ nằm trong thư mục.
 * Lọc theo KIT và theo khổ ảnh, lưu ảnh yêu thích, mở lớn từng ảnh.
 */
export function GalleryExplorer() {
  const { t, locale } = useI18n();
  const [kit, setKit] = useState<AssetKit | 'all'>('all');
  const [shape, setShape] = useState<'all' | 'landscape' | 'portrait' | 'square'>('all');
  const [open, setOpen] = useState<string | null>(null);
  const favorites = useStringSet('favorites');

  const list = useMemo(
    () =>
      libraryAssets.filter(
        (a) => (kit === 'all' || a.kit === kit) && (shape === 'all' || a.orientation === shape),
      ),
    [kit, shape],
  );

  const current = list.find((a) => a.id === open) ?? null;

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <Chip active={kit === 'all'} onClick={() => setKit('all')}>
            {t.ui.gallery.all} ({assetStats.library})
          </Chip>
          {assetStats.byKit.map((k) => (
            <Chip key={k.kit} active={kit === k.kit} onClick={() => setKit(k.kit)}>
              {t.ui.gallery.kits[k.kit as keyof typeof t.ui.gallery.kits]} ({k.count})
            </Chip>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {(['all', 'landscape', 'portrait', 'square'] as const).map((s) => (
            <Chip key={s} active={shape === s} onClick={() => setShape(s)}>
              {t.ui.gallery.shapes[s]}
            </Chip>
          ))}
        </div>
      </div>

      <p className="kicker mb-5">
        {list.length} {t.ui.gallery.countSuffix}
      </p>

      <ul className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 210px), 1fr))' }}>
        {list.map((a) => {
          const liked = favorites.has(a.id);
          return (
            <li key={a.id} className="group relative">
              <GalleryTile onOpen={() => setOpen(a.id)}>
                <AssetImage
                  id={a.id}
                  sizes="thumb"
                  ratio={a.orientation === 'portrait' ? '3 / 4' : a.orientation === 'square' ? '1 / 1' : '4 / 3'}
                  className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="sr-only">
                  {t.ui.gallery.open} {altFor(locale, a.id)}
                </span>
              </GalleryTile>
              <button
                type="button"
                onClick={() => favorites.toggle(a.id)}
                aria-pressed={liked}
                className="absolute right-2 top-2 grid h-9 w-9 place-items-center rounded-full backdrop-blur transition-transform hover:scale-110"
                style={{
                  background: 'rgb(5 5 7 / 0.55)',
                  color: liked ? 'var(--color-magenta)' : 'rgb(244 241 234 / 0.75)',
                }}
              >
                <span className="sr-only">{liked ? t.ui.gallery.unlike : t.ui.gallery.like}</span>
                <span aria-hidden>{liked ? '♥' : '♡'}</span>
              </button>
              <p className="mt-2 truncate text-[0.72rem]" style={{ color: 'var(--env-faint)' }}>
                {altFor(locale, a.id)}
              </p>
            </li>
          );
        })}
      </ul>

      {current && (
        <div
          className="fixed inset-0 z-150 grid place-items-center p-4"
          style={{ background: 'rgb(5 5 7 / 0.94)' }}
          role="dialog"
          aria-modal="true"
          aria-label={altFor(locale, current.id)}
          onClick={() => setOpen(null)}
        >
          <figure className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <AssetImage id={current.id} sizes="full" className="rounded-[var(--radius-md)]" priority />
            <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-3">
              <span className="text-[0.88rem]" style={{ color: 'rgb(244 241 234 / 0.82)' }}>
                {altFor(locale, current.id)}
              </span>
              <span className="kicker" style={{ color: 'rgb(244 241 234 / 0.42)' }}>
                {current.kit} · {current.aspectRatio} · {current.width}×{current.height}
              </span>
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={() => setOpen(null)}
            className="fixed right-5 top-5 grid h-11 w-11 place-items-center rounded-full border text-xl"
            style={{ borderColor: 'rgb(244 241 234 / 0.3)', color: '#f4f1ea' }}
            aria-label={t.ui.gallery.close}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}

/** Ô ảnh nghiêng nhẹ theo con trỏ (.fx-c-tilt) — cần JS nên tách riêng. */
function GalleryTile({ children, onOpen }: { children: React.ReactNode; onOpen: () => void }) {
  const { ref, onMouseMove, onMouseLeave } = useSpotlight<HTMLButtonElement>();
  return (
    <button
      ref={ref}
      type="button"
      onClick={onOpen}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="fx-c-tilt fx-c-shine block w-full overflow-hidden rounded-[var(--radius-sm)]"
    >
      {children}
    </button>
  );
}

function Chip({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="rounded-full border px-3.5 py-1.5 text-[0.74rem] font-semibold transition-colors"
      style={{
        borderColor: active ? 'transparent' : 'var(--env-card-line)',
        background: active ? 'var(--env-fg)' : 'transparent',
        color: active ? 'var(--env-bg)' : 'var(--env-muted)',
      }}
    >
      {children}
    </button>
  );
}
