# CASE_STUDY_DATABASE.md

> **Purpose.** This file is the verified premise and evidence layer for eventual case studies on six portfolio projects: Trajectory, CheckMate, Conclave, Phoenix, Email Job Scheduler (EJS), and 1nfinity.online. It is NOT the case studies themselves. Each entry records the authenticated story — origins, engineering decisions, contradictions between sources, and open questions — ready to be developed into finished case-study prose later. Every factual line is source-tagged.
>
> **Source tags:** `[CONVERSATION]` = stated in earlier user interactions / confirmed context · `[CATALOG]` = from `projects.ts` · `[REPO]` = verified in code, docs, or git log (with file path or commit ref) · `[CONFIRM]` = needs Vaibhav's answer.

---

## Repo Accessibility

Repository locations, visibility, and accessibility across all six projects:

| Project | Local path | Visibility / Remote | Accessibility Status |
|---------|------------|---------------------|----------------------|
| Trajectory | `D:\Work\Projects----For Resume\Trajectory\` | Public (`https://github.com/vaibhv19/Trajectory`) | Accessible locally |
| CheckMate | `D:\Work\Projects----For Resume\Check-Mate Analyse\` | Public (`https://github.com/vaibhv19/Check-Mate-Analyse`) | Accessible locally |
| Conclave | `D:\Work\Projects----For Resume\Conclave\` | Public (`https://github.com/vaibhv19/Conclave`) | Accessible locally |
| Phoenix | `D:\Work\Projects----For Resume\Phoenix\` | Public (`https://github.com/vaibhv19/Phoenix`) | Accessible locally |
| Email Job Scheduler (EJS) | `D:\Work\Projects----Commercial\Outbox Labs\Assignment\` | Listed in catalog (`https://github.com/vaibhv19/Email-Job-Scheduler`) | Local path outside active workspace / Inspected via research record |
| 1nfinity.online | `D:\Work\Projects----Commercial\1nfinity\website\` | Private client repo (no public GitHub URL) | Local path outside active workspace / Inspected via research record |

**Note on git history:** All primary engineering repos show compressed commit batches (most feature work landed on single days: Trajectory almost entirely on 2026-07-13, Phoenix main features on 2026-07-28-31, Conclave on 2026-07-24-28, CheckMate on 2026-06-28 through 2026-07-01, EJS all 10 phases across 2026-10-13 and 2026-10-14). This matches an AI-agent assisted workflow where commits occur after atomic tasks. Commit dates reflect implementation batches, not proof of an upfront monolithic plan.

---

## Summary Table

| Project | Story Strength | Biggest Open Question |
|---------|---------------|----------------------|
| Trajectory | **Ready** — origin is clear, organic scope expansion is confirmed, engineering decisions verified in code | Rationale for choosing AWS EC2 over simpler hosting, and the reason for the planned Oracle Cloud migration |
| CheckMate | **Ready** — first-shipped anchor, clean engineering story, all architecture verified | Whether there was a genuine paywall frustration trigger or just chess is a hobby and this seemed buildable |
| Conclave | **Ready** — richest documented story; pivot from cloud APIs to mocks to local Ollama is in CHANGELOG; honest caveat (overheating) on record | Whether Conclave is a descendant of the earlier Roundtable concept, and actual usage frequency |
| Phoenix | **Needs confirmation** — strong architecture, all fallback tiers verified; LLM origin of dual-backend split confirmed; CS ceiling open | What the ~85% CS ceiling diagnosis resolved to; whether benchmark tests were executed |
| Email Job Scheduler (EJS) | **Ready for engineering story** — 2-day build constraint, 5 services, 120+ verified checklist items; rejection and post-rejection debranding confirmed | Current live deployment status (`email-job-scheduler.vaibhv19.dev`) and repository public visibility |
| 1nfinity.online | **Ready for client-work framing** — designed and built from scratch by Vaibhav (except logo); founder's packages decision confirmed; 99/92 Lighthouse | GA4 production metrics access, and current repository/Vercel handover state |

---

## Cross-Project Contradictions and Verification Checklist

| # | Contradiction / Question | Projects | Status |
|---|--------------------------|----------|--------|
| 1 | You stated @dnd-kit was used for drag-and-drop and a kanban board with audit history; neither appears in frontend/package.json nor in any source file or commit in the Trajectory repo. | Trajectory | **Resolved: no kanban, no dnd-kit** |
| 2 | You stated JWT has a 7-day refresh rotation. The repo shows access token expiry 24h (86400000 ms) and refresh token expiry 7 days (604800000 ms). The 7-day figure applies to the refresh token, not the access token. | Trajectory | **Clarified: framing needed precision** |
| 3 | An older note claimed Trajectory skipped JWT in an earlier version. JWT was present from the very first backend commit (2026-07-13). | Trajectory | **Resolved: JWT was in from day one** |
| 4 | An older note claimed CheckMate used a Spring Boot + chesslib stack. Zero Java, Spring Boot, or pom.xml anywhere in the CheckMate repo. | CheckMate | **Resolved: no backend ever existed** |
| 5 | Conclave learning chapter 04 was titled Fake ChatClients. In the current repo, that chapter was deleted (commit ba24663, 2026-08-02) and replaced with Ollama Clients (commit 121b7a9, 2026-08-02). Current codebase uses real OllamaChatModel beans. | Conclave | **Resolved: fake-client chapter documented a discarded approach** |
| 6 | projects.ts catalog lists Conclave stack as Ollama local + cloud endpoints. No cloud endpoints exist in final codebase. CHANGELOG states migrated to 100% local inference. | Conclave | **Contradiction: catalog text is stale; repo is the truth** |
| 7 | You stated Phoenix runs on Groq Cloud (Llama 3) in one earlier note. Phoenix uses local Ollama running mistral. Groq is used in Trajectory. | Phoenix / Trajectory | **Resolved: Groq = Trajectory; Ollama/Mistral = Phoenix** |
| 8 | Phoenix: 100% Hit Rate @ 1 benchmark. Documented in test design; not confirmed as a run result. | Phoenix | **Confirm whether the test was run** |
| 9 | Phoenix: ~85% CS ceiling. Formula analyzed; ceiling is plausible given discrete Agreement metric. Diagnosis not documented. | Phoenix | **Unresolved: Ask Vaibhav what this resolved to** |
| 10 | Phoenix: Motivation for dual-backend split (Python vs Java). | Phoenix | **Resolved: LLMs suggested separating the Python AI engine from Java backend** |
| 11 | Trajectory scope: grew organically vs planned upfront. Git history compressed on 2026-07-13; tagline implies organic growth. | Trajectory | **Resolved: Scope grew organically (confirmed by Vaibhav); git timing reflects commit batching** |
| 12 | Trajectory Oracle Cloud migration reason. | Trajectory | **Unresolved: Ask Vaibhav** |
| 13 | Conclave: Roundtable predecessor. | Conclave | **Unresolved: Ask Vaibhav** |
| 14 | EJS: Outcome of hiring assignment and subsequent changes. | EJS | **Resolved: Received rejection email; removed assignment branding and reviewer access** |
| 15 | 1nfinity: Website design ownership. | 1nfinity | **Resolved: Vaibhav designed and developed site from scratch, except the logo** |
| 16 | 1nfinity: Packages removal decision. | 1nfinity | **Resolved: Founder of 1nfinity decided to remove packages, not Vaibhav** |


---

## CheckMate

### Record

- **id:** `checkmate-analyze` [CATALOG]
- **title:** CheckMate [CATALOG]
- **tagline:** "Post-chess clarity, engine-assisted — built so tactical blunders get analyzed instead of ignored." [CATALOG]
  - Note: The catalog tagline is longer than the brief prompt shorthand ("Post-chess clarity, engine-assisted."). Both are from the catalog. [CATALOG]
- **category:** Applied Projects [CATALOG]
- **featured:** true / **homepagePreview:** false [CATALOG]
- **status:** Released v1.0.0 (2026-07-01); v1.0.1 docs upgrade released 2026-07-28. Final target version. No further releases planned. [REPO: CHANGELOG.md, commit 6be1eec]
- **techStack:** TypeScript, React, Vite, chess.js, Stockfish 16 WASM, Web Workers, SharedArrayBuffer, Tailwind CSS, shadcn/ui, Recharts, Vitest [REPO: package.json, Docs/SYSTEM_ARCHITECTURE.md]
  - Note: Catalog lists WebAssembly, Web Workers, SharedArrayBuffer, chess.js — correct. Full picture adds Vite, Tailwind CSS, shadcn/ui, Recharts. [REPO]
- **demoUrl:** https://checkmate.vaibhv19.dev/ [CATALOG]
- **githubUrl:** https://github.com/vaibhv19/Check-Mate-Analyse [CATALOG]
- **story strength:** Ready — all architecture claims verifiable in code; only thin area is personal origin/trigger.

### Case Study Premise

- **origin:** Chess is a hobby. [CONVERSATION] The project was framed as a free alternative to chess.com premium game analysis — access to engine analysis normally sits behind a paywall. [CONVERSATION] Whether a specific frustrating paywall encounter triggered it is not recorded. [CONFIRM: Q1]

- **initial idea vs what it became:** The core concept appears consistent from the start: a browser-based chess analysis workbench with engine integration. The PRD one-sentence vision — "The fastest, local-first way to inspect and debug chess game mistakes" — reads like a founding principle rather than a post-hoc summary. [REPO: Docs/PRD.md] No evidence of a scope pivot during development; the roadmap was executed sequentially (TS-1 through TS-14 in commits). [REPO: git log, commits b737f05 through ea74c3e]

- **underlying problem:** Chess.com and similar platforms require subscriptions for engine analysis. The workbench solves this by running Stockfish 16 entirely client-side via WebAssembly, with no server, no account, and no data leaving the browser. [REPO: Docs/PRD.md section 2 Non-Negotiable Principles: "No game data, FEN, PGN, or move history shall be transmitted to external servers."] [REPO: README.md]

- **turning point:** There is no documented architectural pivot. The engineering challenge was the browser threading problem: SharedArrayBuffer (required for Stockfish multi-threaded WASM) was blocked by browsers unless the page is cross-origin isolated. This required adding specific HTTP headers (Cross-Origin-Opener-Policy: same-origin and Cross-Origin-Embedder-Policy: require-corp) to the Vercel deployment. This was not a change of direction — it was the engineering cost of the local, private, fast design principle. [REPO: vercel.json, commit ea74c3e: "Add vercel.json configuration setting COOP and COEP cross-origin headers to enable multithreading WASM acceleration for local Stockfish analysis engine"] [CATALOG: "Configured Cross-Origin Isolation headers (COOP/COEP) enabling SharedArrayBuffer concurrency for multi-PV engine evaluation"]

- **engineering story:**
  - **Thread isolation:** Stockfish WASM runs in a dedicated Web Worker. The main thread sends UCI commands via postMessage; the worker streams UCI info lines back. UI thread is guaranteed to stay clear of engine computation. [REPO: Docs/SYSTEM_ARCHITECTURE.md section 2; README.md Architecture section]
  - **Navigation interrupt dominance:** Rapid move navigation would queue up stale engine calculations. The client issues a stop command to the worker on every new FEN selection, clearing the queue before starting a new search. [REPO: README.md Engineering Deep-Dives B]
  - **Move classification math:** Centipawn scores normalized to White's perspective. Checkmate scores use MATE_VALUE = 20000 minus a distance penalty (plies_to_mate x 100) so mate-in-1 scores higher than mate-in-3. Badge thresholds: Best (engine top move), Excellent (<=15cp loss), Good (16-40cp), Inaccuracy (41-100cp), Mistake (101-200cp), Blunder (>200cp). [REPO: README.md Math Normalization; commit c037cbd implements classification]
  - **Cross-origin isolation:** COOP/COEP headers are non-negotiable to unlock SharedArrayBuffer in modern browsers for multi-threaded WASM; without them Stockfish falls back to single-threaded mode. [REPO: vercel.json, commit ea74c3e]
  - **Sandbox mode:** At any position, the user can fork into a What-If branch. Original game history is immutable; the sandbox uses a cloned history slice. Exiting restores the main game. [REPO: Docs/PRD.md Non-Negotiable Principle 3; commit bd1f097 implements sandbox]
  - **Library choices:** react-chessboard for board rendering; chess.js for move legality; Recharts for the evaluation area graph. shadcn/ui for component primitives. No backend. [REPO: package.json]
  - **UI polish decision:** A deliberate decision was made not to do a UI polish pass. "CheckMate's strength is that it works, not its UI." [CONVERSATION] The v1.0.1 release (commit 6be1eec) was a documentation-only upgrade with no UI changes.
  - **External contributor:** A board orientation toggle was added by an external contributor (adarsh9835) via PR #15, merged 2026-08-03. [REPO: commit ee5a7a6: "Merge pull request #15 from adarsh9835/feature/flip-board"]

- **central narrative:** CheckMate is the project that proves a useful tool does not require a backend, a subscription, or a server. The engineering bet was that running a full chess engine at acceptable speed in the browser is achievable if you get the threading model right — and the bet paid off. The COOP/COEP header problem is the single most interesting technical obstacle: invisible to users but why the app works at all. The honest story ends with a deliberate non-decision: no UI polish, because functional clarity was the point.

- **suggested narrative shape:** Problem -> Technical constraint that almost makes it impossible -> Exact solution (COOP/COEP) -> Working product, deliberate aesthetic trade-off accepted -> One external contribution. Shorter than the other three; the lean shape suits it.

- **voice notes:** The PRD reads like a product manifesto ("The Board is Always Usable," "Immutability of the Primary Record"). That language can carry into the case study without modification. Do not invent a personal chess frustration story if you do not have one.

### Evidence Ledger

- **grounded in conversation:** Chess hobby. [CONVERSATION] Free alternative to chess.com analysis. [CONVERSATION] No UI polish decision. [CONVERSATION] First major portfolio piece. [CONVERSATION]
- **grounded in repo (verified):**
  - v1.0.0 release date 2026-07-01 [REPO: CHANGELOG.md]
  - v1.0.1 docs-only upgrade 2026-07-28 [REPO: CHANGELOG.md, commit 6be1eec]
  - COOP/COEP header commit ea74c3e (2026-07-14) [REPO]
  - Move classification thresholds in README.md and commit c037cbd [REPO]
  - Sandbox implementation commit bd1f097 [REPO]
  - External contributor PR #15 for board flip, commit ee5a7a6 [REPO]
  - Full stack verified: TypeScript, React, Vite, chess.js, Stockfish WASM, Recharts, Vitest [REPO: package.json]
  - No backend: zero pom.xml, zero Java files anywhere [REPO]
  - No @dnd-kit or drag library [REPO: package.json — not present]
- **grounded in catalog only:** featured: true, homepagePreview: false, demoUrl, githubUrl [CATALOG]
- **contradictions:** Old note claimed "Spring Boot + chesslib" stack. Resolved: no trace in repo; entirely TypeScript front-end. [REPO]
- **claims that should not be made:**
  - Do not claim CheckMate replaced chess.com for personal use — unconfirmed.
  - Do not claim a specific paywall-frustration incident triggered the project; trigger is only partially known.
  - Do not claim the UI is well-polished; the explicit decision was not to polish it.
  - Do not claim multi-threading dramatically improves performance without a benchmark — repo contains no perf numbers.

### Open Questions for Vaibhav

1. What was the real trigger — personal paywall frustration with chess.com, or just chess is a hobby and this seemed like an interesting build? The distinction matters for which story to tell.
2. Was the COOP/COEP header problem discovered during development or anticipated from the start? (This determines whether it is a problem we hit or a known cost we planned for.)
3. Is "CheckMate's strength is that it works, not its UI" a quote you would put in the case study, or shorthand for something more nuanced?
4. The external contributor (adarsh9835) added the board flip feature — was this a friend, a classmate, or a stranger? It changes what that contribution signals.

---

## Trajectory

### Record

- **id:** `trajectory` [CATALOG]
- **title:** Trajectory [CATALOG]
- **tagline:** "Started as a spreadsheet fix and ended up needing its own AWS bill." [CATALOG]
- **category:** Applied Projects [CATALOG]
- **featured:** true / **homepagePreview:** true [CATALOG]
- **status:** Released v1.0.0 (2026-07-21); v1.0.1 docs upgrade 2026-07-28. Deployed to production. [REPO: commit edc8ccd "Release v1.0.0 – Production Ready"; commit 2c0d5f2 "docs: upgrade repository documentation for v1.0.1"]
- **techStack:**
  - Frontend: React 19, TypeScript, Vite, Zustand v5, TanStack Query v5, React Hook Form, Zod, Recharts, Lucide React, Sonner, Tailwind CSS, Vercel [REPO: frontend/package.json]
  - Backend: Java 21, Spring Boot 3.3.1, Spring Security, Spring Data JPA, Spring AI (Groq Cloud/Llama 3), Spring Scheduler, Flyway, SpringDoc OpenAPI, Java Virtual Threads [REPO: README.md]
  - Infrastructure: AWS EC2 (Ubuntu 24.04), AWS RDS PostgreSQL 16, AWS S3, Docker Compose, Nginx, Certbot, GitHub Actions self-hosted runner [REPO: README.md]
- **demoUrl:** https://trajectory.vaibhv19.dev [CATALOG]
- **githubUrl:** https://github.com/vaibhv19/Trajectory [CATALOG]
- **story strength:** Ready — origin is stated, scope expansion is documentable from git, all engineering decisions verified in code. Main unknowns are motivational (why AWS, why leaving AWS).

### Case Study Premise

- **origin:** Started as a personal replacement for the Excel sheet used to track job applications. [CONVERSATION] First commit is dated 2026-07-12 (a feature list text file), with all planning documents (PRD, Tech Stack, App Flow, Schema, DESIGN.md, README, docker-compose) appearing on 2026-07-13 — a docs-first launch. [REPO: git log, commits 19ab51f through 38ef4c0, 2026-07-12 through 2026-07-13]

- **initial idea vs what it became:**
  - Initial idea: A personal job application tracker — structured replacement for a spreadsheet. [CONVERSATION]
  - What it became: A full career operating system with JWT + OAuth2 auth (Google, GitHub), multi-career-profile management, resume versioning with AWS S3 storage, AI-powered job description parsing via Spring AI and Groq (Llama 3), recruiter outreach CRM, ghost detection via scheduled cron jobs, funnel analytics, notification system, and GitHub Actions CI/CD to EC2. [REPO: Docs/PRD.md, README.md]
  - Scope expansion confirmed: The larger scope was **not planned from the beginning**; the project genuinely expanded beyond the original spreadsheet replacement concept [CONVERSATION: confirmed by Vaibhav]. The compressed Git history shows many features committed on 2026-07-13, but commit timing was a consequence of the AI-assisted execution cadence (committing atomically once the expanded scope was mapped out) rather than proof that the full platform was envisioned from day one. The narrative must preserve this distinction between the original simple spreadsheet-fix premise and what the project eventually grew into.

- **underlying problem:** Active job seekers managing high-volume applications (50-200+ roles) lose track of stage dates, forget follow-ups, and forget which resume version was sent. A spreadsheet has no notifications, no audit trail, and no analytics. [REPO: Docs/PRD.md section 2.1 Target Personas]

- **turning point:** The project started as a spreadsheet fix, and the scope genuinely expanded into an enterprise-grade full-stack career management platform [CONVERSATION: confirmed by Vaibhav]. Reconciling this with the Git history: all planning docs and major features landed in a compressed batch on 2026-07-13. That reflects the AI-agent implementation cadence once the expanded architecture was locked in, not an upfront plan conceived before recognizing the limits of a spreadsheet. The tagline "ended up needing its own AWS bill" reflects the genuine surprise and reality of that scope evolution. [CONVERSATION, REPO]

- **engineering story:**
  - **Auth:** JWT (access token: 24h, 86400000 ms; refresh token: 7 days, 604800000 ms, stored in refresh_tokens table with rotation) + Spring Security OAuth2 (Google, GitHub via CustomOAuth2UserService, OAuth2AuthenticationSuccessHandler). A MockOAuth2RedirectFilter exists for local development testing without live OAuth providers, controlled by a property flag. [REPO: backend/.../security/JwtTokenProvider.java, application.yml lines 77-78, MockOAuth2RedirectFilter.java]
  - **AI extraction:** Spring AI with Groq Cloud (Llama 3) for job description parsing and outreach sentiment analysis. A isMockMode() fallback with regex-based extraction exists for local dev without API key. [REPO: README.md, Docs/Learning/README.md Module 02]
  - **Status audit log:** application_status_history table records every status transition and duration. [REPO: README.md Database Schema section]
  - **No kanban board, no @dnd-kit:** The applications view is a sortable data table (commit 2026-07-13: "refactor applications grid view into a professional sortable data table"). No drag-and-drop library in frontend/package.json. No kanban commits in the git log. [REPO: frontend/package.json, git log]
  - **Ghost detection:** A GhostDetectionScheduler Spring @Scheduled cron job flags applications inactive beyond a user-configurable ghost_threshold_days. [REPO: README.md, Docs/Learning/README.md Module 05]
  - **Infrastructure:** Docker Compose (docker-compose.prod.yml) on AWS EC2 Ubuntu 24.04. AWS RDS PostgreSQL 16. AWS S3 (ap-south-1) for resume storage. Nginx reverse proxy with Certbot SSL. GitHub Actions self-hosted runner on EC2 for CI/CD with no inbound port exposure. [REPO: README.md Production Infrastructure section]
  - **Java Virtual Threads:** spring.threads.virtual.enabled=true for non-blocking I/O throughput. [REPO: README.md, Docs/Learning/README.md Module 05]
  - **DESIGN.md:** A fully specified design system with aesthetic keywords: calm, precise, structured, technical, focused. IBM Plex typography (confirmed in Tailwind config via commit 49fcba1: "style: configure Plex fonts, square border-radii, and flat status tokens"). Explicit anti-patterns listed ("No Uniform Grid Layouts," "No Ambient Glows or Random Gradients"). [REPO: Docs/DESIGN.md]
  - **Deployment plan:** Move off AWS EC2 to Oracle Cloud VM, planned for Oct 2026. [CONVERSATION] Reason not recorded. [CONFIRM: Q3]
  - **Human/AI division of labor:** Commit pattern (all features landing on 2026-07-13) is consistent with AI agent construction. Planning (PRD, DESIGN.md, Tech Stack) was authored before code. The tagline, design decisions, and architectural choices are stated as Vaibhav's. [CONVERSATION: "I keep planning, architecture, logic and tech decisions; AI agents do manual work"]

- **central narrative:** Trajectory is the project that taught what it costs to build something for real. It started as a spreadsheet replacement — concrete, personal, solvable — and ended up requiring a DESIGN.md, AWS RDS, S3, Nginx, Certbot, a self-hosted CI/CD runner, and a cloud bill. The gap between "I want to track my applications better" and "I need to configure Certbot timers on EC2" is the actual story. Everything else is implementation detail.

- **suggested narrative shape:** Honest origin (spreadsheet problem) -> Scope that grew organically beyond a simple tracker -> The cost of building for real (AWS bill, deployment complexity) -> The project as benchmark: later projects were measured against this one's repo quality.

- **voice notes:** The tagline does the heavy lifting. Every sentence in the case study should justify why the answer to "my spreadsheet was annoying" became EC2 + RDS + S3 + Nginx + CI/CD. If it cannot justify that, the case study is padding.

### Evidence Ledger

- **grounded in conversation:** Started as Excel replacement. [CONVERSATION] Organic scope expansion confirmed; larger scope was not planned upfront. [CONVERSATION] Ended up deployed, proud of it. [CONVERSATION] Oracle Cloud migration planned Oct 2026. [CONVERSATION] No roadmap doc for Trajectory (that practice started with later projects). [CONVERSATION] v1.0.0 released; v1.0.1 docs upgrade done. [CONVERSATION] Benchmark for repo quality of later projects. [CONVERSATION]
- **grounded in repo (verified):**
  - First commit: 2026-07-12, feature list text file (commit 19ab51f) [REPO]
  - Full docs committed 2026-07-13: PRD, Tech Stack, App Flow, Schema, DESIGN.md, CLAUDE.md [REPO: git log]
  - All major features committed 2026-07-13 [REPO: git log]
  - JWT config: access 86400000ms (24h), refresh 604800000ms (7 days) [REPO: application.yml lines 77-78]
  - MockOAuth2RedirectFilter exists in backend/.../security/ [REPO]
  - No @dnd-kit, no kanban, no drag-drop in source or deps [REPO: frontend/package.json, git log]
  - application_status_history table documented in README schema [REPO]
  - Ghost detection scheduler confirmed in README and learning index [REPO]
  - DESIGN.md: IBM Plex fonts, graphite aesthetic, anti-pattern list [REPO: Docs/DESIGN.md, commit 49fcba1]
  - v1.0.0 release commit edc8ccd, 2026-07-21 [REPO]
  - S3 configuration commit 2026-07-19 [REPO: git log]
  - OAuth2 production config commit 2026-07-20 [REPO: git log]
  - AWS EC2 confirmed infrastructure [REPO: README.md]
  - Spring AI + Groq confirmed in README and learning guide [REPO]
  - GitHub Actions self-hosted runner confirmed [REPO: README.md]
- **grounded in catalog only:** featured: true, homepagePreview: true, demoUrl, githubUrl [CATALOG]
- **contradictions between sources:**
  - Kanban board / @dnd-kit: You stated these exist. Repo shows a sortable data table and no @dnd-kit dependency. [REPO vs. CONVERSATION] Resolved: claim is not supported.
  - JWT "7-day refresh rotation": Accurate but imprecise. Access token is 24h; refresh token is 7 days. [REPO: application.yml]
  - "Old note said it skipped JWT": No non-JWT version exists in git. JWT was present from commit 2026-07-13. [REPO]
  - Scope expansion vs commit timing: Git log compressed on 2026-07-13, but organic scope growth is confirmed by Vaibhav. Resolved: git timing reflects commit cadence, not upfront planning.
- **claims that should not be made:**
  - Do not claim a kanban board exists — it does not.
  - Do not claim @dnd-kit was "chosen over react-beautiful-dnd" — neither library is present.
  - Do not claim the full scope was planned upfront from day one — organic expansion is confirmed.
  - Do not claim AWS was chosen for a specific technical reason without Vaibhav confirming it.
  - Do not state the reason for Oracle Cloud migration — it is not recorded.

### Open Questions for Vaibhav

1. What specifically was broken or annoying about the spreadsheet? (What column, what recurring mistake, what lost application?) This is the human entry point of the story.
2. Why AWS EC2 specifically? Was it a learning goal, a constraint, or just the first thing that came up?
3. What is the actual reason for the planned Oracle Cloud migration?
4. The @dnd-kit + kanban claim: was this a feature you planned and cut, or a misremembering? If you cut it, that is a legitimate story — confirm.

---

## Conclave

### Record

- **id:** `conclave` [CATALOG]
- **title:** Conclave [CATALOG]
- **tagline:** "Models arguing in a single structured room instead of eight disconnected browser tabs." [CATALOG]
  - Note: The prompt version was "multi-model debates in one structured room." The catalog version is slightly longer. [CATALOG]
- **category:** Applied Projects [CATALOG]
- **featured:** false / **homepagePreview:** false [CATALOG]
- **status:** Completed including UI polish. No deployment. No release tags in repo (versioning system devised during/after this project). Retroactively v1.0.0, per CHANGELOG which records [1.0.0] - 2026-08-02. [REPO: CHANGELOG.md; CONVERSATION]
- **techStack:** Java 21, Spring Boot 3.3.1, Spring AI (Ollama integration), WebSocket/STOMP, PostgreSQL, React 19, Zustand, Tailwind CSS, Vitest, Playwright [REPO: README.md, backend/, frontend/package.json]
  - Note: Catalog lists "Ollama local + cloud endpoints" — cloud endpoints do not exist in the final codebase. See Contradictions. [REPO vs. CATALOG]
- **demoUrl:** None — GitHub only. [CATALOG]
- **githubUrl:** https://github.com/vaibhv19/Conclave [CATALOG]
- **story strength:** Ready — the richest documented story of the four; the pivot is in the CHANGELOG; engineering decisions are verified in code and learning docs; the honest caveat is on record.

### Case Study Premise

- **origin:** The friction of manually copying context between multiple AI tools (GPT, Gemini, Claude, Grok, Stitch, AI Studio, Antigravity, NotebookLM), each better at a different role. [CONVERSATION] Core idea: a meeting room where multiple LLMs discuss in one conversation with unified context, eliminating manual copy-paste. [CONVERSATION] [REPO: README.md Problem section; Docs/PRD.md section 1.1]

- **initial idea vs what it became:**
  - Initial idea: Real calls to Claude, GPT, and Gemini with a custom adapter layer (Multi-Provider Context Unification) translating a canonical message schema into each vendor's API format. [CONVERSATION]
  - Intermediate plan: Gemini real + OpenAI/Claude mocked (zero cost). [CONVERSATION]
  - Final decision: 100% local Ollama inference (Llama 3, Mistral, Gemma) — no cloud APIs, no mocks. [CONVERSATION] [REPO: CHANGELOG.md v1.0.0 Changed entry; commit 702c6c7 "feat: migrate to local Ollama inference architecture", 2026-08-02]
  - Why local Ollama: Mocking meant two of three providers were not exercised with real inference, undercutting the demo. Ollama gives genuinely different models with real latency and output variance, still zero cost. [CONVERSATION] [REPO: Docs/PRD.md section 3.3; Docs/Learning/04_Model_Registry_And_Ollama_Clients.md section 4: "Simulated ChatClient Fakes... fails to verify actual model reasoning... Swapping to real local models provides 100% real inference behavior with  cost"]

- **underlying problem:** Context fragmentation when working with multiple AI tools. The PRD names it precisely: Context Tax (cognitive overhead), Information Decay (nuance lost in copy-pasting), Token Inefficiency (repeated transcripts). [REPO: Docs/PRD.md section 1.1]

- **turning point:** The adapter layer's purpose shifted when the target moved from cloud APIs to local Ollama. Cloud APIs each have a different JSON request shape. Local Ollama's /api/chat endpoint provides a uniform interface — but local models still have different chat template formats (special tokens in their prompt structure: Llama 3 uses start_header_id tokens, Mistral uses [INST] tags, Gemma uses start_of_turn tokens). The adapter layer's job shifted from "translate different JSON schemas" to "assemble different prompt strings for each model's fine-tuning expectations." Same pattern, different axis of variation — and Vaibhav recognized this clearly. [CONVERSATION] [REPO: Docs/Model_Adapter_Strategy.md sections 1.1, 1.3; Docs/Learning/03_Model_Adapter_Pattern.md]
  - Old learning doc deleted: Chapter 04_Model_Registry_And_Fake_ChatClients.md was deleted (commit ba24663, 2026-08-02) and replaced with 04_Model_Registry_And_Ollama_Clients.md (commit 121b7a9) after the migration. [REPO: git log for Docs/Learning/04_*]

- **engineering story:**
  - **Canonical message schema:** All turns stored as CanonicalMessage (provider-agnostic) in PostgreSQL. Outgoing history dynamically mapped to target model's template at runtime. [REPO: Docs/Model_Adapter_Strategy.md section 1.2; Docs/Learning/03_Model_Adapter_Pattern.md section 3 — interface: ModelAdapter.toModelFormat(), ModelAdapter.fromModelFormat()]
  - **Adapter implementations:** LlamaAdapter.java, MistralAdapter.java, GemmaAdapter.java — three concrete implementations of ModelAdapter interface in backend/.../integration/adapter/. [REPO: directory listing confirmed]
  - **Model registry:** ModelRegistryImpl.java maps model keys (llama3, mistral, gemma) to configured OllamaChatModel beans at runtime. Dynamic, not hardcoded. [REPO: backend/.../integration/registry/ModelRegistryImpl.java; Docs/Learning/04_Model_Registry_And_Ollama_Clients.md section 3]
  - **WebSocket/STOMP:** Real-time pub/sub channels (/topic/room/{roomId}); word-by-word streaming chunk delivery; typing indicators (TURN_STARTED), telemetry summaries (TURN_COMPLETED). [REPO: CHANGELOG.md v1.0.0]
  - **Pessimistic locking / pause and intervene:** PipelineManager uses PostgreSQL SELECT FOR UPDATE write locks to prevent race conditions during pause and turn advancement. Users can inject manual messages mid-pipeline via isIntervention flag. [REPO: CHANGELOG.md v1.0.0; Docs/Learning/07_Pause_And_Intervene_Pipeline_Locking.md]
  - **Context janitor:** WorkflowStateService compresses conversation history when turns exceed thresholds (relevant given Ollama models limited context windows, typically 2,048-8,192 tokens). [REPO: CHANGELOG.md v1.0.0; Docs/Learning/05_Context_Compression_And_Janitor_Service.md]
  - **WorkflowState:** A summarized state object (objective, draft, comments) passed between agents rather than full history. [CONVERSATION] [REPO: Docs/Model_Adapter_Strategy.md — WorkflowState referenced in mapping rules]
  - **Sequential pipeline:** Writer -> Reviewer -> Refiner style ordering, not a generic agent graph. @-mention turn-taking. [CONVERSATION] [REPO: Docs/PRD.md section 2.2 Core Use Case]
  - **UI redesign:** Multiple UI polish passes documented in git log — commits for "Raycast/Linear style dark redesign" (commit 81f770e), "rescue UI from looking AI-generated" (commit 2484b92), "card container reduction pass" (commit fa1abb2). [REPO: git log, 2026-07-30 through 2026-08-01]
  - **12-phase roadmap:** Phases 01-12 documented in Docs/Roadmap/. This was the project where the MAANG-level docs idea originated. [CONVERSATION] [REPO: Docs/Roadmap/ — 12 phase files confirmed]
  - **Honest caveat:** Vaibhav does not use Conclave often in practice. Cloud AI APIs cost money, and running local Ollama models causes laptop overheating. A screenshot exists proving it works. [CONVERSATION]
  - **Synod note:** A Django port of Conclave for a Java-vs-Python comparison; replaced by Shard/Cairn and deleted from the portfolio. [CONVERSATION] Not present in current portfolio data.
  - **Possible predecessor "Roundtable":** An earlier parked concept. Whether Conclave is a descendant is unconfirmed. [CONVERSATION] [CONFIRM: Q2]

- **central narrative:** Conclave is the project that made Vaibhav articulate a real frustration precisely enough to engineer around it — context fragmentation across AI tools is an unresolved problem for serious AI users, and building a solution required confronting what multi-provider actually means in practice (it is not just different API endpoints; it is different prompt token conventions). The pivot from cloud APIs to local Ollama is the project's turning point, and the honest caveat — that the thing he built overheats his laptop — is the part that makes the story credible.

- **suggested narrative shape:** Frustration stated precisely -> Design ambition (cloud multi-provider) -> First pivot (cloud to mock) -> Second pivot (mock to local Ollama, with clear reasoning) -> Consequence: adapter layer's job changes axis -> Delivery -> Honest caveat. This is a problem -> decision chain story, not a problem -> solution story. The pivots are the point.

- **voice notes:** The README tagline ("Models arguing in a single structured room instead of eight disconnected browser tabs") is better than the prompt shorthand. The overheating detail must stay — it is the only sentence in four projects that admits the thing does not work smoothly in practice. That credibility is worth more than any performance claim.

### Evidence Ledger

- **grounded in conversation:** Origin (tab-hopping frustration across AI tools). [CONVERSATION] Three-stage pivot: cloud -> mocked -> local Ollama. [CONVERSATION] Kept because base code was ready. [CONVERSATION] Honest caveat (overheating, screenshot proof). [CONVERSATION] MAANG-level docs idea originated here. [CONVERSATION] Pause and intervene feature. [CONVERSATION] Sequential pipeline. [CONVERSATION] WorkflowState passed between agents. [CONVERSATION] Roundtable predecessor (unconfirmed link). [CONVERSATION] Synod (Django port, deleted). [CONVERSATION]
- **grounded in repo (verified):**
  - v1.0.0 release date 2026-08-02 [REPO: CHANGELOG.md]
  - Ollama migration commit 702c6c7 (2026-08-02) [REPO]
  - Fake ChatClients doc deleted commit ba24663 (2026-08-02); Ollama Clients doc created commit 121b7a9 (2026-08-02) [REPO: git log for Docs/Learning/04_*]
  - LlamaAdapter.java, MistralAdapter.java, GemmaAdapter.java exist in backend/.../integration/adapter/ [REPO]
  - ModelRegistryImpl.java in backend/.../integration/registry/ [REPO]
  - ModelAdapter interface with toModelFormat() / fromModelFormat() shown in learning doc [REPO: Docs/Learning/03_Model_Adapter_Pattern.md]
  - STOMP WebSocket, pessimistic locking, context janitor — all confirmed in CHANGELOG v1.0.0 [REPO]
  - SELECT FOR UPDATE locking in CHANGELOG v1.0.0 [REPO]
  - 12 Roadmap phases confirmed in Docs/Roadmap/ [REPO]
  - UI rescue commits: 81f770e, 2484b92, fa1abb2 [REPO: git log]
  - featured: false, homepagePreview: false [CATALOG]
  - No deployment, GitHub only [CATALOG]
- **grounded in catalog only:** Stack lists "Ollama local + cloud endpoints" — cloud endpoints are incorrect per current codebase. [CATALOG] — See Contradictions.
- **contradictions between sources:**
  - "Ollama local + cloud endpoints" (catalog) vs. "100% local, no cloud" (repo/conversation): The catalog stack description is stale. The final codebase has no cloud API calls. CHANGELOG explicitly notes the migration away from cloud APIs. [REPO vs. CATALOG]
  - Chapter 04 "Fake ChatClients" (old note) vs. current implementation: The fake clients chapter was an intermediate documentation state that was deleted after the Ollama migration. The current code uses real OllamaChatModel beans. [REPO]
- **claims that should not be made:**
  - Do not claim cloud APIs (OpenAI, Claude, Gemini) are currently used — they are not.
  - Do not claim mocks are used — they are not in the final implementation.
  - Do not claim "Ollama's unified REST API removes the adapter layer" — the adapter layer exists and handles per-model prompt template formatting, not API-shape translation.
  - Do not claim Conclave is used regularly in practice — Vaibhav explicitly said it is not.

### Open Questions for Vaibhav

1. Was the decision to keep Conclave (rather than park it) primarily because "the base code was already ready," or was there another reason?
2. Is Conclave a descendant of the earlier "Roundtable" concept, or a genuinely separate idea that arrived independently?
3. The overheating: is this every run, or only when multiple large models are loaded simultaneously? (Affects how to frame the caveat — "the tool works but is demanding" vs. "this is barely practical on consumer hardware.")
4. Do you have the screenshot that proves it works? Is it in the repo? (One confirmed screenshot of a live run appears in frontend/src/assets/live_usecase_chat_conclave.png [REPO: README.md] — is this the proof you meant?)
5. What is the practical limit on how many models can run simultaneously on your laptop before it overheats?

---

## Phoenix

### Record

- **id:** `phoenix` [CATALOG]
- **title:** Phoenix [CATALOG]
- **tagline:** "A hybrid RAG engine that shows its retrieval score math instead of bluffing when it's unsure." [CATALOG]
- **category:** Applied Projects [CATALOG]
- **featured:** true / **homepagePreview:** true [CATALOG]
- **status:** Released v1.0.0. No deployment (decision: will not be deployed; a working local run is sufficient). v1.1.0 UI polish was in progress, then docs. [CONVERSATION] [REPO: Docs/Release_Notes.md]
- **techStack:**
  - Frontend: React 19 (Vite), TypeScript, Zustand, Tailwind CSS, Framer Motion, react-markdown [REPO: README.md Technology Stack]
  - Backend (Spring Boot gateway): Java 21, Spring Boot 3.3.1, Spring Security, Hibernate ORM, Flyway [REPO: README.md]
  - AI engine (FastAPI): Python 3.11, FastAPI, PostgreSQL + pgvector, SentenceTransformers (all-MiniLM-L6-v2), rank_bm25 (Okapi model), FlashRank Cross-Encoder (ms-marco-MiniLM-L-6-v2), SQLAlchemy [REPO: README.md, ai-engine/requirements.txt]
  - Infrastructure: PostgreSQL 16, Docker Compose, Ollama local server (running mistral) [REPO: README.md]
  - Note: The catalog stack covers only the AI engine (Python, FastAPI, PostgreSQL, pgvector, SentenceTransformers, BM25, Docker). The full picture includes the Spring Boot gateway and React frontend. [CATALOG vs. REPO]
- **demoUrl:** None — GitHub only. [CATALOG]
- **githubUrl:** https://github.com/vaibhv19/Phoenix [CATALOG]
- **story strength:** Needs confirmation — architecture is strong and fully verified; LLM origin of dual-backend split is confirmed; but two key points require Vaibhav's input: (1) the doomscrolling origin context, and (2) what the ~85% CS ceiling finding resolved to.

### Case Study Premise

- **origin:** LinkedIn story angle: built while combining a Java backend, a Python AI service, and a React frontend around a "self-healing / self-correcting RAG pipeline," a concept encountered during a doomscrolling session. [CONVERSATION] The informal origin — a concept found while doomscrolling, not from a systematic research session — is part of the voice and should be preserved exactly as stated. [CONFIRM: Q1 — what specifically was the concept, and how did it translate into the design?]

- **initial idea vs what it became:** The core thesis appears consistent throughout: a RAG system that exposes its reasoning rather than hiding it, and that self-corrects when retrieval is uncertain. The PRD, architecture, and implementation all align with this. [REPO: Docs/PRD.md, Docs/Fallback_Strategies.md, Docs/Engineering_Knowledge_Base.md] There is no documented pivot. The engineering question was always how to implement transparent self-healing, not whether to.

- **underlying problem:** Three failure modes of standard RAG in technical workspaces:
  1. **Alphanumeric precision gap:** Pure vector search fails on exact-match terms like spring.jpa.hibernate.ddl-auto because tokenizers break dot-separated keys into subwords, clustering them near semantically related but incorrect concepts. [REPO: README.md section 1; Docs/Learning/testing_and_benchmarking.md section 7]
  2. **Black-box trust gap:** When AI answers incorrectly, developers cannot diagnose where the breakdown occurred. [REPO: README.md section 1]
  3. **Hallucination on weak context:** Generic RAG answers even when retrieval returns irrelevant chunks. [REPO: README.md section 1]
  - Domain choice: Technical docs (Spring Boot / AWS docs) were chosen because exact-match configuration keys (server.port, spring.jpa.show-sql) let hybrid search demonstrably beat vector-only search. [CONVERSATION] [REPO: Docs/Learning/testing_and_benchmarking.md section 7: "Dense models... cluster them near other general SQL or Spring concepts. BM25 matches exact dot-separated terms perfectly."]

- **turning point (candidate):** During manual testing, the composite confidence score (CS) never returned more than approximately 85% even on correctly retrieved queries. [CONVERSATION] This is a separate observation from the benchmark result. The benchmark (test_sensitivity.py) measures Hit Rate @ 1 on 20 exact-term queries against 20 distractor chunks — a binary correctness metric. The CS ceiling is a continuous score phenomenon.
  - Formula investigation: CS = 0.6 x MaxSim + 0.4 x Agreement. MaxSim is the cosine similarity of the top vector result (clamped to [0, 1]). Agreement is the intersection ratio of Top-3 vector and Top-5 BM25 results, divided by 3 — giving discrete values of 0.0, 0.33, 0.66, or 1.0. Theoretical maximum CS = 1.0 requires both MaxSim = 1.0 (perfect cosine match) AND Agreement = 1.0 (all 3 top vector chunks also in top 5 BM25). In practice, semantic vector search and keyword BM25 will not always agree on the same top-3 chunks even for good queries, so CS naturally caps below 1.0 for typical queries. [REPO: Docs/Learning/confidence_scoring.md]
  - **Status of ceiling:** The approximately 85% confidence-score ceiling **remains unresolved** [CONFIRM]. Do not infer that it was fixed, accepted, or definitively explained by the scoring formula. While the formula analysis provides useful technical context, it is not evidence of what Vaibhav concluded or did during development. [CONFIRM: Q2]

- **engineering story:**
  - **Dual-backend architecture:** Spring Boot handles auth (JWT), project namespacing, document upload, and metadata storage. FastAPI handles all AI-heavy operations (embedding, retrieval, confidence scoring, fallback orchestration). Communication is internal REST (/internal/v1/process). [REPO: README.md section 3; Docs/Engineering_Knowledge_Base.md section 1]
  - **Origin of dual-backend split:** The architecture of separating the Python AI engine from the Java backend was suggested by LLMs [CONVERSATION: confirmed by Vaibhav]. It was not an upfront technical choice by Vaibhav based on library availability or execution performance. While existing repository docs rationalize the implementation (FastAPI for Python ML ecosystem and Spring Boot for enterprise security/tenancy), the initial choice of a split architecture was LLM-suggested.
  - **Chunking:** RecursiveCharacterTextSplitter (800 chars, 150 char overlap) with delimiters ["\n\n", "\n", " ", ""] to preserve code blocks and YAML property blocks. [REPO: Docs/Engineering_Knowledge_Base.md section 2.1]
  - **Embedding:** all-MiniLM-L6-v2 (384-dimensional dense vectors), stored in PostgreSQL via pgvector extension with HNSW indexes. [REPO: Docs/Engineering_Knowledge_Base.md section 2.1; commit cebdc3a "Apply audit recommendations: add HNSW index migration"]
  - **Hybrid retrieval:** Parallel dense vector search (cosine similarity via pgvector) + sparse keyword search (BM25 Okapi). Scores normalized via MinMaxScaler then fused: Score_final = 0.7 x Sim_vector + 0.3 x Score_bm25_norm (alpha = 0.7). [REPO: Docs/Engineering_Knowledge_Base.md sections 2.2, 2.3]
  - **Confidence scoring:** CS = 0.6 x MaxSim + 0.4 x Agreement. MaxSim = top vector cosine score. Agreement = |Top-3 vector intersect Top-5 BM25| / 3. Discrete agreement values: 0.0, 0.33, 0.66, 1.0. [REPO: Docs/Learning/confidence_scoring.md sections 2-3; Docs/Engineering_Knowledge_Base.md section 2.4]
  - **Fallback state machine (all four tiers):**
    - Green (CS >= 0.75): Direct generation via Ollama/Mistral.
    - Yellow (0.50 <= CS < 0.75): Query rewriting (HyDE-light expansion via LLM), then re-run hybrid search. Max 1 retry.
    - Orange (0.35 <= CS < 0.50) or failed Yellow: Top-20 chunks passed to FlashRank Cross-Encoder (ms-marco-MiniLM-L-6-v2). Reranked; if top chunk exceeds Recovery Threshold (0.50), proceed to generation.
    - Red (CS < 0.35): Generate a clarification question instead of answering. Original query and failure reason stored in reasoningTrace.
    - [REPO: Docs/Fallback_Strategies.md; Docs/Release_Notes.md section 2; Docs/Learning/fallback_state_machine.md]
  - **Visual reasoning trace:** Collapsible timeline in React console showing routing path, query rewrites, raw scores, and final confidence level. [REPO: README.md section 2 Visual Reasoning Trace]
  - **Multi-tenancy:** Row-level JPA query boundaries; Spring Security token interceptors; users can only access their own workspace. [REPO: README.md section 2 Secure Multi-Tenancy; Docs/Learning/project_tenant_isolation.md]
  - **Timeout adjustment:** RestClient and HTTPX connection timeouts raised to 300 seconds for Ollama local model cold starts. [REPO: Docs/Release_Notes.md section 2; commits 73f2a8e, a2ef513]
  - **Known limitations (from release notes):** Single-document RAG (cross-document not supported); local inference latency; PDF-only ingestion. [REPO: Docs/Release_Notes.md section 3]
  - **Benchmark (Hit Rate @ 1):** test_sensitivity.py inserts 40 chunks (20 target config key chunks, 20 semantically similar distractor chunks). Evaluates whether the target chunk ranks #1 for each of 20 exact-term queries. Hybrid search achieves 100% Hit Rate @ 1 per docs. Vector-only search does not. [REPO: Docs/Learning/testing_and_benchmarking.md section 4] [CONFIRM: Q3 — benchmark claim should be verified by running the suite, not assumed from docs alone]
  - **Docs-first workflow:** PRD, Tech Stack, App Flow, DESIGN.md generated via AI Studio; Antigravity-generated Phase 1-11 roadmap; logic by Vaibhav. [CONVERSATION] Docs/Learning/ uses a fixed template (Problem Statement, Decision Rationale, Alternatives Considered, Internal Workings, Phoenix Implementation, Key References, Pitfalls and Troubleshooting, Interview and Discussion Points). [CONVERSATION] [REPO: Docs/Learning/README.md — study notes catalog confirms the structure]

- **central narrative:** Phoenix is built around one design principle: the system should know when it does not know. That sounds obvious until you try to implement it — at which point you discover that knowing when you do not know requires a confidence metric, a fallback state machine, a reranker, and a clarification prompt generator before you can write a single useful answer. The turning point is the ~85% CS ceiling: the system is correct but never fully confident, which is either an honest property of the metric or an unresolved calibration issue. That ambiguity is the most interesting thing in the project and needs Vaibhav's input to resolve.

- **suggested narrative shape:** Concept encountered (doomscrolling) -> Design principle derived from it (know when you do not know) -> Why technical docs specifically (hybrid search's concrete advantage on exact-match terms) -> The engineering cost of the principle (four fallback tiers) -> The anomaly (CS ceiling) -> Honest assessment. The dual-backend split (Java + Python) originated as an LLM suggestion, which was then engineered and documented.

- **voice notes:** The phrase "bluffing when it's unsure" in the tagline is doing real work — it implies every other RAG system is bluffing. The case study should either prove that claim with the benchmark, or soften it. The doomscrolling origin must be kept because it is human and specific and true; do not upgrade it to "inspired by industry research."

### Evidence Ledger

- **grounded in conversation:** Doomscrolling origin. [CONVERSATION] System should know when it does not know. [CONVERSATION] Domain choice (technical docs; hybrid beats vector-only on exact-match keys). [CONVERSATION] ~85% CS ceiling observation during manual testing (remains unresolved). [CONVERSATION] Decision not to deploy. [CONVERSATION] LLM suggested Python/Java split architecture. [CONVERSATION] v1.0.0 released; v1.1.0 UI polish in progress. [CONVERSATION] Docs-first workflow inherited from Trajectory practice. [CONVERSATION] Decided against ADRs. [CONVERSATION] Final README had six flagged issues. [CONVERSATION]
- **grounded in repo (verified):**
  - Dual-backend confirmed: Spring Boot gateway + FastAPI AI engine + React frontend [REPO: README.md section 3]
  - CS formula confirmed: CS = 0.6 x MaxSim + 0.4 x Agreement [REPO: Docs/Learning/confidence_scoring.md; Docs/Engineering_Knowledge_Base.md]
  - WLC formula confirmed: alpha = 0.7 [REPO: Docs/Engineering_Knowledge_Base.md section 2.3]
  - All four fallback tiers (Green/Yellow/Orange/Red) confirmed in code documentation [REPO: Docs/Fallback_Strategies.md, Docs/Release_Notes.md]
  - FlashRank Cross-Encoder (ms-marco-MiniLM-L-6-v2) confirmed [REPO: README.md]
  - 300s timeout commits 73f2a8e, a2ef513 [REPO]
  - HNSW index migration commit cebdc3a [REPO]
  - test_sensitivity.py and test_fallback.py exist in ai-engine/app/tests/ [REPO: Docs/Learning/testing_and_benchmarking.md section 5]
  - Fixed learning doc template structure confirmed [REPO: Docs/Learning/README.md]
  - 11-phase roadmap confirmed in Docs/Roadmap/ (Phases 01-11) [REPO]
  - Release Notes confirm v1.0.0 limitations and architecture milestones [REPO: Docs/Release_Notes.md]
  - Ollama/Mistral for generation confirmed [REPO: README.md; docker-compose adds Ollama service, commit df28378]
  - No demo URL; GitHub only [CATALOG]
- **grounded in catalog only:** featured: true, homepagePreview: true, githubUrl. Catalog stack covers only AI engine. [CATALOG]
- **contradictions between sources:**
  - Earlier note attributed Groq (Llama 3) to Phoenix. Resolved: Groq is Trajectory. Phoenix uses Ollama/Mistral locally. [REPO vs. earlier CONVERSATION]
- **claims that should not be made:**
  - Do not claim 100% Hit Rate @ 1 as a benchmark result without confirming the test actually ran successfully on current code.
  - Do not claim the ~85% CS ceiling was "resolved" or "explained" — it remains unresolved.
  - Do not claim the Python engine choice was driven by an upfront personal technical motivation — LLMs suggested the split.
  - Do not claim the confidence metric is perfectly calibrated — the ceiling observation suggests otherwise.
  - Do not describe the "doomscrolling" origin as "research" or "inspiration" — preserve the informal framing exactly.

### Open Questions for Vaibhav

1. What specifically was the self-healing/self-correcting RAG concept you came across? Was it a paper, a blog post, a product? How did that concept become the design principle "the system should know when it does not know"? This is the entry point of the story.
2. The ~85% CS ceiling: did you investigate this further during development? Did you conclude it was a structural property of the formula (Agreement is discrete, not continuous) or an unresolved calibration issue? What did you do with the finding?
3. Did test_sensitivity.py and test_fallback.py actually run and produce results during development? If so, what was the Hit Rate @ 1 for vector-only vs. hybrid? Do not claim the benchmark without confirming.
4. Which fallback strategies were fully implemented and tested vs. planned and partially implemented?
5. The README had six flagged issues — were these fixed before v1.0.0 or left open?

---

## Email Job Scheduler (EJS)

> **Note on naming:** The project was built as the ReachInbox Full-Stack Email Job Scheduler assignment. After submission, it was personalized and assignment branding was removed (commit 151ceba9, 2026-10-18). The portfolio-facing name is "Email Job Scheduler" or "EJS." The word "ReachInbox" no longer appears in any file.

### Record

- **id:** `email-job-scheduler` [CATALOG]
- **title:** Email Job Scheduler [CATALOG]
- **Working title:** Email Job Scheduler [REPO: package.json root name: "email-job-scheduler"]
- **Original assignment title:** ReachInbox Full-Stack Email Job Scheduler [REPO: git diff for .env.example in commit 151ceba9 shows "ReachInbox Full-Stack Email Job Scheduler" removed from line 1]
- **category:** Applied Projects [CATALOG] / Hiring Assignment → Personal Portfolio
- **demoUrl:** https://email-job-scheduler.vaibhv19.dev [CATALOG] — Listed in `projects.ts` catalog; runtime availability requires confirmation [CONFIRM: Q1]
- **githubUrl:** https://github.com/vaibhv19/Email-Job-Scheduler [CATALOG] — Listed in `projects.ts` catalog; repository public visibility requires confirmation [CONFIRM: Q2]
- **status:** v1.0.0 delivered. Hiring assignment completed; received rejection email. Post-rejection debranding (commit 151ceba9, 2026-10-18) and reviewer access revoked. Repurposed for personal portfolio. [CONVERSATION, REPO]
- **story strength:** Ready for engineering story — 2-day build constraint, 5 services, 120+ verified checklist items; rejection outcome and post-rejection debranding confirmed; remaining questions center on live deployment status and architectural autonomy.

### 1. Project Identity

- **What it is:** A distributed, multi-service email scheduling and delivery system. The user schedules emails (individual or bulk CSV), sets per-sender rate limits and dispatch windows; a BullMQ worker pool processes the jobs; status is tracked in PostgreSQL; emails are delivered through Ethereal SMTP (test preview only); Elasticsearch provides full-text search; Slack receives quota-exhaustion alerts; Bull Board monitors queue state. [REPO: README.md section 2]
- **Monorepo structure:**
  - `apps/api` — Express API server (auth, scheduling, search, Bull Board)
  - `apps/worker` — BullMQ worker pool (claim, rate-limit, SMTP delivery, crash recovery)
  - `apps/web` — React 18 / Vite / Tailwind frontend dashboard
  - `packages/db` — PostgreSQL query module
  - `packages/redis` — BullMQ queue + Lua rate-limiter
  - `packages/shared` — shared constants and crypto utilities
  - [REPO: package.json root workspaces]
- **Complete tech stack (verified in package.json and Dockerfiles):**
  - API: Node.js 22, Express, TypeScript, google-auth-library, csv-parse, @bull-board/express, @elastic/elasticsearch [REPO: apps/api/package.json]
  - Worker: Node.js 22, BullMQ, Nodemailer, TypeScript [REPO: apps/worker/package.json]
  - Frontend: React 18.3.1, Vite 6, TypeScript, Tailwind CSS 3, Lucide React, clsx, tailwind-merge [REPO: apps/web/package.json] — Note: React 18, not 19
  - Infrastructure: PostgreSQL 16 Alpine, Redis 7 Alpine, Elasticsearch 8.11.3, Caddy 2 Alpine (reverse proxy/TLS), Nginx Alpine (web SPA serving)
  - Testing: Vitest [REPO: root package.json devDependencies]
  - Deployment target: Oracle Cloud Always Free VM (ARM64 or AMD micro) [REPO: README.md section 7]
- **Note on scope:** The React frontend (`apps/web`) is React 18 + Vite, not Next.js. The original requirement may have mentioned Next.js as one option; the final implementation used Vite. [CONFIRM: Q3 — was Next.js explicitly required or was Vite an acceptable choice?]

### 2. Origin and Constraints

- **Context:** A hiring assignment for ReachInbox, an email outreach platform. [REPO: git history — "ReachInbox" appears in .env.example diff of commit 151ceba9; a .pem file named "reachinbox-key.pem" exists in the repo root, consistent with EC2 deployment during the assignment period]
- **Assignment Outcome (Confirmed):** Vaibhav received a rejection email [CONVERSATION: confirmed by Vaibhav]. Nothing about the assignment outcome changed after that. Following the rejection, Vaibhav removed the assignment branding and revoked the reviewer's access [CONVERSATION: confirmed by Vaibhav]. This was strictly a string-replacement pass and access revocation — it was not a feature redesign, technical failure remediation, or reviewer-requested change.
- **Time constraint:** The initial implementation was stated as completed in approximately two days. [CONVERSATION] The git log shows: all planning docs committed 2026-10-13, all 10 phases committed across 2026-10-13 and 2026-10-14. Two calendar days of coding commits confirm the stated timeline. [REPO: git log]
- **Required stack (stated as assignment requirement, partially verifiable from requirements-checklist.md):** TypeScript, Express, React (or Next.js), PostgreSQL, Redis, BullMQ, Elasticsearch, Google OAuth, Slack integration, Bull Board. [REPO: docs/requirements-checklist.md INF-01–INF-14]
- **Key architectural constraints explicitly required:**
  - No cron jobs, no in-memory setTimeouts — only BullMQ delayed queues. [REPO: requirements-checklist.md BE-06: "Codebase audit confirms zero dependencies on node-cron, cron, OS crontab, or in-memory setTimeout triggers — Verified"]
  - Private GitHub repository [REPO: requirements-checklist.md INF-01]
  - Separate API and worker processes [REPO: INF-11]
  - Docker Compose orchestration [REPO: INF-08]
  - Deployment target: OCI Always Free VM [REPO: README.md section 7]
- **What was Vaibhav's choice vs. the assignment requirement:** The requirements checklist documents 120+ requirements across infrastructure, email scheduling, SMTP, rate limiting, Google OAuth, Elasticsearch, Slack, and testing. [REPO: docs/requirements-checklist.md] All items are marked "Verified." The specific implementation choices (monorepo structure, Lua scripts, atomic DB claim query pattern, Caddy over Nginx for TLS, multi-stage Dockerfiles) appear to have been architectural decisions Vaibhav made within the requirement envelope. [CONFIRM: Q4 — which of these choices were prescribed vs. selected?]

### 3. Implementation — Verified in Code

- **Email scheduling pipeline (verified):**
  1. `POST /api/emails/schedule` accepts subject, body, recipients (single or bulk/CSV), sender_id, scheduled_at
  2. Recipient emails validated; record per recipient persisted in `emails` table (status: `scheduled`)
  3. BullMQ `DELAYED` job enqueued with delay = `scheduled_at - now()`; job ID is deterministic (matches email.id)
  4. Scheduling requests are idempotent via request idempotency header → cached response, zero duplicate rows
  [REPO: requirements-checklist.md BE-01–BE-17; docs/architecture.md section 5; processor.ts]

- **Atomic DB claiming (verified):**
  The worker uses a PostgreSQL atomic update to claim emails:
  ```sql
  UPDATE emails SET status = 'processing', updated_at = NOW()
  WHERE id = $1 AND status = 'scheduled' RETURNING *;
  ```
  If two concurrent workers attempt to claim the same email, exactly one receives a row; the other receives zero rows and skips. [REPO: apps/worker/src/processor.ts function claimEmailForProcessing; requirements-checklist.md BE-12]

- **Rate limiting via Redis Lua script (verified):**
  A Lua script executes atomically enforcing two constraints per sender per UTC hour:
  - Minimum inter-send spacing (`min_send_interval_ms`) — prevents burst delivery
  - Hourly quota cap (`max_emails_per_hour`) — sliding UTC-window count
  On quota exhaustion: BullMQ `moveToDelayed` reschedules the job to the start of the next UTC hour; email status remains `scheduled` (not `failed`). A Slack rate-limit alert is sent once per hour per sender via atomic Redis deduplication key. [REPO: packages/redis/src/rate-limiter.ts; requirements-checklist.md RATE-01–RATE-21; docs/architecture.md section 5.1]

- **SMTP delivery (verified):** Nodemailer + Ethereal SMTP. Ethereal captures emails for preview — no real inbox delivery. `nodemailer.getTestMessageUrl()` returns a preview URL stored in `emails.preview_url`. Stable `Message-ID` prevents duplicate tracking if recovery reconciles a sent email. [REPO: apps/worker/src/mailer.ts; requirements-checklist.md SMTP-01–SMTP-08]

- **Post-acceptance crash recovery (verified):** Every SMTP attempt records an `email_attempts` row before sending. If a crash occurs after SMTP acceptance (250 OK) but before updating `emails`, the worker's reconciliation service on next startup finds the accepted attempt record and reconciles `emails` to `sent` without resending. [REPO: requirements-checklist.md SMTP-08; docs/architecture.md section 5.3]

- **Elasticsearch outbox recovery (verified):** ES indexing failures do not block email scheduling. Index events are written to a `scheduling_outbox` table (`elasticsearch_index` flag). A background loop drains pending index events once ES is available. [REPO: docs/architecture.md section 5.4; requirements-checklist.md ES-07, ES-08]

- **Google OAuth (verified):** Real OAuth 2.0 with PKCE and HMAC-signed state cookie. User profile persisted in PostgreSQL `users` table. Session stored in `user_sessions` with secure HTTP-only cookies. Multi-tenant: all data operations are scoped by `user_id`. [REPO: apps/api/src/modules/auth/google.ts; requirements-checklist.md AUTH-01–AUTH-14]

- **Slack OAuth (verified):** Real Slack OAuth authorization-code flow. Tokens stored encrypted in `slack_connections` table. Worker sends rate-limit alert blocks to connected workspace channel. Alert deduplication prevents Slack spam across repeated quota events in the same hour. [REPO: apps/api/src/modules/slack/slack.service.ts; requirements-checklist.md SLACK-01–SLACK-11]

- **Bull Board (verified):** Mounted at `/admin/queues`, protected with HTTP Basic Auth (`BULL_BOARD_USERNAME` / `BULL_BOARD_PASSWORD`). [REPO: apps/api/src/modules/admin/bull-board.ts; requirements-checklist.md OPS-01–OPS-03]

- **CSV upload (verified):** csv-parse library, Zod validation per row, recipient count shown as real-time validation pill in the Compose modal. [REPO: apps/api/package.json; requirements-checklist.md BE-03; demo-script.md section 0:45–2:00]

- **Testing (verified):** 20 test files across unit (CSV parsing, validators, crypto), API (auth, Elasticsearch, scheduling, validation, idempotency, Slack, Bull Board), rate-limiting (quota reservation, sender spacing, deferral), recovery (outbox reconciliation, persistence), and worker (concurrency, delivery, crash, retry exhaustion) suites. All marked Verified in the checklist. [REPO: requirements-checklist.md section 6; root package.json test scripts]

### 4. Deployment and Production Context

- **Production Docker Compose (`docker-compose.prod.yml`):** Caddy 2 reverse proxy on ports 80/443 (auto Let's Encrypt TLS). All internal services (PostgreSQL 5432, Redis 6379, ES 9200, API 3001, web 80) communicate over internal Docker bridge `scheduler_network` with zero host-port exposure. ARM64-compatible base images for Oracle Ampere A1. [REPO: README.md section 7; architecture.md section 19.1–19.5]

- **Multi-stage Dockerfiles (verified):** All three app Dockerfiles use two-stage builds (builder → runner). The runner stage copies compiled dist and the workspace node_modules from the builder. The `@elastic/elasticsearch` client is listed in apps/api/package.json. [REPO: apps/api/Dockerfile; apps/worker/Dockerfile]

- **Deployment issue — Elasticsearch client (NOTE: this is a finding, not confirmed history):** An oft-cited failure mode in multi-stage Node.js monorepo builds is that workspace dependencies built in the builder stage (`node_modules` at root) do not include native modules properly when copied to the runner stage, or that optional dependencies installed in the builder are skipped in the runner's leaner environment. The `@elastic/elasticsearch` package is an optional-peer dependency. Whether this specific issue occurred during the ReachInbox submission deployment is NOT confirmed in any commit message or documentation in the repo. [CONFIRM: Q5 — did a missing Elasticsearch client dependency cause a production outage? What happened specifically?]

- **Vercel.json (confirmed, post-submission):** A `vercel.json` was added (commit ef27f61, 2026-10-15) and a COOKIE_DOMAIN fix (commit 4ac0747, 2026-10-15) were added the day after submission, suggesting an attempt to deploy the web frontend to Vercel (or test cross-subdomain OAuth). Whether this was a working deployment or an exploratory attempt is not confirmed. [REPO: git log dates; apps/web/vercel.json exists] [CONFIRM: Q6]

### 5. Evolution into Portfolio Project

- **Personalization commit (verified):** Commit 151ceba9, 2026-10-18 ("chore: personalize project and remove assignment branding") touched 66 files. Changes included:
  - Removed "ReachInbox" from every file (`reachinbox_scheduler` → `email_scheduler` in DATABASE_URL; "ReachInbox Full-Stack Email Job Scheduler" → "Full-Stack Email Job Scheduler" in .env.example)
  - Updated package names, Docker image names, service names, comment headers
  - Did NOT modify business logic, test assertions, or architecture
  [REPO: commit 151ceba9 diff]

- **What changed vs what stayed:** The assignment's full architecture, all tests, all documentation, and all feature work were preserved. Only branding strings were updated and reviewer access removed. The requirements-checklist.md and architecture.md were updated to remove ReachInbox-specific naming but their content remains substantively identical. [REPO: commit 151ceba9 diff]

- **What remains assignment-era vs. portfolio-era:** All core implementation (phases 01-10) is assignment-era (2026-10-13 to 2026-10-14). The personalization pass is post-submission (2026-10-18) following the confirmed rejection email. Any UI redesign, feature additions, or architectural changes would be portfolio-era; no such commits exist yet. [REPO: git log]

- **Planned portfolio changes:** [CONFIRM: Q7 — what changes, if any, are planned for the portfolio version beyond debranding? Are you planning to add a live deployment, replace Ethereal with a real SMTP provider, or redesign the frontend?]

### 6. Engineering Story Assessment

- **Strongest authentic story:** This project's most interesting quality is what it demonstrates under a constraint — delivering a distributed system involving five networked services (PostgreSQL, Redis, Elasticsearch, Google OAuth, Slack), three application processes (API, worker, web), and 120+ verified requirements across two calendar days. That is the story, and it requires no embellishment.

- **The constraint is the point:** The "no cron" requirement forces the architecture toward a proper queue model (BullMQ delayed jobs). The atomic PostgreSQL claim query and Lua rate-limit script are not over-engineering for the sake of it — they are the correct responses to real concurrency problems that cron-based or timer-based approaches avoid by not being concurrent in the first place.

- **The post-acceptance crash recovery:** Writing an attempt record before SMTP and reconciling on restart is a detail almost no assignment submission bothers with. It demonstrates thinking about at-least-once delivery semantics, not just happy-path functionality. This is the strongest individual technical detail in the project.

- **The honest limitation:** Ethereal SMTP does not deliver to real inboxes. The system is production-grade in its architecture and never in its email delivery. This distinction must be stated plainly in any case study.

- **Suggested narrative shape:** Assignment trigger (ReachInbox hiring) → Time constraint (two days, five services) → Key architectural constraint (no cron → queue model) → The three interesting implementation details (atomic DB claim, Lua rate-limit, post-acceptance crash recovery) → Deployment (OCI, Caddy TLS) → Post-submission: rejection received, owned and debranded the codebase for portfolio presentation.

- **Voice notes:** Do not describe this as a "production-grade system" without immediately noting that Ethereal is test-only. Do not claim the live deployment is running unless confirmed. The two-day timeline is an honest constraint; do not hide it.

### 7. Claims That Should Not Be Made

- Do not claim emails are delivered to real inboxes — Ethereal is preview-only.
- Do not claim a missing Elasticsearch dependency caused a confirmed production outage without Vaibhav confirming it.
- Do not claim the live deployment URL is running without confirming.
- Do not claim the frontend is Next.js — it is React/Vite.
- Do not claim this is self-initiated work; it originated as a hiring assignment.
- Do not describe the personalization as a "redesign" — it was a string-replacement pass.
- Do not imply that the rejection resulted from a technical failure, that the assignment was accepted, or that the reviewer requested changes.
- Do not speculate about why Vaibhav was rejected or claim that rejection caused any technical changes beyond branding removal and reviewer access revocation.

### 8. Open Questions for Vaibhav

1. Is the live demo URL `https://email-job-scheduler.vaibhv19.dev` (recorded in `projects.ts`) currently active and accessible, or is it a planned domain?
2. Is the repository at `https://github.com/vaibhv19/Email-Job-Scheduler` currently public?
3. Was Next.js explicitly required by the assignment or was Vite an acceptable substitute?
4. Which implementation choices (monorepo structure, Lua scripts, Caddy, multi-stage Dockerfile) were your own decisions vs. prescribed by the assignment?
5. Did a missing Elasticsearch client dependency cause a deployment failure during the assignment submission? If so: what was the root cause, how did you diagnose it, and how did you fix it?
6. Did you deploy to Vercel for any part of this? What was the COOKIE_DOMAIN fix for?
7. What changes, if any, are you planning for the portfolio version beyond debranding?

---

## 1nfinity.online

> **Relationship disclosure:** 1nfinity is an influencer marketing agency run by Vaibhav's college mates. Vaibhav built the website and has permission to showcase the work. He is the developer, not a founder or owner of the agency.

### Record

- **id:** `1nfinity` [CATALOG]
- **title:** 1nfinity [CATALOG]
- **Client:** 1NFINITY — influencer marketing agency [REPO: layout.tsx metadata title: "1NFINITY — Influencer Marketing Agency & Creator Partnerships"]
- **category:** Client Work & Collaborations [CATALOG]
- **Production URL:** https://1nfinity.online [CATALOG, REPO: layout.tsx metadataBase]
- **Repo:** Private client repository (no public GitHub URL). Local path: `D:\Work\Projects----Commercial\1nfinity\website` [REPO: confirmed local path]
- **techStack:** Next.js 14.2.18 (App Router), React 18.3.1, TypeScript 5.6, Tailwind CSS 3.4, Resend (email delivery), Google Analytics 4, Lucide React, Fontshare CDN (Clash Display, Satoshi), Google Fonts (Inter) [REPO: package.json, layout.tsx]
- **Hosting:** Vercel (Edge Network), production domain 1nfinity.online, Cloudflare DNS [REPO: README.md Deployment section]
- **Git branches:** production = `main`, development = `develop`; `NewConcept` branch was an exploration branch (commit messages reference "newconcept" prefix for 2026-10-02 work); final shipped state is on `main` [REPO: git log — merges from develop to main; "feat(newconcept)" commits integrated into develop]
- **status:** Live in production. Handover in progress (README documents a full handover checklist across GitHub, Vercel, Cloudflare/DNS, Resend, GA4, Search Console, Bing Webmaster). [REPO: README.md Handover section]
- **story strength:** Ready for client-work framing — design ownership from scratch confirmed (except logo); founder's decision to remove packages confirmed; 99/92 Lighthouse performance verified; weakest for business outcomes (no confirmed analytics data, no reported client acquisition).

### 1. Project Identity and Relationship

- **Who the client is:** College mates running an influencer marketing agency named 1NFINITY. [CONVERSATION] The agency's positioning (verified in final codebase) is: influencer marketing campaigns, creator partnerships and matchmaking, influencer-led brand promotion, campaign strategy, creator content production, and campaign execution and performance analysis. [REPO: lib/data.ts officialServices array, 6 items]
- **Design Ownership (Confirmed):** Vaibhav designed and developed the website from scratch, with the logo being the sole exception [CONVERSATION: confirmed by Vaibhav]. All page layouts, aesthetic tokens, visual structure, responsive behaviors, custom animations, and UI engineering were authored entirely by Vaibhav. The client college mates did not design the website.
- **What came from the client:** The logo asset, agency brand name, business positioning ("influencer marketing agency"), and the service definitions. [CONVERSATION, REPO]
- **What Vaibhav owned:** Complete website design from scratch (except logo), frontend architecture, all code, design system implementation, animation engineering, performance optimization, SEO configuration, deployment pipeline, GA4 setup, Search Console and Bing verification, Resend email integration, and production handover protocol. [CONVERSATION, REPO: README.md]

### 2. Business and Website Goals

- **Agency positioning (final, verified):** Influencer marketing agency — NOT social media management. [REPO: layout.tsx metadata description: "1NFINITY is an influencer marketing agency specializing in creator partnerships, brand collaborations, high-impact content, and influencer-led campaigns"; commit 62012c7 "feat: reposition as influencer marketing agency and remove packages/pricing"]
- **Packages removed (Confirmed):** The packages/pricing section was removed in commit 62012c7 (2026-10-15). The decision to remove the packages from the website was made by the **founder of 1nfinity**, not by Vaibhav [CONVERSATION: confirmed by Vaibhav]. This was an agency business decision, not an independent design choice by Vaibhav. The PackagesGrid.tsx component (139-line reduction in that commit) was deactivated accordingly. [REPO: commit 62012c7 diff]
- **Intended site goal:** Create credibility, communicate agency positioning, and start conversations via the contact form — not sell fixed packages from a pricing table. [CONVERSATION]
- **Contact form:** Functional, server-side via Resend API. From `hello@1nfinity.online`, to `hello@1nfinity.online`, reply-to set to sender's email. Form fields: name, email, business name, service interest (dropdown), message. Server-side validation in the API route handler. [REPO: app/api/contact/route.ts]

### 3. Chronology (from git log)

| Date | Event |
|------|-------|
| 2026-09-16 | First commit ("first" — empty test.txt) [REPO] |
| 2026-09-17 | "Coming Soon" production-ready static export; brand assets uploaded (logo, infinity symbol, hero images) [REPO: commit cecf628] |
| 2026-09-17 | Cleanup: removed connect button, domain label, centered badge [REPO: commit 6073328] |
| 2026-09-28 | First complete draft of 1NFINITY website based on design system [REPO: commit ddec24d] |
| 2026-09-29 | Integrated "authentic 1NFINITY brand positioning, 6 official services, investment packages, and target niches from source materials" [REPO: commit 027106] |
| 2026-09-29 | Full-screen branded intro sequence with logo shrink transition added [REPO: commit 6a9139] |
| 2026-10-02 | Human design cleanup and anti-overdesign pass [REPO: commit 8b0f14] |
| 2026-10-02 | Major NewConcept branch work: marquees, background grid, navbar, hero refinements, video updates, footer, design system normalization — 30+ commits [REPO: git log 2026-10-02] |
| 2026-10-03 | About page, Services page, contact page redesigns [REPO: git log 2026-10-03] |
| 2026-10-05 | Resend email contact form implemented and merged from develop [REPO: commit cbd120] |
| 2026-10-06 | Phase 1 Production QA: SEO hardening, hero video compression, OG assets, GA4, Search Console verification, Lighthouse audit [REPO: commits d89d299, 895a5b6, 135f0cf, 3b99247, 884e914] |
| 2026-10-06 | Performance: entrance animation made desktop-only [REPO: commit 895a5b6] |
| 2026-10-15 | Merge develop → main + commit 62012c7: "reposition as influencer marketing agency and remove packages/pricing" [REPO] |
| 2026-10-19 | "chore: trigger deploy from personal account" [REPO: commit ebd70aa] |

**Observation:** The 2026-09-29 commit explicitly references "investment packages" and "target niches from source materials." This confirms that client-provided brand source materials existed and were integrated during the first full draft phase, prior to the founder's subsequent decision to remove the packages. [REPO: commit 027106, CONVERSATION]

### 4. Design and Implementation

- **Design system (production-verified):**
  - Canvas: `#0B0B0B` (warm near-black, not pure digital black)
  - Primary text: `#F4EFE6` (cream/ivory)
  - Muted text: `#9E9A91`
  - Accent: `#C4A482` (warm tan/gold) — used strictly for terminal heading words, eyebrow tags, active links
  - Heading font: *Clash Display* (medium, via Fontshare CDN)
  - Numerical/data font: *Satoshi* (via Fontshare CDN)
  - Body font: *Inter* (Google Fonts)
  - Fixed architectural background grid: `linear-gradient` 40px × 40px with `rgba(244, 239, 230, 0.048)`
  - [REPO: docs/new-concept-design-system.md sections 1–2; app/globals.css :root tokens; tailwind.config.js]

- **Philosophy documented in design system:** "Restraint Over Decoration" — explicitly rejects purple/blue gradients, glowing blob cards, animated counter widgets, template glassmorphism. [REPO: design-system.md section 1 principle 1] "Zero heavy animation libraries (no Framer Motion)." [REPO: design-system.md section 1 principle 6]

- **Page structure (current, verified in app/ directory):**
  - `/` — Home (Hero, HomeAbout, HomePresence, HomeProcess, HomeProof, HomeCTA sections)
  - `/about` — About (Vision, Mission, Philosophy, WhatWeDo, Difference sections)
  - `/services` — Agency Solution page listing 6 service items
  - `/services/brands` — Brands-specific subpage
  - `/services/creators` — Creators-specific subpage
  - `/contact` — Contact form with Resend integration
  - `/portfolio`, `/work`, `/case-studies` — exist in app/ directory but content not confirmed [CONFIRM: Q1]
  - `/privacy`, `/terms` — legal pages
  - [REPO: app/ directory listing]

- **Hero video:** Compressed to H.264 MP4 (`public/1nfinity-hero.mp4`, ~1.23 MB). Faststart enabled for immediate streaming. Poster (`public/1nfinity-hero.webp`, ~35 KB) preloaded in `<head>` with `fetchpriority="high"` for LCP optimization. [REPO: README.md Performance section]

- **BrandIntro entrance animation (verified in code):**
  - Desktop-only (`min-width: 1024px`). On mobile/tablet: immediately bypassed, component returns `null`. [REPO: components/BrandIntro.tsx lines 18–24]
  - 4.0-second sequence: initial cover → entering (opacity 0→1, scale 0.88→1) → holding → collapsing → fading → complete
  - ESC key skip handler registered on window [REPO: BrandIntro.tsx lines 37–42]
  - Respects `prefers-reduced-motion: reduce` [REPO: BrandIntro.tsx lines 19–22]
  - `document.body.style.overflow = 'hidden'` during animation to prevent scroll [REPO: BrandIntro.tsx line 26]
  - Does NOT trigger on SPA navigation (only on full page load/refresh) — this is the correct behavior; the issue of repeated entrance on navigation was addressed by this implementation [CONVERSATION: entrance animation not repeating on navigation was an explicit goal]
  - [REPO: components/BrandIntro.tsx]

- **Animation system:** No Framer Motion. All motion via CSS keyframes, cubic-bezier transitions, and `requestAnimationFrame` text character reveals. `IntersectionObserver` for section-entry triggers (`SectionReveal` component). Continuous marquees via CSS `@keyframes`. Hover-pause on marquees. All animations respect `prefers-reduced-motion`. [REPO: design-system.md section Motion; README.md Animation/Motion Notes]

- **Contact form backend:** Next.js App Router API route (`app/api/contact/route.ts`). Server-side field validation (name, email, businessName, serviceInterest enum, message length). XSS-safe HTML email constructed server-side with `escapeHtml()`. Sent via Resend SDK from `hello@1nfinity.online`. RESEND_API_KEY injected via Vercel environment variables (never in git). [REPO: app/api/contact/route.ts]

- **Static export removed:** `output: 'export'` was removed from `next.config.js` to enable Next.js API routes (required for Resend). Note in config: "Vercel handles server-side functions natively." [REPO: next.config.js comment]

- **SEO (verified):**
  - Full Open Graph and Twitter Card metadata in layout.tsx
  - OG image: `/og-image.jpg` (1200×630, ~107 KB)
  - GA4 property: G-8PPXF1HN76 added via `next/script` afterInteractive
  - `sitemap.xml` submitted to Google Search Console and Bing Webmaster Tools [REPO: README.md SEO section; layout.tsx metadata block]

- **Performance (Lighthouse scores — documented in README):**
  - Desktop: Performance 99, Accessibility 95, Best Practices 100, SEO 100
  - Mobile: Performance 92, Accessibility 96, Best Practices 100, SEO 100
  - Mobile Core Web Vitals: FCP 1.7s, LCP 3.2s, TBT 0ms, CLS 0, Speed Index 2.0s
  - [REPO: README.md Performance table — described as "Verified Lighthouse / PageSpeed Results"; screenshots in docs/screenshots/]
  - **Note:** These scores are documented in the README; whether they reflect current production state at time of any future publication depends on what changes have been made since. Re-run before quoting.

### 5. Key Decisions and Rationale

- **No animation library (Framer Motion):** Explicit decision. Performance and design-system ownership were the reasons. [REPO: design-system.md; README.md Animation notes: "Zero heavy animation libraries (no Framer Motion dependency)"]

- **Repositioning and packages removal (2026-10-15):** The site was originally built with explicit packages/pricing and described as a broader agency. Commit 62012c7 repositioned as specifically "influencer marketing agency" and removed the packages grid. This was a business decision made by the **founder of 1nfinity** [CONVERSATION: confirmed by Vaibhav], which Vaibhav implemented across 22 files and 139 deleted lines in PackagesGrid. [REPO: commit 62012c7 diff]

- **"trigger deploy from personal account" (2026-10-19):** Commit ebd70aa is a force-deploy trigger commit. The author line in the earlier coming-soon commits shows "Your Name <vaibhavkrgupta369@gmail.com>"; later commits show the 1nfinity account email ("1nfinity-online@gmail.com"). The 2026-10-19 commit from Vaibhav's personal account suggests a deploy trigger from the personal account after the repo was connected to or transferred to the client account. [REPO: git log author fields] [CONFIRM: Q2 — what account owns the Vercel project and GitHub repo at this point?]

- **Design anti-patterns explicitly named and avoided:** Purple/blue gradients, glowing blob cards, animated counters, fake testimonials, fake statistics, decorative filler widgets. [REPO: design-system.md Anti-Patterns; README.md Design/Maintenance Guidelines]

### 6. Challenges and Judgment Calls

- **Anti-overdesign pass (2026-10-02 commit 8b0f14):** A full session of "human design cleanup" committed after the NewConcept branch introduced the design system. The commit message itself says "anti-overdesign pass," which implies that an earlier version was overdesigned and required manual correction. This is the most honest signal in the git log about design quality control. [REPO: commit 8b0f14]

- **Desktop-only entrance animation:** The decision to make the 4-second intro play only on desktop and be immediately bypassed on mobile was a deliberate performance and UX trade-off. Mobile LCP would suffer significantly from a 4-second overlay. [REPO: README.md Animation section; BrandIntro.tsx responsive logic]

- **Removing static export for API routes:** Originally configured as a static export (for simpler Vercel hosting). Adding the Resend contact form required removing `output: 'export'`. This was a one-way architectural decision that locks the project to Vercel or a server-capable host. [REPO: next.config.js comment]

- **`images: { unoptimized: true }`:** Next.js image optimization is disabled. This is documented but unexplained in next.config.js. Likely because the hero image is a `<video>` element (not `<Image>`), and the infinity symbol assets are small enough not to need optimization. [REPO: next.config.js] [CONFIRM: Q3 — was this a deliberate choice or an artifact of the static export removal?]

### 7. Business Outcomes

- **No reported business metrics.** No conversion rates, inquiry volumes, client acquisition numbers, or revenue figures are documented anywhere in the repo or available from the conversation.
- **Lighthouse scores (99/92 performance) are documented** and represent a genuine technical achievement for a video-heavy site.
- **GA4 is installed** (G-8PPXF1HN76), meaning data is being collected. Whether Vaibhav has access to the GA4 data is not confirmed. [CONFIRM: Q4]
- **Do not invent any business outcomes.** This instruction is unconditional.

### 8. Case Study Framing

- **This is a client-work case study, not an engineering case study.** Its value is different from the personal engineering projects (Trajectory, Phoenix, Conclave, CheckMate). Those projects demonstrate technical depth. This one demonstrates: translating a real business positioning into a credible web presence, design judgment under aesthetic constraints, performance engineering, and delivering production work for a real organization.

- **Strongest story thread:** The website was designed and built from scratch by Vaibhav (except for the logo), adhering to an uncompromising "Restraint Over Decoration" design system. The founder's strategic decision to strip packages and reposition specifically as an influencer marketing agency transformed the site from a pricing catalog into a high-credibility brand presence.

- **Second-strongest thread:** The anti-overdesign pass (2026-10-02). Building something that looks premium without looking AI-generated is harder than it sounds. The explicit anti-pattern list in the design system — naming the things that were deliberately not done — is more interesting than listing the things that were done.

- **Suggested narrative shape:** Client relationship and why this project → Coming soon → First full build from scratch → The anti-overdesign correction → Founder's repositioning decision (removing packages) → Production QA and performance (99/92 Lighthouse) → What the site is now, what it still can't claim.

- **Voice notes:** Do not describe this as "my influencer marketing agency" or "our agency." Do not fabricate business results. The Lighthouse scores are real; quote them. The contact form delivers to a real inbox; that is verifiable. Everything about business impact belongs behind a "CONFIRM" tag.

### 9. Claims That Should Not Be Made

- Do not describe 1NFINITY as Vaibhav's agency.
- Do not attribute the packages removal decision to Vaibhav — it was decided by the founder of 1nfinity.
- Do not claim college mates designed the website — Vaibhav designed and developed the site from scratch, with only the logo provided.
- Do not report any business metrics, inquiry volumes, or client acquisition unless Vaibhav provides specific confirmed numbers.
- Do not describe the site as deployed on EC2 — it is on Vercel.
- Do not describe the hero video as `1790625898145213.mp4` — this filename does not appear in the current repo; the production video is `1nfinity-hero.mp4`. [REPO: public/ directory listing — only `1nfinity-hero.mp4` present]
- Do not claim the packages section exists in the current production site — it was removed in commit 62012c7.
- Do not quote Lighthouse scores as current without re-running; they may drift as content changes.

### 10. Open Questions for Vaibhav

1. Do /portfolio, /work, and /case-studies pages have any real content, or are they placeholder routes?
2. Who owns the Vercel project and the GitHub repo currently — you, or the client? What does the handover status look like in practice?
3. Was `images: { unoptimized: true }` a deliberate choice or an artifact of removing static export mode?
4. Do you have access to the GA4 data? If so, are there any numbers you can share (traffic, geography, sessions)?
5. Are there any analytics or contact form submissions you can confirm from the live site?
6. The 2026-10-19 "trigger deploy from personal account" commit — what context does this belong to?

---

## Consolidated Unresolved-Items Register

This register tracks all open questions across all six projects. Questions answered by Vaibhav's confirmed context (Trajectory scope expansion, Phoenix Python/Java split origin, EJS rejection outcome and post-rejection debranding, 1nfinity design ownership and founder packages decision) have been closed and removed from active inquiry.

| Project | Missing detail or link | Why it matters | Evidence already checked | Status | Exact question for Vaibhav, if required |
|---------|------------------------|----------------|--------------------------|--------|-----------------------------------------|
| **Trajectory** | Spreadsheet friction details | Human entry point and authentic motivation for the case study origin | git log commits 19ab51f-38ef4c0; PRD section 2.1 | `NEEDS CONFIRMATION` | What specifically was broken or annoying about the spreadsheet? (What column, what recurring mistake, what lost application?) |
| **Trajectory** | AWS EC2 hosting rationale | Explains why AWS EC2 + RDS + S3 was chosen over simpler PaaS hosts | README.md Production Infrastructure section | `NEEDS CONFIRMATION` | Why AWS EC2 specifically? Was it a learning goal, a constraint, or just the first thing that came up? |
| **Trajectory** | Oracle Cloud migration rationale | Explains future infrastructure plans mentioned in chats | Not in git or PRD; mentioned in conversation | `NEEDS CONFIRMATION` | What is the actual reason for the planned Oracle Cloud migration? |
| **Trajectory** | Kanban / @dnd-kit historical context | Clarifies whether kanban was planned and cut or misremembered | frontend/package.json, git log (no dnd-kit found) | `NEEDS CONFIRMATION` | The @dnd-kit + kanban claim: was this a feature you planned and cut, or a misremembering? |
| **CheckMate** | Paywall frustration origin | Authentic human origin for building a free alternative | Docs/PRD.md section 2; conversations | `NEEDS CONFIRMATION` | Was there a specific frustrating paywall encounter on chess.com that triggered building CheckMate, or was it simply a hobby project that seemed buildable? |
| **Conclave** | Roundtable concept lineage | Clarifies historical continuity of multi-model collaboration concepts | Not recorded in Conclave repo or CHANGELOG | `NEEDS CONFIRMATION` | Is Conclave a descendant of the earlier "Roundtable" concept, or a genuinely separate idea that arrived independently? |
| **Conclave** | Hardware thermal limits & usage frequency | Frames technical caveats accurately ("demanding" vs "barely practical") | README.md honest caveat notes; chat logs | `NEEDS CONFIRMATION` | The overheating: does this occur on every run, or only when multiple large models are loaded simultaneously? What is the practical limit of models? |
| **Conclave** | Live execution screenshot verification | Confirms supporting visual media / proof of working local run | `frontend/src/assets/live_usecase_chat_conclave.png` found in repo | `NEEDS CONFIRMATION` | Is the screenshot in `frontend/src/assets/live_usecase_chat_conclave.png` the proof of run you referenced, or is there another capture? |
| **Phoenix** | ~85% Confidence Score ceiling diagnosis | Core technical anomaly: whether CS ceiling is a structural property or an unresolved calibration issue | Docs/Learning/confidence_scoring.md, conversations | `NEEDS CONFIRMATION` | During manual testing, CS never exceeded ~85%. Did you conclude this was a structural property of the formula (discrete Agreement) or an unresolved calibration issue? What did you do with the finding? |
| **Phoenix** | Benchmark execution confirmation | Validates quantitative claim (100% Hit Rate @ 1 for hybrid vs vector-only) | `test_sensitivity.py` in repo, Docs/Learning/testing_and_benchmarking.md | `NEEDS CONFIRMATION` | Did test_sensitivity.py and test_fallback.py actually run and produce results during development? What was the Hit Rate @ 1 for vector-only vs. hybrid? |
| **Phoenix** | Fallback tier implementation depth | Verifies which tiers (Yellow/Orange/Red) were fully tested in code | Docs/Fallback_Strategies.md, Docs/Release_Notes.md | `NEEDS CONFIRMATION` | Which fallback strategies were fully implemented and tested vs. planned and partially implemented? |
| **Phoenix** | Doomscrolling concept origin detail | Specific human entry point for the self-healing RAG design principle | Stated in conversations; no doc citation | `NEEDS CONFIRMATION` | What specifically was the self-healing/self-correcting RAG concept you encountered while doomscrolling? How did it become "the system should know when it does not know"? |
| **Phoenix** | README flagged issues status | Documents codebase polish level at v1.0.0 release | Conversation flagged 6 issues | `NEEDS CONFIRMATION` | Were the six issues flagged in the README fixed before v1.0.0 or left open? |
| **Email Job Scheduler (EJS)** | Live demo runtime status | Verifies if demo URL is currently active and deployed | Listed as `https://email-job-scheduler.vaibhv19.dev` in `projects.ts` catalog | `NEEDS CONFIRMATION` | Is `https://email-job-scheduler.vaibhv19.dev` currently running and accessible, or is it a planned domain? |
| **Email Job Scheduler (EJS)** | GitHub repository visibility | Verifies whether repo can be linked publicly in portfolio | Listed as `https://github.com/vaibhv19/Email-Job-Scheduler` in `projects.ts` catalog | `NEEDS CONFIRMATION` | Is the repository at `https://github.com/vaibhv19/Email-Job-Scheduler` currently public or private? |
| **Email Job Scheduler (EJS)** | Next.js vs Vite assignment requirement | Confirms architectural constraints vs developer choices | `apps/web/package.json` (React 18 + Vite) | `NEEDS CONFIRMATION` | Was Next.js explicitly required by the ReachInbox assignment, or was Vite an acceptable choice? |
| **Email Job Scheduler (EJS)** | Architectural autonomy (prescribed vs chosen) | Attributes credit accurately for distributed architecture | `docs/requirements-checklist.md` (120+ verified items) | `NEEDS CONFIRMATION` | Which implementation choices (monorepo, Lua scripts, Caddy, atomic claim query) were your own design decisions vs. explicitly prescribed by the assignment? |
| **Email Job Scheduler (EJS)** | Missing Elasticsearch client deployment issue | Documents real-world debugging / resilience episode | `apps/api/package.json` optional dependency | `NEEDS CONFIRMATION` | Did a missing Elasticsearch client dependency cause a deployment failure during the assignment submission? If so, what was the root cause, diagnosis, and fix? |
| **Email Job Scheduler (EJS)** | Vercel deployment & COOKIE_DOMAIN fix | Explains frontend hosting history and authentication debugging | commit ef27f61 (vercel.json), commit 4ac0747 | `NEEDS CONFIRMATION` | Did you deploy to Vercel for any part of this? What was the COOKIE_DOMAIN fix for? |
| **Email Job Scheduler (EJS)** | Future portfolio roadmap for EJS | Clarifies ongoing status of the project | Commit 151ceba9 (debranding pass) | `NEEDS CONFIRMATION` | What changes, if any, are planned for the portfolio version beyond debranding (e.g. real SMTP provider, frontend redesign)? |
| **1nfinity.online** | GA4 production traffic metrics | Establishes business impact and real-world audience reach | GA4 tag G-8PPXF1HN76 in layout.tsx | `NEEDS CONFIRMATION` | Do you have access to GA4 data for 1nfinity.online? If so, are there any traffic, visitor, or geographic numbers you can share? |
| **1nfinity.online** | Production inquiry / lead volume | Proves contact form utility and conversion in production | `app/api/contact/route.ts` (Resend) | `NEEDS CONFIRMATION` | Can you confirm any real contact form submissions or business leads generated through the site? |
| **1nfinity.online** | Vercel & GitHub handover status | Clarifies ongoing operational ownership | README.md handover checklist, commit ebd70aa | `NEEDS CONFIRMATION` | Who currently owns the Vercel project and GitHub repo — you or the client account? What does the handover state look like in practice? |
| **1nfinity.online** | Subpage content status (/portfolio, /work, /case-studies) | Navigation and route completeness audit | Routes exist in app/ directory | `NEEDS CONFIRMATION` | Do /portfolio, /work, and /case-studies pages have active content, or are they placeholder routes? |
| **1nfinity.online** | Unoptimized images rationale | Explains performance configuration choice | next.config.js `images: { unoptimized: true }` | `NEEDS CONFIRMATION` | Was `images: { unoptimized: true }` a deliberate choice or an artifact of removing static export mode? |
| **1nfinity.online** | Deploy trigger commit context (2026-10-19) | Explains personal vs client account git history | Commit ebd70aa from personal account | `NEEDS CONFIRMATION` | What was the context behind the 2026-10-19 commit "trigger deploy from personal account"? |
