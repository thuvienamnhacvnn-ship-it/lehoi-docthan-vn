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
  name: string;
  en: string;
  lead: string;
  benefits: string[];
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
    name: 'Vé tiêu chuẩn',
    en: 'STANDARD',
    lead: 'Vào cửa cả ngày hội và đêm nhạc.',
    benefits: [
      'Toàn bộ khu ban ngày: Trạm Gặp, Mega Zone, khu thú cưng, triển lãm',
      'Khán đài đêm nhạc One Beat Night',
      'Vòng tay LED tham gia phần ánh sáng đồng bộ',
      'Vé điện tử có mã QR trong ví vé của webapp',
    ],
    assetId: 'kit-01-19-ticket',
    accent: '#2f6bff',
    priceConfirmed: false,
  },
  {
    id: 'day',
    name: 'Vé Day Festival',
    en: 'DAY ONLY',
    lead: 'Chỉ phần ban ngày, về trước khi đêm nhạc bắt đầu.',
    benefits: [
      'Toàn bộ khu ban ngày: Trạm Gặp, Mega Zone, khu thú cưng, triển lãm',
      'Các hoạt động cộng đồng: flashmob, Color Run, Coffee Circles',
      'Vé điện tử có mã QR trong ví vé của webapp',
    ],
    assetId: 'kit-02-21-mega-zone-overview',
    accent: '#00d1ff',
    priceConfirmed: false,
    proposed: true,
  },
  {
    id: 'vip',
    name: 'Vé VIP',
    en: 'VIP',
    lead: 'Lối vào riêng, khu ngồi nhìn thẳng sân khấu, phục vụ tại bàn.',
    benefits: [
      'Tất cả quyền lợi của vé tiêu chuẩn',
      'Check-in nhanh qua lối riêng',
      'Khu VIP có chỗ ngồi và tầm nhìn sân khấu',
      'Phục vụ đồ ăn uống tại bàn',
      'Ưu tiên đăng ký các hoạt động cần đặt chỗ',
    ],
    assetId: 'kit-01-15-vip-lounge',
    accent: '#f5b942',
    priceConfirmed: false,
    featured: true,
  },
  {
    id: 'group',
    name: 'Vé nhóm',
    en: 'GROUP',
    lead: 'Đi từ bốn người trở lên, check-in cùng một lượt.',
    benefits: [
      'Tất cả quyền lợi của vé tiêu chuẩn',
      'Check-in cả nhóm trong một lượt quét',
      'Giữ chỗ cạnh nhau ở các hoạt động cần đăng ký',
    ],
    assetId: 'kit-01-21-community-friends',
    accent: '#7b2cff',
    priceConfirmed: false,
    proposed: true,
  },
  {
    id: 'hospitality',
    name: 'Tiếp khách doanh nghiệp',
    en: 'HOSPITALITY',
    lead: 'Dành cho doanh nghiệp mời đối tác và khách hàng.',
    benefits: [
      'Khu tiếp khách riêng theo số lượng đăng ký',
      'Phục vụ trọn buổi tối',
      'Hỗ trợ đón tiếp và điều phối khách mời',
      'Có thể kết hợp với hoạt động thương hiệu trong lễ hội',
    ],
    assetId: 'kit-05-14-sponsor-executive-hosting',
    accent: '#7b2cff',
    priceConfirmed: false,
  },
];

/** Các bước của quy trình mua vé — kiến trúc sẵn, chưa nối cổng thanh toán thật. */
export const checkoutSteps = [
  { id: 'select', label: 'Chọn hạng vé', note: 'Chọn hạng và số lượng' },
  { id: 'details', label: 'Thông tin người mua', note: 'Họ tên, email, số điện thoại' },
  { id: 'promo', label: 'Mã ưu đãi', note: 'Áp mã nếu có' },
  { id: 'summary', label: 'Xác nhận đơn', note: 'Xem lại trước khi thanh toán' },
  { id: 'payment', label: 'Thanh toán', note: 'Lớp tích hợp — chưa nối nhà cung cấp nào' },
  { id: 'wallet', label: 'Nhận vé', note: 'Vé vào ví vé, có mã QR để check-in' },
];

/** Hành trình vòng tay thông minh (§11). Chưa xác nhận hệ thống nào đã triển khai. */
export const wristbandFlow = [
  { id: 'ticket', label: 'Vé', note: 'Vé điện tử trong ví vé của webapp', assetId: 'kit-01-19-ticket' },
  { id: 'checkin', label: 'Check-in', note: 'Quét mã tại cổng vào', assetId: 'kit-01-16-entrance-gate' },
  { id: 'wristband', label: 'Vòng tay', note: 'Nhận vòng tay LED tại cổng', assetId: 'kit-01-17-led-wristband' },
  { id: 'experience', label: 'Trải nghiệm', note: 'Vòng tay sáng theo nhạc trong đêm nhạc', assetId: 'kit-03-20-light-wave-over-audience' },
  { id: 'interaction', label: 'Tương tác', note: 'Tham gia các phần ánh sáng đồng bộ', assetId: 'kit-03-19-synchronized-light-aerial' },
  { id: 'commerce', label: 'Mua sắm', note: 'Thanh toán tại các quầy trong lễ hội', assetId: 'kit-05-11-fintech-payment-experience' },
  { id: 'journey', label: 'Hành trình riêng', note: 'Lịch của tôi và gợi ý theo hoạt động đã chọn', assetId: 'kit-01-18-app-phone-blank' },
];

/**
 * Năng lực kỹ thuật MỞ SẴN nhưng CHƯA xác nhận đã triển khai (§11).
 * Hiển thị đúng như vậy trên giao diện — không tuyên bố hệ thống đang chạy.
 */
export const wristbandCapabilities = [
  { id: 'rfid', label: 'RFID', confirmed: false },
  { id: 'nfc', label: 'NFC', confirmed: false },
  { id: 'cashless', label: 'Thanh toán không tiền mặt', confirmed: false },
  { id: 'access', label: 'Kiểm soát ra vào', confirmed: false },
  { id: 'tracking', label: 'Đo lường hoạt động thương hiệu', confirmed: false },
] as const;
