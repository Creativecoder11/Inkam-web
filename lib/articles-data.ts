import { StaticImageData } from "next/image";
import blogImg1 from "@/asset/images/Blog/inkam insights - image.webp";
import blogImg2 from "@/asset/images/Blog/inkam insights - image-2.webp";
import blogImg3 from "@/asset/images/Blog/inkam insights - image-5.webp";
import blogImg4 from "@/asset/images/Blog/inkam insights - image-4.webp";
import blogImg5 from "@/asset/images/Blog/inkam insights - image-1.webp";
import blogImg6 from "@/asset/images/Blog/Selected for Smart Bangladesh Accelerator Program (GSS-C02).webp"
import blogImg7 from "@/asset/images/Blog/inkam insights - image-3.webp";

export interface Article {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  image: StaticImageData;
  url: string | null;
  slug: string | null;
}

export const articles: Article[] = [
  {
    id: 1,
    date: "20-04-24",
    title: "Singapore Demo Day Spotlights Bangladeshi Turtle Startups",
    excerpt:
      "Seven startups from Turtle's first cohort including Chhaya, Inkam, Revorium, Drutoloan, Shunboi...",
    image: blogImg1,
    url: "https://www.dhakatribune.com/business/344448/turtle-venture-studio-s-demo-day-in-singapore",
    slug: null,
  },
  {
    id: 2,
    date: "05-11-23",
    title: "Rising Together: Meet & Greet with Razor Capital",
    excerpt:
      "Inkam’s cofounders were invited to attend the Turtle Connect Symposium, a strategic gathering hosted...",
    image: blogImg2,
    url: null,
    slug: "rising-together-meet-greet-with-razor-capital",
  },
  {
    id: 3,
    date: "21-11-23",
    title: "Market Presence and Partnership Meeting",
    excerpt:
      "Inkam hosted its Divisional Partner Meetup 2026, bringing together key regional partners... ",
    image: blogImg3,
    url: null,
    slug: "market-presence-and-partnership-meeting",
  },
  {
    id: 4,
    date: "20-09-23",
    title: "BDjobs Fair 2024 - Chittagong",
    excerpt:
      "Inkam, a technology-driven platform focused on enabling income opportunities...",
    image: blogImg4,
    url: null,
    slug: "bdjobs-fair-2024-chittagong",
  },
  {
    id: 5,
    date: "20-06-23",
    title: "BIG top 10 selected startup",
    excerpt:
      "Seven startups from Turtle's first cohort including Chhaya, Inkam, Revorium, Drutoloan, Shunboi...",
    image: blogImg5,
    url: "https://www.dhakatribune.com/business/344448/turtle-venture-studio-s-demo-day-in-singapore",
    slug: null,
  },
  {
    id: 6,
    date: "28-01-24",
    title: "Selected for Smart Bangladesh Accelerator Program (GSS-C02)",
    excerpt:
      "A major step forward in building Bangladesh’s next-generation distribution infrastructure...",
    image: blogImg6,
    url: null,
    slug: "selected-for-smart-bangladesh-accelerator-program-gss-c02",
  },
  {
    id: 7,
    date: "07-11-24",
    title: "Next Generation Icon Award in MSME Honours presented",
    excerpt:
      "Inkam has been awarded with Next Generation Icon Award in MSME Honours presented by ....",
    image: blogImg7,
    url: "https://www.thedailystar.net/business/organisation-news/press-releases/news/25-bangladesh-based-companies-win-big-tally-msme-honours-2023-3387036",
    slug: null,
  },
  

];