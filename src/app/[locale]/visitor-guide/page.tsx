import type { Metadata } from 'next';
import { L } from '../../../components/system/L';
import { PageHero } from '@/components/ui/PageHero';
import { AssetImage } from '@/components/media/AssetImage';
import { Reveal } from '@/components/system/Reveal';
import { SectionHeader } from '@/components/ui/Section';
import { Pending } from '@/components/system/Pending';
import { operations } from '@/data/community';

export const metadata: Metadata = {
  title: 'Cẩm nang tham dự',
  description: 'Chuẩn bị gì, đi lại thế nào, quy định thú cưng, hỗ trợ tiếp cận và an toàn tại ONE BEAT NIGHT.',
};

const guideSections = [
  {
    id: 'before',
    title: 'Trước khi đi',
    items: [
      'Vé điện tử nằm trong ví vé của webapp — không cần in ra giấy.',
      'Lưu trước “Lịch của tôi” để biết mình muốn đi đâu, nhất là các hoạt động cần đăng ký.',
      'Mặc đồ thoải mái: phần lớn hoạt động ban ngày diễn ra ngoài trời.',
      'Ngày, giờ mở cổng và địa điểm cụ thể sẽ được cập nhật ngay trên trang này khi công bố.',
    ],
    assetId: 'kit-01-19-ticket',
  },
  {
    id: 'arrive',
    title: 'Tới nơi và vào cổng',
    items: [
      'Quét mã QR trên vé tại cổng để check-in.',
      'Nhận vòng tay LED tại cổng — vòng này dùng cho phần ánh sáng đồng bộ trong đêm nhạc.',
      'Khách VIP và khách mời của đối tác có lối vào riêng.',
      'Quầy thông tin đặt ngay sau cổng, có nhân sự hỗ trợ.',
    ],
    assetId: 'kit-01-16-entrance-gate',
  },
  {
    id: 'pets',
    title: 'Mang thú cưng',
    items: [
      'Khu thú cưng chia theo kích cỡ và tính cách: chó nhỏ, chó lớn, mèo, chó lớn tuổi.',
      'Chủ nuôi chịu trách nhiệm trông giữ vật nuôi của mình trong suốt thời gian tham dự.',
      'Có nước cho thú cưng, khu bóng mát và góc chụp ảnh.',
      'Quy định cụ thể về giấy tiêm phòng và giống loài sẽ được công bố cùng thông tin sự kiện.',
    ],
    assetId: 'kit-02-15-pets-large-dogs',
  },
  {
    id: 'access',
    title: 'Tiếp cận',
    items: [
      'Lối đi chính không bậc, đủ rộng cho xe lăn và xe đẩy.',
      'Khu xem đêm nhạc có vị trí dành cho khách cần hỗ trợ.',
      'Nhân sự hỗ trợ có mặt tại mọi khu, dễ nhận ra bằng đồng phục.',
      'Điểm sơ cứu và khu nghỉ yên tĩnh mở suốt thời gian sự kiện.',
    ],
    assetId: 'kit-06-22-accessible-event-pathway',
  },
  {
    id: 'respect',
    title: 'Ứng xử và an toàn',
    items: [
      'Mọi hoạt động kết nối đều có người điều phối và quy tắc ứng xử rõ ràng.',
      'Bạn có quyền rời khỏi bất kỳ hoạt động nào vào bất kỳ lúc nào, không cần giải thích.',
      'Nếu thấy không thoải mái, báo ngay nhân sự tại khu — họ được hướng dẫn xử lý tình huống này.',
      'Không chụp hoặc quay người khác khi họ chưa đồng ý.',
    ],
    assetId: 'kit-06-20-safety-staff-support',
  },
];

export default function VisitorGuidePage() {
  return (
    <>
      <PageHero
        kicker="Chuẩn bị"
        title="Cẩm nang tham dự"
        lead="Mọi thứ cần biết trước khi tới: vào cổng, đi lại trong khu lễ hội, mang thú cưng, hỗ trợ tiếp cận và nguyên tắc ứng xử."
        assetId="kit-06-19-information-help-desk"
        focal="center 32%"
        env="day"
        height="short"
      >
        <p className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-[0.84rem]" style={{ color: 'var(--env-muted)' }}>
          <span>
            Ngày: <Pending k="EVENT_DATE" />
          </span>
          <span>
            Mở cổng: <Pending k="EVENT_TIME" />
          </span>
          <span>
            Địa điểm: <Pending k="VENUE" />
          </span>
        </p>
      </PageHero>

      <section data-env-zone="day" className="section" style={{ background: 'var(--env-bg)' }}>
        <div className="wrap space-y-16">
          {guideSections.map((s, i) => (
            <Reveal key={s.id} delay={i * 60}>
              <article className={`grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <AssetImage id={s.assetId} sizes="half" ratio="4 / 3" className="rounded-[var(--radius-md)]" />
                <div>
                  <h2 className="font-display t-lg">{s.title}</h2>
                  <ul className="mt-6 space-y-3">
                    {s.items.map((it) => (
                      <li key={it} className="flex gap-3 text-[0.9rem] leading-relaxed" style={{ color: 'var(--env-muted)' }}>
                        <span aria-hidden style={{ color: 'var(--env-accent)' }}>
                          —
                        </span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section data-env-zone="golden" className="section">
        <div className="wrap">
          <SectionHeader kicker="Dịch vụ tại chỗ" title="Ai giúp bạn khi cần" align="split" />
          <div className="grid-3 mt-12">
            {operations.slice(0, 3).map((o, i) => (
              <Reveal key={o.id} delay={i * 70}>
                <figure className="group fx-c-zoom fx-c-shine relative overflow-hidden rounded-[var(--radius-md)]">
                  <AssetImage id={o.assetId} sizes="third" ratio="4 / 3" className="w-full" scrim="bottom" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-display fx-t-lift text-[1.05rem] text-white">{o.label}</p>
                    <p className="mt-1 text-[0.78rem]" style={{ color: 'rgb(244 241 234 / 0.7)' }}>
                      {o.note}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 flex flex-wrap gap-3">
              <L href="/map" className="fx-b-fill fx-b-press rounded-full border px-6 py-3 text-[0.86rem] font-semibold" style={{ borderColor: 'var(--env-card-line)' }}>
                Bản đồ lễ hội
              </L>
              <L href="/program" className="fx-b-fill fx-b-press rounded-full border px-6 py-3 text-[0.86rem] font-semibold" style={{ borderColor: 'var(--env-card-line)' }}>
                Lịch trình
              </L>
              <L href="/faq" className="fx-b-fill fx-b-press rounded-full border px-6 py-3 text-[0.86rem] font-semibold" style={{ borderColor: 'var(--env-card-line)' }}>
                Hỏi đáp
              </L>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
