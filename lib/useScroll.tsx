"use client";
import { gsap } from "gsap";
import { useState, useEffect } from "react";
import ScrollSmoother from "gsap/ScrollSmoother";

export default function useScrollSmooth() {
  const [isScrollSmooth, setIsScrollSmooth] = useState<boolean>(true);
  useEffect(() => {
    const smoothWrapper = document.getElementById("smooth-wrapper");
    const smoothContent = document.getElementById("smooth-content");

    if (smoothWrapper && smoothContent && isScrollSmooth) {

      gsap.config({
        nullTargetWarn: false,
      });

      // register the plugin from the gsap package
      gsap.registerPlugin(ScrollSmoother);

      const smoother = ScrollSmoother.create({
        smooth: 2,
        effects: true,
        smoothTouch: 0.1,
        normalizeScroll: false,
        ignoreMobileResize: true,
      });

      return () => {
        if (smoother && typeof smoother.kill === "function") {
          smoother.kill();
        }
      };
    }

    return;
  }, [isScrollSmooth]);
}
