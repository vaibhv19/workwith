"use client";

import React from "react";

interface ScrollDownArrowProps {
  targetId?: string;
  className?: string;
}

export default function ScrollDownArrow({
  targetId = "case-studies-list",
  className = "",
}: ScrollDownArrowProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      target.focus({ preventScroll: true });
    }
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      aria-label="Scroll to case study listing"
      className={`group inline-flex flex-col items-center justify-center p-2 text-heading hover:text-heading-hover transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-heading rounded-[2px] cursor-pointer ${className}`}
    >
      <svg
        viewBox="0 0 24 80"
        className="w-6 h-20 sm:h-[84px] overflow-visible text-current select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <line
          x1="12"
          y1="0"
          x2="12"
          y2="80"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeOpacity="0.25"
        />
        <g className="animate-arrow-down motion-reduce:animate-none">
          <line
            x1="12"
            y1="0"
            x2="12"
            y2="16"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path
            d="M6 10.5L12 16.5L18 10.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </a>
  );
}
