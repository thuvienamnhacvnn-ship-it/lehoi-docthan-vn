'use client';

import { L } from '../system/L';
import { menuNav } from '@/data/festival';
import { useI18n } from '@/i18n/I18nProvider';
import { Pending } from '@/components/system/Pending';
import { StageLights } from '@/components/night/StageLights';
import { AssetImage } from '@/components/media/AssetImage';
import { assetStats } from '@/lib/assets';

/**
 * Chân trang không phải bãi đỗ của mấy đường link.
 * Đây là nhịp kết của trang: biểu tượng tách nền đặt trên nền sóng sáng, dàn đèn chạy nhẹ,
 * tên lễ hội dựng bằng chữ HTML cỡ lớn, rồi mới tới các cột điều hướng.
 *
 * Logo: dùng `02-emblem-trong-suot` (nền trong suốt) chứ KHÔNG dùng `01-logo-master-goc`
 * — bản 01 có nền đen và có sẵn chữ kèm năm, đặt lên nền sáng là lộ ngay khung đen.
 */
export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer
      data-env-zone="night"
      className="relative overflow-hidden"
      style={{ background: '#050507', color: '#f4f1ea' }}
    >
      {/* Mép trên: một vạch sáng chạy hết bề ngang */}
      <div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent, var(--color-purple) 18%, var(--color-magenta) 42%, var(--color-gold) 68%, var(--color-cyan) 86%, transparent)',
        }}
      />

      {/* Nền: sóng sáng + tia + dàn đèn chạy nhẹ */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <AssetImage id="kit-01-22-bg-wave" sizes="full" fill className="opacity-30" />
        <img
          src="/assets/KIT-01/25-overlay-light-beams-1600.webp"
          alt=""
          loading="lazy"
          className="absolute inset-x-0 top-0 h-2/3 w-full object-cover opacity-35 mix-blend-screen"
          style={{
            maskImage: 'linear-gradient(to bottom, black 0%, black 45%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 45%, transparent 100%)',
          }}
        />
        <StageLights className="mix-blend-screen opacity-70" count={6} intensity={0.55} bpm={96} />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, transparent 30%, rgb(5 5 7 / 0.72) 78%)' }}
        />
      </div>

      {/* ---- Khối mở: biểu tượng + tên lễ hội ---- */}
      <div className="wrap relative pt-20 pb-14 text-center">
        <div className="group relative mx-auto w-fit">
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 -z-10 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ background: 'radial-gradient(circle, rgb(245 185 66 / 0.28), transparent 68%)' }}
          />
          <img
            src="/assets/KIT-01/02-emblem-trong-suot-480.webp"
            alt={`${t.brand.name}`}
            width={168}
            height={168}
            loading="lazy"
            className="fx-i-shine fx-i-beat mx-auto h-28 w-28 object-contain sm:h-32 sm:w-32"
          />
        </div>

        <p className="kicker mt-8" style={{ color: 'rgb(244 241 234 / 0.45)' }}>
          {t.brand.city} · {t.brand.country}
        </p>

        <p className="font-display mt-4 text-[clamp(2.2rem,7vw,5.5rem)] leading-[0.95]">
          ONE BEAT <span className="gold-text">NIGHT</span>
        </p>
        <p
          className="font-display mt-2 text-[clamp(0.7rem,1.6vw,1.05rem)] tracking-[0.42em]"
          style={{ color: 'rgb(244 241 234 / 0.55)' }}
        >
          {t.brand.subtitle}
        </p>

        <p
          className="mx-auto mt-7 max-w-[46ch] text-[0.95rem] leading-relaxed"
          style={{ color: 'rgb(244 241 234 / 0.6)' }}
        >
          {t.brand.positioning}
        </p>

        {/* Ba lối rẽ cuối cùng */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <L
            href="/tickets"
            className="fx-b-press rounded-full px-7 py-3.5 text-[0.88rem] font-bold"
            style={{ background: 'var(--color-gold)', color: '#16120a' }}
          >
            {t.common.ticketsFull}
          </L>
          <L
            href="/partners"
            className="fx-b-fill fx-b-press rounded-full border px-7 py-3.5 text-[0.88rem] font-semibold"
            style={{ borderColor: 'rgb(244 241 234 / 0.28)', color: '#f4f1ea' }}
          >
            {t.common.becomePartner}
          </L>
          <L
            href="/gallery"
            className="fx-t-arrow px-3 py-3.5 text-[0.88rem] font-semibold underline underline-offset-8"
            style={{ color: 'rgb(244 241 234 / 0.7)' }}
          >
            {t.common.gallery} <span className="fx-arrow">→</span>
          </L>
        </div>

        <p className="font-display gold-text mt-9 text-[1.05rem] tracking-[0.12em]">
          {t.brand.slogan.toUpperCase()}
        </p>
      </div>

      {/* ---- Bốn cột điều hướng ---- */}
      <div className="wrap relative">
        <hr className="rule" style={{ background: 'rgb(244 241 234 / 0.12)' }} />
        <nav aria-label={t.footer.navLabel} className="grid gap-9 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {menuNav.map((group) => (
            <div key={group.key} className="group">
              <p className="kicker fx-t-kicker mb-4" style={{ color: 'rgb(244 241 234 / 0.4)' }}>
                {t.menu.groups[group.key]}
              </p>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <L
                      href={item.href}
                      className="fx-t-underline inline-block py-1.5 text-[0.88rem] transition-colors duration-300 hover:text-white"
                      style={{ color: 'rgb(244 241 234 / 0.68)' }}
                    >
                      {t.menu.items[item.href].label}
                    </L>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* ---- Thông tin & trạng thái ---- */}
        <hr className="rule" style={{ background: 'rgb(244 241 234 / 0.12)' }} />
        <dl
          className="grid gap-7 py-10 text-[0.8rem] sm:grid-cols-2 lg:grid-cols-4"
          style={{ color: 'rgb(244 241 234 / 0.55)' }}
        >
          <div className="group">
            <dt className="kicker fx-t-kicker mb-2.5" style={{ color: 'rgb(244 241 234 / 0.35)' }}>
              {t.footer.location}
            </dt>
            <dd>
              {t.brand.city}, {t.brand.country}
              <span className="mt-1.5 block">
                <Pending k="VENUE" tone="quiet" />
              </span>
            </dd>
          </div>
          <div className="group">
            <dt className="kicker fx-t-kicker mb-2.5" style={{ color: 'rgb(244 241 234 / 0.35)' }}>
              {t.footer.time}
            </dt>
            <dd>
              <Pending k="EVENT_DATE" tone="quiet" />
            </dd>
          </div>
          <div className="group">
            <dt className="kicker fx-t-kicker mb-2.5" style={{ color: 'rgb(244 241 234 / 0.35)' }}>
              {t.footer.partnership}
            </dt>
            <dd>
              <span className="block">
                <Pending k="PARTNER_EMAIL" tone="quiet" />
              </span>
              <L
                href="/contact"
                // py-1.5: không có đệm thì liên kết chỉ cao 19px, dưới ngưỡng chạm 24px (WCAG 2.5.8)
                className="fx-t-underline mt-1.5 inline-block py-1.5"
                style={{ color: 'rgb(244 241 234 / 0.7)' }}
              >
                {t.footer.workingChannel}
              </L>
            </dd>
          </div>
          <div className="group">
            <dt className="kicker fx-t-kicker mb-2.5" style={{ color: 'rgb(244 241 234 / 0.35)' }}>
              {t.footer.library}
            </dt>
            <dd>
              <span className="num-oversized text-[1.3rem]" style={{ color: 'var(--color-gold)' }}>
                {assetStats.library}
              </span>{' '}
              {t.footer.imagesInKits}
              <span className="mt-1 block" style={{ color: 'rgb(244 241 234 / 0.38)' }}>
                {t.footer.openArchitecture} {assetStats.target}
              </span>
            </dd>
          </div>
        </dl>
      </div>

      {/* ---- Chữ nền cỡ lớn ở đáy: viền rỗng, chìm một nửa dưới mép ---- */}
      <div className="relative select-none overflow-hidden" aria-hidden>
        <p
          className="font-display whitespace-nowrap text-center leading-[0.8]"
          style={{
            fontSize: 'clamp(3.2rem, 14vw, 12rem)',
            letterSpacing: '-0.04em',
            color: 'transparent',
            WebkitTextStroke: '1px rgb(244 241 234 / 0.1)',
            marginBottom: '-0.2em',
          }}
        >
          ONE BEAT NIGHT
        </p>
      </div>

      <div className="wrap relative pb-9">
        <p className="text-[0.72rem] leading-relaxed" style={{ color: 'rgb(244 241 234 / 0.34)' }}>
          {t.brand.name} · {t.brand.subtitle} — {t.footer.legal}
        </p>
      </div>
    </footer>
  );
}
