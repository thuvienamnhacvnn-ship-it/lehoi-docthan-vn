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
  name: string;
  en: string;
  short: string;
  description: string;
  /** Ảnh nhìn từ trên xuống của khu (KIT-06). */
  aerialAssetId: string;
  detailAssetIds: string[];
  color: string;
  /** Đa giác trong hệ toạ độ 0–100 của SVG bản đồ. */
  shape: string;
  labelAt: [number, number];
  services: string[];
  accessible: boolean;
}

export const zones: Zone[] = [
  {
    id: 'main-plaza',
    name: 'Quảng trường trung tâm',
    en: 'MAIN PLAZA',
    short: 'Khai hội, flashmob, điểm hẹn',
    description:
      'Nơi lễ hội bắt đầu: màn flashmob buổi sáng, điểm hẹn của các nhóm, và là trục đi tới mọi khu còn lại.',
    aerialAssetId: 'kit-06-07-festival-masterplan-aerial',
    detailAssetIds: ['kit-02-01-flashmob-kickoff-wide', 'kit-02-02-flashmob-dancer-closeup'],
    color: '#f5b942',
    shape: '38,40 62,40 62,58 38,58',
    labelAt: [50, 49],
    services: ['Điểm hẹn', 'Sân khấu nhỏ', 'Nước uống'],
    accessible: true,
  },
  {
    id: 'mega-zone',
    name: 'Mega Zone',
    en: 'MEGA ZONE',
    short: 'Khu chợ trải nghiệm 7 cụm ngành',
    description:
      'Khu thương mại trải nghiệm lớn nhất lễ hội: thời trang, làm đẹp, công nghệ, sức khoẻ, ẩm thực, du lịch, AI & startup.',
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
    services: ['Gian hàng thương hiệu', 'Ưu đãi theo giờ', 'Quầy nhận hàng O2O'],
    accessible: true,
  },
  {
    id: 'tram-gap',
    name: 'Trạm Gặp',
    en: 'CONNECTION ZONE',
    short: 'Coffee Talk, Coffee Circles, Match & Meet',
    description:
      'Khu dành cho trò chuyện và kết nối có người dẫn. Mọi hoạt động ở đây đều có quy tắc ứng xử và nhân sự hỗ trợ.',
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
    services: ['Người điều phối', 'Khu yên tĩnh', 'Đăng ký tại chỗ'],
    accessible: true,
  },
  {
    id: 'pets',
    name: 'Khu thú cưng',
    en: 'PETS',
    short: 'Chó nhỏ, chó lớn, mèo, chó già',
    description:
      'Khu có bóng mát, chia theo kích cỡ và tính cách vật nuôi. Có buổi xã hội hoá cho chó con, góc mèo và diễu hành nhỏ.',
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
    services: ['Nước cho thú cưng', 'Khu tách riêng', 'Chỗ chụp ảnh'],
    accessible: true,
  },
  {
    id: 'visual-art',
    name: 'Khu triển lãm thị giác',
    en: 'VISUAL ART',
    short: 'Sắp đặt nghệ thuật + không gian sáng tạo',
    description:
      'Lối đi một chiều qua ba lớp không gian sáng, tiếp đó là phòng tranh và góc nghệ sĩ làm việc tại chỗ.',
    aerialAssetId: 'kit-06-12-visual-art-zone-aerial',
    detailAssetIds: [
      'kit-02-29-visual-art-succulent-installation',
      'kit-02-31-visual-exhibition-walkthrough',
      'kit-02-32-creative-art-gallery',
    ],
    color: '#ff2e9a',
    shape: '66,44 94,44 94,64 66,64',
    labelAt: [80, 54],
    services: ['Lối đi một chiều', 'Hướng dẫn viên', 'Khu chụp ảnh'],
    accessible: true,
  },
  {
    id: 'food',
    name: 'Khu ẩm thực',
    en: 'FOOD',
    short: 'Bàn ăn chung, quầy món, khu ngồi',
    description: 'Các quầy món và khu bàn dài dùng chung — nơi diễn ra Happy Lunch.',
    aerialAssetId: 'kit-06-13-food-zone-aerial',
    detailAssetIds: ['kit-02-12-happy-lunch-table', 'kit-02-13-happy-lunch-detail'],
    color: '#f5b942',
    shape: '36,62 62,62 62,78 36,78',
    labelAt: [49, 70],
    services: ['Bàn dùng chung', 'Nước miễn phí', 'Khu có mái che'],
    accessible: true,
  },
  {
    id: 'color-run',
    name: 'Đường Color Run',
    en: 'COLOR RUN',
    short: 'Cung chạy qua ba trạm màu',
    description: 'Đường chạy ngắn vòng quanh khu lễ hội, đi qua ba trạm màu rồi về đích nhận huy hiệu.',
    aerialAssetId: 'kit-06-14-color-run-route-aerial',
    detailAssetIds: ['kit-02-03-color-run-start', 'kit-02-05-color-run-finish-badge'],
    color: '#00d1ff',
    shape: '4,8 96,8 96,15 4,15',
    labelAt: [50, 11.5],
    services: ['Trạm nước', 'Trạm màu', 'Khu về đích'],
    accessible: false,
  },
  {
    id: 'concert',
    name: 'Sân khấu chính',
    en: 'CONCERT',
    short: 'One Beat Night — đêm nhạc',
    description:
      'Sân khấu lớn với dàn đèn và âm thanh chuyên nghiệp. Ban ngày dùng cho các phần trình diễn ngắn, tối là đêm nhạc.',
    aerialAssetId: 'kit-06-18-night-festival-campus',
    detailAssetIds: [
      'kit-01-07-main-stage-wide',
      'kit-03-04-headline-singer-wide',
      'kit-03-19-synchronized-light-aerial',
    ],
    color: '#ff2e9a',
    shape: '28,82 72,82 72,96 28,96',
    labelAt: [50, 89],
    services: ['Khán đài', 'Vòng tay LED', 'Khu xem có hỗ trợ'],
    accessible: true,
  },
  {
    id: 'vip',
    name: 'Khu VIP',
    en: 'VIP',
    short: 'Lối vào riêng, khu ngồi, phục vụ tại bàn',
    description: 'Dành cho khách VIP và khách mời của đối tác: check-in nhanh, khu nghỉ và phục vụ riêng.',
    aerialAssetId: 'kit-01-15-vip-lounge',
    detailAssetIds: ['kit-05-15-vip-fast-track-service', 'kit-05-16-vip-table-service'],
    color: '#f5b942',
    shape: '76,68 96,68 96,88 76,88',
    labelAt: [86, 78],
    services: ['Check-in nhanh', 'Phục vụ tại bàn', 'Tầm nhìn sân khấu'],
    accessible: true,
  },
  {
    id: 'support',
    name: 'Hỗ trợ & an toàn',
    en: 'SUPPORT',
    short: 'Thông tin, y tế, an ninh, tiếp cận',
    description:
      'Quầy thông tin, điểm sơ cứu, nhân sự an toàn và lối đi không rào cản. Có mặt ở nhiều điểm trong khu lễ hội.',
    aerialAssetId: 'kit-06-19-information-help-desk',
    detailAssetIds: [
      'kit-06-20-safety-staff-support',
      'kit-06-21-first-aid-wellbeing-point',
      'kit-06-22-accessible-event-pathway',
    ],
    color: '#f4f1ea',
    shape: '4,80 24,80 24,96 4,96',
    labelAt: [14, 88],
    services: ['Quầy thông tin', 'Sơ cứu', 'Đồ thất lạc', 'Hỗ trợ tiếp cận'],
    accessible: true,
  },
];

export const zonesById = new Map(zones.map((z) => [z.id, z]));

/** Bốn thời khắc trong ngày của khu lễ hội — KIT-06 15→18. */
export const dayPhases = [
  { id: 'morning', label: 'Buổi sáng', assetId: 'kit-06-15-morning-festival-light', env: 'day' as const },
  { id: 'midday', label: 'Giữa ngày', assetId: 'kit-06-16-midday-festival-life', env: 'day' as const },
  { id: 'golden', label: 'Giờ vàng', assetId: 'kit-06-17-golden-hour-transition', env: 'golden' as const },
  { id: 'night', label: 'Đêm nhạc', assetId: 'kit-06-18-night-festival-campus', env: 'night' as const },
] as const;
