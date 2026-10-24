import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { CASE_STUDIES } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Detailed accounts of project origins, architecture decisions, engineering trade-offs, and lessons learned across distributed systems, local AI, and production platforms.",
  alternates: {
    canonical: "/case-study",
  },
  openGraph: {
    type: "website",
    title: "Case Studies | Vaibhav Gupta",
    description:
      "Detailed accounts of project origins, architecture decisions, engineering trade-offs, and lessons learned across distributed systems, local AI, and production platforms.",
    url: "/case-study",
  },
};

export default function CaseStudiesPage() {
  const studies = [...CASE_STUDIES].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Container size="default" className="pt-6 sm:pt-8 md:pt-10 pb-16 sm:pb-24 space-y-8 sm:space-y-12">
      {/* Editorial Header */}
      <header className="space-y-2.5 sm:space-y-3 border-b border-border pb-6 sm:pb-7">
        <h1 className="font-display text-2xl sm:text-3xl md:text-[2.25rem] font-medium tracking-tight text-foreground leading-[1.15]">
          Case Studies
        </h1>
        <p className="font-body text-sm sm:text-base text-foreground-muted leading-relaxed max-w-2xl font-light">
          Detailed accounts of project origins, architecture decisions, engineering trade-offs, and lessons learned across distributed systems, local AI, and production platforms.
        </p>
      </header>

      {/* Editorial Archive List */}
      <div className="space-y-0 divide-y divide-border">
        {studies.map((study) => (
          <article
            key={study.slug}
            className="group py-8 sm:py-10 first:pt-0 space-y-3.5"
          >
            {/* Top Row: Category & Period */}
            <div className="flex items-baseline justify-between text-xs text-foreground-subtle font-mono">
              <span className="text-foreground-muted">{study.category}</span>
              <span>{study.period}</span>
            </div>

            {/* Title & Subtitle */}
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-medium tracking-tight text-foreground group-hover:text-accent transition-colors">
                <Link
                  href={`/case-study/${study.slug}`}
                  className="inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-sm"
                >
                  <span>{study.title}</span>
                  <span className="text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-sm font-normal">
                    &rarr;
                  </span>
                </Link>
              </h2>
              <p className="text-xs sm:text-sm text-foreground-muted mt-1">
                {study.subtitle}
              </p>
            </div>

            <p className="font-body text-xs sm:text-sm text-foreground-muted leading-relaxed">
              {study.description}
            </p>

            {/* Technology Focus Row */}
            <div className="text-xs text-foreground-subtle pt-0.5">
              <span>{study.techFocus}</span>
            </div>

            {/* Read Action */}
            <div className="pt-1.5">
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
      </div>
    </Container>
  );
}
