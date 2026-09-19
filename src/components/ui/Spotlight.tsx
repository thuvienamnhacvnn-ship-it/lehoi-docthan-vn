'use client';

import type { ReactNode } from 'react';
import { useSpotlight } from '@/hooks/useSpotlight';

/**
 * Bọc quanh một thẻ để bật hai hiệu ứng cần biết vị trí con trỏ:
 * đèn rọi bám theo chuột (.fx-c-spot) và nghiêng nhẹ theo chuột (.fx-c-tilt).
 * Trên cảm ứng không có gì xảy ra — CSS đã khoá trong @media (hover: hover).
 */
export function Spotlight({
  children,
  className = '',
  tilt = false,
  as: Tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
  as?: 'div' | 'article' | 'li';
}) {
  const { ref, onMouseMove, onMouseLeave } = useSpotlight<HTMLDivElement>();
  const Component = Tag as 'div';

  return (
    <Component
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`fx-c-spot ${tilt ? 'fx-c-tilt' : ''} ${className}`}
    >
      {children}
    </Component>
  );
}
