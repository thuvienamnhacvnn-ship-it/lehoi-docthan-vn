/*
 * Thợ chạy nền (service worker) của ONE BEAT NIGHT.
 *
 * Việc của nó rất hẹp, cố ý:
 *  - giữ sẵn vỏ ứng dụng và trang báo mất mạng, để mở app không có sóng vẫn ra giao diện;
 *  - ảnh, font, file build: lấy từ kho trước, không có mới đi tải (những thứ này có tên
 *    kèm mã băm nên không bao giờ cũ);
 *  - trang HTML: đi mạng trước, hỏng thì mới lấy bản lưu — để nội dung không bị đọng.
 *
 * Không đụng tới POST, không đụng tới /api, không giữ gì có thể riêng tư.
 */

const VERSION = 'obn-v1';
const SHELL = `${VERSION}-shell`;
const RUNTIME = `${VERSION}-runtime`;

/** Mở app khi mất mạng thì ít nhất phải ra được mấy trang này. */
const PRECACHE = ['/', '/offline', '/tickets', '/program', '/map', '/icons/icon-192.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(SHELL)
      // addAll hỏng cả mẻ nếu một đường dẫn lỗi -> thêm lẻ từng cái cho chắc
      .then((cache) => Promise.all(PRECACHE.map((u) => cache.add(u).catch(() => {}))))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => !k.startsWith(VERSION)).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

/** Thứ có tên kèm mã băm thì nội dung không đổi -> lấy kho trước cho nhanh. */
const isImmutable = (url) =>
  url.pathname.startsWith('/_next/static/') ||
  url.pathname.startsWith('/assets/') ||
  url.pathname.startsWith('/icons/') ||
  /\.(woff2?|webp|avif|png|jpg|jpeg|svg|ico)$/.test(url.pathname);

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith('/api/')) return;

  if (isImmutable(url)) {
    event.respondWith(
      caches.match(request).then(
        (hit) =>
          hit ??
          fetch(request).then((res) => {
            if (res.ok) {
              const copy = res.clone();
              caches.open(RUNTIME).then((c) => c.put(request, copy));
            }
            return res;
          }),
      ),
    );
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone();
          caches.open(RUNTIME).then((c) => c.put(request, copy));
          return res;
        })
        .catch(async () => (await caches.match(request)) ?? (await caches.match('/offline')) ?? Response.error()),
    );
  }
});
