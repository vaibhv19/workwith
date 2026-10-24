import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import TextReveal from "@/components/ui/TextReveal";
import { CASE_STUDIES } from "@/data/caseStudies";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES.find((s) => s.slug === slug);
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.title} — Engineering Case Study`,
    description: study.narrative.metaDescription || study.excerpt,
    alternates: {
      canonical: `/case-study/${study.slug}`,
    },
    openGraph: {
      type: "article",
      title: `${study.title}: ${study.subtitle} | Vaibhav Gupta`,
      description: study.narrative.metaDescription || study.excerpt,
      url: `/case-study/${study.slug}`,
      authors: ["Vaibhav Gupta"],
    },
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((s) => s.slug === slug);

  if (!study || !study.narrative) {
    notFound();
  }

  const { narrative } = study;

  // Find previous and next studies for navigation
  const currentIndex = CASE_STUDIES.findIndex((s) => s.slug === slug);
  const prevStudy = currentIndex > 0 ? CASE_STUDIES[currentIndex - 1] : null;
  const nextStudy = currentIndex < CASE_STUDIES.length - 1 ? CASE_STUDIES[currentIndex + 1] : null;

  return (
    <article className="pt-6 sm:pt-8 md:pt-10 pb-16 sm:pb-24 space-y-12 sm:space-y-16">
      <Container size="default">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-foreground-subtle pb-6">
          <Link
            href="/case-study"
            className="text-accent hover:text-white transition-colors font-medium inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-sm group"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">&larr;</span>
            <span>Back to Case Studies</span>
          </Link>
        </nav>

        {/* Article Header */}
        <header className="space-y-6 border-b border-border pb-8">
          <div className="flex items-center justify-between text-xs text-foreground-muted">
            <span className="font-medium text-foreground">
              {study.category}
            </span>
            <span>{study.period}</span>
          </div>

          <h1 className="font-display-hero text-foreground">
            {study.title}
          </h1>

          <TextReveal
            text={study.subtitle}
            as="p"
            charDelayMs={14}
            className="font-display text-lg sm:text-2xl text-foreground-muted leading-snug"
          />

          {/* Metadata Row */}
          <div className="pt-1 flex flex-wrap items-center gap-2 text-xs text-foreground-muted">
            <span>{study.techFocus}</span>
          </div>

          {/* Role & Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-border text-xs">
            <div>
              <span className="text-foreground-muted">Role: </span>
              <span className="text-foreground font-medium">{narrative.role}</span>
            </div>

            <div className="flex items-center gap-3">
              {narrative.liveUrl && (
                <Button
                  href={narrative.liveUrl}
                  external
                  variant="primary"
                  size="sm"
                  icon="arrow-up-right"
                >
                  Open Application
                </Button>
              )}
              {narrative.repoUrl && (
                <Button
                  href={narrative.repoUrl}
                  external
                  variant="secondary"
                  size="sm"
                  icon="arrow-up-right"
                >
                  Source Code
                </Button>
              )}
            </div>
          </div>

          {/* Excerpt Lead */}
          <p className="text-base sm:text-lg text-foreground-muted font-sans leading-relaxed pt-1">
            {study.excerpt}
          </p>

          {/* Quick Metrics Strip */}
          {narrative.quickMetrics && narrative.quickMetrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-border">
              {narrative.quickMetrics.map((metric, idx) => (
                <div key={idx} className="space-y-1 min-w-0">
                  <div className="text-xs text-foreground-muted font-medium truncate">
                    {metric.label}
                  </div>
                  <div className="font-metric text-base sm:text-lg lg:text-xl font-bold text-foreground break-words">
                    {metric.value}
                  </div>
                  <div className="text-xs text-foreground-subtle leading-tight">
                    {metric.detail}
                  </div>
                </div>
              ))}
            </div>
          )}
        </header>

        {/* Table of Contents */}
        <section className="p-5 my-8 rounded-[2px] bg-surface/60 border border-border space-y-3">
          <h2 className="text-xs font-semibold text-foreground">
            Table of Contents
          </h2>
          <nav className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs font-mono">
            {narrative.sections.map((sec, idx) => (
              <a
                key={idx}
                href={`#${sec.id}`}
                className="text-foreground-muted hover:text-accent transition-colors truncate"
              >
                {sec.title}
              </a>
            ))}
            {narrative.openQuestionsAndExclusions.length > 0 && (
              <a
                href="#scope-and-tradeoffs"
                className="text-foreground-muted hover:text-accent transition-colors truncate"
              >
                Scope &amp; Trade-offs
              </a>
            )}
          </nav>
        </section>

        {/* Detailed Narrative Sections */}
        <main className="space-y-12 sm:space-y-16">
          {narrative.sections.map((sec) => (
            <section
              key={sec.id}
              id={sec.id}
              className="space-y-5 scroll-mt-24 border-b border-border pb-12 last:border-b-0"
            >
              <div className="space-y-1.5">
                <h2 className="font-display text-xl sm:text-2xl font-medium tracking-tight text-foreground">
                  {sec.title}
                </h2>
                {sec.lead && (
                  <p className="font-body-lead text-foreground-muted">
                    {sec.lead}
                  </p>
                )}
              </div>

              {/* Paragraphs */}
              <div className="space-y-4 font-body text-foreground-muted leading-relaxed">
                {sec.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {/* Callout Box */}
              {sec.callout && (
                <div className="p-4 sm:p-5 rounded-[2px] border border-border bg-surface-elevated/70 my-5 space-y-1.5">
                  <div className="text-xs font-semibold text-foreground">
                    {sec.callout.title}
                  </div>
                  <div className="text-xs sm:text-sm text-foreground-muted leading-relaxed font-sans">
                    {sec.callout.text}
                  </div>
                </div>
              )}

              {/* ASCII Architecture Diagram */}
              {sec.diagram && (
                <div className="space-y-2 my-6">
                  <div className="flex items-center justify-between text-xs font-mono text-foreground-subtle">
                    <span className="font-medium text-foreground">{sec.diagram.title}</span>
                  </div>
                  <pre className="overflow-x-auto text-[11px] sm:text-xs font-mono bg-[#070707] border border-border rounded-[2px] p-5 text-foreground-muted leading-tight selection:bg-accent/20">
                    {sec.diagram.ascii}
                  </pre>
                  <p className="text-[11px] text-foreground-subtle italic">
                    {sec.diagram.caption}
                  </p>
                </div>
              )}

              {/* Code Block */}
              {sec.codeBlock && (
                <div className="space-y-0 my-6">
                  <div className="flex items-center justify-between px-4 py-2 rounded-t-[2px] bg-surface-elevated border border-b-0 border-border text-xs font-mono text-foreground-muted">
                    <span className="font-medium text-foreground">{sec.codeBlock.title}</span>
                    <span className="text-foreground-muted text-xs font-mono">{sec.codeBlock.language}</span>
                  </div>
                  <pre className="overflow-x-auto text-xs font-mono bg-[#070707] border border-border rounded-b-[2px] p-4 text-foreground-muted leading-relaxed">
                    <code>{sec.codeBlock.code}</code>
                  </pre>
                </div>
              )}

              {/* Structured Table */}
              {sec.table && (
                <div className="space-y-2 my-6">
                  <div className="overflow-x-auto rounded-[2px] border border-border">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-surface-elevated text-foreground text-xs font-medium border-b border-border">
                        <tr>
                          {sec.table.headers.map((h, hIdx) => (
                            <th key={hIdx} className="px-4 py-3 font-semibold">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/60 bg-surface">
                        {sec.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-surface-elevated transition-colors">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="px-4 py-2.5 text-foreground-muted font-mono text-xs">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {sec.table.caption && (
                    <p className="text-[11px] text-foreground-subtle italic">{sec.table.caption}</p>
                  )}
                </div>
              )}

              {/* Content After Block */}
              {sec.contentAfter && sec.contentAfter.length > 0 && (
                <div className="space-y-4 font-body text-foreground-muted leading-relaxed pt-2">
                  {sec.contentAfter.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              )}
            </section>
          ))}

          {/* Scope Boundaries & Engineering Trade-offs */}
          {narrative.openQuestionsAndExclusions.length > 0 && (
            <section
              id="scope-and-tradeoffs"
              className="space-y-5 scroll-mt-24 pt-4 border-b border-border pb-12"
            >
              <div className="space-y-1">
                <h2 className="font-display text-xl sm:text-2xl font-medium tracking-tight text-foreground">
                  Scope Boundaries &amp; Engineering Trade-offs
                </h2>
                <p className="font-body-lead text-foreground-muted text-xs sm:text-sm">
                  Documented trade-offs, scope decisions, and architectural boundaries.
                </p>
              </div>

              <div className="space-y-3">
                {narrative.openQuestionsAndExclusions.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-[2px] bg-surface/60 border border-border space-y-1"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-foreground-subtle select-none">&bull;</span>
                      <h3 className="font-mono text-xs sm:text-[13px] font-semibold text-foreground">
                        {item.question}
                      </h3>
                    </div>
                    <p className="text-xs text-foreground-muted leading-relaxed pl-3.5">
                      {item.resolutionOrLimitation}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>

        {/* Case Study Pagination */}
        <footer className="pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
          {prevStudy ? (
            <Link
              href={`/case-study/${prevStudy.slug}`}
              className="text-foreground-muted hover:text-accent transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-sm group"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">&larr;</span>
              <span>Prev: {prevStudy.title}</span>
            </Link>
          ) : (
            <span className="text-foreground-subtle">Start of Case Studies</span>
          )}

          {nextStudy ? (
            <Link
              href={`/case-study/${nextStudy.slug}`}
              className="text-foreground-muted hover:text-accent transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-sm group"
            >
              <span>Next: {nextStudy.title}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
          ) : (
            <span className="text-foreground-subtle">End of Case Studies</span>
          )}
        </footer>
      </Container>
    </article>
  );
}
