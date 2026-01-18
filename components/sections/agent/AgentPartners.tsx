import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/textAnimation";
import bdjobs from "@/asset/logos/bdjobs.svg";
import priyoshop from "@/asset/logos/priyoshop.svg";
import drutoloan from "@/asset/logos/drutoloan.svg";
import keeron from "@/asset/logos/keeron.svg";
import sourcing from "@/asset/logos/sourcing.svg";
import dhakabank from "@/asset/logos/dhakabank.svg";
import amarlab from "@/asset/logos/amarlab.svg";
import tenminute from "@/asset/logos/10minute.svg";
import swap from "@/asset/logos/swap.svg";
import medigo from "@/asset/logos/medigo.svg";
import khaodao from "@/asset/logos/khaodao.svg";
import React from "react";

export default function AgentPartners() {
  const logos = [
    bdjobs,
    priyoshop,
    drutoloan,
    keeron,
    sourcing,
    dhakabank,
    amarlab,
    tenminute,
    swap,
    medigo,
    khaodao,
  ];
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
            <p className="title-text text-sm md:text-xl">Partners</p>
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
            Partner with the Best
          </h2>
        </TextAnimation>
      </div>

      <div className="space-y-8 md:space-y-14">
        {/* First Row - 4 logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
          {logos.slice(0, 4).map((logo, index) => (
            <div key={index} className="flex items-center justify-center w-full">
              <img
                src={logo.src}
                alt="Partner Logo"
                className="max-h-12 md:max-h-16 object-contain grayscale opacity-80 hover:opacity-100 transition duration-300"
              />
            </div>
          ))}
        </div>

        {/* Second Row - 4 logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
          {logos.slice(4, 8).map((logo, index) => (
            <div key={index} className="flex items-center justify-center w-full">
              <img
                src={logo.src}
                alt="Partner Logo"
                className="max-h-12 md:max-h-16 object-contain grayscale opacity-80 hover:opacity-100 transition duration-300"
              />
            </div>
          ))}
        </div>

        {/* Third Row - 3 logos centered */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 items-center justify-items-center max-w-4xl mx-auto">
          {logos.slice(8, 11).map((logo, index) => (
            <div key={index} className="flex items-center justify-center w-full">
              <img
                src={logo.src}
                alt="Partner Logo"
                className="max-h-12 md:max-h-16 object-contain grayscale opacity-80 hover:opacity-100 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
