import { useState, useEffect } from "react";
import type { PantryItem } from "./AddCondimentScreen";

/* ───── Mock scanned items ───── */

const mockScanResults: Omit<PantryItem, "addedAt">[] = [
  { id: "s1", name: "オイスターソース", category: "中華調味料", icon: "🫙" },
  { id: "s2", name: "ポン酢", category: "たれ・ソース", icon: "🍶" },
  { id: "s3", name: "白だし", category: "和風調味料", icon: "🍶" },
];

/* ───── Main component ───── */

interface CameraScanScreenProps {
  onBack: () => void;
  onAdd: (items: PantryItem[]) => void;
  existingIds: string[];
}

export function CameraScanScreen({
  onBack,
  onAdd,
  existingIds,
}: CameraScanScreenProps) {
  const [phase, setPhase] = useState<"scanning" | "results">("scanning");
  const [detectedItems, setDetectedItems] = useState<typeof mockScanResults>([]);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  // Simulate scanning process
  useEffect(() => {
    if (phase !== "scanning") return;

    const available = mockScanResults.filter((i) => !existingIds.includes(i.id));

    const timers: ReturnType<typeof setTimeout>[] = [];
    available.forEach((item, idx) => {
      timers.push(
        setTimeout(() => {
          setDetectedItems((prev) => [...prev, item]);
          setSelectedIds((prev) => new Set([...prev, item.id]));
        }, 1200 + idx * 800)
      );
    });

    timers.push(
      setTimeout(() => {
        setPhase("results");
      }, 1200 + available.length * 800 + 600)
    );

    return () => timers.forEach(clearTimeout);
  }, [phase, existingIds]);

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleAdd = () => {
    const items: PantryItem[] = detectedItems
      .filter((i) => selectedIds.has(i.id))
      .map((i) => ({ ...i, addedAt: new Date() }));
    onAdd(items);
  };

  return (
    <div className="flex flex-col w-full h-full bg-[#0a0a0a] relative">
      {/* ── Header ── */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center px-2 py-3 gap-2">
        <button
          onClick={onBack}
          className="size-10 flex items-center justify-center rounded-full shrink-0"
        >
          <svg className="size-6" fill="none" viewBox="0 0 24 24">
            <path
              d="M8 15L1 8L8 1"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M1 8H15"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
        <p
          className="font-['Noto_Sans_JP',sans-serif] text-[16px] text-white tracking-[-0.31px] flex-1"
          style={{ fontWeight: 700 }}
        >
          カメラで撮影して追加
        </p>
      </div>

      {/* ── Viewfinder area ── */}
      <div className="flex-1 relative flex items-center justify-center overflow-hidden">
        {/* Simulated camera background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] to-[#16213e]" />

        {/* Corner brackets */}
        <div className="relative size-64">
          {/* Top-left */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#3e76bd] rounded-tl" />
          {/* Top-right */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#3e76bd] rounded-tr" />
          {/* Bottom-left */}
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#3e76bd] rounded-bl" />
          {/* Bottom-right */}
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#3e76bd] rounded-br" />

          {/* Scanning line animation */}
          {phase === "scanning" && (
            <div className="absolute left-2 right-2 h-0.5 bg-[#3e76bd] animate-[scanLine_2s_ease-in-out_infinite] shadow-[0px_0px_8px_2px_rgba(62,118,189,0.5)]" />
          )}

          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {phase === "scanning" ? (
              <>
                <svg className="size-10 mb-3 opacity-60" fill="none" viewBox="0 0 24 24">
                  <path d="M14.5 4H9.5L7 7H4C3.47 7 2.96 7.21 2.59 7.59C2.21 7.96 2 8.47 2 9V18C2 18.53 2.21 19.04 2.59 19.41C2.96 19.79 3.47 20 4 20H20C20.53 20 21.04 19.79 21.41 19.41C21.79 19.04 22 18.53 22 18V9C22 8.47 21.79 7.96 21.41 7.59C21.04 7.21 20.53 7 20 7H17L14.5 4Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" opacity="0.6" />
                  <path d="M12 16C13.66 16 15 14.66 15 13C15 11.34 13.66 10 12 10C10.34 10 9 11.34 9 13C9 14.66 10.34 16 12 16Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" opacity="0.6" />
                </svg>
                <p className="font-['Noto_Sans_JP',sans-serif] text-sm text-white/60" style={{ fontWeight: 500 }}>
                  バーコードや食材をかざしてください
                </p>
              </>
            ) : (
              <div className="size-14 rounded-full bg-[#3e76bd] flex items-center justify-center animate-[popIn_0.3s_ease-out]">
                <svg className="size-8" fill="none" viewBox="0 0 24 24">
                  <path d="M5 13L9 17L19 7" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Detected items panel ── */}
      <div className={`bg-white rounded-t-3xl px-5 pt-4 pb-8 transition-all duration-300 ${
        phase === "results" ? "min-h-[40%]" : detectedItems.length > 0 ? "min-h-[30%]" : "min-h-[20%]"
      }`}>
        {/* Drag handle */}
        <div className="flex justify-center mb-4">
          <div className="w-10 h-1 bg-[#e5e7eb] rounded-full" />
        </div>

        {detectedItems.length === 0 ? (
          <div className="flex flex-col items-center py-6">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-[#3e76bd] animate-pulse" />
              <p className="font-['Noto_Sans_JP',sans-serif] text-sm text-[#6a7282]" style={{ fontWeight: 500 }}>
                スキャン中...
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-3">
              <p className="font-['Noto_Sans_JP',sans-serif] text-sm text-[#1e2939]" style={{ fontWeight: 700 }}>
                {phase === "scanning" ? "検出中..." : `${detectedItems.length}件検出しました`}
              </p>
              {phase === "results" && (
                <span className="font-['Noto_Sans_JP',sans-serif] text-xs text-[#3e76bd]" style={{ fontWeight: 500 }}>
                  {selectedIds.size}件選択中
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2 mb-4">
              {detectedItems.map((item) => {
                const isSelected = selectedIds.has(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => phase === "results" && toggleSelect(item.id)}
                    className={`w-full rounded-xl px-3 py-2.5 flex items-center gap-3 transition-all animate-[slideIn_0.3s_ease-out] ${
                      isSelected
                        ? "bg-[#EAF1F9] border border-[#3e76bd]"
                        : "bg-[#f9fafb] border border-[#f3f4f6]"
                    }`}
                  >
                    <div className="size-8 rounded-full bg-white flex items-center justify-center shrink-0 text-lg">
                      {item.icon}
                    </div>
                    <div className="flex flex-col items-start flex-1 min-w-0">
                      <span className="font-['Noto_Sans_JP',sans-serif] text-sm text-[#1e2939]" style={{ fontWeight: 700 }}>
                        {item.name}
                      </span>
                      <span className="font-['Noto_Sans_JP',sans-serif] text-[12px] text-[#99a1af]">
                        {item.category}
                      </span>
                    </div>
                    {phase === "results" && (
                      <div className={`size-5 rounded-[4px] flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? "bg-[#3e76bd]" : "border-2 border-[#d1d5dc] bg-white"
                      }`}>
                        {isSelected && (
                          <svg className="size-3.5" fill="none" viewBox="0 0 20 20">
                            <path d="M4 10L8 14L16 6" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                          </svg>
                        )}
                      </div>
                    )}
                    {phase === "scanning" && (
                      <div className="size-5 rounded-full bg-[#3e76bd] flex items-center justify-center shrink-0">
                        <svg className="size-3" fill="none" viewBox="0 0 20 20">
                          <path d="M4 10L8 14L16 6" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                        </svg>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {phase === "results" && (
              <button
                onClick={handleAdd}
                disabled={selectedIds.size === 0}
                className={`w-full rounded-2xl py-3.5 flex items-center justify-center shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1)] active:scale-[0.98] transition-all ${
                  selectedIds.size > 0
                    ? "bg-[#1d293d]"
                    : "bg-[#d1d5dc] cursor-not-allowed"
                }`}
              >
                <span className="font-['Noto_Sans_JP',sans-serif] text-[16px] text-white tracking-[-0.31px]" style={{ fontWeight: 700 }}>
                  {selectedIds.size > 0
                    ? `${selectedIds.size}件をパントリーに追加`
                    : "追加する調味料を選択"}
                </span>
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}