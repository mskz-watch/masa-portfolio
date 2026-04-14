import svgPaths from "../../imports/svg-6faoummmyn";

interface RecipeCardProps {
  image: string;
  title: string;
  time: string;
  fireLevel: number;
  consumptionAmount: string;
  consumptionMl: string;
  tags: string[];
  highlightTag: string;
  onTap?: () => void;
}

function FireIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      className="size-3 shrink-0"
      fill="none"
      viewBox="0 0 12.0249 12.0249"
    >
      <mask
        height="13"
        id={`mask-fire-${Math.random()}`}
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="13"
        x="0"
        y="0"
      >
        <rect fill="#D9D9D9" height="12.0249" width="12.0249" />
      </mask>
      <g>
        <path
          d={svgPaths.p2f684c00}
          fill={filled ? "#F58B3B" : "#D1D5DC"}
        />
      </g>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="size-3 shrink-0"
      fill="none"
      viewBox="0 0 11.9906 11.9906"
    >
      <g clipPath="url(#clip-clock)">
        <path
          d={svgPaths.p8d60700}
          stroke="#6A7282"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.999221"
        />
        <path
          d={svgPaths.p33ffbd80}
          stroke="#6A7282"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.999221"
        />
      </g>
      <defs>
        <clipPath id="clip-clock">
          <rect fill="white" height="11.9906" width="11.9906" />
        </clipPath>
      </defs>
    </svg>
  );
}

function ConsumptionBadgeIcon() {
  return (
    <svg
      className="size-3 shrink-0"
      fill="none"
      viewBox="0 0 12 12"
    >
      <path
        d={svgPaths.p5a7a980}
        fill="#F58B3B"
        stroke="#F58B3B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.999221"
      />
    </svg>
  );
}

export function RecipeCard({
  image,
  title,
  time,
  fireLevel,
  consumptionAmount,
  consumptionMl,
  tags,
  highlightTag,
  onTap,
}: RecipeCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] w-full overflow-hidden ${onTap ? "cursor-pointer active:scale-[0.98] transition-transform" : ""}`}
      onClick={onTap}
    >
      {/* Image Section */}
      <div className="relative h-[160px] w-full">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Time Badge */}
        <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-1 flex items-center gap-1 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]">
          <ClockIcon />
          <span className="font-['Noto_Sans_JP',sans-serif] text-xs text-[#314158]" style={{ fontWeight: 700 }}>
            {time}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col gap-2">
        {/* Title Row */}
        <div className="flex items-center justify-between w-full">
          <p className="font-['Noto_Sans_JP',sans-serif] text-lg text-[#1d293d] tracking-[-0.44px]" style={{ fontWeight: 700 }}>
            {title}
          </p>
          <svg className="size-6 shrink-0" fill="none" viewBox="0 0 24 24">
            <path
              d="M9 18L15 12L9 6"
              stroke="#D1D5DC"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.66537"
            />
          </svg>
        </div>

        {/* Consumption Row */}
        <div className="flex items-center justify-between w-full">
          {/* Usage Level Badge */}
          <div className="bg-[#fffcf4] rounded-full px-[9px] py-px flex items-center gap-1 h-6 relative">
            <div className="absolute inset-0 border border-[#ffdbbf] rounded-full pointer-events-none" />
            <span className="font-['Noto_Sans_JP',sans-serif] text-[12px] text-[#314158]" style={{ fontWeight: 700 }}>
              使用量Lv
            </span>
            <div className="flex items-center">
              {Array.from({ length: 3 }).map((_, i) => (
                <FireIcon key={i} filled={i < fireLevel} />
              ))}
            </div>
          </div>
          {/* Consumption Amount */}
          <div className="flex items-baseline font-['Noto_Sans_JP',sans-serif] text-[#f58b3b] tracking-[-0.44px]" style={{ fontWeight: 700 }}>
            <span className="text-[16px]">{consumptionAmount}</span>
            <span className="text-xs">({consumptionMl}消費)</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex items-center gap-[7px] flex-wrap">
          {tags.map((tag) => {
            const isHighlight = tag === highlightTag;
            return isHighlight ? (
              <span
                key={tag}
                className="bg-[#3e76bd] text-white font-['Noto_Sans_JP',sans-serif] text-[12px] px-[7px] py-1 rounded tracking-[0.12px]"
                style={{ fontWeight: 400 }}
              >
                {tag}
              </span>
            ) : (
              <span
                key={tag}
                className="bg-[#f8fafc] text-[#90a1b9] font-['Noto_Sans_JP',sans-serif] text-[12px] px-[6px] py-[5px] rounded border border-[#e2e8f0] tracking-[0.12px]"
                style={{ fontWeight: 400 }}
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}