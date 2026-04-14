import svgPaths from "./svg-mzbnmnfl99";

function Clock() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[2px] items-center justify-center left-[calc(50%+20px)] top-[17px]" data-name="Clock">
      <div className="flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] relative shrink-0 text-[17px] text-black text-center tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100", fontFeatureSettings: "\'ss03\'" }}>
        <p className="leading-[17px]">9:41</p>
      </div>
    </div>
  );
}

function IndicatorsGroup() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-center right-[26.7px] top-[19px]" data-name="Indicators group">
      <div className="h-[12px] relative shrink-0 w-[19.971px]" data-name="Signal">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9707 12">
          <path d={svgPaths.pe92800} fill="var(--fill-0, black)" id="Cellular Connection" />
        </svg>
      </div>
      <div className="h-[12.5px] relative shrink-0 w-[17px]" data-name="Connection">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 12.5001">
          <path d={svgPaths.p2b7cea80} fill="var(--fill-0, black)" id="Wifi" />
        </svg>
      </div>
      <div className="h-[13px] relative shrink-0 w-[27.33px]" data-name="Battery">
        <div className="absolute border border-black border-solid inset-[0_8.53%_0_0] opacity-40 rounded-[4px]" data-name="Border" />
        <div className="absolute inset-[34.62%_0_34.62%_95.13%]" data-name="Cap">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33 4">
            <path d={svgPaths.p1847ee80} fill="var(--fill-0, black)" id="Cap" opacity="0.5" />
          </svg>
        </div>
        <div className="absolute bg-black inset-[15.38%_30.48%_15.38%_7.32%] rounded-[2px]" data-name="Capacity" />
      </div>
    </div>
  );
}

function StatusBarIPhone1313Pro() {
  return (
    <div className="absolute bg-white h-[47px] left-0 overflow-clip top-0 w-[393px]" data-name="Status Bar / iPhone 13 & 13 Pro">
      <div className="absolute h-[47px] left-0 top-0 w-[88px]" data-name="Clock">
        <Clock />
      </div>
      <IndicatorsGroup />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute contents inset-0" data-name="レイヤー 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 424 201">
        <g id="Group">
          <path d="M424 0H0V201H424V0Z" fill="var(--fill-0, #3E76BD)" id="Vector" />
          <g id="Group_2">
            <path d={svgPaths.p37b5ca00} fill="var(--fill-0, white)" id="Vector_2" />
            <path d={svgPaths.p33e2f131} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.p1c1db140} fill="var(--fill-0, white)" id="Vector_4" />
            <path d={svgPaths.p31146980} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p1f221e40} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.pa090300} fill="var(--fill-0, white)" id="Vector_7" />
          </g>
          <path d={svgPaths.p39e0e300} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p1e419330} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p3eb21b00} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.pd4a3e00} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p38635200} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p317a0180} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p26fac900} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p2cc012c0} id="Vector_15" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="4" />
          <path d={svgPaths.p24d7d700} fill="var(--fill-0, white)" id="Vector_16" stroke="var(--stroke-0, white)" strokeMiterlimit="10" />
          <path d={svgPaths.p38162500} fill="var(--fill-0, #FDFDFD)" id="Vector_17" />
          <path d="M144.606 44.9063V48.0828" id="Vector_18" stroke="var(--stroke-0, #F2F2F2)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d="M139.459 42.3066V51.9281" id="Vector_19" stroke="var(--stroke-0, #F2F2F2)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d="M134.303 36.0036V53.5582" id="Vector_20" stroke="var(--stroke-0, #F2F2F2)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d={svgPaths.p338405c0} fill="var(--fill-0, white)" id="Vector_21" />
          <path d={svgPaths.p30daf00} fill="var(--fill-0, white)" id="Vector_22" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute inset-[19.98%_-4.07%_56.54%_-3.82%] overflow-clip" data-name="Logo">
      <Component1 />
    </div>
  );
}

function HomeView() {
  return (
    <div className="absolute bg-[#fafaf9] h-[855.995px] left-0 overflow-clip top-[47px] w-[393px]" data-name="HomeView">
      <div className="absolute bg-[#3e76bd] h-[831px] left-0 top-0 w-[393px]" />
      <Logo />
      <p className="absolute font-['Rounded_Mplus_1c:ExtraBold',sans-serif] leading-[33px] left-[103px] not-italic text-[42.429px] text-white top-[381px] tracking-[-0.5179px]">使い切る</p>
      <p className="absolute font-['Rounded_Mplus_1c:ExtraBold',sans-serif] leading-[28px] left-[103px] not-italic text-[24px] text-white top-[450px] tracking-[-0.4395px]">って気分が良い</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#1b1b1b] text-[18px] text-center tracking-[-0.3125px]">はじめる</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="ホーム">
      <StatusBarIPhone1313Pro />
      <HomeView />
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[57px] px-[24px] py-[12px] rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-[598px] w-[280px]" data-name="Button">
        <Frame />
      </div>
    </div>
  );
}