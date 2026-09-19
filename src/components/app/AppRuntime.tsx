'use client';

import { useEffect } from 'react';

/**
 * Chuyển web thành ứng dụng trên điện thoại.
 *
 * Ba việc, làm ở phía trình duyệt vì đều cần biết máy thật đang chạy thế nào:
 *  1. đăng ký thợ chạy nền -> mở app không có sóng vẫn ra giao diện;
 *  2. đánh dấu `data-standalone` khi app được mở từ màn hình chính (không có thanh địa chỉ),
 *     để giao diện tự nới phần đệm trên/dưới cho khỏi đụng tai thỏ và vạch home;
 *  3. đo chiều cao khung nhìn thật (`--vh-app`) — trên iOS thanh địa chỉ co giãn nên
 *     100vh luôn dài hơn màn hình, chỗ nào cần "vừa đúng một màn" phải dùng biến này.
 */
export function AppRuntime() {
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      // Đợi tải xong mới đăng ký, để việc này không tranh băng thông với ảnh banner.
      const onLoad = () => navigator.serviceWorker.register('/sw.js').catch(() => {});
      if (document.readyState === 'complete') onLoad();
      else window.addEventListener('load', onLoad, { once: true });
    }

    const mq = window.matchMedia('(display-mode: standalone)');
    const mark = () => {
      const standalone =
        mq.matches ||
        // iOS chưa theo chuẩn display-mode, phải đọc cờ riêng của Safari
        (navigator as Navigator & { standalone?: boolean }).standalone === true;
      document.documentElement.dataset.standalone = standalone ? 'true' : 'false';
    };
    mark();
    mq.addEventListener('change', mark);

    const setVh = () => {
      const h = window.visualViewport?.height ?? window.innerHeight;
      document.documentElement.style.setProperty('--vh-app', `${h}px`);
    };
    setVh();
    window.visualViewport?.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', setVh);

    return () => {
      mq.removeEventListener('change', mark);
      window.visualViewport?.removeEventListener('resize', setVh);
      window.removeEventListener('orientationchange', setVh);
    };
  }, []);

  return null;
}
