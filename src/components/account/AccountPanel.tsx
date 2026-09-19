'use client';

import { L } from '../system/L';
import { useMemo, useState } from 'react';
import { AssetImage } from '@/components/media/AssetImage';
import { QrPlaceholder } from '@/components/tickets/TicketFlow';
import { Tag } from '@/components/ui/Section';
import { useStringSet, useWallet } from '@/hooks/useFestivalState';
import { scheduleWithActivity, timeLabel, overlaps } from '@/data/program';
import { getAsset } from '@/lib/assets';
import { zonesById } from '@/data/zones';

type Tab = 'wallet' | 'schedule' | 'favorites';

/**
 * Khu tài khoản người tham dự (§10 ATTENDEE).
 * Ba mục: ví vé, lịch của tôi, yêu thích — tất cả đọc từ cùng một lớp lưu trữ.
 */
export function AccountPanel() {
  const [tab, setTab] = useState<Tab>('wallet');
  const wallet = useWallet();
  const schedule = useStringSet('schedule');
  const favorites = useStringSet('favorites');

  const myIds = schedule.items;
  const mine = useMemo(
    () => scheduleWithActivity.filter((e) => myIds.includes(e.id)).sort((a, b) => a.offsetMin - b.offsetMin),
    [myIds],
  );

  const conflicts = useMemo(() => {
    const set = new Set<string>();
    for (let i = 0; i < mine.length; i++)
      for (let j = i + 1; j < mine.length; j++)
        if (overlaps(mine[i], mine[j])) {
          set.add(mine[i].id);
          set.add(mine[j].id);
        }
    return set;
  }, [mine]);

  const favAssets = favorites.items.map((id) => getAsset(id)).filter((a): a is NonNullable<typeof a> => Boolean(a));

  const tabs: { id: Tab; label: string; count: number }[] = [
    { id: 'wallet', label: 'Ví vé', count: wallet.tickets.length },
    { id: 'schedule', label: 'Lịch của tôi', count: mine.length },
    { id: 'favorites', label: 'Yêu thích', count: favAssets.length },
  ];

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Khu tài khoản">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className="rounded-full border px-5 py-2.5 text-[0.82rem] font-semibold transition-colors"
            style={{
              borderColor: tab === t.id ? 'transparent' : 'var(--env-card-line)',
              background: tab === t.id ? 'var(--env-fg)' : 'transparent',
              color: tab === t.id ? 'var(--env-bg)' : 'var(--env-muted)',
            }}
          >
            {t.label}
            <span className="ml-2 tabular-nums opacity-60">{t.count}</span>
          </button>
        ))}
      </div>

      {tab === 'wallet' && (
        <div>
          {wallet.tickets.length === 0 ? (
            <Empty
              title="Ví vé đang trống"
              body="Vé chưa mở bán. Bạn có thể chạy thử luồng đặt vé ở trang Vé để xem vé điện tử trông thế nào."
              href="/tickets"
              cta="Tới trang Vé"
              assetId="kit-01-19-ticket"
            />
          ) : (
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {wallet.tickets.map((t) => (
                <li key={t.id} className="surface overflow-hidden">
                  <div className="relative">
                    <AssetImage id="kit-01-19-ticket" sizes="third" ratio="16 / 9" className="w-full" scrim="soft" />
                    <span
                      className="absolute right-3 top-3 rounded-full px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.16em]"
                      style={{ background: 'rgb(5 5 7 / 0.72)', color: 'var(--color-gold)' }}
                    >
                      Vé demo
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="font-display text-[1.08rem]">{t.tierName}</p>
                    <p className="mt-1 text-[0.82rem]" style={{ color: 'var(--env-faint)' }}>
                      {t.holder}
                    </p>
                    <div className="mt-4 flex items-center gap-4">
                      <QrPlaceholder seed={t.code} />
                      <div>
                        <p className="num-oversized text-[0.95rem] tracking-[0.06em]">{t.code}</p>
                        <p className="kicker mt-1.5 text-[0.54rem]">Mã check-in mô phỏng</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => wallet.remove(t.id)}
                      className="mt-4 text-[0.78rem] underline underline-offset-4"
                      style={{ color: 'var(--env-faint)' }}
                    >
                      Xoá vé
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {tab === 'schedule' && (
        <div>
          {mine.length === 0 ? (
            <Empty
              title="Lịch của bạn đang trống"
              body="Vào trang Lịch trình và bấm dấu cộng ở những hoạt động bạn muốn đi."
              href="/program"
              cta="Mở lịch trình"
              assetId="kit-06-16-midday-festival-life"
            />
          ) : (
            <>
              {conflicts.size > 0 && (
                <p
                  className="mb-5 rounded-[var(--radius-sm)] border px-4 py-3 text-[0.84rem]"
                  style={{ borderColor: 'rgb(255 46 154 / 0.5)', color: 'var(--color-magenta)' }}
                  role="status"
                >
                  {conflicts.size} mục đang trùng khung giờ với nhau.
                </p>
              )}
              <ul className="space-y-2">
                {mine.map((e) => {
                  const zone = zonesById.get(e.activity.zoneId);
                  return (
                    <li
                      key={e.id}
                      className="flex items-center gap-4 rounded-[var(--radius-sm)] border p-4"
                      style={{ borderColor: conflicts.has(e.id) ? 'rgb(255 46 154 / 0.5)' : 'var(--env-card-line)' }}
                    >
                      <span className="num-oversized w-16 shrink-0 text-[1rem]">{timeLabel(e.offsetMin)}</span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-semibold">{e.activity.name}</span>
                        <span className="mt-1 block truncate text-[0.78rem]" style={{ color: 'var(--env-faint)' }}>
                          {zone?.name} · {e.durationMin} phút
                        </span>
                      </span>
                      <button
                        type="button"
                        onClick={() => schedule.toggle(e.id)}
                        className="shrink-0 rounded-full border px-3.5 py-1.5 text-[0.76rem]"
                        style={{ borderColor: 'var(--env-card-line)', color: 'var(--env-muted)' }}
                      >
                        Bỏ
                      </button>
                    </li>
                  );
                })}
              </ul>
              <button
                type="button"
                onClick={schedule.clear}
                className="mt-6 text-[0.8rem] underline underline-offset-4"
                style={{ color: 'var(--env-faint)' }}
              >
                Xoá toàn bộ lịch
              </button>
            </>
          )}
        </div>
      )}

      {tab === 'favorites' && (
        <div>
          {favAssets.length === 0 ? (
            <Empty
              title="Chưa có mục yêu thích"
              body="Bấm dấu tim trên ảnh trong thư viện để lưu lại những khung hình bạn thích."
              href="/gallery"
              cta="Mở thư viện ảnh"
              assetId="kit-01-28-bg-bokeh"
            />
          ) : (
            <>
              <ul className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {favAssets.map((a) => (
                  <li key={a.id}>
                    <AssetImage id={a.id} sizes="thumb" ratio="4 / 3" className="rounded-[var(--radius-sm)]" />
                    <p className="mt-2 text-[0.74rem]" style={{ color: 'var(--env-faint)' }}>
                      {a.purpose}
                    </p>
                    <button
                      type="button"
                      onClick={() => favorites.toggle(a.id)}
                      className="mt-1 text-[0.74rem] underline underline-offset-4"
                      style={{ color: 'var(--env-faint)' }}
                    >
                      Bỏ thích
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Tag>{favAssets.length} ảnh</Tag>
                <button
                  type="button"
                  onClick={favorites.clear}
                  className="text-[0.8rem] underline underline-offset-4"
                  style={{ color: 'var(--env-faint)' }}
                >
                  Xoá tất cả
                </button>
              </div>
            </>
          )}
        </div>
      )}

      <p className="mt-12 text-[0.76rem] leading-relaxed" style={{ color: 'var(--env-faint)' }}>
        Dữ liệu ở trang này nằm trong trình duyệt của bạn, không được gửi lên máy chủ nào. Khi hệ thống tài khoản
        chính thức chạy, phần lưu trữ sẽ chuyển sang máy chủ và những gì bạn lưu sẽ đi theo tài khoản.
      </p>
    </div>
  );
}

function Empty({
  title,
  body,
  href,
  cta,
  assetId,
}: {
  title: string;
  body: string;
  href: string;
  cta: string;
  assetId: string;
}) {
  return (
    <div className="surface grid gap-6 overflow-hidden sm:grid-cols-[0.8fr_1.2fr] sm:items-center">
      <AssetImage id={assetId} sizes="half" ratio="4 / 3" className="h-full w-full" />
      <div className="p-6 sm:pr-8">
        <p className="font-display text-[1.25rem]">{title}</p>
        <p className="mt-3 text-[0.88rem] leading-relaxed" style={{ color: 'var(--env-muted)' }}>
          {body}
        </p>
        <L
          href={href}
          className="mt-6 inline-flex rounded-full px-5 py-2.5 text-[0.84rem] font-bold"
          style={{ background: 'var(--color-gold)', color: '#16120a' }}
        >
          {cta}
        </L>
      </div>
    </div>
  );
}
