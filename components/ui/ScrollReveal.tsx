"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollRevealProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    y?: number; // slide distance
    scale?: number; // initial scale
    stagger?: number; // stagger delay between child elements
};

export default function ScrollReveal({
    children,
    className,
    delay = 0,
    y = 50,
    scale = 0.95,
    stagger = 0.1,
}: ScrollRevealProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            const elements = el.querySelectorAll<HTMLElement>(".reveal, .title-text, .fade-in");

            // TEXT / ELEMENT FADE + SLIDE
            gsap.from(elements, {
                opacity: 0,
                y,
                scale,
                duration: 0.8,
                ease: "power4.out",
                delay,
                stagger,
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none none",
                    once: true,
                },
            });

            // SVG LINE DRAW RIGHT / LEFT (slower now)
            const lineElements = el.querySelectorAll<SVGPathElement>(
                ".title-line-right path, .title-line-left path"
            );

            lineElements.forEach((line, i) => {
                const length = line.getTotalLength();
                gsap.set(line, { strokeDasharray: length, strokeDashoffset: length, opacity: 1 });

                gsap.to(line, {
                    strokeDashoffset: 0,
                    duration: 2,           // slower (was 1)
                    ease: "power2.out",
                    delay: 0.3 + i * 0.2,  // slight delay per line
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none",
                        once: true,
                    },
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, [delay ?? 0, y ?? 50, scale ?? 0.95, stagger ?? 0.1]);

    return (
        <div ref={containerRef} className={className}>
            {children}
        </div>
    );
}
