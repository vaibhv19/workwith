import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Marquee from "@/components/ui/Marquee";

export const metadata: Metadata = {
  title: "Vaibhav Gupta — Software Engineer & Systems Architecture",
  description:
    "Technical companion to vaibhv19.dev. Engineering case studies, distributed systems, client-side WebAssembly, and production web platforms by Vaibhav Gupta.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Vaibhav Gupta — Software Engineer & Systems Architecture",
    description:
      "Technical companion to vaibhv19.dev. Engineering case studies, distributed systems, client-side WebAssembly, and production web platforms by Vaibhav Gupta.",
    url: "/",
  },
};

const MARQUEE_DOMAINS = [
  "WEB & PRODUCT ENGINEERING",
  "BACKEND & DISTRIBUTED SYSTEMS",
  "AI ORCHESTRATION & RAG",
  "CLIENT-SIDE WEBASSEMBLY",
];

interface FeaturedProject {
  title: string;
  focus: string;
  description: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  githubUrl?: string;
}

const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    title: "CheckMate",
    focus: "Client-Side WebAssembly · Web Workers · Concurrency",
    description:
      "A browser-based chess analysis workbench executing Stockfish 16 entirely inside Web Workers with SharedArrayBuffer concurrency, delivering 60 FPS UI responsiveness with zero backend servers or subscription paywalls.",
    liveUrl: "https://checkmate.vaibhv19.dev/",
    caseStudyUrl: "/case-study/checkmate",
    githubUrl: "https://github.com/vaibhv19/Check-Mate-Analyse",
  },
  {
    title: "Email Job Scheduler",
    focus: "Distributed Systems · BullMQ · Redis Lua · PostgreSQL",
    description:
      "A multi-service scheduling and delivery platform with BullMQ worker concurrency, atomic Redis Lua rate limiters, PostgreSQL status tracking, and Elasticsearch indexing built under an intensive 48-hour turnaround.",
    liveUrl: "https://email-job-scheduler.vaibhv19.dev",
    caseStudyUrl: "/case-study/email-job-scheduler",
    githubUrl: "https://github.com/vaibhv19/Email-Job-Scheduler",
  },
  {
    title: "1nfinity.online",
    focus: "Commercial Client Delivery · Next.js · 99 Desktop / 92 Mobile Lighthouse",
    description:
      "A bespoke client web platform designed and engineered from scratch under an uncompromising “Restraint Over Decoration” philosophy, achieving documented 99 Desktop / 92 Mobile Lighthouse performance ratings (with 100 in Best Practices and SEO) and serverless Resend email pipelines.",
    liveUrl: "https://1nfinity.online",
    caseStudyUrl: "/case-study/1nfinity",
  },
];

export default function WorkWithMePage() {
  return (
    <Container
      size="default"
      className="pt-6 sm:pt-8 md:pt-10 pb-16 sm:pb-24 space-y-10 sm:space-y-12"
    >
      {/* 1. Hero Section */}
      <header className="space-y-4 sm:space-y-5 text-center">
        <div className="space-y-1.5 sm:space-y-2">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-heading leading-[1.1] uppercase">
            Hi, I'm @Vaibhv19
          </h1>
        </div>

        <p className="font-body text-xs sm:text-sm text-[#171717] leading-relaxed max-w-xl mx-auto font-normal">
          I engineer production web platforms, distributed backend microservices,
          and AI orchestration systems. MyWork serves as the technical companion to{" "}
          <a
            href="https://vaibhv19.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link hover:text-link-hover underline decoration-[#355C7D]/30 underline-offset-2"
          >
            vaibhv19.dev
          </a>
          —providing a deeper exploration into architecture decisions, source code, and
          verifiable performance under real-world constraints.
        </p>
      </header>


      {/* 4. How I Work (Editorial Two-Column Section) */}
      <section
        aria-labelledby="how-i-work-heading"
        className="space-y-6 border-t border-border pt-8 sm:pt-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
          <div className="md:col-span-5 space-y-1.5 sm:space-y-2">
            <h2
              id="how-i-work-heading"
              className="font-display text-xl sm:text-2xl font-medium tracking-tight text-heading leading-tight uppercase"
            >
              How I Work
            </h2>
            <p className="text-xs sm:text-sm text-[#171717]/70 font-normal leading-relaxed">
              Engineering principles grounded in production systems, architectural constraints, and measured outcomes.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="border-l-2 border-border pl-5 sm:pl-6 space-y-3.5 text-xs sm:text-sm text-[#171717] leading-relaxed font-normal">
              <p>
                <strong className="font-semibold text-heading">Constraints Precede Architecture:</strong>{" "}
                System architecture begins with real-world operating limits rather than idealized patterns. In CheckMate, running Stockfish 16 WASM in the browser required strict Web Worker isolation and COOP/COEP headers to unlock SharedArrayBuffer multithreading while preserving 60 FPS UI rendering.
              </p>
              <p>
                <strong className="font-semibold text-heading">Restraint Over Decoration:</strong>{" "}
                Frontend systems are engineered under strict performance budgets, targeting 98+ Lighthouse scores by eliminating third-party runtime bloat and layout shifts. On 1nfinity.online, rejecting heavy external animation frameworks in favor of native CSS keyframes secured documented 99 Desktop / 92 Mobile Lighthouse performance in production.
              </p>
              <p>
                <strong className="font-semibold text-heading">Verifiable Reliability:</strong>{" "}
                Prioritizing idempotency, recovery state machines, and transparent logs over black-box complexity. In Email Job Scheduler, atomic Redis Lua scripts and BullMQ claim patterns guaranteed zero duplicate dispatches during worker crashes.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* 2. Horizontal Marquee of Core Disciplines */}
      <div
        className="w-full overflow-hidden border-y border-border py-3 sm:py-3.5 select-none"
        role="region"
        aria-label="Core Engineering Domains"
      >
        <Marquee speed="normal" pauseOnHover={true} fadeEdges={true} className="py-0.5">
          {Array.from({ length: 8 }).map((_, groupIdx) => (
            <div key={groupIdx} className="flex items-center shrink-0">
              {MARQUEE_DOMAINS.map((phrase, phraseIdx) => (
                <div key={phraseIdx} className="flex items-center shrink-0">
                  <span className="text-xs font-sans font-medium tracking-[0.14em] text-[#171717] uppercase whitespace-nowrap px-3 sm:px-4">
                    {phrase}
                  </span>
                  <span
                    className="text-heading select-none text-xs font-bold"
                    aria-hidden="true"
                  >
                    ·
                  </span>
                </div>
              ))}
            </div>
          ))}
        </Marquee>
      </div>

      {/* 6. Contact & Collaboration */}
      <section
        aria-labelledby="contact-heading"
        className="space-y-5 border-t border-border pt-8 sm:pt-10"
      >
        <div className="space-y-1.5">
          <h2
            id="contact-heading"
            className="font-display text-xl sm:text-2xl font-medium tracking-tight text-heading uppercase"
          >
            Start a Conversation
          </h2>
          <p className="text-xs sm:text-sm text-[#171717] leading-relaxed max-w-xl font-normal">
            I am open to full-time software engineering roles, complex systems challenges, and technical consulting. If you have an opportunity or want to discuss an architecture, let&apos;s talk.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Button href="/start-conversation" variant="primary" size="sm" icon="arrow-right">
            Send a Message
          </Button>
          <Button
            href="mailto:contact@vaibhv19.dev"
            variant="secondary"
            size="sm"
            icon="arrow-up-right"
            external
          >
            contact@vaibhv19.dev
          </Button>
          <Button
            href="https://www.linkedin.com/in/vaibhv19"
            variant="secondary"
            size="sm"
            icon="arrow-up-right"
            external
          >
            LinkedIn
          </Button>
        </div>
      </section>
    </Container>
  );
}
