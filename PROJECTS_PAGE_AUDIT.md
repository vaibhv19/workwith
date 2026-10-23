# Projects Page Audit & Reconstruction Plan

**Canonical Source of Truth:** `data/projects.ts`  
**Target Page:** `src/app/projects/page.tsx` (`https://mywork.vaibhv19.dev/projects`)  
**Audit Date:** October 24, 2026  

---

## 1. Inventory: Total Projects in Canonical Catalogue

`data/projects.ts` defines exactly **36 projects** across 8 structured categories, plus **3 training parent frameworks**:

### Canonical Categories & Project Breakdown (36 Total):
1. **Applied Projects (10 projects):**
   - `checkmate-analyze` (CheckMate) — WebAssembly Stockfish 16 chess analysis engine.
   - `trajectory` (Trajectory) — Enterprise career operations platform.
   - `phoenix` (Phoenix) — Hybrid RAG engine with mathematical confidence scoring.
   - `conclave` (Conclave) — Multi-agent local LLM consensus room.
   - `foundry` (Foundry) — LangGraph multi-agent startup architecture evaluator.
   - `shard` (Shard) — In-memory distributed cache with Murmur3 consistent hashing (Python/Django).
   - `cairn` (Cairn) — Distributed key-value cache engine in Java 21 / Spring Boot.
   - `studylink` (StudyLink) — Academic resource vault & peer-to-peer textbook marketplace.
   - `vigil` (Vigil) — Autonomous AI agent sandboxing and anomaly detector.
   - `email-job-scheduler` (Email Job Scheduler) — Distributed delayed queue and rate-limiting engine.

2. **System Integrity & DevSecOps Guardrails (3 projects):**
   - `aegis` (Aegis) — Automated Playwright & Allure enterprise test framework.
   - `pulse` (Pulse) — Automated k6 load and resilience testing framework.
   - `warden` (Warden) — Automated OWASP ZAP security audit and vulnerability fuzzer.

3. **Academic Milestones — Formal Coursework Projects (2 projects):**
   - `ecolens` (EcoLens) — Geotagged environmental hazard detection with Google Gemini & Leaflet.
   - `smart-surveillance-system` (Smart Surveillance System) — AI campus rule-violation specifications.

4. **Technical Training Frameworks and Practical Modules (6 projects):**
   - `vidyalink` (VidyaLink, Lenovo LEAP) — Zero-backend educational vault on localStorage.
   - `startup-blueprint-generator` (Startup Blueprint Generator, IBM SkillsBuild) — Multi-agent Langflow pipeline.
   - `the-tiffin-dispatch` (The Tiffin Dispatch, IBM-PBEL) — Full-stack vintage cafe ordering simulation.
   - `e-commerce-website` (E-commerce Website, IBM-PBEL) — Express/MongoDB session catalog.
   - `social-media-backend` (Social Media Backend, IBM-PBEL) — Node.js REST API with role moderation.
   - `weather-app` (Weather App, IBM-PBEL) — Open-Meteo telemetry console with input debouncing.

5. **Built for No Reason Other Than Wanting To (1 project):**
   - `birthday-wish` (Birthday Wish) — Interactive canvas particle physics celebration.

6. **Retired Explorations & Early Builds (11 projects):**
   - `fitness-application` — Distributed microservices platform (Spring Cloud / RabbitMQ / Keycloak).
   - `audio-transcriber` — Whisper audio transcription pairing Spring Boot & React 19.
   - `authentication-service` — Stateless JWT & BCrypt auth service in Spring Boot 3.2.
   - `ticket-booking-system` — Core Java 21 CLI railway reservation workflow.
   - `desktop-applications-suite` — Java Swing GUI utilities (Calculator, Morse code, Paint).
   - `streamverse-ui` — Vanilla HTML5/CSS3 streaming media interface.
   - `high-performance-socket-servers` — Low-level TCP socket architectures in Java ExecutorService.
   - `smart-research-assistant` — Chrome extension with Spring Boot & Gemini for webpage summarization.
   - `content-generator-platform` — Generative AI studio (Spring AI + OpenAI image/text).
   - `ca-portfolio` — Executive Next.js + Django portfolio with AES-256 database encryption.
   - `my-portfolio` — Generative UI exploration with Google Gen AI SDK & Tailwind 4.

7. **Client Work & Collaborations (1 project):**
   - `1nfinity` (1nfinity) — Bespoke agency web platform for creator marketing firm.

8. **Personal Websites & Platforms (2 projects):**
   - `portfolio-blog` (vaibhv19.dev) — Main personal portfolio and technical blog.
   - `life` (life.vaibhv19.dev) — Personal digital scrapbook.

### Parent Training Frameworks (`TRAINING_PARENTS`, 3 total):
- `lenovo-leap` (Lenovo LEAP NextGen Scholar)
- `ibm-skillsbuild` (IBM SkillsBuild)
- `ibm-pbel` (IBM-PBEL)

---

## 2. Available Fields in Canonical Schema (`Project`)

```typescript
export interface Project {
  id: string;                      // Unique slug identifier
  title: string;                   // Public project name
  tagline: string;                 // Concise editorial premise
  bullets: string[];               // Technical achievements / features
  category: ProjectCategory;       // One of the 8 canonical categories
  techStack: string[];             // Array of relevant technology names
  featured?: boolean;              // Highlight flag
  homepagePreview?: boolean;       // Flag for homepage cards
  demoUrl?: string;                // Verified live deployment link
  githubUrl?: string;              // Verified source code repository
  highlights?: string[];           // Key metrics or callouts
  parentFrameworkId?: string;      // Links to TRAINING_PARENTS
}
```

---

## 3. Discrepancies & Deficiencies in Existing Implementation

### Deficiency A: Hardcoded Section 1 (`MUST_CHECKOUT`)
- In `src/app/projects/page.tsx`, Section 1 ignored `PROJECTS` and maintained a separate, inline TypeScript array `const MUST_CHECKOUT: MustCheckoutProject[] = [ ... ]`.
- This hardcoded list duplicated titles, IDs, tech stacks, and wrote separate descriptions, drifting from the canonical `data/projects.ts`.
- **Erroneous / Broken URLs in Hardcoded List**:
  - `the-tiffin-dispatch`: Hardcoded had `https://the-tiffin-dispatch.vercel.app` (which returns **HTTP 404**!) and repository `The-Tiffin-Dispatch`. The canonical `data/projects.ts` correctly points to `https://thetiffindispatch.vaibhv19.dev/` (Status: **200 OK**) and repository `food-ordering-system`.
  - `birthday-wish`: Hardcoded had `https://birthday-wish-three.vercel.app` whereas canonical is `https://zoya.vaibhv19.dev/` (Status: **200 OK**).

### Deficiency B: Phantom Project IDs & Mass Omissions in Section 2 (`CATEGORIZED_SOFTWARE`)
- Section 2 attempted to filter projects by hardcoding an array of string IDs:
  - `"redis-lite"` and `"load-balancer"` were queried under *Systems & Infrastructure*. **Neither ID exists in `data/projects.ts`** (the real projects are `shard`, `cairn`, or `high-performance-socket-servers`).
  - `"fintrack"`, `"eventhub"`, `"devconnect"`, and `"ai-mock-interview"` were queried under *Applied Web Applications*. **None of these exist in `data/projects.ts`** (carried over from an unrelated template).
- **Massive Omissions**:
  - Out of 36 projects in the catalogue, only 9 projects were rendered in Section 2.
  - **27 canonical projects (75%) were completely omitted**:
    - Applied Projects omitted: `foundry`, `shard`, `cairn`, `vigil`.
    - Technical Training Frameworks omitted: `vidyalink`, `startup-blueprint-generator`, `e-commerce-website`, `social-media-backend`, `weather-app`, `the-tiffin-dispatch`.
    - Retired Architecture Explorations: All 11 projects omitted (`fitness-application`, `audio-transcriber`, `authentication-service`, `ticket-booking-system`, `desktop-applications-suite`, `streamverse-ui`, `high-performance-socket-servers`, `smart-research-assistant`, `content-generator-platform`, `ca-portfolio`, `my-portfolio`).
    - Client Work & Personal Platforms: `1nfinity`, `portfolio-blog`, `life`.

---

## 4. URL Verification Audit

A live HTTP verification test was conducted across all deployment links specified in `data/projects.ts`:

| Project ID | Canonical `demoUrl` | HTTP Status | Status Details |
|---|---|---|---|
| `checkmate-analyze` | `https://checkmate.vaibhv19.dev/` | **200 OK** | Verified live Stockfish 16 WASM app |
| `trajectory` | `https://trajectory.vaibhv19.dev` | **200 OK** | Verified live enterprise application |
| `1nfinity` | `https://1nfinity.online` | **200 OK** | Verified live commercial client platform |
| `the-tiffin-dispatch` | `https://thetiffindispatch.vaibhv19.dev/` | **200 OK** | Verified live interactive app (404 on old vercel URL) |
| `birthday-wish` | `https://zoya.vaibhv19.dev/` | **200 OK** | Verified live canvas celebration |
| `portfolio-blog` | `https://vaibhv19.dev` | **200 OK** | Verified live primary blog |
| `life` | `https://life.vaibhv19.dev` | **200 OK** | Verified live digital scrapbook |
| `email-job-scheduler` | `https://email-job-scheduler.vaibhv19.dev` | **200 OK** | Resolves |

### Repository URL Audit:
- 33 projects possess public GitHub repository URLs in `data/projects.ts`.
- 3 projects do NOT have public repositories:
  - `1nfinity` (Private commercial client engagement).
  - `life` (Private personal digital scrapbook).
  - All other projects have verified public repositories under `https://github.com/vaibhv19/...`.

---

## 5. Reconstruction Strategy

1. **Schema Minimal Augmentation**:
   - In `data/projects.ts`, add optional metadata fields to `Project`:
     - `mustCheckout?: boolean;` — Explicit, non-arbitrary curation flag for Section 1.
     - `previewImage?: string;` — Path to verified project artwork (e.g. `/images/projects/checkmate-preview.png`, `/images/case-studies/1nfinity-preview.webp`).
   - Tag the 5 verified flagship deployed applications with `mustCheckout: true`:
     - `checkmate-analyze` (CheckMate)
     - `trajectory` (Trajectory)
     - `1nfinity` (1nfinity.online)
     - `the-tiffin-dispatch` (The Tiffin Dispatch)
     - `birthday-wish` (Birthday Wish)

2. **Section 1: Must Checkout Implementation**:
   - Derive dynamically: `const mustCheckoutProjects = PROJECTS.filter((p) => p.mustCheckout);`
   - Render title, authentic tagline, bullets/description, tech stack, verified `demoUrl`, and verified `githubUrl` directly from the canonical object.
   - ZERO hardcoded secondary arrays.

3. **Section 2: Developed Software Implementation**:
   - Organize all 36 projects into coherent, authentic categories matching `data/projects.ts`:
     - **Systems Architecture & Applied Platforms** (Applied Projects: `conclave`, `phoenix`, `foundry`, `shard`, `cairn`, `studylink`, `vigil`, `email-job-scheduler`, etc.)
     - **System Integrity & DevSecOps Guardrails** (`aegis`, `pulse`, `warden`)
     - **Technical Training & Practical Modules** (`vidyalink`, `startup-blueprint-generator`, `e-commerce-website`, `social-media-backend`, `weather-app`, etc.)
     - **Academic Milestones & Explorations** (`ecolens`, `smart-surveillance-system`)
     - **Architecture Foundations & Early Builds** (11 retired exploration projects)
     - **Personal Platforms & Client Deliveries** (`portfolio-blog`, `life`, `1nfinity`)
   - Handle projects without public repositories gracefully (render text badge or omit button without broken links).
   - Ensure visual hierarchy is dense, elegant, and readable under the BLog design system.
