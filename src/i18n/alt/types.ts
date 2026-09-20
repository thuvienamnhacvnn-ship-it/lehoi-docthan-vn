import type { altVi } from './vi';

/**
 * Khuôn của bộ mô tả ảnh. Bản tiếng Việt là gốc, nên thêm một ảnh mới vào đó là
 * TypeScript lập tức bắt bốn bản kia thiếu mô tả — không có ảnh nào lọt ra ngoài
 * mà không ai dịch.
 */
export type AltFor = Record<keyof typeof altVi, string>;
