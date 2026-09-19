'use client';

import { useCallback, useEffect, useState } from 'react';
import { useI18n } from '@/i18n/I18nProvider';

/**
 * Mời cài app về màn hình chính.
 *
 * Nguyên tắc: không chặn đường người đọc. Tấm thẻ chỉ trồi lên sau khi người ta đã
 * cuộn qua một màn hình (tức là có quan tâm thật), nằm ngay trên thanh tab, và đóng
 * một lần là hai tuần sau mới hỏi lại.
 *
 * Android/Chrome cho gọi hộp cài sẵn có. iOS thì không, nên ở đó chỉ hiện đúng ba bước bấm.
 */

interface InstallEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const SNOOZE_KEY = 'obn.install.snooze';
const TWO_WEEKS = 14 * 24 * 60 * 60 * 1000;

export function InstallPrompt() {
  const { t } = useI18n();
  const [deferred, setDeferred] = useState<InstallEvent | null>(null);
  const [iosHint, setIosHint] = useState(false);
  const [show, setShow] = useState(false);

  const snoozed = () => {
    try {
      const at = Number(localStorage.getItem(SNOOZE_KEY) ?? 0);
      return Date.now() - at < TWO_WEEKS;
    } catch {
      // Chế độ riêng tư chặn localStorage -> coi như chưa từng hỏi, thà hỏi thừa còn hơn hỏng
      return false;
    }
  };

  useEffect(() => {
    const standalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (navigator as Navigator & { standalone?: boolean }).standalone === true;
    if (standalone || snoozed()) return;

    const onPrompt = (e: Event) => {
      e.preventDefault();
      setDeferred(e as InstallEvent);
    };
    window.addEventListener('beforeinstallprompt', onPrompt);

    const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent);
    const isSafari = /safari/i.test(navigator.userAgent) && !/crios|fxios|android/i.test(navigator.userAgent);
    if (isIos && isSafari) setIosHint(true);

    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.9) {
        setShow(true);
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('beforeinstallprompt', onPrompt);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const close = useCallback(() => {
    setShow(false);
    try {
      localStorage.setItem(SNOOZE_KEY, String(Date.now()));
    } catch {
      /* không lưu được thì thôi */
    }
  }, []);

  const install = useCallback(async () => {
    if (!deferred) return;
    await deferred.prompt();
    await deferred.userChoice;
    setDeferred(null);
    close();
  }, [deferred, close]);

  if (!show || (!deferred && !iosHint)) return null;

  return (
    <div className="app-install lg:hidden" role="dialog" aria-label={t.install.dialogLabel}>
      <img src="/icons/icon-192.png" alt="" aria-hidden width={44} height={44} className="app-install__icon" />
      <div className="app-install__text">
        <p className="app-install__title">{t.install.title}</p>
        <p className="app-install__desc">
          {deferred ? t.install.descAndroid : t.install.descIos}
        </p>
      </div>
      {deferred && (
        <button type="button" onClick={install} className="app-install__cta">
          {t.install.cta}
        </button>
      )}
      <button type="button" onClick={close} className="app-install__close" aria-label={t.install.close}>
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden>
          <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
