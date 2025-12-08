import BlogCard from "@/components/ui/BlogCard";
import BlogImage from "@/public/asset/Images/blog-image.svg";

export default function BlogInsight() {
  const articles = [
    {
      id: 1,
      date: "17-01-23",
      comments: 223,
      title: "Singapore Demo Day Spotlights Bangladeshi Turtle Startups",
      excerpt:
        "Inkam connects digital businesses with millions of consumers through a powerful agent network, bridging market gaps and driving inclusive digital growth across Bangladesh.",
      image: BlogImage,
    },
    {
      id: 2,
      date: "17-01-23",
      comments: 223,
      title: "Singapore Demo Day Spotlights Bangladeshi Turtle Startups",
      excerpt:
        "Inkam connects digital businesses with millions of consumers through a powerful agent network, bridging market gaps and driving inclusive digital growth across Bangladesh.",
      image: BlogImage,
    },
    {
      id: 3,
      date: "17-01-23",
      comments: 223,
      title: "Singapore Demo Day Spotlights Bangladeshi Turtle Startups",
      excerpt:
        "Inkam connects digital businesses with millions of consumers through a powerful agent network, bridging market gaps and driving inclusive digital growth across Bangladesh.",
      image: BlogImage,
    },
  ];

  return (
    <div className="w-full py-25">
      <div className="max-w-7xl mx-4 md:mx-auto">
        <div className="space-y-2 md:space-y-7">
          <div className="flex text-white justify-start items-center gap-2 md:gap-4">
            <p className="text-sm md:text-xl">INSIGHTS</p>
            <div className="mobile-line">
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
          <div className="flex text-white justify-between items-end z-10 text-left">
            <h2 className="text-3xl leading-11 font-medium md:text-[60px] md:leading-18 w-full">
              Press Releases,<br />Announcements, and Insights
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 pt-12 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <BlogCard key={article.id} article={article} actionLabel="Learn More" />
          ))}
        </div>
      </div>
    </div>
  );
}
