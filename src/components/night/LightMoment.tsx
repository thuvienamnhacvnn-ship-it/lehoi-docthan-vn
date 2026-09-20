'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { AssetImage } from '@/components/media/AssetImage';
import { useI18n } from '@/i18n/I18nProvider';

/**
 * TƯƠNG TÁC CHỮ KÝ E — ONE BEAT LIGHT MOMENT (§17-E).
 *
 * Mô phỏng hàng nghìn vòng tay LED sáng theo một nhịp. Dựng bằng canvas 2D,
 * chỉ chạy khi khối này nằm trong màn hình, dừng hẳn khi cuộn qua — không đốt pin.
 * Kiến trúc sẵn cho âm thanh: `beat()` đang chạy theo đồng hồ, sau này cắm
 * phân tích âm thanh thật vào cùng chỗ đó.
 */
export function LightMoment() {
  const { t } = useI18n();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(true);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  const colors = useMemo(() => ['#ff2e9a', '#7b2cff', '#2f6bff', '#00d1ff', '#f5b942'], []);

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    const host = hostRef.current;
    if (!canvas || !host) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dots: { x: number; y: number; c: string; phase: number; size: number }[] = [];

    const build = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      width = host.clientWidth;
      height = host.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cols = Math.max(24, Math.round(width / 26));
      const rows = Math.max(10, Math.round(height / 30));
      dots = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          // Khán đài dốc: hàng sau cao hơn, thưa dần về phía trên
          const jitterX = (Math.random() - 0.5) * 14;
          const jitterY = (Math.random() - 0.5) * 10;
          dots.push({
            x: (c / (cols - 1)) * width + jitterX,
            y: height - (r / rows) * height * 0.92 + jitterY,
            c: colors[(r + c) % colors.length],
            phase: (c / cols) * Math.PI * 2,
            size: 1.2 + (1 - r / rows) * 1.8,
          });
        }
      }
    };

    let raf = 0;
    let running = false;
    const start = performance.now();

    const frame = (t: number) => {
      const elapsed = (t - start) / 1000;
      // Nhịp 120 BPM — chỗ này sau nối vào phân tích âm thanh thật.
      const beat = (Math.sin(elapsed * Math.PI * 2 * (120 / 60)) + 1) / 2;
      const wave = elapsed * 1.6;

      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'lighter';
      for (const d of dots) {
        const local = (Math.sin(wave - d.phase * 1.4) + 1) / 2;
        const alpha = 0.16 + local * 0.66 * (0.55 + beat * 0.45);
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size * (0.8 + local * 0.9), 0, Math.PI * 2);
        ctx.fillStyle = d.c;
        ctx.globalAlpha = alpha;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = window.requestAnimationFrame(frame);
    };

    const run = (on: boolean) => {
      if (on && !running) {
        running = true;
        raf = window.requestAnimationFrame(frame);
      } else if (!on && running) {
        running = false;
        window.cancelAnimationFrame(raf);
      }
    };

    build();
    const io = new IntersectionObserver((entries) => run(entries[0].isIntersecting && playing), { threshold: 0.15 });
    io.observe(host);

    const onResize = () => build();
    window.addEventListener('resize', onResize);

    return () => {
      io.disconnect();
      window.removeEventListener('resize', onResize);
      window.cancelAnimationFrame(raf);
      running = false;
    };
  }, [colors, playing, reduced]);

  return (
    <section data-env-zone="night" className="relative overflow-hidden" style={{ background: '#050507' }}>
      <div ref={hostRef} className="relative h-[86svh] min-h-[520px] w-full">
        <AssetImage
          id="kit-03-19-synchronized-light-aerial"
          sizes="full"
          fill
          className="opacity-45"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #050507 6%, rgb(5 5 7 / 0.35) 55%, #050507)' }} />
        {!reduced && <canvas ref={canvasRef} className="absolute inset-0" aria-hidden />}

        <div className="wrap absolute inset-x-0 bottom-0 pb-14">
          <p className="kicker" style={{ color: 'rgb(244 241 234 / 0.5)' }}>
            {t.ui.lightMoment.kicker}
          </p>
          <h2 className="font-display t-xl mt-4 max-w-[18ch]" style={{ color: '#f4f1ea' }}>
            ONE BEAT <span className="gold-text">LIGHT MOMENT</span>
          </h2>
          <p className="lede mt-5" style={{ color: 'rgb(244 241 234 / 0.72)' }}>
            {t.ui.lightMoment.body}
          </p>
          {!reduced && (
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              className="mt-6 rounded-full border px-5 py-2.5 text-[0.8rem] font-semibold"
              style={{ borderColor: 'rgb(244 241 234 / 0.3)', color: '#f4f1ea' }}
            >
              {playing ? t.ui.lightMoment.pause : t.ui.lightMoment.play}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
