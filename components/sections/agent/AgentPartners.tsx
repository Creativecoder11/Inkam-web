import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/textAnimation";
import React from "react";

export default function AgentPartners() {
  return (
    <div className="max-w-7xl mx-auto py-15 md:py-25">
      <div className="text-center space-y-4 mb-16">
        <ScrollReveal>
          <div className="flex justify-center text-white items-center gap-2 md:gap-4">
            <div className="mobile-line">
              <svg
                className="title-line-left"
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
            <p className="title-text text-sm md:text-xl">IMPACT NUMBERS</p>
            <div className="mobile-line">
              <svg
                className="title-line-right"
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
        </ScrollReveal>
        <TextAnimation>
          <h2 className="text-3xl font-semibold lg:text-6xl leading-[1.2] mb-4 md:mb-12 text-white text-center">
            Driving Economic Growth <br className="hidden md:block" />
            with Financial Projections & Metrics
          </h2>
        </TextAnimation>
      </div>

    </div>
  );
}
