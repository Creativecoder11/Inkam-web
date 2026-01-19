'use client';

import Image from "next/image";
import { articles } from "@/lib/articles-data";
import Link from "next/link";

const BDjobsFair = () => {
    const article = articles[3];

    // Convert date from "dd-mm-yy" to "ddth Month yyyy" format
    const formatDate = (dateStr: string) => {
        const [day, month, year] = dateStr.split('-').map(Number);
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        // Add ordinal (st, nd, rd, th) to day
        const ordinal = (n: number) => {
            if (n > 3 && n < 21) return 'th';
            switch (n % 10) {
                case 1: return 'st';
                case 2: return 'nd';
                case 3: return 'rd';
                default: return 'th';
            }
        };

        const fullYear = year < 100 ? 2000 + year : year; // convert 2-digit year to 4-digit
        return `${day}${ordinal(day)} ${months[month - 1]} ${fullYear}`;
    };

    return (
        <div className="w-full py-15 md:py-25">
            <div className="text-white max-w-7xl mx-4 md:mx-auto">
                <div className="pt-10 md:pt-20">
                    <h1 className="text-2xl md:text-5xl font-semibold leading-[130%] md:tracking-[-2px]">
                        Inkam Participates in Bdjobs Freshers Career Fair to Support Bangladesh’s Next Workforce
                    </h1>
                    <p className="text-[#CFCFCF] text-base md:text-base md:text-lg leading-[140%] mt-2">
                        Posted on {formatDate(article.date)}
                    </p>
                    <div className="relative w-full h-60 md:h-143 my-7 md:my-15">
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover rounded-lg"
                            loading="eager"
                            priority
                        />
                    </div>

                    <div className="flex flex-col gap-8 md:gap-12 md:mx-30">
                        <div className="flex flex-col gap-2 md:gap-4">
                            <p className="text-base md:text-lg leading-[140%]">
                                Inkam, a technology-driven platform focused on enabling income opportunities and expanding access to growth tools, participated in the Bdjobs Freshers Career Fair 2023 to connect with young talent and strengthen the bridge between fresh graduates and real career pathways in Bangladesh.
                            </p>
                            <p className="text-base md:text-lg leading-[140%]">
                                The Bdjobs Freshers Career Fair is one of the country’s most recognized talent platforms, bringing together graduating students, entry-level professionals, and employers across multiple sectors. Inkam’s participation reflects its commitment to empowering youth through structured entry points into work, skills development, and long-term career progression.
                            </p>
                            <p className="text-base md:text-lg leading-[140%]">
                                “Bangladesh has one of the largest youth populations in the region, and their potential is massive. But too often, the gap is not capability—it’s access, exposure, and direction,” said Mehedi Hasan, Business Development Manager, Inkam. “We joined this career fair to meet promising talent early, understand their aspirations, and open doors to opportunities aligned with growth and learning.”
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <p className="text-2xl md:text-[32px] font-semibold leading-[120%]">
                                Supporting Fresh Graduates Beyond Hiring
                            </p>
                            <p className="text-base md:text-lg leading-[140%]">
                                During the fair, Inkam engaged with graduates and early-career professionals, focusing conversations on employability, workplace expectations, and career readiness. In addition to exploring recruitment pathways, Inkam representatives shared practical guidance on interview preparation, communication, and the mindset needed to succeed in fast-moving work environments.
                            </p>
                            <p className="text-base md:text-lg leading-[140%]">
                                Inkam’s team emphasized qualities such as adaptability, problem-solving, ownership, and collaboration—skills that increasingly define success in today’s evolving job market.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <p className="text-2xl md:text-[32px] font-semibold leading-[120%]">
                                A Shared Commitment to Workforce Readiness
                            </p>
                            <p className="text-base md:text-lg leading-[140%]">
                                Inkam’s participation aligns with a broader national need: stronger connections between academic learning and real market demands. Career fairs play a crucial role by reducing entry barriers, providing exposure to employer expectations, and enabling graduates to make clearer career decisions.
                            </p>
                            <p className="text-base md:text-lg leading-[140%]">
                                “Career-building is a journey, not a one-time event,” added Mehedi Hasan. “We believe young professionals progress faster when they get the right environment, mentorship, and structured pathways to grow.”
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <p className="text-2xl md:text-[32px] font-semibold leading-[120%]">
                                What’s Next
                            </p>
                            <p className="text-base md:text-lg leading-[140%]">
                                Following the career fair, Inkam will continue exploring opportunities to strengthen early-career hiring and learning pathways through structured onboarding, role-based growth plans, and skill-driven team development.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <p className="text-2xl md:text-[32px] font-semibold leading-[120%]">
                                About Inkam
                            </p>
                            <p className="text-base md:text-lg leading-[140%]">
                                Inkam is a Bangladesh-based technology platform focused on unlocking earning opportunities and enabling commerce through smarter, tech-first systems. Inkam supports individuals and businesses with tools to grow faster, operate efficiently, and participate in the economy with greater confidence.
                            </p>
                        </div>
                        <div>
                            <p className="text-base md:text-lg leading-[140%] mt-5 mb-3">Share</p>
                            {/* Social Share Buttons can be added here */}
                            <div className="flex gap-4">
                                <Link href="#" aria-label="Share on Facebook">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <rect width="40" height="40" rx="20" fill="#3A3A3A" />
                                        <path d="M21.8103 30.0508V20.9427H24.883L25.3397 17.3766H21.8103V15.1051C21.8103 14.076 22.097 13.3715 23.5739 13.3715H25.4453V10.1921C24.5347 10.0945 23.6195 10.0474 22.7037 10.051C19.9878 10.051 18.123 11.709 18.123 14.7528V17.3699H15.0703V20.936H18.1297V30.0508H21.8103Z" fill="#F0F0F0" />
                                    </svg>
                                </Link>
                                <Link href="#" aria-label="Share on Instagram">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <rect width="40" height="40" rx="20" fill="#3A3A3A" />
                                        <path d="M19.8521 14.8984C18.4922 14.8984 17.188 15.4387 16.2264 16.4003C15.2648 17.3619 14.7246 18.6661 14.7246 20.026C14.7246 21.3859 15.2648 22.6901 16.2264 23.6517C17.188 24.6133 18.4922 25.1535 19.8521 25.1535C21.212 25.1535 22.5162 24.6133 23.4778 23.6517C24.4394 22.6901 24.9797 21.3859 24.9797 20.026C24.9797 18.6661 24.4394 17.3619 23.4778 16.4003C22.5162 15.4387 21.212 14.8984 19.8521 14.8984ZM19.8521 23.356C18.9687 23.356 18.1214 23.005 17.4967 22.3803C16.872 21.7556 16.521 20.9083 16.521 20.0249C16.521 19.1414 16.872 18.2941 17.4967 17.6694C18.1214 17.0447 18.9687 16.6937 19.8521 16.6937C20.7356 16.6937 21.5829 17.0447 22.2076 17.6694C22.8323 18.2941 23.1832 19.1414 23.1832 20.0249C23.1832 20.9083 22.8323 21.7556 22.2076 22.3803C21.5829 23.005 20.7356 23.356 19.8521 23.356Z" fill="#F0F0F0" />
                                        <path d="M25.1817 15.9054C25.8419 15.9054 26.3771 15.3702 26.3771 14.71C26.3771 14.0498 25.8419 13.5146 25.1817 13.5146C24.5215 13.5146 23.9863 14.0498 23.9863 14.71C23.9863 15.3702 24.5215 15.9054 25.1817 15.9054Z" fill="#F0F0F0" />
                                        <path d="M29.315 13.495C29.0583 12.8321 28.666 12.2301 28.1632 11.7275C27.6605 11.2249 27.0583 10.8329 26.3953 10.5764C25.6194 10.2852 24.7998 10.1277 23.9713 10.1107C22.9034 10.0641 22.5652 10.0508 19.8573 10.0508C17.1493 10.0508 16.8023 10.0508 15.7433 10.1107C14.9154 10.1268 14.0963 10.2843 13.3214 10.5764C12.6583 10.8326 12.0559 11.2245 11.5531 11.7271C11.0503 12.2297 10.6581 12.8319 10.4017 13.495C10.1104 14.2708 9.9533 15.0905 9.9371 15.919C9.88942 16.9858 9.875 17.324 9.875 20.033C9.875 22.741 9.875 23.0858 9.9371 24.147C9.95373 24.9765 10.1101 25.7948 10.4017 26.5722C10.6589 27.235 11.0514 27.837 11.5543 28.3395C12.0573 28.8421 12.6595 29.2342 13.3225 29.4908C14.0959 29.7937 14.9153 29.9625 15.7455 29.9898C16.8133 30.0364 17.1516 30.0508 19.8595 30.0508C22.5674 30.0508 22.9145 30.0508 23.9735 29.9898C24.8019 29.9729 25.6215 29.8158 26.3975 29.5252C27.0604 29.2681 27.6623 28.8757 28.1651 28.373C28.6678 27.8703 29.0602 27.2683 29.3172 26.6054C29.6089 25.8292 29.7652 25.0109 29.7819 24.1814C29.8295 23.1147 29.844 22.7764 29.844 20.0674C29.844 17.3584 29.844 17.0146 29.7819 15.9534C29.7689 15.1132 29.611 14.2815 29.315 13.495ZM27.9644 24.065C27.9572 24.704 27.8406 25.3371 27.6195 25.9368C27.453 26.368 27.198 26.7596 26.8711 27.0864C26.5441 27.4131 26.1524 27.6678 25.7211 27.8341C25.1281 28.0542 24.5017 28.1708 23.8692 28.179C22.8158 28.2278 22.5186 28.24 19.8173 28.24C17.1139 28.24 16.8377 28.24 15.7643 28.179C15.1322 28.1712 14.5061 28.0546 13.9136 27.8341C13.4808 27.6689 13.0875 27.4146 12.7591 27.0878C12.4308 26.7609 12.1747 26.3688 12.0074 25.9368C11.7894 25.3436 11.6729 24.7179 11.6625 24.086C11.6149 23.0326 11.6038 22.7354 11.6038 20.0341C11.6038 17.3318 11.6038 17.0557 11.6625 15.9811C11.6697 15.3424 11.7863 14.7097 12.0074 14.1104C12.3456 13.2355 13.0387 12.5469 13.9136 12.212C14.5064 11.9926 15.1323 11.876 15.7643 11.8671C16.8189 11.8195 17.115 11.8062 19.8173 11.8062C22.5197 11.8062 22.7969 11.8062 23.8692 11.8671C24.5018 11.8748 25.1282 11.9914 25.7211 12.212C26.1524 12.3787 26.544 12.6336 26.871 12.9606C27.1979 13.2875 27.4529 13.6792 27.6195 14.1104C27.8375 14.7036 27.9541 15.3293 27.9644 15.9612C28.0121 17.0157 28.0243 17.3118 28.0243 20.0142C28.0243 22.7155 28.0243 23.006 27.9766 24.0661H27.9644V24.065Z" fill="#F0F0F0" />
                                    </svg>
                                </Link>
                                <Link href="#" aria-label="Share on LinkedIn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <rect width="40" height="40" rx="20" fill="#3A3A3A" />
                                        <path d="M13.4037 13.3075C14.7313 13.3075 15.8075 12.2313 15.8075 10.9037C15.8075 9.57619 14.7313 8.5 13.4037 8.5C12.0762 8.5 11 9.57619 11 10.9037C11 12.2313 12.0762 13.3075 13.4037 13.3075Z" fill="#F0F0F0" />
                                        <path d="M18.0777 15.1294V28.4653H22.2183V21.8704C22.2183 20.1302 22.5457 18.445 24.7033 18.445C26.8313 18.445 26.8577 20.4345 26.8577 21.9802V28.4664H31.0005V21.153C31.0005 17.5606 30.2271 14.7998 26.0282 14.7998C24.0123 14.7998 22.661 15.9061 22.1084 16.9531H22.0524V15.1294H18.0777ZM11.3301 15.1294H15.4773V28.4653H11.3301V15.1294Z" fill="#F0F0F0" />
                                    </svg>
                                </Link>
                                <Link href="#" aria-label="Copy Link">
                                    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.0455 0H19.9545C8.93391 0 0 8.93655 0 19.9603V20.0514C0 31.0752 8.93391 40.0118 19.9545 40.0118H20.0455C31.0661 40.0118 40 31.0752 40 20.0514V19.9603C40 8.93655 31.0661 0 20.0455 0Z" fill="#3A3A3A" />
                                        <path d="M16.2534 19.2678C17.4835 18.0377 19.6288 18.0377 20.8589 19.2678L21.6265 20.0354L23.1616 18.5002L22.3941 17.7326C21.3703 16.7077 20.0066 16.1421 18.5562 16.1421C17.1057 16.1421 15.7421 16.7077 14.7183 17.7326L12.4144 20.0354C11.3986 21.0545 10.8281 22.4348 10.8281 23.8738C10.8281 25.3128 11.3986 26.6931 12.4144 27.7122C12.9181 28.2166 13.5164 28.6164 14.175 28.8888C14.8336 29.1612 15.5396 29.3008 16.2523 29.2995C16.9653 29.301 17.6715 29.1615 18.3303 28.8891C18.9891 28.6167 19.5876 28.2168 20.0913 27.7122L20.8589 26.9447L19.3238 25.4095L18.5562 26.1771C17.9444 26.7862 17.1162 27.1281 16.2529 27.1281C15.3896 27.1281 14.5614 26.7862 13.9496 26.1771C13.34 25.5655 12.9977 24.7373 12.9977 23.8738C12.9977 23.0103 13.34 22.1821 13.9496 21.5705L16.2534 19.2678Z" fill="white" />
                                        <path d="M20.0918 12.358L19.3242 13.1256L20.8594 14.6607L21.627 13.8931C22.2388 13.2841 23.0669 12.9421 23.9302 12.9421C24.7935 12.9421 25.6217 13.2841 26.2335 13.8931C26.8431 14.5047 27.1854 15.3329 27.1854 16.1964C27.1854 17.0599 26.8431 17.8882 26.2335 18.4997L23.9297 20.8024C22.6996 22.0325 20.5543 22.0325 19.3242 20.8024L18.5566 20.0349L17.0215 21.57L17.7891 22.3376C18.8129 23.3625 20.1765 23.9281 21.627 23.9281C23.0774 23.9281 24.4411 23.3625 25.4649 22.3376L27.7687 20.0349C28.7846 19.0157 29.355 17.6354 29.355 16.1964C29.355 14.7574 28.7846 13.3771 27.7687 12.358C26.7498 11.3416 25.3694 10.7708 23.9302 10.7708C22.4911 10.7708 21.1107 11.3416 20.0918 12.358Z" fill="white" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default BDjobsFair;