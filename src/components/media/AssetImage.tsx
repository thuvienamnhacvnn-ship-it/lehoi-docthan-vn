import type { CSSProperties } from 'react';
import { getAsset, SIZES } from '@/lib/assets';

type SizeKey = keyof typeof SIZES;

interface Props {
  /** id trong registry (ví dụ 'kit-01-03-hero-desktop'). */
  id: string;
  /** Ảnh 9:16 dùng cho mobile khi bố cục desktop dùng ảnh ngang. */
  mobileId?: string;
  sizes?: SizeKey | string;
  className?: string;
  /** Ghi đè tỉ lệ khung; mặc định giữ đúng tỉ lệ ảnh gốc -> không layout shift. */
  ratio?: string;
  priority?: boolean;
  /** Thay alt của registry khi ngữ cảnh cần mô tả khác. */
  alt?: string;
  objectPosition?: string;
  style?: CSSProperties;
  /** Lớp phủ tối để chữ đè lên luôn đủ tương phản. */
  scrim?: 'none' | 'bottom' | 'left' | 'full' | 'soft';
  /**
   * Phủ kín phần tử cha (cha phải position: relative).
   * Đặt bằng style nội tuyến chứ không bằng class: class `absolute` của nơi gọi
   * và class `relative` mặc định ở đây cùng một nhóm utility, thứ tự thắng thua
   * do thứ tự trong file CSS quyết định — từng làm ảnh co lại theo tỉ lệ gốc.
   */
  fill?: boolean;
}

const scrimStyle: Record<string, string> = {
  none: 'none',
  bottom: 'linear-gradient(to top, rgb(5 5 7 / 0.92) 0%, rgb(5 5 7 / 0.55) 32%, transparent 68%)',
  left: 'linear-gradient(to right, rgb(5 5 7 / 0.9) 0%, rgb(5 5 7 / 0.55) 38%, transparent 72%)',
  full: 'linear-gradient(to top, rgb(5 5 7 / 0.85), rgb(5 5 7 / 0.45))',
  soft: 'linear-gradient(to top, rgb(5 5 7 / 0.6), transparent 60%)',
};

/**
 * Ảnh của lễ hội.
 * - WebP nhiều kích thước đã tiền xử lý (480/960/1600), chọn bằng srcset + sizes.
 * - LQIP nằm ngay trên background của <img>, ảnh thật vẽ đè lên khi tải xong: mờ -> nét, không cần JS.
 * - Ảnh thiếu -> khung placeholder có kiểm soát, không thay bằng ảnh khác (§24).
 */
export function AssetImage({
  id,
  mobileId,
  sizes = 'full',
  className = '',
  ratio,
  priority = false,
  alt,
  objectPosition,
  style,
  scrim = 'none',
  fill = false,
}: Props) {
  const asset = getAsset(id);
  const fillStyle: CSSProperties = fill
    ? { position: 'absolute', inset: 0, width: '100%', height: '100%', aspectRatio: 'auto' }
    : {};
  const mobile = mobileId ? getAsset(mobileId) : null;

  if (!asset) {
    return (
      <div
        className={`grid place-items-center border border-dashed text-center ${className}`}
        style={{
          aspectRatio: ratio ?? '16 / 9',
          borderColor: 'var(--env-line)',
          background: 'var(--env-card)',
          ...style,
        }}
        role="img"
        aria-label={alt ?? `Ảnh chưa có: ${id}`}
      >
        <span className="kicker px-4">Ảnh chưa có · {id}</span>
      </div>
    );
  }

  const sizesAttr = (SIZES as Record<string, string>)[sizes] ?? sizes;
  const eager = priority || asset.priority;

  const img = (
    <img
      src={asset.src}
      srcSet={asset.srcSet}
      sizes={sizesAttr}
      width={asset.width}
      height={asset.height}
      alt={alt ?? asset.alt}
      loading={eager ? 'eager' : 'lazy'}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      fetchPriority={eager ? 'high' : 'auto'}
      decoding={eager ? 'sync' : 'async'}
      className="h-full w-full object-cover"
      style={{
        objectPosition: objectPosition ?? asset.focalPoint,
        backgroundImage: `url("${asset.blurDataURL}")`,
        backgroundSize: 'cover',
        backgroundPosition: objectPosition ?? asset.focalPoint,
        mixBlendMode: asset.overlayMode === 'screen' ? 'screen' : undefined,
      }}
    />
  );

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: ratio ?? `${asset.width} / ${asset.height}`, ...fillStyle, ...style }}
    >
      {mobile ? (
        <picture>
          <source media="(max-width: 720px)" srcSet={mobile.srcSet} sizes={sizesAttr} />
          {img}
        </picture>
      ) : (
        img
      )}
      {scrim !== 'none' && (
        <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: scrimStyle[scrim] }} />
      )}
    </div>
  );
}
