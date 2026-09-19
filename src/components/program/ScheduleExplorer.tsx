'use client';

import { useMemo, useState } from 'react';
import { AssetImage } from '@/components/media/AssetImage';
import { SampleFlag } from '@/components/system/Pending';
import { Tag } from '@/components/ui/Section';
import { categoryLabels, phaseLabels, type ActivityCategory, type DayPhase } from '@/data/activities';
import { overlaps, scheduleWithActivity, stages, timeLabel, timesConfirmed } from '@/data/program';
import { zonesById } from '@/data/zones';
import { useStringSet } from '@/hooks/useFestivalState';

type View = 'now' | 'day' | 'stage' | 'zone' | 'activity';

const views: { id: View; label: string }[] = [
  { id: 'day', label: 'Theo khối giờ' },
  { id: 'stage', label: 'Theo sân khấu' },
  { id: 'zone', label: 'Theo khu vực' },
  { id: 'activity', label: 'Theo hoạt động' },
  { id: 'now', label: 'Lịch của tôi' },
];

/**
 * HỆ LỊCH TRÌNH (§08): năm cách xem, bộ lọc theo nhóm, "Lịch của tôi" có cảnh báo trùng giờ.
 * Giờ đồng hồ chưa được chốt nên hiển thị theo mốc tương đối — xem chú thích ở data/program.ts.
 */
export function ScheduleExplorer() {
  const [view, setView] = useState<View>('day');
  const [filter, setFilter] = useState<ActivityCategory | 'all'>('all');
  const mySchedule = useStringSet('schedule');

  const entries = useMemo(
    () => scheduleWithActivity.filter((e) => (filter === 'all' ? true : e.activity.category === filter)),
    [filter],
  );

  const myIds = mySchedule.items;
  const mine = useMemo(() => scheduleWithActivity.filter((e) => myIds.includes(e.id)), [myIds]);

  const conflicts = useMemo(() => {
    const set = new Set<string>();
    for (let i = 0; i < mine.length; i++) {
      for (let j = i + 1; j < mine.length; j++) {
        if (overlaps(mine[i], mine[j])) {
          set.add(mine[i].id);
          set.add(mine[j].id);
        }
      }
    }
    return set;
  }, [mine]);

  const groups = useMemo(() => {
    if (view === 'now') return [{ key: 'mine', label: 'Lịch của tôi', items: mine }];
    if (view === 'stage')
      return stages
        .map((s) => ({ key: s.id, label: s.label, items: entries.filter((e) => e.stageId === s.id) }))
        .filter((g) => g.items.length > 0);
    if (view === 'zone') {
      const ids = Array.from(new Set(entries.map((e) => e.activity.zoneId)));
      return ids.map((z) => ({
        key: z,
        label: zonesById.get(z)?.name ?? z,
        items: entries.filter((e) => e.activity.zoneId === z),
      }));
    }
    if (view === 'activity')
      return [{ key: 'all', label: 'Tất cả hoạt động', items: entries.slice().sort((a, b) => a.activity.name.localeCompare(b.activity.name, 'vi')) }];
    return (['morning', 'midday', 'golden', 'night'] as DayPhase[])
      .map((p) => ({ key: p, label: phaseLabels[p].label, items: entries.filter((e) => e.phase === p) }))
      .filter((g) => g.items.length > 0);
  }, [view, entries, mine]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Cách xem lịch trình">
          {views.map((v) => (
            <button
              key={v.id}
              type="button"
              role="tab"
              aria-selected={view === v.id}
              onClick={() => setView(v.id)}
              className="rounded-full border px-4 py-2 text-[0.78rem] font-semibold transition-colors"
              style={{
                borderColor: view === v.id ? 'transparent' : 'var(--env-card-line)',
                background: view === v.id ? 'var(--env-fg)' : 'transparent',
                color: view === v.id ? 'var(--env-bg)' : 'var(--env-muted)',
              }}
            >
              {v.label}
              {v.id === 'now' && mine.length > 0 && (
                <span className="ml-1.5 tabular-nums" style={{ color: view === v.id ? 'var(--env-bg)' : 'var(--color-gold)' }}>
                  {mine.length}
                </span>
              )}
            </button>
          ))}
        </div>
        {!timesConfirmed && <SampleFlag>Khung giờ tương đối — giờ chính thức chưa công bố</SampleFlag>}
      </div>

      {view !== 'now' && (
        <div className="mb-8 flex flex-wrap gap-2">
          <Chip active={filter === 'all'} onClick={() => setFilter('all')}>
            Tất cả
          </Chip>
          {(Object.keys(categoryLabels) as ActivityCategory[]).map((c) => {
            const n = scheduleWithActivity.filter((e) => e.activity.category === c).length;
            if (!n) return null;
            return (
              <Chip key={c} active={filter === c} onClick={() => setFilter(c)}>
                {categoryLabels[c]}
              </Chip>
            );
          })}
        </div>
      )}

      {view === 'now' && conflicts.size > 0 && (
        <p
          className="mb-6 rounded-[var(--radius-sm)] border px-4 py-3 text-[0.84rem]"
          style={{ borderColor: 'rgb(255 46 154 / 0.5)', color: 'var(--color-magenta)' }}
          role="status"
        >
          Có {conflicts.size} mục trùng khung giờ trong lịch của bạn — các mục trùng được đánh dấu bên dưới.
        </p>
      )}

      {view === 'now' && mine.length === 0 && (
        <p className="lede">
          Lịch của bạn đang trống. Bấm dấu cộng ở bất kỳ mục nào trong các cách xem khác để thêm vào đây.
        </p>
      )}

      <div className="space-y-12">
        {groups.map((g) => (
          <section key={g.key}>
            <div className="mb-5 flex items-baseline gap-4">
              <h2 className="font-display t-md">{g.label}</h2>
              <span className="rule flex-1" />
              <span className="kicker">{g.items.length} mục</span>
            </div>

            <ul className="space-y-2">
              {g.items.map((e) => {
                const zone = zonesById.get(e.activity.zoneId);
                const inMine = mySchedule.has(e.id);
                const clash = conflicts.has(e.id);
                return (
                  <li
                    key={e.id}
                    // Cột giờ bị `hidden` dưới sm, mà phần tử display:none thì KHÔNG còn là ô
                    // của lưới — hai phần tử còn lại dồn lên hai track đầu, nút "+" rơi vào
                    // track `1fr` rộng 0px rồi thò hẳn ra ngoài viền thẻ. Phải khai đúng số cột
                    // cho từng khổ màn hình thay vì ẩn một ô.
                    className="group fx-c-edge fx-c-scan grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-[var(--radius-sm)] border p-3 transition-colors sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:gap-6 sm:p-4"
                    style={{
                      borderColor: clash ? 'rgb(255 46 154 / 0.55)' : 'var(--env-card-line)',
                      background: inMine ? 'var(--env-card)' : 'transparent',
                    }}
                  >
                    <div className="hidden w-16 shrink-0 sm:block">
                      <p className="num-oversized text-[1.05rem]">{timeLabel(e.offsetMin)}</p>
                      <p className="kicker mt-1 text-[0.54rem]">{e.durationMin}′</p>
                    </div>

                    <div className="flex min-w-0 items-center gap-4">
                      <AssetImage
                        id={e.activity.assetId}
                        sizes="thumb"
                        ratio="1 / 1"
                        className="hidden h-16 w-16 shrink-0 rounded-[var(--radius-xs)] sm:block"
                      />
                      <div className="min-w-0">
                        <p className="font-display fx-t-lift text-[1.02rem]">{e.activity.name}</p>
                        <p className="mt-1 truncate text-[0.8rem]" style={{ color: 'var(--env-faint)' }}>
                          {e.activity.summary}
                        </p>
                        <p className="mt-2 flex flex-wrap items-center gap-2">
                          <Tag color={zone?.color}>{zone?.name ?? e.activity.zoneId}</Tag>
                          <Tag>{categoryLabels[e.activity.category]}</Tag>
                          <span className="text-[0.72rem] sm:hidden" style={{ color: 'var(--env-faint)' }}>
                            {timeLabel(e.offsetMin)} · {e.durationMin}′
                          </span>
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => mySchedule.toggle(e.id)}
                      aria-pressed={inMine}
                      className="fx-i-beat fx-b-press grid h-11 w-11 shrink-0 place-items-center rounded-full border text-lg"
                      style={{
                        borderColor: inMine ? 'var(--color-gold)' : 'var(--env-card-line)',
                        color: inMine ? 'var(--color-gold)' : 'var(--env-muted)',
                      }}
                    >
                      <span className="sr-only">
                        {inMine ? `Bỏ ${e.activity.name} khỏi lịch của tôi` : `Thêm ${e.activity.name} vào lịch của tôi`}
                      </span>
                      {inMine ? '✓' : '+'}
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

function Chip({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="rounded-full border px-3.5 py-1.5 text-[0.76rem] font-semibold transition-colors"
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
