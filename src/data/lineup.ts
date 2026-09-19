/**
 * Line-up (§10, §26).
 *
 * KHÔNG có tên nghệ sĩ nào trong file này — line-up chưa được công bố.
 * Cái có thật là CÁC VỊ TRÍ BIỂU DIỄN trong kịch bản đêm nhạc (theo KIT-03).
 * Khi ban tổ chức chốt nghệ sĩ: điền `name`, `bio`, `photoAssetId` là trang tự hiện.
 */

export interface LineupSlot {
  id: 'live-band' | 'headliner' | 'singer-dj' | 'dj' | 'host';
  role: string;
  roleEn: string;
  description: string;
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
    role: 'Ban nhạc sống',
    roleEn: 'LIVE BAND',
    description: 'Mở màn đêm nhạc bằng phần trình diễn sống, trước khi sân khấu chuyển sang tông neon.',
    assetId: 'kit-03-01-live-band-wide',
    portraitAssetId: 'kit-03-02-live-band-guitarist',
    name: null,
    bio: null,
    photoAssetId: null,
    order: 1,
  },
  {
    id: 'headliner',
    role: 'Nghệ sĩ chính',
    roleEn: 'HEADLINER',
    description: 'Phần trình diễn cao trào, trên sân khấu mở rộng với dàn đèn chạy hết công suất.',
    assetId: 'kit-03-04-headline-singer-wide',
    portraitAssetId: 'kit-03-05-headline-singer-portrait',
    name: null,
    bio: null,
    photoAssetId: null,
    order: 2,
  },
  {
    id: 'singer-dj',
    role: 'Ca sĩ × DJ',
    roleEn: 'SINGER × DJ',
    description: 'Định dạng kết hợp giọng hát và set điện tử — bản lề giữa nhạc sống và sàn nhảy.',
    assetId: 'kit-03-06-singer-dj-crossover',
    portraitAssetId: 'kit-03-03-live-band-drummer',
    name: null,
    bio: null,
    photoAssetId: null,
    order: 3,
  },
  {
    id: 'dj',
    role: 'DJ',
    roleEn: 'DJ',
    description: 'Phần cuối của đêm: nhạc liền mạch, khán đài thành một khối chuyển động.',
    assetId: 'kit-03-07-dj-booth-closeup',
    name: null,
    bio: null,
    photoAssetId: null,
    order: 4,
  },
  {
    id: 'host',
    role: 'Người dẫn chương trình',
    roleEn: 'HOST',
    description: 'Giữ nhịp cả đêm, dẫn các phần tương tác như Match Cam và Happiness Toast.',
    assetId: 'kit-03-08-host-stage-interaction',
    name: null,
    bio: null,
    photoAssetId: null,
    order: 5,
  },
];

/** Đội ngũ sản xuất — phần "làm nghề" của đêm nhạc, KIT-03 13→18. */
export const production = [
  { id: 'lighting', label: 'Điều khiển ánh sáng', assetId: 'kit-03-15-lighting-control-room', note: 'Bàn điều khiển nhìn thẳng sân khấu' },
  { id: 'sound', label: 'Âm thanh', assetId: 'kit-03-16-sound-control-engineer', note: 'Kỹ sư âm thanh trực suốt đêm' },
  { id: 'camera', label: 'Sản xuất hình ảnh', assetId: 'kit-03-17-camera-operator-concert', note: 'Máy quay lớn cho màn hình và tư liệu' },
  { id: 'backstage', label: 'Hậu trường', assetId: 'kit-03-13-concert-backstage-artist', note: 'Khu chờ và đường vào sân khấu' },
  { id: 'stage-entry', label: 'Đường vào sân khấu', assetId: 'kit-03-14-artist-stage-entry', note: 'Hành lang tối dẫn ra ánh sáng' },
  { id: 'stage-side', label: 'Góc cánh gà', assetId: 'kit-03-18-stage-side-performer-silhouette', note: 'Vị trí nhìn thấy cả sân khấu lẫn khán đài' },
] as const;
