"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logoFlow from "@/asset/icons/logo-flow.svg";
import TextAnimation from "./textAnimation";
import ScrollReveal from "./ScrollReveal";

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  position: "top" | "right" | "bottom" | "left";
}

const ScrollAnimatedFeatures: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCard, setActiveCard] = useState(0);

  const features: FeatureCard[] = [
    {
      id: 1,
      title: "Nationwide Reach",
      description:
        "Reach customers nationwide through 19,000+ trained agents active across Bangladesh today.",
      position: "top",
    },
    {
      id: 2,
      title: "Cost-Effective Growth",
      description:
        "Lower acquisition costs and boost revenue with performance-based, data-led distribution.",
      position: "right",
    },
    {
      id: 3,
      title: "Seamless Integration",
      description:
        "Easily integrate with our platform to manage products, agents, and performance.",
      position: "bottom",
    },
    {
      id: 4,
      title: "Proven Results",
      description:
        "Trusted by businesses achieving faster, sustainable growth through campaigns.",
      position: "left",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress within the section
      const sectionHeight = section.offsetHeight;
      const scrollStart = rect.top;
      const scrollEnd = rect.bottom - windowHeight;

      if (scrollStart <= 0 && scrollEnd >= 0) {
        // Section is in view and sticky
        const progress = Math.abs(scrollStart) / (sectionHeight - windowHeight);
        const clampedProgress = Math.max(0, Math.min(1, progress));
        setScrollProgress(clampedProgress);

        // Determine active card based on progress
        if (clampedProgress < 0.25) {
          setActiveCard(1);
        } else if (clampedProgress < 0.5) {
          setActiveCard(2);
        } else if (clampedProgress < 0.65) {
          setActiveCard(3);
        } else if (clampedProgress < 0.85) {
          setActiveCard(4);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getArrowPath = (from: number, progress: number) => {
    const totalProgress = scrollProgress * 5;
    const arrowProgress = Math.max(
      0,
      Math.min(1, (totalProgress - (from - 1)) * 1)
    );

    if (from === 1) {
      // Top to Right
      const startX = 61;
      const startY = 14;
      const endX = 84;
      const endY = 38;
      const currentX = startX + (endX - startX) * arrowProgress;
      const currentY = startY + (endY - startY) * arrowProgress;
      return `M ${startX} ${startY} Q ${startX + 24
        } ${startY}, ${currentX} ${currentY}`;
    } else if (from === 2) {
      // Right to Bottom
      const startX = 84;
      const startY = 41;
      const endX = 65;
      const endY = 64;
      const currentX = startX + (endX - startX) * arrowProgress;
      const currentY = startY + (endY - startY) * arrowProgress;
      return `M ${startX} ${startY} Q ${startX}, ${startY + 23
        }, ${currentX} ${currentY}`;
    } else if (from === 3) {
      // Bottom to Left
      const startX = 35;
      const startY = 65;
      const endX = 17;
      const endY = 44;
      const currentX = startX + (endX - startX) * arrowProgress;
      const currentY = startY + (endY - startY) * arrowProgress;
      return `M ${startX} ${startY} Q ${startX - 18
        }, ${startY}, ${currentX} ${currentY}`;
    } else if (from === 4) {
      // Left to Top
      const startX = 17;
      const startY = 35;
      const endX = 40;
      const endY = 14;
      const currentX = startX + (endX - startX) * arrowProgress;
      const currentY = startY + (endY - startY) * arrowProgress;
      return `M ${startX} ${startY} Q ${startX}, ${startY - 22
        }, ${currentX} ${currentY}`;
    }
    return "";
  };

  return (
    <div className="max-w-7xl mx-auto pt-25 -mb-55">
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
            <p className="title-text text-sm md:text-xl">WHY CHOOSE US</p>
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
          <h2 className="text-3xl leading-11 font-medium lg:text-6xl md:leading-18 text-center">
            Built for Businesses <br /> That Want to Grow Smarter
          </h2>
        </TextAnimation>
      </div>
      {/* Main sticky section */}
      <div ref={sectionRef} className="relative h-[400vh]">
        <div className="sticky top-0 flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-7xl mx-auto px-4">
            {/* SVG for animated arrows */}
            <svg
              className="inset-0  pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {/* Arrow 1 to 2 */}
              {activeCard >= 2 && (
                <path
                  d={getArrowPath(1, scrollProgress)}
                  stroke="#FF8C00"
                  strokeWidth="0.2"
                  fill="none"
                  strokeDasharray="0.3, 0.3"
                  className="transition-all duration-300"
                />
              )}

              {/* Arrow 2 to 3 */}
              {activeCard >= 3 && (
                <path
                  d={getArrowPath(2, scrollProgress)}
                  stroke="#FF8C00"
                  strokeWidth="0.2"
                  fill="none"
                  strokeDasharray="0.3, 0.3"
                  className="transition-all duration-300"
                />
              )}

              {/* Arrow 3 to 4 */}
              {scrollProgress >= 0.65 && (
                <path
                  d={getArrowPath(3, scrollProgress)}
                  stroke="#FF8C00"
                  strokeWidth="0.2"
                  fill="none"
                  strokeDasharray="0.3, 0.3"
                />
              )}

              {/* Arrow 3 to 4 */}
              {scrollProgress >= 0.85 && (
                <path
                  d={getArrowPath(4, scrollProgress)}
                  stroke="#FF8C00"
                  strokeWidth="0.2"
                  fill="none"
                  strokeDasharray="0.3, 0.3"
                />
              )}

              {/* Arrow endpoints (dots) */}
              {/* {activeCard >= 2 && (
                <circle cx="85" cy="50" r="0.5" fill="#FF8C00" />
              )}
              {activeCard >= 3 && (
                <circle cx="50" cy="80" r="0.5" fill="#FF8C00" />
              )}
              {activeCard >= 4 && (
                <circle cx="15" cy="50" r="0.5" fill="#FF8C00" />
              )} */}
            </svg>

            {/* Center logo */}
            <div className="absolute top-125 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex items-center justify-center">
                <Image src={logoFlow} alt="Logo" width={268} height={268} />
                {/* <svg width="80" height="80" viewBox="0 0 100 100">
                  <path d="M 50 20 L 80 70 L 20 70 Z" fill="#FF8C00" />
                </svg> */}
              </div>
            </div>

            {/* Feature cards */}
            {features.map((feature, index) => {
              const isActive = activeCard >= feature.id;
              const positionClasses = {
                top: "top-25 left-1/2 -translate-x-1/2",
                right: "right-8 top-123 -translate-y-1/2",
                bottom: "bottom-92 left-1/2 -translate-x-1/2",
                left: "left-8 top-125 -translate-y-1/2",
              };

              return (
                <div
                  key={feature.id}
                  className={`absolute ${positionClasses[feature.position]
                    } w-96 transition-all duration-700 ${isActive ? "opacity-100 scale-100" : "opacity-30 scale-95"
                    }`}
                >
                  <div
                    className={`bg-[#201F22] rounded-2xl p-6 shadow-2xl transition-all duration-500 
                    }`}
                  >
                    <div className="flex flex-col items-start gap-4">
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500 ${isActive
                            ? "bg-(--orange) text-white scale-110"
                            : "bg-gray-700 text-gray-400"
                            }`}
                        >
                          {feature.id < 10 ? `0${feature.id}` : feature.id}
                        </div>
                        <h3 className="text-white text-xl font-semibold mb-2">
                          {feature.title}
                        </h3>
                      </div>
                      <hr className="border-0 w-full h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.30)_0%,rgba(39,38,41,0.30)_100%)]" />
                      <p className="text-gray-300 text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimatedFeatures;
