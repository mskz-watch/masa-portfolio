import { useState } from "react";
import svgPaths from "../../imports/svg-lr6lw5q3lo";

/* ───── SVG icon helpers ───── */

function BackArrowIcon() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 16 16">
      <path
        d="M7.99791 14.9961L0.999738 7.99791L7.99791 0.999738"
        stroke="#6A7282"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.99985"
      />
    </svg>
  );
}

function SearchFieldIcon() {
  return (
    <svg className="size-5" fill="none" viewBox="0 0 23.9937 23.9937">
      <path
        d={svgPaths.pd624e80}
        stroke="#99A1AF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.99948"
      />
      <path
        d={svgPaths.p119c36b0}
        stroke="#99A1AF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.99948"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="size-3.5" fill="none" viewBox="0 0 20 20">
      <path
        d="M4 10L8 14L16 6"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
      />
    </svg>
  );
}

/* ───── Condiment data ───── */

const allCondiments = [
  { id: "1", name: "ナンプラー", category: "エスニック調味料", icon: "🫙" },
  { id: "2", name: "焼肉のたれ", category: "たれ・ソース", icon: "🍶" },
  { id: "3", name: "オイスターソース", category: "中華調味料", icon: "🫙" },
  { id: "4", name: "豆板醤", category: "中華調味料", icon: "🏺" },
  { id: "5", name: "レモン果汁", category: "果汁・酢", icon: "🍋" },
  { id: "6", name: "マヨネーズ", category: "たれ・ソース", icon: "🧴" },
  { id: "7", name: "ポン酢", category: "たれ・ソース", icon: "🍶" },
  { id: "8", name: "白だし", category: "和風調味料", icon: "🍶" },
  { id: "9", name: "ごま油", category: "油", icon: "🫙" },
  { id: "10", name: "味噌", category: "和風調味料", icon: "🏺" },
  { id: "11", name: "めんつゆ", category: "和風調味料", icon: "🍶" },
  { id: "12", name: "ケチャップ", category: "たれ・ソース", icon: "🧴" },
  { id: "13", name: "ウスターソース", category: "たれ・ソース", icon: "🍶" },
  { id: "14", name: "コチュジャン", category: "韓国調味料", icon: "🏺" },
  { id: "15", name: "バルサミコ酢", category: "果汁・酢", icon: "🫙" },
];

/* ───── Main component ───── */

export interface PantryItem {
  id: string;
  name: string;
  category: string;
  icon: string;
  addedAt: Date;
}

interface AddCondimentScreenProps {
  onBack: () => void;
  onAdd: (items: PantryItem[]) => void;
  existingIds: string[];
}

export function AddCondimentScreen({
  onBack,
  onAdd,
  existingIds,
}: AddCondimentScreenProps) {
  const [query, setQuery] = useState("");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const filteredCondiments = allCondiments.filter(
    (c) =>
      !existingIds.includes(c.id) &&
      (query.trim() === "" || c.name.includes(query) || c.category.includes(query))
  );

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleAdd = () => {
    const items: PantryItem[] = allCondiments
      .filter((c) => selectedIds.has(c.id))
      .map((c) => ({ ...c, addedAt: new Date() }));
    onAdd(items);
  };

  return (
    <div className="flex flex-col w-full h-full bg-[#fffcf4]">
      {/* ── Header ── */}
      <div className="bg-white w-full shrink-0 relative">
        <div className="absolute inset-0 border-b border-[#f3f4f6] pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
        <div className="flex items-center px-2 py-3 gap-2 relative">
          <button
            className="size-10 flex items-center justify-center rounded-full shrink-0"
            onClick={onBack}
          >
            <BackArrowIcon />
          </button>
          <p
            className="font-['Noto_Sans_JP',sans-serif] text-[16px] text-[#1e2939] tracking-[-0.31px] flex-1"
            style={{ fontWeight: 700 }}
          >
            調味料を追加
          </p>
        </div>
      </div>

      {/* ── Search bar ── */}
      <div className="px-4 pt-4 pb-2 bg-white">
        <div className="bg-[#f3f4f6] rounded-full flex items-center pl-10 pr-4 py-3 relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <SearchFieldIcon />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="調味料名で検索"
            className="bg-transparent w-full outline-none font-['Noto_Sans_JP',sans-serif] text-[16px] text-[rgba(10,10,10,0.8)] tracking-[-0.31px] placeholder:text-[rgba(10,10,10,0.35)]"

          />
        </div>
      </div>

      {/* ── Condiment list ── */}
      <div className="flex-1 overflow-y-auto px-4 pt-2 pb-28">
        {filteredCondiments.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <p className="font-['Noto_Sans_JP',sans-serif] text-sm text-[#99a1af]">
              該当する調味料が見つかりません
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {filteredCondiments.map((condiment) => {
              const isSelected = selectedIds.has(condiment.id);
              return (
                <button
                  key={condiment.id}
                  onClick={() => toggleSelect(condiment.id)}
                  className={`w-full rounded-2xl px-4 py-3.5 flex items-center gap-3 transition-all ${
                    isSelected
                      ? "bg-[#EAF1F9] border-2 border-[#3e76bd]"
                      : "bg-white border border-[#f3f4f6]"
                  }`}
                >
                  {/* Icon */}
                  <div className="size-10 rounded-full bg-[#f9fafb] flex items-center justify-center shrink-0 text-xl">
                    {condiment.icon}
                  </div>
                  {/* Text */}
                  <div className="flex flex-col items-start flex-1 min-w-0">
                    <span
                      className="font-['Noto_Sans_JP',sans-serif] text-[15px] text-[#1e2939] tracking-[-0.15px]"
                      style={{ fontWeight: 700 }}
                    >
                      {condiment.name}
                    </span>
                    <span className="font-['Noto_Sans_JP',sans-serif] text-[12px] text-[#99a1af]">
                      {condiment.category}
                    </span>
                  </div>
                  {/* Checkbox */}
                  <div
                    className={`size-5 rounded-[4px] flex items-center justify-center shrink-0 transition-colors ${
                      isSelected ? "bg-[#3e76bd]" : "border-2 border-[#d1d5dc] bg-white"
                    }`}
                  >
                    {isSelected && <CheckIcon />}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* ── Fixed bottom CTA ── */}
      <div className="sticky bottom-0 left-0 right-0 px-6 pb-8 pt-4 bg-gradient-to-t from-[#fffcf4] via-[#fffcf4] to-transparent">
        <button
          onClick={handleAdd}
          disabled={selectedIds.size === 0}
          className={`w-full rounded-2xl py-4 flex items-center justify-center gap-2 shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] active:scale-[0.98] transition-all ${
            selectedIds.size > 0
              ? "bg-[#1d293d]"
              : "bg-[#d1d5dc] cursor-not-allowed"
          }`}
        >
          <span
            className="font-['Noto_Sans_JP',sans-serif] text-[16px] text-white tracking-[-0.31px]"
            style={{ fontWeight: 700 }}
          >
            {selectedIds.size > 0
              ? `${selectedIds.size}件をパントリーに追加`
              : "追加する調味料を選択"}
          </span>
        </button>
      </div>
    </div>
  );
}