import type { ReactNode } from 'react';
import { AssetImage } from '@/components/media/AssetImage';
import { Reveal } from '@/components/system/Reveal';
import { KineticTitle } from '@/components/system/KineticTitle';

/**
 * Đầu trang con. Ảnh lớn + tiêu đề lệch trái, giữ nhịp điện ảnh của trang chủ
 * mà không lặp lại y nguyên hero.
 *
 * QUAN TRỌNG — ảnh banner để nguyên độ sáng, chữ luôn là chữ sáng trên nền tối.
 * Bản trước phủ một lớp kem lên ảnh ở các trang "ban ngày" để hợp tông giao diện:
 * ảnh bợt hết màu, chữ mất tương phản, banner coi như hỏng. Giao diện sáng là chuyện
 * của phần thân trang; banner thì ảnh phải sống.
 *
 * Khối chữ mang class `on-dark` để mọi thẻ/nhãn bên trong (Tag, Pending…) đọc token sáng.
 * `env` vẫn quyết định môi trường của cả khối (nav và phần dưới đổi theo) và màu chuyển
 * tiếp ở mép dưới để nối liền với section kế tiếp.
 */
export function PageHero({
  kicker,
  title,
  lead,
  assetId,
  mobileAssetId,
  env = 'night',
  height = 'tall',
  /** Vị trí cắt ảnh. Ảnh có người thì thường phải kéo lên trên kẻo cụt đầu. */
  focal,
  children,
}: {
  kicker: string;
  title: ReactNode;
  lead?: ReactNode;
  assetId: string;
  mobileAssetId?: string;
  env?: 'day' | 'golden' | 'night';
  height?: 'tall' | 'short';
  focal?: string;
  children?: ReactNode;
}) {
  /** Màu của section ngay bên dưới — mép banner tan dần vào đúng màu đó. */
  const nextBg = env === 'day' ? 'var(--env-bg)' : '#050507';

  return (
    <section data-env-zone={env} className="relative overflow-hidden" style={{ background: '#050507' }}>
      <AssetImage
        id={assetId}
        mobileId={mobileAssetId}
        sizes="full"
        fill
        className=""
        objectPosition={focal}
      />

      {/* Hạ sáng toàn khung một chút để ảnh ban ngày không nuốt mất chữ */}
      <div className="absolute inset-0" style={{ background: 'rgb(5 5 7 / 0.28)' }} />
      {/* Đổ bóng từ trái sang: đủ tối để chữ đọc được, bên phải vẫn thấy rõ ảnh.
          CHỈ từ md trở lên. Ở bề ngang 390px thì cái dốc ngang này phủ kín cả màn hình
          -> banner thành một mảng đen, ảnh coi như không tồn tại. */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            'linear-gradient(100deg, rgb(5 5 7 / 0.93) 0%, rgb(5 5 7 / 0.82) 30%, rgb(5 5 7 / 0.42) 58%, rgb(5 5 7 / 0.08) 88%)',
        }}
      />
      {/* Điện thoại: đổ bóng theo chiều dọc. Chữ nằm ở đáy nên chỉ cần tối ở đáy,
          nửa trên để ảnh sống. */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            'linear-gradient(to top, rgb(5 5 7 / 0.94) 0%, rgb(5 5 7 / 0.78) 26%, rgb(5 5 7 / 0.3) 58%, rgb(5 5 7 / 0.06) 88%)',
        }}
      />
      {/* Nền tối dưới chân chữ */}
      <div
        className="absolute inset-x-0 bottom-0 h-3/4"
        style={{ background: 'linear-gradient(to top, rgb(5 5 7 / 0.92) 6%, rgb(5 5 7 / 0.35) 45%, transparent 100%)' }}
      />
      {/* Dải chuyển tiếp mỏng xuống section kế tiếp */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
        style={{ background: `linear-gradient(to top, ${nextBg}, transparent)` }}
      />

      <div
        className="wrap on-dark relative flex flex-col justify-end"
        style={{
          minHeight: height === 'tall' ? 'min(74svh, 720px)' : 'min(54svh, 520px)',
          // Trên điện thoại chữ phải nằm gần đáy banner. Đệm cố định 5.5rem để lại một
          // mảng tối rỗng giữa banner và khối đầu tiên, nhìn như trang bị hụt nội dung.
          paddingTop: 'clamp(7rem, 16vh, 9rem)',
          paddingBottom: 'clamp(2.25rem, 6vh, 5.5rem)',
        }}
      >
        <Reveal>
          <p className="kicker" style={{ color: 'rgb(244 241 234 / 0.6)' }}>
            {kicker}
          </p>
          <KineticTitle as="h1" className="font-display t-xl mt-5 max-w-[16ch]">
            {title}
          </KineticTitle>
          {lead && (
            <p className="lede mt-6" style={{ color: 'rgb(244 241 234 / 0.8)' }}>
              {lead}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
