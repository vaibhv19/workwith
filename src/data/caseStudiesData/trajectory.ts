import { CaseStudyNarrative } from "./types";

export const trajectoryNarrative: CaseStudyNarrative = {
  slug: "trajectory",
  number: "02",
  title: "Trajectory",
  subtitle: "Organic Scope Evolution & Enterprise Cloud Infrastructure",
  period: "July 2026",
  date: "2026-07-21",
  category: "Enterprise Full-Stack & Cloud Architecture",
  techFocus: "Java 21 · Spring Boot 3.3.1 · AWS EC2/RDS/S3 · Groq LLM · JWT Rotation",
  status: "Production Deployed",
  image: undefined,
  excerpt: "The architectural reality of a personal job-tracking spreadsheet that organically expanded into an enterprise-grade career management platform with dual-token auth and AWS cloud infrastructure.",
  metaDescription: "Detailed engineering retrospective of Trajectory: migrating from brittle spreadsheets to Java 21/Spring Boot 3.3.1, dual-token JWT rotation, Groq AI job description parsing, and AWS production hosting.",
  liveUrl: "https://trajectory.vaibhv19.dev",
  repoUrl: "https://github.com/vaibhv19/trajectory",
  role: "Sole Creator, Architect, & Full-Stack Engineer",
  evidenceTags: [
    { label: "Verified Spring Boot 3.3.1 Code", type: "repo" },
    { label: "Organic Evolution Confirmed", type: "conversation" },
    { label: "Dual-Token Rotation in RDS", type: "repo" },
    { label: "Live AWS Infrastructure", type: "verified" },
  ],
  quickMetrics: [
    { label: "Runtime Platform", value: "Java 21 LTS", detail: "Virtual Threads (Project Loom) enabled" },
    { label: "Token Lifetimes", value: "24h / 7d", detail: "Access JWT + RDS Refresh Token Rotation" },
    { label: "AI Extraction", value: "Groq Cloud", detail: "Llama 3 structured schema extraction" },
    { label: "Cloud Footprint", value: "AWS EC2 + RDS", detail: "Ubuntu 24.04, Nginx, S3 resume storage" },
  ],
  sections: [
    {
      id: "origin-and-organic-growth",
      title: "1. Origin: Outgrowing the Spreadsheet",
      lead: "How an ad-hoc tracking spreadsheet triggered an organic expansion into enterprise software.",
      content: [
        "Like many software engineers actively interviewing, I initially tracked job applications in a spreadsheet. Over dozens of applications across different platforms, the spreadsheet model began to crack under its own limitations:",
        "Spreadsheet rows offered no transactional history—overwriting a status from 'Applied' to 'Interviewing' obliterated the timestamp of when the application was submitted. Resume versions were lost in local download folders. Follow-up reminders required manual calendar entry, and copying job descriptions resulted in mangled text formatting.",
        "Crucially, Trajectory was **not planned as a sprawling enterprise system from day one**. The verified engineering history reveals an organic progression: each new layer—authentication, status audit trails, S3 file versioning, AI text parsing, and automated background schedulers—was built to resolve a concrete failure encountered in daily usage.",
      ],
      callout: {
        type: "insight",
        title: "Reconciling Git History with Architectural Evolution",
        text: "The repository's Git log shows major features committed in rapid succession around July 13, 2026. This reflects an AI-assisted development workflow and atomic squashing, not an instantaneous design. The underlying architecture evolved through progressive iterations as personal tracking friction intensified.",
      },
    },
    {
      id: "system-architecture",
      title: "2. System Boundaries & Enterprise Backend Architecture",
      lead: "Structuring a robust Java 21 and Spring Boot 3.3.1 service layer.",
      content: [
        "Trajectory was architected around a hardened enterprise backend. Rather than a lightweight serverless function or monolith script, the system separates domain services into clean transactional boundaries:",
        "The web client interacts with a Spring Boot 3.3.1 API running on Java 21, taking full advantage of Project Loom Virtual Threads for high-concurrency I/O operations without thread pool starvation.",
      ],
      diagram: {
        title: "Trajectory Enterprise System Architecture",
        caption: "Data flow from Next.js client through Nginx reverse proxy into Spring Boot 3.3.1, RDS PostgreSQL, and AWS S3.",
        ascii: `+-----------------------------------------------------------------+
| Client Tier (Next.js App Router / Tailwind CSS)                 |
+-------------------------------+---------------------------------+
                                | HTTPS / REST API
+-------------------------------v---------------------------------+
| AWS EC2 Ubuntu 24.04 Host                                       |
|                                                                 |
|  +-----------------------------------------------------------+  |
|  | Nginx Reverse Proxy (Certbot SSL / Let's Encrypt auto-cron) |  |
|  +-----------------------------+-----------------------------+  |
|                                | HTTP 8080 (Loopback)           |
|  +-----------------------------v-----------------------------+  |
|  | Spring Boot 3.3.1 Application Runtime (Java 21)           |  |
|  |                                                           |  |
|  |  +--------------------+  +-----------------------------+  |  |
|  |  | Spring Security    |  | Job Application Service     |  |  |
|  |  | (JWT Auth + Filter)|  | (State Transitions & Audits)|  |  |
|  |  +---------+----------+  +--------------+--------------+  |  |
|  |            |                            |                 |  |
|  |  +---------v----------+  +--------------v--------------+  |  |
|  |  | Spring AI Service  |  | GhostDetectionScheduler     |  |  |
|  |  | (Groq / Llama 3)   |  | (@Scheduled Cron Checks)    |  |  |
|  |  +--------------------+  +-----------------------------+  |  |
|  +------------+----------------------------+-----------------+  |
+---------------|----------------------------|--------------------+
                | JDBC                       | AWS SDK
+---------------v---------------+   +--------v--------------------+
| AWS RDS PostgreSQL 16          |   | AWS S3 Bucket               |
| - applications                |   | - Versioned PDF Resumes     |
| - application_status_history  |   | - Immutable Document Blobs  |
| - refresh_tokens              |   +-----------------------------+
+-------------------------------+`,
      },
    },
    {
      id: "authentication-and-security",
      title: "3. Dual-Token JWT Authentication & Dev-Friendly Mocking",
      lead: "Balancing enterprise token rotation with smooth local developer ergonomics.",
      content: [
        "Authentication in Trajectory follows a hardened dual-token architecture:",
        "1. **Access Tokens**: Short-lived stateless JWTs (24-hour expiration) containing user identity and role claims, validated statelessly by Spring Security's filter chain.",
        "2. **Refresh Tokens**: Long-lived tokens (7-day expiration) persisted in the PostgreSQL `refresh_tokens` table. Every refresh request rotates the token, invalidating the previous token to prevent replay attacks.",
        "For external logins, Spring Security OAuth2 integrates Google authentication. However, requiring live Google OAuth credentials for every local test run creates friction during offline development.",
        "To solve this, Trajectory introduces a custom `MockOAuth2RedirectFilter`. When running under the local development profile, this filter intercepts auth redirects and injects a mock authenticated user session, allowing rapid backend and frontend iteration without external internet access.",
      ],
      codeBlock: {
        title: "RefreshToken Rotation Pattern in Spring Data JPA",
        language: "java",
        code: `@Transactional
public TokenResponse refreshAccessToken(String rawRefreshToken) {
    RefreshToken token = refreshTokenRepository.findByToken(rawRefreshToken)
        .orElseThrow(() -> new InvalidTokenException("Invalid refresh token"));

    if (token.getExpiryDate().isBefore(Instant.now()) || token.isRevoked()) {
        throw new TokenExpiredException("Refresh token is expired or revoked");
    }

    // 1. Revoke existing token to prevent replay
    token.setRevoked(true);
    refreshTokenRepository.save(token);

    // 2. Issue fresh rotated token pair
    User user = token.getUser();
    String newAccessToken = jwtTokenProvider.generateAccessToken(user);
    RefreshToken newRefreshToken = refreshTokenService.createRefreshToken(user);

    return new TokenResponse(newAccessToken, newRefreshToken.getToken());
}`,
      },
    },
    {
      id: "ai-job-parsing",
      title: "4. Unstructured Job Parsing via Groq Cloud & Regex Fallback",
      lead: "Extracting structured schemas from messy, copy-pasted job postings.",
      content: [
        "Job postings on the web are notoriously inconsistent—some are bulleted lists, others are walls of narrative text without clear salary or qualification demarcations.",
        "Trajectory integrates Groq Cloud running Llama 3 models via Spring AI. The service dispatches an extraction prompt enforcing strict JSON output containing company name, job title, minimum and maximum salary, experience level, and categorized required skills.",
        "A critical engineering requirement was system resiliency when third-party AI APIs fail or rate limits are hit. The `JobDescriptionParserService` checks an `isMockMode()` configuration flag and wraps API calls in a resilient fallback: if the LLM inference call times out or fails, the service drops into a heuristic regex parser that extracts email addresses, common job titles, and standard salary patterns from the raw text.",
      ],
    },
    {
      id: "status-history-and-ghost-detection",
      title: "5. Transactional Audit Trails & The GhostDetectionScheduler",
      lead: "Replacing spreadsheet cell overwrites with immutable status event sourcing.",
      content: [
        "In a spreadsheet, changing a status cell from 'Interviewing' to 'Rejected' destroys historical context. Trajectory separates application records from status history.",
        "Every status change creates a record in the `application_status_history` table, recording `from_status`, `to_status`, `transition_date`, and optional interviewer notes. This enables precise calculation of pipeline velocity (e.g., average days spent in 'Screening' vs 'Technical Round').",
        "Furthermore, a background `GhostDetectionScheduler` runs periodically via Spring's `@Scheduled` engine. It queries applications lingering in 'Applied' or 'Interviewing' status past a configurable threshold (e.g., 21 days without activity) and flags them with a visual ghosting badge, prompting the user to send a follow-up inquiry or archive the record.",
      ],
      codeBlock: {
        title: "GhostDetectionScheduler Implementation",
        language: "java",
        code: `@Scheduled(cron = "0 0 2 * * *") // Runs every night at 2:00 AM UTC
public void detectGhostedApplications() {
    Instant thresholdDate = Instant.now().minus(21, ChronoUnit.DAYS);
    List<JobApplication> inactiveApps = applicationRepository
        .findActiveApplicationsWithNoUpdatesSince(thresholdDate, ApplicationStatus.REJECTED);

    for (JobApplication app : inactiveApps) {
        app.setFlaggedAsGhosted(true);
        applicationRepository.save(app);
        auditService.logSystemAction(app.getId(), "Flagged as inactive (>21 days)");
    }
}`,
      },
    },
    {
      id: "ui-decisions-and-limits",
      title: "6. Design Decisions, Trade-offs, & Open Inquiries",
      lead: "Prioritizing high-density data management over decorative interfaces.",
      content: [
        "1. Data Table vs. Kanban Board: While Kanban boards look attractive in mockups, managing 80+ applications across 6 columns causes horizontal scrolling fatigue. Trajectory chose a compact, high-density, sortable data table with instant search and status history drawers.",
        "2. Infrastructure Costs vs. Operational Simplicity: Hosting on AWS EC2 with RDS PostgreSQL and S3 versioning guarantees enterprise isolation, but introduces a recurring monthly AWS bill and maintenance responsibilities (Nginx configuration, Certbot certificate timers, OS kernel security patches).",
      ],
    },
  ],
  openQuestionsAndExclusions: [
    {
      question: "Why was AWS EC2 selected initially instead of an alternative cloud provider?",
      resolutionOrLimitation: "Left out of narrative. Research notes that while EC2 hosting is fully verified in code and deployment configs, the specific initial vendor decision rationale is not documented.",
    },
    {
      question: "What was the technical motivation for the planned Oracle Cloud migration?",
      resolutionOrLimitation: "Left out of narrative. The repository contains references to future Oracle Cloud migration, but the underlying pricing or technical rationale remains an open inquiry and is not asserted as fact.",
    },
  ],
};
