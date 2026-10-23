import { Metadata } from "next";
import Image from "next/image";
import { GithubIcon } from "@/components/BrandIcons";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Marquee from "@/components/ui/Marquee";
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
  // Section 1: Flagship live deployed projects
  const mustCheckoutProjects = PROJECTS.filter((p) => p.mustCheckout);

  return (
    <div className="py-10 sm:py-16 space-y-16 sm:space-y-24">
      {/* Page Header */}
      <Container size="default">
        <header className="space-y-4 border-b border-border pb-8">
          <h1 className="font-display-h1 text-foreground">
            Projects &amp; Systems
          </h1>
          <p className="font-body-lead text-foreground-muted max-w-3xl">
            A curated selection of interactive deployed applications visitors can experience directly, alongside the broader catalog of 36 developed systems, developer tooling, and distributed software.
          </p>
        </header>
      </Container>

      {/* SECTION 1: MUST CHECKOUT (CURATED DEPLOYED EXPERIENCES) */}
      <Container size="default">
        <div className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border pb-4">
            <div className="flex items-baseline space-x-3">
              <span className="font-metric text-xs font-bold text-accent">01 /</span>
              <h2 className="font-sans text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase text-foreground">
                Must Checkout
              </h2>
            </div>
            <span className="text-[11px] font-mono text-foreground-subtle">
              Curated Interactive Deployments
            </span>
          </div>

          <div className="space-y-12">
            {mustCheckoutProjects.map((project, idx) => (
              <article
                key={project.id}
                className="surface-card bg-surface/90 border border-border p-6 sm:p-8 space-y-6 rounded-md hover:border-border-light transition-colors"
              >
                {/* Header: Title & Deployment Status */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-border pb-4">
                  <div className="flex items-baseline space-x-3">
                    <span className="font-metric text-xs font-bold text-accent">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-medium tracking-tight text-foreground uppercase">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-accent bg-accent/10 border border-accent/30 px-2 py-0.5 rounded-[2px] self-start sm:self-auto">
                    Live Deployed
                  </span>
                </div>

                {/* Tagline */}
                <p className="text-xs sm:text-sm font-sans italic text-foreground-muted">
                  &ldquo;{project.tagline}&rdquo;
                </p>

                {/* Technical Bullets */}
                {project.bullets && project.bullets.length > 0 && (
                  <ul className="space-y-2 text-xs sm:text-sm text-foreground-muted leading-relaxed list-none pl-0">
                    {project.bullets.slice(0, 2).map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="text-accent font-mono text-xs select-none mt-0.5">&gt;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Genuine Preview Asset when available */}
                {project.previewImage && (
                  <div className="relative rounded-[2px] border border-border overflow-hidden bg-surface-elevated aspect-[16/9] max-h-64 w-full group/img">
                    <Image
                      src={project.previewImage}
                      alt={`${project.title} live interface preview`}
                      fill
                      className="object-cover object-top opacity-90 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                )}

                {/* Tech Stack Row */}
                <div className="text-[11px] font-mono text-foreground-subtle tracking-wide">
                  {project.techStack.join(" · ")}
                </div>

                {/* Actions: Verified Live Application & Repository */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {project.demoUrl && (
                    <Button
                      href={project.demoUrl}
                      external
                      variant="primary"
                      size="sm"
                      icon="arrow-up-right"
                    >
                      Open Live Application
                    </Button>
                  )}

                  {project.githubUrl && (
                    <Button
                      href={project.githubUrl}
                      external
                      variant="secondary"
                      size="sm"
                      icon="arrow-up-right"
                    >
                      Source Code
                    </Button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>

      {/* ARCHITECTURE CAPABILITIES MARQUEE (1NFINITY CONTINUOUS TRACK) */}
      <div className="border-y border-border/70 bg-surface/30 py-3.5 my-4 sm:my-8 overflow-hidden">
        <Marquee speed="normal" pauseOnHover fadeEdges>
          <div className="flex items-center space-x-8 text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-foreground-muted px-4">
            <span>DISTRIBUTED ARCHITECTURES</span>
            <span className="text-accent/60 select-none">✦</span>
            <span>LOCAL LLM ORCHESTRATION</span>
            <span className="text-accent/60 select-none">✦</span>
            <span>STOCKFISH WASM &amp; WEB WORKERS</span>
            <span className="text-accent/60 select-none">✦</span>
            <span>ATOMIC WORKER QUEUES</span>
            <span className="text-accent/60 select-none">✦</span>
            <span>HYBRID RAG RETRIEVAL</span>
            <span className="text-accent/60 select-none">✦</span>
            <span>DEVSECOPS GUARDRAILS</span>
            <span className="text-accent/60 select-none">✦</span>
            <span>ZERO-CRON ENGINE SCHEDULING</span>
            <span className="text-accent/60 select-none">✦</span>
            <span>LIGHTHOUSE 95+ COMPLIANCE</span>
            <span className="text-accent/60 select-none">✦</span>
          </div>
        </Marquee>
      </div>

      {/* SECTION 2: DEVELOPED SOFTWARE (HIGH-DENSITY EDITORIAL CATALOGUE LEDGER) */}
      <Container size="default">
        <div className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border pb-4">
            <div className="flex items-baseline space-x-3">
              <span className="font-metric text-xs font-bold text-accent">02 /</span>
              <h2 className="font-sans text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase text-foreground">
                Developed Software
              </h2>
            </div>
            <span className="text-[11px] font-mono text-foreground-subtle">
              Complete Engineering Catalogue ({PROJECTS.length} Systems)
            </span>
          </div>

          <div className="space-y-12">
            {CATALOG_GROUPS.map((group) => {
              const items = PROJECTS.filter((p) => p.category === group.category);
              if (items.length === 0) return null;

              return (
                <div key={group.category} className="space-y-4">
                  {/* Category Header */}
                  <div className="border-b border-border pb-2">
                    <h3 className="font-display text-base sm:text-lg font-medium text-foreground tracking-tight uppercase">
                      {group.name}
                    </h3>
                    <p className="text-xs text-foreground-muted pt-0.5">
                      {group.description}
                    </p>
                  </div>

                  {/* Clean Editorial Catalogue Ledger (No redundant card landfill) */}
                  <div className="divide-y divide-border/60">
                    {items.map((item: Project) => (
                      <article
                        key={item.id}
                        className="py-4 px-2 -mx-2 hover:bg-surface/50 rounded-[2px] transition-colors flex flex-col md:flex-row md:items-baseline justify-between gap-3 group"
                      >
                        {/* Left Column: Title, Framework, Description & Stack */}
                        <div className="space-y-1.5 flex-1 max-w-3xl">
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <h4 className="font-sans text-sm font-semibold text-foreground group-hover:text-white transition-colors">
                              {item.title}
                            </h4>
                            {item.parentFrameworkId && (
                              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-[2px] bg-surface-elevated border border-border text-accent">
                                {PARENT_FRAMEWORK_MAP[item.parentFrameworkId] || item.parentFrameworkId}
                              </span>
                            )}
                            {item.demoUrl && !item.mustCheckout && (
                              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-[2px] bg-accent/10 border border-accent/30 text-accent uppercase tracking-wider">
                                Deployed
                              </span>
                            )}
                          </div>

                          <p className="text-xs text-foreground-muted leading-relaxed">
                            {item.tagline}
                          </p>

                          <div className="text-[11px] font-mono text-foreground-subtle pt-0.5">
                            {item.techStack.join(" · ")}
                          </div>
                        </div>

                        {/* Right Column: Direct Verified Actions */}
                        <div className="flex items-center gap-4 shrink-0 pt-1 md:pt-0 self-start md:self-baseline">
                          {item.demoUrl && (
                            <a
                              href={item.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-mono text-accent hover:text-white transition-colors"
                            >
                              <span>Live Demo ↗</span>
                            </a>
                          )}
                          {item.githubUrl ? (
                            <a
                              href={item.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-mono text-foreground-muted hover:text-white transition-colors"
                            >
                              <GithubIcon className="w-3.5 h-3.5 text-current" />
                              <span>Repository ↗</span>
                            </a>
                          ) : (
                            <span className="text-[10px] font-mono text-foreground-subtle italic">
                              Private / Client
                            </span>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
