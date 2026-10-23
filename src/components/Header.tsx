"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    {
      label: "PROJECTS",
      href: "/projects",
      isActive: pathname === "/projects" || pathname === "/",
    },
    {
      label: "CASE STUDY",
      href: "/case-study",
      isActive: pathname === "/case-study" || pathname.startsWith("/case-study/"),
    },
    {
      label: "START A CONVERSATION",
      href: "/start-conversation",
      isActive: pathname === "/start-conversation",
    },
  ];

  return (
    <header className="w-full pt-6">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-4 border-b border-slate-800/80 flex items-center justify-between">
          {/* Left Side: Brand Identity */}
          <div className="flex items-center gap-3">
            <Link
              href="https://vaibhv19.dev"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-copper transition-all focus:outline-none"
            >
              Vaibhav Gupta
            </Link>
          </div>

          {/* Right Side: Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-5 sm:gap-6 font-mono text-xs uppercase tracking-wider"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors focus:outline-none text-sky-400 ${
                  link.isActive
                    ? "font-bold underline decoration-sky-400"
                    : "hover:underline"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="p-1.5 rounded-sm border border-slate-800 bg-[#111622] text-slate-300 hover:text-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400/50"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <nav
            aria-label="Mobile Primary Navigation"
            className="md:hidden py-4 border-b border-slate-800/80 flex flex-col gap-3 font-mono text-xs uppercase tracking-wider animate-page-transition"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1 text-sky-400 transition-colors focus:outline-none ${
                  link.isActive
                    ? "font-bold underline decoration-sky-400"
                    : "hover:underline"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
