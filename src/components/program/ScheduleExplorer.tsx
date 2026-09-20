'use client';

import { useMemo, useState } from 'react';
import { AssetImage } from '@/components/media/AssetImage';
import { SampleFlag } from '@/components/system/Pending';
import { Tag } from '@/components/ui/Section';
import { CATEGORY_IDS, type ActivityCategory, type DayPhase } from '@/data/activities';
import { overlaps, scheduleWithActivity, stages, timeLabel, timesConfirmed } from '@/data/program';
import { zonesById } from '@/data/zones';
import { useStringSet } from '@/hooks/useFestivalState';
import { useI18n } from '@/i18n/I18nProvider';

type View = 'now' | 'day' | 'stage' | 'zone' | 'activity';

/** Năm cách xem; nhãn nằm ở t.ui.schedule.views. */
const views: View[] = ['day', 'stage', 'zone', 'activity', 'now'];

/**
 * HỆ LỊCH TRÌNH (§08): năm cách xem, bộ lọc theo nhóm, "Lịch của tôi" có cảnh báo trùng giờ.
 * Giờ đồng hồ chưa được chốt nên hiển thị theo mốc tương đối — xem chú thích ở data/program.ts.
 */
export function ScheduleExplorer() {
  const { t, locale } = useI18n();
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
    if (view === 'now') return [{ key: 'mine', label: t.ui.schedule.views.now, items: mine }];
    if (view === 'stage')
      return stages
        .map((s) => ({ key: s.id, label: t.stages[s.id], items: entries.filter((e) => e.stageId === s.id) }))
        .filter((g) => g.items.length > 0);
    if (view === 'zone') {
      const ids = Array.from(new Set(entries.map((e) => e.activity.zoneId)));
      return ids.map((z) => ({
        key: z,
        label: t.zones[z].name,
        items: entries.filter((e) => e.activity.zoneId === z),
      }));
    }
    if (view === 'activity')
      return [
        {
          key: 'all',
          label: t.ui.schedule.allActivities,
          items: entries
            .slice()
            // Sắp xếp theo đúng quy tắc chữ cái của thứ tiếng đang đọc, không phải của tiếng Việt.
            .sort((a, b) =>
              t.activities[a.activity.id].name.localeCompare(t.activities[b.activity.id].name, locale),
            ),
        },
      ];
    return (['morning', 'midday', 'golden', 'night'] as DayPhase[])
      .map((p) => ({ key: p, label: t.phases[p], items: entries.filter((e) => e.phase === p) }))
      .filter((g) => g.items.length > 0);
  }, [view, entries, mine, t, locale]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label={t.ui.schedule.viewsAria}>
          {views.map((v) => (
            <button
              key={v}
              type="button"
              role="tab"
              aria-selected={view === v}
              onClick={() => setView(v)}
              className="rounded-full border px-4 py-2 text-[0.78rem] font-semibold transition-colors"
              style={{
                borderColor: view === v ? 'transparent' : 'var(--env-card-line)',
                background: view === v ? 'var(--env-fg)' : 'transparent',
                color: view === v ? 'var(--env-bg)' : 'var(--env-muted)',
              }}
            >
              {t.ui.schedule.views[v]}
              {v === 'now' && mine.length > 0 && (
                <span className="ml-1.5 tabular-nums" style={{ color: view === v ? 'var(--env-bg)' : 'var(--color-gold)' }}>
                  {mine.length}
                </span>
              )}
            </button>
          ))}
        </div>
        {!timesConfirmed && <SampleFlag>{t.ui.schedule.relativeTimes}</SampleFlag>}
      </div>

      {view !== 'now' && (
        <div className="mb-8 flex flex-wrap gap-2">
          <Chip active={filter === 'all'} onClick={() => setFilter('all')}>
            {t.common.all}
          </Chip>
          {CATEGORY_IDS.map((c) => {
            const n = scheduleWithActivity.filter((e) => e.activity.category === c).length;
            if (!n) return null;
            return (
              <Chip key={c} active={filter === c} onClick={() => setFilter(c)}>
                {t.categories[c]}
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
          {t.ui.schedule.clashA} {conflicts.size} {t.ui.schedule.clashB}
        </p>
      )}

      {view === 'now' && mine.length === 0 && (
        <p className="lede">
          {t.ui.schedule.emptyMine}
        </p>
      )}

      <div className="space-y-12">
        {groups.map((g) => (
          <section key={g.key}>
            <div className="mb-5 flex items-baseline gap-4">
              <h2 className="font-display t-md">{g.label}</h2>
              <span className="rule flex-1" />
              <span className="kicker">
                {g.items.length} {t.common.items}
              </span>
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
                        <p className="font-display fx-t-lift text-[1.02rem]">{t.activities[e.activity.id].name}</p>
                        <p className="mt-1 truncate text-[0.8rem]" style={{ color: 'var(--env-faint)' }}>
                          {t.activities[e.activity.id].summary}
                        </p>
                        <p className="mt-2 flex flex-wrap items-center gap-2">
                          <Tag color={zone?.color}>{zone ? t.zones[zone.id].name : e.activity.zoneId}</Tag>
                          <Tag>{t.categories[e.activity.category]}</Tag>
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
                        {`${inMine ? t.ui.schedule.removeFrom : t.ui.schedule.addTo}: ${t.activities[e.activity.id].name}`}
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
