import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { ScheduleExplorer } from '@/components/program/ScheduleExplorer';
import { Pending } from '@/components/system/Pending';
import { scheduleWithActivity } from '@/data/program';

export const metadata: Metadata = {
  title: 'Lịch trình',
  description: 'Toàn bộ chương trình lễ hội theo khối giờ, sân khấu, khu vực và hoạt động — kèm lịch cá nhân.',
};

export default function ProgramPage() {
  return (
    <>
      <PageHero
        kicker="Chương trình"
        title={
          <>
            Lịch trình <span className="t-outline">lễ hội</span>
          </>
        }
        lead={`${scheduleWithActivity.length} mục trải suốt bốn khối: sáng, giữa ngày, giờ vàng và đêm nhạc. Thêm vào "Lịch của tôi" để giữ lại những gì bạn định đi.`}
        assetId="kit-06-17-golden-hour-transition"
        env="golden"
        height="short"
      >
        <p className="mt-7 text-[0.84rem]" style={{ color: 'rgb(244 241 234 / 0.6)' }}>
          Ngày tổ chức: <Pending k="EVENT_DATE" /> · Giờ mở cổng: <Pending k="EVENT_TIME" />
        </p>
      </PageHero>

      <section data-env-zone="night" className="section" style={{ background: '#050507' }}>
        <div className="wrap">
          <ScheduleExplorer />
        </div>
      </section>
    </>
  );
}
