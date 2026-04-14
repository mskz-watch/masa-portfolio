import { useState } from "react";
import svgPaths from "../../imports/svg-btbohhemit";

/* ───── tiny SVG helpers (from imported Figma paths) ───── */

function BackArrowIcon() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 16 16">
      <path
        d={svgPaths.p34178300}
        stroke="#6A7282"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.99985"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="size-4" fill="none" viewBox="0 0 15.9875 15.9875">
      <path
        d={svgPaths.p14e8bb80}
        stroke="#99A1AF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33229"
      />
      <path
        d={svgPaths.p2bf08180}
        stroke="#99A1AF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33229"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="size-3" fill="none" viewBox="0 0 6.99454 6.99454">
      <path
        d={svgPaths.p20f66580}
        stroke="#6A7282"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.999221"
      />
      <path
        d={svgPaths.p5cab880}
        stroke="#6A7282"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.999221"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 22 16">
      <path
        d={svgPaths.p3ad3eb80}
        stroke="#6A7282"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.99985"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="size-4" fill="none" viewBox="0 0 15.9875 15.9875">
      <g clipPath="url(#clip-cal)">
        <path
          d="M5.32918 1.33229V3.99688"
          stroke="#99A1AF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33229"
        />
        <path
          d="M10.6584 1.33229V3.99688"
          stroke="#99A1AF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33229"
        />
        <path
          d={svgPaths.p1994e000}
          stroke="#99A1AF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33229"
        />
        <path
          d="M1.99844 6.66147H13.9891"
          stroke="#99A1AF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33229"
        />
      </g>
      <defs>
        <clipPath id="clip-cal">
          <rect fill="white" height="15.9875" width="15.9875" />
        </clipPath>
      </defs>
    </svg>
  );
}

function BigFireIcon() {
  return (
    <svg
      className="size-16 absolute right-0 top-4 opacity-50"
      fill="none"
      viewBox="0 0 63.984 63.984"
    >
      <path
        d={svgPaths.p3fed2500}
        stroke="#FFEDD4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5.332"
        opacity="0.5"
      />
    </svg>
  );
}

function MiniSearchIcon() {
  return (
    <svg className="size-3" fill="none" viewBox="0 0 11.9906 11.9906">
      <path
        d={svgPaths.p375bce00}
        stroke="#6A7282"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.999221"
      />
      <path
        d={svgPaths.pa22b000}
        stroke="#6A7282"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.999221"
      />
    </svg>
  );
}

function DropletIcon() {
  return (
    <svg className="size-3" fill="none" viewBox="0 0 11.9906 11.9906">
      <g clipPath="url(#clip-droplet)">
        <path
          d={svgPaths.p147dcf00}
          stroke="#6A7282"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.999221"
        />
        <path
          d={svgPaths.p150b1e80}
          stroke="#6A7282"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.999221"
        />
      </g>
      <defs>
        <clipPath id="clip-droplet">
          <rect fill="white" height="11.9906" width="11.9906" />
        </clipPath>
      </defs>
    </svg>
  );
}

function FireSmallIcon() {
  return (
    <svg className="size-3" fill="none" viewBox="0 0 11.9906 11.9906">
      <g clipPath="url(#clip-fire-s)">
        <path
          d={svgPaths.p223b6a00}
          stroke="#6A7282"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.999221"
        />
      </g>
      <defs>
        <clipPath id="clip-fire-s">
          <rect fill="white" height="11.9906" width="11.9906" />
        </clipPath>
      </defs>
    </svg>
  );
}

function ConsumptionFireIcon() {
  return (
    <svg className="size-3" fill="none" viewBox="0 0 11.9906 11.9906">
      <g clipPath="url(#clip-cf)">
        <path
          d={svgPaths.p147dcf00}
          stroke="#46ECD5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.999221"
        />
        <path
          d={svgPaths.p364dc7e0}
          stroke="#46ECD5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.999221"
        />
      </g>
      <defs>
        <clipPath id="clip-cf">
          <rect fill="white" height="11.9906" width="11.9906" />
        </clipPath>
      </defs>
    </svg>
  );
}

function ChevronRightIcon({ color = "white" }: { color?: string }) {
  return (
    <svg className="size-4" fill="none" viewBox="0 0 15.9875 15.9875">
      <path
        d={svgPaths.p3d5e3070}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33229"
      />
    </svg>
  );
}

function SortChevronIcon() {
  return (
    <svg className="size-3" fill="none" viewBox="0 0 11.9906 11.9906">
      <path
        d={svgPaths.p15c7500}
        stroke="#99A1AF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.999221"
      />
    </svg>
  );
}

/* ───── course day items ───── */

const courseItems = [
  {
    day: "月",
    title: "豚バラとキャベツのナンプラー炒め",
    sub: "飽きない和風",
    icon: "search" as const,
  },
  {
    day: "水",
    title: "エスニック風春雨スープ",
    sub: "余り野菜活用",
    icon: "droplet" as const,
  },
  {
    day: "金",
    title: "手羽元のナンプラー煮込み",
    sub: "大量消費！",
    icon: "fire" as const,
  },
];

/* ───── single recipe card items ───── */

const singleRecipes = [
  {
    id: 3,
    title: "ナンプラー香るチャーハン",
    image:
      "https://images.unsplash.com/photo-1757715377671-01c20cfa1880?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmillZCUyMHJpY2UlMjBhc2lhbiUyMGRpc2glMjBwbGF0ZXxlbnwxfHx8fDE3NzAzODcwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    consumption: "大さじ2",
    tags: ["ナンプラー", "チャーハン"],
  },
  {
    id: 2,
    title: "彩り野菜のナンプラーサラダ",
    image:
      "https://images.unsplash.com/photo-1552166539-7f3691985d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHZlZ2V0YWJsZSUyMHNhbGFkJTIwYm93bHxlbnwxfHx8fDE3NzAzODcyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    consumption: "小さじ2",
    tags: ["ナンプラー", "ヘルシー"],
  },
];

/* ───── sub-components ───── */

function CourseDayRow({
  day,
  title,
  sub,
  icon,
}: (typeof courseItems)[number]) {
  return (
    <div className="bg-[rgba(249,250,251,0.8)] rounded-[14px] w-full relative">
      <div className="absolute inset-0 border border-[#f3f4f6] rounded-[14px] pointer-events-none" />
      <div className="flex items-center gap-3 px-[13px] py-[13px]">
        {/* Day circle */}
        <div className="size-9 rounded-full bg-white flex items-center justify-center shrink-0 relative">
          <div className="absolute inset-0 border border-[#f3f4f6] rounded-full pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
          <span
            className="font-['Noto_Sans_JP',sans-serif] text-sm text-[#4a5565] tracking-[-0.15px]"
            style={{ fontWeight: 700 }}
          >
            {day}
          </span>
        </div>
        {/* Text */}
        <div className="flex flex-col gap-[2px] flex-1 min-w-0">
          <p
            className="font-['Noto_Sans_JP',sans-serif] text-sm text-[#1e2939] tracking-[-0.15px] truncate"
            style={{ fontWeight: 700 }}
          >
            {title}
          </p>
          <div className="flex items-center gap-1">
            {icon === "search" && <MiniSearchIcon />}
            {icon === "droplet" && <DropletIcon />}
            {icon === "fire" && <FireSmallIcon />}
            <span className="font-['Noto_Sans_JP',sans-serif] text-[12px] text-[#6a7282] tracking-[0.12px]">
              {sub}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SingleRecipeCard({
  title,
  image,
  consumption,
  tags,
  onClick,
}: (typeof singleRecipes)[number] & { onClick?: () => void }) {
  return (
    <div
      className="bg-white rounded-2xl w-full relative overflow-hidden cursor-pointer active:scale-[0.98] transition-transform"
      onClick={onClick}
    >
      <div className="absolute inset-0 border border-[#f3f4f6] rounded-2xl pointer-events-none z-10 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      {/* Image */}
      <div className="relative h-[128px] w-full bg-[#e5e7eb]">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <p
          className="font-['Noto_Sans_JP',sans-serif] text-[16px] text-[#1d293d] tracking-[-0.31px]"
          style={{ fontWeight: 700 }}
        >
          {title}
        </p>
        {/* Consumption badge */}
        <div className="flex items-center gap-1">
          <svg className="size-3" fill="none" viewBox="0 0 16 16">
            <path d="M8 2C8 2 4 6 4 9C4 10.06 4.42 11.08 5.17 11.83C5.92 12.58 6.94 13 8 13C9.06 13 10.08 12.58 10.83 11.83C11.58 11.08 12 10.06 12 9C12 6 8 2 8 2Z" fill="#F58B3B" />
          </svg>
          <span className="font-['Noto_Sans_JP',sans-serif] text-xs text-[#f58b3b]" style={{ fontWeight: 700 }}>
            {consumption}消費
          </span>
        </div>
        <div className="flex items-center gap-[4px]">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#f3f4f6] rounded px-2 py-[2px] font-['Noto_Sans_JP',sans-serif] text-[12px] text-[#6a7282] tracking-[0.12px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   Main exported component
   ═══════════════════════════════════════════════════════════ */

interface SearchResultsScreenProps {
  onBack: () => void;
  initialQuery?: string;
  onCourseConfirm?: (query: string) => void;
  onRecipeTap?: (recipeId: number) => void;
}

export function SearchResultsScreen({
  onBack,
  initialQuery = "",
  onCourseConfirm,
  onRecipeTap,
}: SearchResultsScreenProps) {
  const [query, setQuery] = useState(initialQuery);

  const hasResults = query.trim().length > 0;

  return (
    <div className="flex flex-col w-full h-full bg-[#fffcf4]">
      {/* ── Search header bar ── */}
      <div className="bg-white w-full shrink-0 relative">
        <div className="absolute inset-0 border-b border-[#f3f4f6] pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
        <div className="flex items-center px-2 py-4 gap-2 relative">
          {/* Back button */}
          <button
            className="size-10 flex items-center justify-center rounded-full shrink-0"
            onClick={onBack}
          >
            <BackArrowIcon />
          </button>

          {/* Search input */}
          <div className="flex-1 relative">
            <div className="bg-[#f3f4f6] rounded-full flex items-center pl-10 pr-10 py-3 relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <SearchIcon />
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="使いたい調味料を検索"
                className="bg-transparent w-full outline-none font-['Noto_Sans_JP',sans-serif] text-[16px] text-[rgba(10,10,10,0.8)] tracking-[-0.31px] placeholder:text-[rgba(10,10,10,0.5)]"
              />
              {query && (
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#e5e7eb] rounded-full size-5 flex items-center justify-center"
                  onClick={() => setQuery("")}
                >
                  <CloseIcon />
                </button>
              )}
            </div>
          </div>

          {/* Cart button */}
          <button className="size-10 flex items-center justify-center rounded-full shrink-0">
            <CartIcon />
          </button>
        </div>
      </div>

      {/* ── Scrollable content ── */}
      <div className="flex-1 overflow-y-auto">
        {!hasResults ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center h-full px-6">
            <p className="font-['Noto_Sans_JP',sans-serif] text-sm text-[#99a1af]">
              使いきりたい調味料を入力してください
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {/* ── Weekly course section ── */}
            <div className="px-4 pt-4 flex flex-col gap-3">
              {/* Suggestion label */}
              <div className="flex items-center gap-2">
                <CalendarIcon />
                <span
                  className="font-['Noto_Sans_JP',sans-serif] text-xs text-[#6a7282]"
                  style={{ fontWeight: 500 }}
                >
                  まずは1週間、試してみませんか？
                </span>
              </div>

              {/* Course card */}
              <div className="bg-white rounded-2xl shadow-[0px_4px_20px_-4px_#c1c1c1] overflow-hidden relative">
                {/* Decorative background */}
                <div className="absolute -top-10 right-0 size-32 bg-[#fff7ed] opacity-50 rounded-bl-full" />

                {/* Content */}
                <div className="relative p-5 flex flex-col gap-4">
                  {/* Badge + heading */}
                  <div className="flex flex-col gap-2 items-start">
                    <span
                      className="bg-[#eb6e10] text-white font-['Noto_Sans_JP',sans-serif] text-xs px-4 py-1 rounded shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] tracking-[0.12px]"
                      style={{ fontWeight: 700 }}
                    >
                      おすすめ
                    </span>
                    <h3
                      className="font-['Noto_Sans_JP',sans-serif] text-xl text-[#1e2939] tracking-[-0.45px]"
                      style={{ fontWeight: 700 }}
                    >
                      1週間で確実に減らすコース
                    </h3>
                    {/* Orange tip */}
                    <div className="bg-[rgba(255,247,237,0.8)] rounded-[10px] px-[13px] py-[5px] relative">
                      <div className="absolute inset-0 border border-[#ffedd4] rounded-[10px] pointer-events-none" />
                      <span
                        className="font-['Noto_Sans_JP',sans-serif] text-xs text-[#ca3500]"
                        style={{ fontWeight: 500 }}
                      >
                        一般的なボトル(150ml)の1/2以上を使えます！
                      </span>
                    </div>
                  </div>

                  {/* Day items */}
                  <div className="flex flex-col gap-3">
                    {courseItems.map((item) => (
                      <CourseDayRow key={item.day} {...item} />
                    ))}
                  </div>

                  {/* Total consumption */}
                  <div className="flex items-end justify-between px-1">
                    <span
                      className="font-['Noto_Sans_JP',sans-serif] text-xs text-[#99a1af]"
                      style={{ fontWeight: 700 }}
                    >
                      このコースの合計消費量
                    </span>
                    <div className="flex items-baseline">
                      <span
                        className="font-['Inter',sans-serif] text-[30px] text-[#ff6900] tracking-[0.4px]"
                        style={{ fontWeight: 900 }}
                      >
                        120
                      </span>
                      <span
                        className="font-['Inter',sans-serif] text-[16px] text-[#ff6900] tracking-[-0.31px]"
                        style={{ fontWeight: 700 }}
                      >
                        ml
                      </span>
                    </div>
                  </div>

                  {/* CTA button */}
                  <div className="flex justify-center">
                    <button
                      className="bg-[#eb6e10] rounded-[14px] px-6 py-3 flex items-center justify-center gap-4 shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] w-[280px] active:scale-[0.98] transition-transform"
                      onClick={() => onCourseConfirm?.(query)}
                    >
                      <span
                        className="font-['Noto_Sans_JP',sans-serif] text-[16px] text-white text-center tracking-[-0.31px]"
                        style={{ fontWeight: 700 }}
                      >
                        このコースで決定
                      </span>
                      <ChevronRightIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Single recipes section ── */}
            <div className="px-6 pt-4 pb-6 flex flex-col gap-4">
              {/* ── Monthly course section ── */}
              <div className="flex flex-col gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <CalendarIcon />
                  <span
                    className="font-['Noto_Sans_JP',sans-serif] text-xs text-[#6a7282]"
                    style={{ fontWeight: 500 }}
                  >
                    じっくり計画して使い切りたいなら
                  </span>
                </div>

                <div className="bg-white rounded-2xl shadow-[0px_4px_20px_-4px_#c1c1c1] overflow-hidden relative">
                  {/* Decorative bg */}
                  <div className="absolute -top-8 right-0 size-28 bg-[#f0fdf4] opacity-60 rounded-bl-full" />

                  <div className="relative p-5 flex flex-col gap-4">
                    {/* Badge + heading */}
                    <div className="flex flex-col gap-2 items-start">
                      <span
                        className="bg-[#00A63E] text-white font-['Noto_Sans_JP',sans-serif] text-xs px-2 py-1 rounded shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] tracking-[0.12px]"
                        style={{ fontWeight: 700 }}
                      >
                        しっかり使い切り
                      </span>
                      <h3
                        className="font-['Noto_Sans_JP',sans-serif] text-xl text-[#1e2939] tracking-[-0.45px]"
                        style={{ fontWeight: 700 }}
                      >
                        1ヶ月で完全に使い切るコース
                      </h3>
                      <div className="bg-[rgba(240,253,244,0.8)] rounded-[10px] px-[13px] py-[5px] relative">
                        <div className="absolute inset-0 border border-[#bbf7d0] rounded-[10px] pointer-events-none" />
                        <span
                          className="font-['Noto_Sans_JP',sans-serif] text-xs text-[#15803d]"
                          style={{ fontWeight: 500 }}
                        >
                          1ヶ月で300mlをまるごと使い切れます！
                        </span>
                      </div>
                    </div>

                    {/* January Calendar */}
                    {(() => {
                      const cookingDays = new Set([2, 4, 6, 8, 10, 13, 15, 17, 20, 22, 24, 27, 29, 31]);
                      const weekdays = ["月", "火", "水", "木", "金", "土", "日"];
                      // Jan 2026 starts on Thursday (index 3 in Mon-based)
                      const startOffset = 3;
                      const totalDays = 31;
                      const cells: (number | null)[] = [
                        ...Array(startOffset).fill(null),
                        ...Array.from({ length: totalDays }, (_, i) => i + 1),
                      ];
                      while (cells.length % 7 !== 0) cells.push(null);

                      return (
                        <div className="bg-[rgba(249,250,251,0.8)] rounded-[14px] border border-[#f3f4f6] p-3.5">
                          {/* Month label */}
                          <div className="flex items-center justify-center gap-1.5 mb-3">
                            <CalendarIcon />
                            <span
                              className="font-['Noto_Sans_JP',sans-serif] text-xs text-[#4a5565]"
                              style={{ fontWeight: 700 }}
                            >
                              2026年 1月
                            </span>
                          </div>
                          {/* Weekday headers */}
                          <div className="grid grid-cols-7 gap-y-1 mb-1">
                            {weekdays.map((d) => (
                              <div key={d} className="flex items-center justify-center">
                                <span
                                  className="font-['Noto_Sans_JP',sans-serif] text-[12px] text-[#99a1af]"
                                  style={{ fontWeight: 700 }}
                                >
                                  {d}
                                </span>
                              </div>
                            ))}
                          </div>
                          {/* Day grid */}
                          <div className="grid grid-cols-7 gap-y-0.5">
                            {cells.map((day, idx) => {
                              const isCooking = day !== null && cookingDays.has(day);
                              return (
                                <div
                                  key={idx}
                                  className="flex items-center justify-center h-[30px]"
                                >
                                  {day !== null && (
                                    <div
                                      className={`size-[26px] rounded-full flex items-center justify-center ${
                                        isCooking
                                          ? "bg-[#00A63E] text-white"
                                          : "text-[#6a7282]"
                                      }`}
                                    >
                                      <span
                                        className="font-['Inter',sans-serif] text-[12px]"
                                        style={{ fontWeight: isCooking ? 700 : 500 }}
                                      >
                                        {day}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                          {/* Legend */}
                          <div className="flex items-center gap-3 mt-2.5 pt-2.5 border-t border-[#f3f4f6]">
                            <div className="flex items-center gap-1.5">
                              <div className="size-2.5 rounded-full bg-[#00A63E]" />
                              <span className="font-['Noto_Sans_JP',sans-serif] text-[12px] text-[#6a7282]">
                                調理する日（{cookingDays.size}日間）
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })()}

                    {/* Total consumption */}
                    <div className="flex items-end justify-between px-1">
                      <span
                        className="font-['Noto_Sans_JP',sans-serif] text-xs text-[#99a1af]"
                        style={{ fontWeight: 700 }}
                      >
                        1ヶ月の合計消費量
                      </span>
                      <div className="flex items-baseline">
                        <span
                          className="font-['Inter',sans-serif] text-[30px] text-[#00A63E] tracking-[0.4px]"
                          style={{ fontWeight: 900 }}
                        >
                          300
                        </span>
                        <span
                          className="font-['Inter',sans-serif] text-[16px] text-[#00A63E] tracking-[-0.31px]"
                          style={{ fontWeight: 700 }}
                        >
                          ml
                        </span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex justify-center">
                      <button
                        className="bg-[#00A63E] rounded-[14px] px-6 py-3 flex items-center justify-center gap-4 shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] w-[280px] active:scale-[0.98] transition-transform"
                        onClick={() => onCourseConfirm?.(query)}
                      >
                        <span
                          className="font-['Noto_Sans_JP',sans-serif] text-[16px] text-white text-center tracking-[-0.31px]"
                          style={{ fontWeight: 700 }}
                        >
                          1ヶ月コースで決定
                        </span>
                        <ChevronRightIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section header */}
              <div className="flex items-center justify-between">
                <span
                  className="font-['Noto_Sans_JP',sans-serif] text-sm text-[#364153] tracking-[-0.15px]"
                  style={{ fontWeight: 700 }}
                >
                  単品で作りたいならコレ！
                </span>
                <button className="bg-white rounded-[10px] px-[10px] py-[5px] flex items-center gap-1 relative">
                  <div className="absolute inset-0 border border-[#e5e7eb] rounded-[10px] pointer-events-none" />
                  <span
                    className="font-['Noto_Sans_JP',sans-serif] text-xs text-[#99a1af] text-center"
                    style={{ fontWeight: 500 }}
                  >
                    消費量が多い順
                  </span>
                  <div className="rotate-90">
                    <SortChevronIcon />
                  </div>
                </button>
              </div>

              {/* Recipe cards */}
              <div className="flex flex-col gap-4">
                {singleRecipes.map((recipe) => (
                  <SingleRecipeCard
                    key={recipe.id}
                    {...recipe}
                    onClick={() => onRecipeTap?.(recipe.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}