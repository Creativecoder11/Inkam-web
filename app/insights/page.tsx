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
                        Transforming Digital <br />
                        Access Across Bangladesh
                    </>
                } />
            <Blogs />
        </div>
    );
};

export default page;