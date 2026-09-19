import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { AssetImage } from '@/components/media/AssetImage';
import { MediaWall } from '@/components/media/MediaWall';
import { Reveal } from '@/components/system/Reveal';
import { SectionHeader } from '@/components/ui/Section';
import { Pending } from '@/components/system/Pending';
import { brandMockups, pressDownloads } from '@/data/community';
import { assetsByKit } from '@/lib/assets';

export const metadata: Metadata = {
  title: 'Phòng báo chí',
  description: 'Media kit, bộ logo, ảnh lễ hội, thông tin tổ chức và đăng ký tác nghiệp báo chí.',
};

export default function PressPage() {
  const pressPhotos = [
    ...assetsByKit('KIT-01').slice(2, 10),
    ...assetsByKit('KIT-03').slice(0, 4),
  ].map((a) => a.id);

  return (
    <>
      <PageHero
        kicker="Báo chí"
        title={
          <>
            Phòng <span className="t-outline">báo chí</span>
          </>
        }
        lead="Tư liệu chính thức của lễ hội dành cho toà soạn, đài và người sáng tạo nội dung."
        assetId="kit-04-19-press-conference-wide"
        focal="center 30%"
        env="night"
        height="short"
      />

      {/* Tải về */}
      <section data-env-zone="night" className="section" style={{ background: '#050507' }}>
        <div className="wrap">
          <SectionHeader kicker="Tư liệu" title="Tải về" align="split" />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {pressDownloads.map((d, i) => (
              <Reveal key={d.id} delay={i * 60}>
                <li
                  className="group fx-c-lift fx-c-shine fx-c-zoom flex h-full flex-col overflow-hidden rounded-[var(--radius-md)] border"
                  style={{ borderColor: 'rgb(244 241 234 / 0.12)', opacity: d.ready ? 1 : 0.7 }}
                >
                  <AssetImage id={d.assetId} sizes="third" ratio="16 / 10" className="w-full" />
                  <div className="flex flex-1 flex-col p-5">
                    <p className="font-display text-[1.05rem]" style={{ color: '#f4f1ea' }}>
                      {d.label}
                    </p>
                    <p className="mt-1.5 flex-1 text-[0.8rem]" style={{ color: 'rgb(244 241 234 / 0.58)' }}>
                      {d.note}
                    </p>
                    <p className="mt-4">
                      {d.ready ? (
                        <span
                          className="inline-flex rounded-full border px-3.5 py-1.5 text-[0.74rem] font-semibold"
                          style={{ borderColor: 'rgb(245 185 66 / 0.5)', color: 'var(--color-gold)' }}
                        >
                          Có sẵn trong thư viện ảnh
                        </span>
                      ) : (
                        <span
                          className="inline-flex rounded-full border px-3.5 py-1.5 text-[0.74rem]"
                          style={{ borderColor: 'rgb(244 241 234 / 0.18)', color: 'rgb(244 241 234 / 0.5)' }}
                        >
                          Đang chuẩn bị
                        </span>
                      )}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}

            {/* Ô cuối cho lưới khít */}
            <Reveal delay={pressDownloads.length * 60}>
              <li
                className="group fx-c-zoom fx-c-corners flex h-full flex-col overflow-hidden rounded-[var(--radius-md)] border border-dashed"
                style={{ borderColor: 'rgb(244 241 234 / 0.2)' }}
              >
                <AssetImage id="kit-04-20-journalist-camera-line" sizes="third" ratio="16 / 10" className="w-full" />
                <div className="flex flex-1 flex-col p-5">
                  <p className="font-display text-[1.05rem]" style={{ color: '#f4f1ea' }}>
                    Cần tư liệu khác?
                  </p>
                  <p className="mt-1.5 flex-1 text-[0.8rem]" style={{ color: 'rgb(244 241 234 / 0.58)' }}>
                    Ảnh theo yêu cầu, phỏng vấn, số liệu — gửi yêu cầu qua đầu mối báo chí.
                  </p>
                  <p className="mt-4">
                    <Pending k="PRESS_EMAIL" />
                  </p>
                </div>
              </li>
            </Reveal>
          </ul>
          <p className="mt-6 text-[0.78rem]" style={{ color: 'rgb(244 241 234 / 0.45)' }}>
            Các tệp đóng gói (PDF media kit, bộ ảnh nén) sẽ được thay vào đây khi ban tổ chức duyệt bản cuối. Trang này
            không tạo liên kết tải về trỏ tới tệp chưa tồn tại.
          </p>
        </div>
      </section>

      {/* Bộ ảnh nhận diện — phần toà soạn hay xin nhất */}
      <section data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap">
          <SectionHeader
            kicker="Nhận diện"
            title={
              <>
                Bộ ảnh <span className="t-outline">dựng sẵn</span>
              </>
            }
            lead="Logo, biểu tượng, vé, vòng tay, quà lưu niệm, ứng dụng và chất liệu — ảnh gốc độ phân giải cao, không chữ đè."
            align="split"
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {brandMockups.map((m, i) => (
              <Reveal key={m.id} delay={i * 50}>
                <li
                  className="group fx-c-lift fx-c-shine fx-c-zoom h-full overflow-hidden rounded-[var(--radius-md)] border"
                  style={{ borderColor: 'rgb(244 241 234 / 0.12)' }}
                >
                  <AssetImage id={m.assetId} sizes="third" ratio="4 / 3" className="w-full" />
                  <div className="p-4">
                    <p className="font-display fx-t-underline text-[0.98rem]" style={{ color: '#f4f1ea' }}>
                      {m.label}
                    </p>
                    <p className="mt-1 text-[0.76rem] leading-snug" style={{ color: 'rgb(244 241 234 / 0.55)' }}>
                      {m.note}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Ảnh báo chí */}
      <section data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap">
          <SectionHeader
            kicker="Ảnh"
            title="Ảnh chính thức"
            lead="Bấm vào ảnh để xem cỡ lớn. Ảnh không chứa chữ, không có năm, không watermark — mọi thông tin do trang web hiển thị."
            align="split"
          />
          <div className="mt-10">
            <MediaWall ids={pressPhotos} columns={6} />
          </div>
        </div>
      </section>

      {/* Thông tin & đăng ký */}
      <section data-env-zone="night" className="section relative overflow-hidden pt-0" style={{ background: '#050507' }}>
        <AssetImage
          id="kit-01-27-bg-night-sky"
          sizes="full"
          fill
          className="opacity-25"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, #050507, rgb(5 5 7 / 0.72) 40%, #050507)' }}
        />
        <div className="wrap relative grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader kicker="Thông tin" title="Ban tổ chức" />
            <dl className="mt-8 space-y-4 text-[0.88rem]">
              <Info label="Tên sự kiện" value="ONE BEAT NIGHT — Lễ hội độc thân" />
              <Info label="Thành phố" value="Thành phố Hồ Chí Minh, Việt Nam" />
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <dt className="kicker w-40">Đơn vị tổ chức</dt>
                <dd>
                  <Pending k="ORGANIZER" />
                </dd>
              </div>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <dt className="kicker w-40">Ngày tổ chức</dt>
                <dd>
                  <Pending k="EVENT_DATE" />
                </dd>
              </div>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <dt className="kicker w-40">Địa điểm</dt>
                <dd>
                  <Pending k="VENUE" />
                </dd>
              </div>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <dt className="kicker w-40">Liên hệ báo chí</dt>
                <dd>
                  <Pending k="PRESS_EMAIL" />
                </dd>
              </div>
            </dl>
          </div>

          <div className="surface p-6 sm:p-8">
            <p className="font-display text-[1.25rem]">Đăng ký tác nghiệp</p>
            <p className="mt-2 text-[0.85rem]" style={{ color: 'var(--env-muted)' }}>
              Khu tác nghiệp báo chí sẽ mở đăng ký khi ngày sự kiện được công bố. Biểu mẫu bên dưới đã dựng sẵn cấu
              trúc; hệ thống nhận đăng ký chưa được kết nối.
            </p>
            <ul className="mt-6 space-y-2 text-[0.84rem]" style={{ color: 'var(--env-faint)' }}>
              <li>— Toà soạn / kênh</li>
              <li>— Họ tên phóng viên, vị trí</li>
              <li>— Loại hình tác nghiệp: ảnh, video, viết, livestream</li>
              <li>— Thiết bị mang theo</li>
            </ul>
            <p
              className="mt-7 inline-flex rounded-full border px-4 py-2 text-[0.76rem] font-semibold"
              style={{ borderColor: 'rgb(245 185 66 / 0.45)', color: 'var(--color-gold)' }}
            >
              Mở đăng ký sau khi công bố ngày sự kiện
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
      <dt className="kicker w-40">{label}</dt>
      <dd style={{ color: 'rgb(244 241 234 / 0.8)' }}>{value}</dd>
    </div>
  );
}
