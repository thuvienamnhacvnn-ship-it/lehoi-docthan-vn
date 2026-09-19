import type { Metadata } from 'next';
import { L } from '../../../components/system/L';
import { PageHero } from '@/components/ui/PageHero';
import { AssetImage } from '@/components/media/AssetImage';
import { VideoExperience } from '@/components/media/VideoExperience';
import { Reveal } from '@/components/system/Reveal';
import { SectionHeader, Tag } from '@/components/ui/Section';
import { Pending } from '@/components/system/Pending';
import { PartnerNav } from '@/components/sponsor/PartnerNav';
import { OpportunityExplorer } from '@/components/sponsor/OpportunityExplorer';
import { ImpactEngine } from '@/components/sponsor/ImpactEngine';
import { PartnerLeadForm } from '@/components/sponsor/PartnerLeadForm';
import { Spotlight } from '@/components/ui/Spotlight';
import { opportunities, opportunityCategories, partnerCategories } from '@/data/sponsor';
import { audienceGroups, contentFormats } from '@/data/community';
import { zones } from '@/data/zones';
import { videos } from '@/data/videos';

export const metadata: Metadata = {
  title: 'Nhà tài trợ & đối tác',
  description:
    'ONE BEAT NIGHT không phải kho quảng cáo — đây là hệ sinh thái mà một thương hiệu có thể bước vào: trải nghiệm, thương mại, dữ liệu, tiếp khách, nội dung và cộng đồng.',
};

const whyPoints = [
  { id: 'movement', label: 'Một phong trào văn hoá', note: 'Định vị rõ: tự do, yêu mình, cộng đồng — không phải sự kiện hẹn hò' },
  { id: 'community', label: 'Một cộng đồng', note: 'Người trưởng thành Việt Nam đang sống độc lập, ba nhóm tuổi' },
  { id: 'day', label: 'Một ngày hội ban ngày', note: 'Hoạt động trải dài từ sáng tới giờ vàng' },
  { id: 'music', label: 'Một đêm nhạc', note: 'Sân khấu lớn, dàn đèn và âm thanh chuyên nghiệp' },
  { id: 'media', label: 'Một nền tảng truyền thông', note: 'Podcast, UGC, livestream, báo chí, OOH, phim tổng kết' },
  { id: 'commerce', label: 'Một nền tảng thương mại', note: 'Mega Zone, MegaSale, O2O, thanh toán' },
  { id: 'activation', label: 'Một môi trường kích hoạt thương hiệu', note: 'Khu trải nghiệm đặt trong hành trình của khách' },
  { id: 'data', label: 'Một hệ dữ liệu và tương tác', note: 'Đăng ký có opt-in, đo lường theo từng bước' },
  { id: 'ip', label: 'Một tài sản dài hạn', note: 'Kiến trúc dựng cho nhiều mùa, không phải một lần' },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        kicker="Đối tác"
        title={
          <>
            Không phải kho quảng cáo.
            <br />
            <span className="gold-text">Một hệ sinh thái.</span>
          </>
        }
        lead="Thương hiệu không mua một vị trí treo logo. Thương hiệu chọn một vai trò trong hành trình của hàng nghìn người trong một ngày."
        assetId="kit-05-01-sponsor-central-booth"
        env="night"
      >
        <p className="mt-8 flex flex-wrap items-center gap-3 text-[0.84rem]" style={{ color: 'rgb(244 241 234 / 0.6)' }}>
          <span>Liên hệ hợp tác:</span>
          <Pending k="PARTNER_EMAIL" />
        </p>
      </PageHero>

      <PartnerNav />

      {/* WHY */}
      <section id="why" data-env-zone="night" className="section" style={{ background: '#050507' }}>
        <div className="wrap">
          <SectionHeader
            kicker="01 — Vì sao ONE BEAT NIGHT"
            title="Chín lớp giá trị trong cùng một sự kiện"
            lead="Mỗi lớp là một cách khác nhau để một thương hiệu tham gia. Hiếm sự kiện nào có đủ cả chín."
            align="split"
          />
          <ol className="grid-3 mt-12">
            {whyPoints.map((p, i) => (
              <Reveal key={p.id} delay={i * 50}>
                <Spotlight
                  as="li"
                  className="group fx-c-lift fx-c-corners h-full rounded-[var(--radius-md)] border border-white/12 p-6"
                >
                  <p className="num-oversized fx-i-beat text-[1.6rem]" style={{ color: 'rgb(244 241 234 / 0.2)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <p className="font-display fx-t-gold-rise mt-2 text-[1.08rem]" style={{ color: '#f4f1ea' }}>
                    {p.label}
                  </p>
                  <p className="mt-2 text-[0.82rem] leading-relaxed" style={{ color: 'rgb(244 241 234 / 0.58)' }}>
                    {p.note}
                  </p>
                </Spotlight>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* AUDIENCE */}
      <section id="audience" data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap">
          <SectionHeader
            kicker="02 — Khán giả"
            title="Ai sẽ đứng trước gian hàng của bạn"
            lead="Ba nhóm tuổi đã được xác định trong tài liệu định vị. Quy mô cụ thể chưa công bố — và trang này không đoán thay ban tổ chức."
            align="split"
          />
          <div className="grid-3 mt-12">
            {audienceGroups.map((g, i) => (
              <Reveal key={g.id} delay={i * 80}>
                <article className="group fx-c-lift fx-c-zoom overflow-hidden rounded-[var(--radius-md)] border" style={{ borderColor: 'rgb(244 241 234 / 0.12)' }}>
                  <AssetImage id={g.assetId} sizes="third" ratio="4 / 3" className="w-full" />
                  <div className="p-5">
                    <p className="num-oversized text-[1.8rem]" style={{ color: g.accent }}>
                      {g.range}
                    </p>
                    <p className="font-display mt-2 text-[1.05rem]" style={{ color: '#f4f1ea' }}>
                      {g.title}
                    </p>
                    <p className="mt-2 text-[0.82rem]" style={{ color: 'rgb(244 241 234 / 0.58)' }}>
                      {g.lead}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-[0.84rem]" style={{ color: 'rgb(244 241 234 / 0.5)' }}>
            Quy mô dự kiến: <Pending k="EXPECTED_ATTENDANCE" /> · Độ phủ truyền thông: <Pending k="MEDIA_REACH" />
          </p>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section id="ecosystem" data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap">
          <SectionHeader
            kicker="03 — Hệ sinh thái lễ hội"
            title="Mười khu vực, mỗi khu một kiểu tiếp cận khán giả"
            align="split"
          />
          <Reveal>
            <AssetImage
              id="kit-05-24-partner-ecosystem-collage-scene"
              sizes="full"
              ratio="21 / 9"
              className="mt-10 rounded-[var(--radius-md)]"
              scrim="soft"
            />
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {zones.map((z, i) => (
              <Reveal key={z.id} delay={i * 40}>
                <div className="group fx-c-zoom fx-c-corners relative overflow-hidden rounded-[var(--radius-sm)]">
                  <AssetImage id={z.aerialAssetId} sizes="thumb" ratio="4 / 3" className="w-full" scrim="bottom" />
                  <p className="absolute inset-x-0 bottom-0 p-3 text-[0.78rem] font-semibold text-white">{z.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <L href="/map" className="fx-t-arrow mt-6 inline-flex text-[0.86rem] font-semibold underline underline-offset-8" style={{ color: '#f4f1ea' }}>
            Mở bản đồ tương tác <span className="fx-arrow">→</span>
          </L>
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section id="opportunities" data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap">
          <SectionHeader
            kicker="04 — Cơ hội thương hiệu"
            title={`${opportunities.length} hình thức tham gia`}
            lead="Chọn một hình thức để xem thương hiệu làm gì ở từng bước: kích hoạt, giữ chân, chuyển đổi và đo lường."
            align="split"
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Reveal>
              <AssetImage
                id="kit-05-02-sponsor-booth-interaction"
                sizes="half"
                ratio="16 / 9"
                className="rounded-[var(--radius-md)]"
                scrim="soft"
              />
            </Reveal>
            <Reveal delay={80}>
              <AssetImage
                id="kit-05-05-sampling-happy-customer"
                sizes="half"
                ratio="16 / 9"
                className="rounded-[var(--radius-md)]"
                scrim="soft"
              />
            </Reveal>
          </div>
          <div className="mt-12">
            <OpportunityExplorer />
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section id="formats" data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap">
          <SectionHeader kicker="05 — Định dạng hoạt động" title="Tám nhóm giá trị" align="split" />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(opportunityCategories).map(([key, c], i) => {
              const items = opportunities.filter((o) => o.category === key);
              return (
                <Reveal key={key} delay={i * 50}>
                  <div className="h-full rounded-[var(--radius-md)] border p-5" style={{ borderColor: `${c.color}44` }}>
                    <p className="kicker" style={{ color: c.color }}>
                      {c.en}
                    </p>
                    <p className="font-display mt-2 text-[1.05rem]" style={{ color: '#f4f1ea' }}>
                      {c.label}
                    </p>
                    <ul className="mt-3 space-y-1">
                      {items.map((o) => (
                        <li key={o.id} className="text-[0.78rem]" style={{ color: 'rgb(244 241 234 / 0.55)' }}>
                          — {o.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* MEDIA */}
      <section id="media" data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeader
              kicker="06 — Hệ truyền thông"
              title="Thương hiệu xuất hiện trong nội dung, không chỉ trong quảng cáo"
              lead="Tám định dạng nội dung chạy trước, trong và sau lễ hội — mỗi định dạng là một chỗ thương hiệu có thể tham gia."
            />
            <ul className="mt-8 grid gap-2 sm:grid-cols-2">
              {contentFormats.map((c) => (
                <li key={c.id} className="flex items-start gap-2.5 text-[0.84rem]" style={{ color: 'rgb(244 241 234 / 0.65)' }}>
                  <span aria-hidden style={{ color: 'var(--color-magenta)' }}>
                    —
                  </span>
                  <span>
                    <strong className="font-semibold" style={{ color: '#f4f1ea' }}>
                      {c.name}
                    </strong>
                    <span className="block text-[0.78rem]" style={{ color: 'rgb(244 241 234 / 0.5)' }}>
                      {c.lead}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Reveal>
            <VideoExperience config={videos.sponsorFilm} className="rounded-[var(--radius-md)]" sizes="half" />
          </Reveal>
        </div>
      </section>

      {/* COMMERCIAL */}
      <section id="commercial" data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap">
          <SectionHeader
            kicker="07 — Cơ hội thương mại"
            title="Từ trải nghiệm tới giao dịch"
            lead="Mega Zone, MegaSale, Happiness Deals, quầy nhận hàng O2O và thanh toán tại chỗ — chuỗi liên tục từ lúc khách chú ý tới lúc khách trả tiền."
            align="split"
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {['sampling', 'qr-voucher', 'megasale', 'o2o', 'lead-gen', 'product-launch'].map((id, i) => {
              const o = opportunities.find((x) => x.id === id)!;
              return (
                <Reveal key={id} delay={i * 60}>
                  <article className="group fx-c-zoom fx-c-scan fx-c-corners relative h-full overflow-hidden rounded-[var(--radius-md)]">
                    <AssetImage id={o.assetId} sizes="third" ratio="4 / 5" className="w-full" scrim="bottom" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="font-display fx-t-lift text-[1.02rem] text-white">{o.name}</p>
                      <p className="mt-1.5 text-[0.78rem]" style={{ color: 'rgb(244 241 234 / 0.68)' }}>
                        {o.lead}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOSPITALITY */}
      <section id="hospitality" data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <AssetImage id="kit-05-14-sponsor-executive-hosting" sizes="half" className="rounded-[var(--radius-md)]" />
            <AssetImage
              id="kit-05-12-sponsor-business-networking"
              sizes="half"
              ratio="16 / 9"
              className="mt-3 rounded-[var(--radius-md)]"
            />
          </Reveal>
          <Reveal delay={90}>
            <SectionHeader
              kicker="08 — VIP & tiếp khách"
              title="Mời đối tác của bạn tới một buổi tối đáng nhớ"
              lead="Khu tiếp khách riêng, phục vụ tại bàn, tầm nhìn sân khấu, hỗ trợ đón tiếp. Quan hệ đối tác diễn ra dễ hơn ở đây so với một phòng họp."
            />
            <ul className="mt-6 flex flex-wrap gap-2">
              {['Lối vào riêng', 'Khu ngồi riêng', 'Phục vụ tại bàn', 'Hỗ trợ điều phối khách mời'].map((s) => (
                <li key={s}>
                  <Tag>{s}</Tag>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CSR */}
      <section id="csr" data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeader
              kicker="09 — CSR / ESG"
              title="Happiness Fund"
              lead="Phần đóng góp cộng đồng của lễ hội có sự tham gia trực tiếp của khách tham dự — để câu chuyện sau sự kiện dựa trên việc đã làm, không phải một tấm séc chụp ảnh."
            />
          </Reveal>
          <Reveal delay={90}>
            <AssetImage id="kit-05-22-csr-happiness-fund" sizes="half" className="rounded-[var(--radius-md)]" />
          </Reveal>
        </div>
      </section>

      {/* MEASUREMENT */}
      <section id="measurement" data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap">
          <SectionHeader
            kicker="10 — Đo lường"
            title="Đo được thì mới nói được"
            lead="Mười một module đo lường đã dựng sẵn. Tất cả đang để trống vì lễ hội chưa có số liệu kiểm chứng — và sẽ không có con số nào được điền vào đây trước khi nó có thật."
            align="split"
          />
          <Reveal>
            <AssetImage
              id="kit-05-23-sponsor-measurement-team"
              sizes="full"
              ratio="21 / 9"
              className="mt-10 rounded-[var(--radius-md)]"
              scrim="soft"
            />
            <p className="mt-3 text-[0.78rem]" style={{ color: 'rgb(244 241 234 / 0.45)' }}>
              Đội phân tích theo dõi số liệu vận hành ngay trong sự kiện — nơi dữ liệu thật sẽ về.
            </p>
          </Reveal>
          <div className="mt-12">
            <ImpactEngine />
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap">
          <SectionHeader
            kicker="11 — Hình thức hợp tác"
            title="Chưa có bảng giá"
            lead="Ban tổ chức chưa công bố gói tài trợ hay mức đầu tư nào. Trang này mô tả các vai trò có thể tham gia; đề xuất cụ thể được dựng theo từng thương hiệu."
            align="split"
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {partnerCategories.map((p, i) => (
              <Reveal key={p.id} delay={i * 50}>
                <div className="group fx-c-zoom fx-c-corners relative overflow-hidden rounded-[var(--radius-sm)]">
                  <AssetImage id={p.assetId} sizes="thumb" ratio="4 / 3" className="w-full" scrim="bottom" />
                  <p className="absolute inset-x-0 bottom-0 p-3 text-[0.8rem] font-semibold text-white">{p.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div>
            <SectionHeader
              kicker="12 — Liên hệ"
              title="ONE BEAT NIGHT KHÔNG PHẢI KHO HÀNG. ĐÂY LÀ HỆ SINH THÁI ĐỂ THƯƠNG HIỆU BƯỚC VÀO."
              lead="Nói cho chúng tôi biết thương hiệu của bạn muốn đóng vai trò nào, phần đề xuất sẽ được dựng riêng."
            />
            <div className="mt-8 space-y-3 text-[0.86rem]" style={{ color: 'rgb(244 241 234 / 0.6)' }}>
              <p>
                Email hợp tác: <Pending k="PARTNER_EMAIL" />
              </p>
              <p>
                Đơn vị tổ chức: <Pending k="ORGANIZER" />
              </p>
              <p>
                Hotline: <Pending k="HOTLINE" />
              </p>
            </div>
            <L
              href="/press"
              className="fx-t-arrow mt-8 inline-flex text-[0.88rem] font-semibold underline underline-offset-8"
              style={{ color: '#f4f1ea' }}
            >
              Tải tư liệu ở phòng báo chí <span className="fx-arrow">→</span>
            </L>
          </div>
          <PartnerLeadForm />
        </div>
      </section>
    </>
  );
}
