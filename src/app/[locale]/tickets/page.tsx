import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { AssetImage } from '@/components/media/AssetImage';
import { Reveal } from '@/components/system/Reveal';
import { SectionHeader } from '@/components/ui/Section';
import { Pending } from '@/components/system/Pending';
import { TicketFlow } from '@/components/tickets/TicketFlow';
import { ticketTiers, wristbandCapabilities, wristbandFlow } from '@/data/tickets';

import { getMessages } from '@/i18n/get-messages';
import type { Locale } from '@/i18n/config';

type PageProps = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getMessages(locale);
  return { title: t.pages.tickets.metaTitle, description: t.pages.tickets.metaDescription };
}

const _unusedMetadata = {
  title: 'Vé',
  description: 'Ba hạng vé của lễ hội, ví vé điện tử, quy trình check-in và vòng tay LED. Giá và ngày mở bán sẽ công bố sau.',
};

/**
 * Trang vé — dựng lại.
 *
 * Bản trước là ba thẻ đều tăm tắp: ảnh cùng khổ, chữ cùng cỡ, quyền lợi dài ngắn khác nhau
 * nên đáy thẻ so le, và hạng VIP chẳng nổi hơn hạng thường chút nào.
 *
 * Bản này dựng theo cách một nhà hát bán vé: hạng VIP chiếm khối lớn bên trái, bốn hạng còn
 * lại xếp lưới 2×2 bên phải nên không còn ô trống. Bảng so sánh quyền lợi đặt ngay dưới để
 * khách đối chiếu nhanh mà không phải cuộn qua lại.
 *
 * Hạng có cờ `proposed` là đề xuất của đội thiết kế, chưa được ban tổ chức duyệt — phải
 * gắn nhãn rõ để không ai nhầm là đã chốt.
 */
export default async function TicketsPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getMessages(locale);
  const c = t.pages.tickets;
  const featured = ticketTiers.find((x) => x.featured) ?? ticketTiers[0];
  const rest = ticketTiers.filter((x) => x.id !== featured.id);

  /** Mọi quyền lợi xuất hiện trong các hạng, để dựng bảng so sánh. Lấy từ bộ chữ
      đang dùng, nên bảng so khớp đúng theo thứ tiếng người đọc đang xem. */
  const allBenefits = Array.from(new Set(ticketTiers.flatMap((x) => t.ticketTiers[x.id].benefits)));

  return (
    <>
      <PageHero
        kicker={c.kicker}
        title={
          <>
            {c.titleA} <span className="t-outline">{c.titleB}</span>
          </>
        }
        lead={c.lead}
        assetId="kit-01-16-entrance-gate"
        focal="center 34%"
        env="night"
        height="short"
      >
        <dl className="mt-8 flex flex-wrap items-start gap-x-12 gap-y-5">
          <div>
            <dt className="kicker mb-2" style={{ color: 'rgb(244 241 234 / 0.42)' }}>
              Giá vé
            </dt>
            <dd>
              <Pending k="TICKET_PRICE" />
            </dd>
          </div>
          <div>
            <dt className="kicker mb-2" style={{ color: 'rgb(244 241 234 / 0.42)' }}>
              Ngày mở bán
            </dt>
            <dd>
              <Pending k="TICKET_ONSALE" />
            </dd>
          </div>
          <div>
            <dt className="kicker mb-2" style={{ color: 'rgb(244 241 234 / 0.42)' }}>
              Số hạng vé
            </dt>
            <dd className="num-oversized text-[1.4rem]" style={{ color: 'var(--color-gold)' }}>
              {ticketTiers.length}
            </dd>
          </div>
        </dl>
      </PageHero>

      {/* ---- Ba hạng: một khối lớn + hai khối dọc ---- */}
      <section data-env-zone="night" className="section" style={{ background: '#050507' }}>
        <div className="wrap">
          <SectionHeader
            kicker={`${ticketTiers.length} hạng vé`}
            title={c.chooseTitle}
            lead={c.chooseLead}
            align="wide"
          />

          <div className="mt-14 grid gap-4 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-stretch">
            {/* Hạng nổi bật */}
            <Reveal>
              <article
                className="group fx-c-lift fx-c-zoom fx-c-shine relative flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border"
                style={{ borderColor: 'rgb(245 185 66 / 0.45)', background: 'rgb(245 185 66 / 0.05)' }}
              >
                <span
                  className="absolute right-5 top-5 z-10 rounded-full px-3.5 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.2em]"
                  style={{ background: 'var(--color-gold)', color: '#16120a' }}
                >
                  Được chọn nhiều
                </span>
                <AssetImage id={featured.assetId} sizes="half" ratio="16 / 9" className="w-full" scrim="bottom" />
                {/* Vân vàng chạy mảnh dưới ảnh — chất liệu dành riêng cho hạng VIP */}
                <AssetImage id="kit-01-26-texture-gold" sizes="half" ratio="24 / 1" className="w-full opacity-70" />
                <div className="flex flex-1 flex-col p-7 sm:p-9">
                  <p className="kicker" style={{ color: featured.accent }}>
                    {featured.en}
                  </p>
                  <h2 className="font-display fx-t-gold-rise mt-2 text-[clamp(1.6rem,3vw,2.4rem)]" style={{ color: '#f4f1ea' }}>
                    {featured.name}
                  </h2>
                  <p className="lede mt-3" style={{ color: 'rgb(244 241 234 / 0.72)' }}>
                    {featured.lead}
                  </p>

                  <ul className="mt-7 grid flex-1 gap-2.5 sm:grid-cols-2">
                    {featured.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex gap-2.5 text-[0.86rem] leading-snug"
                        style={{ color: 'rgb(244 241 234 / 0.78)' }}
                      >
                        <span aria-hidden className="mt-0.5 shrink-0" style={{ color: featured.accent }}>
                          ✓
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div
                    className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t pt-6"
                    style={{ borderColor: 'rgb(244 241 234 / 0.14)' }}
                  >
                    <span className="kicker">{c.priceLabel}</span>
                    <Pending k="TICKET_PRICE" tone="gold" />
                  </div>
                </div>
              </article>
            </Reveal>

            {/* Bốn hạng còn lại — lưới 2×2 nên không còn ô trống */}
            <div className="grid gap-4 sm:grid-cols-2">
              {rest.map((tier, i) => (
                <Reveal key={tier.id} delay={(i + 1) * 90}>
                  <article
                    className="group fx-c-lift fx-c-zoom fx-c-edge relative flex h-full flex-col overflow-hidden rounded-[var(--radius-md)] border"
                    style={{ borderColor: 'rgb(244 241 234 / 0.12)' }}
                  >
                    {tier.proposed && (
                      <span
                        className="absolute right-3 top-3 z-10 rounded-full border px-2.5 py-1 text-[0.56rem] font-bold uppercase tracking-[0.16em] backdrop-blur"
                        style={{
                          borderColor: 'rgb(244 241 234 / 0.3)',
                          color: 'rgb(244 241 234 / 0.8)',
                          background: 'rgb(5 5 7 / 0.55)',
                        }}
                        title={c.proposedTitle}
                      >
                        {t.common.proposed}
                      </span>
                    )}
                    <AssetImage id={tier.assetId} sizes="third" ratio="16 / 10" className="w-full" />
                    <div className="flex flex-1 flex-col p-5">
                      <p className="kicker" style={{ color: tier.accent }}>
                        {tier.en}
                      </p>
                      <h2 className="font-display fx-t-underline mt-1.5 text-[1.15rem]" style={{ color: '#f4f1ea' }}>
                        {t.ticketTiers[tier.id].name}
                      </h2>
                      <p className="mt-1.5 text-[0.82rem] leading-snug" style={{ color: 'rgb(244 241 234 / 0.62)' }}>
                        {t.ticketTiers[tier.id].lead}
                      </p>
                      <ul className="mt-3.5 flex-1 space-y-1.5">
                        {t.ticketTiers[tier.id].benefits.slice(0, 3).map((b) => (
                          <li
                            key={b}
                            className="flex gap-2 text-[0.8rem] leading-snug"
                            style={{ color: 'rgb(244 241 234 / 0.7)' }}
                          >
                            <span aria-hidden style={{ color: tier.accent }}>
                              ·
                            </span>
                            {b}
                          </li>
                        ))}
                      </ul>
                      <p
                        className="mt-5 flex items-center justify-between gap-3 border-t pt-4"
                        style={{ borderColor: 'rgb(244 241 234 / 0.12)' }}
                      >
                        <span className="kicker">{c.priceShort}</span>
                        <Pending k="TICKET_PRICE" />
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- Bảng so sánh quyền lợi ---- */}
      <section data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap">
          <SectionHeader kicker={c.compareKicker} title={c.compareTitle} align="split" />

          <Reveal>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full border-collapse text-left" style={{ minWidth: 820 }}>
                <caption className="sr-only">{c.compareCaption}</caption>
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="kicker w-[34%] border-b py-4 pr-4 align-bottom"
                      style={{ borderColor: 'rgb(244 241 234 / 0.16)' }}
                    >
                      Quyền lợi
                    </th>
                    {ticketTiers.map((t) => (
                      <th
                        key={t.id}
                        scope="col"
                        className="border-b py-4 pl-4 align-bottom"
                        style={{ borderColor: 'rgb(244 241 234 / 0.16)' }}
                      >
                        <span className="kicker block text-[0.56rem]" style={{ color: t.accent }}>
                          {t.en}
                        </span>
                        <span className="font-display mt-1.5 block text-[1rem]" style={{ color: '#f4f1ea' }}>
                          {t.name}
                        </span>
                        {t.proposed && (
                          <span className="mt-1 block text-[0.6rem] uppercase tracking-[0.14em]" style={{ color: 'rgb(244 241 234 / 0.4)' }}>
                            đề xuất
                          </span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {allBenefits.map((benefit) => (
                    <tr key={benefit} className="group">
                      <th
                        scope="row"
                        className="border-b py-3.5 pr-4 text-[0.86rem] font-normal leading-snug"
                        style={{ borderColor: 'rgb(244 241 234 / 0.08)', color: 'rgb(244 241 234 / 0.74)' }}
                      >
                        {benefit}
                      </th>
                      {ticketTiers.map((t) => {
                        const has = t.benefits.includes(benefit);
                        return (
                          <td
                            key={t.id}
                            className="border-b py-3.5 pl-4"
                            style={{ borderColor: 'rgb(244 241 234 / 0.08)' }}
                          >
                            {has ? (
                              <span className="fx-i-beat inline-block text-[0.95rem]" style={{ color: t.accent }}>
                                ✓<span className="sr-only">{c.yes}</span>
                              </span>
                            ) : (
                              <span style={{ color: 'rgb(244 241 234 / 0.2)' }}>
                                —<span className="sr-only">{c.no}</span>
                              </span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                  <tr>
                    <th scope="row" className="kicker py-5 pr-4">
                      Giá vé
                    </th>
                    {ticketTiers.map((t) => (
                      <td key={t.id} className="py-5 pl-4">
                        <Pending k="TICKET_PRICE" tone={t.featured ? 'gold' : 'quiet'} />
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Luồng mua vé + ví ---- */}
      <section data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap">
          <SectionHeader
            kicker={c.flowKicker}
            title={c.flowTitle}
            lead={c.flowLead}
            align="split"
          />
          <div className="mt-12">
            <TicketFlow />
          </div>
        </div>
      </section>

      {/* ---- Vòng tay LED ---- */}
      <section data-env-zone="night" className="section pt-0" style={{ background: '#050507' }}>
        <div className="wrap">
          <SectionHeader
            kicker={c.techKicker}
            title={c.techTitle}
            lead={c.techLead}
            align="split"
          />

          <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {wristbandFlow.map((s, i) => (
              <Reveal key={s.id} delay={i * 60}>
                <li
                  className={
                    'group fx-c-zoom fx-c-scan fx-c-corners relative h-full overflow-hidden rounded-[var(--radius-md)] border' +
                    (i === wristbandFlow.length - 1 ? ' sm:col-span-2 lg:col-span-2' : '')
                  }
                  style={{ borderColor: 'rgb(244 241 234 / 0.12)' }}
                >
                  <AssetImage id={s.assetId} sizes="third" ratio="4 / 3" className="w-full" scrim="bottom" />
                  <div className="p-5">
                    <p className="num-oversized text-[1.4rem]" style={{ color: 'rgb(244 241 234 / 0.2)' }}>
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <p className="font-display fx-t-lift mt-1 text-[1.02rem]" style={{ color: '#f4f1ea' }}>
                      {s.label}
                    </p>
                    <p className="mt-1.5 text-[0.78rem]" style={{ color: 'rgb(244 241 234 / 0.6)' }}>
                      {s.note}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="kicker">{c.capabilitiesLabel}</span>
            {wristbandCapabilities.map((cap) => (
              <span
                key={cap.id}
                className="rounded-full border px-3.5 py-1.5 text-[0.74rem]"
                style={{ borderColor: 'rgb(244 241 234 / 0.16)', color: 'rgb(244 241 234 / 0.5)' }}
              >
                {t.wristbandCapabilities[cap.id]} · {c.notConfirmed}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
