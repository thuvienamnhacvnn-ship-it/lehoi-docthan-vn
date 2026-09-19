'use client';

import { L } from '../system/L';
import { AssetImage } from '@/components/media/AssetImage';
import { StageLights } from '@/components/night/StageLights';
import { HeroEmblem } from '@/components/home/HeroEmblem';
import { KineticTitle } from '@/components/system/KineticTitle';
import { Pending } from '@/components/system/Pending';
import { useI18n } from '@/i18n/I18nProvider';

/**
 * Cửa vào lễ hội. Ảnh hero desktop có 1/3 trái tối, bản mobile có 1/4 dưới tối
 * (theo manifest) — chữ đặt đúng vào vùng tối đó nên không cần phủ thêm lớp đen dày.
 */
export function Hero() {
  const { t } = useI18n();
  return (
    <section
      data-env-zone="night"
      className="relative w-full overflow-hidden"
      // Trừ đi thanh tab dưới, không thì dòng cuối của banner nằm khuất sau nó.
      style={{ background: '#050507', minHeight: 'calc(100svh - var(--app-bottom))' }}
    >
      <div className="absolute inset-0">
        {/* Ảnh hero cũ (KIT-01/03) đã có sẵn một biểu tượng do AI vẽ trên trời, đặt thêm
            logo PNG lên thành hai logo chồng nhau. Đổi sang ảnh không có biểu tượng để
            logo PNG là logo duy nhất và sắc nét. */}
        <AssetImage
          id="kit-03-20-light-wave-over-audience"
          mobileId="kit-03-23-concert-dance-moment"
          sizes="full"
          priority
          fill
          alt="Đêm nhạc ONE BEAT NIGHT: làn sóng ánh sáng từ hàng nghìn vòng tay LED chạy qua khán đài, sân khấu rực sáng phía xa"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgb(5 5 7 / 0.92) 0%, rgb(5 5 7 / 0.72) 26%, rgb(5 5 7 / 0.12) 58%, transparent 78%)',
          }}
        />
        {/* Hạ nền xuống một nấc. Ảnh hero vốn đã rất sáng, mà đèn canvas trộn kiểu 'screen'
            thì nền càng sáng càng không thấy gì. Tối nền đi là cách duy nhất để chùm đèn nổi. */}
        <div className="absolute inset-0" style={{ background: 'rgb(6 4 14 / 0.42)' }} />
        <div
          className="absolute inset-x-0 bottom-0 h-1/2 md:h-1/3"
          style={{ background: 'linear-gradient(to top, #050507 4%, transparent 100%)' }}
        />
        {/* HAI lớp tối ở đáy phải nằm TRƯỚC dàn đèn. Trước đây một lớp nằm sau nên nó
            phủ đen đúng chỗ gốc đèn — phần sáng nhất của chùm — làm hiệu ứng như mất hẳn. */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/3"
          style={{ background: 'linear-gradient(to top, #050507 6%, transparent 100%)' }}
        />
        {/* Tia sáng — ảnh nền đen, trộn screen (luật KIT-01).
            Mép trên phải tan dần, nếu không sẽ thấy một đường cắt ngang màn hình. */}
        <AssetImage
          id="kit-01-25-overlay-light-beams"
          sizes="full"
          ratio="auto"
          className="pointer-events-none opacity-40"
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '75%',
            mixBlendMode: 'screen',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 38%, black 82%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 38%, black 82%, transparent 100%)',
          }}
          alt=""
        />
        {/* Dàn đèn sàn hắt ngược từ chân sân khấu lên trời — đúng kiểu ánh sáng trong ảnh hero.
            Nằm dưới lớp chữ nên không hại tương phản. */}
        <StageLights className="mix-blend-screen" count={11} intensity={1.25} direction="up" />
        {/* Biểu tượng PNG đặt đúng chỗ biểu tượng trong ảnh, nhịp sáng-tối + ánh sao */}
        <HeroEmblem />
      </div>

      <div
        className="wrap relative flex flex-col justify-end pb-10 pt-28 md:justify-center md:pb-24"
        style={{ minHeight: 'calc(100svh - var(--app-bottom))' }}
      >
        <div className="max-w-[46rem]">
          <p className="kicker" style={{ color: 'rgb(244 241 234 / 0.72)' }}>
            {t.brand.city} · {t.brand.country}
          </p>

          <KineticTitle as="h1" className="font-display t-mega fx-t-run mt-5" stagger={110} delay={160}>
            ONE BEAT
            <br />
            <span className="gold-text">NIGHT</span>
          </KineticTitle>

          <p
            className="font-display mt-3 text-[clamp(0.95rem,2.2vw,1.5rem)] tracking-[0.3em]"
            style={{ color: 'rgb(244 241 234 / 0.78)' }}
          >
            {t.brand.subtitle}
          </p>

          <p className="lede mt-7" style={{ color: 'rgb(244 241 234 / 0.8)' }}>
            {t.home.heroLeadA}{' '}
            <strong className="font-semibold text-white">{t.home.heroStageA}</strong>,{' '}
            <strong className="font-semibold text-white">{t.home.heroStageB}</strong>,{' '}
            <strong className="font-semibold text-white">{t.home.heroStageC}</strong>.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <L
              href="/tickets"
              className="fx-b-press rounded-full px-7 py-3.5 text-[0.9rem] font-bold tracking-wide"
              style={{ background: 'var(--color-gold)', color: '#16120a' }}
            >
              {t.common.ticketsFull}
            </L>
            <L
              href="/experience"
              className="fx-b-fill fx-b-press rounded-full border px-7 py-3.5 text-[0.9rem] font-semibold"
              style={{ borderColor: 'rgb(244 241 234 / 0.28)', color: '#f4f1ea' }}
            >
              {t.common.explore}
            </L>
            <L
              href="/partners"
              className="fx-t-arrow px-2 py-3.5 text-[0.9rem] font-semibold underline underline-offset-8"
              style={{ color: 'rgb(244 241 234 / 0.7)' }}
            >
              {t.common.becomePartner}
            </L>
          </div>

          {/* Ba ô luôn nằm trên một hàng: xếp bằng flex-wrap thì ở 390px nó vỡ thành
              2 + 1, ô lẻ rơi xuống một mình nhìn như xếp nhầm. */}
          <dl className="mt-8 grid gap-y-2.5 text-[0.8rem] sm:flex sm:flex-wrap sm:items-center sm:gap-x-10 sm:gap-y-4 md:mt-11">
            <div className="flex items-center justify-between gap-4 sm:block">
              <dt className="kicker sm:mb-1.5" style={{ color: 'rgb(244 241 234 / 0.42)' }}>
                {t.common.eventDate}
              </dt>
              <dd>
                <Pending k="EVENT_DATE" />
              </dd>
            </div>
            <div className="flex items-center justify-between gap-4 sm:block">
              <dt className="kicker sm:mb-1.5" style={{ color: 'rgb(244 241 234 / 0.42)' }}>
                {t.common.venue}
              </dt>
              <dd>
                <Pending k="VENUE" />
              </dd>
            </div>
            <div className="flex items-center justify-between gap-4 sm:block">
              <dt className="kicker sm:mb-1.5" style={{ color: 'rgb(244 241 234 / 0.42)' }}>
                {t.common.lineup}
              </dt>
              <dd>
                <Pending k="HEADLINER" />
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-6 right-[var(--gutter)] hidden items-center gap-3 md:flex"
        style={{ color: 'rgb(244 241 234 / 0.45)' }}
      >
        <span className="kicker">{t.common.scrollToEnter}</span>
        <span className="block h-10 w-px" style={{ background: 'linear-gradient(to bottom, currentColor, transparent)' }} />
      </div>
    </section>
  );
}
