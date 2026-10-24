import React from "react";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow" | "reading";
}

export default function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  const sizeClasses = {
    default: "max-w-3xl", // 768px — centered middle-column for personal reading layout
    reading: "max-w-3xl",
    narrow: "max-w-2xl",  // 672px
    wide: "max-w-4xl",    // 896px
  };

  return (
    <div className={`w-full mx-auto px-4 sm:px-6 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
}
