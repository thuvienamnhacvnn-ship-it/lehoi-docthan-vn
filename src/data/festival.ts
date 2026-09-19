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
  name: 'ONE BEAT NIGHT',
  subtitle: 'LỄ HỘI ĐỘC THÂN',
  slogan: 'Hạnh phúc trong từng khoảnh khắc',
  city: 'Thành phố Hồ Chí Minh',
  country: 'Việt Nam',
  positioning:
    'Lễ hội dành cho người độc thân hiện đại, đề cao sự tự do, kết nối, phát triển bản thân và hạnh phúc.',
  /** Năm không xuất hiện trong giao diện — chưa chốt ngày tổ chức. */
  showYear: false,
  values: [
    { en: 'FREEDOM', vi: 'Tự do' },
    { en: 'SELF-LOVE', vi: 'Yêu mình' },
    { en: 'COMMUNITY', vi: 'Cộng đồng' },
    { en: 'CONNECTION', vi: 'Kết nối' },
    { en: 'HAPPINESS', vi: 'Hạnh phúc' },
  ],
  /** Lễ hội KHÔNG phải sự kiện hẹn hò — luật định vị, xem style bible mục 1. */
  isNotA: ['Sự kiện hẹn hò', 'Chương trình ghép đôi', 'Ứng dụng tìm người yêu'],
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
  label: string;
  value: string | null;
  note: string;
}

export const PLACEHOLDERS: Record<PlaceholderKey, Placeholder> = {
  EVENT_DATE: { key: 'EVENT_DATE', label: 'Ngày tổ chức', value: null, note: 'Chưa chốt trong tài liệu dự án' },
  EVENT_TIME: { key: 'EVENT_TIME', label: 'Giờ mở cổng', value: null, note: 'Chưa chốt' },
  VENUE: { key: 'VENUE', label: 'Địa điểm', value: null, note: 'Mới xác nhận tới cấp thành phố: TP.HCM' },
  VENUE_ADDRESS: { key: 'VENUE_ADDRESS', label: 'Địa chỉ', value: null, note: 'Chưa chốt' },
  HEADLINER: { key: 'HEADLINER', label: 'Nghệ sĩ chính', value: null, note: 'Line-up chưa công bố' },
  TICKET_PRICE: { key: 'TICKET_PRICE', label: 'Giá vé', value: null, note: 'Chưa chốt bảng giá' },
  TICKET_ONSALE: { key: 'TICKET_ONSALE', label: 'Ngày mở bán', value: null, note: 'Chưa chốt' },
  EXPECTED_ATTENDANCE: {
    key: 'EXPECTED_ATTENDANCE',
    label: 'Quy mô dự kiến',
    value: null,
    note: 'Không lấy con số từ bất kỳ nguồn nào chưa xác nhận',
  },
  MEDIA_REACH: { key: 'MEDIA_REACH', label: 'Độ phủ truyền thông', value: null, note: 'Chưa có số liệu kiểm chứng' },
  ORGANIZER: { key: 'ORGANIZER', label: 'Đơn vị tổ chức', value: null, note: 'Chưa nhận thông tin pháp nhân' },
  PRESS_EMAIL: { key: 'PRESS_EMAIL', label: 'Email báo chí', value: null, note: 'Chưa có' },
  PARTNER_EMAIL: { key: 'PARTNER_EMAIL', label: 'Email hợp tác', value: null, note: 'Chưa có' },
  HOTLINE: { key: 'HOTLINE', label: 'Hotline', value: null, note: 'Chưa có' },
};

/** Ba chặng của hành trình — §KIT-06, không được rút thành 3 thẻ thường. */
export const journey = [
  {
    id: 'gap-minh',
    index: 1,
    title: 'GẶP MÌNH',
    en: 'MEET YOURSELF',
    lead: 'Độc thân không còn là một mình.',
    body:
      'Chặng mở đầu dành cho sự tĩnh lặng: nhìn lại mình, biết mình đang ở đâu, thích gì, cần gì. ' +
      'Không ai bị thúc phải kết nối trước khi sẵn sàng.',
    keywords: ['Nội tâm', 'Tự do', 'Tự nhận thức', 'Tự tin'],
    assetId: 'kit-06-01-gap-minh-reflection',
    portraitAssetId: 'kit-06-02-gap-minh-meditative-portrait',
    env: 'day',
    accent: '#7b2cff',
  },
  {
    id: 'gap-nhau',
    index: 2,
    title: 'GẶP NHAU',
    en: 'MEET OTHERS',
    lead: 'Một cuộc trò chuyện tử tế là đủ để bắt đầu.',
    body:
      'Chặng giữa là cộng đồng: những vòng tròn cà phê, những bàn ăn chung, những cuộc gặp có người dẫn. ' +
      'Kết nối diễn ra trong khuôn khổ được tôn trọng và an toàn.',
    keywords: ['Cộng đồng', 'Đối thoại', 'Trải nghiệm chung', 'Kết nối tôn trọng'],
    assetId: 'kit-06-03-gap-nhau-social-circle',
    portraitAssetId: 'kit-06-04-gap-nhau-first-smile',
    env: 'golden',
    accent: '#f5b942',
  },
  {
    id: 'gap-hanh-phuc',
    index: 3,
    title: 'GẶP HẠNH PHÚC',
    en: 'MEET HAPPINESS',
    lead: 'Hạnh phúc trong từng khoảnh khắc.',
    body:
      'Chặng cuối là ăn mừng: âm nhạc, ánh sáng, hàng nghìn người cùng một nhịp. ' +
      'Không phải vì ai đó tìm được một người — mà vì tất cả cùng có một đêm đáng nhớ.',
    keywords: ['Ăn mừng', 'Âm nhạc', 'Tình bạn', 'Năng lượng tập thể'],
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
