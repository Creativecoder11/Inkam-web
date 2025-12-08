"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import * as echarts from "echarts";
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

// Employee Card Component
interface EmployeeCardProps {
  name: string;
  title: string;
  date: string;
  avatarColor: string;
}

const EmployeeCard = ({
  name,
  title,
  date,
  avatarColor,
}: EmployeeCardProps) => {
  return (
    <div className="bg-white/5 w-[390px] space-y-3 rounded-xl p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className="w-10 h-10 rounded-full"
            style={{ background: avatarColor }}
          />
          <div>
            <h3 className="text-white text-base font-medium">{name}</h3>
            <p className="text-(--grey) text-xs">{title}</p>
          </div>
        </div>
        <div className="bg-white py px-2 rounded-full">
          <span className="text-red-500 font-medium text-xs">Pending</span>
        </div>
      </div>
      <div className="w-full h-px bg-gradient-to-r from-white/20 to-transparent" />
      <div className="flex items-center text-xs justify-between">
        <span className="text-white/80">{date}</span>
        <span className="text-gray-400">Leave Date</span>
      </div>
    </div>
  );
};

// Sales Report Component with ECharts
const SalesReport = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);

  const salesData = [
    { color: "#ff8c00", label: "IOREM", value: "$380.00" },
    { color: "#0066cc", label: "IOREM", value: "$280.00" },
    { color: "#66b3ff", label: "IOREM", value: "$280.00" },
  ];

  useEffect(() => {
    if (!chartRef.current) return;

    // Initialize chart
    chartInstance.current = echarts.init(chartRef.current);

    // Logo SVG as base64 or data URL
    const logoImage =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjcyIiBoZWlnaHQ9IjcyIiByeD0iMzYiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik00OC4yMjYzIDI2SDIzLjc2NTRDMjEuMzc1OCAyNiAyMC4xMTUxIDI4Ljk3MzIgMjEuNzE0NCAzMC44NDM3TDMzLjk0NDkgNDUuMDQwMUMzNS4wMzYyIDQ2LjMyIDM2Ljk1NTUgNDYuMzIgMzguMDQ2OCA0NS4wNDAxTDUwLjI3NzIgMzAuODQzN0M1MS44OTU0IDI4Ljk3MzIgNTAuNjE1OSAyNiA0OC4yMjYzIDI2WiIgZmlsbD0iI0ZGODgwMCIvPgo8L3N2Zz4K";

    // Chart options);

    const option: echarts.EChartsOption = {
      tooltip: {
        trigger: "item",
        backgroundColor: "rgba(30, 30, 30, 0.9)",
        borderColor: "#ff8c00",
        borderWidth: 1,
        textStyle: {
          color: "#fff",
        },
        formatter: "{b}: ${c}",
      },
      graphic: [
        {
          type: "image",
          style: {
            image: logoImage,
            width: 80,
            height: 80,
            x: 100,
            y: 100,
          },
          left: "center",
          top: "center",
        },
      ],
      series: [
        {
          name: "Sales",
          type: "pie",
          radius: ["50%", "80%"],
          center: ["50%", "50%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: false,
            },
            scale: true,
            scaleSize: 5,
          },
          labelLine: {
            show: false,
          },
          data: [
            {
              value: 380,
              name: salesData[0].label,
              itemStyle: {
                color: salesData[0].color,
                shadowBlur: 10,
                shadowColor: "rgba(0, 0, 0, 0.3)",
                borderRadius: 10,
                
              },
            },
            {
              value: 280,
              name: salesData[1].label,
              itemStyle: {
                color: salesData[1].color,
                shadowBlur: 10,
                shadowColor: "rgba(0, 0, 0, 0.3)",
                borderRadius: 10
              },
            },
            {
              value: 280,
              name: salesData[2].label,
              itemStyle: {
                color: salesData[2].color,
                shadowBlur: 10,
                shadowColor: "rgba(0, 0, 0, 0.3)",
                borderRadius: 10
              },
            },
          ],
        },
      ],
    };

    chartInstance.current.setOption(option);

    // Handle resize
    const handleResize = () => {
      chartInstance.current?.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chartInstance.current?.dispose();
    };
  }, []);

  return (
    <div className="flex flex-col justify-end rounded-xl">
      <div className="bg-white/4 p-6 rounded-2xl">
        <h2 className="text-white text-xl font-medium">Sales report</h2>

      {/* ECharts Donut Chart */}
      <div className="flex items-center justify-center mb-8">
        <div ref={chartRef} style={{ width: "280px", height: "250px" }} />
      </div>

      {/* Legend */}
      <div className="space-y-4">
        {salesData.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-white text-sm">{item.label}</span>
            </div>
            <span className="text-white font-medium text-sm">{item.value}</span>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

// Main Component
export default function ProductReselling() {
  const employees = [
    {
      name: "Mostania sia",
      title: "Ceo at Losukia",
      date: "4 Sep 2022",
      avatarColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      name: "Brooklyn Simmons",
      title: "Ceo at Losukia",
      date: "4 Sep 2022",
      avatarColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      name: "Darlene Robertson",
      title: "Ceo at Losukia",
      date: "4 Sep 2022",
      avatarColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto pt-16">
      <div className="flex justify-between items-center pb-8">
        <div className="w-1/2">
          <h2 className="text-white text-5xl font-semibold mb-2">
            Product Reselling
          </h2>
        </div>
        <div className="w-1/2">
          <p className="text-(--grey) text-base mb-6">
            Inkam connects digital businesses with millions of consumers through
            a powerful agent network, bridging market gaps and driving
          </p>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Left Card - Employee List */}
        <div className="flex w-2/3">
          <SpotlightCard
            className="w-full bg-white/6"
            spotlightColor="rgba(249,115,22,0.1)"
          >
            <div className="relative  flex justify-between gap-7 p-8">
              <div>
                {/* Header */}
                <div className="mb-8">
                  <h2 className="text-white text-3xl font-medium mb-2">
                    Financial Projection
                  </h2>
                  <p className="text-gray-400 text-base">
                    Monitor your monthly income growth
                  </p>
                </div>
                {/* Employee Cards */}
                <div className="p-4 bg-white/3 rounded-3xl">
                  <div className="space-y-4 w-full">
                    {employees.map((employee, index) => (
                      <EmployeeCard key={index} {...employee} />
                    ))}
                  </div>
                </div>
              </div>
              {/* Right Card - Sales Report with ECharts */}
              <SalesReport />
            </div>
          </SpotlightCard>
        </div>
        {/* Right Card - Info Card */}
        <div className="w-1/3">
          <SpotlightCard className="" spotlightColor="rgba(249,115,22,0.1)">
            <div className="relative group bg-white/6 p-8 flex flex-col h-full">
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
        </div>
      </div>

      <div className="bg-white/20 h-px mt-16"></div>
    </div>
  );
}
