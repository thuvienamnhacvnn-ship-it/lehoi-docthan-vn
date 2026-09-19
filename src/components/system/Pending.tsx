'use client';

import { PLACEHOLDERS, type PlaceholderKey } from '@/data/festival';
import { useI18n } from '@/i18n/I18nProvider';

/**
 * Chỗ trống có kiểm soát cho thông tin CHƯA được xác nhận (§26).
 * Không bao giờ vẽ ngày/giá/số liệu giả. Khi dữ liệu thật về, chỉ cần điền `value`
 * trong PLACEHOLDERS là mọi nơi trên web hiện đúng.
 *
 * `value` là dữ liệu thật (một ngày, một địa chỉ) nên KHÔNG dịch; chỉ nhãn và ghi chú
 * đi kèm mới lấy theo thứ tiếng đang đọc.
 */
export function Pending({
  k,
  className = '',
  tone = 'default',
}: {
  k: PlaceholderKey;
  className?: string;
  tone?: 'default' | 'quiet' | 'gold';
}) {
  const { t } = useI18n();
  const p = PLACEHOLDERS[k];
  const text = t.placeholders[k];

  if (p.value) return <span className={className}>{p.value}</span>;

  const styles =
    tone === 'gold'
      ? { borderColor: 'rgb(245 185 66 / 0.45)', color: 'var(--color-gold)' }
      : tone === 'quiet'
        ? { borderColor: 'var(--env-line)', color: 'var(--env-faint)' }
        : { borderColor: 'var(--env-card-line)', color: 'var(--env-muted)' };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 align-middle text-[0.66rem] font-semibold uppercase tracking-[0.18em] ${className}`}
      style={styles}
      title={`${text.label}: ${text.note}`}
      data-placeholder={p.key}
    >
      <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: 'currentColor' }} />
      {t.common.comingSoon}
      <span className="sr-only">
        ({text.label} — {text.note})
      </span>
    </span>
  );
}

/** Nhãn dữ liệu minh hoạ, dùng cho lịch trình / mô phỏng chỉ số (§06). */
export function SampleFlag({ children }: { children?: React.ReactNode }) {
  const { t } = useI18n();
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em]"
      style={{ borderColor: 'rgb(245 185 66 / 0.4)', color: 'var(--color-gold)' }}
    >
      <span aria-hidden>▲</span>
      {children ?? t.common.sampleData}
    </span>
  );
}
