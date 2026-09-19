import type { Metadata } from 'next';
import { L } from '../../../components/system/L';
import { PageHero } from '@/components/ui/PageHero';
import { AssetImage } from '@/components/media/AssetImage';
import { VideoExperience } from '@/components/media/VideoExperience';
import { Reveal } from '@/components/system/Reveal';
import { SectionHeader, Tag } from '@/components/ui/Section';
import { Pending } from '@/components/system/Pending';
import { PartnerNav } from '@/components/sponsor/PartnerNav';
import { OpportunityExplorer } from '@/components/sponsor/OpportunityExplorer';
import { ImpactEngine } from '@/components/sponsor/ImpactEngine';
import { PartnerLeadForm } from '@/components/sponsor/PartnerLeadForm';
import { Spotlight } from '@/components/ui/Spotlight';
import { opportunities, opportunityCategories, partnerCategories } from '@/data/sponsor';
import { audienceGroups, contentFormats } from '@/data/community';
import { zones } from '@/data/zones';
import { videos } from '@/data/videos';

import { getMessages } from '@/i18n/get-messages';
import type { Locale } from '@/i18n/config';

type PageProps = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getMessages(locale);
  return { title: t.pages.partners.metaTitle, description: t.pages.partners.metaDescription };
}

/** Chín lớp giá trị — chữ ở bộ dịch, đây chỉ giữ thứ tự. */
const valueLayers = [
  'movement',
  'community',
  'day',
  'music',
  'media',
  'commerce',
  'activation',
  'data',
  'ip',
] as const;

export default async function PartnersPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getMessages(locale);
  const c = t.pages.partners;

  return (
    <>
      <PageHero
        kicker={c.kicker}
        title={
          <>
            {c.titleA}
            <br />
            <span className="gold-text">{c.titleB}</span>
          </>
        }
        lead={c.lead}
        assetId="kit-05-01-sponsor-central-booth"
        env="night"
      >
        <p className="mt-8 flex flex-wrap items-center gap-3 text-[0.84rem]" style={{ color: 'rgb(244 241 234 / 0.6)' }}>
          <span>{c.contactLine}</span>
          <Pending k="PARTNER_EMAIL" />
        </p>
      </PageHero>

      <PartnerNav />

      {/* WHY */}
      <section id="why" data-env-zone="night" className="section" style={{ background: '#050507' }}>
        <div className="wrap">
          <SectionHeader
            kicker={c.whyKicker}
            title={c.whyTitle}
            lead={c.whyLead}
            align="split"
          />
          <ol className="grid-3 mt-12">
            {valueLayers.map((key, i) => (
              <Reveal key={key} delay={i * 50}>
                <Spotlight
                  as="li"
                  className="group fx-c-lift fx-c-corners h-full rounded-[var(--radius-md)] border border-white/12 p-6"
                >
                  <p className="num-oversized fx-i-beat text-[1.6rem]" style={{ color: 'rgb(244 241 234 / 0.2)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <p className="font-display fx-t-gold-rise mt-2 text-[1.08rem]" style={{ color: '#f4f1ea' }}>
                    {c.layers[key].label}
                  </p>
                  <p className="mt-2 text-[0.82rem] leading-relaxed" style={{ color: 'rgb(244 241 234 / 0.58)' }}>
                    {c.layers[key].note}
                  </p>
                </Spotlight>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* AUDIENCE */}
      <section id="audience" data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap">
          <SectionHeader
            kicker={c.audienceKicker}
            title={c.audienceTitle}
            lead={c.audienceLead}
            align="split"
          />
          <div className="grid-3 mt-12">
            {audienceGroups.map((g, i) => (
              <Reveal key={g.id} delay={i * 80}>
                <article className="group fx-c-lift fx-c-zoom overflow-hidden rounded-[var(--radius-md)] border" style={{ borderColor: 'rgb(244 241 234 / 0.12)' }}>
                  <AssetImage id={g.assetId} sizes="third" ratio="4 / 3" className="w-full" />
                  <div className="p-5">
                    <p className="num-oversized text-[1.8rem]" style={{ color: g.accent }}>
                      {g.range}
                    </p>
                    <p className="font-display mt-2 text-[1.05rem]" style={{ color: '#f4f1ea' }}>
                      {t.audience[g.id].title}
                    </p>
                    <p className="mt-2 text-[0.82rem]" style={{ color: 'rgb(244 241 234 / 0.58)' }}>
                      {t.audience[g.id].lead}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-[0.84rem]" style={{ color: 'rgb(244 241 234 / 0.5)' }}>
            {c.scaleLabel} <Pending k="EXPECTED_ATTENDANCE" /> · {c.reachLabel} <Pending k="MEDIA_REACH" />
          </p>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section id="ecosystem" data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap">
          <SectionHeader
            kicker={c.ecosystemKicker}
            title={c.ecosystemTitle}
            align="split"
          />
          <Reveal>
            <AssetImage
              id="kit-05-24-partner-ecosystem-collage-scene"
              sizes="full"
              ratio="21 / 9"
              className="mt-10 rounded-[var(--radius-md)]"
              scrim="soft"
            />
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {zones.map((z, i) => (
              <Reveal key={z.id} delay={i * 40}>
                <div className="group fx-c-zoom fx-c-corners relative overflow-hidden rounded-[var(--radius-sm)]">
                  <AssetImage id={z.aerialAssetId} sizes="thumb" ratio="4 / 3" className="w-full" scrim="bottom" />
                  <p className="absolute inset-x-0 bottom-0 p-3 text-[0.78rem] font-semibold text-white">{z.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <L href="/map" className="fx-t-arrow mt-6 inline-flex text-[0.86rem] font-semibold underline underline-offset-8" style={{ color: '#f4f1ea' }}>
            Mở bản đồ tương tác <span className="fx-arrow">→</span>
          </L>
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section id="opportunities" data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap">
          <SectionHeader
            kicker={c.opportunitiesKicker}
            title={`${opportunities.length} ${c.opportunitiesTitleA}`}
            lead={c.opportunitiesLead}
            align="split"
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Reveal>
              <AssetImage
                id="kit-05-02-sponsor-booth-interaction"
                sizes="half"
                ratio="16 / 9"
                className="rounded-[var(--radius-md)]"
                scrim="soft"
              />
            </Reveal>
            <Reveal delay={80}>
              <AssetImage
                id="kit-05-05-sampling-happy-customer"
                sizes="half"
                ratio="16 / 9"
                className="rounded-[var(--radius-md)]"
                scrim="soft"
              />
            </Reveal>
          </div>
          <div className="mt-12">
            <OpportunityExplorer />
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section id="formats" data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap">
          <SectionHeader kicker={c.formatsKicker} title={c.formatsTitle} align="split" />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(opportunityCategories).map(([key, c], i) => {
              const items = opportunities.filter((o) => o.category === key);
              return (
                <Reveal key={key} delay={i * 50}>
                  <div className="h-full rounded-[var(--radius-md)] border p-5" style={{ borderColor: `${c.color}44` }}>
                    <p className="kicker" style={{ color: c.color }}>
                      {c.en}
                    </p>
                    <p className="font-display mt-2 text-[1.05rem]" style={{ color: '#f4f1ea' }}>
                      {t.opportunityCategories[key as keyof typeof t.opportunityCategories]}
                    </p>
                    <ul className="mt-3 space-y-1">
                      {items.map((o) => (
                        <li key={o.id} className="text-[0.78rem]" style={{ color: 'rgb(244 241 234 / 0.55)' }}>
                          — {t.opportunities[o.id].name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* MEDIA */}
      <section id="media" data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeader
              kicker={c.mediaKicker}
              title={c.mediaTitle}
              lead={c.mediaLead}
            />
            <ul className="mt-8 grid gap-2 sm:grid-cols-2">
              {contentFormats.map((c) => (
                <li key={c.id} className="flex items-start gap-2.5 text-[0.84rem]" style={{ color: 'rgb(244 241 234 / 0.65)' }}>
                  <span aria-hidden style={{ color: 'var(--color-magenta)' }}>
                    —
                  </span>
                  <span>
                    <strong className="font-semibold" style={{ color: '#f4f1ea' }}>
                      {c.name}
                    </strong>
                    <span className="block text-[0.78rem]" style={{ color: 'rgb(244 241 234 / 0.5)' }}>
                      {c.lead}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Reveal>
            <VideoExperience config={videos.sponsorFilm} className="rounded-[var(--radius-md)]" sizes="half" />
          </Reveal>
        </div>
      </section>

      {/* COMMERCIAL */}
      <section id="commercial" data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap">
          <SectionHeader
            kicker={c.commercialKicker}
            title={c.commercialTitle}
            lead={c.commercialLead}
            align="split"
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {['sampling', 'qr-voucher', 'megasale', 'o2o', 'lead-gen', 'product-launch'].map((id, i) => {
              const o = opportunities.find((x) => x.id === id)!;
              return (
                <Reveal key={id} delay={i * 60}>
                  <article className="group fx-c-zoom fx-c-scan fx-c-corners relative h-full overflow-hidden rounded-[var(--radius-md)]">
                    <AssetImage id={o.assetId} sizes="third" ratio="4 / 5" className="w-full" scrim="bottom" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="font-display fx-t-lift text-[1.02rem] text-white">{t.opportunities[o.id].name}</p>
                      <p className="mt-1.5 text-[0.78rem]" style={{ color: 'rgb(244 241 234 / 0.68)' }}>
                        {t.opportunities[o.id].lead}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOSPITALITY */}
      <section id="hospitality" data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <AssetImage id="kit-05-14-sponsor-executive-hosting" sizes="half" className="rounded-[var(--radius-md)]" />
            <AssetImage
              id="kit-05-12-sponsor-business-networking"
              sizes="half"
              ratio="16 / 9"
              className="mt-3 rounded-[var(--radius-md)]"
            />
          </Reveal>
          <Reveal delay={90}>
            <SectionHeader
              kicker={c.hospitalityKicker}
              title={c.hospitalityTitle}
              lead={c.hospitalityLead}
            />
            <ul className="mt-6 flex flex-wrap gap-2">
              {['Lối vào riêng', 'Khu ngồi riêng', 'Phục vụ tại bàn', 'Hỗ trợ điều phối khách mời'].map((s) => (
                <li key={s}>
                  <Tag>{s}</Tag>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CSR */}
      <section id="csr" data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeader
              kicker={c.csrKicker}
              title={c.csrTitle}
              lead={c.csrLead}
            />
          </Reveal>
          <Reveal delay={90}>
            <AssetImage id="kit-05-22-csr-happiness-fund" sizes="half" className="rounded-[var(--radius-md)]" />
          </Reveal>
        </div>
      </section>

      {/* MEASUREMENT */}
      <section id="measurement" data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap">
          <SectionHeader
            kicker={c.measureKicker}
            title={c.measureTitle}
            lead={c.measureLead}
            align="split"
          />
          <Reveal>
            <AssetImage
              id="kit-05-23-sponsor-measurement-team"
              sizes="full"
              ratio="21 / 9"
              className="mt-10 rounded-[var(--radius-md)]"
              scrim="soft"
            />
            <p className="mt-3 text-[0.78rem]" style={{ color: 'rgb(244 241 234 / 0.45)' }}>
              {c.measureCaption}
            </p>
          </Reveal>
          <div className="mt-12">
            <ImpactEngine />
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap">
          <SectionHeader
            kicker={c.packagesKicker}
            title={c.packagesTitle}
            lead={c.packagesLead}
            align="split"
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {partnerCategories.map((p, i) => (
              <Reveal key={p.id} delay={i * 50}>
                <div className="group fx-c-zoom fx-c-corners relative overflow-hidden rounded-[var(--radius-sm)]">
                  <AssetImage id={p.assetId} sizes="thumb" ratio="4 / 3" className="w-full" scrim="bottom" />
                  <p className="absolute inset-x-0 bottom-0 p-3 text-[0.8rem] font-semibold text-white">{t.partnerCategories[p.id]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div>
            <SectionHeader
              kicker={c.contactKicker}
              title={c.contactTitle}
              lead={c.contactLead}
            />
            <div className="mt-8 space-y-3 text-[0.86rem]" style={{ color: 'rgb(244 241 234 / 0.6)' }}>
              <p>
                {c.partnerEmailLabel} <Pending k="PARTNER_EMAIL" />
              </p>
              <p>
                {c.organizerLabel} <Pending k="ORGANIZER" />
              </p>
              <p>
                {c.hotlineLabel} <Pending k="HOTLINE" />
              </p>
            </div>
            <L
              href="/press"
              className="fx-t-arrow mt-8 inline-flex text-[0.88rem] font-semibold underline underline-offset-8"
              style={{ color: '#f4f1ea' }}
            >
              {c.pressCta} <span className="fx-arrow">→</span>
            </L>
          </div>
          <PartnerLeadForm />
        </div>
      </section>
    </>
  );
}
