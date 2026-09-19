/**
 * BẢN GỐC — tiếng Việt.
 *
 * Mọi câu chữ hiện ra trên màn hình đều nằm ở đây trước, bốn bản kia dịch theo.
 * Kiểu của file này là khuôn cho en/zh/ja/ko, nên thêm một khoá ở đây mà quên dịch
 * là TypeScript báo lỗi ngay lúc build, không đợi tới khi khách nhìn thấy.
 *
 * Quy ước đặt khoá: khoá là ĐỊNH DANH trong dữ liệu (`zones.main-plaza`), không phải
 * câu tiếng Việt viết tắt — đổi câu chữ không phải sửa khoá ở năm file.
 */

export const vi = {
  /** Tên riêng giữ nguyên ở mọi thứ tiếng — đây là thương hiệu, không dịch. */
  brand: {
    name: 'ONE BEAT NIGHT',
    subtitle: 'LỄ HỘI ĐỘC THÂN',
    slogan: 'Hạnh phúc trong từng khoảnh khắc',
    city: 'Thành phố Hồ Chí Minh',
    country: 'Việt Nam',
    positioning:
      'Lễ hội dành cho người độc thân hiện đại, đề cao sự tự do, kết nối, phát triển bản thân và hạnh phúc.',
  },

  common: {
    skipToContent: 'Tới nội dung chính',
    home: 'Trang chủ',
    tickets: 'Vé',
    ticketsFull: 'Vé & hạng vé',
    explore: 'Khám phá lễ hội',
    becomePartner: 'Trở thành đối tác',
    viewProgram: 'Xem lịch trình',
    festivalMap: 'Bản đồ lễ hội',
    continueToNight: 'Tiếp tục tới đêm nhạc',
    viewTickets: 'Xem vé',
    scrollToEnter: 'Cuộn để bước vào',
    comingSoon: 'Sắp công bố',
    proposed: 'Đề xuất',
    mostChosen: 'Được chọn nhiều',
    all: 'Tất cả',
    items: 'mục',
    close: 'Đóng',
    open: 'Mở',
    menu: 'Menu',
    openMenu: 'Mở menu',
    closeMenu: 'Đóng menu',
    mainNav: 'Điều hướng chính',
    fullNav: 'Điều hướng đầy đủ',
    eventDate: 'Ngày tổ chức',
    venue: 'Địa điểm',
    lineup: 'Line-up',
    stage: 'Sân khấu',
    language: 'Ngôn ngữ',
    changeLanguage: 'Đổi ngôn ngữ',
    notConfirmedYet: 'Chưa được xác nhận',
    minutesShort: '′',
    needsSignup: 'Cần đăng ký',
    accessible: 'Có lối tiếp cận',
    sampleData: 'Dữ liệu minh hoạ',
    gallery: 'Thư viện hình ảnh',
    menuDialog: 'Menu chính',
  },

  nav: {
    experience: 'Trải nghiệm',
    program: 'Lịch trình',
    map: 'Bản đồ',
    artists: 'Nghệ sĩ',
    tickets: 'Vé',
    partners: 'Đối tác',
  },

  menu: {
    groups: {
      festival: 'Lễ hội',
      people: 'Con người',
      join: 'Tham gia',
      business: 'Doanh nghiệp',
    },
    items: {
      '/experience': { label: 'Day Festival', desc: 'Ban ngày: flashmob, color run, Trạm Gặp, Mega Zone' },
      '/one-beat-night': { label: 'One Beat Night', desc: 'Đêm nhạc — cao trào cảm xúc' },
      '/mega-zone': { label: 'Mega Zone', desc: 'Khu thương mại trải nghiệm' },
      '/program': { label: 'Lịch trình', desc: 'Theo khối giờ, sân khấu, khu vực' },
      '/map': { label: 'Bản đồ lễ hội', desc: 'Mười khu vực, phóng to từng khu' },
      '/artists': { label: 'Nghệ sĩ & MC', desc: 'Các vị trí biểu diễn của đêm nhạc' },
      '/community': { label: 'Cộng đồng', desc: 'Lễ hội này thuộc về ai' },
      '/news': { label: 'Chuyện & nội dung', desc: 'WeMeet Podcast, UGC, hậu trường' },
      '/tickets': { label: 'Vé & hạng vé', desc: 'Năm hạng vé, ví vé, vòng tay LED' },
      '/account': { label: 'Tài khoản', desc: 'Ví vé, lịch của tôi, yêu thích' },
      '/visitor-guide': { label: 'Cẩm nang tham dự', desc: 'Đi lại, tiếp cận, an toàn' },
      '/faq': { label: 'Hỏi đáp', desc: 'Câu hỏi thường gặp' },
      '/partners': { label: 'Nhà tài trợ & đối tác', desc: 'Hệ sinh thái thương hiệu có thể bước vào' },
      '/press': { label: 'Phòng báo chí', desc: 'Media kit, ảnh, logo, đăng ký tác nghiệp' },
      '/contact': { label: 'Liên hệ', desc: 'Kênh làm việc' },
    },
  },

  /** Thanh tab dưới của bản điện thoại. */
  appTabs: {
    festival: 'Lễ hội',
    program: 'Lịch trình',
    map: 'Bản đồ',
    tickets: 'Vé',
    account: 'Của tôi',
    nav: 'Thanh điều hướng ứng dụng',
  },

  install: {
    title: 'Mang lễ hội theo bên mình',
    descAndroid: 'Cài về màn hình chính: mở nhanh, xem lịch trình và bản đồ cả khi mất sóng.',
    descIos: 'Bấm nút Chia sẻ rồi chọn “Thêm vào MH chính” để mở như một ứng dụng.',
    cta: 'Cài',
    close: 'Đóng lời mời cài ứng dụng',
    dialogLabel: 'Cài ứng dụng ONE BEAT NIGHT',
  },

  offline: {
    kicker: 'Không có kết nối',
    title: 'Máy đang ngoài vùng sóng',
    lead: 'Những trang bạn đã mở trước đó vẫn xem lại được. Khi có mạng trở lại, trang sẽ tự tải nội dung mới.',
    home: 'Về trang chủ',
    savedProgram: 'Lịch trình đã lưu',
    metaTitle: 'Đang mất kết nối',
    metaDescription: 'Thiết bị đang không có mạng. Những trang đã xem vẫn mở được.',
  },

  notFound: {
    metaTitle: 'Không tìm thấy trang',
    metaDescription: 'Đường dẫn này không còn hoặc chưa từng tồn tại.',
    title: 'Chỗ này không có gì cả',
    lead: 'Đường dẫn bạn vừa mở không còn hoặc chưa từng tồn tại. Dưới đây là những nơi đáng tới.',
    home: 'Về trang chủ',
  },

  /** Nhãn của các chỗ trống có kiểm soát (§26). */
  placeholders: {
    EVENT_DATE: { label: 'Ngày tổ chức', note: 'Chưa chốt trong tài liệu dự án' },
    EVENT_TIME: { label: 'Giờ mở cổng', note: 'Chưa chốt' },
    VENUE: { label: 'Địa điểm', note: 'Mới xác nhận tới cấp thành phố: TP.HCM' },
    VENUE_ADDRESS: { label: 'Địa chỉ', note: 'Chưa chốt' },
    HEADLINER: { label: 'Nghệ sĩ chính', note: 'Line-up chưa công bố' },
    TICKET_PRICE: { label: 'Giá vé', note: 'Chưa chốt bảng giá' },
    TICKET_ONSALE: { label: 'Ngày mở bán', note: 'Chưa chốt' },
    EXPECTED_ATTENDANCE: { label: 'Quy mô dự kiến', note: 'Không lấy con số từ bất kỳ nguồn nào chưa xác nhận' },
    MEDIA_REACH: { label: 'Độ phủ truyền thông', note: 'Chưa có số liệu kiểm chứng' },
    ORGANIZER: { label: 'Đơn vị tổ chức', note: 'Chưa nhận thông tin pháp nhân' },
    PRESS_EMAIL: { label: 'Email báo chí', note: 'Chưa có' },
    PARTNER_EMAIL: { label: 'Email hợp tác', note: 'Chưa có' },
    HOTLINE: { label: 'Hotline', note: 'Chưa có' },
  },

  /** Ba chặng — tên tiếng Anh in hoa (MEET YOURSELF…) là một phần nhận diện, giữ nguyên. */
  journey: {
    'gap-minh': {
      title: 'GẶP MÌNH',
      lead: 'Độc thân không còn là một mình.',
      body:
        'Chặng mở đầu dành cho sự tĩnh lặng: nhìn lại mình, biết mình đang ở đâu, thích gì, cần gì. ' +
        'Không ai bị thúc phải kết nối trước khi sẵn sàng.',
      keywords: ['Nội tâm', 'Tự do', 'Tự nhận thức', 'Tự tin'],
    },
    'gap-nhau': {
      title: 'GẶP NHAU',
      lead: 'Một cuộc trò chuyện tử tế là đủ để bắt đầu.',
      body:
        'Chặng giữa là cộng đồng: những vòng tròn cà phê, những bàn ăn chung, những cuộc gặp có người dẫn. ' +
        'Kết nối diễn ra trong khuôn khổ được tôn trọng và an toàn.',
      keywords: ['Cộng đồng', 'Đối thoại', 'Trải nghiệm chung', 'Kết nối tôn trọng'],
    },
    'gap-hanh-phuc': {
      title: 'GẶP HẠNH PHÚC',
      lead: 'Hạnh phúc trong từng khoảnh khắc.',
      body:
        'Chặng cuối là ăn mừng: âm nhạc, ánh sáng, hàng nghìn người cùng một nhịp. ' +
        'Không phải vì ai đó tìm được một người — mà vì tất cả cùng có một đêm đáng nhớ.',
      keywords: ['Ăn mừng', 'Âm nhạc', 'Tình bạn', 'Năng lượng tập thể'],
    },
  },

  zones: {
    'main-plaza': {
      name: 'Quảng trường trung tâm',
      short: 'Khai hội, flashmob, điểm hẹn',
      description:
        'Nơi lễ hội bắt đầu: màn flashmob buổi sáng, điểm hẹn của các nhóm, và là trục đi tới mọi khu còn lại.',
      services: ['Điểm hẹn', 'Sân khấu nhỏ', 'Nước uống'],
    },
    'mega-zone': {
      name: 'Mega Zone',
      short: 'Khu chợ trải nghiệm 7 cụm ngành',
      description:
        'Khu thương mại trải nghiệm lớn nhất lễ hội: thời trang, làm đẹp, công nghệ, sức khoẻ, ẩm thực, du lịch, AI & startup.',
      services: ['Gian hàng thương hiệu', 'Ưu đãi theo giờ', 'Quầy nhận hàng O2O'],
    },
    'tram-gap': {
      name: 'Trạm Gặp',
      short: 'Coffee Talk, Coffee Circles, Match & Meet',
      description:
        'Khu dành cho trò chuyện và kết nối có người dẫn. Mọi hoạt động ở đây đều có quy tắc ứng xử và nhân sự hỗ trợ.',
      services: ['Người điều phối', 'Khu yên tĩnh', 'Đăng ký tại chỗ'],
    },
    pets: {
      name: 'Khu thú cưng',
      short: 'Chó nhỏ, chó lớn, mèo, chó già',
      description:
        'Khu có bóng mát, chia theo kích cỡ và tính cách vật nuôi. Có buổi xã hội hoá cho chó con, góc mèo và diễu hành nhỏ.',
      services: ['Nước cho thú cưng', 'Khu tách riêng', 'Chỗ chụp ảnh'],
    },
    'visual-art': {
      name: 'Khu triển lãm thị giác',
      short: 'Sắp đặt nghệ thuật + không gian sáng tạo',
      description:
        'Lối đi một chiều qua ba lớp không gian sáng, tiếp đó là phòng tranh và góc nghệ sĩ làm việc tại chỗ.',
      services: ['Lối đi một chiều', 'Hướng dẫn viên', 'Khu chụp ảnh'],
    },
    food: {
      name: 'Khu ẩm thực',
      short: 'Bàn ăn chung, quầy món, khu ngồi',
      description: 'Các quầy món và khu bàn dài dùng chung — nơi diễn ra Happy Lunch.',
      services: ['Bàn dùng chung', 'Nước miễn phí', 'Khu có mái che'],
    },
    'color-run': {
      name: 'Đường Color Run',
      short: 'Cung chạy qua ba trạm màu',
      description: 'Đường chạy ngắn vòng quanh khu lễ hội, đi qua ba trạm màu rồi về đích nhận huy hiệu.',
      services: ['Trạm nước', 'Trạm màu', 'Khu về đích'],
    },
    concert: {
      name: 'Sân khấu chính',
      short: 'One Beat Night — đêm nhạc',
      description:
        'Sân khấu lớn với dàn đèn và âm thanh chuyên nghiệp. Ban ngày dùng cho các phần trình diễn ngắn, tối là đêm nhạc.',
      services: ['Khán đài', 'Vòng tay LED', 'Khu xem có hỗ trợ'],
    },
    vip: {
      name: 'Khu VIP',
      short: 'Lối vào riêng, khu ngồi, phục vụ tại bàn',
      description: 'Dành cho khách VIP và khách mời của đối tác: check-in nhanh, khu nghỉ và phục vụ riêng.',
      services: ['Check-in nhanh', 'Phục vụ tại bàn', 'Tầm nhìn sân khấu'],
    },
    support: {
      name: 'Hỗ trợ & an toàn',
      short: 'Thông tin, y tế, an ninh, tiếp cận',
      description:
        'Quầy thông tin, điểm sơ cứu, nhân sự an toàn và lối đi không rào cản. Có mặt ở nhiều điểm trong khu lễ hội.',
      services: ['Quầy thông tin', 'Sơ cứu', 'Đồ thất lạc', 'Hỗ trợ tiếp cận'],
    },
  },

  phases: {
    morning: 'Buổi sáng',
    midday: 'Giữa ngày',
    golden: 'Giờ vàng',
    night: 'Đêm nhạc',
  },

  categories: {
    music: 'Âm nhạc',
    community: 'Cộng đồng',
    talk: 'Trò chuyện',
    pets: 'Thú cưng',
    food: 'Ẩm thực',
    art: 'Nghệ thuật',
    wellness: 'Sức khoẻ',
    commerce: 'Mua sắm',
    vip: 'VIP',
  },

  activities: {
    flashmob: {
      name: 'Flashmob khai hội',
      summary: 'Hàng trăm người cùng vào nhịp đầu tiên của ngày.',
      detail:
        'Màn đồng diễn mở màn ngay quảng trường trung tâm. Ai cũng tham gia được: động tác đơn giản, tập trước 15 phút, ' +
        'và toàn bộ được quay lại làm tư liệu truyền thông của lễ hội.',
    },
    'color-run': {
      name: 'Color Run',
      summary: 'Đường chạy màu xuyên ba khu trải nghiệm.',
      detail:
        'Cung đường ngắn, không tính giờ, đi qua ba trạm màu. Về đích nhận huy hiệu đeo được — thứ để nhớ, không phải để thi đấu.',
    },
    'coffee-talk': {
      name: 'Coffee Talk',
      summary: 'Những cuộc nói chuyện ngắn về sống một mình mà không cô đơn.',
      detail:
        'Sân khấu nhỏ ngoài trời, khách ngồi gần, mỗi phiên một chủ đề: tự lập tài chính, sức khoẻ tinh thần, ' +
        'làm bạn với chính mình. Hỏi đáp trực tiếp, không diễn.',
    },
    'coffee-circles': {
      name: 'Coffee Circles',
      summary: 'Vòng tròn 8–10 người, một người dẫn, không ai bị bỏ lại.',
      detail:
        'Mỗi vòng có người điều phối để câu chuyện không rơi vào im lặng. Đổi vòng sau mỗi phiên, gặp nhóm mới.',
    },
    'match-meet': {
      name: 'Match & Meet',
      summary: 'Gặp một-một có khung giờ, có người dẫn, có quyền dừng.',
      detail:
        'Bàn đôi xếp trong khu kết nối, mỗi lượt vài phút rồi xoay vòng. Có quy tắc ứng xử rõ ràng và nhân sự hỗ trợ ' +
        'luôn ở trong khu vực. Đây là gặp gỡ trong khuôn khổ tôn trọng, không phải sự kiện ghép đôi.',
    },
    'happy-lunch': {
      name: 'Happy Lunch',
      summary: 'Bàn ăn chung — cách dễ nhất để bắt chuyện.',
      detail: 'Bàn dài, món chia phần, người lạ ngồi cạnh nhau. Không ai phải ăn một mình.',
    },
    'pets-meetup': {
      name: 'Pets Meetup',
      summary: 'Khu thú cưng chia theo nhóm: chó nhỏ, chó lớn, mèo, chó già.',
      detail:
        'Không gian có bóng mát, tách khu theo kích cỡ và tính cách để an toàn cho cả vật nuôi lẫn người. ' +
        'Có buổi xã hội hoá cho chó con và góc riêng cho người nuôi mèo.',
    },
    'walk-and-wag': {
      name: 'Walk & Wag Parade',
      summary: 'Cuộc diễu hành nhỏ của những người nuôi thú cưng.',
      detail: 'Đi một vòng đường nội bộ có người xem hai bên, tốc độ chậm, ưu tiên an toàn cho thú cưng.',
    },
    'mega-zone': {
      name: 'Mega Zone',
      summary: 'Khu chợ trải nghiệm: thời trang, làm đẹp, công nghệ, sức khoẻ, ẩm thực, du lịch, AI & startup.',
      detail:
        'Gian hàng dựng theo cụm ngành, khách đi thử sản phẩm thật chứ không chỉ nhận tờ rơi. ' +
        'Đây cũng là nơi thương hiệu đối tác đặt hoạt động tương tác của mình.',
    },
    'happiness-deals': {
      name: 'MegaSale & Happiness Deals',
      summary: 'Khung giờ ưu đãi tập trung trong khu thương mại.',
      detail: 'Các thương hiệu mở ưu đãi theo khung giờ; khách nhận hộp quà tổng hợp từ nhiều nhãn.',
    },
    'visual-art': {
      name: 'Không gian trình diễn thị giác',
      summary: 'Sắp đặt nghệ thuật lớn lấy cảm hứng từ sức sống của cây sen đá.',
      detail:
        'Một lối đi một chiều qua ba lớp không gian sáng, đi hết là hiểu hành trình của lễ hội mà không cần ai giải thích.',
    },
    'creative-gallery': {
      name: 'Không gian sáng tạo',
      summary: 'Triển lãm tranh, ảnh, tác phẩm hỗn hợp và góc nhạc mộc.',
      detail:
        'Nghệ sĩ làm việc ngay tại chỗ, khách xem được toàn bộ quá trình và có thể tham gia phần cộng đồng của tác phẩm.',
    },
    'live-band': {
      name: 'Live band',
      summary: 'Ban nhạc sống mở màn đêm nhạc.',
      detail: 'Phần nhạc sống đầu đêm, ánh sáng bắt đầu chuyển sang tông magenta – xanh – vàng.',
    },
    'match-cam': {
      name: 'Match Cam',
      summary: 'Máy quay quét khán đài, những phản ứng thật lên màn hình lớn.',
      detail: 'Một khoảnh khắc tương tác vui giữa đêm nhạc — người được chọn phản ứng tự nhiên, cả sân cùng cười.',
    },
    'happiness-toast': {
      name: 'Happiness Toast',
      summary: 'Cả lễ hội cùng nâng ly một lần trong đêm.',
      detail: 'Một nhịp dừng ngắn: đèn hạ, nhạc nhỏ lại, tất cả cùng nâng ly cho một năm sống tử tế với chính mình.',
    },
    headliner: {
      name: 'Nghệ sĩ chính',
      summary: 'Phần trình diễn cao trào của đêm.',
      detail: 'Sân khấu mở rộng, dàn đèn chạy hết công suất, khán đài thành một dải ánh sáng chuyển động.',
    },
    'singer-dj': {
      name: 'Ca sĩ × DJ',
      summary: 'Định dạng kết hợp: giọng hát trên nền set điện tử.',
      detail: 'Phần chuyển từ nhạc sống sang sàn nhảy, hai nghệ sĩ cùng chia sân khấu.',
    },
    'light-moment': {
      name: 'One Beat Light Moment',
      summary: 'Hàng nghìn vòng tay LED sáng cùng một nhịp.',
      detail:
        'Khoảnh khắc ký hiệu của lễ hội: toàn bộ khán đài trở thành một làn sóng ánh sáng chạy theo nhạc. ' +
        'Đây là lúc “một nhịp” trong tên lễ hội trở thành thứ nhìn thấy được.',
    },
    finale: {
      name: 'Finale',
      summary: 'Tất cả nghệ sĩ trở lại sân khấu.',
      detail: 'Phần khép lại: pháo sáng, confetti, và câu cuối cùng của đêm — hẹn gặp lại.',
    },
    'vip-hospitality': {
      name: 'VIP & Hospitality',
      summary: 'Lối vào riêng, khu ngồi nhìn thẳng sân khấu, phục vụ tại bàn.',
      detail: 'Dành cho khách VIP và khách mời của đối tác: check-in nhanh, khu nghỉ riêng, phục vụ đồ ăn uống tại bàn.',
    },
    wellness: {
      name: 'Góc sức khoẻ & phục hồi',
      summary: 'Chỗ để thở giữa một ngày dài.',
      detail: 'Trải nghiệm thư giãn ngắn trong khu thương mại: giãn cơ, chăm sóc cơ bản, nước và chỗ ngồi yên tĩnh.',
    },
    'pet-photo': {
      name: 'Pet Photo Booth',
      summary: 'Chụp ảnh cùng thú cưng trong bối cảnh neon của lễ hội.',
      detail: 'Góc chụp dựng theo nhận diện lễ hội, ảnh gửi thẳng về điện thoại.',
    },
  },

  megaZoneCategories: {
    'fashion-beauty': { name: 'Thời trang & Làm đẹp', note: 'Thử sản phẩm, phụ kiện, tư vấn tại quầy' },
    technology: { name: 'Công nghệ', note: 'Thiết bị mới, màn hình tương tác, dùng thử' },
    wellness: { name: 'Sức khoẻ & Phục hồi', note: 'Trải nghiệm thư giãn ngắn' },
    food: { name: 'Ẩm thực & FMCG', note: 'Nếm thử, phản ứng thật tại quầy' },
    travel: { name: 'Du lịch', note: 'Gian hàng trải nghiệm điểm đến' },
    'ai-startup': { name: 'AI & Startup', note: 'Khu sản phẩm mới, sắp đặt tương tác' },
    deals: { name: 'Happiness Deals', note: 'Ưu đãi theo khung giờ, hộp quà nhiều nhãn' },
  },

  stages: {
    'main-stage': 'Sân khấu chính',
    'talk-stage': 'Sân khấu Trạm Gặp',
    plaza: 'Quảng trường',
    mega: 'Mega Zone',
    'pet-zone': 'Khu thú cưng',
    'art-zone': 'Khu triển lãm',
    'food-court': 'Khu ẩm thực',
    'vip-lounge': 'Khu VIP',
  },

  ticketTiers: {
    standard: {
      name: 'Vé tiêu chuẩn',
      lead: 'Vào cửa cả ngày hội và đêm nhạc.',
      benefits: [
        'Toàn bộ khu ban ngày: Trạm Gặp, Mega Zone, khu thú cưng, triển lãm',
        'Khán đài đêm nhạc One Beat Night',
        'Vòng tay LED tham gia phần ánh sáng đồng bộ',
        'Vé điện tử có mã QR trong ví vé của webapp',
      ],
    },
    day: {
      name: 'Vé Day Festival',
      lead: 'Chỉ phần ban ngày, về trước khi đêm nhạc bắt đầu.',
      benefits: [
        'Toàn bộ khu ban ngày: Trạm Gặp, Mega Zone, khu thú cưng, triển lãm',
        'Các hoạt động cộng đồng: flashmob, Color Run, Coffee Circles',
        'Vé điện tử có mã QR trong ví vé của webapp',
      ],
    },
    vip: {
      name: 'Vé VIP',
      lead: 'Lối vào riêng, khu ngồi nhìn thẳng sân khấu, phục vụ tại bàn.',
      benefits: [
        'Tất cả quyền lợi của vé tiêu chuẩn',
        'Check-in nhanh qua lối riêng',
        'Khu VIP có chỗ ngồi và tầm nhìn sân khấu',
        'Phục vụ đồ ăn uống tại bàn',
        'Ưu tiên đăng ký các hoạt động cần đặt chỗ',
      ],
    },
    group: {
      name: 'Vé nhóm',
      lead: 'Đi từ bốn người trở lên, check-in cùng một lượt.',
      benefits: [
        'Tất cả quyền lợi của vé tiêu chuẩn',
        'Check-in cả nhóm trong một lượt quét',
        'Giữ chỗ cạnh nhau ở các hoạt động cần đăng ký',
      ],
    },
    hospitality: {
      name: 'Tiếp khách doanh nghiệp',
      lead: 'Dành cho doanh nghiệp mời đối tác và khách hàng.',
      benefits: [
        'Khu tiếp khách riêng theo số lượng đăng ký',
        'Phục vụ trọn buổi tối',
        'Hỗ trợ đón tiếp và điều phối khách mời',
        'Có thể kết hợp với hoạt động thương hiệu trong lễ hội',
      ],
    },
  },

  checkout: {
    select: { label: 'Chọn hạng vé', note: 'Chọn hạng và số lượng' },
    details: { label: 'Thông tin người mua', note: 'Họ tên, email, số điện thoại' },
    promo: { label: 'Mã ưu đãi', note: 'Áp mã nếu có' },
    summary: { label: 'Xác nhận đơn', note: 'Xem lại trước khi thanh toán' },
    payment: { label: 'Thanh toán', note: 'Lớp tích hợp — chưa nối nhà cung cấp nào' },
    wallet: { label: 'Nhận vé', note: 'Vé vào ví vé, có mã QR để check-in' },
  },

  wristband: {
    ticket: { label: 'Vé', note: 'Vé điện tử trong ví vé của webapp' },
    checkin: { label: 'Check-in', note: 'Quét mã tại cổng vào' },
    wristbandStep: { label: 'Vòng tay', note: 'Nhận vòng tay LED tại cổng' },
    experience: { label: 'Trải nghiệm', note: 'Vòng tay sáng theo nhạc trong đêm nhạc' },
    interaction: { label: 'Tương tác', note: 'Tham gia các phần ánh sáng đồng bộ' },
    commerce: { label: 'Mua sắm', note: 'Thanh toán tại các quầy trong lễ hội' },
    journey: { label: 'Hành trình riêng', note: 'Lịch của tôi và gợi ý theo hoạt động đã chọn' },
  },

  wristbandCapabilities: {
    rfid: 'RFID',
    nfc: 'NFC',
    cashless: 'Thanh toán không tiền mặt',
    access: 'Kiểm soát ra vào',
    tracking: 'Đo lường hoạt động thương hiệu',
  },

  lineup: {
    'live-band': {
      role: 'Ban nhạc sống',
      description: 'Mở màn đêm nhạc bằng phần trình diễn sống, trước khi sân khấu chuyển sang tông neon.',
    },
    headliner: {
      role: 'Nghệ sĩ chính',
      description: 'Phần trình diễn cao trào, trên sân khấu mở rộng với dàn đèn chạy hết công suất.',
    },
    'singer-dj': {
      role: 'Ca sĩ × DJ',
      description: 'Định dạng kết hợp giọng hát và set điện tử — bản lề giữa nhạc sống và sàn nhảy.',
    },
    dj: {
      role: 'DJ',
      description: 'Phần cuối của đêm: nhạc liền mạch, khán đài thành một khối chuyển động.',
    },
    host: {
      role: 'Người dẫn chương trình',
      description: 'Giữ nhịp cả đêm, dẫn các phần tương tác như Match Cam và Happiness Toast.',
    },
  },

  production: {
    lighting: { label: 'Điều khiển ánh sáng', note: 'Bàn điều khiển nhìn thẳng sân khấu' },
    sound: { label: 'Âm thanh', note: 'Kỹ sư âm thanh trực suốt đêm' },
    camera: { label: 'Sản xuất hình ảnh', note: 'Máy quay lớn cho màn hình và tư liệu' },
    backstage: { label: 'Hậu trường', note: 'Khu chờ và đường vào sân khấu' },
    'stage-entry': { label: 'Đường vào sân khấu', note: 'Hành lang tối dẫn ra ánh sáng' },
    'stage-side': { label: 'Góc cánh gà', note: 'Vị trí nhìn thấy cả sân khấu lẫn khán đài' },
  },

  audience: {
    '21-25': {
      title: 'Đang dựng cuộc đời của mình',
      lead: 'Vừa ra trường hoặc mới đi làm, thích không gian sáng tạo, đi một mình cũng thấy ổn.',
      traits: ['Học và làm song song', 'Quán cà phê là văn phòng thứ hai', 'Sống trên mạng xã hội'],
    },
    '26-35': {
      title: 'Độc lập và biết mình muốn gì',
      lead: 'Đã có nghề, có thu nhập, chọn bạn bè và trải nghiệm thay vì chọn bừa.',
      traits: ['Tự chủ tài chính', 'Ưu tiên trải nghiệm', 'Khó tính với chất lượng'],
    },
    '36-52': {
      title: 'Điềm tĩnh và cởi mở',
      lead: 'Sống một mình là một lựa chọn, không phải một giai đoạn chờ đợi.',
      traits: ['Gu rõ ràng', 'Coi trọng sự tôn trọng', 'Sẵn sàng gặp người mới'],
    },
  },

  lifestyle: {
    'solo-travel': { label: 'Đi một mình', note: 'Chuyến đi không cần chờ ai rủ' },
    fitness: { label: 'Tập một mình', note: 'Kỷ luật với cơ thể của mình' },
    wellness: { label: 'Chăm sóc bản thân', note: 'Sức khoẻ tinh thần là việc nghiêm túc' },
    cafe: { label: 'Cà phê một mình', note: 'Yên tĩnh, không cô đơn' },
    freelance: { label: 'Làm tự do', note: 'Tự sắp lịch, tự chịu trách nhiệm' },
    'single-parent': { label: 'Làm cha mẹ đơn thân', note: 'Vẫn có quyền vui' },
    'pet-parent': { label: 'Nuôi thú cưng', note: 'Một gia đình theo cách khác' },
    healing: { label: 'Chữa lành', note: 'Nói ra được là đã nhẹ đi' },
    'confident-woman': { label: 'Tự tin một mình', note: 'Không chờ ai cho phép mình vui' },
    'confident-man': { label: 'Chủ động sống', note: 'Biết mình muốn gì và không vội' },
  },

  contentFormats: {
    'wemeet-podcast': {
      name: 'WeMeet Podcast',
      lead: 'Chương trình trò chuyện về sống độc thân tử tế.',
      body: 'Mỗi tập một khách mời kể chuyện thật: tự lập, chia tay, làm lại, nuôi thú cưng, đi một mình. Quay trong studio, phát trước và sau lễ hội.',
    },
    'podcast-story': {
      name: 'Podcast Story',
      lead: 'Bản ngắn, một câu chuyện, một người.',
      body: 'Định dạng gọn cho mạng xã hội: một khách mời, một trải nghiệm, cắt thành các đoạn dọc.',
    },
    ugc: {
      name: 'Nội dung do khách tạo',
      lead: 'Người tham dự chính là đội làm nội dung đông nhất.',
      body: 'Các điểm trong lễ hội được thiết kế để quay đẹp. Có cuộc thi nội dung và bộ khung để khách dựng bài của mình.',
    },
    livestream: {
      name: 'Livestream & KOL',
      lead: 'Phát trực tiếp từ trong lễ hội.',
      body: 'Studio đặt ngay tại sự kiện, người dẫn và khách mời nói chuyện giữa dòng người thật.',
    },
    press: {
      name: 'Báo chí',
      lead: 'Họp báo công bố và khu tác nghiệp riêng.',
      body: 'Có khu dành cho phóng viên, ảnh chính thức và tư liệu tải về cho toà soạn.',
    },
    ooh: {
      name: 'Truyền thông ngoài trời',
      lead: 'Lễ hội xuất hiện trong thành phố trước khi diễn ra.',
      body: 'Màn hình lớn và các điểm quảng bá ngoài trời mang nhận diện của lễ hội ra đường phố.',
    },
    social: {
      name: 'Sản xuất nội dung mạng xã hội',
      lead: 'Một đội làm nội dung chạy suốt chiến dịch.',
      body: 'Hình ảnh, video ngắn và nội dung đếm ngược được sản xuất theo lịch chiến dịch.',
    },
    recap: {
      name: 'Phim tổng kết',
      lead: 'Sau lễ hội, câu chuyện vẫn chạy tiếp.',
      body: 'Phim tổng kết và bộ tư liệu hậu sự kiện dành cho đối tác, báo chí và cộng đồng.',
    },
  },

  operations: {
    info: { label: 'Quầy thông tin', note: 'Hỏi gì cũng có người trả lời' },
    safety: { label: 'Nhân sự an toàn', note: 'Có mặt ở mọi khu, dễ nhận ra' },
    'first-aid': { label: 'Điểm sơ cứu', note: 'Y tế và chỗ nghỉ khi cần' },
    accessible: { label: 'Lối đi tiếp cận', note: 'Đường rộng, không bậc, không rào cản' },
    control: { label: 'Phòng điều hành', note: 'Theo dõi toàn khu trong suốt sự kiện' },
    briefing: { label: 'Họp đội ngũ', note: 'Toàn bộ nhân sự được hướng dẫn trước giờ mở cổng' },
  },

  faqs: [
    {
      q: 'Đây có phải sự kiện hẹn hò không?',
      a: 'Không. ONE BEAT NIGHT là lễ hội về tự do, cộng đồng và âm nhạc. Có những hoạt động giúp mọi người làm quen trong khuôn khổ tôn trọng, nhưng ghép đôi không phải mục tiêu của lễ hội.',
    },
    {
      q: 'Người đang có đôi có tham dự được không?',
      a: 'Được. Lễ hội hướng tới người độc thân nhưng không kiểm tra tình trạng của ai. Ai muốn một ngày vui và một đêm nhạc đều tham gia được.',
    },
    {
      q: 'Bao giờ diễn ra và ở đâu?',
      a: 'Lễ hội tổ chức tại TP.HCM. Ngày, giờ và địa điểm cụ thể sẽ công bố khi ban tổ chức chốt — trang này sẽ cập nhật ngay khi có.',
    },
    {
      q: 'Giá vé bao nhiêu?',
      a: 'Bảng giá chưa được công bố. Các hạng vé và quyền lợi đã có ở trang Vé; giá và ngày mở bán sẽ bổ sung sau.',
    },
    {
      q: 'Line-up gồm những ai?',
      a: 'Danh sách nghệ sĩ chưa công bố. Trang Nghệ sĩ hiện đang mô tả các vị trí biểu diễn trong kịch bản đêm nhạc.',
    },
    {
      q: 'Tôi đi một mình có sao không?',
      a: 'Lễ hội được thiết kế cho người đi một mình: có hoạt động có người dẫn, có vòng tròn trò chuyện, có bàn ăn chung. Không ai bị bỏ lại ở góc sân.',
    },
    {
      q: 'Có mang thú cưng được không?',
      a: 'Có khu riêng cho thú cưng, chia theo kích cỡ và tính cách. Quy định cụ thể về giống loài, giấy tờ tiêm phòng sẽ công bố trong cẩm nang tham dự.',
    },
    {
      q: 'Người khuyết tật tham dự thế nào?',
      a: 'Khu lễ hội có lối đi không rào cản, khu xem có hỗ trợ và nhân sự trợ giúp. Chi tiết nằm ở mục Tiếp cận trong cẩm nang tham dự.',
    },
    {
      q: 'Vòng tay LED là gì?',
      a: 'Vòng tay phát sáng nhận tại cổng, sáng theo nhạc trong phần One Beat Light Moment của đêm nhạc.',
    },
    {
      q: 'Doanh nghiệp muốn hợp tác thì liên hệ ai?',
      a: 'Xem trang Đối tác để biết các hình thức tham gia, rồi gửi thông tin qua biểu mẫu ở cuối trang.',
    },
  ],

  brandMockups: {
    logo: { label: 'Logo đầy đủ', note: 'Bản chốt, có chữ, nền đen' },
    emblem: { label: 'Biểu tượng', note: 'Chỉ biểu tượng, nền trong suốt' },
    ticket: { label: 'Vé', note: 'Vé holographic, vùng trống để đặt hạng vé' },
    wristband: { label: 'Vòng tay LED', note: 'Ảnh sản phẩm nền đen' },
    merch: { label: 'Quà lưu niệm', note: 'Áo, mũ, túi, hộp pin mang biểu tượng' },
    app: { label: 'Ứng dụng', note: 'Khung điện thoại trống để ghép giao diện' },
    texture: { label: 'Vân vàng', note: 'Chất liệu cho viền và chữ hạng VIP' },
    entrance: { label: 'Cổng vào', note: 'Cổng vô cực, dùng cho ảnh bìa bài viết' },
  },

  pressDownloads: {
    'logo-pack': { label: 'Bộ logo & biểu tượng', note: 'PNG nền trong suốt + bản đầy đủ' },
    'key-visual': { label: 'Key visual', note: 'Ảnh chủ đạo của lễ hội' },
    'photo-set': { label: 'Bộ ảnh lễ hội', note: 'Thư viện hình ảnh theo 6 KIT' },
    'media-kit': { label: 'Media kit (PDF)', note: 'Đang chuẩn bị' },
    'fact-sheet': { label: 'Thông tin sự kiện', note: 'Chờ ban tổ chức chốt ngày, địa điểm, quy mô' },
  },

  opportunityCategories: {
    visibility: 'Hiện diện',
    experience: 'Trải nghiệm',
    engagement: 'Tương tác',
    commerce: 'Thương mại',
    data: 'Dữ liệu',
    hospitality: 'Tiếp khách',
    content: 'Nội dung',
    impact: 'Cộng đồng',
  },

  opportunities: {
    'central-activation': {
      name: 'Hoạt động trung tâm',
      lead: 'Một khu trải nghiệm đặt ở trục đi lại chính của lễ hội.',
      body:
        'Không phải một gian hàng trong dãy gian hàng. Đây là một điểm dừng trong hành trình của khách: có kiến trúc riêng, ' +
        'có lý do để bước vào, và có thứ để mang về.',
      journey: [
        { label: 'Dựng điểm đến', text: 'Khu trải nghiệm dựng theo nhận diện thương hiệu, nằm trên trục người đi.' },
        { label: 'Giữ khách lại', text: 'Nhân sự thương hiệu hướng dẫn trải nghiệm thay vì phát tờ rơi.' },
        { label: 'Dẫn tới hành động', text: 'Ưu đãi tại chỗ hoặc mã dùng sau lễ hội.' },
        { label: 'Đo lại', text: 'Lượt vào khu, lượt hoàn tất trải nghiệm, lượt nhận ưu đãi.' },
      ],
    },
    'immersive-brand': {
      name: 'Trải nghiệm thương hiệu nhập vai',
      lead: 'Ánh sáng, chiếu hình và sắp đặt — thương hiệu thành một không gian.',
      body:
        'Dành cho thương hiệu muốn được nhớ bằng cảm giác chứ không bằng logo. Khu này thường là điểm chụp ảnh nhiều nhất của lễ hội.',
      journey: [
        { label: 'Dựng không gian', text: 'Sắp đặt quy mô lớn, có tuyến đi và cao trào thị giác.' },
        { label: 'Tạo khoảnh khắc', text: 'Khách ở lại lâu hơn vì có thứ đáng xem và đáng chụp.' },
        { label: 'Lan ra ngoài', text: 'Ảnh và video do khách tự đăng mang thương hiệu đi xa hơn khu vực.' },
        { label: 'Đo lại', text: 'Thời gian lưu lại, nội dung do khách tạo, lượt nhắc tên.' },
      ],
    },
    sampling: {
      name: 'Phát mẫu & dùng thử',
      lead: 'Đưa sản phẩm vào tay đúng nhóm khách, ngay tại chỗ.',
      body:
        'Quầy phát mẫu có nhân sự hướng dẫn, khách thử và phản ứng ngay. Phù hợp với ngành hàng tiêu dùng, đồ uống, chăm sóc cá nhân.',
      journey: [
        { label: 'Mở quầy', text: 'Quầy dựng theo cụm ngành trong Mega Zone.' },
        { label: 'Cho thử thật', text: 'Nhân sự hướng dẫn cách dùng, không chỉ đưa mẫu.' },
        { label: 'Mua ngay hoặc mua sau', text: 'Ưu đãi tại quầy hoặc mã dùng trên kênh bán của thương hiệu.' },
        { label: 'Đo lại', text: 'Số mẫu đã phát, tỉ lệ thử xong ở lại nghe tư vấn.' },
      ],
    },
    'lead-gen': {
      name: 'Thu thập khách tiềm năng',
      lead: 'Đăng ký có sự đồng ý rõ ràng, ngay tại quầy số.',
      body:
        'Khách tự nguyện để lại thông tin để nhận ưu đãi hoặc theo dõi chương trình. Toàn bộ có opt-in, có thể xuất về hệ thống của thương hiệu.',
      journey: [
        { label: 'Dựng quầy số', text: 'Màn hình đăng ký đặt trong khu hoạt động của thương hiệu.' },
        { label: 'Đổi giá trị lấy thông tin', text: 'Khách nhận lại một thứ cụ thể: ưu đãi, quà, suất trải nghiệm.' },
        { label: 'Chuyển về CRM', text: 'Dữ liệu opt-in bàn giao theo định dạng thương hiệu dùng được.' },
        { label: 'Đo lại', text: 'Số lượt đăng ký, tỉ lệ hoàn tất, chất lượng dữ liệu.' },
      ],
    },
    'qr-voucher': {
      name: 'Mã ưu đãi & O2O',
      lead: 'Từ lễ hội dẫn thẳng về cửa hàng hoặc app.',
      body: 'Khách quét mã tại chỗ, dùng ưu đãi ở kênh bán của thương hiệu — nối được hành vi tại sự kiện với doanh thu thật.',
      journey: [
        { label: 'Gắn mã vào trải nghiệm', text: 'Mã xuất hiện ở cuối một trải nghiệm, không phát tràn lan.' },
        { label: 'Quét tại chỗ', text: 'Khách quét bằng điện thoại, không cần tải thêm ứng dụng.' },
        { label: 'Dùng ở kênh bán', text: 'Ưu đãi áp ở cửa hàng, website hoặc app của thương hiệu.' },
        { label: 'Đo lại', text: 'Tỉ lệ quét, tỉ lệ dùng mã, giá trị đơn hàng phát sinh.' },
      ],
    },
    'product-launch': {
      name: 'Ra mắt sản phẩm',
      lead: 'Một sản phẩm mới, một đám đông đúng nhóm, một buổi chiều.',
      body: 'Khu trình diễn sản phẩm có sân khấu nhỏ và khu dùng thử, kèm sự hiện diện của báo chí và người sáng tạo nội dung.',
      journey: [
        { label: 'Dựng sân khấu ra mắt', text: 'Khu riêng có phần trình diễn theo khung giờ.' },
        { label: 'Cho chạm vào sản phẩm', text: 'Khách dùng thử ngay sau phần giới thiệu.' },
        { label: 'Đặt trước tại chỗ', text: 'Đăng ký quan tâm hoặc đặt trước qua kênh thương hiệu.' },
        { label: 'Đo lại', text: 'Lượt xem trình diễn, lượt dùng thử, lượt đăng ký.' },
      ],
    },
    beauty: {
      name: 'Làm đẹp & chăm sóc cá nhân',
      lead: 'Thử trên người thật, có chuyên viên hướng dẫn.',
      body: 'Ngành hàng làm đẹp hợp với lễ hội này: khách đến để chăm chút cho bản thân, không phải để mua vội.',
      journey: [
        { label: 'Dựng khu thử', text: 'Ghế, gương, ánh sáng đúng chuẩn thử sản phẩm.' },
        { label: 'Tư vấn một-một', text: 'Chuyên viên của thương hiệu làm trực tiếp cho khách.' },
        { label: 'Ưu đãi sau trải nghiệm', text: 'Khách rời quầy với một lý do để quay lại.' },
        { label: 'Đo lại', text: 'Số lượt thử, thời gian mỗi lượt, tỉ lệ nhận ưu đãi.' },
      ],
    },
    technology: {
      name: 'Công nghệ & thiết bị',
      lead: 'Cho khách cầm thiết bị lên, không chỉ nhìn qua kính.',
      body: 'Khu dùng thử thiết bị và sắp đặt tương tác — phù hợp với hãng công nghệ, viễn thông, thiết bị gia dụng thông minh.',
      journey: [
        { label: 'Dựng khu dùng thử', text: 'Thiết bị đặt sẵn theo kịch bản sử dụng.' },
        { label: 'Tự tay trải nghiệm', text: 'Khách thao tác thật, nhân sự chỉ hỗ trợ.' },
        { label: 'Ưu đãi hoặc đăng ký', text: 'Dẫn về kênh bán hoặc chương trình thành viên.' },
        { label: 'Đo lại', text: 'Lượt dùng thử, thời gian tương tác, lượt đăng ký.' },
      ],
    },
    fintech: {
      name: 'Thanh toán & fintech',
      lead: 'Cả khu lễ hội dùng chung một cách thanh toán.',
      body: 'Đối tác thanh toán có thể phủ toàn bộ điểm bán trong lễ hội: quầy ăn, gian hàng, vé, quà lưu niệm.',
      journey: [
        { label: 'Phủ điểm bán', text: 'Phương thức thanh toán có mặt ở mọi quầy.' },
        { label: 'Ưu đãi khi thanh toán', text: 'Giảm giá hoặc hoàn tiền cho giao dịch trong lễ hội.' },
        { label: 'Mở tài khoản mới', text: 'Khách đăng ký tại chỗ để dùng ưu đãi.' },
        { label: 'Đo lại', text: 'Số giao dịch, giá trị giao dịch, số tài khoản mở mới.' },
      ],
    },
    hospitality: {
      name: 'Tiếp khách doanh nghiệp',
      lead: 'Mời đối tác của bạn tới một buổi tối đáng nhớ.',
      body: 'Khu tiếp khách riêng, phục vụ tại bàn, tầm nhìn sân khấu — dùng cho quan hệ đối tác chứ không chỉ để quảng bá.',
      journey: [
        { label: 'Giữ khu riêng', text: 'Khu tiếp khách theo số lượng đăng ký.' },
        { label: 'Gặp gỡ trong không gian riêng', text: 'Lãnh đạo thương hiệu tiếp khách mời trực tiếp.' },
        { label: 'Quan hệ đối tác', text: 'Các cuộc gặp diễn ra trong bối cảnh dễ chịu hơn phòng họp.' },
        { label: 'Đo lại', text: 'Số khách mời tham dự, số cuộc gặp diễn ra.' },
      ],
    },
    'stage-recognition': {
      name: 'Ghi nhận trên sân khấu',
      lead: 'Được xướng tên trước toàn bộ khán đài.',
      body: 'Phần ghi nhận trang trọng trong đêm nhạc, kèm hiện diện trên màn hình lớn và tư liệu chính thức của lễ hội.',
      journey: [
        { label: 'Đưa vào kịch bản', text: 'Phần ghi nhận nằm trong kịch bản sân khấu.' },
        { label: 'Trước cả khán đài', text: 'Khoảnh khắc diễn ra khi đông khán giả nhất.' },
        { label: 'Vào tư liệu chính thức', text: 'Xuất hiện trong ảnh và video tổng kết của lễ hội.' },
        { label: 'Đo lại', text: 'Số khán giả có mặt, lượt xem tư liệu sau sự kiện.' },
      ],
    },
    'naming-rights': {
      name: 'Quyền đặt tên trải nghiệm',
      lead: 'Một khu của lễ hội mang tên thương hiệu.',
      body:
        'Mức tham gia sâu nhất: thương hiệu gắn tên vào một không gian hoặc một trải nghiệm, xuất hiện trong bản đồ, ' +
        'lịch trình và toàn bộ truyền thông của lễ hội.',
      journey: [
        { label: 'Chọn không gian', text: 'Thoả thuận khu vực và phạm vi gắn tên.' },
        { label: 'Hiện diện suốt hành trình', text: 'Tên khu xuất hiện trong bản đồ, lịch trình, chỉ dẫn.' },
        { label: 'Trở thành một phần ký ức', text: 'Khách nhắc tới khu đó bằng tên thương hiệu.' },
        { label: 'Đo lại', text: 'Lượt nhắc tên, lượt truy cập khu, độ phủ trên kênh của lễ hội.' },
      ],
    },
    megasale: {
      name: 'MegaSale & Happiness Deals',
      lead: 'Khung giờ ưu đãi tập trung, nhiều thương hiệu cùng lúc.',
      body: 'Một sự kiện thương mại trong sự kiện: ưu đãi theo giờ, hộp quà nhiều nhãn, dòng người tập trung vào khu bán.',
      journey: [
        { label: 'Đăng ký khung giờ', text: 'Thương hiệu chọn khung giờ ưu đãi của mình.' },
        { label: 'Dồn khách vào một nhịp', text: 'Thông báo trên webapp và loa khu vực.' },
        { label: 'Bán ngay tại chỗ', text: 'Giao dịch diễn ra trong khung giờ.' },
        { label: 'Đo lại', text: 'Doanh số theo khung giờ, số đơn, số hộp quà đã phát.' },
      ],
    },
    o2o: {
      name: 'Nhận hàng tại lễ hội',
      lead: 'Đặt trên mạng, lấy tại quầy trong lễ hội.',
      body: 'Nối kênh online của thương hiệu với dòng người tại chỗ: khách đặt trước, tới quầy nhận, và ở lại mua thêm.',
      journey: [
        { label: 'Mở quầy nhận hàng', text: 'Quầy đặt trong Mega Zone.' },
        { label: 'Khách chủ động tới', text: 'Người đã đặt hàng có lý do đi vào khu thương mại.' },
        { label: 'Mua thêm tại chỗ', text: 'Tỉ lệ mua thêm khi khách đã đứng trước quầy.' },
        { label: 'Đo lại', text: 'Số đơn nhận tại quầy, giá trị đơn mua thêm.' },
      ],
    },
    csr: {
      name: 'CSR / ESG — Happiness Fund',
      lead: 'Phần đóng góp cộng đồng của lễ hội.',
      body:
        'Hoạt động thiện nguyện gắn với chủ đề hạnh phúc, có sự tham gia của khách tham dự — không phải một tấm séc chụp ảnh.',
      journey: [
        { label: 'Chọn chương trình', text: 'Thống nhất nội dung đóng góp và đối tượng thụ hưởng.' },
        { label: 'Khách cùng làm', text: 'Người tham dự trực tiếp góp sức tại khu CSR.' },
        { label: 'Câu chuyện thật', text: 'Nội dung hậu sự kiện dựa trên việc đã làm, không dàn dựng.' },
        { label: 'Đo lại', text: 'Số phần đóng góp, số người tham gia, tư liệu ghi nhận.' },
      ],
    },
    content: {
      name: 'Nội dung & truyền thông',
      lead: 'Thương hiệu xuất hiện trong nội dung, không chỉ trong quảng cáo.',
      body:
        'Hệ nội dung của lễ hội gồm podcast WeMeet, nội dung do khách tạo, livestream và phim tổng kết — ' +
        'thương hiệu có thể tham gia vào từng lớp.',
      journey: [
        { label: 'Chọn định dạng', text: 'Podcast, livestream, phim ngắn hay nội dung do khách tạo.' },
        { label: 'Sản xuất cùng lễ hội', text: 'Nội dung làm trong bối cảnh thật của sự kiện.' },
        { label: 'Phân phối đa kênh', text: 'Chạy trên kênh của lễ hội, của thương hiệu và của người sáng tạo.' },
        { label: 'Đo lại', text: 'Lượt xem, lượt tương tác, số nội dung phát sinh.' },
      ],
    },
  },

  impactModules: {
    'audience-reach': { label: 'Khách tại chỗ', unit: 'người', description: 'Số người có mặt tại khu lễ hội' },
    'onsite-engagement': { label: 'Lượt tương tác tại chỗ', unit: 'lượt', description: 'Lượt tham gia hoạt động của thương hiệu' },
    'digital-reach': { label: 'Độ phủ số', unit: 'lượt tiếp cận', description: 'Tiếp cận trên kênh số của lễ hội' },
    touchpoints: { label: 'Điểm chạm thương hiệu', unit: 'điểm', description: 'Số vị trí thương hiệu xuất hiện trong hành trình khách' },
    leads: { label: 'Khách tiềm năng', unit: 'lượt đăng ký', description: 'Đăng ký có sự đồng ý rõ ràng' },
    sampling: { label: 'Mẫu đã phát', unit: 'mẫu', description: 'Sản phẩm đưa tận tay khách' },
    commerce: { label: 'Giao dịch', unit: 'đơn', description: 'Giao dịch phát sinh trong lễ hội' },
    'content-reach': { label: 'Nội dung phát sinh', unit: 'nội dung', description: 'Bài, ảnh, video do khách và người sáng tạo đăng' },
    media: { label: 'Hiện diện báo chí', unit: 'tin bài', description: 'Tin bài và tư liệu báo chí' },
    vip: { label: 'Khách mời VIP', unit: 'khách', description: 'Khách được tiếp trong khu riêng' },
    csr: { label: 'Đóng góp cộng đồng', unit: 'phần', description: 'Kết quả chương trình CSR' },
  },

  partnerPortal: {
    why: 'Vì sao ONE BEAT NIGHT',
    audience: 'Khán giả',
    ecosystem: 'Hệ sinh thái lễ hội',
    opportunities: 'Cơ hội thương hiệu',
    formats: 'Định dạng hoạt động',
    media: 'Hệ truyền thông',
    commercial: 'Cơ hội thương mại',
    hospitality: 'VIP & tiếp khách',
    csr: 'CSR',
    measurement: 'Đo lường',
    packages: 'Hình thức hợp tác',
    contact: 'Liên hệ',
  },

  partnerCategories: {
    fmcg: 'Hàng tiêu dùng & đồ uống',
    beauty: 'Làm đẹp & chăm sóc cá nhân',
    tech: 'Công nghệ & viễn thông',
    finance: 'Tài chính & thanh toán',
    fashion: 'Thời trang & phong cách sống',
    travel: 'Du lịch & lữ hành',
    wellness: 'Sức khoẻ & thể chất',
    pets: 'Thú cưng',
  },

  footer: {
    navLabel: 'Điều hướng chân trang',
    location: 'Địa điểm',
    time: 'Thời gian',
    partnership: 'Hợp tác',
    workingChannel: 'Kênh làm việc',
    library: 'Thư viện',
    imagesInKits: 'ảnh trong 6 KIT',
    openArchitecture: 'kiến trúc mở tới',
    legal:
      'nền tảng số của lễ hội. Ngày giờ, địa điểm, giá vé, line-up và mọi số liệu chỉ xuất hiện trên trang này khi ban tổ chức xác nhận.',
  },

  /** Năm giá trị của lễ hội — khoá là bản tiếng Anh in hoa dùng trong dữ liệu. */
  values: {
    FREEDOM: 'Tự do',
    'SELF-LOVE': 'Yêu mình',
    COMMUNITY: 'Cộng đồng',
    CONNECTION: 'Kết nối',
    HAPPINESS: 'Hạnh phúc',
  },

  isNotA: ['Sự kiện hẹn hò', 'Chương trình ghép đôi', 'Ứng dụng tìm người yêu'],

  home: {
    heroLeadA: 'Một ngày hội của tự do, cộng đồng và âm nhạc — nơi độc thân không còn là một mình. Ba chặng:',
    heroStageA: 'gặp mình',
    heroStageB: 'gặp nhau',
    heroStageC: 'gặp hạnh phúc',

    movement: {
      kicker: '01 — Phong trào',
      titleA: 'Độc thân',
      titleB: 'không còn là',
      titleC: 'một mình',
      lead:
        'ONE BEAT NIGHT không phải một sự kiện ghép đôi. Đây là một ngày hội cho những người đang sống một mình theo cách chủ động: tự do, tự biết mình, và sẵn sàng gặp người khác khi thấy đúng lúc.',
      body:
        'Tình cảm có thể nảy ra ở đây. Nhưng nó không phải mục tiêu, cũng không phải thước đo xem hôm đó bạn có vui hay không.',
      notA: 'Không phải:',
      captionMain: 'Sợi chỉ đỏ nối hai người đứng xa nhau — hình ảnh gốc của dự án.',
      captionFreedom: 'Chim vàng rời khỏi dải vô cực — tự do',
      captionConnection: 'Hai bàn tay đeo vòng LED — kết nối',
    },

    audience: {
      kicker: '02 — Dành cho ai',
      titleA: 'Người trưởng thành Việt Nam',
      titleB: 'đang sống',
      titleC: 'độc lập',
      lead:
        'Ba nhóm tuổi, ba cách sống một mình khác nhau — và một điểm chung: không ai trong số họ coi độc thân là một khiếm khuyết cần sửa.',
      asideKicker: 'Ba nhóm tuổi',
      note: 'Nhóm tuổi lấy từ tài liệu định vị của dự án. Quy mô khán giả dự kiến:',
    },

    day: {
      kicker: '03 — Ban ngày',
      lead:
        'Trước khi đêm nhạc bắt đầu là cả một ngày hội: chạy, nói chuyện, ăn cùng nhau, dắt chó đi dạo, xem triển lãm, thử đồ mới. Kéo ngang để xem.',
    },

    mega: {
      kicker: '04 — Thương mại trải nghiệm',
      lead:
        'Bảy cụm ngành trong một khu chợ trải nghiệm. Khách thử sản phẩm thật, thương hiệu gặp đúng nhóm người — và đây cũng là nơi phần lớn hoạt động tài trợ diễn ra.',
      heroTitle: 'Một khu chợ, bảy thế giới',
      heroLead: 'Gian hàng dựng theo cụm ngành, đi hết một vòng là chạm được tất cả.',
      allTitle: 'Xem toàn bộ khu chợ',
      allLead: 'Bảy cụm ngành, khung giờ ưu đãi, quầy nhận hàng',
      cta: 'Xem toàn bộ Mega Zone',
    },

    community: {
      kicker: '05 — Cộng đồng',
      title: 'Lễ hội này thuộc về những người đến.',
      lead:
        'Có podcast riêng, có cuộc thi nội dung, có livestream từ trong sân khấu, có phim tổng kết sau sự kiện. Câu chuyện của lễ hội do chính người tham dự kể tiếp.',
      ctaPeople: 'Chân dung cộng đồng',
      ctaContent: 'Hệ nội dung',
    },

    night: {
      kicker: '06 — Cao trào',
      lead:
        'Khi trời tối, cả khu lễ hội đổi màu. Nhạc sống, ca sĩ chính, định dạng ca sĩ × DJ, những phần tương tác giữa sân khấu và khán đài — rồi đến khoảnh khắc hàng nghìn vòng tay LED cùng sáng một nhịp.',
      headliner: 'Nghệ sĩ chính',
      stage: 'Sân khấu',
      stageValue: 'Sân khấu chính',
      duration: 'Thời lượng',
      durationValue: 'Trọn buổi tối',
      cta: 'Vào đêm nhạc',
    },

    final: {
      kicker: 'Lời cuối',
      lead:
        'Lễ hội không bảo bạn đi tìm một ai đó. Nó mời bạn gặp lại chính mình trước, gặp những người khác sau, rồi cùng nhau có một ngày đáng nhớ.',
      imagesNote: 'hình ảnh trong sáu KIT đang vận hành trang này.',
    },
  },

  contentKinds: {
    podcast: 'Podcast',
    ugc: 'Khách tạo',
    media: 'Truyền thông',
    ooh: 'Ngoài trời',
    social: 'Mạng xã hội',
    recap: 'Tổng kết',
  },

  pages: {
    gallery: {
      metaTitle: 'Thư viện hình ảnh',
      metaDescription: 'Toàn bộ thư viện hình ảnh của lễ hội, chia theo sáu KIT.',
      kicker: 'Hình ảnh',
      titleA: 'Thư viện',
      titleB: 'lễ hội',
      leadA: 'ảnh trong sáu KIT — toàn bộ nội dung hình ảnh đang vận hành website này. Kiến trúc mở tới',
      leadB: 'ảnh;',
      leadC: 'chỗ còn trống đang chờ ảnh thật, không lấp bằng ảnh khác.',
    },
    account: {
      metaTitle: 'Tài khoản',
      metaDescription: 'Ví vé, lịch của tôi và danh sách yêu thích — kiến trúc tài khoản người tham dự.',
      kicker: 'Người tham dự',
      title: 'Tài khoản của bạn',
      lead:
        'Ví vé, lịch cá nhân và danh sách yêu thích. Giai đoạn này mọi thứ lưu ngay trên máy bạn — chưa có tài khoản máy chủ, chưa có dữ liệu nào được gửi đi.',
    },
    program: {
      metaTitle: 'Lịch trình',
      metaDescription:
        'Toàn bộ chương trình lễ hội theo khối giờ, sân khấu, khu vực và hoạt động — kèm lịch cá nhân.',
      kicker: 'Chương trình',
      titleA: 'Lịch trình',
      titleB: 'lễ hội',
      leadA: 'mục trải suốt bốn khối: sáng, giữa ngày, giờ vàng và đêm nhạc. Thêm vào “Lịch của tôi” để giữ lại những gì bạn định đi.',
      dateLabel: 'Ngày tổ chức:',
      doorsLabel: 'Giờ mở cổng:',
    },
    faq: {
      metaTitle: 'Hỏi đáp',
      metaDescription:
        'Câu hỏi thường gặp về ONE BEAT NIGHT: định vị lễ hội, vé, line-up, thú cưng, tiếp cận và an toàn.',
      kicker: 'Hỏi đáp',
      title: 'Những câu hỏi hay gặp nhất',
      lead: 'Câu nào chưa có đáp án cụ thể là vì ban tổ chức chưa công bố — trang này không đoán thay.',
      moreTitle: 'Chưa thấy câu của bạn?',
      moreLead: 'Cẩm nang tham dự có phần chi tiết hơn về đi lại, thú cưng, tiếp cận và an toàn.',
      guideCta: 'Cẩm nang tham dự',
      contactCta: 'Liên hệ',
    },
    map: {
      metaTitle: 'Bản đồ lễ hội',
      metaDescription:
        'Mười khu vực của lễ hội: Mega Zone, Trạm Gặp, khu thú cưng, triển lãm, ẩm thực, Color Run, sân khấu, VIP và hỗ trợ.',
      kicker: 'Định vị',
      titleA: 'Bản đồ',
      titleB: 'lễ hội',
      lead:
        'Mười khu vực, mỗi khu một nhịp riêng. Bấm vào một vùng để xem hoạt động, dịch vụ và ảnh thực tế của khu đó.',
      closeKicker: 'Nhìn gần',
      closeTitle: 'Từng khu nhìn từ trên xuống',
      opsKicker: 'Vận hành',
      opsTitle: 'Ai đứng sau khu lễ hội',
      opsLead:
        'Thông tin, y tế, an toàn, lối đi tiếp cận và phòng điều hành — phần không ai chú ý khi mọi thứ chạy tốt.',
    },
    artists: {
      metaTitle: 'Nghệ sĩ & MC',
      metaDescription:
        'Các vị trí biểu diễn trong kịch bản đêm nhạc One Beat Night. Danh sách nghệ sĩ sẽ công bố sau.',
      kicker: 'Line-up',
      titleA: 'Nghệ sĩ',
      titleB: '& MC',
      lead:
        'Danh sách nghệ sĩ chưa được công bố. Trang này mô tả các vị trí biểu diễn đã có trong kịch bản — khi ban tổ chức chốt tên, chỗ trống sẽ được thay bằng nghệ sĩ thật.',
      moreKicker: 'Còn nữa',
      moreTitle: 'Các vị trí khác',
      moreBody:
        'Kịch bản đêm nhạc còn chỗ cho khách mời và tiết mục đặc biệt. Sẽ bổ sung vào đây khi ban tổ chức chốt.',
      whyKicker: 'Vì sao chưa có tên',
      whyTitle: 'Không đặt tên giả cho một sân khấu thật',
      whyLead:
        'Trang này chỉ hiển thị những gì đã được xác nhận trong tài liệu dự án. Line-up, ngày diễn và giá vé sẽ xuất hiện đúng lúc ban tổ chức công bố, không sớm hơn.',
      pressCta: 'Đăng ký nhận thông tin báo chí',
    },
    megaZone: {
      metaTitle: 'Mega Zone',
      metaDescription:
        'Khu chợ trải nghiệm của lễ hội: bảy cụm ngành, ưu đãi theo khung giờ và nơi diễn ra phần lớn hoạt động thương hiệu.',
      kicker: 'Thương mại trải nghiệm',
      lead:
        'Bảy cụm ngành trong một khu chợ. Khách đến để thử đồ mới, thương hiệu đến để gặp đúng nhóm người — và cả hai đều không phải nói chuyện qua tờ rơi.',
      sectorsKicker: 'Bảy cụm ngành',
      sectorsTitle: 'Đi một vòng là chạm được tất cả',
      boxTitle: 'Hộp quà nhiều nhãn',
      boxNote: 'Sản phẩm từ nhiều thương hiệu gom trong một hộp',
      momentsKicker: 'Thương mại diễn ra thế nào',
      momentsTitle: 'Bốn khoảnh khắc mua bán trong một ngày',
      moments: {
        sampling: {
          title: 'Thử trước, quyết sau',
          body: 'Khách nếm, chạm, dùng thử ngay tại quầy. Phản ứng thật xảy ra tại chỗ, không phải qua một quảng cáo.',
        },
        'flash-sale': {
          title: 'Khung giờ ưu đãi',
          body: 'MegaSale dồn khách vào một nhịp: nhiều thương hiệu mở ưu đãi cùng lúc, cả khu chợ chuyển động theo.',
        },
        'happiness-box': {
          title: 'Happiness Deals',
          body: 'Hộp quà tổng hợp từ nhiều nhãn — một lý do rất cụ thể để khách đi hết khu thương mại.',
        },
        pickup: {
          title: 'Đặt online, lấy tại lễ hội',
          body: 'Quầy nhận hàng nối kênh bán trực tuyến của thương hiệu với dòng người ngay tại chỗ.',
        },
      },
      sectorsFitKicker: 'Ngành hàng phù hợp',
      sectorsFitTitle: 'Những nhóm thương hiệu hợp với khu này',
      sectorsFitLead: 'Đây là mô tả nhóm ngành, không phải danh sách nhà tài trợ. Lễ hội chưa công bố đối tác nào.',
      cta: 'Xem cơ hội thương hiệu',
    },

    community: {
      metaTitle: 'Cộng đồng',
      metaDescription:
        'Lễ hội này thuộc về ai: ba nhóm tuổi, tám lát cắt lối sống của người trưởng thành Việt Nam đang sống độc lập.',
      kicker: 'Con người',
      titleA: 'Lễ hội này',
      titleB: 'thuộc về ai',
      lead:
        'Không phải “người chưa tìm được ai”. Là những người trưởng thành đang sống độc lập — và coi đó là một lựa chọn chứ không phải một giai đoạn chờ.',
      groupsKicker: 'Ba nhóm tuổi',
      groupsTitle: 'Cùng một thành phố, ba cách sống một mình',
      groupsLead: 'Nhóm tuổi lấy từ tài liệu định vị của dự án.',
      lifeKicker: 'Lối sống',
      lifeTitle: 'Tám lát cắt của một đời sống độc lập',
      lifeLead:
        'Không phải chân dung nhân khẩu học trên slide. Đây là những cảnh có thật trong một tuần bình thường của khán giả lễ hội.',
      caption: 'Hai bàn tay đeo vòng tay LED sắp chạm nhau — hình ảnh gốc của ý niệm kết nối.',
      safetyKicker: 'Nguyên tắc',
      safetyTitle: 'Kết nối có khuôn khổ',
      safetyLead:
        'Mọi hoạt động gặp gỡ đều có người điều phối, có quy tắc ứng xử và có quyền dừng. Không ai bị đẩy vào một cuộc trò chuyện họ không muốn, và không ai bị bỏ lại ở góc sân.',
      safetyRules: [
        'Người dẫn có mặt trong suốt hoạt động ở Trạm Gặp',
        'Quy tắc ứng xử được công bố trước và nhắc lại tại chỗ',
        'Nhân sự hỗ trợ và điểm trợ giúp ở mọi khu',
        'Khách tham dự tự quyết định mức độ tham gia của mình',
      ],
      scale: 'Quy mô khán giả dự kiến:',
      guideCta: 'Cẩm nang tham dự',
    },

    visitorGuide: {
      metaTitle: 'Cẩm nang tham dự',
      metaDescription:
        'Chuẩn bị gì, đi lại thế nào, quy định thú cưng, hỗ trợ tiếp cận và an toàn tại ONE BEAT NIGHT.',
      kicker: 'Chuẩn bị',
      title: 'Cẩm nang tham dự',
      lead:
        'Mọi thứ cần biết trước khi tới: vào cổng, đi lại trong khu lễ hội, mang thú cưng, hỗ trợ tiếp cận và nguyên tắc ứng xử.',
      dateLabel: 'Ngày:',
      doorsLabel: 'Mở cổng:',
      venueLabel: 'Địa điểm:',
      sections: {
        before: {
          title: 'Trước khi đi',
          items: [
            'Vé điện tử nằm trong ví vé của webapp — không cần in ra giấy.',
            'Lưu trước “Lịch của tôi” để biết mình muốn đi đâu, nhất là các hoạt động cần đăng ký.',
            'Mặc đồ thoải mái: phần lớn hoạt động ban ngày diễn ra ngoài trời.',
            'Ngày, giờ mở cổng và địa điểm cụ thể sẽ được cập nhật ngay trên trang này khi công bố.',
          ],
        },
        arrive: {
          title: 'Tới nơi và vào cổng',
          items: [
            'Quét mã QR trên vé tại cổng để check-in.',
            'Nhận vòng tay LED tại cổng — vòng này dùng cho phần ánh sáng đồng bộ trong đêm nhạc.',
            'Khách VIP và khách mời của đối tác có lối vào riêng.',
            'Quầy thông tin đặt ngay sau cổng, có nhân sự hỗ trợ.',
          ],
        },
        pets: {
          title: 'Mang thú cưng',
          items: [
            'Khu thú cưng chia theo kích cỡ và tính cách: chó nhỏ, chó lớn, mèo, chó lớn tuổi.',
            'Chủ nuôi chịu trách nhiệm trông giữ vật nuôi của mình trong suốt thời gian tham dự.',
            'Có nước cho thú cưng, khu bóng mát và góc chụp ảnh.',
            'Quy định cụ thể về giấy tiêm phòng và giống loài sẽ được công bố cùng thông tin sự kiện.',
          ],
        },
        access: {
          title: 'Tiếp cận',
          items: [
            'Lối đi chính không bậc, đủ rộng cho xe lăn và xe đẩy.',
            'Khu xem đêm nhạc có vị trí dành cho khách cần hỗ trợ.',
            'Nhân sự hỗ trợ có mặt tại mọi khu, dễ nhận ra bằng đồng phục.',
            'Điểm sơ cứu và khu nghỉ yên tĩnh mở suốt thời gian sự kiện.',
          ],
        },
        respect: {
          title: 'Ứng xử và an toàn',
          items: [
            'Mọi hoạt động kết nối đều có người điều phối và quy tắc ứng xử rõ ràng.',
            'Bạn có quyền rời khỏi bất kỳ hoạt động nào vào bất kỳ lúc nào, không cần giải thích.',
            'Nếu thấy không thoải mái, báo ngay nhân sự tại khu — họ được hướng dẫn xử lý tình huống này.',
            'Không chụp hoặc quay người khác khi họ chưa đồng ý.',
          ],
        },
      },
      servicesKicker: 'Dịch vụ tại chỗ',
      servicesTitle: 'Ai giúp bạn khi cần',
    },

    contact: {
      metaTitle: 'Liên hệ',
      metaDescription:
        'Các kênh làm việc với ban tổ chức ONE BEAT NIGHT: hợp tác thương hiệu, báo chí, khách tham dự.',
      kicker: 'Liên hệ',
      title: 'Kênh làm việc',
      lead:
        'Thông tin liên hệ chính thức sẽ được bổ sung khi ban tổ chức cung cấp. Biểu mẫu bên dưới đã dựng sẵn để nối vào hệ thống nhận thông tin.',
      channels: {
        partners: {
          label: 'Hợp tác thương hiệu',
          note: 'Tài trợ, hoạt động thương hiệu, tiếp khách doanh nghiệp, thương mại tại lễ hội.',
          cta: 'Xem cơ hội hợp tác',
        },
        press: {
          label: 'Báo chí & truyền thông',
          note: 'Media kit, ảnh chính thức, phỏng vấn, đăng ký tác nghiệp.',
          cta: 'Vào phòng báo chí',
        },
        visitors: {
          label: 'Khách tham dự',
          note: 'Vé, lịch trình, quy định tham dự, hỗ trợ tiếp cận.',
          cta: 'Xem hỏi đáp',
        },
      },
      infoKicker: 'Thông tin sự kiện',
      cityLabel: 'Thành phố',
      venueLabel: 'Địa điểm',
      addressLabel: 'Địa chỉ',
      dateLabel: 'Ngày tổ chức',
      organizerLabel: 'Đơn vị tổ chức',
    },

    experience: {
      metaTitle: 'Day Festival',
      metaDescription:
        'Một ngày hội trước đêm nhạc: flashmob, Color Run, Trạm Gặp, Happy Lunch, khu thú cưng, Mega Zone, triển lãm thị giác.',
      kicker: 'Ban ngày',
      lead:
        'Trước khi trời tối là cả một ngày hội. Đây là phần mà phần lớn mọi người sẽ nhớ lâu nhất — không phải vì sân khấu, mà vì những người họ gặp.',
      rhythmKicker: 'Nhịp của một ngày',
      rhythmTitle: 'Sáng · giữa ngày · giờ vàng · đêm',
      rhythmLead: 'Khu lễ hội đổi ánh sáng bốn lần trong ngày. Giao diện trang này cũng đi theo nhịp đó.',
      railKickerA: 'hoạt động ban ngày',
      railTitle: 'Kéo ngang để khám phá',
      filmKicker: 'Phim',
      filmTitle: 'Một ngày ở Day Festival',
      stories: {
        flashmob: {
          title: 'Mở màn bằng một nhịp chung',
          body: 'Lễ hội bắt đầu bằng màn flashmob ở quảng trường trung tâm. Động tác đơn giản, tập trước mười lăm phút, ai cũng vào được — và tự nhiên ai cũng quen mặt nhau một chút.',
        },
        'color-run': {
          title: 'Chạy không tính giờ',
          body: 'Color Run đi qua ba trạm màu rồi về đích. Không có bảng xếp hạng, chỉ có huy hiệu đeo được và một bộ quần áo dính đầy màu.',
        },
        'tram-gap': {
          title: 'Trạm Gặp — nơi người lạ ngồi xuống cùng nhau',
          body: 'Coffee Talk cho người thích nghe, Coffee Circles cho người muốn nói, Match & Meet cho người sẵn sàng gặp một-một. Mọi hoạt động đều có người dẫn và có quyền dừng bất cứ lúc nào.',
        },
        pets: {
          title: 'Khu thú cưng chia theo tính cách',
          body: 'Chó nhỏ, chó lớn, mèo và chó già có khu riêng. Có buổi xã hội hoá cho chó con, có diễu hành nhỏ buổi chiều, có góc chụp ảnh.',
        },
        'match-meet': {
          title: 'Match & Meet: gặp một-một, có khung giờ',
          body: 'Bàn đôi xếp trong khu kết nối, mỗi lượt vài phút rồi xoay vòng sang người mới. Có quy tắc ứng xử rõ ràng, có người dẫn, và bạn dừng lúc nào cũng được.',
        },
        'music-corner': {
          title: 'Góc nhạc mộc giữa ngày hội',
          body: 'Một nghệ sĩ, một cây đàn, vài chục người ngồi quanh. Phần âm nhạc nhỏ nhất của lễ hội nhưng thường là chỗ người ta nhớ lâu nhất.',
        },
        art: {
          title: 'Đi qua ba lớp ánh sáng',
          body: 'Sắp đặt thị giác lớn lấy cảm hứng từ sức sống của cây sen đá. Lối đi một chiều, đi hết là hiểu hành trình của lễ hội mà không cần ai giải thích.',
        },
      },
    },

    oneBeatNight: {
      metaTitle: 'One Beat Night — đêm nhạc',
      metaDescription:
        'Cao trào của lễ hội: nhạc sống, nghệ sĩ chính, ca sĩ × DJ, Match Cam, Happiness Toast và khoảnh khắc hàng nghìn vòng tay LED cùng sáng.',
      kicker: 'Cao trào',
      lead:
        'Khi trời tối, cả khu lễ hội đổi màu. Đây là phần mà mọi thứ diễn ra suốt cả ngày dồn lại thành một buổi tối.',
      headlinerLabel: 'Nghệ sĩ chính',
      dateLabel: 'Ngày',
      stageLabel: 'Sân khấu',
      stageValue: 'Sân khấu chính',
      scriptKicker: 'Kịch bản',
      scriptTitle: 'Đêm nhạc đi theo năm vị trí',
      scriptLead:
        'Danh sách nghệ sĩ chưa công bố. Cái đã chốt là cấu trúc của đêm: ai xuất hiện lúc nào và để làm gì.',
      interactKicker: 'Tương tác',
      interactTitle: 'Khán đài cũng là một phần của sân khấu',
      interactLead:
        'Match Cam, Happiness Toast và các phần dẫn dắt giữa đêm — những khoảnh khắc khán giả thành nhân vật chính.',
      crewKicker: 'Hậu trường',
      crewTitle: 'Một đêm nhạc chạy được là nhờ những người không lên sân khấu',
      crewLead:
        'Ánh sáng, âm thanh, hình ảnh, điều phối hậu trường — phần nghề nghiệp làm nên chất lượng của đêm.',
      closingTitle: 'Phần cuối của đêm không ồn ào nhất — nó lặng nhất.',
      closingBody:
        'Sau finale, đèn hạ xuống, nhạc nhỏ lại. Cái còn lại là hàng nghìn người vừa cùng nhau trải qua một buổi tối — nhiều người trong số đó đến một mình.',
      rolesCta: 'Các vị trí biểu diễn',
      programCta: 'Lịch trình đêm nhạc',
    },

    tickets: {
      metaTitle: 'Vé & hạng vé',
      metaDescription:
        'Năm hạng vé của ONE BEAT NIGHT, quyền lợi từng hạng, quy trình mua và hành trình vòng tay LED.',
      kicker: 'Tham gia',
      titleA: 'Vé',
      titleB: '& hạng vé',
      lead:
        'Quyền lợi từng hạng đã cố định theo trải nghiệm. Giá và ngày mở bán sẽ công bố khi ban tổ chức chốt — trang này không hiển thị con số chưa được xác nhận.',
      priceLabel: 'Giá vé',
      priceShort: 'Giá',
      onsaleLabel: 'Ngày mở bán',
      tiersCountA: 'hạng vé',
      chooseTitle: 'Chọn cách bạn muốn trải qua ngày hội',
      chooseLead:
        'Khác nhau ở chỗ bạn đứng ở đâu, được phục vụ thế nào và vào cổng bằng lối nào — không khác nhau ở việc được xem gì.',
      proposedTitle: 'Hạng do đội thiết kế đề xuất, ban tổ chức chưa duyệt',
      compareKicker: 'Đối chiếu',
      compareTitle: 'Hạng nào có gì',
      compareCaption: 'Bảng so sánh quyền lợi các hạng vé',
      yes: 'Có',
      no: 'Không',
      flowKicker: 'Quy trình',
      flowTitle: 'Từ chọn vé tới ví vé',
      flowLead:
        'Toàn bộ luồng đã dựng sẵn, trừ bước thanh toán — website chưa nối với nhà cung cấp nào và không giả vờ là đã nối.',
      techKicker: 'Công nghệ sự kiện',
      techTitle: 'Vé → check-in → vòng tay → trải nghiệm',
      techLead:
        'Vòng tay LED nhận tại cổng, sáng theo nhạc trong đêm nhạc. Các năng lực mở rộng bên dưới là kiến trúc dự phòng — chưa hệ thống nào được xác nhận triển khai.',
      capabilitiesLabel: 'Năng lực mở rộng',
      notConfirmed: 'chưa xác nhận',
    },

    press: {
      metaTitle: 'Phòng báo chí',
      metaDescription: 'Media kit, bộ logo, ảnh lễ hội, thông tin tổ chức và đăng ký tác nghiệp báo chí.',
      kicker: 'Báo chí',
      titleA: 'Phòng',
      titleB: 'báo chí',
      lead: 'Tư liệu chính thức của lễ hội dành cho toà soạn, đài và người sáng tạo nội dung.',
      downloadsKicker: 'Tư liệu',
      downloadsTitle: 'Tải về',
      inLibrary: 'Có sẵn trong thư viện ảnh',
      preparing: 'Đang chuẩn bị',
      moreTitle: 'Cần tư liệu khác?',
      moreBody: 'Ảnh theo yêu cầu, phỏng vấn, số liệu — gửi yêu cầu qua đầu mối báo chí.',
      downloadsNote:
        'Các tệp đóng gói (PDF media kit, bộ ảnh nén) sẽ được thay vào đây khi ban tổ chức duyệt bản cuối. Trang này không tạo liên kết tải về trỏ tới tệp chưa tồn tại.',
      brandKicker: 'Nhận diện',
      brandTitleA: 'Bộ ảnh',
      brandTitleB: 'dựng sẵn',
      brandLead:
        'Logo, biểu tượng, vé, vòng tay, quà lưu niệm, ứng dụng và chất liệu — ảnh gốc độ phân giải cao, không chữ đè.',
      photosKicker: 'Ảnh',
      photosTitle: 'Ảnh chính thức',
      photosLead:
        'Bấm vào ảnh để xem cỡ lớn. Ảnh không chứa chữ, không có năm, không watermark — mọi thông tin do trang web hiển thị.',
      infoKicker: 'Thông tin',
      infoTitle: 'Ban tổ chức',
      eventNameLabel: 'Tên sự kiện',
      cityLabel: 'Thành phố',
      organizerLabel: 'Đơn vị tổ chức',
      dateLabel: 'Ngày tổ chức',
      venueLabel: 'Địa điểm',
      pressContactLabel: 'Liên hệ báo chí',
      accredTitle: 'Đăng ký tác nghiệp',
      accredBody:
        'Khu tác nghiệp báo chí sẽ mở đăng ký khi ngày sự kiện được công bố. Biểu mẫu bên dưới đã dựng sẵn cấu trúc; hệ thống nhận đăng ký chưa được kết nối.',
      accredItems: [
        'Toà soạn / kênh',
        'Họ tên phóng viên, vị trí',
        'Loại hình tác nghiệp: ảnh, video, viết, livestream',
        'Thiết bị mang theo',
      ],
      accredBadge: 'Mở đăng ký sau khi công bố ngày sự kiện',
    },

    partners: {
      metaTitle: 'Nhà tài trợ & đối tác',
      metaDescription:
        'Hệ sinh thái thương hiệu của ONE BEAT NIGHT: cơ hội hiện diện, trải nghiệm, thương mại, dữ liệu, tiếp khách, nội dung và CSR.',
      kicker: 'Đối tác',
      titleA: 'Không phải kho quảng cáo.',
      titleB: 'Một hệ sinh thái.',
      lead:
        'Thương hiệu không mua một vị trí treo logo. Thương hiệu chọn một vai trò trong hành trình của hàng nghìn người trong một ngày.',
      contactLine: 'Liên hệ hợp tác:',
      whyKicker: '01 — Vì sao ONE BEAT NIGHT',
      whyTitle: 'Chín lớp giá trị trong cùng một sự kiện',
      whyLead: 'Mỗi lớp là một cách khác nhau để một thương hiệu tham gia. Hiếm sự kiện nào có đủ cả chín.',
      layers: {
        movement: { label: 'Một phong trào văn hoá', note: 'Định vị rõ: tự do, yêu mình, cộng đồng — không phải sự kiện hẹn hò' },
        community: { label: 'Một cộng đồng', note: 'Người trưởng thành Việt Nam đang sống độc lập, ba nhóm tuổi' },
        day: { label: 'Một ngày hội ban ngày', note: 'Hoạt động trải dài từ sáng tới giờ vàng' },
        music: { label: 'Một đêm nhạc', note: 'Sân khấu lớn, dàn đèn và âm thanh chuyên nghiệp' },
        media: { label: 'Một nền tảng truyền thông', note: 'Podcast, UGC, livestream, báo chí, OOH, phim tổng kết' },
        commerce: { label: 'Một nền tảng thương mại', note: 'Mega Zone, MegaSale, O2O, thanh toán' },
        activation: { label: 'Một môi trường kích hoạt thương hiệu', note: 'Khu trải nghiệm đặt trong hành trình của khách' },
        data: { label: 'Một hệ dữ liệu và tương tác', note: 'Đăng ký có opt-in, đo lường theo từng bước' },
        ip: { label: 'Một tài sản dài hạn', note: 'Kiến trúc dựng cho nhiều mùa, không phải một lần' },
      },
      audienceKicker: '02 — Khán giả',
      audienceTitle: 'Ai sẽ đứng trước gian hàng của bạn',
      audienceLead:
        'Ba nhóm tuổi đã được xác định trong tài liệu định vị. Quy mô cụ thể chưa công bố — và trang này không đoán thay ban tổ chức.',
      scaleLabel: 'Quy mô dự kiến:',
      reachLabel: 'Độ phủ truyền thông:',
      ecosystemKicker: '03 — Hệ sinh thái lễ hội',
      ecosystemTitle: 'Mười khu vực, mỗi khu một kiểu tiếp cận khán giả',
      opportunitiesKicker: '04 — Cơ hội thương hiệu',
      opportunitiesTitleA: 'hình thức tham gia',
      opportunitiesLead:
        'Chọn một hình thức để xem thương hiệu làm gì ở từng bước: kích hoạt, giữ chân, chuyển đổi và đo lường.',
      formatsKicker: '05 — Định dạng hoạt động',
      formatsTitle: 'Tám nhóm giá trị',
      mediaKicker: '06 — Hệ truyền thông',
      mediaTitle: 'Thương hiệu xuất hiện trong nội dung, không chỉ trong quảng cáo',
      mediaLead:
        'Tám định dạng nội dung chạy trước, trong và sau lễ hội — mỗi định dạng là một chỗ thương hiệu có thể tham gia.',
      commercialKicker: '07 — Cơ hội thương mại',
      commercialTitle: 'Từ trải nghiệm tới giao dịch',
      commercialLead:
        'Mega Zone, MegaSale, Happiness Deals, quầy nhận hàng O2O và thanh toán tại chỗ — chuỗi liên tục từ lúc khách chú ý tới lúc khách trả tiền.',
      hospitalityKicker: '08 — VIP & tiếp khách',
      hospitalityTitle: 'Mời đối tác của bạn tới một buổi tối đáng nhớ',
      hospitalityLead:
        'Khu tiếp khách riêng, phục vụ tại bàn, tầm nhìn sân khấu, hỗ trợ đón tiếp. Quan hệ đối tác diễn ra dễ hơn ở đây so với một phòng họp.',
      csrKicker: '09 — CSR / ESG',
      csrTitle: 'Happiness Fund',
      csrLead:
        'Phần đóng góp cộng đồng của lễ hội có sự tham gia trực tiếp của khách tham dự — để câu chuyện sau sự kiện dựa trên việc đã làm, không phải một tấm séc chụp ảnh.',
      measureKicker: '10 — Đo lường',
      measureTitle: 'Đo được thì mới nói được',
      measureLead:
        'Mười một module đo lường đã dựng sẵn. Tất cả đang để trống vì lễ hội chưa có số liệu kiểm chứng — và sẽ không có con số nào được điền vào đây trước khi nó có thật.',
      measureCaption: 'Đội phân tích theo dõi số liệu vận hành ngay trong sự kiện — nơi dữ liệu thật sẽ về.',
      packagesKicker: '11 — Hình thức hợp tác',
      packagesTitle: 'Chưa có bảng giá',
      packagesLead:
        'Ban tổ chức chưa công bố gói tài trợ hay mức đầu tư nào. Trang này mô tả các vai trò có thể tham gia; đề xuất cụ thể được dựng theo từng thương hiệu.',
      contactKicker: '12 — Liên hệ',
      contactTitle: 'ONE BEAT NIGHT KHÔNG PHẢI KHO HÀNG. ĐÂY LÀ HỆ SINH THÁI ĐỂ THƯƠNG HIỆU BƯỚC VÀO.',
      contactLead:
        'Nói cho chúng tôi biết thương hiệu của bạn muốn đóng vai trò nào, phần đề xuất sẽ được dựng riêng.',
      partnerEmailLabel: 'Email hợp tác:',
      organizerLabel: 'Đơn vị tổ chức:',
      hotlineLabel: 'Hotline:',
      pressCta: 'Tải tư liệu ở phòng báo chí',
    },

    news: {
      metaTitle: 'Chuyện & nội dung',
      metaDescription:
        'Hệ nội dung của lễ hội: WeMeet Podcast, nội dung do khách tạo, livestream, báo chí, OOH và phim tổng kết.',
      kicker: 'Nội dung',
      title: 'Câu chuyện chạy trước và chạy sau lễ hội',
      lead:
        'Lễ hội không chỉ diễn ra trong một ngày. Đây là các định dạng nội dung của dự án — chưa phải bài đã đăng, vì chiến dịch chưa khởi động.',
      reelsKicker: 'Định dạng dọc',
      reelsTitle: 'Reels từ trong lễ hội',
      emptyKicker: 'Chưa có bài đăng',
      emptyLead:
        'Lễ hội chưa khởi động chiến dịch truyền thông, nên trang này chưa có thông cáo hay bài viết nào. Cấu trúc đã sẵn sàng: khi nội dung thật xuất hiện, nó sẽ nằm đúng ở đây.',
      pressCta: 'Phòng báo chí',
    },
  },

  videos: {
    heroFilm: 'Phim giới thiệu ONE BEAT NIGHT',
    dayFestival: 'Một ngày ở Day Festival',
    concertTeaser: 'Teaser đêm nhạc',
    sponsorFilm: 'Phim giới thiệu cơ hội thương hiệu',
    afterMovie: 'Phim tổng kết',
    reelDance: 'Reel — khoảnh khắc nhảy trong đêm nhạc',
    reelCreator: 'Reel — người sáng tạo nội dung tại lễ hội',
    reelFlashmob: 'Reel — flashmob khai hội',
  },
} as const;
