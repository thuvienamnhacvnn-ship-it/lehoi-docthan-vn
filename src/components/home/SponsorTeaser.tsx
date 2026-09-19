import { L } from '../system/L';
import { AssetImage } from '@/components/media/AssetImage';
import { Reveal } from '@/components/system/Reveal';
import { SectionHeader } from '@/components/ui/Section';
import { Pending } from '@/components/system/Pending';
import { ticketTiers } from '@/data/tickets';
import { opportunities, opportunityCategories } from '@/data/sponsor';

/**
 * 10 — HỆ SINH THÁI TÀI TRỢ, đặt ngay trong mạch chính của trang chủ (§28):
 * giá trị thương mại không được giấu riêng trong trang Đối tác.
 */
export function SponsorTeaser() {
  const highlights = ['central-activation', 'naming-rights', 'megasale', 'csr']
    .map((id) => opportunities.find((o) => o.id === id))
    .filter((o): o is NonNullable<typeof o> => Boolean(o));

  return (
    <section data-env-zone="night" className="section" style={{ background: '#050507' }}>
      <div className="wrap">
        <SectionHeader
          kicker="07 — Dành cho thương hiệu"
          title={
            <>
              <span className="t-outline">ONE BEAT NIGHT</span> không phải
              <br />
              một chỗ để <span className="gold-text">treo logo</span>.
            </>
          }
          lead="Đây là một hệ sinh thái thương hiệu có thể bước vào: một khu trải nghiệm, một khung giờ thương mại, một phần trong kịch bản sân khấu, hoặc tên gắn vào cả một khu."
          align="split"
        />

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((o, i) => {
            const cat = opportunityCategories[o.category];
            return (
              <Reveal key={o.id} delay={i * 90}>
                <article className="group fx-c-lift fx-c-rim fx-c-zoom relative h-full overflow-hidden rounded-[var(--radius-md)] border" style={{ borderColor: 'rgb(244 241 234 / 0.12)' }}>
                  <AssetImage id={o.assetId} sizes="third" ratio="4 / 3" className="w-full" scrim="bottom" />
                  <div className="p-5">
                    <p className="kicker" style={{ color: cat.color }}>
                      {cat.en}
                    </p>
                    <h3 className="font-display fx-t-gold-rise mt-2 text-[1.08rem]" style={{ color: '#f4f1ea' }}>
                      {o.name}
                    </h3>
                    <p className="mt-2 text-[0.82rem] leading-snug" style={{ color: 'rgb(244 241 234 / 0.6)' }}>
                      {o.lead}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-12 grid gap-6 rounded-[var(--radius-md)] border p-7 sm:grid-cols-[1fr_auto] sm:items-center" style={{ borderColor: 'rgb(244 241 234 / 0.14)' }}>
            <div>
              <p className="font-display text-[1.25rem]" style={{ color: '#f4f1ea' }}>
                {opportunities.length} hình thức tham gia, chia theo tám nhóm giá trị.
              </p>
              <p className="mt-2 text-[0.86rem]" style={{ color: 'rgb(244 241 234 / 0.58)' }}>
                Kèm kiến trúc đo lường để sau sự kiện nối vào dữ liệu thật. Liên hệ hợp tác:{' '}
                <Pending k="PARTNER_EMAIL" />
              </p>
            </div>
            <L
              href="/partners"
              className="fx-b-press justify-self-start rounded-full px-6 py-3 text-[0.86rem] font-bold sm:justify-self-end"
              style={{ background: 'var(--color-gold)', color: '#16120a' }}
            >
              Vào cổng đối tác
            </L>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** 11 — THAM GIA: hạng vé, chưa có giá. */
export function TicketTeaser() {
  return (
    <section data-env-zone="night" className="section" style={{ background: '#050507' }}>
      <div className="wrap">
        <SectionHeader
          kicker="08 — Tham gia"
          title={
            <>
              Ba cách <span className="t-outline">bước vào</span> lễ hội
            </>
          }
          lead="Bảng giá và ngày mở bán sẽ công bố sau. Quyền lợi của từng hạng đã cố định theo trải nghiệm, không theo con số."
          align="split"
        />

        <div className="grid-3 mt-12">
          {ticketTiers.map((t, i) => (
            <Reveal key={t.id} delay={i * 100}>
              <article
                className="group fx-c-lift fx-c-shine fx-c-zoom flex h-full flex-col overflow-hidden rounded-[var(--radius-md)] border"
                style={{
                  borderColor: t.featured ? 'rgb(245 185 66 / 0.5)' : 'rgb(244 241 234 / 0.12)',
                  background: t.featured ? 'rgb(245 185 66 / 0.05)' : 'transparent',
                }}
              >
                <AssetImage id={t.assetId} sizes="third" ratio="16 / 10" className="w-full" />
                <div className="flex flex-1 flex-col p-6">
                  <p className="kicker" style={{ color: t.accent }}>
                    {t.en}
                  </p>
                  <h3 className="font-display fx-t-underline mt-2 text-[1.25rem]" style={{ color: '#f4f1ea' }}>
                    {t.name}
                  </h3>
                  <p className="mt-2 text-[0.86rem]" style={{ color: 'rgb(244 241 234 / 0.62)' }}>
                    {t.lead}
                  </p>
                  <ul className="mt-5 flex-1 space-y-2">
                    {t.benefits.slice(0, 3).map((b) => (
                      <li key={b} className="flex gap-2.5 text-[0.82rem]" style={{ color: 'rgb(244 241 234 / 0.72)' }}>
                        <span aria-hidden style={{ color: t.accent }}>
                          ·
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 flex items-baseline gap-3">
                    <span className="kicker">Giá</span>
                    <Pending k="TICKET_PRICE" tone={t.featured ? 'gold' : 'default'} />
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <L
            href="/tickets"
            className="fx-t-arrow mt-10 inline-flex items-center gap-2 text-[0.9rem] font-semibold underline underline-offset-8"
            style={{ color: '#f4f1ea' }}
          >
            Xem chi tiết vé, ví vé và vòng tay LED <span className="fx-arrow">→</span>
          </L>
        </Reveal>
      </div>
    </section>
  );
}
