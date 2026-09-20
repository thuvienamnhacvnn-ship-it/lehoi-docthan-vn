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

export const opportunityCategories: Record<OpportunityCategory, { en: string; color: string }> = {
  visibility: { en: 'VISIBILITY', color: '#f5b942' },
  experience: { en: 'EXPERIENCE', color: '#7b2cff' },
  engagement: { en: 'ENGAGEMENT', color: '#ff2e9a' },
  commerce: { en: 'COMMERCE', color: '#2f6bff' },
  data: { en: 'DATA', color: '#00d1ff' },
  hospitality: { en: 'HOSPITALITY', color: '#f5b942' },
  content: { en: 'CONTENT', color: '#ff2e9a' },
  impact: { en: 'IMPACT', color: '#00d1ff' },
};

/** Bốn bước của một hoạt động thương hiệu. Tên bước là mã, chữ nằm ở bộ dịch. */
export const ACTIVATION_STEPS = ['ACTIVATE', 'ENGAGE', 'CONVERT', 'MEASURE'] as const;
export type ActivationStep = (typeof ACTIVATION_STEPS)[number];

export interface SponsorOpportunity {
  id:
    | 'central-activation'
    | 'immersive-brand'
    | 'sampling'
    | 'lead-gen'
    | 'qr-voucher'
    | 'product-launch'
    | 'beauty'
    | 'technology'
    | 'fintech'
    | 'hospitality'
    | 'stage-recognition'
    | 'naming-rights'
    | 'megasale'
    | 'o2o'
    | 'csr'
    | 'content';
  category: OpportunityCategory;
  assetId: string;
  zoneId?: ZoneId;
}

export const opportunities: SponsorOpportunity[] = [
  {
    id: 'central-activation',
    category: 'experience',
    assetId: 'kit-05-01-sponsor-central-booth',
    zoneId: 'mega-zone',
  },
  {
    id: 'immersive-brand',
    category: 'experience',
    assetId: 'kit-05-03-premium-brand-activation',
  },
  {
    id: 'sampling',
    category: 'engagement',
    assetId: 'kit-05-04-product-sampling-counter',
    zoneId: 'mega-zone',
  },
  {
    id: 'lead-gen',
    category: 'data',
    assetId: 'kit-05-07-digital-lead-registration',
  },
  {
    id: 'qr-voucher',
    category: 'commerce',
    assetId: 'kit-05-06-qr-voucher-interaction',
  },
  {
    id: 'product-launch',
    category: 'visibility',
    assetId: 'kit-05-08-brand-product-demo',
  },
  {
    id: 'beauty',
    category: 'experience',
    assetId: 'kit-05-09-beauty-try-on-activation',
  },
  {
    id: 'technology',
    category: 'engagement',
    assetId: 'kit-05-10-technology-trial-activation',
  },
  {
    id: 'fintech',
    category: 'commerce',
    assetId: 'kit-05-11-fintech-payment-experience',
  },
  {
    id: 'hospitality',
    category: 'hospitality',
    assetId: 'kit-05-14-sponsor-executive-hosting',
    zoneId: 'vip',
  },
  {
    id: 'stage-recognition',
    category: 'visibility',
    assetId: 'kit-05-17-sponsor-stage-recognition',
    zoneId: 'concert',
  },
  {
    id: 'naming-rights',
    category: 'visibility',
    assetId: 'kit-05-18-branded-experience-naming-concept',
  },
  {
    id: 'megasale',
    category: 'commerce',
    assetId: 'kit-05-19-commercial-flash-sale-moment',
    zoneId: 'mega-zone',
  },
  {
    id: 'o2o',
    category: 'commerce',
    assetId: 'kit-05-21-ecommerce-pickup-counter',
  },
  {
    id: 'csr',
    category: 'impact',
    assetId: 'kit-05-22-csr-happiness-fund',
  },
  {
    id: 'content',
    category: 'content',
    assetId: 'kit-04-18-kol-livestream-studio',
  },
];

/** Các module của bộ đo tác động (§06). Số liệu để TRỐNG cho tới khi có dữ liệu thật. */
export interface ImpactModule {
  id:
    | 'audience-reach'
    | 'onsite-engagement'
    | 'digital-reach'
    | 'touchpoints'
    | 'leads'
    | 'sampling'
    | 'commerce'
    | 'content-reach'
    | 'media'
    | 'vip'
    | 'csr';
  /** null = chưa có số kiểm chứng. Không bao giờ điền số phỏng đoán ở đây. */
  value: number | null;
  category: OpportunityCategory;
}

export const impactModules: ImpactModule[] = [
  { id: 'audience-reach', value: null, category: 'visibility' },
  { id: 'onsite-engagement', value: null, category: 'engagement' },
  { id: 'digital-reach', value: null, category: 'content' },
  { id: 'touchpoints', value: null, category: 'visibility' },
  { id: 'leads', value: null, category: 'data' },
  { id: 'sampling', value: null, category: 'engagement' },
  { id: 'commerce', value: null, category: 'commerce' },
  { id: 'content-reach', value: null, category: 'content' },
  { id: 'media', value: null, category: 'visibility' },
  { id: 'vip', value: null, category: 'hospitality' },
  { id: 'csr', value: null, category: 'impact' },
];

/** Các module của cổng đối tác (§12). */
export const partnerPortalModules = [
  { id: 'why', anchor: '#why' },
  { id: 'audience', anchor: '#audience' },
  { id: 'ecosystem', anchor: '#ecosystem' },
  { id: 'opportunities', anchor: '#opportunities' },
  { id: 'formats', anchor: '#formats' },
  { id: 'media', anchor: '#media' },
  { id: 'commercial', anchor: '#commercial' },
  { id: 'hospitality', anchor: '#hospitality' },
  { id: 'csr', anchor: '#csr' },
  { id: 'measurement', anchor: '#measurement' },
  { id: 'packages', anchor: '#packages' },
  { id: 'contact', anchor: '#contact' },
] as const;

/** Nhóm ngành đối tác — mô tả loại thương hiệu phù hợp, KHÔNG phải tên thương hiệu thật. */
export const partnerCategories = [
  { id: 'fmcg', assetId: 'kit-02-25-mega-zone-food-sampling' },
  { id: 'beauty', assetId: 'kit-05-09-beauty-try-on-activation' },
  { id: 'tech', assetId: 'kit-05-10-technology-trial-activation' },
  { id: 'finance', assetId: 'kit-05-11-fintech-payment-experience' },
  { id: 'fashion', assetId: 'kit-02-22-mega-zone-fashion-beauty' },
  { id: 'travel', assetId: 'kit-02-26-mega-zone-travel' },
  { id: 'wellness', assetId: 'kit-02-24-mega-zone-wellness' },
  { id: 'pets', assetId: 'kit-02-20-pet-photo-booth' },
] as const;
