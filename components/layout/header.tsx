"use client";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-20 w-full px-2"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-[1440px] px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
            "max-w-7xl rounded-2xl  border-white/10 bg-white/8 backdrop-blur-xl lg:px-5"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            {/* Logo + Mobile Toggle */}
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="text-white in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="text-white in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={cn(
                        "relative duration-200 text-(--grey) hover:text-(--orange)",
                        "before:absolute before:left-0 before:-bottom-1 before:h-0.5 before:w-0 before:bg-current before:transition-all before:duration-300 hover:before:w-full",
                        pathname === item.href &&
                        "text-(--orange) before:w-full"
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu + Contact Button */}
            <div className="bg-background in-data-[state=active]:block md:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-4 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:m-0 md:flex md:w-fit md:gap-6 md:space-y-0 md:border-transparent md:bg-transparent md:p-0 lg:shadow-none dark:shadow-none">
              {/* Mobile menu list */}
              <div className="md:hidden">
                <ul className="space-y-3 md:space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className={cn(
                          "relative inline-block text-muted-foreground duration-150 hover:text-(--orange) before:absolute before:left-0 before:-bottom-1 before:h-0.5 before:w-0 before:bg-current before:transition-all before:duration-300 hover:before:w-full",
                          pathname === item.href && "text-(--orange) before:w-full"
                        )}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Only Contact Us Button */}
              <Button asChild size="sm" className="px-3 py-3 md:px-5 md:py-5 bg-(--orange) hover:bg-[#ffffff0d] hover:text-(--orange) border border-(--orange) hover:border-(--orange) transition-all duration-300">
                <Link href="/contact">
                  <span>Contact Us</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
