"use client";

import { useEffect, useRef, useState } from "react";

export default function StatsSection() {
  const stats = [
    { label: "Active Agents", value: 19000, format: "K+" },
    { label: "Digital Businesses Supported", value: 3000, format: "K+" },
    { label: "Consumers Reached", value: 170000000, format: "M+" },
    { label: "Monthly Revenue Growth", value: 7.8, format: "%" },
  ];

  const duration = 2500; // 2.5 seconds
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [currentValues, setCurrentValues] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateNumbers();
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateNumbers = () => {
    const start = performance.now();

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);

      const updatedValues = stats.map((stat) =>
        stat.format === "%"
          ? Number((progress * stat.value).toFixed(1)) // decimal for %
          : Math.floor(progress * stat.value)
      );

      setCurrentValues(updatedValues);

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const formatNumber = (num: number, type: string) => {
    if (type === "%") {
      return `${num}%`;
    }

    if (type === "K+") {
      return `${Math.floor(num / 100) / 10}K+`; // 19000 → 19K+
    }

    if (type === "M+") {
      return `${Math.floor(num / 100000) / 10}M+`; // 170000000 → 170M+
    }

    return num.toLocaleString();
  };

  return (
    <section className="py-12 md:py-30 " ref={sectionRef}>
      <div className=" max-w-7xl mx-auto space-y-12 text-white">
        <div className="flex justify-start items-center gap-4">
          <p>ABOUT US</p>
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
        <div className="flex justify-between items-end z-10  text-left">
          <h2 className="text-4xl font-medium lg:text-6xl w-full md:w-1/2">
            From a Vision to a Nationwide Network
          </h2>
          <p className="w-full md:w-1/2 text-[16px] text-(--grey) pl-20">
            Inkam connects digital businesses with millions of consumers through
            a powerful agent network, bridging market gaps and driving inclusive
            digital growth across Bangladesh.
          </p>
        </div>

        <div className="grid gap-10 divide-y divide-gray-700 *:text-left md:grid-cols-4 md:gap-6 md:divide-x md:divide-y-0">
          {stats.map((stat, index) => (
            <div key={stat.label} className="space-y-2">
              <div className="text-4xl md:text-5xl">
                {formatNumber(currentValues[index], stat.format)}
              </div>
              <p className="text-(--grey)">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
