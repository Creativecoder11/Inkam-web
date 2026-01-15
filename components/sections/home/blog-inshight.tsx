"use client";

import BlogCard from "@/components/ui/BlogCard";
import blogImg1 from "@/asset/images/Blog/inkam insights - image.webp";
import blogImg2 from "@/asset/images/Blog/inkam insights - image-2.webp";
import blogImg3 from "@/asset/images/Blog/inkam insights - image-5.webp";
import TextAnimation from "@/components/ui/textAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function BlogInsight() {
  const articles = [
    {
            id: 1,
            date: "20-04-24",
            comments: 223,
            title: "Singapore Demo Day Spotlights Bangladeshi Turtle Startups",
            excerpt:
                "Seven startups from Turtle's first cohort including Chhaya, Inkam, Revorium, Drutoloan, Shunboi...",
            image: blogImg1,
            url: "https://www.dhakatribune.com/business/344448/turtle-venture-studio-s-demo-day-in-singapore",
        },
        {
            id: 2,
            date: "12-06-24",
            comments: 223,
            title: "Rising Together: Meet & Greet with Razor Capital",
            excerpt:
                "Turtle Venture orchestrated a momentous Meet & Greet event with Razor Capital, a prominent.",
            image: blogImg2,
            url: "#",
        },
        {
            id: 3,
            date: "15-07-24",
            comments: 223,
            title: "Market Presence and Partnership Meeting",
            excerpt:
                "inkam has formed key partnerships with 10 divisional distributors, driving regional...",
            image: blogImg3,
            url: "#",
        },
  ];

  return (
    <div className="w-full py-25">
      <div className="max-w-7xl mx-4 md:mx-auto">

        {/* ---------- TITLE ---------- */}
        <div className="space-y-2 md:space-y-7">
          <ScrollReveal>
            <div className="flex text-white justify-start items-center gap-2 md:gap-4">
              <p className="title-text text-sm md:text-xl">INSIGHTS</p>
              <div className="mobile-line">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="167"
                  height="2"
                  viewBox="0 0 167 2"
                  fill="none"
                >
                  <path
                    d="M1 1H166"
                    stroke="url(#paint0_linear)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="-3.99979"
                      y1="0.49994"
                      x2="8.92156"
                      y2="45.5518"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF8800" />
                      <stop offset="1" stopColor="#0F0E11" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </ScrollReveal>

          <div className="flex text-white justify-between items-end text-left">
            <TextAnimation>
              <h2 className="text-3xl leading-11 font-medium md:text-[60px] md:leading-18 w-full">
                Press Releases,<br />Announcements, and Insights
              </h2>
            </TextAnimation>
          </div>
        </div>

        {/* ---------- BLOG GRID ---------- */}
        <div className="grid grid-cols-1 pt-12 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <BlogCard
              key={article.id}
              article={article}
              actionLabel="Learn More"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
