import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-16 space-y-10 text-slate-300">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="text-xs font-mono text-slate-400">
        <Link
          href="/case-study"
          className="text-sky-400 hover:underline transition-colors font-medium inline-flex items-center gap-1.5"
        >
          &larr; Back to Case Studies
        </Link>
      </nav>

      {/* Article Header */}
      <header className="space-y-4 border-b border-slate-800/80 pb-8">
        <div className="flex items-center justify-between text-xs font-mono text-slate-500">
          <span className="text-copper font-semibold tracking-wider uppercase">Case Study #{study.number}</span>
          <span>{study.period}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100 leading-tight">
          {study.title}
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 font-medium leading-snug">
          {study.subtitle}
        </p>

        {/* Metadata Ribbon */}
        <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-mono text-slate-400">
          <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
            {study.category}
          </span>
          <span className="text-slate-600">·</span>
          <span>{study.techFocus}</span>
          <span className="text-slate-600">·</span>
          <span className="text-emerald-400 font-medium">{study.status}</span>
        </div>

        {/* Role & Links */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs font-mono text-slate-400">
          <div>
            <span className="text-slate-500">Engineering Role: </span>
            <span className="text-slate-300 font-sans">{narrative.role}</span>
          </div>

          <div className="flex items-center gap-3">
            {narrative.liveUrl && (
              <a
                href={narrative.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 hover:underline font-semibold"
              >
                Live Production &rarr;
              </a>
            )}
            {narrative.repoUrl && (
              <a
                href={narrative.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-slate-300 hover:text-white hover:underline"
              >
                Source Repository &rarr;
              </a>
            )}
          </div>
        </div>

        {/* Excerpt Lead */}
        <div className="text-base sm:text-lg text-slate-300 font-serif italic border-l-2 border-copper/80 pl-4 py-2 leading-relaxed bg-slate-900/30 rounded-r">
          {study.excerpt}
        </div>

        {/* Visual Preview */}
        {study.image && (
          <div className="relative rounded border border-slate-800/90 overflow-hidden bg-slate-950/60 aspect-[16/9] max-h-80 w-full mt-4">
            <Image
              src={study.image}
              alt={`${study.title} visual preview`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        )}

        {/* Quick Metrics Grid */}
        {narrative.quickMetrics && narrative.quickMetrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            {narrative.quickMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-3 rounded bg-slate-950/50 border border-slate-800/80 space-y-1"
              >
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  {metric.label}
                </div>
                <div className="text-base sm:text-lg font-bold font-mono text-slate-100">
                  {metric.value}
                </div>
                <div className="text-[11px] text-slate-500 leading-tight">
                  {metric.detail}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Evidence Ledger Badges */}
        <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] font-mono text-slate-400">
          <span className="text-slate-500 uppercase tracking-wider">Research Verification:</span>
          {narrative.evidenceTags.map((tag, idx) => (
            <span
              key={idx}
              className={`px-2 py-0.5 rounded text-[10px] font-mono border ${
                tag.type === "repo"
                  ? "bg-sky-950/40 border-sky-800/60 text-sky-300"
                  : tag.type === "conversation"
                  ? "bg-amber-950/40 border-amber-800/60 text-amber-300"
                  : "bg-emerald-950/40 border-emerald-800/60 text-emerald-300"
              }`}
            >
              [{tag.label}]
            </span>
          ))}
        </div>
      </header>

      {/* Table of Contents */}
      <section className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/90 space-y-2">
        <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
          Section Outline
        </h2>
        <nav className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs font-mono">
          {narrative.sections.map((sec, idx) => (
            <a
              key={idx}
              href={`#${sec.id}`}
              className="text-slate-400 hover:text-sky-400 hover:underline transition-colors truncate"
            >
              {sec.title}
            </a>
          ))}
          {narrative.openQuestionsAndExclusions.length > 0 && (
            <a
              href="#deliberate-exclusions"
              className="text-slate-400 hover:text-sky-400 hover:underline transition-colors truncate"
            >
              Deliberate Omissions & Limits
            </a>
          )}
        </nav>
      </section>

      {/* Detailed Narrative Sections */}
      <main className="space-y-12">
        {narrative.sections.map((sec) => (
          <section
            key={sec.id}
            id={sec.id}
            className="space-y-4 scroll-mt-20 border-b border-slate-800/60 pb-10 last:border-b-0"
          >
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
                {sec.title}
              </h2>
              {sec.lead && (
                <p className="text-sm sm:text-base text-sky-400/90 font-medium leading-snug">
                  {sec.lead}
                </p>
              )}
            </div>

            {/* Paragraphs */}
            <div className="space-y-3.5 text-sm sm:text-base leading-relaxed text-slate-300">
              {sec.content.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            {/* Callout Box */}
            {sec.callout && (
              <div
                className={`p-4 rounded-r border-l-4 my-4 space-y-1.5 ${
                  sec.callout.type === "invariant"
                    ? "bg-emerald-950/20 border-emerald-500/80 text-emerald-200"
                    : sec.callout.type === "insight"
                    ? "bg-sky-950/20 border-sky-500/80 text-sky-200"
                    : sec.callout.type === "dilemma"
                    ? "bg-purple-950/20 border-purple-500/80 text-purple-200"
                    : "bg-amber-950/20 border-amber-500/80 text-amber-200"
                }`}
              >
                <div className="text-xs font-mono uppercase tracking-wider font-semibold opacity-90">
                  {sec.callout.title}
                </div>
                <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {sec.callout.text}
                </div>
              </div>
            )}

            {/* ASCII Architecture Diagram */}
            {sec.diagram && (
              <div className="space-y-2 my-5">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="font-semibold text-slate-300">{sec.diagram.title}</span>
                  <span className="text-[11px] text-slate-500 font-mono">Architecture Map</span>
                </div>
                <pre className="overflow-x-auto text-[11px] sm:text-xs font-mono bg-slate-950/90 border border-slate-800/90 rounded-lg p-4 text-sky-300/90 leading-tight selection:bg-sky-900">
                  {sec.diagram.ascii}
                </pre>
                <p className="text-[11px] sm:text-xs text-slate-400 font-sans italic">
                  {sec.diagram.caption}
                </p>
              </div>
            )}

            {/* Code Block */}
            {sec.codeBlock && (
              <div className="space-y-1.5 my-5">
                <div className="flex items-center justify-between px-3 py-1.5 rounded-t bg-slate-900 border border-b-0 border-slate-800 text-xs font-mono text-slate-400">
                  <span className="font-semibold text-slate-300">{sec.codeBlock.title}</span>
                  <span className="text-copper text-[11px] uppercase">{sec.codeBlock.language}</span>
                </div>
                <pre className="overflow-x-auto text-xs sm:text-sm font-mono bg-slate-950 border border-slate-800 rounded-b p-4 text-slate-200 leading-relaxed">
                  <code>{sec.codeBlock.code}</code>
                </pre>
              </div>
            )}

            {/* Structured Table */}
            {sec.table && (
              <div className="space-y-2 my-5">
                <div className="overflow-x-auto rounded border border-slate-800">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-900 text-slate-300 font-mono text-[11px] uppercase tracking-wider border-b border-slate-800">
                      <tr>
                        {sec.table.headers.map((h, hIdx) => (
                          <th key={hIdx} className="px-3.5 py-2.5 font-semibold">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 bg-slate-950/40">
                      {sec.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-900/30 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="px-3.5 py-2 text-slate-300 font-mono text-xs">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {sec.table.caption && (
                  <p className="text-[11px] text-slate-400 italic font-sans">{sec.table.caption}</p>
                )}
              </div>
            )}

            {/* Content After Block */}
            {sec.contentAfter && sec.contentAfter.length > 0 && (
              <div className="space-y-3.5 text-sm sm:text-base leading-relaxed text-slate-300">
                {sec.contentAfter.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>
            )}
          </section>
        ))}

        {/* Deliberate Omissions & Unresolved Questions Section */}
        {narrative.openQuestionsAndExclusions.length > 0 && (
          <section
            id="deliberate-exclusions"
            className="space-y-4 scroll-mt-20 pt-4 border-t border-slate-800/80"
          >
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
                Deliberate Omissions & Open Technical Inquiries
              </h2>
              <p className="text-sm text-slate-400">
                To maintain evidence integrity, the following questions were examined against the research database and either omitted from factual claims or addressed with explicit limitations.
              </p>
            </div>

            <div className="space-y-3">
              {narrative.openQuestionsAndExclusions.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded bg-slate-950/40 border border-slate-800/80 space-y-1"
                >
                  <div className="text-xs sm:text-sm font-semibold font-mono text-amber-300/90">
                    Q: {item.question}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {item.resolutionOrLimitation}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Article Footer & Adjacent Navigation */}
      <footer className="pt-8 border-t border-slate-800/80 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevStudy ? (
            <Link
              href={`/case-study/${prevStudy.slug}`}
              className="group text-left text-xs font-mono text-slate-400 hover:text-sky-400 transition-colors"
            >
              <span className="block text-[10px] uppercase text-slate-500">&larr; Previous Case Study</span>
              <span className="font-semibold text-slate-200 group-hover:text-sky-300">
                #{prevStudy.number} {prevStudy.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          <Link
            href="/case-study"
            className="text-xs font-mono text-slate-400 hover:text-sky-400 hover:underline transition-colors"
          >
            &uarr; Back to all case studies
          </Link>

          {nextStudy ? (
            <Link
              href={`/case-study/${nextStudy.slug}`}
              className="group text-right text-xs font-mono text-slate-400 hover:text-sky-400 transition-colors"
            >
              <span className="block text-[10px] uppercase text-slate-500">Next Case Study &rarr;</span>
              <span className="font-semibold text-slate-200 group-hover:text-sky-300">
                #{nextStudy.number} {nextStudy.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </footer>
    </article>
  );
}
