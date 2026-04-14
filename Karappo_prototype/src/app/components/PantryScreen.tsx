import { useState } from "react";
import svgPaths from "../../imports/svg-l5x1v2n4q9";
import type { PantryItem } from "./AddCondimentScreen";

// Prototype fixed date: February 5, 2026 (early Feb for easier calendar demo)
const MOCK_TODAY = new Date(2026, 1, 5);

/* ───── SVG icons ───── */

function TrashIcon() {
  return (
    <svg className="size-4" fill="none" viewBox="0 0 16 16">
      <path
        d="M2 4H14"
        stroke="#F87171"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33"
      />
      <path
        d="M5.33 4V2.67C5.33 2.31 5.47 1.97 5.72 1.72C5.97 1.47 6.31 1.33 6.67 1.33H9.33C9.69 1.33 10.03 1.47 10.28 1.72C10.53 1.97 10.67 2.31 10.67 2.67V4M12.67 4V13.33C12.67 13.69 12.53 14.03 12.28 14.28C12.03 14.53 11.69 14.67 11.33 14.67H4.67C4.31 14.67 3.97 14.53 3.72 14.28C3.47 14.03 3.33 13.69 3.33 13.33V4H12.67Z"
        stroke="#F87171"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33"
      />
    </svg>
  );
}

function SearchHeaderIcon() {
  return (
    <svg className="size-4" fill="none" viewBox="0 0 15.999 15.999">
      <path
        d={svgPaths.p3741e400}
        stroke="#6A7282"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33325"
      />
      <path
        d={svgPaths.pd03f540}
        stroke="#6A7282"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33325"
      />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 23.9937 23.9937">
      <path
        d={svgPaths.p2f2d30f0}
        stroke="#00A63E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.99948"
      />
      <path
        d={svgPaths.p33bd8f80}
        stroke="#00A63E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.99948"
      />
      <path
        d={svgPaths.pd068d80}
        stroke="#00A63E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.99948"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg className="size-5" fill="none" viewBox="0 0 19.9964 19.9964">
      <path
        d={svgPaths.p31c05d00}
        stroke="#D1D5DC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.66636"
      />
    </svg>
  );
}

/* ───── My食材 data ───── */

export interface MyIngredient {
  id: string;
  name: string;
  addedAt: Date;
}

const defaultIngredientOptions = [
  "キャベツ", "玉ねぎ", "にんじん", "じゃがいも", "ほうれん草",
  "もやし", "長ねぎ", "大根", "トマト", "ピーマン",
  "鶏むね肉", "豚バラ肉", "豚ひき肉", "鶏もも肉", "牛切り落とし",
  "卵", "豆腐", "こんにゃく", "しめじ", "えのき",
  "ご飯", "うどん", "パスタ", "食パン",
];

/* ───── Main component ───── */

interface PantryScreenProps {
  items: PantryItem[];
  onRemove: (id: string) => void;
  onAddMore: () => void;
}

export function PantryScreen({ items, onRemove, onAddMore }: PantryScreenProps) {
  const [activeTab, setActiveTab] = useState<"condiments" | "ingredients">("condiments");
  const [schedules, setSchedules] = useState<
    Record<string, { startDate: string; endDate: string; totalMl: number; recipes: string[] }>
  >({});
  const [myIngredients, setMyIngredients] = useState<MyIngredient[]>([]);
  const [showAddIngredient, setShowAddIngredient] = useState(false);
  const [ingredientSearch, setIngredientSearch] = useState("");
  const [calendarOpenFor, setCalendarOpenFor] = useState<string | null>(null);
  const [rangeStart, setRangeStart] = useState<number | null>(null);
  const [rangeEnd, setRangeEnd] = useState<number | null>(null);
  const [calendarMonth, setCalendarMonth] = useState(() => {
    const now = MOCK_TODAY;
    return { year: now.getFullYear(), month: now.getMonth() };
  });

  const formatDate = (date: Date) => {
    const d = new Date(date);
    return `${d.getMonth() + 1}/${d.getDate()} 追加`;
  };

  const formatDateFull = (date: Date) => {
    const d = new Date(date);
    return `追加日: ${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  };

  const registerSchedule = (id: string) => {
    const today = new Date(MOCK_TODAY);
    const end = new Date(MOCK_TODAY);
    end.setDate(end.getDate() + 6);
    const fmt = (d: Date) => `${d.getMonth() + 1}/${d.getDate()}`;

    const mockRecipes: Record<string, { totalMl: number; recipes: string[] }> = {
      "1": { totalMl: 80, recipes: ["エスニック風サラダ", "ガパオライス", "春巻き"] },
      "2": { totalMl: 120, recipes: ["スタミナ野菜炒め", "焼肉丼", "ビビンバ"] },
      "3": { totalMl: 100, recipes: ["中華炒め", "あんかけ焼きそば", "チャーハン"] },
      "4": { totalMl: 90, recipes: ["麻婆豆腐", "回鍋肉", "担々麺"] },
      "5": { totalMl: 60, recipes: ["ドレッシング", "マリネ", "サワー煮"] },
      "6": { totalMl: 110, recipes: ["ポテトサラダ", "タルタルソース", "グラタン"] },
      "7": { totalMl: 100, recipes: ["鍋つゆ", "冷しゃぶ", "肉豆腐"] },
      "8": { totalMl: 90, recipes: ["茶碗蒸し", "おひたし", "だし巻き卵"] },
      "9": { totalMl: 70, recipes: ["ナムル", "中華スープ", "チャーハン"] },
      "10": { totalMl: 120, recipes: ["味噌汁", "味噌炒め", "味噌煮込み"] },
      "11": { totalMl: 100, recipes: ["そうめん", "煮物", "天ぷらつゆ"] },
      "12": { totalMl: 80, recipes: ["ナポリタン", "オムライス", "ミートソース"] },
      "13": { totalMl: 70, recipes: ["ハヤシライス", "焼きそば", "カレー"] },
      "14": { totalMl: 90, recipes: ["ビビンバ", "チゲ鍋", "トッポギ"] },
      "15": { totalMl: 60, recipes: ["カプレーゼ", "パスタサラダ", "マリネ"] },
    };

    const data = mockRecipes[id] || { totalMl: 80, recipes: ["レシピA", "レシピB", "レシピC"] };

    setSchedules((prev) => ({
      ...prev,
      [id]: {
        startDate: fmt(today),
        endDate: fmt(end),
        ...data,
      },
    }));
  };

  const removeSchedule = (id: string) => {
    setSchedules((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  const addIngredient = (name: string) => {
    const id = `ing-${Date.now()}-${name}`;
    setMyIngredients((prev) => [...prev, { id, name, addedAt: new Date() }]);
  };

  const removeIngredient = (id: string) => {
    setMyIngredients((prev) => prev.filter((i) => i.id !== id));
  };

  const existingIngredientNames = new Set(myIngredients.map((i) => i.name));
  const filteredOptions = defaultIngredientOptions.filter(
    (name) =>
      !existingIngredientNames.has(name) &&
      (ingredientSearch === "" || name.includes(ingredientSearch))
  );

  /* ── Calendar helpers ── */
  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getStartDayOfWeek = (year: number, month: number) => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1; // Monday = 0
  };
  const monthNames = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
  const weekdays = ["月", "火", "水", "木", "金", "土", "日"];

  const toggleDate = (day: number) => {
    // Two-tap travel-style range selection:
    // 1st tap (or tap when both set) → set start, clear end
    // 2nd tap (when start set, no end) → if day > start: set end; if day < start: reset start; if day === start: clear
    if (rangeStart === null || (rangeStart !== null && rangeEnd !== null)) {
      // Starting fresh or resetting
      setRangeStart(day);
      setRangeEnd(null);
    } else if (rangeEnd === null) {
      if (day > rangeStart) {
        setRangeEnd(day);
      } else if (day < rangeStart) {
        setRangeStart(day);
        setRangeEnd(null);
      } else {
        // Same day tapped — clear
        setRangeStart(null);
        setRangeEnd(null);
      }
    }
  };

  const openCalendar = (itemId: string) => {
    setCalendarOpenFor(itemId);
    const now = MOCK_TODAY;
    setRangeStart(now.getDate());
    setRangeEnd(null);
    setCalendarMonth({ year: now.getFullYear(), month: now.getMonth() });
  };

  const confirmCalendarSchedule = () => {
    if (!calendarOpenFor || rangeStart === null || rangeEnd === null) return;
    const { month } = calendarMonth;
    const m = month + 1;
    const startStr = `${m}/${rangeStart}`;
    const endStr = `${m}/${rangeEnd}`;
    const dayCount = rangeEnd - rangeStart + 1;

    const mockRecipes: Record<string, { totalMl: number; recipes: string[] }> = {
      "1": { totalMl: 80, recipes: ["エスニック風サラダ", "ガパオライス", "春巻き"] },
      "2": { totalMl: 120, recipes: ["スタミナ野菜炒め", "焼肉丼", "ビビンバ"] },
      "3": { totalMl: 100, recipes: ["中華炒め", "あんかけ焼きそば", "チャーハン"] },
      "4": { totalMl: 90, recipes: ["麻婆豆腐", "回鍋肉", "担々麺"] },
      "5": { totalMl: 60, recipes: ["ドレッシング", "マリネ", "サワー煮"] },
      "6": { totalMl: 110, recipes: ["ポテトサラダ", "タルタルソース", "グラタン"] },
      "7": { totalMl: 100, recipes: ["鍋つゆ", "冷しゃぶ", "肉豆腐"] },
      "8": { totalMl: 90, recipes: ["茶碗蒸し", "おひたし", "だし巻き卵"] },
      "9": { totalMl: 70, recipes: ["ナムル", "中華スープ", "チャーハン"] },
      "10": { totalMl: 120, recipes: ["味噌汁", "味噌炒め", "味噌煮込み"] },
      "11": { totalMl: 100, recipes: ["そうめん", "煮物", "天ぷらつゆ"] },
      "12": { totalMl: 80, recipes: ["ナポリタン", "オムライス", "ミートソース"] },
      "13": { totalMl: 70, recipes: ["ハヤシライス", "焼きそば", "カレー"] },
      "14": { totalMl: 90, recipes: ["ビビンバ", "チゲ鍋", "トッポギ"] },
      "15": { totalMl: 60, recipes: ["カプレーゼ", "パスタサラダ", "マリネ"] },
    };
    const data = mockRecipes[calendarOpenFor] || { totalMl: 80, recipes: ["レシピA", "レシピB", "レシピC"] };

    setSchedules((prev) => ({
      ...prev,
      [calendarOpenFor]: {
        startDate: startStr,
        endDate: endStr,
        ...data,
      },
    }));
    setCalendarOpenFor(null);
    setRangeStart(null);
    setRangeEnd(null);
  };

  return (
    <div className="flex flex-col w-full h-full bg-[#fffcf4]">
      {/* ── Header (Figma style) ── */}
      <div className="bg-[#fffcf4] w-full px-6 pt-4 pb-0 flex flex-col gap-4 shrink-0 sticky top-0 z-30">
        {/* Title row */}
        <div className="flex items-center justify-between">
          <h1
            className="font-['Noto_Sans_JP',sans-serif] text-lg text-[#1e2939] tracking-[-0.44px]"
            style={{ fontWeight: 700 }}
          >
            パントリー
          </h1>
          <button className="size-8 rounded-full bg-[#f3f4f6] flex items-center justify-center">
            <SearchHeaderIcon />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="bg-[#e5e7eb]/50 rounded-[14px] p-1 flex relative">
          {/* Sliding indicator */}
          <div
            className="absolute top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] bg-white rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-transform duration-200"
            style={{
              transform: activeTab === "condiments" ? "translateX(0)" : "translateX(100%)",
            }}
          />
          <button
            className="flex-1 relative z-10 py-2"
            onClick={() => setActiveTab("condiments")}
          >
            <span
              className={`font-['Noto_Sans_JP',sans-serif] text-sm text-center block tracking-[-0.15px] transition-colors ${
                activeTab === "condiments" ? "text-[#1e2939]" : "text-[#99a1af]"
              }`}
              style={{ fontWeight: 700 }}
            >
              調味料
            </span>
          </button>
          <button
            className="flex-1 relative z-10 py-2"
            onClick={() => setActiveTab("ingredients")}
          >
            <span
              className={`font-['Noto_Sans_JP',sans-serif] text-sm text-center block tracking-[-0.15px] transition-colors ${
                activeTab === "ingredients" ? "text-[#1e2939]" : "text-[#99a1af]"
              }`}
              style={{ fontWeight: 700 }}
            >
              My食材
            </span>
          </button>
        </div>
      </div>

      {/* ── Tab Content ── */}
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-20">
        {activeTab === "condiments" ? (
          /* ═══ 調味料 tab ═══ */
          items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 px-6">
              <div className="size-20 bg-[#f3f4f6] rounded-full flex items-center justify-center text-3xl">
                🫙
              </div>
              <p
                className="font-['Noto_Sans_JP',sans-serif] text-[16px] text-[#6a7282] text-center"
                style={{ fontWeight: 700 }}
              >
                まだ何も登録されていません
              </p>
              <p className="font-['Noto_Sans_JP',sans-serif] text-sm text-[#99a1af] text-center">
                使いきりたい調味料を追加して
                <br />
                レシピ提案を受けましょう
              </p>
              <button
                onClick={onAddMore}
                className="bg-[#3e76bd] rounded-2xl px-6 py-3 flex items-center gap-2 shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1)] active:scale-[0.98] transition-transform mt-2"
              >
                <svg className="size-5" fill="none" viewBox="0 0 24 24">
                  <path d="M5 12H19" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M12 5V19" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span
                  className="font-['Noto_Sans_JP',sans-serif] text-[15px] text-white"
                  style={{ fontWeight: 700 }}
                >
                  調味料を追加する
                </span>
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {/* Item count */}
              <div className="flex items-center justify-between px-1 mb-1">
                <span
                  className="font-['Noto_Sans_JP',sans-serif] text-xs text-[#6a7282]"
                  style={{ fontWeight: 700 }}
                >
                  登録済み ({items.length}件)
                </span>
                {Object.keys(schedules).length > 0 && (
                  <span className="font-['Noto_Sans_JP',sans-serif] text-[12px] text-[#3e76bd]" style={{ fontWeight: 500 }}>
                    {Object.keys(schedules).length}件スケジュール中
                  </span>
                )}
              </div>

              {/* Items */}
              {items.map((item) => {
                const schedule = schedules[item.id];
                return (
                  <div
                    key={item.id}
                    className={`bg-white rounded-2xl overflow-hidden border shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] ${
                      schedule ? "border-[#3e76bd]/30" : "border-[#f3f4f6]"
                    }`}
                  >
                    {/* Top row: icon, name, delete */}
                    <div className="px-4 pt-3.5 pb-2 flex items-center gap-3">
                      <div className="size-10 rounded-full bg-[#f9fafb] flex items-center justify-center shrink-0 text-xl">
                        {item.icon}
                      </div>
                      <div className="flex flex-col flex-1 min-w-0">
                        <span
                          className="font-['Noto_Sans_JP',sans-serif] text-[15px] text-[#1e2939] tracking-[-0.15px]"
                          style={{ fontWeight: 700 }}
                        >
                          {item.name}
                        </span>
                        <span className="font-['Noto_Sans_JP',sans-serif] text-[12px] text-[#99a1af]">
                          {formatDate(item.addedAt)}
                        </span>
                      </div>
                      <button
                        onClick={() => onRemove(item.id)}
                        className="size-8 rounded-full bg-[#fef2f2] flex items-center justify-center shrink-0 active:scale-90 transition-transform"
                      >
                        <TrashIcon />
                      </button>
                    </div>

                    {/* Schedule section */}
                    {schedule ? (
                      <div className="mx-4 mb-3 bg-gradient-to-r from-[#F0F5FB] to-[#EAF1F9] rounded-xl p-3 border border-[#9FC3E8]/40">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1.5">
                            <svg className="size-3.5 shrink-0" fill="none" viewBox="0 0 16 16">
                              <path d="M5.33 1.33V4" stroke="#2A5A94" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                              <path d="M10.67 1.33V4" stroke="#2A5A94" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                              <path d="M2 6.67H14" stroke="#2A5A94" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                              <path d="M13.33 2.67H2.67C1.93 2.67 1.33 3.26 1.33 4V13.33C1.33 14.07 1.93 14.67 2.67 14.67H13.33C14.07 14.67 14.67 14.07 14.67 13.33V4C14.67 3.26 14.07 2.67 13.33 2.67Z" stroke="#2A5A94" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                            </svg>
                            <span className="font-['Noto_Sans_JP',sans-serif] text-[12px] text-[#2A5A94]" style={{ fontWeight: 700 }}>
                              {schedule.startDate} 〜 {schedule.endDate}
                            </span>
                          </div>
                          <button
                            onClick={() => removeSchedule(item.id)}
                            className="font-['Noto_Sans_JP',sans-serif] text-[12px] text-[#99a1af] active:opacity-70"
                            style={{ fontWeight: 500 }}
                          >
                            解除
                          </button>
                        </div>
                        <div className="flex items-center gap-1 flex-wrap">
                          {schedule.recipes.map((name) => (
                            <span
                              key={name}
                              className="bg-white/70 rounded px-1.5 py-0.5 font-['Noto_Sans_JP',sans-serif] text-[12px] text-[#364153] border border-[#9FC3E8]/40"
                            >
                              {name}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : calendarOpenFor === item.id ? (
                      /* ── Inline calendar picker ── */
                      <div className="mx-4 mb-3 bg-white rounded-xl border border-[#3e76bd]/30 p-3">
                        {/* Month navigation */}
                        <div className="flex items-center justify-between mb-3">
                          <button
                            onClick={() => {
                              setCalendarMonth((prev) => {
                                const m = prev.month - 1;
                                return m < 0
                                  ? { year: prev.year - 1, month: 11 }
                                  : { year: prev.year, month: m };
                              });
                            }}
                            className="size-7 rounded-full bg-[#f3f4f6] flex items-center justify-center active:scale-90 transition-transform"
                          >
                            <svg className="size-3.5" fill="none" viewBox="0 0 24 24">
                              <path d="M15 18L9 12L15 6" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </button>
                          <span
                            className="font-['Noto_Sans_JP',sans-serif] text-sm text-[#1e2939]"
                            style={{ fontWeight: 700 }}
                          >
                            {calendarMonth.year}年 {monthNames[calendarMonth.month]}
                          </span>
                          <button
                            onClick={() => {
                              setCalendarMonth((prev) => {
                                const m = prev.month + 1;
                                return m > 11
                                  ? { year: prev.year + 1, month: 0 }
                                  : { year: prev.year, month: m };
                              });
                            }}
                            className="size-7 rounded-full bg-[#f3f4f6] flex items-center justify-center active:scale-90 transition-transform"
                          >
                            <svg className="size-3.5" fill="none" viewBox="0 0 24 24">
                              <path d="M9 18L15 12L9 6" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </button>
                        </div>

                        {/* Weekday headers */}
                        <div className="grid grid-cols-7 mb-1">
                          {weekdays.map((d) => (
                            <div key={d} className="flex items-center justify-center py-1">
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
                        {(() => {
                          const { year, month } = calendarMonth;
                          const totalDays = getDaysInMonth(year, month);
                          const startDay = getStartDayOfWeek(year, month);
                          const cells: (number | null)[] = [
                            ...Array(startDay).fill(null),
                            ...Array.from({ length: totalDays }, (_, i) => i + 1),
                          ];
                          while (cells.length % 7 !== 0) cells.push(null);

                          const today = MOCK_TODAY;
                          const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;
                          const todayDate = today.getDate();

                          return (
                            <div className="grid grid-cols-7 gap-y-0.5">
                              {cells.map((day, idx) => {
                                const isStartDate = day !== null && day === rangeStart;
                                const isEndDate = day !== null && day === rangeEnd;
                                const isToday = day !== null && isCurrentMonth && day === todayDate;
                                const isPast = day !== null && isCurrentMonth && day < todayDate;
                                const hasRange = rangeStart !== null && rangeEnd !== null;
                                const isInRange = day !== null && hasRange && day >= rangeStart! && day <= rangeEnd!;
                                const isRangeMiddle = isInRange && !isStartDate && !isEndDate;
                                return (
                                  <div
                                    key={idx}
                                    className="flex items-center justify-center relative h-[34px]"
                                  >
                                    {/* Range background band */}
                                    {day !== null && isInRange && (
                                      <div
                                        className="absolute top-[3px] bottom-[3px] bg-[#EAF1F9]"
                                        style={{
                                          left: isStartDate ? '50%' : 0,
                                          right: isEndDate ? '50%' : 0,
                                        }}
                                      />
                                    )}
                                    {day !== null && (
                                      <button
                                        onClick={() => !isPast && toggleDate(day)}
                                        disabled={isPast}
                                        className={`relative z-10 size-[28px] rounded-full flex items-center justify-center transition-colors ${
                                          isStartDate || isEndDate
                                            ? "bg-[#3e76bd] text-white shadow-[0_1px_3px_rgba(62,118,189,0.4)]"
                                            : isRangeMiddle
                                            ? "text-[#2A5A94]"
                                            : isToday
                                            ? "ring-1 ring-[#3e76bd] text-[#2A5A94]"
                                            : isPast
                                            ? "text-[#d1d5dc]"
                                            : "text-[#4a5565] active:bg-[#f3f4f6]"
                                        }`}
                                      >
                                        <span
                                          className="font-['Inter',sans-serif] text-[12px]"
                                          style={{ fontWeight: isStartDate || isEndDate || isToday || isRangeMiddle ? 700 : 500 }}
                                        >
                                          {day}
                                        </span>
                                      </button>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          );
                        })()}

                        {/* Selection info + buttons */}
                        <div className="mt-3 pt-3 border-t border-[#f3f4f6] flex flex-col gap-2.5">
                          {(() => {
                            const m = calendarMonth.month + 1;
                            if (rangeStart !== null && rangeEnd !== null) {
                              const days = rangeEnd - rangeStart + 1;
                              return (
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <span className="font-['Noto_Sans_JP',sans-serif] text-[12px] text-[#2A5A94] bg-[#EAF1F9] rounded-full px-2 py-0.5" style={{ fontWeight: 700 }}>
                                      {m}/{rangeStart}
                                    </span>
                                    <svg className="size-3" fill="none" viewBox="0 0 24 24">
                                      <path d="M5 12H19" stroke="#99a1af" strokeLinecap="round" strokeWidth="1.5" />
                                      <path d="M15 8L19 12L15 16" stroke="#99a1af" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                    </svg>
                                    <span className="font-['Noto_Sans_JP',sans-serif] text-[12px] text-[#2A5A94] bg-[#EAF1F9] rounded-full px-2 py-0.5" style={{ fontWeight: 700 }}>
                                      {m}/{rangeEnd}
                                    </span>
                                  </div>
                                  <span className="font-['Noto_Sans_JP',sans-serif] text-[12px] text-[#6a7282]">
                                    {days}日間
                                  </span>
                                </div>
                              );
                            } else if (rangeStart !== null) {
                              return (
                                <div className="flex items-center gap-2">
                                  <span className="font-['Noto_Sans_JP',sans-serif] text-[12px] text-[#2A5A94] bg-[#EAF1F9] rounded-full px-2 py-0.5" style={{ fontWeight: 700 }}>
                                    開始: {m}/{rangeStart}
                                  </span>
                                  <span className="font-['Noto_Sans_JP',sans-serif] text-[12px] text-[#99a1af]">
                                    → 終了日をタップ
                                  </span>
                                </div>
                              );
                            } else {
                              return (
                                <span className="font-['Noto_Sans_JP',sans-serif] text-[12px] text-[#99a1af]">
                                  開始日をタップしてください
                                </span>
                              );
                            }
                          })()}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => {
                                setCalendarOpenFor(null);
                                setRangeStart(null);
                                setRangeEnd(null);
                              }}
                              className="flex-1 bg-[#f3f4f6] rounded-xl py-2.5 flex items-center justify-center active:scale-[0.98] transition-transform"
                            >
                              <span
                                className="font-['Noto_Sans_JP',sans-serif] text-xs text-[#6a7282]"
                                style={{ fontWeight: 700 }}
                              >
                                キャンセル
                              </span>
                            </button>
                            <button
                              onClick={confirmCalendarSchedule}
                              disabled={rangeEnd === null}
                              className={`flex-1 rounded-xl py-2.5 flex items-center justify-center active:scale-[0.98] transition-transform ${
                                rangeEnd !== null
                                  ? "bg-[#3e76bd] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]"
                                  : "bg-[#e5e7eb]"
                              }`}
                            >
                              <span
                                className={`font-['Noto_Sans_JP',sans-serif] text-xs ${
                                  rangeEnd !== null ? "text-white" : "text-[#99a1af]"
                                }`}
                                style={{ fontWeight: 700 }}
                              >
                                登録する
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="mx-4 mb-3">
                        <button
                          onClick={() => openCalendar(item.id)}
                          className="w-full bg-[#f9fafb] rounded-xl py-2 flex items-center justify-center gap-1.5 border border-dashed border-[#d1d5dc] active:scale-[0.98] transition-transform"
                        >
                          <svg className="size-3.5" fill="none" viewBox="0 0 16 16">
                            <path d="M5.33 1.33V4" stroke="#3E76BD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                            <path d="M10.67 1.33V4" stroke="#3E76BD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                            <path d="M2 6.67H14" stroke="#3E76BD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                            <path d="M13.33 2.67H2.67C1.93 2.67 1.33 3.26 1.33 4V13.33C1.33 14.07 1.93 14.67 2.67 14.67H13.33C14.07 14.67 14.67 14.07 14.67 13.33V4C14.67 3.26 14.07 2.67 13.33 2.67Z" stroke="#3E76BD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                          </svg>
                          <span className="font-['Noto_Sans_JP',sans-serif] text-xs text-[#3e76bd]" style={{ fontWeight: 700 }}>
                            使い切りスケジュールを登録
                          </span>
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )
        ) : (
          /* ═══ My食材 tab ═══ */
          <div className="flex flex-col gap-3">
            {myIngredients.length === 0 && !showAddIngredient ? (
              <div className="flex flex-col items-center justify-center h-[60vh] gap-4 px-6">
                <div className="size-20 bg-[#f0fdf4] rounded-full flex items-center justify-center">
                  <LeafIcon />
                </div>
                <p
                  className="font-['Noto_Sans_JP',sans-serif] text-[16px] text-[#6a7282] text-center"
                  style={{ fontWeight: 700 }}
                >
                  My食材を登録しましょう
                </p>
                <p className="font-['Noto_Sans_JP',sans-serif] text-sm text-[#99a1af] text-center">
                  家にある定番食材を登録しておくと
                  <br />
                  レシピ提案の精度が上がります
                </p>
                <button
                  onClick={() => setShowAddIngredient(true)}
                  className="bg-[#00A63E] rounded-2xl px-6 py-3 flex items-center gap-2 shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1)] active:scale-[0.98] transition-transform mt-2"
                >
                  <svg className="size-5" fill="none" viewBox="0 0 24 24">
                    <path d="M5 12H19" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M12 5V19" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  <span
                    className="font-['Noto_Sans_JP',sans-serif] text-[15px] text-white"
                    style={{ fontWeight: 700 }}
                  >
                    食材を追加する
                  </span>
                </button>
              </div>
            ) : (
              <>
                {/* Registered ingredients */}
                {myIngredients.length > 0 && (
                  <>
                    <div className="flex items-center justify-between px-1 mb-1">
                      <span
                        className="font-['Noto_Sans_JP',sans-serif] text-xs text-[#6a7282]"
                        style={{ fontWeight: 700 }}
                      >
                        登録済み ({myIngredients.length}件)
                      </span>
                    </div>
                    {myIngredients.map((ing) => (
                      <div
                        key={ing.id}
                        className="bg-white rounded-[14px] px-4 py-4 flex items-center gap-3 border border-[#f3f4f6] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.05)]"
                      >
                        <div className="size-12 rounded-full bg-[#f0fdf4] flex items-center justify-center shrink-0">
                          <LeafIcon />
                        </div>
                        <div className="flex flex-col flex-1 min-w-0">
                          <span
                            className="font-['Noto_Sans_JP',sans-serif] text-[16px] text-[#1e2939] tracking-[-0.31px]"
                            style={{ fontWeight: 700 }}
                          >
                            {ing.name}
                          </span>
                          <span className="font-['Noto_Sans_JP',sans-serif] text-xs text-[#99a1af]">
                            {formatDateFull(ing.addedAt)}
                          </span>
                        </div>
                        <button
                          onClick={() => removeIngredient(ing.id)}
                          className="size-8 rounded-full bg-[#fef2f2] flex items-center justify-center shrink-0 active:scale-90 transition-transform"
                        >
                          <TrashIcon />
                        </button>
                      </div>
                    ))}
                  </>
                )}

                {/* Add button */}
                {!showAddIngredient && (
                  <button
                    onClick={() => setShowAddIngredient(true)}
                    className="w-full bg-[#f9fafb] rounded-[14px] py-3 flex items-center justify-center gap-2 border border-dashed border-[#d1d5dc] active:scale-[0.98] transition-transform mt-1"
                  >
                    <svg className="size-4" fill="none" viewBox="0 0 24 24">
                      <path d="M5 12H19" stroke="#00A63E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M12 5V19" stroke="#00A63E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    <span className="font-['Noto_Sans_JP',sans-serif] text-sm text-[#00A63E]" style={{ fontWeight: 700 }}>
                      食材を追加
                    </span>
                  </button>
                )}
              </>
            )}
          </div>
        )}
      </div>

      {/* ── Add ingredient bottom sheet ── */}
      {showAddIngredient && (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          <div
            className="absolute inset-0 bg-black/20"
            onClick={() => {
              setShowAddIngredient(false);
              setIngredientSearch("");
            }}
          />
          <div className="relative w-full max-w-[430px] bg-white rounded-t-3xl pt-4 pb-8 px-5 animate-[slideUp_0.3s_ease-out] max-h-[70vh] flex flex-col">
            {/* Handle */}
            <div className="flex justify-center mb-4">
              <div className="w-10 h-1 bg-[#e5e7eb] rounded-full" />
            </div>

            <h3
              className="font-['Noto_Sans_JP',sans-serif] text-lg text-[#1e2939] text-center mb-4 tracking-[-0.44px]"
              style={{ fontWeight: 700 }}
            >
              定番食材を追加
            </h3>

            {/* Search */}
            <div className="relative mb-4">
              <div className="bg-[#f3f4f6] rounded-full flex items-center pl-10 pr-4 py-2.5">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <SearchHeaderIcon />
                </div>
                <input
                  type="text"
                  value={ingredientSearch}
                  onChange={(e) => setIngredientSearch(e.target.value)}
                  placeholder="食材名で検索"
                  className="bg-transparent w-full outline-none font-['Noto_Sans_JP',sans-serif] text-sm text-[#1e2939] placeholder:text-[#99a1af]"
                  autoFocus
                />
              </div>
            </div>

            {/* Options */}
            <div className="flex-1 overflow-y-auto">
              <div className="flex flex-wrap gap-2">
                {filteredOptions.map((name) => (
                  <button
                    key={name}
                    onClick={() => addIngredient(name)}
                    className="bg-[#f9fafb] border border-[#e5e7eb] rounded-full px-3.5 py-2 flex items-center gap-1.5 active:scale-95 transition-transform"
                  >
                    <svg className="size-3.5" fill="none" viewBox="0 0 24 24">
                      <path d="M5 12H19" stroke="#00A63E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M12 5V19" stroke="#00A63E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    <span
                      className="font-['Noto_Sans_JP',sans-serif] text-sm text-[#364153] tracking-[-0.15px]"
                      style={{ fontWeight: 500 }}
                    >
                      {name}
                    </span>
                  </button>
                ))}
                {filteredOptions.length === 0 && ingredientSearch && (
                  <button
                    onClick={() => {
                      addIngredient(ingredientSearch);
                      setIngredientSearch("");
                    }}
                    className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-full px-3.5 py-2 flex items-center gap-1.5 active:scale-95 transition-transform"
                  >
                    <svg className="size-3.5" fill="none" viewBox="0 0 24 24">
                      <path d="M5 12H19" stroke="#00A63E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M12 5V19" stroke="#00A63E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    <span
                      className="font-['Noto_Sans_JP',sans-serif] text-sm text-[#00A63E] tracking-[-0.15px]"
                      style={{ fontWeight: 700 }}
                    >
                      「{ingredientSearch}」を追加
                    </span>
                  </button>
                )}
              </div>
            </div>

            {/* Done button */}
            <button
              onClick={() => {
                setShowAddIngredient(false);
                setIngredientSearch("");
              }}
              className="w-full mt-4 bg-[#1d293d] rounded-2xl py-3.5 flex items-center justify-center active:scale-[0.98] transition-transform shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1)]"
            >
              <span
                className="font-['Noto_Sans_JP',sans-serif] text-[16px] text-white tracking-[-0.31px]"
                style={{ fontWeight: 700 }}
              >
                完了
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}