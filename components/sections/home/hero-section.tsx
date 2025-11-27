import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import type { Variants } from "framer-motion";
import LogoCloud from "./logo-marque";
import blurLogo from "@/public/asset/Images/Inkam Logo Blur Logo.svg";
import Image from "next/image";

const transitionVariants: { item: Variants } = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        // narrow type to a literal so it matches framer-motion's AnimationGeneratorType
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
  return (
    <>
      <main className="overflow-hidden relative">
        {/* 🔥 Two Tailwind Animated Background Colors */}
        <div className="w-full h-full overflow-hidden pointer-events-none -z-10">
          {/* Left Color */}
          <div
            className="
              absolute -left-20 top-0 w-[550px] h-[450px]
              bg-[#005CAF]/20 blur-[200px] rounded-full

            "
          />
          {/* <Image
            src={blurLogo}
            alt="Inkam Logo"
            width={1003}
            height={260}
            className="absolute right-80 top-1/4"
          /> */}
          {/* Right Color */}
          <div
            className="
              absolute -right-20 bottom-1/4 w-[550px] h-[450px]
              bg-[#FF8800]/20 blur-[200px] rounded-full
            "
            style={{ animationDelay: "1.8s" }}
          />
        </div>

        {/* ===== Hero Content ===== */}
        <section>
          <div className="relative pt-24 md:pt-36">
            <div className="mx-auto max-w-7xl">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mx-auto mt-8 max-w-6xl font-bold text-white text-5xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5rem] leading-[94px]"
                >
                  Unlock Bangladesh’s Untapped Digital Market
                </TextEffect>

                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-2xl text-(--grey) text-lg"
                >
                  Subtext highlighting the impact: “Connecting 3,000+ businesses
                  to 170+ million consumers through our 19,000+ agents.
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                >
                  <div
                    key={1}
                    className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] p-0.5"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="h-14 rounded-xl px-5 py-5 text-base bg-(--orange) hover:bg-orange-500"
                    >
                      <Link href="#link">
                        <span className="text-nowrap">Partner with Us</span>
                      </Link>
                    </Button>
                  </div>

                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-14 border border-(--orange) text-base text-white backdrop-blur-2xl bg-white/8 rounded-xl px-5"
                  >
                    <Link href="#link">
                      <span className="text-nowrap text-(--orange)">
                        Join as an Agent
                      </span>
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>
          </div>
        </section>
        <LogoCloud />
      </main>
    </>
  );
}
