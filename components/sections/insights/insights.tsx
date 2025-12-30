"use client";

import { useEffect, useState } from "react";
import BlogImage from "@/asset/images/blog-image.svg";
import BlogCard from "@/components/ui/BlogCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/textAnimation";

export default function Insights() {
    const articles = [
        {
            id: 1,
            date: "17-01-23",
            comments: 223,
            title: "Singapore Demo Day Spotlights Bangladeshi Turtle Startups",
            excerpt:
                "Inkam connects digital businesses with millions of consumers through a powerful agent network, bridging market gaps and driving inclusive digital growth across Bangladesh.",
            image: BlogImage,
        },
        {
            id: 2,
            date: "17-01-23",
            comments: 223,
            title: "Singapore Demo Day Spotlights Bangladeshi Turtle Startups",
            excerpt:
                "Inkam connects digital businesses with millions of consumers through a powerful agent network, bridging market gaps and driving inclusive digital growth across Bangladesh.",
            image: BlogImage,
        },
        {
            id: 3,
            date: "17-01-23",
            comments: 223,
            title: "Singapore Demo Day Spotlights Bangladeshi Turtle Startups",
            excerpt:
                "Inkam connects digital businesses with millions of consumers through a powerful agent network, bridging market gaps and driving inclusive digital growth across Bangladesh.",
            image: BlogImage,
        },
        {
            id: 4,
            date: "17-01-23",
            comments: 223,
            title: "Singapore Demo Day Spotlights Bangladeshi Turtle Startups",
            excerpt:
                "Inkam connects digital businesses with millions of consumers through a powerful agent network, bridging market gaps and driving inclusive digital growth across Bangladesh.",
            image: BlogImage,
        },
        {
            id: 5,
            date: "17-01-23",
            comments: 223,
            title: "Singapore Demo Day Spotlights Bangladeshi Turtle Startups",
            excerpt:
                "Inkam connects digital businesses with millions of consumers through a powerful agent network, bridging market gaps and driving inclusive digital growth across Bangladesh.",
            image: BlogImage,
        },
        {
            id: 6,
            date: "17-01-23",
            comments: 223,
            title: "Singapore Demo Day Spotlights Bangladeshi Turtle Startups",
            excerpt:
                "Inkam connects digital businesses with millions of consumers through a powerful agent network, bridging market gaps and driving inclusive digital growth across Bangladesh.",
            image: BlogImage,
        },
        {
            id: 7,
            date: "17-01-23",
            comments: 223,
            title: "Singapore Demo Day Spotlights Bangladeshi Turtle Startups",
            excerpt:
                "Inkam connects digital businesses with millions of consumers through a powerful agent network, bridging market gaps and driving inclusive digital growth across Bangladesh.",
            image: BlogImage,
        },
        {
            id: 8,
            date: "17-01-23",
            comments: 223,
            title: "Singapore Demo Day Spotlights Bangladeshi Turtle Startups",
            excerpt:
                "Inkam connects digital businesses with millions of consumers through a powerful agent network, bridging market gaps and driving inclusive digital growth across Bangladesh.",
            image: BlogImage,
        },
        {
            id: 9,
            date: "17-01-23",
            comments: 223,
            title: "Singapore Demo Day Spotlights Bangladeshi Turtle Startups",
            excerpt:
                "Inkam connects digital businesses with millions of consumers through a powerful agent network, bridging market gaps and driving inclusive digital growth across Bangladesh.",
            image: BlogImage,
        },
    ];

    // highlight logic
    const [highlight, setHighlight] = useState(articles[2]);

    useEffect(() => {
        const random = Math.floor(Math.random() * articles.length);
        setHighlight(articles[random]);
    }, []);

    return (
        <div className="w-full py-15 md:py-25">
            <div className="max-w-7xl mx-4 md:mx-auto">
                {/* ------------------- TOP TITLE ------------------- */}
                <ScrollReveal>
                    <div className="space-y-2 md:space-y-7">
                        <div className="flex text-white justify-start items-center gap-2 md:gap-4">
                            <p className="title-text text-sm md:text-xl">INSIGHTS</p>
                            <div className="mobile-line">
                                <svg
                                    className="title-line-right"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="167"
                                    height="2"
                                    viewBox="0 0 167 2"
                                    fill="none"
                                >
                                    <path
                                        d="M1 1H166"
                                        stroke="url(#paint0_linear_2239_2159)"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_2239_2159"
                                            x1="-3.99979"
                                            y1="0.49994"
                                            x2="8.92156"
                                            y2="45.5518"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#FF8800" />
                                            <stop offset="0.981629" stopColor="#0F0E11" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="flex text-white justify-between items-end z-10 text-left">
                            <TextAnimation>
                                <h2 className="text-3xl leading-11 font-medium md:text-[60px] md:leading-18 w-full">
                                    Press Releases,<br />Announcements, and Insights
                                </h2>
                            </TextAnimation>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ------------------- HIGHLIGHT SECTION ------------------- */}
                <div
                    className="w-full mt-12 h-[572px] rounded-2xl relative bg-cover bg-center  items-end justify-center hidden md:flex"
                    style={{ backgroundImage: `url(${highlight.image.src})` }}
                >
                    <div className="bg-[#201F22] max-w-[950px] -mb-15 py-5 px-6 rounded-xl">
                        {/* META */}
                        <div className="flex items-center gap-4 text-gray-300 text-base mb-3">
                            <div className="flex items-center gap-2">
                                {/* calendar icon */}
                                <svg width="20" height="20" fill="none">
                                    <path
                                        d="M9.16666 10.8335H13.3333M6.66666 10.8335H6.67415M10.8333 14.1668H6.66666M13.3333 14.1668H13.3258"
                                        stroke="#B7B7B8"
                                        strokeWidth="1.4"
                                    />
                                    <path
                                        d="M15 1.6665V3.33317M5 1.6665V3.33317"
                                        stroke="#B7B7B8"
                                        strokeWidth="1.5"
                                    />
                                    <path
                                        d="M2.08334 10.2027C2.08334 6.57161 2.08334 4.75607 3.12677 3.62803C4.1702 2.5 5.84958 2.5 9.20834 2.5H10.7917C14.1504 2.5 15.8298 2.5 16.8732 3.62803C17.9167 4.75607 17.9167 6.57161 17.9167 10.2027V10.6306C17.9167 14.2617 17.9167 16.0773 16.8732 17.2053C15.8298 18.3333 14.1504 18.3333 10.7917 18.3333H9.20834C5.84958 18.3333 4.1702 18.3333 3.12677 17.2053C2.08334 16.0773 2.08334 14.2617 2.08334 10.6306V10.2027Z"
                                        stroke="#B7B7B8"
                                        strokeWidth="1.4"
                                    />
                                    <path d="M2.5 6.6665H17.5" stroke="#B7B7B8" strokeWidth="1.4" />
                                </svg>
                                <span>{highlight.date}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                {/* comments icon */}
                                <svg width="20" height="20" fill="none">
                                    <path
                                        d="M6.66668 11.25H13.3333M6.66668 7.08333H10"
                                        stroke="#B7B7B8"
                                        strokeWidth="1.3"
                                    />
                                    <path
                                        d="M5.08235 15.8335C3.99892 15.7269 3.1873 15.4015 2.64298 14.8572C1.66667 13.8809 1.66667 12.3095 1.66667 9.16683V8.75016C1.66667 5.60747 1.66667 4.03612 2.64298 3.05981C3.61929 2.0835 5.19064 2.0835 8.33334 2.0835H11.6667C14.8094 2.0835 16.3807 2.0835 17.357 3.05981C18.3333 4.03612 18.3333 5.60747 18.3333 8.75016V9.16683C18.3333 12.3095 18.3333 13.8809 17.357 14.8572C16.3807 15.8335 14.8094 15.8335 11.6667 15.8335C11.1996 15.8439 10.8276 15.8794 10.4622 15.9627C9.46353 16.1926 8.53877 16.7036 7.62489 17.1492C6.32274 17.7842 5.67167 18.1016 5.26308 17.8044C4.48142 17.2223 5.24545 15.4184 5.41667 14.5835"
                                        stroke="#B7B7B8"
                                        strokeWidth="1.3"
                                    />
                                </svg>
                                <span>{highlight.comments}</span>
                            </div>
                        </div>

                        {/* TITLE */}
                        <h3 className="text-white text-[30px] font-semibold mb-3">
                            {highlight.title}
                        </h3>

                        {/* EXCERPT */}
                        <p className="text-gray-300 text-xl mb-6">{highlight.excerpt}</p>

                        {/* BUTTON */}
                        <button className="group relative inline-flex items-center gap-2 text-white font-medium transition-all overflow-hidden">
                            <span className="relative">
                                Read Full Journal
                                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
                            </span>

                            <svg
                                width="20"
                                height="20"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="-translate-x-1 transition-all duration-500 group-hover:translate-x-0"
                            >
                                <path
                                    d="M7 17L17 7M17 7H7M17 7V17"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* ------------------- GRID SECTION ------------------- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pt-12 md:pt-28">
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
