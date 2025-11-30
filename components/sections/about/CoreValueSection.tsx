
import { Handshake } from "lucide-react";

export default function CoreValuesSection() {
  const values = [
    {
      number: "01",
      title: "Digital Inclusion",
      description: "Connecting the 105 million offline consumers to essential digital services and products across all of Bangladesh."
    },
    {
      number: "02",
      title: "Agent Empowerment",
      description: "Providing 19,000+ digital entrepreneurs with financial inclusion and a sustainable, necessary source of income."
    },
    {
      number: "03",
      title: "Market Access",
      description: "Enabling 3,000+ digital businesses to overcome distribution gaps and efficiently access untapped markets for growth."
    },
    {
      number: "04",
      title: "Technological Efficiency",
      description: "Utilizing a robust platform and seamless integration to maximize efficiency for digital product selling and channeling."
    },
    {
      number: "05",
      title: "Data-Driven Intelligence",
      description: "Optimizing lead generation and providing businesses with data-driven insights to successfully achieve their marketing goals."
    },
    {
      number: "06",
      title: "Sustainable Impact",
      description: "Addressing global challenges like No Poverty and Decent Work through purposeful and inclusive business models."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {values.map((value, index) => (
            <div
              key={value.number}
              className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8 hover:border-orange-500/50 transition-all duration-300 group"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl flex items-center justify-center mb-6 group-hover:from-orange-500/20 group-hover:to-orange-600/20 transition-all duration-300">
                <Handshake className="w-7 h-7 md:w-8 md:h-8 text-orange-500" />
              </div>

              {/* Number and Title */}
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  <span className="text-orange-500">{value.number}.</span> {value.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {value.description}
              </p>

              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}