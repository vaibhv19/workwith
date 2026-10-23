import { CaseStudyNarrative } from "./types";

export const phoenixNarrative: CaseStudyNarrative = {
  slug: "phoenix",
  number: "03",
  title: "Phoenix",
  subtitle: "Self-Healing RAG Engine & Reasoning Trace Observability",
  period: "July 2026",
  date: "2026-07-28",
  category: "Cognitive Search & Retrieval-Augmented Generation",
  techFocus: "Python FastAPI · pgvector HNSW · BM25 Okapi · FlashRank · Spring Boot",
  status: "Architecture Verified",
  image: "/images/case-studies/phoenix-console.png",
  excerpt: "A hybrid RAG engine combining dense vector search and BM25 Okapi lexical matching, backed by a 4-tier fallback state machine that exposes mathematical confidence scores instead of bluffing.",
  metaDescription: "In-depth engineering retrospective of Phoenix: hybrid vector and BM25 retrieval, the mathematical confidence score formula, a 4-tier self-healing fallback cascade, and reasoning trace inspection.",
  liveUrl: undefined,
  repoUrl: "https://github.com/vaibhv19/phoenix",
  role: "Sole Architect & Search Systems Engineer",
  evidenceTags: [
    { label: "Verified Dual Backend Code", type: "repo" },
    { label: "CS Formula & Fusion Weights", type: "repo" },
    { label: "4-Tier Cascade State Machine", type: "repo" },
    { label: "Confidence Ceiling Documented", type: "conversation" },
  ],
  quickMetrics: [
    { label: "Hybrid Search Fusion", value: "0.7 / 0.3", detail: "Dense Vector (all-MiniLM-L6-v2) + BM25 Okapi" },
    { label: "Vector Indexing", value: "pgvector HNSW", detail: "m=16, ef_construction=64 in PostgreSQL" },
    { label: "Fallback Cascade", value: "4 Tiers", detail: "Direct -> HyDE -> Cross-Encoder -> Clarify" },
    { label: "Confidence Metric", value: "Composite CS", detail: "0.6 * MaxSim + 0.4 * Agreement Ratio" },
  ],
  sections: [
    {
      id: "cognitive-invariant-and-the-problem",
      title: "1. The Cognitive Invariant: Knowing When You Don't Know",
      lead: "Why traditional vector RAG bluffs, and why technical documentation breaks embeddings.",
      content: [
        "Standard Retrieval-Augmented Generation (RAG) pipelines suffer from a fundamental cognitive flaw: they treat retrieval as a black box that always succeeds. Even when a vector search returns irrelevant chunks with low cosine similarity, the LLM is prompted with that weak context and compelled to generate an answer—frequently inventing convincing hallucinations.",
        "Phoenix was architected around a non-negotiable cognitive invariant: **The system must know when it does not know.** It must quantify its own retrieval certainty mathematically, execute self-healing fallback strategies when confidence is marginal, and explicitly refuse to hallucinate when context is absent.",
        "The choice of domain—Spring Boot and enterprise configuration documentation—was deliberate. Technical documentation contains exact alphanumeric symbols such as `spring.jpa.hibernate.ddl-auto` or `server.tomcat.threads.max`. Modern subword tokenizers (WordPiece, BPE) fracture these dot-separated strings into fragmented subwords, degrading dense vector similarity. Conversely, sparse lexical search (BM25 Okapi) indexes these exact terms with surgical precision.",
      ],
      callout: {
        type: "invariant",
        title: "The Fallback Invariant",
        text: "The generation stage must never receive context that has not cleared an explicit mathematical threshold. If the multi-tier recovery pipeline fails to elevate confidence above 0.35, the system aborts generation and outputs targeted clarification questions to the user.",
      },
    },
    {
      id: "dual-backend-split",
      title: "2. Dual-Backend Architecture: Java Spring & Python FastAPI",
      lead: "Allocating responsibilities across enterprise boundaries and ML runtimes.",
      content: [
        "Phoenix implements a polyglot dual-backend split (an architectural division suggested by LLMs during planning):",
        "1. **Java 21 / Spring Boot Gateway:** Handles enterprise boundaries—tenant management, user authentication, role-based document access controls, and REST API routing for client applications.",
        "2. **Python / FastAPI ML Engine:** Executes compute-heavy machine learning workloads—vector embeddings (`all-MiniLM-L6-v2`), BM25 Okapi indexing, Hypothetical Document Embeddings (HyDE), and FlashRank Cross-Encoder reranking.",
      ],
      diagram: {
        title: "Phoenix Dual-Backend Retrieval & Generation Pipeline",
        caption: "Queries flow from Spring Gateway into FastAPI ML Engine, executing parallel hybrid search against pgvector HNSW and BM25 before entering the 4-tier fallback state machine.",
        ascii: `User Query ---> [ Spring Boot 21 Gateway ] (Auth, Tenancy, Routing)
                              |
                     POST /api/v1/search (Internal)
                              |
        +---------------------v-----------------------------------+
        | Python FastAPI ML Engine                                |
        |                                                         |
        |  +-------------------------+  +----------------------+  |
        |  | Dense Vector Search     |  | Sparse Lexical Match |  |
        |  | (all-MiniLM-L6-v2)      |  | (BM25 Okapi)         |  |
        |  +------------+------------+  +-----------+----------+  |
        |               |                           |             |
        |               v                           v             |
        |         pgvector HNSW                In-Memory BM25     |
        |         (Cosine Sim)                 (Term Frequency)   |
        |               |                           |             |
        |               +-------------+-------------+             |
        |                             |                           |
        |                             v                           |
        |               [ Score Fusion & Composite CS ]           |
        |               CS = 0.6*MaxSim + 0.4*Agreement           |
        |                             |                           |
        |            +----------------v---------------+           |
        |            |   4-Tier Fallback Cascade     |           |
        |            |   Green  (>=0.75): Direct Gen  |           |
        |            |   Yellow (0.50-0.75): HyDE Exp |           |
        |            |   Orange (0.35-0.50): FlashRank|           |
        |            |   Red    (<0.35): Clarify     |           |
        |            +--------------------------------+           |
        +---------------------------------------------------------+`,
      },
    },
    {
      id: "hybrid-fusion-and-cs-formula",
      title: "3. Hybrid Score Fusion & The Confidence Scoring Formula",
      lead: "Merging dense semantic spaces with exact lexical matching.",
      content: [
        "Candidate documents are retrieved in parallel from pgvector (using an HNSW index configured with `m=16`, `ef_construction=64`) and BM25 Okapi. Their scores are normalized and fused using an established weighting parameter:",
        "**`Score_final = (0.7 * Sim_vector) + (0.3 * Score_bm25_norm)`**",
        "To determine whether the retrieved set is trustworthy enough for direct answer generation, Phoenix computes a composite **Confidence Score (CS)**:",
        "**`CS = (0.6 * MaxSim) + (0.4 * Agreement)`**",
        "Where `MaxSim` is the highest raw cosine similarity in the top retrieved candidates, and `Agreement` measures the discrete set intersection between vector search and lexical search:",
        "**`Agreement = |Top3_Vector ∩ Top5_BM25| / 3`**",
        "If vector search and keyword search both surface the exact same documents in their top ranks, the agreement ratio approaches 1.0, boosting overall confidence. If the two search modalities return disjoint sets, confidence drops sharply, triggering fallback intervention.",
      ],
    },
    {
      id: "four-tier-fallback-cascade",
      title: "4. The 4-Tier Fallback Cascade State Machine",
      lead: "A self-healing cascade that progressively escalates retrieval effort.",
      content: [
        "When a query is evaluated, its composite CS routes it into a four-stage state machine:",
      ],
      table: {
        caption: "Phoenix 4-Tier Fallback State Machine Specifications",
        headers: ["Tier", "CS Range", "Action Executed", "Target Objective"],
        rows: [
          ["Tier 1: Green", "CS >= 0.75", "Direct Context Injection", "High confidence; immediately prompt LLM for answer generation."],
          ["Tier 2: Yellow", "0.50 <= CS < 0.75", "HyDE Query Expansion", "Generate hypothetical document answer to bridge vocabulary mismatch."],
          ["Tier 3: Orange", "0.35 <= CS < 0.50", "FlashRank Cross-Encoder Reranking", "Pass candidates through cross-encoder (Recovery Threshold = 0.50)."],
          ["Tier 4: Red", "CS < 0.35", "Hallucination Abort & Clarification", "Refuse generation; output specific clarification prompts to user."],
        ],
      },
      codeBlock: {
        title: "Fallback State Machine Routing in Python FastAPI",
        language: "python",
        code: `def execute_retrieval_cascade(query: str, docs: List[Document]) -> SearchResult:
    max_sim, agreement, cs = calculate_confidence_score(query, docs)
    trace = ReasoningTrace(raw_max_sim=max_sim, agreement_ratio=agreement, initial_cs=cs)

    if cs >= 0.75:
        trace.tier_reached = "TIER_1_GREEN"
        return generate_answer(query, docs[:3], trace)

    elif cs >= 0.50:
        trace.tier_reached = "TIER_2_YELLOW"
        expanded_query = generate_hyde_expansion(query)
        expanded_docs = hybrid_search(expanded_query)
        return generate_answer(query, expanded_docs[:3], trace)

    elif cs >= 0.35:
        trace.tier_reached = "TIER_3_ORANGE"
        reranked_docs = flashrank_rerank(query, docs)
        new_cs = evaluate_reranked_confidence(reranked_docs)
        if new_cs >= 0.50:
            return generate_answer(query, reranked_docs[:3], trace)
        # Recovery failed; drop into Red
        return generate_clarification_response(query, trace)

    else:
        trace.tier_reached = "TIER_4_RED"
        return generate_clarification_response(query, trace)`,
      },
    },
    {
      id: "reasoning-trace-and-anomalies",
      title: "5. Reasoning Trace Observability & The ~85% CS Plateau",
      lead: "Exposing mathematical internals and confronting discrete metric limitations.",
      content: [
        "In production RAG systems, debugging why an engine gave a bad answer requires reconstructing the retrieval pipeline. Phoenix features an inspection drawer on the frontend called the **Visual Reasoning Trace**.",
        "For every query, the drawer displays the raw cosine score, the BM25 frequency values, the exact set intersection members, the tier transitions, and execution latency for each fallback stage.",
        "During extensive manual testing, an intriguing anomaly was documented: **Composite Confidence Scores rarely exceeded ~85%**, even on queries with perfect answers.",
        "Analysis revealed that this is a structural property of the discrete Agreement formula: because `Agreement` is divided by 3, missing just one document in the intersection drops agreement from 1.0 to 0.66, multiplying against the 0.4 weight to cap the score near 0.86. Documenting this mathematical plateau reflects real engineering observation rather than glossing over metric quirks.",
      ],
      callout: {
        type: "caveat",
        title: "Disclosed Metric Limitation",
        text: "The 100% Hit Rate @ 1 benchmark documented in early design specifications was a target metric in the evaluation suite design, not a verified production benchmark across large-scale external datasets. In real usage, the discrete step-function of the agreement ratio imposes a mathematical ceiling near 85%.",
      },
    },
  ],
  openQuestionsAndExclusions: [
    {
      question: "Was the language split (Java + Python) an upfront architectural decision?",
      resolutionOrLimitation: "Acknowledged in narrative. The dual-backend division was explicitly suggested by LLMs during planning, not an axiomatic initial constraint.",
    },
    {
      question: "Is the 100% Hit Rate @ 1 benchmark a confirmed live result?",
      resolutionOrLimitation: "Clarified in narrative as an evaluation target and design goal. The case study documents the verified mathematical behavior and the observed ~85% plateau rather than asserting unconfirmed 100% benchmarks.",
    },
  ],
};
