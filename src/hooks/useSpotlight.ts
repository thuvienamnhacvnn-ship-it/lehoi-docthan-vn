'use client';

import { useCallback, useRef } from 'react';

/**
 * Cấp toạ độ con trỏ cho CSS dưới dạng biến, phục vụ hai hiệu ứng cần JS:
 *   --px / --py : vị trí con trỏ trong phần tử (%)   -> .fx-c-spot (đèn rọi bám con trỏ)
 *   --mx / --my : lệch so với tâm, khoảng -1..1       -> .fx-c-tilt (nghiêng theo con trỏ)
 *
 * Ghi thẳng vào style của phần tử trong rAF, không đi qua state React — rê chuột
 * không được phép làm cả cây component vẽ lại.
 */
export function useSpotlight<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const raf = useRef(0);
  const next = useRef<{ x: number; y: number } | null>(null);

  const apply = useCallback(() => {
    raf.current = 0;
    const el = ref.current;
    const p = next.current;
    if (!el || !p) return;
    el.style.setProperty('--px', `${p.x * 100}%`);
    el.style.setProperty('--py', `${p.y * 100}%`);
    el.style.setProperty('--mx', String((p.x - 0.5) * 2));
    el.style.setProperty('--my', String((p.y - 0.5) * 2));
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<T>) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      next.current = { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height };
      if (!raf.current) raf.current = window.requestAnimationFrame(apply);
    },
    [apply],
  );

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    if (raf.current) {
      window.cancelAnimationFrame(raf.current);
      raf.current = 0;
    }
    el.style.setProperty('--mx', '0');
    el.style.setProperty('--my', '0');
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
