'use client';

import { useEffect, useRef, type ElementType, type ReactNode } from 'react';

/**
 * Motion family REVEAL (§16). Một IntersectionObserver dùng chung cho cả trang,
 * chạy một lần rồi thôi — không giữ listener, không tốn CPU khi cuộn tiếp.
 */
let observer: IntersectionObserver | null = null;

function ensureObserver() {
  if (observer || typeof window === 'undefined') return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer?.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
  );
  return observer;
}

interface Props {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  id?: string;
}

export function Reveal({ children, as: Tag = 'div', delay = 0, className = '', id }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-in');
      return;
    }
    const obs = ensureObserver();
    obs?.observe(el);
    return () => obs?.unobserve(el);
  }, []);

  const Component = Tag as ElementType;

  return (
    <Component
      ref={ref}
      id={id}
      className={`reveal ${className}`}
      style={{ '--delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Component>
  );
}
