export interface CaseStudy {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  period: string;
  date: string; // YYYY-MM-DD
  category: string;
  techFocus: string;
  status: string;
  image?: string;
  excerpt: string;
  description: string;
  overview: string;
  keyDecisions: string[];
  tradeoffs: string[];
  currentStatus: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "1nfinity",
    number: "06",
    title: "1nfinity.online",
    subtitle: "Performance Budgets & Anti-Overdesign Correction",
    period: "October 2026",
    date: "2026-10-15",
    category: "Commercial Client Work",
    techFocus: "Next.js · Tailwind CSS · Resend · Core Web Vitals",
    status: "Production Live",
    image: "/images/case-studies/1nfinity-preview.webp",
    excerpt: "Bespoke agency web presence engineered from scratch under an uncompromising 'Restraint Over Decoration' philosophy, achieving 99/92 Lighthouse performance.",
    description: "A commercial client agency web platform designed and engineered from scratch (with the sole exception of the provided logo), rejecting generic AI styling tropes in favor of strict performance budgets and serverless email delivery.",
    overview: "Built for a creator and influencer marketing agency, the platform's core requirement was establishing authentic credibility and high performance without relying on template animations or visual bloat. The engineering was authored entirely from scratch, including custom design tokens, responsive typography hierarchies, and serverless contact pipelines.",
    keyDecisions: [
      "Restraint Over Decoration: Explicitly prohibited generic purple/blue glow blobs, floating card animations, and heavy animation libraries (no Framer Motion dependency).",
      "Founder's Strategic Repositioning: Implemented the client founder's business pivot to remove fixed package tables and reposition specifically as an influencer marketing agency.",
      "Desktop-Only Entrance Sequence: Configured the 4-second branded entrance animation to run strictly on desktop (>1024px) with ESC-key bypass, skipping mobile entirely to preserve Largest Contentful Paint (LCP).",
      "Serverless Email Pipeline: Integrated Resend SDK within a Next.js App Router route with HTML sanitization, field validation, and honeypot spam traps."
    ],
    tradeoffs: [
      "Removing Static Export: Converted from static export to serverless deployment to accommodate Next.js API routes for Resend email processing.",
      "Bypassing Animation Libraries: Custom CSS keyframes and cubic-bezier curves required manual engineering but eliminated third-party bundle weight."
    ],
    currentStatus: "Delivered to production at 1nfinity.online with documented 99 Desktop / 92 Mobile Lighthouse performance ratings."
  },
  {
    slug: "email-job-scheduler",
    number: "05",
    title: "Email Job Scheduler",
    subtitle: "Distributed Worker Queues Under 48-Hour Constraint",
    period: "October 2026",
    date: "2026-10-14",
    category: "Distributed Systems & Queues",
    techFocus: "Node.js · BullMQ · Redis Lua · PostgreSQL · Elasticsearch · Caddy",
    status: "Retrospective Verified",
    excerpt: "A multi-service distributed scheduling pipeline engineered under an intensive 48-hour turnaround constraint, exploring queue idempotency and crash recovery.",
    description: "A distributed multi-service scheduling and delivery system with BullMQ concurrency, Redis Lua rate limiters, Elasticsearch query indexing, and post-submission debranding.",
    overview: "Engineered as an intensive 48-hour hiring assignment requiring 5 coordinated microservices, 120+ verified specification points, and resilient worker mechanics. Following the evaluation outcome, the codebase underwent a debranding pass, removing assignment tokens to serve as an open-source demonstration of distributed queue architecture.",
    keyDecisions: [
      "Monorepo Architecture: Structured into apps/api, apps/worker, apps/web, and modular shared internal packages (packages/db, packages/redis, packages/shared).",
      "Atomic Rate-Limiting: Implemented Redis Lua scripts to enforce per-sender dispatch rate limits and sliding dispatch windows without race conditions.",
      "Crash Recovery & Idempotency: Utilized BullMQ atomic claim patterns and PostgreSQL status tracking to ensure zero duplicate dispatches during worker failure.",
      "Post-Submission Debranding: Removed all hiring assignment identifiers, reviewer credentials, and proprietary tags to establish clean standalone portfolio software."
    ],
    tradeoffs: [
      "48-Hour Execution Speed: Prioritized complete system resilience, test coverage, and documentation over non-essential UI decoration.",
      "Vite Over Full-Stack Framework: Selected React 18 + Vite for the frontend dashboard to maintain strict service isolation from the Express API."
    ],
    currentStatus: "Architecture fully verified; repository debranded and archived as a distributed systems case retrospective."
  },
  {
    slug: "conclave",
    number: "04",
    title: "Conclave",
    subtitle: "Multi-Agent Consensus & Local Inference Limits",
    period: "August 2026",
    date: "2026-08-02",
    category: "Local AI & Concurrency",
    techFocus: "Java 21 · Spring AI · Ollama (Llama 3/Mistral/Gemma) · STOMP WebSocket",
    status: "v1.0.0 Architecture",
    image: "/images/case-studies/conclave-live.png",
    excerpt: "Real-time multi-agent debate platform exploring local LLM consensus, documenting prompt adapter transformations alongside consumer hardware thermal ceilings.",
    description: "A meeting room platform orchestrating structured multi-LLM debates in a single WebSocket session, documenting the architectural migration from cloud APIs to 100% local Ollama inference.",
    overview: "Conclave addresses the 'context tax' and friction of manually copying conversation fragments across separate AI tools. Built on Java 21 and Spring AI, it explores how multiple language models can participate in structured sequential debate, negotiate consensus, and accept mid-flight human intervention.",
    keyDecisions: [
      "Migration to 100% Local Inference: Shifted from initial cloud API adapters to real local Ollama instances (Llama 3, Mistral, Gemma) to eliminate ongoing API token costs.",
      "Prompt Adapter Transformation: Because local Ollama unifies the REST HTTP format, the adapter layer pivoted from translating JSON wire formats to generating model-specific prompt tokens (Llama header tags vs Mistral [INST] tags).",
      "Pessimistic Concurrency Locking: Employed PostgreSQL SELECT FOR UPDATE write locks to ensure thread safety when a human observer pauses an active multi-turn pipeline.",
      "Context Janitor Service: Engineered automated conversation compression to safeguard smaller local models from token window exhaustion."
    ],
    tradeoffs: [
      "Consumer Hardware Thermal Limits: Running multiple concurrent local models pushes consumer laptop hardware to thermal throttling limits — an authentic constraint documented in the research.",
      "Execution Cadence: Local inference latency is significantly higher than cloud APIs, requiring clear streaming progress indicators over WebSockets."
    ],
    currentStatus: "v1.0.0 completed including UI redesign; preserved as a local AI orchestration case study."
  },
  {
    slug: "phoenix",
    number: "03",
    title: "Phoenix",
    subtitle: "Self-Healing RAG Engine & Reasoning Trace Observability",
    period: "July 2026",
    date: "2026-07-28",
    category: "Cognitive Architecture & RAG",
    techFocus: "Python FastAPI · pgvector HNSW · BM25 Okapi · FlashRank · Spring Boot",
    status: "Architecture Verified",
    image: "/images/case-studies/phoenix-console.png",
    excerpt: "Hybrid RAG engine with a 4-tier fallback state machine designed around transparent reasoning traces and knowing when retrieval confidence is insufficient.",
    description: "A hybrid retrieval engine combining dense vector search and sparse lexical search, featuring a 4-tier fallback state machine that exposes mathematical confidence scores instead of bluffing.",
    overview: "Standard vector RAG frequently fails on exact alphanumeric configuration keys and hallucinates over weak context. Phoenix implements a transparent cognitive architecture: it computes a composite confidence score, executes a multi-tier fallback cascade (HyDE expansion -> cross-encoder reranking -> clarification), and renders an audit trail for every query.",
    keyDecisions: [
      "Dual-Backend Split: Java Spring Boot handles tenant boundaries and document management, while Python FastAPI executes vector embedding, BM25 matching, and cross-encoder scoring.",
      "Hybrid Retrieval Fusion: Parallel dense vector search (all-MiniLM-L6-v2 via pgvector HNSW) and lexical matching (BM25 Okapi) fused with an alpha parameter (0.7 vector / 0.3 keyword).",
      "4-Tier Fallback Cascade: Direct generation (Green), HyDE query rewriting (Yellow), FlashRank Cross-Encoder reranking (Orange), and clarification question generation (Red).",
      "Visual Reasoning Trace: Frontend inspection drawer providing full observability into raw cosine similarity, agreement ratios, and fallback transitions."
    ],
    tradeoffs: [
      "The ~85% Confidence Score Plateau: Observed during manual testing that composite confidence scores rarely exceeded ~85% even on correct retrievals, documenting the discrete nature of BM25 intersection agreement.",
      "Dual Language Operational Complexity: Maintaining both Python and Java runtimes added deployment complexity in exchange for leveraging Python's ML ecosystem alongside Spring's security boundaries."
    ],
    currentStatus: "v1.0.0 architecture verified; documented in repository engineering guides."
  },
  {
    slug: "trajectory",
    number: "02",
    title: "Trajectory",
    subtitle: "Organic Scope Evolution & Enterprise Cloud Infrastructure",
    period: "July 2026",
    date: "2026-07-21",
    category: "Enterprise Full-Stack",
    techFocus: "Java 21 · Spring Boot 3.3.1 · AWS EC2/RDS/S3 · Groq LLM · JWT Rotation",
    status: "Production Deployed",
    excerpt: "The architectural reality of a personal tool that outgrew its spreadsheet boundaries, expanding into an enterprise career platform with cloud infrastructure.",
    description: "The evolution of a career operations platform originally conceived as a simple spreadsheet fix, organically expanding into dual-token auth rotation, S3 resume storage, Groq LLM parsing, and AWS production hosting.",
    overview: "Started as a replacement for an error-prone spreadsheet used to track job applications. Recognizing the recurring failure modes of spreadsheet cells, the project expanded organically into an enterprise career management platform requiring JWT rotation, S3 resume versioning, Groq LLM extraction, scheduled cron jobs, and production cloud infrastructure.",
    keyDecisions: [
      "Organic Scope Evolution: Confirmed organic expansion where each architectural layer (auth, storage, AI parsing, schedulers) emerged from concrete usage friction.",
      "Dual-Token JWT Rotation: Configured 24-hour access tokens and 7-day refresh token rotation stored in PostgreSQL, with mock OAuth filters for offline development.",
      "Unstructured Job Parsing: Integrated Groq Cloud (Llama 3) via Spring AI to extract requirements and skills from unstructured text, backed by regex fallbacks.",
      "Production Cloud Infrastructure: Deployed to an AWS EC2 Ubuntu instance with AWS RDS PostgreSQL, AWS S3 resume storage, Nginx reverse proxy, Certbot SSL timers, and a self-hosted GitHub Actions runner."
    ],
    tradeoffs: [
      "Production Complexity vs Simplicity: What started as a quick script grew to require Nginx configurations, Certbot timers, and a monthly AWS bill.",
      "Data Table vs Kanban Board: Chose a high-density, sortable data table with status history audit logs rather than a drag-and-drop Kanban interface."
    ],
    currentStatus: "v1.0.0 deployed in production at trajectory.vaibhv19.dev."
  },
  {
    slug: "checkmate",
    number: "01",
    title: "CheckMate",
    subtitle: "Local-First Stockfish 16 WASM & Cross-Origin Threading",
    period: "July 2026",
    date: "2026-07-01",
    category: "Client-Side WebAssembly",
    techFocus: "TypeScript · React 19 · Stockfish 16 WASM · Web Workers · COOP/COEP",
    status: "v1.0.0 Released",
    image: "/images/case-studies/checkmate-workbench.png",
    excerpt: "Local-first chess analysis workbench running Stockfish 16 entirely inside browser Web Workers with SharedArrayBuffer concurrency, requiring zero servers.",
    description: "A browser-based chess analysis workbench running a full Stockfish 16 engine entirely client-side via WebAssembly, requiring zero backend servers, subscriptions, or telemetry.",
    overview: "Built as a free, privacy-first alternative to platform subscription paywalls for chess engine analysis. The engineering bet was that running a full chess engine at acceptable speed in the browser is achievable if the threading model and cross-origin security headers are solved.",
    keyDecisions: [
      "Zero-Backend Architecture: Verified 100% client-side execution — zero server instances, zero databases, and zero move histories transmitted externally.",
      "Web Worker Thread Isolation: Stockfish WASM executes in a dedicated Web Worker, streaming UCI commands via postMessage while leaving the UI thread entirely free for 60fps rendering.",
      "Cross-Origin Isolation Headers: Configured COOP ('same-origin') and COEP ('require-corp') HTTP headers on Vercel to unlock SharedArrayBuffer multithreading support.",
      "Interrupt Dominance: Implemented immediate UCI 'stop' queue clearing on rapid position changes to prevent stale calculation backlog."
    ],
    tradeoffs: [
      "COOP/COEP Isolation Constraints: Strict cross-origin isolation headers prevent embedding third-party un-isolated iframes or external resources.",
      "Deliberate Aesthetic Minimalism: Chose functional clarity and engine responsiveness over decorative UI polish passes."
    ],
    currentStatus: "v1.0.0 released and active at checkmate.vaibhv19.dev; final target version achieved."
  }
];
