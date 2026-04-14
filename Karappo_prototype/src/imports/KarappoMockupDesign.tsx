import svgPaths from "./svg-6faoummmyn";
import imgContainer from "figma:asset/4d91e60dffa4fdbb6df5278dc8ca821228e395f1.png";
import imgContainer1 from "figma:asset/39c69350cfe9baaa36617c31ae8dab5438e31fa2.png";
import imgContainer2 from "figma:asset/a9495f3c75d229e21a039be2b01706112e646d09.png";

function Heading() {
  return (
    <div className="h-[27.995px] relative shrink-0 w-[75.467px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[18px] text-white top-[-0.83px] tracking-[0.0105px]">Karappo</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[23.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9982 23.9982">
        <g id="Icon">
          <path d={svgPaths.p3df4a300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99985" />
          <path d={svgPaths.p2cd52c00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99985" />
        </g>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#7dd1cc] h-[51.993px] relative shrink-0" data-name="Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[245.995px] h-full items-center px-[23.998px] relative">
        <Heading />
        <Icon />
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search">
          <mask height="24" id="mask0_2_302" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_2_302)">
            <path d={svgPaths.pc423380} fill="var(--fill-0, #7DD1CC)" id="search_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_3px_4px_-2px_rgba(0,0,0,0.25)] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
          <Search />
          <p className="font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#b0aeae] text-[14px]">使いきりたい調味料を検索</p>
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[27.995px] relative shrink-0 w-[107.967px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#1d293d] text-[18px] top-[-0.83px] tracking-[-0.4395px]">今すぐ作れる</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20.001px] relative shrink-0 w-[68.997px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.08px] tracking-[-0.1504px]">すべて見る</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[27.995px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Text />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16.004px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start relative">
        <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#314158] text-[10px]">消費量:</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p5a7a980} fill="var(--fill-0, #F58B3B)" id="Vector" stroke="var(--stroke-0, #F58B3B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999221" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p5a7a980} fill="var(--fill-0, #F58B3B)" id="Vector" stroke="var(--stroke-0, #F58B3B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999221" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p5a7a980} fill="var(--fill-0, #F58B3B)" id="Vector" stroke="var(--stroke-0, #F58B3B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999221" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <Icon1 />
        <Icon2 />
        <Icon3 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] content-stretch flex gap-[3.997px] h-[23.998px] items-center px-[8px] relative rounded-[36369700px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <Text1 />
      <Frame1 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[11.991px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9906 11.9906">
        <g clipPath="url(#clip0_2_287)" id="Icon">
          <path d={svgPaths.p8d60700} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999221" />
          <path d={svgPaths.p33ffbd80} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999221" />
        </g>
        <defs>
          <clipPath id="clip0_2_287">
            <rect fill="white" height="11.9906" width="11.9906" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16.004px] relative shrink-0 w-[26.115px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#314158] text-[12px]">15分</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] content-stretch flex gap-[3.997px] h-[23.998px] items-center px-[8px] relative rounded-[36369700px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 w-[58.09px]" data-name="Container">
      <Icon4 />
      <Text2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[128px] items-start justify-between p-[8px] relative shrink-0 w-[345px]" data-name="Container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#e5e7eb] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgContainer} />
      </div>
      <Container4 />
      <Container5 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[22.5px] not-italic relative shrink-0 text-[#1d293d] text-[18px] tracking-[-0.4395px]">スタミナ野菜炒め</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M9 18L15 12L9 6" id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66537" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
          <Heading2 />
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16.004px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start relative">
        <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#314158] text-[10px]">使用量Lv</p>
      </div>
    </div>
  );
}

function LocalFireDepartment() {
  return (
    <div className="relative shrink-0 size-[12.025px]" data-name="local_fire_department">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0249 12.0249">
        <g id="local_fire_department">
          <mask height="13" id="mask0_2_298" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="13" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="12.0249" id="Bounding box" width="12.0249" />
          </mask>
          <g mask="url(#mask0_2_298)">
            <path d={svgPaths.p2f684c00} fill="var(--fill-0, #F58B3B)" id="local_fire_department_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <LocalFireDepartment />
    </div>
  );
}

function LocalFireDepartment1() {
  return (
    <div className="relative shrink-0 size-[12.025px]" data-name="local_fire_department">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0249 12.0249">
        <g id="local_fire_department">
          <mask height="13" id="mask0_2_298" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="13" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="12.0249" id="Bounding box" width="12.0249" />
          </mask>
          <g mask="url(#mask0_2_298)">
            <path d={svgPaths.p2f684c00} fill="var(--fill-0, #F58B3B)" id="local_fire_department_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <LocalFireDepartment1 />
    </div>
  );
}

function LocalFireDepartment2() {
  return (
    <div className="relative shrink-0 size-[12.025px]" data-name="local_fire_department">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0249 12.0249">
        <g id="local_fire_department">
          <mask height="13" id="mask0_2_298" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="13" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="12.0249" id="Bounding box" width="12.0249" />
          </mask>
          <g mask="url(#mask0_2_298)">
            <path d={svgPaths.p2f684c00} fill="var(--fill-0, #F58B3B)" id="local_fire_department_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <LocalFireDepartment2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <Frame3 />
        <Frame5 />
        <Frame6 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#fffcf4] content-stretch flex gap-[3.997px] h-[23.998px] items-center px-[9px] py-px relative rounded-[36369700px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffdbbf] border-solid inset-0 pointer-events-none rounded-[36369700px]" />
      <Text3 />
      <Frame4 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold h-[22.491px] items-baseline leading-[22.5px] not-italic relative shrink-0 text-[#f58b3b] tracking-[-0.4395px]" data-name="Heading 2">
      <p className="relative shrink-0 text-[16px]">大さじ4</p>
      <p className="relative shrink-0 text-[12px]">(60ml消費)</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container8 />
        <Heading3 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-center justify-center px-[6px] py-[5px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[1.084px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[#90a1b9] text-[10px] tracking-[0.1172px]">キャベツ</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-center justify-center px-[6px] py-[5px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[1.084px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[#90a1b9] text-[10px] tracking-[0.1172px]">玉ねぎ</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-center justify-center px-[6px] py-[5px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[1.084px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[#90a1b9] text-[10px] tracking-[0.1172px]">豚肉</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="bg-[#7dd1cc] content-stretch flex items-center justify-center px-[7px] py-[4px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[10px] text-white tracking-[0.1172px]">焼肉のたれ</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center relative">
        <Text4 />
        <Text5 />
        <Text6 />
        <Text7 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
        <Container7 />
        <Frame2 />
        <Container9 />
      </div>
    </div>
  );
}

function RecipeCard() {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="RecipeCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Container3 />
        <Container6 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[11.991px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9906 11.9906">
        <g clipPath="url(#clip0_2_287)" id="Icon">
          <path d={svgPaths.p8d60700} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999221" />
          <path d={svgPaths.p33ffbd80} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999221" />
        </g>
        <defs>
          <clipPath id="clip0_2_287">
            <rect fill="white" height="11.9906" width="11.9906" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[16.004px] relative shrink-0 w-[26.369px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#314158] text-[12px]">10分</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] content-stretch flex gap-[3.997px] h-[23.998px] items-center pl-[7.994px] relative rounded-[36369700px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 w-[58.344px]" data-name="Container">
      <Icon6 />
      <Text8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[10px] h-[128px] items-start justify-end p-[8px] relative shrink-0 w-[345px]" data-name="Container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#e5e7eb] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgContainer1} />
      </div>
      <Container11 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[22.5px] not-italic relative shrink-0 text-[#1d293d] text-[18px] tracking-[-0.4395px]">アボカドとエビのサラダ</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M9 18L15 12L9 6" id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66537" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
          <Heading4 />
          <Icon7 />
        </div>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-center justify-center px-[6px] py-[5px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[1.084px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[#90a1b9] text-[10px] tracking-[0.1172px]">アボカド</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-center justify-center px-[6px] py-[5px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[1.084px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[#90a1b9] text-[10px] tracking-[0.1172px]">エビ</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-center justify-center px-[6px] py-[5px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[1.084px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[#90a1b9] text-[10px] tracking-[0.1172px]">レタス</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-center justify-center px-[6px] py-[5px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[1.084px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[#90a1b9] text-[10px] tracking-[0.1172px]">マヨネーズ</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="bg-[#7dd1cc] content-stretch flex items-center justify-center px-[7px] py-[4px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[10px] text-white tracking-[0.1172px]">レモン果汁</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center relative">
        <Text9 />
        <Text10 />
        <Text11 />
        <Text12 />
        <Text13 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[16.004px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start relative">
        <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#314158] text-[10px]">使用量Lv</p>
      </div>
    </div>
  );
}

function LocalFireDepartment3() {
  return (
    <div className="relative shrink-0 size-[12.025px]" data-name="local_fire_department">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0249 12.0249">
        <g id="local_fire_department">
          <mask height="13" id="mask0_2_298" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="13" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="12.0249" id="Bounding box" width="12.0249" />
          </mask>
          <g mask="url(#mask0_2_298)">
            <path d={svgPaths.p2f684c00} fill="var(--fill-0, #F58B3B)" id="local_fire_department_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <LocalFireDepartment3 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <Frame9 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#fffcf4] content-stretch flex gap-[3.997px] h-[23.998px] items-center px-[9px] py-px relative rounded-[36369700px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffdbbf] border-solid inset-0 pointer-events-none rounded-[36369700px]" />
      <Text14 />
      <Frame8 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold h-[22.491px] items-baseline leading-[22.5px] not-italic relative shrink-0 text-[#f58b3b] tracking-[-0.4395px]" data-name="Heading 2">
      <p className="relative shrink-0 text-[16px]">大さじ1</p>
      <p className="relative shrink-0 text-[12px]">(15ml消費)</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container15 />
        <Heading5 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
        <Container13 />
        <Container14 />
        <Frame7 />
      </div>
    </div>
  );
}

function RecipeCard1() {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="RecipeCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Container10 />
        <Container12 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[11.991px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9906 11.9906">
        <g clipPath="url(#clip0_2_287)" id="Icon">
          <path d={svgPaths.p8d60700} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999221" />
          <path d={svgPaths.p33ffbd80} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999221" />
        </g>
        <defs>
          <clipPath id="clip0_2_287">
            <rect fill="white" height="11.9906" width="11.9906" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[16.004px] relative shrink-0 w-[26.115px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#314158] text-[12px]">15分</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] content-stretch flex gap-[3.997px] h-[23.998px] items-center pl-[7.994px] relative rounded-[36369700px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 w-[58.09px]" data-name="Container">
      <Icon8 />
      <Text15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[128px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#e5e7eb] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgContainer2} />
      </div>
      <div className="flex flex-row justify-end size-full">
        <div className="content-stretch flex items-start justify-end p-[8px] relative size-full">
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[22.5px] not-italic relative shrink-0 text-[#1d293d] text-[18px] tracking-[-0.4395px]">ナンプラー香るチャーハン</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M9 18L15 12L9 6" id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66537" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
          <Heading6 />
          <Icon9 />
        </div>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[16.004px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start relative">
        <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#314158] text-[10px]">使用量Lv</p>
      </div>
    </div>
  );
}

function LocalFireDepartment4() {
  return (
    <div className="relative shrink-0 size-[12.025px]" data-name="local_fire_department">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0249 12.0249">
        <g id="local_fire_department">
          <mask height="13" id="mask0_2_298" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="13" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="12.0249" id="Bounding box" width="12.0249" />
          </mask>
          <g mask="url(#mask0_2_298)">
            <path d={svgPaths.p2f684c00} fill="var(--fill-0, #F58B3B)" id="local_fire_department_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <LocalFireDepartment4 />
    </div>
  );
}

function LocalFireDepartment5() {
  return (
    <div className="relative shrink-0 size-[12.025px]" data-name="local_fire_department">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0249 12.0249">
        <g id="local_fire_department">
          <mask height="13" id="mask0_2_279" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="13" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="12.0249" id="Bounding box" width="12.0249" />
          </mask>
          <g mask="url(#mask0_2_279)">
            <path d={svgPaths.p2f684c00} fill="var(--fill-0, #F58B3B)" id="local_fire_department_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <LocalFireDepartment5 />
    </div>
  );
}

function LocalFireDepartment6() {
  return (
    <div className="relative shrink-0 size-[12.025px]" data-name="local_fire_department">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0249 12.0249">
        <g id="local_fire_department">
          <mask height="13" id="mask0_2_298" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="13" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="12.0249" id="Bounding box" width="12.0249" />
          </mask>
          <g mask="url(#mask0_2_298)">
            <path d={svgPaths.p2f684c00} fill="var(--fill-0, #F58B3B)" id="local_fire_department_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <LocalFireDepartment6 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <Frame12 />
        <Frame13 />
        <Frame14 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#fffcf4] content-stretch flex gap-[3.997px] h-[23.998px] items-center px-[9px] py-px relative rounded-[36369700px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffdbbf] border-solid inset-0 pointer-events-none rounded-[36369700px]" />
      <Text16 />
      <Frame11 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold h-[22.491px] items-baseline leading-[22.5px] not-italic relative shrink-0 text-[#f58b3b] tracking-[-0.4395px]" data-name="Heading 2">
      <p className="relative shrink-0 text-[16px]">大さじ4</p>
      <p className="relative shrink-0 text-[12px]">(60ml消費)</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container20 />
        <Heading7 />
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-center justify-center px-[6px] py-[5px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[1.084px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[#90a1b9] text-[10px] tracking-[0.1172px]">ご飯</p>
    </div>
  );
}

function Text18() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-center justify-center px-[6px] py-[5px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[1.084px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[#90a1b9] text-[10px] tracking-[0.1172px]">長ねぎ</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-center justify-center px-[6px] py-[5px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[1.084px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[#90a1b9] text-[10px] tracking-[0.1172px]">えび</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-center justify-center px-[7px] py-[5px] relative rounded-[4px] shrink-0 w-[24.168px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[1.084px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[#90a1b9] text-[10px] tracking-[0.1172px] w-full whitespace-pre-wrap">卵</p>
    </div>
  );
}

function Text21() {
  return (
    <div className="bg-[#7dd1cc] content-stretch flex items-center justify-center px-[7px] py-[4px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[10px] text-white tracking-[0.1172px]">ナンプラー</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center relative">
        <Text17 />
        <Text18 />
        <Text19 />
        <Text20 />
        <Text21 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
        <Container19 />
        <Frame10 />
        <Container21 />
      </div>
    </div>
  );
}

function RecipeCard2() {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="RecipeCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Container16 />
        <Container18 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <RecipeCard />
      <RecipeCard1 />
      <RecipeCard2 />
    </div>
  );
}

function RecipeList() {
  return (
    <div className="relative shrink-0 w-full" data-name="RecipeList">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#fffcf4] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <Frame />
        <RecipeList />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-[#fafaf9] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="App">
      <Header />
      <Container />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[23.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9982 23.9982">
        <g id="Icon">
          <path d="M4.99963 11.9991H18.9986" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99985" />
          <path d="M11.9991 4.99963V18.9986" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99985" />
        </g>
      </svg>
    </div>
  );
}

function FloatingActionButton() {
  return (
    <div className="absolute bg-[#1d293d] content-stretch flex items-center justify-center left-[325.48px] pr-[0.017px] rounded-[36369700px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[47.996px] top-[915px]" data-name="FloatingActionButton">
      <Icon10 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[27.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.9951 27.9951">
        <g id="Icon">
          <path d={svgPaths.p28dc7b00} id="Vector" stroke="var(--stroke-0, #7DD1CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33293" />
          <path d={svgPaths.p23600700} id="Vector_2" stroke="var(--stroke-0, #7DD1CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33293" />
        </g>
      </svg>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[14.988px] relative shrink-0 w-[29.485px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[15px] left-[15px] not-italic text-[#7dd1cc] text-[10px] text-center top-[0.08px] tracking-[0.1172px]">ホーム</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[62.917px] relative shrink-0 w-[196.728px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.997px] items-center justify-center relative size-full">
        <Icon11 />
        <Text22 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[27.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.9951 27.9951">
        <g id="Icon">
          <path d={svgPaths.p192e2f00} id="Vector" stroke="var(--stroke-0, #CBD5E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33293" />
          <path d="M5.83231 11.6646H22.1628" id="Vector_2" stroke="var(--stroke-0, #CBD5E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33293" />
          <path d="M17.4969 8.16524V15.164" id="Vector_3" stroke="var(--stroke-0, #CBD5E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33293" />
        </g>
      </svg>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[14.988px] relative shrink-0 w-[49.978px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[15px] left-[25.5px] not-italic text-[#cbd5e1] text-[10px] text-center top-[0.08px] tracking-[0.1172px]">パントリー</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[62.917px] relative shrink-0 w-[196.728px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.997px] items-center justify-center relative size-full">
        <Icon12 />
        <Text23 />
      </div>
    </div>
  );
}

function BottomNav() {
  return (
    <div className="bg-white content-stretch flex items-center pt-[1.084px] relative shrink-0 w-full" data-name="BottomNav">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[1.084px] inset-0 pointer-events-none" />
      <Button />
      <Button1 />
    </div>
  );
}

export default function KarappoMockupDesign() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Karappo mockup design">
      <App />
      <FloatingActionButton />
      <BottomNav />
    </div>
  );
}