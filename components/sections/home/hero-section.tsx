import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { HeroHeader } from "./header";

const transitionVariants = {
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
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
  return (
    <>
      <main className="overflow-hidden">
        <div
          aria-hidden
          className=" inset-0 isolate hidden opacity-65 contain-strict lg:block"
        >
          
        </div>
        <section>
          <div className="relative pt-24 md:pt-36">
            <div className="mx-auto max-w-8xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mx-auto mt-8 max-w-6xl font-bold  text-white text-5xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5rem] leading-[94px] "
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
                  Subtext highlighting the impact: “Connecting 3,000+ businesses to 170+ million consumers through our 19,000+ agents.
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
                      className="h-14 rounded-xl px-5 py-5 text-base bg-(--orange) hover:bg-orange-500 "
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
                      <span className="text-nowrap text-(--orange)">Join as an Agent</span>
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
