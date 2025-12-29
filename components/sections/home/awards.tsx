import logo1 from "@/asset/icons/awards-logo-1.svg";
import logo2 from "@/asset/icons/awards-logo-2.svg";
import logo3 from "@/asset/icons/awards-logo-3.svg";
import logo4 from "@/asset/icons/awards-logo-4.svg";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/textAnimation";
import Image from "next/image";

export default function AwardsSection() {
  return (
    <div className="w-full py-15 md:py-25" id="awards">
      <div className="max-w-7xl mx-4 md:mx-auto">
        <div className="text-white flex flex-col gap-3 md:gap-6">
          {/* Heading Text */}
          <ScrollReveal>
            <div className="flex justify-center items-center gap-2 md:gap-4">
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
              <p className="title-text text-sm md:text-xl">AWARDS</p>
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
            <h2 className="text-3xl leading-11 font-medium lg:text-6xl md:leading-18 text-center">
              Achievements & Recognitions
            </h2>
          </TextAnimation>

        </div>

        <div className="w-full mt-8 md:mt-12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
          {/* Logo 1 */}
          <div className="h-26 md:h-36 py-5 md:py-7 rounded-2xl bg-[#161518] flex items-center justify-center">
            <Image src={logo1} alt="Logo 1" className="h-full w-full" />
          </div>

          {/* Logo 2 */}
          <div className="h-26 md:h-36 py-5 md:py-7 rounded-2xl bg-[#161518] flex items-center justify-center">
            <Image src={logo2} alt="Logo 2" className="h-full w-full" />
          </div>

          {/* Logo 3 */}
          <div className=" h-26 md:h-36 py-5 md:py-7 rounded-2xl bg-[#161518] flex items-center justify-center">
            <Image src={logo3} alt="Logo 3" className="h-full w-full" />
          </div>

          {/* Logo 4 */}
          <div className="h-26 md:h-36 py-5 md:py-7 rounded-2xl bg-[#161518] flex items-center justify-center">
            <Image src={logo4} alt="Logo 4" className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
