import React, { useState } from "react";
import { Handshake, Network, Package } from "lucide-react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  spotlightColor: string;
}

interface Feature {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
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
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 ${className}`}
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
  icon: Icon,
  spotlightColor,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <SpotlightCard
      className=" transition-transform duration-300 hover:scale-[1.02]"
      spotlightColor={spotlightColor}
    >
      <div
        className="relative p-8 h-full flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Overlay Image Effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Top Right Icon on Hover */}
        <div
          className={`absolute top-6 right-6 w-12 h-12 rounded-xl bg-orange-500/20 backdrop-blur-sm flex items-center justify-center transition-all duration-500 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <Icon className="w-6 h-6 text-orange-500" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Number and Title */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-orange-500 text-xl font-bold">{number}</span>
            <h3 className="text-white text-xl font-semibold">{title}</h3>
          </div>

          {/* Icon */}
          <div className="mb-6">
            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                isHovered ? "bg-orange-500 scale-110" : "bg-gray-800"
              }`}
            >
              <Icon
                className={`w-8 h-8 transition-colors duration-300 ${
                  isHovered ? "text-white" : "text-orange-500"
                }`}
              />
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-base leading-relaxed mb-8">
            {description}
          </p>

          {/* Learn More Link */}
          <button className="group flex items-center gap-2 text-orange-500 font-medium hover:text-orange-400 transition-colors">
            Learn More
            <svg
              className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Decorative Elements */}
        <div
          className={`absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl transition-opacity duration-500 ${
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
      icon: Handshake,
      spotlightColor: "rgba(249, 115, 22, 0.2)",
    },
    {
      number: "02.",
      title: "Product Reselling",
      description:
        "Helps businesses attract and onboard new users, merchants, and leads through digital and field campaigns.",
      icon: Network,
      spotlightColor: "rgba(249, 115, 22, 0.2)",
    },
    {
      number: "03.",
      title: "Order Collection",
      description:
        "Helps businesses attract and onboard new users, merchants, and leads through digital and field campaigns.",
      icon: Package,
      spotlightColor: "rgba(249, 115, 22, 0.2)",
    },
  ];

  return (
    <div className=" bg-black py-20 px-4">
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
                  stroke-width="2"
                  stroke-linecap="round"
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
                    <stop stop-color="#FF8800" />
                    <stop offset="0.981629" stop-color="#0F0E11" />
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
                  stroke-width="2"
                  stroke-linecap="round"
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
                    <stop stop-color="#FF8800" />
                    <stop offset="0.981629" stop-color="#0F0E11" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <h2 className="text-4xl font-medium lg:text-6xl text-center">
            What We Offer
          </h2>

          {/* Grid Layout */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}
