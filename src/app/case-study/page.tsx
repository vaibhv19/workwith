import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-16 space-y-10 text-slate-300">
      {/* Editorial Header */}
      <div className="space-y-2 border-b border-slate-800/80 pb-6">
        <div className="text-xs font-mono font-semibold tracking-widest text-copper uppercase">
          ENGINEERING JOURNAL
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-100">
          Case Studies
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed italic pt-1">
          Detailed accounts of project origins, architecture decisions, engineering trade-offs, and lessons learned across distributed systems, local AI, and production platforms.
        </p>
      </div>

      {/* Editorial Archive List */}
      <div className="space-y-0 divide-y divide-slate-800/70">
        {studies.map((study) => (
          <article
            key={study.slug}
            className="group py-8 sm:py-9 first:pt-2 transition-colors"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start">
              {/* Left Column: Sequence Number & Metadata (Narrow Column) */}
              <div className="md:col-span-3 flex md:flex-col justify-between md:justify-start items-baseline md:items-start gap-1 font-mono">
                <span className="text-base sm:text-lg font-bold text-copper font-mono tracking-tight">
                  {study.number} /
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {study.category}
                </span>
                <span className="text-[11px] text-slate-400">
                  {study.period}
                </span>
              </div>

              {/* Right Column: Title, Subtitle, Description, Selective Visual & Action (Main Column) */}
              <div className="md:col-span-9 space-y-3">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-sky-400 transition-colors">
                    <Link
                      href={`/case-study/${study.slug}`}
                      className="inline-flex items-center gap-2 focus:outline-none"
                    >
                      <span>{study.title}</span>
                      <span className="text-sky-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-sm font-normal">
                        &rarr;
                      </span>
                    </Link>
                  </h2>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    {study.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {study.description}
                </p>

                {/* Selective Genuine Project Asset Preview */}
                {study.image && (
                  <div className="relative mt-3 mb-2 rounded border border-slate-800/90 overflow-hidden bg-slate-950/60 aspect-[16/9] max-h-48 sm:max-h-56 w-full">
                    <Image
                      src={study.image}
                      alt={`${study.title} runtime preview`}
                      fill
                      className="object-cover object-top opacity-85 group-hover:opacity-100 transition-opacity duration-200"
                      sizes="(max-width: 768px) 100vw, 550px"
                    />
                  </div>
                )}

                {/* Technology Focus Row */}
                <div className="text-[11px] font-mono text-slate-400 pt-1">
                  <span className="text-slate-400/90">{study.techFocus}</span>
                </div>

                {/* Subtle Read Action */}
                <div className="pt-1.5">
                  <Link
                    href={`/case-study/${study.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-400 hover:underline font-semibold"
                  >
                    <span>Read Case Study</span>
                    <span className="transition-transform duration-150 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
