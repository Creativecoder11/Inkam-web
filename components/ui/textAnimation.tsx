"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

type TextAnimationProps = {
  children: React.ReactElement | React.ReactElement[];
  animateOnScroll?: boolean;
  delay?: number;
};

export default function TextAnimation({
  children,
  animateOnScroll = true,
  delay = 0,
}: TextAnimationProps) {
  const containerRef = useRef<HTMLDivElement | HTMLElement | null>(null);
  const splitRefs = useRef<SplitText[]>([]);
  const linesRef = useRef<HTMLElement[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // reset
      splitRefs.current.forEach((split) => split.revert());
      splitRefs.current = [];
      linesRef.current = [];

      const elements = containerRef.current.hasAttribute("data-copy-wrapper")
        ? Array.from(containerRef.current.children)
        : [containerRef.current];

      elements.forEach((el) => {
        const split = new SplitText(el as HTMLElement, {
          type: "lines",
          linesClass: "line",
        });

        splitRefs.current.push(split);
        linesRef.current.push(...(split.lines as HTMLElement[]));

        // handle text-indent correctly
        const style = window.getComputedStyle(el as HTMLElement);
        if (style.textIndent !== "0px" && split.lines.length) {
          split.lines[0].style.paddingLeft = style.textIndent;
          (el as HTMLElement).style.textIndent = "0";
        }
      });

      gsap.set(linesRef.current, { yPercent: 100 });

      const tween = {
        yPercent: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1,
        delay,
      };

      if (animateOnScroll) {
        gsap.to(linesRef.current, {
          ...tween,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
          },
        });
      } else {
        gsap.to(linesRef.current, tween);
      }

      return () => {
        splitRefs.current.forEach((split) => split.revert());
      };
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay] }
  );

  // single child → clone with ref
  if (React.Children.count(children) === 1 && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ref: containerRef,
    });
  }

  // multiple children wrapper
  return (
    <div ref={containerRef} data-copy-wrapper>
      {children}
    </div>
  );
}
