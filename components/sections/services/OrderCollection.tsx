"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import HandshakeIcon from "@/asset/icons/feature-i-3.svg";
import CardVector from "@/asset/icons/card-vector.svg";

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

// Chart data matching the reference image
const chartData = [
  { month: "Jan", value: 12 },
  { month: "Feb", value: 17 },
  { month: "Mar", value: 35 },
  { month: "Apr", value: 23 },
  { month: "May", value: 14 },
  { month: "Jun", value: 25 },
  { month: "Jul", value: 28 },
  { month: "Aug", value: 37 },
  { month: "Sep", value: 32 },
  { month: "Oct", value: 52 },
  { month: "Nov", value: 48 },
  { month: "Dec", value: 60 },
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

// Handshake Icon Component
// const HandshakeIcon = () => (
//   <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M20 25L15 30L20 35M40 25L45 30L40 35M25 15L30 25L35 15" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//     <circle cx="30" cy="30" r="3" fill="#f97316"/>
//     <path d="M15 30C15 30 18 27 22 27C26 27 28 30 30 30C32 30 34 27 38 27C42 27 45 30 45 30" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round"/>
//   </svg>
// );

// Main Component
export default function OrderCollectionServices() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const barSize = isMobile ? 30 : 50;
  const fontSize = isMobile ? 10 : 13;

  return (
    <div className="w-full pt-12">
      <div className="max-w-7xl mx-4 md:mx-auto">
        <div className="flex flex-col md:flex-row justify-between md:items-center pb-3 md:pb-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-white text-2xl md:text-5xl font-semibold mb-2">
              Order Collection
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
                  <span className="text-(--orange)">01.</span> Order Collection
                </h3>
                <div className="w-full h-px bg-linear-to-r from-white/20 to-transparent" />
              </div>

              {/* Description */}
              <p className="text-white text-sm md:text-base leading-relaxed mb-4 md:mb-8">
                Retail-scale field operations to collect, place, and coordinate orders—built for consistent execution.
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
            spotlightColor="rgba(249,115,22,0.15)"
          >
            <div className="relative bg-white/5 backdrop-blur-sm h-full p-4 md:p-8 flex flex-col md:min-h-[600px] border border-white/10">
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
                  <BarChart
                    data={chartData}
                    margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
                    barSize={barSize}
                  >
                    <XAxis
                      dataKey="month"
                      stroke="#666"
                      tick={{ fill: "rgba(255, 255, 255, 0.6)", fontSize }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      stroke="#666"
                      tick={{ fill: "rgba(255, 255, 255, 0.6)", fontSize }}
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(value) => `${value}k`}
                      domain={[0, 60]}
                      ticks={[0, 10, 20, 30, 40, 50, 60]}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={false} />
                    <Bar
                      dataKey="value"
                      fill="#f97316"
                      radius={[6, 6, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>

                {/* Horizontal grid lines overlay */}
                <div className="absolute inset-0 pointer-events-none" style={{ top: '10px', left: '50px', right: '20px', bottom: '30px' }}>
                  {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="absolute left-0 right-0 border-t border-dashed border-white/10"
                      style={{ top: `${(i / 6) * 100}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Orange glow effect */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-(--orange)/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
}