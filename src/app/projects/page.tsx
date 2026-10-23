import { Metadata } from "next";
import Image from "next/image";
import { GithubIcon } from "@/components/BrandIcons";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionReveal from "@/components/ui/SectionReveal";
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
    <div className="py-10 sm:py-16 space-y-16 sm:space-y-24">
      {/* Editorial Page Header / Hero */}
      <Container size="default">
        <SectionReveal className="space-y-4 border-b border-[#232220] pb-10">
          <div className="font-eyebrow text-accent">
            ENGINEERING REPERTOIRE
          </div>
          <h1 className="font-display-h1 text-foreground">
            Projects &amp; Systems
          </h1>
          <p className="font-body-lead text-foreground-muted max-w-3xl">
            A curated selection of interactive deployed applications visitors can experience directly, alongside the broader catalog of 36 developed systems, developer tooling, and distributed software.
          </p>
        </SectionReveal>
      </Container>

      {/* SECTION 1: MUST CHECKOUT (CURATED DEPLOYED EXPERIENCES) */}
      <Container size="default">
        <div className="space-y-10">
          <SectionReveal className="space-y-2 border-b border-[#232220] pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="font-satoshi text-xs font-bold text-accent">01 /</span>
                <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase text-foreground">
                  MUST CHECKOUT
                </span>
              </div>
              <span className="text-[11px] font-mono text-foreground-subtle uppercase tracking-wider">
                Interactive Live Deployments
              </span>
            </div>
          </SectionReveal>

          <div className="space-y-8 sm:space-y-12">
            {mustCheckoutProjects.map((project, idx) => (
              <SectionReveal
                key={project.id}
                delay={idx * 60}
                className="surface-card bg-surface border border-border p-6 sm:p-8 space-y-6"
              >
                {/* Header: Number, Title, & Live Badge */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#232220] pb-4">
                  <div className="flex items-baseline space-x-3">
                    <span className="font-satoshi text-xs font-bold text-accent">
                      0{idx + 1}
                    </span>
                    <h2 className="font-display text-xl sm:text-2xl font-medium tracking-tight text-foreground uppercase">
                      {project.title}
                    </h2>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-accent bg-accent/10 border border-accent/30 px-2 py-0.5 rounded-[2px] self-start sm:self-auto">
                    Live Deployed
                  </span>
                </div>

                {/* Tagline */}
                <p className="text-xs sm:text-sm font-sans italic text-foreground-muted">
                  &ldquo;{project.tagline}&rdquo;
                </p>

                {/* Technical Bullets / Highlights */}
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
                  <div className="relative rounded-[2px] border border-border overflow-hidden bg-surface-elevated aspect-[16/9] max-h-64 w-full">
                    <Image
                      src={project.previewImage}
                      alt={`${project.title} live interface preview`}
                      fill
                      className="object-cover object-top opacity-90 hover:opacity-100 transition-opacity duration-300"
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
              </SectionReveal>
            ))}
          </div>
        </div>
      </Container>

      {/* SECTION 2: DEVELOPED SOFTWARE (COMPLETE 36-PROJECT CATALOGUE) */}
      <Container size="default">
        <div className="space-y-10">
          <SectionReveal className="space-y-2 border-b border-[#232220] pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="font-satoshi text-xs font-bold text-accent">02 /</span>
                <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase text-foreground">
                  DEVELOPED SOFTWARE
                </span>
              </div>
              <span className="text-[11px] font-mono text-foreground-subtle uppercase tracking-wider">
                Broader Engineering Catalog ({PROJECTS.length} Projects)
              </span>
            </div>
          </SectionReveal>

          <div className="space-y-12">
            {CATALOG_GROUPS.map((group) => {
              const items = PROJECTS.filter((p) => p.category === group.category);
              if (items.length === 0) return null;

              return (
                <div key={group.category} className="space-y-5">
                  {/* Category Header */}
                  <div className="border-b border-[#232220] pb-2">
                    <h3 className="font-display text-base sm:text-lg font-medium text-foreground tracking-tight uppercase">
                      {group.name}
                    </h3>
                    <p className="text-xs text-foreground-muted italic pt-0.5">
                      {group.description}
                    </p>
                  </div>

                  {/* Compact Item List */}
                  <div className="grid grid-cols-1 gap-3">
                    {items.map((item: Project) => (
                      <article
                        key={item.id}
                        className="surface-card bg-surface/80 hover:bg-surface border border-border hover:border-border-light p-4 sm:p-5 space-y-2 transition-all duration-300"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5">
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <h4 className="font-display text-base font-medium text-foreground uppercase tracking-tight">
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

                          {/* Action Links */}
                          <div className="flex items-center gap-3 shrink-0 pt-1 sm:pt-0">
                            {item.demoUrl && (
                              <a
                                href={item.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[11px] font-mono text-accent hover:text-white transition-colors"
                              >
                                <span>Demo ↗</span>
                              </a>
                            )}
                            {item.githubUrl ? (
                              <a
                                href={item.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[11px] font-mono text-foreground-muted hover:text-white transition-colors"
                              >
                                <GithubIcon className="w-3 h-3 text-current" />
                                <span>Repository ↗</span>
                              </a>
                            ) : (
                              <span className="text-[10px] font-mono text-foreground-subtle italic">
                                Private / Client
                              </span>
                            )}
                          </div>
                        </div>

                        <p className="text-xs sm:text-[13px] text-foreground-muted leading-relaxed">
                          {item.tagline}
                        </p>

                        <div className="text-[11px] font-mono text-foreground-subtle">
                          {item.techStack.join(" · ")}
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
