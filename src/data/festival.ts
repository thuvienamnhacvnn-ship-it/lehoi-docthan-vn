/**
 * Cấu hình gốc của ONE BEAT NIGHT.
 *
 * LUẬT NỘI DUNG (§26 build prompt): không bịa tên nghệ sĩ, ngày, địa điểm cụ thể, giá vé,
 * số lượng khách, chỉ số truyền thông. Thứ gì chưa được xác nhận trong tài liệu dự án
 * thì nằm ở PLACEHOLDERS dưới đây và hiển thị như một chỗ trống có kiểm soát.
 *
 * Nguồn đã xác nhận: E:\Works\Concert\_style-bible-khoi-phuc.md,
 * HUONG-DAN-ANH-WEBAPP.md, assets-manifest.json, MASTER BUILD PROMPT.
 */

export const festival = {
  /** Năm không xuất hiện trong giao diện — chưa chốt ngày tổ chức. */
  showYear: false,
  /** Mã của năm giá trị; chữ hiển thị nằm ở t.values. */
  values: ['FREEDOM', 'SELF-LOVE', 'COMMUNITY', 'CONNECTION', 'HAPPINESS'],
} as const;

/**
 * Chỗ trống có cấu trúc. Key đúng theo §26.
 * `value: null` = chưa xác nhận -> UI vẽ chip "sắp công bố", không bao giờ vẽ số giả.
 */
export type PlaceholderKey =
  | 'EVENT_DATE'
  | 'EVENT_TIME'
  | 'VENUE'
  | 'VENUE_ADDRESS'
  | 'HEADLINER'
  | 'TICKET_PRICE'
  | 'TICKET_ONSALE'
  | 'EXPECTED_ATTENDANCE'
  | 'MEDIA_REACH'
  | 'ORGANIZER'
  | 'PRESS_EMAIL'
  | 'PARTNER_EMAIL'
  | 'HOTLINE';

export interface Placeholder {
  key: PlaceholderKey;
  /** null = chưa xác nhận. Nhãn và ghi chú lấy theo thứ tiếng từ t.placeholders. */
  value: string | null;
}

export const PLACEHOLDERS: Record<PlaceholderKey, Placeholder> = {
  EVENT_DATE: { key: 'EVENT_DATE', value: null },
  EVENT_TIME: { key: 'EVENT_TIME', value: null },
  VENUE: { key: 'VENUE', value: null },
  VENUE_ADDRESS: { key: 'VENUE_ADDRESS', value: null },
  HEADLINER: { key: 'HEADLINER', value: null },
  TICKET_PRICE: { key: 'TICKET_PRICE', value: null },
  TICKET_ONSALE: { key: 'TICKET_ONSALE', value: null },
  EXPECTED_ATTENDANCE: { key: 'EXPECTED_ATTENDANCE', value: null },
  MEDIA_REACH: { key: 'MEDIA_REACH', value: null },
  ORGANIZER: { key: 'ORGANIZER', value: null },
  PRESS_EMAIL: { key: 'PRESS_EMAIL', value: null },
  PARTNER_EMAIL: { key: 'PARTNER_EMAIL', value: null },
  HOTLINE: { key: 'HOTLINE', value: null },
};

/** Ba chặng của hành trình — §KIT-06. Chữ nằm ở t.journey, đây giữ ảnh và màu. */
export const journey = [
  {
    id: 'gap-minh',
    index: 1,
    assetId: 'kit-06-01-gap-minh-reflection',
    portraitAssetId: 'kit-06-02-gap-minh-meditative-portrait',
    env: 'day',
    accent: '#7b2cff',
  },
  {
    id: 'gap-nhau',
    index: 2,
    assetId: 'kit-06-03-gap-nhau-social-circle',
    portraitAssetId: 'kit-06-04-gap-nhau-first-smile',
    env: 'golden',
    accent: '#f5b942',
  },
  {
    id: 'gap-hanh-phuc',
    index: 3,
    assetId: 'kit-06-05-gap-hanh-phuc-celebration',
    portraitAssetId: 'kit-03-23-concert-dance-moment',
    env: 'night',
    accent: '#ff2e9a',
  },
] as const;

export type JourneyStage = (typeof journey)[number];

/** Điều hướng chính — §15. Tối giản, cao cấp. */
export const primaryNav = [
  { href: '/experience', key: 'experience' },
  { href: '/program', key: 'program' },
  { href: '/map', key: 'map' },
  { href: '/artists', key: 'artists' },
  { href: '/tickets', key: 'tickets' },
  { href: '/partners', key: 'partners' },
] as const;

export const menuNav = [
  {
    key: 'festival' as const,
    items: [
      { href: '/experience', assetId: 'kit-06-16-midday-festival-life' },
      { href: '/one-beat-night', assetId: 'kit-03-04-headline-singer-wide' },
      { href: '/mega-zone', assetId: 'kit-02-21-mega-zone-overview' },
      { href: '/program', assetId: 'kit-06-17-golden-hour-transition' },
      { href: '/map', assetId: 'kit-06-08-festival-map-isometric' },
    ],
  },
  {
    key: 'people' as const,
    items: [
      { href: '/artists', assetId: 'kit-03-01-live-band-wide' },
      { href: '/community', assetId: 'kit-04-12-community-mixed-ages' },
      { href: '/news', assetId: 'kit-04-22-social-content-production' },
    ],
  },
  {
    key: 'join' as const,
    items: [
      { href: '/tickets', assetId: 'kit-01-19-ticket' },
      { href: '/account', assetId: 'kit-01-18-app-phone-blank' },
      { href: '/visitor-guide', assetId: 'kit-06-19-information-help-desk' },
      { href: '/faq', assetId: 'kit-06-21-first-aid-wellbeing-point' },
    ],
  },
  {
    key: 'business' as const,
    items: [
      { href: '/partners', assetId: 'kit-05-01-sponsor-central-booth' },
      { href: '/press', assetId: 'kit-04-19-press-conference-wide' },
      { href: '/contact', assetId: 'kit-06-24-event-staff-briefing' },
    ],
  },
] as const;

/** Môi trường thị giác của trang — NGÀY → GIỜ VÀNG → ĐÊM (§03). */
export type Environment = 'day' | 'golden' | 'night';
