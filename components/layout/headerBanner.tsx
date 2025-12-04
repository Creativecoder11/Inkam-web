import React from "react";

import bgElementRight from "@/public/asset/icons/others-page-icon-right.svg";
import bgElementLeft from "@/public/asset/icons/others-page-icon-left.svg";

interface HeaderBannerProps {
  title: string; // Small Top Title (ABOUT US)
  heading: string | React.ReactNode; // Dynamic H2 Heading
}

export default function HeaderBanner({ title, heading }: HeaderBannerProps) {
  return (
    <section className="relative w-full bg-white/3 overflow-hidden">
      <div
        style={{
          backgroundImage: `url(${bgElementRight.src}), url(${bgElementLeft.src})`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: `
            calc(100% - (-50px)) 120px,
            -50px 120px
          `,
        }}
        className="bg-no-repeat w-full"
      >
        <div className="h-full w-full flex flex-col justify-center items-center py-40 relative z-10">
          {/* Background Blurs */}
          <div className="w-full overflow-hidden pointer-events-none -z-10">
            <div
              className="absolute -left-20 top-0 w-[550px] h-[450px]
              bg-[#005CAF]/20 blur-[200px] rounded-full"
            />
            <div
              className="absolute -right-20 bottom-1/4 w-[550px] h-[450px]
              bg-[#FF8800]/20 blur-[200px] rounded-full"
            />
          </div>

          {/* Content */}
          <div className="text-white flex flex-col gap-6">
            {/* Dynamic Title */}
            <div className="flex justify-center items-center gap-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="167"
                  height="2"
                  viewBox="0 0 167 2"
                  fill="none"
                >
                  <path
                    d="M166 1H1"
                    stroke="url(#paint0_linear_2239_2185)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2239_2185"
                      x1="171"
                      y1="0.49994"
                      x2="158.078"
                      y2="45.5518"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF8800" />
                      <stop offset="0.981629" stopColor="#0F0E11" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <p className="uppercase tracking-widest">{title}</p>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="167"
                  height="2"
                  viewBox="0 0 167 2"
                  fill="none"
                >
                  <path
                    d="M1 1H166"
                    stroke="url(#paint0_linear_2239_2159)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2239_2159"
                      x1="-3.99979"
                      y1="0.49994"
                      x2="8.92156"
                      y2="45.5518"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF8800" />
                      <stop offset="0.981629" stopColor="#0F0E11" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Dynamic Heading */}
            <h2 className="text-4xl font-semibold leading-18 lg:text-6xl text-center">
              {heading}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
