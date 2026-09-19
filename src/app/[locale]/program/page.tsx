import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { ScheduleExplorer } from '@/components/program/ScheduleExplorer';
import { Pending } from '@/components/system/Pending';
import { scheduleWithActivity } from '@/data/program';
import { getMessages } from '@/i18n/get-messages';
import type { Locale } from '@/i18n/config';

type PageProps = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getMessages(locale);
  return { title: t.pages.program.metaTitle, description: t.pages.program.metaDescription };
}

export default async function ProgramPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getMessages(locale);
  const c = t.pages.program;

  return (
    <>
      <PageHero
        kicker={c.kicker}
        title={
          <>
            {c.titleA} <span className="t-outline">{c.titleB}</span>
          </>
        }
        lead={`${scheduleWithActivity.length} ${c.leadA}`}
        assetId="kit-06-17-golden-hour-transition"
        env="golden"
        height="short"
      >
        <p className="mt-7 text-[0.84rem]" style={{ color: 'rgb(244 241 234 / 0.6)' }}>
          {c.dateLabel} <Pending k="EVENT_DATE" /> · {c.doorsLabel} <Pending k="EVENT_TIME" />
        </p>
      </PageHero>

      <section data-env-zone="night" className="section" style={{ background: '#050507' }}>
        <div className="wrap">
          <ScheduleExplorer />
        </div>
      </section>
    </>
  );
}
