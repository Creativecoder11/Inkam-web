import { Handshake } from "lucide-react";
// import coreValue from "../../../public/assets/images/about/core-value.png";

export default function CoreValuesSection() {
  const values = [
    {
      number: "01",
      title: "Digital Inclusion",
      description:
        "Connecting the 105 million offline consumers to essential digital services and products across all of Bangladesh.",
      // image: "",  
    },
    {
      number: "02",
      title: "Agent Empowerment",
      description:
        "Providing 19,000+ digital entrepreneurs with financial inclusion and a sustainable, necessary source of income.",
    },
    {
      number: "03",
      title: "Market Access",
      description:
        "Enabling 3,000+ digital businesses to overcome distribution gaps and efficiently access untapped markets for growth.",
    },
    {
      number: "04",
      title: "Technological Efficiency",
      description:
        "Utilizing a robust platform and seamless integration to maximize efficiency for digital product selling and channeling.",
    },
    {
      number: "05",
      title: "Data-Driven Intelligence",
      description:
        "Optimizing lead generation and providing businesses with data-driven insights to successfully achieve their marketing goals.",
    },
    {
      number: "06",
      title: "Sustainable Impact",
      description:
        "Addressing global challenges like No Poverty and Decent Work through purposeful and inclusive business models.",
    },
  ];

  return (
    <section className="py-16 md:py-25 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-white flex flex-col gap-6">
          {/* Heading Text */}
          <div className="flex justify-center items-center gap-4">
            <div>
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
            <p>CORE VALUES</p>
            <div>
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
          <h2 className="text-4xl font-medium leading-18 lg:text-6xl text-center">
            Values Driving Our Mission
          </h2>
        </div>
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-13 gap-4 md:gap-8">
          {values.map((value, index) => (
            <div
              key={value.number}
              className="relative bg-[#201F22] flex flex-col gap-12 rounded-2xl p-6 md:p-8"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 md:w-16 md:h-16 bg-white/5 rounded-xl flex items-center justify-center mb-6">
                <Handshake className="w-7 h-7 md:w-8 md:h-8 text-orange-500" />
              </div>

             <div>
               {/* Number and Title */}
              <div className="mb-4">
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
