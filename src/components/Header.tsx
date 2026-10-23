"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

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
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-50 bg-[#070707]/90 backdrop-blur-md border-b border-[#232220] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled ? "py-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.6)]" : "py-5 sm:py-6"
        }`}
      >
        <Container size="default" className="flex items-center justify-between">
          {/* Brand Wordmark & Identity */}
          <Link
            href="/"
            className="group flex items-center space-x-3 py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-sm"
            aria-label="Vaibhav Gupta — MyWork Home"
          >
            <span className="font-display text-lg sm:text-xl font-medium tracking-tight text-foreground group-hover:text-white uppercase leading-none">
              Vaibhav Gupta
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-[2px] bg-surface-elevated border border-border text-accent uppercase tracking-widest select-none">
              MyWork
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center space-x-2 sm:space-x-4 lg:space-x-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 lg:px-4 py-1.5 text-xs lg:text-[13px] font-medium tracking-[0.14em] uppercase transition-colors duration-300 relative group ${
                  link.isActive
                    ? "text-foreground font-semibold"
                    : "text-foreground-muted hover:text-white"
                }`}
              >
                <span>{link.label}</span>
                {/* Active / Hover accent line */}
                <span
                  className={`absolute bottom-0 left-3 right-3 lg:left-4 lg:right-4 h-[1px] bg-accent transition-all duration-300 ${
                    link.isActive
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="p-2 rounded-[2px] text-foreground-muted hover:text-foreground bg-surface border border-border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </Container>
      </header>

      {/* Editorial Mobile Menu Overlay (1nfinity System) */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation"
          className="fixed inset-0 z-40 bg-[#0B0B0B] flex flex-col justify-between pt-24 pb-8 px-6 sm:px-10 md:hidden overflow-y-auto animate-fade-in"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-ambient-glow pointer-events-none" />

          {/* Mobile Nav Links */}
          <nav className="relative z-10 flex flex-col space-y-3 pt-6">
            {navLinks.map((link, index) => {
              const formattedIndex = `0${index + 1}`;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group flex items-center justify-between py-4 border-b border-border transition-colors ${
                    link.isActive ? "text-foreground font-semibold" : "text-foreground-muted hover:text-white"
                  }`}
                >
                  <div className="flex items-baseline space-x-3">
                    <span className="font-metric text-xs font-bold text-accent">
                      {formattedIndex}
                    </span>
                    <span className="font-display text-2xl font-medium tracking-tight uppercase">
                      {link.label}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className={`transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                      link.isActive ? "text-accent" : "text-foreground-subtle group-hover:text-accent"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile Bottom Details */}
          <div className="relative z-10 pt-8 border-t border-border">
            <a
              href="mailto:contact@vaibhv19.dev"
              className="text-foreground hover:text-accent transition-colors font-mono text-sm inline-flex items-center gap-2"
            >
              <span>contact@vaibhv19.dev</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
