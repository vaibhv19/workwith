import { Metadata } from "next";
import Container from "@/components/ui/Container";
import { PROJECTS, Project } from "../../../data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Live deployed applications and curated software systems built by Vaibhav Gupta — including WebAssembly chess analysis, distributed career platforms, hybrid RAG engines, and system guardrails.",
  alternates: {
    canonical: "/projects",
  },
};

function ProjectListItem({ project }: { project: Project }) {
  const primaryUrl = project.demoUrl || project.githubUrl;

  return (
    <li className="text-xs sm:text-sm leading-relaxed text-foreground-muted">
      <span className="font-medium text-foreground">
        {primaryUrl ? (
          <a
            href={primaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            {project.title}
          </a>
        ) : (
          project.title
        )}
      </span>

      {project.demoUrl && (
        <>
          <span className="text-foreground-subtle mx-1.5 select-none">·</span>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-muted hover:text-accent underline decoration-border/60 hover:decoration-accent transition-colors"
          >
            Live demo ↗
          </a>
        </>
      )}

      {project.githubUrl && (
        <>
          <span className="text-foreground-subtle mx-1.5 select-none">·</span>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-muted hover:text-accent underline decoration-border/60 hover:decoration-accent transition-colors"
          >
            Source code ↗
          </a>
        </>
      )}

      <span className="text-foreground-subtle mx-1.5 sm:mx-2 select-none">—</span>
      <span className="text-foreground-muted font-light">
        {project.shortDescription || project.tagline}
      </span>
    </li>
  );
}

export default function ProjectsPage() {
  // Destination 1: All verified live projects deployed on Vercel
  const mustCheckoutProjects = PROJECTS.filter((p) => p.mustCheckout);

  // Destination 2: Curated selection of significant engineering systems & architectures
  const developedSoftwareProjects = PROJECTS.filter(
    (p) => p.curatedSoftware && !p.mustCheckout
  );

  return (
    <Container size="default" className="pt-6 sm:pt-8 md:pt-10 pb-16 sm:pb-24 space-y-10 sm:space-y-14">
      {/* Page Header */}
      <header className="space-y-2.5 sm:space-y-3 border-b border-border pb-6 sm:pb-7">
        <h1 className="font-display text-2xl sm:text-3xl md:text-[2.25rem] font-medium tracking-tight text-foreground leading-[1.15]">
          Projects &amp; Systems
        </h1>
        <p className="font-body text-sm sm:text-base text-foreground-muted leading-relaxed max-w-2xl font-light">
          Live applications deployed on Vercel, a curated selection of systems and backend engineering projects, and the complete repository archive on GitHub.
        </p>
      </header>

      {/* SECTION 1: MUST CHECKOUT */}
      <section aria-labelledby="must-checkout-heading" className="space-y-4 sm:space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border pb-2.5">
          <h2 id="must-checkout-heading" className="font-display text-lg sm:text-xl font-medium tracking-tight text-foreground">
            Must Checkout
          </h2>
          <span className="text-xs text-foreground-muted">
            {mustCheckoutProjects.length} live applications deployed on Vercel
          </span>
        </div>

        <ul className="space-y-3.5 sm:space-y-4 list-none pl-0">
          {mustCheckoutProjects.map((project) => (
            <ProjectListItem key={project.id} project={project} />
          ))}
        </ul>
      </section>

      {/* SECTION 2: DEVELOPED SOFTWARE */}
      <section aria-labelledby="developed-software-heading" className="space-y-4 sm:space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border pb-2.5">
          <h2 id="developed-software-heading" className="font-display text-lg sm:text-xl font-medium tracking-tight text-foreground">
            Developed Software
          </h2>
          <span className="text-xs text-foreground-muted">
            Curated selection of {developedSoftwareProjects.length} engineering systems
          </span>
        </div>

        <ul className="space-y-3.5 sm:space-y-4 list-none pl-0">
          {developedSoftwareProjects.map((project) => (
            <ProjectListItem key={project.id} project={project} />
          ))}
        </ul>

        {/* SECTION 3 / DESTINATION 3: GITHUB ARCHIVE LINK */}
        <div className="pt-4 text-xs sm:text-sm text-foreground-muted border-t border-border/40">
          Looking for older prototypes, course projects, or training modules?{" "}
          <a
            href="https://github.com/vaibhv19"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent underline decoration-border/70 hover:decoration-accent font-medium transition-colors inline-flex items-center gap-1"
          >
            Explore all projects on GitHub ↗
          </a>
        </div>
      </section>
    </Container>
  );
}
