import HeaderBanner from "@/components/layout/headerBanner";
import AcquisitionServices from "@/components/sections/services/AcquisitionServices";
import ServicesOverview from "@/components/sections/services/ServicesOverview";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <div>
      <HeaderBanner
        title="Our Services"
        heading={
          <>
            Transforming Digital <br />
            Access Across Bangladesh
          </>
        }
      />
      <ServicesOverview />
      <div className="text-white flex flex-col gap-6">
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
        <h2 className="text-4xl font-medium lg:text-6xl text-center">
          What We Offer
        </h2>
      </div>
      <AcquisitionServices />
    </div>
  );
}
