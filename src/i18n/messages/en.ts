import type { MessagesFor } from '../types';

/**
 * ENGLISH.
 *
 * Proper names stay as they are — ONE BEAT NIGHT, Mega Zone, Coffee Talk, Match & Meet,
 * Happy Lunch, Colour Run, Happiness Toast. "Trạm Gặp" is rendered as "Connection Zone",
 * the English name already used on the festival map.
 */
export const en: MessagesFor = {
  brand: {
    name: 'ONE BEAT NIGHT',
    subtitle: 'THE SINGLES FESTIVAL',
    slogan: 'Happiness in every moment',
    city: 'Ho Chi Minh City',
    country: 'Vietnam',
    positioning:
      'A festival for modern single people, built around freedom, connection, personal growth and happiness.',
  },

  common: {
    skipToContent: 'Skip to main content',
    home: 'Home',
    tickets: 'Tickets',
    ticketsFull: 'Tickets & tiers',
    explore: 'Explore the festival',
    becomePartner: 'Become a partner',
    viewProgram: 'View the programme',
    festivalMap: 'Festival map',
    continueToNight: 'On to the concert',
    viewTickets: 'View tickets',
    scrollToEnter: 'Scroll to enter',
    comingSoon: 'To be announced',
    proposed: 'Proposed',
    mostChosen: 'Most popular',
    all: 'All',
    items: 'items',
    close: 'Close',
    open: 'Open',
    menu: 'Menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mainNav: 'Main navigation',
    fullNav: 'Full navigation',
    eventDate: 'Date',
    venue: 'Venue',
    lineup: 'Line-up',
    stage: 'Stage',
    language: 'Language',
    changeLanguage: 'Change language',
    notConfirmedYet: 'Not yet confirmed',
    minutesShort: '′',
    needsSignup: 'Sign-up required',
    accessible: 'Step-free access',
    sampleData: 'Illustrative data',
    gallery: 'Image library',
    menuDialog: 'Main menu',
  },

  nav: {
    experience: 'Experience',
    program: 'Programme',
    map: 'Map',
    artists: 'Artists',
    tickets: 'Tickets',
    partners: 'Partners',
  },

  menu: {
    groups: {
      festival: 'Festival',
      people: 'People',
      join: 'Join in',
      business: 'Business',
    },
    items: {
      '/experience': { label: 'Day Festival', desc: 'Daytime: flashmob, colour run, Connection Zone, Mega Zone' },
      '/one-beat-night': { label: 'One Beat Night', desc: 'The concert — the emotional peak' },
      '/mega-zone': { label: 'Mega Zone', desc: 'The experiential marketplace' },
      '/program': { label: 'Programme', desc: 'By time block, stage and zone' },
      '/map': { label: 'Festival map', desc: 'Ten zones, each one you can zoom into' },
      '/artists': { label: 'Artists & hosts', desc: 'The performance roles of the concert' },
      '/community': { label: 'Community', desc: 'Who this festival belongs to' },
      '/news': { label: 'Stories & content', desc: 'WeMeet Podcast, UGC, behind the scenes' },
      '/tickets': { label: 'Tickets & tiers', desc: 'Five tiers, ticket wallet, LED wristband' },
      '/account': { label: 'Account', desc: 'Ticket wallet, my schedule, favourites' },
      '/visitor-guide': { label: 'Visitor guide', desc: 'Getting there, accessibility, safety' },
      '/faq': { label: 'FAQ', desc: 'Frequently asked questions' },
      '/partners': { label: 'Sponsors & partners', desc: 'The brand ecosystem you can step into' },
      '/press': { label: 'Press room', desc: 'Media kit, photos, logos, accreditation' },
      '/contact': { label: 'Contact', desc: 'Working channels' },
    },
  },

  appTabs: {
    festival: 'Festival',
    program: 'Programme',
    map: 'Map',
    tickets: 'Tickets',
    account: 'Mine',
    nav: 'App navigation bar',
  },

  install: {
    title: 'Take the festival with you',
    descAndroid: 'Add it to your home screen: opens fast, and the programme and map work without signal.',
    descIos: 'Tap Share, then “Add to Home Screen” to open it like an app.',
    cta: 'Install',
    close: 'Dismiss the install prompt',
    dialogLabel: 'Install the ONE BEAT NIGHT app',
  },

  offline: {
    kicker: 'No connection',
    title: 'Your device is offline',
    lead: 'Pages you opened earlier are still available. Once you are back online, the page will load fresh content by itself.',
    home: 'Back to home',
    savedProgram: 'Saved programme',
    metaTitle: 'You are offline',
    metaDescription: 'This device has no connection. Pages you already visited still open.',
  },

  notFound: {
    metaTitle: 'Page not found',
    metaDescription: 'This address no longer exists, or never did.',
    title: 'There is nothing here',
    lead: 'The address you opened no longer exists, or never did. Here is where to go instead.',
    home: 'Back to home',
  },

  placeholders: {
    EVENT_DATE: { label: 'Date', note: 'Not yet fixed in the project documents' },
    EVENT_TIME: { label: 'Doors open', note: 'Not yet fixed' },
    VENUE: { label: 'Venue', note: 'Confirmed only to city level: Ho Chi Minh City' },
    VENUE_ADDRESS: { label: 'Address', note: 'Not yet fixed' },
    HEADLINER: { label: 'Headliner', note: 'Line-up not yet announced' },
    TICKET_PRICE: { label: 'Ticket price', note: 'Pricing not yet fixed' },
    TICKET_ONSALE: { label: 'On sale from', note: 'Not yet fixed' },
    EXPECTED_ATTENDANCE: { label: 'Expected attendance', note: 'No figure is taken from any unverified source' },
    MEDIA_REACH: { label: 'Media reach', note: 'No verified figures yet' },
    ORGANIZER: { label: 'Organiser', note: 'Legal entity details not yet received' },
    PRESS_EMAIL: { label: 'Press email', note: 'Not yet available' },
    PARTNER_EMAIL: { label: 'Partnership email', note: 'Not yet available' },
    HOTLINE: { label: 'Hotline', note: 'Not yet available' },
  },

  journey: {
    'gap-minh': {
      title: 'MEET YOURSELF',
      lead: 'Being single stops meaning being alone.',
      body:
        'The opening stage is for stillness: looking at yourself, knowing where you are, what you like, what you need. ' +
        'Nobody is pushed to connect before they are ready.',
      keywords: ['Inner life', 'Freedom', 'Self-awareness', 'Confidence'],
    },
    'gap-nhau': {
      title: 'MEET OTHERS',
      lead: 'One decent conversation is enough to begin.',
      body:
        'The middle stage is community: coffee circles, shared tables, hosted encounters. ' +
        'Connection happens within a respected, safe frame.',
      keywords: ['Community', 'Dialogue', 'Shared experience', 'Respectful connection'],
    },
    'gap-hanh-phuc': {
      title: 'MEET HAPPINESS',
      lead: 'Happiness in every moment.',
      body:
        'The final stage is celebration: music, light, thousands of people on one beat. ' +
        'Not because somebody found someone — but because everyone shared a night worth remembering.',
      keywords: ['Celebration', 'Music', 'Friendship', 'Collective energy'],
    },
  },

  zones: {
    'main-plaza': {
      name: 'Main Plaza',
      short: 'Opening ceremony, flashmob, meeting point',
      description:
        'Where the festival begins: the morning flashmob, the meeting point for groups, and the axis leading to every other zone.',
      services: ['Meeting point', 'Small stage', 'Drinking water'],
    },
    'mega-zone': {
      name: 'Mega Zone',
      short: 'Experiential marketplace, seven sectors',
      description:
        'The largest experiential commerce area of the festival: fashion, beauty, technology, wellness, food, travel, AI & startups.',
      services: ['Brand stands', 'Timed offers', 'O2O collection counter'],
    },
    'tram-gap': {
      name: 'Connection Zone',
      short: 'Coffee Talk, Coffee Circles, Match & Meet',
      description:
        'The area for hosted conversation and connection. Everything here runs with a code of conduct and support staff on hand.',
      services: ['Facilitators', 'Quiet area', 'On-the-spot sign-up'],
    },
    pets: {
      name: 'Pet Zone',
      short: 'Small dogs, large dogs, cats, senior dogs',
      description:
        'A shaded area divided by size and temperament. There are puppy socialisation sessions, a cat corner and a small parade.',
      services: ['Water for pets', 'Separated areas', 'Photo spot'],
    },
    'visual-art': {
      name: 'Visual Art Zone',
      short: 'Art installation + creative space',
      description:
        'A one-way walk through three layers of light, followed by the gallery and a corner where artists work on site.',
      services: ['One-way route', 'Guides', 'Photo area'],
    },
    food: {
      name: 'Food Zone',
      short: 'Shared tables, food stalls, seating',
      description: 'Food stalls and long shared tables — this is where Happy Lunch takes place.',
      services: ['Shared tables', 'Free water', 'Covered seating'],
    },
    'color-run': {
      name: 'Colour Run route',
      short: 'A course through three colour stations',
      description:
        'A short run looping around the festival grounds, through three colour stations and across a finish line with a badge.',
      services: ['Water station', 'Colour station', 'Finish area'],
    },
    concert: {
      name: 'Main Stage',
      short: 'One Beat Night — the concert',
      description:
        'A large stage with professional lighting and sound. Short sets during the day, the full concert at night.',
      services: ['Audience floor', 'LED wristbands', 'Assisted viewing area'],
    },
    vip: {
      name: 'VIP Zone',
      short: 'Private entrance, seating, table service',
      description: 'For VIP guests and partner invitees: fast check-in, a lounge and dedicated service.',
      services: ['Fast check-in', 'Table service', 'Stage view'],
    },
    support: {
      name: 'Support & safety',
      short: 'Information, medical, security, accessibility',
      description:
        'Information desk, first aid point, safety staff and step-free routes. Present at several places across the grounds.',
      services: ['Information desk', 'First aid', 'Lost property', 'Accessibility support'],
    },
  },

  phases: {
    morning: 'Morning',
    midday: 'Midday',
    golden: 'Golden hour',
    night: 'Concert night',
  },

  categories: {
    music: 'Music',
    community: 'Community',
    talk: 'Talks',
    pets: 'Pets',
    food: 'Food',
    art: 'Art',
    wellness: 'Wellness',
    commerce: 'Shopping',
    vip: 'VIP',
  },

  activities: {
    flashmob: {
      name: 'Opening flashmob',
      summary: 'Hundreds of people hitting the first beat of the day together.',
      detail:
        'The opening routine, right on the main plaza. Anyone can join: simple moves, fifteen minutes of rehearsal beforehand, ' +
        'and the whole thing is filmed for the festival’s own media.',
    },
    'color-run': {
      name: 'Colour Run',
      summary: 'A colour run cutting through three experience zones.',
      detail:
        'A short, untimed course through three colour stations. Cross the line and you get a badge you can wear — something to remember, not something to win.',
    },
    'coffee-talk': {
      name: 'Coffee Talk',
      summary: 'Short talks about living alone without being lonely.',
      detail:
        'A small outdoor stage with the audience close by, one topic per session: financial independence, mental health, ' +
        'being your own friend. Live Q&A, nothing staged.',
    },
    'coffee-circles': {
      name: 'Coffee Circles',
      summary: 'Circles of 8–10 people, one facilitator, nobody left out.',
      detail:
        'Every circle has a facilitator so the conversation never falls into silence. Circles rotate after each session, so you meet a new group.',
    },
    'match-meet': {
      name: 'Match & Meet',
      summary: 'One-to-one meetings with set times, a host, and the right to stop.',
      detail:
        'Two-seat tables laid out in the connection area, a few minutes per round, then everyone rotates. There is a clear code of conduct and support staff ' +
        'stay in the area throughout. This is meeting within a respectful frame, not a matchmaking event.',
    },
    'happy-lunch': {
      name: 'Happy Lunch',
      summary: 'Shared tables — the easiest way to start talking.',
      detail: 'Long tables, dishes to share, strangers sitting side by side. Nobody has to eat alone.',
    },
    'pets-meetup': {
      name: 'Pets Meetup',
      summary: 'The pet zone, split into groups: small dogs, large dogs, cats, senior dogs.',
      detail:
        'A shaded space divided by size and temperament, so both animals and people stay safe. ' +
        'There are puppy socialisation sessions and a corner of its own for cat owners.',
    },
    'walk-and-wag': {
      name: 'Walk & Wag Parade',
      summary: 'A small parade for pet owners.',
      detail: 'One slow lap of the internal route with onlookers on both sides — the pace is set by what is safe for the animals.',
    },
    'mega-zone': {
      name: 'Mega Zone',
      summary: 'The experiential marketplace: fashion, beauty, technology, wellness, food, travel, AI & startups.',
      detail:
        'Stands are grouped by sector and visitors actually try the products rather than collecting leaflets. ' +
        'This is also where partner brands put their interactive activations.',
    },
    'happiness-deals': {
      name: 'MegaSale & Happiness Deals',
      summary: 'Concentrated offer windows across the commerce area.',
      detail: 'Brands open timed offers; visitors receive a gift box assembled from several labels.',
    },
    'visual-art': {
      name: 'Visual performance space',
      summary: 'A large art installation inspired by the resilience of succulents.',
      detail:
        'A one-way walk through three layers of light. Walk it to the end and you understand the festival’s journey without anyone explaining it.',
    },
    'creative-gallery': {
      name: 'Creative space',
      summary: 'An exhibition of paintings, photography, mixed media and an acoustic corner.',
      detail:
        'Artists work on site, so visitors see the whole process and can take part in the communal side of the work.',
    },
    'live-band': {
      name: 'Live band',
      summary: 'A live band opens the concert.',
      detail: 'The live set that opens the evening, as the lighting starts shifting into magenta, blue and gold.',
    },
    'match-cam': {
      name: 'Match Cam',
      summary: 'The camera sweeps the crowd and real reactions go up on the big screen.',
      detail: 'A light interactive moment mid-concert — whoever is picked reacts for real, and the whole ground laughs along.',
    },
    'happiness-toast': {
      name: 'Happiness Toast',
      summary: 'The whole festival raises a glass together, once in the night.',
      detail: 'A short pause: the lights drop, the music softens, and everyone toasts a year of being kind to themselves.',
    },
    headliner: {
      name: 'Headliner',
      summary: 'The peak performance of the night.',
      detail: 'The stage opens out, the rig runs at full power, and the crowd becomes one moving band of light.',
    },
    'singer-dj': {
      name: 'Singer × DJ',
      summary: 'A crossover format: vocals over an electronic set.',
      detail: 'The hinge between live music and the dancefloor, with two artists sharing the stage.',
    },
    'light-moment': {
      name: 'One Beat Light Moment',
      summary: 'Thousands of LED wristbands lighting up on the same beat.',
      detail:
        'The festival’s signature moment: the entire crowd turns into a wave of light running with the music. ' +
        'This is where the “one beat” in the name becomes something you can see.',
    },
    finale: {
      name: 'Finale',
      summary: 'Every artist returns to the stage.',
      detail: 'The closing: flares, confetti, and the last line of the night — see you again.',
    },
    'vip-hospitality': {
      name: 'VIP & Hospitality',
      summary: 'Private entrance, seating facing the stage, table service.',
      detail: 'For VIP guests and partner invitees: fast check-in, a private lounge, food and drinks served at the table.',
    },
    wellness: {
      name: 'Wellness & recovery corner',
      summary: 'Somewhere to breathe in the middle of a long day.',
      detail: 'Short relaxation experiences inside the commerce area: stretching, basic care, water and a quiet place to sit.',
    },
    'pet-photo': {
      name: 'Pet Photo Booth',
      summary: 'Photos with your pet against the festival’s neon backdrop.',
      detail: 'A photo set built to the festival identity, with the pictures sent straight to your phone.',
    },
  },

  megaZoneCategories: {
    'fashion-beauty': { name: 'Fashion & Beauty', note: 'Product trials, accessories, advice at the counter' },
    technology: { name: 'Technology', note: 'New devices, interactive screens, hands-on trials' },
    wellness: { name: 'Wellness & Recovery', note: 'Short relaxation experiences' },
    food: { name: 'Food & FMCG', note: 'Tastings and honest reactions at the stand' },
    travel: { name: 'Travel', note: 'Destination experience stands' },
    'ai-startup': { name: 'AI & Startups', note: 'New products, interactive installations' },
    deals: { name: 'Happiness Deals', note: 'Timed offers, multi-brand gift boxes' },
  },

  stages: {
    'main-stage': 'Main Stage',
    'talk-stage': 'Connection Zone stage',
    plaza: 'Plaza',
    mega: 'Mega Zone',
    'pet-zone': 'Pet Zone',
    'art-zone': 'Art Zone',
    'food-court': 'Food Zone',
    'vip-lounge': 'VIP Zone',
  },

  ticketTiers: {
    standard: {
      name: 'Standard ticket',
      lead: 'Entry to the full day and the concert.',
      benefits: [
        'All daytime zones: Connection Zone, Mega Zone, pet zone, exhibition',
        'The One Beat Night concert floor',
        'An LED wristband for the synchronised light sequence',
        'A digital ticket with a QR code in the app’s ticket wallet',
      ],
    },
    day: {
      name: 'Day Festival ticket',
      lead: 'The daytime only — you head home before the concert starts.',
      benefits: [
        'All daytime zones: Connection Zone, Mega Zone, pet zone, exhibition',
        'Community activities: flashmob, Colour Run, Coffee Circles',
        'A digital ticket with a QR code in the app’s ticket wallet',
      ],
    },
    vip: {
      name: 'VIP ticket',
      lead: 'Private entrance, seating facing the stage, table service.',
      benefits: [
        'Everything in the standard ticket',
        'Fast check-in through a separate entrance',
        'A VIP area with seating and a view of the stage',
        'Food and drinks served at the table',
        'Priority sign-up for activities that need a booking',
      ],
    },
    group: {
      name: 'Group ticket',
      lead: 'Four people or more, checking in together in one go.',
      benefits: [
        'Everything in the standard ticket',
        'The whole group checks in on a single scan',
        'Seats held together at activities that require sign-up',
      ],
    },
    hospitality: {
      name: 'Corporate hospitality',
      lead: 'For companies hosting partners and clients.',
      benefits: [
        'A private hosting area sized to your booking',
        'Service through the whole evening',
        'Support with welcoming and coordinating your guests',
        'Can be combined with a brand activation inside the festival',
      ],
    },
  },

  checkout: {
    select: { label: 'Choose a tier', note: 'Pick the tier and how many' },
    details: { label: 'Buyer details', note: 'Name, email, phone number' },
    promo: { label: 'Promo code', note: 'Apply a code if you have one' },
    summary: { label: 'Confirm the order', note: 'Review before paying' },
    payment: { label: 'Payment', note: 'Integration layer — no provider connected yet' },
    wallet: { label: 'Get your ticket', note: 'The ticket lands in your wallet with a QR code for check-in' },
  },

  wristband: {
    ticket: { label: 'Ticket', note: 'A digital ticket in the app’s wallet' },
    checkin: { label: 'Check-in', note: 'Scan the code at the gate' },
    wristbandStep: { label: 'Wristband', note: 'Collect your LED wristband at the gate' },
    experience: { label: 'Experience', note: 'The wristband lights up with the music during the concert' },
    interaction: { label: 'Interaction', note: 'Join the synchronised light sequences' },
    commerce: { label: 'Shopping', note: 'Pay at the stands across the festival' },
    journey: { label: 'Your own journey', note: 'My schedule, plus suggestions based on what you picked' },
  },

  wristbandCapabilities: {
    rfid: 'RFID',
    nfc: 'NFC',
    cashless: 'Cashless payment',
    access: 'Access control',
    tracking: 'Brand activation measurement',
  },

  lineup: {
    'live-band': {
      role: 'Live band',
      description: 'Opens the concert with a live set, before the stage turns neon.',
    },
    headliner: {
      role: 'Headliner',
      description: 'The peak performance, on the extended stage with the rig at full power.',
    },
    'singer-dj': {
      role: 'Singer × DJ',
      description: 'A crossover of vocals and an electronic set — the hinge between live music and the dancefloor.',
    },
    dj: {
      role: 'DJ',
      description: 'The last part of the night: unbroken music, the crowd moving as one.',
    },
    host: {
      role: 'Host',
      description: 'Keeps the night on tempo and leads the interactive moments such as Match Cam and Happiness Toast.',
    },
  },

  production: {
    lighting: { label: 'Lighting control', note: 'A control desk looking straight at the stage' },
    sound: { label: 'Sound', note: 'A sound engineer on duty all night' },
    camera: { label: 'Video production', note: 'Broadcast cameras for the screens and the archive' },
    backstage: { label: 'Backstage', note: 'The green room and the route to the stage' },
    'stage-entry': { label: 'Stage entrance', note: 'A dark corridor leading out into the light' },
    'stage-side': { label: 'Side of stage', note: 'The spot that sees both the stage and the crowd' },
  },

  audience: {
    '21-25': {
      title: 'Building a life of their own',
      lead: 'Just out of university or new to work, drawn to creative spaces, perfectly fine going alone.',
      traits: ['Studying and working at once', 'The café is a second office', 'Lives on social media'],
    },
    '26-35': {
      title: 'Independent, and clear about what they want',
      lead: 'Established in a career, earning, choosing friends and experiences rather than settling.',
      traits: ['Financially independent', 'Experience over things', 'Hard to please on quality'],
    },
    '36-52': {
      title: 'Composed and open',
      lead: 'Living alone is a choice, not a waiting room.',
      traits: ['Clear taste', 'Values respect', 'Open to meeting new people'],
    },
  },

  lifestyle: {
    'solo-travel': { label: 'Travelling alone', note: 'A trip that does not wait for an invitation' },
    fitness: { label: 'Training alone', note: 'Discipline with your own body' },
    wellness: { label: 'Self-care', note: 'Mental health treated seriously' },
    cafe: { label: 'Coffee alone', note: 'Quiet, not lonely' },
    freelance: { label: 'Working freelance', note: 'Own schedule, own responsibility' },
    'single-parent': { label: 'Single parenting', note: 'Still entitled to a good time' },
    'pet-parent': { label: 'Living with a pet', note: 'A family, arranged differently' },
    healing: { label: 'Healing', note: 'Saying it out loud already makes it lighter' },
    'confident-woman': { label: 'Confident on her own', note: 'Not waiting for permission to enjoy herself' },
    'confident-man': { label: 'Living deliberately', note: 'Knows what he wants and is in no rush' },
  },

  contentFormats: {
    'wemeet-podcast': {
      name: 'WeMeet Podcast',
      lead: 'A conversation series about living single, well.',
      body: 'One guest per episode telling a real story: independence, break-ups, starting over, living with a pet, travelling alone. Shot in studio, released before and after the festival.',
    },
    'podcast-story': {
      name: 'Podcast Story',
      lead: 'The short cut — one story, one person.',
      body: 'A compact format for social: one guest, one experience, cut into vertical clips.',
    },
    ugc: {
      name: 'User-generated content',
      lead: 'The visitors are the largest content team of all.',
      body: 'Points across the festival are designed to film well. There is a content contest and a template kit for visitors to build their own posts.',
    },
    livestream: {
      name: 'Livestream & KOLs',
      lead: 'Broadcasting live from inside the festival.',
      body: 'A studio set up on site, with hosts and guests talking in the middle of a real crowd.',
    },
    press: {
      name: 'Press',
      lead: 'A launch press conference and a dedicated working area.',
      body: 'An area reserved for reporters, official photography and downloadable material for newsrooms.',
    },
    ooh: {
      name: 'Out-of-home media',
      lead: 'The festival appears across the city before it happens.',
      body: 'Large screens and outdoor placements carry the festival identity into the streets.',
    },
    social: {
      name: 'Social content production',
      lead: 'A content team running throughout the campaign.',
      body: 'Stills, short video and countdown content produced against the campaign calendar.',
    },
    recap: {
      name: 'Recap film',
      lead: 'After the festival, the story keeps going.',
      body: 'A recap film and a post-event archive for partners, press and the community.',
    },
  },

  operations: {
    info: { label: 'Information desk', note: 'Ask anything, someone will answer' },
    safety: { label: 'Safety staff', note: 'Present in every zone, easy to spot' },
    'first-aid': { label: 'First aid point', note: 'Medical care and somewhere to rest if you need it' },
    accessible: { label: 'Accessible route', note: 'Wide, step-free, no barriers' },
    control: { label: 'Operations room', note: 'The whole site monitored throughout the event' },
    briefing: { label: 'Team briefing', note: 'Every staff member briefed before the gates open' },
  },

  faqs: [
    {
      q: 'Is this a dating event?',
      a: 'No. ONE BEAT NIGHT is a festival about freedom, community and music. Some activities help people get to know each other within a respectful frame, but matchmaking is not the point of the festival.',
    },
    {
      q: 'Can people in a relationship attend?',
      a: 'Yes. The festival is aimed at single people but nobody’s status is checked. Anyone who wants a good day and a concert is welcome.',
    },
    {
      q: 'When and where does it take place?',
      a: 'The festival is held in Ho Chi Minh City. The exact date, time and venue will be announced once the organisers confirm them — this page updates as soon as they do.',
    },
    {
      q: 'How much are tickets?',
      a: 'Pricing has not been published. The tiers and what they include are already on the Tickets page; prices and the on-sale date will follow.',
    },
    {
      q: 'Who is on the line-up?',
      a: 'The artist list has not been announced. The Artists page currently describes the performance roles in the structure of the concert.',
    },
    {
      q: 'Is it fine to come on my own?',
      a: 'The festival is designed for people arriving alone: hosted activities, conversation circles, shared tables. Nobody is left standing in a corner.',
    },
    {
      q: 'Can I bring my pet?',
      a: 'There is a dedicated pet zone, divided by size and temperament. The exact rules on species and vaccination records will be published in the visitor guide.',
    },
    {
      q: 'How accessible is the festival?',
      a: 'The grounds have step-free routes, an assisted viewing area and support staff. Details are in the Accessibility section of the visitor guide.',
    },
    {
      q: 'What is the LED wristband?',
      a: 'A light-up wristband collected at the gate. It lights with the music during the One Beat Light Moment of the concert.',
    },
    {
      q: 'Who do businesses contact about partnering?',
      a: 'See the Partners page for the ways to take part, then send your details through the form at the bottom of that page.',
    },
  ],

  brandMockups: {
    logo: { label: 'Full logo', note: 'Final version, with wordmark, on black' },
    emblem: { label: 'Emblem', note: 'Emblem only, transparent background' },
    ticket: { label: 'Ticket', note: 'Holographic ticket with a clear area for the tier' },
    wristband: { label: 'LED wristband', note: 'Product shot on black' },
    merch: { label: 'Merchandise', note: 'Shirt, cap, tote and power bank carrying the emblem' },
    app: { label: 'App', note: 'An empty phone frame for compositing the interface' },
    texture: { label: 'Gold texture', note: 'The material used for VIP borders and lettering' },
    entrance: { label: 'Entrance gate', note: 'The infinity gate, for article cover images' },
  },

  pressDownloads: {
    'logo-pack': { label: 'Logo & emblem pack', note: 'Transparent PNG plus the full version' },
    'key-visual': { label: 'Key visual', note: 'The festival’s lead image' },
    'photo-set': { label: 'Festival photo set', note: 'The image library across all six KITs' },
    'media-kit': { label: 'Media kit (PDF)', note: 'In preparation' },
    'fact-sheet': { label: 'Event fact sheet', note: 'Waiting on the organisers to confirm date, venue and scale' },
  },

  opportunityCategories: {
    visibility: 'Visibility',
    experience: 'Experience',
    engagement: 'Engagement',
    commerce: 'Commerce',
    data: 'Data',
    hospitality: 'Hospitality',
    content: 'Content',
    impact: 'Impact',
  },

  opportunities: {
    'central-activation': {
      name: 'Central activation',
      lead: 'An experience area placed on the festival’s main circulation route.',
      body:
        'Not one stand in a row of stands. This is a stop on the visitor’s journey: it has its own architecture, ' +
        'a reason to step inside, and something to take away.',
      journey: [
        { label: 'Build a destination', text: 'An experience area built to the brand identity, sitting on the main walking route.' },
        { label: 'Hold people there', text: 'Brand staff guide the experience instead of handing out leaflets.' },
        { label: 'Lead to an action', text: 'An offer on the spot, or a code to use after the festival.' },
        { label: 'Measure', text: 'Entries to the area, completed experiences, offers claimed.' },
      ],
    },
    'immersive-brand': {
      name: 'Immersive brand experience',
      lead: 'Light, projection and installation — the brand becomes a space.',
      body:
        'For brands that want to be remembered through a feeling rather than a logo. This area is usually the most photographed spot of the festival.',
      journey: [
        { label: 'Build the space', text: 'A large-scale installation with a route through it and a visual climax.' },
        { label: 'Create a moment', text: 'People stay longer because there is something worth seeing and worth photographing.' },
        { label: 'Spread outwards', text: 'Photos and videos posted by visitors carry the brand well beyond the area.' },
        { label: 'Measure', text: 'Dwell time, user-generated content, brand mentions.' },
      ],
    },
    sampling: {
      name: 'Sampling & trials',
      lead: 'Put the product into the right hands, right there.',
      body:
        'A sampling counter with staff to guide it, so people try and react on the spot. Suited to consumer goods, drinks and personal care.',
      journey: [
        { label: 'Open the counter', text: 'A counter within your sector cluster in the Mega Zone.' },
        { label: 'Let people really try', text: 'Staff show how to use it rather than just handing over a sample.' },
        { label: 'Buy now or buy later', text: 'An offer at the counter, or a code for the brand’s own sales channel.' },
        { label: 'Measure', text: 'Samples handed out, share of triallists who stay for advice.' },
      ],
    },
    'lead-gen': {
      name: 'Lead generation',
      lead: 'Sign-ups with clear consent, at a digital counter.',
      body:
        'Visitors choose to leave their details to receive an offer or follow the programme. Everything is opt-in and can be exported into the brand’s own systems.',
      journey: [
        { label: 'Set up the digital counter', text: 'A sign-up screen inside the brand’s activation area.' },
        { label: 'Trade value for details', text: 'Visitors get something concrete back: an offer, a gift, an experience slot.' },
        { label: 'Hand over to CRM', text: 'Opt-in data delivered in a format the brand can actually use.' },
        { label: 'Measure', text: 'Sign-ups, completion rate, data quality.' },
      ],
    },
    'qr-voucher': {
      name: 'Vouchers & O2O',
      lead: 'From the festival straight to the store or the app.',
      body: 'Visitors scan on the spot and redeem through the brand’s sales channel — linking behaviour at the event to real revenue.',
      journey: [
        { label: 'Attach the code to an experience', text: 'The code appears at the end of an experience rather than being handed out everywhere.' },
        { label: 'Scan on the spot', text: 'People scan with their phone; no extra app to download.' },
        { label: 'Redeem in the sales channel', text: 'The offer applies in store, on the website or in the brand’s app.' },
        { label: 'Measure', text: 'Scan rate, redemption rate, order value generated.' },
      ],
    },
    'product-launch': {
      name: 'Product launch',
      lead: 'One new product, the right crowd, one afternoon.',
      body: 'A product demonstration area with a small stage and a trial zone, with press and content creators present.',
      journey: [
        { label: 'Build the launch stage', text: 'A dedicated area with timed demonstrations.' },
        { label: 'Let people touch it', text: 'Visitors try the product straight after the presentation.' },
        { label: 'Pre-order on the spot', text: 'Register interest or pre-order through the brand’s channel.' },
        { label: 'Measure', text: 'Demo attendance, trials, registrations.' },
      ],
    },
    beauty: {
      name: 'Beauty & personal care',
      lead: 'Tried on real people, with a specialist guiding it.',
      body: 'Beauty fits this festival well: people come to look after themselves, not to buy in a hurry.',
      journey: [
        { label: 'Build the trial area', text: 'Chairs, mirrors and lighting proper enough to judge a product.' },
        { label: 'One-to-one consultation', text: 'The brand’s specialist works on the visitor directly.' },
        { label: 'An offer after the experience', text: 'People leave the counter with a reason to come back.' },
        { label: 'Measure', text: 'Trials, time per trial, share who take the offer.' },
      ],
    },
    technology: {
      name: 'Technology & devices',
      lead: 'Let people pick the device up, not look at it through glass.',
      body: 'A device trial area and interactive installations — suited to technology, telecoms and smart home brands.',
      journey: [
        { label: 'Build the trial area', text: 'Devices set up around real use cases.' },
        { label: 'Hands on', text: 'Visitors operate it themselves; staff only assist.' },
        { label: 'Offer or sign-up', text: 'Route them to a sales channel or a membership programme.' },
        { label: 'Measure', text: 'Trials, interaction time, sign-ups.' },
      ],
    },
    fintech: {
      name: 'Payments & fintech',
      lead: 'One way to pay across the whole festival.',
      body: 'A payment partner can cover every point of sale on site: food counters, stands, tickets, merchandise.',
      journey: [
        { label: 'Cover the points of sale', text: 'The payment method is available at every counter.' },
        { label: 'Reward paying with it', text: 'Discounts or cashback on transactions made at the festival.' },
        { label: 'Open new accounts', text: 'Visitors sign up on the spot to use the offer.' },
        { label: 'Measure', text: 'Transactions, transaction value, new accounts opened.' },
      ],
    },
    hospitality: {
      name: 'Corporate hospitality',
      lead: 'Invite your partners to an evening worth remembering.',
      body: 'A private hosting area, table service and a view of the stage — for relationships, not just for visibility.',
      journey: [
        { label: 'Reserve the area', text: 'A hosting area sized to your booking.' },
        { label: 'Meet in a space of your own', text: 'Brand leadership hosts the guests directly.' },
        { label: 'Build the relationship', text: 'The conversations happen somewhere more pleasant than a meeting room.' },
        { label: 'Measure', text: 'Guests attending, meetings held.' },
      ],
    },
    'stage-recognition': {
      name: 'Stage recognition',
      lead: 'Named in front of the whole crowd.',
      body: 'A formal recognition moment during the concert, with presence on the big screen and in the festival’s official material.',
      journey: [
        { label: 'Write it into the run of show', text: 'The recognition sits inside the stage script.' },
        { label: 'In front of everyone', text: 'The moment happens when the crowd is at its largest.' },
        { label: 'Into the official archive', text: 'It appears in the festival’s photos and recap video.' },
        { label: 'Measure', text: 'Audience present, views of the post-event material.' },
      ],
    },
    'naming-rights': {
      name: 'Experience naming rights',
      lead: 'A zone of the festival carries the brand’s name.',
      body:
        'The deepest level of involvement: the brand attaches its name to a space or an experience, appearing on the map, ' +
        'in the programme and across all the festival’s communications.',
      journey: [
        { label: 'Choose the space', text: 'Agree the zone and the scope of the naming.' },
        { label: 'Present throughout the journey', text: 'The name appears on the map, in the programme and on the signage.' },
        { label: 'Become part of the memory', text: 'Visitors refer to that zone by the brand’s name.' },
        { label: 'Measure', text: 'Mentions, visits to the zone, reach across the festival’s channels.' },
      ],
    },
    megasale: {
      name: 'MegaSale & Happiness Deals',
      lead: 'Concentrated offer windows, many brands at once.',
      body: 'A commercial event inside the event: timed offers, multi-brand gift boxes, and the crowd converging on the retail area.',
      journey: [
        { label: 'Book a window', text: 'The brand picks its own offer window.' },
        { label: 'Concentrate the crowd', text: 'Announced through the app and the local PA.' },
        { label: 'Sell on the spot', text: 'Transactions happen inside the window.' },
        { label: 'Measure', text: 'Sales per window, orders, gift boxes handed out.' },
      ],
    },
    o2o: {
      name: 'Collection at the festival',
      lead: 'Order online, collect at a counter inside the festival.',
      body: 'Connects the brand’s online channel to the crowd on site: people pre-order, come to collect, and stay to buy more.',
      journey: [
        { label: 'Open the collection counter', text: 'A counter inside the Mega Zone.' },
        { label: 'Visitors come to you', text: 'Anyone who pre-ordered has a reason to walk into the commerce area.' },
        { label: 'Buy more on the spot', text: 'The add-on rate once someone is already standing at the counter.' },
        { label: 'Measure', text: 'Orders collected, value of add-on purchases.' },
      ],
    },
    csr: {
      name: 'CSR / ESG — Happiness Fund',
      lead: 'The festival’s contribution to the community.',
      body:
        'A charitable activity tied to the theme of happiness, with visitors taking part — not a cheque held up for a photo.',
      journey: [
        { label: 'Choose the programme', text: 'Agree what is contributed and who benefits.' },
        { label: 'Visitors take part', text: 'People contribute directly at the CSR area.' },
        { label: 'A real story', text: 'Post-event content based on what was actually done, not staged.' },
        { label: 'Measure', text: 'Contributions, people taking part, documented results.' },
      ],
    },
    content: {
      name: 'Content & media',
      lead: 'The brand appears inside the content, not only in the advertising.',
      body:
        'The festival’s content system covers the WeMeet podcast, user-generated content, livestreams and the recap film — ' +
        'a brand can take part at each layer.',
      journey: [
        { label: 'Choose the format', text: 'Podcast, livestream, short film or user-generated content.' },
        { label: 'Produce it with the festival', text: 'Content made in the real setting of the event.' },
        { label: 'Distribute across channels', text: 'Runs on the festival’s channels, the brand’s, and the creators’.' },
        { label: 'Measure', text: 'Views, interactions, volume of content generated.' },
      ],
    },
  },

  impactModules: {
    'audience-reach': { label: 'On-site audience', unit: 'people', description: 'People present on the festival grounds' },
    'onsite-engagement': { label: 'On-site interactions', unit: 'interactions', description: 'Participation in the brand’s activation' },
    'digital-reach': { label: 'Digital reach', unit: 'impressions', description: 'Reach across the festival’s digital channels' },
    touchpoints: { label: 'Brand touchpoints', unit: 'points', description: 'Places the brand appears along the visitor journey' },
    leads: { label: 'Leads', unit: 'sign-ups', description: 'Sign-ups with clear consent' },
    sampling: { label: 'Samples distributed', unit: 'samples', description: 'Product placed directly in visitors’ hands' },
    commerce: { label: 'Transactions', unit: 'orders', description: 'Transactions generated at the festival' },
    'content-reach': { label: 'Content generated', unit: 'pieces', description: 'Posts, photos and video published by visitors and creators' },
    media: { label: 'Press presence', unit: 'articles', description: 'Articles and press material' },
    vip: { label: 'VIP guests', unit: 'guests', description: 'Guests hosted in the private area' },
    csr: { label: 'Community contribution', unit: 'contributions', description: 'Results of the CSR programme' },
  },

  partnerPortal: {
    why: 'Why ONE BEAT NIGHT',
    audience: 'Audience',
    ecosystem: 'Festival ecosystem',
    opportunities: 'Brand opportunities',
    formats: 'Activation formats',
    media: 'Media system',
    commercial: 'Commercial opportunities',
    hospitality: 'VIP & hospitality',
    csr: 'CSR',
    measurement: 'Measurement',
    packages: 'Ways to partner',
    contact: 'Contact',
  },

  partnerCategories: {
    fmcg: 'FMCG & beverages',
    beauty: 'Beauty & personal care',
    tech: 'Technology & telecoms',
    finance: 'Finance & payments',
    fashion: 'Fashion & lifestyle',
    travel: 'Travel & tourism',
    wellness: 'Health & fitness',
    pets: 'Pets',
  },

  footer: {
    navLabel: 'Footer navigation',
    location: 'Location',
    time: 'Date',
    partnership: 'Partnerships',
    workingChannel: 'Working channels',
    library: 'Library',
    imagesInKits: 'images across 6 KITs',
    openArchitecture: 'architecture open to',
    legal:
      'the festival’s digital platform. Dates, venue, ticket prices, line-up and every figure appear on this site only once the organisers confirm them.',
  },

  values: {
    FREEDOM: 'Freedom',
    'SELF-LOVE': 'Self-love',
    COMMUNITY: 'Community',
    CONNECTION: 'Connection',
    HAPPINESS: 'Happiness',
  },

  isNotA: ['A dating event', 'A matchmaking programme', 'An app for finding a partner'],

  home: {
    heroLeadA:
      'A day of freedom, community and music — where being single stops meaning being alone. Three stages:',
    heroStageA: 'meet yourself',
    heroStageB: 'meet others',
    heroStageC: 'meet happiness',

    movement: {
      kicker: '01 — The movement',
      titleA: 'Being single',
      titleB: 'no longer means',
      titleC: 'being alone',
      lead:
        'ONE BEAT NIGHT is not a matchmaking event. It is a festival for people living on their own by choice: free, self-aware, and open to meeting others when the moment feels right.',
      body:
        'Something may well begin here. But that is not the point, and not the measure of whether the day was good.',
      notA: 'What it is not:',
      captionMain: 'A red thread joining two people standing apart — the project’s original image.',
      captionFreedom: 'The golden bird leaving the infinity loop — freedom',
      captionConnection: 'Two hands wearing LED wristbands — connection',
    },

    audience: {
      kicker: '02 — Who it is for',
      titleA: 'Vietnamese adults',
      titleB: 'living',
      titleC: 'independently',
      lead:
        'Three age groups, three different ways of living alone — and one thing in common: none of them treats being single as a fault to be fixed.',
      asideKicker: 'Three age groups',
      note: 'Age groups taken from the project’s positioning documents. Expected audience size:',
    },

    day: {
      kicker: '03 — Daytime',
      lead:
        'Before the concert begins there is a whole day of it: running, talking, eating together, walking the dog, seeing the exhibition, trying new things. Drag sideways to look.',
    },

    mega: {
      kicker: '04 — Experiential commerce',
      lead:
        'Seven sectors inside one experiential marketplace. Visitors try real products, brands meet exactly the right people — and this is where most of the sponsorship activity happens.',
      heroTitle: 'One marketplace, seven worlds',
      heroLead: 'Stands are grouped by sector; one lap and you have touched all of them.',
      allTitle: 'See the whole marketplace',
      allLead: 'Seven sectors, timed offers, collection counter',
      cta: 'See the whole Mega Zone',
    },

    community: {
      kicker: '05 — Community',
      title: 'This festival belongs to the people who come.',
      lead:
        'There is a podcast of its own, a content contest, livestreams from inside the venue, a recap film afterwards. The festival’s story is carried on by the people who were there.',
      ctaPeople: 'Portrait of the community',
      ctaContent: 'Content system',
    },

    night: {
      kicker: '06 — The peak',
      lead:
        'When it gets dark, the whole site changes colour. Live music, the headliner, the singer × DJ format, the moments played between stage and crowd — and then thousands of LED wristbands lighting up on one beat.',
      headliner: 'Headliner',
      stage: 'Stage',
      stageValue: 'Main Stage',
      duration: 'Running time',
      durationValue: 'The whole evening',
      cta: 'Enter the concert',
    },

    final: {
      kicker: 'Last word',
      lead:
        'The festival does not tell you to go and find someone. It invites you to meet yourself first, meet others after, and then share a day worth remembering.',
      imagesNote: 'images across six KITs are running this site.',
    },
  },

  contentKinds: {
    podcast: 'Podcast',
    ugc: 'Visitor-made',
    media: 'Media',
    ooh: 'Out-of-home',
    social: 'Social',
    recap: 'Recap',
  },

  pages: {
    gallery: {
      metaTitle: 'Image library',
      metaDescription: 'The festival’s complete image library, arranged across six KITs.',
      kicker: 'Imagery',
      titleA: 'Festival',
      titleB: 'library',
      leadA: 'images across six KITs — all the visual content running this website. The architecture is open to',
      leadB: 'images;',
      leadC: 'slots are still empty, waiting for real photographs rather than filler.',
    },
    account: {
      metaTitle: 'Account',
      metaDescription: 'Ticket wallet, my schedule and favourites — the visitor account architecture.',
      kicker: 'Visitor',
      title: 'Your account',
      lead:
        'Ticket wallet, personal schedule and favourites. At this stage everything is stored on your own device — there is no server account and no data is sent anywhere.',
    },
    program: {
      metaTitle: 'Programme',
      metaDescription:
        'The full festival programme by time block, stage, zone and activity — with a personal schedule.',
      kicker: 'Programme',
      titleA: 'Festival',
      titleB: 'programme',
      leadA: 'items across four blocks: morning, midday, golden hour and the concert. Add them to “My schedule” to keep what you plan to attend.',
      dateLabel: 'Date:',
      doorsLabel: 'Doors open:',
    },
    faq: {
      metaTitle: 'FAQ',
      metaDescription:
        'Frequently asked questions about ONE BEAT NIGHT: what the festival is, tickets, line-up, pets, accessibility and safety.',
      kicker: 'FAQ',
      title: 'The questions we get most',
      lead: 'Where an answer is still vague, it is because the organisers have not announced it — this page does not guess on their behalf.',
      moreTitle: 'Not the question you had?',
      moreLead: 'The visitor guide goes into more detail on getting there, pets, accessibility and safety.',
      guideCta: 'Visitor guide',
      contactCta: 'Contact',
    },
    map: {
      metaTitle: 'Festival map',
      metaDescription:
        'The festival’s ten zones: Mega Zone, Connection Zone, pet zone, exhibition, food, Colour Run, stage, VIP and support.',
      kicker: 'Orientation',
      titleA: 'Festival',
      titleB: 'map',
      lead:
        'Ten zones, each with its own rhythm. Tap a zone to see its activities, services and real photographs.',
      closeKicker: 'Up close',
      closeTitle: 'Each zone from above',
      opsKicker: 'Operations',
      opsTitle: 'Who keeps the site running',
      opsLead:
        'Information, medical, safety, accessible routes and the operations room — the part nobody notices while everything works.',
    },
    artists: {
      metaTitle: 'Artists & hosts',
      metaDescription:
        'The performance roles in the One Beat Night concert. The artist line-up will be announced later.',
      kicker: 'Line-up',
      titleA: 'Artists',
      titleB: '& hosts',
      lead:
        'The artist list has not been announced. This page describes the performance roles already set in the run of show — once the organisers confirm names, the placeholders become real artists.',
      moreKicker: 'And more',
      moreTitle: 'Other roles',
      moreBody:
        'The concert script still has room for guests and special segments. They will be added here once the organisers confirm them.',
      whyKicker: 'Why there are no names yet',
      whyTitle: 'No invented names for a real stage',
      whyLead:
        'This page shows only what is confirmed in the project documents. The line-up, the date and ticket prices will appear exactly when the organisers announce them, not before.',
      pressCta: 'Sign up for press updates',
    },
    megaZone: {
      metaTitle: 'Mega Zone',
      metaDescription:
        'The festival’s experiential marketplace: seven sectors, timed offers, and where most brand activity happens.',
      kicker: 'Experiential commerce',
      lead:
        'Seven sectors in one marketplace. Visitors come to try new things, brands come to meet exactly the right people — and neither has to talk through a leaflet.',
      sectorsKicker: 'Seven sectors',
      sectorsTitle: 'One lap and you have touched all of them',
      boxTitle: 'Multi-brand gift box',
      boxNote: 'Products from several brands gathered into one box',
      momentsKicker: 'How the commerce works',
      momentsTitle: 'Four buying moments in a single day',
      moments: {
        sampling: {
          title: 'Try first, decide later',
          body: 'Visitors taste it, hold it, use it right at the counter. The real reaction happens there, not through an advert.',
        },
        'flash-sale': {
          title: 'Offer windows',
          body: 'MegaSale concentrates the crowd into one beat: several brands open offers at once and the whole marketplace moves with it.',
        },
        'happiness-box': {
          title: 'Happiness Deals',
          body: 'A gift box assembled from several labels — a very concrete reason to walk the whole commerce area.',
        },
        pickup: {
          title: 'Order online, collect at the festival',
          body: 'The collection counter connects a brand’s online channel to the crowd standing right there.',
        },
      },
      sectorsFitKicker: 'Sectors that fit',
      sectorsFitTitle: 'The kinds of brands this area suits',
      sectorsFitLead: 'This describes categories, not a sponsor list. The festival has not announced any partners.',
      cta: 'See the brand opportunities',
    },

    community: {
      metaTitle: 'Community',
      metaDescription:
        'Who this festival belongs to: three age groups and eight slices of life from Vietnamese adults living independently.',
      kicker: 'People',
      titleA: 'Who this',
      titleB: 'festival is for',
      lead:
        'Not “people who have not found anyone yet”. Adults living independently — and treating that as a choice rather than a waiting room.',
      groupsKicker: 'Three age groups',
      groupsTitle: 'One city, three ways of living alone',
      groupsLead: 'Age groups taken from the project’s positioning documents.',
      lifeKicker: 'Lifestyles',
      lifeTitle: 'Eight slices of an independent life',
      lifeLead:
        'Not a demographic portrait on a slide. These are real scenes from an ordinary week in the life of the festival’s audience.',
      caption: 'Two hands in LED wristbands about to touch — the original image of the idea of connection.',
      safetyKicker: 'Principles',
      safetyTitle: 'Connection within a frame',
      safetyLead:
        'Every meeting activity has a facilitator, a code of conduct and the right to stop. Nobody is pushed into a conversation they do not want, and nobody is left standing in a corner.',
      safetyRules: [
        'A host is present throughout every activity in the Connection Zone',
        'The code of conduct is published in advance and repeated on site',
        'Support staff and help points in every zone',
        'Visitors decide for themselves how far they take part',
      ],
      scale: 'Expected audience size:',
      guideCta: 'Visitor guide',
    },

    visitorGuide: {
      metaTitle: 'Visitor guide',
      metaDescription:
        'What to bring, how to get there, the rules on pets, accessibility support and safety at ONE BEAT NIGHT.',
      kicker: 'Preparation',
      title: 'Visitor guide',
      lead:
        'Everything worth knowing before you arrive: getting in, moving around the site, bringing a pet, accessibility support and the code of conduct.',
      dateLabel: 'Date:',
      doorsLabel: 'Doors:',
      venueLabel: 'Venue:',
      sections: {
        before: {
          title: 'Before you go',
          items: [
            'Your digital ticket lives in the app’s wallet — nothing needs printing.',
            'Save “My schedule” in advance so you know where you want to be, especially for activities that need a booking.',
            'Dress comfortably: most daytime activities are outdoors.',
            'The exact date, opening time and venue will be updated on this page the moment they are announced.',
          ],
        },
        arrive: {
          title: 'Arriving and getting in',
          items: [
            'Scan the QR code on your ticket at the gate to check in.',
            'Collect your LED wristband at the gate — it is used for the synchronised light sequence during the concert.',
            'VIP guests and partner invitees have their own entrance.',
            'The information desk sits just past the gate, with staff on hand.',
          ],
        },
        pets: {
          title: 'Bringing a pet',
          items: [
            'The pet zone is divided by size and temperament: small dogs, large dogs, cats, senior dogs.',
            'Owners are responsible for looking after their own animal throughout the visit.',
            'There is water for pets, shaded areas and a photo spot.',
            'The exact rules on vaccination records and species will be published alongside the event details.',
          ],
        },
        access: {
          title: 'Accessibility',
          items: [
            'The main routes are step-free and wide enough for wheelchairs and pushchairs.',
            'The concert viewing area has positions for visitors who need support.',
            'Support staff are present in every zone and easy to identify by their uniform.',
            'The first aid point and a quiet rest area are open throughout the event.',
          ],
        },
        respect: {
          title: 'Conduct and safety',
          items: [
            'Every connection activity has a facilitator and a clear code of conduct.',
            'You may leave any activity at any time, without explaining yourself.',
            'If something feels wrong, tell the staff in that zone — they are briefed for exactly this.',
            'Do not photograph or film other people without their agreement.',
          ],
        },
      },
      servicesKicker: 'On-site services',
      servicesTitle: 'Who helps when you need it',
    },

    contact: {
      metaTitle: 'Contact',
      metaDescription:
        'The working channels for ONE BEAT NIGHT: brand partnerships, press, and visitors.',
      kicker: 'Contact',
      title: 'Working channels',
      lead:
        'Official contact details will be added once the organisers provide them. The form below is already built and ready to connect to an intake system.',
      channels: {
        partners: {
          label: 'Brand partnerships',
          note: 'Sponsorship, brand activations, corporate hospitality, commerce at the festival.',
          cta: 'See the partnership options',
        },
        press: {
          label: 'Press & media',
          note: 'Media kit, official photography, interviews, accreditation.',
          cta: 'Go to the press room',
        },
        visitors: {
          label: 'Visitors',
          note: 'Tickets, programme, rules of attendance, accessibility support.',
          cta: 'See the FAQ',
        },
      },
      infoKicker: 'Event details',
      cityLabel: 'City',
      venueLabel: 'Venue',
      addressLabel: 'Address',
      dateLabel: 'Date',
      organizerLabel: 'Organiser',
    },

    experience: {
      metaTitle: 'Day Festival',
      metaDescription:
        'A whole day before the concert: flashmob, Colour Run, Connection Zone, Happy Lunch, pet zone, Mega Zone, visual art.',
      kicker: 'Daytime',
      lead:
        'Before it gets dark there is a whole festival. This is the part most people will remember longest — not because of the stage, but because of the people they met.',
      rhythmKicker: 'The rhythm of a day',
      rhythmTitle: 'Morning · midday · golden hour · night',
      rhythmLead: 'The site changes light four times a day. This page follows the same rhythm.',
      railKickerA: 'daytime activities',
      railTitle: 'Drag sideways to explore',
      filmKicker: 'Film',
      filmTitle: 'A day at the Day Festival',
      stories: {
        flashmob: {
          title: 'Opening on one shared beat',
          body: 'The festival opens with a flashmob on the main plaza. Simple moves, fifteen minutes of rehearsal, anyone can join — and by the end everyone knows a few more faces.',
        },
        'color-run': {
          title: 'A run with no clock',
          body: 'The Colour Run goes through three colour stations and across the line. No leaderboard, just a badge you can wear and a set of clothes covered in colour.',
        },
        'tram-gap': {
          title: 'The Connection Zone — where strangers sit down together',
          body: 'Coffee Talk for people who like to listen, Coffee Circles for people who want to talk, Match & Meet for people ready to meet one to one. Everything is hosted, and you can stop at any time.',
        },
        pets: {
          title: 'A pet zone divided by temperament',
          body: 'Small dogs, large dogs, cats and senior dogs each have their own area. There are puppy socialisation sessions, a small afternoon parade and a photo spot.',
        },
        'match-meet': {
          title: 'Match & Meet: one to one, with set times',
          body: 'Two-seat tables in the connection area, a few minutes each, then you rotate to someone new. There is a clear code of conduct, a host present, and you can stop whenever you like.',
        },
        'music-corner': {
          title: 'An acoustic corner in the middle of the day',
          body: 'One artist, one guitar, a few dozen people sitting around. The smallest music of the festival and usually the bit people remember longest.',
        },
        art: {
          title: 'Walking through three layers of light',
          body: 'A large visual installation inspired by the resilience of succulents. A one-way route; walk it to the end and you understand the festival’s journey without anyone explaining it.',
        },
      },
    },

    oneBeatNight: {
      metaTitle: 'One Beat Night — the concert',
      metaDescription:
        'The peak of the festival: live music, the headliner, singer × DJ, Match Cam, Happiness Toast and the moment thousands of LED wristbands light up together.',
      kicker: 'The peak',
      lead:
        'When it gets dark the whole site changes colour. This is where everything that happened all day gathers into one evening.',
      headlinerLabel: 'Headliner',
      dateLabel: 'Date',
      stageLabel: 'Stage',
      stageValue: 'Main Stage',
      scriptKicker: 'Run of show',
      scriptTitle: 'The night runs on five roles',
      scriptLead:
        'The artist list has not been announced. What is settled is the structure of the night: who appears when, and what for.',
      interactKicker: 'Interaction',
      interactTitle: 'The crowd is part of the stage too',
      interactLead:
        'Match Cam, Happiness Toast and the hosted moments in between — where the audience becomes the main character.',
      crewKicker: 'Behind the scenes',
      crewTitle: 'A concert works because of the people who never go on stage',
      crewLead:
        'Lighting, sound, video, backstage coordination — the craft that decides the quality of the night.',
      closingTitle: 'The last part of the night is not the loudest — it is the quietest.',
      closingBody:
        'After the finale the lights drop and the music softens. What remains is thousands of people who have just shared an evening — many of whom arrived on their own.',
      rolesCta: 'The performance roles',
      programCta: 'Concert programme',
    },

    tickets: {
      metaTitle: 'Tickets & tiers',
      metaDescription:
        'The five ONE BEAT NIGHT ticket tiers, what each one includes, the purchase flow and the LED wristband journey.',
      kicker: 'Join in',
      titleA: 'Tickets',
      titleB: '& tiers',
      lead:
        'What each tier includes is fixed by the experience. Prices and the on-sale date will be announced once the organisers confirm them — this page shows no unverified figures.',
      priceLabel: 'Ticket price',
      priceShort: 'Price',
      onsaleLabel: 'On sale from',
      tiersCountLabel: 'Number of tiers',
      tiersCountA: 'ticket tiers',
      chooseTitle: 'Choose how you want to spend the day',
      chooseLead:
        'The difference is where you stand, how you are looked after and which entrance you use — not what you get to see.',
      proposedTitle: 'A tier proposed by the design team; not yet approved by the organisers',
      compareKicker: 'Side by side',
      compareTitle: 'What each tier includes',
      compareCaption: 'Comparison of what each ticket tier includes',
      benefitsCol: 'Included',
      yes: 'Yes',
      no: 'No',
      flowKicker: 'The flow',
      flowTitle: 'From choosing a tier to your ticket wallet',
      flowLead:
        'The whole flow is built except the payment step — the site is not connected to any provider and does not pretend to be.',
      techKicker: 'Event technology',
      techTitle: 'Ticket → check-in → wristband → experience',
      techLead:
        'You collect the LED wristband at the gate and it lights with the music during the concert. The capabilities below are architecture held in reserve — no system has been confirmed as deployed.',
      capabilitiesLabel: 'Extended capabilities',
      notConfirmed: 'not confirmed',
    },

    press: {
      metaTitle: 'Press room',
      metaDescription: 'Media kit, logo pack, festival photography, event details and press accreditation.',
      kicker: 'Press',
      titleA: 'Press',
      titleB: 'room',
      lead: 'The festival’s official material for newsrooms, broadcasters and content creators.',
      downloadsKicker: 'Material',
      downloadsTitle: 'Downloads',
      inLibrary: 'Available in the image library',
      preparing: 'In preparation',
      moreTitle: 'Need something else?',
      moreBody: 'Photography on request, interviews, figures — send your request through the press contact.',
      downloadsNote:
        'The packaged files (media kit PDF, zipped photo set) will replace these once the organisers approve the final versions. This page does not create download links to files that do not exist.',
      brandKicker: 'Identity',
      brandTitleA: 'Studio',
      brandTitleB: 'imagery',
      brandLead:
        'Logo, emblem, ticket, wristband, merchandise, app and materials — high-resolution originals with no text over them.',
      photosKicker: 'Photography',
      photosTitle: 'Official photographs',
      photosLead:
        'Tap an image to see it full size. The photographs carry no text, no year and no watermark — all the information comes from the site itself.',
      infoKicker: 'Details',
      infoTitle: 'The organisers',
      eventNameLabel: 'Event name',
      cityLabel: 'City',
      organizerLabel: 'Organiser',
      dateLabel: 'Date',
      venueLabel: 'Venue',
      pressContactLabel: 'Press contact',
      accredTitle: 'Press accreditation',
      accredBody:
        'The press working area opens for accreditation once the event date is announced. The form below is built; the intake system is not yet connected.',
      accredItems: [
        'Publication / channel',
        'Reporter name and role',
        'Type of coverage: photo, video, writing, livestream',
        'Equipment being brought',
      ],
      accredBadge: 'Accreditation opens once the date is announced',
    },

    partners: {
      metaTitle: 'Sponsors & partners',
      metaDescription:
        'The ONE BEAT NIGHT brand ecosystem: visibility, experience, commerce, data, hospitality, content and CSR opportunities.',
      kicker: 'Partners',
      titleA: 'Not an advertising warehouse.',
      titleB: 'An ecosystem.',
      lead:
        'A brand is not buying a place to hang a logo. A brand chooses a role in the day of thousands of people.',
      contactLine: 'Partnership contact:',
      whyKicker: '01 — Why ONE BEAT NIGHT',
      whyTitle: 'Nine layers of value in a single event',
      whyLead: 'Each layer is a different way for a brand to take part. Few events have all nine.',
      layers: {
        movement: { label: 'A cultural movement', note: 'A clear position: freedom, self-love, community — not a dating event' },
        community: { label: 'A community', note: 'Vietnamese adults living independently, across three age groups' },
        day: { label: 'A daytime festival', note: 'Activities running from morning through golden hour' },
        music: { label: 'A concert', note: 'A large stage with professional lighting and sound' },
        media: { label: 'A media platform', note: 'Podcast, UGC, livestream, press, OOH, recap film' },
        commerce: { label: 'A commerce platform', note: 'Mega Zone, MegaSale, O2O, payments' },
        activation: { label: 'A brand activation environment', note: 'Experience areas placed along the visitor journey' },
        data: { label: 'A data and interaction layer', note: 'Opt-in sign-ups, measurement at every step' },
        ip: { label: 'A long-term asset', note: 'Architecture built for several editions, not one' },
      },
      audienceKicker: '02 — Audience',
      audienceTitle: 'Who will be standing in front of your stand',
      audienceLead:
        'Three age groups are set out in the positioning documents. The exact scale has not been announced — and this page does not guess on the organisers’ behalf.',
      scaleLabel: 'Expected scale:',
      reachLabel: 'Media reach:',
      ecosystemKicker: '03 — Festival ecosystem',
      ecosystemTitle: 'Ten zones, ten different ways of reaching the audience',
      opportunitiesKicker: '04 — Brand opportunities',
      opportunitiesTitleA: 'ways to take part',
      opportunitiesLead:
        'Pick one to see what the brand does at each step: activate, engage, convert and measure.',
      formatsKicker: '05 — Activation formats',
      formatsTitle: 'Eight groups of value',
      mediaKicker: '06 — Media system',
      mediaTitle: 'The brand appears inside the content, not only in the advertising',
      mediaLead:
        'Eight content formats running before, during and after the festival — each one a place a brand can take part.',
      commercialKicker: '07 — Commercial opportunities',
      commercialTitle: 'From experience to transaction',
      commercialLead:
        'Mega Zone, MegaSale, Happiness Deals, the O2O collection counter and on-site payments — an unbroken chain from the moment of attention to the moment of payment.',
      hospitalityKicker: '08 — VIP & hospitality',
      hospitalityTitle: 'Invite your partners to an evening worth remembering',
      hospitalityLead:
        'A private hosting area, table service, a view of the stage, support with welcoming guests. Partnerships come along more easily here than in a meeting room.',
      hospitalityTags: ['Private entrance', 'Reserved seating', 'Table service', 'Guest coordination support'],
      csrKicker: '09 — CSR / ESG',
      csrTitle: 'Happiness Fund',
      csrLead:
        'The festival’s community contribution involves the visitors directly — so the story afterwards rests on what was actually done, not on a cheque held up for a photo.',
      measureKicker: '10 — Measurement',
      measureTitle: 'If you cannot measure it, do not claim it',
      measureLead:
        'Eleven measurement modules are built. All of them are empty because the festival has no verified figures yet — and no number will be entered here before it is real.',
      measureCaption: 'The analytics team watching operational figures during the event — where the real data will come from.',
      packagesKicker: '11 — Ways to partner',
      packagesTitle: 'No rate card yet',
      packagesLead:
        'The organisers have not published any sponsorship package or investment level. This page describes the roles available; a specific proposal is built brand by brand.',
      contactKicker: '12 — Contact',
      contactTitle: 'ONE BEAT NIGHT IS NOT A WAREHOUSE. IT IS AN ECOSYSTEM FOR BRANDS TO STEP INTO.',
      contactLead:
        'Tell us which role your brand wants to play, and the proposal will be built around it.',
      partnerEmailLabel: 'Partnership email:',
      organizerLabel: 'Organiser:',
      hotlineLabel: 'Hotline:',
      pressCta: 'Download material from the press room',
    },

    news: {
      metaTitle: 'Stories & content',
      metaDescription:
        'The festival’s content system: WeMeet Podcast, user-generated content, livestreams, press, OOH and the recap film.',
      kicker: 'Content',
      title: 'The story runs before and after the festival',
      lead:
        'The festival is not only one day. These are the project’s content formats — not published posts, because the campaign has not started.',
      reelsKicker: 'Vertical formats',
      reelsTitle: 'Reels from inside the festival',
      emptyKicker: 'Nothing published yet',
      emptyLead:
        'The festival has not launched its media campaign, so there are no releases or articles here yet. The structure is ready: when the real content arrives, this is exactly where it lands.',
      pressCta: 'Press room',
    },
  },

  ui: {
    ticketFlow: {
      chooseTier: 'Choose a tier',
      holderTitle: 'Ticket holder details',
      holderName: 'Full name',
      holderPlaceholder: 'Alex Nguyen',
      holderNote: 'This trial run sends nothing anywhere — what you type stays inside your browser.',
      promoTitle: 'Promo code',
      promoLabel: 'Enter a code if you have one',
      promoPlaceholder: 'FOR EXAMPLE: OBN2026',
      promoNote: 'No promotion has been announced yet, so the system does not check codes.',
      summaryTitle: 'Confirm the order',
      rowTier: 'Tier',
      rowHolder: 'Holder',
      rowPromo: 'Promo code',
      rowTotal: 'Total',
      notEntered: 'Not entered',
      none: 'None',
      paymentTitle: 'Payment',
      paymentBadge: 'Integration layer empty',
      paymentBody:
        'The site is not connected to any payment provider. The architecture is already separated: once the organisers choose a gateway, it plugs into exactly this step and the rest stays as it is.',
      issueDemo: 'Issue a demo ticket to see the wallet',
      walletTitle: 'The ticket is in your wallet',
      walletDone: 'A demo ticket has been created. See the mock QR code in the right-hand column or on the Account page.',
      walletEmptyFlow: 'No ticket has been issued in this session.',
      back: 'Back',
      next: 'Continue',
      wallet: 'Ticket wallet',
      walletEmpty: 'No tickets yet. Walk through the flow on the left to see what a digital ticket looks like in the wallet.',
      demoTicket: 'Demo ticket',
      mockCode: 'Mock check-in code',
      deleteTicket: 'Delete this ticket',
      mockCodeAria: 'Mock code',
    },

    leadForm: {
      errCompany: 'Please tell us the company name',
      errName: 'Please tell us the contact name',
      errEmail: 'That email address does not look right',
      doneBadge: 'Recorded in this session',
      thanks: 'Thank you',
      doneBodyA: 'The site is not connected to the organisers’ intake system, so what you just filled in',
      doneBodyStrong: 'has not been sent anywhere',
      doneBodyB: '. The form architecture is ready: once there is an address to send to, the data goes straight there.',
      again: 'Fill it in again',
      title: 'Send us your partnership details',
      lead: 'Tell us which part your brand is interested in and the festival team will build the matching proposal.',
      company: 'Company',
      contact: 'Contact person',
      phone: 'Phone',
      interest: 'Interested in',
      choose: '— Choose a format —',
      message: 'Message',
      submit: 'Send',
      demoNote: 'The form is in trial mode: nothing leaves your browser.',
    },

    impact: {
      whatKicker: 'What gets measured',
      waiting: 'awaiting real figures',
      emptyNote:
        'Every field is empty because the festival has no verified figures yet. This structure plugs straight into real data after the event — no number here is offered as a promise.',
      estimateKicker: 'Estimate it yourself',
      yourNumbers: 'Numbers you entered',
      estimateLead:
        'Enter your own brand’s assumptions to see how the measurement structure works. The festival has not published a scale, so the software fills in nothing by itself.',
      inAudience: 'Attendance you are assuming',
      unitPeople: 'people',
      visitRate: 'Share who visit your activation',
      touchpointsInput: 'Touchpoints along the journey',
      unitPoints: 'points',
      derivedVisits: 'Visits to the activation',
      derivedImpressions: 'Brand impressions',
      derivedLeads: 'Lead range',
      derivedTouchpoints: 'Touchpoints per visitor',
    },

    account: {
      tabsAria: 'Account sections',
      walletTab: 'Ticket wallet',
      scheduleTab: 'My schedule',
      favoritesTab: 'Favourites',
      walletEmptyTitle: 'Your wallet is empty',
      walletEmptyBody: 'Tickets are not on sale yet. You can walk through the booking flow on the Tickets page to see what a digital ticket looks like.',
      walletEmptyCta: 'Go to Tickets',
      demoTicket: 'Demo ticket',
      mockCode: 'Mock check-in code',
      deleteTicket: 'Delete ticket',
      scheduleEmptyTitle: 'Your schedule is empty',
      scheduleEmptyBody: 'Go to the Programme page and tap the plus on the activities you want to attend.',
      scheduleEmptyCta: 'Open the programme',
      clashSuffix: 'items clash with each other.',
      minutes: 'min',
      remove: 'Remove',
      clearSchedule: 'Clear the whole schedule',
      favEmptyTitle: 'No favourites yet',
      favEmptyBody: 'Tap the heart on an image in the library to keep the frames you like.',
      favEmptyCta: 'Open the image library',
    },

    map: {
      allZones: 'All zones',
      zoomOut: 'Zoom out',
      zoomIn: 'Zoom in',
      reset: 'Reset view',
      zonesAria: 'The festival zones',
      schematicNote:
        'The diagram shows how the zones relate to each other. A surveyed site plan will replace it once the organisers provide one.',
      closeDetail: 'Close zone details',
      servicesTitle: 'Services in this zone',
      accessTag: 'Step-free access',
      activitiesTitle: 'Activities',
      pickKicker: 'Pick a zone',
      pickBody: 'Tap a coloured area on the map to see that zone’s activities, services and photographs.',
    },

    sponsorTeaser: {
      kicker: '07 — For brands',
      titleA: 'is not',
      titleB: 'a place to',
      titleC: 'hang a logo',
      lead:
        'It is an ecosystem a brand can step into: an experience area, a commercial window, a moment in the stage script, or a name attached to a whole zone.',
      countSuffix: 'ways to take part, grouped into eight kinds of value.',
      measureNote: 'With a measurement structure ready to connect to real data afterwards. Partnership contact:',
      portalCta: 'Enter the partner portal',
      ticketsTitleA: 'Three ways',
      ticketsTitleB: 'into',
      ticketsTitleC: 'the festival',
      ticketsLead:
        'Pricing and the on-sale date follow later. What each tier includes is fixed by the experience, not by a number.',
      priceLabel: 'Price',
      ticketsCta: 'See the tiers, the wallet and the LED wristband',
    },

    rail: {
      filterAria: 'Filter activities by category',
      prev: 'Back',
      next: 'Forward',
      listAria: 'Festival activities',
      needsSignup: 'Sign-up required',
    },

    opportunity: {
      filterAria: 'Filter opportunities by category',
      listAria: 'List of opportunities',
      stepsAria: 'Steps of the brand activation',
      suggestedZone: 'Suggested location:',
      prevStep: 'Previous step',
      nextStep: 'Next step',
    },

    schedule: {
      views: {
        day: 'By time block',
        stage: 'By stage',
        zone: 'By zone',
        activity: 'By activity',
        now: 'My schedule',
      },
      viewsAria: 'How to view the programme',
      allActivities: 'All activities',
      relativeTimes: 'Relative times — the official clock has not been announced',
      clashA: 'There are',
      clashB: 'clashing items in your schedule — the clashes are marked below.',
      emptyMine: 'Your schedule is empty. Tap the plus on any item in the other views to add it here.',
      addTo: 'Add to my schedule',
      removeFrom: 'Remove from my schedule',
    },

    video: {
      captionsLabel: 'English',
      unmute: 'Unmute',
      mute: 'Mute',
      comingSoon: 'Video to follow',
      srNote: 'the video has not been supplied; the poster image is shown instead.',
    },

    lightMoment: {
      kicker: 'The signature moment',
      body:
        'Thousands of LED wristbands lighting up on the same beat. This is where the “one beat” in the name becomes something you can see — the whole crowd turning into a wave of light.',
      pause: 'Pause the effect',
      play: 'Run the effect',
    },

    gallery: {
      kits: {
        'KIT-01': 'Brand & hero',
        'KIT-02': 'Day Festival',
        'KIT-03': 'The concert',
        'KIT-04': 'Community & media',
        'KIT-05': 'Sponsorship & commerce',
        'KIT-06': 'Journey & operations',
      },
      all: 'All',
      shapes: { all: 'Any shape', landscape: 'Landscape', portrait: 'Portrait', square: 'Square' },
      countSuffix: 'images',
      open: 'Open',
      like: 'Add to favourites',
      unlike: 'Remove from favourites',
      close: 'Close',
    },

    misc: {
      unlike: 'Unlike',
      clearAll: 'Clear all',
      localOnly:
        'What you see on this page lives in your browser and is not sent to any server. When the real account system is built, this section connects to it.',
      estimateDisclaimer:
        'The figures above are multiplied out from the assumptions you just entered. They are not a forecast by the organisers and not a promise from the festival.',
      openMap: 'Open the interactive map',
      heroAlt:
        'ONE BEAT NIGHT concert: a wave of light from thousands of LED wristbands running across the crowd, the stage blazing in the distance',
    },

    mediaWall: { close: 'Close image' },

    partnerNav: { aria: 'Contents of the partner page' },

    journey: { stage: 'Stage', progress: 'Journey · stage' },
  },

  videos: {
    heroFilm: 'ONE BEAT NIGHT trailer',
    dayFestival: 'A day at the Day Festival',
    concertTeaser: 'Concert teaser',
    sponsorFilm: 'Brand opportunities film',
    afterMovie: 'Recap film',
    reelDance: 'Reel — dancing at the concert',
    reelCreator: 'Reel — content creators at the festival',
    reelFlashmob: 'Reel — the opening flashmob',
  },
};
