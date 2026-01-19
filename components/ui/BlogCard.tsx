import Image, { StaticImageData } from "next/image";

interface BlogArticle {
    id: number;
    date: string;
    title: string;
    excerpt: string;
    image: StaticImageData;
    url: string | null;
    slug: string | null;
}

interface BlogCardProps {
    article: BlogArticle;
    actionLabel?: string;
}

export default function BlogCard({ article, actionLabel = "Read More" }: BlogCardProps) {
    // Determine the href: use external URL if available, otherwise use internal slug
    const href = article.url || `/insights/${article.slug}`;
    const isExternal = !!article.url;

    return (
        <div className="rounded-xl md:rounded-3xl overflow-hidden bg-[#161518] transition-all duration-300 group">
            <div className="relative h-56 md:h-64 overflow-hidden">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="p-4 md:p-5">
              {/* Date */}
                    <div className="flex items-center my-2 gap-1 md:gap-2">
                        {/* calendar icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 md:w-5 md:h-5"
                            fill="none"
                            viewBox="0 0 20 20"
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
                        <span className="text-xs text-white md:text-base">{article.date}</span>
                    </div>

                <h3 className="text-white text-lg md:text-2xl font-semibold mb-3">
                    {article.title}
                </h3>

                <p className="text-gray-400 text-sm md:text-base mb-6 line-clamp-2">
                    {article.excerpt}
                </p>

                {/* LINK - External or Internal */}
                <a
                    href={href}
                    target={isExternal ? "_blank" : "_self"}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-2 text-white font-medium"
                >
                    <span className="relative">
                        {actionLabel}
                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />
                    </span>

                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="-translate-x-1 transition-all duration-500 group-hover:translate-x-0"
                    >
                        <path
                            d="M7 17L17 7M17 7H7M17 7V17"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
}