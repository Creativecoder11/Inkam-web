'use client';

import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/textAnimation";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
    {
        year: "2022",
        title: "Foundation",
        desc: "Research, planning, and ecosystem architecture for long-term growth.",
    },
    {
        year: "2023",
        title: "Infrastructure",
        desc: "Platform development, tooling, and internal systems launch.",
    },
    {
        year: "2024",
        title: "Expansion",
        desc: "Public rollout, partnerships, and user-driven optimization.",
    },
    {
        year: "2025",
        title: "Ecosystem",
        desc: "Automation, AI workflows, and global scaling.",
    },
];

const MobileAboutTimeline = () => {

    const timelineRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray<HTMLElement>(".timeline-item");
            const line = document.querySelector(".timeline-line");

            // Animate line color on scroll
            gsap.fromTo(
                line,
                { backgroundColor: "#FFFFFF33" },
                {
                    backgroundColor: "#FF8800",
                    scrollTrigger: {
                        trigger: timelineRef.current,
                        start: "top 70%",
                        end: "bottom 70%",
                        scrub: true,
                    },
                }
            );

            // Items animation
            items.forEach((item) => {
                gsap.fromTo(
                    item,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            });
        }, timelineRef);

        return () => ctx.revert();
    }, []);



    return (
        <div className="max-w-7xl mx-auto pt-15 pb-25">
            <div className="text-white flex flex-col gap-3 md:gap-6">
                {/* Heading Text */}
                <ScrollReveal>
                    <div className="flex justify-center items-center gap-4">
                        <div className="mobile-line">
                            <svg
                                className="title-line-left"
                                xmlns="http://www.w3.org/2000/svg"
                                width="167"
                                height="2"
                                viewBox="0 0 167 2"
                                fill="none"
                            >
                                <path
                                    d="M166 1H1"
                                    stroke="url(#paint0_linear_2239_2185)"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_2239_2185"
                                        x1="171"
                                        y1="0.49994"
                                        x2="158.078"
                                        y2="45.5518"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#FF8800" />
                                        <stop offset="0.981629" stopColor="#0F0E11" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <p className="title-text text-sm md:text-xl">TIMELINE</p>
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
                </ScrollReveal>
                <TextAnimation>
                    <h2 className="text-3xl font-semibold lg:text-6xl leading-[1.2] mb-4 md:mb-12 text-white text-center">
                        Our Multi-Year Plan for the Digital Ecosystem
                    </h2>
                </TextAnimation>
            </div>

            {/* Time Line */}

            <div ref={timelineRef} className="relative mt-16">
                {/* Vertical Line */}
                <div className="absolute left-[50%] top-0 h-full w-0.5 bg-[#FFFFFF33] timeline-line" />

                <div className="flex flex-col gap-16">
                    {timelineData.map((item, index) => (
                        <div
                            key={index}
                            className="timeline-item grid grid-cols-[1fr_40px_1fr] items-start"
                        >
                            {/* Year */}
                            <div className="text-right pr-4">
                                <p className="text-[#FF8800] font-semibold text-lg">
                                    {item.year}
                                </p>
                            </div>

                            {/* Dot */}
                            <div className="flex justify-center">
                                <span className="w-3 h-3 rounded-full bg-[#FF8800] timeline-dot" />
                            </div>

                            {/* Content */}
                            <div className="pl-4">
                                <h3 className="text-white text-lg font-semibold mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MobileAboutTimeline;