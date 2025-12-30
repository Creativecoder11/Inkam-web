"use client";
import React, { useState, useEffect, useRef } from "react";
import "./AboutTimline.css";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/textAnimation";

interface TimelineItem {
  year: string;
  img: string;
  title: string;
  description?: string; // Made optional to match page.tsx data
}

interface CircularCarouselProps {
  slides: TimelineItem[];
  autoplay: number;
  speed: number;
}

const CircularCarousel: React.FC<CircularCarouselProps> = ({
  slides,
  autoplay,
  speed,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [angle, setAngle] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const step: number = -360 / slides.length;

  useEffect(() => {
    if (!isHovered) {
      autoplayRef.current = setInterval(() => {
        handleNext();
      }, autoplay);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isHovered, activeIndex, autoplay]);

  const handleNext = (): void => {
    const newIndex = (activeIndex + 1) % slides.length;
    setActiveIndex(newIndex);
    rotateCarousel(newIndex);
  };

  const handlePrev = (): void => {
    const newIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
    rotateCarousel(newIndex);
  };

  const handleDotClick = (index: number): void => {
    setActiveIndex(index);
    rotateCarousel(index);
  };

  const rotateCarousel = (newIndex: number): void => {
    const diff = newIndex - activeIndex;
    const half = slides.length / 2;

    let inc: number;
    if (Math.abs(diff) <= half) {
      inc = diff;
    } else if (Math.abs(diff + slides.length) <= half) {
      inc = diff + slides.length;
    } else {
      inc = diff - slides.length;
    }

    setAngle((prev) => prev + step * inc);
  };

  return (
    <div className="max-w-7xl mx-auto pt-25">
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
            Our Multi-Year Plan <br /> for the Digital Ecosystem
          </h2>
        </TextAnimation>
      </div>
      <div
        className="carousel-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="slides-container">
          <div className="slides-wrapper">
            {slides.map((item, index) => (
              <div
                key={index}
                className={`slide ${index === activeIndex ? "active" : ""}`}
              >
                <div className="slide-content">
                  <div className="orbit orbit-1"></div>
                  <div className="slide-text font-medium text-xl">
                    {item.title}
                  </div>
                  {item.description && (
                    <div className="slide-text text-(--grey) text-sm">
                      {item.description}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div
            className="pagination"
            style={{
              transform: `translate(-50%, -50%) rotate(${angle}deg)`,
              transitionDuration: `${speed}ms`,
              ["--carousel-speed" as any]: `${speed}ms`,
            }}
          >
            {slides.map((item, index) => (
              <div
                key={index}
                className={`dot-item ${index === activeIndex ? "active" : ""}`}
                style={{
                  transform: `rotate(${(360 / slides.length) * index}deg)`,
                }}
              >
                <div className="dot" onClick={() => handleDotClick(index)}>
                  <span className="dot-circle"></span>
                  <span className="dot-year">{item.year}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="nav-button nav-next" onClick={handleNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              className="next-btn"
            >
              <path
                d="M15.5556 5.8335L23.3334 14.0002M23.3334 14.0002L15.5556 22.1668M23.3334 14.0002L4.66675 14.0002"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="nav-button nav-prev" onClick={handlePrev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              className="prev-btn"
            >
              <path
                d="M12.444 22.1668L4.66626 14.0002M4.66626 14.0002L12.444 5.8335M4.66626 14.0002L23.3329 14.0002"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularCarousel;
