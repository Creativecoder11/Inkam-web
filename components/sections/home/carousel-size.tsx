import * as React from "react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import sharmin from "@/public/asset/images/sharmin.webp";
import abdul from "@/public/asset/images/abdul.webp";

const testimonials = [
  {
    id: 1,
    name: "Sharmin Akter",
    company_designation: "Manager, Marketing & Branding at Priyoshop",
    rating: 5,
    text: "Inkam has been a fantastic partner for PriyoShop, managing 200–250 agents daily in Dhaka and Chattogram and driving highly successful acquisition campaigns. Their professionalism and results have made them our first choice for future projects.",
    image: sharmin.src,
  },
  {
    id: 2,
    name: "Abdul Alim Chowdhury",
    company_designation: "Founder and CEO at Pakapepe",
    rating: 5,
    text: "Inkam successfully onboarded 1,000+ restaurants across key zones in Dhaka and efficiently ran our Pakapepe app download campaign. Their quality work has boosted orders for our partner restaurants and strengthened our platform’s growth.",
    image: abdul.src,
  },
  {
    id: 3,
    name: "Sharmin Akter",
    company_designation: "Manager, Marketing & Branding at Priyoshop",
    rating: 5,
    text: "Inkam has been a fantastic partner for PriyoShop, managing 200–250 agents daily in Dhaka and Chattogram and driving highly successful acquisition campaigns. Their professionalism and results have made them our first choice for future projects.",
    image: sharmin.src,
  },
  {
    id: 4,
    name: "Abdul Alim Chowdhury",
    company_designation: "Founder and CEO at Pakapepe",
    rating: 5,
    text: "Inkam successfully onboarded 1,000+ restaurants across key zones in Dhaka and efficiently ran our Pakapepe app download campaign. Their quality work has boosted orders for our partner restaurants and strengthened our platform’s growth.",
    image: abdul.src,
  }

];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const fillPercentage = Math.min(Math.max(rating - star + 1, 0), 1) * 100;

        return (
          <div key={star} className="relative w-4 h-4 md:w-5 md:h-5">
            {/* Empty star (gray background) */}
            <svg
              className="w-5 h-5 fill-zinc-600 absolute top-0 left-0"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            {/* Filled star (orange, with clip path for partial fill) */}
            {fillPercentage > 0 && (
              <svg
                className="w-5 h-5 fill-[#FF8800] absolute top-0 left-0"
                viewBox="0 0 20 20"
                style={{
                  clipPath: `inset(0 ${100 - fillPercentage}% 0 0)`
                }}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default function TestimonialCarousel() {
  const [isDragging, setIsDragging] = useState(false);
  const [api, setApi] = useState<any>(null);

  React.useEffect(() => {
    if (!api) return;

    const onPointerDown = () => setIsDragging(true);
    const onPointerUp = () => setIsDragging(false);

    api.on('pointerDown', onPointerDown);
    api.on('pointerUp', onPointerUp);

    return () => {
      api.off('pointerDown', onPointerDown);
      api.off('pointerUp', onPointerUp);
    };
  }, [api]);

  return (
    <div className="w-full text-white">
      <div className="max-w-7xl mx-4 md:mx-auto py-15 md:py-25 space-y-4 md:space-y-8">
        <div className="flex justify-start items-center gap-2 md:gap-4">
          <p className="text-sm md:text-xl">TESTIMONIALS</p>
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
        <div className="md:flex justify-between items-end z-10 text-left">
          <h2 className="text-3xl leading-11 font-medium lg:text-6xl md:leading-18 w-full md:w-1/2">
            Hear from Our Satisfied Partners
          </h2>
        </div>

        <div>
          <Carousel
            opts={{
              align: "start",
              slidesToScroll: 1,
            }}
            setApi={setApi}
            className="w-full max-w-7xl pt-4 md:pt-12 mx-auto"
          >
            <CarouselContent className={isDragging ? "cursor-grabbing" : "cursor-grab"}>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2">
                  <div className="">
                    <Card className="bg-[#161518] border-zinc-800">
                      <CardContent className="space-y-3 md:space-y-4.5">
                        <div className="flex items-center justify-between mb-3 md:mb-6">
                          <div className="flex flex-col md:gap-1">
                            <h3 className="text-white text-lg md:text-2xl font-bold">
                              {testimonial.name}
                            </h3>
                            <p className="text-zinc-400 text-sm md:text-base mb-2">
                              {testimonial.company_designation}
                            </p>
                          </div>
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-13 h-13 md:w-16 md:h-16 rounded-lg object-cover"
                          />
                        </div>

                        <hr className="border-0 h-[1px] bg-[linear-gradient(90deg,rgba(255,255,255,0.30)_0%,rgba(39,38,41,0.30)_100%)]" />

                        <p className="text-zinc-300 leading-relaxed text-sm md:text-base mb-2 md:mb-6">
                          {testimonial.text}
                        </p>

                        <div className="flex items-center justify-between">
                          <StarRating rating={testimonial.rating} />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 md:w-12 md:h-12"
                            viewBox="0 0 48 48"
                            fill="none"
                          >
                            <path
                              d="M12.9997 6C19.3881 6 23.9997 11.2741 23.9996 19.0833C23.9587 30.4295 15.4291 38.4517 3.12395 39.9923C1.98233 40.1352 1.54213 38.5537 2.59342 38.0863C7.315 35.9868 9.69964 33.3226 10.0077 30.6857C10.2378 28.7155 9.16679 26.9898 7.82198 26.6666C4.33562 25.8288 1.99972 21.4872 1.99972 17C1.99972 10.9249 6.92459 6 12.9997 6Z"
                              fill="#FF8800"
                            />
                            <path
                              d="M36.9997 6C43.3881 6 47.9997 11.2741 47.9996 19.0833C47.9587 30.4295 39.4291 38.4517 27.1239 39.9923C25.9823 40.1352 25.5421 38.5537 26.5934 38.0863C31.315 35.9868 33.6996 33.3226 34.0077 30.6857C34.2378 28.7155 33.1668 26.9898 31.822 26.6666C28.3356 25.8288 25.9997 21.4872 25.9997 17C25.9997 10.9249 30.9246 6 36.9997 6Z"
                              fill="#FF8800"
                            />
                          </svg>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-between">
              <CarouselPrevious className="bg-white/5 hover:bg-(--orange) border-0 text-white hover:text-white cursor-pointer" />
              <CarouselNext className="bg-(--orange) border-zinc-700 text-white hover:text-white hover:bg-orange-500 cursor-pointer" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}