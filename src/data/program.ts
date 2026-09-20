/**
 * Hệ lịch trình (§08).
 *
 * TRUNG THỰC VỀ GIỜ: ngày tổ chức và khung giờ chính thức CHƯA được ban tổ chức chốt,
 * nên lịch dưới đây dùng "phút kể từ lúc mở cổng" (offsetMin) chứ không phải giờ đồng hồ.
 * Giao diện hiển thị theo khối giờ và độ dài, kèm nhãn "dữ liệu minh hoạ".
 * Khi có giờ thật: đặt `timesConfirmed = true` và `openingClock = 'HH:MM'` -> toàn hệ thống
 * tự hiện giờ đồng hồ, không phải sửa component nào.
 */
import { activities, type Activity, type DayPhase } from './activities';

export const timesConfirmed = false;
export const openingClock: string | null = null;

export interface ScheduleEntry {
  id: string;
  activityId: string;
  stageId: string;
  phase: DayPhase;
  /** Phút kể từ lúc mở cổng. Thứ tự và độ dài là thật về mặt vận hành; giờ đồng hồ thì chưa. */
  offsetMin: number;
  durationMin: number;
}

export const stages = [
  { id: 'main-stage', zoneId: 'concert' },
  { id: 'talk-stage', zoneId: 'tram-gap' },
  { id: 'plaza', zoneId: 'main-plaza' },
  { id: 'mega', zoneId: 'mega-zone' },
  { id: 'pet-zone', zoneId: 'pets' },
  { id: 'art-zone', zoneId: 'visual-art' },
  { id: 'food-court', zoneId: 'food' },
  { id: 'vip-lounge', zoneId: 'vip' },
] as const;

const stageFor: Record<string, string> = {
  'main-plaza': 'plaza',
  'tram-gap': 'talk-stage',
  'mega-zone': 'mega',
  pets: 'pet-zone',
  'visual-art': 'art-zone',
  food: 'food-court',
  concert: 'main-stage',
  vip: 'vip-lounge',
  'color-run': 'plaza',
};

const phaseStart: Record<DayPhase, number> = { morning: 0, midday: 180, golden: 420, night: 540 };

/** Lịch dựng từ danh mục hoạt động — một nguồn dữ liệu, không chép tay hai nơi. */
export const schedule: ScheduleEntry[] = (() => {
  const cursor: Record<DayPhase, number> = { morning: 0, midday: 0, golden: 0, night: 0 };
  return activities
    .slice()
    .sort((a, b) => a.slot - b.slot)
    .map((a) => {
      const offset = phaseStart[a.phase] + cursor[a.phase];
      // Hoạt động chạy cả buổi (chợ, triển lãm) không đẩy con trỏ đi hết độ dài của nó.
      cursor[a.phase] += Math.min(a.durationMin, 45);
      return {
        id: `slot-${a.id}`,
        activityId: a.id,
        stageId: stageFor[a.zoneId] ?? 'plaza',
        phase: a.phase,
        offsetMin: offset,
        durationMin: a.durationMin,
      };
    });
})();

export const scheduleWithActivity: (ScheduleEntry & { activity: Activity })[] = schedule.map((s) => ({
  ...s,
  activity: activities.find((a) => a.id === s.activityId)!,
}));

/** Nhãn thời gian: giờ thật nếu đã chốt, còn không thì mốc tương đối. */
export function timeLabel(offsetMin: number): string {
  if (timesConfirmed && openingClock) {
    const [h, m] = openingClock.split(':').map(Number);
    const total = h * 60 + m + offsetMin;
    return `${String(Math.floor(total / 60) % 24).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
  }
  const h = Math.floor(offsetMin / 60);
  const m = offsetMin % 60;
  return h === 0 ? `+${m}′` : m === 0 ? `+${h}h` : `+${h}h${String(m).padStart(2, '0')}`;
}

/** Hai mục có trùng khung không — dùng cho cảnh báo trong "Lịch của tôi". */
export function overlaps(a: ScheduleEntry, b: ScheduleEntry): boolean {
  return a.offsetMin < b.offsetMin + b.durationMin && b.offsetMin < a.offsetMin + a.durationMin;
}
