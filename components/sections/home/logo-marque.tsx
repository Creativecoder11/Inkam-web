import Image from "next/image";


import bdjobs from "@/asset/logos/bdjobs.svg";
import priyoshop from "@/asset/logos/priyoshop.svg";
import drutoloan from "@/asset/logos/drutoloan.svg";
import keeron from "@/asset/logos/keeron.svg";
import sourcing from "@/asset/logos/sourcing.svg";
import dhakabank from "@/asset/logos/dhakabank.svg";
import amarlab from "@/asset/logos/amarlab.svg";
import tenminute from "@/asset/logos/10minute.svg";
import swap from "@/asset/logos/swap.svg";
import medigo from "@/asset/logos/medigo.svg";
import khaodao from "@/asset/logos/khaodao.svg";
import "./logo-marque.css";

const logos = [

  bdjobs,
  priyoshop,
  drutoloan,
  keeron,
  sourcing,
  dhakabank,
  amarlab,
  tenminute,
  swap,
  medigo,
  khaodao,
];

export default function LogoCloud() {
  return (
    <section className="overflow-hidden py-10 md:py-16">
      <div className="relative mx-auto max-w-7xl">
        <h3 className="text-base md:text-lg text-center text-white px-6">
          Trusted by leading brands across fintech, edtech, healthcare,
          ecommerce, and logistics
        </h3>

        {/* Marquee wrapper */}
        <div className="relative mt-12 overflow-hidden">
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
                  className="logo-img"
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
