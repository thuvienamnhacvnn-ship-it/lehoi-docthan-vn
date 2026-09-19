import type { Metadata } from 'next';
import { L } from '../../../components/system/L';
import { PageHero } from '@/components/ui/PageHero';
import { AssetImage } from '@/components/media/AssetImage';
import { Reveal } from '@/components/system/Reveal';
import { faqs } from '@/data/community';

export const metadata: Metadata = {
  title: 'Hỏi đáp',
  description: 'Câu hỏi thường gặp về ONE BEAT NIGHT: định vị lễ hội, vé, line-up, thú cưng, tiếp cận và an toàn.',
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        kicker="Hỏi đáp"
        title="Những câu hỏi hay gặp nhất"
        lead="Câu nào chưa có đáp án cụ thể là vì ban tổ chức chưa công bố — trang này không đoán thay."
        assetId="legacy-11-2026-07-02-neon-festival-energy-in-the-city"
        focal="center 40%"
        env="night"
        height="short"
      />

      <section data-env-zone="night" className="section" style={{ background: '#050507' }}>
        <div className="wrap-narrow">
          <div className="space-y-2">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 40}>
                <details
                  className="group rounded-[var(--radius-md)] border px-5 py-4 transition-colors"
                  style={{ borderColor: 'rgb(244 241 234 / 0.12)' }}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="font-display text-[1.05rem]" style={{ color: '#f4f1ea' }}>
                      {f.q}
                    </span>
                    <span
                      aria-hidden
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full border text-lg transition-transform duration-300 group-open:rotate-45"
                      style={{ borderColor: 'rgb(244 241 234 / 0.2)', color: 'rgb(244 241 234 / 0.7)' }}
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-[0.9rem] leading-relaxed" style={{ color: 'rgb(244 241 234 / 0.66)' }}>
                    {f.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div
              className="relative mt-12 overflow-hidden rounded-[var(--radius-md)] border p-7 text-center"
              style={{ borderColor: 'rgb(244 241 234 / 0.14)' }}
            >
              <AssetImage id="kit-01-23-bg-galaxy" sizes="full" fill className="opacity-30" />
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: 'radial-gradient(ellipse at center, rgb(5 5 7 / 0.55), rgb(5 5 7 / 0.9))' }}
              />
              <div className="relative">
              <p className="font-display text-[1.2rem]" style={{ color: '#f4f1ea' }}>
                Chưa thấy câu của bạn?
              </p>
              <p className="mt-2 text-[0.88rem]" style={{ color: 'rgb(244 241 234 / 0.6)' }}>
                Cẩm nang tham dự có phần chi tiết hơn về đi lại, thú cưng, tiếp cận và an toàn.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <L
                  href="/visitor-guide"
                  className="fx-b-fill fx-b-press rounded-full border px-6 py-3 text-[0.85rem] font-semibold"
                  style={{ borderColor: 'rgb(244 241 234 / 0.25)', color: '#f4f1ea' }}
                >
                  Cẩm nang tham dự
                </L>
                <L
                  href="/contact"
                  className="fx-b-press rounded-full px-6 py-3 text-[0.85rem] font-bold"
                  style={{ background: 'var(--color-gold)', color: '#16120a' }}
                >
                  Liên hệ
                </L>
              </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
