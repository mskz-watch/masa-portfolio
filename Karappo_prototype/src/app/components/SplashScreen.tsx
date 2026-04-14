import svgPaths from "../../imports/svg-nn5y6l8y35";

interface SplashScreenProps {
  onStart: () => void;
}

function KarappoLogo() {
  return (
    <div className="relative inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
      {/* "Karappo" text */}
      <div className="relative w-[333.819px] h-[87.912px]" style={{ gridColumn: 1, gridRow: 1, marginTop: '53.89px', marginLeft: 0 }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 333.819 87.912">
          <g>
            <g>
              <path d={svgPaths.p8e3f270} fill="white" />
              <path d={svgPaths.p38909440} fill="white" />
              <path d={svgPaths.p2a71a900} fill="white" />
              <path d={svgPaths.p2636cb80} fill="white" />
              <path d={svgPaths.p23cabd00} fill="white" />
              <path d={svgPaths.p12c96100} fill="white" />
            </g>
            <path d={svgPaths.p39f17d00} fill="white" />
            <path d={svgPaths.p1ed05900} fill="white" />
            <path d={svgPaths.p15b6c500} fill="white" />
            <path d={svgPaths.p1f04e400} fill="white" />
            <path d={svgPaths.p3e70d280} fill="white" />
            <path d={svgPaths.p1471b440} fill="white" />
            <path d={svgPaths.p324e2580} fill="white" />
            <path d={svgPaths.p17ce0000} fill="white" />
          </g>
        </svg>
      </div>
      {/* Bottle icon */}
      <div className="relative w-[63.849px] h-[59.492px]" style={{ gridColumn: 1, gridRow: 1, marginLeft: '29px', marginTop: 0 }}>
        <div className="absolute" style={{ inset: '-1.31% -1.22% -1.11% -1.04%' }}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65.2937 60.9366">
            <g>
              <path d={svgPaths.p3178c980} fill="white" />
              <path d="M54.2561 14.8995V25.3204" stroke="white" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.56949" />
              <path d="M48.2282 9.62431V28.6372" stroke="white" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.56949" />
              <rect height="29.905" rx="10.7062" stroke="white" strokeWidth="4.28248" transform="rotate(-39.9468 8.58841 31.0473)" width="51.8343" x="8.58841" y="31.0473" />
              <path d={svgPaths.p12f0ea80} fill="white" stroke="white" strokeWidth="3.42599" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export function SplashScreen({ onStart }: SplashScreenProps) {
  return (
    <div className="relative w-full h-full bg-[#3e76bd] flex flex-col items-center overflow-hidden">
      {/* Status bar */}
      <div className="absolute top-0 left-0 right-0 h-[54px] flex items-center justify-between px-[32px] pl-[52px] z-10">
        <p
          className="text-white text-[17px] text-center whitespace-nowrap"
          style={{ fontFamily: "'SF Pro Text', -apple-system, sans-serif", fontWeight: 600, lineHeight: '22px' }}
        >
          9:41
        </p>
        <div className="h-[13px] relative w-[79.67px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79.6697 13">
            <path clipRule="evenodd" d={svgPaths.p17c9cd00} fill="white" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pd628d00} fill="white" fillRule="evenodd" />
            <g>
              <rect height="12" opacity="0.35" rx="3.8" stroke="white" width="24" x="52.8417" y="0.5" />
              <path d={svgPaths.p5358600} fill="white" opacity="0.4" />
              <rect fill="white" height="9" rx="2.5" width="21" x="54.3417" y="2" />
            </g>
          </svg>
        </div>
      </div>

      {/* Main content area - centered */}
      <div className="flex flex-col items-center justify-center flex-1">
        <KarappoLogo />
        <p
          className="text-white text-[42.429px] mt-8 tracking-[-0.52px] whitespace-nowrap"
          style={{ fontFamily: "'M PLUS Rounded 1c', 'Rounded Mplus 1c', sans-serif", fontWeight: 800, lineHeight: '33px' }}
        >
          使い切る
        </p>
        <p
          className="text-white text-[24px] mt-5 tracking-[-0.44px] whitespace-nowrap"
          style={{ fontFamily: "'M PLUS Rounded 1c', 'Rounded Mplus 1c', sans-serif", fontWeight: 800, lineHeight: '28px' }}
        >
          って気分が良い
        </p>
      </div>

      {/* はじめる button */}
      <button
        onClick={onStart}
        className="absolute bottom-[22%] left-1/2 -translate-x-1/2 w-[280px] bg-white rounded-[14px] py-3 px-6 shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] flex items-center justify-center active:scale-[0.97] transition-transform"
      >
        <span
          className="font-['Noto_Sans_JP',sans-serif] text-[18px] text-[#1b1b1b] tracking-[-0.31px]"
          style={{ fontWeight: 700, lineHeight: '24px' }}
        >
          はじめる
        </span>
      </button>
    </div>
  );
}