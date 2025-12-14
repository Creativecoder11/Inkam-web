// components/CircularCarousel.tsx
"use client";
import React, { useState, useEffect, useRef } from "react";

interface TimelineItem {
  year: string;
  image: string;
  text: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2012",
    image:
      "https://cdn.prod.website-files.com/6788e6c70fa2b23ccce907d3/6895a34d9342359e1f5d6b31_illustration2.avif",
    text: "Founded with a focus on simplifying property ownership in Dubai.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    year: "2014",
    image:
      "https://cdn.prod.website-files.com/6788e6c70fa2b23ccce907d3/6895a5d2fd74c2308c048a50_9a9b5baacc76ea6ec51d52d27ca306b3_illustration2%20%281%29.avif",
    text: "Legal advisory services added to help landlords win disputes and protect assets.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    year: "2016",
    image:
      "https://cdn.prod.website-files.com/6788e6c70fa2b23ccce907d3/6895a979f3bb1980b3d22932_illustration1%20(1).avif",
    text: "Expanded maintenance & vendor network to offer cost-effective solutions across Dubai.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    year: "2018",
    image:
      "https://cdn.prod.website-files.com/6788e6c70fa2b23ccce907d3/6895a34dcc869b2bc03ddc06_image%2014%20(3).png",
    text: "Full lease and payment automation introduced. Paperwork reduced. Transparency improved.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' since the 1500s,",
  },
  {
    year: "2020",
    image:
      "https://cdn.prod.website-files.com/6788e6c70fa2b23ccce907d3/6895a34db4137fe7cd4af318_image%2014%20(4).png",
    text: "Cross-border support enabled. Many clients manage properties from abroad— without visiting once.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    year: "2022",
    image:
      "https://cdn.prod.website-files.com/6788e6c70fa2b23ccce907d3/6895a34d21555200d75bfee4_image%2014%20(5).png",
    text: "Launched internal vendor bidding system: clients get top 5 real quotes every time.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.",
  },
  {
    year: "2025",
    image:
      "https://cdn.prod.website-files.com/6788e6c70fa2b23ccce907d3/6895a34d54e4ed7a1fd12f23_image%2014%20(6).png",
    text: "Introducing BSO Club App — a dedicated mobile platform that connects landlords, brokers,",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
];

const CircularCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [angle, setAngle] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const step: number = -360 / timelineData.length;
  const speed: number = 2000;

  useEffect(() => {
    if (!isHovered) {
      autoplayRef.current = setInterval(() => {
        handleNext();
      }, 3000);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isHovered, activeIndex]);

  const handleNext = (): void => {
    const newIndex = (activeIndex + 1) % timelineData.length;
    setActiveIndex(newIndex);
    rotateCarousel(newIndex);
  };

  const handlePrev = (): void => {
    const newIndex =
      activeIndex === 0 ? timelineData.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
    rotateCarousel(newIndex);
  };

  const handleDotClick = (index: number): void => {
    setActiveIndex(index);
    rotateCarousel(index);
  };

  const rotateCarousel = (newIndex: number): void => {
    const diff = newIndex - activeIndex;
    const half = timelineData.length / 2;

    let inc: number;
    if (Math.abs(diff) <= half) {
      inc = diff;
    } else if (Math.abs(diff + timelineData.length) <= half) {
      inc = diff + timelineData.length;
    } else {
      inc = diff - timelineData.length;
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
            {timelineData.map((item, index) => (
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
                  <div className="slide-text text-sm">{item.description}</div>
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
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`dot-item ${index === activeIndex ? "active" : ""}`}
                style={{
                  transform: `rotate(${
                    (360 / timelineData.length) * index
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
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
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
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularCarousel;
