"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function useFadeIn() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => {
      // Reset state from any previous page visit
      el.classList.remove("fade-in--ready", "visible");

      const rect = el.getBoundingClientRect();
      if (rect.top > window.innerHeight) {
        // Below the fold: hide and watch for scroll
        el.classList.add("fade-in--ready");
        observer.observe(el);
      }
      // Already in viewport: leave visible, no animation needed
    });

    return () => observer.disconnect();
  }, [pathname]);
}
