import type { ZoneId } from './zones';

/**
 * Hệ sinh thái tài trợ (§05 KIT-05, §06, §12).
 *
 * Nguyên tắc: KHÔNG có gói giá, KHÔNG có logo thương hiệu giả, KHÔNG có chỉ số bịa.
 * Trang này bán "vai trò thương hiệu có thể đóng trong lễ hội", chứ không bán ô quảng cáo.
 */

export type OpportunityCategory =
  | 'visibility'
  | 'experience'
  | 'engagement'
  | 'commerce'
  | 'data'
  | 'hospitality'
  | 'content'
  | 'impact';

export const opportunityCategories: Record<OpportunityCategory, { label: string; en: string; color: string }> = {
  visibility: { label: 'Hiện diện', en: 'VISIBILITY', color: '#f5b942' },
  experience: { label: 'Trải nghiệm', en: 'EXPERIENCE', color: '#7b2cff' },
  engagement: { label: 'Tương tác', en: 'ENGAGEMENT', color: '#ff2e9a' },
  commerce: { label: 'Thương mại', en: 'COMMERCE', color: '#2f6bff' },
  data: { label: 'Dữ liệu', en: 'DATA', color: '#00d1ff' },
  hospitality: { label: 'Tiếp khách', en: 'HOSPITALITY', color: '#f5b942' },
  content: { label: 'Nội dung', en: 'CONTENT', color: '#ff2e9a' },
  impact: { label: 'Cộng đồng', en: 'IMPACT', color: '#00d1ff' },
};

/** Bốn bước của một hoạt động thương hiệu trong lễ hội. */
export interface ActivationStep {
  step: 'ACTIVATE' | 'ENGAGE' | 'CONVERT' | 'MEASURE';
  label: string;
  text: string;
}

export interface SponsorOpportunity {
  id: string;
  name: string;
  category: OpportunityCategory;
  lead: string;
  body: string;
  assetId: string;
  zoneId?: ZoneId;
  journey: ActivationStep[];
}

const step = (
  s: ActivationStep['step'],
  label: string,
  text: string,
): ActivationStep => ({ step: s, label, text });

export const opportunities: SponsorOpportunity[] = [
  {
    id: 'central-activation',
    name: 'Hoạt động trung tâm',
    category: 'experience',
    lead: 'Một khu trải nghiệm đặt ở trục đi lại chính của lễ hội.',
    body:
      'Không phải một gian hàng trong dãy gian hàng. Đây là một điểm dừng trong hành trình của khách: có kiến trúc riêng, ' +
      'có lý do để bước vào, và có thứ để mang về.',
    assetId: 'kit-05-01-sponsor-central-booth',
    zoneId: 'mega-zone',
    journey: [
      step('ACTIVATE', 'Dựng điểm đến', 'Khu trải nghiệm dựng theo nhận diện thương hiệu, nằm trên trục người đi.'),
      step('ENGAGE', 'Giữ khách lại', 'Nhân sự thương hiệu hướng dẫn trải nghiệm thay vì phát tờ rơi.'),
      step('CONVERT', 'Dẫn tới hành động', 'Ưu đãi tại chỗ hoặc mã dùng sau lễ hội.'),
      step('MEASURE', 'Đo lại', 'Lượt vào khu, lượt hoàn tất trải nghiệm, lượt nhận ưu đãi.'),
    ],
  },
  {
    id: 'immersive-brand',
    name: 'Trải nghiệm thương hiệu nhập vai',
    category: 'experience',
    lead: 'Ánh sáng, chiếu hình và sắp đặt — thương hiệu thành một không gian.',
    body:
      'Dành cho thương hiệu muốn được nhớ bằng cảm giác chứ không bằng logo. Khu này thường là điểm chụp ảnh nhiều nhất của lễ hội.',
    assetId: 'kit-05-03-premium-brand-activation',
    journey: [
      step('ACTIVATE', 'Dựng không gian', 'Sắp đặt quy mô lớn, có tuyến đi và cao trào thị giác.'),
      step('ENGAGE', 'Tạo khoảnh khắc', 'Khách ở lại lâu hơn vì có thứ đáng xem và đáng chụp.'),
      step('CONVERT', 'Lan ra ngoài', 'Ảnh và video do khách tự đăng mang thương hiệu đi xa hơn khu vực.'),
      step('MEASURE', 'Đo lại', 'Thời gian lưu lại, nội dung do khách tạo, lượt nhắc tên.'),
    ],
  },
  {
    id: 'sampling',
    name: 'Phát mẫu & dùng thử',
    category: 'engagement',
    lead: 'Đưa sản phẩm vào tay đúng nhóm khách, ngay tại chỗ.',
    body:
      'Quầy phát mẫu có nhân sự hướng dẫn, khách thử và phản ứng ngay. Phù hợp với ngành hàng tiêu dùng, đồ uống, chăm sóc cá nhân.',
    assetId: 'kit-05-04-product-sampling-counter',
    zoneId: 'mega-zone',
    journey: [
      step('ACTIVATE', 'Mở quầy', 'Quầy dựng theo cụm ngành trong Mega Zone.'),
      step('ENGAGE', 'Cho thử thật', 'Nhân sự hướng dẫn cách dùng, không chỉ đưa mẫu.'),
      step('CONVERT', 'Mua ngay hoặc mua sau', 'Ưu đãi tại quầy hoặc mã dùng trên kênh bán của thương hiệu.'),
      step('MEASURE', 'Đo lại', 'Số mẫu đã phát, tỉ lệ thử xong ở lại nghe tư vấn.'),
    ],
  },
  {
    id: 'lead-gen',
    name: 'Thu thập khách tiềm năng',
    category: 'data',
    lead: 'Đăng ký có sự đồng ý rõ ràng, ngay tại quầy số.',
    body:
      'Khách tự nguyện để lại thông tin để nhận ưu đãi hoặc theo dõi chương trình. Toàn bộ có opt-in, có thể xuất về hệ thống của thương hiệu.',
    assetId: 'kit-05-07-digital-lead-registration',
    journey: [
      step('ACTIVATE', 'Dựng quầy số', 'Màn hình đăng ký đặt trong khu hoạt động của thương hiệu.'),
      step('ENGAGE', 'Đổi giá trị lấy thông tin', 'Khách nhận lại một thứ cụ thể: ưu đãi, quà, suất trải nghiệm.'),
      step('CONVERT', 'Chuyển về CRM', 'Dữ liệu opt-in bàn giao theo định dạng thương hiệu dùng được.'),
      step('MEASURE', 'Đo lại', 'Số lượt đăng ký, tỉ lệ hoàn tất, chất lượng dữ liệu.'),
    ],
  },
  {
    id: 'qr-voucher',
    name: 'Mã ưu đãi & O2O',
    category: 'commerce',
    lead: 'Từ lễ hội dẫn thẳng về cửa hàng hoặc app.',
    body: 'Khách quét mã tại chỗ, dùng ưu đãi ở kênh bán của thương hiệu — nối được hành vi tại sự kiện với doanh thu thật.',
    assetId: 'kit-05-06-qr-voucher-interaction',
    journey: [
      step('ACTIVATE', 'Gắn mã vào trải nghiệm', 'Mã xuất hiện ở cuối một trải nghiệm, không phát tràn lan.'),
      step('ENGAGE', 'Quét tại chỗ', 'Khách quét bằng điện thoại, không cần tải thêm ứng dụng.'),
      step('CONVERT', 'Dùng ở kênh bán', 'Ưu đãi áp ở cửa hàng, website hoặc app của thương hiệu.'),
      step('MEASURE', 'Đo lại', 'Tỉ lệ quét, tỉ lệ dùng mã, giá trị đơn hàng phát sinh.'),
    ],
  },
  {
    id: 'product-launch',
    name: 'Ra mắt sản phẩm',
    category: 'visibility',
    lead: 'Một sản phẩm mới, một đám đông đúng nhóm, một buổi chiều.',
    body: 'Khu trình diễn sản phẩm có sân khấu nhỏ và khu dùng thử, kèm sự hiện diện của báo chí và người sáng tạo nội dung.',
    assetId: 'kit-05-08-brand-product-demo',
    journey: [
      step('ACTIVATE', 'Dựng sân khấu ra mắt', 'Khu riêng có phần trình diễn theo khung giờ.'),
      step('ENGAGE', 'Cho chạm vào sản phẩm', 'Khách dùng thử ngay sau phần giới thiệu.'),
      step('CONVERT', 'Đặt trước tại chỗ', 'Đăng ký quan tâm hoặc đặt trước qua kênh thương hiệu.'),
      step('MEASURE', 'Đo lại', 'Lượt xem trình diễn, lượt dùng thử, lượt đăng ký.'),
    ],
  },
  {
    id: 'beauty',
    name: 'Làm đẹp & chăm sóc cá nhân',
    category: 'experience',
    lead: 'Thử trên người thật, có chuyên viên hướng dẫn.',
    body: 'Ngành hàng làm đẹp hợp với lễ hội này: khách đến để chăm chút cho bản thân, không phải để mua vội.',
    assetId: 'kit-05-09-beauty-try-on-activation',
    journey: [
      step('ACTIVATE', 'Dựng khu thử', 'Ghế, gương, ánh sáng đúng chuẩn thử sản phẩm.'),
      step('ENGAGE', 'Tư vấn một-một', 'Chuyên viên của thương hiệu làm trực tiếp cho khách.'),
      step('CONVERT', 'Ưu đãi sau trải nghiệm', 'Khách rời quầy với một lý do để quay lại.'),
      step('MEASURE', 'Đo lại', 'Số lượt thử, thời gian mỗi lượt, tỉ lệ nhận ưu đãi.'),
    ],
  },
  {
    id: 'technology',
    name: 'Công nghệ & thiết bị',
    category: 'engagement',
    lead: 'Cho khách cầm thiết bị lên, không chỉ nhìn qua kính.',
    body: 'Khu dùng thử thiết bị và sắp đặt tương tác — phù hợp với hãng công nghệ, viễn thông, thiết bị gia dụng thông minh.',
    assetId: 'kit-05-10-technology-trial-activation',
    journey: [
      step('ACTIVATE', 'Dựng khu dùng thử', 'Thiết bị đặt sẵn theo kịch bản sử dụng.'),
      step('ENGAGE', 'Tự tay trải nghiệm', 'Khách thao tác thật, nhân sự chỉ hỗ trợ.'),
      step('CONVERT', 'Ưu đãi hoặc đăng ký', 'Dẫn về kênh bán hoặc chương trình thành viên.'),
      step('MEASURE', 'Đo lại', 'Lượt dùng thử, thời gian tương tác, lượt đăng ký.'),
    ],
  },
  {
    id: 'fintech',
    name: 'Thanh toán & fintech',
    category: 'commerce',
    lead: 'Cả khu lễ hội dùng chung một cách thanh toán.',
    body: 'Đối tác thanh toán có thể phủ toàn bộ điểm bán trong lễ hội: quầy ăn, gian hàng, vé, quà lưu niệm.',
    assetId: 'kit-05-11-fintech-payment-experience',
    journey: [
      step('ACTIVATE', 'Phủ điểm bán', 'Phương thức thanh toán có mặt ở mọi quầy.'),
      step('ENGAGE', 'Ưu đãi khi thanh toán', 'Giảm giá hoặc hoàn tiền cho giao dịch trong lễ hội.'),
      step('CONVERT', 'Mở tài khoản mới', 'Khách đăng ký tại chỗ để dùng ưu đãi.'),
      step('MEASURE', 'Đo lại', 'Số giao dịch, giá trị giao dịch, số tài khoản mở mới.'),
    ],
  },
  {
    id: 'hospitality',
    name: 'Tiếp khách doanh nghiệp',
    category: 'hospitality',
    lead: 'Mời đối tác của bạn tới một buổi tối đáng nhớ.',
    body: 'Khu tiếp khách riêng, phục vụ tại bàn, tầm nhìn sân khấu — dùng cho quan hệ đối tác chứ không chỉ để quảng bá.',
    assetId: 'kit-05-14-sponsor-executive-hosting',
    zoneId: 'vip',
    journey: [
      step('ACTIVATE', 'Giữ khu riêng', 'Khu tiếp khách theo số lượng đăng ký.'),
      step('ENGAGE', 'Gặp gỡ trong không gian riêng', 'Lãnh đạo thương hiệu tiếp khách mời trực tiếp.'),
      step('CONVERT', 'Quan hệ đối tác', 'Các cuộc gặp diễn ra trong bối cảnh dễ chịu hơn phòng họp.'),
      step('MEASURE', 'Đo lại', 'Số khách mời tham dự, số cuộc gặp diễn ra.'),
    ],
  },
  {
    id: 'stage-recognition',
    name: 'Ghi nhận trên sân khấu',
    category: 'visibility',
    lead: 'Được xướng tên trước toàn bộ khán đài.',
    body: 'Phần ghi nhận trang trọng trong đêm nhạc, kèm hiện diện trên màn hình lớn và tư liệu chính thức của lễ hội.',
    assetId: 'kit-05-17-sponsor-stage-recognition',
    zoneId: 'concert',
    journey: [
      step('ACTIVATE', 'Đưa vào kịch bản', 'Phần ghi nhận nằm trong kịch bản sân khấu.'),
      step('ENGAGE', 'Trước cả khán đài', 'Khoảnh khắc diễn ra khi đông khán giả nhất.'),
      step('CONVERT', 'Vào tư liệu chính thức', 'Xuất hiện trong ảnh và video tổng kết của lễ hội.'),
      step('MEASURE', 'Đo lại', 'Số khán giả có mặt, lượt xem tư liệu sau sự kiện.'),
    ],
  },
  {
    id: 'naming-rights',
    name: 'Quyền đặt tên trải nghiệm',
    category: 'visibility',
    lead: 'Một khu của lễ hội mang tên thương hiệu.',
    body:
      'Mức tham gia sâu nhất: thương hiệu gắn tên vào một không gian hoặc một trải nghiệm, xuất hiện trong bản đồ, ' +
      'lịch trình và toàn bộ truyền thông của lễ hội.',
    assetId: 'kit-05-18-branded-experience-naming-concept',
    journey: [
      step('ACTIVATE', 'Chọn không gian', 'Thoả thuận khu vực và phạm vi gắn tên.'),
      step('ENGAGE', 'Hiện diện suốt hành trình', 'Tên khu xuất hiện trong bản đồ, lịch trình, chỉ dẫn.'),
      step('CONVERT', 'Trở thành một phần ký ức', 'Khách nhắc tới khu đó bằng tên thương hiệu.'),
      step('MEASURE', 'Đo lại', 'Lượt nhắc tên, lượt truy cập khu, độ phủ trên kênh của lễ hội.'),
    ],
  },
  {
    id: 'megasale',
    name: 'MegaSale & Happiness Deals',
    category: 'commerce',
    lead: 'Khung giờ ưu đãi tập trung, nhiều thương hiệu cùng lúc.',
    body: 'Một sự kiện thương mại trong sự kiện: ưu đãi theo giờ, hộp quà nhiều nhãn, dòng người tập trung vào khu bán.',
    assetId: 'kit-05-19-commercial-flash-sale-moment',
    zoneId: 'mega-zone',
    journey: [
      step('ACTIVATE', 'Đăng ký khung giờ', 'Thương hiệu chọn khung giờ ưu đãi của mình.'),
      step('ENGAGE', 'Dồn khách vào một nhịp', 'Thông báo trên webapp và loa khu vực.'),
      step('CONVERT', 'Bán ngay tại chỗ', 'Giao dịch diễn ra trong khung giờ.'),
      step('MEASURE', 'Đo lại', 'Doanh số theo khung giờ, số đơn, số hộp quà đã phát.'),
    ],
  },
  {
    id: 'o2o',
    name: 'Nhận hàng tại lễ hội',
    category: 'commerce',
    lead: 'Đặt trên mạng, lấy tại quầy trong lễ hội.',
    body: 'Nối kênh online của thương hiệu với dòng người tại chỗ: khách đặt trước, tới quầy nhận, và ở lại mua thêm.',
    assetId: 'kit-05-21-ecommerce-pickup-counter',
    journey: [
      step('ACTIVATE', 'Mở quầy nhận hàng', 'Quầy đặt trong Mega Zone.'),
      step('ENGAGE', 'Khách chủ động tới', 'Người đã đặt hàng có lý do đi vào khu thương mại.'),
      step('CONVERT', 'Mua thêm tại chỗ', 'Tỉ lệ mua thêm khi khách đã đứng trước quầy.'),
      step('MEASURE', 'Đo lại', 'Số đơn nhận tại quầy, giá trị đơn mua thêm.'),
    ],
  },
  {
    id: 'csr',
    name: 'CSR / ESG — Happiness Fund',
    category: 'impact',
    lead: 'Phần đóng góp cộng đồng của lễ hội.',
    body:
      'Hoạt động thiện nguyện gắn với chủ đề hạnh phúc, có sự tham gia của khách tham dự — không phải một tấm séc chụp ảnh.',
    assetId: 'kit-05-22-csr-happiness-fund',
    journey: [
      step('ACTIVATE', 'Chọn chương trình', 'Thống nhất nội dung đóng góp và đối tượng thụ hưởng.'),
      step('ENGAGE', 'Khách cùng làm', 'Người tham dự trực tiếp góp sức tại khu CSR.'),
      step('CONVERT', 'Câu chuyện thật', 'Nội dung hậu sự kiện dựa trên việc đã làm, không dàn dựng.'),
      step('MEASURE', 'Đo lại', 'Số phần đóng góp, số người tham gia, tư liệu ghi nhận.'),
    ],
  },
  {
    id: 'content',
    name: 'Nội dung & truyền thông',
    category: 'content',
    lead: 'Thương hiệu xuất hiện trong nội dung, không chỉ trong quảng cáo.',
    body:
      'Hệ nội dung của lễ hội gồm podcast WeMeet, nội dung do khách tạo, livestream và phim tổng kết — ' +
      'thương hiệu có thể tham gia vào từng lớp.',
    assetId: 'kit-04-18-kol-livestream-studio',
    journey: [
      step('ACTIVATE', 'Chọn định dạng', 'Podcast, livestream, phim ngắn hay nội dung do khách tạo.'),
      step('ENGAGE', 'Sản xuất cùng lễ hội', 'Nội dung làm trong bối cảnh thật của sự kiện.'),
      step('CONVERT', 'Phân phối đa kênh', 'Chạy trên kênh của lễ hội, của thương hiệu và của người sáng tạo.'),
      step('MEASURE', 'Đo lại', 'Lượt xem, lượt tương tác, số nội dung phát sinh.'),
    ],
  },
];

/** Các module của bộ đo tác động (§06). Số liệu để TRỐNG cho tới khi có dữ liệu thật. */
export interface ImpactModule {
  id: string;
  label: string;
  unit: string;
  description: string;
  /** null = chưa có số kiểm chứng. Không bao giờ điền số phỏng đoán ở đây. */
  value: number | null;
  category: OpportunityCategory;
}

export const impactModules: ImpactModule[] = [
  { id: 'audience-reach', label: 'Khách tại chỗ', unit: 'người', description: 'Số người có mặt tại khu lễ hội', value: null, category: 'visibility' },
  { id: 'onsite-engagement', label: 'Lượt tương tác tại chỗ', unit: 'lượt', description: 'Lượt tham gia hoạt động của thương hiệu', value: null, category: 'engagement' },
  { id: 'digital-reach', label: 'Độ phủ số', unit: 'lượt tiếp cận', description: 'Tiếp cận trên kênh số của lễ hội', value: null, category: 'content' },
  { id: 'touchpoints', label: 'Điểm chạm thương hiệu', unit: 'điểm', description: 'Số vị trí thương hiệu xuất hiện trong hành trình khách', value: null, category: 'visibility' },
  { id: 'leads', label: 'Khách tiềm năng', unit: 'lượt đăng ký', description: 'Đăng ký có sự đồng ý rõ ràng', value: null, category: 'data' },
  { id: 'sampling', label: 'Mẫu đã phát', unit: 'mẫu', description: 'Sản phẩm đưa tận tay khách', value: null, category: 'engagement' },
  { id: 'commerce', label: 'Giao dịch', unit: 'đơn', description: 'Giao dịch phát sinh trong lễ hội', value: null, category: 'commerce' },
  { id: 'content-reach', label: 'Nội dung phát sinh', unit: 'nội dung', description: 'Bài, ảnh, video do khách và người sáng tạo đăng', value: null, category: 'content' },
  { id: 'media', label: 'Hiện diện báo chí', unit: 'tin bài', description: 'Tin bài và tư liệu báo chí', value: null, category: 'visibility' },
  { id: 'vip', label: 'Khách mời VIP', unit: 'khách', description: 'Khách được tiếp trong khu riêng', value: null, category: 'hospitality' },
  { id: 'csr', label: 'Đóng góp cộng đồng', unit: 'phần', description: 'Kết quả chương trình CSR', value: null, category: 'impact' },
];

/** Các module của cổng đối tác (§12). */
export const partnerPortalModules = [
  { id: 'why', label: 'Vì sao ONE BEAT NIGHT', anchor: '#why' },
  { id: 'audience', label: 'Khán giả', anchor: '#audience' },
  { id: 'ecosystem', label: 'Hệ sinh thái lễ hội', anchor: '#ecosystem' },
  { id: 'opportunities', label: 'Cơ hội thương hiệu', anchor: '#opportunities' },
  { id: 'formats', label: 'Định dạng hoạt động', anchor: '#formats' },
  { id: 'media', label: 'Hệ truyền thông', anchor: '#media' },
  { id: 'commercial', label: 'Cơ hội thương mại', anchor: '#commercial' },
  { id: 'hospitality', label: 'VIP & tiếp khách', anchor: '#hospitality' },
  { id: 'csr', label: 'CSR', anchor: '#csr' },
  { id: 'measurement', label: 'Đo lường', anchor: '#measurement' },
  { id: 'packages', label: 'Hình thức hợp tác', anchor: '#packages' },
  { id: 'contact', label: 'Liên hệ', anchor: '#contact' },
];

/** Nhóm ngành đối tác — mô tả loại thương hiệu phù hợp, KHÔNG phải tên thương hiệu thật. */
export const partnerCategories = [
  { id: 'fmcg', label: 'Hàng tiêu dùng & đồ uống', assetId: 'kit-02-25-mega-zone-food-sampling' },
  { id: 'beauty', label: 'Làm đẹp & chăm sóc cá nhân', assetId: 'kit-05-09-beauty-try-on-activation' },
  { id: 'tech', label: 'Công nghệ & viễn thông', assetId: 'kit-05-10-technology-trial-activation' },
  { id: 'finance', label: 'Tài chính & thanh toán', assetId: 'kit-05-11-fintech-payment-experience' },
  { id: 'fashion', label: 'Thời trang & phong cách sống', assetId: 'kit-02-22-mega-zone-fashion-beauty' },
  { id: 'travel', label: 'Du lịch & lữ hành', assetId: 'kit-02-26-mega-zone-travel' },
  { id: 'wellness', label: 'Sức khoẻ & thể chất', assetId: 'kit-02-24-mega-zone-wellness' },
  { id: 'pets', label: 'Thú cưng', assetId: 'kit-02-20-pet-photo-booth' },
] as const;
