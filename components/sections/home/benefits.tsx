import BenefitsCharts from "@/components/ui/benefits-charts";
import { Users, Clock, TrendingUp } from "lucide-react";
import ExpandIcon from "@/public/asset/icons/benefits-icon-1.svg";
import SaveTimeIcon from "@/public/asset/icons/benefits-icon-2.svg";
import GrowthIcon from "@/public/asset/icons/benefits-icon-3.svg";
import Image from "next/image";
import React from "react";

export default function Benefits() {
  const features = [
    {
      icon: <Image src={ExpandIcon} alt="icon" width={24} height={24} />,
      title: "Expand Your Reach",
      description:
        "Access new markets and millions of untapped consumers through Inkam's 19,000+ agents covering 99% of Bangladesh.",
    },
    {
      icon: <Image src={SaveTimeIcon} alt="icon" width={24} height={24} />,
      title: "Save Time & Cost",
      description:
        "Inkam's technology-driven network to reduce marketing expenses, streamline distribution, and boost ROI with efficient operations.",
    },
    {
      icon: <Image src={GrowthIcon} alt="icon" width={24} height={24} />,
      title: "Drive Real Growth",
      description:
        "Use data intelligence and a nationwide sales force to increase leads, accelerate sales, and grow your business faster than ever.",
    },
  ];
  return (
    <div className="max-w-7xl py-25 mx-auto space-y-12">
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
        <h2 className="text-4xl font-medium leading-18 lg:text-6xl text-center">
          Together, We Build <br /> the Future of Distribution
        </h2>
      </div>
      <div className="flex gap-10">
        <div className="w-1/2">
          <BenefitsCharts />
        </div>
        <div className="w-1/2">
          <div className="mx-auto space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#161518] p-6 rounded-[20px] space-y-4">
                {/* Logo and Heading in on e div */}
                <div className="flex items-center gap-6">
                  <div className="bg-white/5 p-5 rounded-xl">
                    {feature.icon}
                  </div>
                  <h2 className="text-2xl font-medium text-white">
                    {feature.title}
                  </h2>
                </div>

                {/* Horizontal line */}
                <hr className="border-0 h-[1px] bg-[linear-gradient(90deg,rgba(255,255,255,0.30)_0%,rgba(39,38,41,0.30)_100%)]" />

                {/* Description */}
                <p className="text-(--grey) text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
