"use client";


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

    </div>
  );
}
