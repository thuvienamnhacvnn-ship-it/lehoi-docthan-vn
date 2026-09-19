'use client';

import { useEffect, useRef, useState } from 'react';
import { AssetImage } from '@/components/media/AssetImage';
import { journey } from '@/data/festival';

/**
 * TƯƠNG TÁC CHỮ KÝ A — HÀNH TRÌNH VÔ CỰC (§17-A, KIT-06).
 *
 * Cuộn vẽ ra một đường vô cực — hình học lấy từ hai trái tim lồng nhau trong logo —
 * đi qua ba chặng GẶP MÌNH → GẶP NHAU → GẶP HẠNH PHÚC.
 * Cuộn vẫn là cuộn thật: không khoá bánh xe, không nhảy cóc; chỉ có phần dính lại
 * và nội dung đổi theo tiến độ. Tắt chuyển động -> hiện thẳng ba chặng xếp dọc.
 */
export function InfinityJourney() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    const measure = () => {
      raf = 0;
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      setProgress(p);
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
  }, [reduced]);

  const stageIndex = Math.min(journey.length - 1, Math.floor(progress * journey.length + 0.0001));
  const stage = journey[stageIndex];

  if (reduced) {
    return (
      <section data-env-zone="golden" className="section">
        <div className="wrap grid gap-16">
          {journey.map((s) => (
            <div key={s.id} className="grid-2 items-center">
              <div>
                <p className="kicker mb-3">Chặng {s.index}</p>
                <h3 className="font-display t-xl" style={{ color: s.accent }}>
                  {s.title}
                </h3>
                <p className="lede mt-5">{s.lead}</p>
                <p className="mt-4 text-[0.92rem] leading-relaxed" style={{ color: 'var(--env-muted)' }}>
                  {s.body}
                </p>
              </div>
              <AssetImage id={s.assetId} sizes="half" className="rounded-[var(--radius-md)]" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <div ref={wrapRef} data-env-zone="golden" style={{ height: '320vh', position: 'relative' }}>
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        {/* Nền đổi theo chặng */}
        {journey.map((s, i) => (
          <div
            key={s.id}
            aria-hidden={i !== stageIndex}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === stageIndex ? 1 : 0 }}
          >
            <AssetImage
              id={s.assetId}
              sizes="full"
              fill
              scrim="full"
            />
          </div>
        ))}
        {/* Lối đi ba lớp ánh sáng — ảnh gốc của ý niệm ba chặng, đặt chìm dưới cùng */}
        <AssetImage id="kit-06-06-three-journey-light-path" sizes="full" fill className="opacity-20" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgb(5 5 7 / 0.88), rgb(5 5 7 / 0.35) 62%, rgb(5 5 7 / 0.7))' }}
        />

        {/* Đường vô cực */}
        <svg
          viewBox="0 0 800 320"
          className="pointer-events-none absolute left-1/2 top-1/2 w-[140vw] max-w-[1500px] -translate-x-1/2 -translate-y-1/2 opacity-70 md:w-[92vw]"
          aria-hidden
        >
          <defs>
            <linearGradient id="obn-infinity" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7b2cff" />
              <stop offset="45%" stopColor="#ff2e9a" />
              <stop offset="100%" stopColor="#f5b942" />
            </linearGradient>
          </defs>
          <path
            d={INFINITY_PATH}
            fill="none"
            stroke="rgb(244 241 234 / 0.14)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d={INFINITY_PATH}
            fill="none"
            stroke="url(#obn-infinity)"
            strokeWidth="2.5"
            strokeLinecap="round"
            style={{
              strokeDasharray: 1820,
              strokeDashoffset: 1820 * (1 - progress),
              filter: 'drop-shadow(0 0 14px rgb(255 46 154 / 0.5))',
            }}
          />
          {journey.map((s, i) => {
            const at = NODES[i];
            const reached = progress >= i / journey.length;
            return (
              <g key={s.id} transform={`translate(${at[0]} ${at[1]})`}>
                <circle r={reached ? 9 : 5} fill={s.accent} opacity={reached ? 1 : 0.35} style={{ transition: 'r 400ms' }} />
                <circle r="20" fill="none" stroke={s.accent} strokeWidth="1" opacity={reached ? 0.5 : 0.12} />
              </g>
            );
          })}
        </svg>

        <div className="wrap relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="kicker" style={{ color: 'rgb(244 241 234 / 0.55)' }}>
              Hành trình · chặng {stage.index} / {journey.length}
            </p>
            <h2
              key={stage.id}
              className="font-display t-mega mt-4"
              style={{ color: '#f4f1ea', animation: 'obn-reveal 620ms var(--ease-reveal) both' }}
            >
              {stage.title}
            </h2>
            <p className="font-display mt-2 text-[0.9rem] tracking-[0.34em]" style={{ color: stage.accent }}>
              {stage.en}
            </p>
            <p className="lede mt-7" style={{ color: 'rgb(244 241 234 / 0.82)' }}>
              {stage.lead}
            </p>
            <p className="mt-4 max-w-[52ch] text-[0.92rem] leading-relaxed" style={{ color: 'rgb(244 241 234 / 0.6)' }}>
              {stage.body}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {stage.keywords.map((k) => (
                <li
                  key={k}
                  className="rounded-full border px-3 py-1 text-[0.7rem] uppercase tracking-[0.16em]"
                  style={{ borderColor: `${stage.accent}55`, color: 'rgb(244 241 234 / 0.8)' }}
                >
                  {k}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden justify-self-end lg:block">
            <AssetImage
              key={stage.portraitAssetId}
              id={stage.portraitAssetId}
              sizes="third"
              ratio="3 / 4"
              className="w-[min(30vw,340px)] rounded-[var(--radius-md)]"
              style={{ boxShadow: 'var(--env-shadow)' }}
            />
          </div>
        </div>

        <div className="wrap relative mt-10 flex items-center gap-3">
          {journey.map((s, i) => (
            <span
              key={s.id}
              className="h-0.5 flex-1 rounded-full transition-colors duration-500"
              style={{ background: i <= stageIndex ? s.accent : 'rgb(244 241 234 / 0.16)' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Hai vòng lồng nhau thành dải vô cực — lấy tinh thần từ hai trái tim của logo. */
const INFINITY_PATH =
  'M120,160 C120,60 260,60 340,130 C390,175 410,175 460,130 C540,60 680,60 680,160 C680,260 540,260 460,190 C410,145 390,145 340,190 C260,260 120,260 120,160 Z';

const NODES: [number, number][] = [
  [120, 160],
  [400, 160],
  [680, 160],
];
