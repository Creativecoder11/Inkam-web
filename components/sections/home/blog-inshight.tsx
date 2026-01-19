"use client";

import BlogCard from "@/components/ui/BlogCard";
import TextAnimation from "@/components/ui/textAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { articles } from "@/lib/articles-data";

export default function BlogInsight() {
  // Get only the first 3 articles
  const featuredArticles = articles.slice(0, 3);

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
          {featuredArticles.map((article) => (
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