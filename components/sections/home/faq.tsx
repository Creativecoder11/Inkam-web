import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function Faq() {
  const faqItems = [
    {
      id: "item-1",
      no: "01.",
      question: "What is Inkam and what core problem does it solve?",
      answer:
        "Inkam is a digital distribution network that connects businesses with end consumers through a nationwide community of trained “digital entrepreneurs” (agents). We solve the last-mile and adoption problem for digital products and services—helping you reach, educate, and convert customers in markets your existing channels don’t coverz.",
    },
    {
      id: "item-2",
      no: "02.",
      question: "How does Inkam’s distribution model work?",
      answer:
        "You list your product or campaign on Inkam and define your target audience plus success metrics (downloads, sign-ups, orders, merchant onboarding, etc.). Our agents execute on the ground using the Inkam app—promoting, educating, and closing the loop with customers. You track performance in a dashboard and pay based on verified outcomes, not vanity metrics.",
    },
    {
      id: "item-3",
      no: "03.",
      question: "What types of businesses does Inkam partner with?",
      answer:
        "We work with digital-first and consumer-focused businesses across fintech and financial services, edtech, healthtech, ecommerce and retail, subscription/OTT services, logistics, telecom/ISP, and other digital products and services. If your growth depends on reaching more users, merchants, or consumers across Bangladesh, we’re built to support you.",
    },
    {
      id: "item-4",
      no: "04.",
      question: "How is Inkam different from a traditional marketing agency or field sales team?",
      answer:
        "Traditional agencies focus on media and creatives, while traditional field teams are expensive to build, manage, and scale. Inkam gives you a ready-made, nationwide, tech-enabled distribution network where you pay for performance instead of fixed salaries and overhead. You get structured field execution, quality control, and transparent reporting in one platform.",
    },
    {
      id: "item-5",
      no: "05.",
      question: "How is pricing structured for businesses?",
      answer:
        "Our model is primarily performance-based. Together we define the desired actions—such as activated app installs, verified leads, completed orders, or merchant onboarding—and set per-unit incentives and campaign budgets. This gives you clear visibility on cost per result, while we optimise execution to improve your ROI over time.",
    },
  ];

  return (
    <div className="w-full py-15 md:py-25">
      <div className="max-w-7xl md:flex justify-between mx-4 md:mx-auto">
        <div className="md:w-1/2 space-y-2 md:space-y-7">
          <div className="flex text-white justify-start items-center gap-2 md:gap-4">
            <p className="text-sm md:text-xl">FAQ</p>
            <div className="mobile-line">
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
          <div className="flex text-white justify-between items-end z-10  text-left">
            <h2 className="text-3xl leading-11 font-medium lg:text-6xl md:leading-18">
              Everything You
              <br /> Need to Know
            </h2>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="">
            <div className="">
              <Accordion
                type="single"
                collapsible
                className=" w-full rounded-2xl p-1"
              >
                {faqItems.map((item) => (
                  <div className="group" key={item.id}>
                    <AccordionItem
                      value={item.id}
                      className="data-[state=open]:bg-[#161518] text-white text-xl  peer rounded-xl border-none px-3 md:px-7 py-2 md:py-5 data-[state=open]:border-none data-[state=open]:shadow-sm"
                    >
                      <AccordionTrigger className="cursor-pointer text-base md:text-xl hover:no-underline">
                        <div className="flex gap-2 md:gap-3">
                          <span className="text-(--orange)">{item.no}</span>
                          {item.question}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm md:text-base text-(--grey)">{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                    <hr className="border-white/20 group-last:hidden peer-data-[state=open]:opacity-0" />
                  </div>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
