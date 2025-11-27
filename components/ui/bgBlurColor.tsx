"use client";

import React from "react";

type Props = {
  leftColor?: string;    // tailwind color class (e.g. "bg-blue-500/30")
  rightColor?: string;   // tailwind color class
  leftSize?: string;     // tailwind size e.g. "w-[600px] h-[500px]"
  rightSize?: string;    // tailwind size
  className?: string;    // extra container classes
  animate?: boolean;
};

export default function BgBlurColor({
  leftColor = "bg-[#005CAF]/20",
  rightColor = "bg-[#FF8800]/20",
  leftSize = "w-[550px] h-[450px]",
  rightSize = "w-[550px] h-[450px]",
  className = "",
  animate = true,
}: Props) {
  const animClass = animate ? "animate-verticalFloat" : "";

  return (
    <div
      aria-hidden
      className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10 ${className}`}
    >
      {/* Left Blur Blob */}
      <div
        className={`
          absolute -left-20 top-0
          ${leftSize} ${leftColor}
          blur-[200px] rounded-full
          ${animClass}
        `}
      />

      {/* Right Blur Blob */}
      <div
        className={`
          absolute -right-20 bottom-1/4
          ${rightSize} ${rightColor}
          blur-[200px] rounded-full
          ${animClass}
        `}
        style={{ animationDelay: "1.8s" }}
      />
    </div>
  );
}
