import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { Archivo, Be_Vietnam_Pro } from 'next/font/google';
import '../globals.css';
import { EnvironmentProvider } from '@/components/system/EnvironmentProvider';
import { SiteNav } from '@/components/shell/SiteNav';
import { SiteFooter } from '@/components/shell/SiteFooter';
import { Loader } from '@/components/shell/Loader';
import { AppRuntime } from '@/components/app/AppRuntime';
import { AppTabBar } from '@/components/app/AppTabBar';
import { InstallPrompt } from '@/components/app/InstallPrompt';
import { I18nProvider } from '@/i18n/I18nProvider';
import { getMessages } from '@/i18n/get-messages';
import { LOCALES, LOCALE_INFO, isLocale, type Locale } from '@/i18n/config';
import { siteUrl } from '@/lib/site-url';

const archivo = Archivo({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-archivo',
  display: 'swap',
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-bvp',
  display: 'swap',
});

/** Năm bản đều dựng sẵn lúc build — không có trang nào phải sinh lúc có người vào. */
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = await getMessages(locale);
  const info = LOCALE_INFO[locale];

  const base = siteUrl();

  return {
    metadataBase: new URL(base),
    title: {
      default: `${t.brand.name} · ${t.brand.subtitle}`,
      template: `%s · ${t.brand.name}`,
    },
    description: t.brand.positioning,
    // Bảo máy tìm kiếm rằng năm URL này là cùng một trang ở năm thứ tiếng.
    alternates: {
      canonical: `${base}/${locale}`,
      languages: Object.fromEntries([
        ...LOCALES.map((l) => [LOCALE_INFO[l].html, `${base}/${l}`]),
        ['x-default', `${base}/vi`],
      ]),
    },
    openGraph: {
      title: `${t.brand.name} · ${t.brand.subtitle}`,
      description: t.brand.positioning,
      images: ['/assets/legacy/22-2026-09-13-one-beat-night-ho-chi-minh-city-1600.webp'],
      locale: info.og,
      type: 'website',
    },
    manifest: '/manifest.webmanifest',
    applicationName: t.brand.name,
    appleWebApp: {
      capable: true,
      title: 'ONE BEAT',
      statusBarStyle: 'black-translucent',
    },
    formatDetection: { telephone: false },
    icons: {
      icon: [
        { url: '/icons/favicon-32.png', sizes: '32x32', type: 'image/png' },
        { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
        { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    },
  };
}

export const viewport: Viewport = {
  themeColor: '#050507',
  colorScheme: 'dark light',
  viewportFit: 'cover',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const messages = await getMessages(locale as Locale);
  const info = LOCALE_INFO[locale as Locale];

  return (
    <html
      lang={info.html}
      data-env="night"
      // data-script quyết định bộ chữ nào được dùng: chữ Hán/Kana/Hangul không có trong
      // Archivo, nên globals.css đổi sang bộ chữ hệ thống của máy cho các thứ tiếng đó.
      data-script={info.cjk ? 'cjk' : 'latin'}
      className={`${archivo.variable} ${beVietnam.variable}`}
    >
      <body>
        <a className="skip-link" href="#main">
          {messages.common.skipToContent}
        </a>
        <Loader />
        <AppRuntime />
        <I18nProvider locale={locale as Locale} messages={messages}>
          <EnvironmentProvider>
            <SiteNav />
            <main id="main">{children}</main>
            <SiteFooter />
            <AppTabBar />
            <InstallPrompt />
          </EnvironmentProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
