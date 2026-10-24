# DEVELOPMENT_LOG.md — `mywork.vaibhv19.dev`

This journal maintains a chronological, milestone-by-milestone record of the architecture, design decisions, codebase evolution, and verification passes for `mywork.vaibhv19.dev`.

---

## Baseline State
- **Date:** 2026-10-24
- **Starting Commit:** `055b26a` (`docs: add comprehensive CASE_STUDY_DATABASE.md research audit across all six projects`)
- **Git Branch:** `develop`
- **Initial Working Tree:** Clean
- **Canonical Intended Domain:** `https://mywork.vaibhv19.dev`
- **Reference Design System Source:** `D:\Work\Projects----Personal\BLog` (production personal blog at `https://vaibhv19.dev`)

---

## Phase 0 — Design System & Repository Audit

### 1. Verified Design System of the Blog (`D:\Work\Projects----Personal\BLog`)
- **Atmosphere & Background:**
  - Base tone: `#0a0d14` (deep obsidian midnight navy).
  - Ambient texture: `StarryNightBackground.tsx` rendering Van Gogh's Starry Night (`/images/starry-night-bg.webp`) with GPU scale-105, blur filter (`blur-[10px]` to `blur-[14px]`), 75% opacity, layered under dual contrast tint masks (`#0a0d14/78` and gradient overlay `from-[#0a0d14]/85 via-[#0a0d14]/40 to-[#0a0d14]/90`).
  - No random floating blobs, no garish purple glows, no generic template glassmorphism.
- **Typography & Font Loading:**
  - Primary typeface: **Syne** (`next/font/google`, weights 400, 500, 600, 700, 800) assigned to `--font-syne` and applied to body and editorial headings.
  - Monospace typeface: System monospace / JetBrains Mono fallback for tags, timestamps, indices, and technical badges.
  - Type scale:
    - Main headings: `text-2xl sm:text-3xl` or `text-3xl sm:text-4xl font-medium tracking-tight text-slate-100`.
    - Section eyebrow labels: `text-xs sm:text-sm font-bold font-mono uppercase tracking-wider text-copper`.
    - Body text: `text-sm sm:text-base text-slate-300 leading-relaxed`.
    - Meta/indices: `text-xs font-mono text-slate-400`.
- **Color Palette & Design Tokens:**
  - `--background`: `#0a0d14`
  - `--foreground`: `#f8fafc` (slate-50)
  - `--surface`: `#111622` (subtle dark navy surface)
  - `--surface-border`: `rgba(255, 255, 255, 0.08)` / `border-slate-800/80`
  - `--color-copper`: `#E8913A` (warm terracotta copper — primary accent for brand, section titles, buttons)
  - `--color-copper-hover`: `#F0A04B`
  - `--gold-accent`: `#d4af37`
  - Nav & active accent: `text-sky-400` with underline decoration (`decoration-sky-400`)
  - Selection: `selection:bg-copper/20 selection:text-copper`
- **Visual Language & Structural Spacing:**
  - Layout width: `max-w-3xl mx-auto px-4 sm:px-6 lg:px-8` (consistent vertical column with clear borders).
  - Editorial borders: hairline dividers `border-b border-slate-800/80` or `border-t border-slate-800/80`.
  - Minimalist rounded corners: `rounded-sm` for cards/inputs, `rounded-full` for avatars/status pills.
  - Editorial minimal scrollbar (6px width, `#1e293b` thumb on hover `#334155`).
- **Navigation Architecture:**
  - Header with top padding (`pt-6`), brand on left (`text-copper text-2xl sm:text-3xl font-bold tracking-tight`), horizontal monospace uppercase nav on right (`font-mono text-xs uppercase tracking-wider text-sky-400`).
  - Active indicator: `font-bold underline decoration-sky-400`.
  - Hover behavior: `hover:underline`.
- **Motion & Transitions:**
  - Page route animation: `@keyframes pageTransition` translating `translateY(8px) -> 0` and opacity `0 -> 1` over `0.25s cubic-bezier(0.16, 1, 0.3, 1)`.
  - Strictly respects `@media (prefers-reduced-motion: reduce)` by disabling transforms and keeping opacity at 1.
- **Components Available for Reuse/Adaptation:**
  - `StarryNightBackground` (deep atmospheric background)
  - `Header` & `Footer` layout templates
  - `BrandIcons` (GitHub, LinkedIn, Bluesky, X, Threads, Mail SVG icons)
  - `PageTransition` wrapper
  - `ContactForm` (Resend integration with honeypot spam protection, validation, and status notifications)
  - `StatusBadge` (minimalist coffee status widget)

### 2. Audit of the Current Workspace (`MyWork`)
- **Framework:** Next.js 16.3.5 with Turbopack, React 19.2.8, Tailwind CSS v4 (`@tailwindcss/postcss`).
- **Current State:** A single `ComingSoonPage` in `src/app/page.tsx` displaying `workwith.vaibhv19.dev` with generic indigo/purple glows, default Geist font, and no navigation.
- **Projects Data Asset:** Master catalog at `data/projects.ts` containing 24+ projects with categories, taglines, bullets, and verified URLs.
- **Case Study Database:** `CASE_STUDY_DATABASE.md` containing 765 lines of verified research across 6 major projects.
- **Dependencies Installed:** `lucide-react` (installed during Phase 0 setup).

### 3. Planned Architecture & Milestones
- **Milestone 1:** Baseline documentation (Audit findings & development log).
- **Milestone 2:** Architecture foundation (Global theme tokens in `globals.css`, `layout.tsx` with Syne font, `StarryNightBackground`, `Header` with 3-destination navigation, `Footer`, `BrandIcons`, `PageTransition`, root redirect).
- **Milestone 3:** Projects page (`/projects` with "Must Checkout" and "Developed Software" sections, strict no-case-study rule on cards).
- **Milestone 4:** Case Study landing page (`/case-study` independent destination with verified evidence summaries from `CASE_STUDY_DATABASE.md`).
- **Milestone 5:** Start a Conversation page (`/start-conversation` with direct personal intro, welcome topics, working contact form, direct email fallback, and social channels).
- **Milestone 6:** Responsive refinement, metadata alignment (`mywork.vaibhv19.dev`), accessibility, and lint/build verification.

---

## Milestone Execution Record

### Milestone 1 — Baseline Documentation
- **Commit:** `fd132ad`
- **Scope:** Documented initial repository audit, design tokens extracted from BLog (`D:\Work\Projects----Personal\BLog`), architecture differences, and development milestones.
- **Verification:** Verified clean working tree, valid git log sequence.

### Milestone 2 — Architecture Foundation
- **Commit:** `76b4527`
- **Scope:**
  - Configured `@theme` and `:root` design tokens in `src/app/globals.css` (`--color-copper: #E8913A`, `--background: #0a0d14`, `--surface: #111622`, editorial scrollbar, `@keyframes pageTransition` with reduced-motion support).
  - Implemented `StarryNightBackground.tsx` matching Van Gogh painting blur/contrast mask layers.
  - Built `Header.tsx` with brand identity and exactly 3 navigation destinations (`PROJECTS`, `CASE STUDY`, `START A CONVERSATION`), active underline indication, and responsive mobile toggle menu.
  - Built `Footer.tsx` with editorial source link and verified SVG social/contact endpoints in `BrandIcons.tsx`.
  - Built `PageTransition.tsx` route wrapper.
  - Updated `src/app/layout.tsx` to load Google font **Syne**, dark theme, canonical metadata for `https://mywork.vaibhv19.dev`.
  - Replaced coming soon screen in `src/app/page.tsx` with server-side `redirect("/projects")`.
  - Installed `lucide-react` dependency and imported public assets (`starry-night-bg.webp`, fonts, favicons).
- **Verification:** `npx tsc --noEmit` passed with 0 errors. Dev server running and compiling cleanly.

### Milestone 3 — Projects Page Structure
- **Commit:** `320bdce`
- **Scope:**
  - Built `src/app/projects/page.tsx` featuring two strictly ordered, visually distinct sections:
    1. **01 / Must Checkout**: Curated flagship interactive applications visitors can experience directly (CheckMate, Trajectory, 1nfinity.online, The Tiffin Dispatch, Birthday Wish). Integrated real preview visuals (`checkmate-preview.png`, `1nfinity-preview.webp`), verified live application actions (`demoUrl`), and repository links.
    2. **02 / Developed Software**: Comprehensive engineering catalog derived from `data/projects.ts`, categorized into Web Applications, Systems & Infrastructure, Mobile Applications, CLI & Developer Tools, and Academic & Experiments. Each card features project name, status/year, description, technology tags, and verified GitHub repository action.
  - **Rule Enforcement:** Zero case-study links or "Read Case Study" CTAs added to any project cards.
- **Verification:** `npx tsc --noEmit` exited with code 0.

### Milestone 4 — Case Study Landing Page
- **Commit:** `173ca90`
- **Scope:**
  - Built `src/app/case-study/page.tsx` as an independent primary navigation destination (strictly isolated from Projects page cards).
  - Implemented the premise and evidence layer derived authentically from `CASE_STUDY_DATABASE.md` covering six key projects: CheckMate, Trajectory, Conclave, Phoenix, Email Job Scheduler (EJS), and 1nfinity.online.
  - Sourced and tagged evidence with explicit integrity indicators: `[REPO] Codebase Verified`, `[CONVERSATION] Confirmed Context`, `[CONFIRM] Open Inquiry`, and `[CATALOG] Catalog Specification`.
  - Added interactive deep-dive dossiers exposing core narrative, architectural pivots, verified evidence ledger citations, open questions, and claims deliberately avoided.
  - Highlighted authentic engineering constraints without marketing inflation (e.g., local Ollama thermal limits, unresolved ~85% confidence score ceiling, hiring assignment debranding, and client-side COOP/COEP multithreading headers).
- **Verification:** `npx tsc --noEmit` passed with 0 errors. Dev server running and compiling cleanly.

### Milestone 5 — Start a Conversation Page
- **Commit:** `c7a380f`
- **Scope:**
  - Built `src/app/start-conversation/page.tsx` providing an authentic, direct contact interface without simulated states or fake placeholders.
  - Articulated the specific kinds of conversations that are welcome: Engineering Roles & Placements, Systems Architecture & Consulting, Contract Web Platforms, and Open-Source Collaborations.
  - Displayed verified direct contact details: `contact@vaibhv19.dev` (with instant copy-to-clipboard functionality), location context (Greater Noida / New Delhi, IST · UTC+5:30), response window expectations (24–48 hours), and direct links to GitHub, LinkedIn, X, and Bluesky profiles.
  - Implemented `ContactForm.tsx` matching BLog's verified design language (copper focus rings, dark surface container, honeypot bot trap, field validation, loading spinner, and responsive sizing).
  - Created server-side API route `src/app/api/contact/route.ts` powered by Resend SDK with input sanitization, error reporting, and transparent failure fallback offering an instant pre-populated mailto client launcher.
  - Installed `resend` package.
- **Verification:** `npx tsc --noEmit` passed with 0 errors. `npm run build` compiled all routes cleanly with dynamic route `/api/contact` and static pre-rendering for `/`, `/projects`, `/case-study`, and `/start-conversation`.

### Milestone 6 — Production Domain Preparation, SEO, and Verification
- **Commit:** `595d95b`
- **Scope:**
  - Generated `src/app/robots.ts` and `src/app/sitemap.ts` configured for the canonical production domain `https://mywork.vaibhv19.dev`.
  - Upgraded `StarryNightBackground.tsx` to Next.js `<Image />` with `fill`, `priority`, and responsive sizing to eliminate LCP warnings and layout shifts.
  - Removed unused imports across project pages and resolved all ESLint warnings.
  - Executed full end-to-end linting (`npm run lint` — 0 errors, 0 warnings) and production bundle compilation (`npm run build` — 10 static/dynamic routes pre-rendered successfully).
- **Verification:**
  - `npm run lint` exited code 0 (clean).
  - `npx tsc --noEmit` exited code 0 (clean).
  - `npm run build` exited code 0 (Turbopack production build succeeded in 1.5s).

### Milestone 7 — UI Alignment: Case Studies with Blog All Posts Page
- **Commit:** `9108660`
- **Scope:**
  - Audited `D:\Work\Projects----Personal\BLog\src\app\posts\page.tsx` and refactored `src/app/case-study/page.tsx` to mirror its exact editorial layout, container width (`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-12 space-y-6 text-slate-300`), header styling (`space-y-2.5 border-b border-slate-800/80 pb-5`), title hierarchy (`text-2xl sm:text-4xl font-bold tracking-tight text-slate-100`), and italic description.
  - Stripped oversized hero elements, colored `[REPO]`/`[CONFIRM]` classification badges, and large methodology cards from the public listing.
  - Rebuilt the case study listing as a clean vertical chronological archive grouped by period (`OCTOBER 2026`, `AUGUST 2026`, `JULY 2026`) with index notation (`{n} / {title}`), metadata row (`text-xs font-mono text-slate-400`), and concise descriptions (`text-xs sm:text-sm text-slate-300 leading-relaxed`).
  - Implemented `src/data/caseStudies.ts` with authentic summaries and created `src/app/case-study/[slug]/page.tsx` detail pages mirroring BLog's `posts/[slug]` layout with static generation (`generateStaticParams`).
  - Updated `src/app/sitemap.ts` with all dynamic case study URLs.
- **Verification:**
  - `npx tsc --noEmit` passed with 0 errors.
  - `npm run lint` exited code 0 (0 errors, 0 warnings).
  - `npm run build` compiled 16/16 routes with static pre-rendering across all 6 case studies.

### Milestone 8 — Redesign: Editorial Engineering Archive Direction
- **Commit:** `b40cadf`
- **Scope:**
  - Re-architected `/case-study` into an editorial engineering archive layout:
    - Added small copper editorial eyebrow `ENGINEERING JOURNAL` (`text-xs font-mono font-semibold tracking-widest text-copper uppercase`).
    - Modest, prominent title `Case Studies` (`text-2xl sm:text-4xl font-bold tracking-tight text-slate-100`) with italic introductory description.
    - Two-column responsive editorial grid: narrow metadata column (`md:col-span-3`) presenting copper sequence numbering (`06 /` to `01 /`), category, and period, paired with main content column (`md:col-span-9`) for title, premise subtitle, readable description, and technology focus.
    - Curated selective genuine project screenshots for projects with verifiable assets: `1nfinity` (`1nfinity-preview.webp`), `Conclave` (`live_usecase_chat_conclave.png`), `Phoenix` (`investigation-console-demo.png`), and `CheckMate` (`workbench.png`), while keeping `Trajectory` and `Email Job Scheduler` as elegant typography-led entries without artificial filler artwork.
    - Added subtle interactive indication (`Read Case Study →` in `text-sky-400 hover:underline` with title hover arrow transitions).
    - Enhanced case study detail pages (`/case-study/[slug]`) to render the genuine screenshots alongside verified architectural decisions and trade-offs.
- **Verification:**
  - `npx tsc --noEmit` exited code 0 (0 errors).
  - `npm run lint` exited code 0 (0 errors, 0 warnings).
  - `npm run build` compiled all 16 static/dynamic routes in 1.2s.
  - Full browser visual inspection performed using `browser_subagent` across desktop and mobile viewports (`375x667`), verifying typography scale, vertical rhythm, responsive collapse into hamburger menu, and image scaling without horizontal overflow.

### Milestone 12 — Design Reference Migration to 1nfinity Visual System
- **Phase 0: Source of Truth & Project Audit (`DESIGN_MIGRATION_AUDIT.md`, Commit `f7ff20f`):**
  - Inspected `D:\Work\Projects----Commercial\1nfinity\website` and documented its complete design system:
    - Typography: Clash Display (display/headings), Satoshi (metrics/numerals), Inter (body/labels).
    - Palette: `#0B0B0B` (canvas base), `#070707` (deep navbar/footer), `#121212` / `#181716` / `#1F1E1C` (surfaces), `#232220` (border default), `#F4EFE6` (warm ivory text), `#C4A482` (champagne/tan accent).
    - Architectural Grid: `.fixed-bg-layer` with 40px grid texture (`rgba(244, 239, 230, 0.048) 1px`), replacing organic blog canvas background (`StarryNightBackground.tsx`).
    - Layout & Motion: Modular `Container` widths, native CSS transitions with `cubic-bezier(0.16, 1, 0.3, 1)`, and `SectionReveal` with reduced-motion support.
  - Established strict boundary matrix: Content & functionality frozen (all 36 projects, 6 case study narratives, Resend contact pipeline); presentation open to redesign.
- **Phase 1: Migrated Design System & Foundation:**
  - Configured `@theme` and `:root` variables in `src/app/globals.css`.
  - Added Fontshare CDN for Clash Display and Satoshi in `src/app/layout.tsx`.
  - Built reusable primitives in `src/components/ui/`: `Button.tsx`, `Container.tsx`, `SectionReveal.tsx`.
  - Rebuilt `Header.tsx` (sticky `#070707`/90 backdrop blur, active champagne indicator, full-screen mobile drawer with numbered links) and `Footer.tsx` (architectural wordmark, direct contact bar).
  - Cleaned up obsolete `StarryNightBackground.tsx`.
- **Phase 2: Redesigned Projects Page (`/projects`):**
  - Replaced blog container with responsive 1nfinity layout.
  - Section 1 ("Must Checkout"): 5 verified live projects with preview artwork, Satoshi counter badges, and direct application CTAs.
  - Section 2 ("Developed Software"): All 36 canonical catalogue projects organized across 8 categories with dark surface cards and verified repository links. Strict zero case-study links on project cards preserved.
- **Phase 3: Redesigned Case Study Section (`/case-study` & `/case-study/[slug]`):**
  - Editorial archive index page with left-rail Satoshi counter and publication date, Clash Display project titles, and text CTA buttons.
  - Deep narrative detail page with responsive TOC, quick metric grid, research verification badge, callouts (invariants, dilemmas, caveats), ASCII architecture diagrams, and syntax-highlighted code blocks.
- **Phase 4: Redesigned Start a Conversation (`/start-conversation`) & `ContactForm.tsx`:**
  - Direct communication bar with 1-click clipboard copy and verified mailto launcher.
  - Replaced copper/slate form styling with 1nfinity surface tokens, warm ivory inputs, and champagne focus states.
  - Preserved Resend serverless dispatch API with honeypot and client-side validation.
  - Rebuilt 4 welcome topic cards with Satoshi index numbers.
- **Phase 5 & 6: Verification & Validation:**
  - `npx tsc --noEmit` exited code 0 (0 errors).
  - Next.js production build (`npm run build`) compiled all 16 static HTML routes successfully in 3.0s.
  - Visual verification via `browser_subagent` across desktop and mobile (375x812) confirming layout integrity, typography hierarchy, mobile drawer functionality, and high visual polish.

### Milestone 13 — Independent Visual Identity & Subtle Wave Background
- **Visual Reference & Inspiration Audit:**
  - Inspected the Narrow Design reference screenshot (`narrowdesign.com`): analyzed its signature horizontal, fine, closely spaced, flowing undulating wave contours.
  - Identified requirement for an original, non-proprietary, static texture adapted for MyWork's dark `#0B0B0B` canvas with zero disorienting motion (no continuous rotation, spinning, or liquid distortion).
- **Original Wave Texture Implementation:**
  - Designed and generated an original, mathematically seamless vector wave texture in `public/subtle-wave-pattern.svg` (320px × 180px tile, 13 KB, periodic boundary conditions across both $X$ and $Y$ planes).
  - Configured subtle low-contrast stroke (`#F4EFE6` warm ivory with `0.045` opacity, 0.85px stroke width) and paired with a soft radial vignette in `.fixed-bg-layer` (`src/app/globals.css`).
  - Created reusable `src/components/WaveBackground.tsx` and mounted it in `src/app/layout.tsx`.
- **Zero Disorienting Motion & Accessibility:**
  - Background is 100% static by default. Zero CSS keyframe animations, zero WebGL/Canvas rendering loops, zero CPU/GPU overhead.
  - Full adherence to `prefers-reduced-motion` and accessibility guidelines; does not compete with text contrast, interactive buttons, or focus indicators.
- **Verification & Testing:**
  - `npx tsc --noEmit` exited code 0 (0 errors).
  - `npm run build` compiled all 16 static HTML routes in 1.5s.
  - Inspected real-time browser rendering via `browser_subagent` across `/projects`, `/case-study`, and `/start-conversation`, confirming tactile depth, seamless tiling, and high reading clarity.

### Milestone 14 — Comprehensive Anti-AI-Slop Design Audit & Refinement
- **Audit & Problem Identification (`ANTI_AI_SLOP_AUDIT.md`):**
  - Audited all routes, identifying formulaic AI patterns: repetitive uppercase eyebrows (`ENGINEERING REPERTOIRE`, `ENGINEERING JOURNAL`, `DIRECT COMMUNICATION`, `COLLABORATION AREAS`), "card landfill" wrapping all 36 catalogue projects in identical bordered boxes, `SectionReveal` animation delays on every list item, and decorative filler labels in navigation.
- **Projects Page Refinement (`/projects`):**
  - Removed artificial eyebrows; opened directly with authoritative typography and clear summary.
  - Section 1 ("Must Checkout"): Preserved high-craft showcase presentation for the 5 flagship deployed applications.
  - Section 2 ("Developed Software"): Replaced the 36-card landfill with an elegant, high-density editorial catalogue ledger (clean architectural rows with subtle borders, aligned columns for title, framework, stack, and direct action). Instant rendering without scroll delays.
- **Case Study Refinement (`/case-study` & `/case-study/[slug]`):**
  - Removed artificial eyebrows and staggered delay wrappers for immediate loading.
  - Detail page (`[slug]`): Replaced boxed metric cards with a clean architectural stat strip with vertical dividers. Streamlined section outline and inline evidence ledger.
- **Start a Conversation Refinement (`/start-conversation`):**
  - Removed all 3 redundant eyebrows.
  - Replaced the 4 conversation area card boxes with an editorial 2-column typographic list (`01`, `02`, `03`, `04`).
- **Header & Navigation Refinement:**
  - Removed ornamental filler text (`MENU NAVIGATION`, `DIRECT INQUIRIES`) from the mobile menu drawer.
- **Verification & Testing:**
  - `npx tsc --noEmit` exited code 0 (0 errors).
  - `npm run build` compiled all 16 static HTML routes successfully in 1.4s.

### Milestone 15 — 1nfinity Animation & Interaction System Migration
- **Reference Project Audit (`1nfinity\website`):**
  - Inspected dependencies (`package.json`), CSS (`app/globals.css`), and all components (`Hero.tsx`, `Navbar.tsx`, `Footer.tsx`, `AboutDifference.tsx`, `AboutOurVision.tsx`, `PortfolioGallery.tsx`, `BrandIntro.tsx`).
  - Identified 6 core reusable motion patterns:
    1. Infinite Marquee Track (twin tracks, edge fade masks, pause on hover, `motion-reduce:animate-none`).
    2. Progressive Character Typewriter Reveal (`requestAnimationFrame`, `<span className="sr-only">` screen-reader protection, immediate reduced-motion fallback).
    3. Curtain Reveal Footer (`clip-path: inset(0 4% 0 4%) -> inset(0 0% 0 0%)`, `scale(0.98) -> scale(1)`, `opacity: 0.4 -> 1`, 900ms `cubic-bezier(0.16, 1, 0.3, 1)`).
    4. Arrow & Link Micro-Interactions (button hover -1px lift, arrow translate-x, expanding underline).
    5. Cinematic Image Hover Zoom (700ms `scale-105` with `cubic-bezier(0.25, 1, 0.5, 1)`).
    6. Rotational Offset Straighten (`rotate-[1.2deg] -> hover:rotate-0`).
  - Deliberately excluded 4-second desktop splash intro (`BrandIntro.tsx`) as inappropriate for a developer portfolio.
  - Published comprehensive audit inventory in `ANIMATION_SYSTEM_AUDIT.md`.
- **Motion System Foundation (`src/app/globals.css`):**
  - Added `@keyframes marquee`, `@keyframes marquee-reverse`, and `@keyframes arrowDownBounce`.
  - Added utility classes `.animate-marquee`, `.animate-marquee-reverse`, `.animate-marquee-fast`, `.animate-arrow-down`, `.transition-editorial`, and `.transition-cinematic`.
  - Verified global `prefers-reduced-motion: reduce` overrides.
- **Reusable Motion Components (`src/components/ui/`):**
  - `Marquee.tsx`: Accessible twin-track continuous marquee with edge gradient masks, pause on hover, and reduced-motion fallback.
  - `TextReveal.tsx`: Accessible character-by-character typewriter reveal with `performance.now()` frame timing and screen-reader full-text protection.
- **Page Integrations:**
  - `Footer.tsx`: Integrated 1nfinity's curtain reveal on IntersectionObserver with smooth clip-path and scale transitions.
  - `Projects` (`/projects`): Added an Architecture Capabilities Marquee between Section 1 and Section 2 highlighting core systems; added 700ms cinematic image hover zoom on Must Checkout preview cards.
  - `Case Studies` (`/case-study` & `/case-study/[slug]`): Added 700ms cinematic image hover zoom on article preview images; applied `TextReveal` to the article subtitle; added directional micro-interactions to Prev/Next pagination links.
- **Verification & Testing:**
  - TypeScript check (`npx tsc --noEmit`): 0 errors.
  - Production build (`npm run build`): All 16 static routes successfully generated.
  - Browser subagent validation on desktop and mobile confirming smooth marquee looping, crisp image zooms, accessible text reveals, and responsive stability.

### Milestone 16 — Removal of Artificial Editorial Styling & Decorative Metadata
- **Audit & Problem Resolution:**
  - Audited all routes and components for artificial dashboard conventions: boxed brand tags, `LIVE DEPLOYED` status badges, oversized ordinal numbering (`01 /`, `02 /`), redundant numbering inside cards (`01 CHECKMATE`), forced uppercase headings, wide letter-spacing (`tracking-[0.2em]`, `tracking-widest`), thin dividing rules, and gold/bronze microcopy.
- **Navigation (`src/components/Header.tsx`):**
  - Replaced the boxed `MYWORK` rectangle with clean, unboxed text branding (`Vaibhav Gupta / work`).
  - Removed ordinal numbers (`01`, `02`, `03`) from mobile navigation links.
- **Projects Landing Page (`src/app/projects/page.tsx`):**
  - Replaced `01 / MUST CHECKOUT` with natural, confident section heading `Must Checkout` and subtitle `Curated interactive deployments`.
  - Removed `0{idx + 1}` ordinal numbering and decorative `LIVE DEPLOYED` status badge from all project cards.
  - Formatted project titles in natural title case without forced uppercase or dividing horizontal rules.
  - Converted the Capabilities Marquee to natural title case with bullet separators instead of uppercase tracking and star marks.
  - Replaced `02 / DEVELOPED SOFTWARE` with natural section heading `Developed Software` and subtitle `Complete engineering catalogue (36 systems)`.
  - Removed parent framework bordered miniature tags and `Deployed` badges from Section 2 ledger items; deployment is represented cleanly by the direct action links (`Live Demo ↗`).
- **Case Studies Archive & Detail Pages (`src/app/case-study/`):**
  - Removed oversized `{study.number} /` ordinal numbers from archive rows; let natural category and period columns establish hierarchy.
  - Converted case study titles and subtitles to natural case without forced uppercase or gold mono styling.
  - Removed `CASE STUDY #{study.number}` badge, miniature category border tags, and gold tracking from article headers.
  - Replaced boxed excerpt callout cards with clean, readable editorial lead paragraphs.
  - Streamlined Section Outline and Evidence Ledger to clean, unbordered inline text lists.
  - Removed uppercase yelling from section titles, deliberate exclusions, and code block headers.
- **Start a Conversation (`src/app/start-conversation/page.tsx`):**
  - Removed ordinal numbers (`01 /`, `02 /`) from conversation topic headings, letting clear titles and descriptions communicate structure naturally.
- **Footer (`src/components/Footer.tsx`):**
  - Removed artificial `DIRECT CHANNEL` gold tracking tag; preserved direct contact email.
- **Buttons & Shared Components (`src/components/ui/Button.tsx`):**
  - Updated text variant buttons to natural tracking without wide letter spacing.
- **Verification & Git Hygiene:**
  - `npx tsc --noEmit` exited code 0 (0 errors).
  - `npm run build` compiled all 16 static HTML routes successfully in 1.3s.
  - Browser subagent validation confirmed natural typographic hierarchy, absence of template-like dashboard badges, and calm visual confidence across desktop and mobile.

### Milestone 17 — Visitor-First Content Audit & Removal of Developer-Facing UI Clutter
- **Core Principle & Audit:**
  - Evaluated every visible UI element through a visitor-first lens: removing developer-facing jargon, build-process vocabulary, technical theater, and internal implementation labels.
- **Projects Page (`src/app/projects/page.tsx`):**
  - Refined header description: replaced prompt-like phrasing ("visitors can experience directly") with natural, confident summary ("A curated selection of interactive live applications alongside the complete catalog of 36 software projects...").
  - Changed card button text from developer phrasing "Open Live Application" to natural "Open Application".
  - Removed the continuous capabilities ticker between Section 1 and Section 2, eliminating decorative technology buzzwords that merely repeated project details below.
  - Refined catalogue ledger action links to standard "Source ↗" and "Private repository" labels.
- **Case Study Detail Pages (`src/app/case-study/[slug]/page.tsx`):**
  - Removed internal research database artifact "Evidence Ledger: ...", letting substantive narrative text present evidence naturally.
  - Removed redundant status tag (`Production Deployed` / `Active Architecture Study`) from article header.
  - Simplified role label to natural "Role:" instead of formal "Engineering Role:".
  - Updated primary action buttons to visitor-focused "Open Application" and "Source Code".
  - Refactored section navigation to standard "Table of Contents", and renamed research-paper term "Deliberate Omissions & Limits" to professional engineering term "Scope Boundaries & Engineering Trade-offs" (`#scope-and-tradeoffs`).
- **Start a Conversation (`src/app/start-conversation/page.tsx`):**
  - Changed action button from developer term "Mailto Link" to visitor-facing "Send Email".
  - Replaced overly formal "Send a Direct Note" with "Send a Message".
  - Removed implementation theater ("via serverless pipeline") from the contact form subtitle ("Messages are sent directly to my personal inbox.").
  - Changed "Topics Welcome Here" to natural "What We Can Discuss".
- **Contact Form (`src/components/ContactForm.tsx`):**
  - Changed technical notification messages from "Message dispatched successfully" / "Message dispatch notice" to clear, human feedback: "Message sent successfully" and "Unable to send message".
- **Footer (`src/components/Footer.tsx`):**
  - Removed developer portfolio note "MYWORK.VAIBHV19.DEV · STANDALONE PORTFOLIO" from the copyright area.
- **Verification & Git Hygiene:**
  - `npx tsc --noEmit` exited code 0 (0 errors).
### Milestone 18 — Always-Visible Responsive Primary Navigation (No Hamburger Collapse)
- **Objective & Layout Correction:**
  - Removed hamburger button and mobile drawer overlay from navigation, ensuring that all three primary destinations (`PROJECTS`, `CASE STUDY`, `START A CONVERSATION`) remain directly visible and clickable as primary links across all screen sizes.
  - Eliminated unused mobile menu state (`mobileMenuOpen`), body scroll locks, and escape key event listeners.
- **Responsive Layout Adaptation (`src/components/Header.tsx`):**
  - Configured a single horizontal navigation row that responsively adjusts spacing, horizontal link padding, font size, and letter tracking (`px-2 sm:px-3 lg:px-4 py-1.5`, `text-[11px] sm:text-xs lg:text-[13px]`, `tracking-[0.06em] sm:tracking-[0.1em] lg:tracking-[0.14em]`).
  - Added hidden-scrollbar horizontal scroll capability (`[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden`) to prevent text clipping or page-level horizontal overflow on ultra-narrow viewports down to 320px.
  - Preserved active-state accent indicator line, hover feedback, and keyboard focus outlines.
  - Preserved recent user modifications to footer.
- **Verification Across Viewports:**
  - Desktop (1440x900): All 3 links directly visible and centered; active indicator functional.
  - Tablet Landscape (1024x768): All 3 links directly visible with balanced proportions.
  - Tablet Portrait (768x1024): Clean single-row presentation.
  - Mobile (390x844): Sits cleanly on a single row without wrapping or clipping; verified interactive navigation to `/case-study`.
  - Narrow Mobile (320x650): Directly visible and accessible without horizontal page overflow; verified navigation to `/start-conversation`.
  - Typecheck (`npx tsc --noEmit`): 0 errors.
  - Production build (`npm run build`): All 16 static HTML routes compiled successfully in 1.4s.

### Milestone 19 — Visual Balance and Spacing Correction
- **Objective:**
  - Execute a focused layout and spacing correction on the Projects page and site-wide headers to address header height, hero positioning, typography balance, excessive vertical gap to Section 1, and content container alignment without performing a redesign.
- **Key Changes:**
  - **Header Height & Vertical Padding (`src/components/Header.tsx`):**
    - Reduced excessive vertical padding from bloated `py-3.5 sm:py-5 lg:py-6` to compact `py-2.5 sm:py-3` (and on scroll: `py-2`), lowering navbar height from ~80px to ~44-48px while keeping all 3 navigation links and active indicators intact.
  - **Hero Positioning & Proportions (`src/app/projects/page.tsx`):**
    - Rebalanced top spacing by reducing outer wrapper padding from `py-10 sm:py-16` to `pt-6 sm:pt-8 md:pt-10 pb-16 sm:pb-24`.
    - Refined hero typography: `font-display text-2xl sm:text-3xl md:text-[2.25rem] leading-[1.15] tracking-tight`, keeping the heading prominent without overwhelming the page.
    - Balanced description reading width with `max-w-2xl text-sm sm:text-base leading-relaxed text-foreground-muted`, providing a natural two-line wrap.
    - Set deliberate distance from hero text to section divider line (`pb-6 sm:pb-7 border-b border-border-subtle`).
  - **Vertical Gap Between Hero and Section 1:**
    - Reduced gap between hero divider line and `Must Checkout` heading from 96px (`space-y-16 sm:space-y-24`) to a comfortable, cohesive ~40-48px (`space-y-8 sm:space-y-12`), allowing the section to feel like a natural continuation.
  - **Content Container Alignment:**
    - Removed arbitrary negative margins (`-mx-2 px-2`) from Section 2 catalogue ledger `<article>` rows so all table lines align flush with the container and section divider lines.
  - **Site-Wide Spacing Harmonization (`src/app/case-study/page.tsx`, `src/app/case-study/[slug]/page.tsx`, `src/app/start-conversation/page.tsx`):**
    - Standardized outer padding across all pages to `pt-6 sm:pt-8 md:pt-10 pb-16 sm:pb-24` and standardized hero spacing to `space-y-8 sm:space-y-12` for unified rhythm.
  - **Wave Background:**
    - Preserved subtle, static, low-contrast wave pattern without animation, rotation, or distortion.
- **Validation Across Viewports:**
  - Desktop (1440x900): Header is proportionate and compact; hero begins at a deliberate distance; section gap is balanced; wave background remains subtle.
  - Tablet (768x900): Clean alignment and comfortable reading hierarchy.
  - Production build (`npm run build`): All 16 static routes prerendered cleanly in Turbopack.

### Milestone 20 — Removal of Project and Case Study Thumbnails (Typography-First Presentation)
- **Objective:**
  - Transition Projects and Case Study sections to a clean, typography-led presentation by eliminating all preview screenshots, thumbnails, and heavy visual preview blocks while preserving all substantive architecture narratives, facts, code blocks, ASCII diagrams, and links.
- **Key Changes:**
  - **Must Checkout Projects (`src/app/projects/page.tsx`):**
    - Removed `next/image` dependency and the embedded preview image wrapper (`aspect-[16/9] max-h-64`).
    - Made project title and tagline the primary visual anchor.
    - Expanded technical bullet points to display all architecture details without arbitrary truncation.
    - Preserved direct live application and repository action buttons and tech stack row.
    - Rebalanced vertical spacing to eliminate empty space.
  - **Case Study Archive (`src/app/case-study/page.tsx`):**
    - Removed `next/image` dependency and preview asset container (`aspect-[16/9] max-h-56`).
    - Maintained two-column editorial layout: category & period in left column; title, subtitle, narrative description, tech focus, and direct reading button in right column.
  - **Case Study Detail Pages (`src/app/case-study/[slug]/page.tsx`):**
    - Removed large visual preview block (`aspect-[16/9] max-h-80`) that previously separated the excerpt lead from technical data.
    - Established an unbroken, natural reading rhythm: breadcrumb → title & subtitle → role & action links → excerpt lead → quick metrics strip → table of contents → deep narrative sections with code blocks, tables, and ASCII diagrams.
    - Enhanced quick metrics container with `min-w-0` and `break-words` for robust cross-device display.
  - **Asset and Hover Cleanup:**
    - Zero `next/image` imports, zero `<img>` tags, and zero `aspect-*` preview wrappers remain in `src/`.
    - Eliminated image-specific hover transitions (`group-hover/img:scale-105`) while preserving typography and link hover states.
- **Validation:**
  - Projects page verified on desktop (1440px) and mobile (390px): clean typography cards, no empty boxes, flush alignment.
  - Production build (`npm run build`): 16 of 16 static HTML routes compiled with zero errors in Next.js Turbopack.

### Milestone 21 — Centered Middle-Column Layout (Consistent Shared Width)
- **Objective:**
  - Transition the entire site from a wide, stretched layout to a focused, centered reading column (`768px` / `max-w-3xl`) with generous desktop side margins and consistent alignment across all pages.
- **Key Changes:**
  - **Shared Container (`src/components/ui/Container.tsx`):**
    - Standardized `size="default"` to `max-w-3xl` (`768px` / `48rem`), providing the optimal typographic measure (65–80 characters per line) and generous outer margins on desktop viewports.
    - Set responsive horizontal padding to `px-4 sm:px-6` for comfortable margins without horizontal overflow.
  - **Projects Landing Page (`src/app/projects/page.tsx`):**
    - Unified the entire page under a single `<Container size="default">` root, eliminating multiple disjointed section containers.
    - Centered the hero, `Must Checkout` cards, and `Developed Software` catalogue ledger along the exact same middle column.
    - Updated Developed Software article layout from `md:flex-row` to `sm:flex-row` so items present title and stack on the left and verified action links on the right across all tablet and desktop widths.
  - **Case Studies Archive (`src/app/case-study/page.tsx`):**
    - Unified the page under a single `<Container size="default">` root.
    - Streamlined the article list into a clean, linear reading flow with category & period at the top, bold heading, concise summary, tech focus, and direct reading action.
  - **Individual Case Study Pages (`src/app/case-study/[slug]/page.tsx`):**
    - Updated container size to `default` (`max-w-3xl`), ensuring long-form case study narratives, tables, code blocks, ASCII diagrams, and trade-offs align perfectly with the site-wide column.
  - **Start a Conversation (`src/app/start-conversation/page.tsx`):**
    - Updated container size to `default` (`max-w-3xl`), seamlessly aligning direct contact actions, the contact form, and conversation topic cards to the exact same middle column.
  - **Header & Footer:**
    - Header navigation and footer contact bar/copyright lines naturally match and connect to the centered `max-w-3xl` column width.
- **Validation:**
  - Desktop (1440x900): Focused, centered reading column with generous, balanced margins.
  - Laptop (1024x768): Centered column with ~128px margins.
  - Tablet (768x1024): Fluid column utilizing width with `sm:px-6` side padding.
  - Mobile (390x844 & 320x650): Clean readability; verified zero horizontal overflow (`scrollWidth <= innerWidth`).
  - Production build (`npm run build`): All 16 static HTML routes compiled cleanly via Turbopack with zero errors.

### Milestone 22 — Populate Must Checkout from All Verified Vercel Deployments & Deduplicate Developed Software
- **Objective:**
  - Audit all projects deployed on the user's Vercel account and populate the "Must Checkout" section on the Projects page with every distinct, eligible live project.
  - Eliminate duplication between Must Checkout and Developed Software, ensuring each project appears exactly once on the page while preserving the full catalogue metadata.
- **Audit & Deployment Inventory:**
  - **Environment Discovery:** Vercel CLI session was unauthenticated (`Logged out`). Used GitHub API (`https://api.github.com/users/vaibhv19/repos?per_page=100`), repository configurations, and live HTTP probing with header inspection (`x-vercel-id`, `x-vercel-cache`, `server: Vercel`).
  - **8 Verified Live Vercel Deployments Identified & Included in Must Checkout:**
    1. **CheckMate** (`https://checkmate.vaibhv19.dev/`) — Status: `200 OK`, Server: Vercel (`x-vercel-id: sin1::5cdzt...`). Production chess platform with stockfish analysis.
    2. **Trajectory** (`https://trajectory.vaibhv19.dev`) — Status: `200 OK`, Server: Vercel (`x-vercel-id: sin1::th9fd...`). Interactive student path visualizer and roadmap tracker.
    3. **Email Job Scheduler** (`https://email-job-scheduler.vaibhv19.dev`) — Status: `200 OK`, Server: Vercel (`x-vercel-id: sin1::vll6x...`). Distributed job scheduling platform with BullMQ and Redis.
    4. **The Tiffin Dispatch** (`https://thetiffindispatch.vaibhv19.dev/`) — Status: `200 OK`, Server: Vercel (`x-vercel-id: sin1::4sl7c...`). Commercial meal delivery and ordering engine.
    5. **Birthday Wish (Zoya)** (`https://zoya.vaibhv19.dev/`) — Status: `200 OK`, Server: Vercel (`x-vercel-id: sin1::jjln2...`). Interactive 3D/canvas visual experience.
    6. **1nfinity** (`https://1nfinity.online`) — Status: `200 OK`, Server: Vercel (`x-vercel-id: sin1::dk582...`). Full-stack digital studio and client platform.
    7. **Personal Blog (vaibhv19.dev)** (`https://vaibhv19.dev`) — Status: `200 OK`, Server: Vercel (`x-vercel-id: sin1::6kl85...`). MDX-powered technical engineering journal.
    8. **Life** (`https://life.vaibhv19.dev`) — Status: `200 OK`, Server: Vercel (`x-vercel-id: hkg1::iad1::l4bgm...`). Personal digital life tracker and habit journal.
  - **Exclusions & Alias Handling:**
    - `food-ordering-system-ruddy-sigma.vercel.app`: HTTP 307 redirect to canonical domain `https://thetiffindispatch.vaibhv19.dev/`. Listed once under the canonical project entry.
    - `vaibhv19.vercel.app` (My-Portfolio): HTTP 404 (`X-Vercel-Error: DEPLOYMENT_NOT_FOUND`). Retired previous portfolio deployment; preserved in Developed Software catalogue without an invalid live demo link.
    - `workwith.vaibhv19.dev`: DNS unresolvable. Active portfolio is hosted at `mywork.vaibhv19.dev`.
- **Implementation Details:**
  - **Data Catalogue (`data/projects.ts`):**
    - Flagged `email-job-scheduler`, `portfolio-blog`, and `life` with `mustCheckout: true`, matching their verified live Vercel deployments. Exactly 8 projects now carry this flag.
  - **Projects Landing Page (`src/app/projects/page.tsx`):**
    - Updated Section 1 title counter: `8 live applications deployed on Vercel`.
    - Added deduplication logic (`mustCheckoutIds = new Set(mustCheckoutProjects.map((p) => p.id))`) to filter Section 2 (Developed Software): `PROJECTS.filter((p) => p.category === group.category && !mustCheckoutIds.has(p.id))`.
    - Cleanly omits category headings when all projects in that group are in Must Checkout (e.g. `Client Work & Collaborations` and `Personal Websites & Platforms`).
    - Updated Section 2 title counter: `Systems architecture & software catalog (28 projects)`.
    - 8 Must Checkout + 28 Developed Software = 36 canonical projects represented without duplication.
- **Validation:**
  - Desktop (1440x900) & Mobile (390x844) visual review: All 8 Must Checkout projects display text-led cards with verified links; Developed Software lists the remaining 28 distinct projects with zero duplicate occurrences.
  - Build validation (`npm run build`): All 16 static HTML routes generated cleanly with zero errors in Next.js Turbopack.

### Milestone 23 — Three-Destination Projects Page Architecture (Must Checkout, Curated Developed Software, GitHub Archive)
- **Objective:**
  - Refine the Projects page into three distinct destinations:
    1. **Must Checkout:** Comprehensive collection of every distinct, eligible project deployed on the user's Vercel account (8 verified applications).
    2. **Developed Software:** High-leverage, deliberately curated selection of significant engineering systems, distinguishing technical depth from routine repositories.
    3. **GitHub:** Complete repository archive for visitors wishing to explore coursework, foundational prototypes, and training frameworks (`https://github.com/vaibhv19`).
- **Curated Selection Rationale (Developed Software):**
  - **Phoenix (`phoenix`):** Hybrid RAG engine with mathematical scoring trace; dual-backend split (Spring Boot 3.3 gateway + FastAPI retrieval engine), dense pgvector search fused with sparse BM25 (alpha=0.7/0.3), and 4-tier fallback state machine.
  - **Conclave (`conclave`):** Multi-model agent consensus room running local Ollama inference (Llama 3, Mistral, Gemma); STOMP/WebSocket streaming, pessimistic locking (`SELECT FOR UPDATE`), dynamic prompt token adapter, and automated context compression.
  - **Vigil (`vigil`):** Ephemeral Docker container sandboxing and runtime safety harness for autonomous AI agents; resource limits, tool call interception, and real-time anomaly detection against shell injection and path traversal.
  - **Cairn (`cairn`):** High-concurrency distributed in-memory cache engine in Java 21; Murmur3 consistent hashing across a 150-virtual-node TreeMap ring, lock-striping, and Prometheus/Grafana metric telemetry. (Selected over `shard` to represent the caching domain with production-grade runtime concurrency).
  - **Warden (`warden`):** Automated DevSecOps security auditing suite integrating a custom OWASP ZAP API client; evidence-based vulnerability scanners (SQLi, XSS, auth guards, IDOR verification) and parameter fuzzing.
  - **Pulse (`pulse`):** Automated performance engineering and resilience testing framework using k6; latency degradation curves, centralized performance budgets, and InfluxDB/Grafana concurrency dashboards.
  - **Foundry (`foundry`):** Stateful multi-agent graph evaluation workflows powered by LangGraph; PostgreSQL decision checkpointing and asynchronous background task offloading via Celery on Redis queues.
  - **Fitness Application (`fitness-application`):** Enterprise distributed microservices architecture on Spring Boot 3.4; Spring Cloud Gateway, Eureka service discovery, RabbitMQ asynchronous event bus, polyglot persistence (PostgreSQL + MongoDB), and Keycloak OAuth2 PKCE/JWT authorization.
- **Archive Migration to GitHub (`https://github.com/vaibhv19`):**
  - Removed 20 smaller coursework, training module, and student demo repositories from the on-page catalog (e.g. `ecolens`, `vidyalink`, `weather-app`, `e-commerce-website`, `streamverse-ui`, `ticket-booking-system`).
  - Preserved all 36 canonical project records in `data/projects.ts` without data loss.
  - Added a refined, visually secondary GitHub callout card at the end of Developed Software with the clear, natural action `"Explore all projects on GitHub"` linking to `https://github.com/vaibhv19`.
- **Implementation & Presentation:**
  - Added `curatedSoftware?: boolean;` to the `Project` interface in `data/projects.ts` and flagged the 8 selected systems.
  - Updated `src/app/projects/page.tsx` to render identical text-led card layouts across both Must Checkout and Developed Software, with consistent surface-card styling, title, tagline, technical bullets, tech stack row, and verified action links.
  - Re-stated header narrative to reflect the three-tier destination model.
  - Maintained complete separation between project cards and Case Studies (no case study links on project cards).
- **Validation:**
  - Build validation (`npm run build`): All 16 static HTML routes compiled with Turbopack in 1.3s with zero errors.
  - Responsive visual inspection (Desktop 1440x900 & Mobile 390x844): Verified 8 Must Checkout cards, 8 Developed Software cards, and the GitHub callout card. Confirmed `scrollWidth <= innerWidth` with zero horizontal overflow.

### Milestone 24 — Compact Text-Led Project Listings (Card Removal & Single-Line Entries)
- **Objective:**
  - Redesign project entries in both Must Checkout and Developed Software from large bordered cards into compact, single-line text entries.
  - Standardize entry format: `[Title] · [Live demo ↗] · [Source code ↗] — [Concise one-line description]`.
- **Key Changes:**
  - **Complete Removal of Card UI:**
    - Eliminated large bordered containers (`surface-card bg-surface/90 border border-border p-6 sm:p-7`), individual card backgrounds, multi-item bullet lists, tech badge rows, and separate oversized action buttons.
    - Zero card-specific hover shadows or unnecessary transitions remain in project listings.
  - **Single-Line Project Entries:**
    - Project title appears first in bold foreground typography, linking directly to the primary live demo or repository.
    - Inline links (`Live demo ↗`, `Source code ↗`) are rendered conditionally with `·` separators based on verified destinations.
    - Em dash separator (`—`) connects the links to exactly one concise, concrete descriptive sentence.
  - **Canonical Data Augmentation (`data/projects.ts`):**
    - Added `shortDescription?: string;` to `Project` interface.
    - Authored concrete, single-sentence descriptions for all 8 Must Checkout projects and all 8 Developed Software projects, focusing on core engineering capabilities without marketing fluff.
    - Preserved the full underlying catalogue metadata (taglines, technical bullets, tech stacks) intact for detailed reference and case studies.
  - **Subtle GitHub Archive Integration:**
    - Replaced the previous rectangular callout box with a clean, understated text invitation at the bottom of Developed Software: *"Looking for older prototypes, course projects, or training modules? Explore all projects on GitHub ↗"*.
- **Validation:**
  - Desktop (1440x900) & Mobile (390x844): Verified that all 16 projects occupy natural lines of text, wrap cleanly across viewports, have zero horizontal scroll (`scrollWidth <= innerWidth`), and feel like an elegant, curated personal portfolio list.
  - Next.js Turbopack build (`npm run build`): All 16 static HTML routes compiled with 0 errors in 1.7s.

### Milestone 25 — Global Color Palette Replacement (White Background, Dark Text, Red Accents)
- **Objective:**
  - Execute a comprehensive, site-wide color scheme transformation across the entire MyWork website:
    - **Black → White:** Replace black and near-black surfaces with pure white (`#FFFFFF`) or appropriate subtle light surfaces.
    - **White → Black:** Replace white and near-white text and icons with dark black (`#111111`) or appropriate dark tones.
    - **Gold → Red:** Replace all gold, bronze, and champagne accents with red (`#D32F2F`) for accessible high-contrast accents.
- **Design Token & Global Style Centralization:**
  - **`src/app/globals.css`:**
    - Defined Tailwind v4 `@theme` tokens:
      - `--color-background: #FFFFFF`
      - `--color-canvas-deep: #FAFAFA`
      - `--color-surface: #FFFFFF`
      - `--color-surface-elevated: #F6F6F6`
      - `--color-surface-subtle: #EEEEEE`
      - `--color-surface-glass: rgba(255, 255, 255, 0.85)`
      - `--color-border: #E5E5E5`
      - `--color-border-light: #D4D4D4`
      - `--color-border-subtle: #F0F0F0`
      - `--color-border-accent: #D32F2F`
      - `--color-foreground: #111111`
      - `--color-foreground-ivory: #000000`
      - `--color-foreground-muted: #555555`
      - `--color-foreground-subtle: #767676`
      - `--color-accent: #D32F2F`
      - `--color-accent-muted: #B71C1C`
      - `--color-accent-tan: #C62828`
      - `--color-accent-champagne: #FFEBEE`
      - `--color-accent-dark: #8B0000`
    - Synchronized `:root` CSS custom variables to ensure non-Tailwind consumers match seamlessly.
    - Updated `.fixed-bg-layer` to pure white with subtle center radial lighting and light scrollbar tracks.
    - Configured inverse surfaces: `.btn-primary` uses black background with white text (`#111111` / `#FFFFFF`), `.btn-secondary` uses subtle borders with red hover, and `.btn-accent` uses vivid `#D32F2F` with white text.
  - **`public/subtle-wave-pattern.svg`:**
    - Converted all 13 SVG path strokes from `#F4EFE6` to `#111111` with 0.045 CSS opacity, rendering clean, subtle gray ripples across the white background.
  - **`src/app/layout.tsx`:**
    - Updated `viewport.themeColor = "#FFFFFF"`.
    - Removed `dark` class from `<html>` element.
- **Component Audit & Palette Application:**
  - **`src/components/Header.tsx`:** Sticky header styled with `bg-white/90 backdrop-blur-md border-b border-border` and light elevation shadow. Inactive navigation links transition to `#111111` on hover; active indicator bar uses `#D32F2F`.
  - **`src/components/Footer.tsx`:** Updated to `bg-background text-foreground-muted border-t border-border` with red hover accents across all social brand icons.
  - **`src/components/ui/Button.tsx`:** Refactored all button variants (primary, secondary, accent, text) to light surfaces, dark text, and red accents.
  - **`src/components/ui/Marquee.tsx`:** Updated edge fade masks from legacy dark `#0B0B0B` to `from-background`.
  - **`src/components/ContactForm.tsx`:** Form input fields use `bg-surface-elevated` with subtle borders and red focus rings; status alerts use high-contrast light backgrounds (`bg-emerald-50`, `bg-rose-50`); select options styled with clean white background and dark text.
  - **`src/app/projects/page.tsx`:** Link hovers updated from legacy `hover:text-white` to `hover:text-accent` and `hover:decoration-accent`.
  - **`src/app/case-study/page.tsx`:** Case study titles transition to red accent on hover.
  - **`src/app/case-study/[slug]/page.tsx`:** Breadcrumb links, table of contents, and ASCII architecture / code block containers updated from dark boxes (`#070707`) to clean light containers (`#F8F8F8` with subtle border and crisp dark text).
- **Preserved Core Constraints:**
  - Centered middle-column layout (`Container` default `max-w-3xl`) retained across all pages.
  - Static subtle wave background preserved as fine gray lines on white.
  - Compact, single-line text-led project listings preserved without cards, badges, or thumbnails.
  - Three navigation links (`PROJECTS`, `CASE STUDY`, `START A CONVERSATION`) visible across all viewports without hamburger collapse.
  - Full project catalogues, case study narrative deep dives, and contact functionality intact.
- **Validation:**
  - Visual Browser Verification: Verified desktop (1440x900) and mobile (390x844) viewports across `/projects`, `/case-study`, `/case-study/checkmate`, and `/start-conversation`. Pure white backgrounds, crisp dark text, accessible red accents, and smooth interactive feedback verified.

### Milestone 26 — Simplify Project Links and Make Titles the Only Actions
- **Objective:**
  - Refine project entries in Must Checkout and Developed Software so that each project title is the sole clickable action, eliminating all secondary `Live demo` and `Source code` links.
- **Priority Resolution Strategy:**
  - Implemented strict priority order in `ProjectListItem` (`src/app/projects/page.tsx`):
    1. **Live Demo Priority:** If a verified live demo URL exists (`project.demoUrl`), the project title directly links to the live demo. (Applies to all 8 Must Checkout projects, e.g. CheckMate → `https://checkmate.vaibhv19.dev/`).
    2. **Repository Fallback:** If no live demo exists but a verified repository exists (`project.githubUrl`), the project title directly links to the repository. (Applies to all 8 Developed Software projects, e.g. Phoenix → `https://github.com/vaibhv19/Phoenix`).
    3. **Plain Text Fallback:** If neither destination exists, the title renders as an unlinked `<span>`.
- **Secondary Link Elimination:**
  - Completely removed inline secondary links (`Live demo ↗`, `Source code ↗`), middle dot separators (`·`), and arrow decorators from individual project items.
  - Title is styled with an understated link underline (`decoration-border/80`), transitions to red accent on hover (`hover:text-accent hover:decoration-accent`), and includes accessible keyboard focus rings (`focus-visible:ring-1 focus-visible:ring-accent`).
  - Em dash (`—`) and single-sentence descriptions remain plain, unlinked text.
- **Preserved Core Context & Features:**
  - Preserved underlying canonical project data schema and metadata in `data/projects.ts` without deletions.
  - Preserved section-level GitHub archive link at the end of Developed Software (`Explore all projects on GitHub ↗`).
  - Preserved centered middle-column layout (`max-w-3xl`) and compact, typography-led aesthetic across both desktop and mobile viewports.
- **Validation:**
  - Build validation (`npm run build`): All 16 static HTML routes compiled with Turbopack with 0 errors in 1.3s.
  - Visual Browser Inspection: Desktop (1440x900) and Mobile (390x844) verification confirmed CheckMate navigates to the live demo, Phoenix navigates to GitHub, secondary links are completely gone, and wrapping behaves seamlessly with zero horizontal overflow.

### Milestone 27 — Introduce a Distinct Third Color (Muted Blue Secondary Accent)
- **Objective:**
  - Introduce a distinct third color to add visual depth and refine informational hierarchy across the entire website:
    - Primary background: white (`#FFFFFF`)
    - Primary text: near-black (`#171717`)
    - Primary accent: red (`#D32F2F`)
    - Secondary accent: muted blue (`#355C7D`, hover: `#26435C`, subtle: `#EBF1F5`)
    - Secondary text and borders: neutral grays (`#555555`, `#767676`, `#E5E5E5`)
- **Design Token & Global Centralization:**
  - **`src/app/globals.css`:**
    - Defined Tailwind v4 tokens: `--color-accent-secondary: #355C7D`, `--color-accent-secondary-hover: #26435C`, `--color-accent-secondary-subtle: #EBF1F5`.
    - Updated primary text token to near-black (`--color-foreground: #171717`).
    - Added corresponding `:root` CSS custom variables (`--accent-secondary`, `--accent-secondary-hover`, `--accent-secondary-subtle`, `--text-primary: #171717`).
    - Updated `.btn-secondary:hover` to use `var(--accent-secondary)` for border and text color.
- **Selective Hierarchy Applications (No Arbitrary Recoloring):**
  - **Navigation (`src/components/Header.tsx`):**
    - Retained red (`#D32F2F`) as the primary active page indicator line.
    - Hovering an inactive tab reveals a subtle muted blue (`#355C7D`) line and text transition (`hover:text-accent-secondary`), distinguishing tab preview from the active page indicator.
  - **Buttons (`src/components/ui/Button.tsx`):**
    - Primary button uses inverse near-black (`#171717`).
    - Accent button uses primary red (`#D32F2F`).
    - Secondary button hover uses muted blue (`border-[#355C7D] text-[#355C7D]`), creating clear semantic alignment.
  - **Projects (`src/app/projects/page.tsx`):**
    - Applied muted blue (`text-accent-secondary font-mono`) to section scope counters (*"8 live applications deployed on Vercel"* and *"Curated selection of 8 engineering systems"*).
    - Preserved red hover on primary project titles.
    - Styled the section-level GitHub archive link (*"Explore all projects on GitHub ↗"*) in muted blue (`text-accent-secondary hover:text-accent-secondary-hover`), clearly separating the secondary archive action from primary on-page projects.
  - **Case Studies (`src/app/case-study/page.tsx` & `src/app/case-study/[slug]/page.tsx`):**
    - Applied muted blue to category classification tags (`study.category`) in monospace, creating instant editorial taxonomy.
    - Highlighted code block language tags (`sec.codeBlock.language`) in monospace muted blue.
    - Added an understated `border-l-2 border-l-accent-secondary` to editorial callout boxes.
  - **Start a Conversation (`src/app/start-conversation/page.tsx`):**
    - Styled direct contact bar location / timezone (*"Greater Noida / New Delhi, India (IST · UTC+5:30)"*) in muted blue.
    - Rendered conversation area index numbers (`01`, `02`, `03`, `04`) in muted blue monospace typography.
- **Preserved Core Constraints:**
  - White background and near-black text remain overwhelmingly dominant.
  - Wave background remains subtle and static gray on white.
  - Centered middle-column layout, compact project lists, single title-link behavior, and 3-link mobile navigation preserved.
  - No decorative badges, glow effects, or card wrappers added.
  - Contrast ratio of `#355C7D` on white is 7.09:1 (exceeds WCAG AAA).
- **Validation:**
  - Build validation (`npm run build`): All 16 static HTML routes compiled with Turbopack in 1.4s with 0 errors.
  - Visual Browser Verification: Checked desktop (1440x900) and mobile (390x844) viewports across `/projects`, `/case-study`, `/case-study/checkmate`, and `/start-conversation`. Verified WCAG contrast, tab hover feedback, metadata taxonomy, and responsive layout without horizontal overflow.

### Milestone 28 — Final Color Palette Adjustment (Dark Black → Red, Gray → Dark Black)
- **Objective:**
  - Execute the final color palette transformation across the entire MyWork website:
    - **Dark Black → Red (`#D32F2F`):** Replace former near-black and dark-black styling with the primary red accent `#D32F2F` on high-emphasis headings, project titles, active navigation states, metrics, and primary interactive buttons.
    - **Gray → Dark Black (`#171717`):** Replace former gray text and foreground elements with near-black `#171717` for crisp, high-contrast readability against the white background.
    - **Primary Background:** Retain clean, pure white `#FFFFFF` with the subtle, static gray wave background pattern.
- **Global Design Tokens & CSS Centralization (`src/app/globals.css`):**
  - Updated Tailwind v4 `@theme` and `:root` variables:
    - `--color-foreground-muted: #171717;` / `--text-muted: #171717;`
    - `--color-foreground-subtle: #262626;` / `--text-subtle: #262626;`
  - Typography classes:
    - `.font-display-hero`, `.font-display-h1`, `.font-display-h2`, `.font-display-h3`, `.font-metric`: set `color: var(--accent-primary);` (`#D32F2F`).
    - `.font-body-lead`, `.font-body`, `.font-body-sm`: set `color: var(--text-primary);` (`#171717`).
  - Button styling:
    - `.btn-primary`: background `var(--accent-primary)` (`#D32F2F`), text `#FFFFFF`, hover `var(--accent-muted)` (`#B71C1C`).
    - `.btn-secondary`: border `#E5E5E5`, text `#171717`, hover `border-[#D32F2F] text-[#D32F2F]`.
- **Systematic Page & Component Updates:**
  - **Navigation (`src/components/Header.tsx`):**
    - Active link styled in red (`text-accent font-semibold`) with red active indicator line (`bg-accent`).
    - Inactive links styled in dark black (`text-[#171717] font-medium`) transitioning to red on hover.
  - **Buttons (`src/components/ui/Button.tsx`):**
    - Primary and accent variants use `#D32F2F` with white text. Text button variant uses `#D32F2F` with `#B71C1C` hover. Secondary variant uses `#171717` with `#D32F2F` hover.
  - **Projects (`src/app/projects/page.tsx`):**
    - Headings ("Projects & Systems", "Must Checkout", "Developed Software") rendered in vivid red (`text-accent`).
    - Project titles rendered in red (`text-accent font-medium underline decoration-accent/40 hover:text-accent-muted`).
    - Descriptions, section scope metadata (*"8 live applications deployed on Vercel"*), and em dashes rendered in dark black (`#171717`).
    - Archive link (*"Explore all projects on GitHub ↗"*) rendered in red (`text-accent hover:text-accent-muted`).
  - **Case Studies (`src/app/case-study/page.tsx` & `src/app/case-study/[slug]/page.tsx`):**
    - Headings, study titles, section titles, diagram titles, code block titles, and metrics rendered in red (`#D32F2F`).
    - Subtitles, narrative body paragraphs, table data, and code snippets rendered in crisp dark black (`#171717`).
    - Callout boxes styled with `border-l-2 border-l-accent` and red title text.
  - **Start a Conversation (`src/app/start-conversation/page.tsx`):**
    - Page and section headings rendered in red (`text-accent`).
    - Contact email and discussion topic index numbers / titles rendered in red (`text-accent`).
    - Explanatory copy, field labels, and location text rendered in dark black (`#171717`).
  - **Footer (`src/components/Footer.tsx`):**
    - Contact email in red (`text-accent`), social icons and copyright text in dark black (`#171717`) with red hover transitions.
- **Preserved Core Constraints:**
  - Neutral light gray structural borders (`#E5E5E5`) preserved for visual hierarchy without coloring borders red.
  - Subtle gray wave background pattern preserved on white.
  - Centered middle-column layout, compact text-led project lists, title-only link resolution, and 3-link mobile navigation preserved.
  - No decorative badges, cards, or gradients introduced.
- **Validation:**
  - Static compilation (`npm run build`): All 16 static HTML routes compiled with Turbopack in 1.3s with 0 errors.
  - Visual Browser Verification: Verified desktop (1440x900) and mobile (390x844) viewports across `/projects`, `/case-study`, `/case-study/checkmate`, and `/start-conversation`. Strong typographic hierarchy, high WCAG contrast, and seamless responsive layout verified.

### Milestone 29 — Project Title Links Changed to Muted Blue

- **Objective:**
  - Make a focused color adjustment to all project-title links in **Checkout** (Must Checkout) and **Developed Software** from red (`#D32F2F`) to muted blue (`#355C7D`).
  - Apply the muted blue consistently across default, hover, focus, and visited states while maintaining clear interactive feedback.
  - Keep project titles underlined; avoid decorative badges, icons, or buttons.
  - Preserve title-only link resolution: clicking a project title opens its live demo when available, otherwise its source repository.
  - Retain ordinary body text as near-black (`#171717`), background as pure white (`#FFFFFF`), and static wave texture as light gray.
  - Keep red (`#D32F2F`) for the primary navigation active indicator and other existing red accents (section headings, archive links, footer email, active markers).
  - Inspect shared link styles and design tokens before editing; prefer updating the relevant reusable style rather than scattered overrides.
- **Shared Design Token & Reusable Link Class (`src/app/globals.css`):**
  - Utilized existing `@theme` and `:root` tokens: `--color-accent-secondary: #355C7D`, `--color-accent-secondary-hover: #26435C`, `--accent-secondary: #355C7D`, and `--accent-secondary-hover: #26435C`.
  - Introduced centralized `.link-project-title` utility in `src/app/globals.css`:
    - Default state: `color: var(--accent-secondary)` (`#355C7D`), `text-decoration: underline`, `text-decoration-color: rgba(53, 92, 125, 0.4)`, `text-underline-offset: 2px`.
    - Visited state: `color: var(--accent-secondary)` (`#355C7D`) to prevent browser purple visited overrides on external domains.
    - Hover state: `color: var(--accent-secondary-hover)` (`#26435C`), `text-decoration-color: var(--accent-secondary-hover)`.
    - Focus-visible state: `outline: none`, `box-shadow: 0 0 0 1.5px var(--accent-secondary)`.
- **Project List Implementation (`src/app/projects/page.tsx`):**
  - Updated `ProjectListItem` component to use `.link-project-title` on linked project titles.
  - Updated unlinked fallback to `text-accent-secondary` (`#355C7D`).
  - Preserved user's working copy edits: removal of redundant page header block, simplified "Checkout" section title, and omission of item counter chips.
- **Preserved Core Constraints & Layout:**
  - Navigation active indicator, section headings ("Checkout", "Developed Software"), and GitHub archive link remain red (`#D32F2F`).
  - Project descriptions and em dashes remain crisp near-black (`#171717`).
  - Background remains pure white (`#FFFFFF`) with subtle light gray wave texture.
  - Title-only link destination logic intact (live demo prioritized over source repository).
- **Validation:**
  - Static compilation (`npm run build`): All 16 static HTML routes generated with 0 errors via Turbopack.
  - Browser Verification: Verified desktop (1440x900) and mobile (390x844) viewports on `/projects`. Confirmed computed styles (`rgb(53, 92, 125)` default, `rgb(38, 67, 92)` hover, `rgb(53, 92, 125)` visited), clear underline, no horizontal overflow, and responsive text wrapping.

### Milestone 30 — Site-Wide Consistent Color Hierarchy Architecture

- **Objective:**
  - Establish and systematically enforce the global color hierarchy across the entire website:
    - **White (`#FFFFFF`)** — Primary background and reading surfaces.
    - **Red (`#D32F2F`)** — Structural emphasis: page and section headings (`h1`, `h2`, `h3`), active navigation indicator, active state markers, metric numerals, and primary CTA buttons.
    - **Muted Blue (`#355C7D`)** — Interactive links: project titles, inline text links, "Read Case Study" links, breadcrumbs ("Back to Case Studies"), Table of Contents anchors, pagination links, and contact email/social links.
    - **Near-black (`#171717`)** — Primary reading content: body text, project descriptions, article narrative paragraphs, technical explanations, and form inputs.
    - **Neutral Gray (`#E5E5E5`)** — Supporting structure: subtle borders, dividers, and static wave pattern background.
- **Centralized Semantic Design Tokens (`src/app/globals.css`):**
  - Added semantic tokens to Tailwind v4 `@theme`:
    - `--color-background: #FFFFFF;`
    - `--color-text: #171717;`
    - `--color-heading: #D32F2F;`
    - `--color-heading-hover: #B71C1C;`
    - `--color-link: #355C7D;`
    - `--color-link-hover: #26435C;`
    - `--color-link-subtle: #EBF1F5;`
    - `--color-accent: #D32F2F;`
    - `--color-border: #E5E5E5;`
    - `--color-wave: #E5E5E5;`
  - Defined corresponding `:root` semantic CSS variables for cross-component reusability.
  - Added centralized `.link-interactive` utility class with default, visited, hover, and focus-visible states.
  - Linked `.btn-text` to `var(--color-link)` and `var(--color-link-hover)`.
- **Systematic Site-Wide Page & Component Refactoring:**
  - **Navigation (`src/components/Header.tsx`):**
    - Active link and bottom indicator line mapped to `text-heading` and `bg-heading` (`#D32F2F`).
    - Inactive links styled in near-black (`#171717`), transitioning to `text-heading` on hover.
  - **Button Foundation (`src/components/ui/Button.tsx`):**
    - `text` variant wired to `text-link hover:text-link-hover` (`#355C7D` / `#26435C`).
    - `primary` and `accent` variants mapped to `bg-heading hover:bg-heading-hover` (`#D32F2F` / `#B71C1C`).
    - `secondary` variant mapped to `border-border text-[#171717] hover:border-heading hover:text-heading`.
    - Focus ring updated to `focus-visible:ring-heading`.
  - **Projects (`src/app/projects/page.tsx`):**
    - Section headings ("Checkout", "Developed Software") mapped to `text-heading` (`#D32F2F`).
    - Project titles use `.link-project-title` (muted blue `#355C7D`).
    - Descriptions and separating dashes rendered in near-black (`#171717`).
    - Archive link ("Explore all projects on GitHub ↗") updated to `.link-interactive` (`#355C7D`).
  - **Case Studies Archive (`src/app/case-study/page.tsx`):**
    - Case study titles mapped to `text-heading group-hover:text-heading-hover` (`#D32F2F`).
    - Category tag and period text standardized to near-black (`#171717`).
    - "Read Case Study" action rendered in muted blue (`#355C7D`) via `Button variant="text"`.
  - **Individual Case Study Detail (`src/app/case-study/[slug]/page.tsx`):**
    - "Back to Case Studies" breadcrumb rendered in muted blue (`text-link hover:text-link-hover`).
    - Case study hero title, section headings, and callout box titles mapped to `text-heading`.
    - Table of contents links and bottom pagination links mapped to `text-link hover:text-link-hover`.
    - Role, category tag, metadata, narrative paragraphs, code blocks, and table cells rendered in near-black (`#171717`).
    - Big metric values rendered in `text-heading`.
  - **Start a Conversation (`src/app/start-conversation/page.tsx`):**
    - Hero and section headings mapped to `text-heading`.
    - Direct contact email and social channels (GitHub, LinkedIn, X, Bluesky) mapped to `text-link hover:text-link-hover`.
    - Discussion topic numbers (`01`–`04`) and topic titles mapped to `text-heading`.
    - Topic descriptions rendered in near-black (`#171717`).
  - **Contact Form (`src/components/ContactForm.tsx`):**
    - Required field indicators (`*`) mapped to `text-heading`.
    - Input focus rings mapped to `focus:ring-heading focus:border-heading`.
    - Fallback email client button mapped to `bg-heading hover:bg-heading-hover`.
  - **Footer (`src/components/Footer.tsx`):**
    - Direct email link and social icon buttons mapped to `text-link hover:text-link-hover`.
    - Copyright notice preserved in near-black (`#171717`).
- **Validation:**
  - Production build (`npm run build`): All 16 static HTML routes compiled with Turbopack in 1.9s with 0 errors.
  - Browser Verification: Tested `/projects`, `/case-study`, `/case-study/conclave`, and `/start-conversation` at desktop (1440x900) and mobile (390x844). Verified visual hierarchy: White background → red headings & active nav → blue clickable links → near-black body content → subtle gray structural elements.

### Milestone 31 — Simplified Case Study Listing (Title, Description, Read Action)

- **Objective:**
  - Simplify the case-study archive listing (`src/app/case-study/page.tsx`) so each entry contains strictly three elements:
    1. **Project title** — non-clickable plain heading (`h2`) rendered in `text-heading` (`#D32F2F`).
    2. **Description** — concise narrative description rendered in near-black body typography (`#171717`).
    3. **Read Case Study →** — the single, functional navigation link rendered in muted blue (`text-link hover:text-link-hover`, `#355C7D`).
  - Strip all extraneous surrounding metadata:
    - Removed category taxonomy labels (e.g. `Commercial Client Work`, `Distributed Systems & Queues`).
    - Removed dates (e.g. `October 2026`).
    - Removed secondary subtitles.
    - Removed technology-stack chips and rows.
    - Removed redundant title anchor link and group-hover states from the entry cards.
- **Implementation Details (`src/app/case-study/page.tsx`):**
  - Rendered `study.title` as `<h2 className="font-display text-xl sm:text-2xl font-medium tracking-tight text-heading">{study.title}</h2>` without any wrapping anchor or hover effect.
  - Retained `study.description` in `font-body text-xs sm:text-sm text-[#171717] leading-relaxed`.
  - Maintained single action `<Button href={`/case-study/${study.slug}`} variant="text" size="sm" icon="arrow-right">Read Case Study</Button>`.
  - Removed unused `next/link` import.
  - Preserved intact: all underlying case study databases, individual case-study detail pages (`/case-study/[slug]`), and global color/spacing hierarchy.
- **Validation:**
  - Production build (`npm run build`): All 16 static HTML routes compiled with Turbopack with 0 errors.
  - Browser Verification: Verified desktop (1440x900) and mobile (390x844) viewports at `http://localhost:3000/case-study`. Verified that project titles are non-clickable plain text, no category/date/tech tags remain, and clicking "Read Case Study →" correctly navigates to individual case-study pages.

### Milestone 32 — Case Study Detail Layout Streamlining & Project Metadata Update

- **Objective:**
  - Streamline individual case study detail pages (`src/app/case-study/[slug]/page.tsx`) to align with the core architectural principle of restraint and typography-driven editorial presentation.
  - Update verified metadata for the `emailJobScheduler` project narrative (`src/data/caseStudiesData/emailJobScheduler.ts`).
- **Implementation Details:**
  - **Case Study Detail Page (`src/app/case-study/[slug]/page.tsx`):**
    - Expanded page reading container to `size="default"`.
    - Removed redundant header metadata: category badge, project timeline/period, subtitle, and tech-focus tag row.
    - Removed large decorative visual preview image block from the header.
    - Removed quick metrics grid strip from the header.
    - Removed "Scope Boundaries & Engineering Trade-offs" section.
    - Cleaned up unused imports (`TextReveal`, `Image`).
    - Retained core editorial reading experience: article title, role/organization, primary live/source actions, narrative lead, table of contents, in-depth technical narrative sections (with code blocks, architecture diagrams, callouts, and comparisons), and previous/next pagination.
  - **Email Job Scheduler Data (`src/data/caseStudiesData/emailJobScheduler.ts`):**
    - Set verified live URL `liveUrl: "https://email-job-scheduler.vaibhv19.dev"`.
    - Fixed property typo `content_after` to `contentAfter` to ensure narrative commentary renders properly after SQL snippets.
- **Validation:**
  - Production build (`npm run build`): All 16 static HTML routes compiled with Turbopack in 2.8s with 0 errors and 0 type warnings.
  - Verified live application rendering and metadata alignment.

### Milestone 33 — Projects Page Header Restructuring, Marquee & Single-Column Areas of Work

- **Objective:**
  - Restructure the top introductory section of the Projects page (`src/app/projects/page.tsx`) to adopt the editorial composition of the 1nfinity About page.
  - Integrate an animated full-width marquee highlighting core capabilities.
  - Introduce an "Areas of Work" section presented as a clean, single-column vertical list aligned to the centered middle column (`Container size="default"`).
  - Strictly preserve all existing content below Areas of Work (Checkout deployments, Developed Software catalogue, and GitHub archive link).
- **Implementation Details (`src/app/projects/page.tsx`):**
  - **Hero Section:** Oversized, centered heading `Projects` in red (`text-heading` `#D32F2F`) with responsive typography (`text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] font-medium tracking-tight uppercase`), accompanied by centered supporting description in near-black (`#171717`).
  - **Capabilities Marquee:** Full-width horizontal strip (`border-y border-border bg-surface/60 py-4 sm:py-5`) with seamless continuous twin-track loop for `WEB DEVELOPMENT · BACKEND SYSTEMS · AI ENGINEERING · CLOUD & PLATFORM ENGINEERING · TECHNICAL SEO ·`, with edge fade masks, pause on hover, and reduced-motion safety.
  - **Areas of Work:** Single vertical column list displaying 6 authentic engineering domains (Web & Product Engineering, Backend & Distributed Systems, AI Engineering & Orchestration, Cloud & Platform Engineering, Technical SEO & Search Visibility, Web Performance Engineering) with red domain titles and near-black concise descriptions.
  - **Preserved Existing Sections:** Preserved `Checkout` (8 live Vercel deployments), `Developed Software` (curated selection), and GitHub archive link, maintaining project titles as the sole clickable elements prioritized by demo URL.
- **Validation:**
  - Production build (`npm run build`): All 16 static HTML routes compiled with Turbopack with 0 errors.

### Milestone 34 — Case Study Centered Middle-Column Layout Unification

- **Objective:**
  - Refine the Case Study landing page (`src/app/case-study/page.tsx`) so that the hero heading, supporting description, animated arrow, marquee, and case-study listing all align consistently within the shared centered middle-column container (`Container size="default"`, `max-w-3xl`).
  - Constrain the marquee to the content reading column rather than an edge-to-edge banner, preventing any layout divergence.
- **Implementation Details (`src/app/case-study/page.tsx`):**
  - **Unified Shared Container:** Wrapped the entire page content in `Container size="default"` with standard horizontal padding and centering.
  - **Hero & Arrow:** Centered `Case Studies` heading (`text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-heading uppercase`) and intro description, followed by centered `ScrollDownArrow` component smoothly scrolling to `#case-studies-list`.
  - **Contained Marquee:** Constrained the marquee's visible viewport within the middle reading column (`border-y border-border py-3 sm:py-3.5`) with gradient edge masks and seamless infinite looping.
  - **Preserved Case Study Archive:** Retained non-clickable red project titles, near-black descriptions, and single `Read Case Study →` navigation links.
- **Validation:**
  - Production build (`npm run build`): All 16 static HTML routes compiled with Turbopack in 2.7s with 0 errors.

### Milestone 35 — Projects Page Entire Middle-Column Layout Unification

- **Objective:**
  - Standardize the entire Projects page (`src/app/projects/page.tsx`) to follow one consistent centered middle-column structure (`Container size="default"`, `max-w-3xl`).
  - Constrain the introductory hero heading, supporting description, capabilities marquee viewport, and single-column "Areas of Work" to the exact same content column as subsequent project listings ("Checkout", "Developed Software", and GitHub archive link).
  - Eliminate any edge-to-edge breakout containers so that only the subtle background wave spans the viewport.
- **Implementation Details (`src/app/projects/page.tsx`):**
  - **Single Shared Container:** Wrapped the entire page inside `<Container size="default" className="pt-6 sm:pt-8 md:pt-10 pb-16 sm:pb-24 space-y-10 sm:space-y-12">`, guaranteeing identical horizontal margins, padding, and column boundaries across every section.
  - **Hero Section:** Centered oversized heading `PROJECTS` in red (`text-heading` `#D32F2F`) with responsive typography (`text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.08] uppercase`), accompanied by a centered supporting description with controlled reading width (`max-w-xl mx-auto`).
  - **Constrained Marquee:** Placed the `<Marquee>` component inside a column-bounded wrapper (`w-full overflow-hidden border-y border-border py-3 sm:py-3.5 select-none`). Left and right boundaries align with the content column, clipping repeating track text within the viewport and applying subtle edge fade masks against the white background.
  - **Areas of Work & Project Listings:** Maintained the single vertical column list for the 6 engineering domains, followed by "Checkout" (live Vercel deployments), "Developed Software" (curated engineering systems), and the GitHub archive link, preserving all titles, descriptions, and interactive muted blue (`#355C7D`) links.
- **Validation:**
  - Production build (`npm run build`): All 16 static HTML routes compiled with Turbopack with 0 errors.
  - Browser Verification: Tested viewports across 1440x900, 1024x768, 768x1024, 390x844, and 320x640. Verified:
    - Bounding rects and horizontal offsets align consistently across the hero, marquee, Areas of Work, and project listings.
    - Zero horizontal page overflow (`scrollWidth <= window.innerWidth`).
### Milestone 36 — Areas of Work Cycling Animation, Editorial Context & Case Study Navigation

- **Objective:**
  - Enhance Areas of Work on the Projects page with a continuous horizontal cycling-card animation reproducing the motion mechanics of 1nfinity's "The Difference" section, constrained within the shared middle column.
  - Introduce an "Inside the Engineering" editorial section on the Case Studies landing page to provide crucial narrative context across four core themes (The Problem, The Decisions, The Implementation, The Outcome).
  - Implement full keyboard (Left/Right Arrow) and touch swipe navigation for individual case studies, preserving native scrolling and typing safety.
- **Implementation Details:**
  - **Areas of Work Cycling Cards (`src/app/projects/page.tsx`):**
    - Created continuous horizontal cycling cards displaying verified credibility statements for all 6 engineering domains:
      - *Web & Product Engineering:* Built and deployed complete production web applications, commercial client platforms, and client-side WebAssembly tools.
      - *Backend & Distributed Systems:* Implemented Spring Boot REST microservices, BullMQ asynchronous worker queues, and Redis rate limiters.
      - *AI Engineering & Orchestration:* Built multi-agent debate pipelines with local Ollama models, hybrid vector-lexical RAG engines, and LangGraph workflows.
      - *Cloud & Platform Engineering:* Deployed production applications to AWS EC2 and S3, containerized services with Docker, and configured execution sandboxes.
      - *Technical SEO & Search Visibility:* Delivered documented search visibility for 1nfinity.online with semantic HTML, JSON-LD structured schemas, and dynamic sitemaps.
      - *Web Performance Engineering:* Achieved verified 99/92 Lighthouse performance benchmarks, zero layout shift, and eliminated third-party runtime animation libraries.
    - Integrated subtle alternating tilt rotations (`rotate-[1.1deg]`, `-rotate-[1.3deg]`, `rotate-[0.9deg]`, `-rotate-[1.2deg]`, `rotate-[1.0deg]`, `-rotate-[1.1deg]`) that straighten on hover.
    - Added edge gradient fade masks, pause on hover (`group-hover:[animation-play-state:paused]`), and accessible static grid fallback for `prefers-reduced-motion: reduce`.
  - **Inside the Engineering Section (`src/app/case-study/page.tsx`):**
    - Inserted editorial context section between the marquee and the case studies archive.
    - Structured around four key engineering themes: The Problem, The Decisions, The Implementation, and The Outcome.
    - Updated `ScrollDownArrow` to smoothly navigate down to `targetId="inside-the-engineering"`.
  - **Case Study Detail Navigation (`src/components/case-study/CaseStudyNavigation.tsx`, `src/app/case-study/[slug]/page.tsx`):**
    - Keyboard Navigation: Left Arrow navigates to the previous case study; Right Arrow navigates to the next case study.
    - Mobile Swipe Navigation: Passive touch event handlers detect horizontal swipes with a 70px threshold and 1.75x directional dominance ratio, avoiding interference with vertical scrolling or pinch-to-zoom.
    - Form & Shortcut Safety: Ignores modifier keys (`altKey`, `ctrlKey`, `metaKey`, `shiftKey`) and interactive targets (`input`, `textarea`, `select`, editable content).
    - Footer Pagination: Standardized previous/next links to `← Previous case study` and `Next case study →` with disabled states at boundary entries.
- **Validation:**
  - Production build (`npm run build`): All 16 static HTML routes compiled with Turbopack with 0 errors.
  - Browser verification: Verified middle-column constraint, smooth continuous marquee, arrow navigation, and responsive touch gestures without horizontal overflow.

### Milestone 37 — Life-Inspired Two-Column Editorial Redesign of "Inside the Engineering"

- **Objective:**
  - Redesign the "Inside the Engineering" section on `src/app/case-study/page.tsx` to closely match the restrained editorial layout and typography composition of `life.vaibhv19.dev` (from `Why I made this page` and `What is this page`).
  - Adapt the editorial structure strictly to MyWork's red-and-white visual identity (`#FFFFFF` background, `#D32F2F` heading red, `#171717` body copy, `#E5E5E5` borders).
- **Implementation Details:**
  - **Opening Section:**
    - Prominent heading `Inside the Engineering` in `font-display text-2xl sm:text-3xl font-medium tracking-tight text-heading uppercase`.
    - Italic framing statement in `font-body italic text-base sm:text-lg text-heading/90 leading-relaxed font-normal`: *"An exploration of architecture, constraints, and operational realities—examining how systems were designed, debugged, and evaluated under real-world conditions."*
    - Concise explanatory paragraph explaining that case studies document concrete trade-offs, concurrency models, and failure modes rather than polished showcases.
  - **Subtle Divider:**
    - Placed a delicate horizontal rule (`border-t border-border my-6 sm:my-8`) separating the opening from the two-column details.
  - **Two-Column Editorial Details (`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10`):**
    - Left Column (`md:col-span-5`): Subsection heading in `font-display text-xl sm:text-2xl text-heading` and supporting subtitle in `text-xs sm:text-sm text-[#171717]/70`.
    - Right Column (`md:col-span-7`): Separated by a delicate vertical divider (`border-l-2 border-border pl-5 sm:pl-6 space-y-3 sm:space-y-3.5 text-xs sm:text-sm text-[#171717] leading-relaxed`).
    - Organized across 3 naturally flowing editorial themes grounded in `CASE_STUDY_DATABASE.md`:
      1. *Problems & Constraints:* Details Stockfish 16 WASM main-thread lockups in CheckMate, 48-hour turnarounds with 120+ requirements in EJS, and local Ollama GPU thermal ceilings in Conclave.
      2. *Decisions & Trade-offs:* Explores COOP/COEP cross-origin isolation headers for SharedArrayBuffer multithreading, Redis Lua scripts for atomic sliding rate limit windows, and 1nfinity's desktop-only entrance sequence protecting mobile LCP.
      3. *Implementation & Outcomes:* Highlights 60 FPS UI responsiveness via UCI worker thread isolation, worker crash recovery and post-submission debranding in EJS, and documented 99 Desktop / 92 Mobile Lighthouse performance in 1nfinity.
    - Responsive Stacking: Automatically stacks vertically on mobile viewports while preserving clean line lengths and comfortable reading hierarchy.

### Milestone 38 — Production-Ready Favicon Suite Generation & Integration

- **Objective:**
  - Design, generate, and integrate a complete, valid, production-ready favicon and app icon asset suite for MyWork.
  - Ground the mark directly in MyWork's visual identity: pure white `#FFFFFF` rounded-square container, crisp boundary border, bold architectural **"V"** monogram in signature red `#D32F2F`, and contrasting inner chevron in near-black `#171717`.
- **Generated Assets & Specifications:**
  - `favicon.ico` (`public/favicon.ico` & `src/app/favicon.ico`): True multi-resolution binary ICO format embedding standard small sizes: 16×16, 32×32, and 48×48.
  - `favicon.svg` & `icon.svg` (`public/`): Valid scalable vector icon with `viewBox="0 0 512 512"`, rounded squircle (`rx="112"`), and crisp geometric strokes.
  - `favicon-16x16.png` (`public/favicon-16x16.png`): 16×16 px PNG with Lanczos anti-aliased downsampling.
  - `favicon-32x32.png` (`public/favicon-32x32.png`): 32×32 px PNG for standard browser tab bars.
  - `favicon-48x48.png` (`public/favicon-48x48.png`): 48×48 px PNG for high-DPI desktop shortcuts.
  - `apple-touch-icon.png` (`public/apple-touch-icon.png`): 180×180 px PNG for iOS Safari home screen bookmarks.
  - `android-chrome-192x192.png` (`public/android-chrome-192x192.png`): 192×192 px PNG for Android PWA splash/launcher.
  - `android-chrome-512x512.png` (`public/android-chrome-512x512.png`): 512×512 px PNG for high-resolution web app manifest.
  - `site.webmanifest` (`public/site.webmanifest`): Web app manifest specifying theme color `#FFFFFF`, background `#FFFFFF`, and PWA icon links.
- **Metadata Integration (`src/app/layout.tsx`):**
  - Updated Next.js `metadata.icons` with clean URLs referencing `/favicon.ico`, `/favicon.svg`, `/favicon-32x32.png`, `/favicon-16x16.png`, `/favicon-48x48.png`, and `apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }]`.
  - Added `metadata.manifest: '/site.webmanifest'`.
  - Replaced outdated `?v=3` query string cache-busters that pointed to stale files.
- **Verification:**
  - Verified image dimensions, color profiles, and ICO multi-size frames using Pillow binary inspection.
  - Verified production build (`npm run build`): All 16 static routes compiled with 0 errors.

---

### Milestone 39: Work With Me Landing Page & Primary Navigation Realignment (2026-10-24)
- **Primary Navigation Renaming:**
  - Renamed the header navigation label from `START A CONVERSATION` to `WORK WITH ME` across desktop and mobile in [Header.tsx](file:///d:/Work/Projects----Personal/MyWork/src/components/Header.tsx).
  - Configured `WORK WITH ME` to route to the root route `/`.
  - Active states preserved and accurate across routes (`/projects`, `/case-study`, and `/`).
- **Root Landing Page Implementation (`/`):**
  - Transformed `/` from an immediate redirect into a focused, editorial Work With Me landing page in [page.tsx](file:///d:/Work/Projects----Personal/MyWork/src/app/page.tsx).
  - **Online Presence & Search Context:** Positioned MyWork as the dedicated technical companion to `https://vaibhv19.dev/` (which appears in Google AI Overviews). Clear division of roles: `vaibhv19.dev` for broader personal writing, essays, and career background; `MyWork` for deep technical exploration into architecture decisions, source code, and verified performance.
  - **Lighthouse Performance Grounding:** Integrated verified 98+ Lighthouse performance standards in context alongside featured projects and engineering principles (e.g. 1nfinity.online documented 99 Desktop / 92 Mobile performance, 100 Best Practices & SEO) without creating synthetic dashboards or unsubstantiated claims.
  - **Selected Work Section:** Highlighted CheckMate (WASM & Web Workers), Email Job Scheduler (Distributed queues & Redis Lua), and 1nfinity.online (Restraint Over Decoration) with verified live, case study, and GitHub destinations.
  - **Editorial "How I Work":** Formatted around three principles: *Constraints Precede Architecture*, *Restraint Over Decoration*, and *Verifiable Reliability*.
  - **Exploration & Contact:** Direct paths to Developed Software catalog (36 projects), Technical Case Studies, GitHub Archive, and direct email/LinkedIn contact channels.
- **Verification:**
  - Production build executed cleanly with 0 TypeScript/Turbopack errors across all 16 static pages.

---

### Milestone 40: Unified Work With Me Experience & Integrated Contact Section (2026-10-24)
- **Continuous Landing Page Flow ([page.tsx](file:///d:/Work/Projects----Personal/MyWork/src/app/page.tsx)):**
  - Integrated the contact section directly into the root route `/` as the closing call to action (`id="contact"`), eliminating the need for a separate standalone contact page.
  - Sequenced all sections into a continuous, scrollable reading flow: Hero & Introduction -> Core Disciplines Marquee -> Selected Work (CheckMate, Email Job Scheduler, 1nfinity.online) -> How I Work (Editorial principles) -> Explore My Work (Catalog, Case Studies, GitHub, vaibhv19.dev) -> Contact Call to Action.
  - Updated Hero action buttons to smoothly anchor to `#contact`, keeping the visitor inside the unified Work With Me page.
- **Navigation Polish ([Header.tsx](file:///d:/Work/Projects----Personal/MyWork/src/components/Header.tsx)):**
  - Added an `onClick` handler on the `WORK WITH ME` link to smoothly scroll back to the top of the page when the user is already on `/`.
- **Legacy Route Redirection ([start-conversation/page.tsx](file:///d:/Work/Projects----Personal/MyWork/src/app/start-conversation/page.tsx)):**
  - Configured a server-side redirect from `/start-conversation` to `/#contact` to preserve compatibility with existing bookmarks and inbound links without duplicate content.
- **Areas of Work & Editorial Restructuring:**
  - Refined domain descriptions in [projects/page.tsx](file:///d:/Work/Projects----Personal/MyWork/src/app/projects/page.tsx) for *Technical SEO & Search Visibility* (referencing `vaibhv19.dev` appearing in Google AI Overviews) and *Web Performance Engineering* (referencing verified 98+ Lighthouse standards and 1nfinity.online 99/92 audit).
  - Restored proper section nesting and sequencing in both [projects/page.tsx](file:///d:/Work/Projects----Personal/MyWork/src/app/projects/page.tsx) and [case-study/page.tsx](file:///d:/Work/Projects----Personal/MyWork/src/app/case-study/page.tsx).
- **Verification:**
  - Production build (`npm run build`) succeeded with 0 errors across all 16 static/SSG routes.

---

### Milestone 41: Inline Google Calendar Appointment Booking Integration (2026-10-24)
- **Inline Appointment Scheduling ([page.tsx](file:///d:/Work/Projects----Personal/MyWork/src/app/page.tsx)):**
  - Integrated a dedicated `Book a Meeting` section (`id="book-meeting"`) within the shared centered container on the Work With Me landing page (`/`).
  - Embedded Google Calendar Appointment Schedule iframe (`https://calendar.google.com/calendar/appointments/schedules/AcZssZ3Z-l5Ev8LHzyxn4ZiIv8APZDEqI7ES5_XmRJKdy_5W7XnAru7iM4pV9srd4kIZU1QneAY8UDws?gv=true`) with 600px height, responsive width constraints, and accessible title (`Book an appointment with Vaibhav Gupta via Google Calendar`).
  - Added a discreet, verified external fallback link (`Open booking calendar ↗` and direct fallback text) pointing to `https://calendar.app.google/9SPAp6kwTNYcksBb8` for browsers blocking third-party iframes.
  - Positioned seamlessly alongside the contact section with consistent typography, red accent `#D32F2F`, and border tokens without introducing extraneous dependencies.
- **Verification:**
  - `npm run build` executed cleanly with 0 errors across all 16 static and dynamic routes.

---

### Milestone 42: Compact Google Calendar Booking Embed (2026-10-24)
- **Container Dimension Reduction ([page.tsx](file:///d:/Work/Projects----Personal/MyWork/src/app/page.tsx)):**
  - Constrained the booking section width to `max-w-[720px] mx-auto` to eliminate oversized horizontal spread on desktop screens while preserving fluid full-width responsiveness on tablet and mobile viewports.
  - Reduced outer vertical spacing and padding (`pt-6 sm:pt-7`, `space-y-3 sm:space-y-3.5`).
- **Streamlined Presentation & Usability:**
  - Added a concise introductory sentence (*"Select a date and time that works best for your schedule."*) and kept the discreet `Open booking calendar ↗` external fallback link in the header.
  - Reduced iframe height to `550px` (min-height `540px`) to eliminate dead vertical whitespace while preserving full usability for date selection, time picking, and Google Meet details.
- **Verification:**
  - Production build (`npm run build`) succeeded with 0 errors across all 16 static/SSG routes.

---

### Milestone 43: Final Codebase Cleanup, Dead Code & Asset Removal, and LOC Reduction (2026-10-24)
- **Dead Component Files Removed:**
  - `src/components/ui/SectionReveal.tsx` (70 LOC): Completely unreferenced; replaced earlier with instant, non-stuttering rendering in the anti-AI-slop audit.
  - `src/components/ui/TextReveal.tsx` (102 LOC): Completely unreferenced; superseded in editorial typography refactors.
  - `src/components/PageTransition.tsx` (15 LOC): Completely unreferenced; unused in layout or route wrappers.
- **Unused Starter Asset Cleanup:**
  - Removed boilerplate starter SVGs from `public/`: `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, and `window.svg` (all 0-reference Next.js template artifacts).
- **Dead Code & Unused Imports Removed:**
  - `src/app/page.tsx`: Removed unused `Link` and `Button` imports; removed unused `FeaturedProject` interface and dead `FEATURED_PROJECTS` array (38 LOC eliminated). Escaped unescaped apostrophe in `Hi, I&apos;m @Vaibhv19`.
  - `src/app/case-study/[slug]/page.tsx`: Removed unused `import Link from "next/link";`.
  - `src/components/Footer.tsx`: Removed unused `import Link from "next/link";`; removed unreferenced `BlueskyIcon` and `ThreadsIcon` imports; eliminated synchronous `setState` in effect for reduced-motion using `requestAnimationFrame`.
  - `src/components/BrandIcons.tsx`: Removed unreferenced `BlueskyIcon` and `ThreadsIcon` SVG functions (15 LOC eliminated).
  - `src/data/caseStudiesData/index.ts`: Consolidated duplicate import/export statements into a clean single pass.
- **Obsolete Styles Pruned ([globals.css](file:///d:/Work/Projects----Personal/MyWork/src/app/globals.css)):**
  - Removed obsolete `@keyframes pageTransitionFadeIn` and `.animate-page-transition` classes.
  - Removed superseded button classes (`.btn-primary`, `.btn-secondary`, `.btn-text`), which were replaced by Tailwind utility classes inside `Button.tsx`.
  - Removed unused typography classes (`.font-display-h1`, `.font-display-h2`, `.font-display-h3`, `.font-body-sm`, `.font-eyebrow`, `.font-metric`) and unused utility classes (`.surface-glass`, `.divider-subtle`, `.bg-ambient-glow`, `.transition-editorial`, `.transition-cinematic`).
  - Preserved all active tokens, animations (`@keyframes marquee`, `@keyframes arrow-down`), typography (`.font-display-hero`, `.font-body-lead`, `.font-body`), interactive link styles, and accessibility overrides.
- **Deliberately Retained Candidates:**
  - `src/app/api/contact/route.ts` (106 LOC) & `src/components/ContactForm.tsx` (306 LOC): Retained because `/api/contact` is an active serverless endpoint powered by Resend SDK and documented in the 1nfinity case study architecture, and `ContactForm` is its complete, verified UI pairing.
  - All favicon assets (`favicon.ico`, `favicon.svg`, `favicon-16x16.png`, `favicon-32x32.png`, `favicon-48x48.png`, `apple-touch-icon.png`, `android-chrome-*.png`, `site.webmanifest`) preserved intact.
- **Code Metrics & LOC Impact:**
  - Baseline source LOC: 4,302 lines across 32 files.
  - Post-cleanup source LOC: 3,893 lines across 29 files.
  - Net source reduction: **-409 LOC (-9.5%)**, 3 dead component files deleted, 5 boilerplate assets deleted.
- **Verification:**
  - `npm run lint`: Passed with 0 errors and 0 warnings.
  - `npm run build`: Production build succeeded in ~3.5s with all 16 static/SSG routes rendered cleanly.


