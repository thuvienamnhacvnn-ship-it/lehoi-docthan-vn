'use client';

import { useState } from 'react';
import { opportunities, opportunityCategories } from '@/data/sponsor';
import { useI18n } from '@/i18n/I18nProvider';

/**
 * Biểu mẫu quan tâm hợp tác (§12).
 * Chưa có backend — form xác thực đầy đủ phía client rồi nói thẳng rằng dữ liệu
 * chưa được gửi đi đâu. Khi có endpoint thật, thay phần `submit` là xong.
 */
export function PartnerLeadForm() {
  const { t } = useI18n();
  const [form, setForm] = useState({ company: '', name: '', email: '', phone: '', interest: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!form.company.trim()) next.company = t.ui.leadForm.errCompany;
    if (!form.name.trim()) next.name = t.ui.leadForm.errName;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = t.ui.leadForm.errEmail;
    setErrors(next);
    if (Object.keys(next).length === 0) setDone(true);
  };

  if (done) {
    return (
      <div className="surface p-8" role="status">
        <p className="kicker mb-3" style={{ color: 'var(--color-gold)' }}>
          {t.ui.leadForm.doneBadge}
        </p>
        <p className="font-display text-[1.3rem]">
          {t.ui.leadForm.thanks} {form.name.trim()}.
        </p>
        <p className="mt-3 text-[0.9rem] leading-relaxed" style={{ color: 'var(--env-muted)' }}>
          {t.ui.leadForm.doneBodyA}{' '}
          <strong>{t.ui.leadForm.doneBodyStrong}</strong>
          {t.ui.leadForm.doneBodyB}
        </p>
        <button
          type="button"
          onClick={() => setDone(false)}
          className="mt-6 rounded-full border px-5 py-2.5 text-[0.82rem] font-semibold"
          style={{ borderColor: 'var(--env-card-line)' }}
        >
          {t.ui.leadForm.again}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="surface p-6 sm:p-8" noValidate>
      <p className="font-display text-[1.3rem]">{t.ui.leadForm.title}</p>
      <p className="mt-2 text-[0.85rem]" style={{ color: 'var(--env-faint)' }}>
        {t.ui.leadForm.lead}
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field id="company" label={t.ui.leadForm.company} value={form.company} onChange={set('company')} error={errors.company} />
        <Field id="name" label={t.ui.leadForm.contact} value={form.name} onChange={set('name')} error={errors.name} />
        <Field id="email" label="Email" type="email" value={form.email} onChange={set('email')} error={errors.email} />
        <Field id="phone" label={t.ui.leadForm.phone} type="tel" value={form.phone} onChange={set('phone')} />
      </div>

      <label htmlFor="interest" className="mt-5 block">
        <span className="kicker">{t.ui.leadForm.interest}</span>
        <select
          id="interest"
          value={form.interest}
          onChange={set('interest')}
          className="mt-2 w-full rounded-[var(--radius-sm)] border bg-transparent px-4 py-3 text-[0.9rem]"
          style={{ borderColor: 'var(--env-card-line)', color: 'var(--env-fg)' }}
        >
          <option value="">{t.ui.leadForm.choose}</option>
          {opportunities.map((o) => (
            <option key={o.id} value={o.id} style={{ background: '#0b0912' }}>
              {t.opportunityCategories[o.category]} · {t.opportunities[o.id].name}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="message" className="mt-5 block">
        <span className="kicker">{t.ui.leadForm.message}</span>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={set('message')}
          className="mt-2 w-full rounded-[var(--radius-sm)] border bg-transparent px-4 py-3 text-[0.9rem]"
          style={{ borderColor: 'var(--env-card-line)' }}
        />
      </label>

      <button
        type="submit"
        className="mt-7 w-full rounded-full px-6 py-3.5 text-[0.88rem] font-bold sm:w-auto"
        style={{ background: 'var(--color-gold)', color: '#16120a' }}
      >
        {t.ui.leadForm.submit}
      </button>
      <p className="mt-4 text-[0.74rem]" style={{ color: 'var(--env-faint)' }}>
        {t.ui.leadForm.demoNote}
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = 'text',
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="kicker">{label}</span>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2 w-full rounded-[var(--radius-sm)] border bg-transparent px-4 py-3 text-[0.9rem]"
        style={{ borderColor: error ? 'var(--color-magenta)' : 'var(--env-card-line)' }}
      />
      {error && (
        <span id={`${id}-error`} className="mt-1.5 block text-[0.76rem]" style={{ color: 'var(--color-magenta)' }}>
          {error}
        </span>
      )}
    </label>
  );
}
