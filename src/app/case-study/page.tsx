import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Marquee from "@/components/ui/Marquee";
import ScrollDownArrow from "@/components/case-study/ScrollDownArrow";
import { CASE_STUDIES } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "An in-depth exploration of the engineering decisions, architecture, trade-offs, and implementation behind selected production systems and client applications.",
  alternates: {
    canonical: "/case-study",
  },
  openGraph: {
    type: "website",
    title: "Case Studies | Vaibhav Gupta",
    description:
      "An in-depth exploration of the engineering decisions, architecture, trade-offs, and implementation behind selected production systems and client applications.",
    url: "/case-study",
  },
};

const MARQUEE_PHRASES = [
  "ENGINEERING DECISIONS",
  "SYSTEM DESIGN",
  "TECHNICAL TRADE-OFFS",
];

interface EditorialSection {
  title: string;
  subtitle: string;
  paragraphs: string[];
}

const EDITORIAL_SECTIONS: EditorialSection[] = [
  {
    title: "Problems & Constraints",
    subtitle:
      "The original goals, operational boundaries, and hardware limits that shaped system design before architecture began.",
    paragraphs: [
      "Engineering decisions in these systems were dictated by hard operational constraints rather than abstract design patterns. In CheckMate, the challenge was delivering grandmaster-grade chess analysis entirely in the browser without subscriptions or servers—where computing 18 plies deep with Stockfish 16 WASM threatened to completely seize the browser's UI thread.",
      "Similarly, Email Job Scheduler was constructed under a strict 48-hour delivery window requiring five coordinated microservices, 120+ specification points, and crash-resilient queue mechanics. In Conclave, orchestrating multi-agent discussions without mounting external API costs prompted an intentional retreat from cloud endpoints to 100% local model execution, introducing discrete hardware thermal boundaries.",
    ],
  },
  {
    title: "Decisions & Trade-offs",
    subtitle:
      "Deliberate compromises made between operational complexity, privacy, and execution speed.",
    paragraphs: [
      "Every project required clear architectural trade-offs. To unlock multi-threaded WebAssembly acceleration in CheckMate, Cross-Origin Isolation headers (COOP and COEP) were configured on deployment to permit SharedArrayBuffer concurrency, trading universal cross-site embeddability for raw calculation speed and complete user privacy.",
      "In Email Job Scheduler, Redis Lua scripts were chosen to enforce sliding dispatch windows atomically, eliminating race conditions across worker processes. For 1nfinity.online, an uncompromising “Restraint Over Decoration” philosophy led to stripping third-party animation libraries entirely, replacing them with bespoke CSS keyframes and restricting branded intro sequences strictly to desktop viewports to safeguard mobile Largest Contentful Paint.",
    ],
  },
  {
    title: "Implementation & Outcomes",
    subtitle:
      "Concrete concurrency solutions, runtime verification, and documented production results.",
    paragraphs: [
      "Implementation success was evaluated by measurable runtime resilience rather than feature volume. CheckMate sustained 60 FPS rendering by isolating UCI protocol communications inside dedicated Web Worker threads, issuing stop commands on rapid move navigation to discard stale minimax calculations.",
      "Email Job Scheduler achieved zero duplicate dispatches during simulated worker crashes using BullMQ atomic claims and PostgreSQL transaction states, and subsequently underwent a full debranding pass to serve as standalone open-source software. On 1nfinity.online, the resulting platform achieved documented 99 Desktop and 92 Mobile Lighthouse performance ratings in production with zero layout shift.",
    ],
  },
];

export default function CaseStudiesPage() {
  const studies = [...CASE_STUDIES].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Container size="default" className="pt-6 sm:pt-8 md:pt-10 pb-16 sm:pb-24 space-y-8 sm:space-y-10">
      {/* 1. Hero Section (Aligned to Shared Middle Column) */}
      <header className="space-y-3.5 sm:space-y-4 text-center">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-heading leading-[1.1] uppercase">
          Case Studies
        </h1>

        <p className="font-body text-xs sm:text-sm text-[#171717] leading-relaxed max-w-xl mx-auto font-normal">
          An in-depth exploration of the engineering decisions, architecture,
          trade-offs, and implementation behind selected systems and client
          production applications.
        </p>

        {/* 2. Vertically Animated Downward Arrow Navigation */}
        <div className="pt-3 sm:pt-4 flex justify-center items-center">
          <ScrollDownArrow targetId="inside-the-engineering" />
        </div>
      </header>



      {/* 4. Case Study Listing (Aligned within the same container) */}
      <section
        id="case-studies-list"
        tabIndex={-1}
        aria-labelledby="case-studies-heading"
        className="scroll-mt-10 sm:scroll-mt-12 outline-none space-y-0 divide-y divide-border pt-4 sm:pt-6 border-t border-border"
      >
        <h2 id="case-studies-heading" className="sr-only">
          Case Studies
        </h2>
        {studies.map((study) => (
          <article
            key={study.slug}
            className="py-6 sm:py-8 first:pt-0 space-y-2.5 sm:space-y-3"
          >
            {/* 1. Project title (non-clickable plain text in heading red) */}
            <h2 className="font-display text-xl sm:text-2xl font-medium tracking-tight text-heading">
              {study.title}
            </h2>

            {/* 2. Concise description */}
            <p className="font-body text-xs sm:text-sm text-[#171717] leading-relaxed">
              {study.description}
            </p>

            {/* 3. Single functional Read Case Study link */}
            <div className="pt-0.5">
              <Button
                href={`/case-study/${study.slug}`}
                variant="text"
                size="sm"
                icon="arrow-right"
              >
                Read Case Study
              </Button>
            </div>
          </article>
        ))}
      </section>

      
      {/* 2. Marquee (Constrained within the shared middle column container) */}
      <div
        className="w-full overflow-hidden border-y border-border py-3 sm:py-3.5 select-none"
        role="region"
        aria-label="Engineering Focus"
      >
        <Marquee
          speed="normal"
          pauseOnHover={true}
          fadeEdges={true}
          className="py-0.5"
        >
          {Array.from({ length: 8 }).map((_, groupIdx) => (
            <div key={groupIdx} className="flex items-center shrink-0">
              {MARQUEE_PHRASES.map((phrase, phraseIdx) => (
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

      {/* 3. Inside the Engineering (Editorial Layout matching Life reference) */}
      <section
        id="inside-the-engineering"
        tabIndex={-1}
        aria-labelledby="inside-the-engineering-heading"
        className="scroll-mt-10 sm:scroll-mt-12 outline-none pt-4 sm:pt-6"
      >
        {/* Opening section */}
        <div className="space-y-3 sm:space-y-4">
          <h2
            id="inside-the-engineering-heading"
            className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-heading uppercase"
          >
            Inside the Engineering
          </h2>

          <p className="font-body italic text-base sm:text-lg text-heading/90 leading-relaxed font-normal">
            An exploration of architecture, constraints, and operational realities—examining how systems were designed, debugged, and evaluated under real-world conditions.
          </p>

          <p className="font-body text-xs sm:text-sm text-[#171717] leading-relaxed max-w-2xl font-normal">
            These case studies look beyond finished user interfaces to document the technical trade-offs, concurrency models, and failure modes encountered during development. Rather than presenting polished product showcases, each account focuses on the engineering problems that dictated how software was shaped.
          </p>
        </div>

        {/* Subtle Horizontal Rule Separator */}
        <div className="border-t border-border my-6 sm:my-8" />

        {/* Engineering Details (Two-column editorial layout) */}
        <div className="space-y-8 sm:space-y-10">
          {EDITORIAL_SECTIONS.map((section) => (
            <div
              key={section.title}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start"
            >
              <div className="md:col-span-5 space-y-1.5 sm:space-y-2">
                <h3 className="font-display text-xl sm:text-2xl font-medium tracking-tight text-heading leading-tight">
                  {section.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#171717]/70 font-normal leading-relaxed">
                  {section.subtitle}
                </p>
              </div>

              <div className="md:col-span-7">
                <div className="border-l-2 border-border pl-5 sm:pl-6 space-y-3 sm:space-y-3.5 text-xs sm:text-sm text-[#171717] leading-relaxed font-normal">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
