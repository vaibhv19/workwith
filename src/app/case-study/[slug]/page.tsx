import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
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
    title: `${study.title} — Case Study`,
    description: study.excerpt,
    alternates: {
      canonical: `/case-study/${study.slug}`,
    },
    openGraph: {
      type: "article",
      title: `${study.title} — Case Study | Vaibhav Gupta`,
      description: study.excerpt,
      url: `/case-study/${study.slug}`,
      authors: ["Vaibhav Gupta"],
    },
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-12 space-y-8 text-slate-300">
      {/* Article Header */}
      <header className="space-y-3 border-b border-slate-800/80 pb-6">
        <div className="text-xs font-mono text-slate-400">
          <Link
            href="/case-study"
            className="text-sky-400 hover:underline transition-colors font-medium inline-flex items-center gap-1"
          >
            &larr; Back to Case Studies
          </Link>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 leading-tight">
          {study.title}
        </h1>

        <div className="text-xs font-mono text-slate-400 flex flex-wrap gap-y-1">
          <span>{study.category}</span>
          <span className="mx-2 opacity-60">·</span>
          <span>{study.techFocus}</span>
          <span className="mx-2 opacity-60">·</span>
          <span className="text-slate-300">{study.status}</span>
        </div>

        <p className="text-base sm:text-lg text-slate-300 font-serif italic border-l-2 border-copper/80 pl-4 py-1 leading-relaxed">
          {study.excerpt}
        </p>
      </header>

      {/* Case Study Content */}
      <div className="space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed">
        {/* Section 1: Overview & Premise */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100 border-b border-slate-800/80 pb-2">
            Origin & Overview
          </h2>
          <p className="text-slate-300 leading-relaxed">
            {study.overview}
          </p>
        </section>

        {/* Section 2: Architectural Decisions */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100 border-b border-slate-800/80 pb-2">
            Key Architectural Decisions
          </h2>
          <ul className="space-y-2.5 list-none pl-0">
            {study.keyDecisions.map((decision, index) => (
              <li key={index} className="flex items-start gap-2.5 text-sm sm:text-base">
                <span className="text-copper font-mono mt-1 select-none text-xs">&gt;</span>
                <span className="text-slate-300 leading-relaxed">{decision}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 3: Bottlenecks & Trade-offs */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100 border-b border-slate-800/80 pb-2">
            Engineering Bottlenecks & Trade-offs
          </h2>
          <ul className="space-y-2.5 list-none pl-0">
            {study.tradeoffs.map((tradeoff, index) => (
              <li key={index} className="flex items-start gap-2.5 text-sm sm:text-base">
                <span className="text-copper font-mono mt-1 select-none text-xs">&gt;</span>
                <span className="text-slate-300 leading-relaxed">{tradeoff}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 4: Current Status */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100 border-b border-slate-800/80 pb-2">
            Current Status
          </h2>
          <p className="text-slate-300 leading-relaxed">
            {study.currentStatus}
          </p>
        </section>
      </div>

      {/* Footer Navigation */}
      <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
        <Link
          href="/case-study"
          className="text-xs font-mono text-slate-400 hover:text-sky-400 hover:underline transition-colors"
        >
          &larr; Back to all case studies
        </Link>
        <Link
          href="/start-conversation"
          className="text-xs font-mono text-slate-400 hover:text-sky-400 hover:underline transition-colors"
        >
          Discuss this system &rarr;
        </Link>
      </div>
    </div>
  );
}
