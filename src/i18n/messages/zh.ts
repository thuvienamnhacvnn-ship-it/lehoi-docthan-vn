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

  values: {
    FREEDOM: '自由',
    'SELF-LOVE': '爱自己',
    COMMUNITY: '社群',
    CONNECTION: '连接',
    HAPPINESS: '幸福',
  },

  isNotA: ['相亲活动', '配对节目', '交友软件'],

  home: {
    heroLeadA: '一场关于自由、社群与音乐的节庆——在这里，单身不再等于一个人。三段旅程：',
    heroStageA: '遇见自己',
    heroStageB: '遇见彼此',
    heroStageC: '遇见幸福',

    movement: {
      kicker: '01 — 一场风潮',
      titleA: '单身',
      titleB: '不再等于',
      titleC: '一个人',
      lead:
        'ONE BEAT NIGHT 不是配对活动。这是为主动选择独自生活的人准备的节庆：自由、清楚自己，也愿意在合适的时候认识别人。',
      body: '感情当然可能在这里萌芽。但那不是目的，也不是衡量你这一天开不开心的尺子。',
      notA: '它不是：',
      captionMain: '一根红线连起相隔而立的两个人——项目最初的画面。',
      captionFreedom: '金鸟离开无限符号——自由',
      captionConnection: '两只戴着 LED 手环的手——连接',
    },

    audience: {
      kicker: '02 — 写给谁',
      titleA: '正在独立生活的',
      titleB: '越南',
      titleC: '成年人',
      lead: '三个年龄层，三种独自生活的方式——但有一点相同：没有人把单身当成需要修补的缺陷。',
      asideKicker: '三个年龄层',
      note: '年龄层取自项目的定位文件。预计观众规模：',
    },

    day: {
      kicker: '03 — 白天',
      lead: '音乐之夜开始之前，是一整天的节庆：跑步、聊天、一起吃饭、遛狗、看展、试新东西。横向拖动查看。',
    },

    mega: {
      kicker: '04 — 体验式商业',
      lead:
        '一个体验市集里的七大品类。来客真的动手试产品，品牌遇上对的人——大部分赞助活动也在这里发生。',
      heroTitle: '一个市集，七个世界',
      heroLead: '展位按品类分区，走完一圈就全都碰到了。',
      allTitle: '看整个市集',
      allLead: '七大品类、限时优惠、取货柜台',
      cta: '查看整个 Mega Zone',
    },

    community: {
      kicker: '05 — 社群',
      title: '这个节庆属于来到这里的人。',
      lead:
        '有自己的播客、有内容比赛、有从场内出发的直播、有活动后的回顾影片。节庆的故事，由参加的人继续讲下去。',
      ctaPeople: '社群群像',
      ctaContent: '内容体系',
    },

    night: {
      kicker: '06 — 高潮',
      lead:
        '天一黑，整个场地就换了颜色。现场乐队、压轴艺人、歌手 × DJ 的组合、舞台与观众之间的互动——然后是成千上万只 LED 手环在同一个节拍亮起的瞬间。',
      headliner: '压轴艺人',
      stage: '舞台',
      stageValue: '主舞台',
      duration: '时长',
      durationValue: '整个晚上',
      cta: '进入音乐之夜',
    },

    final: {
      kicker: '最后一句',
      lead:
        '这个节庆不会叫你去找一个人。它邀请你先遇见自己，再遇见别人，然后大家一起过一个值得记住的日子。',
      imagesNote: '张图片，分属六个 KIT，支撑着这个网站。',
    },
  },

  contentKinds: {
    podcast: '播客',
    ugc: '用户创作',
    media: '媒体',
    ooh: '户外',
    social: '社交平台',
    recap: '回顾',
  },

  pages: {
    gallery: {
      metaTitle: '图片库',
      metaDescription: '节庆完整的图片库，按六个 KIT 分类。',
      kicker: '影像',
      titleA: '节庆',
      titleB: '图片库',
      leadA: '张图片，分属六个 KIT —— 支撑这个网站的全部视觉内容。架构可扩展至',
      leadB: '张；',
      leadC: '个位置仍空着，等真实照片，不用别的图片凑数。',
    },
    account: {
      metaTitle: '账户',
      metaDescription: '电子票夹、我的日程与收藏——参加者账户架构。',
      kicker: '参加者',
      title: '你的账户',
      lead: '电子票夹、个人日程与收藏。现阶段一切都存在你自己的设备上——没有服务器账户，也没有任何数据被送出去。',
    },
    program: {
      metaTitle: '日程',
      metaDescription: '按时段、舞台、区域与活动查看完整节庆日程，并可加入个人日程。',
      kicker: '节目',
      titleA: '节庆',
      titleB: '日程',
      leadA: '个项目，分布在四个时段：上午、中午、黄金时刻与音乐之夜。加入"我的日程"，把打算去的都留住。',
      dateLabel: '举办日期：',
      doorsLabel: '开场时间：',
    },
    faq: {
      metaTitle: '常见问题',
      metaDescription: '关于 ONE BEAT NIGHT 的常见问题：节庆定位、门票、演出阵容、宠物、无障碍与安全。',
      kicker: '常见问题',
      title: '大家问得最多的问题',
      lead: '有些答案还很笼统，是因为主办方尚未公布——这个页面不会替他们猜。',
      moreTitle: '没找到你的问题？',
      moreLead: '参加指南里对交通、宠物、无障碍与安全有更详细的说明。',
      guideCta: '参加指南',
      contactCta: '联系我们',
    },
    map: {
      metaTitle: '节庆地图',
      metaDescription: '节庆的十个区域：Mega Zone、相遇站、宠物区、展览、美食、Color Run、舞台、VIP 与支援。',
      kicker: '定位',
      titleA: '节庆',
      titleB: '地图',
      lead: '十个区域，每个区域有自己的节奏。点一个区域，就能看到它的活动、服务与实景照片。',
      closeKicker: '看近一点',
      closeTitle: '从上往下看每个区域',
      opsKicker: '运营',
      opsTitle: '是谁在撑起这片场地',
      opsLead: '咨询、医疗、安全、无障碍通道与指挥中心——一切顺利时没人会注意到的那部分。',
    },
    artists: {
      metaTitle: '艺人与主持',
      metaDescription: 'One Beat Night 音乐之夜中的各个演出位置。艺人名单将在之后公布。',
      kicker: '演出阵容',
      titleA: '艺人',
      titleB: '与主持',
      lead:
        '艺人名单尚未公布。本页呈现的是流程中已经确定的演出位置——等主办方定下名字，这些位置就会换成真实的艺人。',
      moreKicker: '还有',
      moreTitle: '其他位置',
      moreBody: '音乐之夜的流程还留有嘉宾与特别节目的位置。主办方确认后会补充到这里。',
      whyKicker: '为什么还没有名字',
      whyTitle: '不给真实的舞台编造名字',
      whyLead:
        '本页只显示项目文件中已确认的内容。演出阵容、演出日期与票价，会在主办方公布的那一刻出现，不会更早。',
      pressCta: '订阅媒体资讯',
    },
    megaZone: {
      metaTitle: 'Mega Zone',
      metaDescription: '节庆的体验市集：七大品类、限时优惠，也是大部分品牌活动发生的地方。',
      kicker: '体验式商业',
      lead:
        '一个市集里的七大品类。来客是为了试新东西而来，品牌是为了遇上对的人而来——双方都不必隔着一张传单说话。',
      sectorsKicker: '七大品类',
      sectorsTitle: '走完一圈，就全都碰到了',
      boxTitle: '多品牌礼盒',
      boxNote: '把多个品牌的产品装进同一个盒子',
      momentsKicker: '交易是怎么发生的',
      momentsTitle: '一天里的四个买卖瞬间',
      moments: {
        sampling: {
          title: '先试，再决定',
          body: '来客就在柜台前尝一口、摸一下、用一次。真实反应发生在现场，而不是透过一支广告。',
        },
        'flash-sale': {
          title: '限时优惠时段',
          body: 'MegaSale 把人潮集中到一个节拍：多个品牌同时开放优惠，整个市集随之动起来。',
        },
        'happiness-box': {
          title: 'Happiness Deals',
          body: '集合多个品牌的礼盒——一个非常具体的理由，让来客把整个商业区走完。',
        },
        pickup: {
          title: '线上下单，节庆取货',
          body: '取货柜台把品牌的线上渠道，接到就站在眼前的人流上。',
        },
      },
      sectorsFitKicker: '适合的行业',
      sectorsFitTitle: '哪些品牌适合这个区域',
      sectorsFitLead: '这是对行业类别的描述，不是赞助商名单。节庆尚未公布任何合作伙伴。',
      cta: '查看品牌机会',
    },

    community: {
      metaTitle: '社群',
      metaDescription: '这个节庆属于谁：三个年龄层，八个切面，来自正在独立生活的越南成年人。',
      kicker: '人',
      titleA: '这个节庆',
      titleB: '属于谁',
      lead:
        '不是"还没找到人的人"。是正在独立生活的成年人——而且把这当成一种选择，不是一段等待期。',
      groupsKicker: '三个年龄层',
      groupsTitle: '同一座城市，三种一个人生活的方式',
      groupsLead: '年龄层取自项目的定位文件。',
      lifeKicker: '生活方式',
      lifeTitle: '独立生活的八个切面',
      lifeLead: '不是幻灯片上的人口画像。这些是节庆观众平常一周里真实发生的场景。',
      caption: '两只戴着 LED 手环、即将相碰的手——"连接"这个念头最初的画面。',
      safetyKicker: '原则',
      safetyTitle: '有框架的连接',
      safetyLead:
        '每一项见面活动都有引导者、有行为准则，也随时可以停下。没有人会被推进自己不想要的对话，也没有人会被晾在角落。',
      safetyRules: [
        '相遇站的活动全程都有主持人在场',
        '行为准则提前公布，现场再说明一次',
        '每个区域都有支援人员与求助点',
        '参加者自己决定投入到什么程度',
      ],
      scale: '预计观众规模：',
      guideCta: '参加指南',
    },

    visitorGuide: {
      metaTitle: '参加指南',
      metaDescription: '来 ONE BEAT NIGHT 之前要准备什么、怎么到、宠物规定、无障碍协助与安全。',
      kicker: '准备',
      title: '参加指南',
      lead: '出发前需要知道的一切：入场、场内动线、带宠物、无障碍协助与行为准则。',
      dateLabel: '日期：',
      doorsLabel: '开场：',
      venueLabel: '地点：',
      sections: {
        before: {
          title: '出发之前',
          items: [
            '电子票就在网页应用的票夹里——不需要打印。',
            '先把"我的日程"存好，知道自己想去哪，特别是需要报名的活动。',
            '穿得舒服些：白天的活动大多在户外。',
            '具体日期、开场时间与地点一旦公布，本页会立即更新。',
          ],
        },
        arrive: {
          title: '抵达与入场',
          items: [
            '在入口扫门票上的二维码完成入场。',
            '在入口领取 LED 手环——音乐之夜的同步灯光环节会用到。',
            'VIP 宾客与合作伙伴嘉宾有专用入口。',
            '咨询台就设在入口之后，有工作人员在。',
          ],
        },
        pets: {
          title: '带宠物',
          items: [
            '宠物区按体型和性格分开：小型犬、大型犬、猫、老年犬。',
            '参加期间，饲主需自行看顾自己的宠物。',
            '设有宠物饮水、遮阴区与拍照角。',
            '关于疫苗证明与品种的具体规定，将随活动资讯一并公布。',
          ],
        },
        access: {
          title: '无障碍',
          items: [
            '主要通道没有台阶，宽度足以通过轮椅与婴儿车。',
            '音乐之夜观演区设有需要协助的来客专属位置。',
            '每个区域都有支援人员，制服很好辨认。',
            '急救点与安静休息区在活动期间全程开放。',
          ],
        },
        respect: {
          title: '行为与安全',
          items: [
            '所有连接类活动都有引导者与明确的行为准则。',
            '你可以随时离开任何活动，不需要解释。',
            '若感觉不舒服，立刻告诉该区的工作人员——他们受过这方面的训练。',
            '未经对方同意，请不要拍摄他人。',
          ],
        },
      },
      servicesKicker: '现场服务',
      servicesTitle: '需要时谁来帮你',
    },

    contact: {
      metaTitle: '联系我们',
      metaDescription: '与 ONE BEAT NIGHT 主办方对接的渠道：品牌合作、媒体、参加者。',
      kicker: '联系',
      title: '工作对接渠道',
      lead: '正式联系方式会在主办方提供后补上。下方表单已经做好，随时可以接到收件系统。',
      channels: {
        partners: {
          label: '品牌合作',
          note: '赞助、品牌活动、企业贵宾接待、节庆内的商业合作。',
          cta: '查看合作机会',
        },
        press: {
          label: '媒体与传播',
          note: '媒体包、官方照片、采访、采访登记。',
          cta: '进入媒体中心',
        },
        visitors: {
          label: '参加者',
          note: '门票、日程、参加规定、无障碍协助。',
          cta: '查看常见问题',
        },
      },
      infoKicker: '活动资讯',
      cityLabel: '城市',
      venueLabel: '地点',
      addressLabel: '地址',
      dateLabel: '举办日期',
      organizerLabel: '主办单位',
    },

    experience: {
      metaTitle: 'Day Festival 日间节',
      metaDescription:
        '音乐之夜之前的一整天：快闪、Color Run、相遇站、Happy Lunch、宠物区、Mega Zone、视觉艺术。',
      kicker: '白天',
      lead:
        '天黑之前，是一整天的节庆。这也是大多数人记得最久的部分——不是因为舞台，而是因为遇见的人。',
      rhythmKicker: '一天的节奏',
      rhythmTitle: '上午 · 中午 · 黄金时刻 · 夜晚',
      rhythmLead: '场地一天里换四次光。这个页面也跟着同样的节奏走。',
      railKickerA: '项白天活动',
      railTitle: '横向拖动来看',
      filmKicker: '影片',
      filmTitle: 'Day Festival 的一天',
      stories: {
        flashmob: {
          title: '用同一个节拍开场',
          body: '节庆以中央广场的快闪开场。动作简单，提前十五分钟练习，谁都能加入——走完一轮，大家彼此也多认得几张脸。',
        },
        'color-run': {
          title: '不计时的跑',
          body: 'Color Run 经过三个色彩站再冲线。没有排行榜，只有一枚可以戴的徽章，和一身沾满颜色的衣服。',
        },
        'tram-gap': {
          title: '相遇站——陌生人一起坐下来的地方',
          body: 'Coffee Talk 给喜欢听的人，Coffee Circles 给想说的人，Match & Meet 给准备好一对一见面的人。每一项都有人带，随时可以停。',
        },
        pets: {
          title: '按性格分区的宠物区',
          body: '小型犬、大型犬、猫和老年犬各有自己的区域。有幼犬社会化时段，下午有小型游行，还有拍照角。',
        },
        'match-meet': {
          title: 'Match & Meet：一对一，有时段',
          body: '连接区里排着双人小桌，每轮几分钟，然后换到下一个人。有明确的行为准则，有主持人在，你随时可以停下来。',
        },
        'music-corner': {
          title: '白天里的木吉他角落',
          body: '一位艺人、一把琴、几十个人围坐。这是节庆里最小的一段音乐，却常常是大家记得最久的地方。',
        },
        art: {
          title: '穿过三层光',
          body: '取材自多肉植物生命力的大型视觉装置。单向通道，走完就懂了这个节庆的旅程，不需要谁来解释。',
        },
      },
    },

    oneBeatNight: {
      metaTitle: 'One Beat Night —— 音乐之夜',
      metaDescription:
        '节庆的高潮：现场乐队、压轴艺人、歌手 × DJ、Match Cam、Happiness Toast，以及成千上万只 LED 手环同时亮起的瞬间。',
      kicker: '高潮',
      lead: '天一黑，整个场地就换了颜色。白天发生的一切，会在这个晚上汇拢成一场。',
      headlinerLabel: '压轴艺人',
      dateLabel: '日期',
      stageLabel: '舞台',
      stageValue: '主舞台',
      scriptKicker: '流程',
      scriptTitle: '这一夜由五个位置撑起来',
      scriptLead: '艺人名单尚未公布。已经定下来的是这一夜的结构：谁在什么时候出现，为了什么。',
      interactKicker: '互动',
      interactTitle: '观众席也是舞台的一部分',
      interactLead: 'Match Cam、Happiness Toast，以及中间那些串场时刻——观众成为主角的片刻。',
      crewKicker: '幕后',
      crewTitle: '一场音乐之夜能跑起来，靠的是不上台的人',
      crewLead: '灯光、音响、影像、幕后调度——决定这一夜品质的，是这些手艺。',
      closingTitle: '夜的最后一段不是最吵的——是最安静的。',
      closingBody:
        '终章之后，灯光落下，音乐变小。留下的是刚刚一起度过一个晚上的成千上万人——其中很多人是一个人来的。',
      rolesCta: '各个演出位置',
      programCta: '音乐之夜日程',
    },

    tickets: {
      metaTitle: '门票与票种',
      metaDescription: 'ONE BEAT NIGHT 的五种票、各自的权益、购票流程，以及 LED 手环的使用旅程。',
      kicker: '参与',
      titleA: '门票',
      titleB: '与票种',
      lead:
        '各票种的权益已按体验固定。价格与开售日期会在主办方确认后公布——本页不显示任何未经证实的数字。',
      priceLabel: '票价',
      priceShort: '价格',
      onsaleLabel: '开售日期',
      tiersCountLabel: '票种数量',
      tiersCountA: '种票',
      chooseTitle: '选择你想怎么过这一天',
      chooseLead: '差别在于你站在哪里、被怎样招待、从哪个入口进场——不在于能看到什么。',
      proposedTitle: '由设计团队提出的票种，主办方尚未批准',
      compareKicker: '对照',
      compareTitle: '各票种分别含什么',
      compareCaption: '各票种权益对照表',
      benefitsCol: '权益',
      yes: '有',
      no: '无',
      flowKicker: '流程',
      flowTitle: '从选票到票夹',
      flowLead: '整个流程都已做好，只差付款那一步——网站尚未接入任何服务商，也不会假装已经接上。',
      techKicker: '活动技术',
      techTitle: '门票 → 入场 → 手环 → 体验',
      techLead:
        'LED 手环在入口领取，音乐之夜里随音乐发光。下面这些扩展能力是预留的架构——尚无任何系统被确认已经上线。',
      capabilitiesLabel: '扩展能力',
      notConfirmed: '尚未确认',
    },

    press: {
      metaTitle: '媒体中心',
      metaDescription: '媒体包、标识素材、节庆照片、活动资讯与媒体采访登记。',
      kicker: '媒体',
      titleA: '媒体',
      titleB: '中心',
      lead: '节庆提供给编辑部、电视台与内容创作者的官方素材。',
      downloadsKicker: '素材',
      downloadsTitle: '下载',
      inLibrary: '图片库中已有',
      preparing: '准备中',
      moreTitle: '需要别的素材？',
      moreBody: '按需拍摄、采访、数据——请透过媒体联络窗口提出。',
      downloadsNote:
        '打包文件（媒体包 PDF、压缩图片集）会在主办方确认最终版本后替换到这里。本页不会为尚不存在的文件生成下载链接。',
      brandKicker: '品牌识别',
      brandTitleA: '成套',
      brandTitleB: '示意图',
      brandLead: '标识、徽记、门票、手环、周边、应用与材质——高分辨率原图，画面上没有压字。',
      photosKicker: '照片',
      photosTitle: '官方照片',
      photosLead: '点击图片可看大图。照片上没有文字、没有年份、没有水印——所有信息都由网站呈现。',
      infoKicker: '资讯',
      infoTitle: '主办方',
      eventNameLabel: '活动名称',
      cityLabel: '城市',
      organizerLabel: '主办单位',
      dateLabel: '举办日期',
      venueLabel: '地点',
      pressContactLabel: '媒体联络',
      accredTitle: '采访登记',
      accredBody:
        '媒体工作区会在活动日期公布后开放登记。下方表单的结构已经做好；接收系统尚未接上。',
      accredItems: ['媒体 / 频道', '记者姓名与职务', '采访形式：摄影、影片、文字、直播', '携带设备'],
      accredBadge: '活动日期公布后开放登记',
    },

    partners: {
      metaTitle: '赞助与合作伙伴',
      metaDescription:
        'ONE BEAT NIGHT 的品牌生态：曝光、体验、商业、数据、贵宾接待、内容与 CSR 机会。',
      kicker: '合作伙伴',
      titleA: '这不是一个广告仓库。',
      titleB: '这是一个生态。',
      lead: '品牌买的不是一个挂 logo 的位置。品牌选择的，是在成千上万人的一天里扮演什么角色。',
      contactLine: '合作联络：',
      whyKicker: '01 — 为什么是 ONE BEAT NIGHT',
      whyTitle: '同一场活动里的九层价值',
      whyLead: '每一层都是品牌参与的不同方式。很少有活动九层俱全。',
      layers: {
        movement: { label: '一场文化风潮', note: '定位清楚：自由、爱自己、社群——不是相亲活动' },
        community: { label: '一个社群', note: '正在独立生活的越南成年人，三个年龄层' },
        day: { label: '一整天的日间节', note: '活动从早上一路延伸到黄金时刻' },
        music: { label: '一场音乐之夜', note: '大型舞台，专业灯光与音响' },
        media: { label: '一个传播平台', note: '播客、用户内容、直播、新闻、户外、回顾影片' },
        commerce: { label: '一个商业平台', note: 'Mega Zone、MegaSale、O2O、支付' },
        activation: { label: '一个品牌活动场域', note: '体验区就设在来客的动线上' },
        data: { label: '一层数据与互动', note: '主动同意的登记，逐步可衡量' },
        ip: { label: '一项长期资产', note: '架构是为多届设计的，不是一次性的' },
      },
      audienceKicker: '02 — 观众',
      audienceTitle: '会站在你展位前的是谁',
      audienceLead: '三个年龄层已写在定位文件里。具体规模尚未公布——本页不会替主办方猜。',
      scaleLabel: '预计规模：',
      reachLabel: '媒体覆盖：',
      ecosystemKicker: '03 — 节庆生态',
      ecosystemTitle: '十个区域，十种接触观众的方式',
      opportunitiesKicker: '04 — 品牌机会',
      opportunitiesTitleA: '种参与形式',
      opportunitiesLead: '选一种，看看品牌在每一步做什么：启动、留住、转化、衡量。',
      formatsKicker: '05 — 活动形式',
      formatsTitle: '八类价值',
      mediaKicker: '06 — 传播体系',
      mediaTitle: '品牌出现在内容里，而不只是出现在广告里',
      mediaLead: '八种内容形式贯穿节庆前、中、后——每一种都是品牌可以进入的位置。',
      commercialKicker: '07 — 商业机会',
      commercialTitle: '从体验到成交',
      commercialLead:
        'Mega Zone、MegaSale、Happiness Deals、O2O 取货柜台与现场支付——从注意到付款，一条不断的链。',
      hospitalityKicker: '08 — VIP 与贵宾接待',
      hospitalityTitle: '邀请你的合作伙伴，度过一个值得记住的夜晚',
      hospitalityLead:
        '专属接待区、桌边服务、正对舞台的视野、迎宾协助。合作关系在这里比在会议室里更容易谈成。',
      hospitalityTags: ['专用入口', '专属座位区', '桌边服务', '嘉宾接待协助'],
      csrKicker: '09 — CSR / ESG',
      csrTitle: 'Happiness Fund',
      csrLead:
        '节庆的公益部分有参加者直接投入——这样活动之后的故事，是建立在真的做过的事上，而不是举着支票拍一张照。',
      measureKicker: '10 — 效果衡量',
      measureTitle: '量得出来，才说得出口',
      measureLead:
        '十一个衡量模块已经做好。全部留空，因为节庆还没有可核实的数据——在数字成真之前，这里不会填进任何一个。',
      measureCaption: '分析团队在活动现场追踪运营数据——真实数据会从这里回来。',
      packagesKicker: '11 — 合作方式',
      packagesTitle: '尚无价目表',
      packagesLead:
        '主办方尚未公布任何赞助方案或投入级别。本页描述可以扮演的角色；具体方案按每个品牌单独设计。',
      contactKicker: '12 — 联系我们',
      contactTitle: 'ONE BEAT NIGHT 不是货架。这是一个让品牌走进来的生态。',
      contactLead: '告诉我们你的品牌想扮演什么角色，方案会按这个来做。',
      partnerEmailLabel: '合作邮箱：',
      organizerLabel: '主办单位：',
      hotlineLabel: '服务热线：',
      pressCta: '到媒体中心下载素材',
    },

    news: {
      metaTitle: '故事与内容',
      metaDescription: '节庆的内容体系：WeMeet 播客、用户创作内容、直播、新闻、户外与回顾影片。',
      kicker: '内容',
      title: '故事在节庆之前开始，在之后继续',
      lead: '节庆不只是一天。这里是这个项目的内容形式——还不是已经发布的贴文，因为传播还没启动。',
      reelsKicker: '竖版形式',
      reelsTitle: '来自节庆现场的 Reels',
      emptyKicker: '还没有发布内容',
      emptyLead:
        '节庆尚未启动传播，所以这里还没有新闻稿或文章。结构已经就位：真正的内容出现时，就会落在这里。',
      pressCta: '媒体中心',
    },
  },

  ui: {
    ticketFlow: {
      chooseTier: '选择票种',
      holderTitle: '取票人信息',
      holderName: '姓名',
      holderPlaceholder: '张三',
      holderNote: '这个试跑版本不会把数据送到任何地方——你填的内容只留在浏览器里。',
      promoTitle: '优惠码',
      promoLabel: '有的话请输入',
      promoPlaceholder: '例如：OBN2026',
      promoNote: '目前尚未公布任何优惠活动，因此系统不会校验优惠码。',
      summaryTitle: '确认订单',
      rowTier: '票种',
      rowHolder: '取票人',
      rowPromo: '优惠码',
      rowTotal: '合计',
      notEntered: '尚未填写',
      none: '无',
      paymentTitle: '付款',
      paymentBadge: '接口层尚未接上',
      paymentBody:
        '网站还没有接入任何支付服务商。架构已经切分好：主办方选定支付网关后，只要接到这一步，其余步骤保持不变。',
      issueDemo: '生成一张示范票，看看票夹',
      walletTitle: '票已进入票夹',
      walletDone: '示范票已生成。可以在右侧栏或"账户"页看到模拟二维码。',
      walletEmptyFlow: '本次会话还没有发出任何票。',
      back: '返回',
      next: '继续',
      wallet: '票夹',
      walletEmpty: '还没有票。把左边的流程走一遍，就能看到电子票在票夹里长什么样。',
      demoTicket: '示范票',
      mockCode: '模拟入场码',
      deleteTicket: '删除这张票',
      mockCodeAria: '模拟码',
    },

    leadForm: {
      errCompany: '请填写企业名称',
      errName: '请填写联系人姓名',
      errEmail: '邮箱格式不太对',
      doneBadge: '已在本次会话中记录',
      thanks: '谢谢',
      doneBodyA: '网站尚未接入主办方的收件系统，所以你刚填的内容',
      doneBodyStrong: '并没有被送到任何地方',
      doneBodyB: '。表单架构已经就绪：一旦有了收件地址，数据就会直接送过去。',
      again: '重新填写',
      title: '提交合作信息',
      lead: '告诉我们你的品牌对哪一部分有兴趣，节庆团队会据此做出相应方案。',
      company: '企业',
      contact: '联系人',
      phone: '电话',
      interest: '感兴趣的方向',
      choose: '—— 选择一种形式 ——',
      message: '内容',
      submit: '提交',
      demoNote: '表单目前是试跑状态：数据不会离开你的浏览器。',
    },

    impact: {
      whatKicker: '衡量什么',
      waiting: '等待真实数据',
      emptyNote:
        '所有栏位都留空，因为节庆还没有经过核实的数据。这套结构在活动后可以直接接上真实数据——这里没有任何数字是作为承诺给出的。',
      estimateKicker: '自行估算',
      yourNumbers: '你输入的数字',
      estimateLead:
        '输入你自己品牌的假设，看看这套衡量结构怎么运作。节庆尚未公布规模，所以系统不会自动填入任何数字。',
      inAudience: '你假设的到场人数',
      unitPeople: '人',
      visitRate: '到访你活动的比例',
      touchpointsInput: '动线中的触点数',
      unitPoints: '个',
      derivedVisits: '活动到访人次',
      derivedImpressions: '品牌被看见的次数',
      derivedLeads: '潜在客户区间',
      derivedTouchpoints: '人均触点',
    },

    account: {
      tabsAria: '账户分区',
      walletTab: '票夹',
      scheduleTab: '我的日程',
      favoritesTab: '收藏',
      walletEmptyTitle: '票夹是空的',
      walletEmptyBody: '门票尚未开售。你可以在门票页试走一遍购票流程，看看电子票长什么样。',
      walletEmptyCta: '前往门票页',
      demoTicket: '示范票',
      mockCode: '模拟入场码',
      deleteTicket: '删除票',
      scheduleEmptyTitle: '你的日程是空的',
      scheduleEmptyBody: '到日程页，在想去的活动上点加号。',
      scheduleEmptyCta: '打开日程',
      clashSuffix: '个项目彼此时间冲突。',
      minutes: '分钟',
      remove: '移除',
      clearSchedule: '清空整个日程',
      favEmptyTitle: '还没有收藏',
      favEmptyBody: '在图库里点图片上的爱心，就能把喜欢的画面留下来。',
      favEmptyCta: '打开图片库',
    },

    map: {
      allZones: '全部区域',
      zoomOut: '缩小',
      zoomIn: '放大',
      reset: '回到默认',
      zonesAria: '节庆的各个区域',
      schematicNote: '示意图呈现各区之间的关系。主办方提供实测平面图后，会替换这张示意图。',
      closeDetail: '关闭区域详情',
      servicesTitle: '本区服务',
      accessTag: '无障碍通道',
      activitiesTitle: '活动',
      pickKicker: '选一个区域',
      pickBody: '点地图上的彩色区块，就能看到该区的活动、服务与照片。',
    },

    sponsorTeaser: {
      kicker: '07 — 写给品牌',
      titleA: '不是',
      titleB: '一个用来',
      titleC: '挂 logo 的地方',
      lead:
        '这是一个品牌可以走进来的生态：一个体验区、一个商业时段、舞台流程里的一段，或者把名字挂在整个区域上。',
      countSuffix: '种参与形式，分成八类价值。',
      measureNote: '并附有衡量架构，活动后可直接接上真实数据。合作联络：',
      portalCta: '进入合作伙伴专区',
      ticketsTitleA: '三种',
      ticketsTitleB: '走进',
      ticketsTitleC: '节庆的方式',
      ticketsLead: '价格与开售日期之后公布。各票种的权益按体验固定，而不是按数字。',
      priceLabel: '价格',
      ticketsCta: '查看票种、票夹与 LED 手环',
    },

    rail: {
      filterAria: '按类别筛选活动',
      prev: '往回',
      next: '往前',
      listAria: '节庆的各项活动',
      needsSignup: '需要报名',
    },

    opportunity: {
      filterAria: '按类别筛选机会',
      listAria: '机会列表',
      stepsAria: '品牌活动的各个步骤',
      suggestedZone: '建议位置：',
      prevStep: '上一步',
      nextStep: '下一步',
    },

    schedule: {
      views: {
        day: '按时段',
        stage: '按舞台',
        zone: '按区域',
        activity: '按活动',
        now: '我的日程',
      },
      viewsAria: '日程的查看方式',
      allActivities: '全部活动',
      relativeTimes: '相对时段——正式时间尚未公布',
      clashA: '有',
      clashB: '个项目在你的日程里时间冲突——冲突项已在下方标出。',
      emptyMine: '你的日程是空的。在其他查看方式里，点任一项目的加号就能加进来。',
      addTo: '加入我的日程',
      removeFrom: '从我的日程移除',
    },

    video: {
      captionsLabel: '中文',
      unmute: '打开声音',
      mute: '静音',
      comingSoon: '影片稍后补上',
      srNote: '影片尚未提供，目前显示的是封面图。',
    },

    lightMoment: {
      kicker: '标志性瞬间',
      body:
        '成千上万只 LED 手环在同一个节拍亮起。名字里那个"同一个节拍"，在这一刻变成看得见的东西——整个观众席化为一道光浪。',
      pause: '暂停效果',
      play: '播放效果',
    },

    gallery: {
      kits: {
        'KIT-01': '品牌与主视觉',
        'KIT-02': 'Day Festival',
        'KIT-03': '音乐之夜',
        'KIT-04': '社群与传播',
        'KIT-05': '赞助与商业',
        'KIT-06': '旅程与运营',
      },
      all: '全部',
      shapes: { all: '所有尺寸', landscape: '横向', portrait: '竖向', square: '方形' },
      countSuffix: '张图片',
      open: '打开',
      like: '加入收藏',
      unlike: '取消收藏',
      close: '关闭',
    },

    misc: {
      unlike: '取消喜欢',
      clearAll: '全部清除',
      localOnly:
        '这个页面上的数据只留在你的浏览器里，不会送到任何服务器。等真正的账户系统做好，这一块会接上去。',
      estimateDisclaimer:
        '上面的结果，是用你刚输入的假设算出来的，不是主办方的预测，也不是节庆的承诺。',
      openMap: '打开互动地图',
      heroAlt: 'ONE BEAT NIGHT 音乐之夜：成千上万只 LED 手环汇成的光浪扫过观众席，远处舞台亮如白昼',
    },

    mediaWall: { close: '关闭图片' },

    partnerNav: { aria: '合作伙伴页目录' },

    journey: { stage: '第', progress: '旅程 · 第' },
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
