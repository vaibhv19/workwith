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
  // Priority order:
  // 1. If a verified live demo exists, link the project title directly to the live demo.
  // 2. If no live demo exists but a verified source repository does, link the title to the repository.
  // 3. If neither destination is verified, render the title as ordinary, non-clickable text.
  const destinationUrl = project.demoUrl || project.githubUrl;

  return (
    <li className="text-xs sm:text-sm leading-relaxed text-[#171717]">
      {destinationUrl ? (
        <a
          href={destinationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent underline decoration-accent/40 hover:text-accent-muted hover:decoration-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-xs transition-colors"
        >
          {project.title}
        </a>
      ) : (
        <span className="font-medium text-accent">
          {project.title}
        </span>
      )}
      <span className="text-[#171717] mx-1.5 sm:mx-2 select-none">—</span>
      <span className="text-[#171717] font-normal">
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
        <h1 className="font-display text-2xl sm:text-3xl md:text-[2.25rem] font-medium tracking-tight text-accent leading-[1.15]">
          Projects &amp; Systems
        </h1>
        <p className="font-body text-sm sm:text-base text-[#171717] leading-relaxed max-w-2xl font-normal">
          Live applications deployed on Vercel, a curated selection of systems and backend engineering projects, and the complete repository archive on GitHub.
        </p>
      </header>

      {/* SECTION 1: MUST CHECKOUT */}
      <section aria-labelledby="must-checkout-heading" className="space-y-4 sm:space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border pb-2.5">
          <h2 id="must-checkout-heading" className="font-display text-lg sm:text-xl font-medium tracking-tight text-accent">
            Must Checkout
          </h2>
          <span className="text-xs font-mono text-[#171717]">
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
          <h2 id="developed-software-heading" className="font-display text-lg sm:text-xl font-medium tracking-tight text-accent">
            Developed Software
          </h2>
          <span className="text-xs font-mono text-[#171717]">
            Curated selection of {developedSoftwareProjects.length} engineering systems
          </span>
        </div>

        <ul className="space-y-3.5 sm:space-y-4 list-none pl-0">
          {developedSoftwareProjects.map((project) => (
            <ProjectListItem key={project.id} project={project} />
          ))}
        </ul>

        {/* SECTION 3 / DESTINATION 3: GITHUB ARCHIVE LINK */}
        <div className="pt-4 text-xs sm:text-sm text-[#171717] border-t border-border/40">
          Looking for older prototypes, course projects, or training modules?{" "}
          <a
            href="https://github.com/vaibhv19"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-muted underline decoration-accent/50 hover:decoration-accent font-medium transition-colors inline-flex items-center gap-1"
          >
            Explore all projects on GitHub ↗
          </a>
        </div>
      </section>
    </Container>
  );
}
