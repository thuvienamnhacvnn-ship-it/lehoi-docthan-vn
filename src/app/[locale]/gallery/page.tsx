import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { GalleryExplorer } from '@/components/media/GalleryExplorer';
import { assetStats, plannedSlots } from '@/lib/assets';

export const metadata: Metadata = {
  title: 'Thư viện hình ảnh',
  description: 'Toàn bộ thư viện hình ảnh của lễ hội, chia theo sáu KIT.',
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        kicker="Hình ảnh"
        title={
          <>
            Thư viện <span className="t-outline">lễ hội</span>
          </>
        }
        lead={`${assetStats.library} ảnh trong sáu KIT — toàn bộ nội dung hình ảnh đang vận hành website này. Kiến trúc mở tới ${assetStats.target} ảnh; ${plannedSlots.length} chỗ còn trống đang chờ ảnh thật, không lấp bằng ảnh khác.`}
        assetId="legacy-19-2026-09-13-golden-phoenix-infinity-emblem"
        env="night"
        height="short"
      />

      <section data-env-zone="night" className="section" style={{ background: '#050507' }}>
        <div className="wrap">
          <GalleryExplorer />
        </div>
      </section>
    </>
  );
}
