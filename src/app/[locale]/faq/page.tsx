import type { Metadata } from 'next';
import { L } from '../../../components/system/L';
import { PageHero } from '@/components/ui/PageHero';
import { AssetImage } from '@/components/media/AssetImage';
import { Reveal } from '@/components/system/Reveal';


import { getMessages } from '@/i18n/get-messages';
import type { Locale } from '@/i18n/config';

type PageProps = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getMessages(locale);
  return { title: t.pages.faq.metaTitle, description: t.pages.faq.metaDescription };
}


export default async function FaqPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getMessages(locale);
  const c = t.pages.faq;

  return (
    <>
      <PageHero
        kicker={c.kicker}
        title={c.title}
        lead={c.lead}
        assetId="legacy-11-2026-07-02-neon-festival-energy-in-the-city"
        focal="center 40%"
        env="night"
        height="short"
      />

      <section data-env-zone="night" className="section" style={{ background: '#050507' }}>
        <div className="wrap-narrow">
          <div className="space-y-2">
            {t.faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 40}>
                <details
                  className="group rounded-[var(--radius-md)] border px-5 py-4 transition-colors"
                  style={{ borderColor: 'rgb(244 241 234 / 0.12)' }}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="font-display text-[1.05rem]" style={{ color: '#f4f1ea' }}>
                      {f.q}
                    </span>
                    <span
                      aria-hidden
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full border text-lg transition-transform duration-300 group-open:rotate-45"
                      style={{ borderColor: 'rgb(244 241 234 / 0.2)', color: 'rgb(244 241 234 / 0.7)' }}
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-[0.9rem] leading-relaxed" style={{ color: 'rgb(244 241 234 / 0.66)' }}>
                    {f.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div
              className="relative mt-12 overflow-hidden rounded-[var(--radius-md)] border p-7 text-center"
              style={{ borderColor: 'rgb(244 241 234 / 0.14)' }}
            >
              <AssetImage id="kit-01-23-bg-galaxy" sizes="full" fill className="opacity-30" />
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: 'radial-gradient(ellipse at center, rgb(5 5 7 / 0.55), rgb(5 5 7 / 0.9))' }}
              />
              <div className="relative">
              <p className="font-display text-[1.2rem]" style={{ color: '#f4f1ea' }}>
                {c.moreTitle}
              </p>
              <p className="mt-2 text-[0.88rem]" style={{ color: 'rgb(244 241 234 / 0.6)' }}>
                {c.moreLead}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <L
                  href="/visitor-guide"
                  className="fx-b-fill fx-b-press rounded-full border px-6 py-3 text-[0.85rem] font-semibold"
                  style={{ borderColor: 'rgb(244 241 234 / 0.25)', color: '#f4f1ea' }}
                >
                  {c.guideCta}
                </L>
                <L
                  href="/contact"
                  className="fx-b-press rounded-full px-6 py-3 text-[0.85rem] font-bold"
                  style={{ background: 'var(--color-gold)', color: '#16120a' }}
                >
                  {c.contactCta}
                </L>
              </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
