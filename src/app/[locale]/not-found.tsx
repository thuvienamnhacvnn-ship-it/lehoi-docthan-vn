import { NotFoundView } from '@/components/shell/NotFoundView';

/**
 * Trang 404.
 *
 * Next dựng `not-found` mà KHÔNG truyền params, nên ở đây không biết được thứ tiếng.
 * Phần chữ vì thế nằm trong một component chạy ở trình duyệt: nó đọc thứ tiếng từ
 * context mà layout đã bọc sẵn, nên vẫn hiện đúng bản mà không cần params.
 */
export default function NotFound() {
  return <NotFoundView />;
}
