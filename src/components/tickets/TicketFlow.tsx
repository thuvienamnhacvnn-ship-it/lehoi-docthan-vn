'use client';

import { useState } from 'react';
import { AssetImage } from '@/components/media/AssetImage';
import { Pending } from '@/components/system/Pending';
import { useWallet } from '@/hooks/useFestivalState';
import { checkoutSteps, ticketTiers } from '@/data/tickets';

/**
 * Luồng vé (§10 TICKETING).
 *
 * KHÔNG nối cổng thanh toán nào. Luồng dừng lại đúng ở bước thanh toán và nói rõ
 * đây là lớp tích hợp còn trống. Vé tạo ra là VÉ DEMO, lưu trên máy người dùng,
 * dùng để chạy thử kiến trúc ví vé + mã check-in.
 */
export function TicketFlow() {
  const wallet = useWallet();
  const [tierId, setTierId] = useState(ticketTiers[1].id);
  const [holder, setHolder] = useState('');
  const [promo, setPromo] = useState('');
  const [step, setStep] = useState(0);
  const [issued, setIssued] = useState<string | null>(null);

  const tier = ticketTiers.find((t) => t.id === tierId)!;

  const next = () => setStep((s) => Math.min(checkoutSteps.length - 1, s + 1));
  const back = () => setStep((s) => Math.max(0, s - 1));

  const issue = () => {
    const t = wallet.add(tier.id, tier.name, holder);
    setIssued(t.id);
    setStep(checkoutSteps.length - 1);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="surface p-6 sm:p-8">
        {/* Thanh bước */}
        <ol className="mb-8 flex flex-wrap gap-x-2 gap-y-2">
          {checkoutSteps.map((s, i) => (
            <li key={s.id} className="flex items-center gap-2">
              <span
                className="grid h-7 w-7 place-items-center rounded-full text-[0.7rem] font-bold"
                style={{
                  background: i <= step ? 'var(--color-gold)' : 'transparent',
                  border: i <= step ? 'none' : '1px solid var(--env-card-line)',
                  color: i <= step ? '#16120a' : 'var(--env-faint)',
                }}
              >
                {i + 1}
              </span>
              <span className="text-[0.74rem]" style={{ color: i === step ? 'var(--env-fg)' : 'var(--env-faint)' }}>
                {s.label}
              </span>
              {i < checkoutSteps.length - 1 && (
                <span className="mx-1 h-px w-4" style={{ background: 'var(--env-line)' }} aria-hidden />
              )}
            </li>
          ))}
        </ol>

        {step === 0 && (
          <fieldset>
            <legend className="font-display text-[1.2rem]">Chọn hạng vé</legend>
            <div className="mt-5 space-y-2.5">
              {ticketTiers.map((t) => (
                <label
                  key={t.id}
                  className="flex cursor-pointer items-start gap-4 rounded-[var(--radius-sm)] border p-4 transition-colors"
                  style={{
                    borderColor: t.id === tierId ? t.accent : 'var(--env-card-line)',
                    background: t.id === tierId ? 'var(--env-card)' : 'transparent',
                  }}
                >
                  <input
                    type="radio"
                    name="tier"
                    value={t.id}
                    checked={t.id === tierId}
                    onChange={() => setTierId(t.id)}
                    className="mt-1 accent-[var(--color-gold)]"
                  />
                  <span className="min-w-0">
                    <span className="block font-semibold">{t.name}</span>
                    <span className="mt-1 block text-[0.82rem]" style={{ color: 'var(--env-faint)' }}>
                      {t.lead}
                    </span>
                    <span className="mt-2 block">
                      <Pending k="TICKET_PRICE" />
                    </span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        )}

        {step === 1 && (
          <div>
            <p className="font-display text-[1.2rem]">Thông tin người nhận vé</p>
            <label className="mt-5 block">
              <span className="kicker">Họ và tên</span>
              <input
                value={holder}
                onChange={(e) => setHolder(e.target.value)}
                placeholder="Nguyễn Văn A"
                className="mt-2 w-full rounded-[var(--radius-sm)] border bg-transparent px-4 py-3 text-[0.92rem]"
                style={{ borderColor: 'var(--env-card-line)' }}
              />
            </label>
            <p className="mt-4 text-[0.78rem]" style={{ color: 'var(--env-faint)' }}>
              Bản chạy thử này không gửi dữ liệu đi đâu cả — thông tin chỉ nằm trong trình duyệt của bạn.
            </p>
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="font-display text-[1.2rem]">Mã ưu đãi</p>
            <label className="mt-5 block">
              <span className="kicker">Nhập mã nếu có</span>
              <input
                value={promo}
                onChange={(e) => setPromo(e.target.value.toUpperCase())}
                placeholder="VÍ DỤ: OBN2026"
                className="mt-2 w-full rounded-[var(--radius-sm)] border bg-transparent px-4 py-3 text-[0.92rem] uppercase"
                style={{ borderColor: 'var(--env-card-line)' }}
              />
            </label>
            <p className="mt-4 text-[0.78rem]" style={{ color: 'var(--env-faint)' }}>
              Chưa có chương trình khuyến mãi nào được công bố, nên hệ thống chưa kiểm tra mã.
            </p>
          </div>
        )}

        {step === 3 && (
          <div>
            <p className="font-display text-[1.2rem]">Xác nhận đơn</p>
            <dl className="mt-5 space-y-3 text-[0.9rem]">
              <Row label="Hạng vé" value={tier.name} />
              <Row label="Người nhận" value={holder.trim() || 'Chưa nhập'} />
              <Row label="Mã ưu đãi" value={promo || 'Không có'} />
              <div className="flex items-baseline justify-between gap-4 border-t pt-3" style={{ borderColor: 'var(--env-line)' }}>
                <dt style={{ color: 'var(--env-faint)' }}>Tổng tiền</dt>
                <dd>
                  <Pending k="TICKET_PRICE" tone="gold" />
                </dd>
              </div>
            </dl>
          </div>
        )}

        {step === 4 && (
          <div>
            <p className="font-display text-[1.2rem]">Thanh toán</p>
            <div
              className="mt-5 rounded-[var(--radius-sm)] border border-dashed p-6"
              style={{ borderColor: 'rgb(245 185 66 / 0.45)' }}
            >
              <p className="kicker mb-3" style={{ color: 'var(--color-gold)' }}>
                Lớp tích hợp còn trống
              </p>
              <p className="text-[0.88rem] leading-relaxed" style={{ color: 'var(--env-muted)' }}>
                Website chưa nối với bất kỳ nhà cung cấp thanh toán nào. Kiến trúc đã tách sẵn: khi ban tổ chức chọn
                cổng thanh toán, chỉ cần cắm vào đúng bước này, các bước còn lại giữ nguyên.
              </p>
              <button
                type="button"
                onClick={issue}
                className="mt-6 rounded-full px-6 py-3 text-[0.86rem] font-bold"
                style={{ background: 'var(--color-gold)', color: '#16120a' }}
              >
                Phát hành vé demo để xem ví vé
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            <p className="font-display text-[1.2rem]">Vé đã vào ví</p>
            <p className="mt-4 text-[0.9rem]" style={{ color: 'var(--env-muted)' }}>
              {issued
                ? 'Vé demo đã được tạo. Xem mã QR mô phỏng ở cột bên phải hoặc trong trang Tài khoản.'
                : 'Chưa có vé nào được phát hành trong phiên này.'}
            </p>
          </div>
        )}

        <div className="mt-8 flex items-center justify-between">
          <button
            type="button"
            onClick={back}
            disabled={step === 0}
            className="rounded-full border px-5 py-2.5 text-[0.8rem] font-semibold disabled:opacity-35"
            style={{ borderColor: 'var(--env-card-line)' }}
          >
            Quay lại
          </button>
          <button
            type="button"
            onClick={next}
            disabled={step >= checkoutSteps.length - 1}
            className="rounded-full px-5 py-2.5 text-[0.8rem] font-bold disabled:opacity-35"
            style={{ background: 'var(--env-fg)', color: 'var(--env-bg)' }}
          >
            Tiếp tục
          </button>
        </div>
      </div>

      {/* Ví vé */}
      <aside>
        <p className="kicker mb-4">Ví vé</p>
        {!wallet.ready ? null : wallet.tickets.length === 0 ? (
          <div className="surface p-6">
            <AssetImage id="kit-01-19-ticket" sizes="third" ratio="16 / 9" className="rounded-[var(--radius-sm)]" />
            <p className="mt-5 text-[0.88rem]" style={{ color: 'var(--env-muted)' }}>
              Chưa có vé nào. Đi hết luồng bên trái để xem vé điện tử trông thế nào trong ví.
            </p>
          </div>
        ) : (
          <ul className="space-y-3">
            {wallet.tickets.map((t) => (
              <li key={t.id} className="surface overflow-hidden">
                <div className="relative">
                  <AssetImage id="kit-01-19-ticket" sizes="third" ratio="16 / 9" className="w-full" scrim="soft" />
                  <span
                    className="absolute right-3 top-3 rounded-full px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.16em]"
                    style={{ background: 'rgb(5 5 7 / 0.7)', color: 'var(--color-gold)' }}
                  >
                    Vé demo
                  </span>
                </div>
                <div className="p-5">
                  <p className="font-display text-[1.05rem]">{t.tierName}</p>
                  <p className="mt-1 text-[0.82rem]" style={{ color: 'var(--env-faint)' }}>
                    {t.holder}
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <QrPlaceholder seed={t.code} />
                    <div>
                      <p className="num-oversized text-[1rem] tracking-[0.06em]">{t.code}</p>
                      <p className="kicker mt-1.5 text-[0.54rem]">Mã check-in mô phỏng</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => wallet.remove(t.id)}
                    className="mt-4 text-[0.78rem] underline underline-offset-4"
                    style={{ color: 'var(--env-faint)' }}
                  >
                    Xoá vé này
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </aside>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt style={{ color: 'var(--env-faint)' }}>{label}</dt>
      <dd className="text-right font-medium">{value}</dd>
    </div>
  );
}

/** Ô vuông giả lập mã QR, sinh từ chuỗi mã vé — chỉ để minh hoạ luồng check-in. */
export function QrPlaceholder({ seed, size = 72 }: { seed: string; size?: number }) {
  const cells = 9;
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  const bits: boolean[] = [];
  for (let i = 0; i < cells * cells; i++) {
    h = (h * 1103515245 + 12345) >>> 0;
    bits.push(((h >> 16) & 1) === 1);
  }
  return (
    <svg width={size} height={size} viewBox={`0 0 ${cells} ${cells}`} role="img" aria-label={`Mã mô phỏng ${seed}`}>
      <rect width={cells} height={cells} fill="var(--env-fg)" opacity="0.08" />
      {bits.map((on, i) =>
        on ? (
          <rect key={i} x={i % cells} y={Math.floor(i / cells)} width="1" height="1" fill="var(--env-fg)" />
        ) : null,
      )}
    </svg>
  );
}
