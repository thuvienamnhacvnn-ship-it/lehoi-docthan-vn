'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Environment } from '@/data/festival';

interface EnvContext {
  env: Environment;
  progress: number;
}

const Ctx = createContext<EnvContext>({ env: 'night', progress: 0 });

export const useEnvironment = () => useContext(Ctx);

/**
 * NGÀY → GIỜ VÀNG → ĐÊM (§03, §17-B).
 * Mỗi section khai báo data-env-zone="day|golden|night"; section nào đang chiếm
 * phần giữa màn hình thì môi trường của trang đổi theo. Không cướp thao tác cuộn.
 */
export function EnvironmentProvider({
  children,
  initial = 'night',
}: {
  children: React.ReactNode;
  initial?: Environment;
}) {
  const [env, setEnv] = useState<Environment>(initial);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.env = initial;

    const zones = Array.from(document.querySelectorAll<HTMLElement>('[data-env-zone]'));
    if (zones.length === 0) return;

    let raf = 0;
    const measure = () => {
      raf = 0;
      const mid = window.innerHeight * 0.45;
      let current: Environment = initial;
      for (const zone of zones) {
        const r = zone.getBoundingClientRect();
        if (r.top <= mid && r.bottom > mid) {
          current = (zone.dataset.envZone as Environment) ?? initial;
          break;
        }
        if (r.top > mid) break;
        current = (zone.dataset.envZone as Environment) ?? current;
      }
      setEnv((prev) => {
        if (prev !== current) root.dataset.env = current;
        return current;
      });
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
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
  }, [initial]);

  const value = useMemo(() => ({ env, progress }), [env, progress]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
