/**
 * Line-up (§10, §26).
 *
 * KHÔNG có tên nghệ sĩ nào trong file này — line-up chưa được công bố.
 * Cái có thật là CÁC VỊ TRÍ BIỂU DIỄN trong kịch bản đêm nhạc (theo KIT-03).
 * Khi ban tổ chức chốt nghệ sĩ: điền `name`, `bio`, `photoAssetId` là trang tự hiện.
 */

export interface LineupSlot {
  id: 'live-band' | 'headliner' | 'singer-dj' | 'dj' | 'host';
  roleEn: string;
  /** Ảnh minh hoạ vai trò — ngược sáng / không lộ mặt, dùng khi chưa có ảnh nghệ sĩ thật. */
  assetId: string;
  portraitAssetId?: string;
  /** Chưa công bố -> null. Không đặt tên giả. */
  name: string | null;
  bio: string | null;
  photoAssetId: string | null;
  order: number;
}

export const lineup: LineupSlot[] = [
  {
    id: 'live-band',
    roleEn: 'LIVE BAND',
    assetId: 'kit-03-01-live-band-wide',
    portraitAssetId: 'kit-03-02-live-band-guitarist',
    name: null,
    bio: null,
    photoAssetId: null,
    order: 1,
  },
  {
    id: 'headliner',
    roleEn: 'HEADLINER',
    assetId: 'kit-03-04-headline-singer-wide',
    portraitAssetId: 'kit-03-05-headline-singer-portrait',
    name: null,
    bio: null,
    photoAssetId: null,
    order: 2,
  },
  {
    id: 'singer-dj',
    roleEn: 'SINGER × DJ',
    assetId: 'kit-03-06-singer-dj-crossover',
    portraitAssetId: 'kit-03-03-live-band-drummer',
    name: null,
    bio: null,
    photoAssetId: null,
    order: 3,
  },
  {
    id: 'dj',
    roleEn: 'DJ',
    assetId: 'kit-03-07-dj-booth-closeup',
    name: null,
    bio: null,
    photoAssetId: null,
    order: 4,
  },
  {
    id: 'host',
    roleEn: 'HOST',
    assetId: 'kit-03-08-host-stage-interaction',
    name: null,
    bio: null,
    photoAssetId: null,
    order: 5,
  },
];

/** Đội ngũ sản xuất — phần "làm nghề" của đêm nhạc, KIT-03 13→18. */
export const production = [
  { id: 'lighting', assetId: 'kit-03-15-lighting-control-room' },
  { id: 'sound', assetId: 'kit-03-16-sound-control-engineer' },
  { id: 'camera', assetId: 'kit-03-17-camera-operator-concert' },
  { id: 'backstage', assetId: 'kit-03-13-concert-backstage-artist' },
  { id: 'stage-entry', assetId: 'kit-03-14-artist-stage-entry' },
  { id: 'stage-side', assetId: 'kit-03-18-stage-side-performer-silhouette' },
] as const;
