"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  BlueskyIcon,
  XIcon,
  ThreadsIcon,
} from "@/components/BrandIcons";
import Container from "@/components/ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    const el = footerRef.current;
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-background text-foreground-muted border-t border-border overflow-hidden mt-auto"
      style={{
        clipPath: isVisible ? "inset(0 0% 0 0%)" : "inset(0 4% 0 4%)",
        transform: isVisible ? "scale(1)" : "scale(0.98)",
        opacity: isVisible ? 1 : 0.4,
        transition:
          "clip-path 900ms cubic-bezier(0.16, 1, 0.3, 1), transform 900ms cubic-bezier(0.16, 1, 0.3, 1), opacity 900ms cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "clip-path, transform, opacity",
      }}
    >
      <Container size="default" className="pt-10 sm:pt-14 pb-12 sm:pb-16 space-y-10">
        {/* Contact Bar & Social Row */}
        <div className="py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-border">
          <div className="flex items-center space-x-2">
            <a
              href="mailto:contact@vaibhv19.dev"
              className="text-xs sm:text-sm font-mono text-link hover:text-link-hover transition-colors font-medium"
            >
              contact@vaibhv19.dev
            </a>
          </div>

          <div className="flex items-center space-x-5 text-[#171717]">
            <a
              href="https://github.com/vaibhv19"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-link transition-colors duration-300 p-1 -m-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-link rounded-sm"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4 text-current" />
            </a>
            <a
              href="https://www.linkedin.com/in/vaibhv19"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-link transition-colors duration-300 p-1 -m-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-link rounded-sm"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4 text-current" />
            </a>
            <a
              href="https://x.com/vaibhv_19"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-link transition-colors duration-300 p-1 -m-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-link rounded-sm"
              aria-label="X (Twitter)"
            >
              <XIcon className="w-4 h-4 text-current" />
            </a>
            <a
              href="mailto:contact@vaibhv19.dev"
              className="hover:text-link transition-colors duration-300 p-1 -m-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-link rounded-sm"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-current" />
            </a>
          </div>
        </div>
        {/* Minimal Bottom Legal & Copyright Row */}
     
          <div className="flex flex-col items-center sm:items-start space-y-1 text-xs text-[#171717]">
            <div>
              &copy; {currentYear} Vaibhav Gupta. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
