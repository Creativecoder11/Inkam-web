"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import blogImg1 from "@/asset/images/Blog/inkam insights - image.webp";
import blogImg2 from "@/asset/images/Blog/inkam insights - image-2.webp";
import blogImg3 from "@/asset/images/Blog/inkam insights - image-5.webp";
import blogImg4 from "@/asset/images/Blog/inkam insights - image-4.webp";
import blogImg5 from "@/asset/images/Blog/inkam insights - image-1.webp";
import blogImg6 from "@/asset/images/Blog/inkam insights - image-3.webp";
import BlogCard from "@/components/ui/BlogCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/textAnimation";

export default function Insights() {
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
    {
      id: 4,
      date: "17-01-23",
      comments: 223,
      title: "BDjobs Fair 2024 - Chittagong",
      excerpt:
        "Seven startups from Turtle's first cohort including Chhaya, Inkam, Revorium, Drutoloan, Shunboi...",
      image: blogImg4,
      url: "#",
    },
    {
      id: 5,
      date: "20-06-23",
      comments: 223,
      title: "BIG top 10 selected startup",
      excerpt:
        "Seven startups from Turtle's first cohort including Chhaya, Inkam, Revorium, Drutoloan, Shunboi...",
      image: blogImg5,
      url: "https://www.dhakatribune.com/business/344448/turtle-venture-studio-s-demo-day-in-singapore",
    },
    {
      id: 6,
      date: "07-11-24",
      comments: 223,
      title: "Next Generation Icon Award in MSME Honours presented",
      excerpt:
        "Inkam has been awarded with Next Generation Icon Award in MSME Honours presented by ....",
      image: blogImg6,
      url: "https://www.observerbd.com/news/499476",
    },
  ];

  const [highlight, setHighlight] = useState(articles[0]);

  useEffect(() => {
    const random = Math.floor(Math.random() * articles.length);
    setHighlight(articles[random]);
  }, []);

  return (
    <div className="w-full py-15 md:py-25">
      <div className="max-w-7xl mx-4 md:mx-auto">
        {/* ------------------- TOP TITLE ------------------- */}
        <ScrollReveal>
          <div className="space-y-2 md:space-y-7 text-white">
            <TextAnimation>
              <h2 className="text-3xl md:text-[60px] leading-tight">
                Press Releases,
                <br />
                Announcements, and Insights
              </h2>
            </TextAnimation>
          </div>
        </ScrollReveal>

        {/* ------------------- HIGHLIGHT SECTION ------------------- */}
        <div className="w-full mt-12 min-h-[550px] rounded-2xl relative flex items-end justify-center">
          <Image
            src={highlight.image}
            alt={highlight.title}
            fill
            className="object-cover rounded-[20px]"
            priority
          />

          <div className="bg-[#201F22] max-w-237.5 -mb-15 py-5 px-6 rounded-xl relative z-10">
            <div className="flex items-center my-2 gap-1 md:gap-2">
              {/* calendar icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 md:w-5 md:h-5"
                fill="none"
                viewBox="0 0 20 20" // <-- add this
              >
                <path
                  d="M9.16666 10.8335H13.3333M6.66666 10.8335H6.67415M10.8333 14.1668H6.66666M13.3333 14.1668H13.3258"
                  stroke="#B7B7B8"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <path
                  d="M15 1.6665V3.33317M5 1.6665V3.33317"
                  stroke="#B7B7B8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M2.08334 10.2027C2.08334 6.57161 2.08334 4.75607 3.12677 3.62803C4.1702 2.5 5.84958 2.5 9.20834 2.5H10.7917C14.1504 2.5 15.8298 2.5 16.8732 3.62803C17.9167 4.75607 17.9167 6.57161 17.9167 10.2027V10.6306C17.9167 14.2617 17.9167 16.0773 16.8732 17.2053C15.8298 18.3333 14.1504 18.3333 10.7917 18.3333H9.20834C5.84958 18.3333 4.1702 18.3333 3.12677 17.2053C2.08334 16.0773 2.08334 14.2617 2.08334 10.6306V10.2027Z"
                  stroke="#B7B7B8"
                  strokeWidth="1.4"
                />
                <path d="M2.5 6.6665H17.5" stroke="#B7B7B8" strokeWidth="1.4" />
              </svg>
              <span className="text-xs text-gray-400 md:text-base">
                {highlight.date}
              </span>
            </div>
            <h3 className="text-white text-[30px] font-semibold mb-3">
              {highlight.title}
            </h3>

            <p className="text-gray-300 text-xl mb-6">{highlight.excerpt}</p>

            {/* EXTERNAL LINK */}
            <a
              href={highlight.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-white font-medium"
            >
              <span className="relative">
                Read Full Journal
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />
              </span>

              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="-translate-x-1 transition-all duration-500 group-hover:translate-x-0"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* ------------------- GRID SECTION ------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-28">
          {articles.map((article) => (
            <BlogCard
              key={article.id}
              article={article}
              actionLabel="Read Full Journal"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
