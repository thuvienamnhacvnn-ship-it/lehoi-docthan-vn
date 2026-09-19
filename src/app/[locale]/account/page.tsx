import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { AssetImage } from '@/components/media/AssetImage';
import { AccountPanel } from '@/components/account/AccountPanel';
import { getMessages } from '@/i18n/get-messages';
import type { Locale } from '@/i18n/config';

type PageProps = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getMessages(locale);
  return { title: t.pages.account.metaTitle, description: t.pages.account.metaDescription };
}

export default async function AccountPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getMessages(locale);
  const c = t.pages.account;

  return (
    <>
      <PageHero kicker={c.kicker} title={c.title} lead={c.lead} assetId="kit-01-18-app-phone-blank" env="night" height="short" />

      <section data-env-zone="night" className="section relative overflow-hidden" style={{ background: '#050507' }}>
        <AssetImage id="kit-01-28-bg-bokeh" sizes="full" fill className="opacity-25" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, #050507, rgb(5 5 7 / 0.78) 45%, #050507)' }}
        />
        <div className="wrap relative">
          <AccountPanel />
        </div>
      </section>
    </>
  );
}
