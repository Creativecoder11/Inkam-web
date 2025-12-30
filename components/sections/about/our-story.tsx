"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import storyImage from "@/asset/images/our-story-image.webp";
import TextAnimation from "@/components/ui/textAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
export default function OurStorySection() {
  return (
    <div className="w-full py-15 md:py-25">
      <div className="max-w-7xl mx-4 md:mx-auto">
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-20">
          {/* Left Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-between items-start gap-0 md:gap-8">
            <div className="space-y-3 md:space-y-7">
              <ScrollReveal>
                <div className="flex justify-start text-white items-center gap-2 md:gap-4">
                  <p className="title-text text-sm md:text-xl">OUR STORY</p>
                  <div className="mobile-line">
                    {/* svg omitted for brevity */}
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
                <h1 className="text-3xl font-semibold lg:text-6xl leading-[1.2] mb-4 md:mb-12 text-white">
                  Driving Growth Through Smarter Digital Distribution
                </h1>
              </TextAnimation>

            </div>

            <Button
              asChild
              size="lg"
              className="h-10 md:h-14 rounded-lg md:rounded-xl px-4 py-2 md:px-5 md:py-5 text-sm md:text-base bg-(--orange) hover:bg-orange-500"
            >
              <Link href="#link">
                <span className="text-nowrap">Partner with Us</span>
              </Link>
            </Button>
          </div>
          {/* Right Content */}
          <div className="w-full md:w-1/2">
            <div className="relative rounded-lg md:rounded-[20px] overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.5)] md:shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <Image
                src={storyImage}
                alt="Team collaborating in modern office"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>

            <TextAnimation delay={0.2}>
              <p className="mt-4 md:mt-8 text-base text-(--grey)">
                Inkam empowers digital businesses with nationwide distribution, enabling greater reach, higher sales, and seamless access to millions of untapped customers across Bangladesh.
              </p>
            </TextAnimation>

          </div>
        </div>
      </div>
    </div>
  );
}
