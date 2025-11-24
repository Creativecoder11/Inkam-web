import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay"

const testimonials = [
  {
    id: 1,
    company: "Jamroll Limited",
    name: "Jenny Wilson",
    text: "Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus. Viverra lectus lacus aliquet et dignissim quam sed. Sed.Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    id: 2,
    company: "Jamroll Limited",
    name: "Jenny Wilson",
    text: "Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus. Viverra lectus lacus aliquet et dignissim quam sed. Sed.Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    id: 3,
    company: "Jamroll Limited",
    name: "Jenny Wilson",
    text: "Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus. Viverra lectus lacus aliquet et dignissim quam sed. Sed.Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
  {
    id: 4,
    company: "Jamroll Limited",
    name: "Jenny Wilson",
    text: "Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus. Viverra lectus lacus aliquet et dignissim quam sed. Sed.Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
  },
  {
    id: 5,
    company: "Jamroll Limited",
    name: "Jenny Wilson",
    text: "Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus. Viverra lectus lacus aliquet et dignissim quam sed. Sed.Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
  },
  {
    id: 6,
    company: "Jamroll Limited",
    name: "Jenny Wilson",
    text: "Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus. Viverra lectus lacus aliquet et dignissim quam sed. Sed.Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop",
  },
];

export default function TestimonialCarousel() {
  return (
    <div className="w-full text-white max-w-7xl space-y-8 mx-auto py-16 px-4">
      <div className="flex justify-start items-center gap-4">
        <p>ABOUT US</p>
        <div>
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
      <div className="flex justify-between items-end z-10  text-left">
        <h2 className="text-4xl font-medium lg:text-6xl w-full md:w-1/2">
          From a Vision to a Nationwide Network
        </h2>
        <p className="w-full md:w-1/2 text-[16px] text-(--grey) pl-20">
          
        </p>
      </div>
      <div>
        <Carousel
          opts={{
            align: "start",
            slidesToScroll: 1,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2">
                <div className="p-2">
                  <Card className="bg-[#161518] border-zinc-800">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <p className="text-zinc-400 text-sm mb-2">
                            {testimonial.company}
                          </p>
                          <h3 className="text-white text-2xl font-bold">
                            {testimonial.name}
                          </h3>
                        </div>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                      </div>

                      <p className="text-zinc-300 leading-relaxed mb-6">
                        {testimonial.text}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 fill-orange-500"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <svg
                          className="w-12 h-12 fill-orange-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                        </svg>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-between">
            <CarouselPrevious className="bg-white/5 border-0 text-white hover:bg-(--orange)" />
            <CarouselNext className="bg-(--orange) border-zinc-700 text-white hover:bg-orange-500" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
