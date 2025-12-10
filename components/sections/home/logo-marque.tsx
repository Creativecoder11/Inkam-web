import Image from "next/image"
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import companyImg1 from "@/public/asset/Images/companyImg1.svg"
import companyImg2 from "@/public/asset/Images/companyImg2.svg"
import companyImg3 from "@/public/asset/Images/companyImg3.svg"
import companyImg4 from "@/public/asset/Images/companyImg4.svg"
import companyImg5 from "@/public/asset/Images/companyImg5.svg"

export default function LogoCloud() {
    return (
        <section className="overflow-hidden py-10 md:py-16">
            <div className="group relative m-auto max-w-7xl justify-center px-6">
                <div className="items-center md:flex-row">
                    <div>
                        <h3 className="text-base md:text-lg text-center text-white">
                            More than 200+ companies trusted us
                        </h3>
                    </div>

                    <div className="relative py-4 md:py-6 mt-2 md:mt-4">
                        <InfiniteSlider speedOnHover={20} speed={40} gap={112}>

                            <div className="flex">
                                <Image
                                    className="mx-auto"
                                    src={companyImg1}
                                    alt="Nvidia Logo"
                                    width={100}
                                    height={20}
                                />
                            </div>

                            <div className="flex">
                                <Image
                                    className="mx-auto"
                                    src={companyImg2}
                                    alt="Column Logo"
                                    width={80}
                                    height={16}
                                />
                            </div>

                            <div className="flex">
                                <Image
                                    className="mx-auto"
                                    src={companyImg3}
                                    alt="GitHub Logo"
                                    width={80}
                                    height={16}
                                />
                            </div>

                            <div className="flex">
                                <Image
                                    className="mx-auto"
                                    src={companyImg4}
                                    alt="Nike Logo"
                                    width={100}
                                    height={20}
                                />
                            </div>

                            <div className="flex">
                                <Image
                                    className="mx-auto"
                                    src={companyImg5}
                                    alt="Lemon Squeezy Logo"
                                    width={100}
                                    height={20}
                                />
                            </div>

                        </InfiniteSlider>
                    </div>
                </div>
            </div>
        </section>
    )
}
