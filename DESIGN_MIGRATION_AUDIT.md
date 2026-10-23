# Design Reference Migration & Audit Report

**Source of Visual Design Truth:** `D:\Work\Projects----Commercial\1nfinity\website`  
**Target Project:** `D:\Work\Projects----Personal\MyWork` (`https://mywork.vaibhv19.dev`)  
**Audit Date:** October 24, 2026  

---

## 1. Audit of the 1nfinity Reference Website

The 1nfinity website (`D:\Work\Projects----Commercial\1nfinity\website`) is a bespoke digital platform built with Next.js App Router and Tailwind CSS under an uncompromising "Restraint Over Decoration" design philosophy.

### A. Color Palette & Surfaces
- **Canvas Base:**
  - Background: `#0B0B0B` (Deep, warm near-black canvas).
  - Deep Background: `#070707` (Used in navbar header and footer).
- **Surfaces & Cards:**
  - Default Surface: `#121212`.
  - Elevated Surface: `#181716`.
  - Subtle Surface: `#1F1E1C`.
  - Glass Overlay: `rgba(18, 18, 18, 0.75)` with `backdrop-filter: blur(12px)`.
- **Borders:**
  - Default Border: `#232220` (Warm deep gray-brown).
  - Light Border: `#32302C`.
  - Subtle Border: `#1A1918`.
  - Accent Border: `#8C7355`.
- **Foreground / Text:**
  - Primary Foreground: `#F4EFE6` (Warm ivory / cream off-white).
  - Ivory Highlight: `#F9F6EE`.
  - Muted Text: `#9E9A91` (Warm taupe-gray for secondary text).
  - Subtle Text: `#66635D` (Darker neutral for metadata, timestamps, and captions).
- **Restrained Accents:**
  - Accent Primary: `#C4A482` (Warm champagne / sand / bronze).
  - Accent Muted: `#8C7355`.
  - Accent Tan: `#A38F78`.
  - Accent Champagne: `#E3D7C7`.
  - Accent Subtle: `rgba(196, 164, 130, 0.08)`.

### B. Typography & Font Hierarchy
- **Font Stacks:**
  - **Headings & Display:** `Clash Display` (via Fontshare CDN: `@300,400,500,600,700`).
  - **Numerals & Metrics:** `Satoshi` (via Fontshare CDN: `@300,400,500,700,900`).
  - **Body & Labels:** `Inter` (Google Fonts: `@300,400,500,600,700`).
- **Hierarchy:**
  - Hero Display: `clamp(2.75rem, 6.5vw, 6.25rem)`, line-height 1.04, tracking `-0.035em`.
  - H1 Display: `clamp(2.25rem, 4.5vw, 4.25rem)`, line-height 1.08, tracking `-0.025em`.
  - H2 Display: `clamp(1.75rem, 3.2vw, 2.75rem)`, line-height 1.15, tracking `-0.02em`.
  - Eyebrow: `0.6875rem` (11px), tracking `0.2em`, uppercase, weight 600, `text-accent` (`#C4A482`).
  - Lead Paragraph: `clamp(1rem, 1.25vw, 1.25rem)`, line-height 1.65, weight 300, `text-foreground-muted` (`#9E9A91`).
  - Standard Body: `0.9375rem` (15px), line-height 1.6, `text-foreground-muted` (`#9E9A91`).

### C. Architectural Texture & Background
- **Fixed Grid Layer (`.fixed-bg-layer`):**
  A fixed, hardware-accelerated 40px grid:
  ```css
  background-color: #0B0B0B;
  background-image: 
    linear-gradient(to right, rgba(244, 239, 230, 0.048) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(244, 239, 230, 0.048) 1px, transparent 1px);
  background-size: 40px 40px;
  ```
  Replaces all organic or decorative canvas backgrounds.

### D. Navigation & Header
- Fixed header in `#070707`/95 with backdrop blur and `#232220` border.
- Active link marked with bottom accent line (`#C4A482`).
- Responsive mobile drawer with numbered links in `Satoshi` and `ArrowUpRight` indicators.

### E. Motion Foundation
- Zero heavy animation libraries (zero Framer Motion).
- Native CSS transitions using `cubic-bezier(0.16, 1, 0.3, 1)`.
- IntersectionObserver reveals (`SectionReveal`) with opacity and 24px translateY lift.
- Full support for `prefers-reduced-motion`.

---

## 2. Audit of Target Project (`MyWork`)

### Current State
- Built with Next.js 16 (Turbopack), React 19, TypeScript, and Tailwind CSS.
- **Obsolete Visual System (to be replaced):**
  - Inherited blog visual system: `#0a0d14` blue-slate obsidian background, starry night particle canvas (`StarryNightBackground.tsx`), copper `#E8913A` brand accent, and cyan `text-sky-400` interaction accents.
  - Constrained to a narrow `max-w-3xl` container intended for prose essays.
- **Preserved Core Assets & Content:**
  - `data/projects.ts`: 36 canonical projects with all metadata, categories, taglines, and verified links.
  - `CASE_STUDY_DATABASE.md` and `src/data/caseStudiesData/`: Deep, evidence-backed engineering narratives for CheckMate, Trajectory, Conclave, Phoenix, Email Job Scheduler, and 1nfinity.online.
  - `/api/contact`: Working Resend contact form pipeline with honeypot validation.
  - Domain metadata: `https://mywork.vaibhv19.dev`.

---

## 3. Migration Plan & Boundary Matrix

### What Must Remain Unchanged (Content & Functionality)
1. **Canonical Projects Data:** All 36 project entries in `data/projects.ts` with verified URLs and taglines.
2. **Case Study Narratives:** All 6 technical engineering case studies in `src/data/caseStudiesData/`.
3. **Contact Submission Pipeline:** Serverless Resend API route (`/api/contact`).
4. **Site Brand Identity:** MyWork portfolio by Vaibhav Gupta (`mywork.vaibhv19.dev`).
5. **Navigation Constraint:** ZERO case-study links in project cards.

### What May Change (Visual Design & Presentation)
1. **Background & Shell:** Remove `StarryNightBackground.tsx`; add `.fixed-bg-layer` architectural grid texture and `#0B0B0B` canvas.
2. **Color Palette:** Shift from blue-slate/copper/cyan to warm ivory (`#F4EFE6`), deep black (`#0B0B0B`), surfaces (`#121212`, `#181716`), borders (`#232220`), and champagne/bronze accents (`#C4A482`).
3. **Typography:** Add Fontshare CDN for Clash Display & Satoshi; configure Inter for body and labels.
4. **Components:** Implement 1nfinity-style `Button`, `Container`, `SectionReveal`, `Navbar`, and `Footer`.
5. **Page Layouts:**
   - **Projects (`/projects`):** Hero with Clash Display, Must Checkout cards with preview artwork and verified buttons, Developed Software grouped across all 8 canonical categories.
   - **Case Studies (`/case-study` & `/case-study/[slug]`):** Editorial reading experience with wide container, Clash Display headers, Satoshi metric grids, syntax-highlighted code blocks, and ASCII architecture maps.
   - **Start a Conversation (`/start-conversation`):** 1nfinity contact form styling with ivory inputs, champagne focus states, and direct contact options.
