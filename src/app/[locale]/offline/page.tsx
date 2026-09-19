import { L } from '../../../components/system/L';
import type { Metadata } from 'next';

import { getMessages } from '@/i18n/get-messages';
import type { Locale } from '@/i18n/config';

type PageProps = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getMessages(locale);
  return { title: t.offline.metaTitle, description: t.offline.metaDescription };
}

/**
 * Trang thợ chạy nền trả về khi mở một trang chưa từng xem mà máy lại mất mạng.
 * Cố ý không có ảnh: lúc này tải ảnh là hỏng nốt.
 */
export default async function OfflinePage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getMessages(locale);

  return (
    <div className="wrap flex min-h-[70svh] flex-col justify-center py-24">
      <p className="kicker" style={{ color: 'var(--color-gold)' }}>
        {t.offline.kicker}
      </p>
      <h1 className="font-display mt-4 text-[clamp(2rem,7vw,3.6rem)] leading-[1.02]">
        {t.offline.title}
      </h1>
      <p className="lede mt-5 max-w-[34rem]" style={{ color: 'var(--env-muted, rgb(244 241 234 / 0.7))' }}>
        {t.offline.lead}
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <L
          href="/"
          className="fx-b-press rounded-full px-6 py-3 text-[0.88rem] font-bold"
          style={{ background: 'var(--color-gold)', color: '#16120a' }}
        >
          {t.offline.home}
        </L>
        <L
          href="/program"
          className="fx-b-fill fx-b-press rounded-full border px-6 py-3 text-[0.88rem] font-semibold"
          style={{ borderColor: 'var(--env-card-line)', color: 'var(--env-fg)' }}
        >
          {t.offline.savedProgram}
        </L>
      </div>
    </div>
  );
}
