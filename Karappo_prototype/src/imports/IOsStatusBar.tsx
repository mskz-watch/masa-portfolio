import svgPaths from "./svg-ecsyffws8m";

function Wrapper() {
  return (
    <div className="h-[13px] relative shrink-0 w-[79.67px]" data-name="wrapper">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79.6697 13">
        <g id="wrapper">
          <path clipRule="evenodd" d={svgPaths.p17c9cd00} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
          <path clipRule="evenodd" d={svgPaths.pd628d00} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
          <g id="Battery">
            <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="52.8417" y="0.5" />
            <path d={svgPaths.p5358600} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
            <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="54.3417" y="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function IOsStatusBar() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between pl-[52px] pr-[32px] py-[16px] relative size-full" data-name="iOS Status Bar">
      <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[17px] text-black text-center">9:41</p>
      <Wrapper />
    </div>
  );
}