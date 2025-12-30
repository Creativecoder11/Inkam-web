"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const splitRefs = useRef<SplitText[]>([]);
  const linesRef = useRef<HTMLElement[]>([]);

  const wrappedChildren = React.isValidElement(children)
    ? React.Children.map(children, (child) =>
        React.cloneElement(child, { ref: containerRef } as any)
      )
    : children;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clean up previous splits
    splitRefs.current.forEach((split) => split.revert());
    splitRefs.current = [];
    linesRef.current = [];

    // Determine which elements to split
    const elements = container.hasAttribute("data-copy-wrapper")
      ? Array.from(container.children)
      : [container];

    elements.forEach((el) => {
      const split = new SplitText(el as HTMLElement, {
        type: "lines",
        mask: "lines",
        linesClass: "line++",
        lineThreshold: 0.1,
      });

      splitRefs.current.push(split);
      linesRef.current.push(...(split.lines as HTMLElement[]));

      // Preserve text-indent for first line
      const style = window.getComputedStyle(el as HTMLElement);
      if (style.textIndent !== "0px" && split.lines.length) {
        (split.lines[0] as HTMLElement).style.paddingLeft = style.textIndent;
        (el as HTMLElement).style.textIndent = "0";
      }
    });

    // Set initial state like Copy.jsx
    gsap.set(linesRef.current, { y: "100%" });

    const animationProps = {
      y: "0%",
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      delay,
    };

    let ctx: gsap.Context | undefined;

    if (animateOnScroll) {
      ctx = gsap.context(() => {
        gsap.to(linesRef.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            once: true,
          },
        });
      }, container);
    } else {
      gsap.to(linesRef.current, animationProps);
    }

    return () => {
      ctx?.revert();
      splitRefs.current.forEach((split) => split.revert());
    };
  }, [animateOnScroll, delay]);

  if (React.Children.count(children) === 1 && React.isValidElement(children)) {
    return wrappedChildren;
  }

  return (
    <div ref={containerRef} data-copy-wrapper>
      {children}
    </div>
  );
}
