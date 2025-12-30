import React from "react";

import bgElementRight from "@/asset/icons/others-page-icon-right.svg";
import bgElementLeft from "@/asset/icons/others-page-icon-left.svg";
import "./headerBanner.css";

interface HeaderBannerProps {
  title: string;
  heading: string | React.ReactNode;
}

export default function HeaderBanner({ title, heading }: HeaderBannerProps) {
  return (
    <section className="relative w-full bg-white/3 overflow-hidden">
      <div
        style={{
          backgroundImage: `url(${bgElementRight.src}), url(${bgElementLeft.src})`,
          // backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat, no-repeat",
        }}
        className="header-banner-bg bg-no-repeat w-full"
      >
        <div className="h-full w-full flex flex-col justify-center items-center pt-30 pb-20 md:pt-50 md:pb-40 relative z-10">
          {/* Background Blurs */}
          <div className="w-full overflow-hidden pointer-events-none -z-10">
            <div
              className="absolute -left-20 top-0 w-137.5 h-112.5
              bg-[#005CAF]/20 blur-[200px] rounded-full"
            />
            <div
              className="absolute -right-20 bottom-1/4 w-137.5 h-112.5
              bg-[#FF8800]/20 blur-[200px] rounded-full"
            />
          </div>

          {/* Content */}
          <div className="text-white flex flex-col gap-6">
            {/* Dynamic Title */}
            <div className="flex justify-center items-center gap-2 md:gap-4">
              <div className="mobile-line">
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

              <p className="uppercase text-sm md:text-xl tracking-widest">{title}</p>

              <div className="mobile-line">
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
            <h2 className="text-4xl leading-12 font-semibold md:text-[80px] md:leading-22 text-center">
              {heading}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
