"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/textAnimation";
import React, { useState } from "react";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
  detailTitle: string;
  detailDescription: string;
}

const AgentWoks: React.FC = () => {
  const steps: Step[] = [
    {
      id: 1,
      title: "Download & Register",
      description:
        "Get the app and create your profile in minutes. No complicated paperwork—just quick digital onboarding",
      icon: "🤝",
      detailTitle: "Quick Registration Process",
      detailDescription:
        "Get started in minutes with our streamlined onboarding. Create your profile, verify your identity, and start earning without any complicated paperwork or delays.",
    },
    {
      id: 2,
      title: "Choose Your Product",
      description:
        "Browse our marketplace. Pick from educational courses, healthcare packages, or financial services that your network actually",
      icon: "🤝",
      detailTitle: "Diverse Product Selection",
      detailDescription:
        "Access our curated marketplace featuring educational courses, healthcare packages, and financial services. Choose products that align with your network's needs and interests.",
    },
    {
      id: 3,
      title: "Work & Earn",
      description:
        "Every completed job or successful sale translates directly into guaranteed earnings in your wallet.",
      icon: "🤝",
      detailTitle: "Guaranteed Earnings",
      detailDescription:
        "Track your progress in real-time as every completed task and successful sale converts directly into earnings. Withdraw your money instantly to your preferred payment method.",
    },
  ];

  const [activeStep, setActiveStep] = useState<number>(1);

  const activeStepData =
    steps.find((step) => step.id === activeStep) || steps[0];

  return (
    <div className=" text-white py-20 px-6 relative overflow-hidden">
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
              <p className="title-text text-sm md:text-xl">IMPACT NUMBERS</p>
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
              Driving Economic Growth <br className="hidden md:block" />
              with Financial Projections & Metrics
            </h2>
          </TextAnimation>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Steps */}
          <div className="space-y-8">
            {steps.map((step) => (
              <div
                key={step.id}
                onMouseEnter={() => setActiveStep(step.id)}
                className={`relative flex gap-6 p-6 rounded-xl cursor-pointer transition-all duration-500 ease-out group ${
                  activeStep === step.id
                    ? "bg-gradient-to-r from-gray-800/60 to-gray-800/30 border border-(--orange)/40 shadow-lg shadow-(--orange)/10 scale-[1.02]"
                    : "hover:bg-gray-800/20 hover:scale-[1.01]"
                }`}
              >
                {/* Animated border glow */}
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r from-(--orange)/20 to-transparent blur-sm transition-opacity duration-500 ${
                    activeStep === step.id ? "opacity-100" : "opacity-0"
                  }`}
                ></div>

                {/* Icon */}
                <div className="flex-shrink-0 relative z-10">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-500 ease-out ${
                      activeStep === step.id
                        ? "bg-gradient-to-br from-(--orange) to-orange-600 shadow-lg shadow-(--orange)/50 scale-110 rotate-0"
                        : "bg-gray-700 scale-100 group-hover:scale-105"
                    }`}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 relative z-10">
                  {/* Step number */}
                  <div
                    className={`text-8xl font-bold absolute right-6 transition-all duration-500 ${
                      activeStep === step.id
                        ? "opacity-10 scale-110"
                        : "opacity-5 scale-100"
                    }`}
                  >
                    0{step.id}
                  </div>

                  <h3
                    className={`text-2xl font-bold mb-3 transition-all duration-500 ${
                      activeStep === step.id
                        ? "text-(--orange) translate-x-1"
                        : "text-white translate-x-0"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`leading-relaxed transition-all duration-500 ${
                      activeStep === step.id ? "text-gray-300" : "text-gray-400"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Sliding indicator */}
                <div
                  className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-(--orange) to-orange-600 rounded-full transition-all duration-500 ${
                    activeStep === step.id
                      ? "opacity-100 scale-y-100"
                      : "opacity-0 scale-y-50"
                  }`}
                ></div>
              </div>
            ))}
          </div>

          {/* Right Side - Details */}
          <div className="sticky top-20">
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-12 min-h-[400px] flex flex-col justify-between shadow-2xl relative overflow-hidden transition-all duration-500">
              {/* Animated background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-(--orange)/10 to-transparent transition-opacity duration-700 ${
                  activeStep ? "opacity-100" : "opacity-0"
                }`}
              ></div>

              {/* Animated corner accent */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-(--orange)/20 to-transparent rounded-bl-full transition-all duration-700 ${
                  activeStep ? "scale-100 opacity-100" : "scale-50 opacity-0"
                }`}
              ></div>

              {/* Detail Content with fade-in animation */}
              <div key={activeStep} className="animate-fadeInUp relative z-10">
                <h2 className="text-4xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {activeStepData.detailTitle}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {activeStepData.detailDescription}
                </p>
              </div>

              {/* CTA Button */}
              <button className="relative z-10 bg-gradient-to-r from-(--orange) to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-500 shadow-lg shadow-(--orange)/30 hover:shadow-(--orange)/50 hover:scale-105 w-full md:w-auto group overflow-hidden">
                <span className="relative z-10">Join Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-(--orange) opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentWoks;
