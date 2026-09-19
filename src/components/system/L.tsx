'use client';

import Link from 'next/link';
import type { ComponentProps } from 'react';
import { useI18n } from '@/i18n/I18nProvider';

/**
 * Liên kết nội bộ. Dùng thay cho `next/link` ở MỌI nơi trong dự án.
 *
 * Lý do tồn tại: mọi đường dẫn đều phải mang mã ngôn ngữ (`/en/tickets`). Nếu để từng
 * component tự ghép thì chỉ cần quên một chỗ là người đang đọc bản tiếng Hàn bấm vào
 * bị ném về bản tiếng Việt. Ở đây ghép một lần, không ai phải nhớ.
 *
 * Đường dẫn ra ngoài (http…, mailto:, tel:) và neo trong trang (#…) được để nguyên.
 */
type Props = ComponentProps<typeof Link>;

export function L({ href, ...rest }: Props) {
  const { locale } = useI18n();

  const path = typeof href === 'string' ? href : null;
  const prefixed =
    path && path.startsWith('/') && !path.startsWith('//')
      ? `/${locale}${path === '/' ? '' : path}`
      : href;

  return <Link href={prefixed} {...rest} />;
}
