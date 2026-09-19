import type { Metadata } from 'next';
import { L } from '../../../components/system/L';
import { PageHero } from '@/components/ui/PageHero';
import { AssetImage } from '@/components/media/AssetImage';
import { Reveal } from '@/components/system/Reveal';
import { Pending } from '@/components/system/Pending';
import { PartnerLeadForm } from '@/components/sponsor/PartnerLeadForm';

export const metadata: Metadata = {
  title: 'Liên hệ',
  description: 'Các kênh làm việc với ban tổ chức ONE BEAT NIGHT: hợp tác thương hiệu, báo chí, khách tham dự.',
};

const channels = [
  {
    id: 'partners',
    label: 'Hợp tác thương hiệu',
    note: 'Tài trợ, hoạt động thương hiệu, tiếp khách doanh nghiệp, thương mại tại lễ hội.',
    placeholder: 'PARTNER_EMAIL' as const,
    href: '/partners',
    cta: 'Xem cơ hội hợp tác',
    assetId: 'kit-05-13-sponsor-handshake',
  },
  {
    id: 'press',
    label: 'Báo chí & truyền thông',
    note: 'Media kit, ảnh chính thức, phỏng vấn, đăng ký tác nghiệp.',
    placeholder: 'PRESS_EMAIL' as const,
    href: '/press',
    cta: 'Vào phòng báo chí',
    assetId: 'kit-04-20-journalist-camera-line',
  },
  {
    id: 'visitors',
    label: 'Khách tham dự',
    note: 'Vé, lịch trình, quy định tham dự, hỗ trợ tiếp cận.',
    placeholder: 'HOTLINE' as const,
    href: '/faq',
    cta: 'Xem hỏi đáp',
    assetId: 'kit-06-19-information-help-desk',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Liên hệ"
        title="Kênh làm việc"
        lead="Thông tin liên hệ chính thức sẽ được bổ sung khi ban tổ chức cung cấp. Biểu mẫu bên dưới đã dựng sẵn để nối vào hệ thống nhận thông tin."
        assetId="kit-06-24-event-staff-briefing"
        focal="center 30%"
        env="night"
        height="short"
      />

      <section data-env-zone="night" className="section" style={{ background: '#050507' }}>
        <div className="wrap">
          <div className="grid-3">
            {channels.map((c, i) => (
              <Reveal key={c.id} delay={i * 80}>
                <article
                  className="group fx-c-lift fx-c-shine fx-c-zoom flex h-full flex-col overflow-hidden rounded-[var(--radius-md)] border"
                  style={{ borderColor: 'rgb(244 241 234 / 0.12)' }}
                >
                  <AssetImage id={c.assetId} sizes="third" ratio="16 / 10" className="w-full" />
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-[1.15rem]" style={{ color: '#f4f1ea' }}>
                      {c.label}
                    </h2>
                    <p className="mt-2 flex-1 text-[0.85rem] leading-relaxed" style={{ color: 'rgb(244 241 234 / 0.6)' }}>
                      {c.note}
                    </p>
                    <p className="mt-5">
                      <Pending k={c.placeholder} />
                    </p>
                    <L
                      href={c.href}
                      className="fx-t-arrow mt-5 inline-flex text-[0.84rem] font-semibold underline underline-offset-8"
                      style={{ color: '#f4f1ea' }}
                    >
                      {c.cta} <span className="fx-arrow">→</span>
                    </L>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="kicker mb-4">Thông tin sự kiện</p>
              <dl className="space-y-4 text-[0.88rem]">
                <div className="flex flex-wrap items-baseline gap-x-4">
                  <dt className="kicker w-36">Thành phố</dt>
                  <dd style={{ color: 'rgb(244 241 234 / 0.8)' }}>Thành phố Hồ Chí Minh, Việt Nam</dd>
                </div>
                <div className="flex flex-wrap items-baseline gap-x-4">
                  <dt className="kicker w-36">Địa điểm</dt>
                  <dd>
                    <Pending k="VENUE" />
                  </dd>
                </div>
                <div className="flex flex-wrap items-baseline gap-x-4">
                  <dt className="kicker w-36">Địa chỉ</dt>
                  <dd>
                    <Pending k="VENUE_ADDRESS" />
                  </dd>
                </div>
                <div className="flex flex-wrap items-baseline gap-x-4">
                  <dt className="kicker w-36">Ngày tổ chức</dt>
                  <dd>
                    <Pending k="EVENT_DATE" />
                  </dd>
                </div>
                <div className="flex flex-wrap items-baseline gap-x-4">
                  <dt className="kicker w-36">Đơn vị tổ chức</dt>
                  <dd>
                    <Pending k="ORGANIZER" />
                  </dd>
                </div>
              </dl>
              <AssetImage
                id="kit-01-05-hcmc-establishing"
                sizes="half"
                ratio="16 / 9"
                className="mt-8 rounded-[var(--radius-md)]"
              />
            </div>

            <PartnerLeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
