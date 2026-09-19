/**
 * Cộng đồng, chân dung khán giả và hệ nội dung (§KIT-04, §13).
 * Ba nhóm tuổi 21–25 / 26–35 / 36–52 lấy từ pitch deck PAGE 04 (style bible mục 6).
 */

export interface AudienceGroup {
  id: string;
  range: string;
  title: string;
  lead: string;
  traits: string[];
  assetId: string;
  accent: string;
}

export const audienceGroups: AudienceGroup[] = [
  {
    id: '21-25',
    range: '21–25',
    title: 'Đang dựng cuộc đời của mình',
    lead: 'Vừa ra trường hoặc mới đi làm, thích không gian sáng tạo, đi một mình cũng thấy ổn.',
    traits: ['Học và làm song song', 'Quán cà phê là văn phòng thứ hai', 'Sống trên mạng xã hội'],
    assetId: 'kit-04-01-young-single-student',
    accent: '#00d1ff',
  },
  {
    id: '26-35',
    range: '26–35',
    title: 'Độc lập và biết mình muốn gì',
    lead: 'Đã có nghề, có thu nhập, chọn bạn bè và trải nghiệm thay vì chọn bừa.',
    traits: ['Tự chủ tài chính', 'Ưu tiên trải nghiệm', 'Khó tính với chất lượng'],
    assetId: 'kit-04-02-young-professional-independent',
    accent: '#7b2cff',
  },
  {
    id: '36-52',
    range: '36–52',
    title: 'Điềm tĩnh và cởi mở',
    lead: 'Sống một mình là một lựa chọn, không phải một giai đoạn chờ đợi.',
    traits: ['Gu rõ ràng', 'Coi trọng sự tôn trọng', 'Sẵn sàng gặp người mới'],
    assetId: 'kit-04-03-mature-single-confident',
    accent: '#f5b942',
  },
];

/** Các lát cắt lối sống — làm cho lễ hội đáng tin về mặt văn hoá, không phải slide nhân sự. */
export const lifestyleStories = [
  { id: 'solo-travel', label: 'Đi một mình', note: 'Chuyến đi không cần chờ ai rủ', assetId: 'kit-04-04-solo-travel-lifestyle' },
  { id: 'fitness', label: 'Tập một mình', note: 'Kỷ luật với cơ thể của mình', assetId: 'kit-04-05-solo-fitness-lifestyle' },
  { id: 'wellness', label: 'Chăm sóc bản thân', note: 'Sức khoẻ tinh thần là việc nghiêm túc', assetId: 'kit-04-06-wellness-self-care' },
  { id: 'cafe', label: 'Cà phê một mình', note: 'Yên tĩnh, không cô đơn', assetId: 'kit-04-07-independent-cafe-moment' },
  { id: 'freelance', label: 'Làm tự do', note: 'Tự sắp lịch, tự chịu trách nhiệm', assetId: 'kit-04-08-freelancer-coworking' },
  { id: 'single-parent', label: 'Làm cha mẹ đơn thân', note: 'Vẫn có quyền vui', assetId: 'kit-04-09-single-parent-positive-life' },
  { id: 'pet-parent', label: 'Nuôi thú cưng', note: 'Một gia đình theo cách khác', assetId: 'kit-04-10-pet-parent-lifestyle' },
  { id: 'healing', label: 'Chữa lành', note: 'Nói ra được là đã nhẹ đi', assetId: 'kit-04-11-healing-conversation' },
  { id: 'confident-woman', label: 'Tự tin một mình', note: 'Không chờ ai cho phép mình vui', assetId: 'kit-01-10-lifestyle-woman' },
  { id: 'confident-man', label: 'Chủ động sống', note: 'Biết mình muốn gì và không vội', assetId: 'kit-01-11-lifestyle-man' },
];

/** Hệ nội dung của lễ hội — KIT-04 13→24. Đây là ĐỊNH DẠNG nội dung, không phải bài đã đăng. */
export interface ContentFormat {
  id: string;
  name: string;
  kind: 'podcast' | 'ugc' | 'media' | 'ooh' | 'social' | 'recap';
  lead: string;
  body: string;
  assetId: string;
  portraitAssetId?: string;
}

export const contentFormats: ContentFormat[] = [
  {
    id: 'wemeet-podcast',
    name: 'WeMeet Podcast',
    kind: 'podcast',
    lead: 'Chương trình trò chuyện về sống độc thân tử tế.',
    body: 'Mỗi tập một khách mời kể chuyện thật: tự lập, chia tay, làm lại, nuôi thú cưng, đi một mình. Quay trong studio, phát trước và sau lễ hội.',
    assetId: 'kit-04-13-podcast-studio-wide',
    portraitAssetId: 'kit-04-14-podcast-host-closeup',
  },
  {
    id: 'podcast-story',
    name: 'Podcast Story',
    kind: 'podcast',
    lead: 'Bản ngắn, một câu chuyện, một người.',
    body: 'Định dạng gọn cho mạng xã hội: một khách mời, một trải nghiệm, cắt thành các đoạn dọc.',
    assetId: 'kit-04-15-podcast-guest-story',
  },
  {
    id: 'ugc',
    name: 'Nội dung do khách tạo',
    kind: 'ugc',
    lead: 'Người tham dự chính là đội làm nội dung đông nhất.',
    body: 'Các điểm trong lễ hội được thiết kế để quay đẹp. Có cuộc thi nội dung và bộ khung để khách dựng bài của mình.',
    assetId: 'kit-04-17-ugc-creative-process',
    portraitAssetId: 'kit-04-16-content-creator-filming',
  },
  {
    id: 'livestream',
    name: 'Livestream & KOL',
    kind: 'media',
    lead: 'Phát trực tiếp từ trong lễ hội.',
    body: 'Studio đặt ngay tại sự kiện, người dẫn và khách mời nói chuyện giữa dòng người thật.',
    assetId: 'kit-04-18-kol-livestream-studio',
  },
  {
    id: 'press',
    name: 'Báo chí',
    kind: 'media',
    lead: 'Họp báo công bố và khu tác nghiệp riêng.',
    body: 'Có khu dành cho phóng viên, ảnh chính thức và tư liệu tải về cho toà soạn.',
    assetId: 'kit-04-19-press-conference-wide',
    portraitAssetId: 'kit-04-20-journalist-camera-line',
  },
  {
    id: 'ooh',
    name: 'Truyền thông ngoài trời',
    kind: 'ooh',
    lead: 'Lễ hội xuất hiện trong thành phố trước khi diễn ra.',
    body: 'Màn hình lớn và các điểm quảng bá ngoài trời mang nhận diện của lễ hội ra đường phố.',
    assetId: 'kit-04-21-ooh-city-installation',
  },
  {
    id: 'social',
    name: 'Sản xuất nội dung mạng xã hội',
    kind: 'social',
    lead: 'Một đội làm nội dung chạy suốt chiến dịch.',
    body: 'Hình ảnh, video ngắn và nội dung đếm ngược được sản xuất theo lịch chiến dịch.',
    assetId: 'kit-04-22-social-content-production',
    portraitAssetId: 'kit-04-23-campaign-countdown-production',
  },
  {
    id: 'recap',
    name: 'Phim tổng kết',
    kind: 'recap',
    lead: 'Sau lễ hội, câu chuyện vẫn chạy tiếp.',
    body: 'Phim tổng kết và bộ tư liệu hậu sự kiện dành cho đối tác, báo chí và cộng đồng.',
    assetId: 'kit-04-24-post-event-recap-editing',
  },
];

/** Vận hành & an toàn — KIT-06 19→24. */
export const operations = [
  { id: 'info', label: 'Quầy thông tin', note: 'Hỏi gì cũng có người trả lời', assetId: 'kit-06-19-information-help-desk' },
  { id: 'safety', label: 'Nhân sự an toàn', note: 'Có mặt ở mọi khu, dễ nhận ra', assetId: 'kit-06-20-safety-staff-support' },
  { id: 'first-aid', label: 'Điểm sơ cứu', note: 'Y tế và chỗ nghỉ khi cần', assetId: 'kit-06-21-first-aid-wellbeing-point' },
  { id: 'accessible', label: 'Lối đi tiếp cận', note: 'Đường rộng, không bậc, không rào cản', assetId: 'kit-06-22-accessible-event-pathway' },
  { id: 'control', label: 'Phòng điều hành', note: 'Theo dõi toàn khu trong suốt sự kiện', assetId: 'kit-06-23-event-operations-control' },
  { id: 'briefing', label: 'Họp đội ngũ', note: 'Toàn bộ nhân sự được hướng dẫn trước giờ mở cổng', assetId: 'kit-06-24-event-staff-briefing' },
];

export const faqs = [
  {
    q: 'Đây có phải sự kiện hẹn hò không?',
    a: 'Không. ONE BEAT NIGHT là lễ hội về tự do, cộng đồng và âm nhạc. Có những hoạt động giúp mọi người làm quen trong khuôn khổ tôn trọng, nhưng ghép đôi không phải mục tiêu của lễ hội.',
  },
  {
    q: 'Người đang có đôi có tham dự được không?',
    a: 'Được. Lễ hội hướng tới người độc thân nhưng không kiểm tra tình trạng của ai. Ai muốn một ngày vui và một đêm nhạc đều tham gia được.',
  },
  { q: 'Bao giờ diễn ra và ở đâu?', a: 'Lễ hội tổ chức tại TP.HCM. Ngày, giờ và địa điểm cụ thể sẽ công bố khi ban tổ chức chốt — trang này sẽ cập nhật ngay khi có.' },
  { q: 'Giá vé bao nhiêu?', a: 'Bảng giá chưa được công bố. Các hạng vé và quyền lợi đã có ở trang Vé; giá và ngày mở bán sẽ bổ sung sau.' },
  { q: 'Line-up gồm những ai?', a: 'Danh sách nghệ sĩ chưa công bố. Trang Nghệ sĩ hiện đang mô tả các vị trí biểu diễn trong kịch bản đêm nhạc.' },
  { q: 'Tôi đi một mình có sao không?', a: 'Lễ hội được thiết kế cho người đi một mình: có hoạt động có người dẫn, có vòng tròn trò chuyện, có bàn ăn chung. Không ai bị bỏ lại ở góc sân.' },
  { q: 'Có mang thú cưng được không?', a: 'Có khu riêng cho thú cưng, chia theo kích cỡ và tính cách. Quy định cụ thể về giống loài, giấy tờ tiêm phòng sẽ công bố trong cẩm nang tham dự.' },
  { q: 'Người khuyết tật tham dự thế nào?', a: 'Khu lễ hội có lối đi không rào cản, khu xem có hỗ trợ và nhân sự trợ giúp. Chi tiết nằm ở mục Tiếp cận trong cẩm nang tham dự.' },
  { q: 'Vòng tay LED là gì?', a: 'Vòng tay phát sáng nhận tại cổng, sáng theo nhạc trong phần One Beat Light Moment của đêm nhạc.' },
  { q: 'Doanh nghiệp muốn hợp tác thì liên hệ ai?', a: 'Xem trang Đối tác để biết các hình thức tham gia, rồi gửi thông tin qua biểu mẫu ở cuối trang.' },
];

/**
 * Bộ ảnh nhận diện dùng trong phòng báo chí — toàn ảnh dựng sẵn (mockup) của KIT-01.
 * Đây là phần tư liệu mà toà soạn hay xin nhất nên gom thành một khối riêng.
 */
export const brandMockups = [
  { id: 'logo', label: 'Logo đầy đủ', note: 'Bản chốt, có chữ, nền đen', assetId: 'kit-01-01-logo-master-goc' },
  { id: 'emblem', label: 'Biểu tượng', note: 'Chỉ biểu tượng, nền trong suốt', assetId: 'kit-01-02-emblem-trong-suot' },
  { id: 'ticket', label: 'Vé', note: 'Vé holographic, vùng trống để đặt hạng vé', assetId: 'kit-01-19-ticket' },
  { id: 'wristband', label: 'Vòng tay LED', note: 'Ảnh sản phẩm nền đen', assetId: 'kit-01-17-led-wristband' },
  { id: 'merch', label: 'Quà lưu niệm', note: 'Áo, mũ, túi, hộp pin mang biểu tượng', assetId: 'kit-01-20-merchandise' },
  { id: 'app', label: 'Ứng dụng', note: 'Khung điện thoại trống để ghép giao diện', assetId: 'kit-01-18-app-phone-blank' },
  { id: 'texture', label: 'Vân vàng', note: 'Chất liệu cho viền và chữ hạng VIP', assetId: 'kit-01-26-texture-gold' },
  { id: 'entrance', label: 'Cổng vào', note: 'Cổng vô cực, dùng cho ảnh bìa bài viết', assetId: 'kit-01-16-entrance-gate' },
];

/** Tài liệu tải về (§13). Chưa có file thật -> ghi rõ đang chuẩn bị, không tạo link giả. */
export const pressDownloads = [
  { id: 'logo-pack', label: 'Bộ logo & biểu tượng', note: 'PNG nền trong suốt + bản đầy đủ', ready: true, assetId: 'kit-01-02-emblem-trong-suot' },
  { id: 'key-visual', label: 'Key visual', note: 'Ảnh chủ đạo của lễ hội', ready: true, assetId: 'kit-01-03-hero-desktop' },
  { id: 'photo-set', label: 'Bộ ảnh lễ hội', note: 'Thư viện hình ảnh theo 6 KIT', ready: true, assetId: 'kit-01-09-crowd-energy' },
  { id: 'media-kit', label: 'Media kit (PDF)', note: 'Đang chuẩn bị', ready: false, assetId: 'kit-04-19-press-conference-wide' },
  { id: 'fact-sheet', label: 'Thông tin sự kiện', note: 'Chờ ban tổ chức chốt ngày, địa điểm, quy mô', ready: false, assetId: 'kit-06-23-event-operations-control' },
];
