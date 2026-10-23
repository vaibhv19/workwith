# 1nfinity Animation & Motion System Audit

**Source of Truth:** `D:\Work\Projects----Commercial\1nfinity\website`  
**Target Project:** `D:\Work\Projects----Personal\MyWork` (`https://mywork.vaibhv19.dev`)  
**Audit Date:** October 24, 2026  

---

## 1. Verified Inventory of 1nfinity Animation Patterns

A thorough audit of `D:\Work\Projects----Commercial\1nfinity\website` across `app/globals.css`, `tailwind.config.js`, and all components revealed that 1nfinity uses **zero external animation libraries** (no Framer Motion, no GSAP, no Locomotive Scroll). All motion is built with native CSS keyframes, CSS transitions using a bespoke cubic bezier, IntersectionObserver triggers, and lightweight `requestAnimationFrame` hooks.

### A. Marquee & Continuous Motion Tracks
- **Source Location:** `app/globals.css`, `components/home/HomePresence.tsx`, `components/about/AboutDifference.tsx`.
- **Implementation:**
  - CSS Keyframes: `@keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-100%); } }` and `@keyframes marquee-reverse`.
  - Twin track duplication: `<div className="flex shrink-0 animate-marquee">{track}</div><div className="flex shrink-0 animate-marquee" aria-hidden="true">{track}</div>`.
  - Edge fade masks: Left/right absolute gradient overlays from canvas color (`#0B0B0B`) to transparent.
  - Hover Pause: `group hover:[animation-play-state:paused]`.
  - Accessibility & Safety: Screen-reader duplication eliminated via `aria-hidden="true"`; completely disabled via `motion-reduce:[&>*]:animate-none`.
- **Durations:** 40s (standard text track), 48s (moving card track), 60s (slow secondary track).

### B. Character-by-Character Progressive Text Reveal
- **Source Location:** `components/about/AboutOurVision.tsx`, `components/about/AboutWhatWeDo.tsx`, `components/about/AboutOurMission.tsx`.
- **Implementation:**
  - JavaScript `requestAnimationFrame` with `performance.now()`.
  - Calculates normalized progress across label (600ms), headline (2200ms), and body (2400ms) slices.
  - Screen Reader Safety: Animated character slice wrapped in `<span aria-hidden="true">`, while full canonical string is accessible via `<span className="sr-only">`.
  - Motion Safety: Immediately sets 100% text revealed if `prefers-reduced-motion` is detected.
  - Non-blocking: Triggers once on IntersectionObserver entry.

### C. Curtain Reveal Footer (`clip-path` + Scale)
- **Source Location:** `components/Footer.tsx`.
- **Implementation:**
  - IntersectionObserver detects footer entry (threshold: 0.08).
  - Transitions `clip-path` from `inset(0 6% 0 6%)` to `inset(0 0% 0 0%)`.
  - Simultaneously transitions scale from `scale(0.97) translateY(10px)` to `scale(1) translateY(0)` and opacity from `0.2` to `1`.
  - Easing: `cubic-bezier(0.16, 1, 0.3, 1)` over 900ms.
  - Reduced-motion bypass: `motion-reduce:![clip-path:none] motion-reduce:!transform-none motion-reduce:!opacity-100`.

### D. Arrow & Link Micro-Interactions
- **Source Location:** `components/ui/Button.tsx`, `components/home/HomePresence.tsx`, `components/Navbar.tsx`.
- **Implementation:**
  - Button primary: `transition: all 400ms cubic-bezier(0.16, 1, 0.3, 1); hover: translateY(-1px); box-shadow: 0 8px 24px -6px rgba(244, 239, 230, 0.15)`.
  - Arrow right translation: `ArrowRight size={14} className="ml-2 transition-transform duration-300 group-hover:translate-x-1"`.
  - Arrow up-right diagonal lift: `ArrowUpRight size={14} className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"`.
  - Directional indicator animation: `@keyframes arrow-down` over 2.6s downward pulsing.
  - Expanding underline transition: `underline decoration-transparent group-hover:decoration-foreground underline-offset-[10px]` with `group-hover:translate-x-4`.

### E. Cinematic Image Hover Zoom
- **Source Location:** `components/portfolio/PortfolioGallery.tsx`.
- **Implementation:**
  - `transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]`.
  - On hover: `opacity-65 -> opacity-85` and `scale-100 -> scale-105`.
  - Subtle, slow zoom creates high-end tactile response without abrupt jarring motion.

### F. Rotational Offset Hover Straighten
- **Source Location:** `components/home/HomeProcess.tsx`, `components/about/AboutDifference.tsx`.
- **Implementation:**
  - Resting subtle rotation (`rotate-[1.2deg]`, `-rotate-[1.4deg]`), straightening on hover (`hover:rotate-0`) with `transition-all duration-300` and `motion-reduce:transform-none`.

### G. 4-Second Brand Splash (`BrandIntro.tsx`)
- **Source Location:** `components/BrandIntro.tsx`.
- **Implementation:** Full-viewport desktop-only overlay running a 4.0s sequence with ESC key bypass.
- **Classification for MyWork:** **Not appropriate.** A developer portfolio requires immediate content discovery; a 4-second splash screen degrades developer UX.

---

## 2. Selection & Classification Matrix for MyWork

| Animation / Interaction Pattern | Classification | Target Placement in MyWork |
| :--- | :--- | :--- |
| **1. Continuous Marquee Track** | **Reusable** | Systems & Architecture capabilities marquee in `/projects` (highlighting core competencies: Distributed Systems, WebAssembly, Worker Queues, Local AI Orchestration, Security Guardrails, etc.). Includes pause-on-hover, gradient edge masks, and `prefers-reduced-motion` bypass. |
| **2. Curtain Reveal Footer** | **Reusable** | Apply to `src/components/Footer.tsx`: subtle `clip-path` + `scale(0.97) -> scale(1)` reveal on viewport entry. |
| **3. Cinematic Image Hover Zoom** | **Reusable** | Apply 700ms `scale-105` + opacity transition to project preview assets in `/projects` and `/case-study`. |
| **4. Arrow & Link Micro-Interactions** | **Reusable** | Ensure all `Button.tsx` variants and editorial links use 1nfinity's exact `cubic-bezier(0.16, 1, 0.3, 1)` and hover translations. |
| **5. Character Reveal / Typewriter** | **Adaptable** | Encapsulate into a lightweight, reusable `TextReveal` component with screen-reader `<span className="sr-only">` fallback and instant reduced-motion display. |
| **6. 4-Second Brand Splash** | **Not Appropriate** | Omitted to protect portfolio immediacy and Lighthouse LCP performance. |
