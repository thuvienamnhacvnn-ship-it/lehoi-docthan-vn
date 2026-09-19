import type { Metadata } from 'next';
import { L } from '../../../components/system/L';
import { PageHero } from '@/components/ui/PageHero';
import { AssetImage } from '@/components/media/AssetImage';
import { VideoExperience } from '@/components/media/VideoExperience';
import { Reveal } from '@/components/system/Reveal';
import { SectionHeader, Tag } from '@/components/ui/Section';
import { contentFormats } from '@/data/community';
import { videos } from '@/data/videos';

import { getMessages } from '@/i18n/get-messages';
import type { Locale } from '@/i18n/config';

type PageProps = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getMessages(locale);
  return { title: t.pages.news.metaTitle, description: t.pages.news.metaDescription };
}


export default async function NewsPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getMessages(locale);
  const c = t.pages.news;
  const [lead, ...rest] = contentFormats;

  return (
    <>
      <PageHero
        kicker={c.kicker}
        title={c.title}
        lead={c.lead}
        assetId="kit-04-22-social-content-production"
        env="night"
        height="short"
      />

      <section data-env-zone="night" className="section" style={{ background: '#050507' }}>
        <div className="wrap">
          <Reveal>
            <article className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div className="grid grid-cols-[1.6fr_1fr] gap-3">
                <AssetImage id={lead.assetId} sizes="half" className="rounded-[var(--radius-md)]" />
                {lead.portraitAssetId && (
                  <AssetImage
                    id={lead.portraitAssetId}
                    sizes="third"
                    ratio="3 / 4"
                    className="h-full rounded-[var(--radius-md)]"
                  />
                )}
              </div>
              <div>
                <Tag color="var(--color-magenta)">{t.contentKinds[lead.kind]}</Tag>
                <h2 className="font-display t-lg mt-4" style={{ color: '#f4f1ea' }}>
                  {t.contentFormats[lead.id].name}
                </h2>
                <p className="lede mt-5" style={{ color: 'rgb(244 241 234 / 0.74)' }}>
                  {t.contentFormats[lead.id].lead}
                </p>
                <p className="mt-4 text-[0.9rem] leading-relaxed" style={{ color: 'rgb(244 241 234 / 0.58)' }}>
                  {t.contentFormats[lead.id].body}
                </p>
              </div>
            </article>
          </Reveal>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {rest.map((item, i) => (
              <Reveal key={item.id} delay={i * 70}>
                <article
                  className="group fx-c-lift fx-c-shine fx-c-zoom flex h-full flex-col overflow-hidden rounded-[var(--radius-md)] border"
                  style={{ borderColor: 'rgb(244 241 234 / 0.12)' }}
                >
                  <div className="relative">
                    <AssetImage id={item.assetId} sizes="third" ratio="16 / 10" className="w-full" />
                    {item.portraitAssetId && (
                      <AssetImage
                        id={item.portraitAssetId}
                        sizes="thumb"
                        ratio="3 / 4"
                        className="absolute bottom-3 right-3 w-14 rounded-[var(--radius-xs)] border border-white/25 shadow-lg"
                      />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <Tag>{t.contentKinds[item.kind]}</Tag>
                    <h3 className="font-display fx-t-underline mt-3 text-[1.1rem]" style={{ color: '#f4f1ea' }}>
                      {t.contentFormats[item.id].name}
                    </h3>
                    <p className="mt-2 text-[0.84rem]" style={{ color: 'rgb(244 241 234 / 0.66)' }}>
                      {t.contentFormats[item.id].lead}
                    </p>
                    <p className="mt-3 flex-1 text-[0.8rem] leading-relaxed" style={{ color: 'rgb(244 241 234 / 0.5)' }}>
                      {t.contentFormats[item.id].body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reels */}
      <section data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap">
          <SectionHeader kicker={c.reelsKicker} title={c.reelsTitle} align="split" />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {(['reelFlashmob', 'reelDance', 'reelCreator'] as const).map((k) => (
              <Reveal key={k}>
                <VideoExperience config={videos[k]} className="rounded-[var(--radius-md)]" sizes="third" />
                <p className="mt-3 text-[0.82rem]" style={{ color: 'rgb(244 241 234 / 0.6)' }}>
                  {t.videos[k]}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap">
          <Reveal>
            <div
              className="rounded-[var(--radius-md)] border p-7"
              style={{ borderColor: 'rgb(244 241 234 / 0.14)' }}
            >
              <p className="kicker mb-3">{c.emptyKicker}</p>
              <p className="lede" style={{ color: 'rgb(244 241 234 / 0.7)' }}>
                {c.emptyLead}
              </p>
              <L
                href="/press"
                className="fx-t-arrow mt-6 inline-flex text-[0.88rem] font-semibold underline underline-offset-8"
                style={{ color: '#f4f1ea' }}
              >
                {c.pressCta} <span className="fx-arrow">→</span>
              </L>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
