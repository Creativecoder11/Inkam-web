"use client";
import AwardsSection from "@/components/sections/home/awards";
import Benefits from "@/components/sections/home/benefits";
import BlogInsight from "@/components/sections/home/blog-inshight";
import TestimonialCarousel from "@/components/sections/home/carousel-size";
import Faq from "@/components/sections/home/faq";
import FeaturesSection from "@/components/sections/home/features-section";
import HeroSection from "@/components/sections/home/hero-section";
import StatsSection from "@/components/sections/home/state-section";
import ChooseUs from "@/components/ui/timeline";
import useScrollSmooth from "@/lib/useScroll";
import LenisProvider from "@/lib/LenisProvider";

import bgElementRight from "@/asset/icons/bg-elements-right.svg";
import bgElementLeft from "@/asset/icons/bg-elements-right.svg";
import ScrollAnimatedFeatures from "@/components/ui/timeline";
// import { useScroll } from "motion/react";

export default function HomePage() {
  // useScrollSmooth();
  // LenisProvider();
  return (
    <div className="">
      <HeroSection />
      <div
        style={{
          backgroundImage: `url(${bgElementRight.src}), url(${bgElementLeft.src})`,
          // backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat, no-repeat",
          // backgroundSize: "300px auto, 250px auto",
          backgroundPosition: `
            calc(100% - (-240px)) 120px,
            -220px 600px
          `,
        }}
        className="bg-no-repeat w-full"
      >
        <StatsSection />
        <FeaturesSection />
        {/* <ChooseUs/> */}
        <ScrollAnimatedFeatures />
        <Benefits />
        <TestimonialCarousel />
        <AwardsSection />
        <BlogInsight />
        <Faq />
      </div>
    </div>
  );
}
