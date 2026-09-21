'use client';

import { L } from '../system/L';
import { AssetImage } from '@/components/media/AssetImage';
import { StageLights } from '@/components/night/StageLights';
import { HeroEmblem } from '@/components/home/HeroEmblem';
import { KineticTitle } from '@/components/system/KineticTitle';
import { Pending } from '@/components/system/Pending';
import { useI18n } from '@/i18n/I18nProvider';

/**
 * Cửa vào lễ hội.
 *
 * HAI BỐ CỤC KHÁC HẲN NHAU, không phải một bố cục co giãn:
 *
 *  - Điện thoại: một khung hình 9:16 trọn vẹn. Cao ít nhất bằng cả màn hình nên không
 *    bao giờ lộ mép khối tiếp theo, và ít nhất bằng 9:16 nên máy màn ngắn vẫn giữ đúng
 *    khuôn hình đứng. Biểu tượng, chữ và nút xếp thành một cột căn giữa.
 *  - Từ md trở lên: ảnh rộng, chữ dồn về trái trong vùng tối, biểu tượng lệch sang phải.
 *
 * Ảnh cũng khác nhau: bản ngang lấy làn sóng ánh sáng trên khán đài; bản đứng lấy cổng
 * vào lễ hội về đêm — cắt dọc ở giữa ra đúng một trục trời → vòm cổng → dòng người → mặt
 * sân ướt, tức là thấy được KHÔNG GIAN sự kiện. Ảnh chụp từ trên cao xuống thì đẹp trên
 * màn rộng nhưng ở bề ngang 390px chỉ còn là một vệt sáng, không đọc ra cảnh gì.
 */
export function Hero() {
  const { t } = useI18n();

  /**
   * Chiều cao khung, phải giống hệt nhau ở khung ngoài và khung chữ nên viết chung một chỗ.
   *
   * Điện thoại: max() lấy cái nào lớn hơn giữa trọn màn hình (để không lộ mép khối sau)
   * và đúng 9:16. Máy màn dài thì vế đầu thắng, máy màn ngắn thì vế sau.
   *
   * Từ md trở lên CHỈ lấy trọn màn hình: 177.78vw trên màn 1440px là 2560px, để nguyên
   * thì banner cao gần gấp ba màn hình.
   *
   * Viết nguyên văn chứ không ghép chuỗi: Tailwind quét mã nguồn bằng chữ, class dựng lúc
   * chạy sẽ không được sinh ra.
   */
  const frameHeight =
    'min-h-[max(calc(100svh-var(--app-bottom)),177.78vw)] md:min-h-[calc(100svh-var(--app-bottom))]';

  return (
    <section
      data-env-zone="night"
      className={`relative w-full overflow-hidden ${frameHeight}`}
      style={{ background: '#050507' }}
    >
      <div className="absolute inset-0">
        <AssetImage
          id="kit-03-20-light-wave-over-audience"
          mobileId="kit-01-16-entrance-gate"
          // Khung đứng: cover phải phóng ảnh ngang lên gần gấp bốn bề ngang màn hình mới
          // phủ kín chiều cao. Khai 100vw thì trình duyệt lấy bản 480px rồi kéo lên ~1430px,
          // nhìn nhoè hẳn. Khai 200vw để nó chọn bản 960/1600.
          sizes="(max-width: 720px) 200vw, 100vw"
          priority
          fill
          alt={t.ui.misc.heroAlt}
        />

        {/* ---- Lớp tối: điện thoại và desktop cần hai kiểu khác hẳn nhau ---- */}

        {/* Desktop: đổ bóng từ trái sang, chữ nằm trong vùng tối bên trái.
            Ở 390px cái dốc ngang này phủ kín màn hình nên chỉ bật từ md trở lên. */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              'linear-gradient(105deg, rgb(5 5 7 / 0.92) 0%, rgb(5 5 7 / 0.72) 26%, rgb(5 5 7 / 0.12) 58%, transparent 78%)',
          }}
        />

        {/* Điện thoại: chữ nằm GIỮA khung, nên KHÔNG làm tối đều — làm tối đều thì cảnh
            biến thành một mảng sương tím, mất đúng cái không gian vừa chọn ảnh để khoe.
            Cách làm: chỉ tối một dải ngang ở giữa đủ đỡ chữ, chừa sáng phần trên và phần
            dưới để còn thấy vòm cổng và dòng người. */}
        <div className="absolute inset-0 md:hidden" style={{ background: 'rgb(5 5 7 / 0.26)' }} />
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              'linear-gradient(to bottom, transparent 0%, rgb(5 5 7 / 0.2) 14%, rgb(5 5 7 / 0.66) 30%, rgb(5 5 7 / 0.7) 60%, rgb(5 5 7 / 0.24) 78%, transparent 90%)',
          }}
        />
        {/* Tối nhẹ hai mép trái phải cho chữ không chạm vào chỗ ảnh sáng nhất. */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              'radial-gradient(ellipse 74% 120% at 50% 50%, transparent 40%, rgb(5 5 7 / 0.42) 100%)',
          }}
        />

        {/* Hạ nền thêm một nấc: đèn canvas trộn kiểu screen, nền càng sáng thì càng không
            thấy đèn. Trên điện thoại hạ ít thôi, vì ở đây ảnh mới là thứ phải thấy rõ. */}
        <div className="absolute inset-0 hidden md:block" style={{ background: 'rgb(6 4 14 / 0.3)' }} />
        <div className="absolute inset-0 md:hidden" style={{ background: 'rgb(6 4 14 / 0.14)' }} />
        <div
          className="absolute inset-x-0 bottom-0 h-1/4 md:h-1/3"
          style={{ background: 'linear-gradient(to top, #050507 4%, transparent 100%)' }}
        />
        {/* HAI lớp tối ở đáy phải nằm TRƯỚC dàn đèn, không thì chúng phủ đen đúng chỗ gốc
            đèn — phần sáng nhất của chùm — làm hiệu ứng như mất hẳn. */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/5 md:h-1/3"
          style={{ background: 'linear-gradient(to top, #050507 6%, transparent 100%)' }}
        />

        {/* Tia sáng — ảnh nền đen, trộn screen (luật KIT-01).
            Mép trên phải tan dần, nếu không sẽ thấy một đường cắt ngang màn hình.
            Trên điện thoại hạ đậm độ xuống: khung hẹp nên cùng một lớp tia sẽ phủ kín
            ảnh nền, làm mất luôn cảnh vừa chọn. */}
        <AssetImage
          id="kit-01-25-overlay-light-beams"
          sizes="full"
          ratio="auto"
          className="pointer-events-none opacity-[0.2] md:opacity-40"
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

        {/* Dàn đèn sàn hắt ngược từ chân sân khấu lên trời. Nằm dưới lớp chữ nên không hại tương phản. */}
        <StageLights className="mix-blend-screen" count={11} intensity={1.25} direction="up" />

        {/* Biểu tượng của bản desktop: thả nổi, lệch sang phải. Bản điện thoại nằm trong
            luồng chữ bên dưới để cả cột căn giữa được. */}
        <HeroEmblem variant="floating" />
      </div>

      <div
        className={
          // Lề trên vừa đủ tránh thanh điều hướng cố định, không hơn: trên máy màn ngắn
          // mỗi chục pixel thừa là một chục pixel đẩy nút xuống dưới thanh tab.
          'wrap relative flex flex-col items-center justify-center pb-6 pt-[4.5rem] text-center ' +
          `md:items-start md:pb-24 md:pt-28 md:text-left ${frameHeight}`
        }
      >
        <div className="flex max-w-[46rem] flex-col items-center md:items-start">
          {/* Biểu tượng của bản điện thoại — đứng đầu cột, căn giữa cùng mọi thứ khác */}
          <HeroEmblem variant="inline" />

          <p className="kicker mt-4 md:mt-0" style={{ color: 'rgb(244 241 234 / 0.72)' }}>
            {t.brand.city} · {t.brand.country}
          </p>

          <KineticTitle as="h1" className="font-display t-mega fx-t-run mt-3 md:mt-5" stagger={110} delay={160}>
            ONE BEAT
            <br />
            <span className="gold-text">NIGHT</span>
          </KineticTitle>

          <p
            className="font-display mt-2.5 text-[clamp(0.95rem,2.2vw,1.5rem)] tracking-[0.3em] md:mt-3"
            style={{ color: 'rgb(244 241 234 / 0.78)' }}
          >
            {t.brand.subtitle}
          </p>

          <p className="lede mt-4 md:mt-7" style={{ color: 'rgb(244 241 234 / 0.8)' }}>
            {t.home.heroLeadA}{' '}
            <strong className="font-semibold text-white">{t.home.heroStageA}</strong>,{' '}
            <strong className="font-semibold text-white">{t.home.heroStageB}</strong>,{' '}
            <strong className="font-semibold text-white">{t.home.heroStageC}</strong>.
          </p>

          {/* Hai nút chính chia đều hàng: cùng hàng thì bằng nhau, ngôn ngữ nào chữ dài
              phải xuống dòng thì mỗi nút trọn một hàng — không còn cảnh hai nút lệch bề
              ngang xếp chồng lên nhau. Desktop giữ nguyên bề ngang theo chữ. */}
          <div className="mt-5 flex flex-wrap items-stretch justify-center gap-3 md:mt-9 md:items-center md:justify-start">
            <L
              href="/tickets"
              className="fx-b-press inline-flex grow basis-[9.5rem] items-center justify-center rounded-full px-4 py-3.5 text-center text-[0.9rem] font-bold md:px-7 tracking-wide md:grow-0 md:basis-auto"
              style={{ background: 'var(--color-gold)', color: '#16120a' }}
            >
              {t.common.ticketsFull}
            </L>
            <L
              href="/experience"
              className="fx-b-fill fx-b-press inline-flex grow basis-[9.5rem] items-center justify-center rounded-full border px-4 py-3.5 text-center text-[0.9rem] font-semibold md:px-7 md:grow-0 md:basis-auto"
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

          {/* Ba ô thông tin. Điện thoại: mỗi ô một dòng "nhãn · giá trị" căn giữa — xếp
              thành hai cột kiểu bảng thì lệch hẳn so với phần còn lại đang căn giữa. */}
          <dl className="mt-4 flex flex-col items-center gap-1.5 text-[0.8rem] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-10 sm:gap-y-4 md:mt-10 md:items-start">
            <div className="flex items-center gap-2.5 sm:block">
              <dt className="kicker sm:mb-1.5" style={{ color: 'rgb(244 241 234 / 0.42)' }}>
                {t.common.eventDate}
              </dt>
              <dd>
                <Pending k="EVENT_DATE" />
              </dd>
            </div>
            <div className="flex items-center gap-2.5 sm:block">
              <dt className="kicker sm:mb-1.5" style={{ color: 'rgb(244 241 234 / 0.42)' }}>
                {t.common.venue}
              </dt>
              <dd>
                <Pending k="VENUE" />
              </dd>
            </div>
            <div className="flex items-center gap-2.5 sm:block">
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
