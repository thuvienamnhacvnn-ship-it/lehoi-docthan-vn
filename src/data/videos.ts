/**
 * Cấu hình video (§09).
 * `src: null` = chưa có file. KHÔNG tạo đường dẫn giả; khi có file thật thì điền vào đây,
 * đặt trong /public/assets/video/ và mọi nơi trên web tự chạy.
 */
import type { VideoConfig } from '@/components/media/VideoExperience';

export const videos: Record<string, VideoConfig> = {
  heroFilm: {
    id: 'hero-film',
    kind: 'hero',
    title: 'Phim giới thiệu ONE BEAT NIGHT',
    src: null,
    posterAssetId: 'kit-01-09-crowd-energy',
  },
  dayFestival: {
    id: 'day-festival',
    kind: 'inline',
    title: 'Một ngày ở Day Festival',
    src: null,
    posterAssetId: 'kit-02-21-mega-zone-overview',
  },
  concertTeaser: {
    id: 'concert-teaser',
    kind: 'inline',
    title: 'Teaser đêm nhạc',
    src: null,
    posterAssetId: 'kit-03-04-headline-singer-wide',
  },
  sponsorFilm: {
    id: 'sponsor-film',
    kind: 'inline',
    title: 'Phim giới thiệu cơ hội thương hiệu',
    src: null,
    posterAssetId: 'kit-05-01-sponsor-central-booth',
  },
  afterMovie: {
    id: 'after-movie',
    kind: 'inline',
    title: 'Phim tổng kết',
    src: null,
    posterAssetId: 'kit-04-24-post-event-recap-editing',
  },
  reelDance: {
    id: 'reel-dance',
    kind: 'reel',
    title: 'Reel — khoảnh khắc nhảy trong đêm nhạc',
    src: null,
    posterAssetId: 'kit-03-23-concert-dance-moment',
  },
  reelCreator: {
    id: 'reel-creator',
    kind: 'reel',
    title: 'Reel — người sáng tạo nội dung tại lễ hội',
    src: null,
    posterAssetId: 'kit-04-16-content-creator-filming',
  },
  reelFlashmob: {
    id: 'reel-flashmob',
    kind: 'reel',
    title: 'Reel — flashmob khai hội',
    src: null,
    posterAssetId: 'kit-02-02-flashmob-dancer-closeup',
  },
};
