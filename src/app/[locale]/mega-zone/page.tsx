import type { Metadata } from 'next';
import { L } from '../../../components/system/L';
import { PageHero } from '@/components/ui/PageHero';
import { AssetImage } from '@/components/media/AssetImage';
import { Reveal } from '@/components/system/Reveal';
import { SectionHeader, Tag } from '@/components/ui/Section';
import { megaZoneCategories } from '@/data/activities';
import { partnerCategories } from '@/data/sponsor';

export const metadata: Metadata = {
  title: 'Mega Zone',
  description: 'Khu chợ trải nghiệm của lễ hội: bảy cụm ngành, ưu đãi theo khung giờ và nơi diễn ra phần lớn hoạt động thương hiệu.',
};

const commerceMoments = [
  {
    id: 'sampling',
    title: 'Thử trước, quyết sau',
    body: 'Khách nếm, chạm, dùng thử ngay tại quầy. Phản ứng thật xảy ra tại chỗ, không phải qua một quảng cáo.',
    assetId: 'kit-02-25-mega-zone-food-sampling',
  },
  {
    id: 'flash-sale',
    title: 'Khung giờ ưu đãi',
    body: 'MegaSale dồn khách vào một nhịp: nhiều thương hiệu mở ưu đãi cùng lúc, cả khu chợ chuyển động theo.',
    assetId: 'kit-05-19-commercial-flash-sale-moment',
  },
  {
    id: 'happiness-box',
    title: 'Happiness Deals',
    body: 'Hộp quà tổng hợp từ nhiều nhãn — một lý do rất cụ thể để khách đi hết khu thương mại.',
    assetId: 'kit-05-20-happiness-deals-products',
  },
  {
    id: 'pickup',
    title: 'Đặt online, lấy tại lễ hội',
    body: 'Quầy nhận hàng nối kênh bán trực tuyến của thương hiệu với dòng người ngay tại chỗ.',
    assetId: 'kit-05-21-ecommerce-pickup-counter',
  },
];

export default function MegaZonePage() {
  return (
    <>
      <PageHero
        kicker="Thương mại trải nghiệm"
        title={
          <>
            MEGA <span className="t-outline">ZONE</span>
          </>
        }
        lead="Bảy cụm ngành trong một khu chợ. Khách đến để thử đồ mới, thương hiệu đến để gặp đúng nhóm người — và cả hai đều không phải nói chuyện qua tờ rơi."
        assetId="kit-06-09-mega-zone-aerial"
        env="golden"
        height="short"
      />

      <section data-env-zone="golden" className="section">
        <div className="wrap">
          <SectionHeader kicker="Bảy cụm ngành" title="Đi một vòng là chạm được tất cả" align="split" />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {megaZoneCategories.map((c, i) => (
              <Reveal key={c.id} delay={i * 70}>
                <article className="group fx-c-lift fx-c-zoom overflow-hidden rounded-[var(--radius-md)] border" style={{ borderColor: 'var(--env-card-line)' }}>
                  <AssetImage id={c.assetId} sizes="third" ratio="4 / 3" className="w-full" />
                  <div className="p-5">
                    <h3 className="font-display fx-t-underline text-[1.1rem]">{c.name}</h3>
                    <p className="mt-2 text-[0.84rem]" style={{ color: 'var(--env-muted)' }}>
                      {c.note}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}

            {/* Ô cuối cho lưới khít: hộp quà nhiều nhãn */}
            <Reveal delay={megaZoneCategories.length * 70}>
              <article
                className="group fx-c-zoom fx-c-corners h-full overflow-hidden rounded-[var(--radius-md)] border"
                style={{ borderColor: 'var(--env-card-line)' }}
              >
                <AssetImage id="kit-05-20-happiness-deals-products" sizes="third" ratio="4 / 3" className="w-full" />
                <div className="p-5">
                  <h3 className="font-display fx-t-underline text-[1.1rem]">Hộp quà nhiều nhãn</h3>
                  <p className="mt-2 text-[0.84rem]" style={{ color: 'var(--env-muted)' }}>
                    Sản phẩm từ nhiều thương hiệu gom trong một hộp
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section data-env-zone="golden" className="section pt-0">
        <div className="wrap">
          <SectionHeader
            kicker="Thương mại diễn ra thế nào"
            title="Bốn khoảnh khắc mua bán trong một ngày"
            align="split"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {commerceMoments.map((m, i) => (
              <Reveal key={m.id} delay={i * 80}>
                <article className="group fx-c-zoom fx-c-shine relative overflow-hidden rounded-[var(--radius-md)]">
                  <AssetImage id={m.assetId} sizes="half" ratio="16 / 10" className="w-full" scrim="bottom" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-[1.2rem] text-white">{m.title}</h3>
                    <p className="mt-2 max-w-[44ch] text-[0.85rem]" style={{ color: 'rgb(244 241 234 / 0.75)' }}>
                      {m.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-env-zone="night" className="section" style={{ background: '#050507' }}>
        <div className="wrap">
          <SectionHeader
            kicker="Ngành hàng phù hợp"
            title="Những nhóm thương hiệu hợp với khu này"
            lead="Đây là mô tả nhóm ngành, không phải danh sách nhà tài trợ. Lễ hội chưa công bố đối tác nào."
            align="split"
          />
          <ul className="mt-10 flex flex-wrap gap-2">
            {partnerCategories.map((p) => (
              <li key={p.id}>
                <Tag>{p.label}</Tag>
              </li>
            ))}
          </ul>

          <Reveal>
            <L
              href="/partners"
              className="fx-b-press mt-10 inline-flex rounded-full px-6 py-3 text-[0.86rem] font-bold"
              style={{ background: 'var(--color-gold)', color: '#16120a' }}
            >
              Xem cơ hội thương hiệu
            </L>
          </Reveal>
        </div>
      </section>
    </>
  );
}
