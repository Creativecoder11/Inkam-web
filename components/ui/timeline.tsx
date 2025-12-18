'use client';
import React, { useEffect, useRef, useState } from 'react';

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  position: 'top' | 'right' | 'bottom' | 'left';
}

const ScrollAnimatedFeatures: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCard, setActiveCard] = useState(0);

  const features: FeatureCard[] = [
    {
      id: 1,
      title: 'Nationwide Reach',
      description: 'Expand your business across Bangladesh with 19,000+ agents ensuring full coverage.',
      position: 'top'
    },
    {
      id: 2,
      title: 'Cost-Effective Growth',
      description: 'Cut distribution costs and boost sales through data-driven, efficient strategies.',
      position: 'right'
    },
    {
      id: 3,
      title: 'Seamless Integration',
      description: 'Connect effortlessly with our platform to manage products, leads, and performance.',
      position: 'bottom'
    },
    {
      id: 4,
      title: 'Proven Results',
      description: 'Trusted by 20+ businesses achieving faster, smarter, and sustainable growth.',
      position: 'left'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress within the section
      const sectionHeight = section.offsetHeight;
      const scrollStart = rect.top;
      const scrollEnd = rect.bottom - windowHeight;
      
      if (scrollStart <= 0 && scrollEnd >= 0) {
        // Section is in view and sticky
        const progress = Math.abs(scrollStart) / (sectionHeight - windowHeight);
        const clampedProgress = Math.max(0, Math.min(1, progress));
        setScrollProgress(clampedProgress);

        // Determine active card based on progress
        if (clampedProgress < 0.25) {
          setActiveCard(1);
        } else if (clampedProgress < 0.5) {
          setActiveCard(2);
        } else if (clampedProgress < 0.75) {
          setActiveCard(3);
        } else {
          setActiveCard(4);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getArrowPath = (from: number, progress: number) => {
    const totalProgress = scrollProgress * 5;
    const arrowProgress = Math.max(0, Math.min(1, (totalProgress - (from - 1)) * 1));

    if (from === 1) {
      // Top to Right
      const startX = 60;
      const startY = 14;
      const endX = 84;
      const endY = 38;
      const currentX = startX + (endX - startX) * arrowProgress;
      const currentY = startY + (endY - startY) * arrowProgress;
      return `M ${startX} ${startY} Q ${startX + 23} ${startY}, ${currentX} ${currentY}`;
    } else if (from === 2) {
      // Right to Bottom
      const startX = 84;
      const startY = 44;
      const endX = 66;
      const endY = 64;
      const currentX = startX + (endX - startX) * arrowProgress;
      const currentY = startY + (endY - startY) * arrowProgress;
      return `M ${startX} ${startY} Q ${startX}, ${startY + 16}, ${currentX} ${currentY}`;
    } else if (from === 3) {
      // Bottom to Left
      const startX = 35;
      const startY = 65;
      const endX = 17;
      const endY = 45;
      const currentX = startX + (endX - startX) * arrowProgress;
      const currentY = startY + (endY - startY) * arrowProgress;
      return `M ${startX} ${startY} Q ${startX - 16}, ${startY}, ${currentX} ${currentY}`;
    } else if (from === 4) {
      // Left to Top
      const startX = 17;
      const startY = 35;
      const endX = 40;
      const endY = 11;
      const currentX = startX + (endX - startX) * arrowProgress;
      const currentY = startY + (endY - startY) * arrowProgress;
      return `M ${startX} ${startY} Q ${startX}, ${startY - 20}, ${currentX} ${currentY}`;
    }
    return '';
  };

  return (
    <div className="">
      {/* Spacer before section */}
      <div className="" />
      
      {/* Main sticky section */}
      <div 
        ref={sectionRef}
        className="relative h-[400vh]"
      >
        <div className="sticky top-0  flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-7xl mx-auto px-4">
            {/* SVG for animated arrows */}
            <svg 
              className="inset-0  pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {/* Arrow 1 to 2 */}
              {activeCard >= 2 && (
                <path
                  d={getArrowPath(1, scrollProgress)}
                  stroke="#FF8C00"
                  strokeWidth="0.1"
                  fill="none"
                  strokeDasharray="0.3, 0.3"
                  className="transition-all duration-300"
                />
              )}
              
              {/* Arrow 2 to 3 */}
              {activeCard >= 3 && (
                <path
                  d={getArrowPath(2, scrollProgress)}
                  stroke="#FF8C00"
                  strokeWidth="0.1"
                  fill="none"
                  strokeDasharray="0.3, 0.3"
                  className="transition-all duration-300"
                />
              )}
              
              {/* Arrow 3 to 4 */}
              {activeCard >= 4 && (
                <path
                  d={getArrowPath(3, scrollProgress)}
                  stroke="#FF8C00"
                  strokeWidth="0.1"
                  fill="none"
                  strokeDasharray="0.3, 0.3"
                  className="transition-all duration-300"
                />
              )}

              {/* Arrow 3 to 4 */}
              {activeCard >= 4 && (
                <path
                  d={getArrowPath(4, scrollProgress)}
                  stroke="#FF8C00"
                  strokeWidth="0.1"
                  fill="none"
                  strokeDasharray="0.3, 0.3"
                  className="transition-all duration-300"
                />
              )}

              {/* Arrow endpoints (dots)
              {activeCard >= 2 && (
                <circle cx="85" cy="50" r="0.5" fill="#FF8C00" />
              )}
              {activeCard >= 3 && (
                <circle cx="50" cy="80" r="0.5" fill="#FF8C00" />
              )}
              {activeCard >= 4 && (
                <circle cx="15" cy="50" r="0.5" fill="#FF8C00" />
              )} */}
            </svg>

            {/* Center logo */}
            <div className="absolute top-125 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-40 h-40 rounded-full border-4 border-gray-800 bg-gray-900 flex items-center justify-center">
                <svg width="80" height="80" viewBox="0 0 100 100">
                  <path d="M 50 20 L 80 70 L 20 70 Z" fill="#FF8C00" />
                </svg>
              </div>
            </div>

            {/* Feature cards */}
            {features.map((feature, index) => {
              const isActive = activeCard >= feature.id;
              const positionClasses = {
                top: 'top-25 left-1/2 -translate-x-1/2',
                right: 'right-8 top-125 -translate-y-1/2',
                bottom: 'bottom-92 left-1/2 -translate-x-1/2',
                left: 'left-8 top-125 -translate-y-1/2'
              };

              return (
                <div
                  key={feature.id}
                  className={`absolute ${positionClasses[feature.position]} w-96 transition-all duration-700 ${
                    isActive ? 'opacity-100 scale-100' : 'opacity-30 scale-95'
                  }`}
                >
                  <div className={`bg-gray-800 rounded-2xl p-6 shadow-2xl border-2 transition-all duration-500 ${
                    isActive ? 'border-orange-500' : 'border-gray-700'
                  }`}>
                    <div className="flex items-start gap-4">
                      <div 
                        className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500 ${
                          isActive 
                            ? 'bg-orange-500 text-white scale-110' 
                            : 'bg-gray-700 text-gray-400'
                        }`}
                      >
                        {feature.id < 10 ? `0${feature.id}` : feature.id}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xl font-bold mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Progress indicator */}
            {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeCard >= step ? 'bg-orange-500 w-8' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Spacer after section */}
    </div>
  );
};

export default ScrollAnimatedFeatures;