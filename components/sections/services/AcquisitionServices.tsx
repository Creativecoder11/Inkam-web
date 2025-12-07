"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import HandshakeIcon from "@/public/asset/icons/feature-i-3.svg";
import CardVector from "@/public/asset/icons/card-vector.svg";

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
  return (
    <div className="min-h-screen p-6 mx-auto max-w-7xl">
      <div className="flex justify-between items-center ">
        <div className="w-1/2">
          <h2 className="text-white text-4xl font-semibold mb-2">
            Acquisition
          </h2>
        </div>
        <div className="w-1/2">
          <p className="text-white text-lg font-medium mb-6">
            Inkam connects digital businesses with millions of consumers through
            a powerful agent network, bridging market gaps and driving
          </p>
        </div>
      </div>
      <div className="  items-center justify-center flex gap-6">
        {/* Left Card - Feature Card */}
        <SpotlightCard
          className="w-1/3 group"
          spotlightColor="rgba(249,115,22,0.15)"
        >
          <div className="relative bg-white/6 p-8 flex flex-col h-full">
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
              <div className="w-24 h-24 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-(--orange)/10 transition-all duration-300">
                {/* Handshake Icon */}
                <Image
                  src={HandshakeIcon}
                  alt="Feature Icon"
                  width={60}
                  height={60}
                />
              </div>
            </div>

            {/* Heading */}
            <div className="pt-25 mb-6">
              <h3 className="text-white text-3xl font-medium mb-4">
                <span className="text-(--orange)">01.</span> Acquisition
              </h3>
              <div className="w-full h-px bg-gradient-to-r from-white/20 to-transparent" />
            </div>

            {/* Description */}
            <p className="text-white text-base leading-relaxed mb-8">
              Helps businesses attract and onboard new users, merchants, and
              leads through digital and field campaigns.
            </p>

            {/* Bullet Points */}
            <div className="space-y-3 flex-grow">
              {[
                "App download and user engagement",
                "Merchant and account onboarding",
                "Lead collection and customer surveys",
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="flex-shrink-0">
                    <div className="w-4 h-4 rounded-full border-2 border-(--orange) flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-(--orange)" />
                    </div>
                  </div>
                  <p className="text-gray-300 text-base leading-relaxed">
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
          className="w-2/3  group"
          spotlightColor="rgba(249,115,22,0.15)"
        >
          <div className="relative bg-white/6 h-full p-8 flex flex-col">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-white text-3xl font-medium mb-2">
                Financial Projection
              </h2>
              <p className="text-gray-400 text-base">
                Monitor your monthly income growth
              </p>
            </div>

            {/* Chart Section */}
            <div className="flex-grow relative">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={chartData}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
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
                    tick={{ fill: "#666", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    stroke="#666"
                    tick={{ fill: "#666", fontSize: 12 }}
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
              <div className="absolute inset-0 pointer-events-none">
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="absolute left-0 right-0 border-t border-dashed border-white/5"
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
  );
}
