import { Metadata } from "next";
import { GithubIcon } from "@/components/BrandIcons";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { PROJECTS } from "../../../data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Live deployed applications and curated software systems built by Vaibhav Gupta — including WebAssembly chess analysis, distributed career platforms, hybrid RAG engines, and system guardrails.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  // Destination 1: All verified live projects deployed on Vercel
  const mustCheckoutProjects = PROJECTS.filter((p) => p.mustCheckout);

  // Destination 2: Curated selection of significant engineering systems & architectures
  const developedSoftwareProjects = PROJECTS.filter(
    (p) => p.curatedSoftware && !p.mustCheckout
  );

  return (
    <Container size="default" className="pt-6 sm:pt-8 md:pt-10 pb-16 sm:pb-24 space-y-8 sm:space-y-12">
      {/* Page Header */}
      <header className="space-y-2.5 sm:space-y-3 border-b border-border pb-6 sm:pb-7">
        <h1 className="font-display text-2xl sm:text-3xl md:text-[2.25rem] font-medium tracking-tight text-foreground leading-[1.15]">
          Projects &amp; Systems
        </h1>
      </header>

      {/* DESTINATION 1: MUST CHECKOUT (ALL VERIFIED VERCEL DEPLOYMENTS) */}
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

      {/* DESTINATION 2: DEVELOPED SOFTWARE (CURATED SIGNIFICANT ENGINEERING SYSTEMS) */}
      <section aria-labelledby="developed-software-heading" className="space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border pb-3">
          <h2 id="developed-software-heading" className="font-display text-xl sm:text-2xl font-medium tracking-tight text-foreground">
            Developed Software
          </h2>
          <span className="text-xs text-foreground-muted">
            Curated selection of {developedSoftwareProjects.length} engineering systems
          </span>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {developedSoftwareProjects.map((project) => (
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

              {/* Actions: Verified Repository & Optional Live Demo */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {project.demoUrl && (
                  <Button
                    href={project.demoUrl}
                    external
                    variant="primary"
                    size="sm"
                    icon="arrow-up-right"
                  >
                    Live Demo
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

        {/* DESTINATION 3: GITHUB COMPLETE REPOSITORY ARCHIVE CALLOUT */}
        <div className="border border-border/80 bg-surface/50 rounded-md p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-5 mt-4">
          <div className="space-y-1.5 max-w-md">
            <div className="flex items-center gap-2">
              <GithubIcon className="w-4 h-4 text-foreground-muted" />
              <h3 className="font-display text-base sm:text-lg font-medium text-foreground tracking-tight">
                Complete Repository Archive
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
              Explore the broader collection of open-source projects, training modules, foundational experiments, and academic coursework on GitHub.
            </p>
          </div>
          <Button
            href="https://github.com/vaibhv19"
            external
            variant="secondary"
            size="sm"
            icon="arrow-up-right"
            className="shrink-0 self-start sm:self-auto"
          >
            Explore all projects on GitHub
          </Button>
        </div>
      </section>
    </Container>
  );
}

