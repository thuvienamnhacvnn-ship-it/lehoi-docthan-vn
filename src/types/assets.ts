/**
 * Schema registry ảnh — §05 build prompt.
 * Mọi ảnh của webapp đi qua đây; không hard-code đường dẫn trong component.
 */

export type AssetKit =
  | 'KIT-01'
  | 'KIT-02'
  | 'KIT-03'
  | 'KIT-04'
  | 'KIT-05'
  | 'KIT-06'
  | '00-anh-cu-trong-chat';

export type AssetCategory =
  | 'brand'
  | 'day-festival'
  | 'one-beat-night'
  | 'community'
  | 'sponsor'
  | 'journey'
  | 'legacy'
  | 'other';

export type AssetOrientation = 'landscape' | 'portrait' | 'square';
export type OverlayMode = 'none' | 'screen' | 'alpha';
export type LoadingStrategy = 'eager' | 'lazy';
export type AnimationPreset =
  | 'reveal'
  | 'connect'
  | 'flow'
  | 'pulse'
  | 'orbit'
  | 'expand'
  | 'travel'
  | 'celebrate';

export type AssetStatus = 'ready' | 'planned' | 'missing';

export interface FestivalAsset {
  /** Khoá ổn định, sinh từ tên file gốc. */
  id: string;
  kit: AssetKit;
  /** Tên file GỐC trong E:\Works\Concert — không bao giờ đổi. */
  filename: string;
  /** Bản WebP lớn nhất. */
  src: string;
  /** Bản WebP nhỏ nhất, dùng cho mobile / thumbnail. */
  mobileSrc: string;
  srcSet: string;
  widths: number[];
  /** Kích thước ảnh gốc — giữ để tính tỉ lệ, chống layout shift. */
  width: number;
  height: number;
  aspectRatio: string;
  orientation: AssetOrientation;
  category: AssetCategory;
  /** Mục webapp do manifest chỉ định. */
  section: string;
  purpose: string;
  alt: string;
  priority: boolean;
  loadingStrategy: LoadingStrategy;
  focalPoint: string;
  overlayMode: OverlayMode;
  parallaxStrength: number;
  animationPreset: AnimationPreset;
  status: AssetStatus;
  /** 'left' | 'bottom' — vùng tối của ảnh, nơi đặt chữ. */
  textSide: string | null;
  blurDataURL: string;
}

/** Slot đã quy hoạch nhưng CHƯA có file — không bịa ảnh, chỉ giữ chỗ. */
export interface PlannedAssetSlot {
  id: string;
  kit: AssetKit;
  section: string;
  purpose: string;
  aspectRatio: string;
  status: 'planned';
}
