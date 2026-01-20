"use client";

import { useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  href: string;
}

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  menuItems: NavItem[];
  socialLinks?: SocialLink[];
}

// Animation variants with proper typing
const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25, ease: "easeIn", delay: 0.1 },
  },
};

const menuContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn",
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

const menuItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.35,
      ease: [0.25, 0.46, 0.45, 0.94] as const, // Custom cubic bezier
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    filter: "blur(4px)",
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const socialContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.05,
      delayChildren: 0.35,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15 },
  },
};

// Toggle button component
export function MobileNavToggle({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      aria-label="Open Menu"
      aria-expanded={isOpen}
      className="relative z-[10001] flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200 hover:bg-white/10 lg:hidden"
    >
      <Menu className="size-6 text-white" />
    </button>
  );
}

// Main mobile nav overlay
export function MobileNavOverlay({
  isOpen,
  onClose,
  menuItems,
  socialLinks = defaultSocialLinks,
}: MobileNavProps) {
  const pathname = usePathname();

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Close when pathname changes (navigation)
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  const handleLinkClick = () => {
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleBackdropClick}
            className="fixed inset-0 z-9999 bg-black/80 backdrop-blur-md"
            style={{
              paddingTop: "env(safe-area-inset-top)",
              paddingBottom: "env(safe-area-inset-bottom)",
            }}
          />

          {/* Menu Content */}
          <motion.nav
            variants={menuContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-10000 flex flex-col overflow-y-auto overscroll-contain"
            style={{
              paddingTop: "calc(env(safe-area-inset-top) + 80px)",
              paddingBottom: "env(safe-area-inset-bottom)",
            }}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={onClose}
              className="group absolute right-6 top-6 z-[10002] flex h-10 w-10 items-center justify-center transition-transform duration-200 hover:scale-110"
              aria-label="Close menu"
            >
              <div className="relative size-8">
                {/* Base X icon */}
                <X className="size-8 text-white/60 stroke-[2]" />
                
                {/* Masked glowing X overlay */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="relative size-full" style={{ maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'white\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'M18 6 6 18\'/%3E%3Cpath d=\'m6 6 12 12\'/%3E%3C/svg%3E")', maskSize: 'contain', maskPosition: 'center', maskRepeat: 'no-repeat', WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'white\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'M18 6 6 18\'/%3E%3Cpath d=\'m6 6 12 12\'/%3E%3C/svg%3E")', WebkitMaskSize: 'contain', WebkitMaskPosition: 'center', WebkitMaskRepeat: 'no-repeat' }}>
                    {/* Scanning glow line - angled and glowy */}
                    <motion.div
                      initial={{ left: "-30%" }}
                      animate={{ left: "130%" }}
                      transition={{ 
                        delay: 1,
                        duration: 1.2,
                        ease: "linear",
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                      className="absolute -top-2 h-[140%] w-[6px]"
                      style={{
                        transform: "rotate(-20deg)",
                        background: "linear-gradient(to bottom, transparent 0%, rgba(255, 200, 100, 0.4) 15%, rgba(255, 140, 0, 1) 50%, rgba(255, 200, 100, 0.4) 85%, transparent 100%)",
                        boxShadow: "0 0 25px 6px rgba(255, 140, 0, 0.9), 0 0 15px 3px rgba(255, 200, 100, 0.6), 0 0 8px 2px rgba(255, 255, 255, 0.5)",
                        filter: "blur(1px)"
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.button>

            <div className="flex flex-1 flex-col justify-between px-8 py-6">
              {/* Primary Navigation Links */}
              <div className="flex flex-col gap-1">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    variants={menuItemVariants}
                    custom={index}
                  >
                    <Link
                      href={item.href}
                      onClick={handleLinkClick}
                      className={cn(
                        "group relative flex items-center py-4 text-4xl font-medium tracking-tight transition-colors duration-200",
                        pathname === item.href
                          ? "text-(--orange)"
                          : "text-white hover:text-(--orange)"
                      )}
                    >
                      <span className="relative">
                        {item.name}
                        {/* Active indicator */}
                        {pathname === item.href && (
                          <motion.span
                            layoutId="activeIndicator"
                            className="absolute -left-6 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-(--orange)"
                          />
                        )}
                      </span>
                      {/* Hover underline */}
                      <span className="absolute bottom-3 left-0 h-0.5 w-0 bg-(--orange) transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </motion.div>
                ))}

                {/* Contact Button */}
                <motion.div variants={menuItemVariants} className="flex gap-4">
                  <Link
                    href="/agent"
                    onClick={handleLinkClick}
                    className="mt-6 inline-flex items-center justify-center rounded-full border border-(--orange) bg-white/20 px-6 py-2 text-lg font-semibold text-white transition-all duration-300 hover:bg-transparent hover:text-(--orange)"
                  >
                    Become an Agent
                  </Link>
                  <Link
                    href="/contact"
                    onClick={handleLinkClick}
                    className="mt-6 inline-flex items-center justify-center rounded-full border border-(--orange) bg-(--orange) px-6 py-2 text-lg font-semibold text-black transition-all duration-300 hover:bg-transparent hover:text-(--orange)"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>

              {/* Secondary Links / Social Icons */}
              <motion.div
                variants={socialContainerVariants}
                className="mt-auto pt-8"
              >
                <motion.p
                  variants={menuItemVariants}
                  className="mb-4 text-sm font-medium uppercase tracking-widest text-white/50"
                >
                  Follow Us
                </motion.p>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={menuItemVariants}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors duration-200 hover:border-(--orange) hover:text-(--orange)"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>

                {/* Copyright / Additional Info */}
                <motion.p
                  variants={menuItemVariants}
                  className="mt-8 text-sm text-white/40"
                >
                  © {new Date().getFullYear()} Inkam. All rights reserved.
                </motion.p>
              </motion.div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}

// Default social links with inline SVG icons
const defaultSocialLinks: SocialLink[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/inkamapp",
    icon: (
      <svg
        className="size-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/79548722",
    icon: (
      <svg
        className="size-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

// Compound export for easy usage
export const MobileNav = {
  Toggle: MobileNavToggle,
  Overlay: MobileNavOverlay,
};
