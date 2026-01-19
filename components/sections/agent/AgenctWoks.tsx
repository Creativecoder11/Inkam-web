"use client";

import Image, { StaticImageData } from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/textAnimation";
import React, { useEffect, useState } from "react";
import handShake from "@/asset/icons/handShake.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";


interface Step {
  id: number;
  title: string;
  description: string;
  icon: StaticImageData;
  detailTitle: string;
  detailDescription: string;
}

const useIsMdUp = () => {
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handler = () => setIsMdUp(mediaQuery.matches);
    handler();

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return isMdUp;
};

const AgentWoks: React.FC = () => {
  const isMdUp = useIsMdUp();
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps: Step[] = [
    {
      id: 1,
      title: "Download & Register",
      description:
        "Get the app and create your profile in minutes. No complicated paperwork—just quick digital onboarding",
      icon: handShake,
      detailTitle: "Quick Registration Process",
      detailDescription:
        "Get started in minutes with our streamlined onboarding. Create your profile, verify your identity, and start earning without any complicated paperwork or delays.",
    },
    {
      id: 2,
      title: "Choose Your Product",
      description:
        "Browse our marketplace. Pick from educational courses, healthcare packages, or financial services that your network actually",
      icon: handShake,
      detailTitle: "Diverse Product Selection",
      detailDescription:
        "Access our curated marketplace featuring educational courses, healthcare packages, and financial services. Choose products that align with your network's needs and interests.",
    },
    {
      id: 3,
      title: "Work & Earn",
      description:
        "Every completed job or successful sale translates directly into guaranteed earnings in your wallet.",
      icon: handShake,
      detailTitle: "Guaranteed Earnings",
      detailDescription:
        "Track your progress in real-time as every completed task and successful sale converts directly into earnings. Withdraw your money instantly to your preferred payment method.",
    },
  ];



  const activeStepData =
    steps.find((step) => step.id === activeStep) || steps[0];

  return (
    <div className=" text-white py-20 px-4 relative overflow-hidden">
      {/* Add custom CSS animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.5s ease-out forwards;
        }
      `}</style>
      {/* Decorative curved line */}
      <div className="absolute top-0 left-0 w-96 h-96 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 400 400">
          <path
            d="M 0,200 Q 100,50 200,100 T 400,200"
            stroke="rgba(249, 115, 22, 0.3)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
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
              <p className="title-text text-sm md:text-xl uppercase">How It Works</p>
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
            <h2 className="text-3xl font-semibold lg:text-6xl leading-[1.2] mb-4 md:mb-12 text-white text-center">
              Earning Made Simple
            </h2>
          </TextAnimation>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 justify-between">
          {/* Left Side - Steps */}
          <div className="space-y-4 md:space-y-8 w-full">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div
                  onMouseEnter={isMdUp ? () => setActiveStep(step.id) : undefined}
                  onClick={!isMdUp ? () => setActiveStep(step.id) : undefined}
                  className="relative flex items-center gap-3 rounded-xl cursor-pointer"
                >
                  {/* Icon */}
                  <div className="shrink-0 relative z-10">
                    <div className="w-12 md:w-16 h-12 md:h-16 rounded-full flex items-center justify-center text-2xl bg-[#ffffff0d]">
                      <Image
                        src={step.icon}
                        alt={step.title}
                        width={32}
                        height={32}
                        className="w-6 md:w-8 h-6 md:h-8 object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 relative z-10">
                    <div
                      className={`text-8xl font-bold absolute right-6 transition-all duration-500 ${activeStep === step.id
                        ? "opacity-10 scale-110"
                        : "opacity-5 scale-100"
                        }`}
                    >
                      0{step.id}
                    </div>

                    <h3
                      className={`text-xl md:text-2xl font-bold mb-1.5 md:mb-3 transition-all duration-500 ${activeStep === step.id
                        ? "text-(--orange) translate-x-1"
                        : "text-white translate-x-0"
                        }`}
                    >
                      {step.title}
                    </h3>

                    <p
                      className={`text-sm md:text-base leading-relaxed transition-all duration-500 ${activeStep === step.id ? "text-gray-300" : "text-gray-400"
                        }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* HR divider (only between steps) */}
                {index < steps.length - 1 && (
                  <hr className="border-0 h-px bg-[#ffffff1a] my-6 md:my-8" />
                )}
              </React.Fragment>
            ))}

          </div>

          {/* Right Side - Details */}
          <div className="md:w-[80%] sticky top-20 justify-self-end">
            <div className="bg-linear-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-5 md:p-8 min-h-74 md:min-h-100 flex flex-col justify-between shadow-2xl relative overflow-hidden transition-all duration-500">
              {/* Animated background gradient */}
              <div
                className={`absolute inset-0 bg-linear-to-br from-(--orange)/10 to-transparent transition-opacity duration-700 ${activeStep ? "opacity-100" : "opacity-0"
                  }`}
              ></div>

              {/* Detail Content with fade-in animation */}
              <div key={activeStep} className="animate-fadeInUp relative z-10">
                <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6 leading-tight bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {activeStepData.detailTitle}
                </h2>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed md:mb-8">
                  {activeStepData.detailDescription}
                </p>
              </div>

              {/* CTA Button */}
              <Button
                asChild
                size="lg"
                className="h-10 md:h-14 rounded-lg md:rounded-xl px-4 py-2 md:px-5 md:py-5 text-sm md:text-base bg-(--orange) hover:bg-orange-500"
              >
                <Link href="#link">
                  <span className="text-nowrap">Join Now</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentWoks;
