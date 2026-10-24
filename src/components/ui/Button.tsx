import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export type ButtonVariant = "primary" | "secondary" | "accent" | "text";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  icon?: "arrow-right" | "arrow-up-right" | "none";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  "aria-label"?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external = false,
  icon = "none",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  "aria-label": ariaLabel,
}: ButtonProps) {
  // Base classes for keyboard focus, transitions, and inline display
  const baseClasses =
    "inline-flex items-center justify-center font-sans uppercase font-medium tracking-[0.08em] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-heading disabled:opacity-50 disabled:pointer-events-none group";

  // Size variations
  const sizeClasses: Record<ButtonSize, string> = {
    sm: "text-[11px] px-4 py-2 rounded-[2px]",
    md: "text-xs px-5 py-3 rounded-[2px]",
    lg: "text-xs sm:text-sm px-7 py-3.5 rounded-[2px]",
  };

  // Text variant size overrides (no padding)
  const textSizeClasses: Record<ButtonSize, string> = {
    sm: "text-xs py-1 tracking-normal",
    md: "text-xs py-1 tracking-normal",
    lg: "text-sm py-1 tracking-normal",
  };

  // Visual variants
  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      "bg-heading text-white hover:bg-heading-hover hover:shadow-[0_8px_24px_-6px_rgba(211,47,47,0.25)] hover:-translate-y-[1px]",
    secondary:
      "bg-transparent text-[#171717] border border-border hover:border-heading hover:bg-[#FAFAFA] hover:text-heading",
    accent:
      "bg-heading text-white hover:bg-heading-hover hover:shadow-[0_8px_24px_-6px_rgba(211,47,47,0.25)] hover:-translate-y-[1px]",
    text:
      "bg-transparent text-link hover:text-link-hover font-semibold border-none !p-0",
  };

  const appliedSize = variant === "text" ? textSizeClasses[size] : sizeClasses[size];
  const combinedClasses = `${baseClasses} ${appliedSize} ${variantClasses[variant]} ${className}`.trim();

  const renderIcon = () => {
    if (icon === "arrow-right") {
      return (
        <ArrowRight
          size={14}
          className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
        />
      );
    }
    if (icon === "arrow-up-right") {
      return (
        <ArrowUpRight
          size={14}
          className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      );
    }
    return null;
  };

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
          aria-label={ariaLabel}
        >
          <span>{children}</span>
          {renderIcon()}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses} aria-label={ariaLabel}>
        <span>{children}</span>
        {renderIcon()}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      <span>{children}</span>
      {renderIcon()}
    </button>
  );
}
