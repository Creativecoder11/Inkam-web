import HeaderBanner from "@/components/layout/headerBanner";
import AboutCircularCarousel from "@/components/sections/about/AboutTimline";
// import CircularCarousel from '@/components/sections/about/AboutTimline'
import CoreValuesSection from "@/components/sections/about/CoreValueSection";
import ImpactStatsSection from "@/components/sections/about/impact-section";
import OurStory from "@/components/sections/about/our-story";
import TeamSection from "@/components/sections/about/TeamSection";
import Faq from "@/components/sections/home/faq";



export default function About() {
  const data = [
    {
      year: "2012",
      img: "https://cdn.prod.website-files.com/6788e6c70fa2b23ccce907d3/6895a34d9342359e1f5d6b31_illustration2.avif",
      text: "Founded with a focus on simplifying property ownership in Dubai.",
    },
    {
      year: "2014",
      img: "https://cdn.prod.website-files.com/6788e6c70fa2b23ccce907d3/6895a5d2fd74c2308c048a50_9a9b5baacc76ea6ec51d52d27ca306b3_illustration2%20%281%29.avif",
      text: "Legal advisory services added to help landlords win disputes and protect assets.",
    },
    // ... add same as your HTML
  ];
  return (
    <div>
      <HeaderBanner title="About Us" heading="Who We Are" />
      <OurStory />
      <ImpactStatsSection />
      <CoreValuesSection />
      <TeamSection />
      <Faq />
      <AboutCircularCarousel slides={data} autoplay={4000} speed={2500} />
    </div>
  );
}
