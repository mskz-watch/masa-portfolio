import { useState, useEffect } from "react";

const courseSchedule = [
  {
    day: "月",
    title: "豚バラとキャベツのナンプラー炒め",
    consumption: "大さじ2 (30ml)",
  },
  {
    day: "水",
    title: "エスニック風春雨スープ",
    consumption: "大さじ2 (30ml)",
  },
  {
    day: "金",
    title: "手羽元のナンプラー煮込み",
    consumption: "大さじ4 (60ml)",
  },
];

interface CourseConfirmScreenProps {
  query: string;
  onGoHome: () => void;
}

export function CourseConfirmScreen({
  query,
  onGoHome,
}: CourseConfirmScreenProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowContent(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex flex-col w-full h-full bg-[#fffcf4] relative">
      {/* ── Scrollable content ── */}
      <div className="flex-1 overflow-y-auto px-6 pt-12 pb-28 flex flex-col items-center">
        {/* Success animation */}
        <div className="size-16 rounded-full bg-[#3e76bd] flex items-center justify-center mb-3 shrink-0 shadow-[0px_8px_24px_0px_rgba(62,118,189,0.4)] animate-[popIn_0.5s_ease-out]">
          <svg className="size-8" fill="none" viewBox="0 0 24 24">
            <path
              d="M5 13L9 17L19 7"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
          </svg>
        </div>

        <h2
          className="font-['Noto_Sans_JP',sans-serif] text-xl text-[#1e2939] text-center tracking-[-0.45px] mb-2"
          style={{ fontWeight: 700 }}
        >
          コースが決定しました！
        </h2>
        <p className="font-['Noto_Sans_JP',sans-serif] text-sm text-[#6a7282] text-center mb-8">
          「{query}」を1週間で使い切るプランです
        </p>

        {showContent && (
          <div className="w-full flex flex-col gap-4 animate-[slideIn_0.4s_ease-out]">
            {/* Total consumption card */}
            <div className="bg-gradient-to-r from-[#fff7ed] to-[#ffedd4] rounded-2xl p-5 border border-[#ffdbbf]">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span
                    className="font-['Noto_Sans_JP',sans-serif] text-xs text-[#ca3500] mb-1"
                    style={{ fontWeight: 500 }}
                  >
                    このコースの合計消費量
                  </span>
                  <span
                    className="font-['Noto_Sans_JP',sans-serif] text-sm text-[#6a7282]"
                    style={{ fontWeight: 500 }}
                  >
                    一般的なボトル(150ml)の約80%
                  </span>
                </div>
                <div className="flex items-baseline">
                  <span
                    className="font-['Inter',sans-serif] text-[36px] text-[#ff6900]"
                    style={{ fontWeight: 900 }}
                  >
                    120
                  </span>
                  <span
                    className="font-['Inter',sans-serif] text-[16px] text-[#ff6900]"
                    style={{ fontWeight: 700 }}
                  >
                    ml
                  </span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-3 h-2 bg-white/60 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#f58b3b] to-[#ff6900] rounded-full transition-all duration-1000"
                  style={{ width: "80%" }}
                />
              </div>
              <div className="flex justify-between mt-1">
                <span className="font-['Noto_Sans_JP',sans-serif] text-[12px] text-[#ca3500]/60">
                  0ml
                </span>
                <span className="font-['Noto_Sans_JP',sans-serif] text-[12px] text-[#ca3500]/60">
                  150ml
                </span>
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-white rounded-2xl border border-[#f3f4f6] overflow-hidden shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]">
              <div className="px-4 pt-4 pb-2">
                <p
                  className="font-['Noto_Sans_JP',sans-serif] text-sm text-[#1e2939] tracking-[-0.15px]"
                  style={{ fontWeight: 700 }}
                >
                  今週のスケジュール
                </p>
              </div>
              {courseSchedule.map((item, idx) => (
                <div
                  key={item.day}
                  className={`flex items-center gap-3 px-4 py-3 ${
                    idx < courseSchedule.length - 1 ? "border-b border-[#f3f4f6]" : ""
                  }`}
                >
                  <div className="size-9 rounded-full bg-[#f9fafb] border border-[#f3f4f6] flex items-center justify-center shrink-0 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                    <span
                      className="font-['Noto_Sans_JP',sans-serif] text-sm text-[#4a5565]"
                      style={{ fontWeight: 700 }}
                    >
                      {item.day}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <span
                      className="font-['Noto_Sans_JP',sans-serif] text-sm text-[#1e2939] tracking-[-0.15px] truncate"
                      style={{ fontWeight: 700 }}
                    >
                      {item.title}
                    </span>
                    <span className="font-['Noto_Sans_JP',sans-serif] text-[12px] text-[#f58b3b]" style={{ fontWeight: 500 }}>
                      {item.consumption}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Tip */}
            <div className="bg-[#EAF1F9] rounded-2xl px-4 py-3 border border-[#9FC3E8]">
              <div className="flex items-start gap-2">
                <span className="text-base shrink-0 mt-0.5">💡</span>
                <p className="font-['Noto_Sans_JP',sans-serif] text-xs text-[#2A5A94] leading-[18px]" style={{ fontWeight: 500 }}>
                  レシピの当日にプッシュ通知でお知らせします。買い忘れがないように買い物リストも自動で作成されます。
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Fixed bottom CTA ── */}
      <div className="sticky bottom-0 left-0 right-0 bg-gradient-to-t from-[#fffcf4] via-[#fffcf4] to-transparent px-6 pb-8 pt-4 shrink-0">
        <button
          onClick={onGoHome}
          className="w-full bg-[#1d293d] rounded-2xl py-4 flex items-center justify-center shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] active:scale-[0.98] transition-transform"
        >
          <span
            className="font-['Noto_Sans_JP',sans-serif] text-[16px] text-white tracking-[-0.31px]"
            style={{ fontWeight: 700 }}
          >
            早速作る
          </span>
        </button>
      </div>
    </div>
  );
}