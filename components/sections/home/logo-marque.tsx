import Image from "next/image";

import companyImg1 from "@/public/asset/Images/companyImg1.svg";
import companyImg2 from "@/public/asset/Images/companyImg2.svg";
import companyImg3 from "@/public/asset/Images/companyImg3.svg";
import companyImg4 from "@/public/asset/Images/companyImg4.svg";
import companyImg5 from "@/public/asset/Images/companyImg5.svg";
import "./logo-marque.css";

const logos = [
  companyImg1,
  companyImg2,
  companyImg3,
  companyImg4,
  companyImg5,
];

export default function LogoCloud() {
  return (
    <section className="overflow-hidden py-10 md:py-16">
      <div className="relative mx-auto max-w-7xl px-6">
        <h3 className="text-base md:text-lg text-center text-white">
          Trusted by leading brands across fintech, edtech, healthcare,
          ecommerce, and logistics
        </h3>

        {/* Marquee wrapper */}
        <div className="relative mt-6 overflow-hidden">
          {/* Left fade */}
          <div className="marquee-fade-left" />
          {/* Right fade */}
          <div className="marquee-fade-right" />

          {/* Track */}
          <div className="logo-marquee">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="logo-item">
                <Image
                  src={logo}
                  alt="Partner logo"
                  width={120}
                  height={40}
                  priority={index < 5}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
