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
      <AcquisitionServices />
    </div>
  );
}
