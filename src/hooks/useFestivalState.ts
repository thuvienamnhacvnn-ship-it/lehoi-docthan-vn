'use client';

import { useCallback, useEffect, useState } from 'react';

/**
 * Trạng thái của người tham dự: yêu thích, lịch của tôi, ví vé.
 *
 * Giai đoạn này lưu trên máy người dùng (localStorage) — chưa có tài khoản máy chủ.
 * Toàn bộ đọc/ghi đi qua một chỗ này, nên khi có API thật chỉ cần thay phần thân hàm.
 * Mọi truy cập đều bọc try/catch: trình duyệt ẩn danh hoặc chặn lưu trữ vẫn không vỡ trang.
 */

const KEYS = {
  favorites: 'obn:favorites',
  schedule: 'obn:schedule',
  wallet: 'obn:wallet',
} as const;

type Key = keyof typeof KEYS;

function read<T>(key: Key, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(KEYS[key]);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write<T>(key: Key, value: T) {
  try {
    window.localStorage.setItem(KEYS[key], JSON.stringify(value));
  } catch {
    /* lưu trữ bị chặn — bỏ qua, giao diện vẫn chạy trong phiên này */
  }
}

export function useStringSet(key: Extract<Key, 'favorites' | 'schedule'>) {
  const [items, setItems] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setItems(read<string[]>(key, []));
    setReady(true);
  }, [key]);

  const toggle = useCallback(
    (id: string) => {
      setItems((prev) => {
        const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
        write(key, next);
        return next;
      });
    },
    [key],
  );

  const clear = useCallback(() => {
    setItems([]);
    write(key, []);
  }, [key]);

  return { items, has: (id: string) => items.includes(id), toggle, clear, ready };
}

export interface WalletTicket {
  id: string;
  tierId: string;
  tierName: string;
  holder: string;
  /** Mã hiển thị trên vé — sinh tại máy, chỉ để minh hoạ luồng check-in. */
  code: string;
  createdAt: string;
  /** Vé demo: chưa có thanh toán thật nên luôn là 'demo'. */
  state: 'demo';
}

export function useWallet() {
  const [tickets, setTickets] = useState<WalletTicket[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTickets(read<WalletTicket[]>('wallet', []));
    setReady(true);
  }, []);

  const add = useCallback((tierId: string, tierName: string, holder: string) => {
    const ticket: WalletTicket = {
      id: `t-${Date.now().toString(36)}`,
      tierId,
      tierName,
      holder: holder.trim() || 'Khách tham dự',
      code: `OBN-${Math.random().toString(36).slice(2, 6).toUpperCase()}-${Math.random()
        .toString(36)
        .slice(2, 6)
        .toUpperCase()}`,
      createdAt: new Date().toISOString(),
      state: 'demo',
    };
    setTickets((prev) => {
      const next = [...prev, ticket];
      write('wallet', next);
      return next;
    });
    return ticket;
  }, []);

  const remove = useCallback((id: string) => {
    setTickets((prev) => {
      const next = prev.filter((t) => t.id !== id);
      write('wallet', next);
      return next;
    });
  }, []);

  return { tickets, add, remove, ready };
}
