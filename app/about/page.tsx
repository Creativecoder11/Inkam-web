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
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus. Viverra lectus lacus aliquet et dignissim quam sed. Sed.Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus. ",
    },
    {
      year: "2018",
      img: "https://cdn.prod.website-files.com/6788e6c70fa2b23ccce907d3/6895a5d2fd74c2308c048a50_9a9b5baacc76ea6ec51d52d27ca306b3_illustration2%20%281%29.avif",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus. Viverra lectus lacus aliquet et dignissim quam sed. Sed.Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus. ",
    },
    {
      year: "2019",
      img: "https://cdn.prod.website-files.com/6788e6c70fa2b23ccce907d3/6895a5d2fd74c2308c048a50_9a9b5baacc76ea6ec51d52d27ca306b3_illustration2%20%281%29.avif",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus. Viverra lectus lacus aliquet et dignissim quam sed. Sed.Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus. ",
    },
    {
      year: "2020",
      img: "https://cdn.prod.website-files.com/6788e6c70fa2b23ccce907d3/6895a5d2fd74c2308c048a50_9a9b5baacc76ea6ec51d52d27ca306b3_illustration2%20%281%29.avif",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus. Viverra lectus lacus aliquet et dignissim quam sed. Sed.Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus. ",
    },
    {
      year: "2021",
      img: "https://cdn.prod.website-files.com/6788e6c70fa2b23ccce907d3/6895a5d2fd74c2308c048a50_9a9b5baacc76ea6ec51d52d27ca306b3_illustration2%20%281%29.avif",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus. Viverra lectus lacus aliquet et dignissim quam sed. Sed.Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus. ",
    },
    {
      year: "2022",
      img: "https://cdn.prod.website-files.com/6788e6c70fa2b23ccce907d3/6895a5d2fd74c2308c048a50_9a9b5baacc76ea6ec51d52d27ca306b3_illustration2%20%281%29.avif",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus. Viverra lectus lacus aliquet et dignissim quam sed. Sed.Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus. ",
    },
    {
      year: "2025",
      img: "https://cdn.prod.website-files.com/6788e6c70fa2b23ccce907d3/6895a5d2fd74c2308c048a50_9a9b5baacc76ea6ec51d52d27ca306b3_illustration2%20%281%29.avif",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus. Viverra lectus lacus aliquet et dignissim quam sed. Sed.Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus. ",
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
      <AboutCircularCarousel slides={data} autoplay={4000} speed={1500} />
    </div>
  );
}
