import svgPaths from "./svg-uyfx8157ph";

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
    <div className="col-1 h-[87.912px] ml-0 mt-[38%] relative row-1 w-[333.819px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 333.819 87.912">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p3fc04900} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p1e2dd080} fill="var(--fill-0, white)" id="Vector_2" />
            <path d={svgPaths.p4110a00} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.p325f280} fill="var(--fill-0, white)" id="Vector_4" />
            <path d={svgPaths.p23cabd00} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p3ceefb00} fill="var(--fill-0, white)" id="Vector_6" />
          </g>
          <path d={svgPaths.p1ca32d80} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p3bfcbb00} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p30655300} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p1dc87800} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p13214e80} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p6f65400} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p14671180} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p8a9a540} fill="var(--fill-0, white)" id="Vector_14" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="col-1 h-[59.492px] ml-[8.69%] mt-0 relative row-1 w-[63.849px]">
      <div className="absolute inset-[-1.31%_-1.23%_-1.11%_-1.04%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65.2937 60.9366">
          <g id="Group 8075">
            <path d={svgPaths.p3178c980} fill="var(--fill-0, white)" id="Vector" />
            <path d="M54.2561 14.8995V25.3204" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.56949" />
            <path d="M48.2282 9.62431V28.6372" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.56949" />
            <rect height="29.905" id="Rectangle 16" rx="10.7062" stroke="var(--stroke-0, white)" strokeWidth="4.28248" transform="rotate(-39.9468 8.58841 31.0473)" width="51.8343" x="8.58841" y="31.0473" />
            <path d={svgPaths.p12f0ea80} fill="var(--fill-0, white)" id="Rectangle 17" stroke="var(--stroke-0, white)" strokeWidth="3.42599" />
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
    <div className="absolute bg-[#fafaf9] h-[855.995px] left-0 overflow-clip top-[54px] w-[393px]" data-name="HomeView">
      <div className="absolute bg-[#3e76bd] h-[831px] left-0 top-0 w-[393px]" />
      <div className="absolute content-stretch flex flex-col inset-[22.73%_7.53%_60.7%_7.53%] items-start" data-name="Logo">
        <Group2 />
      </div>
      <p className="absolute font-['Rounded_Mplus_1c:ExtraBold',sans-serif] leading-[33px] left-[103px] not-italic text-[42.429px] text-white top-[381px] tracking-[-0.5179px]">使い切る</p>
      <p className="absolute font-['Rounded_Mplus_1c:ExtraBold',sans-serif] leading-[28px] left-[103px] not-italic text-[24px] text-white top-[450px] tracking-[-0.4395px]">って気分が良い</p>
    </div>
  );
}

export default function Component00Intro() {
  return (
    <div className="bg-white relative size-full" data-name="00_Intro">
      <IOsStatusBar />
      <HomeView />
    </div>
  );
}