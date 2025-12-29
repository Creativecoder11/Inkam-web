"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextAnimation from "@/components/ui/textAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

export default function StatsSection() {
  const stats = [
    { label: "Active Agents", value: 19000, format: "K+" },
    { label: "Digital Businesses Supported", value: 20, format: "+" },
    { label: "Consumers Reached", value: 100000, format: "K+" },
    { label: "Monthly Revenue Growth", value: 7.8, format: "%" },
  ];

  const sectionRef = useRef<HTMLElement | null>(null);
  const [currentValues, setCurrentValues] = useState(stats.map(() => 0));

  // -------------------------
  // GSAP animations
  // -------------------------
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {

      stats.forEach((stat, index) => {
        const counter = { value: 0 };

        gsap.to(counter, {
          value: stat.value,
          duration: 2.2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: `.stat-${index}`,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
          onUpdate: () => {
            setCurrentValues((prev) => {
              const next = [...prev];
              next[index] =
                stat.format === "%"
                  ? Number(counter.value.toFixed(1))
                  : Math.floor(counter.value);
              return next;
            });
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // -------------------------
  // Number formatting
  // -------------------------
  const formatNumber = (num: number, type: string) => {
    if (type === "%") return `${num}%`;
    if (type === "K+") return `${Math.floor(num / 100) / 10}K+`;
    if (type === "M+") return `${Math.floor(num / 100000) / 10}M+`;
    if (type === "+") return `${num}+`;
    return num.toLocaleString();
  };

  return (
    <section ref={sectionRef} className="py-15 md:py-30 relative">
      <div className="max-w-7xl mx-4 md:mx-auto space-y-6 md:space-y-8 text-white relative z-10">
        {/* ABOUT HEADER */}
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <p className="title-text text-sm md:text-xl">ABOUT US</p>
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


        {/* TITLE */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-2">
          <TextAnimation>
            <h2 className="text-3xl font-semibold lg:text-6xl w-full md:w-1/2">
              From a Vision to a Nationwide Network
            </h2>
          </TextAnimation>

          <TextAnimation delay={0.2}>
            <p className="w-full md:w-1/2 text-sm md:text-[16px] text-(--grey) md:pl-20">
              Inkam was founded to solve a simple but critical problem: thousands of digital businesses in Bangladesh struggle to reach new markets and convert users beyond major cities.
            </p>
          </TextAnimation>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 mt-16 gap-8 md:divide-x">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`stat-${index} space-y-2 border-b border-gray-700 md:border-b-0 pb-2`}
            >
              <div className="text-3xl md:text-6xl">
                {formatNumber(currentValues[index], stat.format)}
              </div>
              <p className="text-(--grey) text-base md:text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
