import type { Metadata } from 'next';
import { L } from '../../../components/system/L';
import { PageHero } from '@/components/ui/PageHero';
import { AssetImage } from '@/components/media/AssetImage';
import { VideoExperience } from '@/components/media/VideoExperience';
import { Reveal } from '@/components/system/Reveal';
import { SectionHeader, Tag } from '@/components/ui/Section';
import { contentFormats } from '@/data/community';
import { videos } from '@/data/videos';

export const metadata: Metadata = {
  title: 'Chuyện & nội dung',
  description: 'Hệ nội dung của lễ hội: WeMeet Podcast, nội dung do khách tạo, livestream, báo chí, OOH và phim tổng kết.',
};

const kindLabels: Record<string, string> = {
  podcast: 'Podcast',
  ugc: 'Khách tạo',
  media: 'Truyền thông',
  ooh: 'Ngoài trời',
  social: 'Mạng xã hội',
  recap: 'Tổng kết',
};

export default function NewsPage() {
  const [lead, ...rest] = contentFormats;

  return (
    <>
      <PageHero
        kicker="Nội dung"
        title="Câu chuyện chạy trước và chạy sau lễ hội"
        lead="Lễ hội không chỉ diễn ra trong một ngày. Đây là các định dạng nội dung của dự án — chưa phải bài đã đăng, vì chiến dịch chưa khởi động."
        assetId="kit-04-22-social-content-production"
        env="night"
        height="short"
      />

      <section data-env-zone="night" className="section" style={{ background: '#050507' }}>
        <div className="wrap">
          <Reveal>
            <article className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div className="grid grid-cols-[1.6fr_1fr] gap-3">
                <AssetImage id={lead.assetId} sizes="half" className="rounded-[var(--radius-md)]" />
                {lead.portraitAssetId && (
                  <AssetImage
                    id={lead.portraitAssetId}
                    sizes="third"
                    ratio="3 / 4"
                    className="h-full rounded-[var(--radius-md)]"
                  />
                )}
              </div>
              <div>
                <Tag color="var(--color-magenta)">{kindLabels[lead.kind]}</Tag>
                <h2 className="font-display t-lg mt-4" style={{ color: '#f4f1ea' }}>
                  {lead.name}
                </h2>
                <p className="lede mt-5" style={{ color: 'rgb(244 241 234 / 0.74)' }}>
                  {lead.lead}
                </p>
                <p className="mt-4 text-[0.9rem] leading-relaxed" style={{ color: 'rgb(244 241 234 / 0.58)' }}>
                  {lead.body}
                </p>
              </div>
            </article>
          </Reveal>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {rest.map((c, i) => (
              <Reveal key={c.id} delay={i * 70}>
                <article
                  className="group fx-c-lift fx-c-shine fx-c-zoom flex h-full flex-col overflow-hidden rounded-[var(--radius-md)] border"
                  style={{ borderColor: 'rgb(244 241 234 / 0.12)' }}
                >
                  <div className="relative">
                    <AssetImage id={c.assetId} sizes="third" ratio="16 / 10" className="w-full" />
                    {c.portraitAssetId && (
                      <AssetImage
                        id={c.portraitAssetId}
                        sizes="thumb"
                        ratio="3 / 4"
                        className="absolute bottom-3 right-3 w-14 rounded-[var(--radius-xs)] border border-white/25 shadow-lg"
                      />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <Tag>{kindLabels[c.kind]}</Tag>
                    <h3 className="font-display fx-t-underline mt-3 text-[1.1rem]" style={{ color: '#f4f1ea' }}>
                      {c.name}
                    </h3>
                    <p className="mt-2 text-[0.84rem]" style={{ color: 'rgb(244 241 234 / 0.66)' }}>
                      {c.lead}
                    </p>
                    <p className="mt-3 flex-1 text-[0.8rem] leading-relaxed" style={{ color: 'rgb(244 241 234 / 0.5)' }}>
                      {c.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reels */}
      <section data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap">
          <SectionHeader kicker="Định dạng dọc" title="Reels từ trong lễ hội" align="split" />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[videos.reelFlashmob, videos.reelDance, videos.reelCreator].map((v) => (
              <Reveal key={v.id}>
                <VideoExperience config={v} className="rounded-[var(--radius-md)]" sizes="third" />
                <p className="mt-3 text-[0.82rem]" style={{ color: 'rgb(244 241 234 / 0.6)' }}>
                  {v.title}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap">
          <Reveal>
            <div
              className="rounded-[var(--radius-md)] border p-7"
              style={{ borderColor: 'rgb(244 241 234 / 0.14)' }}
            >
              <p className="kicker mb-3">Chưa có bài đăng</p>
              <p className="lede" style={{ color: 'rgb(244 241 234 / 0.7)' }}>
                Lễ hội chưa khởi động chiến dịch truyền thông, nên trang này chưa có thông cáo hay bài viết nào.
                Cấu trúc đã sẵn sàng: khi nội dung thật xuất hiện, nó sẽ nằm đúng ở đây.
              </p>
              <L
                href="/press"
                className="fx-t-arrow mt-6 inline-flex text-[0.88rem] font-semibold underline underline-offset-8"
                style={{ color: '#f4f1ea' }}
              >
                Phòng báo chí <span className="fx-arrow">→</span>
              </L>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
