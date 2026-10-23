import { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import { PROJECTS, Project, TRAINING_PARENTS, ProjectCategory } from "../../../data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Curated deployed applications and software systems built by Vaibhav Gupta — including Stockfish WASM chess engines, distributed career platforms, AI orchestration, and system guardrails.",
  alternates: {
    canonical: "/projects",
  },
};

// Map parent training framework IDs to friendly names for display
const PARENT_FRAMEWORK_MAP: Record<string, string> = TRAINING_PARENTS.reduce(
  (acc, parent) => {
    acc[parent.id] = parent.name;
    return acc;
  },
  {} as Record<string, string>
);

// Structured categories for Section 2 (Broader Engineering Catalogue)
interface CatalogGroup {
  name: string;
  category: ProjectCategory;
  description: string;
}

const CATALOG_GROUPS: CatalogGroup[] = [
  {
    name: "Applied Projects & Systems Architecture",
    category: "Applied Projects",
    description: "Distributed architectures, AI agent orchestration, hybrid RAG search, and key-value cache engines",
  },
  {
    name: "System Integrity & DevSecOps Guardrails",
    category: "System Integrity & DevSecOps Guardrails",
    description: "Automated test suites, Playwright e2e harnesses, k6 stress testing, and OWASP ZAP security auditing",
  },
  {
    name: "Technical Training Frameworks & Practical Modules",
    category: "Technical Training Frameworks and Practical Modules",
    description: "Full-stack web applications and multi-agent pipelines completed under Lenovo LEAP, IBM SkillsBuild, and IBM-PBEL",
  },
  {
    name: "Academic Milestones — Formal Coursework Projects",
    category: "Academic Milestones — Formal Coursework Projects",
    description: "Geotagged environmental hazard detection prototypes and campus surveillance system integration specifications",
  },
  {
    name: "Built for No Reason Other Than Wanting To",
    category: "Built for No Reason Other Than Wanting To",
    description: "Creative interactive experiments and browser canvas visual explorations",
  },
  {
    name: "Retired Explorations & Early Architecture Builds",
    category: "Retired Explorations and Early Builds Used to Learn System Architecture",
    description: "Foundational builds exploring Spring Cloud microservices, TCP socket servers, concurrency, and auth patterns",
  },
  {
    name: "Client Work & Collaborations",
    category: "Client Work & Collaborations",
    description: "Bespoke digital platforms engineered for commercial client engagements",
  },
  {
    name: "Personal Websites & Platforms",
    category: "Personal Websites & Platforms",
    description: "Personal engineering publications, technical blogs, and digital scrapbooks",
  },
];

export default function ProjectsPage() {
  // Section 1: Derive curated deployed applications directly from canonical catalogue
  const mustCheckoutProjects = PROJECTS.filter((p) => p.mustCheckout);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-16 space-y-12 text-slate-300">
      {/* Editorial Page Header */}
      <header className="space-y-2 border-b border-slate-800/80 pb-6">
        <div className="text-xs font-mono font-semibold tracking-widest text-copper uppercase">
          ENGINEERING REPERTOIRE
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-100">
          Projects
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed italic pt-1">
          A curated selection of interactive deployed applications visitors can experience directly, alongside the broader catalog of 36 developed systems, developer tooling, and distributed software.
        </p>
      </header>

      {/* SECTION 1: MUST CHECKOUT (CURATED DEPLOYED EXPERIENCES) */}
      <section className="space-y-8">
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold tracking-widest text-copper flex items-center justify-between">
            <span>01 / MUST CHECKOUT</span>
            <span className="text-[11px] text-slate-400 font-normal">Interactive Live Deployments</span>
          </div>
          <div className="border-b border-slate-800/80" />
        </div>

        <div className="space-y-10">
          {mustCheckoutProjects.map((project, idx) => (
            <article
              key={project.id}
              className="space-y-3.5 pb-8 border-b border-slate-800/60 last:border-b-0"
            >
              {/* Header: Number, Title, & Live Badge */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div className="flex items-baseline gap-2.5">
                  <span className="text-xs font-mono font-bold text-copper">
                    0{idx + 1} /
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-100">
                    {project.title}
                  </h2>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 self-start sm:self-auto">
                  Live Deployed
                </span>
              </div>

              {/* Tagline */}
              <p className="text-xs font-mono text-slate-400 italic">
                &ldquo;{project.tagline}&rdquo;
              </p>

              {/* Technical Bullets / Highlights */}
              {project.bullets && project.bullets.length > 0 && (
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed list-none pl-0">
                  {project.bullets.slice(0, 2).map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-copper font-mono text-xs select-none">&gt;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Genuine Preview Asset when available */}
              {project.previewImage && (
                <div className="relative mt-2 mb-2 rounded border border-slate-800/90 overflow-hidden bg-slate-950/60 aspect-[16/9] max-h-56 w-full">
                  <Image
                    src={project.previewImage}
                    alt={`${project.title} live interface preview`}
                    fill
                    className="object-cover object-top opacity-85 hover:opacity-100 transition-opacity duration-200"
                    sizes="(max-width: 768px) 100vw, 650px"
                  />
                </div>
              )}

              {/* Tech Stack Row */}
              <div className="text-[11px] font-mono text-slate-400">
                {project.techStack.join(" · ")}
              </div>

              {/* Actions: Verified Live Application & Repository */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-copper hover:bg-copper-hover text-slate-950 font-semibold text-xs tracking-wide transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-copper/50"
                  >
                    <span>Open Live Application</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-950" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-sky-400 hover:underline transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-current" />
                    <span>Source Code</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-60 ml-0.5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 2: DEVELOPED SOFTWARE (COMPLETE 36-PROJECT CATALOGUE) */}
      <section className="space-y-8 pt-4">
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold tracking-widest text-slate-400 flex items-center justify-between">
            <span>02 / DEVELOPED SOFTWARE</span>
            <span className="text-[11px] text-slate-400 font-normal">
              Broader Engineering Catalog ({PROJECTS.length} Projects)
            </span>
          </div>
          <div className="border-b border-slate-800/80" />
        </div>

        <div className="space-y-10">
          {CATALOG_GROUPS.map((group) => {
            const items = PROJECTS.filter((p) => p.category === group.category);
            if (items.length === 0) return null;

            return (
              <div key={group.category} className="space-y-4">
                {/* Category Header */}
                <div>
                  <h3 className="text-xs sm:text-sm font-bold font-mono text-copper uppercase tracking-wider">
                    {group.name}
                  </h3>
                  <p className="text-xs text-slate-400 italic">
                    {group.description}
                  </p>
                </div>

                {/* Compact Item List */}
                <div className="space-y-3.5 pl-0">
                  {items.map((item: Project) => (
                    <article
                      key={item.id}
                      className="group pt-2 pb-3 border-b border-slate-800/40 last:border-b-0 space-y-1.5"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-sm sm:text-base font-bold text-slate-100 group-hover:text-sky-400 transition-colors">
                            {item.title}
                          </h4>
                          {item.parentFrameworkId && (
                            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-900 border border-slate-800 text-slate-400">
                              {PARENT_FRAMEWORK_MAP[item.parentFrameworkId] || item.parentFrameworkId}
                            </span>
                          )}
                          {item.demoUrl && !item.mustCheckout && (
                            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-950/40 border border-emerald-800/60 text-emerald-400">
                              Deployed
                            </span>
                          )}
                        </div>

                        {/* Action Links */}
                        <div className="flex items-center gap-3 shrink-0">
                          {item.demoUrl && (
                            <a
                              href={item.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 hover:text-emerald-300 hover:underline transition-colors"
                            >
                              <span>Demo</span>
                              <ExternalLink className="w-2.5 h-2.5 opacity-70" />
                            </a>
                          )}
                          {item.githubUrl ? (
                            <a
                              href={item.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-sky-400 hover:underline transition-colors"
                            >
                              <GithubIcon className="w-3 h-3 text-current" />
                              <span>Repository</span>
                              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                            </a>
                          ) : (
                            <span className="text-[10px] font-mono text-slate-500 italic">
                              Private / Client
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.tagline}
                      </p>

                      <div className="text-[11px] font-mono text-slate-400">
                        {item.techStack.join(" · ")}
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
