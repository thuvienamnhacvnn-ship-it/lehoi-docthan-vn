import type { Metadata } from 'next';
import { L } from '../../../components/system/L';
import { PageHero } from '@/components/ui/PageHero';
import { AssetImage } from '@/components/media/AssetImage';
import { Reveal } from '@/components/system/Reveal';
import { SectionHeader } from '@/components/ui/Section';
import { Pending } from '@/components/system/Pending';
import { lineup } from '@/data/lineup';

export const metadata: Metadata = {
  title: 'Nghệ sĩ & MC',
  description: 'Các vị trí biểu diễn trong kịch bản đêm nhạc One Beat Night. Danh sách nghệ sĩ sẽ công bố sau.',
};

export default function ArtistsPage() {
  return (
    <>
      <PageHero
        kicker="Line-up"
        title={
          <>
            Nghệ sĩ <span className="t-outline">&amp; MC</span>
          </>
        }
        lead="Danh sách nghệ sĩ chưa được công bố. Trang này mô tả các vị trí biểu diễn đã có trong kịch bản — khi ban tổ chức chốt tên, chỗ trống sẽ được thay bằng nghệ sĩ thật."
        assetId="kit-03-01-live-band-wide"
        focal="center 22%"
        env="night"
        height="short"
      />

      <section data-env-zone="night" className="section" style={{ background: '#050507' }}>
        <div className="wrap">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lineup.map((slot, i) => (
              <Reveal key={slot.id} delay={i * 80}>
                <article
                  className="group fx-c-lift fx-c-shine fx-c-zoom flex h-full flex-col overflow-hidden rounded-[var(--radius-md)] border"
                  style={{ borderColor: 'rgb(244 241 234 / 0.12)' }}
                >
                  <AssetImage
                    id={slot.portraitAssetId ?? slot.assetId}
                    sizes="third"
                    ratio="3 / 4"
                    className="w-full"
                    scrim="bottom"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <p className="kicker" style={{ color: 'var(--color-magenta)' }}>
                      {slot.roleEn}
                    </p>
                    <h2 className="font-display mt-2 text-[1.25rem]" style={{ color: '#f4f1ea' }}>
                      {slot.name ?? slot.role}
                    </h2>
                    <p className="mt-3 flex-1 text-[0.86rem] leading-relaxed" style={{ color: 'rgb(244 241 234 / 0.62)' }}>
                      {slot.bio ?? slot.description}
                    </p>
                    {!slot.name && (
                      <p className="mt-5">
                        <Pending k="HEADLINER" />
                      </p>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}

            {/* Ô thứ sáu cho lưới khít — nói thẳng là line-up chưa công bố */}
            <Reveal delay={lineup.length * 80}>
              <article
                className="group fx-c-zoom fx-c-corners flex h-full flex-col overflow-hidden rounded-[var(--radius-md)] border border-dashed"
                style={{ borderColor: 'rgb(245 185 66 / 0.35)' }}
              >
                <AssetImage id="kit-01-08-performer-pov" sizes="third" ratio="3 / 4" className="w-full" scrim="bottom" />
                <div className="flex flex-1 flex-col p-6">
                  <p className="kicker" style={{ color: 'var(--color-gold)' }}>
                    Còn nữa
                  </p>
                  <h2 className="font-display mt-2 text-[1.25rem]" style={{ color: '#f4f1ea' }}>
                    Các vị trí khác
                  </h2>
                  <p className="mt-3 flex-1 text-[0.86rem] leading-relaxed" style={{ color: 'rgb(244 241 234 / 0.62)' }}>
                    Kịch bản đêm nhạc còn chỗ cho khách mời và tiết mục đặc biệt. Sẽ bổ sung vào đây khi ban tổ
                    chức chốt.
                  </p>
                  <p className="mt-5">
                    <Pending k="HEADLINER" />
                  </p>
                </div>
              </article>
            </Reveal>
          </div>

          <Reveal>
            <div
              className="mt-12 rounded-[var(--radius-md)] border p-7"
              style={{ borderColor: 'rgb(245 185 66 / 0.35)', background: 'rgb(245 185 66 / 0.05)' }}
            >
              <SectionHeader
                kicker="Vì sao chưa có tên"
                title="Không đặt tên giả cho một sân khấu thật"
                lead="Trang này chỉ hiển thị những gì đã được xác nhận trong tài liệu dự án. Line-up, ngày diễn và giá vé sẽ xuất hiện đúng lúc ban tổ chức công bố, không sớm hơn."
              />
              <L
                href="/press"
                className="fx-t-arrow mt-6 inline-flex text-[0.88rem] font-semibold underline underline-offset-8"
                style={{ color: '#f4f1ea' }}
              >
                Đăng ký nhận thông tin báo chí <span className="fx-arrow">→</span>
              </L>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
