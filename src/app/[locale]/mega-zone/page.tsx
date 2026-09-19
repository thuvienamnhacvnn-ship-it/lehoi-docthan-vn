import type { Metadata } from 'next';
import { L } from '../../../components/system/L';
import { PageHero } from '@/components/ui/PageHero';
import { AssetImage } from '@/components/media/AssetImage';
import { Reveal } from '@/components/system/Reveal';
import { SectionHeader, Tag } from '@/components/ui/Section';
import { megaZoneCategories } from '@/data/activities';
import { partnerCategories } from '@/data/sponsor';

import { getMessages } from '@/i18n/get-messages';
import type { Locale } from '@/i18n/config';

type PageProps = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getMessages(locale);
  return { title: t.pages.megaZone.metaTitle, description: t.pages.megaZone.metaDescription };
}

/** Bốn khoảnh khắc mua bán — chữ nằm ở bộ dịch, đây chỉ giữ thứ tự và ảnh. */
const commerceMoments = [
  { id: 'sampling', assetId: 'kit-02-25-mega-zone-food-sampling' },
  { id: 'flash-sale', assetId: 'kit-05-19-commercial-flash-sale-moment' },
  { id: 'happiness-box', assetId: 'kit-05-20-happiness-deals-products' },
  { id: 'pickup', assetId: 'kit-05-21-ecommerce-pickup-counter' },
] as const;

export default async function MegaZonePage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getMessages(locale);
  const c = t.pages.megaZone;

  return (
    <>
      <PageHero
        kicker={c.kicker}
        title={
          <>
            MEGA <span className="t-outline">ZONE</span>
          </>
        }
        lead={c.lead}
        assetId="kit-06-09-mega-zone-aerial"
        env="golden"
        height="short"
      />

      <section data-env-zone="golden" className="section">
        <div className="wrap">
          <SectionHeader kicker={c.sectorsKicker} title={c.sectorsTitle} align="split" />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {megaZoneCategories.map((cat, i) => (
              <Reveal key={cat.id} delay={i * 70}>
                <article className="group fx-c-lift fx-c-zoom overflow-hidden rounded-[var(--radius-md)] border" style={{ borderColor: 'var(--env-card-line)' }}>
                  <AssetImage id={cat.assetId} sizes="third" ratio="4 / 3" className="w-full" />
                  <div className="p-5">
                    <h3 className="font-display fx-t-underline text-[1.1rem]">{t.megaZoneCategories[cat.id].name}</h3>
                    <p className="mt-2 text-[0.84rem]" style={{ color: 'var(--env-muted)' }}>
                      {t.megaZoneCategories[cat.id].note}
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
                  <h3 className="font-display fx-t-underline text-[1.1rem]">{c.boxTitle}</h3>
                  <p className="mt-2 text-[0.84rem]" style={{ color: 'var(--env-muted)' }}>
                    {c.boxNote}
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
            kicker={c.momentsKicker}
            title={c.momentsTitle}
            align="split"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {commerceMoments.map((m, i) => (
              <Reveal key={m.id} delay={i * 80}>
                <article className="group fx-c-zoom fx-c-shine relative overflow-hidden rounded-[var(--radius-md)]">
                  <AssetImage id={m.assetId} sizes="half" ratio="16 / 10" className="w-full" scrim="bottom" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-[1.2rem] text-white">{c.moments[m.id].title}</h3>
                    <p className="mt-2 max-w-[44ch] text-[0.85rem]" style={{ color: 'rgb(244 241 234 / 0.75)' }}>
                      {c.moments[m.id].body}
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
            kicker={c.sectorsFitKicker}
            title={c.sectorsFitTitle}
            lead={c.sectorsFitLead}
            align="split"
          />
          <ul className="mt-10 flex flex-wrap gap-2">
            {partnerCategories.map((p) => (
              <li key={p.id}>
                <Tag>{t.partnerCategories[p.id]}</Tag>
              </li>
            ))}
          </ul>

          <Reveal>
            <L
              href="/partners"
              className="fx-b-press mt-10 inline-flex rounded-full px-6 py-3 text-[0.86rem] font-bold"
              style={{ background: 'var(--color-gold)', color: '#16120a' }}
            >
              {c.cta}
            </L>
          </Reveal>
        </div>
      </section>
    </>
  );
}
