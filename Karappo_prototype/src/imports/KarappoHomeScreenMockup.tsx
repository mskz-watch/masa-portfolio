import svgPaths from "./svg-85m7omgmh9";
import imgImage from "figma:asset/0d0a37c3fa545b446481b6df217a6cdcf60d8fd0.png";
import imgImage1 from "figma:asset/9b083f1929d99e0a047bc73753f3cb6e404a0eb1.png";
import imgImage2 from "figma:asset/7a6b5d527aa214afd04cb2687b31cf52fe7d4f51.png";
import { imgGroup } from "./svg-9baqm";

function Group() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9987 17.9987">
        <g id="Group">
          <path d={svgPaths.p253cb880} fill="var(--fill-0, #3E76BD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[23.998px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20.001px] relative shrink-0 w-[167.92px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Noto_Sans_JP:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#b0aeae] text-[14px] top-[-3.08px]">使いきりたい調味料を検索</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[47.98px] relative rounded-[16px] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[345.459px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.994px] items-center pl-[15.988px] relative size-full">
        <Icon />
        <Text />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[27.995px] relative shrink-0 w-[105.325px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#1d293d] text-[18px] tracking-[-0.44px]">今すぐ作れる</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[20.001px] relative shrink-0 w-[67.693px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Noto_Sans_JP:Medium',sans-serif] font-medium leading-[20px] left-[34px] text-[#99a1af] text-[14px] text-center top-[-3.08px] tracking-[-0.15px]">すべて見る</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[27.995px] relative shrink-0 w-[345.459px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Heading />
        <Button1 />
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="absolute h-[159.994px] left-0 top-0 w-[345.459px]" data-name="Image (スタミナ野菜炒め)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.999px_-0.999px] mask-size-[11.991px_11.991px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9914 10.9914">
          <g id="Group">
            <path d={svgPaths.p929bb00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999225" />
            <path d={svgPaths.p24b34a00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999225" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[11.991px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <ClipPathGroup />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16.004px] relative shrink-0 w-[26.149px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#314158] text-[12px] top-[-2.08px]">15分</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex gap-[3.997px] h-[23.998px] items-center left-[279.34px] pl-[7.994px] rounded-[36369700px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] top-[7.99px] w-[58.124px]" data-name="Container">
      <Icon1 />
      <Text1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[159.994px] relative shrink-0 w-full" data-name="Container">
      <Image />
      <Container5 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[27.995px] relative shrink-0 w-[140.433px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#1d293d] text-[18px] tracking-[-0.44px]">スタミナ野菜炒め</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[23.998px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9982 23.9982">
        <g id="Icon">
          <path d={svgPaths.pa9ea530} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66525" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[27.995px] relative shrink-0 w-[313.484px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Paragraph />
        <Icon2 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[23.998px] items-start left-0 top-0 w-[55.685px]" data-name="Text">
      <p className="font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#f58b3b] text-[16px] tracking-[-0.44px]">大さじ4</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[16.004px] left-[55.69px] top-[5.42px] w-[59.056px]" data-name="Text">
      <p className="absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#f58b3b] text-[12px] top-[-2.08px] tracking-[-0.44px] w-[60px] whitespace-pre-wrap">(60ml消費)</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[23.998px] left-[198.74px] top-0 w-[114.741px]" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[14.988px] left-[8.99px] top-[4.5px] w-[40.917px]" data-name="Text">
      <p className="absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[15px] left-0 text-[#314158] text-[10px] top-[-3.08px]">使用量Lv</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[12.5%_16.67%_8.33%_16.67%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99381 9.49257">
        <g id="Group">
          <path d={svgPaths.pa145e00} fill="var(--fill-0, #F58B3B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[11.991px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group2 />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[12.5%_16.67%_8.33%_16.67%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99381 9.49257">
        <g id="Group">
          <path d={svgPaths.pa145e00} fill="var(--fill-0, #F58B3B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[11.991px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group3 />
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[12.5%_16.67%_8.33%_16.67%]" data-name="Group">
      <div className="absolute inset-[12.5%_16.67%_8.33%_16.67%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99381 9.49257">
          <path d={svgPaths.pa145e00} fill="var(--fill-0, #F58B3B)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="flex-[1_0_0] h-[11.991px] min-h-px min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group4 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex h-[11.991px] items-center left-[53.91px] top-[6px] w-[35.972px]" data-name="Container">
      <Icon3 />
      <Icon4 />
      <Icon5 />
    </div>
  );
}

function Container12() {
  return <div className="absolute border-[#ffdbbf] border-[1.084px] border-solid h-[23.998px] left-0 rounded-[36369700px] top-0 w-[98.872px]" data-name="Container" />;
}

function Container10() {
  return (
    <div className="absolute bg-[#fffcf4] h-[23.998px] left-0 rounded-[36369700px] top-0 w-[98.872px]" data-name="Container">
      <Text4 />
      <Container11 />
      <Container12 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[23.998px] relative shrink-0 w-[313.484px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute bg-[#f8fafc] border-[#e2e8f0] border-[1.084px] border-solid h-[27.148px] left-0 rounded-[4px] top-0 w-[54.618px]" data-name="Text">
      <p className="absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] left-[6px] text-[#90a1b9] text-[10px] top-[1.91px] tracking-[0.12px]">キャベツ</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute bg-[#f8fafc] border-[#e2e8f0] border-[1.084px] border-solid h-[27.148px] left-[61.61px] rounded-[4px] top-0 w-[44.508px]" data-name="Text">
      <p className="absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] left-[6px] text-[#90a1b9] text-[10px] top-[1.91px] tracking-[0.12px]">玉ねぎ</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute bg-[#f8fafc] border-[#e2e8f0] border-[1.084px] border-solid h-[27.148px] left-[113.12px] rounded-[4px] top-0 w-[34.397px]" data-name="Text">
      <p className="absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] left-[6px] text-[#90a1b9] text-[10px] top-[1.91px] tracking-[0.12px]">豚肉</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute bg-[#3e76bd] h-[22.982px] left-[154.51px] rounded-[4px] top-[2.08px] w-[64.56px]" data-name="Text">
      <p className="absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] left-[6.99px] text-[10px] text-white top-[0.91px] tracking-[0.12px]">焼肉のたれ</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[27.148px] relative shrink-0 w-[313.484px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text5 />
        <Text6 />
        <Text7 />
        <Text8 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[127.104px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[7.994px] items-start pl-[15.988px] pt-[15.988px] relative size-full">
        <Container7 />
        <Container8 />
        <Container13 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white h-[287.098px] relative rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[345.459px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container4 />
        <Container6 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[27.995px] relative shrink-0 w-[193.087px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#1d293d] text-[18px] tracking-[-0.44px]">アボカドとエビのサラダ</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[23.998px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9982 23.9982">
        <g id="Icon">
          <path d={svgPaths.pa9ea530} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66525" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[27.995px] relative shrink-0 w-[313.484px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Paragraph1 />
        <Icon6 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute content-stretch flex h-[23.998px] items-start left-0 top-0 w-[55.685px]" data-name="Text">
      <p className="font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#f58b3b] text-[16px] tracking-[-0.44px]">大さじ1</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute h-[16.004px] left-[55.69px] top-[5.42px] w-[59.056px]" data-name="Text">
      <p className="absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#f58b3b] text-[12px] top-[-2.08px] tracking-[-0.44px] w-[60px] whitespace-pre-wrap">(15ml消費)</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[23.998px] left-[198.74px] top-0 w-[114.741px]" data-name="Container">
      <Text9 />
      <Text10 />
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute h-[14.988px] left-[8.99px] top-[4.5px] w-[40.917px]" data-name="Text">
      <p className="absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[15px] left-0 text-[#314158] text-[10px] top-[-3.08px]">使用量Lv</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[12.5%_16.67%_8.33%_16.67%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99381 9.49257">
        <g id="Group">
          <path d={svgPaths.pa145e00} fill="var(--fill-0, #F58B3B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[11.991px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group5 />
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[12.5%_16.67%_8.33%_16.67%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99381 9.49257">
        <g id="Group">
          <path d={svgPaths.pa145e00} fill="var(--fill-0, #D1D5DC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[11.991px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group6 />
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[12.5%_16.67%_8.33%_16.67%]" data-name="Group">
      <div className="absolute inset-[12.5%_16.67%_8.33%_16.67%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99381 9.49257">
          <path d={svgPaths.pa145e00} fill="var(--fill-0, #D1D5DC)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="flex-[1_0_0] h-[11.991px] min-h-px min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group7 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex h-[11.991px] items-center left-[53.91px] top-[6px] w-[35.972px]" data-name="Container">
      <Icon7 />
      <Icon8 />
      <Icon9 />
    </div>
  );
}

function Container21() {
  return <div className="absolute border-[#ffdbbf] border-[1.084px] border-solid h-[23.998px] left-0 rounded-[36369700px] top-0 w-[98.872px]" data-name="Container" />;
}

function Container19() {
  return (
    <div className="absolute bg-[#fffcf4] h-[23.998px] left-0 rounded-[36369700px] top-0 w-[98.872px]" data-name="Container">
      <Text11 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[23.998px] relative shrink-0 w-[313.484px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute bg-[#f8fafc] border-[#e2e8f0] border-[1.084px] border-solid h-[27.148px] left-0 rounded-[4px] top-0 w-[54.618px]" data-name="Text">
      <p className="absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] left-[6px] text-[#90a1b9] text-[10px] top-[1.91px] tracking-[0.12px]">アボカド</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute bg-[#f8fafc] border-[#e2e8f0] border-[1.084px] border-solid h-[27.148px] left-[61.61px] rounded-[4px] top-0 w-[34.397px]" data-name="Text">
      <p className="absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] left-[6px] text-[#90a1b9] text-[10px] top-[1.91px] tracking-[0.12px]">エビ</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute bg-[#f8fafc] border-[#e2e8f0] border-[1.084px] border-solid h-[27.148px] left-[103px] rounded-[4px] top-0 w-[44.508px]" data-name="Text">
      <p className="absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] left-[6px] text-[#90a1b9] text-[10px] top-[1.91px] tracking-[0.12px]">レタス</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute bg-[#f8fafc] border-[#e2e8f0] border-[1.084px] border-solid h-[27.148px] left-[154.51px] rounded-[4px] top-0 w-[64.238px]" data-name="Text">
      <p className="absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] left-[6px] text-[#90a1b9] text-[10px] top-[1.91px] tracking-[0.12px]">マヨネーズ</p>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute bg-[#3e76bd] h-[22.982px] left-[225.74px] rounded-[4px] top-[2.08px] w-[64.56px]" data-name="Text">
      <p className="absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] left-[6.99px] text-[10px] text-white top-[0.91px] tracking-[0.12px]">レモン果汁</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[27.148px] relative shrink-0 w-[313.484px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text12 />
        <Text13 />
        <Text14 />
        <Text15 />
        <Text16 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.994px] h-[127.104px] items-start left-0 pl-[15.988px] pt-[15.988px] top-[159.99px] w-[345.459px]" data-name="Container">
      <Container16 />
      <Container17 />
      <Container22 />
    </div>
  );
}

function Image1() {
  return (
    <div className="absolute h-[159.994px] left-0 top-0 w-[345.459px]" data-name="Image (アボカドとエビのサラダ)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.999px_-0.999px] mask-size-[11.991px_11.991px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9914 10.9914">
          <g id="Group">
            <path d={svgPaths.p929bb00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999225" />
            <path d={svgPaths.p24b34a00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999225" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group8 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[11.991px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <ClipPathGroup1 />
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[16.004px] relative shrink-0 w-[26.149px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#314158] text-[12px] top-[-2.08px]">10分</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex gap-[3.997px] h-[23.998px] items-center left-[279.34px] pl-[7.994px] rounded-[36369700px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] top-[7.99px] w-[58.124px]" data-name="Container">
      <Icon10 />
      <Text17 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[159.994px] left-0 top-0 w-[345.459px]" data-name="Container">
      <Image1 />
      <Container24 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-white h-[287.098px] relative rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[345.459px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container15 />
        <Container23 />
      </div>
    </div>
  );
}

function Image2() {
  return (
    <div className="absolute h-[159.994px] left-0 top-0 w-[345.459px]" data-name="Image (ナンプラー香るチャーハン)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.999px_-0.999px] mask-size-[11.991px_11.991px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9914 10.9914">
          <g id="Group">
            <path d={svgPaths.p929bb00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999225" />
            <path d={svgPaths.p24b34a00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999225" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group9 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[11.991px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <ClipPathGroup2 />
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[16.004px] relative shrink-0 w-[26.149px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#314158] text-[12px] top-[-2.08px]">15分</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex gap-[3.997px] h-[23.998px] items-center left-[279.34px] pl-[7.994px] rounded-[36369700px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] top-[7.99px] w-[58.124px]" data-name="Container">
      <Icon11 />
      <Text18 />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[159.994px] relative shrink-0 w-full" data-name="Container">
      <Image2 />
      <Container27 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[27.995px] relative shrink-0 w-[209.565px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#1d293d] text-[18px] tracking-[-0.44px]">ナンプラー香るチャーハン</p>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[23.998px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9982 23.9982">
        <g id="Icon">
          <path d={svgPaths.pa9ea530} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66525" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[27.995px] relative shrink-0 w-[313.484px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Paragraph2 />
        <Icon12 />
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute content-stretch flex h-[23.998px] items-start left-0 top-0 w-[55.685px]" data-name="Text">
      <p className="font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#f58b3b] text-[16px] tracking-[-0.44px]">大さじ4</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute h-[16.004px] left-[55.69px] top-[5.42px] w-[59.056px]" data-name="Text">
      <p className="absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#f58b3b] text-[12px] top-[-2.08px] tracking-[-0.44px] w-[60px] whitespace-pre-wrap">(60ml消費)</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[23.998px] left-[198.74px] top-0 w-[114.741px]" data-name="Container">
      <Text19 />
      <Text20 />
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute h-[14.988px] left-[8.99px] top-[4.5px] w-[40.917px]" data-name="Text">
      <p className="absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[15px] left-0 text-[#314158] text-[10px] top-[-3.08px]">使用量Lv</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[12.5%_16.67%_8.33%_16.67%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99381 9.49257">
        <g id="Group">
          <path d={svgPaths.pa145e00} fill="var(--fill-0, #F58B3B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[11.991px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group10 />
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute inset-[12.5%_16.67%_8.33%_16.67%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99381 9.49257">
        <g id="Group">
          <path d={svgPaths.pa145e00} fill="var(--fill-0, #F58B3B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[11.991px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group11 />
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[12.5%_16.67%_8.33%_16.67%]" data-name="Group">
      <div className="absolute inset-[12.5%_16.67%_8.33%_16.67%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99381 9.49257">
          <path d={svgPaths.pa145e00} fill="var(--fill-0, #F58B3B)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="flex-[1_0_0] h-[11.991px] min-h-px min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group12 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex h-[11.991px] items-center left-[53.91px] top-[6px] w-[35.972px]" data-name="Container">
      <Icon13 />
      <Icon14 />
      <Icon15 />
    </div>
  );
}

function Container34() {
  return <div className="absolute border-[#ffdbbf] border-[1.084px] border-solid h-[23.998px] left-0 rounded-[36369700px] top-0 w-[98.872px]" data-name="Container" />;
}

function Container32() {
  return (
    <div className="absolute bg-[#fffcf4] h-[23.998px] left-0 rounded-[36369700px] top-0 w-[98.872px]" data-name="Container">
      <Text21 />
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[23.998px] relative shrink-0 w-[313.484px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container31 />
        <Container32 />
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute bg-[#f8fafc] border-[#e2e8f0] border-[1.084px] border-solid h-[27.148px] left-0 rounded-[4px] top-0 w-[34.397px]" data-name="Text">
      <p className="absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] left-[6px] text-[#90a1b9] text-[10px] top-[1.91px] tracking-[0.12px]">ご飯</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute bg-[#f8fafc] border-[#e2e8f0] border-[1.084px] border-solid h-[27.148px] left-[41.39px] rounded-[4px] top-0 w-[44.508px]" data-name="Text">
      <p className="absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] left-[6px] text-[#90a1b9] text-[10px] top-[1.91px] tracking-[0.12px]">長ねぎ</p>
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute bg-[#f8fafc] border-[#e2e8f0] border-[1.084px] border-solid h-[27.148px] left-[92.89px] rounded-[4px] top-0 w-[34.397px]" data-name="Text">
      <p className="absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] left-[6px] text-[#90a1b9] text-[10px] top-[1.91px] tracking-[0.12px]">えび</p>
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute bg-[#f8fafc] border-[#e2e8f0] border-[1.084px] border-solid h-[27.148px] left-[134.29px] rounded-[4px] top-0 w-[24.286px]" data-name="Text">
      <p className="absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] left-[6px] text-[#90a1b9] text-[10px] top-[1.91px] tracking-[0.12px]">卵</p>
    </div>
  );
}

function Text26() {
  return (
    <div className="absolute bg-[#3e76bd] h-[22.982px] left-[165.57px] rounded-[4px] top-[2.08px] w-[64.272px]" data-name="Text">
      <p className="absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] left-[6.99px] text-[10px] text-white top-[0.91px] tracking-[0.12px]">ナンプラー</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[27.148px] relative shrink-0 w-[313.484px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text22 />
        <Text23 />
        <Text24 />
        <Text25 />
        <Text26 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[127.104px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[7.994px] items-start pl-[15.988px] pt-[15.987px] relative size-full">
        <Container29 />
        <Container30 />
        <Container35 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] w-[345.459px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container26 />
        <Container28 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[893.269px] relative shrink-0 w-[345.459px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15.988px] items-start relative size-full">
        <Container3 />
        <Container14 />
        <Container25 />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.988px] h-[735.917px] items-start left-0 overflow-clip pl-[23.998px] pt-[23.998px] top-[51.98px] w-[393.456px]" data-name="Main Content">
      <Button />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[23.998px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9982 23.9982">
        <g id="Icon">
          <path d="M4.99963 11.9991H18.9986" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99985" />
          <path d="M11.9991 4.99963V18.9986" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99985" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#1d293d] content-stretch flex items-center justify-center left-[325.47px] pr-[0.017px] rounded-[36369700px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[47.996px] top-[723.96px]" data-name="Button">
      <Icon16 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[#fffcf4] h-[851.946px] left-0 top-0 w-[393.456px]" data-name="Container">
      <MainContent />
      <Button2 />
    </div>
  );
}

function Pq() {
  return (
    <div className="absolute bg-[#e8e8e8] h-[851.946px] left-0 top-0 w-[393.456px]" data-name="pq">
      <Container />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[27.995px] relative shrink-0 w-[75.314px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[18px] text-white tracking-[0.01px]">Karappo</p>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[23.998px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9982 23.9982">
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
    <div className="absolute bg-[#3e76bd] content-stretch flex h-[51.976px] items-center justify-between left-0 px-[23.998px] top-0 w-[393.456px]" data-name="Header">
      <Paragraph3 />
      <Icon17 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[27.995px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.9951 27.9951">
        <g id="Icon">
          <path d={svgPaths.p28dc7b00} id="Vector" stroke="var(--stroke-0, #3E76BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33293" />
          <path d={svgPaths.p23600700} id="Vector_2" stroke="var(--stroke-0, #3E76BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33293" />
        </g>
      </svg>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[14.988px] relative shrink-0 w-[30.044px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Noto_Sans_JP:Medium',sans-serif] font-medium leading-[15px] left-[15px] text-[#3e76bd] text-[10px] text-center top-[-3.08px] tracking-[0.12px]">ホーム</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="flex-[1_0_0] h-[62.968px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.997px] items-center justify-center relative size-full">
        <Icon18 />
        <Text27 />
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[27.995px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.9951 27.9951">
        <g id="Icon">
          <path d={svgPaths.p192e2f00} id="Vector" stroke="var(--stroke-0, #CBD5E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33293" />
          <path d="M5.83231 11.6646H22.1628" id="Vector_2" stroke="var(--stroke-0, #CBD5E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33293" />
          <path d="M17.4969 8.16524V15.164" id="Vector_3" stroke="var(--stroke-0, #CBD5E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33293" />
        </g>
      </svg>
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[14.988px] relative shrink-0 w-[51.079px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Noto_Sans_JP:Medium',sans-serif] font-medium leading-[15px] left-[26.5px] text-[#cbd5e1] text-[10px] text-center top-[-3.08px] tracking-[0.12px]">パントリー</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="flex-[1_0_0] h-[62.968px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.997px] items-center justify-center relative size-full">
        <Icon19 />
        <Text28 />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute bg-white content-stretch flex h-[64.052px] items-center left-0 pt-[1.084px] top-[787.89px] w-[393.456px]" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[1.084px] inset-0 pointer-events-none" />
      <Button3 />
      <Button4 />
    </div>
  );
}

export default function KarappoHomeScreenMockup() {
  return (
    <div className="bg-white relative size-full" data-name="Karappo Home Screen Mockup">
      <Pq />
      <Header />
      <Navigation />
    </div>
  );
}