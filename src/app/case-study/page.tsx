"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  FileCode2,
  HelpCircle,
  Cpu,
  ChevronDown,
  Layers,
  Sparkles,
  GitCommit,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

interface CaseStudyDossier {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: string;
  status: string;
  statusType: "ready" | "investigating";
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  coreNarrative: string;
  architecturalPivots: string[];
  verifiedEvidence: { tag: string; label: string; citation: string }[];
  openInquiries: string[];
  claimsAvoided: string[];
}

const DOSSIERS: CaseStudyDossier[] = [
  {
    id: "checkmate",
    number: "01",
    title: "CheckMate",
    subtitle: "Local-First Stockfish 16 WASM & Cross-Origin Threading",
    tagline: "Post-chess clarity, engine-assisted — built so tactical blunders get analyzed instead of ignored.",
    category: "Client-Side WASM / Systems",
    status: "Database Ready (v1.0.0 / v1.0.1 Docs)",
    statusType: "ready",
    techStack: ["TypeScript", "React 19", "Vite", "Stockfish 16 WASM", "Web Workers", "SharedArrayBuffer", "chess.js", "Tailwind CSS"],
    githubUrl: "https://github.com/vaibhv19/Check-Mate-Analyse",
    demoUrl: "https://checkmate.vaibhv19.dev",
    coreNarrative:
      "CheckMate proves an interactive chess analysis workbench requires zero backend servers, subscriptions, or telemetry. Running Stockfish 16 at full speed directly inside the browser depended entirely on solving the browser threading model without degrading UI responsiveness.",
    architecturalPivots: [
      "Thread Isolation: Stockfish WASM executes in a dedicated Web Worker, streaming UCI commands via postMessage while preserving 60fps main UI responsiveness.",
      "Cross-Origin Isolation (The Core Obstacle): SharedArrayBuffer multithreading was blocked by modern browsers by default. Resolved by configuring COOP ('same-origin') and COEP ('require-corp') HTTP headers on Vercel.",
      "Queue Dominance: Rapid navigation through game moves would queue up stale evaluations; implemented an immediate UCI 'stop' signal on every FEN state transition.",
      "Deliberate Aesthetic Trade-off: Decided against decorative UI polish passes in favor of functional clarity and engine reliability."
    ],
    verifiedEvidence: [
      { tag: "REPO: vercel.json", label: "COOP/COEP Headers", citation: "Commit ea74c3e enables multithreading WASM acceleration via headers" },
      { tag: "REPO: SYSTEM_ARCHITECTURE.md", label: "Worker Pipeline", citation: "Dedicated Web Worker UCI message pump and evaluation queue" },
      { tag: "REPO: CHANGELOG.md", label: "Release Sequence", citation: "v1.0.0 released 2026-07-01; v1.0.1 docs upgrade on 2026-07-28" },
      { tag: "REPO: package.json", label: "Zero Backend Verification", citation: "100% frontend TypeScript; zero Spring Boot or Java dependencies in tree" }
    ],
    openInquiries: [
      "Was the project triggered by a specific chess.com paywall frustration, or simply curiosity about browser WASM capabilities?",
      "Were the COOP/COEP isolation constraints anticipated from initial planning or discovered during Vercel deployment?"
    ],
    claimsAvoided: [
      "Never claim multi-threading benchmark speedups without published micro-benchmarks.",
      "Never claim the UI is heavily polished; intentional functional minimalism was the recorded design decision."
    ]
  },
  {
    id: "trajectory",
    number: "02",
    title: "Trajectory",
    subtitle: "Organic Scope Evolution & The True Cost of Building for Real",
    tagline: "Started as a spreadsheet fix and ended up needing its own AWS bill.",
    category: "Full-Stack Enterprise Systems",
    status: "Database Ready (v1.0.0 / v1.0.1 Docs)",
    statusType: "ready",
    techStack: ["Java 21", "Spring Boot 3.3.1", "Spring AI", "PostgreSQL 16", "AWS EC2 / RDS / S3", "Docker Compose", "React 19", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/vaibhv19/Trajectory",
    demoUrl: "https://trajectory.vaibhv19.dev",
    coreNarrative:
      "Trajectory documents the engineering reality of a personal tool that outgrew its original boundaries. What started as an Excel replacement for tracking job applications expanded organically into an enterprise career operating system requiring JWT auth rotation, S3 resume versioning, Groq LLM parsing, scheduled cron daemons, and self-hosted CI/CD.",
    architecturalPivots: [
      "Organic Expansion vs Upfront Spec: The expansive architecture was not pre-planned; each capability emerged from recognizing the concrete limitations of spreadsheet cells.",
      "Dual-Token Auth: Implemented 24h JWT access tokens with 7-day refresh token rotation in PostgreSQL, paired with a MockOAuth2RedirectFilter for local offline development.",
      "Asynchronous Ingestion: Groq Cloud (Llama 3) integrated via Spring AI for unstructured job description extraction, with a regex fallback when offline.",
      "Infrastructure Reality: Moved from local containers to an AWS EC2 instance (Ubuntu 24.04), AWS RDS PostgreSQL, AWS S3 buckets, and a self-hosted GitHub Actions runner."
    ],
    verifiedEvidence: [
      { tag: "CONVERSATION", label: "Scope Evolution Confirmed", citation: "Confirmed organic growth; compressed git commits reflect AI-assisted execution cadence" },
      { tag: "REPO: application.yml", label: "Token Lifetimes", citation: "Access token 86,400,000ms (24h) and refresh token 604,800,000ms (7 days)" },
      { tag: "REPO: DESIGN.md", label: "Editorial Anti-Patterns", citation: "Explicit rules rejecting generic AI glows, uniform grids, and template card clutter" },
      { tag: "REPO: README.md", label: "Production Infrastructure", citation: "Nginx reverse proxy, Certbot SSL timers, and Virtual Threads enabled in Spring Boot" }
    ],
    openInquiries: [
      "What exact recurring data error in the personal spreadsheet triggered the decision to write custom software?",
      "What technical trade-offs motivated the planned infrastructure migration from AWS EC2 to Oracle Cloud VM?"
    ],
    claimsAvoided: [
      "Never claim a Kanban drag-and-drop board exists; the applications view is an audit-tracked sortable data table.",
      "Never claim the comprehensive system was mapped out on day one; scope growth was organic and iterative."
    ]
  },
  {
    id: "conclave",
    number: "03",
    title: "Conclave",
    subtitle: "Multi-Agent Consensus & The Reality of Local LLM Inference",
    tagline: "Models arguing in a single structured room instead of eight disconnected browser tabs.",
    category: "Distributed Systems & AI",
    status: "Database Ready (v1.0.0 Architecture)",
    statusType: "ready",
    techStack: ["Java 21", "Spring Boot 3.3.1", "Spring AI", "Ollama (Llama 3, Mistral, Gemma)", "STOMP WebSocket", "PostgreSQL", "React 19", "Zustand"],
    githubUrl: "https://github.com/vaibhv19/Conclave",
    coreNarrative:
      "Conclave addresses the 'context tax' of manually copying conversation fragments across separate AI tools. Instead of disconnected browser tabs, multiple LLMs debate within a synchronized STOMP WebSocket room. The turning point was an architectural migration from cloud APIs to 100% local Ollama inference — paired with the honest real-world caveat that running multiple local models causes consumer hardware thermal limits.",
    architecturalPivots: [
      "Three-Stage Provider Pivot: Began with cloud API adapters, shifted to mock clients to eliminate cost, and finalized on 100% real local Ollama models (Llama 3, Mistral, Gemma).",
      "Model Adapter Redefinition: Because local Ollama unifies the REST wire format, the adapter layer's responsibility pivoted from translating JSON wire schemas to assembling model-specific prompt tokens (Llama header tags, Mistral [INST] tags).",
      "Concurrency & Intervention: PostgreSQL SELECT FOR UPDATE pessimistic write locks prevent race conditions when a human observer interrupts an ongoing automated multi-turn debate.",
      "Context Janitor Service: Automated conversation history summarization to protect local models from token window exhaustion."
    ],
    verifiedEvidence: [
      { tag: "REPO: CHANGELOG.md", label: "Ollama Migration", citation: "Commit 702c6c7 records migration to 100% local inference architecture" },
      { tag: "REPO: Docs/Learning/03", label: "Model Adapter Interface", citation: "ModelAdapter interface with toModelFormat() and fromModelFormat() implementations" },
      { tag: "REPO: CHANGELOG.md", label: "Pessimistic Locking", citation: "PipelineManager uses SELECT FOR UPDATE locking for turn-taking integrity" },
      { tag: "CONVERSATION", label: "Honest Thermal Caveat", citation: "Acknowledged thermal throttling on consumer laptops when running multi-model debates" }
    ],
    openInquiries: [
      "Does Conclave share direct codebase lineage with the earlier 'Roundtable' conceptual exploration?",
      "What is the practical concurrent model threshold before thermal throttling impacts response latency?"
    ],
    claimsAvoided: [
      "Never claim cloud APIs (OpenAI/Claude) or test mocks are used in the final version; the implementation is 100% local Ollama.",
      "Never claim daily personal usage; consumer hardware thermal constraints make frequent sessions impractical."
    ]
  },
  {
    id: "phoenix",
    number: "04",
    title: "Phoenix",
    subtitle: "Self-Healing RAG Engine & The Confidence Score Ceiling",
    tagline: "A hybrid RAG engine that shows its retrieval score math instead of bluffing when it's unsure.",
    category: "Cognitive Architecture / RAG",
    status: "Under Investigation (CS Ceiling Analysis)",
    statusType: "investigating",
    techStack: ["Python 3.11", "FastAPI", "PostgreSQL + pgvector", "SentenceTransformers", "BM25 Okapi", "FlashRank Cross-Encoder", "Java 21", "Spring Boot", "React 19"],
    githubUrl: "https://github.com/vaibhv19/Phoenix",
    coreNarrative:
      "Phoenix was founded on a strict cognitive principle: the system must know when it does not know. Standard vector RAG fails on exact alphanumeric configuration keys and hallucinates over weak context. Phoenix implements a 4-tier fallback state machine and exposes raw mathematical reasoning traces — accompanied by an intriguing unresolved observation where composite confidence scores plateau around 85%.",
    architecturalPivots: [
      "Dual-Backend Division: Python FastAPI handles embedding, hybrid search, and cross-encoder reranking; Spring Boot gateway handles tenant namespacing and document management (suggested by LLMs during planning).",
      "Hybrid Retrieval Fusion: Parallel dense vector search (all-MiniLM-L6-v2 via pgvector HNSW) and sparse lexical search (BM25 Okapi) fused with alpha weighting (0.7 vector / 0.3 keyword).",
      "4-Tier Fallback Cascade: Green (direct generation) -> Yellow (HyDE query rewrite) -> Orange (FlashRank Cross-Encoder reranking) -> Red (clarification question generation without hallucinating).",
      "Visual Reasoning Trace: A frontend inspection drawer displaying raw cosine similarity, BM25 agreement ratio, and routing transitions for full observability."
    ],
    verifiedEvidence: [
      { tag: "REPO: Docs/Learning", label: "Scoring Formula", citation: "CS = 0.6 * MaxSim + 0.4 * Agreement (discrete intersection metric)" },
      { tag: "REPO: Fallback_Strategies.md", label: "4 Fallback Tiers", citation: "Green (>=0.75), Yellow (0.50-0.75), Orange (0.35-0.50), Red (<0.35)" },
      { tag: "REPO: commit cebdc3a", label: "HNSW Vector Indexes", citation: "Applied database migration adding pgvector HNSW acceleration" },
      { tag: "CONVERSATION", label: "LLM Split Architecture", citation: "Architecture dividing Java gateway from Python ML service originated from LLM consultation" }
    ],
    openInquiries: [
      "Did the ~85% confidence score ceiling resolve to a mathematical property of discrete BM25 agreement, or a calibration defect?",
      "Were the automated benchmark evaluation suites (test_sensitivity.py) formally executed and recorded?"
    ],
    claimsAvoided: [
      "Never claim 100% Hit Rate @ 1 benchmark success without verified test execution logs on current code.",
      "Never claim the confidence metric is perfectly calibrated while the ~85% ceiling anomaly remains unresolved."
    ]
  },
  {
    id: "email-job-scheduler",
    number: "05",
    title: "Email Job Scheduler",
    subtitle: "High-Throughput Distributed Queues Under 48-Hour Constraint",
    tagline: "A distributed, multi-service email scheduling pipeline built under an intensive two-day constraint.",
    category: "Distributed Queues & Worker Systems",
    status: "Database Ready (v1.0.0 Architecture)",
    statusType: "ready",
    techStack: ["Node.js 22", "Express", "TypeScript", "BullMQ", "Redis 7", "PostgreSQL 16", "Elasticsearch", "Caddy", "Nginx", "React 18", "Tailwind CSS"],
    githubUrl: "https://github.com/vaibhv19/Email-Job-Scheduler",
    demoUrl: "https://email-job-scheduler.vaibhv19.dev",
    coreNarrative:
      "Built as a high-stakes, 48-hour hiring assignment requiring 5 coordinated services, BullMQ concurrency, and 120+ verified requirements. Despite receiving a hiring rejection, the engineering foundation was rigorously tested, debranded, and transformed into an open-source demonstration of resilient queue mechanics.",
    architecturalPivots: [
      "Monorepo Workspaces: Structured into apps/api, apps/worker, apps/web, and modular internal packages (packages/db, packages/redis, packages/shared).",
      "Idempotent Worker Queue: BullMQ with Redis Lua rate-limiting scripts enforcing per-sender dispatch windows and graceful crash recovery.",
      "Observability & Search: Bull Board dashboard for queue introspection, Elasticsearch for message full-text query, and Slack quota exhaustion webhooks.",
      "Post-Submission Debranding: Removed all assignment branding and reviewer access tokens, repurposing the codebase as a standalone distributed systems project."
    ],
    verifiedEvidence: [
      { tag: "REPO: package.json", label: "Monorepo Workspaces", citation: "Root workspaces configuring 3 applications and 3 shared internal packages" },
      { tag: "REPO: commit 151ceba9", label: "Debranding Pass", citation: "Comprehensive commit removing assignment branding and reviewer credentials" },
      { tag: "REPO: docs/requirements", label: "120-Point Audit", citation: "Completed 10-phase requirement matrix verified across 48-hour development window" },
      { tag: "CONVERSATION", label: "Rejection Context Confirmed", citation: "Transparently records assignment submission, rejection outcome, and subsequent portfolio pivot" }
    ],
    openInquiries: [
      "Is the production deployment at email-job-scheduler.vaibhv19.dev currently live or a reserved configuration?",
      "Which specific distributed architecture decisions were developer choices vs explicitly mandated by the assignment prompt?"
    ],
    claimsAvoided: [
      "Never conceal the hiring assignment origin or the eventual rejection result; the resilience of the engineering under time pressure is the real story.",
      "Never claim active enterprise production usage beyond verified sandbox environments."
    ]
  },
  {
    id: "1nfinity",
    number: "06",
    title: "1nfinity.online",
    subtitle: "Commercial Agency Platform & Restraint Over Decoration",
    tagline: "High-credibility digital presence engineered from scratch for an influencer marketing agency.",
    category: "Commercial Client Work",
    status: "Database Ready (Live Production)",
    statusType: "ready",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Resend API", "CSS Keyframes", "Vercel"],
    demoUrl: "https://1nfinity.online",
    coreNarrative:
      "A commercial client build authored entirely from scratch by Vaibhav (with the sole exception of the provided logo). Guided by an uncompromising 'Restraint Over Decoration' philosophy that rejected generic AI styling tropes, the project achieved a 99/92 Lighthouse performance rating while delivering a verified serverless email pipeline.",
    architecturalPivots: [
      "Complete Design Ownership: Designed and coded all layouts, typography hierarchies (Clash Display / Inter), and responsive systems independently from scratch.",
      "Anti-Overdesign Correction: An explicit pass dedicated to stripping away template cards, floating blobs, and purple gradients to maintain editorial gravitas.",
      "Founder's Strategic Pivot: Implemented the client founder's business decision to remove fixed packages/pricing in favor of bespoke influencer matchmaking positioning.",
      "Performance Safeguards: Desktop-only 4-second branded entrance sequence with ESC bypass; mobile devices skip the intro entirely to protect Core Web Vitals (LCP)."
    ],
    verifiedEvidence: [
      { tag: "CONVERSATION", label: "Design Ownership Confirmed", citation: "Vaibhav confirmed designing and developing the entire website from scratch (except logo)" },
      { tag: "REPO: commit 62012c7", label: "Packages Removal", citation: "Deactivated PackagesGrid component following client founder's strategic positioning change" },
      { tag: "REPO: README.md", label: "Lighthouse Audit", citation: "Documented 99 Desktop / 92 Mobile performance with zero layout shift (CLS 0)" },
      { tag: "REPO: app/api/contact", label: "Serverless Email Pipeline", citation: "Server-side Resend SDK integration with HTML sanitation and validation" }
    ],
    openInquiries: [
      "Do the /portfolio and /case-studies client sub-routes contain active client content or exist as placeholders?",
      "What is the current operational ownership of the client Vercel project and production repository?"
    ],
    claimsAvoided: [
      "Never claim 1NFINITY is Vaibhav's personal agency; it was built for client college mates.",
      "Never invent unverified business conversion metrics, visitor analytics, or lead revenue."
    ]
  }
];

export default function CaseStudyPage() {
  const [expandedId, setExpandedId] = useState<string | null>("checkmate");

  const toggleDossier = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Editorial Header */}
      <div className="mb-14 border-b border-white/10 pb-12">
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#E8913A] font-semibold mb-3">
          <FileCode2 className="w-4 h-4 text-[#E8913A]" />
          <span>01 / ARCHIVE & EVIDENCE LAYER</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F4EFE6] tracking-tight mb-4">
          Engineering Case Studies
        </h1>
        <p className="max-w-3xl text-base sm:text-lg text-[#9E9A91] leading-relaxed mb-8">
          The verified premise and evidence layer behind six major portfolio projects. Every insight is sourced directly from git commit logs, production configuration files, and verified runtime architecture — strictly distinguishing confirmed engineering facts from open technical inquiries.
        </p>

        {/* Verification Standards Badges */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            [REPO] Codebase Verified
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            [CONVERSATION] Confirmed Context
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
            <HelpCircle className="w-3.5 h-3.5" />
            [CONFIRM] Open Inquiry
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            [CATALOG] Catalog Specification
          </span>
        </div>
      </div>

      {/* Editorial Methodology Banner */}
      <div className="mb-12 p-5 sm:p-6 rounded-md bg-[#111622]/90 border border-white/10 backdrop-blur-sm">
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded bg-[#E8913A]/10 border border-[#E8913A]/30 text-[#E8913A] shrink-0 mt-0.5">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-semibold text-[#F4EFE6] mb-1">
              Methodology of Authentic System Records
            </h2>
            <p className="text-xs sm:text-sm text-[#9E9A91] leading-relaxed">
              Standard engineering case studies often suffer from post-hoc revisionism — attributing upfront mastery to what was actually an organic or messy discovery process. This archive records the actual story: the architectural pivots that happened mid-flight, the thermal bottlenecks of consumer hardware, the honest rejection emails, and the technical metrics that plateaued. Full-length analytical write-ups are being authored directly from this verified premise layer.
            </p>
          </div>
        </div>
      </div>

      {/* Case Studies Dossiers List */}
      <div className="space-y-6">
        {DOSSIERS.map((dossier) => {
          const isExpanded = expandedId === dossier.id;

          return (
            <article
              key={dossier.id}
              id={dossier.id}
              className={`rounded-md border transition-all duration-300 ${
                isExpanded
                  ? "bg-[#111622]/95 border-[#E8913A]/60 shadow-xl shadow-black/40"
                  : "bg-[#111622]/70 border-white/10 hover:border-white/20"
              }`}
            >
              {/* Card Header / Summary Clickable Area */}
              <button
                type="button"
                onClick={() => toggleDossier(dossier.id)}
                className="w-full text-left p-6 sm:p-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8913A]/60"
                aria-expanded={isExpanded}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#E8913A] px-2 py-0.5 rounded bg-[#E8913A]/10 border border-[#E8913A]/20">
                      CASE {dossier.number}
                    </span>
                    <span className="text-xs font-mono text-[#9E9A91]">
                      {dossier.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${
                        dossier.statusType === "ready"
                          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                          : "bg-amber-500/10 border-amber-500/30 text-amber-400"
                      }`}
                    >
                      {dossier.status}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#9E9A91] transition-transform duration-300 ${
                        isExpanded ? "rotate-180 text-[#E8913A]" : ""
                      }`}
                    />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#F4EFE6] tracking-tight mb-1">
                  {dossier.title}
                </h3>
                <p className="text-sm font-medium text-[#E8913A]/90 mb-3">
                  {dossier.subtitle}
                </p>
                <p className="text-sm text-[#9E9A91] italic leading-relaxed line-clamp-2">
                  &ldquo;{dossier.tagline}&rdquo;
                </p>
              </button>

              {/* Collapsible Deep-Dive Dossier Body */}
              {isExpanded && (
                <div className="px-6 pb-8 sm:px-8 border-t border-white/10 pt-6 animate-in fade-in duration-300">
                  {/* Tech Stack Pills */}
                  <div className="mb-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#9E9A91] mb-2.5">
                      Verified Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {dossier.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded bg-black/40 border border-white/10 text-xs font-mono text-[#D4CEC4]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Core Premise */}
                  <div className="mb-6 p-4 rounded bg-black/30 border border-white/5">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#E8913A] mb-1.5">
                      Core Narrative & Premise
                    </h4>
                    <p className="text-sm text-[#D4CEC4] leading-relaxed">
                      {dossier.coreNarrative}
                    </p>
                  </div>

                  {/* Architectural Pivots */}
                  <div className="mb-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#9E9A91] mb-3">
                      Architectural Pivots & Engineering Decisions
                    </h4>
                    <div className="space-y-2.5">
                      {dossier.architecturalPivots.map((pivot, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D4CEC4]">
                          <span className="text-[#E8913A] font-mono mt-0.5 select-none">▸</span>
                          <span className="leading-relaxed">{pivot}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Evidence Ledger & Open Inquiries Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Verified Evidence */}
                    <div className="p-4 rounded bg-emerald-950/20 border border-emerald-500/20">
                      <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400 mb-3">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Verified Evidence Ledger</span>
                      </div>
                      <div className="space-y-3">
                        {dossier.verifiedEvidence.map((item, i) => (
                          <div key={i} className="text-xs">
                            <div className="font-mono text-emerald-300 font-semibold mb-0.5">
                              {item.tag} — {item.label}
                            </div>
                            <div className="text-[#9E9A91] leading-normal">{item.citation}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Open Inquiries & Boundaries */}
                    <div className="p-4 rounded bg-amber-950/20 border border-amber-500/20">
                      <div className="flex items-center gap-2 text-xs font-mono font-semibold text-amber-400 mb-3">
                        <AlertTriangle className="w-4 h-4" />
                        <span>Open Inquiries & Integrity Limits</span>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <div className="font-mono text-xs text-amber-300 font-medium mb-1">
                            Pending Inquiry:
                          </div>
                          <ul className="list-disc list-inside space-y-1 text-xs text-[#9E9A91]">
                            {dossier.openInquiries.map((q, i) => (
                              <li key={i} className="leading-relaxed">{q}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="font-mono text-xs text-amber-300 font-medium mb-1">
                            Claims Deliberately Avoided:
                          </div>
                          <ul className="list-disc list-inside space-y-1 text-xs text-[#9E9A91]">
                            {dossier.claimsAvoided.map((c, i) => (
                              <li key={i} className="leading-relaxed">{c}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Links / Next Steps */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-4">
                      {dossier.githubUrl && (
                        <a
                          href={dossier.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#D4CEC4] hover:text-[#E8913A] transition-colors"
                        >
                          <GitCommit className="w-3.5 h-3.5" />
                          <span>View Codebase & Commits</span>
                          <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" />
                        </a>
                      )}
                      {dossier.demoUrl && (
                        <a
                          href={dossier.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#D4CEC4] hover:text-[#E8913A] transition-colors"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Live System</span>
                          <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" />
                        </a>
                      )}
                    </div>
                    <span className="text-xs font-mono text-[#9E9A91]/80">
                      Long-form write-up in progress
                    </span>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* Bottom Editorial Callout */}
      <div className="mt-16 p-8 rounded-md bg-[#111622]/70 border border-white/10 text-center">
        <h3 className="text-lg font-bold text-[#F4EFE6] mb-2">
          Looking for custom architectural teardowns?
        </h3>
        <p className="text-sm text-[#9E9A91] max-w-xl mx-auto mb-6 leading-relaxed">
          If you are reviewing my engineering background for technical roles or consulting opportunities, feel free to reach out to discuss any of these systems directly.
        </p>
        <Link
          href="/start-conversation"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#E8913A] hover:bg-[#F0A04B] text-black font-semibold text-sm transition-colors"
        >
          <span>Start a Conversation</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
