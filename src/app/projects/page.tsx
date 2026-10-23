import { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import { PROJECTS, Project } from "../../../data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Curated deployed applications and software systems built by Vaibhav Gupta — including Stockfish WASM chess engines, distributed career platforms, AI orchestration, and system guardrails.",
  alternates: {
    canonical: "/projects",
  },
};

// Curated selection of projects with verified, working live deployments
const MUST_CHECKOUT_IDS = [
  "checkmate-analyze",
  "trajectory",
  "1nfinity",
  "the-tiffin-dispatch",
  "birthday-wish",
];

const PREVIEW_ASSETS: Record<string, string> = {
  "checkmate-analyze": "/images/projects/checkmate-preview.png",
  "1nfinity": "/images/projects/1nfinity-preview.webp",
};

export default function ProjectsPage() {
  const mustCheckoutProjects = MUST_CHECKOUT_IDS.map((id) =>
    PROJECTS.find((p) => p.id === id)
  ).filter((p): p is Project => p !== undefined && Boolean(p.demoUrl));

  // All developed software excluding redundant display in section 1
  const developedProjects = PROJECTS;

  // Distinct category names for organization
  const categories = Array.from(
    new Set(developedProjects.map((p) => p.category))
  );

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-16 space-y-12 text-slate-300">
      {/* Page Title & Mission Statement */}
      <header className="space-y-2 border-b border-slate-800/80 pb-5">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
          Projects
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
          A spectrum of software built, explored, and shipped. From client-side
          WebAssembly engines to distributed backends, AI orchestration systems,
          and automated resilience suites.
        </p>
      </header>

      {/* SECTION 1: MUST CHECKOUT */}
      <section aria-labelledby="must-checkout-heading" className="space-y-6">
        <div className="border-b border-slate-800/80 pb-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
          <h2
            id="must-checkout-heading"
            className="text-xs sm:text-sm font-bold text-copper font-mono uppercase tracking-wider"
          >
            01 / Must Checkout
          </h2>
          <span className="text-xs font-mono text-slate-400">
            Live, interactive deployments
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
          Curated applications you can open and test directly in your browser.
          Each project solves a concrete problem, runs live in production, and
          does not require account creation to explore.
        </p>

        <div className="space-y-6">
          {mustCheckoutProjects.map((project) => {
            const previewImage = PREVIEW_ASSETS[project.id];

            return (
              <article
                key={project.id}
                className="group border border-slate-800/80 bg-[#111622]/50 hover:border-slate-700/90 transition-all rounded-sm p-4 sm:p-5 space-y-4"
              >
                {/* Visual Preview Screenshot (if verified asset exists) */}
                {previewImage && (
                  <div className="relative aspect-video w-full rounded-sm overflow-hidden border border-slate-800 bg-[#0a0d14]">
                    <Image
                      src={previewImage}
                      alt={`${project.title} live interface preview`}
                      fill
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                      sizes="(max-width: 768px) 100vw, 768px"
                    />
                  </div>
                )}

                {/* Header: Title and Live Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-100 tracking-tight">
                    {project.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 self-start text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 px-2 py-0.5 rounded-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Deployment
                  </span>
                </div>

                {/* Description / Tagline */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {project.tagline}
                </p>

                {/* Key Technical Highlights */}
                {project.bullets && project.bullets.length > 0 && (
                  <ul className="space-y-1.5 text-xs text-slate-400 font-sans list-disc list-inside">
                    {project.bullets.slice(0, 2).map((bullet, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono text-slate-400 bg-[#0a0d14] border border-slate-800 px-2 py-0.5 rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions: Live Application & Repository */}
                <div className="pt-2 border-t border-slate-800/60 flex flex-wrap items-center gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-copper hover:bg-copper-hover rounded-sm transition-all focus:outline-none focus:ring-1 focus:ring-copper/50 cursor-pointer"
                    >
                      <span>Open Application</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-950" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-300 hover:text-sky-400 border border-slate-800 hover:border-slate-700 bg-[#0a0d14]/70 rounded-sm transition-all focus:outline-none cursor-pointer"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* SECTION 2: DEVELOPED SOFTWARE */}
      <section aria-labelledby="developed-software-heading" className="space-y-8 pt-6">
        <div className="border-b border-slate-800/80 pb-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
          <h2
            id="developed-software-heading"
            className="text-xs sm:text-sm font-bold text-copper font-mono uppercase tracking-wider"
          >
            02 / Developed Software
          </h2>
          <span className="text-xs font-mono text-slate-400">
            {developedProjects.length} Systems &amp; Projects Catalogued
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
          The wider body of software engineering, distributed systems, backend
          architectures, and technical experiments developed over time. Each
          entry includes its technical stack, architecture focus, and direct
          repository link.
        </p>

        {/* Grouped by Category for Editorial Clarity */}
        <div className="space-y-10">
          {categories.map((category) => {
            const categoryProjects = developedProjects.filter(
              (p) => p.category === category
            );

            return (
              <div key={category} className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-wider text-sky-400 border-b border-slate-800/40 pb-1">
                  {category}
                </h3>

                <div className="space-y-3">
                  {categoryProjects.map((project) => (
                    <article
                      key={project.id}
                      className="border border-slate-800/70 bg-[#111622]/30 hover:border-slate-700/80 p-3.5 sm:p-4 rounded-sm transition-all space-y-2.5"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                        <div className="space-y-1 flex-1">
                          <h4 className="text-base font-bold text-slate-100 tracking-tight">
                            {project.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                            {project.tagline}
                          </p>
                        </div>

                        {/* External Actions (Repo or Demo) */}
                        <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${project.title} GitHub repository`}
                              title={`${project.title} GitHub repository`}
                              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono text-slate-400 hover:text-sky-400 hover:border-slate-700 border border-slate-800/80 rounded-sm bg-[#0a0d14] transition-all"
                            >
                              <GithubIcon className="w-3 h-3" />
                              <span>Repo</span>
                            </a>
                          )}
                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${project.title} Live Application`}
                              title={`${project.title} Live Application`}
                              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono text-copper hover:text-copper-hover hover:border-copper/40 border border-copper/20 rounded-sm bg-[#0a0d14] transition-all"
                            >
                              <ExternalLink className="w-3 h-3" />
                              <span>Live</span>
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] sm:text-[11px] font-mono text-slate-400 bg-[#0a0d14]/80 border border-slate-800/70 px-2 py-0.5 rounded-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
