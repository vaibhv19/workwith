import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionReveal from "@/components/ui/SectionReveal";
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
    <div className="py-10 sm:py-16 space-y-12 sm:space-y-16">
      {/* Editorial Header */}
      <Container size="default">
        <SectionReveal className="space-y-4 border-b border-[#232220] pb-10">
          <div className="font-eyebrow text-accent">
            ENGINEERING JOURNAL
          </div>
          <h1 className="font-display-h1 text-foreground">
            Case Studies
          </h1>
          <p className="font-body-lead text-foreground-muted max-w-3xl">
            Detailed accounts of project origins, architecture decisions, engineering trade-offs, and lessons learned across distributed systems, local AI, and production platforms.
          </p>
        </SectionReveal>
      </Container>

      {/* Editorial Archive List */}
      <Container size="default">
        <div className="space-y-0 divide-y divide-[#232220]">
          {studies.map((study, idx) => (
            <SectionReveal
              key={study.slug}
              delay={idx * 50}
              className="group py-8 sm:py-12 first:pt-0"
            >
              <article className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                {/* Left Column: Sequence Number & Metadata (Narrow Column) */}
                <div className="md:col-span-3 flex md:flex-col justify-between md:justify-start items-baseline md:items-start gap-1.5 font-mono">
                  <span className="font-satoshi text-base sm:text-xl font-bold text-accent tracking-tight">
                    {study.number} /
                  </span>
                  <span className="text-xs text-foreground font-medium">
                    {study.category}
                  </span>
                  <span className="text-[11px] text-foreground-subtle">
                    {study.period}
                  </span>
                </div>

                {/* Right Column: Title, Subtitle, Description, Preview & Action */}
                <div className="md:col-span-9 space-y-4">
                  <div>
                    <h2 className="font-display text-xl sm:text-2xl font-medium tracking-tight text-foreground uppercase group-hover:text-white transition-colors">
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
                    <p className="text-xs sm:text-[13px] font-mono text-accent/90 mt-1">
                      {study.subtitle}
                    </p>
                  </div>

                  <p className="font-body text-xs sm:text-sm text-foreground-muted leading-relaxed">
                    {study.description}
                  </p>

                  {/* Selective Genuine Project Asset Preview */}
                  {study.image && (
                    <div className="relative mt-3 mb-2 rounded-[2px] border border-border overflow-hidden bg-surface-elevated aspect-[16/9] max-h-56 w-full">
                      <Image
                        src={study.image}
                        alt={`${study.title} runtime preview`}
                        fill
                        className="object-cover object-top opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                        sizes="(max-width: 768px) 100vw, 650px"
                      />
                    </div>
                  )}

                  {/* Technology Focus Row */}
                  <div className="text-[11px] font-mono text-foreground-subtle pt-1">
                    <span>{study.techFocus}</span>
                  </div>

                  {/* Read Action */}
                  <div className="pt-2">
                    <Button
                      href={`/case-study/${study.slug}`}
                      variant="text"
                      size="sm"
                      icon="arrow-right"
                    >
                      Read Case Study
                    </Button>
                  </div>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
