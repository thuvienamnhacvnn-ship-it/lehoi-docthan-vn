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

export const categoryLabels: Record<ActivityCategory, string> = {
  music: 'Âm nhạc',
  community: 'Cộng đồng',
  talk: 'Trò chuyện',
  pets: 'Thú cưng',
  food: 'Ẩm thực',
  art: 'Nghệ thuật',
  wellness: 'Sức khoẻ',
  commerce: 'Mua sắm',
  vip: 'VIP',
};

export type DayPhase = 'morning' | 'midday' | 'golden' | 'night';

export const phaseLabels: Record<DayPhase, { label: string; en: string; env: 'day' | 'golden' | 'night' }> = {
  morning: { label: 'Buổi sáng', en: 'MORNING', env: 'day' },
  midday: { label: 'Giữa ngày', en: 'MIDDAY', env: 'day' },
  golden: { label: 'Giờ vàng', en: 'GOLDEN HOUR', env: 'golden' },
  night: { label: 'One Beat Night', en: 'NIGHT', env: 'night' },
};

export interface Activity {
  id: string;
  name: string;
  /** Câu mô tả ngắn — nội dung do web viết, ảnh không chứa chữ. */
  summary: string;
  detail: string;
  category: ActivityCategory;
  phase: DayPhase;
  zoneId: string;
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
    name: 'Flashmob khai hội',
    summary: 'Hàng trăm người cùng vào nhịp đầu tiên của ngày.',
    detail:
      'Màn đồng diễn mở màn ngay quảng trường trung tâm. Ai cũng tham gia được: động tác đơn giản, tập trước 15 phút, ' +
      'và toàn bộ được quay lại làm tư liệu truyền thông của lễ hội.',
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
    name: 'Color Run',
    summary: 'Đường chạy màu xuyên ba khu trải nghiệm.',
    detail:
      'Cung đường ngắn, không tính giờ, đi qua ba trạm màu. Về đích nhận huy hiệu đeo được — thứ để nhớ, không phải để thi đấu.',
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
    name: 'Coffee Talk',
    summary: 'Những cuộc nói chuyện ngắn về sống một mình mà không cô đơn.',
    detail:
      'Sân khấu nhỏ ngoài trời, khách ngồi gần, mỗi phiên một chủ đề: tự lập tài chính, sức khoẻ tinh thần, ' +
      'làm bạn với chính mình. Hỏi đáp trực tiếp, không diễn.',
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
    name: 'Coffee Circles',
    summary: 'Vòng tròn 8–10 người, một người dẫn, không ai bị bỏ lại.',
    detail:
      'Mỗi vòng có người điều phối để câu chuyện không rơi vào im lặng. Đổi vòng sau mỗi phiên, gặp nhóm mới.',
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
    name: 'Match & Meet',
    summary: 'Gặp một-một có khung giờ, có người dẫn, có quyền dừng.',
    detail:
      'Bàn đôi xếp trong khu kết nối, mỗi lượt vài phút rồi xoay vòng. Có quy tắc ứng xử rõ ràng và nhân sự hỗ trợ ' +
      'luôn ở trong khu vực. Đây là gặp gỡ trong khuôn khổ tôn trọng, không phải sự kiện ghép đôi.',
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
    name: 'Happy Lunch',
    summary: 'Bàn ăn chung — cách dễ nhất để bắt chuyện.',
    detail: 'Bàn dài, món chia phần, người lạ ngồi cạnh nhau. Không ai phải ăn một mình.',
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
    name: 'Pets Meetup',
    summary: 'Khu thú cưng chia theo nhóm: chó nhỏ, chó lớn, mèo, chó già.',
    detail:
      'Không gian có bóng mát, tách khu theo kích cỡ và tính cách để an toàn cho cả vật nuôi lẫn người. ' +
      'Có buổi xã hội hoá cho chó con và góc riêng cho người nuôi mèo.',
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
    name: 'Walk & Wag Parade',
    summary: 'Cuộc diễu hành nhỏ của những người nuôi thú cưng.',
    detail: 'Đi một vòng đường nội bộ có người xem hai bên, tốc độ chậm, ưu tiên an toàn cho thú cưng.',
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
    name: 'Mega Zone',
    summary: 'Khu chợ trải nghiệm: thời trang, làm đẹp, công nghệ, sức khoẻ, ẩm thực, du lịch, AI & startup.',
    detail:
      'Gian hàng dựng theo cụm ngành, khách đi thử sản phẩm thật chứ không chỉ nhận tờ rơi. ' +
      'Đây cũng là nơi thương hiệu đối tác đặt hoạt động tương tác của mình.',
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
    name: 'MegaSale & Happiness Deals',
    summary: 'Khung giờ ưu đãi tập trung trong khu thương mại.',
    detail: 'Các thương hiệu mở ưu đãi theo khung giờ; khách nhận hộp quà tổng hợp từ nhiều nhãn.',
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
    name: 'Không gian trình diễn thị giác',
    summary: 'Sắp đặt nghệ thuật lớn lấy cảm hứng từ sức sống của cây sen đá.',
    detail:
      'Một lối đi một chiều qua ba lớp không gian sáng, đi hết là hiểu hành trình của lễ hội mà không cần ai giải thích.',
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
    name: 'Không gian sáng tạo',
    summary: 'Triển lãm tranh, ảnh, tác phẩm hỗn hợp và góc nhạc mộc.',
    detail:
      'Nghệ sĩ làm việc ngay tại chỗ, khách xem được toàn bộ quá trình và có thể tham gia phần cộng đồng của tác phẩm.',
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
    name: 'Live band',
    summary: 'Ban nhạc sống mở màn đêm nhạc.',
    detail: 'Phần nhạc sống đầu đêm, ánh sáng bắt đầu chuyển sang tông magenta – xanh – vàng.',
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
    name: 'Match Cam',
    summary: 'Máy quay quét khán đài, những phản ứng thật lên màn hình lớn.',
    detail: 'Một khoảnh khắc tương tác vui giữa đêm nhạc — người được chọn phản ứng tự nhiên, cả sân cùng cười.',
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
    name: 'Happiness Toast',
    summary: 'Cả lễ hội cùng nâng ly một lần trong đêm.',
    detail: 'Một nhịp dừng ngắn: đèn hạ, nhạc nhỏ lại, tất cả cùng nâng ly cho một năm sống tử tế với chính mình.',
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
    name: 'Nghệ sĩ chính',
    summary: 'Phần trình diễn cao trào của đêm.',
    detail: 'Sân khấu mở rộng, dàn đèn chạy hết công suất, khán đài thành một dải ánh sáng chuyển động.',
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
    name: 'Ca sĩ × DJ',
    summary: 'Định dạng kết hợp: giọng hát trên nền set điện tử.',
    detail: 'Phần chuyển từ nhạc sống sang sàn nhảy, hai nghệ sĩ cùng chia sân khấu.',
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
    name: 'One Beat Light Moment',
    summary: 'Hàng nghìn vòng tay LED sáng cùng một nhịp.',
    detail:
      'Khoảnh khắc ký hiệu của lễ hội: toàn bộ khán đài trở thành một làn sóng ánh sáng chạy theo nhạc. ' +
      'Đây là lúc “một nhịp” trong tên lễ hội trở thành thứ nhìn thấy được.',
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
    name: 'Finale',
    summary: 'Tất cả nghệ sĩ trở lại sân khấu.',
    detail: 'Phần khép lại: pháo sáng, confetti, và câu cuối cùng của đêm — hẹn gặp lại.',
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
    name: 'VIP & Hospitality',
    summary: 'Lối vào riêng, khu ngồi nhìn thẳng sân khấu, phục vụ tại bàn.',
    detail: 'Dành cho khách VIP và khách mời của đối tác: check-in nhanh, khu nghỉ riêng, phục vụ đồ ăn uống tại bàn.',
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
    name: 'Góc sức khoẻ & phục hồi',
    summary: 'Chỗ để thở giữa một ngày dài.',
    detail: 'Trải nghiệm thư giãn ngắn trong khu thương mại: giãn cơ, chăm sóc cơ bản, nước và chỗ ngồi yên tĩnh.',
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
    name: 'Pet Photo Booth',
    summary: 'Chụp ảnh cùng thú cưng trong bối cảnh neon của lễ hội.',
    detail: 'Góc chụp dựng theo nhận diện lễ hội, ảnh gửi thẳng về điện thoại.',
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
    name: 'Thời trang & Làm đẹp',
    assetId: 'kit-02-22-mega-zone-fashion-beauty',
    note: 'Thử sản phẩm, phụ kiện, tư vấn tại quầy',
  },
  {
    id: 'technology',
    name: 'Công nghệ',
    assetId: 'kit-02-23-mega-zone-tech-demo',
    note: 'Thiết bị mới, màn hình tương tác, dùng thử',
  },
  {
    id: 'wellness',
    name: 'Sức khoẻ & Phục hồi',
    assetId: 'kit-02-24-mega-zone-wellness',
    note: 'Trải nghiệm thư giãn ngắn',
  },
  {
    id: 'food',
    name: 'Ẩm thực & FMCG',
    assetId: 'kit-02-25-mega-zone-food-sampling',
    note: 'Nếm thử, phản ứng thật tại quầy',
  },
  { id: 'travel', name: 'Du lịch', assetId: 'kit-02-26-mega-zone-travel', note: 'Gian hàng trải nghiệm điểm đến' },
  {
    id: 'ai-startup',
    name: 'AI & Startup',
    assetId: 'kit-02-27-mega-zone-ai-startup',
    note: 'Khu sản phẩm mới, sắp đặt tương tác',
  },
  {
    id: 'deals',
    name: 'Happiness Deals',
    assetId: 'kit-02-28-happiness-box-unboxing',
    note: 'Ưu đãi theo khung giờ, hộp quà nhiều nhãn',
  },
];

export const activitiesById = new Map(activities.map((a) => [a.id, a]));
