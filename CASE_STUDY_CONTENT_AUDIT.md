# CASE_STUDY_CONTENT_AUDIT.md
**Audit Date:** 2026-10-24  
**Audit Target:** Case Study Implementation on `mywork.vaibhv19.dev` vs. Source of Truth (`CASE_STUDY_DATABASE.md`)

---

## Executive Summary

An audit of the current case study implementation confirms that **the case studies were shallow abstractions derived primarily from project catalog taglines and high-level summaries rather than the comprehensive, evidence-tagged research documented in `CASE_STUDY_DATABASE.md`**.

While all six projects were nominally present in `src/data/caseStudies.ts`, the content was reduced to a generic 4-bullet "Key Decisions" and 2-bullet "Tradeoffs" template. The deep architectural mechanisms, specific SQL queries, mathematical formulas, concurrency race conditions, crash-recovery protocols, hardware thermal realities, and authentic human motivations documented in the 766 lines of `CASE_STUDY_DATABASE.md` were completely omitted from the published detail pages.

---

## Detailed Responses to Audit Questions

### 1. Is `CASE_STUDY_DATABASE.md` referenced by the implementation or only available as a local research document?
**Finding:** `CASE_STUDY_DATABASE.md` is currently **only available as a local research document**. The Next.js application imports hardcoded summary strings from `src/data/caseStudies.ts`. No markdown parser, content layer, or deep narrative structure connects the runtime application to the comprehensive evidence database.

### 2. Which parts of the database were used for each project?
**Finding:** Only the highest-level catalog metadata was used:
- The title, category name, and general tech stack tags from the catalog.
- A 1-sentence tagline rephrased as an excerpt.
- 4 generic bullet points per project summarizing high-level features.
- A 1-sentence status line.

### 3. Which significant details from the database are missing from the published articles?
**Finding:** The omitted details represent the core technical value of each case study:
* **CheckMate:**
  - Omitted the Web Worker postMessage UCI communication protocol and the rapid-move queue dominance mechanism (`stop` signal clearing).
  - Omitted the mathematical move classification formula (centipawn normalization, mate score distance penalty `MATE_VALUE = 20000 - plies * 100`, and blunder threshold ranges).
  - Omitted the sandbox "What-If" mode architecture (immutable primary game history slice).
  - Omitted the exact cross-origin isolation headers (`COOP: same-origin` / `COEP: require-corp` in `vercel.json`) required to unlock `SharedArrayBuffer` for multi-threaded Stockfish 16 WASM.
  - Omitted the external contributor's PR #15 for board flipping.
  - Omitted the deliberate engineering decision against a cosmetic UI polish pass.
* **Trajectory:**
  - Omitted the dual-token JWT architecture (24-hour access tokens, 7-day refresh token rotation stored in PostgreSQL).
  - Omitted the `MockOAuth2RedirectFilter` implemented for offline local development without OAuth credentials.
  - Omitted the Spring AI Groq Cloud integration with regex fallback extraction.
  - Omitted the `application_status_history` audit trail table tracking stage transition durations.
  - Omitted the `GhostDetectionScheduler` `@Scheduled` cron background daemon.
  - Omitted the `DESIGN.md` specification and its strict anti-pattern list (prohibiting ambient glows, random gradients, and uniform grid cards).
  - Omitted the full AWS production infrastructure: EC2 Ubuntu 24.04, RDS PostgreSQL 16, S3 resume versioning, Nginx reverse proxy, Certbot SSL timers, and a self-hosted GitHub Actions runner.
  - Omitted the crucial clarification that **no Kanban board or `@dnd-kit` library exists** in the repository (it is a sortable data table).
* **Conclave:**
  - Omitted the documented 3-stage evolution: cloud API adapters → simulated fake ChatClients → 100% local Ollama inference.
  - Omitted the adapter layer's redefinition: shifting from translating JSON wire formats to injecting model-specific prompt tokens (Llama 3 headers vs Mistral `[INST]` tags vs Gemma turn tags).
  - Omitted the concrete adapter implementations (`LlamaAdapter.java`, `MistralAdapter.java`, `GemmaAdapter.java`) and the dynamic `ModelRegistryImpl`.
  - Omitted the STOMP WebSocket pub/sub architecture (`/topic/room/{roomId}`) and typing telemetry.
  - Omitted the PostgreSQL `SELECT FOR UPDATE` pessimistic write locks preventing race conditions during mid-pipeline human interventions (`isIntervention`).
  - Omitted the `WorkflowStateService` context janitor compressing conversation histories for smaller local context windows.
  - Omitted the authentic hardware thermal reality: consumer laptop overheating when running multi-model local inference.
* **Phoenix:**
  - Omitted the core cognitive design principle: "the system should know when it does not know."
  - Omitted the failure modes of standard RAG on exact configuration keys (e.g., `spring.jpa.hibernate.ddl-auto`) where tokenizers scatter dot-separated keys, and why hybrid search (BM25 Okapi + dense vectors) demonstrably outperforms vector-only search.
  - Omitted the composite confidence score formula: `CS = 0.6 * MaxSim + 0.4 * Agreement`.
  - Omitted the full 4-tier fallback state machine: Green (direct generation), Yellow (HyDE query rewrite), Orange (FlashRank Cross-Encoder reranking with Recovery Threshold 0.50), Red (clarification generation).
  - Omitted the HNSW index migration (`cebdc3a`) on pgvector.
  - Omitted the fact that the Python AI engine / Java Spring gateway split was suggested by LLMs, not an upfront technical plan.
  - Omitted the investigation into the ~85% confidence score plateau observed during testing.
* **Email Job Scheduler (EJS):**
  - Omitted the authentic hiring assignment origin (ReachInbox assignment) and the 48-hour development constraint.
  - Omitted the architectural constraint: zero cron jobs and zero `setTimeout`, requiring BullMQ delayed queues.
  - Omitted the atomic PostgreSQL claim query pattern:
    ```sql
    UPDATE emails SET status = 'processing', updated_at = NOW()
    WHERE id = $1 AND status = 'scheduled' RETURNING *;
    ```
  - Omitted the atomic Redis Lua rate-limiting scripts enforcing sender spacing and sliding hourly quotas.
  - Omitted the post-acceptance SMTP crash-recovery mechanism (recording attempt rows before dispatch and reconciling on restart).
  - Omitted the Elasticsearch outbox pattern for non-blocking search indexing.
  - Omitted the Google and Slack OAuth implementations with token encryption.
  - Omitted the post-submission rejection context and the subsequent debranding pass (commit `151ceba9`) that repurposed the code for the portfolio.
  - Omitted the fact that Ethereal SMTP is test preview only, not real inbox delivery.
* **1nfinity.online:**
  - Omitted the authentic client agency context (built for college mates running an influencer marketing agency).
  - Omitted confirmed design ownership: Vaibhav designed and coded the entire website from scratch (except the logo).
  - Omitted the founder's business decision to remove fixed packages/pricing (commit `62012c7`), which was an agency decision, not Vaibhav's design choice.
  - Omitted the "Restraint Over Decoration" principles: banning Framer Motion, glowing blob cards, and template counters.
  - Omitted the desktop-only 4-second entrance animation with ESC bypass to safeguard mobile Largest Contentful Paint (LCP).
  - Omitted the Next.js serverless contact pipeline via Resend SDK with HTML sanitization and honeypot traps.
  - Omitted the verified Lighthouse performance scores (99 Desktop / 92 Mobile with CLS 0).

### 4. Are all six projects represented?
**Finding:** Yes, all six projects are represented in the data structures and routes (`1nfinity`, `email-job-scheduler`, `conclave`, `phoenix`, `trajectory`, `checkmate`). However, their representation was superficial.

### 5. Are the pages genuinely individual narratives, or are they mostly the same generic template with different project names?
**Finding:** The existing detail pages in `src/app/case-study/[slug]/page.tsx` used **the exact same generic template** consisting of four identical headings: "Origin & Overview", "Key Architectural Decisions", "Engineering Bottlenecks & Trade-offs", and "Current Status". Each section contained generic bullet points that flattened distinct engineering challenges into uniform, shallow summaries.

### 6. Have unresolved questions been presented as established facts?
**Finding:** In the previous implementation, nuance was lost:
- The ~85% confidence score ceiling in Phoenix was omitted rather than analyzed as an unresolved calibration phenomenon.
- Trajectory's organic scope evolution was compressed, obscuring the fact that the day-one Git commits reflected an AI-assisted batch commit cadence rather than an upfront monolithic plan.
- The hiring rejection in EJS was obscured behind vague "assignment retrospective" phrasing.

### 7. Are any claims, metrics, features, or technical decisions unsupported by the research?
**Finding:** No fabricated metrics were introduced, but the brevity gave the false impression that every system was a standard, seamless success, hiding the authentic engineering compromises (such as laptop overheating in Conclave, test-only SMTP in EJS, and the ~85% CS ceiling in Phoenix) that give engineering case studies their credibility.

---

## Action Plan for Reconstruction

1. **Commit Audit Record:** Commit `CASE_STUDY_CONTENT_AUDIT.md` to preserve the audit trail.
2. **Rebuild Content Layer:** Create rich, deep, evidence-backed narrative modules for all six projects directly from `CASE_STUDY_DATABASE.md`.
3. **Incorporate Authentic Technical Depth:**
   - Include component boundaries, data flow, and concurrency mechanics.
   - Include exact SQL query patterns, rate-limiting algorithms, and scoring equations.
   - Embed verified architecture diagrams, ASCII pipeline flows, and file references.
   - Highlight limitations, discarded approaches, and unresolved technical inquiries.
4. **Tailor Each Article Structure:** Give each project a narrative structure suited to its specific engineering story rather than a uniform 4-bullet template.
5. **Verify and Build:** Run TypeScript typechecks, linting, and Next.js static generation, and update `DEVELOPMENT_LOG.md`.
