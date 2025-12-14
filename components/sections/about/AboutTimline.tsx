// components/CircularCarousel.tsx
"use client";
import React, { useState, useEffect, useRef } from "react";

interface TimelineItem {
  year: string;
  img: string;
  text: string;
  description?: string; // Made optional to match page.tsx data
}

interface CircularCarouselProps {
  slides: TimelineItem[];
  autoplay: number;
  speed: number;
}

const CircularCarousel: React.FC<CircularCarouselProps> = ({ slides, autoplay, speed }) => {
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
    const newIndex =
      activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
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
    <div className="text-white max-w-7xl mx-auto flex items-center justify-center p-8">
      <div
        className="carousel-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="overlay"></div>
        {/* <div className="orbit orbit-2"></div> */}

        <div className="slides-container">
          <div className="slides-wrapper">
            {slides.map((item, index) => (
              <div
                key={index}
                className={`slide ${index === activeIndex ? "active" : ""}`}
              >
                <div className="slide-content">
                  <div className="orbit orbit-1"></div>
                  <div className="slide-year text-6xl text-(--orange)">
                    {item.year}
                  </div>
                  <div className="slide-text text-xl">{item.text}</div>
                  {item.description && (
                    <div className="slide-text text-sm">{item.description}</div>
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
            }}
          >
            {slides.map((item, index) => (
              <div
                key={index}
                className={`dot-item ${index === activeIndex ? "active" : ""}`}
                style={{
                  transform: `rotate(${
                    (360 / slides.length) * index
                  }deg)`,
                }}
              >
                <div className="dot" onClick={() => handleDotClick(index)}>
                  {item.year}
                  <span className="dot-circle"></span>
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
