"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import storyImage from "@/public/asset/Images/our-story-image.webp";
export default function OurStorySection() {
  return (
    <section className="max-w-7xl py-25 mx-auto">
      <div className=" w-full flex gap-20">
        {/* Left Content */}
        <div className="w-1/2 flex flex-col justify-between items-start gap-8">
          <div className="space-y-7">
            <div className="flex justify-start text-white items-center gap-4">
              <p>OUR STORY</p>
              <div>
                {/* svg omitted for brevity */}
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

            <h1 className="text-[40px] md:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-12 text-white">
              Driving Growth Through Smarter Digital Distribution
            </h1>
          </div>

          <Button
            asChild
            size="lg"
            className="h-14 rounded-xl px-5 py-5 text-base bg-(--orange) hover:bg-orange-500"
          >
            <Link href="#link">
              <span className="text-nowrap">Partner with Us</span>
            </Link>
          </Button>
        </div>
        {/* Right Content */}
        <div className="w-1/2">
          <div className="relative rounded-[20px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <Image
              src={storyImage}
              alt="Team collaborating in modern office"
              width={800}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>

          <p className="mt-8 text-base text-(--grey)">
            Inkam empowers digital businesses with nationwide distribution,
            enabling greater reach, higher sales, and seamless access to
            millions of consumers across Bangladesh.
          </p>
        </div>
      </div>
    </section>
  );
}
