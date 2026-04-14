import { useState } from "react";
import type { RecipeDetail } from "./recipeData";
import { CookCompleteAnimation } from "./CookCompleteAnimation";

interface RecipeDetailScreenProps {
  recipe: RecipeDetail;
  onBack: () => void;
  onCook: () => void;
  pantryItemNames: string[];
}

export function RecipeDetailScreen({
  recipe,
  onBack,
  onCook,
  pantryItemNames,
}: RecipeDetailScreenProps) {
  const [liked, setLiked] = useState(false);
  const [showCookAnimation, setShowCookAnimation] = useState(false);
  const [cooked, setCooked] = useState(false);

  return (
    <div className="flex flex-col w-full flex-1 min-h-0 bg-white relative">
      {/* ── Scrollable content ── */}
      <div className="flex-1 overflow-y-auto pb-6">
        {/* Hero image */}
        <div className="relative w-full h-[260px]">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          {/* Badges on image */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <span className="bg-white/20 border border-white/30 rounded px-2.5 py-0.5 font-['Noto_Sans_JP',sans-serif] text-xs text-white" style={{ fontWeight: 500 }}>
              {recipe.time}
            </span>
            <span className="bg-white/20 border border-white/30 rounded px-2.5 py-0.5 font-['Noto_Sans_JP',sans-serif] text-xs text-white flex items-center gap-1" style={{ fontWeight: 500 }}>
              <svg className="size-3" fill="none" viewBox="0 0 12 12">
                <path d="M8 9.5C8 9.5 6.5 5.5 6.5 3.5C6.5 2.84 6.76 2.2 7.23 1.73C7.7 1.26 8.34 1 9 1C9.66 1 10.3 1.26 10.77 1.73C11.24 2.2 11.5 2.84 11.5 3.5C11.5 5.5 10 9.5 10 9.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
                <path d="M2 9.5C2 9.5 0.5 5.5 0.5 3.5C0.5 2.84 0.76 2.2 1.23 1.73C1.7 1.26 2.34 1 3 1C3.66 1 4.3 1.26 4.77 1.73C5.24 2.2 5.5 2.84 5.5 3.5C5.5 5.5 4 9.5 4 9.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
                <path d="M1 9.5H11" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
                <path d="M2.5 11H9.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
              </svg>
              {recipe.servings}
            </span>
          </div>
        </div>

        {/* Consumption highlight banner */}
        <div className="mx-4 mt-3 relative z-10 bg-gradient-to-r from-[#fff7ed] to-[#ffedd4] rounded-2xl px-4 py-3 border border-[#ffdbbf] shadow-[0px_2px_8px_0px_rgba(245,139,59,0.15)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-full bg-[#f58b3b] flex items-center justify-center">
                <svg className="size-4" fill="none" viewBox="0 0 16 16">
                  <path d="M8 2C8 2 4 6 4 9C4 10.06 4.42 11.08 5.17 11.83C5.92 12.58 6.94 13 8 13C9.06 13 10.08 12.58 10.83 11.83C11.58 11.08 12 10.06 12 9C12 6 8 2 8 2Z" fill="white" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-['Noto_Sans_JP',sans-serif] text-[12px] text-[#ca3500]" style={{ fontWeight: 500 }}>
                  {recipe.highlightTag}の消費量
                </span>
                <span className="font-['Noto_Sans_JP',sans-serif] text-[16px] text-[#ca3500]" style={{ fontWeight: 700 }}>
                  {recipe.consumptionAmount}
                </span>
              </div>
            </div>
            <div className="flex items-baseline">
              <span className="font-['Inter',sans-serif] text-[24px] text-[#f58b3b]" style={{ fontWeight: 900 }}>
                {recipe.consumptionMl.replace("ml", "")}
              </span>
              <span className="font-['Inter',sans-serif] text-sm text-[#f58b3b]" style={{ fontWeight: 700 }}>
                ml消費
              </span>
            </div>
          </div>
        </div>

        {/* ── Ingredients section ── */}
        <div className="px-6 pt-8 pb-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-4 bg-[#3e76bd] rounded-full" />
            <h3 className="font-['Noto_Sans_JP',sans-serif] text-[16px] text-[#1e2939] tracking-[-0.31px]" style={{ fontWeight: 700 }}>
              材料
            </h3>
          </div>

          <div className="flex flex-col">
            {recipe.ingredients.map((ing, idx) => {
              const isInPantry = pantryItemNames.some((n) => ing.name.includes(n) || n.includes(ing.name));
              const isHighlight = ing.isPantryItem;
              return (
                <div
                  key={ing.name}
                  className={`flex items-center justify-between py-2.5 ${
                    idx < recipe.ingredients.length - 1 ? "border-b border-[#f3f4f6]" : ""
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {(isHighlight || isInPantry) && (
                      <span className="size-1.5 rounded-full bg-[#3e76bd] shrink-0" />
                    )}
                    <span
                      className={`font-['Noto_Sans_JP',sans-serif] text-sm tracking-[-0.15px] ${
                        isHighlight || isInPantry ? "text-[#2A5A94]" : "text-[#364153]"
                      }`}
                      style={{ fontWeight: isHighlight || isInPantry ? 700 : 400 }}
                    >
                      {ing.name}
                    </span>
                  </div>
                  <span
                    className="font-['Noto_Sans_JP',sans-serif] text-sm text-[#6a7282] tracking-[-0.15px]"
                    style={{ fontWeight: 500 }}
                  >
                    {ing.amount}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Steps section ── */}
        <div className="px-6 pt-2 pb-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-4 bg-[#3e76bd] rounded-full" />
            <h3 className="font-['Noto_Sans_JP',sans-serif] text-[16px] text-[#1e2939] tracking-[-0.31px]" style={{ fontWeight: 700 }}>
              作り方
            </h3>
          </div>

          <div className="flex flex-col gap-6">
            {recipe.steps.map((step, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                {/* Number + line */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="size-6 rounded-full bg-[#3e76bd] flex items-center justify-center">
                    <span className="font-['Inter',sans-serif] text-xs text-white" style={{ fontWeight: 700 }}>
                      {idx + 1}
                    </span>
                  </div>
                  {idx < recipe.steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-[#f3f4f6] mt-1 min-h-[20px]" />
                  )}
                </div>
                {/* Text */}
                <p className="font-['Noto_Sans_JP',sans-serif] text-sm text-[#364153] tracking-[-0.15px] leading-[22px] pt-0.5">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Sticky header (semi-transparent) ── */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-white/80 backdrop-blur-sm border-b border-[#f3f4f6]">
        <div className="flex items-center gap-2 px-2 py-3">
          <button
            onClick={onBack}
            className="size-10 flex items-center justify-center rounded-full shrink-0"
          >
            <svg className="size-6" fill="none" viewBox="0 0 24 24">
              <path
                d="M8 15L1 8L8 1"
                stroke="#364153"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M1 8H15"
                stroke="#364153"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
          <p
            className="font-['Noto_Sans_JP',sans-serif] text-[16px] text-[#1e2939] tracking-[-0.31px] flex-1 truncate"
            style={{ fontWeight: 700 }}
          >
            {recipe.title}
          </p>
          <div className="flex items-center gap-1 shrink-0">
            {/* いいねボタン */}
            <button
              onClick={() => setLiked((prev) => !prev)}
              className="size-10 flex items-center justify-center rounded-full active:scale-90 transition-transform"
            >
              <svg className="size-[22px]" fill={liked ? "#F58B3B" : "none"} viewBox="0 0 24 24">
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  stroke={liked ? "#F58B3B" : "#364153"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
            {/* 共有ボタン */}
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: recipe.title, text: `${recipe.title}のレシピをチェック！` }).catch(() => {});
                }
              }}
              className="size-10 flex items-center justify-center rounded-full active:scale-90 transition-transform"
            >
              <svg className="size-[22px]" fill="none" viewBox="0 0 24 24">
                <path
                  d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7"
                  stroke="#364153"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <polyline
                  points="16 6 12 2 8 6"
                  stroke="#364153"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <line
                  x1="12" y1="2" x2="12" y2="15"
                  stroke="#364153"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── Fixed bottom "作った！" CTA ── */}
      <div className="shrink-0 bg-white px-6 pb-6 pt-3 border-t border-[#f3f4f6]">
        <button
          onClick={() => {
            if (!cooked) {
              setShowCookAnimation(true);
            }
          }}
          className={`w-full rounded-2xl py-4 flex items-center justify-center gap-2 shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] active:scale-[0.98] transition-all ${
            cooked
              ? "bg-[#f3f4f6]"
              : "bg-[#F58B3B]"
          }`}
          disabled={cooked}
        >
          {cooked ? (
            <>
              <svg className="size-5" fill="none" viewBox="0 0 24 24">
                <path d="M20 6L9 17L4 12" stroke="#99a1af" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
              </svg>
              <span
                className="font-['Noto_Sans_JP',sans-serif] text-[16px] text-[#99a1af] tracking-[-0.31px]"
                style={{ fontWeight: 700 }}
              >
                作りました!
              </span>
            </>
          ) : (
            <>
              <svg className="size-5" fill="none" viewBox="0 0 24 24">
                <path d="M12 2C12 2 8 8 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 8 12 2 12 2Z" fill="white" opacity="0.9" />
              </svg>
              <span
                className="font-['Noto_Sans_JP',sans-serif] text-[16px] text-white tracking-[-0.31px]"
                style={{ fontWeight: 700 }}
              >
                作った!
              </span>
            </>
          )}
        </button>
      </div>

      {/* ── Cook complete animation overlay ── */}
      <CookCompleteAnimation
        visible={showCookAnimation}
        onComplete={() => {
          setShowCookAnimation(false);
          setCooked(true);
          onCook();
        }}
        consumptionAmount={recipe.consumptionAmount}
        consumptionMl={recipe.consumptionMl}
        highlightTag={recipe.highlightTag}
      />
    </div>
  );
}