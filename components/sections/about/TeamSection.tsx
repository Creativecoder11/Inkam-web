"use client";

import { Linkedin } from "lucide-react";
import { useEffect, useRef } from "react";

export default function TeamSection() {
  const team = [
    {
      name: "Avery Collins",
      role: "Chief executive officer",
      image: "/team/avery-collins.jpg", // Replace with your image path
      linkedIn: "https://linkedin.com/in/avery-collins"
    },
    {
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      image: "/team/sarah-johnson.jpg", // Replace with your image path
      linkedIn: "https://linkedin.com/in/sarah-johnson"
    },
    {
      name: "Michael Roberts",
      role: "Chief Marketing Officer",
      image: "/team/michael-roberts.jpg", // Replace with your image path
      linkedIn: "https://linkedin.com/in/michael-roberts"
    }
  ];

  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const infoRef = useRef<(HTMLDivElement | null)[]>([]);
  const linkedInRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Dynamically import gsap
    import('gsap').then((gsapModule) => {
      const gsap = gsapModule.default;

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const info = infoRef.current[index];
        const linkedIn = linkedInRef.current[index];
        const img = card.querySelector('img');

        // Set initial states
        gsap.set(info, { x: 100, opacity: 0 });
        gsap.set(linkedIn, { x: 100, opacity: 0 });

        // Hover animation
        card.addEventListener('mouseenter', () => {
          // Animate info from right to left
          gsap.to(info, {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out"
          });

          // Animate LinkedIn button from right to left
          gsap.to(linkedIn, {
            x: 0,
            opacity: 1,
            duration: 0.5,
            delay: 0.1,
            ease: "power3.out"
          });

          // Image color effect (remove grayscale)
          if (img) {
            gsap.to(img, {
              filter: "grayscale(0%)",
              duration: 0.4,
              ease: "power2.out"
            });
          }
        });

        card.addEventListener('mouseleave', () => {
          // Reverse animations - slide back to right
          gsap.to(info, {
            x: 100,
            opacity: 0,
            duration: 0.4,
            ease: "power3.in"
          });

          gsap.to(linkedIn, {
            x: 100,
            opacity: 0,
            duration: 0.4,
            ease: "power3.in"
          });

          // Return to grayscale
          if (img) {
            gsap.to(img, {
              filter: "grayscale(100%)",
              duration: 0.4,
              ease: "power2.in"
            });
          }
        });
      });
    });

    // Cleanup not needed for event listeners added to refs
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent via-orange-500 to-orange-500"></div>
            <p className="text-orange-500 text-sm md:text-base font-medium tracking-wider uppercase">
              Our Team
            </p>
            <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent via-orange-500 to-orange-500"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Meet Our
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Leadership Team
            </span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="relative group cursor-pointer overflow-hidden rounded-3xl"
            >
              {/* LinkedIn Button */}
              <a
                href={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => { linkedInRef.current[index] = el; }}
                className="absolute top-4 right-4 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>

              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale"
                  style={{ filter: 'grayscale(100%)' }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Info Card */}
                <div
                  ref={(el) => { infoRef.current[index] = el; }}
                  className="absolute bottom-0 left-0 right-0 p-6"
                >
                  <div className="bg-gradient-to-r from-orange-500/90 to-orange-600/90 backdrop-blur-sm rounded-2xl p-4 border-t-2 border-orange-400">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-white/90 text-sm md:text-base">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Border on Hover */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-orange-500/50 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}