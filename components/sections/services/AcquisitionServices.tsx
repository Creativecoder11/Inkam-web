"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import HandshakeIcon from "@/asset/icons/feature-i-3.svg";
import CardVector from "@/asset/icons/card-vector.svg";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/textAnimation";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

// SpotlightCard Component
const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(255,165,0,0.3)",
}: SpotlightCardProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-2xl ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};

// Chart data matching the image pattern
const chartData = [
  { month: "Jan", value: 5 },
  { month: "Feb", value: 8 },
  { month: "Mar", value: 4 },
  { month: "Apr", value: 7 },
  { month: "May", value: 10 },
  { month: "Jun", value: 30 },
  { month: "Jul", value: 22 },
  { month: "Aug", value: 25 },
  { month: "Sep", value: 18 },
  { month: "Oct", value: 15 },
  { month: "Nov", value: 20 },
  { month: "Dec", value: 12 },
];

// Custom Tooltip
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 border border-(--orange)/50 rounded-lg px-3 py-2 shadow-xl">
        <p className="text-(--orange) text-sm font-medium">
          {payload[0].value}k
        </p>
      </div>
    );
  }
  return null;
};

// Main Component
export default function AcquisitionServices() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const fontSize = isMobile ? 10 : 14;

  return (
    <div className="w-full pt-15 md:pt-18">
      <div className="max-w-7xl mx-4 md:mx-auto">
        <div className="text-white flex flex-col gap-3 md:gap-6">
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
              <p className="title-title text-sm md:text-xl">SERVICES</p>
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
            <h2 className="text-3xl font-semibold md:text-6xl text-center">
              What We Offer
            </h2>
          </TextAnimation>
        </div>

        <div className="flex flex-col md:flex-row justify-between md:items-center pt-4 md:pt-14 pb-3 md:pb-8 ">
          <div className="w-full md:w-1/2">
            <h2 className="text-white text-2xl md:text-5xl font-semibold mb-2">
              Acquisition
            </h2>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-(--grey) text-sm md:text-base mb-3 md:mb-6">
              Inkam connects digital businesses with millions of consumers through
              a powerful agent network, bridging market gaps and driving
            </p>
          </div>
        </div>

        <div className="max-w-7xl w-full flex flex-col md:flex-row gap-3 md:gap-6">
          {/* Left Card - Feature Card */}
          <SpotlightCard
            className="w-full md:w-1/3 "
            spotlightColor="rgba(249,115,22,0.1)"
          >
            <div className="relative group bg-white/6 p-4 md:p-8 flex flex-col h-full">
              {/* Icon at top */}
              <div
                className="absolute -top-5 -right-22 opacity-0 -translate-y-6 
          group-hover:opacity-100 group-hover:translate-y-0 
          transition-all duration-500"
              >
                <Image
                  src={CardVector}
                  alt="Acquisition"
                  width={210}
                  height={24}
                />
              </div>
              <div className="mb-8">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-(--orange)/10 transition-all duration-300">
                  {/* Handshake Icon */}
                  <Image
                    className="feature-icon"
                    src={HandshakeIcon}
                    alt="Feature Icon"
                    width={60}
                    height={60}
                  />
                </div>
              </div>

              {/* Heading */}
              <div className="md:pt-25 mb-4 md:mb-6">
                <h3 className="text-white text-xl md:text-3xl font-medium mb-2 md:mb-4">
                  <span className="text-(--orange)">01.</span> Acquisition
                </h3>
                <div className="w-full h-px bg-linear-to-r from-white/20 to-transparent" />
              </div>

              {/* Description */}
              <p className="text-white text-sm md:text-base leading-relaxed mb-4 md:mb-8">
                Helps businesses attract and onboard new users, merchants, and
                leads through digital and field campaigns.
              </p>

              {/* Bullet Points */}
              <div className="space-y-1.5 md:space-y-3 grow">
                {[
                  "App download and user engagement",
                  "Merchant and account onboarding",
                  "Lead collection and customer surveys",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-1 md:gap-2">
                    <div className="shrink-0">
                      <div className="w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-(--orange) flex items-center justify-center">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-(--orange)" />
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Orange glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-(--orange)/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </SpotlightCard>

          {/* Right Card - Chart Card */}
          <SpotlightCard
            className="w-full md:w-2/3 group"
            spotlightColor="rgba(249,115,22,0.1)"
          >
            <div className="relative bg-white/6 h-full p-4 md:p-8 flex flex-col">
              {/* Header */}
              <div className="mb-4 md:mb-8">
                <h2 className="text-white text-xl md:text-3xl font-medium mb-1 md:mb-2">
                  Financial Projection
                </h2>
                <p className="text-gray-400 text-sm md:text-base">
                  Monitor your monthly income growth
                </p>
              </div>

              {/* Chart Section */}
              <div className="grow relative">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={chartData}
                    margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id="colorGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#f97316" stopOpacity={0.8} />
                        <stop
                          offset="50%"
                          stopColor="#c2410c"
                          stopOpacity={0.4}
                        />
                        <stop
                          offset="100%"
                          stopColor="#7c2d12"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="month"
                      stroke="#666"
                      tick={{ fill: "rgba(255, 255, 255, 0.8)", fontSize }}
                      axisLine={false}
                      tickLine={false}
                      padding={{ left: 20 }}
                    />
                    <YAxis
                      stroke="#666"
                      tick={{ fill: "rgba(255, 255, 255, 0.8)", fontSize }}
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(value) => `${value}k`}
                      domain={[0, 60]}
                      ticks={[0, 10, 20, 30, 40, 50, 60]}

                    />
                    <Tooltip content={<CustomTooltip />} cursor={false} />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#f97316"
                      strokeWidth={2}
                      fill="url(#colorGradient)"
                      fillOpacity={1}
                    />
                  </AreaChart>
                </ResponsiveContainer>

                {/* Horizontal grid lines overlay */}
                <div className="absolute mt-2 inset-0 pointer-events-none">
                  {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="absolute left-17 right-2 border-t border-dashed border-white/5"
                      style={{ top: `${(i / 6.5) * 100}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Orange glow effect */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-(--orange)/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </SpotlightCard>
        </div>
        <div className="bg-white/20 h-px mt-16" ></div>
      </div>
    </div>
  );
}
