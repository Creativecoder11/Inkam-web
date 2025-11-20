"use client";


import Benefits from "@/components/sections/home/benefits";
import TestimonialCarousel from "@/components/sections/home/carousel-size";
// import CarouselSize from "@/components/sections/home/carousel-size";
import FeaturesSection from "@/components/sections/home/features-section";
import HeroSection from "@/components/sections/home/hero-section";
import LogoCloud from "@/components/sections/home/logo-marque";
import StatsSection from "@/components/sections/home/state-section";

import { div } from "motion/react-client";

export default function HomePage() {
  return (
    <div className="">
      <HeroSection />
      <LogoCloud />
      <StatsSection />
      <FeaturesSection/>
      <Benefits/>
      <TestimonialCarousel  />
    </div>
  );
}
