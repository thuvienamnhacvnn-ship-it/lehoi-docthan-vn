/**
 * Cấu hình video (§09).
 * `src: null` = chưa có file. KHÔNG tạo đường dẫn giả; khi có file thật thì điền vào đây,
 * đặt trong /public/assets/video/ và mọi nơi trên web tự chạy.
 */
import type { VideoConfig } from '@/components/media/VideoExperience';

export const videos: Record<string, VideoConfig> = {
  heroFilm: {
    key: 'heroFilm' as const,
    id: 'hero-film',
    kind: 'hero',
    src: null,
    posterAssetId: 'kit-01-09-crowd-energy',
  },
  dayFestival: {
    key: 'dayFestival' as const,
    id: 'day-festival',
    kind: 'inline',
    src: null,
    posterAssetId: 'kit-02-21-mega-zone-overview',
  },
  concertTeaser: {
    key: 'concertTeaser' as const,
    id: 'concert-teaser',
    kind: 'inline',
    src: null,
    posterAssetId: 'kit-03-04-headline-singer-wide',
  },
  sponsorFilm: {
    key: 'sponsorFilm' as const,
    id: 'sponsor-film',
    kind: 'inline',
    src: null,
    posterAssetId: 'kit-05-01-sponsor-central-booth',
  },
  afterMovie: {
    key: 'afterMovie' as const,
    id: 'after-movie',
    kind: 'inline',
    src: null,
    posterAssetId: 'kit-04-24-post-event-recap-editing',
  },
  reelDance: {
    key: 'reelDance' as const,
    id: 'reel-dance',
    kind: 'reel',
    src: null,
    posterAssetId: 'kit-03-23-concert-dance-moment',
  },
  reelCreator: {
    key: 'reelCreator' as const,
    id: 'reel-creator',
    kind: 'reel',
    src: null,
    posterAssetId: 'kit-04-16-content-creator-filming',
  },
  reelFlashmob: {
    key: 'reelFlashmob' as const,
    id: 'reel-flashmob',
    kind: 'reel',
    src: null,
    posterAssetId: 'kit-02-02-flashmob-dancer-closeup',
  },
};
