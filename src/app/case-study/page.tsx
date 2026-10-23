import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { CASE_STUDIES } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Engineering case studies documenting project origins, implementation, architecture, trade-offs, and outcomes.",
  alternates: {
    canonical: "/case-study",
  },
  openGraph: {
    type: "website",
    title: "Case Studies | Vaibhav Gupta",
    description:
      "Engineering case studies documenting project origins, implementation, architecture, trade-offs, and outcomes.",
    url: "/case-study",
  },
};

function getMonthYearLabel(dateStr: string) {
  const [year, month] = dateStr.split("-");
  const monthNames = [
    "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
  ];
  const mIndex = parseInt(month, 10) - 1;
  return `${monthNames[mIndex]} ${year}`;
}

export default function CaseStudiesPage() {
  const studies = [...CASE_STUDIES].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-12 space-y-6 text-slate-300">
      {/* Page Header */}
      <div className="space-y-2.5 border-b border-slate-800/80 pb-5">
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-100">
          Case Studies
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed italic">
          Engineering case studies documenting project origins, implementation, architecture, trade-offs, and outcomes.
        </p>
      </div>

      {/* Chronological Clean Archive List grouped by Period */}
      <div className="space-y-6">
        {studies.map((study, idx) => {
          const indexStr = `${studies.length - idx} /`;
          const currentMonth = study.date.substring(0, 7);
          const prevMonth = idx > 0 ? studies[idx - 1].date.substring(0, 7) : null;
          const isNewMonthGroup = idx === 0 || currentMonth !== prevMonth;

          return (
            <React.Fragment key={study.slug}>
              {isNewMonthGroup && (
                <div className={`space-y-2 ${idx > 0 ? "pt-6" : "pt-2"}`}>
                  <div className="text-xs font-mono font-bold tracking-widest text-slate-400">
                    {getMonthYearLabel(study.date)}
                  </div>
                  <div className="border-b border-slate-800/80" />
                </div>
              )}

              <article className="space-y-1.5 group">
                <h2 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:underline transition-all">
                  <Link href={`/case-study/${study.slug}`}>
                    {indexStr} {study.title}
                  </Link>
                </h2>

                <div className="text-xs font-mono text-slate-400">
                  <span>{study.category}</span>
                  <span className="mx-1.5 opacity-60">·</span>
                  <span>{study.techFocus}</span>
                  <span className="mx-1.5 opacity-60">·</span>
                  <span className="text-slate-400/90">{study.status}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {study.description}
                </p>
              </article>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
