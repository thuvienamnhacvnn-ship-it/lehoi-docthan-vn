import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { FestivalMap } from '@/components/map/FestivalMap';
import { AssetImage } from '@/components/media/AssetImage';
import { Reveal } from '@/components/system/Reveal';
import { SectionHeader, Tag } from '@/components/ui/Section';
import { zones } from '@/data/zones';
import { operations } from '@/data/community';

export const metadata: Metadata = {
  title: 'Bản đồ lễ hội',
  description: 'Mười khu vực của lễ hội: Mega Zone, Trạm Gặp, khu thú cưng, triển lãm, ẩm thực, Color Run, sân khấu, VIP và hỗ trợ.',
};

export default function MapPage() {
  return (
    <>
      <PageHero
        kicker="Định vị"
        title={
          <>
            Bản đồ <span className="t-outline">lễ hội</span>
          </>
        }
        lead="Mười khu vực, mỗi khu một nhịp riêng. Bấm vào một vùng để xem hoạt động, dịch vụ và ảnh thực tế của khu đó."
        assetId="kit-06-07-festival-masterplan-aerial"
        env="night"
        height="short"
      />

      <section data-env-zone="night" className="section" style={{ background: '#050507' }}>
        <div className="wrap">
          <FestivalMap />
        </div>
      </section>

      {/* Phóng to từng khu */}
      <section data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap">
          <SectionHeader kicker="Nhìn gần" title="Từng khu nhìn từ trên xuống" align="split" />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {zones.map((z, i) => (
              <Reveal key={z.id} delay={i * 60}>
                <article className="group fx-c-lift fx-c-zoom overflow-hidden rounded-[var(--radius-md)] border" style={{ borderColor: 'rgb(244 241 234 / 0.12)' }}>
                  <AssetImage id={z.aerialAssetId} sizes="third" ratio="16 / 10" className="w-full" />
                  <div className="p-5">
                    <p className="kicker" style={{ color: z.color }}>
                      {z.en}
                    </p>
                    <h3 className="font-display fx-t-underline mt-2 text-[1.1rem]" style={{ color: '#f4f1ea' }}>
                      {z.name}
                    </h3>
                    <p className="mt-2 text-[0.84rem] leading-relaxed" style={{ color: 'rgb(244 241 234 / 0.6)' }}>
                      {z.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {z.services.map((s) => (
                        <li key={s}>
                          <Tag>{s}</Tag>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vận hành */}
      <section data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap">
          <SectionHeader
            kicker="Vận hành"
            title="Ai đứng sau khu lễ hội"
            lead="Thông tin, y tế, an toàn, lối đi tiếp cận và phòng điều hành — phần không ai chú ý khi mọi thứ chạy tốt."
            align="split"
          />
          <div className="grid-3 mt-12">
            {operations.map((o, i) => (
              <Reveal key={o.id} delay={i * 60}>
                <figure className="group fx-c-zoom fx-c-shine relative overflow-hidden rounded-[var(--radius-md)]">
                  <AssetImage id={o.assetId} sizes="third" ratio="4 / 3" className="w-full" scrim="bottom" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-display fx-t-lift text-[1rem] text-white">{o.label}</p>
                    <p className="mt-1 text-[0.76rem]" style={{ color: 'rgb(244 241 234 / 0.66)' }}>
                      {o.note}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
