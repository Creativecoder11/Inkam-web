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
          <div className="relative pt-20 md:pt-36">
            <div className="max-w-7xl mx-4 md:mx-auto">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mx-auto mt-10 md:max-w-6xl font-bold text-white text-5xl leading-[60px] max-md:font-semibold md:text-[80px] md:leading-[88px] -tracking-[0.6px] md:-tracking-[1.6px]"
                >
                  Unlock Bangladesh’s Untapped Digital Market
                </TextEffect>

                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-4 md:mt-8 max-w-2xl text-(--grey) text-base md:text-lg"
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
                  className="mt-8 md:mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                >
                  <div
                    key={1}
                    className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] p-0.5"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl px-3 py-5 md:px-5 md:py-7 text-sm md:text-base bg-(--orange) border border-(--orange) hover:bg-orange-500"
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
                    className="border border-(--orange) px-3 py-5 md:px-5 md:py-7 text-sm md:text-base text-white backdrop-blur-2xl bg-white/8 rounded-xl"
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
