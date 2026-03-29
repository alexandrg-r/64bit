import Link from "next/link";

const paywall = {
  gradientBorder0: "/paywall/gradient-border-0.png",
  gradientBorder1: "/paywall/gradient-border-1.png",
  gradientBorder2: "/paywall/gradient-border-2.png",
  gradientBorder3: "/paywall/gradient-border-3.png",
  iconBack: "/paywall/icon-back.svg",
  svgController: "/paywall/svg-controller.svg",
  svgCheck: "/paywall/svg-check.svg",
  svgLightning: "/paywall/svg-lightning.svg",
  radioSelected: "/paywall/radio-selected.svg",
  svgCrown: "/paywall/svg-crown.svg",
  fireA: "/paywall/fire-a.svg",
  fireB: "/paywall/fire-b.svg",
  payApple: "/paywall/pay-apple.svg",
  payGoogle: "/paywall/pay-google.svg",
  payVisa: "/paywall/pay-visa.svg",
  payMc: "/paywall/pay-mc.svg",
  payAmex: "/paywall/pay-amex.svg",
  payPalPal: "/paywall/pay-paypal-pal.svg",
  payPalPay: "/paywall/pay-paypal-pay.svg",
  payPalSymbol: "/paywall/pay-paypal-symbol.svg",
  payDiscover: "/paywall/pay-discover.svg",
  featureCrown: "/paywall/feature-crown.svg",
  featureController: "/paywall/feature-controller.svg",
  featureMultiplayer: "/paywall/feature-multiplayer.svg",
  featureAi: "/paywall/feature-ai.svg",
};

function PaywallFooter({ className }: { className?: string }) {
  return (
    <div
      className={
        className ??
        "bg-[rgba(255,255,255,0.02)] content-stretch flex flex-col items-start p-6 sm:p-8 lg:p-[40px] relative w-full max-w-[1440px] mx-auto"
      }
    >
      <div className="content-stretch flex flex-col gap-10 items-start justify-center lg:flex-row lg:gap-[40px] lg:items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-8 items-start justify-between leading-[0] min-h-px min-w-px relative lg:self-stretch">
          <div className="flex flex-col font-orbitron justify-center not-italic relative shrink-0 text-[36px] sm:text-[42px] lg:text-[49.105px] text-white whitespace-nowrap">
            <p className="font-orbitron">
              <span className="leading-[1.05] lg:leading-[44.896px] text-[#6a4dff]">64</span>
              <span className="leading-[1.05] lg:leading-[44.896px]">
                Bit.
                <br aria-hidden="true" />
                GAMES
              </span>
            </p>
          </div>
          <div className="flex flex-col font-orbitron font-bold justify-center min-w-full relative shrink-0 text-[#676e88] text-[11px] sm:text-[12px] tracking-[0.48px] w-full max-w-full">
            <p className="leading-[1.4]">
              A-Z TECH VENTURES LTD (Company No. 15388786)
              <br aria-hidden="true" />
              Registered office: 50 Princes Street, Ipswich, Suffolk, England, IP1 1RJ
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full">
          <div className="content-stretch flex flex-col font-orbitron font-medium gap-8 lg:gap-[40px] items-start justify-center leading-[0] relative shrink-0 text-[#676e88] text-[14px] sm:text-[16px] tracking-[0.64px] w-full whitespace-normal lg:whitespace-nowrap">
            <div className="content-stretch flex flex-col gap-6 sm:flex-row sm:gap-12 lg:gap-[110px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0">
                <div className="flex flex-col justify-center relative shrink-0">
                  <p className="leading-[1.4]">Contact Us</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0">
                  <p className="leading-[1.4]">Terms of Use</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0">
                  <p className="leading-[1.4]">Billing Terms</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
                <div className="flex flex-col justify-center relative shrink-0">
                  <p className="leading-[1.4]">Refund Policy</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0">
                  <p className="leading-[1.4]">Privacy Policy</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0">
                  <p className="leading-[1.4]">Payment Policy</p>
                </div>
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

export default function PaywallScreen() {
  return (
    <div className="bg-[#080b14] content-stretch flex flex-col items-start relative w-full min-h-screen">
      <div className="content-stretch flex flex-col gap-[30px] items-center pt-[50px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0">
          <div className="content-stretch flex flex-col gap-[29px] items-center relative shrink-0">
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full max-w-[1440px] px-4 sm:px-6 lg:px-[40px]">
              <Link
                href="/"
                className="relative border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex gap-[6px] h-[28px] items-center justify-center px-[12px] rounded-[12px] shrink-0"
              >
                <div
                  aria-hidden="true"
                  className="absolute bg-[rgba(255,255,255,0.01)] inset-0 pointer-events-none rounded-[12px]"
                />
                <div className="relative shrink-0 size-[16px]">
                  <img alt="" className="absolute block max-w-none size-full" src={paywall.iconBack} />
                </div>
                <div className="flex flex-col font-orbitron font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[0.48px] whitespace-nowrap">
                  <p className="leading-[1.4]">Back</p>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.1)]" />
              </Link>
              <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-[992px] max-lg:hidden">
                <div className="content-stretch flex items-start pr-[8px] relative shrink-0">
                  <div className="border border-[rgba(255,255,255,0.5)] border-solid mr-[-8px] relative rounded-[9999px] shrink-0 size-[28px]">
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
                      <div
                        className="absolute inset-0 rounded-[9999px]"
                        style={{
                          backgroundImage:
                            "linear-gradient(135deg, rgb(107, 51, 204) 0%, rgb(48, 140, 232) 100%)",
                        }}
                      />
                      <img
                        alt=""
                        className="absolute max-w-none object-cover rounded-[9999px] size-full"
                        src={paywall.gradientBorder0}
                      />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start mr-[-8px] relative shrink-0 size-[28px]">
                    <div className="border border-[rgba(255,255,255,0.5)] border-solid relative rounded-[9999px] shrink-0 size-[28px]">
                      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
                        <div
                          className="absolute inset-0 rounded-[9999px]"
                          style={{
                            backgroundImage:
                              "linear-gradient(135deg, rgb(191, 71, 209) 0%, rgb(71, 99, 235) 100%)",
                          }}
                        />
                        <img
                          alt=""
                          className="absolute max-w-none object-cover rounded-[9999px] size-full"
                          src={paywall.gradientBorder1}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start mr-[-8px] relative shrink-0 size-[28px]">
                    <div className="border border-[rgba(255,255,255,0.5)] border-solid h-[28px] relative rounded-[9999px] shrink-0 w-full">
                      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
                        <div
                          className="absolute inset-0 rounded-[9999px]"
                          style={{
                            backgroundImage:
                              "linear-gradient(135deg, rgb(214, 92, 169) 0%, rgb(118, 94, 237) 100%)",
                          }}
                        />
                        <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
                          <img
                            alt=""
                            className="absolute h-[322.32%] left-[-64.58%] max-w-none top-[-40.67%] w-[214.88%]"
                            src={paywall.gradientBorder2}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start mr-[-8px] relative shrink-0 size-[28px]">
                    <div className="border border-[rgba(255,255,255,0.5)] border-solid relative rounded-[9999px] shrink-0 size-[28px]">
                      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
                        <div
                          className="absolute inset-0 rounded-[9999px]"
                          style={{
                            backgroundImage:
                              "linear-gradient(135deg, rgb(219, 112, 126) 0%, rgb(179, 117, 240) 100%)",
                          }}
                        />
                        <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
                          <img
                            alt=""
                            className="absolute h-[128.16%] left-[-46.21%] max-w-none top-[-3.16%] w-[192.23%]"
                            src={paywall.gradientBorder3}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-orbitron font-bold justify-center leading-[0] relative shrink-0 text-[#676e88] text-[12px] text-center tracking-[0.48px] whitespace-nowrap">
                  <p>
                    <span className="leading-[1.4]">Trusted by </span>
                    <span className="leading-[1.4] text-white">10,000+</span>
                    <span className="leading-[1.4]"> active players</span>
                  </p>
                </div>
              </div>
              <div className="h-[28px] relative rounded-[12px] shrink-0 w-[82px] max-lg:hidden" aria-hidden="true" />
            </div>
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full max-w-[992px] px-4 lg:px-0">
              <div className="bg-clip-text bg-gradient-to-b flex flex-col font-orbitron font-black from-[14.151%] from-white justify-center leading-[0] relative shrink-0 text-[0px] text-[transparent] text-center to-[#666] to-[92.453%] w-full">
                <p className="bg-clip-text bg-gradient-to-b from-[14.151%] from-white leading-none mb-0 text-[40px] lg:text-[72px] to-[#666] to-[92.453%]">
                  Unlock Full Access
                </p>
                <p className="text-[40px] lg:text-[72px]">
                  <span className="bg-clip-text bg-gradient-to-b from-[14.151%] from-white leading-none text-[transparent] to-[#666] to-[92.453%]">
                    to{" "}
                  </span>
                  <span className="leading-none text-[#7f66ff]">64bit.games</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col font-orbitron font-bold justify-center leading-[0] relative shrink-0 text-[#676e88] text-[14px] sm:text-[16px] text-center tracking-[0.48px] whitespace-normal lg:whitespace-nowrap px-4 lg:px-0 max-w-[min(100%,28rem)] lg:max-w-none mx-auto">
              <p className="leading-[1.4]">Choose your plan and start playing instantly.</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-stretch pt-[20px] relative shrink-0 w-full lg:items-start">
            <div className="content-stretch flex flex-col gap-5 items-stretch justify-center relative shrink-0 w-full max-w-[377px] mx-auto px-4 lg:max-w-none lg:flex-row lg:gap-[20px] lg:items-start lg:px-0">
              <div
                className="border-2 border-[rgba(255,255,255,0.1)] border-solid content-stretch flex flex-col items-start p-5 sm:p-[30px] relative rounded-[24px] sm:rounded-[30px] shrink-0 w-full lg:w-[377px] lg:max-w-none"
                style={{
                  backgroundImage:
                    "linear-gradient(-31.65750704555522deg, rgb(51, 51, 51) 26.065%, rgb(102, 102, 102) 99.098%)",
                }}
              >
                <div className="relative shrink-0 w-full lg:w-[267px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start justify-center relative w-full">
                    <div
                      className="content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]"
                      style={{
                        backgroundImage:
                          "linear-gradient(130.90525460151628deg, rgba(255, 255, 255, 0.3) 8.0552%, rgba(77, 77, 77, 0.3) 115.74%)",
                      }}
                    >
                      <div className="relative shrink-0 size-[20px]">
                        <img alt="" className="absolute block max-w-none size-full" src={paywall.svgController} />
                      </div>
                    </div>
                    <div
                      className="bg-clip-text flex flex-col font-orbitron font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-[transparent] tracking-[0.72px] whitespace-nowrap"
                      style={{
                        backgroundImage:
                          "linear-gradient(106.62554615364135deg, rgb(255, 255, 255) 1.1699%, rgb(178, 178, 178) 96.829%)",
                      }}
                    >
                      <p className="leading-[1.2]">Pro Monthly</p>
                    </div>
                  </div>
                </div>
                <div className="h-[40px] shrink-0 w-full" />
                <div className="relative shrink-0 w-full lg:w-[317px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
                    {[
                      "Everything in Starter Access",
                      "Priority access to new games",
                      "Enhanced multiplayer features",
                      "Creator tools access",
                    ].map((label) => (
                      <div key={label} className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
                        <div className="relative shrink-0 size-[18px]">
                          <img alt="" className="absolute block max-w-none size-full" src={paywall.svgCheck} />
                        </div>
                        <div className="flex flex-col font-orbitron font-bold justify-center leading-[0] relative shrink-0 text-[15px] sm:text-[16px] text-[rgba(255,255,255,0.8)] tracking-[0.48px] whitespace-normal lg:whitespace-nowrap min-w-0">
                          <p className="leading-[1.4]">{label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="h-[40px] shrink-0 w-full" />
                <div className="relative shrink-0 w-full">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-baseline leading-[0] relative w-full flex-wrap lg:flex-nowrap lg:whitespace-nowrap">
                    <div className="flex flex-col font-orbitron font-black justify-center relative shrink-0 text-[#f0f1f5] text-[36px] tracking-[0.72px]">
                      <p className="leading-[1.15]">$59</p>
                    </div>
                    <div className="flex flex-col font-orbitron font-bold justify-center relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] tracking-[0.56px]">
                      <p className="leading-[1.3]">/month</p>
                    </div>
                  </div>
                </div>
                <div className="h-[40px] shrink-0 w-full" />
                <div
                  className="absolute bg-[rgba(255,255,255,0.05)] border-2 border-[rgba(255,255,255,0.3)] border-solid right-[18px] top-[18px] left-auto rounded-[64px] size-[24px] lg:left-[325px] lg:right-auto"
                  aria-hidden="true"
                />
              </div>
              <div
                className="border-[3px] border-[#447ffd] border-solid content-stretch flex flex-col items-start p-5 sm:p-[28px] relative rounded-[24px] sm:rounded-[30px] shrink-0 w-full lg:w-[377px] lg:max-w-none order-first lg:order-none"
                style={{
                  backgroundImage:
                    "linear-gradient(108.95836097737117deg, rgb(156, 106, 238) 28.167%, rgb(30, 67, 205) 84.16%)",
                }}
              >
                <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full">
                  <div
                    className="content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]"
                    style={{
                      backgroundImage:
                        "linear-gradient(130.29316057279146deg, rgba(255, 255, 255, 0.4) 0%, rgba(97, 0, 255, 0.4) 109.71%)",
                    }}
                  >
                    <div className="relative shrink-0 size-[20px]">
                      <img alt="" className="absolute block max-w-none size-full" src={paywall.svgLightning} />
                    </div>
                  </div>
                  <div className="flex flex-col font-orbitron font-bold justify-center leading-[0] relative shrink-0 text-[#f0f1f5] text-[24px] tracking-[0.72px] whitespace-nowrap">
                    <p className="leading-[1.2]">Starter Access</p>
                  </div>
                </div>
                <div className="h-[40px] shrink-0 w-full" />
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full lg:w-[223px]">
                  {[
                    "4000+ mini games",
                    "Instant browser play",
                    "No install needed",
                    "Multiplayer access",
                    "Controller support",
                  ].map((label) => (
                    <div key={label} className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
                      <div className="relative shrink-0 size-[18px]">
                        <img alt="" className="absolute block max-w-none size-full" src={paywall.svgCheck} />
                      </div>
                      <div className="flex flex-col font-orbitron font-bold justify-center leading-[0] relative shrink-0 text-[15px] sm:text-[16px] text-[rgba(255,255,255,0.8)] tracking-[0.48px] whitespace-normal lg:whitespace-nowrap min-w-0">
                        <p className="leading-[1.4]">{label}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="h-[40px] shrink-0 w-full" />
                <div className="content-stretch flex flex-col gap-[10px] items-start leading-[0] relative shrink-0 w-full">
                  <div className="content-stretch flex flex-wrap gap-x-[10px] gap-y-1 items-baseline relative shrink-0 w-full lg:flex-nowrap lg:whitespace-nowrap">
                    <div className="flex flex-col font-orbitron font-black justify-center relative shrink-0 text-[#f0f1f5] text-[36px] tracking-[0.72px]">
                      <p className="leading-[1.15]">$2.99</p>
                    </div>
                    <div className="flex flex-col font-orbitron font-bold justify-center relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] tracking-[0.56px]">
                      <p className="leading-[1.3]">for the first week</p>
                    </div>
                  </div>
                  <div className="flex flex-col font-orbitron font-bold justify-center relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] tracking-[0.56px] w-full">
                    <p className="leading-[1.3]">Then $39.99/month</p>
                  </div>
                </div>
                <div className="h-[40px] shrink-0 w-full" />
                <div className="-translate-x-1/2 absolute border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex gap-[6px] h-[28px] items-center justify-center left-1/2 overflow-clip px-[12px] rounded-[12px] top-[-14px]">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none rounded-[12px]"
                    style={{
                      backgroundImage:
                        "linear-gradient(-89.99999999997803deg, rgb(68, 127, 253) 0%, rgb(244, 64, 232) 101.92%)",
                    }}
                  />
                  <div className="flex flex-col font-orbitron font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[0.48px] whitespace-nowrap">
                    <p className="leading-[1.4]">Most Popular</p>
                  </div>
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.1)]" />
                </div>
                <div className="absolute right-[15px] top-[17px] left-auto size-[27px] lg:left-[327px] lg:right-auto">
                  <div className="absolute inset-[0_-0.93%_0_0]">
                    <img alt="" className="block max-w-none size-full" src={paywall.radioSelected} />
                  </div>
                </div>
              </div>
              <div
                className="border border-[#4d4d4d] border-solid content-stretch flex flex-col items-start p-5 sm:p-[29px] relative rounded-[24px] sm:rounded-[30px] shrink-0 w-full lg:w-[377px] lg:max-w-none"
                style={{
                  backgroundImage:
                    "linear-gradient(-31.94376186436172deg, rgb(0, 0, 0) 0%, rgb(26, 26, 26) 98.154%)",
                }}
              >
                <div className="relative shrink-0">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start justify-center relative">
                    <div
                      className="content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]"
                      style={{
                        backgroundImage:
                          "linear-gradient(130.90525460151628deg, rgba(255, 255, 255, 0.2) 8.0552%, rgba(26, 26, 26, 0.2) 115.74%)",
                      }}
                    >
                      <div className="relative shrink-0 size-[20px]">
                        <img alt="" className="absolute block max-w-none size-full" src={paywall.svgCrown} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div
                        className="bg-clip-text flex flex-col font-orbitron font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-[transparent] tracking-[0.72px] whitespace-nowrap"
                        style={{
                          backgroundImage:
                            "linear-gradient(108.87181586495238deg, rgb(255, 255, 255) 2.4936%, rgb(128, 128, 128) 94.548%)",
                        }}
                      >
                        <p className="leading-[1.2]">Elite Monthly</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[40px] shrink-0 w-full" />
                <div className="relative shrink-0 w-full lg:w-[255px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
                    {[
                      "Everything in Pro",
                      "Full creator suite",
                      "Upload your own games",
                      "Create your own game",
                      "Premium member status",
                    ].map((label) => (
                      <div key={label} className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
                        <div className="relative shrink-0 size-[18px]">
                          <img alt="" className="absolute block max-w-none size-full" src={paywall.svgCheck} />
                        </div>
                        <div className="flex flex-col font-orbitron font-bold justify-center leading-[0] relative shrink-0 text-[15px] sm:text-[16px] text-[rgba(240,241,245,0.8)] tracking-[0.48px] whitespace-normal lg:whitespace-nowrap min-w-0">
                          <p className="leading-[1.4]">{label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="h-[40px] shrink-0 w-full" />
                <div className="relative shrink-0 w-full">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-baseline leading-[0] relative w-full flex-wrap lg:flex-nowrap lg:whitespace-nowrap">
                    <div className="flex flex-col font-orbitron font-black justify-center relative shrink-0 text-[#f0f1f5] text-[36px] tracking-[0.72px]">
                      <p className="leading-[1.15]">$99</p>
                    </div>
                    <div className="flex flex-col font-orbitron font-bold justify-center relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] tracking-[0.56px]">
                      <p className="leading-[1.3]">/month</p>
                    </div>
                  </div>
                </div>
                <div className="h-[40px] shrink-0 w-full" />
                <div
                  className="absolute bg-[rgba(255,255,255,0.05)] border-2 border-[rgba(255,255,255,0.3)] border-solid right-[18px] top-[19px] left-auto rounded-[64px] size-[24px] lg:left-[326px] lg:right-auto"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[30px] items-center pt-[20px] relative shrink-0 w-full max-w-[840px] px-4">
          <div className="bg-[rgba(149,128,255,0.1)] content-stretch flex gap-[8px] min-h-[56px] h-auto py-3.5 items-center justify-center px-5 sm:px-[24px] relative rounded-[16px] shrink-0 w-full max-w-[840px]">
            <div className="flex flex-col font-orbitron font-black justify-center leading-[0] relative shrink-0 text-[16px] sm:text-[18px] text-[rgba(255,255,255,0.2)] text-center tracking-[0.54px]">
              <p className="leading-[1.2]">Start playing</p>
            </div>
            <div className="opacity-30 relative shrink-0 size-[24px]">
              <div className="absolute inset-0 overflow-clip">
                <div className="absolute inset-[3.12%_13.26%_3.13%_13.23%]">
                  <img alt="" className="absolute block max-w-none size-full" src={paywall.fireA} />
                </div>
                <div className="absolute inset-[35.92%_30.92%_3.13%_31.79%]">
                  <img alt="" className="absolute block max-w-none size-full" src={paywall.fireB} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col h-[22px] items-start pt-[2px] relative shrink-0 w-[20px]">
                <div
                  className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.3)] border-solid rounded-[4px] shrink-0 size-[20px]"
                  aria-hidden="true"
                />
              </div>
              <p className="flex-[1_0_0] font-orbitron font-bold leading-[0] min-h-px min-w-px relative text-[#737b8c] text-[0px] tracking-[0.48px]">
                <span className="leading-[1.4] text-[12px]">I confirm that I have read and agree to the </span>
                <span className="[text-decoration-skip-ink:none] decoration-solid leading-[1.4] text-[#9580ff] text-[12px] underline">
                  Terms of Use
                </span>
                <span className="leading-[1.4] text-[12px]">, </span>
                <span className="[text-decoration-skip-ink:none] decoration-solid leading-[1.4] text-[#9580ff] text-[12px] underline">
                  Billing Terms
                </span>
                <span className="leading-[1.4] text-[12px]">, </span>
                <span className="[text-decoration-skip-ink:none] decoration-solid leading-[1.4] text-[#9580ff] text-[12px] underline">
                  Refund Policy
                </span>
                <span className="leading-[1.4] text-[12px]">, </span>
                <span className="[text-decoration-skip-ink:none] decoration-solid leading-[1.4] text-[#9580ff] text-[12px] underline">
                  Privacy Policy
                </span>
                <span className="leading-[1.4] text-[12px]">, and </span>
                <span className="[text-decoration-skip-ink:none] decoration-solid leading-[1.4] text-[#9580ff] text-[12px] underline">
                  Payment Policy
                </span>
                <span className="leading-[1.4] text-[12px]">
                  . Start your 7-day trial for $2.99 and get instant access to 64bit.games. After the trial, you agree
                  to be charged $39.99 every 30 days starting one week after the intial payment, until canceled. By
                  starting your trial, you waive the 14-day withdrawal right as the service is fully provided. No
                  refunds for partial periods. By completing your purchase, you consent to us securely storing your
                  payment details for future charges. You can cancel the auto-renewal anytime via your account settings
                  or by contacting support at support@64bit.games
                </span>
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[7px] items-center relative shrink-0 w-full">
            <div className="flex flex-col font-orbitron font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] tracking-[0.56px] whitespace-nowrap">
              <p className="leading-[1.3]">Guarantee safe checkout</p>
            </div>
            <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full flex-wrap">
              <div className="h-[30px] relative shrink-0 w-[56.032px]">
                <img alt="" className="absolute block max-w-none size-full" src={paywall.payApple} />
              </div>
              <div className="bg-white border-[#212430] border-[0.75px] border-solid content-stretch flex flex-col h-[30px] items-center justify-center px-[9.75px] py-[5.25px] relative rounded-[10px] shrink-0">
                <div className="h-[15px] relative shrink-0 w-[71.021px]">
                  <img alt="" className="absolute block max-w-none size-full" src={paywall.payGoogle} />
                </div>
              </div>
              <div className="h-[30px] relative shrink-0 w-[56.657px]">
                <img alt="" className="absolute block max-w-none size-full" src={paywall.payVisa} />
              </div>
              <div className="bg-white border-[#212430] border-[0.75px] border-solid content-stretch flex flex-col h-[30px] items-center justify-center px-[9.75px] py-[5.25px] relative rounded-[10px] shrink-0">
                <div className="h-[16.802px] relative shrink-0 w-[21.6px]">
                  <img alt="" className="absolute block max-w-none size-full" src={paywall.payMc} />
                </div>
              </div>
              <div className="h-[30px] relative shrink-0 w-[60.55px]">
                <img alt="" className="absolute block max-w-none size-full" src={paywall.payAmex} />
              </div>
              <div className="bg-white border-[#212430] border-[0.75px] border-solid content-stretch flex flex-col h-[30px] items-center justify-center px-[9.75px] py-[5.25px] relative rounded-[10px] shrink-0">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                  <div className="col-1 h-[9.594px] ml-[41.97px] mt-[3.35px] relative row-1 w-[19.457px]">
                    <img alt="" className="absolute block max-w-none size-full" src={paywall.payPalPal} />
                  </div>
                  <div className="col-1 h-[11.645px] ml-[17.72px] mt-[3.35px] relative row-1 w-[24.359px]">
                    <img alt="" className="absolute block max-w-none size-full" src={paywall.payPalPay} />
                  </div>
                  <div className="col-1 h-[14.999px] ml-0 mt-0 relative row-1 w-[12.713px]">
                    <img alt="" className="absolute block max-w-none size-full" src={paywall.payPalSymbol} />
                  </div>
                </div>
              </div>
              <div className="h-[30px] relative shrink-0 w-[82.012px]">
                <img alt="" className="absolute block max-w-none size-full" src={paywall.payDiscover} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-5 md:gap-[20px] items-start justify-center px-4 md:px-[250px] py-12 md:py-[100px] relative shrink-0 w-full max-w-[1440px] mx-auto">
          <div
            className="absolute blur-[47px] inset-[-0.26px_0_0_0]"
            style={{
              backgroundImage:
                "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1010.3\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.30000001192092896\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(113.5 -5.3023e-7 1.1581e-7 49.767 737.01 -0.0000034431)\\'><stop stop-color=\\'rgba(59,118,237,0.12)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(59,89,237,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
            }}
          />
          <div className="content-stretch flex flex-col min-h-0 gap-4 sm:gap-6 lg:gap-0 lg:h-[170px] items-center justify-between leading-[0] overflow-clip px-4 sm:px-[50px] py-6 sm:py-[30px] relative rounded-[20px] shrink-0 text-center w-full">
            <div className="flex flex-col font-orbitron font-black justify-center relative shrink-0 text-[28px] sm:text-[36px] lg:text-[72px] text-white w-full">
              <p className="leading-none">What You Unlock</p>
            </div>
            <div className="flex flex-col font-orbitron font-bold justify-center relative shrink-0 text-[#676e88] text-[14px] sm:text-[16px] tracking-[0.48px] w-full max-w-xl mx-auto lg:max-w-none">
              <p className="leading-[1.4]">Everything you need for the ultimate browser gaming experience</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full max-md:flex-col">
              <div className="bg-[#6a4dff] border border-[rgba(255,255,255,0.05)] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[20px] min-h-[240px] h-auto lg:h-[300px] items-center justify-center min-w-px overflow-clip px-6 sm:px-[60px] py-6 sm:py-[30px] relative rounded-[20px]">
                <div className="bg-[#9580ff] content-stretch flex items-center justify-center relative rounded-[82px] shrink-0 size-[50px]">
                  <div className="relative shrink-0 size-[30px]">
                    <img alt="" className="absolute block max-w-none size-full" src={paywall.featureCrown} />
                  </div>
                </div>
                <div className="content-stretch flex flex-col font-orbitron font-bold gap-[10px] items-center justify-center leading-[0] relative shrink-0 text-center w-full">
                  <div className="flex flex-col justify-center relative shrink-0 text-[18px] sm:text-[20px] text-white tracking-[0.6px] text-center px-1">
                    <p className="leading-[1.3]">4000+ Mini Games</p>
                  </div>
                  <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] tracking-[0.56px] w-full max-w-md mx-auto">
                    <p className="leading-[1.3]">
                      A massive and ever-growing library of games across every genre you can imagine.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(255,255,255,0.3)] border border-[rgba(255,255,255,0.05)] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[20px] min-h-[240px] h-auto lg:h-[300px] items-center justify-center min-w-px overflow-clip px-6 sm:px-[60px] py-6 sm:py-[30px] relative rounded-[20px]">
                <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center relative rounded-[82px] shrink-0 size-[50px]">
                  <div className="relative shrink-0 size-[30px]">
                    <img alt="" className="absolute block max-w-none size-full" src={paywall.featureController} />
                  </div>
                </div>
                <div className="content-stretch flex flex-col font-orbitron font-bold gap-[10px] items-center justify-center leading-[0] relative shrink-0 text-center w-full">
                  <div className="flex flex-col justify-center relative shrink-0 text-[18px] sm:text-[20px] text-white tracking-[0.6px] text-center px-1">
                    <p className="leading-[1.3]">Controller Support</p>
                  </div>
                  <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] tracking-[0.56px] w-full max-w-md mx-auto">
                    <p className="leading-[1.3]">Plug in your gamepad and play with full native controller support.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full max-md:flex-col">
              <div className="bg-black border border-[rgba(255,255,255,0.2)] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[20px] min-h-[240px] h-auto lg:h-[300px] items-center justify-center min-w-px overflow-clip px-6 sm:px-[60px] py-6 sm:py-[30px] relative rounded-[20px]">
                <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center relative rounded-[82px] shrink-0 size-[50px]">
                  <div className="relative shrink-0 size-[30px]">
                    <img alt="" className="absolute block max-w-none size-full" src={paywall.featureMultiplayer} />
                  </div>
                </div>
                <div className="content-stretch flex flex-col font-orbitron font-bold gap-[10px] items-center justify-center leading-[0] relative shrink-0 text-center w-full">
                  <div className="flex flex-col justify-center relative shrink-0 text-[18px] sm:text-[20px] text-white tracking-[0.6px] w-full text-center px-1">
                    <p className="leading-[1.3]">Multiplayer with Friends</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 text-[#676e88] text-[14px] tracking-[0.56px] w-full max-w-md mx-auto text-center">
                    <p className="leading-[1.3]">
                      Invite your friends and compete or cooperate in real-time multiplayer games.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1d8baf] border border-[rgba(255,255,255,0.05)] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[20px] min-h-[240px] h-auto lg:h-[300px] items-center justify-center min-w-px overflow-clip px-6 sm:px-[60px] py-6 sm:py-[30px] relative rounded-[20px]">
                <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center relative rounded-[82px] shrink-0 size-[50px]">
                  <div className="relative shrink-0 size-[30px]">
                    <img alt="" className="absolute block max-w-none size-full" src={paywall.featureAi} />
                  </div>
                </div>
                <div className="content-stretch flex flex-col font-orbitron font-bold gap-[10px] items-center justify-center leading-[0] relative shrink-0 text-center w-full">
                  <div className="flex flex-col justify-center relative shrink-0 text-[18px] sm:text-[20px] text-white tracking-[0.6px] text-center px-1">
                    <p className="leading-[1.3]">AI Game Maker</p>
                  </div>
                  <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] tracking-[0.56px] w-full max-w-md mx-auto">
                    <p className="leading-[1.3]">Click and play. Zero downloads, zero setup, zero waiting.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PaywallFooter className="bg-[rgba(255,255,255,0.02)] content-stretch flex flex-col items-start p-6 sm:p-8 lg:p-[40px] relative shrink-0 w-full max-w-[1440px] mx-auto" />
    </div>
  );
}
