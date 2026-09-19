'use client';

import { useState } from 'react';
import { opportunities, opportunityCategories } from '@/data/sponsor';

/**
 * Biểu mẫu quan tâm hợp tác (§12).
 * Chưa có backend — form xác thực đầy đủ phía client rồi nói thẳng rằng dữ liệu
 * chưa được gửi đi đâu. Khi có endpoint thật, thay phần `submit` là xong.
 */
export function PartnerLeadForm() {
  const [form, setForm] = useState({ company: '', name: '', email: '', phone: '', interest: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!form.company.trim()) next.company = 'Hãy cho biết tên doanh nghiệp';
    if (!form.name.trim()) next.name = 'Hãy cho biết tên người liên hệ';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Email chưa đúng định dạng';
    setErrors(next);
    if (Object.keys(next).length === 0) setDone(true);
  };

  if (done) {
    return (
      <div className="surface p-8" role="status">
        <p className="kicker mb-3" style={{ color: 'var(--color-gold)' }}>
          Đã ghi nhận trong phiên này
        </p>
        <p className="font-display text-[1.3rem]">Cảm ơn {form.name.trim()}.</p>
        <p className="mt-3 text-[0.9rem] leading-relaxed" style={{ color: 'var(--env-muted)' }}>
          Website chưa nối với hệ thống nhận thông tin của ban tổ chức, nên nội dung bạn vừa điền{' '}
          <strong>chưa được gửi đi đâu cả</strong>. Kiến trúc biểu mẫu đã sẵn sàng: khi có địa chỉ nhận, dữ liệu sẽ
          chạy thẳng về đó.
        </p>
        <button
          type="button"
          onClick={() => setDone(false)}
          className="mt-6 rounded-full border px-5 py-2.5 text-[0.82rem] font-semibold"
          style={{ borderColor: 'var(--env-card-line)' }}
        >
          Điền lại
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="surface p-6 sm:p-8" noValidate>
      <p className="font-display text-[1.3rem]">Gửi thông tin hợp tác</p>
      <p className="mt-2 text-[0.85rem]" style={{ color: 'var(--env-faint)' }}>
        Cho biết thương hiệu của bạn quan tâm tới phần nào, đội ngũ lễ hội sẽ dựng đề xuất tương ứng.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field id="company" label="Doanh nghiệp" value={form.company} onChange={set('company')} error={errors.company} />
        <Field id="name" label="Người liên hệ" value={form.name} onChange={set('name')} error={errors.name} />
        <Field id="email" label="Email" type="email" value={form.email} onChange={set('email')} error={errors.email} />
        <Field id="phone" label="Điện thoại" type="tel" value={form.phone} onChange={set('phone')} />
      </div>

      <label htmlFor="interest" className="mt-5 block">
        <span className="kicker">Quan tâm tới</span>
        <select
          id="interest"
          value={form.interest}
          onChange={set('interest')}
          className="mt-2 w-full rounded-[var(--radius-sm)] border bg-transparent px-4 py-3 text-[0.9rem]"
          style={{ borderColor: 'var(--env-card-line)', color: 'var(--env-fg)' }}
        >
          <option value="">— Chọn một hình thức —</option>
          {opportunities.map((o) => (
            <option key={o.id} value={o.id} style={{ background: '#0b0912' }}>
              {opportunityCategories[o.category].label} · {o.name}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="message" className="mt-5 block">
        <span className="kicker">Nội dung</span>
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
        Gửi thông tin
      </button>
      <p className="mt-4 text-[0.74rem]" style={{ color: 'var(--env-faint)' }}>
        Biểu mẫu đang ở chế độ chạy thử: dữ liệu không rời khỏi trình duyệt của bạn.
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
