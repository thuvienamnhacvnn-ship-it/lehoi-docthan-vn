'use client';

import { useEffect, useRef, useState } from 'react';
import { AssetImage } from '@/components/media/AssetImage';
import { useI18n } from '@/i18n/I18nProvider';
import type { MessagesFor } from '@/i18n/types';

/**
 * HỆ VIDEO (§09).
 *
 * Video CHƯA có — tuyệt đối không bịa file. Component này nhận `src = null`:
 * khi đó nó hiển thị ảnh KIT tương ứng làm poster, kèm nhãn cho biết video đang chờ.
 * Khi có file thật, chỉ cần điền `src` trong data/videos.ts.
 *
 * Hỗ trợ: video nền section, video nội tuyến điện ảnh, reel dọc; tải lười,
 * tự phát im lặng khi lọt vào màn hình, bấm để bật tiếng, tắt hẳn khi người dùng
 * chọn giảm chuyển động.
 */

export type VideoKind = 'hero' | 'background' | 'inline' | 'reel';

export interface VideoConfig {
  id: string;
  /** Khoá trong t.videos — tên phim hiển thị theo thứ tiếng đang đọc. */
  key: keyof MessagesFor['videos'];
  kind: VideoKind;
  /** null = chưa có file. Không tạo đường dẫn giả. */
  src: string | null;
  posterAssetId: string;
  captionsSrc?: string | null;
}

export function VideoExperience({
  config,
  className = '',
  ratio,
  sizes = 'full',
}: {
  config: VideoConfig;
  className?: string;
  ratio?: string;
  sizes?: string;
}) {
  const { t, locale } = useI18n();
  const videoRef = useRef<HTMLVideoElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (!config.src || reduced) return;
    const host = hostRef.current;
    const video = videoRef.current;
    if (!host || !video) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) void video.play().catch(() => undefined);
        else video.pause();
      },
      { threshold: 0.35 },
    );
    io.observe(host);
    return () => io.disconnect();
  }, [config.src, reduced]);

  const aspect = ratio ?? (config.kind === 'reel' ? '9 / 16' : '16 / 9');

  return (
    <div ref={hostRef} className={`relative overflow-hidden ${className}`} style={{ aspectRatio: aspect }}>
      {config.src && !reduced ? (
        <>
          <video
            ref={videoRef}
            muted={muted}
            playsInline
            loop
            preload="none"
            className="h-full w-full object-cover"
            aria-label={t.videos[config.key]}
          >
            <source src={config.src} type="video/mp4" />
            {config.captionsSrc && <track kind="captions" src={config.captionsSrc} srcLang={locale} label={t.ui.video.captionsLabel} default />}
          </video>
          <button
            type="button"
            onClick={() => setMuted((m) => !m)}
            className="absolute bottom-4 right-4 rounded-full border px-4 py-2 text-[0.76rem] font-semibold backdrop-blur"
            style={{ borderColor: 'rgb(244 241 234 / 0.3)', color: '#f4f1ea', background: 'rgb(5 5 7 / 0.4)' }}
          >
            {muted ? t.ui.video.unmute : t.ui.video.mute}
          </button>
        </>
      ) : (
        <>
          <AssetImage
            id={config.posterAssetId}
            sizes={sizes}
            fill
            scrim="soft"
          />
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <span
                className="grid h-16 w-16 place-items-center rounded-full border backdrop-blur"
                style={{ borderColor: 'rgb(244 241 234 / 0.35)', background: 'rgb(5 5 7 / 0.35)' }}
                aria-hidden
              >
                <span className="ml-1 block border-y-8 border-l-[13px] border-y-transparent border-l-white/85" />
              </span>
            </div>
          </div>
          <p
            className="absolute bottom-4 left-4 rounded-full border px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.16em] backdrop-blur"
            style={{ borderColor: 'rgb(245 185 66 / 0.45)', color: '#f5b942', background: 'rgb(5 5 7 / 0.45)' }}
          >
            {t.ui.video.comingSoon}
          </p>
          <span className="sr-only">
            {t.videos[config.key]} — {t.ui.video.srNote}
          </span>
        </>
      )}
    </div>
  );
}
