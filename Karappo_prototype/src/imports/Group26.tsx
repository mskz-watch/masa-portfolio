function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 text-center">
      <p className="font-['Kodchasan:Medium',sans-serif] relative shrink-0 text-[24px]">Accent</p>
      <p className="font-['Candal:Regular',sans-serif] relative shrink-0 text-[32px]">Orange</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center leading-none not-italic relative shrink-0 text-white w-full" data-name="Text">
      <Frame1 />
      <p className="font-['Kodchasan:Medium',sans-serif] relative shrink-0 text-[16px]">#F58B3B</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#e16f24] content-stretch flex flex-col h-[266px] items-center justify-center left-[308px] p-[10px] top-0 w-[162px]">
      <Text />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 text-center">
      <p className="font-['Kodchasan:Medium',sans-serif] relative shrink-0 text-[24px]">main</p>
      <p className="font-['Candal:Regular',sans-serif] relative shrink-0 text-[32px]">Blue</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center leading-none not-italic relative shrink-0 text-white w-full" data-name="Text">
      <Frame3 />
      <p className="font-['Kodchasan:Medium',sans-serif] relative shrink-0 text-[16px]">#3E76BD</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#3e76bd] content-stretch flex flex-col h-[266px] items-center justify-center left-0 p-[10px] top-0 w-[162px]">
      <Text1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 text-center">
      <p className="font-['Kodchasan:Medium',sans-serif] relative shrink-0 text-[24px]">Sub</p>
      <p className="font-['Candal:Regular',sans-serif] relative shrink-0 text-[32px]">Navy</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center leading-none not-italic relative shrink-0 text-white w-full" data-name="Text">
      <Frame5 />
      <p className="font-['Kodchasan:Medium',sans-serif] relative shrink-0 text-[16px]">#1D293D</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-[#1d293d] content-stretch flex flex-col h-[266px] items-center justify-center left-[162px] p-[10px] top-0 w-[146px]">
      <Text2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[162px] top-0">
      <Frame4 />
    </div>
  );
}

export default function Group1() {
  return (
    <div className="relative size-full">
      <Frame />
      <Frame2 />
      <Group />
    </div>
  );
}