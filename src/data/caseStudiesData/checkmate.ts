import { CaseStudyNarrative } from "./types";

export const checkmateNarrative: CaseStudyNarrative = {
  slug: "checkmate",
  number: "01",
  title: "CheckMate",
  subtitle: "Local-First Stockfish 16 WASM & Cross-Origin Threading",
  period: "July 2026",
  date: "2026-07-01",
  category: "Client-Side WebAssembly & Concurrency",
  techFocus: "TypeScript · React 19 · Stockfish 16 WASM · Web Workers · COOP/COEP",
  status: "v1.0.0 Released",
  image: "/images/case-studies/checkmate-workbench.png",
  excerpt: "A browser-based chess analysis workbench running Stockfish 16 entirely inside Web Workers with SharedArrayBuffer concurrency, requiring zero backend compute or subscription paywalls.",
  metaDescription: "In-depth engineering case study of CheckMate: compiling Stockfish 16 to client-side WebAssembly, managing Web Worker queues over UCI, and configuring COOP/COEP headers for multithreaded browser execution.",
  liveUrl: "https://checkmate.vaibhv19.dev",
  repoUrl: "https://github.com/vaibhv19/checkmate",
  role: "Sole Creator & Lead Engineer (with open-source contribution for board flip)",
  evidenceTags: [
    { label: "Verified Repository Code", type: "repo" },
    { label: "Vercel Header Commit ea74c3e", type: "repo" },
    { label: "Centipawn Math Verified", type: "repo" },
    { label: "Zero-Backend Confirmed", type: "verified" },
  ],
  quickMetrics: [
    { label: "Backend Compute Cost", value: "$0.00", detail: "100% client-side WASM execution" },
    { label: "Engine Evaluation Depth", value: "18 Plies", detail: "Stockfish 16 Web Worker thread" },
    { label: "UI Thread Framerate", value: "60 FPS", detail: "UCI async communication isolation" },
    { label: "Cross-Origin Security", value: "COOP/COEP", detail: "Unlocks SharedArrayBuffer threading" },
  ],
  sections: [
    {
      id: "origin-and-premise",
      title: "1. Origin & The Subscription Problem",
      lead: "Why build a local-first chess engine workbench when commercial platforms already dominate?",
      content: [
        "Modern online chess platforms gate their deepest analysis tools behind recurring monthly subscriptions. For an active player studying openings or reviewing rapid games, running multi-line evaluations or exploring speculative variations on major commercial sites frequently hits paywalls, rate limits, or ad interruptions.",
        "From an engineering perspective, hosting centralized servers to run thousands of concurrent Stockfish evaluations is enormously expensive in CPU cycles and cloud infrastructure. But modern client hardware—even an average smartphone or laptop—possesses multi-core CPUs capable of running world-class chess evaluation locally.",
        "CheckMate was conceived around a strict architectural thesis: Can a web application deliver grandmaster-grade Stockfish 16 analysis directly inside the user's browser, maintaining 60 FPS UI responsiveness, with zero backend servers, zero subscriptions, and zero tracking?",
      ],
      callout: {
        type: "invariant",
        title: "Architectural Invariant: Zero Server Footprint",
        text: "The application must never transmit board positions, PGNs, or move histories to any backend server. All chess logic, FEN parsing, move validation, and neural engine evaluations must execute entirely within the client's browser runtime.",
      },
    },
    {
      id: "architecture-and-workers",
      title: "2. System Boundaries & The Web Worker Boundary",
      lead: "Decoupling heavyweight alpha-beta minimax searches from the browser's main render loop.",
      content: [
        "Stockfish is a massive C++ program. Compiling it to WebAssembly (WASM) allows it to run in the browser, but executing it on the JavaScript main thread is an instant disaster: calculating 18 plies deep consumes 100% of a CPU core, completely freezing React state updates, canvas rendering, and user input.",
        "CheckMate enforces a strict boundary between UI rendering and engine execution. The entire Stockfish 16 WASM binary lives inside a dedicated Web Worker thread. Communication follows the standard Universal Chess Interface (UCI) protocol over structured asynchronous postMessage channels.",
      ],
      diagram: {
        title: "CheckMate Client-Side Concurrency Pipeline",
        caption: "Main thread remains 100% free for 60fps rendering while Web Worker handles intensive WASM minimax calculations.",
        ascii: `+-----------------------------------------------------------------+
| Browser Main Thread (React 19 / DOM)                            |
|                                                                 |
|  +--------------------+        +-----------------------------+  |
|  | Interactive Board  |        | Analysis Workbench          |  |
|  | (SVG / User Moves) |        | (Eval Bar, Centipawn Graph) |  |
|  +---------+----------+        +--------------+--------------+  |
|            |                                  ^                 |
|            | User navigates moves             | Streamed UCI    |
|            v                                  | evaluations     |
|  +--------------------------------------------+--------------+  |
|  | Engine Controller Hook (Queue & Interrupt Manager)        |  |
+--+-----------------------------+-----------------------------+--+
                                 |
                         postMessage(UCI)
                                 |
+--------------------------------v--------------------------------+
| Dedicated Web Worker (Isolated Background Thread)               |
|                                                                 |
|  +-----------------------------------------------------------+  |
|  | Stockfish 16 WASM Runtime                                 |  |
|  |                                                           |  |
|  |  +---------------------+      +------------------------+  |  |
|  |  | UCI Command Parser  | <--> | Search & Eval Core     |  |  |
|  |  | (stop, position, go)|      | (Alpha-Beta / NNUE)    |  |  |
|  |  +---------------------+      +-----------+------------+  |  |
|  |                                           |               |  |
|  |                                  SharedArrayBuffer        |  |
|  |                                  (Multithreaded Atomics)  |  |
|  +-----------------------------------------------------------+  |
+-----------------------------------------------------------------+`,
      },
    },
    {
      id: "queue-management-and-interrupts",
      title: "3. Interrupt Dominance & Stale Queue Prevention",
      lead: "Handling rapid user scrubbing without choking the engine with outdated positions.",
      content: [
        "In chess analysis, users rarely wait for a position to finish calculating before clicking to the next move. When scrubbing through a 40-move game history, the user might dispatch 10 position updates in under two seconds.",
        "If commands were simply queued linearly, the worker would get stuck calculating obsolete positions, creating seconds of lag before catching up to where the user actually is. CheckMate implements an Interrupt-Dominant Queue Manager:",
        "Whenever a new move or FEN is selected, the controller immediately dispatches a raw `stop` UCI signal to abort current calculation, clears pending outgoing commands, and immediately posts the fresh `position fen <fen>` followed by `go depth 18`.",
      ],
      codeBlock: {
        title: "UCI Controller Interrupt & Position Stream Pattern",
        language: "typescript",
        code: `// Ensure rapid navigation aborts ongoing calculation immediately
public evaluatePosition(fen: string, depth: number = 18): void {
  if (this.isCalculating) {
    // 1. Force worker to kill current alpha-beta tree search
    this.worker.postMessage("stop");
    this.isCalculating = false;
  }

  // 2. Clear stale commands and update target position
  this.currentFen = fen;
  this.worker.postMessage(\`position fen \${fen}\`);
  this.worker.postMessage(\`go depth \${depth}\`);
  this.isCalculating = true;
}`,
      },
    },
    {
      id: "cross-origin-isolation-breakthrough",
      title: "4. The COOP/COEP Isolation Breakthrough",
      lead: "Unlocking browser multithreading and SharedArrayBuffer in production.",
      content: [
        "Stockfish 16 achieves its grandmaster-level evaluation speed through parallel search threads utilizing `SharedArrayBuffer` and WebAssembly Atomics. However, in the wake of the Spectre and Meltdown CPU cache vulnerabilities, all modern web browsers disable `SharedArrayBuffer` by default.",
        "Without cross-origin isolation, WASM execution is forced down into a single-threaded fallback mode, causing evaluations to run 3x to 5x slower and limiting depth analysis.",
        "To enable `SharedArrayBuffer` in production on Vercel, specific HTTP headers had to be configured in `vercel.json` (commit `ea74c3e`). By enforcing Cross-Origin-Opener-Policy (`same-origin`) and Cross-Origin-Embedder-Policy (`require-corp`), the browser verifies that the page cannot be targeted by cross-origin memory snooping, safely re-enabling SharedArrayBuffer multithreading.",
      ],
      codeBlock: {
        title: "vercel.json — Cross-Origin Security Configuration (Commit ea74c3e)",
        language: "json",
        code: `{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cross-Origin-Opener-Policy",
          "value": "same-origin"
        },
        {
          "key": "Cross-Origin-Embedder-Policy",
          "value": "require-corp"
        }
      ]
    }
  ]
}`,
      },
      callout: {
        type: "caveat",
        title: "The Architectural Trade-off of COOP/COEP",
        text: "Enforcing 'require-corp' means any external resource (images, fonts, third-party embeds) must explicitly provide CORS headers or CORP headers, or the browser will block them. This firmly prevents embedding random external iframes or untrusted third-party widgets, cementing CheckMate as a self-contained client island.",
      },
    },
    {
      id: "centipawn-mathematics",
      title: "5. Centipawn Evaluation & Mate Value Mapping",
      lead: "Translating raw engine scores into human-readable tactical accuracy.",
      content: [
        "Stockfish outputs scores either in centipawns (1 pawn = 100 centipawns) or forced mate plies (`mate +3` or `mate -2`). Handling forced mates requires a mathematical translation: a mate in 1 ply is vastly superior to a mate in 7 plies, yet both exceed standard centipawn ranges.",
        "CheckMate normalizes mate values using the formula: `MATE_VALUE = 20000 - (plies * 100)`. For black mates, the value is inverted. This preserves mathematical ordering so the evaluation bar can render a continuous scale from -20000 to +20000.",
        "Move quality classifications are calculated by comparing the centipawn delta between the player's move and Stockfish's top recommended engine move (`delta = bestScore - playedScore`):",
      ],
      table: {
        caption: "Move Classification Thresholds Implemented in Engine Evaluator",
        headers: ["Classification", "Centipawn Loss (Delta)", "Tactical Interpretation"],
        rows: [
          ["Best Move", "0 cp", "Matches Stockfish 16 top recommendation"],
          ["Excellent", "<= 15 cp", "Near-optimal alternative with negligible loss"],
          ["Good", "16 to 40 cp", "Solid positional continuation maintaining balance"],
          ["Inaccuracy", "41 to 100 cp", "Suboptimal move relinquishing slight initiative"],
          ["Mistake", "101 to 200 cp", "Clear tactical error resulting in measurable disadvantage"],
          ["Blunder", "> 200 cp", "Catastrophic oversight swinging evaluation or losing material"],
        ],
      },
    },
    {
      id: "what-if-sandbox",
      title: "6. Sandbox What-If Exploration & Open-Source Collaboration",
      lead: "Branching speculative variations without corrupting the historical PGN.",
      content: [
        "A critical feature for chess improvement is exploring alternative lines: 'What would have happened if I played Knight to f7 instead of castling?'",
        "Many simple chess apps allow users to make moves, but mutate the active game array, forcing the user to reload the PGN or lose their place. CheckMate implements an immutable game-tree slice. Entering What-If mode freezes the master PGN and spins up a speculative sub-tree. The user can play 10 moves deep against Stockfish responses, then click 'Exit Sandbox' to instantly snap back to the exact move in the master game.",
        "The project also welcomed community contribution: external contributor `adarsh9835` submitted Pull Request #15 to implement board flipping, which was reviewed, tested against board coordinate systems, and merged into the main release.",
      ],
    },
    {
      id: "deliberate-omissions",
      title: "7. Deliberate Architectural Omissions & Lessons",
      lead: "Knowing what NOT to build is as important as what gets built.",
      content: [
        "1. No Backend Database: Despite early consideration of user accounts and game cloud sync, adding a database was rejected. It would introduce authentication friction, GDPR/privacy compliance overhead, and ongoing hosting bills. CheckMate remains 100% free with zero login.",
        "2. Deliberate Lack of UI Polish Pass: The visual design prioritizes contrast, chessboard clarity, and millisecond responsiveness over flashy motion graphics or decorative UI animations. An analytical workbench should feel like a precision instrument.",
        "3. Verification on Java/Spring Boot: Early portfolio summaries mistakenly conflated CheckMate with Java Spring Boot. Verification confirms CheckMate is 100% TypeScript, React 19, and WASM. There is zero Java code in the repository.",
      ],
    },
  ],
  openQuestionsAndExclusions: [
    {
      question: "Was CheckMate triggered by a specific Chess.com paywall incident?",
      resolutionOrLimitation: "Left out of narrative. Research database notes this as an unconfirmed personal detail. The narrative focuses on the verified technical goal of free, zero-server client-side analysis.",
    },
    {
      question: "Did CheckMate ever have a Java Spring Boot backend?",
      resolutionOrLimitation: "Confirmed negative. The repository contains zero Java code. Any previous mention was an erroneous carry-over from other projects and has been expunged.",
    },
  ],
};
