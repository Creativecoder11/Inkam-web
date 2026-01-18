"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextAnimation from "@/components/ui/textAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import handShake from "@/asset/icons/handShake.svg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AgentBenefits() {
  const values = [
    {
      number: "01",
      title: "Complete Flexibility",
      subTitle: "Work Anytime, Anywhere",
      description:
        "Whether you are at home, on campus, or at a tea stall, your business travels with you. Our network covers 99% of Bangladesh, so your location is never a barrier.",
    },
    {
      number: "02",
      title: "Guaranteed Earnings",
      subTitle: "On-Time Payments",
      description:
        "Say goodbye to chasing invoices. We ensure transparent tracking and reliable payouts for every sale you make. You focus on the hustle; we handle the transaction.",
    },
    {
      number: "03",
      title: "Professional Identity",
      subTitle: "Become a Digital Entrepreneur",
      description:
        "You aren't just a user; you are a partner. We empower you to build a sustainable source of income and gain financial independence as a recognized digital entrepreneur.",
    },
    {
      number: "04",
      title: "Zero Investment, High Reward",
      subTitle: "No Capital Required",
      description:
        "Starting a business usually costs money. With Inkam, it’s free. You get instant access to a massive inventory of products without spending a single taka on stock or setup.",
    },
  ];

  const sectionRef = useRef<HTMLElement | null>(null);



  return (
    <section className="w-full py-15 md:py-25" ref={sectionRef}>
      <div className="max-w-7xl mx-4 md:mx-auto">
        {/* Header */}
        <div className="text-white flex flex-col gap-3 md:gap-6">
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
              <p className="title-text text-sm md:text-xl uppercase">Benefits</p>
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
              Why Become an Inkam Agent?
            </h2>
          </TextAnimation>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 pt-4 md:pt-13 gap-4 md:gap-8">
          {values.map((value, index) => (
            <div
              key={value.number}
              className="relative bg-[#201F22] flex flex-col gap-12 rounded-xl md:rounded-2xl p-4 md:p-8"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-lg md:rounded-xl flex items-center justify-center mb-2 md:mb-6">
                <Image src={handShake || ""} alt={value.title} />
              </div>
              <div>
                {/* Number and Title */}
                <div className="mb-2 md:mb-7">
                  <h3 className="text-xl md:text-2xl font-medium text-white">
                    <span className="text-(--orange)">{value.number}.</span>{" "}
                    {value.title}
                  </h3>
                </div>

                <hr
                  className="mb-1 md:mb-4"
                  style={{
                    border: "1px solid",
                    borderImageSource:
                      "linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(39, 38, 41, 0.3) 100%)",
                    borderImageSlice: 1,
                  }}
                />

                {/* Sub Title */}
                <p className="text-(--orange) text-lg md:text-2xl leading-relaxed italic mb-1">
                  {value.subTitle}
                </p>

                {/* Description */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
