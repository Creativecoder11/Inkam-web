import Image, { StaticImageData } from "next/image";

interface BlogArticle {
    id: number;
    date: string;
    comments: number;
    title: string;
    excerpt: string;
    image: StaticImageData;
}

interface BlogCardProps {
    article: BlogArticle;
    actionLabel?: string;
}

export default function BlogCard({ article, actionLabel = "Read More" }: BlogCardProps) {
    return (
        <div className="rounded-xl md:rounded-3xl overflow-hidden bg-[#161518] transition-all duration-300 group">
            {/* Image Container */}
            <div className="relative h-56 md:h-64 overflow-hidden">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-3 md:p-5">
                {/* Meta Info */}
                <div className="flex items-center gap-3 md:gap-4 text-gray-400 text-base mb-3 md:mb-4">
                    {/* Date */}
                    <div className="flex items-center gap-1 md:gap-2">
                        {/* calendar icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 md:w-5 md:h-5"
                            fill="none"
                            viewBox="0 0 20 20" // <-- add this
                        >
                            <path
                                d="M9.16666 10.8335H13.3333M6.66666 10.8335H6.67415M10.8333 14.1668H6.66666M13.3333 14.1668H13.3258"
                                stroke="#B7B7B8"
                                strokeWidth="1.4"
                                strokeLinecap="round"
                            />
                            <path
                                d="M15 1.6665V3.33317M5 1.6665V3.33317"
                                stroke="#B7B7B8"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <path
                                d="M2.08334 10.2027C2.08334 6.57161 2.08334 4.75607 3.12677 3.62803C4.1702 2.5 5.84958 2.5 9.20834 2.5H10.7917C14.1504 2.5 15.8298 2.5 16.8732 3.62803C17.9167 4.75607 17.9167 6.57161 17.9167 10.2027V10.6306C17.9167 14.2617 17.9167 16.0773 16.8732 17.2053C15.8298 18.3333 14.1504 18.3333 10.7917 18.3333H9.20834C5.84958 18.3333 4.1702 18.3333 3.12677 17.2053C2.08334 16.0773 2.08334 14.2617 2.08334 10.6306V10.2027Z"
                                stroke="#B7B7B8"
                                strokeWidth="1.4"
                            />
                            <path
                                d="M2.5 6.6665H17.5"
                                stroke="#B7B7B8"
                                strokeWidth="1.4"
                            />
                        </svg>
                        <span className="text-xs md:text-base">{article.date}</span>
                    </div>

                    {/* Comments */}
                    <div className="flex items-center gap-1 md:gap-2">
                        {/* comments icon */}
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 20 20">
                            <path
                                d="M6.66668 11.25H13.3333M6.66668 7.08333H10"
                                stroke="#B7B7B8"
                                strokeWidth="1.3"
                            />
                            <path
                                d="M5.08235 15.8335C3.99892 15.7269 3.1873 15.4015 2.64298 14.8572C1.66667 13.8809 1.66667 12.3095 1.66667 9.16683V8.75016C1.66667 5.60747 1.66667 4.03612 2.64298 3.05981C3.61929 2.0835 5.19064 2.0835 8.33334 2.0835H11.6667C14.8094 2.0835 16.3807 2.0835 17.357 3.05981C18.3333 4.03612 18.3333 5.60747 18.3333 8.75016V9.16683C18.3333 12.3095 18.3333 13.8809 17.357 14.8572C16.3807 15.8335 14.8094 15.8335 11.6667 15.8335C11.1996 15.8439 10.8276 15.8794 10.4622 15.9627C9.46353 16.1926 8.53877 16.7036 7.62489 17.1492C6.32274 17.7842 5.67167 18.1016 5.26308 17.8044C4.48142 17.2223 5.24545 15.4184 5.41667 14.5835"
                                stroke="#B7B7B8"
                                strokeWidth="1.3"
                            />
                        </svg>
                        <span className="text-xs md:text-base">{article.comments}</span>
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-white text-lg md:text-2xl font-semibold mb-2 md:mb-3">
                    {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-6 line-clamp-2">
                    {article.excerpt}
                </p>

                {/* CTA */}
                <button className="group relative inline-flex items-center gap-2 text-white text-sm md:text-base font-medium transition-colors overflow-hidden">
                    <span className="relative">
                        {actionLabel}
                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-500 ease-out group-hover:w-full"></span>
                    </span>

                    {/* Arrow */}
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="-translate-x-1 transition-all duration-500 ease-out group-hover:translate-x-0"
                    >
                        <path
                            d="M7 17L17 7M17 7H7M17 7V17"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
