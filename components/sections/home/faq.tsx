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
      question: "How long does shipping take?",
      answer:
        "Standard shipping takes 3-5 business days, depending on your location. Express shipping options are available at checkout for 1-2 business day delivery.",
    },
    {
      id: "item-2",
      no: "02.",
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay. For enterprise customers, we also offer invoicing options.",
    },
    {
      id: "item-3",
      no: "03.",
      question: "Can I change or cancel my order?",
      answer:
        "You can modify or cancel your order within 1 hour of placing it. After this window, please contact our customer support team who will assist you with any changes.",
    },
    {
      id: "item-4",
      no: "04.",
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to over 50 countries worldwide. International shipping typically takes 7-14 business days. Additional customs fees may apply depending on your country's import regulations.",
    },
    {
      id: "item-5",
      no: "05.",
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for most items. Products must be in original condition with tags attached. Some specialty items may have different return terms, which will be noted on the product page.",
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
                      className="data-[state=open]:bg-[#161518] text-white text-xl dark:data-[state=open]:bg-muted peer rounded-xl border-none px-3 md:px-7 py-2 md:py-5 data-[state=open]:border-none data-[state=open]:shadow-sm"
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
