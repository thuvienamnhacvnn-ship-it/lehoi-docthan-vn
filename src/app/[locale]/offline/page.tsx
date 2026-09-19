import { L } from '../../../components/system/L';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Đang mất kết nối',
  description: 'Thiết bị đang không có mạng. Những trang đã xem vẫn mở được.',
};

/**
 * Trang thợ chạy nền trả về khi mở một trang chưa từng xem mà máy lại mất mạng.
 * Cố ý không có ảnh: lúc này tải ảnh là hỏng nốt.
 */
export default function OfflinePage() {
  return (
    <div className="wrap flex min-h-[70svh] flex-col justify-center py-24">
      <p className="kicker" style={{ color: 'var(--color-gold)' }}>
        Không có kết nối
      </p>
      <h1 className="font-display mt-4 text-[clamp(2rem,7vw,3.6rem)] leading-[1.02]">
        Máy đang ngoài vùng sóng
      </h1>
      <p className="lede mt-5 max-w-[34rem]" style={{ color: 'var(--env-muted, rgb(244 241 234 / 0.7))' }}>
        Những trang bạn đã mở trước đó vẫn xem lại được. Khi có mạng trở lại, trang sẽ tự tải nội dung mới.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <L
          href="/"
          className="fx-b-press rounded-full px-6 py-3 text-[0.88rem] font-bold"
          style={{ background: 'var(--color-gold)', color: '#16120a' }}
        >
          Về trang chủ
        </L>
        <L
          href="/program"
          className="fx-b-fill fx-b-press rounded-full border px-6 py-3 text-[0.88rem] font-semibold"
          style={{ borderColor: 'var(--env-card-line)', color: 'var(--env-fg)' }}
        >
          Lịch trình đã lưu
        </L>
      </div>
    </div>
  );
}
