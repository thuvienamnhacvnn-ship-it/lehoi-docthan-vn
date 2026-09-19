import type { Metadata } from 'next';
import { L } from '../../../components/system/L';
import { PageHero } from '@/components/ui/PageHero';
import { AssetImage } from '@/components/media/AssetImage';
import { Reveal } from '@/components/system/Reveal';
import { Pending } from '@/components/system/Pending';
import { PartnerLeadForm } from '@/components/sponsor/PartnerLeadForm';

import { getMessages } from '@/i18n/get-messages';
import type { Locale } from '@/i18n/config';

type PageProps = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getMessages(locale);
  return { title: t.pages.contact.metaTitle, description: t.pages.contact.metaDescription };
}

/** Ba cửa liên hệ — chữ ở bộ dịch, đây giữ đích đến, ô trống và ảnh. */
const channels = [
  { id: 'partners', placeholder: 'PARTNER_EMAIL' as const, href: '/partners', assetId: 'kit-05-13-sponsor-handshake' },
  { id: 'press', placeholder: 'PRESS_EMAIL' as const, href: '/press', assetId: 'kit-04-20-journalist-camera-line' },
  { id: 'visitors', placeholder: 'HOTLINE' as const, href: '/faq', assetId: 'kit-06-19-information-help-desk' },
] as const;

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getMessages(locale);
  const p = t.pages.contact;

  return (
    <>
      <PageHero
        kicker={p.kicker}
        title={p.title}
        lead={p.lead}
        assetId="kit-06-24-event-staff-briefing"
        focal="center 30%"
        env="night"
        height="short"
      />

      <section data-env-zone="night" className="section" style={{ background: '#050507' }}>
        <div className="wrap">
          <div className="grid-3">
            {channels.map((c, i) => (
              <Reveal key={c.id} delay={i * 80}>
                <article
                  className="group fx-c-lift fx-c-shine fx-c-zoom flex h-full flex-col overflow-hidden rounded-[var(--radius-md)] border"
                  style={{ borderColor: 'rgb(244 241 234 / 0.12)' }}
                >
                  <AssetImage id={c.assetId} sizes="third" ratio="16 / 10" className="w-full" />
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-[1.15rem]" style={{ color: '#f4f1ea' }}>
                      {p.channels[c.id].label}
                    </h2>
                    <p className="mt-2 flex-1 text-[0.85rem] leading-relaxed" style={{ color: 'rgb(244 241 234 / 0.6)' }}>
                      {p.channels[c.id].note}
                    </p>
                    <p className="mt-5">
                      <Pending k={c.placeholder} />
                    </p>
                    <L
                      href={c.href}
                      className="fx-t-arrow mt-5 inline-flex text-[0.84rem] font-semibold underline underline-offset-8"
                      style={{ color: '#f4f1ea' }}
                    >
                      {p.channels[c.id].cta} <span className="fx-arrow">→</span>
                    </L>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="kicker mb-4">{p.infoKicker}</p>
              <dl className="space-y-4 text-[0.88rem]">
                <div className="flex flex-wrap items-baseline gap-x-4">
                  <dt className="kicker w-36">{p.cityLabel}</dt>
                  <dd style={{ color: 'rgb(244 241 234 / 0.8)' }}>
                    {t.brand.city}, {t.brand.country}
                  </dd>
                </div>
                <div className="flex flex-wrap items-baseline gap-x-4">
                  <dt className="kicker w-36">{p.venueLabel}</dt>
                  <dd>
                    <Pending k="VENUE" />
                  </dd>
                </div>
                <div className="flex flex-wrap items-baseline gap-x-4">
                  <dt className="kicker w-36">{p.addressLabel}</dt>
                  <dd>
                    <Pending k="VENUE_ADDRESS" />
                  </dd>
                </div>
                <div className="flex flex-wrap items-baseline gap-x-4">
                  <dt className="kicker w-36">{p.dateLabel}</dt>
                  <dd>
                    <Pending k="EVENT_DATE" />
                  </dd>
                </div>
                <div className="flex flex-wrap items-baseline gap-x-4">
                  <dt className="kicker w-36">{p.organizerLabel}</dt>
                  <dd>
                    <Pending k="ORGANIZER" />
                  </dd>
                </div>
              </dl>
              <AssetImage
                id="kit-01-05-hcmc-establishing"
                sizes="half"
                ratio="16 / 9"
                className="mt-8 rounded-[var(--radius-md)]"
              />
            </div>

            <PartnerLeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
