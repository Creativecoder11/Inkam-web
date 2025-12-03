"use client";

import { Linkedin } from "lucide-react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function TeamSection() {
  const team = [
    {
      name: "Avery Collins",
      role: "Chief executive officer",
      image: "/asset/images/team-image.svg",
      linkedIn: "https://linkedin.com/in/avery-collins",
    },
    {
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      image: "/asset/images/team1.svg",
      linkedIn: "https://linkedin.com/in/sarah-johnson",
    },
    {
      name: "Michael Roberts",
      role: "Chief Marketing Officer",
      image: "/asset/images/team-image.svg",
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

      const img = card.querySelector(".image-wrap img") as HTMLImageElement | null;

      if (!info || !btn || !img) return;

      gsap.set([info, btn], { x: 100, opacity: 0 });
      gsap.set(img, { filter: "grayscale(100%)" });

      const tl = gsap.timeline({ paused: true });

      tl.to(info, {
        x: 0,
        opacity: 1,
        duration: 0.6,
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
              <svg xmlns="http://www.w3.org/2000/svg" width="167" height="2" viewBox="0 0 167 2" fill="none">
                <path d="M166 1H1" stroke="url(#paint0_linear_2239_2185)" strokeWidth="2" strokeLinecap="round" />
                <defs>
                  <linearGradient id="paint0_linear_2239_2185" x1="171" y1="0.49994" x2="158.078" y2="45.5518">
                    <stop stopColor="#FF8800" />
                    <stop offset="0.981629" stopColor="#0F0E11" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p>CORE VALUES</p>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="167" height="2" viewBox="0 0 167 2" fill="none">
                <path d="M1 1H166" stroke="url(#paint0_linear_2239_2159)" strokeWidth="2" strokeLinecap="round" />
                <defs>
                  <linearGradient id="paint0_linear_2239_2159" x1="-3.99979" y1="0.49994" x2="8.92156" y2="45.5518">
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
              ref={(el) => { cardsRef.current[index] = el; }}
              className="relative group bg-[#201F22] pt-10 cursor-pointer overflow-hidden rounded-3xl"
            >
              {/* LinkedIn Button */}
              <a
                href={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => { linkedInRef.current[index] = el; }}
                className="absolute top-4 right-4 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
                onClick={(e) => e.stopPropagation()}
                style={{ transform: "translateX(100px)", opacity: 0 }}
              >
                <Linkedin className="w-5 h-5 text-white" />
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
                  ref={(el) => { infoRef.current[index] = el; }}
                  className="absolute bottom-0 left-0 right-0 p-6"
                  style={{ transform: "translateX(100px)", opacity: 0 }}
                >
                  <div className="bg-gradient-to-r from-orange-500/90 to-orange-600/90 backdrop-blur-sm rounded-2xl p-4 border-t-2 border-orange-400">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-white/90 text-sm md:text-base">{member.role}</p>
                  </div>
                </div>
              </div>

              {/* Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-orange-500/50 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
