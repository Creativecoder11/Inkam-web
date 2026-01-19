import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/textAnimation";
import bgElementRight from "@/asset/icons/others-page-icon-right.svg";
import bgElementLeft from "@/asset/icons/others-page-icon-left.svg";
import React from "react";

const AgentCTA: React.FC = () => {
  return (
    <div className="flex items-center justify-center mt-15 mb-28 overflow-hidden">
      {/* Main content card */}
      <div className="relative w-full max-w-7xl mx-4 space-y-3 md:space-y-6 overflow-hidden bg-white/5 rounded-3xl">
        <div style={{
          backgroundImage: `url(${bgElementRight.src}), url(${bgElementLeft.src})`,
          // backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "265px auto, 265px auto",
          backgroundPosition: `
            calc(100% - (-40px)) 0px,
            -50px 0px
          `,
        }}
          className="bg-no-repeat w-full py-15">
          <div className="w-full h-full pointer-events-none -z-1">
            {/* Left Color */}
            <div
              className="
              absolute -left-20 top-0 w-137.5 h-112.5
              bg-[#005CAF]/20 blur-[200px] rounded-full

            "
            />
            {/* Right Color */}
            <div
              className="
              absolute -right-20 bottom-1/4 w-137.5 h-112.5
              bg-[#FF8800]/20 blur-[200px] rounded-full
            "
              style={{ animationDelay: "1.8s" }}
            />
          </div>
          {/* Join US header with decorative lines */}
          <div className="flex items-center justify-center">
            <div className="text-white flex flex-col gap-4">
              {/* Heading Text */}
              <ScrollReveal>
                <div className="flex justify-center items-center gap-2 md:gap-4">
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
                  <p className="title-text text-sm md:text-xl">
                    JOIN US
                  </p>
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
                <h2 className="text-3xl font-semibold lg:text-5xl leading-[1.2] text-white text-center">
                  Ready to Be an Entrepreneur?
                </h2>
              </TextAnimation>
            </div>
          </div>

          {/* Subheading */}
          <p className="text-gray-400 text-center text-base py-5 px-4 md:text-lg lg:text-xl mx-auto">
            The digital economy is growing. Claim your share of this market
            today.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button className="bg-(--orange) hover:bg-orange-500 text-white font-semibold px-8 py-4 rounded-xl text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30">
              Download Inkam Agent App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCTA;
