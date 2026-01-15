'use clint';

import HeaderBanner from "@/components/layout/headerBanner";
import Blogs from "@/components/sections/insights/insights";

const page = () => {
    return (
        <div>
            <HeaderBanner
                title="Insights"
                heading={
                    <>
                        Follow our journey to <br/> digitalize distribution
                    </>
                } />
            <Blogs />
        </div>
    );
};

export default page;