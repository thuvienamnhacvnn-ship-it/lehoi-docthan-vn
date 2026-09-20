/**
 * Vé (§10 TICKETING).
 *
 * KHÔNG có giá, KHÔNG có ngày mở bán, KHÔNG gắn cổng thanh toán giả (§27).
 *
 * Ba hạng truy được thẳng về tài liệu dự án: vé thường, VIP (KIT-01/15, KIT-05/15,16)
 * và tiếp khách doanh nghiệp (KIT-05/14).
 * Hai hạng gắn cờ `proposed` (Day Festival, vé nhóm) là đề xuất dựa trên cấu trúc lễ hội
 * — ban tổ chức chưa duyệt, giao diện phải hiện nhãn "đề xuất".
 * Quyền lợi mô tả trải nghiệm, không hứa con số.
 */

export interface TicketTier {
  id: 'standard' | 'day' | 'vip' | 'group' | 'hospitality';
  en: string;
  assetId: string;
  accent: string;
  /** Giá luôn lấy từ PLACEHOLDERS.TICKET_PRICE cho tới khi ban tổ chức chốt. */
  priceConfirmed: false;
  featured?: boolean;
  /**
   * true = hạng do đội thiết kế đề xuất dựa trên cấu trúc lễ hội, ban tổ chức CHƯA duyệt.
   * Giao diện phải gắn nhãn "đề xuất" để không ai nhầm là đã chốt.
   */
  proposed?: boolean;
}

export const ticketTiers: TicketTier[] = [
  {
    id: 'standard',
    en: 'STANDARD',
    assetId: 'kit-01-19-ticket',
    accent: '#2f6bff',
    priceConfirmed: false,
  },
  {
    id: 'day',
    en: 'DAY ONLY',
    assetId: 'kit-02-21-mega-zone-overview',
    accent: '#00d1ff',
    priceConfirmed: false,
    proposed: true,
  },
  {
    id: 'vip',
    en: 'VIP',
    assetId: 'kit-01-15-vip-lounge',
    accent: '#f5b942',
    priceConfirmed: false,
    featured: true,
  },
  {
    id: 'group',
    en: 'GROUP',
    assetId: 'kit-01-21-community-friends',
    accent: '#7b2cff',
    priceConfirmed: false,
    proposed: true,
  },
  {
    id: 'hospitality',
    en: 'HOSPITALITY',
    assetId: 'kit-05-14-sponsor-executive-hosting',
    accent: '#7b2cff',
    priceConfirmed: false,
  },
];

/** Các bước của quy trình mua vé — kiến trúc sẵn, chưa nối cổng thanh toán thật. */
export const checkoutSteps = [
  { id: 'select' },
  { id: 'details' },
  { id: 'promo' },
  { id: 'summary' },
  { id: 'payment' },
  { id: 'wallet' },
] as const;

/** Hành trình vòng tay thông minh (§11). Chưa xác nhận hệ thống nào đã triển khai. */
export const wristbandFlow = [
  { id: 'ticket', assetId: 'kit-01-19-ticket' },
  { id: 'checkin', assetId: 'kit-01-16-entrance-gate' },
  { id: 'wristband', assetId: 'kit-01-17-led-wristband' },
  { id: 'experience', assetId: 'kit-03-20-light-wave-over-audience' },
  { id: 'interaction', assetId: 'kit-03-19-synchronized-light-aerial' },
  { id: 'commerce', assetId: 'kit-05-11-fintech-payment-experience' },
  { id: 'journey', assetId: 'kit-01-18-app-phone-blank' },
] as const;

/**
 * Năng lực kỹ thuật MỞ SẴN nhưng CHƯA xác nhận đã triển khai (§11).
 * Hiển thị đúng như vậy trên giao diện — không tuyên bố hệ thống đang chạy.
 */
export const wristbandCapabilities = [
  { id: 'rfid', confirmed: false },
  { id: 'nfc', confirmed: false },
  { id: 'cashless', confirmed: false },
  { id: 'access', confirmed: false },
  { id: 'tracking', confirmed: false },
] as const;
