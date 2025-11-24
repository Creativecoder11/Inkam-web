"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FeatureItem {
  number: string;
  title: string;
  description: string;
  position: "top" | "right" | "bottom" | "left";
}

const features: FeatureItem[] = [
  {
    number: "01",
    title: "Nationwide Reach",
    description:
      "Expand your business across Bangladesh with 19,000+ agents ensuring full coverage.",
    position: "top",
  },
  {
    number: "02",
    title: "Cost-Effective Growth",
    description:
      "Cut distribution costs and boost sales through data-driven, efficient strategies.",
    position: "right",
  },
  {
    number: "03",
    title: "Seamless Integration",
    description:
      "Connect effortlessly with our platform to manage products, leads, and performance.",
    position: "bottom",
  },
  {
    number: "04",
    title: "Proven Results",
    description:
      "Trusted by 3,000+ businesses achieving faster, smarter, and sustainable growth.",
    position: "left",
  },
];

const ChooseUs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const paths = Array.from(
        containerRef.current?.querySelectorAll(".arc-path") || []
      ) as SVGPathElement[];

      // PREP: Set initial strokeDash
      const lengths = paths.map((path) => {
        const len = path.getTotalLength();
        path.style.strokeDasharray = `${len}`;
        path.style.strokeDashoffset = `${len}`;
        return len;
      });

      // SCROLL TRIGGER
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress;

          const activate = (index: number, start: number) => {
            const card = cardsRef.current[index];
            if (!card) return;

            // Define progress points for each activation stage
            const numberReady = p >= start;
            const dotReady = p >= start + 0.03; // DOT appears after number
            const arcReady = p >= start + 0.06; // ARC starts after dot

            card.classList.toggle("active-number", numberReady);
            card.classList.toggle("active-dot", dotReady);
            card.classList.toggle("active-arc", arcReady);

            // Arc drawing: Calculate progress between 'start' and 'start + 0.25'
            const progressRange = 0.25;
            const progress = gsap.utils.clamp(
              0,
              1,
              (p - start) / progressRange
            );

            gsap.to(paths[index], {
              strokeDashoffset: lengths[index] * (1 - progress),
              duration: 0, // This is essential for scrubbing
            });
          };

          // Feature activation sequence
          activate(0, 0.0); // Feature 1: 0% to 25% of scroll
          activate(1, 0.25); // Feature 2: 25% to 50%
          activate(2, 0.5); // Feature 3: 50% to 75%
          activate(3, 0.75); // Feature 4: 75% to 100%
        },
      });

      // SOLUTION: Call refresh() after mount to stabilize layout for pinning
      // Use a timeout to ensure all styles/elements are fully rendered
      const refreshTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
        // console.log("ScrollTrigger refreshed for pin stability.");
      }, 50);

      return () => {
        ctx.revert();
        clearTimeout(refreshTimeout);
      };
    }, containerRef);

    // Cleanup for GSAP context
    return () => ctx.revert();
  }, []);

  // Position map for easier layout handling
  const positionStyles: Record<FeatureItem["position"], string> = {
    top: "bottom-70 left-1/2 -translate-x-1/2", // Increased bottom-70 to bottom-[280px] to make room for the SVG arc
    right: "-right-6 top-1/2 -translate-y-1/2", // Adjusted right to accommodate card and arc
    bottom: "top-70 left-1/2 -translate-x-1/2", // Increased top-70 to top-[280px]
    left: "-left-6 top-1/2 -translate-y-1/2", // Adjusted left to accommodate card and arc
  };

  // SVG Transform Map
  // Defines the rotation and relative translation needed for the SVG arc
  const svgTransformMap: Record<FeatureItem["position"], string> = {
    // Rotation + move the SVG arc so its start/end point lands near the dot/center
    top: "translate(125%, 26%) rotate(0deg)", // SVG arc starts at card-right and goes down
    right: "translate(60%, 58%) rotate(90deg)", // SVG arc starts at card-bottom and goes left
    bottom: "translate(-6%, 26%) rotate(180deg)", // SVG arc starts at card-left and goes up
    left: "translate(58%, -6%) rotate(270deg)", // SVG arc starts at card-top and goes right
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-black"
    >
      <div className="relative w-full max-w-6xl">
        {/* CENTRAL LOGO */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="p-16 rounded-full bg-linear-to-b from-[rgba(14,14,20,0.5)] to-[rgba(31,31,37,0.5)]">
            <div className="wave wave-blue"></div>
            <div className="wave wave-orange"></div>
            <div className="px-15 py-20 bg-linear-to-b from-[#0E0E14] to-[#1F1F25] border border-[#343336] rounded-full">
              <svg
                width="120"
                height="80"
                viewBox="0 0 120 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M108.905 0H11.0616C1.50304 0 -3.53967 11.8927 2.85779 19.3748L51.7795 76.1605C56.1449 81.2798 63.8218 81.2798 68.1871 76.1605L117.109 19.3748C123.582 11.8927 118.464 0 108.905 0Z"
                  fill="#FF8800"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* FEATURE CARDS */}
        {features.map((f, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className={`group absolute z-20 ${positionStyles[f.position]}`}
          >
            {/* CARD (w-80) */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 w-80 border border-gray-800">
              <div className="flex items-center gap-3 mb-3">
                {/* NUMBER BUBBLE */}
                <div
                  className="
                    w-10 h-10 rounded-full flex items-center justify-center font-bold
                    bg-gray-700 text-white
                    group-[.active-number]:bg-[#ff8c00]
                    group-[.active-number]:text-black
                    group-[.active-number]:scale-110
                    transition-all duration-500
                  "
                >
                  {f.number}
                </div>

                <h3 className="text-white font-semibold text-lg">{f.title}</h3>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                {f.description}
              </p>
            </div>

            {/* DOT (Used as the connecting point between card and arc) */}
            <div
              className="
                absolute w-4 h-4 rounded-full
                bg-[#FFFFFF80]
                group-[.active-dot]:bg-[#FFA033]
                z-30
                transition-all duration-300
              "
              style={{
                /* 1 — FEATURE TOP CARD → dot at right center */
                ...(f.position === "top" && {
                  top: "50%",
                  right: "-20px", // 20px outside the card
                  transform: "translateY(-50%)",
                }),

                /* 2 — FEATURE RIGHT CARD → dot at bottom center */
                ...(f.position === "right" && {
                  bottom: "-20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }),

                /* 3 — FEATURE BOTTOM CARD → dot at left center */
                ...(f.position === "bottom" && {
                  top: "50%",
                  left: "-20px",
                  transform: "translateY(-50%)",
                }),

                /* 4 — FEATURE LEFT CARD → dot at top center */
                ...(f.position === "left" && {
                  top: "-20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }),
              }}
            />

            {/* SVG ARC CONTAINER */}
            <div
              className="
                absolute pointer-events-none
                transition-opacity duration-500
                opacity-0 
                group-[.active-arc]:opacity-100
              "
              style={{
                top: 0,
                left: 0,
                transformOrigin: "0 0", // Set origin to top-left of the div
                transform: svgTransformMap[f.position], // Use map for clean transforms
              }}
            >
              <svg
                width="270"
                height="281"
                viewBox="0 0 270 281"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* The Path definition remains the same */}
                <path
                  d="M263.22 280.28C263.513 280.573 263.987 280.573 264.28 280.28L269.053 275.507C269.346 275.214 269.346 274.74 269.053 274.447C268.76 274.154 268.286 274.154 267.993 274.447L263.75 278.689L259.507 274.447C259.214 274.154 258.74 274.154 258.447 274.447C258.154 274.74 258.154 275.214 258.447 275.507L263.22 280.28ZM243.73 172.981L243.032 173.254L243.73 172.981ZM186.719 82.4672L186.173 82.9817L186.719 82.4672ZM101.396 21.9876L101.094 22.6742L101.396 21.9876ZM0.75 0C0.335786 0 0 0.335786 0 0.75C0 1.16421 0.335786 1.5 0.75 1.5V0.75V0ZM263.75 279.75H264.5C264.5 243.019 257.68 206.646 244.429 172.709L243.73 172.981L243.032 173.254C256.214 207.016 263 243.204 263 279.75H263.75ZM243.73 172.981L244.429 172.709C231.178 138.771 211.754 107.932 187.265 81.9528L186.719 82.4672L186.173 82.9817C210.528 108.818 229.849 139.492 243.032 173.254L243.73 172.981ZM186.719 82.4672L187.265 81.9528C162.776 55.9737 133.7 35.3634 101.697 21.301L101.396 21.9876L101.094 22.6742C132.909 36.654 161.819 57.1457 186.173 82.9817L186.719 82.4672ZM101.396 21.9876L101.697 21.301C69.6946 7.23852 35.3925 0 0.75 0V0.75V1.5C35.1828 1.5 69.2796 8.69457 101.094 22.6742L101.396 21.9876Z"
                  className={`arc-path arc-${i} transition-all duration-300 group-[.active-arc]:stroke-[#FFA033]`}
                  stroke="#FFFFFF80"
                  strokeOpacity="0.5"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-sm">
        Scroll to see animation →
      </div>
    </div>
  );
};

export default ChooseUs;
