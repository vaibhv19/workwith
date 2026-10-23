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
    default: "max-w-6xl",
    wide: "max-w-[1440px]",
    narrow: "max-w-4xl",
    reading: "max-w-3xl",
  };

  return (
    <div className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
}
