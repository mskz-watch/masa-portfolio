function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 text-center">
      <p className="font-['Kodchasan:Medium',sans-serif] relative shrink-0 text-[24px]">Base/Background</p>
      <p className="font-['Candal:Regular',sans-serif] relative shrink-0 text-[32px]">White</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center leading-none not-italic relative shrink-0 text-[#1b1b1b] w-full" data-name="Text">
      <Frame1 />
      <p className="font-['Kodchasan:Medium',sans-serif] relative shrink-0 text-[16px]">#FFFCF4</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#fffcf4] content-stretch flex flex-col h-[266px] items-center justify-center left-0 p-[10px] top-0 w-[786px]">
      <Text />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Frame />
    </div>
  );
}