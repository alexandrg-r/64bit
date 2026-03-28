const mNeonDrift = "https://www.figma.com/api/mcp/asset/c35b5c62-169a-4ffe-a4b0-c609d25e3552";
const mDungeonQuest = "https://www.figma.com/api/mcp/asset/0c593484-d2e6-4759-82b5-776804911282";
const mGemBlast = "https://www.figma.com/api/mcp/asset/8d71ae34-3d8a-4d23-ad43-83c38598951e";
const mCyberStrike = "https://www.figma.com/api/mcp/asset/36ed9fb1-f241-44e2-ae21-4685d9ea27ae";
const mCastleWars = "https://www.figma.com/api/mcp/asset/7c4aa56c-e47c-448d-b978-b7b82864409d";
const mBattleArena = "https://www.figma.com/api/mcp/asset/2512409d-6766-471c-9777-f14d7c3ea60c";
const mI0 = "https://www.figma.com/api/mcp/asset/ab5a7fe0-58bd-457b-bb29-d4f0fe7962cb";
const mI3 = "https://www.figma.com/api/mcp/asset/62426f94-0e45-4eff-b853-64c9df818a7c";
const mI4 = "https://www.figma.com/api/mcp/asset/b66ceb73-61b9-43b6-9fe5-ad3b3b8098eb";
const mI5 = "https://www.figma.com/api/mcp/asset/5a70fdb6-a0c6-42a0-897e-9b7b1b8b56d9";
const mI6 = "https://www.figma.com/api/mcp/asset/8cbf221d-f923-4e07-8fc1-33c6867bb32b";
const mI7 = "https://www.figma.com/api/mcp/asset/c0406e33-b556-4295-8fb3-3c992db2cb29";
const mI8 = "https://www.figma.com/api/mcp/asset/1bdd5f7f-9248-4d53-9cb5-d15e8a0df53f";
const mI9 = "https://www.figma.com/api/mcp/asset/fd7bb867-f922-4607-8298-cab2d0b37ae2";
const mI10 = "https://www.figma.com/api/mcp/asset/e3aaf2db-ab64-4b94-bf16-56fbc32359b3";
const mI11 = "https://www.figma.com/api/mcp/asset/9d059a09-f127-4df2-be35-ab37fcb538d8";
const mI12 = "https://www.figma.com/api/mcp/asset/4ed52b32-ce58-48d6-94d3-09b335cb6790";
const mI13 = "https://www.figma.com/api/mcp/asset/1118800f-1807-4cda-8bc1-cacb3dc7119a";
const mI14 = "https://www.figma.com/api/mcp/asset/d5594b23-3ee7-4b1d-a8d1-8e46c7971154";
const mI15 = "https://www.figma.com/api/mcp/asset/261ce3b0-a1b5-4da1-9c64-787f085c3da8";
const mI16 = "https://www.figma.com/api/mcp/asset/b6d31331-a174-4f8e-a745-a247afbe14ca";
const mI17 = "https://www.figma.com/api/mcp/asset/91e868d4-f106-4a3d-9089-95c6cb878cb6";
const mI18 = "https://www.figma.com/api/mcp/asset/684565e9-8cf2-44af-9f55-130de992457c";
const mI19 = "https://www.figma.com/api/mcp/asset/b235b740-7020-48ff-8a5a-a44c3042c61d";
const mI20 = "https://www.figma.com/api/mcp/asset/6c585fa2-e01f-492d-a1b2-8c360b24a2c3";

export default function MobileLanding() {
  const mobileGames = [
    { img: mNeonDrift,    badge: "🔥 Hot",  badgeBg: "#f04299", darkBadge: false, name: "Neon Drift",    genre: "Racing" },
    { img: mDungeonQuest, badge: "⭐ Top",  badgeBg: "#ffc61a", darkBadge: true,  name: "Dungeon Quest", genre: "RPG" },
    { img: mGemBlast,     badge: null,       badgeBg: "",        darkBadge: false, name: "Gem Blast",     genre: "Puzzles" },
    { img: mCyberStrike,  badge: "New",      badgeBg: "#6a4dff", darkBadge: true,  name: "Cyber Strike",  genre: "Action" },
    { img: mCastleWars,   badge: null,       badgeBg: "",        darkBadge: false, name: "Castle Wars",   genre: "Strategy" },
    { img: mBattleArena,  badge: "🔥 Hot",  badgeBg: "#f04299", darkBadge: false, name: "Battle Arena",  genre: "Multiplayer" },
  ];

  const whyFeatures = [
    { icon: mI8,  title: "4000+ Mini Games",       lines: ["A massive and ever-growing library of games", "across every genre you can imagine."] },
    { icon: mI9,  title: "No Install Needed",       lines: ["Click and play. Zero downloads, zero setup,", "zero waiting."] },
    { icon: mI10, title: "Multiplayer with Friends", lines: ["Invite your friends and compete or cooperate", "in real-time multiplayer games."] },
    { icon: mI0,  title: "Controller Support",      lines: ["Plug in your gamepad and play with full native", "controller support."] },
    { icon: mI11, title: "Add Your Own Games",      lines: ["Upload your games and share them with the", "entire 64bit.games community."] },
    { icon: mI12, title: "Create Your Own Game",    lines: ["Build games from scratch using our built-in", "creation tools and editor."] },
  ];

  const jumpFeatures = [
    { icon: mI13, title: "Instant Launch",       lines: ["Games load in under 2 seconds, directly in", "your browser"] },
    { icon: mI14, title: "Real-Time Multiplayer", lines: ["Play with friends or match with players", "worldwide"] },
    { icon: mI15, title: "Always Connected",      lines: ["Cross-device play with persistent sessions", "and stats"] },
    { icon: mI16, title: "Play Anywhere",          lines: ["Works on any device with a modern browser"] },
  ];

  return (
    <div className="bg-[#0b0d14] flex flex-col items-start w-full min-h-screen">

      {/* ── Nav ── */}
      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[12px] bg-[rgba(11,13,20,0.6)] border-b border-[rgba(33,36,48,0.5)]">
        <div className="h-[64px] flex items-center justify-between pl-[16px] pr-[12px]">
          {/* Logo */}
          <div className="flex gap-[8px] items-center shrink-0">
            <div className="relative size-[28px] shrink-0">
              <img alt="" className="absolute block max-w-none size-full" src={mI0} />
            </div>
            <div className="flex flex-col justify-center text-[20px] font-bold font-sans leading-[28px] whitespace-nowrap">
              <p>
                <span className="text-white">64bit</span>
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(144.11789768286278deg, rgb(124, 59, 237) 0%, rgb(207, 71, 235) 100%)" }}
                >.games</span>
              </p>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex gap-[12px] items-center shrink-0">
            <button className="flex h-[40px] items-center justify-center px-[16px] py-[8px] rounded-[10px]">
              <span className="font-sans text-[#a4a9c6] text-[14px] leading-[20px]">Sign In</span>
            </button>
            <button className="relative flex h-[40px] items-center justify-center px-[24px] py-[8px] rounded-[12px] overflow-hidden shadow-[0px_0px_30px_0px_rgba(126,71,235,0.4),0px_0px_80px_0px_rgba(126,71,235,0.15)]">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-[12px] pointer-events-none"
                style={{ backgroundImage: "linear-gradient(135.08778960058592deg, rgb(116, 68, 228) 0%, rgb(161, 90, 242) 100%)" }}
              />
              <span className="relative font-sans font-bold text-white text-[14px] leading-[20px]">Start Playing</span>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_0px_0px_rgba(174,140,242,0.3)]" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Content (offset for fixed nav) ── */}
      <div className="flex flex-col items-start w-full pt-[64px]">

        {/* ── Hero Section ── */}
        <div className="relative flex items-center justify-center min-h-[750px] overflow-clip w-full">
          {/* Background gradients */}
          <div
            className="absolute inset-0 opacity-30"
            style={{ backgroundImage: "linear-gradient(180deg, rgba(33, 36, 48, 0.3) 1.6667%, rgba(33, 36, 48, 0) 1.6667%), linear-gradient(90deg, rgba(33, 36, 48, 0.3) 1.6667%, rgba(33, 36, 48, 0) 1.6667%)" }}
          />
          <div
            className="absolute inset-0"
            style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 375 750.45\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(30 0 0 37.523 187.5 0)\\'><stop stop-color=\\'rgba(124,59,237,0.12)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(124,59,237,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}
          />
          <div
            className="absolute inset-0"
            style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 375 750.45\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(22.5 0 0 30.018 300 150.09)\\'><stop stop-color=\\'rgba(51,153,255,0.08)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(51,153,255,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}
          />
          <div className="absolute bg-[rgba(124,59,237,0.05)] blur-[60px] bottom-[23.81%] left-1/4 right-[-27.4%] rounded-[9999px] top-[24.99%]" />
          <div className="absolute bg-[rgba(51,153,255,0.05)] blur-[50px] bottom-[33.35%] left-[-10.33%] right-1/4 rounded-[9999px] top-[23.99%]" />
          <div className="absolute bg-gradient-to-t bottom-0 from-[#0b0d14] h-[128px] left-0 right-0 to-[rgba(11,13,20,0)]" />

          {/* Hero content */}
          <div className="flex flex-col gap-[23.4px] items-start px-[16px] py-[48px] w-full max-w-[576px] relative">
            {/* Online pill */}
            <div className="backdrop-blur-[2px] bg-[rgba(124,59,237,0.05)] border border-[rgba(124,59,237,0.2)] flex gap-[8px] items-center px-[17px] py-[7px] rounded-[9999px] shrink-0">
              <div className="bg-[#1ae66f] rounded-[9999px] shrink-0 size-[8px]" />
              <span className="font-sans text-[#a4a9c6] text-[14px] leading-[20px] whitespace-nowrap">10,000+ players online now</span>
            </div>

            {/* Heading */}
            <div className="flex flex-col font-sans font-bold text-[48px] tracking-[-1.2px] w-full shrink-0">
              <p className="leading-[50.4px] mb-0 text-white">Play the best</p>
              <p
                className="leading-[50.4px] mb-0 bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(116.21157410986282deg, rgb(146, 92, 240) 0%, rgb(77, 166, 255) 50%, rgb(124, 59, 237) 100%)" }}
              >mini games</p>
              <p className="leading-[50.4px] text-white">instantly</p>
            </div>

            {/* Sub-description */}
            <div className="flex flex-col font-sans text-[#a4a9c6] text-[18px] max-w-[448px] pb-[16.6px] pt-[0.6px] w-full shrink-0">
              <p className="leading-[29.25px] mb-0">4000+ browser games. No downloads.</p>
              <p className="leading-[29.25px] mb-0">Jump into action, puzzles, racing,</p>
              <p className="leading-[29.25px]">multiplayer — all free, right now.</p>
            </div>

            {/* CTA button */}
            <button className="relative flex gap-[12px] h-[56px] items-center justify-center px-[56px] rounded-[16px] overflow-hidden shadow-[0px_0px_30px_0px_rgba(126,71,235,0.4),0px_0px_80px_0px_rgba(126,71,235,0.15)] shrink-0">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-[16px] pointer-events-none"
                style={{ backgroundImage: "linear-gradient(135.01343160645115deg, rgb(116, 68, 228) 0%, rgb(161, 90, 242) 100%)" }}
              />
              <div className="relative shrink-0 size-[16px]">
                <img alt="" className="absolute block max-w-none size-full" src={mI3} />
              </div>
              <span className="relative font-sans font-bold text-[18px] text-center text-white tracking-[0.45px] leading-[28px] whitespace-nowrap">Start Playing</span>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_0px_0px_rgba(174,140,242,0.3)]" />
            </button>

            {/* Feature badge pills — 2 rows, absolutely positioned in an 88.6 px tall slot */}
            <div className="relative h-[88.6px] w-full shrink-0">
              {/* Row 1 */}
              <div className="absolute left-0 top-[calc(50%-29.3px)] -translate-y-1/2 backdrop-blur-[2px] bg-[rgba(28,31,44,0.5)] border border-[rgba(255,255,255,0.1)] flex gap-[8px] items-center px-[15px] py-[7px] rounded-[9999px]">
                <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block max-w-none size-full" src={mI4} /></div>
                <span className="font-sans text-[#a4a9c6] text-[12px] leading-[16px] whitespace-nowrap">Browser Play</span>
              </div>
              <div className="absolute left-[134.69px] top-[calc(50%-29.3px)] -translate-y-1/2 backdrop-blur-[2px] bg-[rgba(28,31,44,0.5)] border border-[rgba(255,255,255,0.1)] flex gap-[8px] items-center px-[15px] py-[7px] rounded-[9999px]">
                <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block max-w-none size-full" src={mI5} /></div>
                <span className="font-sans text-[#a4a9c6] text-[12px] leading-[16px] whitespace-nowrap">No Download</span>
              </div>
              {/* Row 2 */}
              <div className="absolute left-0 top-[calc(50%+12.7px)] -translate-y-1/2 backdrop-blur-[2px] bg-[rgba(28,31,44,0.5)] border border-[rgba(255,255,255,0.1)] flex gap-[8px] items-center px-[15px] py-[7px] rounded-[9999px]">
                <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block max-w-none size-full" src={mI6} /></div>
                <span className="font-sans text-[#a4a9c6] text-[12px] leading-[16px] whitespace-nowrap">Multiplayer</span>
              </div>
              <div className="absolute left-[122.02px] top-[calc(50%+12.7px)] -translate-y-1/2 backdrop-blur-[2px] bg-[rgba(28,31,44,0.5)] border border-[rgba(255,255,255,0.1)] flex gap-[8px] items-center px-[15px] py-[7px] rounded-[9999px]">
                <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block max-w-none size-full" src={mI7} /></div>
                <span className="font-sans text-[#a4a9c6] text-[12px] leading-[16px] whitespace-nowrap">4000+ Games</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Popular Games ── */}
        <div className="relative flex flex-col items-start py-[96px] w-full">
          <div className="absolute bg-gradient-to-r from-[rgba(124,59,237,0)] h-px left-0 right-0 to-[rgba(124,59,237,0)] top-0 via-1/2 via-[rgba(124,59,237,0.2)]" />
          <div className="flex flex-col gap-[48px] items-start px-[16px] w-full">
            {/* Section header */}
            <div className="flex flex-col gap-[12px] items-start pt-[5.5px] whitespace-nowrap shrink-0">
              <span className="font-sans font-bold text-[#6a4dff] text-[12px] tracking-[1.2px] uppercase leading-[16px]">Trending Now</span>
              <div className="font-sans font-bold text-[30px]">
                <p>
                  <span className="leading-[36px] text-white">Popular </span>
                  <span
                    className="bg-clip-text text-transparent leading-[36px]"
                    style={{ backgroundImage: "linear-gradient(154.70961179406117deg, rgb(51, 153, 255) 0%, rgb(124, 59, 237) 100%)" }}
                  >Games</span>
                </p>
              </div>
            </div>
            {/* Game cards */}
            <div className="flex flex-col gap-[24px] items-start w-full shrink-0">
              {mobileGames.map(({ img, badge, badgeBg, darkBadge, name, genre }) => (
                <div
                  key={name}
                  className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex flex-col h-[309.33px] isolate items-start overflow-clip p-px relative rounded-[12px] w-full shrink-0"
                >
                  <div className="relative w-full z-[2] shrink-0">
                    <div className="flex flex-col items-start justify-center overflow-clip relative w-full">
                      <div className="h-[227.33px] relative w-full shrink-0">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img alt="" className="absolute left-0 max-w-none size-full top-0 object-cover" src={img} />
                        </div>
                      </div>
                      {badge && (
                        <div
                          className="absolute flex items-center left-[12px] px-[11px] py-[3px] rounded-[9999px] top-[12px]"
                          style={{ backgroundColor: badgeBg }}
                        >
                          <span className={`font-sans font-bold text-[12px] leading-[16px] whitespace-nowrap ${darkBadge ? "text-[#0b0d14]" : "text-white"}`}>
                            {badge}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="relative w-full z-[1] shrink-0">
                    <div className="flex flex-col items-start p-[16px] w-full">
                      <div className="font-sans font-bold text-[18px] text-white w-full">
                        <p className="leading-[28px]">{name}</p>
                      </div>
                      <div className="font-sans text-[#a4a9c6] text-[14px] w-full">
                        <p className="leading-[20px]">{genre}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Why 64bit.games ── */}
        <div className="relative flex flex-col items-start overflow-clip py-[112px] w-full">
          <div
            className="absolute inset-0 opacity-50"
            style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 375 1842.5\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(30 0 0 92.125 187.5 0)\\'><stop stop-color=\\'rgba(124,59,237,0.12)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(124,59,237,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}
          />
          <div
            className="absolute inset-0 opacity-20"
            style={{ backgroundImage: "linear-gradient(180deg, rgba(33, 36, 48, 0.3) 1.6667%, rgba(33, 36, 48, 0) 1.6667%), linear-gradient(90deg, rgba(33, 36, 48, 0.3) 1.6667%, rgba(33, 36, 48, 0) 1.6667%)" }}
          />
          <div className="flex flex-col gap-[64px] items-start px-[16px] relative w-full">
            {/* Header */}
            <div className="flex flex-col gap-[16px] items-center pt-[5.5px] w-full shrink-0">
              <span className="font-sans font-bold text-[#6a4dff] text-[12px] text-center tracking-[1.2px] uppercase leading-[16px] whitespace-nowrap">
                Platform Features
              </span>
              <div className="font-sans font-bold text-[36px] text-center w-full shrink-0">
                <p>
                  <span className="leading-[40px] text-white">Why </span>
                  <span
                    className="bg-clip-text text-transparent leading-[40px]"
                    style={{ backgroundImage: "linear-gradient(147.67810477707968deg, rgb(146, 92, 240) 0%, rgb(77, 166, 255) 50%, rgb(124, 59, 237) 100%)" }}
                  >64bit.games</span>
                  <span className="leading-[40px] text-white">?</span>
                </p>
              </div>
              <div className="font-sans text-[#a4a9c6] text-[18px] text-center max-w-[576px] w-full shrink-0">
                <p className="leading-[28px] mb-0">Everything you need for the ultimate</p>
                <p className="leading-[28px]">browser gaming experience</p>
              </div>
            </div>
            {/* Feature cards */}
            <div className="flex flex-col gap-[20px] items-start w-full shrink-0">
              {whyFeatures.map(({ icon, title, lines }) => (
                <div
                  key={title}
                  className="bg-[rgba(255,255,255,0.05)] border border-[#262936] h-[217.5px] overflow-clip relative rounded-[16px] w-full shrink-0"
                >
                  <div className="absolute flex items-center justify-center left-[28px] py-[14px] rounded-[12px] top-[28px] w-[56px]">
                    <div className="relative size-[28px]">
                      <img alt="" className="absolute block max-w-none size-full" src={icon} />
                    </div>
                  </div>
                  <div className="absolute flex flex-col items-start left-[28px] right-[28px] top-[104px]">
                    <span className="font-sans font-bold text-[20px] text-white leading-[28px] whitespace-nowrap">{title}</span>
                  </div>
                  <div className="absolute flex flex-col items-start left-[28px] right-[28px] top-[141.38px]">
                    <div className="font-sans text-[#a4a9c6] text-[14px]">
                      {lines.map((line, i) => (
                        <p key={i} className={`leading-[22.75px]${i < lines.length - 1 ? " mb-0" : ""} whitespace-nowrap`}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Jump in and play ── */}
        <div className="relative flex flex-col items-start overflow-clip px-[16px] py-[112px] w-full">
          <div
            className="absolute inset-0 opacity-15"
            style={{ backgroundImage: "linear-gradient(180deg, rgba(33, 36, 48, 0.3) 1.6667%, rgba(33, 36, 48, 0) 1.6667%), linear-gradient(90deg, rgba(33, 36, 48, 0.3) 1.6667%, rgba(33, 36, 48, 0) 1.6667%)" }}
          />
          <div className="absolute bg-gradient-to-r from-[rgba(124,59,237,0)] h-px left-0 right-0 to-[rgba(124,59,237,0)] top-0 via-1/2 via-[rgba(124,59,237,0.2)]" />
          <div className="flex flex-col gap-[16px] items-start pt-[5.5px] relative w-full">
            <span className="font-sans font-bold text-[#6a4dff] text-[12px] tracking-[1.2px] uppercase leading-[16px] whitespace-nowrap shrink-0">
              Instant &amp; Social
            </span>
            {/* Heading */}
            <div className="font-sans font-bold text-[36px] w-full shrink-0">
              <p className="mb-0">
                <span className="leading-[45px] text-white">Jump in and </span>
                <span
                  className="bg-clip-text text-transparent leading-[45px]"
                  style={{ backgroundImage: "linear-gradient(138.26681642771433deg, rgb(51, 153, 255) 0%, rgb(124, 59, 237) 100%)" }}
                >play</span>
              </p>
              <p
                className="bg-clip-text text-transparent leading-[45px]"
                style={{ backgroundImage: "linear-gradient(138.26681642771433deg, rgb(51, 153, 255) 0%, rgb(124, 59, 237) 100%)" }}
              >together</p>
            </div>
            {/* Description */}
            <div className="font-sans text-[#a4a9c6] text-[18px] max-w-[448px] pt-[8px] w-full shrink-0">
              <p className="leading-[29.25px] mb-0">No downloads. No waiting. Click a game,</p>
              <p className="leading-[29.25px] mb-0">invite your friends, and start playing in</p>
              <p className="leading-[29.25px]">seconds — right in your browser.</p>
            </div>
            {/* Feature list */}
            <div className="flex flex-col gap-[20px] items-start pt-[24px] w-full shrink-0">
              {jumpFeatures.map(({ icon, title, lines }) => (
                <div key={title} className="flex gap-[16px] items-start w-full shrink-0">
                  <div className="flex flex-col h-[42px] items-start pt-[2px] w-[40px] shrink-0">
                    <div className="bg-[rgba(124,59,237,0.1)] flex items-center justify-center rounded-[12px] size-[40px]">
                      <div className="relative size-[20px]">
                        <img alt="" className="absolute block max-w-none size-full" src={icon} />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[1.375px] items-start min-w-0 flex-1">
                    <span className="font-sans font-bold text-[16px] text-white leading-[24px] whitespace-nowrap">{title}</span>
                    <div className="font-sans text-[#a4a9c6] text-[14px]">
                      {lines.map((line, i) => (
                        <p key={i} className={`leading-[22.75px]${i < lines.length - 1 ? " mb-0" : ""} whitespace-nowrap`}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Build & Share ── */}
        <div className="relative flex flex-col items-start overflow-clip py-[112px] w-full">
          <div
            className="absolute inset-0 opacity-15"
            style={{ backgroundImage: "linear-gradient(180deg, rgba(33, 36, 48, 0.3) 1.6667%, rgba(33, 36, 48, 0) 1.6667%), linear-gradient(90deg, rgba(33, 36, 48, 0.3) 1.6667%, rgba(33, 36, 48, 0) 1.6667%)" }}
          />
          <div className="absolute bg-gradient-to-r from-[rgba(51,153,255,0)] h-px left-0 right-0 to-[rgba(51,153,255,0)] top-0 via-1/2 via-[rgba(51,153,255,0.2)]" />
          <div className="absolute bg-[rgba(51,153,255,0.05)] blur-[60px] bottom-[40.73%] right-0 rounded-[9999px] top-[33.33%] w-[384px]" />
          <div className="absolute bg-[rgba(124,59,237,0.05)] blur-[50px] bottom-0 h-[320px] left-1/4 right-[-10.33%] rounded-[9999px]" />

          <div className="flex flex-col gap-[48px] items-start px-[16px] relative w-full">
            {/* Header */}
            <div className="flex flex-col gap-[16px] items-center pt-[5.5px] w-full shrink-0">
              <span className="font-sans font-bold text-[#6a4dff] text-[12px] text-center tracking-[1.2px] uppercase leading-[16px] whitespace-nowrap">
                For Creators
              </span>
              <div className="font-sans font-bold text-[36px] text-center w-full shrink-0">
                <p className="mb-0">
                  <span className="leading-[40px] text-white">Build &amp; share </span>
                  <span
                    className="bg-clip-text text-transparent leading-[40px]"
                    style={{ backgroundImage: "linear-gradient(146.42319101860576deg, rgb(51, 153, 255) 0%, rgb(124, 59, 237) 100%)" }}
                  >your</span>
                </p>
                <p
                  className="bg-clip-text text-transparent leading-[40px]"
                  style={{ backgroundImage: "linear-gradient(146.42319101860576deg, rgb(51, 153, 255) 0%, rgb(124, 59, 237) 100%)" }}
                >games</p>
              </div>
              <div className="font-sans text-[#a4a9c6] text-[18px] text-center max-w-[576px] w-full shrink-0">
                <p className="leading-[28px] mb-0">64bit.games isn&apos;t just for players. Upload</p>
                <p className="leading-[28px] mb-0">your games or create new ones with our</p>
                <p className="leading-[28px]">built-in tools.</p>
              </div>
            </div>

            {/* Card: Add Your Own Games */}
            <div className="bg-[rgba(255,255,255,0.05)] border border-[#262936] flex flex-col h-[422px] items-start overflow-clip p-[33px] relative rounded-[16px] w-full shrink-0">
              <div className="absolute bg-[rgba(124,59,237,0.05)] blur-[30px] right-0 rounded-[9999px] size-[160px] top-0" />
              <div className="relative size-full">
                {/* Upload icon box */}
                <div className="absolute bg-[rgba(124,59,237,0.1)] flex items-center justify-center left-0 rounded-[12px] shadow-[0px_0px_20px_0px_rgba(124,59,237,0.15)] size-[56px] top-0">
                  <div className="relative size-[28px]">
                    <img alt="" className="absolute block max-w-none size-full" src={mI11} />
                  </div>
                </div>
                <div className="absolute flex flex-col items-start left-0 right-0 top-[80px]">
                  <span className="font-sans font-bold text-[24px] text-white leading-[32px] whitespace-nowrap">Add Your Own Games</span>
                </div>
                <div className="absolute flex flex-col items-start left-0 right-0 top-[124px]">
                  <div className="font-sans text-[#a4a9c6] text-[14px]">
                    <p className="leading-[22.75px] mb-0">Have a game ready? Upload it to the</p>
                    <p className="leading-[22.75px] mb-0">platform and share it with thousands of</p>
                    <p className="leading-[22.75px] mb-0">players instantly. Support for HTML5,</p>
                    <p className="leading-[22.75px]">WebGL, and more.</p>
                  </div>
                </div>
                {/* Drop zone */}
                <div className="absolute bg-[rgba(124,59,237,0.05)] border border-[rgba(124,59,237,0.2)] border-dashed h-[117px] left-0 right-0 rounded-[12px] top-[239px]">
                  <div className="absolute left-1/2 -translate-x-1/2 size-[32px] top-[20px]">
                    <img alt="" className="absolute block max-w-none size-full" src={mI17} />
                  </div>
                  <div className="absolute flex flex-col items-center left-[20px] right-[20px] top-[60px]">
                    <span className="font-sans text-[#a4a9c6] text-[12px] text-center leading-[16px] whitespace-nowrap">Drop your game files here or click to browse</span>
                  </div>
                  <div className="absolute flex flex-col items-center left-[20px] right-[20px] top-[80px]">
                    <span className="font-mono text-[10px] text-[rgba(115,123,140,0.6)] text-center leading-[15px] whitespace-nowrap">HTML5 · WebGL · .zip</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card: Create Your Own Game */}
            <div className="bg-[rgba(255,255,255,0.05)] border border-[#262936] flex flex-col h-[449px] items-start overflow-clip p-[33px] relative rounded-[16px] w-full shrink-0">
              <div className="absolute bg-[rgba(51,153,255,0.05)] blur-[30px] right-0 rounded-[9999px] size-[160px] top-0" />
              <div className="relative size-full">
                {/* Icon box */}
                <div className="absolute bg-[rgba(51,153,255,0.1)] flex items-center justify-center left-0 rounded-[12px] shadow-[0px_0px_20px_0px_rgba(51,153,255,0.15)] size-[56px] top-0">
                  <div className="relative size-[28px]">
                    <img alt="" className="absolute block max-w-none size-full" src={mI12} />
                  </div>
                </div>
                <div className="absolute flex flex-col items-start left-0 right-0 top-[80px]">
                  <span className="font-sans font-bold text-[24px] text-white leading-[32px] whitespace-nowrap">Create Your Own Game</span>
                </div>
                <div className="absolute flex flex-col items-start left-0 right-0 top-[124px]">
                  <div className="font-sans text-[#a4a9c6] text-[14px]">
                    <p className="leading-[22.75px] mb-0">Build games from scratch with our visual</p>
                    <p className="leading-[22.75px] mb-0">editor and coding tools. No complex setup</p>
                    <p className="leading-[22.75px] mb-0">— just start creating and publish when</p>
                    <p className="leading-[22.75px]">ready.</p>
                  </div>
                </div>
                {/* Code snippet */}
                <div className="absolute bg-[rgba(51,153,255,0.05)] border border-[rgba(51,153,255,0.15)] flex flex-col gap-[8px] items-start left-0 p-[17px] right-0 rounded-[12px] top-[239px]">
                  <div className="flex gap-[8px] items-center w-full">
                    <div className="flex gap-[4px] items-start shrink-0">
                      <div className="bg-[rgba(240,66,153,0.4)] rounded-[9999px] size-[8px]" />
                      <div className="bg-[rgba(255,198,26,0.4)] rounded-[9999px] size-[8px]" />
                      <div className="bg-[rgba(26,230,111,0.4)] rounded-[9999px] size-[8px]" />
                    </div>
                    <span className="font-mono text-[12px] text-[rgba(115,123,140,0.6)] leading-[16px] whitespace-nowrap">game.js</span>
                  </div>
                  <div className="flex flex-col gap-[2px] items-start w-full">
                    <div className="font-mono text-[#6a4dff] text-[12px] w-full">
                      <p>
                        <span className="leading-[16px]">const</span>
                        <span className="leading-[16px] text-[rgba(115,123,140,0.4)]"> </span>
                        <span className="leading-[16px]">player</span>
                        <span className="leading-[16px] text-[rgba(115,123,140,0.4)]"> = </span>
                        <span className="leading-[16px] text-[#ffc61a]">createSprite</span>
                        <span className="leading-[16px] text-[rgba(115,123,140,0.4)]">()</span>
                      </p>
                    </div>
                    <div className="font-mono text-[#6a4dff] text-[12px] w-full">
                      <p className="mb-0">
                        <span className="leading-[16px]">player</span>
                        <span className="leading-[16px] text-[rgba(115,123,140,0.4)]">.onCollision(</span>
                        <span className="leading-[16px] text-[#1ae66f]">{`'coin'`}</span>
                        <span className="leading-[16px] text-[rgba(115,123,140,0.4)]">{`, () =>`}</span>
                      </p>
                      <p className="leading-[16px] text-[rgba(115,123,140,0.4)]">{`{`}</p>
                    </div>
                    <div className="font-mono text-[#ffc61a] text-[12px] pl-[16px] w-full">
                      <p>
                        <span className="leading-[16px]">score</span>
                        <span className="leading-[16px] text-[rgba(115,123,140,0.4)]">{` += `}</span>
                        <span className="leading-[16px] text-[#f04299]">10</span>
                      </p>
                    </div>
                    <div className="font-mono text-[12px] text-[rgba(115,123,140,0.4)] w-full">
                      <p className="leading-[16px]">{`})`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Learn more link */}
            <button className="flex gap-[8px] h-[40px] items-center justify-center px-[16px] rounded-[10px] w-full shrink-0">
              <span className="font-sans font-bold text-[#6a4dff] text-[14px] text-center leading-[20px] whitespace-nowrap">Learn more about creator tools</span>
              <div className="relative size-[16px] shrink-0">
                <img alt="" className="absolute block max-w-none size-full" src={mI18} />
              </div>
            </button>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="relative flex flex-col items-start overflow-clip py-[128px] w-full">
          <div
            className="absolute inset-0"
            style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 375 738\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(30 0 0 36.9 187.5 0)\\'><stop stop-color=\\'rgba(124,59,237,0.12)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(124,59,237,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}
          />
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "linear-gradient(180deg, rgba(33, 36, 48, 0.3) 1.6667%, rgba(33, 36, 48, 0) 1.6667%), linear-gradient(90deg, rgba(33, 36, 48, 0.3) 1.6667%, rgba(33, 36, 48, 0) 1.6667%)" }}
          />
          <div className="absolute bg-gradient-to-r from-[rgba(124,59,237,0)] h-px left-0 right-0 to-[rgba(124,59,237,0)] top-0 via-1/2 via-[rgba(124,59,237,0.2)]" />

          <div className="flex flex-col gap-[24px] items-center px-[16px] relative w-full">
            {/* Free-to-play badge */}
            <div className="backdrop-blur-[2px] bg-[rgba(124,59,237,0.05)] border border-[rgba(124,59,237,0.2)] flex gap-[8px] items-center px-[17px] py-[7px] rounded-[9999px] shrink-0">
              <div className="relative size-[16px] shrink-0">
                <img alt="" className="absolute block max-w-none size-full" src={mI19} />
              </div>
              <span className="font-sans text-[#a4a9c6] text-[14px] text-center leading-[20px] whitespace-nowrap">Free to play — no account needed</span>
            </div>

            {/* Heading */}
            <div className="font-sans font-bold text-[48px] text-center w-full max-w-[768px] shrink-0">
              <p className="mb-0">
                <span className="leading-[60px] text-white">Ready to </span>
                <span
                  className="bg-clip-text text-transparent leading-[60px]"
                  style={{ backgroundImage: "linear-gradient(139.93645211854607deg, rgb(146, 92, 240) 0%, rgb(77, 166, 255) 50%, rgb(124, 59, 237) 100%)" }}
                >start</span>
              </p>
              <p>
                <span
                  className="bg-clip-text text-transparent leading-[60px]"
                  style={{ backgroundImage: "linear-gradient(139.93645211854607deg, rgb(146, 92, 240) 0%, rgb(77, 166, 255) 50%, rgb(124, 59, 237) 100%)" }}
                >playing</span>
                <span className="leading-[60px] text-white">?</span>
              </p>
            </div>

            {/* Description */}
            <div className="font-sans text-[#a4a9c6] text-[18px] text-center max-w-[512px] pb-[16px] w-full shrink-0">
              <p className="leading-[29.25px] mb-0">Thousands of games are waiting. No</p>
              <p className="leading-[29.25px] mb-0">downloads, no installs — just pure gaming</p>
              <p className="leading-[29.25px]">fun.</p>
            </div>

            {/* CTA button */}
            <button className="relative flex gap-[12px] h-[64px] items-center justify-center px-[64px] rounded-[16px] overflow-hidden shadow-[0px_0px_30px_0px_rgba(126,71,235,0.4),0px_0px_80px_0px_rgba(126,71,235,0.15)] shrink-0">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-[16px] pointer-events-none"
                style={{ backgroundImage: "linear-gradient(135.0289334950753deg, rgb(116, 68, 228) 0%, rgb(161, 90, 242) 100%)" }}
              />
              <div className="relative shrink-0 size-[16px]">
                <img alt="" className="absolute block max-w-none size-full" src={mI3} />
              </div>
              <span className="relative font-sans font-bold text-[18px] text-center text-white tracking-[0.45px] leading-[28px] whitespace-nowrap">Start Playing Now</span>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_0px_0px_rgba(174,140,242,0.3)]" />
            </button>

            {/* Stats */}
            <div className="flex gap-[64px] items-center justify-center pt-[24px] shrink-0">
              <div className="flex gap-[8px] items-center shrink-0">
                <span className="font-sans font-bold text-[24px] text-white text-center leading-[32px] whitespace-nowrap">4000+</span>
                <span className="font-sans text-[#a4a9c6] text-[14px] text-center leading-[20px] whitespace-nowrap">Games</span>
              </div>
              <div className="flex gap-[8px] items-center shrink-0">
                <span className="font-sans font-bold text-[24px] text-white text-center leading-[32px] whitespace-nowrap">24/7</span>
                <span className="font-sans text-[#a4a9c6] text-[14px] text-center leading-[20px] whitespace-nowrap">Online</span>
              </div>
              <div className="flex gap-[8px] items-center shrink-0">
                <span className="font-sans font-bold text-[24px] text-white text-center leading-[32px] whitespace-nowrap">Free</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="border-t border-[rgba(33,36,48,0.5)] flex flex-col items-start pb-[64px] pt-[65px] relative w-full">
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "linear-gradient(180deg, rgba(33, 36, 48, 0.3) 1.6667%, rgba(33, 36, 48, 0) 1.6667%), linear-gradient(90deg, rgba(33, 36, 48, 0.3) 1.6667%, rgba(33, 36, 48, 0) 1.6667%)" }}
          />
          <div className="flex flex-col gap-[48px] items-start px-[16px] relative w-full">
            {/* Logo + tagline + nav columns */}
            <div className="flex flex-col gap-[40px] items-start w-full shrink-0">
              {/* Logo block */}
              <div className="flex flex-col gap-[15.375px] items-start w-full shrink-0">
                <div className="flex gap-[8px] items-center w-full shrink-0">
                  <div className="relative size-[24px] shrink-0">
                    <img alt="" className="absolute block max-w-none size-full" src={mI20} />
                  </div>
                  <div className="font-sans font-bold text-[18px] whitespace-nowrap shrink-0">
                    <p>
                      <span className="leading-[28px] text-white">64bit</span>
                      <span
                        className="bg-clip-text text-transparent leading-[28px]"
                        style={{ backgroundImage: "linear-gradient(141.09562518747498deg, rgb(124, 59, 237) 0%, rgb(207, 71, 235) 100%)" }}
                      >.games</span>
                    </p>
                  </div>
                </div>
                <div className="font-sans text-[#a4a9c6] text-[14px] w-full shrink-0">
                  <p className="leading-[22.75px] mb-0">The ultimate browser gaming platform. 4000+ games,</p>
                  <p className="leading-[22.75px]">instant play, zero downloads.</p>
                </div>
              </div>

              {/* Platform */}
              <div className="flex flex-col gap-[16px] items-start w-full shrink-0">
                <span className="font-sans font-bold text-[14px] text-white leading-[20px]">Platform</span>
                <div className="flex flex-col gap-[10px] items-start w-full">
                  {["All Games", "Multiplayer", "New Releases", "Top Rated"].map((item) => (
                    <span key={item} className="font-sans text-[#a4a9c6] text-[14px] leading-[20px]">{item}</span>
                  ))}
                </div>
              </div>

              {/* Creators */}
              <div className="flex flex-col gap-[16px] items-start w-full shrink-0">
                <span className="font-sans font-bold text-[14px] text-white leading-[20px]">Creators</span>
                <div className="flex flex-col gap-[10px] items-start w-full">
                  {["Upload Game", "Game Editor", "Developer Docs", "Community"].map((item) => (
                    <span key={item} className="font-sans text-[#a4a9c6] text-[14px] leading-[20px]">{item}</span>
                  ))}
                </div>
              </div>

              {/* Company */}
              <div className="flex flex-col gap-[16px] items-start w-full shrink-0">
                <span className="font-sans font-bold text-[14px] text-white leading-[20px]">Company</span>
                <div className="flex flex-col gap-[10px] items-start w-full">
                  {["About", "Blog", "Careers", "Contact"].map((item) => (
                    <span key={item} className="font-sans text-[#a4a9c6] text-[14px] leading-[20px]">{item}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-[rgba(33,36,48,0.5)] flex flex-col gap-[12px] items-center pt-[33px] w-full shrink-0">
              <span className="font-sans text-[#a4a9c6] text-[12px] leading-[16px] whitespace-nowrap">© 2026 64bit.games. All rights reserved.</span>
              <div className="flex gap-[24px] items-center">
                {["Privacy", "Terms", "Cookies"].map((item) => (
                  <span key={item} className="font-sans text-[#a4a9c6] text-[12px] leading-[16px] whitespace-nowrap">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
