import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { GalleryExplorer } from '@/components/media/GalleryExplorer';
import { assetStats, plannedSlots } from '@/lib/assets';
import { getMessages } from '@/i18n/get-messages';
import type { Locale } from '@/i18n/config';

type PageProps = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getMessages(locale);
  return { title: t.pages.gallery.metaTitle, description: t.pages.gallery.metaDescription };
}

export default async function GalleryPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getMessages(locale);
  const c = t.pages.gallery;

  return (
    <>
      <PageHero
        kicker={c.kicker}
        title={
          <>
            {c.titleA} <span className="t-outline">{c.titleB}</span>
          </>
        }
        lead={`${assetStats.library} ${c.leadA} ${assetStats.target} ${c.leadB} ${plannedSlots.length} ${c.leadC}`}
        assetId="legacy-19-2026-09-13-golden-phoenix-infinity-emblem"
        env="night"
        height="short"
      />

      <section data-env-zone="night" className="section" style={{ background: '#050507' }}>
        <div className="wrap">
          <GalleryExplorer />
        </div>
      </section>
    </>
  );
}
