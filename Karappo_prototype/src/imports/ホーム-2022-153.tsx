import svgPaths from "./svg-ut81hte3gn";

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

function IOsStatusBar() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-0 pl-[52px] pr-[32px] py-[16px] top-0 w-[393px]" data-name="iOS Status Bar">
      <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[17px] text-black text-center">9:41</p>
      <Wrapper />
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 h-[77.138px] ml-0 mt-[38%] relative row-1 w-[292.91px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 292.91 77.1385">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p35956e00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p129b9f00} fill="var(--fill-0, white)" id="Vector_2" />
            <path d={svgPaths.p347e5580} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.p3275db80} fill="var(--fill-0, white)" id="Vector_4" />
            <path d={svgPaths.p3941c2f0} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p3fec0200} fill="var(--fill-0, white)" id="Vector_6" />
          </g>
          <path d={svgPaths.p2426d300} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p20b28600} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p317cb880} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p1c6cb680} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p7d8cb00} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p4b0ef80} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p17614d00} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p154f8800} fill="var(--fill-0, white)" id="Vector_14" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="col-1 h-[52.201px] ml-[8.69%] mt-0 relative row-1 w-[56.025px]">
      <div className="absolute inset-[-1.31%_-1.22%_-1.11%_-1.04%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.2921 53.4689">
          <g id="Group 8075">
            <path d={svgPaths.p348a6500} fill="var(--fill-0, white)" id="Vector" />
            <path d="M47.6071 13.0736V22.2174" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.2546" />
            <path d="M42.3179 8.44485V25.1277" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.2546" />
            <rect height="26.2401" id="Rectangle 16" rx="9.39417" stroke="var(--stroke-0, white)" strokeWidth="3.75767" transform="rotate(-39.9468 7.53591 27.2425)" width="45.4821" x="7.53591" y="27.2425" />
            <path d={svgPaths.pb185f0} fill="var(--fill-0, white)" id="Rectangle 17" stroke="var(--stroke-0, white)" strokeWidth="3.00614" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group />
      <Group1 />
    </div>
  );
}

function HomeView() {
  return (
    <div className="absolute bg-[#fafaf9] h-[840px] left-0 overflow-clip top-[54px] w-[393px]" data-name="HomeView">
      <div className="absolute bg-[#3e76bd] h-[831px] left-0 top-0 w-[393px]" />
      <div className="-translate-y-1/2 absolute aspect-[333.81903076171875/141.8017578125] content-stretch flex flex-col items-start left-[12.98%] right-[12.49%] top-[calc(50%-157.79px)]" data-name="Logo">
        <Group2 />
      </div>
      <p className="absolute font-['Rounded_Mplus_1c:ExtraBold',sans-serif] leading-[33px] left-[103px] not-italic text-[42.429px] text-white top-[381px] tracking-[-0.5179px]">使い切る</p>
      <p className="absolute font-['Rounded_Mplus_1c:ExtraBold',sans-serif] leading-[28px] left-[103px] not-italic text-[24px] text-white top-[450px] tracking-[-0.4395px]">って気分が良い</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="ホーム">
      <IOsStatusBar />
      <HomeView />
    </div>
  );
}