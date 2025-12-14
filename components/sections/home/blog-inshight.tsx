import BlogCard from "@/components/ui/BlogCard";
import blogImg1 from "@/public/asset/images/blogImg1.webp";
import blogImg2 from "@/public/asset/images/blogImg2.webp";
import blogImg3 from "@/public/asset/images/blogImg3.webp";

export default function BlogInsight() {
  const articles = [
    {
      id: 1,
      date: "17-01-23",
      comments: 223,
      title: "Singapore Demo Day Spotlights Bangladeshi Turtle Startups",
      excerpt:
        "Seven startups from Turtle's first cohort including Chhaya, Inkam, Revorium, Drutoloan, Shunboi, MistriMama, and ShopUp showcased their innovative solutions at the Singapore Demo Day.",
      image: blogImg1,
    },
    {
      id: 2,
      date: "17-01-23",
      comments: 223,
      title: "Rising Together: Meet & Greet with Razor Capital",
      excerpt:
        "Turtle Venture orchestrated a momentous Meet & Greet event with Razor Capital, a prominent. This gathering fostered connections, insights, and collaboration between startups and investors.",
      image: blogImg2,
    },
    {
      id: 3,
      date: "17-01-23",
      comments: 223,
      title: "Market Presence and Partnership Meeting",
      excerpt:
        "Inkam has formed key partnerships with 10 divisional distributors, driving regional growth. These collaborations enhance our market presence and enable us to better serve our customers across various regions.",
      image: blogImg3,
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
