'use client';

import { useMemo, useState } from 'react';
import { impactModules, opportunityCategories } from '@/data/sponsor';
import { SampleFlag } from '@/components/system/Pending';
import { useI18n } from '@/i18n/I18nProvider';

/**
 * BỘ ĐO TÁC ĐỘNG (§06).
 *
 * LUẬT: không bịa chỉ số. Mọi module đều để value = null cho tới khi có dữ liệu kiểm chứng.
 * Cái người xem thấy là KIẾN TRÚC ĐO LƯỜNG: đo cái gì, ở bước nào của hành trình,
 * và một công cụ ước lượng mà người dùng TỰ nhập giả định của mình — con số hiện ra
 * được ghi rõ là do họ nhập, không phải cam kết của lễ hội.
 */
export function ImpactEngine() {
  const { t } = useI18n();
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
        <p className="kicker mb-5">{t.ui.impact.whatKicker}</p>
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
                  <span className="text-[0.86rem] font-semibold">{t.impactModules[m.id].label}</span>
                  <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: color }} aria-hidden />
                </span>
                <span className="mt-1.5 block text-[0.74rem] leading-snug" style={{ color: 'var(--env-faint)' }}>
                  {t.impactModules[m.id].description}
                </span>
                <span
                  className="num-oversized mt-3 block text-[1.5rem]"
                  style={{ color: m.value === null ? 'var(--env-line)' : color }}
                >
                  {m.value === null ? '—' : m.value.toLocaleString('vi-VN')}
                </span>
                <span className="kicker mt-1 block text-[0.56rem]">
                  {m.value === null ? t.ui.impact.waiting : t.impactModules[m.id].unit}
                </span>
              </li>
            );
          })}
        </ul>
        <p className="mt-5 text-[0.78rem] leading-relaxed" style={{ color: 'var(--env-faint)' }}>
          {t.ui.impact.emptyNote}
        </p>
      </div>

      {/* Công cụ ước lượng do người dùng tự nhập */}
      <div className="surface p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="kicker">{t.ui.impact.estimateKicker}</p>
          <SampleFlag>{t.ui.impact.yourNumbers}</SampleFlag>
        </div>
        <p className="mt-4 text-[0.86rem] leading-relaxed" style={{ color: 'var(--env-muted)' }}>
          {t.ui.impact.estimateLead}
        </p>

        <div className="mt-7 space-y-6">
          <Field
            label={t.ui.impact.inAudience}
            value={attendance}
            min={0}
            max={50000}
            step={500}
            suffix={t.ui.impact.unitPeople}
            onChange={setAttendance}
          />
          <Field
            label={t.ui.impact.visitRate}
            value={engageRate}
            min={1}
            max={60}
            step={1}
            suffix="%"
            onChange={setEngageRate}
          />
          <Field
            label={t.ui.impact.touchpointsInput}
            value={touchpoints}
            min={1}
            max={8}
            step={1}
            suffix={t.ui.impact.unitPoints}
            onChange={setTouchpoints}
          />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Derived label={t.ui.impact.derivedVisits} value={hasInput ? derived.onsite : null} />
          <Derived label={t.ui.impact.derivedImpressions} value={hasInput ? derived.impressions : null} />
          <Derived
            label={t.ui.impact.derivedLeads}
            value={null}
            text={hasInput ? `${derived.leadsLow.toLocaleString('vi-VN')} – ${derived.leadsHigh.toLocaleString('vi-VN')}` : '—'}
          />
          <Derived label={t.ui.impact.derivedTouchpoints} value={hasInput ? touchpoints : null} />
        </div>

        <p className="mt-6 text-[0.72rem] leading-relaxed" style={{ color: 'var(--env-faint)' }}>
          {t.ui.misc.estimateDisclaimer}
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
