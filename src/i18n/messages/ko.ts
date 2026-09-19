import type { MessagesFor } from '../types';

/**
 * 한국어.
 *
 * 고유명사는 그대로 둡니다: ONE BEAT NIGHT, Mega Zone, Coffee Talk, Match & Meet,
 * Happy Lunch, Color Run, Happiness Toast. 'Trạm Gặp'은 지도의 영문명 Connection Zone에
 * 맞춰 '만남 스테이션'으로 옮겼습니다.
 */
export const ko: MessagesFor = {
  brand: {
    name: 'ONE BEAT NIGHT',
    subtitle: '싱글 페스티벌',
    slogan: '행복은 순간마다',
    city: '호치민시',
    country: '베트남',
    positioning: '자유, 연결, 자기 성장과 행복을 중요하게 여기는 현대 싱글을 위한 페스티벌입니다.',
  },

  common: {
    skipToContent: '본문으로 건너뛰기',
    home: '홈',
    tickets: '티켓',
    ticketsFull: '티켓과 등급',
    explore: '페스티벌 둘러보기',
    becomePartner: '파트너가 되기',
    viewProgram: '타임테이블 보기',
    festivalMap: '행사장 지도',
    continueToNight: '공연의 밤으로',
    viewTickets: '티켓 보기',
    scrollToEnter: '스크롤해서 들어가기',
    comingSoon: '곧 공개',
    proposed: '제안',
    mostChosen: '가장 많이 선택',
    all: '전체',
    items: '개',
    close: '닫기',
    open: '열기',
    menu: '메뉴',
    openMenu: '메뉴 열기',
    closeMenu: '메뉴 닫기',
    mainNav: '주요 내비게이션',
    fullNav: '전체 내비게이션',
    eventDate: '개최일',
    venue: '장소',
    lineup: '라인업',
    stage: '무대',
    language: '언어',
    changeLanguage: '언어 바꾸기',
    notConfirmedYet: '아직 확정되지 않음',
    minutesShort: '′',
    needsSignup: '사전 신청 필요',
    accessible: '무장애 동선 있음',
    sampleData: '예시 데이터',
    gallery: '이미지 라이브러리',
    menuDialog: '메인 메뉴',
  },

  nav: {
    experience: '체험',
    program: '타임테이블',
    map: '지도',
    artists: '아티스트',
    tickets: '티켓',
    partners: '파트너',
  },

  menu: {
    groups: {
      festival: '페스티벌',
      people: '사람',
      join: '참여하기',
      business: '기업',
    },
    items: {
      '/experience': { label: 'Day Festival', desc: '낮: 플래시몹, Color Run, 만남 스테이션, Mega Zone' },
      '/one-beat-night': { label: 'One Beat Night', desc: '공연의 밤 — 감정의 절정' },
      '/mega-zone': { label: 'Mega Zone', desc: '체험형 상업 구역' },
      '/program': { label: '타임테이블', desc: '시간대·무대·구역별로 보기' },
      '/map': { label: '행사장 지도', desc: '열 개 구역, 하나씩 확대해서 볼 수 있습니다' },
      '/artists': { label: '아티스트와 MC', desc: '공연의 밤을 구성하는 무대 역할들' },
      '/community': { label: '커뮤니티', desc: '이 페스티벌은 누구의 것인가' },
      '/news': { label: '이야기와 콘텐츠', desc: 'WeMeet 팟캐스트, UGC, 비하인드' },
      '/tickets': { label: '티켓과 등급', desc: '다섯 등급, 티켓 지갑, LED 팔찌' },
      '/account': { label: '계정', desc: '티켓 지갑, 내 일정, 즐겨찾기' },
      '/visitor-guide': { label: '참가 가이드', desc: '오시는 길, 접근성, 안전' },
      '/faq': { label: '자주 묻는 질문', desc: '가장 많이 들어오는 질문' },
      '/partners': { label: '스폰서와 파트너', desc: '브랜드가 들어올 수 있는 생태계' },
      '/press': { label: '프레스룸', desc: '미디어킷, 사진, 로고, 취재 등록' },
      '/contact': { label: '문의', desc: '업무 채널' },
    },
  },

  appTabs: {
    festival: '페스티벌',
    program: '일정',
    map: '지도',
    tickets: '티켓',
    account: '내 정보',
    nav: '앱 내비게이션 바',
  },

  install: {
    title: '페스티벌을 손안에',
    descAndroid: '홈 화면에 추가하세요. 빠르게 열리고, 신호가 없어도 타임테이블과 지도를 볼 수 있습니다.',
    descIos: '공유 버튼을 누른 뒤 "홈 화면에 추가"를 선택하면 앱처럼 열립니다.',
    cta: '설치',
    close: '설치 안내 닫기',
    dialogLabel: 'ONE BEAT NIGHT 앱 설치',
  },

  offline: {
    kicker: '연결 없음',
    title: '기기가 오프라인입니다',
    lead: '앞서 열어 본 페이지는 그대로 볼 수 있습니다. 연결이 돌아오면 페이지가 알아서 새 내용을 불러옵니다.',
    home: '홈으로',
    savedProgram: '저장된 타임테이블',
    metaTitle: '오프라인 상태',
    metaDescription: '이 기기는 연결이 없습니다. 이미 본 페이지는 계속 열립니다.',
  },

  notFound: {
    metaTitle: '페이지를 찾을 수 없습니다',
    metaDescription: '이 주소는 더 이상 없거나, 처음부터 없었습니다.',
    title: '여기에는 아무것도 없습니다',
    lead: '방금 여신 주소는 더 이상 없거나 처음부터 없었습니다. 대신 가볼 만한 곳들입니다.',
    home: '홈으로',
  },

  placeholders: {
    EVENT_DATE: { label: '개최일', note: '프로젝트 문서에서 아직 확정되지 않음' },
    EVENT_TIME: { label: '입장 시간', note: '미확정' },
    VENUE: { label: '장소', note: '도시 단위까지만 확정: 호치민시' },
    VENUE_ADDRESS: { label: '주소', note: '미확정' },
    HEADLINER: { label: '헤드라이너', note: '라인업 미공개' },
    TICKET_PRICE: { label: '티켓 가격', note: '가격표 미확정' },
    TICKET_ONSALE: { label: '판매 시작일', note: '미확정' },
    EXPECTED_ATTENDANCE: { label: '예상 규모', note: '확인되지 않은 출처의 수치는 쓰지 않습니다' },
    MEDIA_REACH: { label: '미디어 도달', note: '검증된 수치 없음' },
    ORGANIZER: { label: '주최', note: '법인 정보를 아직 받지 못함' },
    PRESS_EMAIL: { label: '보도 문의 메일', note: '미정' },
    PARTNER_EMAIL: { label: '제휴 문의 메일', note: '미정' },
    HOTLINE: { label: '핫라인', note: '미정' },
  },

  journey: {
    'gap-minh': {
      title: '나를 만나다',
      lead: '싱글은 더 이상 혼자가 아닙니다.',
      body:
        '첫 구간은 고요함을 위한 시간입니다. 나를 다시 보고, 지금 어디에 있는지, 무엇을 좋아하고 무엇이 필요한지 아는 것. ' +
        '준비되지 않은 사람을 연결로 떠미는 일은 없습니다.',
      keywords: ['내면', '자유', '자기 인식', '자신감'],
    },
    'gap-nhau': {
      title: '서로를 만나다',
      lead: '괜찮은 대화 하나면 시작하기에 충분합니다.',
      body:
        '가운데 구간은 커뮤니티입니다. 커피를 둘러싼 동그란 자리, 함께 쓰는 식탁, 진행자가 있는 만남. ' +
        '연결은 존중받는 안전한 틀 안에서 일어납니다.',
      keywords: ['커뮤니티', '대화', '함께한 경험', '존중하는 연결'],
    },
    'gap-hanh-phuc': {
      title: '행복을 만나다',
      lead: '행복은 순간마다.',
      body:
        '마지막 구간은 축제입니다. 음악, 빛, 그리고 같은 비트 위의 수천 명. ' +
        '누군가가 누군가를 찾아서가 아니라, 모두가 기억할 만한 하룻밤을 함께했기 때문입니다.',
      keywords: ['축제', '음악', '우정', '함께 만든 에너지'],
    },
  },

  zones: {
    'main-plaza': {
      name: '중앙 광장',
      short: '개막, 플래시몹, 만나는 지점',
      description:
        '페스티벌이 시작되는 곳입니다. 아침 플래시몹이 열리고, 일행이 모이는 지점이며, 다른 모든 구역으로 이어지는 축이기도 합니다.',
      services: ['만나는 지점', '작은 무대', '식수'],
    },
    'mega-zone': {
      name: 'Mega Zone',
      short: '7개 업종의 체험형 마켓',
      description:
        '페스티벌에서 가장 큰 체험형 상업 구역입니다. 패션, 뷰티, 테크, 웰니스, 푸드, 여행, AI와 스타트업.',
      services: ['브랜드 부스', '시간 한정 혜택', 'O2O 수령 창구'],
    },
    'tram-gap': {
      name: '만남 스테이션',
      short: 'Coffee Talk, Coffee Circles, Match & Meet',
      description:
        '진행자가 이끄는 대화와 연결을 위한 구역입니다. 이곳의 모든 활동에는 행동 규칙이 있고 지원 인력이 함께합니다.',
      services: ['진행자', '조용한 구역', '현장 신청'],
    },
    pets: {
      name: '반려동물 구역',
      short: '소형견, 대형견, 고양이, 노령견',
      description:
        '그늘이 있는 구역을 크기와 성향에 따라 나눴습니다. 강아지 사회화 시간, 고양이 코너, 작은 퍼레이드가 있습니다.',
      services: ['반려동물 음수대', '분리된 구역', '사진 촬영 공간'],
    },
    'visual-art': {
      name: '시각예술 구역',
      short: '아트 인스톨레이션 + 창작 공간',
      description:
        '세 겹의 빛을 지나는 일방향 통로, 그 뒤로 갤러리와 작가가 현장에서 작업하는 코너가 이어집니다.',
      services: ['일방향 동선', '안내 인력', '사진 구역'],
    },
    food: {
      name: '푸드 구역',
      short: '함께 쓰는 식탁, 음식 부스, 좌석',
      description: '여러 음식 부스와 길게 이어진 공용 식탁 — Happy Lunch가 열리는 곳입니다.',
      services: ['공용 식탁', '무료 식수', '지붕 있는 좌석'],
    },
    'color-run': {
      name: 'Color Run 코스',
      short: '세 개의 컬러 스테이션을 지나는 코스',
      description: '행사장을 한 바퀴 도는 짧은 코스입니다. 세 개의 컬러 스테이션을 지나 결승선에서 배지를 받습니다.',
      services: ['급수대', '컬러 스테이션', '결승 구역'],
    },
    concert: {
      name: '메인 스테이지',
      short: 'One Beat Night — 공연의 밤',
      description:
        '전문 조명과 음향을 갖춘 대형 무대입니다. 낮에는 짧은 공연에, 밤에는 공연 본편에 쓰입니다.',
      services: ['관객석', 'LED 팔찌', '관람 지원 구역'],
    },
    vip: {
      name: 'VIP 구역',
      short: '전용 입구, 좌석, 테이블 서비스',
      description: 'VIP 손님과 파트너 초청객을 위한 공간입니다. 빠른 입장, 라운지, 전용 서비스.',
      services: ['빠른 입장', '테이블 서비스', '무대가 보이는 자리'],
    },
    support: {
      name: '지원과 안전',
      short: '안내, 의료, 보안, 접근성',
      description:
        '안내 데스크, 응급처치소, 안전 인력, 턱 없는 통로. 행사장 여러 곳에 배치되어 있습니다.',
      services: ['안내 데스크', '응급처치', '분실물', '접근성 지원'],
    },
  },

  phases: {
    morning: '오전',
    midday: '낮',
    golden: '골든아워',
    night: '공연의 밤',
  },

  categories: {
    music: '음악',
    community: '커뮤니티',
    talk: '토크',
    pets: '반려동물',
    food: '푸드',
    art: '예술',
    wellness: '웰니스',
    commerce: '쇼핑',
    vip: 'VIP',
  },

  activities: {
    flashmob: {
      name: '개막 플래시몹',
      summary: '수백 명이 그날의 첫 비트를 함께 밟습니다.',
      detail:
        '중앙 광장에서 시작하는 개막 군무입니다. 누구나 참여할 수 있습니다. 동작은 단순하고, 15분 전에 연습하며, ' +
        '전 과정이 페스티벌의 홍보 자료로 촬영됩니다.',
    },
    'color-run': {
      name: 'Color Run',
      summary: '세 개의 체험 구역을 가로지르는 컬러런.',
      detail:
        '짧고 기록도 재지 않는 코스로, 세 개의 컬러 스테이션을 지납니다. 결승선을 넘으면 착용할 수 있는 배지를 받습니다. 겨루기 위한 것이 아니라 기억하기 위한 것입니다.',
    },
    'coffee-talk': {
      name: 'Coffee Talk',
      summary: '"혼자 살아도 외롭지 않게"에 대한 짧은 토크.',
      detail:
        '야외의 작은 무대, 가까이 앉은 관객, 회차마다 하나의 주제. 경제적 자립, 정신 건강, 나와 친구가 되는 법. ' +
        '질의응답은 현장에서, 연출은 없습니다.',
    },
    'coffee-circles': {
      name: 'Coffee Circles',
      summary: '8~10명이 한 원, 진행자 한 명, 아무도 소외되지 않습니다.',
      detail:
        '모든 원에 진행자가 있어 대화가 침묵으로 떨어지지 않습니다. 회차마다 원을 바꿔 새로운 그룹을 만납니다.',
    },
    'match-meet': {
      name: 'Match & Meet',
      summary: '시간이 정해져 있고, 진행자가 있고, 언제든 멈출 수 있는 일대일 만남.',
      detail:
        '연결 구역에 2인용 테이블을 놓고 몇 분마다 자리를 바꿉니다. 행동 규칙이 분명하고 지원 인력이 ' +
        '구역 안에 계속 있습니다. 존중의 틀 안에서 만나는 자리이지, 커플 매칭 행사가 아닙니다.',
    },
    'happy-lunch': {
      name: 'Happy Lunch',
      summary: '함께 쓰는 식탁 — 말을 걸기에 가장 쉬운 방법.',
      detail: '긴 테이블, 나눠 먹는 음식, 나란히 앉는 낯선 사람들. 혼자 먹어야 하는 사람은 없습니다.',
    },
    'pets-meetup': {
      name: 'Pets Meetup',
      summary: '반려동물 구역은 그룹으로 나뉩니다: 소형견, 대형견, 고양이, 노령견.',
      detail:
        '그늘이 있는 공간을 크기와 성향에 따라 나눠 동물과 사람 모두 안전하게 했습니다. ' +
        '강아지 사회화 시간과 고양이와 사는 분들을 위한 코너도 있습니다.',
    },
    'walk-and-wag': {
      name: 'Walk & Wag Parade',
      summary: '반려인들의 작은 퍼레이드.',
      detail: '양쪽에 구경하는 사람들이 있는 내부 길을 한 바퀴. 속도는 반려동물의 안전에 맞춥니다.',
    },
    'mega-zone': {
      name: 'Mega Zone',
      summary: '체험형 마켓: 패션, 뷰티, 테크, 웰니스, 푸드, 여행, AI와 스타트업.',
      detail:
        '부스는 업종별로 묶이고, 방문객은 전단을 받는 대신 실제로 제품을 써봅니다. ' +
        '파트너 브랜드가 자사의 체험 기획을 두는 곳이기도 합니다.',
    },
    'happiness-deals': {
      name: 'MegaSale & Happiness Deals',
      summary: '상업 구역에 집중되는 시간 한정 혜택.',
      detail: '브랜드들이 시간대를 정해 혜택을 열고, 방문객은 여러 브랜드를 모은 선물 상자를 받습니다.',
    },
    'visual-art': {
      name: '시각 퍼포먼스 공간',
      summary: '다육식물의 생명력에서 출발한 대형 아트 인스톨레이션.',
      detail:
        '세 겹의 빛을 지나는 일방향 통로입니다. 끝까지 걸으면 누가 설명하지 않아도 이 페스티벌의 여정을 알게 됩니다.',
    },
    'creative-gallery': {
      name: '창작 공간',
      summary: '회화, 사진, 혼합 매체 전시와 어쿠스틱 코너.',
      detail:
        '작가가 현장에서 작업하므로 관객은 과정 전체를 볼 수 있고, 작품의 공동 창작 부분에 참여할 수도 있습니다.',
    },
    'live-band': {
      name: '라이브 밴드',
      summary: '라이브 밴드가 공연의 밤을 엽니다.',
      detail: '밤의 문을 여는 라이브 무대. 조명이 마젠타, 블루, 골드로 넘어가기 시작합니다.',
    },
    'match-cam': {
      name: 'Match Cam',
      summary: '카메라가 객석을 훑고, 진짜 반응이 대형 화면에 뜹니다.',
      detail: '공연 중간의 가벼운 교감 시간 — 뽑힌 사람의 반응은 진짜이고, 객석 전체가 같이 웃습니다.',
    },
    'happiness-toast': {
      name: 'Happiness Toast',
      summary: '페스티벌 전체가 밤에 한 번 다 함께 잔을 듭니다.',
      detail: '짧은 쉼표. 조명이 내려가고 음악이 작아지면, 모두가 "나에게 잘해준 한 해"를 위해 잔을 듭니다.',
    },
    headliner: {
      name: '헤드라이너',
      summary: '그날 밤 감정이 가장 높이 올라가는 무대.',
      detail: '무대가 넓어지고 조명이 최대로 움직이며, 객석은 흐르는 하나의 빛 띠가 됩니다.',
    },
    'singer-dj': {
      name: '가수 × DJ',
      summary: '크로스오버 형식: 일렉트로닉 셋 위에 얹히는 보컬.',
      detail: '라이브에서 댄스 플로어로 넘어가는 지점. 두 아티스트가 무대를 나눠 씁니다.',
    },
    'light-moment': {
      name: 'One Beat Light Moment',
      summary: '수천 개의 LED 팔찌가 같은 비트에 켜집니다.',
      detail:
        '이 페스티벌을 상징하는 순간입니다. 객석 전체가 음악을 따라 달리는 빛의 물결이 됩니다. ' +
        '이름 속의 "하나의 비트"가 눈에 보이는 것이 되는 순간입니다.',
    },
    finale: {
      name: '피날레',
      summary: '모든 아티스트가 무대로 돌아옵니다.',
      detail: '마무리. 불꽃, 컨페티, 그리고 그날 밤의 마지막 한마디 — 또 만나요.',
    },
    'vip-hospitality': {
      name: 'VIP & 호스피탈리티',
      summary: '전용 입구, 무대 정면 좌석, 테이블 서비스.',
      detail: 'VIP 손님과 파트너 초청객을 위해: 빠른 입장, 전용 라운지, 테이블로 오는 음식과 음료.',
    },
    wellness: {
      name: '웰니스 & 회복 코너',
      summary: '긴 하루 중간에 숨 돌릴 자리.',
      detail: '상업 구역 안의 짧은 이완 체험: 스트레칭, 기본 케어, 물, 그리고 조용히 앉을 자리.',
    },
    'pet-photo': {
      name: 'Pet Photo Booth',
      summary: '페스티벌의 네온을 배경으로 반려동물과 사진을.',
      detail: '페스티벌 아이덴티티에 맞춰 만든 촬영 세트. 사진은 곧바로 휴대폰으로 갑니다.',
    },
  },

  megaZoneCategories: {
    'fashion-beauty': { name: '패션 & 뷰티', note: '제품 체험, 액세서리, 카운터 상담' },
    technology: { name: '테크', note: '새 기기, 인터랙티브 화면, 직접 사용해 보기' },
    wellness: { name: '웰니스 & 회복', note: '짧은 이완 체험' },
    food: { name: '푸드 & 생활소비재', note: '시식, 카운터 앞의 솔직한 반응' },
    travel: { name: '여행', note: '목적지를 체험하는 부스' },
    'ai-startup': { name: 'AI & 스타트업', note: '신제품 구역, 인터랙티브 설치' },
    deals: { name: 'Happiness Deals', note: '시간 한정 혜택, 여러 브랜드 선물 상자' },
  },

  stages: {
    'main-stage': '메인 스테이지',
    'talk-stage': '만남 스테이션 무대',
    plaza: '광장',
    mega: 'Mega Zone',
    'pet-zone': '반려동물 구역',
    'art-zone': '전시 구역',
    'food-court': '푸드 구역',
    'vip-lounge': 'VIP 구역',
  },

  ticketTiers: {
    standard: {
      name: '스탠다드 티켓',
      lead: '낮의 페스티벌과 밤의 공연 모두 입장할 수 있습니다.',
      benefits: [
        '낮의 모든 구역: 만남 스테이션, Mega Zone, 반려동물 구역, 전시',
        'One Beat Night 공연 관객석',
        '동기화 조명 연출에 참여하는 LED 팔찌',
        'QR 코드가 있는 전자 티켓 (앱의 티켓 지갑에 보관)',
      ],
    },
    day: {
      name: 'Day Festival 티켓',
      lead: '낮 프로그램만. 공연이 시작되기 전에 돌아갑니다.',
      benefits: [
        '낮의 모든 구역: 만남 스테이션, Mega Zone, 반려동물 구역, 전시',
        '커뮤니티 프로그램: 플래시몹, Color Run, Coffee Circles',
        'QR 코드가 있는 전자 티켓 (앱의 티켓 지갑에 보관)',
      ],
    },
    vip: {
      name: 'VIP 티켓',
      lead: '전용 입구, 무대 정면 좌석, 테이블 서비스.',
      benefits: [
        '스탠다드 티켓의 모든 혜택',
        '전용 통로를 통한 빠른 입장',
        '좌석과 무대 시야가 있는 VIP 구역',
        '테이블로 제공되는 음식과 음료',
        '예약이 필요한 프로그램의 우선 신청',
      ],
    },
    group: {
      name: '단체 티켓',
      lead: '4인 이상, 한 번에 함께 입장.',
      benefits: [
        '스탠다드 티켓의 모든 혜택',
        '단체 전원이 한 번의 스캔으로 입장',
        '신청이 필요한 프로그램에서 옆자리 확보',
      ],
    },
    hospitality: {
      name: '기업 호스피탈리티',
      lead: '파트너와 고객을 초대하는 기업을 위한 티켓.',
      benefits: [
        '신청 인원에 맞춘 전용 접객 구역',
        '저녁 내내 이어지는 서비스',
        '영접과 초청객 동선 운영 지원',
        '페스티벌 내 브랜드 기획과 함께 구성 가능',
      ],
    },
  },

  checkout: {
    select: { label: '등급 선택', note: '등급과 수량을 고르세요' },
    details: { label: '구매자 정보', note: '이름, 이메일, 전화번호' },
    promo: { label: '프로모션 코드', note: '있으면 여기에서 적용' },
    summary: { label: '주문 확인', note: '결제 전에 다시 확인' },
    payment: { label: '결제', note: '연동 계층은 준비됨 — 아직 연결된 사업자 없음' },
    wallet: { label: '티켓 받기', note: '티켓 지갑으로 들어가며, 입장용 QR 코드가 붙습니다' },
  },

  wristband: {
    ticket: { label: '티켓', note: '앱 지갑 안의 전자 티켓' },
    checkin: { label: '입장', note: '게이트에서 코드 스캔' },
    wristbandStep: { label: '팔찌', note: '게이트에서 LED 팔찌 수령' },
    experience: { label: '체험', note: '공연 중 팔찌가 음악에 맞춰 빛납니다' },
    interaction: { label: '인터랙션', note: '동기화 조명 연출에 참여' },
    commerce: { label: '쇼핑', note: '행사장 각 매대에서 결제' },
    journey: { label: '나만의 여정', note: '내 일정과, 고른 프로그램에 따른 추천' },
  },

  wristbandCapabilities: {
    rfid: 'RFID',
    nfc: 'NFC',
    cashless: '비현금 결제',
    access: '출입 통제',
    tracking: '브랜드 기획 성과 측정',
  },

  lineup: {
    'live-band': {
      role: '라이브 밴드',
      description: '무대가 네온으로 바뀌기 전, 라이브 무대로 밤의 문을 엽니다.',
    },
    headliner: {
      role: '헤드라이너',
      description: '절정의 무대. 확장된 스테이지 위에서 조명이 최대로 움직입니다.',
    },
    'singer-dj': {
      role: '가수 × DJ',
      description: '보컬과 일렉트로닉 셋을 결합한 형식 — 라이브와 댄스 플로어를 잇는 경첩입니다.',
    },
    dj: {
      role: 'DJ',
      description: '밤의 마지막 구간. 음악은 끊기지 않고, 객석은 하나의 덩어리로 움직입니다.',
    },
    host: {
      role: 'MC',
      description: '밤 전체의 호흡을 잡고 Match Cam, Happiness Toast 같은 교감 순서를 이끕니다.',
    },
  },

  production: {
    lighting: { label: '조명 조작', note: '무대를 정면으로 보는 조작석' },
    sound: { label: '음향', note: '음향 엔지니어가 밤새 상주' },
    camera: { label: '영상 제작', note: '스크린과 기록용 대형 카메라' },
    backstage: { label: '백스테이지', note: '대기 구역과 무대로 가는 동선' },
    'stage-entry': { label: '무대 진입로', note: '빛으로 이어지는 어두운 복도' },
    'stage-side': { label: '무대 옆', note: '무대와 객석이 동시에 보이는 자리' },
  },

  audience: {
    '21-25': {
      title: '자기 인생을 세우는 중',
      lead: '막 졸업했거나 이제 막 일을 시작했고, 창의적인 공간을 좋아하며, 혼자 가도 괜찮습니다.',
      traits: ['배우면서 일하기', '카페가 두 번째 사무실', '소셜미디어 위에서 살기'],
    },
    '26-35': {
      title: '독립적이고, 원하는 바가 분명한',
      lead: '직업도 수입도 있고, 친구도 경험도 적당히 고르지 않습니다.',
      traits: ['경제적으로 자립', '경험을 우선', '품질에 까다로움'],
    },
    '36-52': {
      title: '차분하고 열려 있는',
      lead: '혼자 사는 것은 선택이지, 기다리는 시기가 아닙니다.',
      traits: ['취향이 분명함', '존중을 중요하게 여김', '새로운 사람을 만날 준비가 됨'],
    },
  },

  lifestyle: {
    'solo-travel': { label: '혼자 떠나기', note: '누가 부르기를 기다리지 않는 여행' },
    fitness: { label: '혼자 운동하기', note: '내 몸에 대한 규율' },
    wellness: { label: '나를 돌보기', note: '정신 건강은 진지한 일' },
    cafe: { label: '혼자 마시는 커피', note: '조용하지만 외롭지 않게' },
    freelance: { label: '프리랜스로 일하기', note: '스스로 짜고, 스스로 책임지기' },
    'single-parent': { label: '혼자 아이 키우기', note: '즐길 자격은 그대로 있습니다' },
    'pet-parent': { label: '반려동물과 살기', note: '모양이 다른 가족' },
    healing: { label: '치유', note: '말로 꺼내면 이미 조금 가벼워집니다' },
    'confident-woman': { label: '혼자여도 당당하게', note: '즐기기 위해 누구의 허락도 기다리지 않기' },
    'confident-man': { label: '주도적으로 살기', note: '원하는 걸 알고, 서두르지 않기' },
  },

  contentFormats: {
    'wemeet-podcast': {
      name: 'WeMeet 팟캐스트',
      lead: '"제대로 싱글로 살기"에 대한 대화 프로그램.',
      body: '매회 한 명의 게스트가 진짜 이야기를 합니다. 자립, 이별, 다시 시작하기, 반려동물과 살기, 혼자 여행하기. 스튜디오에서 촬영해 페스티벌 전후로 공개합니다.',
    },
    'podcast-story': {
      name: 'Podcast Story',
      lead: '짧은 버전 — 하나의 이야기, 한 사람.',
      body: '소셜용 간결한 형식: 게스트 한 명, 경험 하나를 세로형 클립으로 자릅니다.',
    },
    ugc: {
      name: '참가자가 만드는 콘텐츠',
      lead: '참가자들이야말로 가장 인원이 많은 콘텐츠 팀입니다.',
      body: '행사장 곳곳은 잘 찍히도록 설계됐습니다. 콘텐츠 공모와, 각자 자기 게시물을 만들 템플릿도 준비합니다.',
    },
    livestream: {
      name: '라이브 방송 & KOL',
      lead: '페스티벌 안에서 생중계.',
      body: '스튜디오를 행사장 안에 두고, 진행자와 게스트가 진짜 인파 속에서 이야기합니다.',
    },
    press: {
      name: '언론',
      lead: '발표 기자회견과 전용 취재 구역.',
      body: '기자용 구역, 공식 사진, 그리고 편집국에서 내려받을 수 있는 자료를 마련합니다.',
    },
    ooh: {
      name: '옥외 매체',
      lead: '페스티벌은 열리기 전부터 도시에 나타납니다.',
      body: '대형 스크린과 옥외 게시물이 페스티벌의 아이덴티티를 거리로 가지고 나갑니다.',
    },
    social: {
      name: '소셜 콘텐츠 제작',
      lead: '캠페인 기간 내내 돌아가는 콘텐츠 팀.',
      body: '사진, 짧은 영상, 카운트다운 콘텐츠를 캠페인 일정에 맞춰 만듭니다.',
    },
    recap: {
      name: '리캡 영상',
      lead: '페스티벌이 끝나도 이야기는 이어집니다.',
      body: '파트너, 언론, 커뮤니티를 위한 리캡 영상과 행사 후 자료 모음.',
    },
  },

  operations: {
    info: { label: '안내 데스크', note: '무엇을 물어도 답해 줄 사람이 있습니다' },
    safety: { label: '안전 인력', note: '모든 구역에 있고, 알아보기 쉽습니다' },
    'first-aid': { label: '응급처치소', note: '필요할 때의 의료 지원과 쉴 곳' },
    accessible: { label: '무장애 동선', note: '넓고, 턱도 장애물도 없습니다' },
    control: { label: '운영 본부', note: '행사 내내 행사장 전체를 지켜봅니다' },
    briefing: { label: '팀 브리핑', note: '개장 전에 모든 인력이 안내를 받습니다' },
  },

  faqs: [
    {
      q: '이건 소개팅 행사인가요?',
      a: '아닙니다. ONE BEAT NIGHT은 자유, 커뮤니티, 음악에 관한 페스티벌입니다. 존중의 틀 안에서 서로 알아가도록 돕는 프로그램은 있지만, 커플 맺기가 이 페스티벌의 목적은 아닙니다.',
    },
    {
      q: '연인이 있는 사람도 올 수 있나요?',
      a: '가능합니다. 싱글을 향한 페스티벌이지만 누구의 연애 상태도 확인하지 않습니다. 즐거운 하루와 공연을 원하는 분이라면 누구나 오실 수 있습니다.',
    },
    {
      q: '언제, 어디에서 열리나요?',
      a: '페스티벌은 호치민시에서 열립니다. 구체적인 날짜, 시간, 장소는 주최 측이 확정하는 대로 공개합니다 — 확정되면 이 페이지가 바로 갱신됩니다.',
    },
    {
      q: '티켓은 얼마인가요?',
      a: '가격은 아직 공개되지 않았습니다. 등급과 각 등급의 혜택은 티켓 페이지에 이미 있습니다. 가격과 판매 시작일은 이후에 추가됩니다.',
    },
    {
      q: '라인업에는 누가 있나요?',
      a: '아티스트 명단은 아직 공개되지 않았습니다. 아티스트 페이지에는 현재 공연 구성 안의 무대 역할들을 소개하고 있습니다.',
    },
    {
      q: '혼자 가도 괜찮을까요?',
      a: '이 페스티벌은 혼자 오는 사람을 위해 설계됐습니다. 진행자가 있는 프로그램, 대화의 원, 함께 쓰는 식탁이 있습니다. 구석에 혼자 남는 사람은 없습니다.',
    },
    {
      q: '반려동물을 데려가도 되나요?',
      a: '크기와 성향에 따라 나눈 전용 반려동물 구역이 있습니다. 대상 종류나 예방접종 증명에 대한 구체적인 규정은 참가 가이드에서 안내합니다.',
    },
    {
      q: '장애가 있는 분은 어떻게 참여하나요?',
      a: '행사장에는 턱 없는 동선, 관람 지원 구역, 지원 인력이 있습니다. 자세한 내용은 참가 가이드의 접근성 항목에 있습니다.',
    },
    {
      q: 'LED 팔찌는 무엇인가요?',
      a: '게이트에서 받는 빛나는 팔찌입니다. 공연의 One Beat Light Moment 순서에서 음악에 맞춰 빛납니다.',
    },
    {
      q: '기업이 제휴하려면 어디로 연락하나요?',
      a: '먼저 파트너 페이지에서 참여할 수 있는 형태를 확인하신 뒤, 해당 페이지 아래의 양식으로 정보를 보내주세요.',
    },
  ],

  brandMockups: {
    logo: { label: '전체 로고', note: '확정본, 글자 포함, 검은 배경' },
    emblem: { label: '엠블럼', note: '엠블럼만, 배경 투명' },
    ticket: { label: '티켓', note: '홀로그램 티켓, 등급을 넣을 여백 있음' },
    wristband: { label: 'LED 팔찌', note: '검은 배경 제품 사진' },
    merch: { label: '굿즈', note: '엠블럼이 들어간 티셔츠, 모자, 가방, 보조배터리' },
    app: { label: '앱', note: '화면을 합성할 빈 휴대폰 프레임' },
    texture: { label: '골드 질감', note: 'VIP 테두리와 글자에 쓰는 소재' },
    entrance: { label: '입장 게이트', note: '무한대 게이트. 기사 커버 이미지용' },
  },

  pressDownloads: {
    'logo-pack': { label: '로고 & 엠블럼 모음', note: '배경 투명 PNG와 전체 버전' },
    'key-visual': { label: '키 비주얼', note: '페스티벌의 대표 이미지' },
    'photo-set': { label: '페스티벌 사진 모음', note: '6개 KIT별로 정리한 이미지 라이브러리' },
    'media-kit': { label: '미디어킷 (PDF)', note: '준비 중' },
    'fact-sheet': { label: '행사 정보 시트', note: '주최 측의 날짜·장소·규모 확정 대기 중' },
  },

  opportunityCategories: {
    visibility: '노출',
    experience: '체험',
    engagement: '교감',
    commerce: '상업',
    data: '데이터',
    hospitality: '접객',
    content: '콘텐츠',
    impact: '사회 기여',
  },

  opportunities: {
    'central-activation': {
      name: '중심 기획 공간',
      lead: '페스티벌의 주 동선 위에 놓는 체험 구역.',
      body:
        '부스가 늘어선 줄 안의 하나가 아닙니다. 방문객 여정의 한 정거장입니다. 고유한 구조가 있고, ' +
        '들어갈 이유가 있고, 가지고 갈 것이 있습니다.',
      journey: [
        { label: '목적지를 세우기', text: '브랜드 아이덴티티로 지은 체험 구역을 사람이 지나는 축 위에 둡니다.' },
        { label: '머무르게 하기', text: '전단을 돌리는 대신 브랜드 인력이 체험을 안내합니다.' },
        { label: '행동으로 잇기', text: '현장 혜택, 또는 페스티벌 이후에 쓸 수 있는 코드.' },
        { label: '측정하기', text: '구역 입장 수, 체험 완료 수, 혜택 수령 수.' },
      ],
    },
    'immersive-brand': {
      name: '몰입형 브랜드 체험',
      lead: '빛, 영상, 설치 — 브랜드가 하나의 공간이 됩니다.',
      body:
        '로고가 아니라 느낌으로 기억되고 싶은 브랜드를 위해. 이런 구역은 대개 페스티벌에서 가장 많이 촬영되는 곳이 됩니다.',
      journey: [
        { label: '공간을 짓기', text: '큰 규모의 설치. 동선이 있고 시각적 절정이 있습니다.' },
        { label: '순간을 만들기', text: '볼 만하고 찍을 만한 것이 있어서 사람들이 더 오래 머뭅니다.' },
        { label: '밖으로 번지기', text: '방문객이 직접 올린 사진과 영상이 브랜드를 구역 밖으로 실어 나릅니다.' },
        { label: '측정하기', text: '체류 시간, 방문객이 만든 콘텐츠, 브랜드 언급 수.' },
      ],
    },
    sampling: {
      name: '샘플링과 시용',
      lead: '제품을 바로 그 자리에서, 맞는 사람 손에.',
      body:
        '인력이 안내하는 샘플링 카운터. 방문객이 그 자리에서 써보고 그 자리에서 반응합니다. 소비재, 음료, 퍼스널 케어에 맞습니다.',
      journey: [
        { label: '카운터 열기', text: 'Mega Zone의 업종 구역 안에 카운터를 세웁니다.' },
        { label: '진짜로 써보게 하기', text: '샘플만 건네는 대신 인력이 사용법을 보여줍니다.' },
        { label: '지금 사거나 나중에 사거나', text: '카운터 혜택, 또는 브랜드 판매 채널에서 쓰는 코드.' },
        { label: '측정하기', text: '배포한 샘플 수, 시용 후 설명까지 들은 비율.' },
      ],
    },
    'lead-gen': {
      name: '잠재 고객 확보',
      lead: '명확한 동의를 받은 등록을, 디지털 카운터에서.',
      body:
        '방문객이 혜택이나 소식을 받기 위해 스스로 정보를 남깁니다. 전부 옵트인이며, 브랜드 시스템으로 내보낼 수 있습니다.',
      journey: [
        { label: '디지털 카운터 세우기', text: '브랜드 기획 구역 안에 등록 화면을 둡니다.' },
        { label: '가치와 맞바꾸기', text: '방문객은 구체적인 것을 돌려받습니다: 혜택, 선물, 체험 자리.' },
        { label: 'CRM으로 넘기기', text: '옵트인 데이터를 브랜드가 실제로 쓸 수 있는 형식으로 전달합니다.' },
        { label: '측정하기', text: '등록 수, 완료율, 데이터 품질.' },
      ],
    },
    'qr-voucher': {
      name: '쿠폰과 O2O',
      lead: '페스티벌에서 매장이나 앱으로 곧장.',
      body: '방문객이 현장에서 스캔하고 브랜드의 판매 채널에서 사용합니다 — 행사장에서의 행동을 실제 매출로 잇습니다.',
      journey: [
        { label: '체험 끝에 코드 붙이기', text: '아무 데나 뿌리지 않고, 한 체험의 마지막에 코드가 나옵니다.' },
        { label: '현장에서 스캔', text: '휴대폰으로 스캔하며, 앱을 따로 받을 필요가 없습니다.' },
        { label: '판매 채널에서 사용', text: '매장, 웹사이트, 브랜드 앱에서 혜택이 적용됩니다.' },
        { label: '측정하기', text: '스캔율, 사용률, 발생한 주문 금액.' },
      ],
    },
    'product-launch': {
      name: '신제품 발표',
      lead: '새 제품 하나, 딱 맞는 사람들, 하루 오후.',
      body: '작은 무대와 시용 구역을 갖춘 제품 시연 공간. 언론과 콘텐츠 창작자도 함께 있습니다.',
      journey: [
        { label: '발표 무대 세우기', text: '시간대별 시연이 있는 전용 구역.' },
        { label: '직접 만져보게 하기', text: '소개가 끝나면 방문객이 바로 써봅니다.' },
        { label: '현장 예약', text: '관심 등록, 또는 브랜드 채널을 통한 사전 주문.' },
        { label: '측정하기', text: '시연 관람 수, 시용 수, 등록 수.' },
      ],
    },
    beauty: {
      name: '뷰티 & 퍼스널 케어',
      lead: '실제 사람에게, 전문가가 곁에서.',
      body: '뷰티는 이 페스티벌과 잘 맞습니다. 방문객은 급히 사러 오는 것이 아니라 자신을 돌보러 오기 때문입니다.',
      journey: [
        { label: '시용 구역 짓기', text: '의자, 거울, 그리고 제품을 판단할 만한 조명.' },
        { label: '일대일 상담', text: '브랜드의 전문 인력이 방문객에게 직접 해줍니다.' },
        { label: '체험 뒤의 혜택', text: '다시 올 이유를 들고 카운터를 떠나게 합니다.' },
        { label: '측정하기', text: '시용 수, 1회당 시간, 혜택을 받은 비율.' },
      ],
    },
    technology: {
      name: '테크와 디바이스',
      lead: '유리 너머로 보여주지 말고, 손에 들게 하기.',
      body: '기기 시용 구역과 인터랙티브 설치 — 테크, 통신, 스마트 가전 브랜드에 맞습니다.',
      journey: [
        { label: '시용 구역 짓기', text: '실제 사용 상황에 맞춰 기기를 배치합니다.' },
        { label: '직접 해보기', text: '방문객이 직접 조작하고, 인력은 돕기만 합니다.' },
        { label: '혜택이나 등록', text: '판매 채널이나 멤버십 프로그램으로 이어줍니다.' },
        { label: '측정하기', text: '시용 수, 접촉 시간, 등록 수.' },
      ],
    },
    fintech: {
      name: '결제와 핀테크',
      lead: '페스티벌 전체가 하나의 결제 수단을 함께 씁니다.',
      body: '결제 파트너는 행사장의 모든 판매 지점을 덮을 수 있습니다: 식음료 카운터, 부스, 티켓, 굿즈.',
      journey: [
        { label: '판매 지점 덮기', text: '모든 카운터에서 그 결제 수단을 쓸 수 있게 합니다.' },
        { label: '결제하면 이득', text: '페스티벌 내 거래에 할인이나 캐시백.' },
        { label: '신규 계좌 열기', text: '혜택을 쓰려고 방문객이 현장에서 가입합니다.' },
        { label: '측정하기', text: '거래 건수, 거래 금액, 신규 개설 수.' },
      ],
    },
    hospitality: {
      name: '기업 호스피탈리티',
      lead: '파트너를 기억에 남을 하룻밤으로 초대하기.',
      body: '전용 접객 구역, 테이블 서비스, 무대가 보이는 시야 — 홍보만이 아니라 관계를 위한 것입니다.',
      journey: [
        { label: '전용 구역 확보', text: '신청 인원에 맞춘 접객 구역.' },
        { label: '우리 공간에서 만나기', text: '브랜드 경영진이 초청객을 직접 맞이합니다.' },
        { label: '관계 만들기', text: '회의실보다 훨씬 편한 자리에서 대화가 오갑니다.' },
        { label: '측정하기', text: '참석한 초청객 수, 실제로 이뤄진 미팅 수.' },
      ],
    },
    'stage-recognition': {
      name: '무대 위 감사 인사',
      lead: '객석 전체 앞에서 이름이 불립니다.',
      body: '공연 중의 공식적인 감사 순서로, 대형 화면과 페스티벌 공식 자료에도 남습니다.',
      journey: [
        { label: '진행에 넣기', text: '감사 순서를 무대 대본 안에 넣습니다.' },
        { label: '객석 전체 앞에서', text: '관객이 가장 많은 시간에 진행합니다.' },
        { label: '공식 자료에 들어가기', text: '페스티벌의 사진과 리캡 영상에 등장합니다.' },
        { label: '측정하기', text: '현장에 있던 관객 수, 행사 후 자료 조회 수.' },
      ],
    },
    'naming-rights': {
      name: '체험 네이밍 권리',
      lead: '페스티벌의 한 구역이 브랜드의 이름을 갖습니다.',
      body:
        '가장 깊이 참여하는 형태입니다. 브랜드가 공간이나 체험에 이름을 붙이고, 지도와 타임테이블, ' +
        '그리고 페스티벌의 모든 커뮤니케이션에 등장합니다.',
      journey: [
        { label: '공간 고르기', text: '구역과 이름을 붙일 범위를 합의합니다.' },
        { label: '여정 내내 존재하기', text: '지도, 타임테이블, 안내 표지에 그 이름이 나옵니다.' },
        { label: '기억의 일부가 되기', text: '방문객이 그 구역을 브랜드 이름으로 부르게 됩니다.' },
        { label: '측정하기', text: '언급 수, 구역 방문 수, 페스티벌 채널에서의 노출.' },
      ],
    },
    megasale: {
      name: 'MegaSale & Happiness Deals',
      lead: '집중된 혜택 시간대에, 여러 브랜드가 동시에.',
      body: '행사 안의 상업 행사입니다. 시간 한정 혜택, 여러 브랜드 선물 상자, 판매 구역으로 몰리는 인파.',
      journey: [
        { label: '시간대 신청', text: '브랜드가 자기 혜택 시간대를 고릅니다.' },
        { label: '인파를 한 박자에 모으기', text: '웹앱과 구역 방송으로 알립니다.' },
        { label: '현장에서 팔기', text: '거래가 그 시간대 안에서 이뤄집니다.' },
        { label: '측정하기', text: '시간대별 매출, 주문 수, 나간 선물 상자 수.' },
      ],
    },
    o2o: {
      name: '행사장 수령',
      lead: '온라인에서 주문하고, 페스티벌 카운터에서 받기.',
      body: '브랜드의 온라인 채널과 현장의 인파를 잇습니다. 미리 주문하고, 받으러 오고, 남아서 더 삽니다.',
      journey: [
        { label: '수령 카운터 열기', text: 'Mega Zone 안에 카운터를 둡니다.' },
        { label: '방문객이 찾아오기', text: '미리 주문한 사람에게는 상업 구역으로 들어올 이유가 있습니다.' },
        { label: '현장에서 더 사기', text: '이미 카운터 앞에 서 있을 때의 추가 구매율.' },
        { label: '측정하기', text: '카운터 수령 건수, 추가 구매 금액.' },
      ],
    },
    csr: {
      name: 'CSR / ESG — Happiness Fund',
      lead: '페스티벌이 지역에 돌려주는 부분.',
      body:
        '"행복"이라는 주제와 이어진 공익 활동이며, 방문객도 함께 참여합니다 — 수표를 들고 사진 한 장 찍는 일이 아닙니다.',
      journey: [
        { label: '프로그램 고르기', text: '기여할 내용과 수혜 대상을 합의합니다.' },
        { label: '방문객이 함께하기', text: '참가자가 CSR 구역에서 직접 힘을 보탭니다.' },
        { label: '진짜 이야기', text: '행사 후 콘텐츠는 실제로 한 일에 근거합니다. 연출하지 않습니다.' },
        { label: '측정하기', text: '기여 건수, 참여 인원, 남은 기록 자료.' },
      ],
    },
    content: {
      name: '콘텐츠와 미디어',
      lead: '브랜드가 광고 안에만이 아니라 콘텐츠 안에 등장합니다.',
      body:
        '페스티벌의 콘텐츠 체계는 WeMeet 팟캐스트, 참가자 콘텐츠, 라이브 방송, 리캡 영상으로 이뤄집니다 — ' +
        '브랜드는 각 층에 참여할 수 있습니다.',
      journey: [
        { label: '형식 고르기', text: '팟캐스트, 라이브 방송, 단편, 또는 참가자 콘텐츠.' },
        { label: '페스티벌과 함께 제작', text: '행사의 진짜 현장에서 콘텐츠를 만듭니다.' },
        { label: '여러 채널로 배포', text: '페스티벌, 브랜드, 창작자의 채널에서 함께 나갑니다.' },
        { label: '측정하기', text: '조회 수, 반응 수, 만들어진 콘텐츠 수.' },
      ],
    },
  },

  impactModules: {
    'audience-reach': { label: '현장 관객', unit: '명', description: '행사장에 있던 사람 수' },
    'onsite-engagement': { label: '현장 교감 횟수', unit: '회', description: '브랜드 기획에 참여한 횟수' },
    'digital-reach': { label: '디지털 도달', unit: '도달 수', description: '페스티벌 디지털 채널에서의 도달' },
    touchpoints: { label: '브랜드 접점', unit: '곳', description: '방문객 여정에서 브랜드가 나타나는 위치 수' },
    leads: { label: '잠재 고객', unit: '건 등록', description: '명확한 동의를 받은 등록' },
    sampling: { label: '배포한 샘플', unit: '개', description: '방문객 손에 직접 건넨 제품' },
    commerce: { label: '거래', unit: '건', description: '페스티벌 기간에 발생한 거래' },
    'content-reach': { label: '생성된 콘텐츠', unit: '건', description: '방문객과 창작자가 올린 글·사진·영상' },
    media: { label: '언론 노출', unit: '건', description: '기사와 보도 자료' },
    vip: { label: 'VIP 초청객', unit: '명', description: '전용 구역에서 맞이한 초청객' },
    csr: { label: '지역 기여', unit: '건', description: 'CSR 프로그램의 성과' },
  },

  partnerPortal: {
    why: '왜 ONE BEAT NIGHT인가',
    audience: '관객',
    ecosystem: '페스티벌 생태계',
    opportunities: '브랜드 기회',
    formats: '기획 형식',
    media: '커뮤니케이션 체계',
    commercial: '상업 기회',
    hospitality: 'VIP와 접객',
    csr: 'CSR',
    measurement: '성과 측정',
    packages: '협업 방식',
    contact: '문의',
  },

  partnerCategories: {
    fmcg: '생활소비재와 음료',
    beauty: '뷰티와 퍼스널 케어',
    tech: '테크와 통신',
    finance: '금융과 결제',
    fashion: '패션과 라이프스타일',
    travel: '여행과 관광',
    wellness: '건강과 피트니스',
    pets: '반려동물',
  },

  footer: {
    navLabel: '푸터 내비게이션',
    location: '장소',
    time: '일시',
    partnership: '제휴',
    workingChannel: '업무 채널',
    library: '라이브러리',
    imagesInKits: '장의 이미지 (6개 KIT)',
    openArchitecture: '설계상 확장 한도',
    legal:
      '페스티벌의 디지털 플랫폼입니다. 날짜, 장소, 티켓 가격, 라인업 등 모든 수치는 주최 측이 확인한 뒤에야 이 사이트에 올라갑니다.',
  },

  values: {
    FREEDOM: '자유',
    'SELF-LOVE': '나를 아끼기',
    COMMUNITY: '커뮤니티',
    CONNECTION: '연결',
    HAPPINESS: '행복',
  },

  isNotA: ['소개팅 행사', '커플 매칭 프로그램', '애인을 찾는 앱'],

  home: {
    heroLeadA: '자유와 커뮤니티와 음악의 하루 — 싱글이 더 이상 혼자가 아닌 곳. 세 구간:',
    heroStageA: '나를 만나다',
    heroStageB: '서로를 만나다',
    heroStageC: '행복을 만나다',

    movement: {
      kicker: '01 — 하나의 흐름',
      titleA: '싱글은',
      titleB: '더 이상',
      titleC: '혼자가 아니다',
      lead:
        'ONE BEAT NIGHT은 커플 매칭 행사가 아닙니다. 스스로 선택해 혼자 살아가는 사람들을 위한 페스티벌입니다. 자유롭고, 자신을 알고, 때가 맞으면 누군가를 만날 준비도 되어 있는 사람들.',
      body: '여기에서 무언가 시작될 수도 있습니다. 하지만 그것이 목적은 아니고, 그날이 좋았는지를 재는 잣대도 아닙니다.',
      notA: '이것이 아닙니다:',
      captionMain: '떨어져 선 두 사람을 잇는 붉은 실 — 이 프로젝트의 첫 이미지.',
      captionFreedom: '무한대의 고리를 떠나는 황금빛 새 — 자유',
      captionConnection: 'LED 팔찌를 낀 두 손 — 연결',
    },

    audience: {
      kicker: '02 — 누구를 위한',
      titleA: '독립적으로 살아가는',
      titleB: '베트남의',
      titleC: '어른들',
      lead:
        '세 개의 연령대, 혼자 사는 세 가지 방식 — 그리고 하나의 공통점. 아무도 싱글을 고쳐야 할 결함으로 여기지 않습니다.',
      asideKicker: '세 개의 연령대',
      note: '연령대는 프로젝트의 포지셔닝 문서에서 가져왔습니다. 예상 관객 규모:',
    },

    day: {
      kicker: '03 — 낮 프로그램',
      lead:
        '공연이 시작되기 전에 하루짜리 페스티벌이 있습니다. 달리고, 이야기하고, 함께 먹고, 개와 걷고, 전시를 보고, 새로운 것을 써봅니다. 옆으로 끌어서 보세요.',
    },

    mega: {
      kicker: '04 — 체험형 상업',
      lead:
        '하나의 체험 마켓 안에 일곱 개 업종. 방문객은 진짜로 제품을 써보고, 브랜드는 딱 맞는 사람을 만납니다 — 후원 기획의 대부분도 여기에서 이뤄집니다.',
      heroTitle: '하나의 마켓, 일곱 개의 세계',
      heroLead: '부스가 업종별로 묶여 있어, 한 바퀴만 돌면 전부 만나볼 수 있습니다.',
      allTitle: '마켓 전체 보기',
      allLead: '일곱 개 업종, 시간 한정 혜택, 수령 카운터',
      cta: 'Mega Zone 전체 보기',
    },

    community: {
      kicker: '05 — 커뮤니티',
      title: '이 페스티벌은 찾아온 사람들의 것입니다.',
      lead:
        '자체 팟캐스트가 있고, 콘텐츠 공모가 있고, 현장에서 나가는 라이브 방송이 있고, 행사 뒤에는 리캡 영상이 있습니다. 페스티벌의 이야기는 참가한 사람들이 이어서 들려줍니다.',
      ctaPeople: '커뮤니티의 얼굴',
      ctaContent: '콘텐츠 체계',
    },

    night: {
      kicker: '06 — 절정',
      lead:
        '해가 지면 행사장 전체의 색이 바뀝니다. 라이브 음악, 헤드라이너, 가수 × DJ, 무대와 객석 사이에서 오가는 순간들 — 그리고 수천 개의 LED 팔찌가 같은 비트에 켜지는 순간.',
      headliner: '헤드라이너',
      stage: '무대',
      stageValue: '메인 스테이지',
      duration: '진행 시간',
      durationValue: '저녁 내내',
      cta: '공연으로 들어가기',
    },

    final: {
      kicker: '마지막 한마디',
      lead:
        '이 페스티벌은 누군가를 찾아 나서라고 말하지 않습니다. 먼저 나를 만나고, 그다음 다른 사람을 만나고, 그렇게 함께 기억할 만한 하루를 보내자고 청할 뿐입니다.',
      imagesNote: '장의 이미지가 6개 KIT에 담겨 이 사이트를 움직입니다.',
    },
  },

  contentKinds: {
    podcast: '팟캐스트',
    ugc: '참가자 제작',
    media: '미디어',
    ooh: '옥외',
    social: '소셜',
    recap: '리캡',
  },

  pages: {
    gallery: {
      metaTitle: '이미지 라이브러리',
      metaDescription: '페스티벌의 전체 이미지 라이브러리를 6개 KIT로 나눠 담았습니다.',
      kicker: '비주얼',
      titleA: '페스티벌',
      titleB: '라이브러리',
      leadA: '장의 이미지가 6개 KIT에 담겨 이 사이트를 움직입니다. 설계상 확장 한도는',
      leadB: '장이며,',
      leadC: '개 자리는 아직 비어 있습니다. 다른 사진으로 채우지 않고 진짜 사진을 기다립니다.',
    },
    account: {
      metaTitle: '계정',
      metaDescription: '티켓 지갑, 내 일정, 즐겨찾기 — 참가자 계정 구조.',
      kicker: '참가자',
      title: '내 계정',
      lead:
        '티켓 지갑, 개인 일정, 즐겨찾기. 지금 단계에서는 모든 것이 내 기기 안에만 저장됩니다 — 서버 계정도 없고, 어디로도 데이터를 보내지 않습니다.',
    },
    program: {
      metaTitle: '타임테이블',
      metaDescription: '시간대·무대·구역·프로그램별 전체 타임테이블과 개인 일정.',
      kicker: '프로그램',
      titleA: '페스티벌',
      titleB: '타임테이블',
      leadA: '개 항목이 오전, 낮, 골든아워, 공연의 밤 네 구간에 걸쳐 있습니다. 갈 생각인 것은 "내 일정"에 담아두세요.',
      dateLabel: '개최일:',
      doorsLabel: '입장 시간:',
    },
    faq: {
      metaTitle: '자주 묻는 질문',
      metaDescription:
        'ONE BEAT NIGHT에 대해 자주 묻는 질문: 페스티벌의 성격, 티켓, 라인업, 반려동물, 접근성, 안전.',
      kicker: '자주 묻는 질문',
      title: '가장 많이 들어오는 질문들',
      lead: '아직 두루뭉술한 답이 있다면 주최 측이 공개하지 않았기 때문입니다 — 이 페이지가 대신 추측하지는 않습니다.',
      moreTitle: '찾는 질문이 없으셨나요?',
      moreLead: '참가 가이드에 오시는 길, 반려동물, 접근성, 안전이 더 자세히 적혀 있습니다.',
      guideCta: '참가 가이드',
      contactCta: '문의',
    },
    map: {
      metaTitle: '행사장 지도',
      metaDescription:
        '페스티벌의 열 개 구역: Mega Zone, 만남 스테이션, 반려동물 구역, 전시, 푸드, Color Run, 무대, VIP, 지원.',
      kicker: '위치',
      titleA: '행사장',
      titleB: '지도',
      lead: '열 개 구역, 저마다의 호흡이 있습니다. 구역을 누르면 그곳의 프로그램, 시설, 실제 사진을 볼 수 있습니다.',
      closeKicker: '가까이 보기',
      closeTitle: '위에서 본 각 구역',
      opsKicker: '운영',
      opsTitle: '이 행사장을 떠받치는 사람들',
      opsLead: '안내, 의료, 안전, 무장애 동선, 운영 본부 — 모든 게 잘 돌아갈 때는 아무도 눈치채지 못하는 부분입니다.',
    },
    artists: {
      metaTitle: '아티스트와 MC',
      metaDescription: 'One Beat Night 공연을 구성하는 무대 역할들. 아티스트 라인업은 추후 공개합니다.',
      kicker: '라인업',
      titleA: '아티스트',
      titleB: '와 MC',
      lead:
        '아티스트 명단은 아직 공개되지 않았습니다. 이 페이지에는 진행 안에서 이미 정해진 무대 역할들을 담았습니다 — 주최 측이 이름을 확정하면 이 자리가 실제 아티스트로 바뀝니다.',
      moreKicker: '더 있습니다',
      moreTitle: '그 밖의 역할',
      moreBody: '공연 대본에는 게스트와 특별 순서를 위한 자리가 아직 남아 있습니다. 주최 측이 확정하면 여기에 추가합니다.',
      whyKicker: '왜 아직 이름이 없는가',
      whyTitle: '진짜 무대에 가짜 이름을 올리지 않습니다',
      whyLead:
        '이 페이지에는 프로젝트 문서에서 확인된 것만 올립니다. 라인업, 공연 날짜, 티켓 가격은 주최 측이 발표하는 바로 그때 올라갑니다. 그보다 빠르지 않습니다.',
      pressCta: '보도 소식 받아보기',
    },
    megaZone: {
      metaTitle: 'Mega Zone',
      metaDescription: '페스티벌의 체험형 마켓: 일곱 개 업종, 시간 한정 혜택, 그리고 브랜드 기획 대부분이 일어나는 곳.',
      kicker: '체험형 상업',
      lead:
        '하나의 마켓 안에 일곱 개 업종. 방문객은 새것을 써보러 오고, 브랜드는 딱 맞는 사람을 만나러 옵니다 — 둘 다 전단을 사이에 두고 이야기할 필요가 없습니다.',
      sectorsKicker: '일곱 개 업종',
      sectorsTitle: '한 바퀴면 전부 만나볼 수 있습니다',
      boxTitle: '여러 브랜드 선물 상자',
      boxNote: '여러 브랜드의 제품을 한 상자에',
      momentsKicker: '거래는 이렇게 일어납니다',
      momentsTitle: '하루 안의 네 가지 구매 순간',
      moments: {
        sampling: {
          title: '먼저 써보고, 나중에 결정',
          body: '카운터에서 그 자리에서 맛보고, 만지고, 써봅니다. 진짜 반응은 광고가 아니라 그 자리에서 나옵니다.',
        },
        'flash-sale': {
          title: '혜택 시간대',
          body: 'MegaSale이 인파를 한 박자에 모읍니다. 여러 브랜드가 동시에 혜택을 열고, 마켓 전체가 그 리듬으로 움직입니다.',
        },
        'happiness-box': {
          title: 'Happiness Deals',
          body: '여러 브랜드를 모은 선물 상자 — 상업 구역을 끝까지 걸어볼 아주 구체적인 이유가 됩니다.',
        },
        pickup: {
          title: '온라인 주문, 행사장 수령',
          body: '수령 카운터가 브랜드의 온라인 채널을 바로 눈앞의 인파와 이어줍니다.',
        },
      },
      sectorsFitKicker: '어울리는 업종',
      sectorsFitTitle: '이 구역과 잘 맞는 브랜드의 종류',
      sectorsFitLead: '이것은 업종에 대한 설명이지 후원사 목록이 아닙니다. 페스티벌은 아직 어떤 파트너도 공개하지 않았습니다.',
      cta: '브랜드 기회 보기',
    },

    community: {
      metaTitle: '커뮤니티',
      metaDescription: '이 페스티벌은 누구의 것인가: 세 연령대와, 독립적으로 살아가는 베트남 어른들의 여덟 가지 단면.',
      kicker: '사람',
      titleA: '이 페스티벌은',
      titleB: '누구의 것인가',
      lead:
        '"아직 사람을 못 만난 사람"이 아닙니다. 독립적으로 살아가는 어른들 — 그리고 그것을 기다리는 시기가 아니라 선택으로 받아들이는 사람들입니다.',
      groupsKicker: '세 연령대',
      groupsTitle: '같은 도시, 혼자 사는 세 가지 방식',
      groupsLead: '연령대는 프로젝트의 포지셔닝 문서에서 가져왔습니다.',
      lifeKicker: '라이프스타일',
      lifeTitle: '독립적인 삶의 여덟 가지 단면',
      lifeLead:
        '슬라이드에 올라가는 인구 통계 초상이 아닙니다. 페스티벌 관객의 평범한 한 주에 실제로 있는 장면들입니다.',
      caption: 'LED 팔찌를 낀 두 손이 닿기 직전 — "연결"이라는 생각의 첫 이미지.',
      safetyKicker: '원칙',
      safetyTitle: '틀 안에서의 연결',
      safetyLead:
        '만남과 관련된 모든 프로그램에는 진행자가 있고, 행동 규칙이 있으며, 언제든 멈출 수 있습니다. 원하지 않는 대화로 떠밀리는 사람도, 구석에 남겨지는 사람도 없습니다.',
      safetyRules: [
        '만남 스테이션의 프로그램에는 진행자가 끝까지 함께합니다',
        '행동 규칙은 미리 공개하고 현장에서 다시 안내합니다',
        '모든 구역에 지원 인력과 도움 창구가 있습니다',
        '어디까지 참여할지는 참가자가 스스로 정합니다',
      ],
      scale: '예상 관객 규모:',
      guideCta: '참가 가이드',
    },

    visitorGuide: {
      metaTitle: '참가 가이드',
      metaDescription: 'ONE BEAT NIGHT에 오기 전 준비, 오시는 길, 반려동물 규정, 접근성 지원과 안전.',
      kicker: '준비',
      title: '참가 가이드',
      lead: '오기 전에 알아둘 것들: 입장, 행사장 동선, 반려동물 동반, 접근성 지원, 그리고 행동 규칙.',
      dateLabel: '날짜:',
      doorsLabel: '입장:',
      venueLabel: '장소:',
      sections: {
        before: {
          title: '출발하기 전에',
          items: [
            '전자 티켓은 앱의 티켓 지갑 안에 있습니다 — 출력할 필요 없습니다.',
            '"내 일정"을 미리 저장해 두면 어디로 갈지 알 수 있습니다. 특히 신청이 필요한 프로그램이 그렇습니다.',
            '편한 옷차림으로 오세요. 낮 프로그램은 대부분 야외에서 진행됩니다.',
            '정확한 날짜, 입장 시간, 장소는 공개되는 즉시 이 페이지에서 갱신됩니다.',
          ],
        },
        arrive: {
          title: '도착과 입장',
          items: [
            '게이트에서 티켓의 QR 코드를 스캔해 입장합니다.',
            '게이트에서 LED 팔찌를 받습니다 — 공연의 동기화 조명 연출에 사용됩니다.',
            'VIP 손님과 파트너 초청객은 전용 입구를 이용합니다.',
            '안내 데스크는 게이트 바로 안쪽에 있고, 담당 인력이 있습니다.',
          ],
        },
        pets: {
          title: '반려동물 동반',
          items: [
            '반려동물 구역은 크기와 성향에 따라 나뉩니다: 소형견, 대형견, 고양이, 노령견.',
            '행사 중 반려동물 관리는 보호자 책임입니다.',
            '반려동물 음수대, 그늘 구역, 사진 촬영 공간이 있습니다.',
            '예방접종 증명과 대상 종류에 대한 구체적인 규정은 행사 정보와 함께 안내합니다.',
          ],
        },
        access: {
          title: '접근성',
          items: [
            '주요 동선에는 턱이 없고, 휠체어와 유아차가 지날 만큼 넓습니다.',
            '공연 관람 구역에는 지원이 필요한 분들을 위한 자리가 있습니다.',
            '지원 인력은 모든 구역에 있으며 제복으로 쉽게 알아볼 수 있습니다.',
            '응급처치소와 조용히 쉴 수 있는 공간은 행사 내내 열려 있습니다.',
          ],
        },
        respect: {
          title: '행동과 안전',
          items: [
            '연결과 관련된 모든 프로그램에는 진행자와 분명한 행동 규칙이 있습니다.',
            '어떤 프로그램이든 언제든지, 설명 없이 떠나실 수 있습니다.',
            '불편함을 느끼면 그 구역의 인력에게 바로 알려주세요 — 그런 상황을 위해 교육받았습니다.',
            '상대의 동의 없이 촬영하지 마세요.',
          ],
        },
      },
      servicesKicker: '현장 서비스',
      servicesTitle: '필요할 때 도와주는 사람들',
    },

    contact: {
      metaTitle: '문의',
      metaDescription: 'ONE BEAT NIGHT 주최 측과 연결되는 창구: 브랜드 제휴, 언론, 참가자.',
      kicker: '문의',
      title: '업무 채널',
      lead:
        '공식 연락처는 주최 측이 제공하는 대로 추가됩니다. 아래 양식은 이미 만들어져 있고, 접수 시스템에 연결하기만 하면 됩니다.',
      channels: {
        partners: {
          label: '브랜드 제휴',
          note: '후원, 브랜드 기획, 기업 접객, 페스티벌 내 상업 협업.',
          cta: '제휴 방식 보기',
        },
        press: {
          label: '언론·미디어',
          note: '미디어킷, 공식 사진, 인터뷰, 취재 등록.',
          cta: '프레스룸으로',
        },
        visitors: {
          label: '참가자',
          note: '티켓, 타임테이블, 참가 규정, 접근성 지원.',
          cta: '자주 묻는 질문 보기',
        },
      },
      infoKicker: '행사 정보',
      cityLabel: '도시',
      venueLabel: '장소',
      addressLabel: '주소',
      dateLabel: '개최일',
      organizerLabel: '주최',
    },

    news: {
      metaTitle: '이야기와 콘텐츠',
      metaDescription:
        '페스티벌의 콘텐츠 체계: WeMeet 팟캐스트, 참가자 콘텐츠, 라이브 방송, 언론, 옥외, 리캡 영상.',
      kicker: '콘텐츠',
      title: '이야기는 페스티벌 전에 시작해 그 뒤로도 이어집니다',
      lead:
        '페스티벌은 하루짜리가 아닙니다. 여기 있는 것은 이 프로젝트의 콘텐츠 형식이며, 캠페인이 아직 시작되지 않아 이미 올라간 게시물은 아닙니다.',
      reelsKicker: '세로형 포맷',
      reelsTitle: '페스티벌 안에서 온 Reels',
      emptyKicker: '아직 올라온 글이 없습니다',
      emptyLead:
        '페스티벌이 아직 홍보를 시작하지 않아 여기에는 보도자료나 기사가 없습니다. 틀은 준비되어 있습니다. 진짜 콘텐츠가 나오면 바로 이 자리에 놓입니다.',
      pressCta: '프레스룸',
    },
  },

  videos: {
    heroFilm: 'ONE BEAT NIGHT 소개 영상',
    dayFestival: 'Day Festival의 하루',
    concertTeaser: '공연 티저',
    sponsorFilm: '브랜드 기회 소개 영상',
    afterMovie: '리캡 영상',
    reelDance: 'Reel — 공연에서 춤추는 순간',
    reelCreator: 'Reel — 페스티벌의 콘텐츠 창작자',
    reelFlashmob: 'Reel — 개막 플래시몹',
  },
};
