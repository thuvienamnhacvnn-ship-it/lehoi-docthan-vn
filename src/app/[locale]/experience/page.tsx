import type { Metadata } from 'next';
import { L } from '../../../components/system/L';
import { PageHero } from '@/components/ui/PageHero';
import { AssetImage } from '@/components/media/AssetImage';
import { VideoExperience } from '@/components/media/VideoExperience';
import { ActivityRail } from '@/components/experience/ActivityRail';
import { Reveal } from '@/components/system/Reveal';
import { SectionHeader, Tag } from '@/components/ui/Section';
import { activities, categoryLabels } from '@/data/activities';
import { dayPhases } from '@/data/zones';
import { videos } from '@/data/videos';

export const metadata: Metadata = {
  title: 'Day Festival',
  description:
    'Một ngày hội trước đêm nhạc: flashmob, Color Run, Trạm Gặp, Happy Lunch, khu thú cưng, Mega Zone, triển lãm thị giác.',
};

const storyBlocks = [
  {
    id: 'flashmob',
    title: 'Mở màn bằng một nhịp chung',
    body: 'Lễ hội bắt đầu bằng màn flashmob ở quảng trường trung tâm. Động tác đơn giản, tập trước mười lăm phút, ai cũng vào được — và tự nhiên ai cũng quen mặt nhau một chút.',
    assetId: 'kit-02-01-flashmob-kickoff-wide',
    portraitAssetId: 'kit-02-02-flashmob-dancer-closeup',
    flip: false,
  },
  {
    id: 'color-run',
    title: 'Chạy không tính giờ',
    body: 'Color Run đi qua ba trạm màu rồi về đích. Không có bảng xếp hạng, chỉ có huy hiệu đeo được và một bộ quần áo dính đầy màu.',
    assetId: 'kit-02-03-color-run-start',
    portraitAssetId: 'kit-02-04-color-run-powder-action',
    extraAssetId: 'kit-02-05-color-run-finish-badge',
    flip: true,
  },
  {
    id: 'tram-gap',
    title: 'Trạm Gặp — nơi người lạ ngồi xuống cùng nhau',
    body: 'Coffee Talk cho người thích nghe, Coffee Circles cho người muốn nói, Match & Meet cho người sẵn sàng gặp một-một. Mọi hoạt động đều có người dẫn và có quyền dừng bất cứ lúc nào.',
    assetId: 'kit-02-07-coffee-circle-group',
    portraitAssetId: 'kit-02-08-coffee-circle-icebreaker',
    flip: false,
  },
  {
    id: 'pets',
    title: 'Khu thú cưng chia theo tính cách',
    body: 'Chó nhỏ, chó lớn, mèo và chó già có khu riêng. Có buổi xã hội hoá cho chó con, có diễu hành nhỏ buổi chiều, có góc chụp ảnh.',
    assetId: 'kit-02-14-pets-small-dogs',
    portraitAssetId: 'kit-02-17-puppy-socialization',
    flip: true,
  },
  {
    id: 'match-meet',
    title: 'Match & Meet: gặp một-một, có khung giờ',
    body: 'Bàn đôi xếp trong khu kết nối, mỗi lượt vài phút rồi xoay vòng sang người mới. Có quy tắc ứng xử rõ ràng, có người dẫn, và bạn dừng lúc nào cũng được.',
    assetId: 'kit-02-10-match-meet-rotation',
    portraitAssetId: 'kit-02-09-match-meet-one-to-one',
    flip: true,
  },
  {
    id: 'music-corner',
    title: 'Góc nhạc mộc giữa ngày hội',
    body: 'Một nghệ sĩ, một cây đàn, vài chục người ngồi quanh. Phần âm nhạc nhỏ nhất của lễ hội nhưng thường là chỗ người ta nhớ lâu nhất.',
    assetId: 'kit-02-34-creative-music-corner',
    portraitAssetId: 'kit-02-33-creative-artist-working',
    flip: false,
  },
  {
    id: 'art',
    title: 'Đi qua ba lớp ánh sáng',
    body: 'Sắp đặt thị giác lớn lấy cảm hứng từ sức sống của cây sen đá. Lối đi một chiều, đi hết là hiểu hành trình của lễ hội mà không cần ai giải thích.',
    assetId: 'kit-02-29-visual-art-succulent-installation',
    portraitAssetId: 'kit-02-30-succulent-art-detail',
    flip: false,
  },
];

export default function ExperiencePage() {
  const dayActivities = activities.filter((a) => a.phase !== 'night');

  return (
    <>
      <PageHero
        kicker="Ban ngày"
        title={
          <>
            <span className="t-outline">DAY</span>{' '}
            <span style={{ color: 'var(--color-blue)' }}>FESTIVAL</span>
          </>
        }
        lead="Trước khi trời tối là cả một ngày hội. Đây là phần mà phần lớn mọi người sẽ nhớ lâu nhất — không phải vì sân khấu, mà vì những người họ gặp."
        assetId="kit-06-16-midday-festival-life"
        focal="center 38%"
        env="day"
      >
        <div className="mt-8 flex flex-wrap gap-2">
          {Object.entries(categoryLabels).map(([k, v]) => {
            const n = dayActivities.filter((a) => a.category === k).length;
            if (!n) return null;
            return <Tag key={k}>{`${v} · ${n}`}</Tag>;
          })}
        </div>
      </PageHero>

      {/* Bốn thời khắc trong ngày */}
      <section data-env-zone="day" className="section" style={{ background: 'var(--env-bg)' }}>
        <div className="wrap">
          <SectionHeader
            kicker="Nhịp của một ngày"
            title="Sáng · giữa ngày · giờ vàng · đêm"
            lead="Khu lễ hội đổi ánh sáng bốn lần trong ngày. Giao diện trang này cũng đi theo nhịp đó."
            align="split"
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {dayPhases.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <figure className="overflow-hidden rounded-[var(--radius-md)]">
                  <AssetImage id={p.assetId} sizes="third" ratio="4 / 5" className="w-full" scrim="bottom" />
                  <figcaption className="-mt-12 relative px-5 pb-5">
                    <p className="font-display text-[1.1rem] text-white">{p.label}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dải hoạt động */}
      <section data-env-zone="day" className="section pt-0" style={{ background: 'var(--env-bg)' }}>
        <div className="wrap mb-8">
          <SectionHeader
            kicker={`${dayActivities.length} hoạt động ban ngày`}
            title="Kéo ngang để khám phá"
            align="split"
          />
        </div>
        <ActivityRail phase="day" />
      </section>

      {/* Các khối kể chuyện xen kẽ */}
      <section data-env-zone="day" className="section" style={{ background: 'var(--env-bg)' }}>
        <div className="wrap space-y-24">
          {storyBlocks.map((b) => (
            <div
              key={b.id}
              className={`grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center ${b.flip ? 'lg:[&>*:first-child]:order-2' : ''}`}
            >
              <Reveal>
                <AssetImage id={b.assetId} sizes="half" className="rounded-[var(--radius-md)]" />
              </Reveal>
              <Reveal delay={90}>
                <h3 className="font-display t-lg">{b.title}</h3>
                <p className="mt-5 text-[0.95rem] leading-relaxed" style={{ color: 'var(--env-muted)' }}>
                  {b.body}
                </p>
                <div className="mt-6 flex items-end gap-3">
                  {b.portraitAssetId && (
                    <AssetImage id={b.portraitAssetId} sizes="card" ratio="3 / 4" className="w-40 rounded-[var(--radius-sm)]" />
                  )}
                  {'extraAssetId' in b && b.extraAssetId && (
                    <AssetImage id={b.extraAssetId} sizes="thumb" ratio="1 / 1" className="w-28 rounded-[var(--radius-sm)]" />
                  )}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* Video */}
      <section data-env-zone="golden" className="section">
        <div className="wrap">
          <SectionHeader kicker="Phim" title="Một ngày ở Day Festival" align="split" />
          <Reveal>
            <VideoExperience config={videos.dayFestival} className="mt-10 rounded-[var(--radius-md)]" />
          </Reveal>
          <Reveal>
            <div className="mt-10 flex flex-wrap gap-3">
              <L
                href="/program"
                className="fx-b-fill fx-b-press rounded-full border px-6 py-3 text-[0.86rem] font-semibold"
                style={{ borderColor: 'var(--env-card-line)' }}
              >
                Xem lịch trình
              </L>
              <L
                href="/map"
                className="fx-b-fill fx-b-press rounded-full border px-6 py-3 text-[0.86rem] font-semibold"
                style={{ borderColor: 'var(--env-card-line)' }}
              >
                Bản đồ lễ hội
              </L>
              <L
                href="/one-beat-night"
                className="fx-b-press rounded-full px-6 py-3 text-[0.86rem] font-bold"
                style={{ background: 'var(--color-magenta)', color: '#fff' }}
              >
                Tiếp tục tới đêm nhạc
              </L>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
