import svgPaths from "./svg-4mcmx3f9go";
import imgImage from "figma:asset/7a6b5d527aa214afd04cb2687b31cf52fe7d4f51.png";
import imgImage1 from "figma:asset/92bf5a9990d5b4dc22b1a14e9db78a7b3a5528ff.png";
import { imgGroup, imgGroup1 } from "./svg-y9rqu";

function Group() {
  return (
    <div className="absolute inset-[8.33%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-1.333px] mask-size-[15.999px_15.999px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <div className="absolute inset-[-5%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3325 14.6657">
          <g id="Group">
            <path d="M3.99976 0.666624V3.33313" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
            <path d="M9.33281 0.666624V3.33313" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
            <path d={svgPaths.p4857100} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
            <path d="M0.666624 5.99964H12.6659" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[15.999px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <ClipPathGroup />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[15.999px] relative shrink-0 w-[186.068px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Noto_Sans_JP:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-2.22px]">まずは1週間、試してみませんか？</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex gap-[7.995px] h-[15.999px] items-center left-[16px] top-[16px] w-[360.929px]" data-name="Container">
      <Icon />
      <Text />
    </div>
  );
}

function Container8() {
  return <div className="absolute bg-[#fff7ed] left-[232.94px] opacity-50 rounded-bl-[20536500px] size-[127.992px] top-[-39.99px]" data-name="Container" />;
}

function Icon1() {
  return (
    <div className="absolute left-[308px] size-[39.011px] top-[10.01px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.0109 39.0109">
        <g id="Icon" opacity="0.5">
          <path d={svgPaths.p1cd80480} id="Vector" opacity="0.5" stroke="var(--stroke-0, #FF980D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.64889" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute bg-[#eb6e10] content-stretch flex items-center justify-center left-0 px-[16px] py-[4px] rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] top-0" data-name="Text">
      <p className="font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-white tracking-[0.12px]">おすすめ</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[27.991px] left-0 top-[31.99px] w-[244.489px]" data-name="Heading 3">
      <p className="absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#1e2939] text-[20px] top-[-2.61px] tracking-[-0.45px]">1週間で確実に減らすコース</p>
    </div>
  );
}

function Container12() {
  return <div className="absolute border-[#ffedd4] border-[0.612px] border-solid h-[33.978px] left-0 rounded-[10px] top-0 w-[280.226px]" data-name="Container" />;
}

function Container11() {
  return (
    <div className="absolute bg-[rgba(255,247,237,0.8)] h-[33.978px] left-0 rounded-[10px] top-[67.97px] w-[280.226px]" data-name="Container">
      <p className="absolute font-['Noto_Sans_JP:Medium',sans-serif] font-medium leading-[16px] left-[13px] text-[#ca3500] text-[12px] top-[5.66px]">一般的なボトル(150ml)の1/2以上を使えます！</p>
      <Container12 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[101.952px] relative shrink-0 w-[320.936px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text1 />
        <Heading />
        <Container11 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[246.956px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#1e2939] text-[14px] top-[-2.61px] tracking-[-0.15px]">豚バラとキャベツのナンプラー炒め</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[11.992px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9921 11.9921">
        <g id="Icon">
          <path d={svgPaths.p375bce00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999344" />
          <path d={svgPaths.p1e55da80} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999344" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[15.004px] relative shrink-0 w-[60.697px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.12px]">飽きない和風</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[15.004px] relative shrink-0 w-[246.956px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.997px] items-center relative size-full">
        <Icon2 />
        <Text2 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.999px] h-[36.999px] items-start left-[60.98px] top-[13px] w-[246.956px]" data-name="Container">
      <Paragraph />
      <Container17 />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[19.996px] left-[11.07px] top-[7.99px] w-[13.847px]" data-name="Text">
      <p className="absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-2.61px] tracking-[-0.15px]">月</p>
    </div>
  );
}

function Container19() {
  return <div className="absolute bg-[rgba(255,255,255,0)] border-[#f3f4f6] border-[0.612px] border-solid left-0 rounded-[20536500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] size-[35.995px] top-0" data-name="Container" />;
}

function Container18() {
  return (
    <div className="absolute bg-white left-[13px] rounded-[20536500px] size-[35.995px] top-[13.49px]" data-name="Container">
      <Text3 />
      <Container19 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[62.992px] left-0 top-0 w-[320.936px]" data-name="Container">
      <Container16 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return <div className="absolute border-[#f3f4f6] border-[0.612px] border-solid h-[62.992px] left-0 rounded-[14px] top-0 w-[320.936px]" data-name="Container" />;
}

function Container14() {
  return (
    <div className="absolute bg-[rgba(249,250,251,0.8)] h-[62.992px] left-0 rounded-[14px] top-0 w-[320.936px]" data-name="Container">
      <Container15 />
      <Container20 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[246.956px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#1e2939] text-[14px] top-[-2.61px] tracking-[-0.15px]">エスニック風春雨スープ</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[12.58%_12.5%_8.21%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.499px_-1.509px] mask-size-[11.992px_11.992px]" data-name="Group" style={{ maskImage: `url('${imgGroup1}')` }}>
      <div className="absolute inset-[-5.26%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.99345 10.4975">
          <g id="Group">
            <path d={svgPaths.p15360780} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999344" />
            <path d={svgPaths.p204fa380} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999344" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[11.992px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <ClipPathGroup1 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[15.004px] relative shrink-0 w-[60.697px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.12px]">余り野菜活用</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[15.004px] relative shrink-0 w-[246.956px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.997px] items-center relative size-full">
        <Icon3 />
        <Text4 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.999px] h-[36.999px] items-start left-[60.98px] top-[13px] w-[246.956px]" data-name="Container">
      <Paragraph1 />
      <Container24 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[19.996px] left-[11.07px] top-[7.99px] w-[13.847px]" data-name="Text">
      <p className="absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-2.61px] tracking-[-0.15px]">水</p>
    </div>
  );
}

function Container26() {
  return <div className="absolute bg-[rgba(255,255,255,0)] border-[#f3f4f6] border-[0.612px] border-solid left-0 rounded-[20536500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] size-[35.995px] top-0" data-name="Container" />;
}

function Container25() {
  return (
    <div className="absolute bg-white left-[13px] rounded-[20536500px] size-[35.995px] top-[13.49px]" data-name="Container">
      <Text5 />
      <Container26 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[62.992px] left-0 top-0 w-[320.936px]" data-name="Container">
      <Container23 />
      <Container25 />
    </div>
  );
}

function Container27() {
  return <div className="absolute border-[#f3f4f6] border-[0.612px] border-solid h-[62.992px] left-0 rounded-[14px] top-0 w-[320.936px]" data-name="Container" />;
}

function Container21() {
  return (
    <div className="absolute bg-[rgba(249,250,251,0.8)] h-[62.992px] left-0 rounded-[14px] top-[74.98px] w-[320.936px]" data-name="Container">
      <Container22 />
      <Container27 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[246.956px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#1e2939] text-[14px] top-[-2.61px] tracking-[-0.15px]">手羽元のナンプラー煮込み</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[12.5%_20.83%_8.33%_20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.498px_-1.499px] mask-size-[11.992px_11.992px]" data-name="Group" style={{ maskImage: `url('${imgGroup1}')` }}>
      <div className="absolute inset-[-5.26%_-7.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99475 10.4931">
          <g id="Group">
            <path d={svgPaths.p1eab32f0} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999344" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group2 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[11.992px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <ClipPathGroup2 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[15.004px] relative shrink-0 w-[50.579px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.12px]">大量消費！</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[15.004px] relative shrink-0 w-[246.956px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.997px] items-center relative size-full">
        <Icon4 />
        <Text6 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.999px] h-[36.999px] items-start left-[60.98px] top-[13px] w-[246.956px]" data-name="Container">
      <Paragraph2 />
      <Container31 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute h-[19.996px] left-[11.07px] top-[7.99px] w-[13.847px]" data-name="Text">
      <p className="absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-2.61px] tracking-[-0.15px]">金</p>
    </div>
  );
}

function Container33() {
  return <div className="absolute bg-[rgba(255,255,255,0)] border-[#f3f4f6] border-[0.612px] border-solid left-0 rounded-[20536500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] size-[35.995px] top-0" data-name="Container" />;
}

function Container32() {
  return (
    <div className="absolute bg-white left-[13px] rounded-[20536500px] size-[35.995px] top-[13.49px]" data-name="Container">
      <Text7 />
      <Container33 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[62.992px] left-0 top-0 w-[320.936px]" data-name="Container">
      <Container30 />
      <Container32 />
    </div>
  );
}

function Container34() {
  return <div className="absolute border-[#f3f4f6] border-[0.612px] border-solid h-[62.992px] left-0 rounded-[14px] top-0 w-[320.936px]" data-name="Container" />;
}

function Container28() {
  return (
    <div className="absolute bg-[rgba(249,250,251,0.8)] h-[62.992px] left-0 rounded-[14px] top-[149.97px] w-[320.936px]" data-name="Container">
      <Container29 />
      <Container34 />
    </div>
  );
}

function Container13() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[320.936px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container14 />
        <Container21 />
        <Container28 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[15.999px] relative shrink-0 w-[131.358px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#99a1af] text-[12px] top-[-2.22px]">このコースの合計消費量</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute h-[44.994px] left-0 top-0 w-[57.656px]" data-name="Text">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[45px] left-0 not-italic text-[#ff6900] text-[30px] top-[0.28px] tracking-[0.4px]">120</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute h-[23.994px] left-[57.66px] top-[15.3px] w-[18.332px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#ff6900] text-[16px] top-[-0.55px] tracking-[-0.31px]">ml</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[44.994px] relative shrink-0 w-[75.988px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text9 />
        <Text10 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[44.994px] relative shrink-0 w-[320.936px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between px-[3.997px] relative size-full">
        <Text8 />
        <Container36 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-[124.712px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-center text-white tracking-[-0.31px]">このコースで決定</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[15.999px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.999 15.999">
        <g id="Icon">
          <path d={svgPaths.p13c82c80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#eb6e10] h-[47.978px] relative rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-[279.997px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[15.999px] items-center justify-center relative size-full">
        <Text11 />
        <Icon5 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[47.978px] relative shrink-0 w-[320.936px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center pr-[0.01px] relative size-full">
        <Button />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.999px] h-[495.873px] items-start left-0 pl-[19.996px] py-[19.996px] top-0 w-[360.929px]" data-name="Container">
      <Container10 />
      <Container13 />
      <Container35 />
      <Container37 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-white h-[495.873px] left-[16px] overflow-clip rounded-[16px] shadow-[0px_4px_20px_-4px_#c1c1c1] top-[43.99px] w-[360.929px]" data-name="Container">
      <Container8 />
      <Icon1 />
      <Container9 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[539.863px] relative shrink-0 w-[392.927px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[8.33%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-1.333px] mask-size-[15.999px_15.999px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <div className="absolute inset-[-5%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3325 14.6657">
          <g id="Group">
            <path d="M3.99976 0.666624V3.33313" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
            <path d="M9.33281 0.666624V3.33313" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
            <path d={svgPaths.p4857100} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
            <path d="M0.666624 5.99964H12.6659" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group3 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[15.999px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <ClipPathGroup3 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[15.999px] relative shrink-0 w-[191.577px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Noto_Sans_JP:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-2.22px]">じっくり計画して使い切りたいなら</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex gap-[7.995px] h-[15.999px] items-center left-0 top-0 w-[344.94px]" data-name="Container">
      <Icon6 />
      <Text12 />
    </div>
  );
}

function Container42() {
  return <div className="absolute bg-[#f0fdf4] left-[232.95px] opacity-60 rounded-bl-[20536500px] size-[111.993px] top-[-32px]" data-name="Container" />;
}

function Icon7() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[10.72%_11.3%_8.93%_11.3%]" data-name="Vector">
        <div className="absolute inset-[-4.44%_-4.61%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.0514 28">
            <path d={svgPaths.pdd7c500} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.28571" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[298.01px] opacity-30 size-[32px] top-[14.15px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute bg-[#00a63e] content-stretch flex items-center justify-center left-0 px-[16px] py-[4px] rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] top-0" data-name="Text">
      <p className="font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-white tracking-[0.12px]">しっかり使い切り</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[27.991px] left-0 top-[31.99px] w-[264.428px]" data-name="Heading 3">
      <p className="absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#1e2939] text-[20px] top-[-2.61px] tracking-[-0.45px]">1ヶ月で完全に使い切るコース</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bg-[rgba(240,253,244,0.8)] content-stretch flex items-center justify-center left-0 px-[12px] py-[6px] rounded-[10px] top-[67.97px]" data-name="Container">
      <p className="font-['Noto_Sans_JP:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#15803d] text-[12px]">1ヶ月で300mlをまるごと使い切れます！</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[102px] relative shrink-0 w-[264px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text13 />
        <Heading1 />
        <Container46 />
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[8.33%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-1.333px] mask-size-[15.999px_15.999px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <div className="absolute inset-[-5%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3325 14.6657">
          <g id="Group">
            <path d="M3.99976 0.666624V3.33313" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
            <path d="M9.33281 0.666624V3.33313" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
            <path d={svgPaths.p4857100} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
            <path d="M0.666624 5.99964H12.6659" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group4 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[15.999px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <ClipPathGroup4 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[15.999px] relative shrink-0 w-[62.083px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#4a5565] text-[12px] top-[-2.22px]">2026年 1月</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex gap-[5.996px] h-[15.999px] items-center justify-center left-[14.6px] top-[14.6px] w-[275.741px]" data-name="Container">
      <Icon8 />
      <Text14 />
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[15.004px] relative shrink-0 w-[10.003px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[#99a1af] text-[10px]">月</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex h-[15.004px] items-center justify-center left-0 pr-[0.01px] top-0 w-[39.39px]" data-name="Container">
      <Text15 />
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[15.004px] relative shrink-0 w-[10.003px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[#99a1af] text-[10px]">火</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex h-[15.004px] items-center justify-center left-[39.39px] pr-[0.01px] top-0 w-[39.39px]" data-name="Container">
      <Text16 />
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[15.004px] relative shrink-0 w-[10.003px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[#99a1af] text-[10px]">水</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex h-[15.004px] items-center justify-center left-[78.78px] pr-[0.01px] top-0 w-[39.39px]" data-name="Container">
      <Text17 />
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[15.004px] relative shrink-0 w-[10.003px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[#99a1af] text-[10px]">木</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex h-[15.004px] items-center justify-center left-[118.17px] pr-[0.01px] top-0 w-[39.39px]" data-name="Container">
      <Text18 />
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[15.004px] relative shrink-0 w-[10.003px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[#99a1af] text-[10px]">金</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex h-[15.004px] items-center justify-center left-[157.56px] pr-[0.01px] top-0 w-[39.39px]" data-name="Container">
      <Text19 />
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[15.004px] relative shrink-0 w-[10.003px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[#99a1af] text-[10px]">土</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex h-[15.004px] items-center justify-center left-[196.95px] pr-[0.01px] top-0 w-[39.39px]" data-name="Container">
      <Text20 />
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[15.004px] relative shrink-0 w-[10.003px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[#99a1af] text-[10px]">日</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex h-[15.004px] items-center justify-center left-[236.34px] top-0 w-[39.4px]" data-name="Container">
      <Text21 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[15.004px] left-[14.6px] top-[42.59px] w-[275.741px]" data-name="Container">
      <Container50 />
      <Container51 />
      <Container52 />
      <Container53 />
      <Container54 />
      <Container55 />
      <Container56 />
    </div>
  );
}

function Container58() {
  return <div className="absolute h-[29.999px] left-0 top-0 w-[39.39px]" data-name="Container" />;
}

function Container59() {
  return <div className="absolute h-[29.999px] left-[39.39px] top-0 w-[39.39px]" data-name="Container" />;
}

function Container60() {
  return <div className="absolute h-[29.999px] left-[78.78px] top-0 w-[39.39px]" data-name="Container" />;
}

function Text22() {
  return (
    <div className="h-[16.496px] relative shrink-0 w-[5.202px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.22px]">1</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="relative rounded-[20536500px] shrink-0 size-[25.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text22 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex h-[29.999px] items-center justify-center left-[118.17px] pr-[0.01px] top-0 w-[39.39px]" data-name="Container">
      <Container62 />
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[16.496px] relative shrink-0 w-[6.933px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-0 not-italic text-[11px] text-white top-[0.22px]">2</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="bg-[#00a63e] relative rounded-[20536500px] shrink-0 size-[25.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.01px] relative size-full">
        <Text23 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex h-[29.999px] items-center justify-center left-[157.56px] pr-[0.01px] top-0 w-[39.39px]" data-name="Container">
      <Container64 />
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[16.496px] relative shrink-0 w-[7.086px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.22px]">3</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="relative rounded-[20536500px] shrink-0 size-[25.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.01px] relative size-full">
        <Text24 />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex h-[29.999px] items-center justify-center left-[196.95px] pr-[0.01px] top-0 w-[39.39px]" data-name="Container">
      <Container66 />
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[16.496px] relative shrink-0 w-[7.459px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-0 not-italic text-[11px] text-white top-[0.22px]">4</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="bg-[#00a63e] relative rounded-[20536500px] shrink-0 size-[25.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text25 />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex h-[29.999px] items-center justify-center left-[236.34px] top-0 w-[39.4px]" data-name="Container">
      <Container68 />
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[16.496px] relative shrink-0 w-[6.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.22px]">5</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="relative rounded-[20536500px] shrink-0 size-[25.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text26 />
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex h-[29.999px] items-center justify-center left-0 pr-[0.01px] top-[32px] w-[39.39px]" data-name="Container">
      <Container70 />
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[16.496px] relative shrink-0 w-[7.268px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-0 not-italic text-[11px] text-white top-[0.22px]">6</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="bg-[#00a63e] relative rounded-[20536500px] shrink-0 size-[25.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text27 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute content-stretch flex h-[29.999px] items-center justify-center left-[39.39px] pr-[0.01px] top-[32px] w-[39.39px]" data-name="Container">
      <Container72 />
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[16.496px] relative shrink-0 w-[6.369px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.22px]">7</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="relative rounded-[20536500px] shrink-0 size-[25.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text28 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute content-stretch flex h-[29.999px] items-center justify-center left-[78.78px] pr-[0.01px] top-[32px] w-[39.39px]" data-name="Container">
      <Container74 />
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[16.496px] relative shrink-0 w-[7.268px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-0 not-italic text-[11px] text-white top-[0.22px]">8</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="bg-[#00a63e] relative rounded-[20536500px] shrink-0 size-[25.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text29 />
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute content-stretch flex h-[29.999px] items-center justify-center left-[118.17px] pr-[0.01px] top-[32px] w-[39.39px]" data-name="Container">
      <Container76 />
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[16.496px] relative shrink-0 w-[7px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.22px]">9</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="relative rounded-[20536500px] shrink-0 size-[25.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text30 />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute content-stretch flex h-[29.999px] items-center justify-center left-[157.56px] pr-[0.01px] top-[32px] w-[39.39px]" data-name="Container">
      <Container78 />
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[16.496px] relative shrink-0 w-[12.948px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-0 not-italic text-[11px] text-white top-[0.22px]">10</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="bg-[#00a63e] relative rounded-[20536500px] shrink-0 size-[25.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text31 />
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute content-stretch flex h-[29.999px] items-center justify-center left-[196.95px] pr-[0.01px] top-[32px] w-[39.39px]" data-name="Container">
      <Container80 />
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[16.496px] relative shrink-0 w-[10.405px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.22px]">11</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="relative rounded-[20536500px] shrink-0 size-[25.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text32 />
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute content-stretch flex h-[29.999px] items-center justify-center left-[236.34px] top-[32px] w-[39.4px]" data-name="Container">
      <Container82 />
    </div>
  );
}

function Text33() {
  return (
    <div className="h-[16.496px] relative shrink-0 w-[11.954px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.22px]">12</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="relative rounded-[20536500px] shrink-0 size-[25.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text33 />
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute content-stretch flex h-[29.999px] items-center justify-center left-0 pr-[0.01px] top-[64px] w-[39.39px]" data-name="Container">
      <Container84 />
    </div>
  );
}

function Text34() {
  return (
    <div className="h-[16.496px] relative shrink-0 w-[12.633px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-0 not-italic text-[11px] text-white top-[0.22px]">13</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="bg-[#00a63e] relative rounded-[20536500px] shrink-0 size-[25.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.01px] relative size-full">
        <Text34 />
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute content-stretch flex h-[29.999px] items-center justify-center left-[39.39px] pr-[0.01px] top-[64px] w-[39.39px]" data-name="Container">
      <Container86 />
    </div>
  );
}

function Text35() {
  return (
    <div className="h-[16.496px] relative shrink-0 w-[12.394px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.22px]">14</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="relative rounded-[20536500px] shrink-0 size-[25.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text35 />
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute content-stretch flex h-[29.999px] items-center justify-center left-[78.78px] pr-[0.01px] top-[64px] w-[39.39px]" data-name="Container">
      <Container88 />
    </div>
  );
}

function Text36() {
  return (
    <div className="h-[16.496px] relative shrink-0 w-[12.47px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-0 not-italic text-[11px] text-white top-[0.22px]">15</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="bg-[#00a63e] relative rounded-[20536500px] shrink-0 size-[25.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text36 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute content-stretch flex h-[29.999px] items-center justify-center left-[118.17px] pr-[0.01px] top-[64px] w-[39.39px]" data-name="Container">
      <Container90 />
    </div>
  );
}

function Text37() {
  return (
    <div className="h-[16.496px] relative shrink-0 w-[12.193px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.22px]">16</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="relative rounded-[20536500px] shrink-0 size-[25.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.01px] relative size-full">
        <Text37 />
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute content-stretch flex h-[29.999px] items-center justify-center left-[157.56px] pr-[0.01px] top-[64px] w-[39.39px]" data-name="Container">
      <Container92 />
    </div>
  );
}

function Text38() {
  return (
    <div className="h-[16.496px] relative shrink-0 w-[11.925px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-0 not-italic text-[11px] text-white top-[0.22px]">17</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="bg-[#00a63e] relative rounded-[20536500px] shrink-0 size-[25.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.01px] relative size-full">
        <Text38 />
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute content-stretch flex h-[29.999px] items-center justify-center left-[196.95px] pr-[0.01px] top-[64px] w-[39.39px]" data-name="Container">
      <Container94 />
    </div>
  );
}

function Text39() {
  return (
    <div className="h-[16.496px] relative shrink-0 w-[12.145px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.22px]">18</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="relative rounded-[20536500px] shrink-0 size-[25.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text39 />
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="absolute content-stretch flex h-[29.999px] items-center justify-center left-[236.34px] top-[64px] w-[39.4px]" data-name="Container">
      <Container96 />
    </div>
  );
}

function Text40() {
  return (
    <div className="h-[16.496px] relative shrink-0 w-[12.193px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.22px]">19</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="relative rounded-[20536500px] shrink-0 size-[25.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.01px] relative size-full">
        <Text40 />
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute content-stretch flex h-[29.999px] items-center justify-center left-0 pr-[0.01px] top-[95.99px] w-[39.39px]" data-name="Container">
      <Container98 />
    </div>
  );
}

function Text41() {
  return (
    <div className="h-[16.496px] relative shrink-0 w-[14.498px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-0 not-italic text-[11px] text-white top-[0.22px]">20</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="bg-[#00a63e] relative rounded-[20536500px] shrink-0 size-[25.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text41 />
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute content-stretch flex h-[29.999px] items-center justify-center left-[39.39px] pr-[0.01px] top-[95.99px] w-[39.39px]" data-name="Container">
      <Container100 />
    </div>
  );
}

function Text42() {
  return (
    <div className="h-[16.496px] relative shrink-0 w-[11.954px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.22px]">21</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="relative rounded-[20536500px] shrink-0 size-[25.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text42 />
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute content-stretch flex h-[29.999px] items-center justify-center left-[78.78px] pr-[0.01px] top-[95.99px] w-[39.39px]" data-name="Container">
      <Container102 />
    </div>
  );
}

function Text43() {
  return (
    <div className="h-[16.496px] relative shrink-0 w-[13.857px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-0 not-italic text-[11px] text-white top-[0.22px]">22</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="bg-[#00a63e] relative rounded-[20536500px] shrink-0 size-[25.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.01px] relative size-full">
        <Text43 />
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute content-stretch flex h-[29.999px] items-center justify-center left-[118.17px] pr-[0.01px] top-[95.99px] w-[39.39px]" data-name="Container">
      <Container104 />
    </div>
  );
}

function Text44() {
  return (
    <div className="h-[16.496px] relative shrink-0 w-[13.838px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.22px]">23</p>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="relative rounded-[20536500px] shrink-0 size-[25.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.01px] relative size-full">
        <Text44 />
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="absolute content-stretch flex h-[29.999px] items-center justify-center left-[157.56px] pr-[0.01px] top-[95.99px] w-[39.39px]" data-name="Container">
      <Container106 />
    </div>
  );
}

function Text45() {
  return (
    <div className="h-[16.496px] relative shrink-0 w-[14.211px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-0 not-italic text-[11px] text-white top-[0.22px]">24</p>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="bg-[#00a63e] relative rounded-[20536500px] shrink-0 size-[25.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text45 />
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="absolute content-stretch flex h-[29.999px] items-center justify-center left-[196.95px] pr-[0.01px] top-[95.99px] w-[39.39px]" data-name="Container">
      <Container108 />
    </div>
  );
}

function Text46() {
  return (
    <div className="h-[16.496px] relative shrink-0 w-[13.57px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.22px]">25</p>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="relative rounded-[20536500px] shrink-0 size-[25.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.01px] relative size-full">
        <Text46 />
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute content-stretch flex h-[29.999px] items-center justify-center left-[236.34px] top-[95.99px] w-[39.4px]" data-name="Container">
      <Container110 />
    </div>
  );
}

function Text47() {
  return (
    <div className="h-[16.496px] relative shrink-0 w-[13.742px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.22px]">26</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="relative rounded-[20536500px] shrink-0 size-[25.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.01px] relative size-full">
        <Text47 />
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="absolute content-stretch flex h-[29.999px] items-center justify-center left-0 pr-[0.01px] top-[127.99px] w-[39.39px]" data-name="Container">
      <Container112 />
    </div>
  );
}

function Text48() {
  return (
    <div className="h-[16.496px] relative shrink-0 w-[13.474px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-0 not-italic text-[11px] text-white top-[0.22px]">27</p>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="bg-[#00a63e] relative rounded-[20536500px] shrink-0 size-[25.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.01px] relative size-full">
        <Text48 />
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="absolute content-stretch flex h-[29.999px] items-center justify-center left-[39.39px] pr-[0.01px] top-[127.99px] w-[39.39px]" data-name="Container">
      <Container114 />
    </div>
  );
}

function Text49() {
  return (
    <div className="h-[16.496px] relative shrink-0 w-[13.694px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.22px]">28</p>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="relative rounded-[20536500px] shrink-0 size-[25.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text49 />
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="absolute content-stretch flex h-[29.999px] items-center justify-center left-[78.78px] pr-[0.01px] top-[127.99px] w-[39.39px]" data-name="Container">
      <Container116 />
    </div>
  );
}

function Text50() {
  return (
    <div className="h-[16.496px] relative shrink-0 w-[14.192px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-0 not-italic text-[11px] text-white top-[0.22px]">29</p>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="bg-[#00a63e] relative rounded-[20536500px] shrink-0 size-[25.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text50 />
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="absolute content-stretch flex h-[29.999px] items-center justify-center left-[118.17px] pr-[0.01px] top-[127.99px] w-[39.39px]" data-name="Container">
      <Container118 />
    </div>
  );
}

function Text51() {
  return (
    <div className="h-[16.496px] relative shrink-0 w-[14.192px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#6a7282] text-[11px] top-[0.22px]">30</p>
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="relative rounded-[20536500px] shrink-0 size-[25.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text51 />
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="absolute content-stretch flex h-[29.999px] items-center justify-center left-[157.56px] pr-[0.01px] top-[127.99px] w-[39.39px]" data-name="Container">
      <Container120 />
    </div>
  );
}

function Text52() {
  return (
    <div className="h-[16.496px] relative shrink-0 w-[12.633px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-0 not-italic text-[11px] text-white top-[0.22px]">31</p>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="bg-[#00a63e] relative rounded-[20536500px] shrink-0 size-[25.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.01px] relative size-full">
        <Text52 />
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="absolute content-stretch flex h-[29.999px] items-center justify-center left-[196.95px] pr-[0.01px] top-[127.99px] w-[39.39px]" data-name="Container">
      <Container122 />
    </div>
  );
}

function Container123() {
  return <div className="absolute h-[29.999px] left-[236.34px] top-[127.99px] w-[39.4px]" data-name="Container" />;
}

function Container57() {
  return (
    <div className="absolute h-[157.991px] left-[14.6px] top-[61.6px] w-[275.741px]" data-name="Container">
      <Container58 />
      <Container59 />
      <Container60 />
      <Container61 />
      <Container63 />
      <Container65 />
      <Container67 />
      <Container69 />
      <Container71 />
      <Container73 />
      <Container75 />
      <Container77 />
      <Container79 />
      <Container81 />
      <Container83 />
      <Container85 />
      <Container87 />
      <Container89 />
      <Container91 />
      <Container93 />
      <Container95 />
      <Container97 />
      <Container99 />
      <Container101 />
      <Container103 />
      <Container105 />
      <Container107 />
      <Container109 />
      <Container111 />
      <Container113 />
      <Container115 />
      <Container117 />
      <Container119 />
      <Container121 />
      <Container123 />
    </div>
  );
}

function Container126() {
  return <div className="bg-[#00a63e] rounded-[20536500px] shrink-0 size-[9.993px]" data-name="Container" />;
}

function Text53() {
  return (
    <div className="flex-[1_0_0] h-[15.004px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#6a7282] text-[10px]">調理する日（14日間）</p>
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="h-[15.004px] relative shrink-0 w-[117.052px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.996px] items-center relative size-full">
        <Container126 />
        <Text53 />
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="absolute content-stretch flex h-[25.61px] items-center left-[14.6px] pt-[0.612px] top-[229.58px] w-[275.741px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[0.612px] inset-0 pointer-events-none" />
      <Container125 />
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-[rgba(249,250,251,0.8)] h-[269.793px] relative rounded-[14px] shrink-0 w-[304.947px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.612px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container48 />
        <Container49 />
        <Container57 />
        <Container124 />
      </div>
    </div>
  );
}

function Text54() {
  return (
    <div className="h-[15.999px] relative shrink-0 w-[103.042px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#99a1af] text-[12px] top-[-2.22px]">1ヶ月の合計消費量</p>
      </div>
    </div>
  );
}

function Text55() {
  return (
    <div className="absolute h-[44.994px] left-0 top-0 w-[65.249px]" data-name="Text">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[45px] left-0 not-italic text-[#00a63e] text-[30px] top-[0.28px] tracking-[0.4px]">300</p>
    </div>
  );
}

function Text56() {
  return (
    <div className="absolute h-[23.994px] left-[65.25px] top-[15.3px] w-[18.332px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#00a63e] text-[16px] top-[-0.55px] tracking-[-0.31px]">ml</p>
    </div>
  );
}

function Container128() {
  return (
    <div className="h-[44.994px] relative shrink-0 w-[83.581px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text55 />
        <Text56 />
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="h-[44.994px] relative shrink-0 w-[304.947px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between px-[3.997px] relative size-full">
        <Text54 />
        <Container128 />
      </div>
    </div>
  );
}

function Text57() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-[133.835px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-center text-white tracking-[-0.31px]">1ヶ月コースで決定</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[15.999px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.999 15.999">
        <g id="Icon">
          <path d={svgPaths.p13c82c80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#00a63e] h-[47.978px] relative rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-[279.997px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[15.999px] items-center justify-center relative size-full">
        <Text57 />
        <Icon9 />
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="h-[47.978px] relative shrink-0 w-[304.947px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center pr-[0.01px] relative size-full">
        <Button1 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.999px] h-[552.707px] items-start left-0 pl-[19.996px] pt-[19.996px] top-[0.15px] w-[344.94px]" data-name="Container">
      <Container45 />
      <Container47 />
      <Container127 />
      <Container129 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute bg-white h-[552.707px] left-0 overflow-clip rounded-[16px] shadow-[0px_4px_20px_-4px_#c1c1c1] top-[27.99px] w-[344.94px]" data-name="Container">
      <Container42 />
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute h-[580.698px] left-[23.99px] top-[16px] w-[344.94px]" data-name="Container">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Text58() {
  return (
    <div className="absolute h-[19.996px] left-0 top-[2.99px] w-[166.168px]" data-name="Text">
      <p className="absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#364153] text-[14px] top-[-2.61px] tracking-[-0.15px]">単品で作りたいならコレ！</p>
    </div>
  );
}

function Text59() {
  return (
    <div className="absolute h-[15.999px] left-[9.99px] top-[4.99px] w-[83.973px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Noto_Sans_JP:Medium',sans-serif] font-medium leading-[16px] left-[42px] text-[#99a1af] text-[12px] text-center top-[-2.22px]">消費量が多い順</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[11.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[25.01%] left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.66%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.99898 6.99467">
            <path d={svgPaths.p15c7e300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999346" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-[12px]" data-name="Container">
      <Icon10 />
    </div>
  );
}

function Container132() {
  return <div className="absolute border-[#e5e7eb] border-[0.612px] border-solid h-[25.983px] left-0 rounded-[10px] top-0 w-[119.949px]" data-name="Container" />;
}

function Button2() {
  return (
    <div className="absolute bg-white h-[25.983px] left-[224.99px] rounded-[10px] top-0 w-[119.949px]" data-name="Button">
      <Text59 />
      <div className="absolute flex items-center justify-center left-[97.96px] size-[12px] top-[6.99px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Container131 />
        </div>
      </div>
      <Container132 />
    </div>
  );
}

function Container130() {
  return (
    <div className="absolute h-[25.983px] left-[23.99px] top-[620.69px] w-[344.94px]" data-name="Container">
      <Text58 />
      <Button2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-[312.942px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[24px] min-h-px min-w-px relative text-[#1d293d] text-[16px] tracking-[-0.31px] whitespace-pre-wrap">ナンプラー香るチャーハン</p>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[11.992px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9921 11.9921">
        <g id="Icon">
          <path d={svgPaths.p35d85900} fill="var(--fill-0, #F58B3B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text60() {
  return (
    <div className="h-[15.999px] relative shrink-0 w-[67.056px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#f58b3b] text-[12px] top-[-2.22px]">大さじ2消費</p>
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="h-[15.999px] relative shrink-0 w-[312.942px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.997px] items-center relative size-full">
        <Icon11 />
        <Text60 />
      </div>
    </div>
  );
}

function Text61() {
  return (
    <div className="bg-[#f3f4f6] h-[19.002px] relative rounded-[4px] shrink-0 w-[66.262px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] left-[7.99px] text-[#6a7282] text-[10px] top-0 tracking-[0.12px]">ナンプラー</p>
      </div>
    </div>
  );
}

function Text62() {
  return (
    <div className="bg-[#f3f4f6] h-[19.002px] relative rounded-[4px] shrink-0 w-[66.262px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] left-[7.99px] text-[#6a7282] text-[10px] top-0 tracking-[0.12px]">チャーハン</p>
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="h-[19.002px] relative shrink-0 w-[312.942px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.997px] items-center relative size-full">
        <Text61 />
        <Text62 />
      </div>
    </div>
  );
}

function Container135() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.995px] h-[106.982px] items-start left-0 pl-[15.999px] pt-[15.999px] top-[127.99px] w-[344.94px]" data-name="Container">
      <Paragraph3 />
      <Container136 />
      <Container137 />
    </div>
  );
}

function Image() {
  return (
    <div className="absolute h-[127.992px] left-0 top-0 w-[344.94px]" data-name="Image (ナンプラー香るチャーハン)">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#e5e7eb] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Container138() {
  return <div className="absolute bg-[rgba(255,255,255,0)] border-[#f3f4f6] border-[0.612px] border-solid h-[234.974px] left-0 rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-0 w-[344.94px]" data-name="Container" />;
}

function Container134() {
  return (
    <div className="absolute bg-white h-[234.974px] left-0 overflow-clip rounded-[16px] top-0 w-[344.94px]" data-name="Container">
      <Container135 />
      <Image />
      <Container138 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-[312.942px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[24px] min-h-px min-w-px relative text-[#1d293d] text-[16px] tracking-[-0.31px] whitespace-pre-wrap">彩り野菜のナンプラーサラダ</p>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[11.992px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9921 11.9921">
        <g id="Icon">
          <path d={svgPaths.p35d85900} fill="var(--fill-0, #F58B3B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text63() {
  return (
    <div className="h-[15.999px] relative shrink-0 w-[67.056px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#f58b3b] text-[12px] top-[-2.22px]">小さじ2消費</p>
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="h-[15.999px] relative shrink-0 w-[312.942px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.997px] items-center relative size-full">
        <Icon12 />
        <Text63 />
      </div>
    </div>
  );
}

function Text64() {
  return (
    <div className="bg-[#f3f4f6] h-[19.002px] relative rounded-[4px] shrink-0 w-[66.262px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] left-[7.99px] text-[#6a7282] text-[10px] top-0 tracking-[0.12px]">ナンプラー</p>
      </div>
    </div>
  );
}

function Text65() {
  return (
    <div className="bg-[#f3f4f6] h-[19.002px] relative rounded-[4px] shrink-0 w-[56.451px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] left-[7.99px] text-[#6a7282] text-[10px] top-0 tracking-[0.12px]">ヘルシー</p>
      </div>
    </div>
  );
}

function Container142() {
  return (
    <div className="h-[19.002px] relative shrink-0 w-[312.942px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.997px] items-center relative size-full">
        <Text64 />
        <Text65 />
      </div>
    </div>
  );
}

function Container140() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.995px] h-[106.982px] items-start left-0 pl-[15.999px] pt-[15.999px] top-[127.99px] w-[344.94px]" data-name="Container">
      <Paragraph4 />
      <Container141 />
      <Container142 />
    </div>
  );
}

function Image1() {
  return (
    <div className="absolute h-[127.992px] left-0 top-0 w-[344.94px]" data-name="Image (彩り野菜のナンプラーサラダ)">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#e5e7eb] inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[269.5%] left-[-0.13%] max-w-none top-[-49.79%] w-full" src={imgImage1} />
        </div>
      </div>
    </div>
  );
}

function Container143() {
  return <div className="absolute bg-[rgba(255,255,255,0)] border-[#f3f4f6] border-[0.612px] border-solid h-[234.974px] left-0 rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-0 w-[344.94px]" data-name="Container" />;
}

function Container139() {
  return (
    <div className="absolute bg-white h-[234.974px] left-0 overflow-clip rounded-[16px] top-[250.97px] w-[344.94px]" data-name="Container">
      <Container140 />
      <Image1 />
      <Container143 />
    </div>
  );
}

function Container133() {
  return (
    <div className="absolute h-[485.947px] left-[23.99px] top-[662.67px] w-[344.94px]" data-name="Container">
      <Container134 />
      <Container139 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[1172.613px] relative shrink-0 w-[392.927px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container39 />
        <Container130 />
        <Container133 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[7.995px] h-[1720.471px] items-start relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container38 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1696px] items-start left-0 overflow-clip top-[80px] w-[393px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function Container145() {
  return <div className="absolute bg-[rgba(255,255,255,0)] border-[#f3f4f6] border-b-[0.612px] border-solid h-[79.976px] left-0 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-0 w-[392.927px]" data-name="Container" />;
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[23.994px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9937 23.9937">
        <g clipPath="url(#clip0_2051_520)" id="Icon">
          <path d={svgPaths.p23585e90} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.99899" />
        </g>
        <defs>
          <clipPath id="clip0_2051_520">
            <rect fill="white" height="23.9937" width="23.9937" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[7.99px] pr-[0.01px] rounded-[20536500px] size-[39.993px] top-[19.99px]" data-name="Button">
      <Icon13 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[23.994px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9937 23.9937">
        <g clipPath="url(#clip0_2051_543)" id="Icon">
          <path d={svgPaths.p181c7f00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.18108" />
        </g>
        <defs>
          <clipPath id="clip0_2051_543">
            <rect fill="white" height="23.9937" width="23.9937" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[344.94px] pr-[0.01px] rounded-[20536500px] size-[39.993px] top-[19.99px]" data-name="Button">
      <Icon14 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute content-stretch flex h-[23.994px] items-center left-[39.99px] overflow-clip top-[11.99px] w-[200.977px]" data-name="Text Input">
      <p className="font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] tracking-[-0.31px]">ナンプラー</p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[15.999px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_20.83%_20.83%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9993 11.9993">
            <path d={svgPaths.ped08300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[69.58%_12.5%_12.5%_69.58%]" data-name="Vector">
        <div className="absolute inset-[-23.26%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.19971 4.19971">
            <path d={svgPaths.p3cca9380} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container148() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[11.99px] size-[15.999px] top-[15.98px]" data-name="Container">
      <Icon15 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[11.992px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9921 11.9921">
        <g clipPath="url(#clip0_2051_510)" id="Icon">
          <path d={svgPaths.p18945200} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.71316" />
          <path d={svgPaths.p30d21780} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.71316" />
        </g>
        <defs>
          <clipPath id="clip0_2051_510">
            <rect fill="white" height="11.9921" width="11.9921" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#e5e7eb] content-stretch flex items-center justify-center left-[248.97px] pr-[0.01px] rounded-[20536500px] size-[19.996px] top-[13.99px]" data-name="Button">
      <Icon16 />
    </div>
  );
}

function Container147() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[47.978px] left-[55.98px] rounded-[20536500px] top-[16px] w-[280.963px]" data-name="Container">
      <TextInput />
      <Container148 />
      <Button5 />
    </div>
  );
}

function Container146() {
  return (
    <div className="absolute h-[79.976px] left-0 top-0 w-[392.927px]" data-name="Container">
      <Button3 />
      <Button4 />
      <Container147 />
    </div>
  );
}

function Container144() {
  return (
    <div className="absolute bg-white h-[79.976px] left-0 top-0 w-[392.927px]" data-name="Container">
      <Container145 />
      <Container146 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[#fffcf4] h-[620px] left-0 top-[54px] w-[393px]" data-name="Container">
      <Container3 />
      <Container144 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[22.005px] left-[51.99px] top-[16px] w-[37.65px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[19px] not-italic text-[17px] text-black text-center top-[2.45px]">9:41</p>
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute contents inset-[3.85%_0_3.85%_66.33%]" data-name="Battery">
      <div className="absolute inset-[3.85%_3.55%_3.85%_66.33%]" data-name="Border">
        <div className="absolute inset-[-4.17%_-2.08%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.9999 12.9963">
            <path d={svgPaths.p1f67a400} id="Border" opacity="0.35" stroke="var(--stroke-0, black)" strokeWidth="0.999855" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[36.78%_0_31.87%_98.33%]" data-name="Cap">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.32801 4.07428">
          <path d={svgPaths.p1cc2b040} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute inset-[15.38%_5.43%_15.38%_68.21%]" data-name="Capacity">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 8.99737">
          <path d={svgPaths.p1b185d00} fill="var(--fill-0, black)" id="Capacity" />
        </svg>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="absolute contents inset-[2.58%_0]" data-name="wrapper">
      <div className="absolute inset-[2.98%_75.9%_2.97%_0]" data-name="Cellular Connection">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2228">
          <path clipRule="evenodd" d={svgPaths.p6bef700} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
        </svg>
      </div>
      <div className="absolute inset-[2.58%_44.34%_2.58%_34.14%]" data-name="Wifi">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3247">
          <path clipRule="evenodd" d={svgPaths.p3e74b680} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
        </svg>
      </div>
      <Battery />
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-[12.996px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Wrapper />
    </div>
  );
}

function Container150() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12.996px] items-start left-[281.26px] top-[20.49px] w-[79.67px]" data-name="Container">
      <Icon17 />
    </div>
  );
}

function Container149() {
  return (
    <div className="absolute bg-white h-[53.993px] left-0 top-0 w-[392.927px]" data-name="Container">
      <Paragraph5 />
      <Container150 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[674px] left-0 top-0 w-[393px]" data-name="Container">
      <Container2 />
      <Container149 />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#fffcf4] h-[1870px] overflow-clip relative shrink-0 w-[393px]" data-name="Container">
      <Container1 />
    </div>
  );
}

export default function Component03SearchResult() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex items-center relative size-full" data-name="03_SearchResult">
      <Container />
    </div>
  );
}