import React, { useState } from "react";
import Image from "next/image";

// Import your custom icons
import AcquisitionIcon from "@/public/asset/icons/feature-i-3.svg";
import ResellingIcon from "@/public/asset/icons/feature-i-2.svg";
import CollectionIcon from "@/public/asset/icons/feature-i-1.svg";
import CardVector from "@/public/asset/icons/card-vector.svg";
import ButtonArrow from "@/public/asset/icons/link-btn-arrow-Icon.svg";

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

interface Feature {
  number: string;
  title: string;
  description: string;
  iconSrc: string;
  spotlightColor: string;
}

// SpotlightCard Component
const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(255, 165, 0, 0.3)",
}) => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [opacity, setOpacity] = useState<number>(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-2xl ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};

// FeatureCard Component
const FeatureCard: React.FC<FeatureCardProps> = ({
  number,
  title,
  description,
  iconSrc,
  spotlightColor,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <SpotlightCard
      className="transition-all duration-300 hover:scale-[1.02] hover:bg-[#161518]"
      spotlightColor={spotlightColor}
    >
      <div
        className="relative p-8 h-full flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Top Right Icon on Hover */}
        <div
          className={`absolute -top-5 -right-22 rounded-xl w-50 h-auto flex items-center justify-center transition-all duration-500 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          <Image
            src={CardVector}
            alt={title}
            width={210}
            height={24}
            className="object-contain"
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Number and Title */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-(--orange) text-2xl font-medium">{number}</span>
            <h3 className="text-white text-2xl font-medium">{title}</h3>
          </div>

          {/* Icon */}
          <div className="mb-6">
            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                isHovered ? "bg-(--orange) scale-110" : "bg-white/5"
              }`}
            >
              <Image
                src={iconSrc}
                alt={title}
                width={32}
                height={32}
                className={`object-contain transition-all duration-300 ${
                  isHovered ? "brightness-0 invert" : ""
                }`}
              />
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-base leading-relaxed mb-8">
            {description}
          </p>

          {/* Learn More Link */}
          <button className="group relative inline-flex items-center gap-2 text-white font-medium transition-colors overflow-hidden">
            <span className="relative">
              Learn More
              {/* Animated Underline */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange-500 transition-all duration-500 ease-out group-hover:w-full"></span>
            </span>
            {/* Animated Arrow */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-100 -translate-x-1 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0"
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

        {/* Decorative Elements */}
        <div
          className={`absolute top-0 right-0 w-32 h-32 bg-(--orange)/5 rounded-full blur-3xl transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </SpotlightCard>
  );
};

// Main Features Section
export default function FeaturesSection(): JSX.Element {
  const features: Feature[] = [
    {
      number: "01.",
      title: "Acquisition",
      description:
        "Helps businesses attract and onboard new users, merchants, and leads through digital and field campaigns.",
      iconSrc: AcquisitionIcon,
      spotlightColor: "rgba(249, 115, 22, 0.2)",
    },
    {
      number: "02.",
      title: "Product Reselling",
      description:
        "Helps businesses attract and onboard new users, merchants, and leads through digital and field campaigns.",
      iconSrc: ResellingIcon,
      spotlightColor: "rgba(249, 115, 22, 0.2)",
    },
    {
      number: "03.",
      title: "Order Collection",
      description:
        "Helps businesses attract and onboard new users, merchants, and leads through digital and field campaigns.",
      iconSrc: CollectionIcon,
      spotlightColor: "rgba(249, 115, 22, 0.2)",
    },
  ];

  return (
    <div className=" py-30 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-white flex flex-col gap-6">
          {/* Heading Text */}
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
            <p>ABOUT US</p>
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

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <FeatureCard {...feature} />

              {/* Add HR after every full row (3 cards) */}
              {(index + 1) % 3 === 0 && index !== features.length - 1 && (
                <div className="col-span-3">
                  <div className="h-px w-full bg-white/20"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
