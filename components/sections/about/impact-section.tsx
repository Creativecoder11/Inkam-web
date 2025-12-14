"use client";

import { useEffect, useRef, useState } from "react";

export default function ImpactStatsSection() {
  const stats = [
    {
      number: "01",
      label: "Active Agents",
      value: 3,
      format: "+",
      description:
        "Digital entrepreneurs nationwide using the inkam app to connect businesses with consumers across 99% of Bangladesh.",
    },
    {
      number: "02",
      label: "Digital Businesses Supported",
      value: 3000,
      format: "K+",
      description:
        "Over 3,000 businesses partner with inkam to boost sales and overcome hurdles in digital product distribution.",
    },
    {
      number: "03",
      label: "Consumers Reached",
      value: 170000000,
      format: "M+",
      description:
        "Target market includes 105 million currently offline consumers and 67 million online users in Bangladesh.",
    },
    {
      number: "04",
      label: "Monthly Revenue Growth",
      value: 7.8,
      format: "%",
      description:
        "inkam's strong Month-to-Month growth rate, setting the company on a fast track for significant financial milestones by 2028.",
    },
  ];

  const duration = 2500;
  const sectionRef = useRef<HTMLElement | null>(null);
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
      { threshold: 0.3 }
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
          ? Number((progress * stat.value).toFixed(1))
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

    if (type === "+") {
      return `0${num}+`;
    }

    if (type === "K+") {
      return `${Math.floor(num / 100) / 10}K+`;
    }

    if (type === "M+") {
      return `${Math.floor(num / 100000) / 10}M+`;
    }

    return num.toLocaleString();
  };

  return (
    <section className="w-full py-15 md:py-25" ref={sectionRef}>
      <div className="max-w-7xl mx-4 md:mx-auto">
        {/* Header */}
        <div className="text-white flex flex-col gap-3 md:gap-6">
          {/* Heading Text */}
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
            <p className="text-sm md:text-xl">IMPACT NUMBERS</p>
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
          <h2 className="text-3xl font-semibold lg:text-6xl leading-[1.2] mb-4 md:mb-12 text-white text-center">
            Driving Economic Growth <br className="hidden md:block" />
            with Financial Projections & Metrics
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 pt-4 md:pt-13 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative rounded-lg md:rounded-2xl p-4 md:p-7 bg-[#201F22]"
            >
              {/* Content */}
              <div className="relative flex flex-col gap-6 md:gap-16 z-10">
                {/* Number Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-(--orange) text-base md:text-xl font-medium">
                    {stat.number}.
                  </span>
                  <span className="text-gray-300 text-base md:text-xl font-medium">
                    {stat.label}
                  </span>
                </div>

                <div>
                  {/* Stat Value */}
                  <div className="mb-2 md:mb-4">
                    <div className="text-5xl md:text-8xl text-white tracking-tight">
                      {formatNumber(currentValues[index], stat.format)}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-(--grey) text-sm md:text-base leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-orange-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
