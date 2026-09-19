'use client';

import { useMemo, useState } from 'react';
import { AssetImage } from '@/components/media/AssetImage';
import { zonesById } from '@/data/zones';
import {
  opportunities,
  opportunityCategories,
  type OpportunityCategory,
} from '@/data/sponsor';

/**
 * TƯƠNG TÁC CHỮ KÝ D — TRÌNH KHÁM PHÁ CƠ HỘI TÀI TRỢ (§05, §17-D).
 *
 * Chọn một cơ hội, giao diện kể lại vai trò của thương hiệu theo bốn bước
 * ACTIVATE → ENGAGE → CONVERT → MEASURE. Không có bảng giá, không có logo giả:
 * ở đây bán vai trò trong hệ sinh thái, không bán ô quảng cáo.
 */
export function OpportunityExplorer() {
  const [category, setCategory] = useState<OpportunityCategory | 'all'>('all');
  const list = useMemo(
    () => (category === 'all' ? opportunities : opportunities.filter((o) => o.category === category)),
    [category],
  );
  const [activeId, setActiveId] = useState(opportunities[0].id);
  const active = opportunities.find((o) => o.id === activeId) ?? list[0];
  const [step, setStep] = useState(0);

  const pick = (id: (typeof opportunities)[number]['id']) => {
    setActiveId(id);
    setStep(0);
  };

  const zone = active.zoneId ? zonesById.get(active.zoneId) : null;
  const cat = opportunityCategories[active.category];

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Lọc cơ hội theo nhóm">
        <CatChip active={category === 'all'} onClick={() => setCategory('all')}>
          Tất cả ({opportunities.length})
        </CatChip>
        {(Object.keys(opportunityCategories) as OpportunityCategory[]).map((c) => {
          const n = opportunities.filter((o) => o.category === c).length;
          if (n === 0) return null;
          return (
            <CatChip key={c} active={category === c} onClick={() => setCategory(c)} color={opportunityCategories[c].color}>
              {opportunityCategories[c].label} ({n})
            </CatChip>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        {/* Danh sách cơ hội */}
        <ul className="max-h-[560px] space-y-1.5 overflow-y-auto pr-1" role="listbox" aria-label="Danh sách cơ hội">
          {list.map((o) => {
            const on = o.id === active.id;
            return (
              <li key={o.id}>
                <button
                  type="button"
                  role="option"
                  aria-selected={on}
                  onClick={() => pick(o.id)}
                  className="group fx-c-edge fx-c-scan flex w-full items-center gap-3.5 rounded-[var(--radius-sm)] border p-3 text-left transition-colors duration-200"
                  style={{
                    borderColor: on ? opportunityCategories[o.category].color : 'var(--env-card-line)',
                    background: on ? 'var(--env-card)' : 'transparent',
                  }}
                >
                  {/* Ảnh nhỏ cho từng dòng: trước đây chỉ mục đang chọn mới có ảnh,
                      nên phần lớn ảnh KIT-05 không bao giờ hiện ra màn hình. */}
                  <AssetImage
                    id={o.assetId}
                    sizes="thumb"
                    ratio="1 / 1"
                    className="w-16 shrink-0 rounded-[var(--radius-xs)]"
                  />
                  <span className="min-w-0">
                    <span className="kicker block" style={{ color: opportunityCategories[o.category].color }}>
                      {opportunityCategories[o.category].en}
                    </span>
                    <span className="font-display fx-t-lift mt-1 block text-[1rem]">{o.name}</span>
                    <span className="mt-0.5 block text-[0.78rem] leading-snug" style={{ color: 'var(--env-faint)' }}>
                      {o.lead}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Chi tiết cơ hội */}
        <div className="surface overflow-hidden">
          <AssetImage id={active.assetId} sizes="half" ratio="16 / 9" className="w-full" scrim="soft" />

          <div className="p-6 sm:p-8">
            <p className="kicker" style={{ color: cat.color }}>
              {cat.label} · {cat.en}
            </p>
            <h3 className="font-display t-lg mt-3">{active.name}</h3>
            <p className="lede mt-4">{active.lead}</p>
            <p className="mt-4 text-[0.9rem] leading-relaxed" style={{ color: 'var(--env-muted)' }}>
              {active.body}
            </p>

            {zone && (
              <p className="mt-5 text-[0.8rem]" style={{ color: 'var(--env-faint)' }}>
                Vị trí đề xuất:{' '}
                <span style={{ color: zone.color }} className="font-semibold">
                  {zone.name}
                </span>
              </p>
            )}

            {/* Bốn bước */}
            <div className="mt-8">
              <div className="flex gap-1.5" role="tablist" aria-label="Các bước của hoạt động thương hiệu">
                {active.journey.map((s, i) => (
                  <button
                    key={s.step}
                    type="button"
                    role="tab"
                    aria-selected={i === step}
                    onClick={() => setStep(i)}
                    className="flex-1 border-t-2 pt-3 text-left transition-colors duration-300"
                    style={{
                      borderColor: i <= step ? cat.color : 'var(--env-line)',
                      color: i === step ? 'var(--env-fg)' : 'var(--env-faint)',
                    }}
                  >
                    <span className="block text-[0.6rem] font-bold uppercase tracking-[0.16em]">{s.step}</span>
                  </button>
                ))}
              </div>

              <div
                key={`${active.id}-${step}`}
                className="mt-5"
                style={{ animation: 'obn-reveal 420ms var(--ease-reveal) both' }}
              >
                <p className="font-display text-[1.15rem]">{active.journey[step].label}</p>
                <p className="mt-2 text-[0.9rem] leading-relaxed" style={{ color: 'var(--env-muted)' }}>
                  {active.journey[step].text}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="rounded-full border px-4 py-2 text-[0.78rem] font-semibold disabled:opacity-35"
                  style={{ borderColor: 'var(--env-card-line)' }}
                >
                  Bước trước
                </button>
                <span className="kicker">
                  {step + 1} / {active.journey.length}
                </span>
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.min(active.journey.length - 1, s + 1))}
                  disabled={step === active.journey.length - 1}
                  className="rounded-full px-4 py-2 text-[0.78rem] font-bold disabled:opacity-35"
                  style={{ background: cat.color, color: '#0b0912' }}
                >
                  Bước sau
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CatChip({
  children,
  active,
  onClick,
  color,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  color?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="fx-b-press rounded-full border px-3.5 py-1.5 text-[0.76rem] font-semibold transition-colors"
      style={{
        borderColor: active ? 'transparent' : 'var(--env-card-line)',
        background: active ? (color ?? 'var(--env-fg)') : 'transparent',
        color: active ? '#0b0912' : 'var(--env-muted)',
      }}
    >
      {children}
    </button>
  );
}
