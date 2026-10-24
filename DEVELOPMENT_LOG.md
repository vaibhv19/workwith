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
  - Case Study archive verified on desktop: elegant editorial text list.
  - Conclave case study verified on desktop and mobile: excerpt lead immediately transitions into the quantitative metrics strip and table of contents without the intrusive screenshot.
  - Production build (`npm run build`): 16 of 16 static HTML routes compiled with zero errors in Next.js Turbopack.
