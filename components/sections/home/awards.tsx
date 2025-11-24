import logo1 from "@/public/asset/icons/awards-logo-1.svg";
import logo2 from "@/public/asset/icons/awards-logo-2.svg";
import logo3 from "@/public/asset/icons/awards-logo-3.svg";
import logo4 from "@/public/asset/icons/awards-logo-4.svg";
import Image from "next/image";

export default function AwardsSection() {
  return (
    <div className="w-full max-w-7xl mx-auto py-16 ">
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
          <p>ABOUT US</p>
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
          Together, We Build <br /> the Future of Distribution
        </h2>
      </div>

      <div className="w-full pt-12 mx-auto flex justify-center items-center gap-16 ">
        {/* Logo 1 */}
        <div className=" h-[200px] rounded-2xl bg-[#161518] flex w-1/4 items-center justify-center">
          <Image src={logo1} alt="Logo 1" className="h-18 w-auto" />
        </div>

        {/* Logo 2 */}
        <div className="h-[200px] rounded-2xl bg-[#161518] flex w-1/4 items-center justify-center">
          <Image src={logo2} alt="Logo 2" className="h-18 w-auto" />
        </div>

        {/* Logo 3 */}
        <div className=" h-[200px] rounded-2xl bg-[#161518] flex w-1/4 items-center justify-center">
          <Image src={logo3} alt="Logo 3" className="h-18 w-auto" />
        </div>

        {/* Logo 4 */}
        <div className="h-[200px] rounded-2xl bg-[#161518] flex w-1/4 items-center justify-center">
          <Image src={logo4} alt="Logo 4" className="h-18 w-auto" />
        </div>
      </div>
    </div>
  );
}
