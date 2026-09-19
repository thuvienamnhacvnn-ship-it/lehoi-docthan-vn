'use client';

import { useEffect, useRef } from 'react';

/**
 * DÀN ĐÈN SÂN KHẤU (§03, §17-E).
 *
 * Mô phỏng dàn moving head thật chứ không phải mấy vệt sáng nhấp nháy:
 *  - mỗi đèn là một khối sáng hình nón toả ra từ giàn đèn phía trên, sáng đậm ở gốc
 *    và loãng dần ra xa, vẽ chồng theo kiểu cộng sáng (`lighter`) nên chỗ giao nhau tự ửng lên;
 *  - đầu đèn quét theo hai dao động lệch chu kỳ, nên đường quét không bao giờ lặp lại y hệt;
 *  - có nhịp: cứ mỗi ô nhịp, cả dàn "đánh" một cái rồi dịu xuống, giống lúc nhạc vào phách;
 *  - thêm lớp sương và vệt loé ở gốc đèn để ánh sáng có khối, không phẳng như hình vẽ.
 *
 * Kỷ luật: chỉ chạy khi banner nằm trong màn hình, tự dừng khi cuộn qua, tắt hẳn khi người
 * dùng chọn giảm chuyển động, và không bao giờ vượt quá độ sáng đã đặt để chữ luôn đọc được.
 */

interface Beam {
  /** Vị trí gốc đèn trên giàn, theo tỉ lệ bề ngang. */
  originX: number;
  originY: number;
  /** Góc nghỉ và biên độ quét (radian). */
  baseAngle: number;
  swing: number;
  speed: number;
  phase: number;
  /** Dao động phụ để đường quét không đều tăm tắp. */
  wobbleSpeed: number;
  width: number;
  color: [number, number, number];
  intensity: number;
}

const PALETTE: [number, number, number][] = [
  [255, 46, 154], // magenta
  [123, 44, 255], // tím điện
  [47, 107, 255], // xanh neon
  [0, 209, 255], // cyan
  [245, 185, 66], // vàng ấm
];

const TAU = Math.PI * 2;

export function StageLights({
  className = '',
  count = 9,
  intensity = 1,
  bpm = 124,
  direction = 'down',
}: {
  className?: string;
  count?: number;
  /** Hệ số độ sáng tổng, 0–1.4. Trên banner để 1; ở các khối khác nên nhẹ hơn. */
  intensity?: number;
  bpm?: number;
  /**
   * 'down' — đèn treo trên giàn, chiếu xuống.
   * 'up'   — đèn đặt dưới sàn sân khấu, hắt ngược từ chân người lên trời;
   *          đây là kiểu ánh sáng trong ảnh hero nên banner dùng hướng này.
   */
  direction?: 'down' | 'up';
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    const host = hostRef.current;
    if (!canvas || !host) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let beams: Beam[] = [];

    const build = () => {
      // Chặn ở 1.5 để máy yếu không phải tô gấp bốn số điểm ảnh
      const dpr = Math.min(1.5, window.devicePixelRatio || 1);
      w = host.clientWidth;
      h = host.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const up = direction === 'up';
      /* Màn hình hẹp thì cùng số chùm đèn ấy chen nhau, nền loạn và chữ khó đọc.
         Bớt đèn và hạ sáng theo bề ngang thật, không theo loại thiết bị. */
      const narrow = w < 640;
      const n = narrow ? Math.max(5, Math.round(count * 0.55)) : count;
      beams = Array.from({ length: n }, (_, i) => {
        const t = n === 1 ? 0.5 : i / (n - 1);
        // Giàn đèn hơi cong (đèn trên), hoặc dãy đèn sàn hơi lõm về giữa (đèn dưới)
        const arc = Math.abs(t - 0.5) * 2;
        return {
          originX: up ? 0.1 + t * 0.8 : 0.06 + t * 0.88,
          originY: up ? 1.02 - arc * 0.04 : -0.04 + arc * 0.05,
          // Đèn sàn hắt lên thì xoè ra hai bên mạnh hơn, giống dàn laser dưới chân sân khấu
          baseAngle: up ? -Math.PI / 2 + (t - 0.5) * 1.5 : Math.PI / 2 + (t - 0.5) * 0.9,
          swing: up ? 0.2 + (i % 3) * 0.09 : 0.34 + (i % 3) * 0.12,
          speed: 0.16 + (i % 4) * 0.045,
          phase: (i * TAU) / n + (i % 2) * 0.8,
          wobbleSpeed: 0.53 + (i % 5) * 0.11,
          width: (up ? 0.016 + (i % 3) * 0.006 : 0.022 + (i % 3) * 0.008) * (narrow ? 0.72 : 1),
          color: PALETTE[i % PALETTE.length],
          intensity: (0.72 + ((i * 37) % 10) / 24) * (narrow ? 0.7 : 1),
        };
      });
    };

    let raf = 0;
    let running = false;
    const start = performance.now();
    const beatMs = 60000 / bpm;

    const draw = (now: number) => {
      const t = (now - start) / 1000;

      // Nhịp: 0 ngay lúc vào phách rồi tắt dần -> cả dàn "đánh" một cái
      const beatPhase = ((now - start) % (beatMs * 4)) / (beatMs * 4);
      const hit = Math.pow(1 - Math.min(1, beatPhase * 4), 2.2);
      const breathe = 0.86 + Math.sin(t * 0.45) * 0.14;

      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';

      for (const b of beams) {
        const ox = b.originX * w;
        const oy = b.originY * h;

        // Hai dao động lệch chu kỳ -> quét không lặp lại
        const angle =
          b.baseAngle +
          Math.sin(t * b.speed * TAU + b.phase) * b.swing +
          Math.sin(t * b.wobbleSpeed + b.phase * 1.7) * 0.06;

        const len = h * 1.5;
        const tx = ox + Math.cos(angle) * len;
        const ty = oy + Math.sin(angle) * len;

        // Nón sáng: hẹp ở gốc, xoè dần ra xa
        const spread = b.width * w * (1 + hit * 0.25);
        const nx = -Math.sin(angle);
        const ny = Math.cos(angle);
        const nearHalf = spread * 0.28;
        const farHalf = spread * 2.9;

        const [r, g, bl] = b.color;
        const alpha = b.intensity * intensity * breathe * (0.5 + hit * 0.5);

        const grad = ctx.createLinearGradient(ox, oy, tx, ty);
        grad.addColorStop(0, `rgba(${r},${g},${bl},${(0.56 * alpha).toFixed(3)})`);
        grad.addColorStop(0.28, `rgba(${r},${g},${bl},${(0.28 * alpha).toFixed(3)})`);
        grad.addColorStop(0.72, `rgba(${r},${g},${bl},${(0.09 * alpha).toFixed(3)})`);
        grad.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.beginPath();
        ctx.moveTo(ox + nx * nearHalf, oy + ny * nearHalf);
        ctx.lineTo(tx + nx * farHalf, ty + ny * farHalf);
        ctx.lineTo(tx - nx * farHalf, ty - ny * farHalf);
        ctx.lineTo(ox - nx * nearHalf, oy - ny * nearHalf);
        ctx.closePath();
        ctx.fillStyle = grad;
        ctx.fill();

        // Lõi sáng mảnh chạy giữa nón -> cho cảm giác có khối
        const core = ctx.createLinearGradient(ox, oy, tx, ty);
        core.addColorStop(0, `rgba(255,255,255,${(0.26 * alpha).toFixed(3)})`);
        core.addColorStop(0.35, `rgba(${r},${g},${bl},${(0.16 * alpha).toFixed(3)})`);
        core.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.moveTo(ox + nx * nearHalf * 0.35, oy + ny * nearHalf * 0.35);
        ctx.lineTo(tx + nx * farHalf * 0.22, ty + ny * farHalf * 0.22);
        ctx.lineTo(tx - nx * farHalf * 0.22, ty - ny * farHalf * 0.22);
        ctx.lineTo(ox - nx * nearHalf * 0.35, oy - ny * nearHalf * 0.35);
        ctx.closePath();
        ctx.fillStyle = core;
        ctx.fill();

        // Loé ở gốc đèn
        const flare = ctx.createRadialGradient(ox, oy, 0, ox, oy, spread * 2.4);
        flare.addColorStop(0, `rgba(255,255,255,${(0.62 * alpha).toFixed(3)})`);
        flare.addColorStop(0.25, `rgba(${r},${g},${bl},${(0.32 * alpha).toFixed(3)})`);
        flare.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.arc(ox, oy, spread * 2.4, 0, TAU);
        ctx.fillStyle = flare;
        ctx.fill();
      }

      // Sương: đèn trên thì đọng ở đáy khung, đèn dưới thì loang lên từ mặt sàn
      if (direction === 'up') {
        const glow = ctx.createLinearGradient(0, h, 0, h * 0.35);
        glow.addColorStop(0, `rgba(255,46,154,${(0.1 * intensity * breathe).toFixed(3)})`);
        glow.addColorStop(0.35, `rgba(123,44,255,${(0.05 * intensity * breathe).toFixed(3)})`);
        glow.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = glow;
        ctx.fillRect(0, h * 0.35, w, h * 0.65);
      } else {
        const haze = ctx.createLinearGradient(0, h * 0.45, 0, h);
        haze.addColorStop(0, 'rgba(0,0,0,0)');
        haze.addColorStop(1, `rgba(123,44,255,${(0.05 * intensity * breathe).toFixed(3)})`);
        ctx.fillStyle = haze;
        ctx.fillRect(0, h * 0.45, w, h * 0.55);
      }

      ctx.globalCompositeOperation = 'source-over';
      raf = window.requestAnimationFrame(draw);
    };

    const run = (on: boolean) => {
      if (on && !running) {
        running = true;
        raf = window.requestAnimationFrame(draw);
      } else if (!on && running) {
        running = false;
        window.cancelAnimationFrame(raf);
      }
    };

    build();
    const io = new IntersectionObserver((e) => run(e[0].isIntersecting), { threshold: 0.02 });
    io.observe(host);

    const onResize = () => build();
    window.addEventListener('resize', onResize);
    const onVisibility = () => run(!document.hidden && running);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      io.disconnect();
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
      window.cancelAnimationFrame(raf);
      running = false;
    };
  }, [count, intensity, bpm, direction]);

  return (
    <div ref={hostRef} aria-hidden className={`pointer-events-none absolute inset-0 ${className}`}>
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
