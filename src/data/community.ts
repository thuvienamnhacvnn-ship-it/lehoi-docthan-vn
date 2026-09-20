/**
 * Cộng đồng, chân dung khán giả và hệ nội dung (§KIT-04, §13).
 * Ba nhóm tuổi 21–25 / 26–35 / 36–52 lấy từ pitch deck PAGE 04 (style bible mục 6).
 */

export interface AudienceGroup {
  /** Khoảng tuổi — chữ số, giống nhau ở mọi thứ tiếng. */
  range: string;
  /** Trùng khoá trong t.audience — để TypeScript bắt được nếu đặt sai. */
  id: '21-25' | '26-35' | '36-52';
  assetId: string;
  accent: string;
}

export const audienceGroups: AudienceGroup[] = [
  {
    id: '21-25',
    range: '21–25',
    assetId: 'kit-04-01-young-single-student',
    accent: '#00d1ff',
  },
  {
    id: '26-35',
    range: '26–35',
    assetId: 'kit-04-02-young-professional-independent',
    accent: '#7b2cff',
  },
  {
    id: '36-52',
    range: '36–52',
    assetId: 'kit-04-03-mature-single-confident',
    accent: '#f5b942',
  },
];

/** Các lát cắt lối sống — làm cho lễ hội đáng tin về mặt văn hoá, không phải slide nhân sự. */
export const lifestyleStories = [
  { id: 'solo-travel', assetId: 'kit-04-04-solo-travel-lifestyle' },
  { id: 'fitness', assetId: 'kit-04-05-solo-fitness-lifestyle' },
  { id: 'wellness', assetId: 'kit-04-06-wellness-self-care' },
  { id: 'cafe', assetId: 'kit-04-07-independent-cafe-moment' },
  { id: 'freelance', assetId: 'kit-04-08-freelancer-coworking' },
  { id: 'single-parent', assetId: 'kit-04-09-single-parent-positive-life' },
  { id: 'pet-parent', assetId: 'kit-04-10-pet-parent-lifestyle' },
  { id: 'healing', assetId: 'kit-04-11-healing-conversation' },
  { id: 'confident-woman', assetId: 'kit-01-10-lifestyle-woman' },
  { id: 'confident-man', assetId: 'kit-01-11-lifestyle-man' },
] as const;

/** Hệ nội dung của lễ hội — KIT-04 13→24. Đây là ĐỊNH DẠNG nội dung, không phải bài đã đăng. */
export interface ContentFormat {
  id:
    | 'wemeet-podcast'
    | 'podcast-story'
    | 'ugc'
    | 'livestream'
    | 'press'
    | 'ooh'
    | 'social'
    | 'recap';
  kind: 'podcast' | 'ugc' | 'media' | 'ooh' | 'social' | 'recap';
  assetId: string;
  portraitAssetId?: string;
}

export const contentFormats: ContentFormat[] = [
  {
    id: 'wemeet-podcast',
    kind: 'podcast',
    assetId: 'kit-04-13-podcast-studio-wide',
    portraitAssetId: 'kit-04-14-podcast-host-closeup',
  },
  {
    id: 'podcast-story',
    kind: 'podcast',
    assetId: 'kit-04-15-podcast-guest-story',
  },
  {
    id: 'ugc',
    kind: 'ugc',
    assetId: 'kit-04-17-ugc-creative-process',
    portraitAssetId: 'kit-04-16-content-creator-filming',
  },
  {
    id: 'livestream',
    kind: 'media',
    assetId: 'kit-04-18-kol-livestream-studio',
  },
  {
    id: 'press',
    kind: 'media',
    assetId: 'kit-04-19-press-conference-wide',
    portraitAssetId: 'kit-04-20-journalist-camera-line',
  },
  {
    id: 'ooh',
    kind: 'ooh',
    assetId: 'kit-04-21-ooh-city-installation',
  },
  {
    id: 'social',
    kind: 'social',
    assetId: 'kit-04-22-social-content-production',
    portraitAssetId: 'kit-04-23-campaign-countdown-production',
  },
  {
    id: 'recap',
    kind: 'recap',
    assetId: 'kit-04-24-post-event-recap-editing',
  },
];

/** Vận hành & an toàn — KIT-06 19→24. */
export const operations = [
  { id: 'info', assetId: 'kit-06-19-information-help-desk' },
  { id: 'safety', assetId: 'kit-06-20-safety-staff-support' },
  { id: 'first-aid', assetId: 'kit-06-21-first-aid-wellbeing-point' },
  { id: 'accessible', assetId: 'kit-06-22-accessible-event-pathway' },
  { id: 'control', assetId: 'kit-06-23-event-operations-control' },
  { id: 'briefing', assetId: 'kit-06-24-event-staff-briefing' },
] as const;


/**
 * Bộ ảnh nhận diện dùng trong phòng báo chí — toàn ảnh dựng sẵn (mockup) của KIT-01.
 * Đây là phần tư liệu mà toà soạn hay xin nhất nên gom thành một khối riêng.
 */
export const brandMockups = [
  { id: 'logo', assetId: 'kit-01-01-logo-master-goc' },
  { id: 'emblem', assetId: 'kit-01-02-emblem-trong-suot' },
  { id: 'ticket', assetId: 'kit-01-19-ticket' },
  { id: 'wristband', assetId: 'kit-01-17-led-wristband' },
  { id: 'merch', assetId: 'kit-01-20-merchandise' },
  { id: 'app', assetId: 'kit-01-18-app-phone-blank' },
  { id: 'texture', assetId: 'kit-01-26-texture-gold' },
  { id: 'entrance', assetId: 'kit-01-16-entrance-gate' },
] as const;

/** Tài liệu tải về (§13). Chưa có file thật -> ghi rõ đang chuẩn bị, không tạo link giả. */
export const pressDownloads = [
  { id: 'logo-pack', ready: true, assetId: 'kit-01-02-emblem-trong-suot' },
  { id: 'key-visual', ready: true, assetId: 'kit-01-03-hero-desktop' },
  { id: 'photo-set', ready: true, assetId: 'kit-01-09-crowd-energy' },
  { id: 'media-kit', ready: false, assetId: 'kit-04-19-press-conference-wide' },
  { id: 'fact-sheet', ready: false, assetId: 'kit-06-23-event-operations-control' },
] as const;
