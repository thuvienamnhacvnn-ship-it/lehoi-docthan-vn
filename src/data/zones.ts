/**
 * Chín khu vực của lễ hội (§07).
 *
 * LƯU Ý QUAN TRỌNG: hình học dưới đây là SƠ ĐỒ QUAN HỆ, không phải toạ độ địa lý thật —
 * mặt bằng chính thức chưa được cung cấp. Khi có bản vẽ thật, chỉ cần thay `shape`
 * và `masterplanAssetId`, phần còn lại của bản đồ chạy nguyên.
 */

/** Mã của mười khu — dùng chung cho hoạt động, lịch trình và cơ hội tài trợ. */
export type ZoneId =
  | 'main-plaza'
  | 'mega-zone'
  | 'tram-gap'
  | 'pets'
  | 'visual-art'
  | 'food'
  | 'color-run'
  | 'concert'
  | 'vip'
  | 'support';

export interface Zone {
  id: ZoneId;
  en: string;
  /** Ảnh nhìn từ trên xuống của khu (KIT-06). */
  aerialAssetId: string;
  detailAssetIds: string[];
  color: string;
  /** Đa giác trong hệ toạ độ 0–100 của SVG bản đồ. */
  shape: string;
  labelAt: [number, number];
  accessible: boolean;
}

export const zones: Zone[] = [
  {
    id: 'main-plaza',
    en: 'MAIN PLAZA',
    aerialAssetId: 'kit-06-07-festival-masterplan-aerial',
    detailAssetIds: ['kit-02-01-flashmob-kickoff-wide', 'kit-02-02-flashmob-dancer-closeup'],
    color: '#f5b942',
    shape: '38,40 62,40 62,58 38,58',
    labelAt: [50, 49],
    accessible: true,
  },
  {
    id: 'mega-zone',
    en: 'MEGA ZONE',
    aerialAssetId: 'kit-06-09-mega-zone-aerial',
    detailAssetIds: [
      'kit-02-21-mega-zone-overview',
      'kit-02-22-mega-zone-fashion-beauty',
      'kit-02-23-mega-zone-tech-demo',
      'kit-02-25-mega-zone-food-sampling',
    ],
    color: '#7b2cff',
    shape: '6,18 36,18 36,46 6,46',
    labelAt: [21, 32],
    accessible: true,
  },
  {
    id: 'tram-gap',
    en: 'CONNECTION ZONE',
    aerialAssetId: 'kit-06-11-connection-zone-aerial',
    detailAssetIds: [
      'kit-02-06-coffee-talk-speaker',
      'kit-02-07-coffee-circle-group',
      'kit-02-09-match-meet-one-to-one',
      'kit-02-11-safe-connection-host',
    ],
    color: '#2f6bff',
    shape: '64,18 94,18 94,40 64,40',
    labelAt: [79, 29],
    accessible: true,
  },
  {
    id: 'pets',
    en: 'PETS',
    aerialAssetId: 'kit-06-10-pet-zone-aerial',
    detailAssetIds: [
      'kit-02-14-pets-small-dogs',
      'kit-02-15-pets-large-dogs',
      'kit-02-16-cat-parents-session',
      'kit-02-18-senior-pets-meetup',
    ],
    color: '#00d1ff',
    shape: '6,50 32,50 32,74 6,74',
    labelAt: [19, 62],
    accessible: true,
  },
  {
    id: 'visual-art',
    en: 'VISUAL ART',
    aerialAssetId: 'kit-06-12-visual-art-zone-aerial',
    detailAssetIds: [
      'kit-02-29-visual-art-succulent-installation',
      'kit-02-31-visual-exhibition-walkthrough',
      'kit-02-32-creative-art-gallery',
    ],
    color: '#ff2e9a',
    shape: '66,44 94,44 94,64 66,64',
    labelAt: [80, 54],
    accessible: true,
  },
  {
    id: 'food',
    en: 'FOOD',
    aerialAssetId: 'kit-06-13-food-zone-aerial',
    detailAssetIds: ['kit-02-12-happy-lunch-table', 'kit-02-13-happy-lunch-detail'],
    color: '#f5b942',
    shape: '36,62 62,62 62,78 36,78',
    labelAt: [49, 70],
    accessible: true,
  },
  {
    id: 'color-run',
    en: 'COLOR RUN',
    aerialAssetId: 'kit-06-14-color-run-route-aerial',
    detailAssetIds: ['kit-02-03-color-run-start', 'kit-02-05-color-run-finish-badge'],
    color: '#00d1ff',
    shape: '4,8 96,8 96,15 4,15',
    labelAt: [50, 11.5],
    accessible: false,
  },
  {
    id: 'concert',
    en: 'CONCERT',
    aerialAssetId: 'kit-06-18-night-festival-campus',
    detailAssetIds: [
      'kit-01-07-main-stage-wide',
      'kit-03-04-headline-singer-wide',
      'kit-03-19-synchronized-light-aerial',
    ],
    color: '#ff2e9a',
    shape: '28,82 72,82 72,96 28,96',
    labelAt: [50, 89],
    accessible: true,
  },
  {
    id: 'vip',
    en: 'VIP',
    aerialAssetId: 'kit-01-15-vip-lounge',
    detailAssetIds: ['kit-05-15-vip-fast-track-service', 'kit-05-16-vip-table-service'],
    color: '#f5b942',
    shape: '76,68 96,68 96,88 76,88',
    labelAt: [86, 78],
    accessible: true,
  },
  {
    id: 'support',
    en: 'SUPPORT',
    aerialAssetId: 'kit-06-19-information-help-desk',
    detailAssetIds: [
      'kit-06-20-safety-staff-support',
      'kit-06-21-first-aid-wellbeing-point',
      'kit-06-22-accessible-event-pathway',
    ],
    color: '#f4f1ea',
    shape: '4,80 24,80 24,96 4,96',
    labelAt: [14, 88],
    accessible: true,
  },
];

export const zonesById = new Map(zones.map((z) => [z.id, z]));

/** Bốn thời khắc trong ngày của khu lễ hội — KIT-06 15→18. */
export const dayPhases = [
  { id: 'morning', assetId: 'kit-06-15-morning-festival-light', env: 'day' as const },
  { id: 'midday', assetId: 'kit-06-16-midday-festival-life', env: 'day' as const },
  { id: 'golden', assetId: 'kit-06-17-golden-hour-transition', env: 'golden' as const },
  { id: 'night', assetId: 'kit-06-18-night-festival-campus', env: 'night' as const },
] as const;
