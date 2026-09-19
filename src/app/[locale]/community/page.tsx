import type { Metadata } from 'next';
import { L } from '../../../components/system/L';
import { PageHero } from '@/components/ui/PageHero';
import { AssetImage } from '@/components/media/AssetImage';
import { Reveal } from '@/components/system/Reveal';
import { SectionHeader } from '@/components/ui/Section';
import { Pending } from '@/components/system/Pending';
import { audienceGroups, lifestyleStories } from '@/data/community';

export const metadata: Metadata = {
  title: 'Cộng đồng',
  description: 'Lễ hội này thuộc về ai: ba nhóm tuổi, tám lát cắt lối sống của người trưởng thành Việt Nam đang sống độc lập.',
};

export default function CommunityPage() {
  return (
    <>
      <PageHero
        kicker="Con người"
        title={
          <>
            Lễ hội này <span className="t-outline">thuộc về ai</span>
          </>
        }
        lead="Không phải “người chưa tìm được ai”. Là những người trưởng thành đang sống độc lập — và coi đó là một lựa chọn chứ không phải một giai đoạn chờ."
        assetId="kit-04-12-community-mixed-ages"
        focal="center 30%"
        env="day"
        height="short"
      />

      {/* Ba nhóm tuổi */}
      <section data-env-zone="day" className="section" style={{ background: 'var(--env-bg)' }}>
        <div className="wrap">
          <SectionHeader
            kicker="Ba nhóm tuổi"
            title="Cùng một thành phố, ba cách sống một mình"
            lead="Nhóm tuổi lấy từ tài liệu định vị của dự án."
            align="split"
          />

          <div className="mt-14 space-y-6">
            {audienceGroups.map((g, i) => (
              <Reveal key={g.id} delay={i * 90}>
                <article
                  className={`grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}
                >
                  <AssetImage id={g.assetId} sizes="half" ratio="4 / 3" className="rounded-[var(--radius-md)]" />
                  <div>
                    <p className="num-oversized text-[clamp(2.5rem,6vw,4.5rem)]" style={{ color: g.accent }}>
                      {g.range}
                    </p>
                    <h3 className="font-display t-lg mt-3">{g.title}</h3>
                    <p className="lede mt-4">{g.lead}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {g.traits.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border px-3.5 py-1.5 text-[0.76rem]"
                          style={{ borderColor: `${g.accent}55`, color: 'var(--env-muted)' }}
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lát cắt lối sống */}
      <section data-env-zone="day" className="section pt-0" style={{ background: 'var(--env-bg)' }}>
        <div className="wrap">
          <SectionHeader
            kicker="Lối sống"
            title="Tám lát cắt của một đời sống độc lập"
            lead="Không phải chân dung nhân khẩu học trên slide. Đây là những cảnh có thật trong một tuần bình thường của khán giả lễ hội."
            align="split"
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {lifestyleStories.map((s, i) => (
              <Reveal key={s.id} delay={i * 60}>
                <figure className="group fx-c-zoom fx-c-shine relative overflow-hidden rounded-[var(--radius-md)]">
                  <AssetImage id={s.assetId} sizes="third" ratio="4 / 5" className="w-full" scrim="bottom" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-display fx-t-lift text-[1.05rem] text-white">{s.label}</p>
                    <p className="mt-1 text-[0.76rem]" style={{ color: 'rgb(244 241 234 / 0.7)' }}>
                      {s.note}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* An toàn & tôn trọng */}
      <section data-env-zone="golden" className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <AssetImage id="kit-02-11-safe-connection-host" sizes="half" ratio="4 / 5" className="rounded-[var(--radius-md)]" />
            <AssetImage
              id="kit-01-12-connection-hands"
              sizes="half"
              ratio="16 / 9"
              className="mt-3 rounded-[var(--radius-md)]"
            />
            <p className="mt-3 text-[0.78rem]" style={{ color: 'var(--env-faint)' }}>
              Hai bàn tay đeo vòng tay LED sắp chạm nhau — hình ảnh gốc của ý niệm kết nối.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="kicker mb-4">Nguyên tắc</p>
            <h2 className="font-display t-lg">Kết nối có khuôn khổ</h2>
            <p className="lede mt-5">
              Mọi hoạt động gặp gỡ đều có người điều phối, có quy tắc ứng xử và có quyền dừng. Không ai bị đẩy vào một
              cuộc trò chuyện họ không muốn, và không ai bị bỏ lại ở góc sân.
            </p>
            <ul className="mt-7 space-y-3 text-[0.9rem]" style={{ color: 'var(--env-muted)' }}>
              <li>— Người dẫn có mặt trong suốt hoạt động ở Trạm Gặp</li>
              <li>— Quy tắc ứng xử được công bố trước và nhắc lại tại chỗ</li>
              <li>— Nhân sự hỗ trợ và điểm trợ giúp ở mọi khu</li>
              <li>— Khách tham dự tự quyết định mức độ tham gia của mình</li>
            </ul>
            <p className="mt-8 text-[0.82rem]" style={{ color: 'var(--env-faint)' }}>
              Quy mô khán giả dự kiến: <Pending k="EXPECTED_ATTENDANCE" tone="quiet" />
            </p>
            <L href="/visitor-guide" className="fx-t-arrow mt-6 inline-flex text-[0.88rem] font-semibold underline underline-offset-8">
              Cẩm nang tham dự <span className="fx-arrow">→</span>
            </L>
          </Reveal>
        </div>
      </section>
    </>
  );
}
