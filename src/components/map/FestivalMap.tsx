'use client';

import { useCallback, useMemo, useRef, useState } from 'react';
import { AssetImage } from '@/components/media/AssetImage';
import { Tag } from '@/components/ui/Section';
import { zones } from '@/data/zones';
import { activities, categoryLabels } from '@/data/activities';

/**
 * BẢN ĐỒ LỄ HỘI (§07, §17-C).
 *
 * Thu phóng, kéo, rê chuột vào khu, bấm để mở chi tiết; mobile mở dạng bottom sheet.
 * Nền là ảnh masterplan/isometric của KIT-06, các khu là đa giác SVG đè lên.
 *
 * Hình học khu là SƠ ĐỒ QUAN HỆ — mặt bằng thật chưa có. Thay `shape` trong data/zones.ts
 * là bản đồ chạy với mặt bằng chính thức, không phải sửa component.
 */
export function FestivalMap() {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const dragRef = useRef<{ x: number; y: number; px: number; py: number } | null>(null);

  const zone = zones.find((z) => z.id === selected) ?? null;

  const zoneActivities = useMemo(
    () => (zone ? activities.filter((a) => a.zoneId === zone.id) : []),
    [zone],
  );

  const visible = useMemo(
    () => (filter === 'all' ? zones : zones.filter((z) => activities.some((a) => a.zoneId === z.id && a.category === filter))),
    [filter],
  );

  const clampPan = useCallback((p: { x: number; y: number }, z: number) => {
    const limit = (z - 1) * 40;
    return { x: Math.max(-limit, Math.min(limit, p.x)), y: Math.max(-limit, Math.min(limit, p.y)) };
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    if (zoom === 1) return;
    dragRef.current = { x: e.clientX, y: e.clientY, px: pan.x, py: pan.y };
    (e.target as Element).setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const d = dragRef.current;
    if (!d) return;
    const next = { x: d.px + (e.clientX - d.x) * 0.08, y: d.py + (e.clientY - d.y) * 0.08 };
    setPan(clampPan(next, zoom));
  };
  const endDrag = () => {
    dragRef.current = null;
  };

  const changeZoom = (delta: number) => {
    setZoom((z) => {
      const next = Math.min(2.6, Math.max(1, Number((z + delta).toFixed(2))));
      setPan((p) => clampPan(p, next));
      return next;
    });
  };

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,3fr)_minmax(258px,0.72fr)]">
      <div>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <MapChip active={filter === 'all'} onClick={() => setFilter('all')}>
              Tất cả khu
            </MapChip>
            {(['community', 'pets', 'commerce', 'art', 'food', 'music'] as const).map((c) => (
              <MapChip key={c} active={filter === c} onClick={() => setFilter(c)}>
                {categoryLabels[c]}
              </MapChip>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <MapButton onClick={() => changeZoom(-0.3)} label="Thu nhỏ">
              −
            </MapButton>
            <span className="w-12 text-center text-[0.76rem] tabular-nums" style={{ color: 'var(--env-faint)' }}>
              {Math.round(zoom * 100)}%
            </span>
            <MapButton onClick={() => changeZoom(0.3)} label="Phóng to">
              +
            </MapButton>
            <MapButton
              onClick={() => {
                setZoom(1);
                setPan({ x: 0, y: 0 });
              }}
              label="Về mặc định"
            >
              ⤾
            </MapButton>
          </div>
        </div>

        <div
          className="relative overflow-hidden rounded-[var(--radius-md)] border"
          style={{ borderColor: 'var(--env-card-line)', cursor: zoom > 1 ? 'grab' : 'default' }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
        >
          <div
            className="transition-transform duration-300"
            style={{ transform: `scale(${zoom}) translate(${pan.x}%, ${pan.y}%)`, transformOrigin: 'center' }}
          >
            <AssetImage id="kit-06-08-festival-map-isometric" sizes="full" ratio="16 / 9" className="w-full" />
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
              role="group"
              aria-label="Các khu vực của lễ hội"
            >
              {visible.map((z) => {
                const isOn = hover === z.id || selected === z.id;
                return (
                  <g key={z.id}>
                    <polygon
                      points={z.shape}
                      fill={z.color}
                      fillOpacity={isOn ? 0.42 : 0.16}
                      stroke={z.color}
                      strokeWidth={isOn ? 0.6 : 0.3}
                      vectorEffect="non-scaling-stroke"
                      style={{ transition: 'fill-opacity 260ms, stroke-width 260ms', cursor: 'pointer' }}
                      onMouseEnter={() => setHover(z.id)}
                      onMouseLeave={() => setHover(null)}
                      onClick={() => setSelected(z.id)}
                      tabIndex={0}
                      role="button"
                      aria-label={`${z.name} — ${z.short}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelected(z.id);
                        }
                      }}
                      onFocus={() => setHover(z.id)}
                      onBlur={() => setHover(null)}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Nhãn khu — HTML để chữ Việt không bị SVG kéo méo theo preserveAspectRatio */}
            <div className="pointer-events-none absolute inset-0">
              {visible.map((z) => (
                <span
                  key={z.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full px-2 py-0.5 text-[0.56rem] font-bold uppercase tracking-[0.14em] transition-opacity duration-300 sm:text-[0.62rem]"
                  style={{
                    left: `${z.labelAt[0]}%`,
                    top: `${z.labelAt[1]}%`,
                    background: 'rgb(5 5 7 / 0.72)',
                    color: z.color,
                    opacity: hover === z.id || selected === z.id ? 1 : 0.78,
                  }}
                >
                  {z.en}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-3 text-[0.74rem]" style={{ color: 'var(--env-faint)' }}>
          Sơ đồ thể hiện quan hệ giữa các khu. Mặt bằng đo đạc chính thức sẽ thay thế sơ đồ này khi ban tổ chức cung cấp.
        </p>
      </div>

      {/* Bảng chi tiết — trên mobile nằm ngay dưới bản đồ, dễ với tay.
          Trên desktop nó được định vị tuyệt đối trong cột phải nên chiều cao luôn
          đúng bằng khung bản đồ; danh sách dài hơn thì cuộn bên trong, không kéo dài cả hàng. */}
      <div className="relative">
      <aside
        className="surface flex flex-col p-5 lg:absolute lg:inset-0 lg:overflow-y-auto"
        aria-live="polite"
      >
        {zone ? (
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="kicker mb-2" style={{ color: zone.color }}>
                  {zone.en}
                </p>
                <h3 className="font-display text-[1.15rem]">{zone.name}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full border"
                style={{ borderColor: 'var(--env-card-line)' }}
                aria-label="Đóng chi tiết khu"
              >
                ×
              </button>
            </div>

            <AssetImage id={zone.aerialAssetId} sizes="thumb" ratio="16 / 9" className="mt-4 rounded-[var(--radius-sm)]" />

            {/* Ảnh thực tế trong khu — dữ liệu đã có sẵn nhưng trước đây không được vẽ */}
            {zone.detailAssetIds.length > 0 && (
              <ul className="mt-2 grid grid-cols-4 gap-1.5">
                {zone.detailAssetIds.map((id) => (
                  <li key={id}>
                    <AssetImage id={id} sizes="thumb" ratio="1 / 1" className="rounded-[var(--radius-xs)]" />
                  </li>
                ))}
              </ul>
            )}

            <p className="mt-3.5 text-[0.82rem] leading-relaxed" style={{ color: 'var(--env-muted)' }}>
              {zone.description}
            </p>

            <p className="kicker mt-5 mb-2.5">Dịch vụ tại khu</p>
            <ul className="flex flex-wrap gap-2">
              {zone.services.map((s) => (
                <li key={s}>
                  <Tag>{s}</Tag>
                </li>
              ))}
              {zone.accessible && <Tag color="#00d1ff">Lối đi tiếp cận</Tag>}
            </ul>

            {zoneActivities.length > 0 && (
              <>
                <p className="kicker mt-5 mb-2.5">Hoạt động ({zoneActivities.length})</p>
                <ul className="space-y-2">
                  {zoneActivities.map((a) => (
                    <li key={a.id} className="flex gap-3">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: zone.color }}
                        aria-hidden
                      />
                      <span>
                        <span className="block text-[0.82rem] font-semibold">{a.name}</span>
                        <span className="block text-[0.74rem] leading-snug" style={{ color: 'var(--env-faint)' }}>
                          {a.summary}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ) : (
          <div>
            <p className="kicker mb-3">Chọn một khu</p>
            <p className="text-[0.82rem] leading-relaxed" style={{ color: 'var(--env-muted)' }}>
              Bấm vào một vùng màu trên bản đồ để xem hoạt động, dịch vụ và ảnh của khu đó.
            </p>
            <ul className="mt-5 space-y-0.5">
              {zones.map((z) => (
                <li key={z.id}>
                  <button
                    type="button"
                    onClick={() => setSelected(z.id)}
                    onMouseEnter={() => setHover(z.id)}
                    onMouseLeave={() => setHover(null)}
                    className="group fx-c-edge flex w-full items-center gap-2.5 rounded-[var(--radius-sm)] px-2 py-1.5 text-left transition-colors"
                    style={{ background: hover === z.id ? 'var(--env-card)' : 'transparent' }}
                  >
                    <span className="fx-i-dot h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: z.color }} aria-hidden />
                    <span className="min-w-0">
                      <span className="block text-[0.82rem] font-semibold">{z.name}</span>
                      <span className="block truncate text-[0.72rem]" style={{ color: 'var(--env-faint)' }}>
                        {z.short}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </aside>
      </div>
    </div>
  );
}

function MapChip({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="fx-b-press rounded-full border px-3.5 py-1.5 text-[0.74rem] font-semibold transition-colors"
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

function MapButton({ children, onClick, label }: { children: React.ReactNode; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="fx-i-bob fx-b-press grid h-9 w-9 place-items-center rounded-full border text-base"
      style={{ borderColor: 'var(--env-card-line)' }}
    >
      {children}
    </button>
  );
}
