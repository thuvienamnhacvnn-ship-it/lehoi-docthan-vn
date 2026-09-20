# ONE BEAT NIGHT — nền tảng số của lễ hội

Webapp cho **ONE BEAT NIGHT · LỄ HỘI ĐỘC THÂN** (TP.HCM), dựng theo
`E:\Works\Concert\ONE_BEAT_NIGHT_MASTER_BUILD_PROMPT_CLAUDE.docx`.

Next.js 15 · TypeScript · Tailwind v4 · không phụ thuộc thư viện ảnh runtime.

---

## Chạy

```bash
npm install
npm run assets        # sinh WebP + registry từ E:\Works\Concert (chạy lại khi có ảnh mới)
npm run dev           # http://localhost:3045
npm run build && npm start
npm run mobile-audit  # soát giao diện ở 390×844 (ảnh chụp + đo tràn ngang)
npm run shot -- / "Người trưởng thành" 1440 1700 audience   # chụp một khối bất kỳ
```

Hai script soi giao diện **tự bật server nếu chưa chạy rồi tự tắt**, nên không phụ thuộc vào
việc có `npm start` sẵn hay không.

Cổng **3045**. `npm run assets -- --force` để nén lại toàn bộ.

**Lưu ý:** tắt server trước khi `npm run build` — build đè lên `.next` trong lúc `next start` đang
đọc nó thì mất `BUILD_ID`, server bật lại sẽ báo “Could not find a production build”.

`npm run mobile-audit` mở Chrome qua giao thức gỡ lỗi và ép khung hình đúng 390px (Chrome headless
tự ép tối thiểu 500px nên không dùng `--window-size` được). Kết quả: ảnh chụp từng trang +
`report.json` trong `%TEMP%\obn-mobile`, kèm danh sách phần tử tràn ngang và vùng chạm dưới 32px.

---

## Ảnh: một nguồn sự thật duy nhất

Ảnh gốc **không nằm trong repo**. Nguồn là `E:\Works\Concert` + `assets-manifest.json`.

`scripts/build-assets.mjs` đọc manifest, dùng ffmpeg sinh:

- WebP ba chiều rộng `480 / 960 / 1600` vào `public/assets/<KIT>/<tên-gốc>-<w>.webp`
- LQIP base64 20px nhúng thẳng vào registry (mờ → nét, không thêm request)
- `src/data/assets.generated.ts` — registry đúng schema §05 của build prompt

164 ảnh (158 trong KIT-01…06 + 6 ảnh cũ dùng được) → **37 MB** dẫn xuất, so với ~350 MB PNG gốc.

**Luật ảnh đã cài vào code:**

- Tên file gốc không bao giờ đổi — registry giữ nguyên trong trường `filename`.
- Ảnh thiếu → khung placeholder có kiểm soát + `console.warn`, **không thay bằng ảnh khác**
  (`src/lib/assets.ts` → `getAsset`).
- Kiến trúc mở tới 180 slot; 16 slot còn trống nằm ở `plannedSlots`, không bịa file.
- Thư mục `B-logo-cu-da-bo` và `C-bang-ghep-khong-dung-cho-web` bị loại theo `rules.doNotUse`.
- Không component nào viết đường dẫn ảnh thẳng — tất cả đi qua `<AssetImage id="..." />`.

Khi có ảnh mới: bỏ file vào KIT tương ứng, thêm mục vào `assets-manifest.json`, chạy `npm run assets`.

---

## Trung thực nội dung (§26 — phần quan trọng nhất khi bàn giao)

Website **không hiển thị bất kỳ con số hay cái tên nào chưa được ban tổ chức xác nhận**.

| Chỗ trống | Hiện trên web là | Sửa ở đâu |
|---|---|---|
| Ngày, giờ, địa điểm, giá vé, ngày mở bán, line-up, quy mô, độ phủ, đơn vị tổ chức, email, hotline | chip “SẮP CÔNG BỐ” | `src/data/festival.ts` → `PLACEHOLDERS`, điền `value` |
| Khung giờ lịch trình | mốc tương đối `+1h30` + nhãn “dữ liệu minh hoạ” | `src/data/program.ts` → `timesConfirmed = true` và `openingClock = 'HH:MM'` |
| Chỉ số tác động của nhà tài trợ | ô trống “chờ số liệu thật” | `src/data/sponsor.ts` → `impactModules[].value` |
| Nghệ sĩ | mô tả vị trí biểu diễn, không có tên | `src/data/lineup.ts` → `name`, `bio`, `photoAssetId` |
| Video | ảnh KIT làm poster + nhãn “Video sẽ bổ sung” | `src/data/videos.ts` → `src` |
| Thanh toán | luồng dừng ở bước thanh toán, nói rõ chưa nối cổng nào | `src/components/tickets/TicketFlow.tsx` |
| Biểu mẫu đối tác / báo chí | xác thực đầy đủ, báo rõ dữ liệu chưa gửi đi đâu | `src/components/sponsor/PartnerLeadForm.tsx` |

Điền `value` trong `PLACEHOLDERS` là **mọi trang tự hiện thông tin thật**, không phải sửa component nào.

Mặt bằng bản đồ cũng vậy: hình học trong `src/data/zones.ts` là **sơ đồ quan hệ**, không phải toạ độ
đo đạc. Có bản vẽ thật thì thay `shape` là xong.

---

## Kiến trúc

```
src/
  app/                 16 route, toàn bộ render tĩnh
  components/
    media/             AssetImage · MediaWall · GalleryExplorer · VideoExperience
    experience/        ActivityRail (kéo ngang, lọc, thẻ nở)
    journey/           InfinityJourney — tương tác chữ ký
    map/               FestivalMap — zoom, kéo, chọn khu
    night/             LightMoment — canvas ánh sáng đồng bộ
    program/           ScheduleExplorer — 5 cách xem, cảnh báo trùng giờ
    sponsor/           OpportunityExplorer · ImpactEngine · PartnerNav · PartnerLeadForm
    tickets/           TicketFlow + ví vé
    account/           AccountPanel
    shell/ system/ ui/ nav, footer, loader, môi trường ngày–đêm, primitive
  data/                festival · activities · zones · program · lineup · tickets
                       · community · sponsor · videos · assets.generated
  hooks/               useFestivalState (yêu thích, lịch của tôi, ví vé)
  lib/assets.ts        registry tập trung
  types/assets.ts      schema ảnh
scripts/build-assets.mjs
```

### Môi trường thị giác NGÀY → GIỜ VÀNG → ĐÊM

Mỗi section khai báo `data-env-zone="day|golden|night"`. `EnvironmentProvider` đổi
`document.documentElement.dataset.env` theo section đang chiếm giữa màn hình; toàn bộ màu sắc là
biến CSS `--env-*` nên nền, chữ, viền và nav chuyển mượt theo mạch kể. Không cướp thao tác cuộn.

### Dàn đèn sân khấu

`src/components/night/StageLights.tsx` vẽ dàn moving head bằng canvas: các khối sáng hình nón
quét theo hai dao động lệch chu kỳ nên không lặp lại, cộng sáng ở chỗ giao nhau, và cứ mỗi ô nhịp
thì cả dàn "đánh" một cái.

`direction="up"` đặt đèn dưới sàn hắt ngược từ chân lên trời (banner dùng kiểu này, đúng với ánh
sáng trong ảnh hero); `direction="down"` là đèn treo trên giàn chiếu xuống (chân trang dùng).
Chỉ vẽ khi khối đó nằm trong màn hình, dừng khi cuộn qua hoặc khi chuyển tab, tắt hẳn khi người
dùng chọn giảm chuyển động.

### Hệ hiệu ứng rê chuột

`src/app/hover.css` — 32 hiệu ứng có tên, chia bốn nhóm: chữ (`fx-t-*`), icon (`fx-i-*`),
thẻ (`fx-c-*`), nút (`fx-b-*`). Tất cả chỉ động vào `transform / opacity / clip-path /
background-position`, chỉ bật trên thiết bị có con trỏ thật, và tắt sạch khi giảm chuyển động.
Hai hiệu ứng cần biết vị trí chuột (`fx-c-spot` đèn rọi bám con trỏ, `fx-c-tilt` nghiêng theo
con trỏ) lấy toạ độ từ `useSpotlight`, ghi thẳng vào biến CSS trong rAF — rê chuột không làm
React vẽ lại.

**Bẫy:** hiệu ứng dùng `background-clip: text` phải đặt `-webkit-text-fill-color: transparent`,
KHÔNG được đặt `color: transparent` — gradient đọc `currentColor`, để color trong suốt là mất chữ.

### Tương tác chữ ký

- **Hành trình vô cực** — cuộn vẽ đường vô cực (hình học từ logo) qua GẶP MÌNH → GẶP NHAU → GẶP HẠNH PHÚC
- **Ngày → Đêm** — môi trường trang đổi theo tiến trình lễ hội
- **Bản đồ vũ trụ lễ hội** — mười khu, zoom/kéo/lọc/chi tiết
- **Trình khám phá tài trợ** — 16 cơ hội × bốn bước ACTIVATE → ENGAGE → CONVERT → MEASURE
- **One Beat Light Moment** — canvas mô phỏng vòng tay LED, chỉ chạy khi trong màn hình
- **Bức tường ảnh từ tính** — ảnh nghiêng theo con trỏ, mở lớn kiểu điện ảnh

Tất cả tắt sạch khi `prefers-reduced-motion: reduce` (hành trình chuyển thành ba khối xếp dọc).

---

## Hiệu năng

- Không tải ảnh gốc: `srcset` chọn đúng 480/960/1600 theo `sizes`.
- LQIP nằm trên `background-image` của chính thẻ `<img>` — mờ → nét không cần JS.
- `aspect-ratio` đặt sẵn từ kích thước gốc → không nhảy layout.
- Canvas và video chỉ chạy khi lọt vào màn hình.
- Toàn bộ 16 route prerender tĩnh; JS dùng chung 102 kB.

## Tiếp cận

HTML ngữ nghĩa, thứ tự tiêu đề đúng, alt lấy từ manifest, focus nhìn thấy được, menu đóng bằng
`Esc`, `prefers-reduced-motion` được tôn trọng.

Đo ở 390×844 (`npm run mobile-audit`): **17/17 trang không tràn ngang, không ảnh hỏng**.
Vùng chạm nhỏ nhất còn lại là 28–31px ở các liên kết gạch chân đứng riêng một dòng — trên mức
tối thiểu 24px của WCAG 2.5.8. Ô radio chọn hạng vé cao 13px nhưng cả thẻ nhãn quanh nó đều bấm được.

---

## Việc còn lại (chờ ban tổ chức)

1. Ngày, giờ, địa điểm chính thức · bảng giá vé · line-up
2. Mặt bằng đo đạc thật để thay sơ đồ khu vực
3. Video (hero, day festival, teaser đêm nhạc, phim đối tác, after movie, 3 reel)
4. Cổng thanh toán + hệ thống nhận biểu mẫu (đối tác, báo chí)
5. Pháp nhân tổ chức, email hợp tác / báo chí, hotline
6. 16 ảnh còn thiếu để đủ kiến trúc 180

## Bản ứng dụng điện thoại (PWA)

Web này cài được về màn hình chính và chạy như một app thật. Không có dự án React Native
riêng — cùng một mã nguồn, thêm một lớp vỏ ứng dụng.

| Thành phần | Ở đâu | Việc |
| --- | --- | --- |
| Bản kê khai | `src/app/manifest.ts` | tên, icon, màu, 4 lối tắt khi nhấn giữ icon |
| Bộ icon | `scripts/build-icons.mjs` → `public/icons/` | 192/512/maskable/apple-touch, sinh bằng ffmpeg từ KIT-01 |
| favicon.ico | `scripts/build-favicon.mjs` | gói PNG 32px thành .ico (Vista-style) |
| Thợ chạy nền | `public/sw.js` | giữ vỏ app + trang `/offline`; ảnh/font lấy kho trước, HTML đi mạng trước |
| Đăng ký + đo màn hình | `src/components/app/AppRuntime.tsx` | `data-standalone`, biến `--vh-app` |
| Thanh tab dưới | `src/components/app/AppTabBar.tsx` | 5 tab, vệt vàng trượt, tự ẩn khi cuộn xuống |
| Mời cài app | `src/components/app/InstallPrompt.tsx` | chỉ hiện sau khi cuộn 1 màn; đóng là 2 tuần sau mới hỏi lại |

Thanh tab chỉ có dưới `lg`. Chiều cao của nó nằm trong biến `--app-bottom`; chỗ nào cần
chừa chỗ thì đọc biến đó, **đừng gõ số px riêng**.

### Bẫy đã gặp

- **Khung cuộn ngang kéo rộng cả trang.** Chrome cộng bề rộng cuộn bên trong
  `overflow-x: auto` vào `scrollWidth` của mọi phần tử cha. Trang không cuộn ngang được
  (body đang `overflow-x: clip`) nhưng thanh đầu trang và thanh tab — `position: fixed;
  inset-inline: 0` — ăn theo con số đó và phình ra ngoài màn hình, đẩy nút Vé/MENU đi mất.
  Chữa bằng `contain: paint` trên `.overflow-x-auto` (xem cuối `globals.css`).
- **Banner trang con đen kịt trên điện thoại.** Lớp `linear-gradient(100deg, …)` vốn để
  làm tối 1/3 bên trái; ở bề ngang 390px nó phủ kín màn hình. `PageHero` giờ dùng dốc ngang
  từ `md` trở lên, còn điện thoại dùng dốc dọc.
- **Banner trang chủ bị thanh tab cắt mất dòng cuối.** Chiều cao hero phải là
  `calc(100svh - var(--app-bottom))`, không phải `100svh`.
- **Đèn sân khấu quá dày trên màn hẹp.** `StageLights` tự giảm còn 55% số chùm và hạ sáng
  khi khung dưới 640px.

### Soát trước khi bàn giao

```
npm run build              # phải tắt server trước, nếu không .next/BUILD_ID bị xoá
node scripts/preflight.mjs # 17 trang: console, ảnh hỏng, alt, bậc tiêu đề, liên kết, tràn ngang, vùng chạm
node scripts/asset-usage.mjs
```

## Năm thứ tiếng

Việt (gốc), Anh, Trung giản thể, Nhật, Hàn. Mọi đường dẫn mang mã ngôn ngữ (`/vi/...`,
`/ja/tickets`); `/` do `src/middleware.ts` đưa về bản hợp với trình duyệt, và nhớ lựa chọn
của người dùng bằng cookie `obn-locale`.

| Thành phần | Ở đâu |
| --- | --- |
| Danh sách thứ tiếng, chọn theo Accept-Language | `src/i18n/config.ts` |
| Bộ chữ (một tệp mỗi thứ tiếng) | `src/i18n/messages/{vi,en,zh,ja,ko}.ts` |
| Mô tả ảnh cho 164 tấm | `src/i18n/alt/{vi,en,zh,ja,ko}.ts` |
| Đưa chữ xuống component chạy ở trình duyệt | `src/i18n/I18nProvider.tsx` |
| Lấy chữ ở phía máy chủ | `src/i18n/get-messages.ts` |
| Liên kết tự gắn mã ngôn ngữ | `src/components/system/L.tsx` |
| Nút đổi thứ tiếng | `src/components/shell/LanguageSwitcher.tsx` |

**Bản tiếng Việt là khuôn.** `src/i18n/types.ts` lấy kiểu từ `messages/vi.ts`, nên thêm một
câu ở bản gốc mà quên dịch là TypeScript báo lỗi ngay lúc build. Mô tả ảnh cũng vậy
(`src/i18n/alt/types.ts`).

**Dữ liệu không chứa chữ.** `src/data/*.ts` chỉ còn định danh, ảnh, màu, toạ độ, thời lượng.
Mọi câu chữ nằm trong bộ chữ và tra theo định danh (`t.activities[a.id].name`). Đây là lý do
không thể sót một câu: bỏ chữ khỏi dữ liệu thì mọi chỗ còn đọc chữ từ đó đều không biên dịch được.

### Thêm một thứ tiếng

1. Thêm mã vào `LOCALES` và `LOCALE_INFO` trong `src/i18n/config.ts`.
2. Chép `messages/vi.ts` và `alt/vi.ts` thành tệp mới rồi dịch — TypeScript sẽ chỉ ra mục nào thiếu.
3. Khai vào `get-messages.ts` và `alt/index.ts`.
4. `npm run build` — Next tự dựng thêm 17 trang cho thứ tiếng đó.

### Hai công cụ soát dịch

```
node scripts/i18n-audit.mjs    # dò chữ Việt còn viết thẳng trong mã nguồn
node scripts/i18n-verify.mjs   # mở 68 trang bằng Chrome, đọc chữ THẬT (kể cả alt và aria-label)
```

Công cụ thứ nhất không thấy chữ lấy từ biến, nên **phải chạy cả hai**. Hiện cả hai đều 0 lỗi.
