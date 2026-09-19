'use client';

import { useMemo, useRef, useState } from 'react';
import { AssetImage } from '@/components/media/AssetImage';
import { Tag } from '@/components/ui/Section';
import { activities, categoryLabels, type ActivityCategory } from '@/data/activities';

/**
 * Dải hoạt động cuộn ngang (§KIT-02): kéo để khám phá, lọc theo nhóm,
 * thẻ nở ra khi trỏ tới. Không phải lưới thẻ tính năng buồn tẻ.
 */
export function ActivityRail({ phase }: { phase?: 'day' | 'night' }) {
  const railRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<ActivityCategory | 'all'>('all');
  const [active, setActive] = useState<string | null>(null);
  const drag = useRef<{ x: number; left: number } | null>(null);

  const pool = useMemo(
    () =>
      activities.filter((a) =>
        phase === 'day' ? a.phase !== 'night' : phase === 'night' ? a.phase === 'night' : true,
      ),
    [phase],
  );

  const categories = useMemo(() => {
    const set = new Set(pool.map((a) => a.category));
    return Array.from(set);
  }, [pool]);

  const list = filter === 'all' ? pool : pool.filter((a) => a.category === filter);

  const onPointerDown = (e: React.PointerEvent) => {
    const el = railRef.current;
    if (!el) return;
    drag.current = { x: e.clientX, left: el.scrollLeft };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const el = railRef.current;
    if (!el || !drag.current) return;
    el.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
  };
  const endDrag = () => {
    drag.current = null;
  };

  const nudge = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 720), behavior: 'smooth' });
  };

  return (
    <div>
      <div className="wrap mb-7 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Lọc hoạt động theo nhóm">
          <FilterChip active={filter === 'all'} onClick={() => setFilter('all')}>
            Tất cả
          </FilterChip>
          {categories.map((c) => (
            <FilterChip key={c} active={filter === c} onClick={() => setFilter(c)}>
              {categoryLabels[c]}
            </FilterChip>
          ))}
        </div>
        <div className="hidden gap-2 md:flex">
          <RailButton onClick={() => nudge(-1)} label="Lùi lại">
            ←
          </RailButton>
          <RailButton onClick={() => nudge(1)} label="Tiến tới">
            →
          </RailButton>
        </div>
      </div>

      <div
        ref={railRef}
        className="rail px-[var(--gutter)]"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        tabIndex={0}
        role="list"
        aria-label="Các hoạt động của lễ hội"
      >
        {list.map((a) => {
          const isActive = active === a.id;
          return (
            <article
              key={a.id}
              role="listitem"
              className="group fx-c-shine fx-c-zoom fx-c-corners relative overflow-hidden rounded-[var(--radius-md)] transition-[flex-basis,transform] duration-500"
              style={{
                flexBasis: isActive ? 'min(560px, 86vw)' : 'min(340px, 78vw)',
                border: '1px solid var(--env-card-line)',
                transitionTimingFunction: 'var(--ease-reveal)',
              }}
              onMouseEnter={() => setActive(a.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(a.id)}
              onBlur={() => setActive(null)}
            >
              {/* Thẻ mở rộng thì đổi sang ảnh dọc của hoạt động — trước đây hai nhánh
                  của câu điều kiện giống hệt nhau nên ảnh dọc không bao giờ được dùng. */}
              <AssetImage
                id={isActive && a.portraitAssetId ? a.portraitAssetId : a.assetId}
                sizes="card"
                ratio="4 / 5"
                className="h-full w-full"
                scrim="bottom"
              />
              {a.portraitAssetId && (
                <AssetImage
                  id={a.portraitAssetId}
                  sizes="thumb"
                  ratio="1 / 1"
                  className="absolute right-4 top-4 w-16 rounded-[var(--radius-xs)] border border-white/25 shadow-lg transition-opacity duration-500"
                  style={{ opacity: isActive ? 0 : 0.92 }}
                />
              )}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <Tag>{categoryLabels[a.category]}</Tag>
                <h3 className="font-display fx-t-lift mt-3 text-[1.35rem] text-white">{a.name}</h3>
                <p className="mt-2 text-[0.86rem] leading-snug" style={{ color: 'rgb(244 241 234 / 0.72)' }}>
                  {a.summary}
                </p>
                <p
                  className="mt-3 overflow-hidden text-[0.82rem] leading-relaxed transition-[max-height,opacity] duration-500"
                  style={{
                    color: 'rgb(244 241 234 / 0.62)',
                    maxHeight: isActive ? '10rem' : '0',
                    opacity: isActive ? 1 : 0,
                  }}
                >
                  {a.detail}
                </p>
                {a.needsSignup && (
                  <p className="kicker mt-3" style={{ color: 'var(--color-gold)' }}>
                    Cần đăng ký
                  </p>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function FilterChip({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="fx-b-press rounded-full border px-4 py-2 text-[0.78rem] font-semibold transition-colors duration-200"
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

function RailButton({ children, onClick, label }: { children: React.ReactNode; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="fx-i-turn fx-b-press grid h-11 w-11 place-items-center rounded-full border text-lg"
      style={{ borderColor: 'var(--env-card-line)', color: 'var(--env-fg)' }}
    >
      {children}
    </button>
  );
}
