"use client";

import React, { useState } from "react";
import Image from "next/image";

import AcquisitionIcon from "@/public/asset/icons/feature-i-3.svg";
import ResellingIcon from "@/public/asset/icons/feature-i-2.svg";
import CollectionIcon from "@/public/asset/icons/feature-i-1.svg";
import CardVector from "@/public/asset/icons/card-vector.svg";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  iconSrc: string;
  spotlightColor: string;
}

// SpotlightCard (only small state kept)
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

// FeatureCard —
const FeatureCard = ({
  number,
  title,
  description,
  iconSrc,
  spotlightColor,
}: FeatureCardProps) => {
  return (
    <SpotlightCard
      className="transition-all duration-300 hover:scale-[1.02] bg-[#FFFFFF05] hover:bg-[#161518] group"
      spotlightColor={spotlightColor}
    >
      <div className="relative p-5 flex flex-col h-full">

        {/* Hover floating icon */}
        <div
          className="absolute -top-5 -right-22 opacity-0 -translate-y-6 
          group-hover:opacity-100 group-hover:translate-y-0 
          transition-all duration-500"
        >
          <Image src={CardVector} alt={title} width={210} height={24} />
        </div>

        <div className="relative z-10">
          {/* Heading */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-(--orange) text-2xl font-medium">
              {number}
            </span>
            <h3 className="text-white text-2xl font-medium">{title}</h3>
          </div>

          {/* Icon */}
          <div className="mb-6">
            <div
              className="w-16 h-16 rounded-2xl bg-white/5 
              group-hover:bg-(--orange) group-hover:scale-110
              transition-all duration-300 flex items-center justify-center"
            >
              <Image
                src={iconSrc}
                alt={title}
                width={32}
                height={32}
                className="transition-all duration-300 
                group-hover:brightness-0 group-hover:invert"
              />
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-base leading-relaxed mb-8">
            {description}
          </p>

          {/* Learn More */}
          <button className="relative inline-flex items-center gap-2 font-medium text-white overflow-hidden">
            <span className="relative">
              Learn More
              <span
                className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-500 
                transition-all duration-500 group-hover:w-full"
              />
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="-translate-x-1 transition-all duration-500 group-hover:translate-x-0"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Orange glow */}
        <div
          className="absolute top-0 right-0 w-32 h-32 bg-(--orange)/5 
          rounded-full blur-3xl opacity-0 
          group-hover:opacity-100 transition-opacity duration-500"
        />
      </div>
    </SpotlightCard>
  );
};

const features = [
  {
    number: "01.",
    title: "Acquisition",
    description:
      "Helps businesses attract and onboard new users, merchants, and leads through digital and field campaigns.",
    iconSrc: AcquisitionIcon,
    spotlightColor: "rgba(249,115,22,0.2)",
  },
  {
    number: "02.",
    title: "Product Reselling",
    description:
      "Helps businesses attract and onboard new users, merchants, and leads through digital and field campaigns.",
    iconSrc: ResellingIcon,
    spotlightColor: "rgba(249,115,22,0.2)",
  },
  {
    number: "03.",
    title: "Order Collection",
    description:
      "Helps businesses attract and onboard new users, merchants, and leads through digital and field campaigns.",
    iconSrc: CollectionIcon,
    spotlightColor: "rgba(249,115,22,0.2)",
  },
];

export default function FeaturesSection() {
  return (
    <div className="py-30 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
          {/* Heading Text */}
        <div className="text-white flex flex-col gap-6">
          <div className="flex justify-center items-center gap-4">
            <div>
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
            <p>SERVICES</p>
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
          <h2 className="text-4xl font-medium lg:text-6xl text-center">
            What We Offer
          </h2>
        </div>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div key={i} className="relative">
              <FeatureCard {...f} />
              {/* Vertical border on right (except last card) */}
              {i < features.length - 1 && (
                <div
                  className="hidden lg:block absolute top-0 bottom-0 -right-5 w-px"
                  style={{ backgroundColor: "#FFFFFF33" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}