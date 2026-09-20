import type { ZoneId } from './zones';

/**
 * Danh mục hoạt động — lấy từ MASTER BUILD PROMPT (§KIT-02, §07, §08) và ánh xạ ảnh
 * theo assets-manifest.json. Đây là mô hình nội dung, sau này có thể thay bằng CMS/API.
 */

export type ActivityCategory =
  | 'music'
  | 'community'
  | 'talk'
  | 'pets'
  | 'food'
  | 'art'
  | 'wellness'
  | 'commerce'
  | 'vip';

/** Danh sách mã nhóm — nhãn hiển thị nằm ở t.categories. */
export const CATEGORY_IDS: ActivityCategory[] = [
  'music',
  'community',
  'talk',
  'pets',
  'food',
  'art',
  'wellness',
  'commerce',
  'vip',
];

export type DayPhase = 'morning' | 'midday' | 'golden' | 'night';

/** Bốn khối giờ và môi trường ánh sáng tương ứng. Nhãn nằm ở t.phases. */
export const phaseEnv: Record<DayPhase, 'day' | 'golden' | 'night'> = {
  morning: 'day',
  midday: 'day',
  golden: 'golden',
  night: 'night',
};

export interface Activity {
  id:
    | 'flashmob'
    | 'color-run'
    | 'coffee-talk'
    | 'coffee-circles'
    | 'match-meet'
    | 'happy-lunch'
    | 'pets-meetup'
    | 'walk-and-wag'
    | 'mega-zone'
    | 'happiness-deals'
    | 'visual-art'
    | 'creative-gallery'
    | 'live-band'
    | 'match-cam'
    | 'happiness-toast'
    | 'headliner'
    | 'singer-dj'
    | 'light-moment'
    | 'finale'
    | 'vip-hospitality'
    | 'wellness'
    | 'pet-photo';
  /** Câu mô tả ngắn — nội dung do web viết, ảnh không chứa chữ. */
  category: ActivityCategory;
  phase: DayPhase;
  zoneId: ZoneId;
  assetId: string;
  /** Ảnh dọc cho bố cục mobile / thẻ cao. */
  portraitAssetId?: string;
  /** Thứ tự trong khối — dùng cho lịch trình và cảnh báo trùng giờ. */
  slot: number;
  durationMin: number;
  /** Có cần đăng ký trước không — kiến trúc sẵn cho ticket/booking. */
  needsSignup: boolean;
}

export const activities: Activity[] = [
  {
    id: 'flashmob',
    category: 'community',
    phase: 'morning',
    zoneId: 'main-plaza',
    assetId: 'kit-02-01-flashmob-kickoff-wide',
    portraitAssetId: 'kit-02-02-flashmob-dancer-closeup',
    slot: 1,
    durationMin: 45,
    needsSignup: false,
  },
  {
    id: 'color-run',
    category: 'community',
    phase: 'morning',
    zoneId: 'color-run',
    assetId: 'kit-02-03-color-run-start',
    portraitAssetId: 'kit-02-04-color-run-powder-action',
    slot: 2,
    durationMin: 75,
    needsSignup: true,
  },
  {
    id: 'coffee-talk',
    category: 'talk',
    phase: 'morning',
    zoneId: 'tram-gap',
    assetId: 'kit-02-06-coffee-talk-speaker',
    slot: 3,
    durationMin: 50,
    needsSignup: false,
  },
  {
    id: 'coffee-circles',
    category: 'community',
    phase: 'midday',
    zoneId: 'tram-gap',
    assetId: 'kit-02-07-coffee-circle-group',
    portraitAssetId: 'kit-02-08-coffee-circle-icebreaker',
    slot: 4,
    durationMin: 40,
    needsSignup: true,
  },
  {
    id: 'match-meet',
    category: 'community',
    phase: 'midday',
    zoneId: 'tram-gap',
    assetId: 'kit-02-09-match-meet-one-to-one',
    portraitAssetId: 'kit-02-11-safe-connection-host',
    slot: 5,
    durationMin: 60,
    needsSignup: true,
  },
  {
    id: 'happy-lunch',
    category: 'food',
    phase: 'midday',
    zoneId: 'food',
    assetId: 'kit-02-12-happy-lunch-table',
    portraitAssetId: 'kit-02-13-happy-lunch-detail',
    slot: 6,
    durationMin: 90,
    needsSignup: false,
  },
  {
    id: 'pets-meetup',
    category: 'pets',
    phase: 'midday',
    zoneId: 'pets',
    assetId: 'kit-02-14-pets-small-dogs',
    portraitAssetId: 'kit-02-17-puppy-socialization',
    slot: 7,
    durationMin: 120,
    needsSignup: false,
  },
  {
    id: 'walk-and-wag',
    category: 'pets',
    phase: 'golden',
    zoneId: 'pets',
    assetId: 'kit-02-19-walk-and-wag-parade',
    slot: 8,
    durationMin: 45,
    needsSignup: true,
  },
  {
    id: 'mega-zone',
    category: 'commerce',
    phase: 'midday',
    zoneId: 'mega-zone',
    assetId: 'kit-02-21-mega-zone-overview',
    slot: 9,
    durationMin: 240,
    needsSignup: false,
  },
  {
    id: 'happiness-deals',
    category: 'commerce',
    phase: 'golden',
    zoneId: 'mega-zone',
    assetId: 'kit-02-28-happiness-box-unboxing',
    slot: 10,
    durationMin: 60,
    needsSignup: false,
  },
  {
    id: 'visual-art',
    category: 'art',
    phase: 'midday',
    zoneId: 'visual-art',
    assetId: 'kit-02-29-visual-art-succulent-installation',
    portraitAssetId: 'kit-02-30-succulent-art-detail',
    slot: 11,
    durationMin: 30,
    needsSignup: false,
  },
  {
    id: 'creative-gallery',
    category: 'art',
    phase: 'golden',
    zoneId: 'visual-art',
    assetId: 'kit-02-32-creative-art-gallery',
    portraitAssetId: 'kit-02-33-creative-artist-working',
    slot: 12,
    durationMin: 120,
    needsSignup: false,
  },
  {
    id: 'live-band',
    category: 'music',
    phase: 'night',
    zoneId: 'concert',
    assetId: 'kit-03-01-live-band-wide',
    portraitAssetId: 'kit-03-02-live-band-guitarist',
    slot: 13,
    durationMin: 60,
    needsSignup: false,
  },
  {
    id: 'match-cam',
    category: 'community',
    phase: 'night',
    zoneId: 'concert',
    assetId: 'kit-03-09-match-cam-couple-reaction',
    portraitAssetId: 'kit-03-10-match-cam-friends-reaction',
    slot: 14,
    durationMin: 15,
    needsSignup: false,
  },
  {
    id: 'happiness-toast',
    category: 'community',
    phase: 'night',
    zoneId: 'concert',
    assetId: 'kit-03-11-happiness-toast-closeup',
    portraitAssetId: 'kit-03-12-happiness-toast-people',
    slot: 15,
    durationMin: 10,
    needsSignup: false,
  },
  {
    id: 'headliner',
    category: 'music',
    phase: 'night',
    zoneId: 'concert',
    assetId: 'kit-03-04-headline-singer-wide',
    portraitAssetId: 'kit-03-05-headline-singer-portrait',
    slot: 16,
    durationMin: 75,
    needsSignup: false,
  },
  {
    id: 'singer-dj',
    category: 'music',
    phase: 'night',
    zoneId: 'concert',
    assetId: 'kit-03-06-singer-dj-crossover',
    portraitAssetId: 'kit-03-07-dj-booth-closeup',
    slot: 17,
    durationMin: 60,
    needsSignup: false,
  },
  {
    id: 'light-moment',
    category: 'music',
    phase: 'night',
    zoneId: 'concert',
    assetId: 'kit-03-19-synchronized-light-aerial',
    portraitAssetId: 'kit-03-23-concert-dance-moment',
    slot: 18,
    durationMin: 12,
    needsSignup: false,
  },
  {
    id: 'finale',
    category: 'music',
    phase: 'night',
    zoneId: 'concert',
    assetId: 'kit-03-24-performance-finale-stage-side',
    portraitAssetId: 'kit-03-22-music-friends-embrace',
    slot: 19,
    durationMin: 20,
    needsSignup: false,
  },
  {
    id: 'vip-hospitality',
    category: 'vip',
    phase: 'night',
    zoneId: 'vip',
    assetId: 'kit-05-15-vip-fast-track-service',
    portraitAssetId: 'kit-05-16-vip-table-service',
    slot: 20,
    durationMin: 300,
    needsSignup: true,
  },
  {
    id: 'wellness',
    category: 'wellness',
    phase: 'midday',
    zoneId: 'mega-zone',
    assetId: 'kit-02-24-mega-zone-wellness',
    slot: 21,
    durationMin: 30,
    needsSignup: false,
  },
  {
    id: 'pet-photo',
    category: 'pets',
    phase: 'golden',
    zoneId: 'pets',
    assetId: 'kit-02-20-pet-photo-booth',
    slot: 22,
    durationMin: 20,
    needsSignup: false,
  },
];

/** Bảy cụm ngành của Mega Zone — KIT-02 21→28. */
export const megaZoneCategories = [
  {
    id: 'fashion-beauty',
    assetId: 'kit-02-22-mega-zone-fashion-beauty',
  },
  {
    id: 'technology',
    assetId: 'kit-02-23-mega-zone-tech-demo',
  },
  {
    id: 'wellness',
    assetId: 'kit-02-24-mega-zone-wellness',
  },
  {
    id: 'food',
    assetId: 'kit-02-25-mega-zone-food-sampling',
  },
  { id: 'travel', assetId: 'kit-02-26-mega-zone-travel' },
  {
    id: 'ai-startup',
    assetId: 'kit-02-27-mega-zone-ai-startup',
  },
  {
    id: 'deals',
    assetId: 'kit-02-28-happiness-box-unboxing',
  },
] as const;

export const activitiesById = new Map(activities.map((a) => [a.id, a]));
