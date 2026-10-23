"use client";

import React, { useRef, useEffect, useState } from "react";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  delayMs?: number;
  threshold?: number;
}

export default function SectionReveal({
  children,
  className = "",
  delay,
  delayMs,
  threshold = 0.08,
}: SectionRevealProps) {
  const effectiveDelay = delayMs ?? delay ?? 0;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (effectiveDelay > 0) {
            setTimeout(() => setIsVisible(true), effectiveDelay);
          } else {
            setIsVisible(true);
          }
          observer.disconnect();
        }
      },
      { threshold }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [effectiveDelay, threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: isVisible
          ? `opacity 800ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 800ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
          : "none",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
