"use client";

import React, { useEffect, useRef, useState } from "react";

export interface TextRevealProps {
  text: string;
  className?: string;
  charDelayMs?: number;
  threshold?: number;
  as?: "p" | "h1" | "h2" | "h3" | "span" | "div";
}

export default function TextReveal({
  text,
  className = "",
  charDelayMs = 18,
  threshold = 0.15,
  as: Component = "p",
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayedCount, setDisplayedCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setDisplayedCount(text.length);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    const el = containerRef.current;
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [threshold, text.length]);

  useEffect(() => {
    if (!hasStarted) return;
    if (displayedCount >= text.length) return;

    let lastTime = performance.now();
    let animationFrameId: number;

    const tick = (currentTime: number) => {
      const elapsed = currentTime - lastTime;
      if (elapsed >= charDelayMs) {
        const step = Math.max(1, Math.floor(elapsed / charDelayMs));
        setDisplayedCount((prev) => Math.min(prev + step, text.length));
        lastTime = currentTime;
      }

      if (displayedCount < text.length) {
        animationFrameId = requestAnimationFrame(tick);
      }
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [hasStarted, displayedCount, text.length, charDelayMs]);

  const visibleText = text.slice(0, displayedCount);
  const remainingText = text.slice(displayedCount);

  return (
    <Component
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={containerRef as any}
      className={`relative ${className}`}
    >
      {/* Screen-reader full text representation (available immediately without waiting for animation) */}
      <span className="sr-only">{text}</span>

      {/* Visual animated representation */}
      <span aria-hidden="true">
        <span>{visibleText}</span>
        {displayedCount < text.length && (
          <span className="opacity-0 select-none">{remainingText}</span>
        )}
      </span>
    </Component>
  );
}
