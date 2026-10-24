import { CaseStudyNarrative } from "./types";

export const emailJobSchedulerNarrative: CaseStudyNarrative = {
  slug: "email-job-scheduler",
  number: "05",
  title: "Email Job Scheduler (EJS)",
  subtitle: "Distributed Worker Queues Under 48-Hour Constraint",
  period: "October 2026",
  date: "2026-10-14",
  category: "Distributed Systems & Asynchronous Queues",
  techFocus: "Node.js · BullMQ · Redis Lua · PostgreSQL · Elasticsearch · Caddy",
  status: "Retrospective Verified",
  image: undefined,
  excerpt: "A multi-service distributed scheduling pipeline engineered under an intensive 48-hour hiring constraint, exploring queue idempotency, Redis Lua rate limits, and post-acceptance crash recovery.",
  metaDescription: "Detailed engineering retrospective of Email Job Scheduler: building a distributed 5-service queue system under 48-hour constraints, BullMQ atomic claims, Redis Lua rate limiting, and post-submission debranding.",
  liveUrl: "https://email-job-scheduler.vaibhv19.dev",
  repoUrl: "https://github.com/vaibhv19/email-job-scheduler",
  role: "Sole Systems Engineer (Monorepo Architect)",
  evidenceTags: [
    { label: "Verified 10-Phase Git Commits", type: "repo" },
    { label: "Debranding Commit 151ceba9", type: "repo" },
    { label: "Redis Lua Script Verified", type: "repo" },
    { label: "Rejection Context Confirmed", type: "conversation" },
  ],
  quickMetrics: [
    { label: "Execution Window", value: "48 Hours", detail: "10 phases completed Oct 13-14, 2026" },
    { label: "Scheduling Mechanism", value: "Zero Cron / Timers", detail: "100% BullMQ Redis Delayed Streams" },
    { label: "Rate Limiting", value: "Atomic Lua", detail: "Sliding interval + hourly quota enforcement" },
    { label: "Worker Topology", value: "3 Microservices", detail: "API, Worker, & Web Dashboard monorepo" },
  ],
  sections: [
    {
      id: "origin-and-the-48-hour-constraint",
      title: "1. Origin: An Intensive 48-Hour Hiring Sprint",
      lead: "Building a production-grade distributed system under compressed evaluation timelines.",
      content: [
        "In October 2026, I received a rigorous backend engineering take-home assignment for ReachInbox. The challenge: architect and deliver an enterprise-grade distributed email scheduling and delivery system with strict rate limits, observability, and full documentation within a 48-hour window.",
        "Across two intense days (October 13 and October 14), the project progressed through 10 distinct, structured development phases—from initial PostgreSQL schemas to BullMQ workers, Redis Lua rate limiters, Elasticsearch query synchronization, and Docker Compose orchestration.",
        "The submission was evaluated, and I subsequently received a rejection email. Rather than abandoning the codebase, I performed a post-submission debranding pass (commit `151ceba9`), removing proprietary tokens, evaluation prompts, and reviewer credentials. EJS was restructured as an open-source, reference implementation of distributed queue architecture.",
      ],
      callout: {
        type: "dilemma",
        title: "Editorial Honesty on Evaluation Rejection",
        text: "The rejection is documented honestly. It does not imply a technical flaw in the queue architecture—the code contains comprehensive test coverage, atomic database claiming, and verifiable rate limiting. The retrospective treats the project as an intensive time-boxed systems challenge.",
      },
    },
    {
      id: "the-zero-cron-invariant",
      title: "2. The Zero-Cron Invariant & Monorepo Boundaries",
      lead: "Why cron jobs and setTimeout have no place in resilient distributed systems.",
      content: [
        "A foundational requirement of the design was: **Zero Cron Jobs, Zero `setTimeout` or `setInterval` calls.**",
        "In distributed architectures, relying on Node.js `setTimeout` or local cron jobs introduces immediate failure modes: if a worker process restarts or crashes while waiting on a timer, all in-memory timers are lost forever. If multiple instances run the same cron job, they race and cause duplicate dispatches.",
        "EJS solves this by pushing all delayed dispatches directly into **BullMQ Delayed Queues** backed by Redis zsets. Redis manages time-based scheduling atomically. Even if 5 worker containers reboot simultaneously, pending jobs remain persisted in Redis streams.",
        "The codebase is organized as a clean npm workspace monorepo:",
        "- `apps/api`: Express REST gateway for scheduling, canceling, and viewing emails.",
        "- `apps/worker`: BullMQ consumer executing atomic claim checks and SMTP handshakes.",
        "- `apps/web`: React 18 + Vite monitoring dashboard for queue telemetry.",
        "- `packages/db`, `packages/redis`, `packages/shared`: Shared types, migrations, and clients.",
      ],
    },
    {
      id: "atomic-database-claiming",
      title: "3. Atomic Database Claiming: Preventing Split-Brain Dispatch",
      lead: "Ensuring exactly-once worker claiming under high concurrent worker counts.",
      content: [
        "When multiple worker nodes consume from a job queue, network latency or delayed ACKs can cause two workers to attempt dispatching the same email record.",
        "To guarantee mutual exclusion at the database level, EJS employs an atomic SQL conditional update pattern:",
      ],
      codeBlock: {
        title: "Atomic Conditional Worker Claim in PostgreSQL",
        language: "sql",
        code: `-- Atomically claim the email record. 
-- If another worker already claimed it, zero rows are returned.
UPDATE emails
SET 
  status = 'processing',
  updated_at = NOW()
WHERE 
  id = $1 
  AND status = 'scheduled'
RETURNING *;`,
      },
      contentAfter: [
        "If the `UPDATE` query returns zero affected rows, the worker immediately knows another node claimed the job, and it gracefully terminates its task without initiating an external SMTP call.",
      ],
    },
    {
      id: "redis-lua-rate-limiting",
      title: "4. Atomic Rate-Limiting via Custom Redis Lua Scripts",
      lead: "Enforcing sender spacing and hourly quotas without race conditions.",
      content: [
        "Email providers impose strict sending constraints: (1) a minimum time gap between consecutive emails from the same sender (e.g., 2000ms), and (2) an hourly volume cap (e.g., maximum 50 emails per hour per mailbox).",
        "Checking these constraints using standard sequential Redis calls (`GET` then `SET`) introduces race conditions under concurrency. EJS delegates rate evaluation to an **atomic Redis Lua script**:",
        "The Lua script checks the mailbox's last-sent timestamp and current hourly sliding window count inside a single atomic execution. If the sender is within the cooldown period or has exceeded their hourly quota, the script returns a delay offset.",
        "Instead of discarding the job, BullMQ catches the delay and calls `job.moveToDelayed(Date.now() + offset)`, cleanly re-queuing the email to the beginning of the next available window.",
      ],
      diagram: {
        title: "BullMQ & Redis Lua Rescheduling Lifecycle",
        caption: "Worker verifies rate limit atomically; exceeded quotas trigger non-destructive delayed re-queueing.",
        ascii: `BullMQ Worker Queue ---> [ Claim Job from Redis ]
                                  |
                      EVALSHA RateLimit.lua (Sender ID)
                                  |
                   +--------------+--------------+
                   |                             |
             [ Limit OK ]               [ Quota Exceeded ]
                   |                             |
      Send SMTP via Nodemailer        Calculate delay until next hour
                   |                             |
      Mark DB status = 'sent'         job.moveToDelayed(Date.now() + delay)
                   |                             |
      Sync to Elasticsearch           Re-enters Redis stream safely`,
      },
    },
    {
      id: "post-acceptance-crash-recovery",
      title: "5. Post-Acceptance Crash Recovery & Idempotency",
      lead: "Surviving unexpected process termination during the SMTP handshake.",
      content: [
        "The most dangerous moment in email dispatch is the millisecond after the external SMTP server accepts the message but before the worker writes `status = 'sent'` to the database.",
        "If the worker process crashes at that exact instant, a naive recovery loop would see the email in `processing` status and attempt to resend it—resulting in duplicate emails sent to clients.",
        "EJS solves this by writing a pre-send record into `email_attempts` with a unique transaction key before opening the SMTP socket. Upon receiving the provider's `messageId`, the attempt is stamped as accepted.",
        "On system restart, the worker reconciliation service queries any orphaned jobs stuck in `processing`. It inspects the `email_attempts` table: if an accepted `messageId` exists, it marks the job `sent` without re-dispatching, ensuring strict deliverability idempotency.",
      ],
    },
    {
      id: "observability-and-search",
      title: "6. Elasticsearch Outbox Sync & Deduplicated Slack Alerting",
      lead: "Dual-write synchronization and alert deduplication in high-throughput pipelines.",
      content: [
        "To support instant full-text search across millions of scheduled and historical emails without bogging down the transactional PostgreSQL database, EJS implements an **Outbox synchronization pattern** pushing updates to an Elasticsearch cluster.",
        "For operational monitoring, system errors and rate-limit violations trigger real-time alerts to a Slack webhook channel. To prevent alert storms (e.g., an outage triggering 500 identical notifications per second), EJS enforces an alert deduplication lock in Redis with a 60-second TTL.",
        "For testing, delivery routes utilize Ethereal SMTP to provide verifiable preview URLs for every dispatched email without spamming real inboxes.",
      ],
    },
  ],
  openQuestionsAndExclusions: [
    {
      question: "Did the rejection imply technical flaws in the scheduling architecture?",
      resolutionOrLimitation: "Addressed with evidence. The case study notes the assignment rejection factually without speculating or inventing unverified critique, highlighting the verified code patterns and 10 development phases.",
    },
    {
      question: "Was the codebase redesigned after the hiring assignment?",
      resolutionOrLimitation: "Clarified in narrative. The architecture was not redesigned; commit 151ceba9 was a debranding and sanitization pass to remove hiring firm references and preserve it as an open-source case study.",
    },
  ],
};
