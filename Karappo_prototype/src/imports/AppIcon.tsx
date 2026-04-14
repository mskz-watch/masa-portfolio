import svgPaths from "./svg-6b0igt2p36";

export default function AppIcon({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex flex-col gap-[5px] items-center relative"} data-name="App Icon">
      <div className="overflow-clip relative rounded-[14px] shrink-0 size-[60px]" data-name="Option">
        <div className="absolute contents inset-[-5.83%_-5.83%_0_0]">
          <div className="absolute bg-[#3e76bd] inset-[-5.83%_-5.83%_0_0]" />
          <div className="absolute contents inset-[13.33%_24.02%_13%_23.33%]">
            <div className="absolute inset-[43.89%_43.65%_13%_23.33%]" data-name="Group">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8121 25.8684">
                <g id="Group">
                  <path d={svgPaths.p203d0600} fill="var(--fill-0, white)" id="Vector" />
                  <path d={svgPaths.p31727780} fill="var(--fill-0, white)" id="Vector_2" />
                  <path d={svgPaths.p285c3d80} fill="var(--fill-0, white)" id="Vector_3" />
                  <path d={svgPaths.p15fce540} fill="var(--fill-0, white)" id="Vector_4" />
                  <path d={svgPaths.p112ec400} fill="var(--fill-0, white)" id="Vector_5" />
                  <path d={svgPaths.p30e4ae00} fill="var(--fill-0, white)" id="Vector_6" />
                  <path d={svgPaths.p1f703000} fill="var(--fill-0, white)" id="Vector_7" />
                  <path d={svgPaths.p18bb2f80} fill="var(--fill-0, white)" id="Vector_8" />
                </g>
              </svg>
            </div>
            <div className="absolute inset-[13.33%_24.02%_52.93%_39.78%]">
              <div className="absolute inset-[-1.31%_-1.23%_-1.11%_-1.04%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.2149 20.7317">
                  <g id="Group 8075">
                    <path d={svgPaths.p28fe4780} fill="var(--fill-0, white)" id="Vector" />
                    <path d="M18.4593 5.06906V8.61442" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.874184" />
                    <path d="M16.4084 3.27435V9.74286" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.874184" />
                    <rect height="10.1742" id="Rectangle 16" rx="3.64243" stroke="var(--stroke-0, white)" strokeWidth="1.45697" transform="rotate(-39.9468 2.92283 10.5628)" width="17.6349" x="2.92283" y="10.5628" />
                    <path d={svgPaths.p3c65f300} fill="var(--fill-0, white)" id="Rectangle 17" stroke="var(--stroke-0, white)" strokeWidth="1.16558" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] overflow-hidden relative shrink-0 text-[12px] text-center text-ellipsis text-shadow-[0px_0px_15px_rgba(0,0,0,0.5)] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Karappo
      </p>
    </div>
  );
}