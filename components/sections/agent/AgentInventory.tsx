import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/textAnimation";
import React from "react";

interface Category {
  id: number;
  name: string;
}

const AgentInventory: React.FC = () => {
  const categories: Category[] = [
    { id: 1, name: "Educational Courses" },
    { id: 2, name: "Financial Services" },
    { id: 3, name: "Insurance Services" },
    { id: 4, name: "Healthcare" },
    { id: 5, name: "Banking" },
    { id: 6, name: "Physical Goods" },
  ];

  return (
    <section className="flex items-center justify-center py-15 md:py-25">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&q=80"
                alt="Pharmacy inventory"
                className="w-full h-[760px] object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="text-white space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <ScrollReveal>
                  <div className="flex justify-start text-white items-center gap-2 md:gap-4">
                    <p className="title-text text-sm md:text-xl">OUR STORY</p>
                    <div className="mobile-line">
                      {/* svg omitted for brevity */}
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
              </div>
              <TextAnimation>
                <h1 className="text-3xl font-semibold lg:text-6xl leading-[1.2] mb-4 md:mb-12 text-white">
                  Driving Growth Through Smarter Digital Distribution
                </h1>
              </TextAnimation>
            </div>

            {/* Description */}
            <TextAnimation delay={0.2}>
              <p className="mt-4 md:mt-8 text-base text-(--grey)">
                Inkam empowers digital businesses with nationwide distribution,
                enabling greater reach, higher sales, and seamless access to
                millions of untapped customers across Bangladesh.
              </p>
            </TextAnimation>

            {/* Categories List */}
            <div className="space-y-4 pt-4">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="flex items-center gap-4 group cursor-pointer transition-all duration-300 hover:translate-x-2"
                >
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-(--orange)"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-medium group-hover:text-(--orange) transition-colors duration-300">
                    {category.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentInventory;
