"use client";

import { useState, useEffect, useRef } from "react";

export default function BenefitsCharts() {
  const [animated, setAnimated] = useState(false);
  const chartRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(280);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimated(true);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    if (chartRef.current) observer.observe(chartRef.current);

    return () => {
      if (chartRef.current) observer.unobserve(chartRef.current);
    };
  }, []);

  useEffect(() => {
  const updateHeight = () => {
    if (window.innerWidth >= 768) {
      setMaxHeight(480); // md+
    } else {
      setMaxHeight(280); // mobile
    }
  };

  updateHeight(); // run once on mount
  window.addEventListener("resize", updateHeight);

  return () => window.removeEventListener("resize", updateHeight);
}, []);


  const data = [
    { year: "2023", value: 0.7, label: "6x", showLabel: true },
    { year: "2024", value: 1.5, label: "10x", showLabel: true },
    { year: "2025", value: 2.5, label: "13x", showLabel: true },
    { year: "2026", value: 4, label: "18x", showLabel: true },
    { year: "2027", value: 10, label: "24x", showLabel: true },
    { year: "2028", value: 16, label: "35x", showLabel: true },
  ];

  const maxValue = 25;
  
  const yAxisLabels = ["0", "5M", "10M", "15M", "20M", "25M"];

  return (
    <div ref={chartRef} className="bg-[#161518] rounded-xl text-white p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="mb-12">
            <h1 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">Financial Projection</h1>
            <p className="text-gray-400 text-sm md:text-base">Monitor your monthly <br className="block md:hidden" /> income growth</p>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#CFCFCF] rounded-[2px]"></div>
            <span className="text-gray-300 text-sm md:text-base">Project</span>
          </div>
        </div>

        {/* Chart Container */}
        <div className="relative">

          {/* Y-axis */}
          <div className="absolute left-0 top-0 bottom-10 flex flex-col justify-between text-gray-500 text-sm">
            {yAxisLabels
              .slice()
              .reverse()
              .map((label, i) => (
                <div key={i} className="relative">
                  <span className="absolute text-white text-xs md:text-base left-3 md:left-6 -translate-y-1/2">{label}</span>
                </div>
              ))}
            <div className="absolute flex items-center text-white/50 text-xs md:text-[14px] -left-7 md:-left-6 top-1/2 -rotate-90 italic">
              <p>Value</p>
              <span className="ml-1">($)</span>
            </div>
          </div>

          {/* Grid lines */}
          <div className="ml-16 relative h-[280px] md:h-[460px]" >
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="absolute w-full border-t border-dashed border-gray-700"
                style={{ top: `${i * ((maxHeight + 20) / 5.9)}px` }}
              ></div>
            ))}

            {/* Bars */}
            <div className="absolute  left-0 right-0 flex items-end justify-between h-full md:pl-1">
              {data.map((item, index) => {
                const barHeight = animated ? (item.value / maxValue) * maxHeight : 0;

                return (
                  <div key={index} className="flex flex-col items-center flex-1 max-w-7 md:max-w-11 relative">

                    {/* Bar + Label Container */}
                    <div className="w-full flex justify-center mb-3 relative">

                      {/* Bar */}
                      <div
                        className="w-7 md:w-20 bg-(--orange) rounded-t md:rounded-t-lg transition-all duration-1000 ease-out"
                        style={{
                          height: `${barHeight}px`,
                        }}
                      ></div>

                      {/* Growth Label (correct position above bar) */}
                      {item.showLabel && (
                        <div
                          className="absolute left-1/2 -translate-x-1/2 transition-all duration-1000 ease-out"
                          style={{
                            bottom: animated ? `${barHeight + 10}px` : "0px",
                            opacity: animated ? 1 : 0,
                          }}
                        >
                          <div className="p-2 md:p-3 rounded-full bg-black text-center">
                            <div className="text-xs md:text-sm font-bold">{item.label}</div>
                            <div className="text-[10px] md:text-[12px] text-gray-400">Growth</div>
                          </div>
                        </div>
                      )}

                    </div>

                    {/* Year Label */}
                    <div className="text-gray-300 bg-[#1a1a1a] text-xs md:text-base font-medium">
                      {item.year}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
