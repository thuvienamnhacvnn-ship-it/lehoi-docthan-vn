import type { MessagesFor } from '../types';

/**
 * 简体中文。
 *
 * 专有名称保持原样：ONE BEAT NIGHT、Mega Zone、Coffee Talk、Match & Meet、Happy Lunch、
 * Color Run、Happiness Toast。"Trạm Gặp" 译作"相遇站"，与地图上的英文名 Connection Zone 对应。
 */
export const zh: MessagesFor = {
  brand: {
    name: 'ONE BEAT NIGHT',
    subtitle: '单身节',
    slogan: '幸福就在每一个瞬间',
    city: '胡志明市',
    country: '越南',
    positioning: '为当代单身人士打造的节庆，主张自由、连接、自我成长与幸福。',
  },

  common: {
    skipToContent: '跳到主要内容',
    home: '首页',
    tickets: '门票',
    ticketsFull: '门票与票种',
    explore: '探索节庆',
    becomePartner: '成为合作伙伴',
    viewProgram: '查看日程',
    festivalMap: '节庆地图',
    continueToNight: '继续前往音乐之夜',
    viewTickets: '查看门票',
    scrollToEnter: '向下滚动进入',
    comingSoon: '即将公布',
    proposed: '提案',
    mostChosen: '最多人选',
    all: '全部',
    items: '项',
    close: '关闭',
    open: '打开',
    menu: '菜单',
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
    mainNav: '主导航',
    fullNav: '完整导航',
    eventDate: '举办日期',
    venue: '举办地点',
    lineup: '演出阵容',
    stage: '舞台',
    language: '语言',
    changeLanguage: '切换语言',
    notConfirmedYet: '尚未确认',
    minutesShort: '′',
    needsSignup: '需要报名',
    accessible: '设有无障碍通道',
    sampleData: '示意数据',
    gallery: '图片库',
    menuDialog: '主菜单',
  },

  nav: {
    experience: '体验',
    program: '日程',
    map: '地图',
    artists: '艺人',
    tickets: '门票',
    partners: '合作伙伴',
  },

  menu: {
    groups: {
      festival: '节庆',
      people: '人',
      join: '参与',
      business: '企业',
    },
    items: {
      '/experience': { label: 'Day Festival 日间节', desc: '白天：快闪、彩色跑、相遇站、Mega Zone' },
      '/one-beat-night': { label: 'One Beat Night', desc: '音乐之夜——情绪的高潮' },
      '/mega-zone': { label: 'Mega Zone', desc: '体验式商业区' },
      '/program': { label: '日程', desc: '按时段、舞台与区域查看' },
      '/map': { label: '节庆地图', desc: '十个区域，可逐区放大' },
      '/artists': { label: '艺人与主持', desc: '音乐之夜的各个演出位置' },
      '/community': { label: '社群', desc: '这个节庆属于谁' },
      '/news': { label: '故事与内容', desc: 'WeMeet 播客、用户内容、幕后' },
      '/tickets': { label: '门票与票种', desc: '五种票、电子票夹、LED 手环' },
      '/account': { label: '账户', desc: '电子票夹、我的日程、收藏' },
      '/visitor-guide': { label: '参加指南', desc: '交通、无障碍、安全' },
      '/faq': { label: '常见问题', desc: '大家最常问的问题' },
      '/partners': { label: '赞助与合作', desc: '品牌可以走进来的生态' },
      '/press': { label: '媒体中心', desc: '媒体包、图片、标识、采访登记' },
      '/contact': { label: '联系我们', desc: '工作对接渠道' },
    },
  },

  appTabs: {
    festival: '节庆',
    program: '日程',
    map: '地图',
    tickets: '门票',
    account: '我的',
    nav: '应用导航栏',
  },

  install: {
    title: '把节庆带在身边',
    descAndroid: '添加到主屏幕：打开更快，没有信号也能看日程和地图。',
    descIos: '点击"分享"，再选择"添加到主屏幕"，就能像应用一样打开。',
    cta: '安装',
    close: '关闭安装提示',
    dialogLabel: '安装 ONE BEAT NIGHT 应用',
  },

  offline: {
    kicker: '没有网络连接',
    title: '设备目前离线',
    lead: '你之前打开过的页面仍然可以查看。网络恢复后，页面会自动载入最新内容。',
    home: '回到首页',
    savedProgram: '已保存的日程',
    metaTitle: '当前离线',
    metaDescription: '设备没有网络。已经浏览过的页面仍可打开。',
  },

  notFound: {
    metaTitle: '找不到页面',
    metaDescription: '这个网址已经不存在，或者从来没有存在过。',
    title: '这里什么也没有',
    lead: '你打开的网址已经不存在，或者从来没有存在过。以下是值得去的地方。',
    home: '回到首页',
  },

  placeholders: {
    EVENT_DATE: { label: '举办日期', note: '项目文件中尚未确定' },
    EVENT_TIME: { label: '开场时间', note: '尚未确定' },
    VENUE: { label: '举办地点', note: '目前只确认到城市：胡志明市' },
    VENUE_ADDRESS: { label: '详细地址', note: '尚未确定' },
    HEADLINER: { label: '压轴艺人', note: '演出阵容尚未公布' },
    TICKET_PRICE: { label: '票价', note: '价格表尚未确定' },
    TICKET_ONSALE: { label: '开售日期', note: '尚未确定' },
    EXPECTED_ATTENDANCE: { label: '预计规模', note: '不采用任何未经证实来源的数字' },
    MEDIA_REACH: { label: '媒体覆盖', note: '尚无可核实的数据' },
    ORGANIZER: { label: '主办单位', note: '尚未收到法人资料' },
    PRESS_EMAIL: { label: '媒体邮箱', note: '暂无' },
    PARTNER_EMAIL: { label: '合作邮箱', note: '暂无' },
    HOTLINE: { label: '服务热线', note: '暂无' },
  },

  journey: {
    'gap-minh': {
      title: '遇见自己',
      lead: '单身，不再等于一个人。',
      body: '开篇这一段留给安静：重新看看自己，知道自己在哪里、喜欢什么、需要什么。没有人会在还没准备好的时候被推着去连接。',
      keywords: ['内心', '自由', '自我认知', '自信'],
    },
    'gap-nhau': {
      title: '遇见彼此',
      lead: '一场好好的对话，就足以开始。',
      body: '中间这一段属于社群：一圈圈的咖啡对谈、共享的餐桌、有人引导的相遇。连接在受尊重且安全的框架里发生。',
      keywords: ['社群', '对话', '共同体验', '尊重的连接'],
    },
    'gap-hanh-phuc': {
      title: '遇见幸福',
      lead: '幸福就在每一个瞬间。',
      body: '最后这一段是庆祝：音乐、灯光、成千上万人同一个节拍。不是因为谁找到了谁——而是所有人一起拥有了一个值得记住的夜晚。',
      keywords: ['庆祝', '音乐', '友谊', '集体能量'],
    },
  },

  zones: {
    'main-plaza': {
      name: '中央广场',
      short: '开幕、快闪、集合点',
      description: '节庆开始的地方：早晨的快闪、各个小队的集合点，也是通往其他所有区域的主轴。',
      services: ['集合点', '小舞台', '饮用水'],
    },
    'mega-zone': {
      name: 'Mega Zone',
      short: '七大品类的体验市集',
      description: '节庆规模最大的体验式商业区：时尚、美妆、科技、健康、美食、旅游、AI 与创业。',
      services: ['品牌展位', '限时优惠', 'O2O 取货柜台'],
    },
    'tram-gap': {
      name: '相遇站',
      short: 'Coffee Talk、Coffee Circles、Match & Meet',
      description: '专门用来聊天和认识彼此的区域，全部由主持人带领。这里的每一项活动都有行为准则和支援人员。',
      services: ['引导人员', '安静区', '现场报名'],
    },
    pets: {
      name: '宠物区',
      short: '小型犬、大型犬、猫、老年犬',
      description: '有遮阴的区域，按体型和性格分开。设有幼犬社会化时段、猫咪角落，还有小型游行。',
      services: ['宠物饮水', '独立分区', '拍照点'],
    },
    'visual-art': {
      name: '视觉艺术区',
      short: '艺术装置 + 创作空间',
      description: '一条穿过三层光影的单向通道，后面接着画廊，以及艺术家现场创作的角落。',
      services: ['单向动线', '导览人员', '拍照区'],
    },
    food: {
      name: '美食区',
      short: '共享餐桌、餐饮摊位、座位区',
      description: '各式餐饮摊位与长条共享餐桌——Happy Lunch 就在这里举行。',
      services: ['共享餐桌', '免费饮水', '有遮棚的座位'],
    },
    'color-run': {
      name: 'Color Run 路线',
      short: '穿越三个色彩站的路线',
      description: '绕节庆场地一圈的短程路线，经过三个色彩站，抵达终点领取徽章。',
      services: ['补水站', '色彩站', '终点区'],
    },
    concert: {
      name: '主舞台',
      short: 'One Beat Night——音乐之夜',
      description: '配备专业灯光音响的大型舞台。白天用于短篇演出，入夜后就是音乐之夜。',
      services: ['观众区', 'LED 手环', '协助观演区'],
    },
    vip: {
      name: 'VIP 区',
      short: '专用入口、座位区、桌边服务',
      description: '为 VIP 宾客与合作伙伴嘉宾准备：快速入场、休息区与专属服务。',
      services: ['快速入场', '桌边服务', '正对舞台视野'],
    },
    support: {
      name: '支援与安全',
      short: '咨询、医疗、安保、无障碍',
      description: '咨询台、急救点、安全人员与无台阶通道，分布在场地的多个位置。',
      services: ['咨询台', '急救', '失物招领', '无障碍协助'],
    },
  },

  phases: {
    morning: '上午',
    midday: '中午',
    golden: '黄金时刻',
    night: '音乐之夜',
  },

  categories: {
    music: '音乐',
    community: '社群',
    talk: '对谈',
    pets: '宠物',
    food: '美食',
    art: '艺术',
    wellness: '健康',
    commerce: '购物',
    vip: 'VIP',
  },

  activities: {
    flashmob: {
      name: '开幕快闪',
      summary: '数百人一起踏出这一天的第一个节拍。',
      detail:
        '在中央广场展开的开场群舞。谁都能参加：动作简单，提前十五分钟练习，全程会被拍下来，成为节庆的传播素材。',
    },
    'color-run': {
      name: 'Color Run 彩色跑',
      summary: '一条穿过三个体验区的彩色跑道。',
      detail: '路线短、不计时，经过三个色彩站。冲线后能拿到一枚可以佩戴的徽章——是纪念，不是比赛。',
    },
    'coffee-talk': {
      name: 'Coffee Talk',
      summary: '关于"一个人生活但不孤独"的短篇对谈。',
      detail:
        '户外小舞台，观众坐得很近，每一场一个主题：财务独立、心理健康、和自己做朋友。现场问答，不做表演。',
    },
    'coffee-circles': {
      name: 'Coffee Circles',
      summary: '8–10 人一圈，一位引导者，没有人被冷落。',
      detail: '每一圈都有引导者，让话题不会掉进沉默。每场结束换圈，认识新的一组人。',
    },
    'match-meet': {
      name: 'Match & Meet',
      summary: '有时段、有主持、随时可以喊停的一对一见面。',
      detail:
        '双人小桌排在连接区里，每轮几分钟然后轮换。有明确的行为准则，支援人员全程留在区域内。这是在尊重框架下的见面，不是配对活动。',
    },
    'happy-lunch': {
      name: 'Happy Lunch',
      summary: '共享餐桌——最容易开口的方式。',
      detail: '长桌、分食的餐点、陌生人并肩而坐。没有人必须一个人吃饭。',
    },
    'pets-meetup': {
      name: 'Pets Meetup',
      summary: '宠物区按群体分开：小型犬、大型犬、猫、老年犬。',
      detail:
        '有遮阴的空间，按体型和性格分区，让宠物和人都安全。设有幼犬社会化时段，也有专属猫奴的角落。',
    },
    'walk-and-wag': {
      name: 'Walk & Wag Parade',
      summary: '宠物主人的小型游行。',
      detail: '沿内部道路慢慢走一圈，两侧有人观看，节奏由宠物的安全决定。',
    },
    'mega-zone': {
      name: 'Mega Zone',
      summary: '体验市集：时尚、美妆、科技、健康、美食、旅游、AI 与创业。',
      detail:
        '展位按品类分区，来客是真的动手试产品，而不是只拿传单。这里也是合作品牌摆放互动活动的地方。',
    },
    'happiness-deals': {
      name: 'MegaSale & Happiness Deals',
      summary: '商业区内集中的限时优惠时段。',
      detail: '各品牌按时段开放优惠；来客可以拿到集合多个品牌的礼盒。',
    },
    'visual-art': {
      name: '视觉演出空间',
      summary: '取材自多肉植物生命力的大型艺术装置。',
      detail: '一条穿过三层光影的单向通道，走完就懂了这个节庆的旅程，不需要任何人解释。',
    },
    'creative-gallery': {
      name: '创作空间',
      summary: '绘画、摄影、综合媒材展览，还有木吉他角落。',
      detail: '艺术家就在现场创作，观众能看到整个过程，也能参与作品中属于大家的部分。',
    },
    'live-band': {
      name: 'Live band 现场乐队',
      summary: '现场乐队为音乐之夜揭幕。',
      detail: '夜晚开场的现场演出，灯光开始转向洋红、蓝与金色。',
    },
    'match-cam': {
      name: 'Match Cam',
      summary: '摄影机扫过观众席，真实反应出现在大屏幕上。',
      detail: '音乐之夜中间一段轻松的互动——被选中的人反应最真，全场一起笑。',
    },
    'happiness-toast': {
      name: 'Happiness Toast',
      summary: '整个节庆在夜里一起举杯一次。',
      detail: '短短一个停顿：灯光压下来，音乐变小，所有人一起为"好好对待自己的一年"举杯。',
    },
    headliner: {
      name: '压轴演出',
      summary: '整晚情绪最高的一段演出。',
      detail: '舞台向外展开，灯阵全功率运转，观众席变成一整条流动的光。',
    },
    'singer-dj': {
      name: '歌手 × DJ',
      summary: '跨界形式：人声铺在电子 set 之上。',
      detail: '从现场乐队过渡到舞池的一段，两位艺人同台。',
    },
    'light-moment': {
      name: 'One Beat Light Moment',
      summary: '成千上万只 LED 手环在同一个节拍亮起。',
      detail:
        '节庆的标志性时刻：整个观众席变成随音乐奔跑的光浪。名字里那个"同一个节拍"，在这一刻变成看得见的东西。',
    },
    finale: {
      name: 'Finale 终章',
      summary: '所有艺人重新回到舞台。',
      detail: '收尾的一段：焰火、彩带，以及今夜最后一句话——我们再见。',
    },
    'vip-hospitality': {
      name: 'VIP 与贵宾接待',
      summary: '专用入口、正对舞台的座位区、桌边服务。',
      detail: '为 VIP 宾客与合作伙伴嘉宾准备：快速入场、专属休息区、餐饮送到桌边。',
    },
    wellness: {
      name: '健康与恢复角落',
      summary: '漫长一天中间可以喘口气的地方。',
      detail: '商业区里的短时放松体验：伸展、基础护理、饮水，以及安静的座位。',
    },
    'pet-photo': {
      name: 'Pet Photo Booth',
      summary: '在节庆的霓虹场景里和宠物合影。',
      detail: '按节庆识别搭建的拍照角，照片直接传到手机。',
    },
  },

  megaZoneCategories: {
    'fashion-beauty': { name: '时尚与美妆', note: '试用产品、配件、柜台咨询' },
    technology: { name: '科技', note: '新设备、互动屏幕、现场试用' },
    wellness: { name: '健康与恢复', note: '短时放松体验' },
    food: { name: '美食与快消', note: '试吃，柜台前最真实的反应' },
    travel: { name: '旅游', note: '目的地体验展位' },
    'ai-startup': { name: 'AI 与创业', note: '新产品区、互动装置' },
    deals: { name: 'Happiness Deals', note: '限时优惠、多品牌礼盒' },
  },

  stages: {
    'main-stage': '主舞台',
    'talk-stage': '相遇站舞台',
    plaza: '广场',
    mega: 'Mega Zone',
    'pet-zone': '宠物区',
    'art-zone': '展览区',
    'food-court': '美食区',
    'vip-lounge': 'VIP 区',
  },

  ticketTiers: {
    standard: {
      name: '标准票',
      lead: '白天的节庆和晚上的音乐之夜都能进。',
      benefits: [
        '全部日间区域：相遇站、Mega Zone、宠物区、展览',
        'One Beat Night 音乐之夜观众区',
        'LED 手环，参与同步灯光环节',
        '电子票带二维码，收在网页应用的票夹里',
      ],
    },
    day: {
      name: 'Day Festival 日间票',
      lead: '只含白天部分，在音乐之夜开始前离场。',
      benefits: [
        '全部日间区域：相遇站、Mega Zone、宠物区、展览',
        '社群活动：快闪、Color Run、Coffee Circles',
        '电子票带二维码，收在网页应用的票夹里',
      ],
    },
    vip: {
      name: 'VIP 票',
      lead: '专用入口、正对舞台的座位区、桌边服务。',
      benefits: [
        '标准票的全部权益',
        '经专用通道快速入场',
        'VIP 区有座位，视野正对舞台',
        '餐饮送到桌边',
        '需预约的活动可优先报名',
      ],
    },
    group: {
      name: '团体票',
      lead: '四人以上同行，一次完成入场。',
      benefits: ['标准票的全部权益', '整组一次扫码入场', '需报名的活动可安排相邻位置'],
    },
    hospitality: {
      name: '企业贵宾接待',
      lead: '为邀请合作伙伴与客户的企业准备。',
      benefits: [
        '按预订人数安排的专属接待区',
        '整晚全程服务',
        '协助接待与嘉宾动线安排',
        '可与节庆内的品牌活动结合',
      ],
    },
  },

  checkout: {
    select: { label: '选择票种', note: '选择票种与数量' },
    details: { label: '购票人信息', note: '姓名、邮箱、电话' },
    promo: { label: '优惠码', note: '有的话可以在这里使用' },
    summary: { label: '确认订单', note: '付款前再看一遍' },
    payment: { label: '付款', note: '接口已备好——尚未接入任何服务商' },
    wallet: { label: '领取门票', note: '门票进入票夹，带二维码可用于入场' },
  },

  wristband: {
    ticket: { label: '门票', note: '网页应用票夹里的电子票' },
    checkin: { label: '入场', note: '在入口扫码' },
    wristbandStep: { label: '手环', note: '在入口领取 LED 手环' },
    experience: { label: '体验', note: '音乐之夜里手环随音乐发光' },
    interaction: { label: '互动', note: '参与同步灯光环节' },
    commerce: { label: '消费', note: '在节庆各柜台付款' },
    journey: { label: '专属旅程', note: '我的日程，以及根据已选活动给出的推荐' },
  },

  wristbandCapabilities: {
    rfid: 'RFID',
    nfc: 'NFC',
    cashless: '无现金支付',
    access: '出入管控',
    tracking: '品牌活动效果衡量',
  },

  lineup: {
    'live-band': { role: '现场乐队', description: '以现场演出为音乐之夜揭幕，随后舞台转入霓虹色调。' },
    headliner: { role: '压轴艺人', description: '情绪最高的一段演出，舞台向外展开，灯阵全功率运转。' },
    'singer-dj': { role: '歌手 × DJ', description: '人声与电子 set 的结合——从现场乐队通往舞池的枢纽。' },
    dj: { role: 'DJ', description: '夜晚的最后一段：音乐不断，观众席化为一个整体在移动。' },
    host: { role: '主持人', description: '掌握整晚节奏，带领 Match Cam、Happiness Toast 等互动环节。' },
  },

  production: {
    lighting: { label: '灯光控制', note: '正对舞台的控制台' },
    sound: { label: '音响', note: '音响工程师整晚值守' },
    camera: { label: '影像制作', note: '为大屏幕与素材准备的大型摄影机' },
    backstage: { label: '后台', note: '候场区与通往舞台的路线' },
    'stage-entry': { label: '上台通道', note: '一条通向光的暗廊' },
    'stage-side': { label: '侧台', note: '同时看得到舞台和观众席的位置' },
  },

  audience: {
    '21-25': {
      title: '正在把自己的人生搭起来',
      lead: '刚毕业或刚工作，喜欢有创意的空间，一个人去也觉得很好。',
      traits: ['边学边做', '咖啡馆是第二个办公室', '生活在社交网络上'],
    },
    '26-35': {
      title: '独立，而且清楚自己要什么',
      lead: '有职业、有收入，宁可挑朋友挑体验，也不将就。',
      traits: ['经济自主', '体验优先', '对品质挑剔'],
    },
    '36-52': {
      title: '从容而开放',
      lead: '一个人生活是一种选择，不是等待的阶段。',
      traits: ['品味明确', '重视被尊重', '愿意认识新的人'],
    },
  },

  lifestyle: {
    'solo-travel': { label: '一个人旅行', note: '不必等谁开口的旅程' },
    fitness: { label: '一个人训练', note: '对自己的身体有纪律' },
    wellness: { label: '照顾自己', note: '心理健康是件正经事' },
    cafe: { label: '一个人喝咖啡', note: '安静，但不孤独' },
    freelance: { label: '自由工作', note: '自己排班，自己负责' },
    'single-parent': { label: '单亲育儿', note: '照样有资格快乐' },
    'pet-parent': { label: '和宠物一起生活', note: '另一种形式的家' },
    healing: { label: '疗愈', note: '说出口，就已经轻了一点' },
    'confident-woman': { label: '一个人也自信', note: '不等谁允许自己开心' },
    'confident-man': { label: '主动地活', note: '知道自己要什么，也不急' },
  },

  contentFormats: {
    'wemeet-podcast': {
      name: 'WeMeet 播客',
      lead: '一档关于"好好单身"的对谈节目。',
      body: '每集一位嘉宾，讲真实的故事：独立、分手、重新开始、养宠物、一个人旅行。录音棚拍摄，在节庆前后播出。',
    },
    'podcast-story': {
      name: 'Podcast Story',
      lead: '短版：一个故事，一个人。',
      body: '为社交平台准备的精简形式：一位嘉宾、一段经历，剪成竖版片段。',
    },
    ugc: {
      name: '用户创作内容',
      lead: '参加者本身就是人数最多的内容团队。',
      body: '节庆里的各个点位都是为好拍设计的。另设内容比赛，并提供模板让来客做自己的作品。',
    },
    livestream: {
      name: '直播与 KOL',
      lead: '从节庆现场直播。',
      body: '直播间就设在活动现场，主持人与嘉宾在真实人流中对谈。',
    },
    press: {
      name: '新闻媒体',
      lead: '发布会与专属采访区。',
      body: '设有记者工作区、官方照片，以及可供媒体下载的素材。',
    },
    ooh: {
      name: '户外传播',
      lead: '节庆在开始之前先出现在城市里。',
      body: '大屏幕与户外点位把节庆的识别带上街头。',
    },
    social: {
      name: '社交内容生产',
      lead: '一支内容团队贯穿整个营销期。',
      body: '照片、短视频与倒计时内容按营销日程产出。',
    },
    recap: {
      name: '回顾影片',
      lead: '节庆结束后，故事还在继续。',
      body: '为合作伙伴、媒体与社群准备的回顾影片与会后素材库。',
    },
  },

  operations: {
    info: { label: '咨询台', note: '问什么都有人回答' },
    safety: { label: '安全人员', note: '每个区域都有，很容易认出来' },
    'first-aid': { label: '急救点', note: '需要时有医疗协助和休息的地方' },
    accessible: { label: '无障碍通道', note: '路面宽、没有台阶、没有障碍' },
    control: { label: '指挥中心', note: '活动全程监看整个场地' },
    briefing: { label: '团队简报', note: '开场前所有工作人员都会先接受说明' },
  },

  faqs: [
    {
      q: '这是相亲活动吗？',
      a: '不是。ONE BEAT NIGHT 是一个关于自由、社群与音乐的节庆。确实有一些活动帮助大家在受尊重的框架里互相认识，但配对并不是这个节庆的目的。',
    },
    {
      q: '有伴侣的人可以参加吗？',
      a: '可以。节庆面向单身人士，但不会查验任何人的感情状态。想要度过愉快的一天和一场音乐会，都欢迎参加。',
    },
    {
      q: '什么时候、在哪里举办？',
      a: '节庆在胡志明市举办。具体日期、时间与场地会在主办方确认后公布——一旦确定，这个页面会立即更新。',
    },
    {
      q: '门票多少钱？',
      a: '价格尚未公布。票种与各自的权益已经列在门票页面；价格与开售日期之后补上。',
    },
    {
      q: '演出阵容有谁？',
      a: '艺人名单尚未公布。艺人页面目前呈现的是音乐之夜结构中的各个演出位置。',
    },
    {
      q: '我一个人来会不会尴尬？',
      a: '这个节庆就是为一个人来的人设计的：有主持人带领的活动、有对谈圈、有共享餐桌。没有人会被晾在角落里。',
    },
    {
      q: '可以带宠物吗？',
      a: '设有专属宠物区，按体型和性格分开。关于品种与疫苗证明的具体规定会在参加指南中公布。',
    },
    {
      q: '身心障碍者要如何参加？',
      a: '场地设有无台阶通道、协助观演区与协助人员。详情见参加指南中的无障碍章节。',
    },
    {
      q: 'LED 手环是什么？',
      a: '在入口领取的发光手环，会在音乐之夜的 One Beat Light Moment 环节随音乐亮起。',
    },
    {
      q: '企业想合作该联系谁？',
      a: '请先看合作伙伴页面了解可以参与的形式，再透过该页最下方的表单留下资料。',
    },
  ],

  brandMockups: {
    logo: { label: '完整标识', note: '定稿版，含字体，黑底' },
    emblem: { label: '徽记', note: '仅徽记，透明背景' },
    ticket: { label: '门票', note: '镭射票面，留有放置票种的空白区' },
    wristband: { label: 'LED 手环', note: '黑底产品图' },
    merch: { label: '周边商品', note: '带徽记的 T 恤、帽子、袋子与充电宝' },
    app: { label: '应用', note: '空白手机框，用于合成界面' },
    texture: { label: '金色纹理', note: '用于 VIP 边框与字体的材质' },
    entrance: { label: '入口大门', note: '无限符号大门，适合做文章封面' },
  },

  pressDownloads: {
    'logo-pack': { label: '标识与徽记包', note: '透明 PNG 加完整版' },
    'key-visual': { label: '主视觉', note: '节庆的主要图像' },
    'photo-set': { label: '节庆图片集', note: '按六个 KIT 整理的图片库' },
    'media-kit': { label: '媒体包（PDF）', note: '准备中' },
    'fact-sheet': { label: '活动资料表', note: '等待主办方确认日期、场地与规模' },
  },

  opportunityCategories: {
    visibility: '曝光',
    experience: '体验',
    engagement: '互动',
    commerce: '商业',
    data: '数据',
    hospitality: '贵宾接待',
    content: '内容',
    impact: '社会影响',
  },

  opportunities: {
    'central-activation': {
      name: '中心活动区',
      lead: '设在节庆主要动线上的体验区。',
      body: '这不是一排展位里的其中一个，而是来客旅程中的一个停靠点：有自己的建筑语言、有走进去的理由，也有能带走的东西。',
      journey: [
        { label: '建一个目的地', text: '按品牌识别搭建的体验区，位于人流主轴上。' },
        { label: '把人留下来', text: '品牌人员引导体验，而不是发传单。' },
        { label: '导向行动', text: '现场优惠，或节庆结束后可用的优惠码。' },
        { label: '回头衡量', text: '进入区域人次、完成体验人次、领取优惠人次。' },
      ],
    },
    'immersive-brand': {
      name: '沉浸式品牌体验',
      lead: '灯光、投影与装置——品牌变成一个空间。',
      body: '适合希望被"感觉"记住、而不是被 logo 记住的品牌。这类区域往往是整个节庆最多人拍照的地方。',
      journey: [
        { label: '建造空间', text: '大尺度装置，有动线，也有视觉高潮。' },
        { label: '制造时刻', text: '因为有值得看、值得拍的东西，人会停留更久。' },
        { label: '向外扩散', text: '来客自己发的照片和影片，把品牌带出这个区域。' },
        { label: '回头衡量', text: '停留时长、用户创作内容、品牌被提及次数。' },
      ],
    },
    sampling: {
      name: '派样与试用',
      lead: '把产品直接放进对的人手里。',
      body: '有人员引导的派样柜台，来客当场试、当场反应。适合消费品、饮料与个人护理。',
      journey: [
        { label: '开设柜台', text: '柜台设在 Mega Zone 的对应品类区。' },
        { label: '让人真的试', text: '人员示范用法，而不只是把样品递出去。' },
        { label: '当场买或之后买', text: '柜台优惠，或品牌自有销售渠道的优惠码。' },
        { label: '回头衡量', text: '派出样品数、试用后留下听讲解的比例。' },
      ],
    },
    'lead-gen': {
      name: '潜在客户收集',
      lead: '在数字柜台上完成的、明确同意的登记。',
      body: '来客自愿留下资料，以换取优惠或后续消息。全程为主动同意，可导出到品牌自己的系统。',
      journey: [
        { label: '搭设数字柜台', text: '登记屏幕设在品牌活动区内。' },
        { label: '以价值换资料', text: '来客换回具体的东西：优惠、礼品或体验名额。' },
        { label: '交付到 CRM', text: '主动同意的数据，以品牌用得上的格式交付。' },
        { label: '回头衡量', text: '登记数、完成率、数据质量。' },
      ],
    },
    'qr-voucher': {
      name: '优惠码与 O2O',
      lead: '从节庆直接导向门店或应用。',
      body: '来客现场扫码，在品牌的销售渠道使用优惠——把活动现场的行为与真实营收接起来。',
      journey: [
        { label: '把码嵌进体验', text: '码出现在一段体验的末尾，而不是到处乱发。' },
        { label: '当场扫码', text: '用手机就能扫，不需要另外下载应用。' },
        { label: '在销售渠道使用', text: '优惠可在门店、网站或品牌应用中使用。' },
        { label: '回头衡量', text: '扫码率、核销率、带来的订单金额。' },
      ],
    },
    'product-launch': {
      name: '新品发布',
      lead: '一件新产品、一群对的人、一个下午。',
      body: '产品演示区配有小舞台与试用区，现场还有媒体与内容创作者。',
      journey: [
        { label: '搭建发布舞台', text: '专属区域，按时段安排演示。' },
        { label: '让人摸到产品', text: '介绍结束后来客立刻试用。' },
        { label: '现场预订', text: '登记意向，或透过品牌渠道预订。' },
        { label: '回头衡量', text: '演示观看人次、试用人次、登记人次。' },
      ],
    },
    beauty: {
      name: '美妆与个人护理',
      lead: '在真人身上试，有专业人员指导。',
      body: '美妆很适合这个节庆：来客是为了好好照顾自己而来，不是急着买东西。',
      journey: [
        { label: '搭建试用区', text: '椅子、镜子与足以判断产品的灯光。' },
        { label: '一对一咨询', text: '品牌的专业人员直接为来客服务。' },
        { label: '体验后的优惠', text: '让人离开柜台时，带着一个回来的理由。' },
        { label: '回头衡量', text: '试用人次、每次时长、领取优惠的比例。' },
      ],
    },
    technology: {
      name: '科技与设备',
      lead: '让人把设备拿起来，而不是隔着玻璃看。',
      body: '设备试用区与互动装置——适合科技、电信与智能家居品牌。',
      journey: [
        { label: '搭建试用区', text: '设备按真实使用场景摆放。' },
        { label: '亲手体验', text: '来客自己操作，人员只在旁协助。' },
        { label: '优惠或登记', text: '导向销售渠道或会员计划。' },
        { label: '回头衡量', text: '试用人次、互动时长、登记人次。' },
      ],
    },
    fintech: {
      name: '支付与金融科技',
      lead: '整个节庆共用一种支付方式。',
      body: '支付合作伙伴可以覆盖场内所有销售点：餐饮柜台、展位、门票、周边商品。',
      journey: [
        { label: '覆盖销售点', text: '每个柜台都支持这种支付方式。' },
        { label: '支付即优惠', text: '节庆内的交易享有折扣或返现。' },
        { label: '开立新账户', text: '来客现场注册即可使用优惠。' },
        { label: '回头衡量', text: '交易笔数、交易金额、新开户数。' },
      ],
    },
    hospitality: {
      name: '企业贵宾接待',
      lead: '邀请你的合作伙伴，度过一个值得记住的夜晚。',
      body: '专属接待区、桌边服务、正对舞台的视野——用于经营关系，而不只是打广告。',
      journey: [
        { label: '保留专属区域', text: '接待区按预订人数安排。' },
        { label: '在自己的空间会面', text: '品牌高层直接接待受邀嘉宾。' },
        { label: '经营合作关系', text: '这些对话发生在比会议室舒服得多的场合。' },
        { label: '回头衡量', text: '到场嘉宾数、实际发生的会面次数。' },
      ],
    },
    'stage-recognition': {
      name: '舞台致谢',
      lead: '在全场观众面前被念到名字。',
      body: '音乐之夜中正式的致谢环节，同时出现在大屏幕与节庆的官方素材里。',
      journey: [
        { label: '写进流程', text: '致谢环节写进舞台脚本。' },
        { label: '在全场面前', text: '安排在观众最多的时刻。' },
        { label: '进入官方素材', text: '出现在节庆的照片与回顾影片中。' },
        { label: '回头衡量', text: '在场观众数、会后素材的观看量。' },
      ],
    },
    'naming-rights': {
      name: '体验冠名权',
      lead: '节庆的某个区域以品牌命名。',
      body: '参与程度最深的一种：品牌把名字挂在一个空间或一段体验上，出现在地图、日程以及节庆的所有传播中。',
      journey: [
        { label: '选定空间', text: '就区域与冠名范围达成一致。' },
        { label: '贯穿整段旅程', text: '区域名称出现在地图、日程与指示牌上。' },
        { label: '成为记忆的一部分', text: '来客用品牌的名字来称呼那个区域。' },
        { label: '回头衡量', text: '被提及次数、区域到访量、在节庆渠道上的覆盖。' },
      ],
    },
    megasale: {
      name: 'MegaSale & Happiness Deals',
      lead: '集中的优惠时段，多个品牌同时开跑。',
      body: '活动中的商业活动：限时优惠、多品牌礼盒，人流集中涌向销售区。',
      journey: [
        { label: '登记时段', text: '品牌自选自己的优惠时段。' },
        { label: '把人潮集中到一个节拍', text: '透过网页应用与区域广播发布。' },
        { label: '当场卖出', text: '交易在时段内完成。' },
        { label: '回头衡量', text: '各时段销售额、订单数、发出的礼盒数。' },
      ],
    },
    o2o: {
      name: '节庆现场取货',
      lead: '线上下单，在节庆的柜台取货。',
      body: '把品牌的线上渠道与现场人流接起来：来客先下单、到柜台取货，然后留下来多买一点。',
      journey: [
        { label: '开设取货柜台', text: '柜台设在 Mega Zone 内。' },
        { label: '来客主动前来', text: '已经下单的人有理由走进商业区。' },
        { label: '现场加购', text: '人已经站在柜台前时的加购率。' },
        { label: '回头衡量', text: '柜台取货订单数、加购订单金额。' },
      ],
    },
    csr: {
      name: 'CSR / ESG — Happiness Fund',
      lead: '节庆回馈社会的部分。',
      body: '与"幸福"主题相连的公益活动，参加者也一起投入——不是举着支票拍一张照。',
      journey: [
        { label: '选定项目', text: '就捐助内容与受益对象达成一致。' },
        { label: '来客一起做', text: '参加者在 CSR 区域直接出力。' },
        { label: '真实的故事', text: '会后内容基于真的做过的事，不摆拍。' },
        { label: '回头衡量', text: '捐助份数、参与人数、留存的记录素材。' },
      ],
    },
    content: {
      name: '内容与传播',
      lead: '品牌出现在内容里，而不只是出现在广告里。',
      body: '节庆的内容体系包含 WeMeet 播客、用户创作内容、直播与回顾影片——品牌可以参与其中任何一层。',
      journey: [
        { label: '选择形式', text: '播客、直播、短片，或用户创作内容。' },
        { label: '与节庆共同制作', text: '内容在活动的真实场景中拍摄。' },
        { label: '多渠道分发', text: '在节庆、品牌与创作者三方渠道上播出。' },
        { label: '回头衡量', text: '观看量、互动量、产出的内容数。' },
      ],
    },
  },

  impactModules: {
    'audience-reach': { label: '现场观众', unit: '人', description: '出现在节庆场地的人数' },
    'onsite-engagement': { label: '现场互动次数', unit: '人次', description: '参与品牌活动的人次' },
    'digital-reach': { label: '数字覆盖', unit: '次触达', description: '在节庆数字渠道上的触达' },
    touchpoints: { label: '品牌触点', unit: '个', description: '品牌在来客旅程中出现的位置数' },
    leads: { label: '潜在客户', unit: '次登记', description: '取得明确同意的登记' },
    sampling: { label: '已派样品', unit: '份', description: '直接交到来客手中的产品' },
    commerce: { label: '交易', unit: '笔', description: '节庆期间产生的交易' },
    'content-reach': { label: '产出内容', unit: '则', description: '来客与创作者发布的贴文、照片与影片' },
    media: { label: '媒体露出', unit: '篇', description: '新闻报道与媒体素材' },
    vip: { label: 'VIP 嘉宾', unit: '位', description: '在专属区域接待的嘉宾' },
    csr: { label: '社会贡献', unit: '份', description: 'CSR 项目的成果' },
  },

  partnerPortal: {
    why: '为什么是 ONE BEAT NIGHT',
    audience: '观众',
    ecosystem: '节庆生态',
    opportunities: '品牌机会',
    formats: '活动形式',
    media: '传播体系',
    commercial: '商业机会',
    hospitality: 'VIP 与贵宾接待',
    csr: 'CSR',
    measurement: '效果衡量',
    packages: '合作方式',
    contact: '联系我们',
  },

  partnerCategories: {
    fmcg: '快消品与饮料',
    beauty: '美妆与个人护理',
    tech: '科技与电信',
    finance: '金融与支付',
    fashion: '时尚与生活方式',
    travel: '旅游与出行',
    wellness: '健康与运动',
    pets: '宠物',
  },

  footer: {
    navLabel: '页脚导航',
    location: '地点',
    time: '时间',
    partnership: '合作',
    workingChannel: '工作对接渠道',
    library: '图库',
    imagesInKits: '张图片，分属 6 个 KIT',
    openArchitecture: '架构可扩展至',
    legal:
      '节庆的数字平台。日期、地点、票价、演出阵容以及任何数据，都要等主办方确认后才会出现在本站。',
  },

  videos: {
    heroFilm: 'ONE BEAT NIGHT 宣传片',
    dayFestival: 'Day Festival 的一天',
    concertTeaser: '音乐之夜先导片',
    sponsorFilm: '品牌机会介绍片',
    afterMovie: '回顾影片',
    reelDance: 'Reel — 音乐之夜的舞动瞬间',
    reelCreator: 'Reel — 节庆里的内容创作者',
    reelFlashmob: 'Reel — 开幕快闪',
  },
};
