import type { Metadata } from 'next';
import { L } from '../../../components/system/L';
import { PageHero } from '@/components/ui/PageHero';
import { AssetImage } from '@/components/media/AssetImage';
import { VideoExperience } from '@/components/media/VideoExperience';
import { ActivityRail } from '@/components/experience/ActivityRail';
import { Reveal } from '@/components/system/Reveal';
import { SectionHeader, Tag } from '@/components/ui/Section';
import { activities, categoryLabels } from '@/data/activities';
import { dayPhases } from '@/data/zones';
import { videos } from '@/data/videos';

import { getMessages } from '@/i18n/get-messages';
import type { Locale } from '@/i18n/config';

type PageProps = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getMessages(locale);
  return { title: t.pages.experience.metaTitle, description: t.pages.experience.metaDescription };
}

/** Bảy khối kể chuyện — chữ ở bộ dịch, đây giữ ảnh và hướng lật bố cục. */
const storyBlocks = [
  { id: 'flashmob', assetId: 'kit-02-01-flashmob-kickoff-wide', portraitAssetId: 'kit-02-02-flashmob-dancer-closeup', flip: false },
  { id: 'color-run', assetId: 'kit-02-03-color-run-start', portraitAssetId: 'kit-02-04-color-run-powder-action', extraAssetId: 'kit-02-05-color-run-finish-badge', flip: true },
  { id: 'tram-gap', assetId: 'kit-02-07-coffee-circle-group', portraitAssetId: 'kit-02-08-coffee-circle-icebreaker', flip: false },
  { id: 'pets', assetId: 'kit-02-14-pets-small-dogs', portraitAssetId: 'kit-02-17-puppy-socialization', flip: true },
  { id: 'match-meet', assetId: 'kit-02-10-match-meet-rotation', portraitAssetId: 'kit-02-09-match-meet-one-to-one', flip: true },
  { id: 'music-corner', assetId: 'kit-02-34-creative-music-corner', portraitAssetId: 'kit-02-33-creative-artist-working', flip: false },
  { id: 'art', assetId: 'kit-02-29-visual-art-succulent-installation', portraitAssetId: 'kit-02-30-succulent-art-detail', flip: false },
] as const;

export default async function ExperiencePage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getMessages(locale);
  const c = t.pages.experience;
  const dayActivities = activities.filter((a) => a.phase !== 'night');

  return (
    <>
      <PageHero
        kicker={c.kicker}
        title={
          <>
            <span className="t-outline">DAY</span>{' '}
            <span style={{ color: 'var(--color-blue)' }}>FESTIVAL</span>
          </>
        }
        lead={c.lead}
        assetId="kit-06-16-midday-festival-life"
        focal="center 38%"
        env="day"
      >
        <div className="mt-8 flex flex-wrap gap-2">
          {(Object.keys(categoryLabels) as (keyof typeof categoryLabels)[]).map((k) => {
            const n = dayActivities.filter((a) => a.category === k).length;
            if (!n) return null;
            return <Tag key={k}>{`${t.categories[k]} · ${n}`}</Tag>;
          })}
        </div>
      </PageHero>

      {/* Bốn thời khắc trong ngày */}
      <section data-env-zone="day" className="section" style={{ background: 'var(--env-bg)' }}>
        <div className="wrap">
          <SectionHeader
            kicker={c.rhythmKicker}
            title={c.rhythmTitle}
            lead={c.rhythmLead}
            align="split"
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {dayPhases.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <figure className="overflow-hidden rounded-[var(--radius-md)]">
                  <AssetImage id={p.assetId} sizes="third" ratio="4 / 5" className="w-full" scrim="bottom" />
                  <figcaption className="-mt-12 relative px-5 pb-5">
                    <p className="font-display text-[1.1rem] text-white">{t.phases[p.id]}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dải hoạt động */}
      <section data-env-zone="day" className="section pt-0" style={{ background: 'var(--env-bg)' }}>
        <div className="wrap mb-8">
          <SectionHeader
            kicker={`${dayActivities.length} ${c.railKickerA}`}
            title={c.railTitle}
            align="split"
          />
        </div>
        <ActivityRail phase="day" />
      </section>

      {/* Các khối kể chuyện xen kẽ */}
      <section data-env-zone="day" className="section" style={{ background: 'var(--env-bg)' }}>
        <div className="wrap space-y-24">
          {storyBlocks.map((b) => (
            <div
              key={b.id}
              className={`grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center ${b.flip ? 'lg:[&>*:first-child]:order-2' : ''}`}
            >
              <Reveal>
                <AssetImage id={b.assetId} sizes="half" className="rounded-[var(--radius-md)]" />
              </Reveal>
              <Reveal delay={90}>
                <h3 className="font-display t-lg">{c.stories[b.id].title}</h3>
                <p className="mt-5 text-[0.95rem] leading-relaxed" style={{ color: 'var(--env-muted)' }}>
                  {c.stories[b.id].body}
                </p>
                <div className="mt-6 flex items-end gap-3">
                  {b.portraitAssetId && (
                    <AssetImage id={b.portraitAssetId} sizes="card" ratio="3 / 4" className="w-40 rounded-[var(--radius-sm)]" />
                  )}
                  {'extraAssetId' in b && b.extraAssetId && (
                    <AssetImage id={b.extraAssetId} sizes="thumb" ratio="1 / 1" className="w-28 rounded-[var(--radius-sm)]" />
                  )}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* Video */}
      <section data-env-zone="golden" className="section">
        <div className="wrap">
          <SectionHeader kicker={c.filmKicker} title={c.filmTitle} align="split" />
          <Reveal>
            <VideoExperience config={videos.dayFestival} className="mt-10 rounded-[var(--radius-md)]" />
          </Reveal>
          <Reveal>
            <div className="mt-10 flex flex-wrap gap-3">
              <L
                href="/program"
                className="fx-b-fill fx-b-press rounded-full border px-6 py-3 text-[0.86rem] font-semibold"
                style={{ borderColor: 'var(--env-card-line)' }}
              >
                {t.common.viewProgram}
              </L>
              <L
                href="/map"
                className="fx-b-fill fx-b-press rounded-full border px-6 py-3 text-[0.86rem] font-semibold"
                style={{ borderColor: 'var(--env-card-line)' }}
              >
                {t.common.festivalMap}
              </L>
              <L
                href="/one-beat-night"
                className="fx-b-press rounded-full px-6 py-3 text-[0.86rem] font-bold"
                style={{ background: 'var(--color-magenta)', color: '#fff' }}
              >
                {t.common.continueToNight}
              </L>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
