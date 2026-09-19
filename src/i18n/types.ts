/**
 * Hình dạng của một bộ chữ.
 *
 * Bản tiếng Việt (`messages/vi.ts`) là bản gốc và là nguồn của kiểu này: viết thêm một mục
 * ở đó thì TypeScript lập tức bắt bốn bản kia thiếu, nên không có chuyện quên dịch một câu.
 */
import type { vi } from './messages/vi';

export type Messages = typeof vi;

/**
 * Bốn bản dịch phải khớp từng khoá với bản gốc, nhưng KHÔNG cần khớp kiểu chuỗi hằng
 * (bản gốc dùng `as const` nên mỗi chuỗi là một kiểu riêng). `Translated` nới mọi chuỗi
 * về `string` mà vẫn giữ nguyên cấu trúc khoá.
 */
export type Translated<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly Translated<U>[]
    : T extends object
      ? { readonly [K in keyof T]: Translated<T[K]> }
      : T;

export type MessagesFor = Translated<Messages>;
