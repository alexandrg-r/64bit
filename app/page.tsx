import MobileLanding from "./components/MobileLanding";

// ─── Desktop image assets ───────────────────────────────────────────────────
const imgVector = "https://www.figma.com/api/mcp/asset/5854d4a2-dd04-417d-b886-cf8a4142f00b";
const imgVector1 = "https://www.figma.com/api/mcp/asset/5ec56ac4-edb2-4453-8fdf-4cc90ed70771";
const imgRectangle50 = "https://www.figma.com/api/mcp/asset/96fbd895-f59f-4e6e-93dd-3a7c24bd7353";
const imgRectangle51 = "https://www.figma.com/api/mcp/asset/a213b769-493d-4c2e-ad1a-45ad5c724ec5";
const imgRectangle52 = "https://www.figma.com/api/mcp/asset/8fd50679-7694-438c-9723-6ace68942e0a";
const imgRectangle53 = "https://www.figma.com/api/mcp/asset/a2d3e7c7-eea7-4882-9ca0-a986b8a49aeb";
const imgRectangle55 = "https://www.figma.com/api/mcp/asset/54925b1d-6e64-4076-9a97-43d3ac9f8225";
const imgRectangle56 = "https://www.figma.com/api/mcp/asset/3788cb89-ccb8-4452-9d84-7dd8b47ccd4e";
const imgRectangle58 = "https://www.figma.com/api/mcp/asset/ca528670-5518-4b15-af84-2cd61595ca6e";
const imgRectangle59 = "https://www.figma.com/api/mcp/asset/80b322bb-f3e5-4929-8bfd-f497ad938cf9";
const imgRectangle64 = "https://www.figma.com/api/mcp/asset/f62f14d5-0999-459c-a9ae-a5278d9099e6";
const imgRectangle65 = "https://www.figma.com/api/mcp/asset/54c7a7c1-18b6-405f-b08e-5f653f6dc122";
const imgNeonDrift = "https://www.figma.com/api/mcp/asset/5a28e525-3d7a-4eb6-bb49-a141bdb05bb1";
const imgDungeonQuest = "https://www.figma.com/api/mcp/asset/2de86e4e-58fb-4ed1-9d01-4dfac71057b7";
const imgGemBlast = "https://www.figma.com/api/mcp/asset/112d10d3-6b69-4143-b85d-1d327a41a960";
const imgCyberStrike = "https://www.figma.com/api/mcp/asset/922f2e8b-6ae6-4966-bc01-64ec770a41a2";
const imgCastleWars = "https://www.figma.com/api/mcp/asset/2f19b459-d7e8-40ef-9010-cbe48308d3c1";
const imgBattleArena = "https://www.figma.com/api/mcp/asset/ddc79e02-2936-4fdd-9ebc-c833f4903eb5";
const imgLogo = "https://www.figma.com/api/mcp/asset/e86a8558-7616-49c6-9518-c15da8e2e565";
const imgSvg = "https://www.figma.com/api/mcp/asset/2c9869b8-ba3b-45e0-a76d-b55bf08c85da";
const imgSvg1 = "https://www.figma.com/api/mcp/asset/1501d7cd-c058-4e32-ad7c-d2ef17385855";
const imgSvg2 = "https://www.figma.com/api/mcp/asset/4db2bc03-5654-4dcc-869d-d27435691114";
const imgSvg3 = "https://www.figma.com/api/mcp/asset/7f7974e9-7340-4dfc-a666-d8e66129e016";
const imgSvg4 = "https://www.figma.com/api/mcp/asset/25f2192f-c3ef-4fd4-8d7b-0d50d0e580d4";
const imgSvg5 = "https://www.figma.com/api/mcp/asset/e3ec5d38-e933-40fc-a478-51be92e13e29";
const imgSvg6 = "https://www.figma.com/api/mcp/asset/26836110-0133-43ac-818a-145243794dd0";
const imgSvg7 = "https://www.figma.com/api/mcp/asset/2c26e436-abda-4033-a054-30cab9634edb";
const imgSvg8 = "https://www.figma.com/api/mcp/asset/84f2916c-c624-477b-8a89-38a713f35f82";
const imgSvg9 = "https://www.figma.com/api/mcp/asset/76637a6d-7c00-49da-b6f4-cc5db8ad6030";
const imgSvg10 = "https://www.figma.com/api/mcp/asset/5b386bbf-234d-481b-9d3f-e08481bd5487";
const imgSvg11 = "https://www.figma.com/api/mcp/asset/5ffd7655-f616-4dad-a403-7f62172d8a81";
const imgSvg12 = "https://www.figma.com/api/mcp/asset/0b3a060a-7e57-403c-9408-5c32ad999469";

// ─── Shared helpers ──────────────────────────────────────────────────────────
function FireIcon({ className }: { className?: string }) {
  return (
    <div className={className ?? "relative size-[24px]"}>
      <div className="absolute inset-0 overflow-clip">
        <div className="absolute inset-[3.12%_13.26%_3.13%_13.23%]">
          <img alt="" className="absolute block max-w-none size-full" src={imgVector} />
        </div>
        <div className="absolute inset-[35.92%_30.92%_3.13%_31.79%]">
          <img alt="" className="absolute block max-w-none size-full" src={imgVector1} />
        </div>
      </div>
    </div>
  );
}

// ─── Desktop footer ──────────────────────────────────────────────────────────
function Footer() {
  return (
    <div className="bg-[rgba(255,255,255,0.02)] w-full">
      <div className="content-stretch flex gap-[40px] items-start justify-center max-w-[1440px] mx-auto p-[40px] relative w-full">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between leading-[0] min-h-px min-w-px relative self-stretch">
          <div className="flex flex-col font-orbitron justify-center not-italic relative shrink-0 text-[49.105px] text-white whitespace-nowrap">
            <p className="font-orbitron">
              <span className="leading-[44.896px] text-[#6a4dff]">64</span>
              <span className="leading-[44.896px]">
                Bit.
                <br aria-hidden="true" />
                GAMES
              </span>
            </p>
          </div>
          <div className="flex flex-col font-orbitron font-bold justify-center min-w-full relative shrink-0 text-[#676e88] text-[12px] tracking-[0.48px] w-[min-content]">
            <p className="leading-[1.4]">
              A-Z TECH VENTURES LTD (Company No. 15388786)
              <br aria-hidden="true" />
              Registered office: 50 Princes Street, Ipswich, Suffolk, England, IP1 1RJ
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
          <div className="content-stretch flex flex-col font-orbitron font-medium gap-[40px] items-start justify-center leading-[0] relative shrink-0 text-[#676e88] text-[16px] tracking-[0.64px] whitespace-nowrap">
            <div className="content-stretch flex gap-[110px] items-start relative shrink-0">
              <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0">
                <div className="flex flex-col justify-center relative shrink-0"><p className="leading-[1.4]">Contact Us</p></div>
                <div className="flex flex-col justify-center relative shrink-0"><p className="leading-[1.4]">Terms of Use</p></div>
                <div className="flex flex-col justify-center relative shrink-0"><p className="leading-[1.4]">Billing Terms</p></div>
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
                <div className="flex flex-col justify-center relative shrink-0"><p className="leading-[1.4]">Refund Policy</p></div>
                <div className="flex flex-col justify-center relative shrink-0"><p className="leading-[1.4]">Privacy Policy</p></div>
                <div className="flex flex-col justify-center relative shrink-0"><p className="leading-[1.4]">Payment Policy</p></div>
              </div>
            </div>
            <div className="flex flex-col justify-center relative shrink-0">
              <p className="leading-[1.4]">© 2026 64bit.games. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main export ─────────────────────────────────────────────────────────────
export default function Landing() {
  return (
    <>
      {/* ── Desktop (md and up) ── */}
      <div className="bg-[#080b14] hidden md:flex content-stretch flex-col items-center relative min-h-screen w-full">
        {/* Nav */}
        <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.05)] border-[rgba(33,36,48,0.5)] border-b border-solid left-0 right-0 top-0 z-50">
          <div className="content-stretch flex items-center justify-between max-w-[1440px] mx-auto pb-[11px] pt-[10px] px-[20px]">
            <div className="h-[41.726px] relative shrink-0 w-[238.99px]">
              <img alt="64bit.games" className="absolute block max-w-none size-full" src={imgLogo} />
            </div>
            <div className="relative shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[48px] items-center justify-center relative">
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="flex flex-col font-orbitron font-medium justify-center leading-[0] relative shrink-0 text-[#a4a9c6] text-[16px] tracking-[0.64px] whitespace-nowrap">
                    <p className="leading-[1.4]">Games</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <button className="cursor-pointer flex flex-col font-orbitron font-medium justify-center leading-[0] relative shrink-0 text-[#a4a9c6] text-[16px] text-left tracking-[0.64px] whitespace-nowrap">
                    <p className="leading-[1.4]">Features</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="relative shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center relative">
                <div className="border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[16px] relative rounded-[12px] shrink-0">
                  <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0.01)] inset-0 pointer-events-none rounded-[12px]" />
                  <div className="flex flex-col font-orbitron font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.56px] whitespace-nowrap">
                    <p className="leading-[1.3]">Sign in</p>
                  </div>
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.1)]" />
                </div>
                <div className="bg-[#6a4dff] content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] relative rounded-[12px] shrink-0">
                  <div className="flex flex-col font-orbitron font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.56px] whitespace-nowrap">
                    <p className="leading-[1.3]">Start playing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="content-stretch flex flex-col items-start min-h-[900px] relative shrink-0 w-[1440px]">

          {/* Hero Section */}
          <div className="content-stretch flex h-[850px] items-center justify-between overflow-clip pt-[60px] relative shrink-0 w-full">
            <div
              className="absolute blur-[47px] inset-[-0.26px_0_-75px_0]"
              style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 925.26\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.30000001192092896\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(113.5 -4.8562e-7 1.1581e-7 45.58 737.01 -0.0000031534)\\'><stop stop-color=\\'rgba(59,118,237,0.12)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(59,89,237,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}
            />

            {/* Left game thumbnails */}
            <div className="h-[956px] overflow-clip relative shrink-0 w-[331px]">
              <div className="absolute bottom-[60px] flex h-[955.567px] items-center justify-center left-[-364px] w-[695.07px]">
                <div className="-scale-y-99 flex-none rotate-180 skew-x-[-6.63deg]">
                  <div className="h-[962px] overflow-clip relative w-[584px]">
                    <div className="absolute h-[203px] left-[151px] rounded-[12px] top-[446px] w-[131px]"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle50} /></div>
                    <div className="absolute h-[203px] left-0 rounded-[14px] top-[506px] w-[131px]"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgRectangle51} /></div>
                    <div className="absolute h-[203px] left-[302px] rounded-[12px] top-[536px] w-[131px]"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle52} /></div>
                    <div className="absolute h-[203px] left-[453px] rounded-[12px] top-[486px] w-[131px]"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle53} /></div>
                    <div className="absolute h-[203px] left-[151px] rounded-[12px] top-[669px] w-[131px]"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle53} /></div>
                    <div className="absolute h-[203px] left-0 rounded-[12px] top-[729px] w-[131px]"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle55} /></div>
                    <div className="absolute h-[203px] left-[302px] rounded-[12px] top-[759px] w-[131px]"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle56} /></div>
                    <div className="absolute h-[203px] left-[453px] rounded-[12px] top-[709px] w-[131px]"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle52} /></div>
                    <div className="absolute h-[203px] left-[151px] rounded-[14px] top-[223px] w-[131px]"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgRectangle58} /></div>
                    <div className="absolute h-[203px] left-0 rounded-[14px] top-[283px] w-[131px]"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgRectangle59} /></div>
                    <div className="absolute h-[203px] left-[302px] rounded-[12px] top-[313px] w-[131px]"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle55} /></div>
                    <div className="absolute h-[203px] left-[453px] rounded-[12px] top-[263px] w-[131px]"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle50} /></div>
                    <div className="absolute h-[203px] left-[151px] rounded-[12px] top-0 w-[131px]"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle50} /></div>
                    <div className="absolute h-[203px] left-0 rounded-[12px] top-[60px] w-[131px]"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle56} /></div>
                    <div className="absolute h-[203px] left-[302px] rounded-[12px] top-[90px] w-[131px]"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle64} /></div>
                    <div className="absolute h-[203px] left-[453px] rounded-[12px] top-[40px] w-[131px]"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle65} /></div>
                    <div className="absolute flex h-[755.462px] items-center justify-center left-[-108.82px] top-[247.01px] w-[769.595px]">
                      <div className="flex-none scale-y-101 skew-x-[-6.59deg]">
                        <div className="h-[750.409px] w-[682.371px]" style={{ backgroundImage: "linear-gradient(179.4777338447061deg, rgba(11, 13, 20, 0) 0.41707%, rgb(11, 13, 20) 99.608%)" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero center content */}
            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-between min-h-px min-w-px pb-[40px] pt-[150px] relative">
              <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0 w-full">
                  <div className="flex flex-col font-orbitron font-black justify-center leading-[0] relative shrink-0 text-[0px] text-center text-white w-full">
                    <p className="leading-none mb-0 text-[72px]">Play the best</p>
                    <p className="leading-none mb-0 text-[#19d7fd] text-[72px]">mini games</p>
                    <p className="leading-none text-[72px]">instantly</p>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                    <div className="flex flex-[1_0_0] flex-col font-orbitron font-bold justify-center leading-[0] min-h-px min-w-px relative text-[#676e88] text-[20px] text-center tracking-[0.6px]">
                      <p className="leading-[1.3] mb-0">4000+ browser games. No downloads.</p>
                      <p className="leading-[1.3] mb-0">Jump into action, puzzles, racing, multiplayer</p>
                      <p className="leading-[1.3]">— all free, right now.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#6a4dff] content-stretch flex gap-[8px] h-[56px] items-center justify-center px-[24px] relative rounded-[16px] shrink-0">
                  <div className="flex flex-col font-orbitron font-black justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white tracking-[0.54px] whitespace-nowrap">
                    <p className="leading-[1.2]">Play now</p>
                  </div>
                  <FireIcon className="relative shrink-0 size-[24px]" />
                </div>
              </div>

              {/* Badge pills */}
              <div className="content-center flex flex-wrap gap-[0px_12px] items-center justify-center relative shrink-0 w-full">
                {[
                  { icon: imgSvg,  label: "Browser Play" },
                  { icon: imgSvg1, label: "No Download" },
                  { icon: imgSvg2, label: "Multiplayer" },
                  { icon: imgSvg3, label: "4000+ Games" },
                ].map(({ icon, label }) => (
                  <div key={label} className="border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex gap-[6px] h-[30px] items-center justify-center px-[13px] py-px relative rounded-[12px] shrink-0">
                    <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0.01)] inset-0 pointer-events-none rounded-[12px]" />
                    <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block max-w-none size-full" src={icon} /></div>
                    <div className="flex flex-col font-orbitron font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] tracking-[0.48px] whitespace-nowrap">
                      <p className="leading-[1.4]">{label}</p>
                    </div>
                    <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.1)]" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right game thumbnails */}
            <div className="h-[956px] overflow-clip relative shrink-0 w-[331px]">
              <div className="absolute bottom-[90px] flex h-[955.567px] items-center justify-center left-0 w-[695.07px]">
                <div className="-scale-y-99 flex-none rotate-180 skew-x-[-6.63deg]">
                  <div className="h-[962px] overflow-clip relative w-[584px]">
                    <div className="absolute h-[203px] left-[151px] rounded-[12px] top-[446px] w-[131px]"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle50} /></div>
                    <div className="absolute h-[203px] left-0 rounded-[14px] top-[506px] w-[131px]"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgRectangle51} /></div>
                    <div className="absolute h-[203px] left-[302px] rounded-[12px] top-[536px] w-[131px]"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle52} /></div>
                    <div className="absolute h-[203px] left-[453px] rounded-[12px] top-[486px] w-[131px]"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle53} /></div>
                    <div className="absolute h-[203px] left-[151px] rounded-[12px] top-[669px] w-[131px]"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle53} /></div>
                    <div className="absolute h-[203px] left-0 rounded-[12px] top-[729px] w-[131px]"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle55} /></div>
                    <div className="absolute h-[203px] left-[302px] rounded-[12px] top-[759px] w-[131px]"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle56} /></div>
                    <div className="absolute h-[203px] left-[453px] rounded-[12px] top-[709px] w-[131px]"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle52} /></div>
                    <div className="absolute h-[203px] left-[151px] rounded-[14px] top-[223px] w-[131px]"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgRectangle58} /></div>
                    <div className="absolute h-[203px] left-0 rounded-[14px] top-[283px] w-[131px]"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgRectangle59} /></div>
                    <div className="absolute h-[203px] left-[302px] rounded-[12px] top-[313px] w-[131px]"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle55} /></div>
                    <div className="absolute h-[203px] left-[453px] rounded-[12px] top-[263px] w-[131px]"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle50} /></div>
                    <div className="absolute h-[203px] left-[151px] rounded-[12px] top-0 w-[131px]"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle50} /></div>
                    <div className="absolute h-[203px] left-0 rounded-[12px] top-[60px] w-[131px]"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle56} /></div>
                    <div className="absolute h-[203px] left-[302px] rounded-[12px] top-[90px] w-[131px]"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle64} /></div>
                    <div className="absolute h-[203px] left-[453px] rounded-[12px] top-[40px] w-[131px]"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle65} /></div>
                    <div className="absolute flex h-[1018.382px] items-center justify-center left-[-110.65px] top-0 w-[805.724px]">
                      <div className="flex-none scale-y-101 skew-x-[-6.59deg]">
                        <div className="h-[1011.572px] w-[688.144px]" style={{ backgroundImage: "linear-gradient(179.3018929160729deg, rgba(11, 13, 20, 0) 0.41707%, rgb(11, 13, 20) 99.608%)" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Games Section */}
          <div className="content-stretch flex flex-col gap-[48px] items-center pb-[100px] pt-[120px] px-[40px] relative shrink-0 w-full">
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <div className="flex flex-col font-orbitron font-bold justify-center leading-[0] relative shrink-0 text-[36px] text-white tracking-[0.72px] whitespace-nowrap">
                <p className="leading-[1.15]">Popular Games</p>
              </div>
            </div>
            <div className="content-start flex flex-wrap gap-[20px] items-start justify-center p-px relative shrink-0 w-full">
              {[
                { img: imgNeonDrift,    label: "Racing",     name: "Neon Drift",    badge: "🔥 hot" },
                { img: imgDungeonQuest, label: "RPG",        name: "Dungeon Quest", badge: "new" },
                { img: imgGemBlast,     label: "Puzzles",    name: "Gem Blast",     badge: "🔥 hot" },
                { img: imgCyberStrike,  label: "Action",     name: "Cyber Strike",  badge: "🔥 hot" },
                { img: imgCastleWars,   label: "Strategy",   name: "Castle Wars",   badge: "⭐ Top" },
                { img: imgBattleArena,  label: "Multiplayer",name: "Battle Arena",  badge: "⭐ Top" },
              ].map(({ img, label, name, badge }) => (
                <div key={name} className="border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex flex-col h-[292px] items-start justify-end overflow-clip relative rounded-[20px] shrink-0 w-[439px]">
                  <div className="absolute h-[292px] left-[-0.5px] right-[-0.5px] top-[-1px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img} />
                    </div>
                    <div className="absolute bg-[#6a4dff] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex h-[24px] items-center justify-center left-[9px] pb-[2px] px-[10px] rounded-[20px] top-[9px]">
                      <div className="flex flex-col font-orbitron font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[0.48px] whitespace-nowrap">
                        <p className="leading-[1.4]">{badge}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(1,11,33,0)] items-start leading-[0] not-italic p-[16px] relative shrink-0 to-[#010b21] to-[81.443%] w-full">
                    <div className="flex flex-col font-sans justify-center relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] w-full"><p className="leading-[20px]">{label}</p></div>
                    <div className="flex flex-col font-sans font-bold justify-center relative shrink-0 text-[18px] text-white w-full"><p className="leading-[28px]">{name}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why 64bit.games Section */}
          <div className="content-stretch flex gap-[20px] items-center px-[40px] py-[100px] relative shrink-0 w-full">
            <div
              className="absolute blur-[47px] inset-[-0.26px_0_0_0]"
              style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 820.26\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.30000001192092896\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(113.5 -4.3051e-7 1.1581e-7 40.408 737.01 -0.0000027955)\\'><stop stop-color=\\'rgba(59,118,237,0.12)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(59,89,237,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}
            />
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
              <div className="bg-[rgba(232,229,255,0.02)] border border-[rgba(255,255,255,0.05)] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[30px] h-full items-center justify-center leading-[0] min-h-px min-w-px overflow-clip px-[50px] py-[30px] relative rounded-[20px] text-center">
                <div className="flex flex-col font-orbitron font-black justify-center relative shrink-0 text-[72px] text-white w-full"><p className="leading-none">Why 64bit.games?</p></div>
                <div className="flex flex-col font-orbitron font-bold justify-center relative shrink-0 text-[#676e88] text-[16px] tracking-[0.48px] w-full"><p className="leading-[1.4]">Everything you need for the ultimate browser gaming experience</p></div>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative">
              <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
                <div className="bg-[#6a4dff] border border-[rgba(255,255,255,0.05)] border-solid content-stretch flex flex-[1_0_0] flex-col h-[300px] items-start justify-between min-h-px min-w-px overflow-clip p-[30px] relative rounded-[20px]">
                  <div className="bg-[#9580ff] content-stretch flex items-center justify-center relative rounded-[82px] shrink-0 size-[50px]"><div className="relative shrink-0 size-[30px]"><img alt="" className="absolute block max-w-none size-full" src={imgSvg4} /></div></div>
                  <div className="content-stretch flex flex-col font-orbitron font-bold gap-[10px] items-start leading-[0] relative shrink-0 w-full">
                    <div className="flex flex-col justify-center relative shrink-0 text-[20px] text-white tracking-[0.6px] whitespace-nowrap"><p className="leading-[1.3]">4000+ Mini Games</p></div>
                    <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] tracking-[0.56px] w-[min-content]"><p className="leading-[1.3]">A massive and ever-growing library of games across every genre you can imagine.</p></div>
                  </div>
                </div>
                <div className="bg-[rgba(255,255,255,0.3)] border border-[rgba(255,255,255,0.05)] border-solid content-stretch flex flex-[1_0_0] flex-col h-[300px] items-start justify-between min-h-px min-w-px overflow-clip p-[30px] relative rounded-[20px]">
                  <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center relative rounded-[82px] shrink-0 size-[50px]"><div className="relative shrink-0 size-[30px]"><img alt="" className="absolute block max-w-none size-full" src={imgSvg5} /></div></div>
                  <div className="content-stretch flex flex-col font-orbitron font-bold gap-[10px] items-start leading-[0] relative shrink-0 w-full">
                    <div className="flex flex-col justify-center relative shrink-0 text-[20px] text-white tracking-[0.6px] whitespace-nowrap"><p className="leading-[1.3]">Controller Support</p></div>
                    <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] tracking-[0.56px] w-[min-content]"><p className="leading-[1.3]">Plug in your gamepad and play with full native controller support.</p></div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
                <div className="bg-black border border-[rgba(255,255,255,0.2)] border-solid content-stretch flex flex-[1_0_0] flex-col h-[300px] items-start justify-between min-h-px min-w-px overflow-clip p-[30px] relative rounded-[20px]">
                  <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center relative rounded-[82px] shrink-0 size-[50px]"><div className="relative shrink-0 size-[30px]"><img alt="" className="absolute block max-w-none size-full" src={imgSvg6} /></div></div>
                  <div className="content-stretch flex flex-col font-orbitron font-bold gap-[10px] items-start leading-[0] relative shrink-0 w-full">
                    <div className="flex flex-col justify-center relative shrink-0 text-[20px] text-white tracking-[0.6px] w-full"><p className="leading-[1.3]">Multiplayer with Friends</p></div>
                    <div className="flex flex-col justify-center relative shrink-0 text-[#676e88] text-[14px] tracking-[0.56px] w-full"><p className="leading-[1.3]">Invite your friends and compete or cooperate in real-time multiplayer games.</p></div>
                  </div>
                </div>
                <div className="bg-[#1d8baf] border border-[rgba(255,255,255,0.05)] border-solid content-stretch flex flex-[1_0_0] flex-col h-[300px] items-start justify-between min-h-px min-w-px overflow-clip p-[30px] relative rounded-[20px]">
                  <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center relative rounded-[82px] shrink-0 size-[50px]"><div className="relative shrink-0 size-[30px]"><img alt="" className="absolute block max-w-none size-full" src={imgSvg7} /></div></div>
                  <div className="content-stretch flex flex-col font-orbitron font-bold gap-[10px] items-start leading-[0] relative shrink-0 w-full">
                    <div className="flex flex-col justify-center relative shrink-0 text-[20px] text-white tracking-[0.6px] whitespace-nowrap"><p className="leading-[1.3]">AI Game Maker</p></div>
                    <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] tracking-[0.56px] w-[min-content]"><p className="leading-[1.3]">Click and play. Zero downloads, zero setup, zero waiting.</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Jump in and play together Section */}
          <div className="content-stretch flex gap-[64px] items-center justify-center px-[40px] py-[100px] relative shrink-0 w-full">
            <div
              className="absolute blur-[47px] inset-[-40.14px_0_-39.88px_0]"
              style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 925.26\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.30000001192092896\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(113.5 -4.8562e-7 1.1581e-7 45.58 737.01 -0.0000031534)\\'><stop stop-color=\\'rgba(59,118,237,0.12)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(59,89,237,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}
            />
            {/* Game preview card */}
            <div className="border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex flex-col gap-[40px] items-center justify-center p-[20px] relative rounded-[20px] shrink-0 w-[752px]">
              <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0.01)] inset-0 pointer-events-none rounded-[20px]" />
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="backdrop-blur-[2px] bg-[#0c140e] border border-[rgba(26,230,60,0.2)] border-solid content-stretch flex gap-[8px] items-center px-[11px] py-[3px] relative rounded-[9999px] shrink-0">
                  <div className="bg-[#1ae63c] rounded-[9999px] shrink-0 size-[6px]" />
                  <div className="flex flex-col font-orbitron font-bold justify-center leading-[0] relative shrink-0 text-[#1ae63c] text-[10px] tracking-[0.4px] whitespace-nowrap"><p className="leading-[1.4]">LIVE</p></div>
                </div>
              </div>
              <div className="aspect-[684/458.4705810546875] relative rounded-[20px] shrink-0 w-full">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                  <img alt="" className="absolute h-[100.08%] left-0 max-w-none top-[0.02%] w-full" src={imgBattleArena} />
                </div>
              </div>
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <div className="content-stretch flex items-start pr-[8px] relative shrink-0">
                  {[
                    { bg: "#1600de", label: "P1" },
                    { bg: "#0080ff", label: "P2" },
                    { bg: "#ffc000", label: "P3" },
                    { bg: "#ff0080", label: "P4" },
                  ].map(({ bg, label }) => (
                    <div key={label} className="content-stretch flex flex-col items-start mr-[-8px] relative shrink-0 size-[28px]">
                      <div className="border border-[rgba(255,255,255,0.5)] border-solid content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[28px]" style={{ backgroundColor: bg }}>
                        <div className="flex flex-col font-sans font-bold justify-center leading-[0] not-italic relative shrink-0 text-[8px] text-white whitespace-nowrap"><p className="leading-[12px]">{label}</p></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="backdrop-blur-[2px] bg-[#121521] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex flex-col items-start px-[9px] py-[5px] relative rounded-[10px] shrink-0">
                  <div className="flex flex-col font-orbitron font-bold justify-center leading-[0] relative shrink-0 text-[#a4a9c6] text-[12px] tracking-[0.48px] whitespace-nowrap"><p className="leading-[16px]">Round 3/5</p></div>
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_30px_0px_rgba(255,255,255,0.1)]" />
            </div>
            {/* Text + Feature list */}
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start min-h-px min-w-px relative">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                  <div className="flex flex-col font-orbitron font-bold justify-center leading-[0] relative shrink-0 text-[48px] text-white tracking-[0.96px] w-full"><p className="leading-[1.1]">Jump in and play together</p></div>
                  <div className="content-stretch flex items-center justify-center pr-[110px] relative shrink-0 w-full">
                    <div className="flex flex-[1_0_0] flex-col font-orbitron font-bold justify-center leading-[0] min-h-px min-w-px relative text-[#676e88] text-[16px] tracking-[0.48px]">
                      <p className="leading-[1.4]">No downloads. No waiting. Click a game, invite your friends, and start playing in seconds — right in your browser.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
                {[
                  { icon: imgSvg8,  title: "Instant Launch",        desc: "Games load in under 2 seconds, directly in your browser" },
                  { icon: imgSvg9,  title: "Real-Time Multiplayer", desc: "Play with friends or match with players worldwide" },
                  { icon: imgSvg10, title: "Always Connected",       desc: "Cross-device play with persistent sessions and stats" },
                  { icon: imgSvg11, title: "Play Anywhere",          desc: "Works on any device with a modern browser" },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="bg-[rgba(232,229,255,0.06)] border border-[rgba(255,255,255,0.05)] border-solid content-stretch flex gap-[16px] items-start px-[16px] py-[18px] relative rounded-[20px] shrink-0 w-full">
                    <div className="bg-[rgba(149,128,255,0.1)] content-stretch flex items-center justify-center relative rounded-[65.6px] shrink-0 size-[40px]">
                      <div className="relative shrink-0 size-[24px]"><img alt="" className="absolute block max-w-none size-full" src={icon} /></div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7px] items-start min-h-px min-w-px relative">
                      <div className="flex flex-col font-orbitron font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[0.48px] w-full"><p className="leading-[1.4]">{title}</p></div>
                      <div className="flex flex-col font-orbitron font-bold justify-center leading-[0] relative shrink-0 text-[#676e88] text-[14px] tracking-[0.56px] w-full"><p className="leading-[1.3]">{desc}</p></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Build & Share Section */}
          <div className="content-stretch flex flex-col gap-[50px] items-center px-[40px] py-[100px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[24px] items-center pt-[5.5px] relative shrink-0 w-[1368px]">
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div className="flex flex-col font-orbitron font-bold justify-center leading-[0] relative shrink-0 text-[48px] text-center text-white tracking-[0.96px] whitespace-nowrap"><p className="leading-[1.1]">{`Build & share your games`}</p></div>
              </div>
              <div className="flex flex-col font-orbitron font-bold justify-center leading-[0] relative shrink-0 text-[#676e88] text-[16px] text-center tracking-[0.48px] w-[492px]">
                <p className="leading-[1.4]">{`64bit.games isn't just for players. Upload your games or create new ones with our built-in tools.`}</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[24px] h-[500px] items-start justify-center relative shrink-0 w-full">
              {/* Add Your Own Games */}
              <div className="bg-[rgba(232,229,255,0.06)] border border-[rgba(255,255,255,0.05)] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[90px] items-start min-h-px min-w-px overflow-clip p-[41px] relative rounded-[20px] self-stretch">
                <div className="bg-[rgba(255,255,255,0)] border border-[rgba(255,255,255,0.2)] border-dashed relative rounded-[20px] shrink-0 w-full">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[30px] items-center px-[75px] py-[40px] relative w-full">
                    <div className="relative shrink-0 size-[28px]"><img alt="" className="absolute block max-w-none size-full" src={imgSvg12} /></div>
                    <div className="content-stretch flex flex-col font-bold gap-[11px] items-center leading-[0] relative shrink-0 text-center w-[417px]">
                      <div className="flex flex-col font-orbitron justify-center relative shrink-0 text-[#a4a9c6] text-[16px] tracking-[0.48px] w-full"><p className="leading-[1.4]">Drop your game files here or click to browse</p></div>
                      <div className="flex flex-col font-mono justify-center relative shrink-0 text-[#676e88] text-[14px] tracking-[0.56px] w-full"><p className="leading-[1.3]">HTML5 · WebGL · .zip</p></div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start relative w-full">
                    <div className="flex flex-col font-orbitron font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-white tracking-[0.72px] whitespace-nowrap"><p className="leading-[1.2]">Add Your Own Games</p></div>
                    <div className="content-stretch flex flex-col items-start pr-[210px] relative shrink-0 w-full">
                      <div className="flex flex-col font-orbitron font-medium justify-center leading-[0] relative shrink-0 text-[#676e88] text-[16px] tracking-[0.64px] w-full"><p className="leading-[1.4]">Have a game ready? Upload it to the platform and share it with thousands of players instantly. Support for HTML5, WebGL, and more.</p></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Create Your Own Game */}
              <div className="bg-[rgba(232,229,255,0.06)] border border-[rgba(255,255,255,0.05)] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[90px] items-start min-h-px min-w-px overflow-clip p-[41px] relative rounded-[20px] self-stretch">
                <div className="bg-[rgba(255,255,255,0)] border-[1.463px] border-[rgba(255,255,255,0.05)] border-solid h-[191px] relative rounded-[20px] shrink-0 w-[568px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11.705px] items-start p-[24.872px] relative size-full">
                    <div className="relative shrink-0 w-full">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.705px] items-center relative w-full">
                        <div className="content-stretch flex gap-[5.852px] items-start relative shrink-0">
                          <div className="bg-[rgba(240,66,153,0.4)] h-[8.03px] rounded-[14629.235px] shrink-0 w-[8.028px]" />
                          <div className="bg-[rgba(255,198,26,0.4)] h-[8.03px] rounded-[14629.235px] shrink-0 w-[8.028px]" />
                          <div className="bg-[rgba(26,230,111,0.4)] h-[8.03px] rounded-[14629.235px] shrink-0 w-[8.028px]" />
                        </div>
                        <div className="flex flex-col font-mono justify-center leading-[0] not-italic relative shrink-0 text-[17.557px] text-[rgba(115,123,140,0.6)] whitespace-nowrap"><p className="leading-[23.409px]">game.js</p></div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-full">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2.926px] items-start relative w-full">
                        <div className="flex flex-col font-mono justify-center leading-[0] not-italic relative shrink-0 text-[#6a4dff] text-[17.557px] w-full">
                          <p><span className="leading-[23.409px]">const</span><span className="leading-[23.409px] text-[rgba(115,123,140,0.4)]">{` `}</span><span className="leading-[23.409px]">player</span><span className="leading-[23.409px] text-[rgba(115,123,140,0.4)]">{` = `}</span><span className="leading-[23.409px] text-[#ffc61a]">createSprite</span><span className="leading-[23.409px] text-[rgba(115,123,140,0.4)]">()</span></p>
                        </div>
                        <div className="flex flex-col font-mono justify-center leading-[0] not-italic relative shrink-0 text-[#6a4dff] text-[17.557px] w-full">
                          <p><span className="leading-[23.409px]">player</span><span className="leading-[23.409px] text-[rgba(115,123,140,0.4)]">.onCollision(</span><span className="leading-[23.409px] text-[#1ae66f]">{`'coin'`}</span><span className="leading-[23.409px] text-[rgba(115,123,140,0.4)]">{`, () => {`}</span></p>
                        </div>
                        <div className="flex flex-col font-mono justify-center leading-[0] not-italic pl-[23.409px] relative shrink-0 text-[#ffc61a] text-[17.557px] w-full">
                          <p><span className="leading-[23.409px]">score</span><span className="leading-[23.409px] text-[rgba(115,123,140,0.4)]">{` += `}</span><span className="leading-[23.409px] text-[#f04299]">10</span></p>
                        </div>
                        <div className="flex flex-col font-mono justify-center leading-[0] not-italic relative shrink-0 text-[17.557px] text-[rgba(115,123,140,0.4)] w-full"><p className="leading-[23.409px]">{`})`}</p></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start relative w-full">
                    <div className="flex flex-col font-orbitron font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-white tracking-[0.72px] whitespace-nowrap"><p className="leading-[1.2]">Create Your Own Game</p></div>
                    <div className="content-stretch flex flex-col items-start pr-[210px] relative shrink-0 w-full">
                      <div className="flex flex-col font-orbitron font-medium justify-center leading-[0] relative shrink-0 text-[#676e88] text-[16px] tracking-[0.64px] w-full"><p className="leading-[1.4]">Build games from scratch with our visual editor and coding tools. No complex setup — just start creating and publish when ready.</p></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="content-stretch flex flex-col items-start px-[20px] py-[128px] relative shrink-0 w-full">
            <div
              className="absolute inset-[-60px_0_60px_0]"
              style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 669\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(99.888 0.58136 -0.19067 29.004 732.51 382.19)\\'><stop stop-color=\\'rgba(59,118,237,0.12)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(59,89,237,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}
            />
            <div className="content-stretch flex flex-col gap-[24px] items-center px-[16px] relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0">
                <div className="content-stretch flex flex-col gap-[32px] items-center leading-[0] relative shrink-0 text-center whitespace-nowrap">
                  <div className="flex flex-col font-orbitron font-black justify-center relative shrink-0 text-[72px] text-white">
                    <p className="leading-none mb-0">Ready to start</p>
                    <p className="leading-none">playing?</p>
                  </div>
                  <div className="flex flex-col font-orbitron font-bold justify-center relative shrink-0 text-[#676e88] text-[16px] tracking-[0.48px]">
                    <p className="leading-[1.4] mb-0">Thousands of games are waiting. No downloads, no</p>
                    <p className="leading-[1.4]">installs — just pure gaming fun.</p>
                  </div>
                </div>
                <div className="bg-[#6a4dff] content-stretch flex gap-[8px] h-[56px] items-center justify-center px-[24px] relative rounded-[16px] shrink-0">
                  <div className="flex flex-col font-orbitron font-black justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white tracking-[0.54px] whitespace-nowrap"><p className="leading-[1.2]">Start playing now</p></div>
                  <FireIcon className="relative shrink-0 size-[24px]" />
                </div>
              </div>
              {/* Stats row */}
              <div className="content-stretch flex gap-[20px] items-center justify-center pt-[44px] relative shrink-0 w-full">
                <div className="content-stretch flex gap-[7.99px] items-center relative shrink-0">
                  <div className="flex flex-col font-orbitron font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-white tracking-[0.72px] whitespace-nowrap"><p className="leading-[1.2]">4000+</p></div>
                  <div className="flex flex-col font-orbitron font-bold justify-center leading-[0] relative shrink-0 text-[#676e88] text-[24px] text-center tracking-[0.72px] whitespace-nowrap"><p className="leading-[1.2]">Games</p></div>
                </div>
                <div className="bg-[rgba(255,255,255,0.1)] h-[24px] shrink-0 w-px" />
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="flex flex-col font-orbitron font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-white tracking-[0.72px] whitespace-nowrap"><p className="leading-[1.2]">24/7</p></div>
                  <div className="flex flex-col font-orbitron font-bold justify-center leading-[0] relative shrink-0 text-[#676e88] text-[24px] text-center tracking-[0.72px] whitespace-nowrap"><p className="leading-[1.2]">Online</p></div>
                </div>
                <div className="bg-[rgba(255,255,255,0.1)] h-[24px] shrink-0 w-px" />
                <div className="content-stretch flex gap-[7.99px] items-center relative shrink-0">
                  <div className="flex flex-col font-orbitron font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-white tracking-[0.72px] whitespace-nowrap"><p className="leading-[1.2]">Free</p></div>
                  <div className="flex flex-col font-orbitron font-bold justify-center leading-[0] relative shrink-0 text-[#676e88] text-[24px] text-center tracking-[0.72px] whitespace-nowrap"><p className="leading-[1.2]">To Play</p></div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <Footer />
      </div>

      {/* ── Mobile (below md) ── */}
      <div className="md:hidden w-full">
        <MobileLanding />
      </div>
    </>
  );
}
