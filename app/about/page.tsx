import HeaderBanner from "@/components/layout/headerBanner";
import AboutCircularCarousel from "@/components/sections/about/AboutTimline";
// import CircularCarousel from '@/components/sections/about/AboutTimline'
import CoreValuesSection from "@/components/sections/about/CoreValueSection";
import ImpactStatsSection from "@/components/sections/about/impact-section";
import MobileAboutTimeline from "@/components/sections/about/mobileAboutTimeline";
import OurStory from "@/components/sections/about/our-story";
import TeamSection from "@/components/sections/about/TeamSection";
import Faq from "@/components/sections/home/faq";



export default function About() {
  const data = [
  {
    year: "Feb 2023",
    title: "Inkam begins the journey",
    description:
      "Inkam began building and testing an MVP to simplify digital distribution for retailers and field teams in Bangladesh.",
  },
  {
    year: "Jun 2023",
    title: "BIG 2023: Top 50 startup",
    description:
      "Named Top 50 at the Bangabandhu Innovation Grant grand finale, gaining national validation through a govt-backed programme.",
  },
  {
    year: "Aug 2023",
    title: "Tally MSME Honours: Next Gen Icon",
    description:
      "Won the Next Generation Icon award at Tally MSME Honours Bangladesh for tackling distribution and access gaps.",
  },
  {
    year: "Sep 2023",
    title: "$125K pre-seed secured",
    description:
      "Raised $125K pre-seed to accelerate product development, strengthen field ops, and scale market execution.",
  },
  {
    year: "Oct 2023",
    title: "Turtle Venture Studio Cohort 1",
    description:
      "Joined Turtle Venture Studio Cohort 1 for structured venture building, sharper GTM focus, and investment readiness.",
  },
  {
    year: "Apr 2024",
    title: "Demo Day in Singapore",
    description:
      "Pitched at Turtle Venture Studio Demo Day in Singapore to regional investors and ecosystem leaders.",
  },
  {
    year: "Dec 2024",
    title: "Agent network hits 10,000",
    description:
      "Scaled the agent network to 10,000, improving last-mile execution and consistent retailer service.",
  },
  {
    year: "Feb 2025",
    title: "99% penetration milestone",
    description:
      "Reached 99% penetration in the untapped target segment across active pilots, driven by strong repeat usage.",
  },
];

  return (
    <div>
      <HeaderBanner title="About Us" heading={
        <>
          Transforming Digital
          <br />
          Access Across Bangladesh
        </>
      } />
      <OurStory />
      <ImpactStatsSection />
      <CoreValuesSection />
      <TeamSection />
      <Faq />
      <div className="hidden md:block">
        <AboutCircularCarousel slides={data} autoplay={4000} speed={1500} />
      </div>
      <div className="block md:hidden">
        <MobileAboutTimeline />
      </div>
    </div>
  );
}
