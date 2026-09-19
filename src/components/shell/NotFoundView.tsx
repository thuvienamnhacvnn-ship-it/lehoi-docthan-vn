'use client';

import { L } from '@/components/system/L';
import { AssetImage } from '@/components/media/AssetImage';
import { StageLights } from '@/components/night/StageLights';
import { primaryNav } from '@/data/festival';
import { useI18n } from '@/i18n/I18nProvider';

/**
 * Nội dung trang 404. Không phải một dòng chữ xám giữa nền trắng — vẫn là lễ hội, và
 * quan trọng hơn cả là đưa người ta về đúng chỗ họ định tới thay vì bắt bấm "Quay lại".
 */
export function NotFoundView() {
  const { t } = useI18n();

  return (
    <section data-env-zone="night" className="relative overflow-hidden" style={{ background: '#050507' }}>
      <div className="absolute inset-0">
        <AssetImage id="kit-03-20-light-wave-over-audience" sizes="full" fill alt="" />
        <div className="absolute inset-0" style={{ background: 'rgb(5 5 7 / 0.78)' }} />
        <StageLights className="mix-blend-screen opacity-70" count={7} intensity={0.8} direction="up" />
      </div>

      <div
        className="wrap on-dark relative flex flex-col justify-center py-32"
        style={{ minHeight: 'calc(100svh - var(--app-bottom))' }}
      >
        <p className="num-oversized text-[clamp(3.5rem,18vw,9rem)] leading-none" style={{ color: 'var(--color-gold)' }}>
          404
        </p>
        <h1 className="font-display t-xl mt-4 max-w-[18ch]">{t.notFound.title}</h1>
        <p className="lede mt-5 max-w-[34rem]" style={{ color: 'rgb(244 241 234 / 0.74)' }}>
          {t.notFound.lead}
        </p>

        <ul className="mt-9 flex flex-wrap gap-2.5">
          {primaryNav.map((item) => (
            <li key={item.href}>
              <L
                href={item.href}
                className="fx-b-fill fx-b-press block rounded-full border px-5 py-2.5 text-[0.84rem] font-semibold"
                style={{ borderColor: 'rgb(244 241 234 / 0.24)', color: '#f4f1ea' }}
              >
                {t.nav[item.key]}
              </L>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <L
            href="/"
            className="fx-b-press inline-block rounded-full px-6 py-3 text-[0.88rem] font-bold"
            style={{ background: 'var(--color-gold)', color: '#16120a' }}
          >
            {t.notFound.home}
          </L>
        </div>
      </div>
    </section>
  );
}
