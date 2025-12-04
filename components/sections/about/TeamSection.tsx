"use client";

import { Linkedin } from "lucide-react";
import { useRef, useEffect } from "react";
import Blog1 from "@/public/asset/Images/team1.svg";
import Blog2 from "@/public/asset/Images/team-image.svg";
import TeamCardIcon from "@/public/asset/icons/team-title-card-bg-icon.svg";

// import BlogImage from '@/public/assets/images/blog/blog-image.png';
import gsap from "gsap";
import Image from "next/image";

export default function TeamSection() {
  const team = [
    {
      name: "Avery Collins",
      role: "Chief executive officer",
      image: Blog1.src,
      linkedIn: "https://linkedin.com/in/avery-collins",
    },
    {
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      image: Blog2.src,
      linkedIn: "https://linkedin.com/in/sarah-johnson",
    },
    {
      name: "Michael Roberts",
      role: "Chief Marketing Officer",
      image: Blog1.src,
      linkedIn: "https://linkedin.com/in/michael-roberts",
    },
  ];

  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const infoRef = useRef<(HTMLDivElement | null)[]>([]);
  const linkedInRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const info = infoRef.current[index];
      const btn = linkedInRef.current[index];

      const img = card.querySelector(
        ".image-wrap img"
      ) as HTMLImageElement | null;

      if (!info || !btn || !img) return;

      gsap.set([info, btn], { x: 100, opacity: 0 });
      gsap.set(img, { filter: "grayscale(100%)" });

      const tl = gsap.timeline({ paused: true });

      tl.to(info, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      })
        .to(
          btn,
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .to(
          img,
          {
            filter: "grayscale(0%)",
            duration: 0.4,
          },
          0
        )
        // ⭐ Delay blur so it activates AFTER the info panel shows
        .to(
          info,
          {
            backdropFilter: "blur(8px)",
            duration: 0.1,
            ease: "power3.out",
          },
          "+=0.4" // ← delay blur start (adjust this value as needed)
        );

      const handleEnter = () => tl.play();
      const handleLeave = () => tl.reverse();

      card.addEventListener("mouseenter", handleEnter);
      card.addEventListener("mouseleave", handleLeave);

      return () => {
        card.removeEventListener("mouseenter", handleEnter);
        card.removeEventListener("mouseleave", handleLeave);
      };
    });
  }, []);

  return (
    <section className="py-16 md:py-25">
      <div className="max-w-7xl mx-auto ">
        {/* Header */}
        <div className="text-white flex flex-col gap-6">
          <div className="flex justify-center items-center gap-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="167"
                height="2"
                viewBox="0 0 167 2"
                fill="none"
              >
                <path
                  d="M166 1H1"
                  stroke="url(#paint0_linear_2239_2185)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2239_2185"
                    x1="171"
                    y1="0.49994"
                    x2="158.078"
                    y2="45.5518"
                  >
                    <stop stopColor="#FF8800" />
                    <stop offset="0.981629" stopColor="#0F0E11" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p>CORE VALUES</p>
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
                  >
                    <stop stopColor="#FF8800" />
                    <stop offset="0.981629" stopColor="#0F0E11" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <h2 className="text-4xl font-medium leading-18 lg:text-6xl text-center">
            Values Driving Our Mission
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-13 gap-6 md:gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="relative group bg-[#201F22] pt-10 cursor-pointer overflow-hidden rounded-3xl"
            >
              {/* LinkedIn Button */}
              <a
                href={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => {
                  linkedInRef.current[index] = el;
                }}
                className="absolute top-4 right-4 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
                onClick={(e) => e.stopPropagation()}
                style={{ transform: "translateX(100px)", opacity: 0 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M25.5999 25.6002V16.2242C25.5999 11.6162 24.6079 8.09619 19.2319 8.09619C16.6399 8.09619 14.9119 9.50419 14.2079 10.8482H14.1439V8.51219H9.05591V25.6002H14.3679V17.1202C14.3679 14.8802 14.7839 12.7362 17.5359 12.7362C20.2559 12.7362 20.2879 15.2642 20.2879 17.2482V25.5682H25.5999V25.6002Z"
                    fill="white"
                  />
                  <path
                    d="M0.416016 8.51221H5.72802V25.6002H0.416016V8.51221Z"
                    fill="white"
                  />
                  <path
                    d="M3.072 0C1.376 0 0 1.376 0 3.072C0 4.768 1.376 6.176 3.072 6.176C4.768 6.176 6.144 4.768 6.144 3.072C6.144 1.376 4.768 0 3.072 0Z"
                    fill="white"
                  />
                </svg>
              </a>

              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                <div className="absolute inset-0 image-wrap">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <div
                  ref={(el) => {
                    infoRef.current[index] = el;
                  }}
                  className="absolute bottom-10 left-10 right-0 "
                  style={{
                    transform: "translateX(100px)",
                    opacity: 0,
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div
                    className="
                        p-4 relative
                        rounded-tl-[16px] rounded-bl-[16px] rounded-tr-none rounded-br-none
                        border-t-[4px] border-b-[4px] border-l-[4px] border-(--orange)
                        bg-[linear-gradient(90deg,rgba(22,21,24,0.90)_0%,rgba(22,21,24,0.60)_100%)]

                        "
                  >
                    <div
                      className="
                        absolute -right-10 -bottom-4
                        w-[120px] h-[70px]
                        bg-no-repeat bg-contain
                    "
                      style={{
                        backgroundImage: `url(${TeamCardIcon.src})`,
                      }}
                    />
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-white/90 text-sm md:text-base">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
