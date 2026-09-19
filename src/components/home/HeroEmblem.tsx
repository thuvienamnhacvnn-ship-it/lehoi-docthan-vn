/**
 * Biểu tượng chính đặt đè lên banner.
 *
 * Ảnh hero có sẵn một biểu tượng do AI vẽ trên bầu trời nhưng mềm và nhoè. Ở đây đặt đúng
 * bản PNG nền trong suốt vào chính chỗ đó để biểu tượng sắc nét và nổi hẳn lên, kèm nhịp
 * sáng–tối chậm và các ánh sao nhấp nháy lan ra xung quanh.
 *
 * Không dùng JS: toàn bộ chuyển động là CSS nên không tốn thêm một dòng mã chạy trên máy khách.
 * Người chọn giảm chuyển động thì biểu tượng vẫn hiện, chỉ đứng yên.
 */

/** Vị trí các ánh sao quanh biểu tượng, theo % của khung chứa. Cố định để server và máy khách vẽ giống nhau. */
const SPARKS: { x: number; y: number; size: number; delay: number; dur: number }[] = [
  { x: 8, y: 26, size: 14, delay: 0, dur: 3.4 },
  { x: 20, y: 8, size: 10, delay: 900, dur: 4.2 },
  { x: 33, y: 48, size: 8, delay: 1800, dur: 3.8 },
  { x: 46, y: 4, size: 16, delay: 400, dur: 4.6 },
  { x: 58, y: 22, size: 9, delay: 2400, dur: 3.2 },
  { x: 71, y: 6, size: 12, delay: 1300, dur: 4.0 },
  { x: 84, y: 30, size: 15, delay: 2000, dur: 3.6 },
  { x: 94, y: 14, size: 8, delay: 600, dur: 4.4 },
  { x: 4, y: 58, size: 11, delay: 2800, dur: 3.9 },
  { x: 17, y: 78, size: 9, delay: 1500, dur: 4.1 },
  { x: 30, y: 92, size: 13, delay: 300, dur: 3.5 },
  { x: 50, y: 84, size: 10, delay: 2200, dur: 4.3 },
  { x: 66, y: 94, size: 8, delay: 1100, dur: 3.7 },
  { x: 79, y: 74, size: 14, delay: 2600, dur: 4.5 },
  { x: 92, y: 60, size: 10, delay: 1700, dur: 3.3 },
  { x: 60, y: 60, size: 7, delay: 3000, dur: 4.7 },
];

export function HeroEmblem() {
  return (
    <div
      aria-hidden
      className={
        // Điện thoại: nhỏ, căn giữa, nằm hẳn phía trên khối chữ.
        // Từ md trở lên: lệch sang phải 10cm và to gấp đôi như yêu cầu — chặn ở 20vw để
        // màn hình hẹp không bị mép khung cắt mất logo.
        'pointer-events-none absolute left-1/2 top-[4%] w-[46vw] -translate-x-1/2 ' +
        'md:left-[calc(50%+min(10cm,20vw))] md:top-[calc(var(--nav-h)-6px)] md:w-[min(35vw,456px)]'
      }
    >
      {/* Quầng sáng thở phía sau */}
      <span className="obn-emblem-halo" />

      <img
        src="/assets/KIT-01/02-emblem-trong-suot-960.webp"
        srcSet="/assets/KIT-01/02-emblem-trong-suot-480.webp 480w, /assets/KIT-01/02-emblem-trong-suot-960.webp 960w"
        sizes="(max-width: 768px) 86vw, min(52vw, 680px)"
        alt=""
        width={960}
        height={960}
        fetchPriority="high"
        className="obn-emblem relative block w-full"
      />

      {/* Ánh sao lan ra quanh biểu tượng */}
      {SPARKS.map((s, i) => (
        <span
          key={i}
          className="obn-spark"
          style={
            {
              left: `${s.x}%`,
              top: `${s.y}%`,
              '--spark-size': `${s.size}px`,
              '--spark-delay': `${s.delay}ms`,
              '--spark-dur': `${s.dur}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
