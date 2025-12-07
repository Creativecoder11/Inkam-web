import React from "react";

export default function AcquisitionServices() {
  return (
    <div>
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
          <p>SERVICES</p>
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
          What We Offer
        </h2>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto">
        <div className=" flex text-white gap-8 mt-12">
          <div className="w-1/2">
            <h2 className="text-5xl font-medium">Acquisition</h2>
          </div>
          <div className="w-1/2 pl-12"> 
            <p className="text-base text-(--grey)">
              Inkam connects digital businesses with millions of consumers
              through a powerful agent network, bridging market gaps and driving
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
