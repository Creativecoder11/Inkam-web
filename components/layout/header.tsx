"use client";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import React, { useCallback } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  MobileNavToggle,
  MobileNavOverlay,
} from "@/components/layout/mobile-nav";

const menuItems = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Insights", href: "/insights" },
];

export const HeroHeader = () => {
  const pathname = usePathname();
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = useCallback(() => {
    setMenuState((prev) => !prev);
  }, []);

  const handleClose = useCallback(() => {
    setMenuState(false);
  }, []);

  return (
    <header>
      <nav className="fixed z-20 w-full px-2">
        <div
          className={cn(
            "mx-auto mt-2 max-w-[1440px] px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              "max-w-7xl rounded-2xl border-white/10 bg-white/8 backdrop-blur-xl lg:px-5",
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            {/* Logo + Mobile Toggle */}
            <div className="flex w-full items-center justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>

              {/* Mobile Nav Toggle */}
              <MobileNavToggle isOpen={menuState} onToggle={handleToggle} />
            </div>

            {/* Desktop Menu */}
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={cn(
                        "relative duration-200 text-base text-(--grey) hover:text-(--orange)",
                        "before:absolute before:left-0 before:-bottom-1 before:h-0.5 before:w-0 before:bg-current before:transition-all before:duration-300 hover:before:w-full",
                        pathname === item.href &&
                          "text-(--orange) before:w-full",
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop Contact Button */}
            <div className="hidden lg:block">
              <Button
                key={2}
                asChild
                size="lg"
                // variant="ghost"
                className="border border-(--orange) mr-4 px-3 py-5 md:px-5 md:py-5 text-sm md:text-base text-white backdrop-blur-2xl bg-white/10 rounded-lg"
              >
                <Link href="/agent">
                  <span className="text-nowrap text-(--orange)">
                    Join as an Agent
                  </span>
                </Link>
              </Button>
              <Button
                asChild
                size="sm"
                className="px-5 py-5 bg-(--orange) hover:bg-[#ffffff0d] text-sm md:text-base hover:text-(--orange) border border-(--orange) hover:border-(--orange) transition-all duration-300"
              >
                <Link href="/contact">
                  <span>Contact Us</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <MobileNavOverlay
        isOpen={menuState}
        onToggle={handleToggle}
        onClose={handleClose}
        menuItems={menuItems}
      />
    </header>
  );
};
