"use client";
import AwardsSection from "@/components/sections/home/awards";
import Benefits from "@/components/sections/home/benefits";
import BlogInshight from "@/components/sections/home/blog-inshight";
import TestimonialCarousel from "@/components/sections/home/carousel-size";
import Faq from "@/components/sections/home/faq";
import FeaturesSection from "@/components/sections/home/features-section";
import HeroSection from "@/components/sections/home/hero-section";
import LogoCloud from "@/components/sections/home/logo-marque";
import StatsSection from "@/components/sections/home/state-section";
import ChooseUs from "@/components/ui/timeline";


export default function HomePage() {
  return (
    <div className="">
      <HeroSection />
      <LogoCloud />
      <StatsSection />
      <FeaturesSection/>
      {/* <ChooseUs/> */}
      <Benefits/>
      <TestimonialCarousel  />
      <AwardsSection />
      <BlogInshight />
      <Faq/>
    </div>
  );
}
