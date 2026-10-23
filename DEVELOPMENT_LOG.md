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

### Milestone 9 — Cohesive Editorial Redesign Across All Three Pages
- **Scope:**
  - Unified the entire website (`Projects`, `Case Study`, `Start a Conversation`) under the established blog design system (`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8` matching `Header` and `Footer`).
  - **Projects (`/projects`):**
    - Redesigned into an editorial layout with copper eyebrow `ENGINEERING REPERTOIRE` and clear visual hierarchy.
    - Section 1 ("01 / Must Checkout"): Prominently showcases curated interactive live deployments (CheckMate, Trajectory, 1nfinity, The Tiffin Dispatch, Birthday Wish) with genuine visuals, status badges, and direct application actions (`Open Live Application ↗` and `Source Code ↗`). Zero case-study links present.
    - Section 2 ("02 / Developed Software"): High-density, elegant catalog organized by category (Systems & Infrastructure, Web Applications, Security Guardrails, Academic & Experiments) with GitHub repository actions.
  - **Start a Conversation (`/start-conversation`):**
    - Replaced wide card layout with an editorial contact composition matching BLog's intimate style.
    - Added copper eyebrow `DIRECT COMMUNICATION`, concise invitation subhead, and prominent direct contact bar (`contact@vaibhv19.dev` with 1-click clipboard copy and mailto launcher).
    - Refined `ContactForm.tsx` to use slate-800 borders, dark obsidian surfaces, copper focus rings, and streamlined input heights.
    - Integrated clean 4-area welcome guide covering full-time engineering roles, technical architecture reviews, production web platforms, and open-source collaborations.
- **Verification:**
  - `npx tsc --noEmit` exited code 0 (0 errors).
  - `npm run lint` exited code 0 (0 errors, 0 warnings).
  - `npm run build` compiled all 16 routes in 1.9s.
  - End-to-end browser inspection via `browser_subagent` confirming visual cohesion, typography scale, responsive collapse, and interactive states across all three pages on desktop and mobile viewports.

### Milestone 10 — Critical Content Audit and Reconstruction: Engineering Case Studies
- **Audit Findings (Phase 1, Commit `0623c7d`):**
  - Confirmed that previous case-study pages were shallow summaries relying on catalog taglines and a uniform 4-bullet template.
  - Omitted crucial technical depths from `CASE_STUDY_DATABASE.md`, such as COOP/COEP SharedArrayBuffer multithreading in CheckMate, dual-token rotation in Trajectory, prompt token adapters and pessimistic locking in Conclave, the mathematical CS formula and 85% CS ceiling in Phoenix, atomic SQL claiming and Lua rate-limiting in EJS, and the desktop-only entrance LCP bypass in 1nfinity.
  - Documented complete answers to all 7 audit inquiries in `CASE_STUDY_CONTENT_AUDIT.md`.
- **Architectural Reconstruction (Phase 2 & 3):**
  - Created modular narrative modules in `src/data/caseStudiesData/`:
    - `types.ts`: Structured types for deep narrative sections, callouts (invariants, insights, dilemmas, caveats), ASCII architecture diagrams, syntax-highlighted code blocks, structured tables, and evidence tags.
    - `checkmate.ts`: Web Worker UCI streaming, `stop` interrupt queue clearing, `SharedArrayBuffer` with `Cross-Origin-Opener-Policy: same-origin` and `Cross-Origin-Embedder-Policy: require-corp` in `vercel.json` (commit `ea74c3e`), centipawn normalization formula, immutable What-If exploration, and PR #15 board flip.
    - `trajectory.ts`: Reconciled spreadsheet-to-app organic evolution with compressed July 13, 2026 commits, dual-token JWT auth with PostgreSQL `refresh_tokens` rotation, `MockOAuth2RedirectFilter` for offline dev, Spring AI Groq extraction with regex fallbacks, S3 versioning, EC2/RDS/Nginx/Certbot setup, and `GhostDetectionScheduler`.
    - `conclave.ts`: Context Tax origin, 3-stage evolution (Cloud APIs -> Mock ChatClients -> 100% Local Ollama), prompt token adapters (`LlamaAdapter.java`, `MistralAdapter.java`, `GemmaAdapter.java`), STOMP WebSockets with PostgreSQL `SELECT FOR UPDATE` pessimistic locking for human intervention (`isIntervention`), `WorkflowStateService` Context Janitor, and physical laptop thermal throttling limits.
    - `phoenix.ts`: Cognitive invariant ("knowing when you don't know"), subword tokenizer failures on dot-separated config keys, dual-backend split suggested by LLMs, hybrid fusion equation (`0.7 * Sim_vector + 0.3 * Score_bm25_norm`), composite confidence formula (`CS = 0.6 * MaxSim + 0.4 * Agreement`), 4-tier fallback state machine (Green, Yellow HyDE, Orange FlashRank, Red Clarification), and the documented ~85% CS ceiling.
    - `emailJobScheduler.ts`: 48-hour hiring assignment context across 10 phases and honest rejection record, post-submission debranding (commit `151ceba9`), Zero-Cron invariant, atomic database claiming SQL, atomic Redis Lua rate-limiting with non-destructive BullMQ `moveToDelayed` rescheduling, pre-send `email_attempts` crash recovery, and Elasticsearch outbox sync.
    - `oneInfinity.ts`: Commercial client work attribution, "Restraint Over Decoration" philosophy (zero Framer Motion), 4-second desktop-only entrance sequence with ESC bypass (disabled on mobile to protect LCP), founder's pricing pivot (commit `62012c7`), and serverless Resend contact route.
  - Updated `src/data/caseStudies.ts` to bind full narrative payloads to listing items.
  - Reconstructed `src/app/case-study/[slug]/page.tsx` with rich editorial typography, quick metric cards, research verification badges, in-page section outlines, interactive callout boxes, ASCII diagrams, code excerpts, data tables, and explicit sections on deliberate omissions and open technical inquiries.
- **Verification:**
  - `npx tsc --noEmit` exited code 0 (0 errors).
  - `npm run lint` exited code 0 (0 errors, 0 warnings).
  - `npm run build` compiled all 16 static HTML pages in 3.2s.
  - End-to-end browser inspection via `browser_subagent` recording complete visual elegance and responsive layout.









