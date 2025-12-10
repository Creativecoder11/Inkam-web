import BenefitsCharts from "@/components/ui/benefits-charts";
import ExpandIcon from "@/public/asset/icons/benefits-icon-1.svg";
import SaveTimeIcon from "@/public/asset/icons/benefits-icon-2.svg";
import GrowthIcon from "@/public/asset/icons/benefits-icon-3.svg";
import Image from "next/image";

export default function Benefits() {
  const features = [
    {
      icon: <Image src={ExpandIcon} alt="icon" width={24} height={24} />,
      title: "Expand Your Reach",
      description:
        "Reach new cities, towns, and rural markets through Inkam’s nationwide agent network covering almost all Bangladesh.",
    },
    {
      icon: <Image src={SaveTimeIcon} alt="icon" width={24} height={24} />,
      title: "Save Time & Cost",
      description:
        "Reduce campaign planning overhead and marketing spend using a coordinated, technology-driven, distribution network that scales.",
    },
    {
      icon: <Image src={GrowthIcon} alt="icon" width={24} height={24} />,
      title: "Drive Real Growth",
      description:
        "Use data from every agent interaction to improve conversions, scale winning campaigns, and grow faster sustainably.",
    },
  ];
  return (
    <div className="max-w-7xl py-25 mx-4 md:mx-auto space-y-6 md:space-y-12">
      <div className="text-white flex flex-col gap-3 md:gap-6">
        {/* Heading Text */}
        <div className="flex justify-center items-center gap-2 md:gap-4">
          <div className="mobile-line">
            <svg
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
          <p className="text-sm md:text-xl">BENEFITS</p>
          <div className="mobile-line">
            <svg
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
        <h2 className="text-3xl leading-11 font-medium lg:text-6xl md:leading-18 text-center">
          Together, We Build <br /> the Future of Distribution
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-5">
        <div className="w-full md:w-1/2">
          <BenefitsCharts />
        </div>
        <div className="w-full md:w-1/2">
          <div className="mx-auto space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#161518] p-4 md:p-6 rounded-[20px] space-y-4">
                <div className="flex items-center gap-3 md:gap-6">
                  <div className="bg-white/5 p-3 rounded-xl flex items-center justify-center">
                    <Image src={feature.icon.props.src} alt={feature.title} className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                  <h2 className="text-lg md:text-2xl font-medium text-white">{feature.title}</h2>
                </div>

                <hr className="border-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.30)_0%,rgba(39,38,41,0.30)_100%)]" />

                <p className="text-(--grey) text-base md:text-lg leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
