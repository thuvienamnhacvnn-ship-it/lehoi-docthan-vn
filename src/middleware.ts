import { NextResponse, type NextRequest } from 'next/server';
import { LOCALES, DEFAULT_LOCALE, pickLocale } from '@/i18n/config';

/**
 * Mọi đường dẫn đều phải có mã ngôn ngữ ở đầu.
 *
 * Ai gõ `/tickets` hay mở `/` thì được đưa sang bản hợp với trình duyệt của họ; lần sau
 * quay lại thì theo cookie, vì người đã tự đổi sang thứ tiếng khác không muốn bị đẩy về
 * theo cài đặt máy nữa.
 */

const PUBLIC_FILE = /\.(?:png|jpe?g|webp|avif|svg|ico|txt|xml|webmanifest|js|css|woff2?|mp4|webm)$/i;

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // Tài nguyên, API và những gì Next tự phục vụ thì không đụng tới.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/sw.js' ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const hasLocale = LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return NextResponse.next();

  const saved = req.cookies.get('obn-locale')?.value;
  const locale =
    saved && (LOCALES as readonly string[]).includes(saved)
      ? saved
      : pickLocale(req.headers.get('accept-language'));

  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  url.search = search;
  const res = NextResponse.redirect(url);
  res.cookies.set('obn-locale', locale ?? DEFAULT_LOCALE, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  });
  return res;
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
