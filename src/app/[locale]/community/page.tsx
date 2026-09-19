import type { Metadata } from 'next';
import { L } from '../../../components/system/L';
import { PageHero } from '@/components/ui/PageHero';
import { AssetImage } from '@/components/media/AssetImage';
import { Reveal } from '@/components/system/Reveal';
import { SectionHeader } from '@/components/ui/Section';
import { Pending } from '@/components/system/Pending';
import { audienceGroups, lifestyleStories } from '@/data/community';

import { getMessages } from '@/i18n/get-messages';
import type { Locale } from '@/i18n/config';

type PageProps = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getMessages(locale);
  return { title: t.pages.community.metaTitle, description: t.pages.community.metaDescription };
}


export default async function CommunityPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getMessages(locale);
  const c = t.pages.community;

  return (
    <>
      <PageHero
        kicker={c.kicker}
        title={
          <>
            {c.titleA} <span className="t-outline">{c.titleB}</span>
          </>
        }
        lead={c.lead}
        assetId="kit-04-12-community-mixed-ages"
        focal="center 30%"
        env="day"
        height="short"
      />

      {/* Ba nhóm tuổi */}
      <section data-env-zone="day" className="section" style={{ background: 'var(--env-bg)' }}>
        <div className="wrap">
          <SectionHeader
            kicker={c.groupsKicker}
            title={c.groupsTitle}
            lead={c.groupsLead}
            align="split"
          />

          <div className="mt-14 space-y-6">
            {audienceGroups.map((g, i) => (
              <Reveal key={g.id} delay={i * 90}>
                <article
                  className={`grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}
                >
                  <AssetImage id={g.assetId} sizes="half" ratio="4 / 3" className="rounded-[var(--radius-md)]" />
                  <div>
                    <p className="num-oversized text-[clamp(2.5rem,6vw,4.5rem)]" style={{ color: g.accent }}>
                      {g.range}
                    </p>
                    <h3 className="font-display t-lg mt-3">{t.audience[g.id].title}</h3>
                    <p className="lede mt-4">{t.audience[g.id].lead}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {t.audience[g.id].traits.map((trait) => (
                        <li
                          key={trait}
                          className="rounded-full border px-3.5 py-1.5 text-[0.76rem]"
                          style={{ borderColor: `${g.accent}55`, color: 'var(--env-muted)' }}
                        >
                          {trait}
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

      {/* Lát cắt lối sống */}
      <section data-env-zone="day" className="section pt-0" style={{ background: 'var(--env-bg)' }}>
        <div className="wrap">
          <SectionHeader
            kicker={c.lifeKicker}
            title={c.lifeTitle}
            lead={c.lifeLead}
            align="split"
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {lifestyleStories.map((s, i) => (
              <Reveal key={s.id} delay={i * 60}>
                <figure className="group fx-c-zoom fx-c-shine relative overflow-hidden rounded-[var(--radius-md)]">
                  <AssetImage id={s.assetId} sizes="third" ratio="4 / 5" className="w-full" scrim="bottom" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-display fx-t-lift text-[1.05rem] text-white">{t.lifestyle[s.id].label}</p>
                    <p className="mt-1 text-[0.76rem]" style={{ color: 'rgb(244 241 234 / 0.7)' }}>
                      {t.lifestyle[s.id].note}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* An toàn & tôn trọng */}
      <section data-env-zone="golden" className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <AssetImage id="kit-02-11-safe-connection-host" sizes="half" ratio="4 / 5" className="rounded-[var(--radius-md)]" />
            <AssetImage
              id="kit-01-12-connection-hands"
              sizes="half"
              ratio="16 / 9"
              className="mt-3 rounded-[var(--radius-md)]"
            />
            <p className="mt-3 text-[0.78rem]" style={{ color: 'var(--env-faint)' }}>
              {c.caption}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="kicker mb-4">{c.safetyKicker}</p>
            <h2 className="font-display t-lg">{c.safetyTitle}</h2>
            <p className="lede mt-5">
              {c.safetyLead}
            </p>
            <ul className="mt-7 space-y-3 text-[0.9rem]" style={{ color: 'var(--env-muted)' }}>
              {c.safetyRules.map((rule) => (
                <li key={rule}>— {rule}</li>
              ))}
            </ul>
            <p className="mt-8 text-[0.82rem]" style={{ color: 'var(--env-faint)' }}>
              {c.scale} <Pending k="EXPECTED_ATTENDANCE" tone="quiet" />
            </p>
            <L href="/visitor-guide" className="fx-t-arrow mt-6 inline-flex text-[0.88rem] font-semibold underline underline-offset-8">
              {c.guideCta} <span className="fx-arrow">→</span>
            </L>
          </Reveal>
        </div>
      </section>
    </>
  );
}
