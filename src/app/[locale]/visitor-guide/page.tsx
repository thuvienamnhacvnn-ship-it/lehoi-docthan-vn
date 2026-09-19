import type { Metadata } from 'next';
import { L } from '../../../components/system/L';
import { PageHero } from '@/components/ui/PageHero';
import { AssetImage } from '@/components/media/AssetImage';
import { Reveal } from '@/components/system/Reveal';
import { SectionHeader } from '@/components/ui/Section';
import { Pending } from '@/components/system/Pending';
import { operations } from '@/data/community';

import { getMessages } from '@/i18n/get-messages';
import type { Locale } from '@/i18n/config';

type PageProps = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getMessages(locale);
  return { title: t.pages.visitorGuide.metaTitle, description: t.pages.visitorGuide.metaDescription };
}

/** Năm phần của cẩm nang — chữ ở bộ dịch, đây giữ thứ tự và ảnh. */
const guideSections = [
  { id: 'before', assetId: 'kit-01-19-ticket' },
  { id: 'arrive', assetId: 'kit-01-16-entrance-gate' },
  { id: 'pets', assetId: 'kit-02-15-pets-large-dogs' },
  { id: 'access', assetId: 'kit-06-22-accessible-event-pathway' },
  { id: 'respect', assetId: 'kit-06-20-safety-staff-support' },
] as const;

export default async function VisitorGuidePage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getMessages(locale);
  const c = t.pages.visitorGuide;

  return (
    <>
      <PageHero
        kicker={c.kicker}
        title={c.title}
        lead={c.lead}
        assetId="kit-06-19-information-help-desk"
        focal="center 32%"
        env="day"
        height="short"
      >
        <p className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-[0.84rem]" style={{ color: 'var(--env-muted)' }}>
          <span>
            {c.dateLabel} <Pending k="EVENT_DATE" />
          </span>
          <span>
            {c.doorsLabel} <Pending k="EVENT_TIME" />
          </span>
          <span>
            {c.venueLabel} <Pending k="VENUE" />
          </span>
        </p>
      </PageHero>

      <section data-env-zone="day" className="section" style={{ background: 'var(--env-bg)' }}>
        <div className="wrap space-y-16">
          {guideSections.map((s, i) => (
            <Reveal key={s.id} delay={i * 60}>
              <article className={`grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <AssetImage id={s.assetId} sizes="half" ratio="4 / 3" className="rounded-[var(--radius-md)]" />
                <div>
                  <h2 className="font-display t-lg">{c.sections[s.id].title}</h2>
                  <ul className="mt-6 space-y-3">
                    {c.sections[s.id].items.map((it) => (
                      <li key={it} className="flex gap-3 text-[0.9rem] leading-relaxed" style={{ color: 'var(--env-muted)' }}>
                        <span aria-hidden style={{ color: 'var(--env-accent)' }}>
                          —
                        </span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section data-env-zone="golden" className="section">
        <div className="wrap">
          <SectionHeader kicker={c.servicesKicker} title={c.servicesTitle} align="split" />
          <div className="grid-3 mt-12">
            {operations.slice(0, 3).map((o, i) => (
              <Reveal key={o.id} delay={i * 70}>
                <figure className="group fx-c-zoom fx-c-shine relative overflow-hidden rounded-[var(--radius-md)]">
                  <AssetImage id={o.assetId} sizes="third" ratio="4 / 3" className="w-full" scrim="bottom" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-display fx-t-lift text-[1.05rem] text-white">{t.operations[o.id].label}</p>
                    <p className="mt-1 text-[0.78rem]" style={{ color: 'rgb(244 241 234 / 0.7)' }}>
                      {t.operations[o.id].note}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 flex flex-wrap gap-3">
              <L href="/map" className="fx-b-fill fx-b-press rounded-full border px-6 py-3 text-[0.86rem] font-semibold" style={{ borderColor: 'var(--env-card-line)' }}>
                {t.common.festivalMap}
              </L>
              <L href="/program" className="fx-b-fill fx-b-press rounded-full border px-6 py-3 text-[0.86rem] font-semibold" style={{ borderColor: 'var(--env-card-line)' }}>
                {t.nav.program}
              </L>
              <L href="/faq" className="fx-b-fill fx-b-press rounded-full border px-6 py-3 text-[0.86rem] font-semibold" style={{ borderColor: 'var(--env-card-line)' }}>
                {t.pages.faq.kicker}
              </L>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
