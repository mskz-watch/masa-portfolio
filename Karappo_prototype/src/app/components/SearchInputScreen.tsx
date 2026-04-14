import { useState } from "react";
import svgPaths from "../../imports/svg-eclimh35jv";
import searchSvgPaths from "../../imports/svg-btbohhemit";

/* ───── SVG icon helpers ───── */

function BackArrowIcon() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 16 16">
      <path
        d={svgPaths.p33efc000}
        stroke="#6A7282"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.99948"
      />
    </svg>
  );
}

function SearchFieldIcon() {
  return (
    <svg className="size-4" fill="none" viewBox="0 0 15.999 15.999">
      <path
        d={svgPaths.p3741e400}
        stroke="#99A1AF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33325"
      />
      <path
        d={svgPaths.pd03f540}
        stroke="#99A1AF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33325"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 22 16">
      <path
        d={searchSvgPaths.p3ad3eb80}
        stroke="#6A7282"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.99985"
      />
    </svg>
  );
}

function HistoryIcon() {
  return (
    <svg className="size-4 shrink-0" fill="none" viewBox="0 0 15.999 15.999">
      <path
        d={svgPaths.p1dc58080}
        stroke="#99A1AF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33325"
      />
      <path
        d="M1.99988 1.99988V5.333H5.333"
        stroke="#99A1AF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33325"
      />
      <path
        d={svgPaths.p6279456}
        stroke="#99A1AF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33325"
      />
    </svg>
  );
}

function TrendIcon() {
  return (
    <svg className="size-3 shrink-0" fill="none" viewBox="0 0 11.9921 11.9921">
      <g clipPath="url(#clip-trend)">
        <path
          d={svgPaths.p3d30a600}
          stroke="#6A7282"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.99934"
        />
        <path
          d={svgPaths.p292cfdc0}
          stroke="#6A7282"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.99934"
        />
      </g>
      <defs>
        <clipPath id="clip-trend">
          <rect fill="white" height="11.9921" width="11.9921" />
        </clipPath>
      </defs>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="size-3" fill="none" viewBox="0 0 6.99454 6.99454">
      <path
        d={searchSvgPaths.p20f66580}
        stroke="#6A7282"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.999221"
      />
      <path
        d={searchSvgPaths.p5cab880}
        stroke="#6A7282"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.999221"
      />
    </svg>
  );
}

/* ───── Data ───── */

const recentSearches = ["ナンプラー", "焼肉のたれ", "豆板醤"];
const trendingKeywords = ["クミンシード", "八角", "食べるラー油"];

/* ───── Main component ───── */

interface SearchInputScreenProps {
  onBack: () => void;
  onSearch: (query: string) => void;
}

export function SearchInputScreen({
  onBack,
  onSearch,
}: SearchInputScreenProps) {
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState(recentSearches);

  const handleSubmit = () => {
    const trimmed = query.trim();
    if (trimmed) {
      onSearch(trimmed);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleHistoryClick = (term: string) => {
    onSearch(term);
  };

  const handleTrendingClick = (keyword: string) => {
    onSearch(keyword);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="flex flex-col w-full h-full bg-[#fafaf9]">
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
                <SearchFieldIcon />
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="使いたい調味料を検索"
                className="bg-transparent w-full outline-none font-['Noto_Sans_JP',sans-serif] text-[16px] text-[rgba(10,10,10,0.8)] tracking-[-0.31px] placeholder:text-[rgba(10,10,10,0.5)]"
                autoFocus
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

      {/* ── Content ── */}
      <div className="flex-1 overflow-y-auto bg-white">
        {/* Recent searches */}
        {history.length > 0 && (
          <div className="px-4 pt-4 flex flex-col gap-2">
            {/* Header */}
            <div className="flex items-center justify-between">
              <span
                className="font-['Noto_Sans_JP',sans-serif] text-xs text-[#6a7282]"
                style={{ fontWeight: 700 }}
              >
                最近の検索
              </span>
              <button
                className="font-['Noto_Sans_JP',sans-serif] text-xs text-[#2A5A94]"
                style={{ fontWeight: 500 }}
                onClick={clearHistory}
              >
                クリア
              </button>
            </div>

            {/* History items */}
            <div className="flex flex-col">
              {history.map((term, idx) => (
                <button
                  key={term}
                  className="flex items-center gap-3 py-3 w-full text-left"
                  onClick={() => handleHistoryClick(term)}
                  style={{
                    borderBottom:
                      idx < history.length - 1
                        ? "0.6px solid #f9fafb"
                        : "none",
                  }}
                >
                  <HistoryIcon />
                  <span
                    className="font-['Noto_Sans_JP',sans-serif] text-sm text-[#364153] tracking-[-0.15px]"
                    style={{ fontWeight: 500 }}
                  >
                    {term}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Trending keywords */}
        <div className="px-4 pt-4 flex flex-col gap-3">
          <div
            className="border-t border-[#f9fafb] pt-4"
            style={history.length > 0 ? {} : { borderTop: "none", paddingTop: 0 }}
          >
            {/* Header */}
            <div className="flex items-center gap-1.5 mb-3">
              <TrendIcon />
              <span
                className="font-['Noto_Sans_JP',sans-serif] text-xs text-[#2A5A94]"
                style={{ fontWeight: 700 }}
              >
                急上昇キーワード
              </span>
            </div>

            {/* Keyword pills */}
            <div className="flex items-center gap-2 flex-wrap">
              {trendingKeywords.map((keyword) => (
                <button
                  key={keyword}
                  className="bg-[#f9fafb] border border-[#f3f4f6] rounded-full px-4 py-2"
                  onClick={() => handleTrendingClick(keyword)}
                >
                  <span
                    className="font-['Noto_Sans_JP',sans-serif] text-sm text-[#364153] tracking-[-0.15px]"
                    style={{ fontWeight: 500 }}
                  >
                    {keyword}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}