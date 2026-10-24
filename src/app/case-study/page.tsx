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

interface EngineeringTheme {
  title: string;
  description: string;
}

const ENGINEERING_THEMES: EngineeringTheme[] = [
  {
    title: "The Problem",
    description:
      "The original goal, technical constraints, operating requirements, and boundaries that shaped the project before architecture began.",
  },
  {
    title: "The Decisions",
    description:
      "Architectural trade-offs, technology choices, and design alternatives, explaining why specific approaches were selected over others.",
  },
  {
    title: "The Implementation",
    description:
      "Important engineering challenges, system behavior, data modeling, concurrency, and production-tested solutions actually implemented.",
  },
  {
    title: "The Outcome",
    description:
      "What was completed, verified performance benchmarks, unresolved trade-offs, and lessons learned through deployment.",
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

      {/* 3. Marquee (Constrained within the shared middle column container) */}
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

      {/* 4. Inside the Engineering (Editorial Context) */}
      <section
        id="inside-the-engineering"
        tabIndex={-1}
        aria-labelledby="inside-the-engineering-heading"
        className="scroll-mt-10 sm:scroll-mt-12 outline-none space-y-4 sm:space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border pb-2.5">
          <h2
            id="inside-the-engineering-heading"
            className="font-display text-lg sm:text-xl font-medium tracking-tight text-heading"
          >
            Inside the Engineering
          </h2>
        </div>

        <p className="font-body text-xs sm:text-sm text-[#171717] leading-relaxed">
          These case studies explore the actual engineering process behind selected projects—examining how systems were conceived, designed, and debugged under real-world constraints rather than merely presenting finished products.
        </p>

        <div className="space-y-4 sm:space-y-4.5 pt-1">
          {ENGINEERING_THEMES.map((theme) => (
            <div key={theme.title} className="space-y-1">
              <h3 className="text-xs sm:text-sm font-semibold text-heading">
                {theme.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#171717] leading-relaxed">
                {theme.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Case Study Listing (Aligned within the same container) */}
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
    </Container>
  );
}
