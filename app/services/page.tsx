import HeaderBanner from "@/components/layout/headerBanner";
import Faq from "@/components/sections/home/faq";
import AcquisitionServices from "@/components/sections/services/AcquisitionServices";
import OrderCollection from "@/components/sections/services/OrderCollection";
import ProductReselling from "@/components/sections/services/ProductReselling";
import ServicesOverview from "@/components/sections/services/ServicesOverview";


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
      <ProductReselling />
      <OrderCollection />
      <Faq />
    </div>
  );
}
