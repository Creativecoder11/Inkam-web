'use client';

import { useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import TextAnimation from "./textAnimation";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

type Feature = {
    id: number;
    title: string;
    description: string;
};

const MobileTimeline = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const features: Feature[] = [
        {
            id: 1,
            title: 'Nationwide Reach',
            description:
                'Reach customers nationwide through 19,000+ trained agents active across Bangladesh today.',
        },
        {
            id: 2,
            title: 'Cost-Effective Growth',
            description:
                'Lower acquisition costs and boost revenue with performance-based, data-led distribution.',
        },
        {
            id: 3,
            title: 'Seamless Integration',
            description:
                'Easily integrate with our platform to manage products, agents, and performance.',
        },
        {
            id: 4,
            title: 'Proven Results',
            description:
                'Trusted by businesses achieving faster, sustainable growth through campaigns.',
        },
    ];

    useEffect(() => {
        if (window.innerWidth >= 768) return;

        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>('.feature-card').forEach((card, i) => {
                const badge = card.querySelector('.feature-badge');
                const divider = card.querySelector('.feature-divider');

                if (!badge || !divider) return;

                gsap.fromTo(
                    card,
                    { opacity: 0.9 },
                    {
                        opacity: 1,
                        delay: i * 0.15,
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 80%',
                            end: 'top 60%',
                            toggleActions: 'play reverse play reverse',

                            onEnter: () => {
                                gsap.to(badge, {
                                    backgroundColor: '#FF8800',
                                    duration: 0.45,
                                    ease: 'power2.out',
                                });

                                gsap.to(divider, {
                                    backgroundImage:
                                        'linear-gradient(91.21deg, #FF8800 -4%, #0F0E11 95.04%)',
                                    duration: 0.45,
                                    ease: 'power2.out',
                                });
                            },

                            onLeaveBack: () => {
                                gsap.to(badge, {
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    duration: 0.35,
                                    ease: 'power2.inOut',
                                });

                                gsap.to(divider, {
                                    backgroundImage:
                                        'linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(39,38,41,0.3) 100%)',
                                    duration: 0.35,
                                    ease: 'power2.inOut',
                                });
                            },
                        },
                    }
                );
            });
        });

        return () => ctx.revert();
    }, []);


    return (
        <div className="w-full py-10 md:py-25">
            <div className="max-w-7xl mx-4 md:mx-auto flex flex-col gap-8 md:gap-13">
                <div className="text-white flex flex-col gap-3 md:gap-6">
                    {/* Heading Text */}
                    <ScrollReveal>
                        <div className="flex justify-center items-center gap-2 md:gap-4">
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
                            <p className="title-text text-sm md:text-xl">WHY CHOOSE US</p>
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
                        <h2 className="text-3xl leading-11 font-medium lg:text-6xl md:leading-18 text-center">
                            Built for Businesses That Want to Grow Smarter
                        </h2>
                    </TextAnimation>
                </div>
                <div ref={containerRef} className="feature-wrapper flex flex-col space-y-5">
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            className="feature-card p-4 rounded-lg bg-[#1A1A1A]"
                        >
                            {/* Top */}
                            <div className="flex items-center gap-4">
                                <span className="feature-badge text-[18px] font-semibold text-white bg-[#FFFFFF0D] px-3 py-2 rounded-full transition-colors">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <span className="text-[18px] font-semibold text-white">
                                    {feature.title}
                                </span>
                            </div>

                            {/* Divider */}
                            <div className="feature-divider my-3 h-px bg-linear-to-r from-[rgba(255,255,255,0.3)] to-[rgba(39,38,41,0.3)] transition-all" />

                            {/* Description */}
                            <p className="text-[15px] text-[#CFCFCF]">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default MobileTimeline;
