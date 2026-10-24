"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`sticky top-0 left-0 right-0 z-50 bg-[#070707]/90 backdrop-blur-md border-b border-[#232220] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled ? "py-2.5 sm:py-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.6)]" : "py-3.5 sm:py-5 lg:py-6"
      }`}
    >
      <Container size="default" className="px-3 sm:px-8 lg:px-12 flex items-center justify-center">
        <nav
          aria-label="Main Navigation"
          className="flex items-center justify-center overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden max-w-full gap-1 sm:gap-3 md:gap-4 lg:gap-6 py-0.5"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`shrink-0 px-2 sm:px-3 lg:px-4 py-1.5 text-[11px] sm:text-xs lg:text-[13px] font-medium tracking-[0.06em] sm:tracking-[0.1em] lg:tracking-[0.14em] uppercase transition-colors duration-300 relative group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-sm ${
                link.isActive
                  ? "text-foreground font-semibold"
                  : "text-foreground-muted hover:text-white"
              }`}
            >
              <span>{link.label}</span>
              {/* Active / Hover accent line */}
              <span
                className={`absolute bottom-0 left-2 right-2 sm:left-3 sm:right-3 lg:left-4 lg:right-4 h-[1px] bg-accent transition-all duration-300 ${
                  link.isActive
                    ? "opacity-100 scale-x-100"
                    : "opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-100"
                }`}
              />
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}

export default Header;
