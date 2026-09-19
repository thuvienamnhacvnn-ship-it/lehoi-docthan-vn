/**
 * Registry ảnh tập trung — cửa duy nhất để component lấy ảnh.
 * Không component nào được viết đường dẫn ảnh thẳng (§05).
 */
import { assets, ASSET_TARGET, GENERATED_AT } from '@/data/assets.generated';
import type { AssetCategory, AssetKit, FestivalAsset, PlannedAssetSlot } from '@/types/assets';

export { ASSET_TARGET, GENERATED_AT };

const byId = new Map(assets.map((a) => [a.id, a]));

/** Ảnh đã quy hoạch trong kiến trúc 180 nhưng CHƯA có file. Không bịa, chỉ giữ chỗ. */
export const plannedSlots: PlannedAssetSlot[] = Array.from(
  { length: Math.max(0, ASSET_TARGET - assets.length) },
  (_, i) => ({
    id: `planned-${String(i + 1).padStart(2, '0')}`,
    kit: 'KIT-01' as AssetKit,
    section: 'chưa phân bổ',
    purpose: 'Slot dự phòng trong kiến trúc 180 ảnh — chờ ảnh thật, không thay bằng ảnh khác',
    aspectRatio: '16:9',
    status: 'planned' as const,
  }),
);

const reported = new Set<string>();

/**
 * Lấy ảnh theo id. Thiếu -> log một lần rồi trả null để component vẽ placeholder
 * có kiểm soát. TUYỆT ĐỐI không tự đổi sang một ảnh khác (§24).
 */
export function getAsset(id: string): FestivalAsset | null {
  const found = byId.get(id);
  if (!found) {
    if (!reported.has(id)) {
      reported.add(id);
      // eslint-disable-next-line no-console
      console.warn(`[ONE BEAT NIGHT] Thiếu ảnh trong registry: "${id}" — vẽ placeholder.`);
    }
    return null;
  }
  return found;
}

/** Lấy nhiều ảnh, bỏ qua id không tồn tại (đã được log). */
export function getAssets(ids: readonly string[]): FestivalAsset[] {
  return ids.map(getAsset).filter((a): a is FestivalAsset => a !== null);
}

export function assetsByKit(kit: AssetKit): FestivalAsset[] {
  return assets.filter((a) => a.kit === kit);
}

export function assetsByCategory(category: AssetCategory): FestivalAsset[] {
  return assets.filter((a) => a.category === category);
}

/** Toàn bộ thư viện dùng được trên web (bỏ nhóm ảnh cũ chỉ để tham khảo). */
export const libraryAssets = assets.filter((a) => a.category !== 'legacy');

export const assetStats = {
  ready: assets.length,
  library: libraryAssets.length,
  target: ASSET_TARGET,
  planned: plannedSlots.length,
  byKit: (['KIT-01', 'KIT-02', 'KIT-03', 'KIT-04', 'KIT-05', 'KIT-06'] as const).map((kit) => ({
    kit,
    count: assetsByKit(kit).length,
  })),
};

/** sizes mặc định theo vai trò bố cục — tránh tải ảnh to hơn cần thiết (§19). */
export const SIZES = {
  full: '100vw',
  half: '(max-width: 900px) 100vw, 50vw',
  third: '(max-width: 720px) 88vw, (max-width: 1100px) 46vw, 31vw',
  card: '(max-width: 720px) 78vw, 340px',
  thumb: '(max-width: 720px) 45vw, 220px',
} as const;
