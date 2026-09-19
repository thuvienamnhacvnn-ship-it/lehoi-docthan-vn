import type { Metadata } from 'next';
import { L } from '../../../components/system/L';
import { PageHero } from '@/components/ui/PageHero';
import { AssetImage } from '@/components/media/AssetImage';
import { VideoExperience } from '@/components/media/VideoExperience';
import { LightMoment } from '@/components/night/LightMoment';
import { ActivityRail } from '@/components/experience/ActivityRail';
import { Reveal } from '@/components/system/Reveal';
import { SectionHeader } from '@/components/ui/Section';
import { Pending } from '@/components/system/Pending';
import { MediaWall } from '@/components/media/MediaWall';
import { lineup, production } from '@/data/lineup';
import { videos } from '@/data/videos';

export const metadata: Metadata = {
  title: 'One Beat Night — đêm nhạc',
  description:
    'Cao trào của lễ hội: nhạc sống, nghệ sĩ chính, ca sĩ × DJ, Match Cam, Happiness Toast và khoảnh khắc hàng nghìn vòng tay LED cùng sáng.',
};

export default function OneBeatNightPage() {
  return (
    <>
      <PageHero
        kicker="Cao trào"
        title={
          <>
            <span className="t-outline">ONE BEAT</span>{' '}
            <span style={{ color: 'var(--color-magenta)' }}>NIGHT</span>
          </>
        }
        lead="Khi trời tối, cả khu lễ hội đổi màu. Đây là phần mà mọi thứ diễn ra suốt cả ngày dồn lại thành một buổi tối."
        assetId="kit-03-04-headline-singer-wide"
        focal="center 26%"
        mobileAssetId="kit-03-05-headline-singer-portrait"
        env="night"
      >
        <dl className="mt-9 flex flex-wrap gap-x-12 gap-y-5">
          <div>
            <dt className="kicker mb-2" style={{ color: 'rgb(244 241 234 / 0.42)' }}>
              Nghệ sĩ chính
            </dt>
            <dd>
              <Pending k="HEADLINER" />
            </dd>
          </div>
          <div>
            <dt className="kicker mb-2" style={{ color: 'rgb(244 241 234 / 0.42)' }}>
              Ngày
            </dt>
            <dd>
              <Pending k="EVENT_DATE" />
            </dd>
          </div>
          <div>
            <dt className="kicker mb-2" style={{ color: 'rgb(244 241 234 / 0.42)' }}>
              Sân khấu
            </dt>
            <dd className="text-[0.88rem]" style={{ color: 'rgb(244 241 234 / 0.72)' }}>
              Sân khấu chính
            </dd>
          </div>
        </dl>
      </PageHero>

      {/* Kịch bản đêm nhạc */}
      <section data-env-zone="night" className="section" style={{ background: '#050507' }}>
        <div className="wrap">
          <SectionHeader
            kicker="Kịch bản"
            title="Đêm nhạc đi theo năm vị trí"
            lead="Danh sách nghệ sĩ chưa công bố. Cái đã chốt là cấu trúc của đêm: ai xuất hiện lúc nào và để làm gì."
            align="split"
          />

          <div className="mt-14 space-y-4">
            {lineup.map((slot, i) => (
              <Reveal key={slot.id} delay={i * 70}>
                <article
                  className="grid gap-6 rounded-[var(--radius-md)] border p-5 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:p-6"
                  style={{ borderColor: 'rgb(244 241 234 / 0.12)' }}
                >
                  <AssetImage
                    id={slot.assetId}
                    sizes="card"
                    ratio="1 / 1"
                    className="h-24 w-24 shrink-0 rounded-[var(--radius-sm)] sm:h-28 sm:w-28"
                  />
                  <div className="min-w-0">
                    <p className="kicker" style={{ color: 'var(--color-magenta)' }}>
                      {slot.roleEn}
                    </p>
                    <h3 className="font-display mt-2 text-[1.3rem]" style={{ color: '#f4f1ea' }}>
                      {slot.name ?? slot.role}
                    </h3>
                    <p className="mt-2 max-w-[62ch] text-[0.88rem] leading-relaxed" style={{ color: 'rgb(244 241 234 / 0.62)' }}>
                      {slot.bio ?? slot.description}
                    </p>
                  </div>
                  <div className="sm:text-right">
                    {slot.name ? null : <Pending k="HEADLINER" />}
                    <p className="num-oversized mt-3 text-[1.6rem]" style={{ color: 'rgb(244 241 234 / 0.18)' }}>
                      {String(slot.order).padStart(2, '0')}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <LightMoment />

      {/* Tương tác trong đêm */}
      <section data-env-zone="night" className="section pb-0" style={{ background: '#050507' }}>
        <div className="wrap">
          <SectionHeader
            kicker="Tương tác"
            title="Khán đài cũng là một phần của sân khấu"
            lead="Match Cam, Happiness Toast và các phần dẫn dắt giữa đêm — những khoảnh khắc khán giả thành nhân vật chính."
            align="split"
          />
        </div>
      </section>
      <section data-env-zone="night" className="section pt-10" style={{ background: '#050507' }}>
        <ActivityRail phase="night" />
      </section>

      {/* Sản xuất */}
      <section data-env-zone="night" className="section" style={{ background: '#050507' }}>
        <div className="wrap">
          <SectionHeader
            kicker="Hậu trường"
            title="Một đêm nhạc chạy được là nhờ những người không lên sân khấu"
            lead="Ánh sáng, âm thanh, hình ảnh, điều phối hậu trường — phần nghề nghiệp làm nên chất lượng của đêm."
            align="split"
          />
          <div className="grid-3 mt-12">
            {production.map((p, i) => (
              <Reveal key={p.id} delay={i * 70}>
                <figure className="group fx-c-zoom fx-c-shine relative overflow-hidden rounded-[var(--radius-md)]">
                  <AssetImage id={p.assetId} sizes="third" ratio="4 / 3" className="w-full" scrim="bottom" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-display fx-t-lift text-[1.05rem] text-white">{p.label}</p>
                    <p className="mt-1 text-[0.78rem]" style={{ color: 'rgb(244 241 234 / 0.66)' }}>
                      {p.note}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cảm xúc + video */}
      <section data-env-zone="night" className="section" style={{ background: '#050507' }}>
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <VideoExperience config={videos.concertTeaser} className="rounded-[var(--radius-md)]" sizes="half" />
          </Reveal>
          <Reveal delay={100}>
            <h3 className="font-display t-lg" style={{ color: '#f4f1ea' }}>
              Phần cuối của đêm không ồn ào nhất — nó lặng nhất.
            </h3>
            <p className="mt-5 text-[0.95rem] leading-relaxed" style={{ color: 'rgb(244 241 234 / 0.66)' }}>
              Sau finale, đèn hạ xuống, nhạc nhỏ lại. Cái còn lại là hàng nghìn người vừa cùng nhau trải qua một
              buổi tối — nhiều người trong số đó đến một mình.
            </p>
            <div className="mt-8">
              <MediaWall
                ids={[
                  'kit-03-21-emotional-solo-attendee',
                  'kit-03-22-music-friends-embrace',
                  'kit-03-23-concert-dance-moment',
                  'kit-03-24-performance-finale-stage-side',
                ]}
                columns={4}
              />
            </div>
          </Reveal>
        </div>

        <div className="wrap mt-16 flex flex-wrap gap-3">
          <L
            href="/tickets"
            className="fx-b-press rounded-full px-6 py-3 text-[0.86rem] font-bold"
            style={{ background: 'var(--color-gold)', color: '#16120a' }}
          >
            Xem vé
          </L>
          <L
            href="/artists"
            className="fx-b-fill fx-b-press rounded-full border px-6 py-3 text-[0.86rem] font-semibold"
            style={{ borderColor: 'rgb(244 241 234 / 0.25)', color: '#f4f1ea' }}
          >
            Các vị trí biểu diễn
          </L>
          <L
            href="/program"
            className="fx-b-fill fx-b-press rounded-full border px-6 py-3 text-[0.86rem] font-semibold"
            style={{ borderColor: 'rgb(244 241 234 / 0.25)', color: '#f4f1ea' }}
          >
            Lịch trình đêm nhạc
          </L>
        </div>
      </section>
    </>
  );
}
