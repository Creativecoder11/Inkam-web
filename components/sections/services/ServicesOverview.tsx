import Image from 'next/image'
import storyImage from "@/public/asset/Images/our-story-image.webp";

export default function ServicesOverview() {
  return (
    <div className=" max-w-7xl py-25 mx-auto flex flex-col gap-13">
        <div className="flex justify-between items-end gap-20">
          {/* Left Content */}
          <div className="w-1/2 flex flex-col gap-8">
            <div className="space-y-7">
              <div className="flex justify-start text-white items-center gap-4">
                <p>OVERVIEW</p>
                <div>
                  {/* svg omitted for brevity */}
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

              <h1 className="text-[40px] md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-white">
                From a Vision to a Nationwide Network
              </h1>
            </div>
          </div>
          {/* Right Content */}
          <div className="w-1/2 pl-12">
            <p className="text-base text-(--grey)">
              Inkam empowers digital businesses with nationwide distribution,
              enabling greater reach, higher sales, and seamless access to
              millions of consumers across Bangladesh.
            </p>
          </div>
        </div>
        <div className="w-full flex gap-10 ">
          <div className="w-1/2 relative rounded-[20px] overflow-hidden">
            <Image
              src={storyImage}
              alt="Team collaborating in modern office"
              width={800}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="w-1/2 relative rounded-[20px] overflow-hidden">
            <Image
              src={storyImage}
              alt="Team collaborating in modern office"
              width={800}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
  )
}
