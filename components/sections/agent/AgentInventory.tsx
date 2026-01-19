import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/textAnimation";
import agentImg2 from "@/asset/images/agentImg2.png";
import React from "react";
import Image from "next/image";

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
    <section className="w-full mx-auto flex items-center justify-center py-15 md:py-25">
      <div className="max-w-7xl mx-3 md:mx-auto">
        <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
          {/* Image Section */}
          <div className="relative w-full lg:w-1/2">
            <div className="rounded-lg md:rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={agentImg2}
                alt="Agent Inventory"
                className="w-full h-74 md:h-auto object-cover"
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
                    <p className="title-text text-sm md:text-xl uppercase">Inventory</p>
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
                <h1 className="text-3xl font-semibold lg:text-6xl leading-[1.2] mb-4 md:mb-8 text-white">
                  What You Can Sell
                </h1>
              </TextAnimation>
            </div>

            {/* Description */}
            <TextAnimation delay={0.2}>
              <p className="mt-2 md:mt-8 text-base text-(--grey)">
                We have partnered with the biggest brands to give you a diverse portfolio. You can earn commissions across multiple categories
              </p>
            </TextAnimation>

            {/* Categories List */}
            <div className="space-y-4 md:pt-4">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="flex items-center gap-2 md:gap-4 group cursor-pointer transition-all duration-300 hover:translate-x-2"
                >
                  <div className="shrink-0 p-2 bg-[#ffffff0d] rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M6.45902 12.4068C6.42188 12.4068 6.38515 12.3991 6.35113 12.3842C6.3171 12.3693 6.28653 12.3476 6.26132 12.3203L0.930904 6.5543C0.89537 6.51586 0.871813 6.4679 0.863116 6.41628C0.85442 6.36466 0.860961 6.31162 0.881939 6.26366C0.902917 6.2157 0.937422 6.17489 0.98123 6.14624C1.02504 6.11758 1.07625 6.10232 1.1286 6.10232H3.69437C3.73289 6.10232 3.77097 6.11059 3.80602 6.12656C3.84108 6.14254 3.8723 6.16584 3.89758 6.19491L5.67903 8.2444C5.87156 7.83285 6.24425 7.14761 6.89827 6.31261C7.86513 5.07819 9.66354 3.26274 12.7404 1.62388C12.7999 1.59221 12.8691 1.58399 12.9343 1.60084C12.9995 1.6177 13.0561 1.6584 13.0928 1.71491C13.1295 1.77142 13.1436 1.83964 13.1325 1.90608C13.1213 1.97253 13.0857 2.03238 13.0325 2.07382C13.0208 2.083 11.8345 3.01723 10.4691 4.72843C9.21258 6.30316 7.54222 8.87809 6.72028 12.2023C6.70584 12.2607 6.67226 12.3126 6.62489 12.3497C6.57752 12.3867 6.5191 12.4069 6.45894 12.4069L6.45902 12.4068Z" fill="#FF8800" />
                    </svg>
                  </div>
                  <span className="text-base md:text-xl group-hover:text-(--orange) transition-colors duration-300">
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
