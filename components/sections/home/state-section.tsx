"use client";
import BgBlurColor from "@/components/ui/bgBlurColor";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import TextAnimation from "@/components/ui/textAnimation";

export default function StatsSection() {
  const stats = [
    { label: "Active Agents", value: 19000, format: "K+" },
    { label: "Digital Businesses Supported", value: 20, format: "+" },
    { label: "Consumers Reached", value: 100, format: "K+" },
    { label: "Monthly Revenue Growth", value: 7.8, format: "%" },
  ];

  const duration = 2500; // 2.5 seconds
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
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

    if (type === "+") {
      return `${num}+`; // Append + for this type
    }

    return num.toLocaleString();
  };

  return (
    // <-- IMPORTANT: make this section positioned so absolute children (BgBlurColor) can reference it
    <section className="py-15 md:py-30 relative" ref={sectionRef}>
      {/* BgBlurColor must be placed BEFORE content so it sits behind via -z-10 */}
      {/* <BgBlurColor
        rightColor="bg-blue-500/40"
        leftColor="bg-orange-500/40"
        leftSize="w-[100px] h-[200px]"
        rightSize="w-[100px] h-[200px]"
      /> */}

      {/* Content must be above the blur, so give this wrapper a positive z-index */}
      <div className="max-w-7xl mx-4 md:mx-auto space-y-6 md:space-y-12 text-white relative z-10">
        <div className="flex justify-start items-center gap-2 md:gap-4">
          <div className="flex items-center gap-4">
            {/* TEXT */}
            <motion.p
              className="text-sm md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              ABOUT US
            </motion.p>

            {/* LINE */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="167"
              height="2"
              viewBox="0 0 167 2"
              fill="none"
              initial={{ width: 0 }}
              whileInView={{ width: 167 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ overflow: "visible" }}
            >
              <motion.path
                d="M1 1H166"
                stroke="url(#paint0_linear_2239_2159)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
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
                  <stop offset="0.98" stopColor="#0F0E11" />
                </linearGradient>
              </defs>
            </motion.svg>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end text-left gap-2 md:gap-0">
          <TextAnimation
            text="From a Vision to a Nationwide Network"
            as="p"
            className="text-sm md:text-xl"
          />

          <h2 className="text-3xl font-semibold lg:text-6xl w-full md:w-1/2">
            From a Vision to a Nationwide Network
          </h2>          
          <p className="w-full md:w-1/2 text-sm md:text-[16px] text-(--grey) md:pl-20">
            Inkam was founded to solve a simple but critical problem: thousands
            of digital businesses in Bangladesh struggle to reach new markets
            and convert users beyond major cities.
          </p>
        </div>

        <div className="grid *:text-left md:grid-cols-4 gap-8 md:gap-6 md:divide-x">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="space-y-1 md:space-y-2 border-b border-gray-700 md:border-b-0 pb-1 md:pb-0"
            >
              <div className="text-3xl md:text-6xl">
                {formatNumber(currentValues[index], stat.format)}
              </div>
              <p className="text-(--grey) text-base md:text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
