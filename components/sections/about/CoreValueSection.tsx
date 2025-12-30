import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/textAnimation";
import { Handshake } from "lucide-react";
// import coreValue from "../../../assets/images/about/core-value.png";

export default function CoreValuesSection() {
  const values = [
    {
      number: "01",
      title: "Bridge the Market Gap",
      description:
        "We connect digital businesses to real customers nationwide, turning distribution barriers into growth.",
      // image: "",  
    },
    {
      number: "02",
      title: "Empower Entrepreneurs",
      description:
        "We help thousands of agents earn sustainably through digital work and opportunity.",
    },
    {
      number: "03",
      title: "Trust & Fair Rewards",
      description:
        "Transparent transactions and fair commissions so everyone wins—business, agent, and customer.",
    },
    {
      number: "04",
      title: "Data-Driven Growth",
      description:
        "We use insights to generate better leads, smarter targeting, and measurable ROI.",
    },
    {
      number: "05",
      title: "Efficiency by Design",
      description:
        "Fast, seamless delivery and simple workflows that make selling and referrals effortless.",
    },
    {
      number: "06",
      title: "Partnership First",
      description:
        "We build long-term relationships with businesses to scale into new markets, together.",
    },
  ];

  return (
    <section className="w-full py-15 md:py-25">
      <div className="max-w-7xl mx-4 md:mx-auto">
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
              <p className="title-text text-sm md:text-xl">CORE VALUES</p>
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
              Values Driving Our Mission
            </h2>
          </TextAnimation>
        </div>
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-4 md:pt-13 gap-4 md:gap-8">
          {values.map((value, index) => (
            <div
              key={value.number}
              className="relative bg-[#201F22] flex flex-col gap-12 rounded-xl md:rounded-2xl p-4 md:p-8"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-lg md:rounded-xl flex items-center justify-center mb-2 md:mb-6">
                <Handshake className="w-7 h-7 md:w-8 md:h-8 text-orange-500" />
              </div>

              <div>
                {/* Number and Title */}
                <div className="mb-2 md:mb-4">
                  <h3 className="text-xl md:text-2xl font-medium text-white">
                    <span className="text-(--orange)">{value.number}.</span>{" "}
                    {value.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {value.description}
                </p>
              </div>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
