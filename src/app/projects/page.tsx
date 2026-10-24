import { Metadata } from "next";
import { GithubIcon } from "@/components/BrandIcons";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
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
  // Section 1: All verified projects deployed on Vercel
  const mustCheckoutProjects = PROJECTS.filter((p) => p.mustCheckout);
  const mustCheckoutIds = new Set(mustCheckoutProjects.map((p) => p.id));
  const remainingCatalogCount = PROJECTS.length - mustCheckoutProjects.length;

  return (
    <Container size="default" className="pt-6 sm:pt-8 md:pt-10 pb-16 sm:pb-24 space-y-8 sm:space-y-12">
      {/* Page Header */}
      <header className="space-y-2.5 sm:space-y-3 border-b border-border pb-6 sm:pb-7">
        <h1 className="font-display text-2xl sm:text-3xl md:text-[2.25rem] font-medium tracking-tight text-foreground leading-[1.15]">
          Projects &amp; Systems
        </h1>
        <p className="font-body text-sm sm:text-base text-foreground-muted leading-relaxed max-w-2xl font-light">
          A curated selection of interactive live applications alongside the complete catalog of 36 software projects, distributed systems, and developer tools.
        </p>
      </header>

      {/* SECTION 1: MUST CHECKOUT (ALL VERIFIED VERCEL DEPLOYMENTS) */}
      <section aria-labelledby="must-checkout-heading" className="space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border pb-3">
          <h2 id="must-checkout-heading" className="font-display text-xl sm:text-2xl font-medium tracking-tight text-foreground">
            Must Checkout
          </h2>
          <span className="text-xs text-foreground-muted">
            {mustCheckoutProjects.length} live applications deployed on Vercel
          </span>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {mustCheckoutProjects.map((project) => (
            <article
              key={project.id}
              className="surface-card bg-surface/90 border border-border p-6 sm:p-7 space-y-5 rounded-md hover:border-border-light transition-colors"
            >
              {/* Header: Title */}
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-medium tracking-tight text-foreground">
                  {project.title}
                </h3>
              </div>

              {/* Tagline */}
              <p className="text-xs sm:text-sm font-sans italic text-foreground-muted">
                &ldquo;{project.tagline}&rdquo;
              </p>

              {/* Technical Bullets */}
              {project.bullets && project.bullets.length > 0 && (
                <ul className="space-y-2 text-xs sm:text-sm text-foreground-muted leading-relaxed list-none pl-0">
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-foreground-subtle select-none">&bull;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech Stack Row */}
              <div className="text-xs text-foreground-subtle pt-1">
                {project.techStack.join(" · ")}
              </div>

              {/* Actions: Verified Live Application & Repository */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {project.demoUrl && (
                  <Button
                    href={project.demoUrl}
                    external
                    variant="primary"
                    size="sm"
                    icon="arrow-up-right"
                  >
                    Open Application
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
      </section>

      {/* SECTION 2: DEVELOPED SOFTWARE (HIGH-DENSITY EDITORIAL CATALOGUE LEDGER) */}
      <section aria-labelledby="developed-software-heading" className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border pb-3">
          <h2 id="developed-software-heading" className="font-display text-xl sm:text-2xl font-medium tracking-tight text-foreground">
            Developed Software
          </h2>
          <span className="text-xs text-foreground-muted">
            Systems architecture &amp; software catalog ({remainingCatalogCount} projects)
          </span>
        </div>

        <div className="space-y-12">
          {CATALOG_GROUPS.map((group) => {
            const items = PROJECTS.filter(
              (p) => p.category === group.category && !mustCheckoutIds.has(p.id)
            );
            if (items.length === 0) return null;

            return (
              <div key={group.category} className="space-y-4">
                {/* Category Header */}
                <div className="border-b border-border pb-2">
                  <h3 className="font-display text-base sm:text-lg font-medium text-foreground tracking-tight">
                    {group.name}
                  </h3>
                  <p className="text-xs text-foreground-muted pt-0.5">
                    {group.description}
                  </p>
                </div>

                {/* Clean Editorial Catalogue Ledger */}
                <div className="divide-y divide-border/60">
                  {items.map((item: Project) => (
                    <article
                      key={item.id}
                      className="py-3.5 hover:bg-surface/40 transition-colors flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 group"
                    >
                      {/* Left Column: Title, Framework, Description & Stack */}
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-sans text-sm font-semibold text-foreground group-hover:text-white transition-colors">
                            {item.title}
                          </h4>
                          {item.parentFrameworkId && (
                            <span className="text-xs text-foreground-subtle">
                              ({PARENT_FRAMEWORK_MAP[item.parentFrameworkId] || item.parentFrameworkId})
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-foreground-muted leading-relaxed">
                          {item.tagline}
                        </p>

                        <div className="text-xs text-foreground-subtle pt-0.5">
                          {item.techStack.join(" · ")}
                        </div>
                      </div>

                      {/* Right Column: Direct Verified Actions */}
                      <div className="flex items-center gap-4 shrink-0 pt-1 sm:pt-0 self-start sm:self-baseline">
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
                            className="inline-flex items-center gap-1.5 text-xs text-foreground-muted hover:text-white transition-colors"
                          >
                            <GithubIcon className="w-3.5 h-3.5 text-current" />
                            <span>Source ↗</span>
                          </a>
                        ) : (
                          <span className="text-xs text-foreground-subtle italic">
                            Private repository
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
      </section>
    </Container>
  );
}
