'use client';

import { useEffect, useRef, type ElementType, type ReactNode } from 'react';

/**
 * TIÊU ĐỀ ĐỘNG (§04 — kinetic typography).
 *
 * Tiêu đề không mờ-rồi-hiện cả khối nữa: từng chữ trồi lên và rõ dần, hơi nghiêng rồi
 * đứng thẳng, lệch nhau vài chục mili giây nên câu chữ "chạy" từ trái sang.
 *
 * Cách làm: sau khi component gắn vào DOM mới đi bọc từng từ. Nhờ vậy tiêu đề nhận được
 * JSX bất kỳ (span đổi màu, <br/>, gold-text) mà không phải tách chuỗi ở phía server —
 * HTML render ra vẫn là câu chữ bình thường, tốt cho SEO và trình đọc màn hình.
 *
 * Tôn trọng prefers-reduced-motion: hiện thẳng, không bọc gì cả.
 */
export function KineticTitle({
  as: Tag = 'h2',
  className = '',
  children,
  stagger = 52,
  delay = 0,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  /** Khoảng lệch giữa hai từ (ms). */
  stagger?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || el.dataset.kt) return;
    el.dataset.kt = '1';

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('kt-in');
      return;
    }

    let index = 0;

    /** Bọc trọn một phần tử thành một đơn vị chuyển động (không cắt nhỏ bên trong). */
    const wrapWhole = (el: Element) => {
      const outer = document.createElement('span');
      outer.className = 'kt-w';
      const inner = document.createElement('span');
      inner.className = 'kt-i';
      inner.style.setProperty('--kt-i', String(index++));
      el.replaceWith(outer);
      outer.appendChild(inner);
      inner.appendChild(el);
    };

    /**
     * Chữ tô gradient (gold-text, t-neon) KHÔNG được cắt thành từng từ: mỗi từ bị
     * `overflow` tách khỏi vùng background-clip của thẻ cha nên chữ biến mất.
     * Những thẻ đó chạy nguyên khối, phần còn lại vẫn cắt theo từ.
     */
    const isGradientText = (el: Element) =>
      el.classList.contains('gold-text') || el.classList.contains('t-neon');

    const wrapWords = (node: Node) => {
      for (const child of Array.from(node.childNodes)) {
        if (child.nodeType === Node.ELEMENT_NODE && isGradientText(child as Element)) {
          wrapWhole(child as Element);
          continue;
        }
        if (child.nodeType === Node.TEXT_NODE) {
          const text = child.textContent ?? '';
          if (!text.trim()) continue;
          const frag = document.createDocumentFragment();
          for (const part of text.split(/(\s+)/)) {
            if (!part) continue;
            if (/^\s+$/.test(part)) {
              frag.appendChild(document.createTextNode(part));
              continue;
            }
            const outer = document.createElement('span');
            outer.className = 'kt-w';
            const inner = document.createElement('span');
            inner.className = 'kt-i';
            inner.style.setProperty('--kt-i', String(index++));
            inner.textContent = part;
            outer.appendChild(inner);
            frag.appendChild(outer);
          }
          child.replaceWith(frag);
        } else if (child.nodeType === Node.ELEMENT_NODE && (child as Element).tagName !== 'BR') {
          wrapWords(child);
        }
      }
    };

    wrapWords(el);
    el.style.setProperty('--kt-step', `${stagger}ms`);
    el.style.setProperty('--kt-delay', `${delay}ms`);

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          el.classList.add('kt-in');
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [stagger, delay]);

  const Component = Tag as ElementType;
  return (
    <Component ref={ref} className={`kt ${className}`}>
      {children}
    </Component>
  );
}
