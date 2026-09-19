import { Hero } from '@/components/home/Hero';
import {
  AudienceSection,
  CommunitySection,
  DayFestivalIntro,
  EmblemBand,
  FinalCta,
  MegaZoneSection,
  MovementSection,
  NightIntro,
} from '@/components/home/HomeSections';
import { SponsorTeaser, TicketTeaser } from '@/components/home/SponsorTeaser';
import { InfinityJourney } from '@/components/journey/InfinityJourney';
import { ActivityRail } from '@/components/experience/ActivityRail';
import { LightMoment } from '@/components/night/LightMoment';

/**
 * Mạch kể của trang chủ (§02):
 * PHONG TRÀO → VÌ SAO → CHO AI → HÀNH TRÌNH → DAY FESTIVAL → HOẠT ĐỘNG → MEGA ZONE
 * → CỘNG ĐỒNG → ĐÊM NHẠC → KHOẢNH KHẮC ÁNH SÁNG → TÀI TRỢ → VÉ → LỜI CUỐI.
 *
 * Môi trường thị giác đi từ ĐÊM (mở màn) → NGÀY → GIỜ VÀNG → ĐÊM (cao trào),
 * đúng nhịp của một ngày lễ hội.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <MovementSection />
      <AudienceSection />
      <InfinityJourney />
      <DayFestivalIntro />
      <section data-env-zone="day" className="section pt-10" style={{ background: 'var(--env-bg)' }}>
        <ActivityRail phase="day" />
      </section>
      <MegaZoneSection />
      <CommunitySection />
      <EmblemBand />
      <NightIntro />
      <LightMoment />
      <SponsorTeaser />
      <TicketTeaser />
      <FinalCta />
    </>
  );
}
