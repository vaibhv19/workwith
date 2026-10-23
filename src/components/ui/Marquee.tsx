"use client";

import React from "react";

export interface MarqueeProps {
  children: React.ReactNode;
  speed?: "slow" | "normal" | "fast";
  reverse?: boolean;
  pauseOnHover?: boolean;
  fadeEdges?: boolean;
  className?: string;
  itemClassName?: string;
}

export default function Marquee({
  children,
  speed = "normal",
  reverse = false,
  pauseOnHover = true,
  fadeEdges = true,
  className = "",
  itemClassName = "",
}: MarqueeProps) {
  const speedClass =
    speed === "slow"
      ? "duration-[60s]"
      : speed === "fast"
      ? "animate-marquee-fast"
      : "animate-marquee";

  const animationClass = reverse ? "animate-marquee-reverse" : speedClass;

  return (
    <div
      className={`relative w-full overflow-hidden select-none group ${className}`}
      role="region"
      aria-label="Capabilities marquee"
    >
      {/* Left gradient mask for seamless entry */}
      {fadeEdges && (
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-r from-[#0B0B0B] to-transparent"
          aria-hidden="true"
        />
      )}

      {/* Marquee tracks container */}
      <div
        className={`flex w-fit items-center whitespace-nowrap motion-reduce:transform-none`}
      >
        {/* Track 1: Accessible track */}
        <div
          className={`flex shrink-0 items-center justify-around min-w-full ${animationClass} ${
            pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
          } motion-reduce:animate-none ${itemClassName}`}
        >
          {children}
        </div>

        {/* Track 2: Visual clone for seamless infinite loop (hidden from assistive tech) */}
        <div
          aria-hidden="true"
          className={`flex shrink-0 items-center justify-around min-w-full ${animationClass} ${
            pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
          } motion-reduce:animate-none motion-reduce:hidden ${itemClassName}`}
        >
          {children}
        </div>
      </div>

      {/* Right gradient mask for seamless departure */}
      {fadeEdges && (
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-l from-[#0B0B0B] to-transparent"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
