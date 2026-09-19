'use client';

import { useMemo, useState } from 'react';
import { impactModules, opportunityCategories } from '@/data/sponsor';
import { SampleFlag } from '@/components/system/Pending';

/**
 * BỘ ĐO TÁC ĐỘNG (§06).
 *
 * LUẬT: không bịa chỉ số. Mọi module đều để value = null cho tới khi có dữ liệu kiểm chứng.
 * Cái người xem thấy là KIẾN TRÚC ĐO LƯỜNG: đo cái gì, ở bước nào của hành trình,
 * và một công cụ ước lượng mà người dùng TỰ nhập giả định của mình — con số hiện ra
 * được ghi rõ là do họ nhập, không phải cam kết của lễ hội.
 */
export function ImpactEngine() {
  const [attendance, setAttendance] = useState(0);
  const [engageRate, setEngageRate] = useState(20);
  const [touchpoints, setTouchpoints] = useState(3);

  const derived = useMemo(() => {
    const onsite = Math.round((attendance * engageRate) / 100);
    return {
      onsite,
      impressions: onsite * touchpoints,
      leadsLow: Math.round(onsite * 0.08),
      leadsHigh: Math.round(onsite * 0.22),
    };
  }, [attendance, engageRate, touchpoints]);

  const hasInput = attendance > 0;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      {/* Kiến trúc đo lường */}
      <div>
        <p className="kicker mb-5">Đo cái gì</p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {impactModules.map((m) => {
            const color = opportunityCategories[m.category].color;
            return (
              <li
                key={m.id}
                className="rounded-[var(--radius-sm)] border p-4"
                style={{ borderColor: 'var(--env-card-line)' }}
              >
                <span className="flex items-baseline justify-between gap-2">
                  <span className="text-[0.86rem] font-semibold">{m.label}</span>
                  <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: color }} aria-hidden />
                </span>
                <span className="mt-1.5 block text-[0.74rem] leading-snug" style={{ color: 'var(--env-faint)' }}>
                  {m.description}
                </span>
                <span
                  className="num-oversized mt-3 block text-[1.5rem]"
                  style={{ color: m.value === null ? 'var(--env-line)' : color }}
                >
                  {m.value === null ? '—' : m.value.toLocaleString('vi-VN')}
                </span>
                <span className="kicker mt-1 block text-[0.56rem]">
                  {m.value === null ? 'chờ số liệu thật' : m.unit}
                </span>
              </li>
            );
          })}
        </ul>
        <p className="mt-5 text-[0.78rem] leading-relaxed" style={{ color: 'var(--env-faint)' }}>
          Mọi ô đang để trống vì lễ hội chưa có số liệu được kiểm chứng. Cấu trúc này nối thẳng được vào dữ liệu thật
          sau sự kiện — không có con số nào ở đây được đưa ra như một cam kết.
        </p>
      </div>

      {/* Công cụ ước lượng do người dùng tự nhập */}
      <div className="surface p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="kicker">Tự ước lượng</p>
          <SampleFlag>Số do bạn nhập</SampleFlag>
        </div>
        <p className="mt-4 text-[0.86rem] leading-relaxed" style={{ color: 'var(--env-muted)' }}>
          Nhập giả định của chính thương hiệu bạn để xem cấu trúc đo lường hoạt động thế nào. Lễ hội chưa công bố
          quy mô, nên phần mềm không tự điền bất kỳ con số nào.
        </p>

        <div className="mt-7 space-y-6">
          <Field
            label="Số khách bạn giả định có mặt"
            value={attendance}
            min={0}
            max={50000}
            step={500}
            suffix="người"
            onChange={setAttendance}
          />
          <Field
            label="Tỉ lệ ghé hoạt động của bạn"
            value={engageRate}
            min={1}
            max={60}
            step={1}
            suffix="%"
            onChange={setEngageRate}
          />
          <Field
            label="Số điểm chạm trong hành trình"
            value={touchpoints}
            min={1}
            max={8}
            step={1}
            suffix="điểm"
            onChange={setTouchpoints}
          />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Derived label="Lượt ghé hoạt động" value={hasInput ? derived.onsite : null} />
          <Derived label="Lượt nhìn thấy thương hiệu" value={hasInput ? derived.impressions : null} />
          <Derived
            label="Khoảng khách tiềm năng"
            value={null}
            text={hasInput ? `${derived.leadsLow.toLocaleString('vi-VN')} – ${derived.leadsHigh.toLocaleString('vi-VN')}` : '—'}
          />
          <Derived label="Điểm chạm mỗi khách" value={hasInput ? touchpoints : null} />
        </div>

        <p className="mt-6 text-[0.72rem] leading-relaxed" style={{ color: 'var(--env-faint)' }}>
          Kết quả trên là phép nhân từ giả định bạn vừa nhập, không phải dự báo của ban tổ chức và không phải cam kết
          trong hợp đồng.
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  min,
  max,
  step,
  suffix,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix: string;
  onChange: (v: number) => void;
}) {
  const id = `impact-${label.replace(/\s+/g, '-')}`;
  return (
    <div>
      <label htmlFor={id} className="flex items-baseline justify-between gap-3">
        <span className="text-[0.82rem] font-medium">{label}</span>
        <span className="num-oversized text-[1.05rem]" style={{ color: 'var(--env-accent)' }}>
          {value.toLocaleString('vi-VN')}
          <span className="ml-1 text-[0.7rem] font-normal" style={{ color: 'var(--env-faint)' }}>
            {suffix}
          </span>
        </span>
      </label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2.5 w-full accent-[var(--color-magenta)]"
      />
    </div>
  );
}

function Derived({ label, value, text }: { label: string; value: number | null; text?: string }) {
  return (
    <div className="rounded-[var(--radius-sm)] border p-4" style={{ borderColor: 'var(--env-card-line)' }}>
      <p className="kicker text-[0.56rem]">{label}</p>
      <p className="num-oversized mt-2 text-[1.5rem]">
        {text ?? (value === null || value === 0 ? '—' : value.toLocaleString('vi-VN'))}
      </p>
    </div>
  );
}
