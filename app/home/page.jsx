"use client";

import HeroSection from "@/components/hero-section";
import LogoCloud from "@/components/logo-cloud";
import { div } from "motion/react-client";

export default function HomePage() {
  return (
    <div className="h-screen">
      <HeroSection />
      <LogoCloud />
    </div>
  );
}
