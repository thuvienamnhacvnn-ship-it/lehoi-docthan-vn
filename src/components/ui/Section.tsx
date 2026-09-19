import type { ReactNode } from 'react';
import { Reveal } from '@/components/system/Reveal';
import { KineticTitle } from '@/components/system/KineticTitle';

/**
 * Khối nội dung chuẩn. Bố cục lệch tâm theo kiểu tạp chí: tiêu đề không căn giữa,
 * nhãn nhỏ nằm trên, phần dẫn giữ trong bề rộng đọc được.
 *
 * Hiệu ứng rê chuột lấy từ hệ `fx-*` (xem src/app/hover.css): nhãn nhỏ giãn chữ và
 * mọc gạch vàng, tiêu đề có tia sáng quét qua. Cả hai đều kín đáo — tiêu đề trang
 * không phải chỗ để phô diễn.
 */
export function SectionHeader({
  kicker,
  title,
  lead,
  align = 'left',
  aside,
  id,
}: {
  kicker?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: 'left' | 'center' | 'split' | 'wide';
  aside?: ReactNode;
  id?: string;
}) {
  /**
   * 'wide' — dùng khi tiêu đề dài.
   * Ở 'split' tiêu đề bị nhốt trong cột 1.25fr nên câu dài vỡ thành bốn dòng, chữ cuối
   * rơi lẻ một mình, còn đoạn dẫn bị đẩy xuống đáy cột phải → khối mất cân.
   * Ở đây tiêu đề chiếm trọn chiều ngang (ngắt dòng do mình quyết), gạch ngang chia khối,
   * rồi đoạn dẫn và phần phụ mới xếp hàng bên dưới.
   */
  if (align === 'wide') {
    return (
      <div id={id} className="group">
        <Reveal>{kicker && <p className="kicker fx-t-kicker mb-5">{kicker}</p>}</Reveal>
        <KineticTitle className="font-display t-xl fx-t-sweep">{title}</KineticTitle>
        {(lead || aside) && (
          <Reveal delay={90}>
            <hr className="rule mt-9 mb-8" />
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-start">
              {lead && <p className="lede">{lead}</p>}
              {aside}
            </div>
          </Reveal>
        )}
      </div>
    );
  }

  if (align === 'split') {
    return (
      <div id={id} className="group grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:items-end">
        <div>
          <Reveal>{kicker && <p className="kicker fx-t-kicker mb-4">{kicker}</p>}</Reveal>
          <KineticTitle className="font-display t-xl fx-t-sweep">{title}</KineticTitle>
        </div>
        <Reveal delay={90}>{lead && <p className="lede">{lead}</p>}</Reveal>
        {aside}
      </div>
    );
  }

  return (
    <div id={id} className={`group ${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-4xl'}`}>
      <Reveal>{kicker && <p className="kicker fx-t-kicker mb-4">{kicker}</p>}</Reveal>
      <KineticTitle className="font-display t-xl fx-t-sweep">{title}</KineticTitle>
      {lead && (
        <Reveal delay={90}>
          <p className={`lede mt-6 ${align === 'center' ? 'mx-auto' : ''}`}>{lead}</p>
        </Reveal>
      )}
      {aside}
    </div>
  );
}

/** Số lớn kiểu dữ liệu — dùng cho mốc, thứ tự chặng, chỉ số. */
export function BigNumber({ value, label }: { value: string; label: string }) {
  return (
    <div className="group">
      <p className="num-oversized fx-i-beat text-[clamp(2.6rem,6vw,5rem)]" style={{ color: 'var(--env-accent)' }}>
        {value}
      </p>
      <p className="kicker fx-t-kicker mt-3">{label}</p>
    </div>
  );
}

/** Nhãn nhỏ dạng viên thuốc. */
export function Tag({ children, color }: { children: ReactNode; color?: string }) {
  return (
    <span
      className="fx-i-bob inline-flex items-center rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-300"
      style={{ borderColor: color ? `${color}55` : 'var(--env-card-line)', color: color ?? 'var(--env-muted)' }}
    >
      {children}
    </span>
  );
}
