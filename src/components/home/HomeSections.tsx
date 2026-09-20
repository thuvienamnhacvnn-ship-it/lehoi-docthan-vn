'use client';

import { L } from '../system/L';
import { AssetImage } from '@/components/media/AssetImage';
import { VideoExperience } from '@/components/media/VideoExperience';
import { Reveal } from '@/components/system/Reveal';
import { KineticTitle } from '@/components/system/KineticTitle';
import { SectionHeader, Tag } from '@/components/ui/Section';
import { Pending } from '@/components/system/Pending';
import { festival } from '@/data/festival';
import { useI18n } from '@/i18n/I18nProvider';
import { audienceGroups } from '@/data/community';
import { megaZoneCategories } from '@/data/activities';
import { videos } from '@/data/videos';
import { assetStats } from '@/lib/assets';

/** 02 — PHONG TRÀO: vì sao lễ hội này tồn tại. */
export function MovementSection() {
  const { t } = useI18n();
  return (
    <section data-env-zone="night" className="section" style={{ background: '#050507' }}>
      <div className="wrap grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <Reveal>
          <p className="kicker mb-5">{t.home.movement.kicker}</p>
          <KineticTitle as="h2" className="font-display t-xl">
            <span className="t-neon">{t.home.movement.titleA}</span> {t.home.movement.titleB}{' '}
            <span className="gold-text">{t.home.movement.titleC}</span>.
          </KineticTitle>
          <div className="mt-7 space-y-5" style={{ color: 'rgb(244 241 234 / 0.68)' }}>
            <p className="lede" style={{ color: 'inherit' }}>
              {t.home.movement.lead}
            </p>
            <p className="max-w-[58ch] text-[0.94rem] leading-relaxed">
              {t.home.movement.body}
            </p>
          </div>
          <ul className="mt-9 flex flex-wrap gap-2">
            {festival.values.map((v) => (
              <li key={v}>
                <Tag>{t.values[v]}</Tag>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[0.8rem]" style={{ color: 'rgb(244 241 234 / 0.4)' }}>
            {t.home.movement.notA} {t.isNotA.join(' · ')}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <AssetImage
            id="kit-01-13-hero-connection-couple"
            sizes="half"
            className="rounded-[var(--radius-md)]"
            style={{ boxShadow: 'var(--env-shadow)' }}
          />
          <p className="mt-3 text-[0.78rem] leading-snug" style={{ color: 'rgb(244 241 234 / 0.42)' }}>
            {t.home.movement.captionMain}
          </p>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {/* Chú thích để NGOÀI khung bo góc: để bên trong thì overflow-hidden cắt mất chữ đầu dòng */}
            <figure>
              <div className="group fx-c-zoom overflow-hidden rounded-[var(--radius-md)]">
                <AssetImage id="kit-01-06-freedom-symbol" sizes="third" ratio="1 / 1" className="w-full" />
              </div>
              <figcaption className="mt-2 text-[0.72rem] leading-snug" style={{ color: 'rgb(244 241 234 / 0.42)' }}>
                {t.home.movement.captionFreedom}
              </figcaption>
            </figure>
            <figure>
              <div className="group fx-c-zoom overflow-hidden rounded-[var(--radius-md)]">
                <AssetImage id="kit-01-12-connection-hands" sizes="third" ratio="1 / 1" className="w-full" />
              </div>
              <figcaption className="mt-2 text-[0.72rem] leading-snug" style={{ color: 'rgb(244 241 234 / 0.42)' }}>
                {t.home.movement.captionConnection}
              </figcaption>
            </figure>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** 03 — DÀNH CHO AI. */
export function AudienceSection() {
  const { t } = useI18n();
  return (
    <section data-env-zone="day" className="section" style={{ background: 'var(--env-bg)' }}>
      <div className="wrap">
        <SectionHeader
          kicker={t.home.audience.kicker}
          title={
            <>
              {t.home.audience.titleA}
              <br />
              {t.home.audience.titleB}{' '}
              <span className="t-outline" style={{ color: 'var(--color-purple)' }}>
                {t.home.audience.titleC}
              </span>
              .
            </>
          }
          lead={t.home.audience.lead}
          align="wide"
          aside={
            <div className="lg:text-right">
              <p className="kicker mb-3">{t.home.audience.asideKicker}</p>
              <ul className="flex flex-wrap items-baseline gap-x-7 gap-y-2 lg:justify-end">
                {audienceGroups.map((g) => (
                  <li key={g.id}>
                    <span
                      className="num-oversized text-[clamp(1.5rem,2.4vw,2.2rem)]"
                      style={{ color: g.accent }}
                    >
                      {g.range}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          }
        />

        <div className="grid-3 mt-14">
          {audienceGroups.map((g, i) => (
            <Reveal key={g.id} delay={i * 110}>
              <article
                className="group fx-c-lift fx-c-zoom fx-c-shine flex h-full flex-col overflow-hidden rounded-[var(--radius-md)] border"
                style={{ borderColor: 'var(--env-card-line)' }}
              >
                <AssetImage id={g.assetId} sizes="third" ratio="3 / 4" className="w-full" />
                <div className="flex flex-1 flex-col p-6">
                  <p className="num-oversized fx-i-beat text-[2rem]" style={{ color: g.accent }}>
                    {g.range}
                  </p>
                  <h3 className="font-display fx-t-underline mt-3 text-[1.2rem]">{t.audience[g.id].title}</h3>
                  <p className="mt-3 flex-1 text-[0.88rem] leading-relaxed" style={{ color: 'var(--env-muted)' }}>
                    {t.audience[g.id].lead}
                  </p>
                  <ul className="mt-5 space-y-1.5 pt-1">
                    {t.audience[g.id].traits.map((trait) => (
                      <li key={trait} className="flex gap-2 text-[0.8rem]" style={{ color: 'var(--env-faint)' }}>
                        <span aria-hidden style={{ color: g.accent }}>
                          —
                        </span>
                        {trait}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-[0.82rem]" style={{ color: 'var(--env-faint)' }}>
            {t.home.audience.note} <Pending k="EXPECTED_ATTENDANCE" tone="quiet" />
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/** 05 — DAY FESTIVAL (giới thiệu, dải hoạt động nằm ở component riêng). */
export function DayFestivalIntro() {
  const { t } = useI18n();
  return (
    <section data-env-zone="day" className="section pb-0" style={{ background: 'var(--env-bg)' }}>
      <div className="wrap">
        <SectionHeader
          kicker={t.home.day.kicker}
          title={
            <>
              DAY <span style={{ color: 'var(--color-blue)' }}>FESTIVAL</span>
            </>
          }
          lead={t.home.day.lead}
          align="split"
        />
      </div>
    </section>
  );
}

/** 06 — MEGA ZONE. */
export function MegaZoneSection() {
  const { t } = useI18n();
  return (
    <section data-env-zone="golden" className="section">
      <div className="wrap">
        <SectionHeader
          kicker={t.home.mega.kicker}
          title={
            <>
              MEGA <span className="t-outline">ZONE</span>
            </>
          }
          lead={t.home.mega.lead}
          align="split"
        />

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal className="sm:col-span-2 lg:row-span-2">
            <div className="group fx-c-zoom fx-c-shine fx-c-corners relative h-full overflow-hidden rounded-[var(--radius-md)]">
              <AssetImage id="kit-02-21-mega-zone-overview" sizes="half" ratio="4 / 5" className="h-full w-full" scrim="bottom" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display fx-t-sweep text-[1.6rem] text-white">{t.home.mega.heroTitle}</h3>
                <p className="mt-2 max-w-[38ch] text-[0.86rem]" style={{ color: 'rgb(244 241 234 / 0.75)' }}>
                  {t.home.mega.heroLead}
                </p>
              </div>
            </div>
          </Reveal>

          {megaZoneCategories.map((c, i) => (
            <Reveal key={c.id} delay={i * 70} className="h-full">
              <article className="group fx-c-zoom fx-c-scan fx-c-lift relative h-full min-h-[190px] overflow-hidden rounded-[var(--radius-md)]">
                {/* Ảnh phủ kín ô: để tỉ lệ cố định thì ô nhỏ thấp hơn hàng lưới, chừa mảng đen vô lý */}
                <AssetImage id={c.assetId} sizes="third" fill scrim="bottom" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h4 className="font-display fx-t-lift text-[1rem] text-white">{t.megaZoneCategories[c.id].name}</h4>
                  <p className="mt-1 text-[0.76rem]" style={{ color: 'rgb(244 241 234 / 0.68)' }}>
                    {t.megaZoneCategories[c.id].note}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}

          {/* Ô cuối lấp chỗ trống của lưới — dẫn thẳng sang trang Mega Zone */}
          <Reveal delay={megaZoneCategories.length * 70} className="h-full">
            <L
              href="/mega-zone"
              className="group fx-c-zoom fx-c-corners relative flex h-full min-h-[190px] items-end overflow-hidden rounded-[var(--radius-md)]"
            >
              <AssetImage
                id="kit-05-19-commercial-flash-sale-moment"
                sizes="third"
                ratio="4 / 3"
                fill
                scrim="full"
              />
              <span className="relative p-4">
                <span className="font-display fx-t-lift block text-[1rem] text-white">{t.home.mega.allTitle}</span>
                <span className="mt-1 block text-[0.76rem]" style={{ color: 'rgb(244 241 234 / 0.68)' }}>
                  {t.home.mega.allLead} <span className="fx-arrow inline-block">→</span>
                </span>
              </span>
            </L>
          </Reveal>
        </div>

        <Reveal>
          <L
            href="/mega-zone"
            className="fx-t-arrow mt-10 inline-flex items-center gap-2 text-[0.9rem] font-semibold underline underline-offset-8"
          >
            {t.home.mega.cta} <span className="fx-arrow">→</span>
          </L>
        </Reveal>
      </div>
    </section>
  );
}

/** 07 — CỘNG ĐỒNG + hệ nội dung. */
export function CommunitySection() {
  const { t } = useI18n();
  return (
    <section data-env-zone="golden" className="section">
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
        {/* Hai ảnh xếp chồng cho cột trái cao ngang cột chữ — trước đây một ảnh 16:9 để hở
            một dải lớn phía trên và phía dưới. */}
        <Reveal>
          <div className="grid gap-3">
            <AssetImage id="kit-04-12-community-mixed-ages" sizes="half" ratio="4 / 3" className="rounded-[var(--radius-md)]" />
            <div className="grid grid-cols-2 gap-3">
              <AssetImage id="kit-04-13-podcast-studio-wide" sizes="third" ratio="1 / 1" className="rounded-[var(--radius-md)]" />
              <AssetImage id="kit-04-17-ugc-creative-process" sizes="third" ratio="1 / 1" className="rounded-[var(--radius-md)]" />
            </div>
          </div>
        </Reveal>
        <Reveal delay={110}>
          <p className="kicker mb-5">{t.home.community.kicker}</p>
          <h2 className="font-display t-xl">{t.home.community.title}</h2>
          <p className="lede mt-6">
            {t.home.community.lead}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <L
              href="/community"
              className="fx-b-fill fx-b-press rounded-full border px-6 py-3 text-[0.85rem] font-semibold"
              style={{ borderColor: 'var(--env-card-line)' }}
            >
              {t.home.community.ctaPeople}
            </L>
            <L
              href="/news"
              className="fx-b-fill fx-b-press rounded-full border px-6 py-3 text-[0.85rem] font-semibold"
              style={{ borderColor: 'var(--env-card-line)' }}
            >
              {t.home.community.ctaContent}
            </L>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/**
 * Dải biểu tượng — một nhịp nghỉ giữa phần cộng đồng và phần đêm nhạc.
 * Dùng banner chim vàng trên dải vô cực (ảnh nền đen nên ghép liền mạch vào nền trang).
 */
export function EmblemBand() {
  return (
    <section data-env-zone="night" className="relative overflow-hidden" style={{ background: '#050507' }}>
      <AssetImage
        id="legacy-18-2026-09-13-golden-phoenix-over-neon-infinity-hearts"
        sizes="full"
        ratio="32 / 9"
        className="w-full opacity-90"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'linear-gradient(to right, #050507 2%, transparent 22%, transparent 78%, #050507 98%)' }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-16"
        style={{ background: 'linear-gradient(to bottom, #050507, transparent)' }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
        style={{ background: 'linear-gradient(to top, #050507, transparent)' }}
      />
    </section>
  );
}

/** 09 — ĐÊM NHẠC (mở màn cho khối night). */
export function NightIntro() {
  const { t } = useI18n();
  return (
    <section data-env-zone="night" className="relative overflow-hidden" style={{ background: '#050507' }}>
      <div className="relative">
        <AssetImage id="kit-03-06-singer-dj-crossover" sizes="full" ratio="21 / 9" className="w-full opacity-70" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #050507 8%, rgb(5 5 7 / 0.2) 60%, #050507)' }} />
        <div className="wrap absolute inset-0 flex flex-col justify-center">
          <Reveal>
            <p className="kicker" style={{ color: 'rgb(244 241 234 / 0.5)' }}>
              {t.home.night.kicker}
            </p>
            <KineticTitle as="h2" className="font-display t-mega mt-4" stagger={90}>
              <span className="t-outline">ONE BEAT</span>
              <br />
              <span style={{ color: 'var(--color-magenta)' }}>NIGHT</span>
            </KineticTitle>
          </Reveal>
        </div>
      </div>

      <div className="wrap grid gap-10 py-16 lg:grid-cols-[1.05fr_1fr] lg:items-start">
        <Reveal>
          <p className="lede" style={{ color: 'rgb(244 241 234 / 0.75)' }}>
            {t.home.night.lead}
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
            <div>
              <dt className="kicker mb-2">{t.home.night.headliner}</dt>
              <dd>
                <Pending k="HEADLINER" />
              </dd>
            </div>
            <div>
              <dt className="kicker mb-2">{t.home.night.stage}</dt>
              <dd className="text-[0.86rem]" style={{ color: 'rgb(244 241 234 / 0.75)' }}>
                {t.home.night.stageValue}
              </dd>
            </div>
            <div>
              <dt className="kicker mb-2">{t.home.night.duration}</dt>
              <dd className="text-[0.86rem]" style={{ color: 'rgb(244 241 234 / 0.75)' }}>
                {t.home.night.durationValue}
              </dd>
            </div>
          </dl>
          <L
            href="/one-beat-night"
            className="fx-b-press mt-8 inline-flex rounded-full px-6 py-3 text-[0.86rem] font-bold"
            style={{ background: 'var(--color-magenta)', color: '#fff' }}
          >
            {t.home.night.cta}
          </L>
        </Reveal>

        <Reveal delay={120}>
          <VideoExperience config={videos.concertTeaser} className="rounded-[var(--radius-md)]" sizes="half" />
        </Reveal>
      </div>
    </section>
  );
}

/** 12 — KẾT: ba câu, ba hành động. */
export function FinalCta() {
  const { t } = useI18n();
  return (
    <section data-env-zone="night" className="relative overflow-hidden" style={{ background: '#050507' }}>
      <AssetImage
        id="kit-01-14-fireworks-saigon"
        sizes="full"
        fill
        className="opacity-45"
      />
      <AssetImage
        id="kit-01-24-overlay-confetti"
        sizes="full"
        fill
        className="pointer-events-none opacity-60"
        alt=""
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #050507 10%, rgb(5 5 7 / 0.55) 60%, #050507)' }} />

      <div className="wrap relative py-[clamp(5rem,14vh,9rem)] text-center">
        <Reveal>
          <img
            src="/assets/KIT-01/02-emblem-trong-suot-480.webp"
            alt=""
            aria-hidden
            width={96}
            height={96}
            loading="lazy"
            className="fx-i-shine fx-i-beat mx-auto h-20 w-20 object-contain"
          />
          <p className="kicker mt-8" style={{ color: 'rgb(244 241 234 / 0.5)' }}>
            {t.home.final.kicker}
          </p>
          {/* Ba cụm này là tên ba chặng trong tài liệu dự án, không phải ba câu.
              Trước đây đặt dấu chấm sau mỗi cụm nên đọc lên thành câu cụt — bỏ dấu chấm,
              nối bằng mũi tên đúng như cách tài liệu gốc viết. */}
          {/* Mỗi chặng là một khối riêng chứ không ngắt bằng <br/>: ba dòng trong cùng một
              dòng chữ làm dòng cuối trồi ra ngoài hộp và đè lên đoạn văn bên dưới. */}
          <KineticTitle as="h2" className="font-display t-xl mt-6 space-y-1" stagger={120}>
            <span className="block">
              <span className="t-outline">{t.journey['gap-minh'].title}</span>{' '}
              <span aria-hidden style={{ color: 'rgb(244 241 234 / 0.35)' }}>
                →
              </span>
            </span>
            <span className="block">
              <span className="t-outline">{t.journey['gap-nhau'].title}</span>{' '}
              <span aria-hidden style={{ color: 'rgb(244 241 234 / 0.35)' }}>
                →
              </span>
            </span>
            {/* Vàng đặc, không dùng gradient cắt-theo-chữ: chữ tô gradient nằm trong khung
                chuyển động bị tính sai bề rộng rồi tụt xuống đè lên đoạn văn. */}
            <span className="block" style={{ color: 'var(--color-gold)' }}>
              {t.journey['gap-hanh-phuc'].title}
            </span>
          </KineticTitle>
          <p className="lede mx-auto mt-7" style={{ color: 'rgb(244 241 234 / 0.68)' }}>
            {t.home.final.lead}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-11 flex flex-wrap items-center justify-center gap-3">
            <L
              href="/experience"
              className="fx-b-fill fx-b-press rounded-full border px-7 py-3.5 text-[0.9rem] font-semibold"
              style={{ borderColor: 'rgb(244 241 234 / 0.28)', color: '#f4f1ea' }}
            >
              {t.common.explore}
            </L>
            <L
              href="/tickets"
              className="fx-b-press rounded-full px-7 py-3.5 text-[0.9rem] font-bold"
              style={{ background: 'var(--color-gold)', color: '#16120a' }}
            >
              {t.common.tickets}
            </L>
            <L
              href="/partners"
              className="fx-b-fill fx-b-press rounded-full border px-7 py-3.5 text-[0.9rem] font-semibold"
              style={{ borderColor: 'rgb(244 241 234 / 0.28)', color: '#f4f1ea' }}
            >
              {t.common.becomePartner}
            </L>
          </div>
          <p className="mt-8 font-display text-[1.05rem] tracking-[0.18em]" style={{ color: 'rgb(244 241 234 / 0.55)' }}>
            {t.brand.slogan.toUpperCase()}
          </p>
          <p className="mt-6 text-[0.72rem]" style={{ color: 'rgb(244 241 234 / 0.3)' }}>
            {assetStats.library} {t.home.final.imagesNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
