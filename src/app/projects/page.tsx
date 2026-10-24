import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Marquee from "@/components/ui/Marquee";
import { PROJECTS, Project } from "../../../data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Live applications, engineering systems, and technical experiments spanning web development, backend engineering, AI, and search visibility.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    type: "website",
    title: "Projects | Vaibhav Gupta",
    description:
      "Live applications, engineering systems, and technical experiments spanning web development, backend engineering, AI, and search visibility.",
    url: "/projects",
  },
};

const MARQUEE_PHRASES = [
  "WEB DEVELOPMENT",
  "BACKEND SYSTEMS",
  "AI ENGINEERING",
  "CLOUD & PLATFORM ENGINEERING",
  "TECHNICAL SEO",
];

interface AreaOfWork {
  title: string;
  statement: string;
  rotationClass: string;
}

const AREAS_OF_WORK: AreaOfWork[] = [
  {
    title: "Web & Product Engineering",
    statement:
      "Built and deployed complete production web applications, commercial client platforms, and client-side WebAssembly tools.",
    rotationClass: "rotate-[1.1deg]",
  },
  {
    title: "Backend & Distributed Systems",
    statement:
      "Implemented Spring Boot REST microservices, BullMQ asynchronous worker queues, and Redis rate limiters.",
    rotationClass: "-rotate-[1.3deg]",
  },
  {
    title: "AI Engineering & Orchestration",
    statement:
      "Built multi-agent debate pipelines with local Ollama models, hybrid vector-lexical RAG engines, and LangGraph workflows.",
    rotationClass: "rotate-[0.9deg]",
  },
  {
    title: "Cloud & Platform Engineering",
    statement:
      "Deployed production applications to AWS EC2 and S3, containerized services with Docker, and configured execution sandboxes.",
    rotationClass: "-rotate-[1.2deg]",
  },
  {
    title: "Technical SEO & Search Visibility",
    statement:
      "Delivered documented search visibility for 1nfinity.online with semantic HTML, JSON-LD structured schemas, and dynamic sitemaps.",
    rotationClass: "rotate-[1.0deg]",
  },
  {
    title: "Web Performance Engineering",
    statement:
      "Achieved verified 99/92 Lighthouse performance benchmarks, zero layout shift, and eliminated third-party runtime animation libraries.",
    rotationClass: "-rotate-[1.1deg]",
  },
];

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
          className="link-project-title"
        >
          {project.title}
        </a>
      ) : (
        <span className="font-medium text-accent-secondary">
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

  const areasCardTrack = (
    <div className="flex items-center space-x-4 sm:space-x-5 shrink-0 pr-4 sm:pr-5 py-4">
      {AREAS_OF_WORK.map((item) => (
        <div
          key={item.title}
          className={`w-[260px] sm:w-[290px] md:w-[310px] shrink-0 min-h-[160px] sm:min-h-[170px] flex flex-col justify-start p-5 sm:p-6 bg-white border border-border transition-all duration-300 transform ${item.rotationClass} hover:rotate-0 hover:border-heading/40 select-none`}
        >
          <h3 className="font-display text-sm sm:text-base font-semibold tracking-tight text-heading uppercase leading-[1.2]">
            {item.title}
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#171717] leading-relaxed mt-2.5 sm:mt-3">
            {item.statement}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <Container size="default" className="pt-6 sm:pt-8 md:pt-10 pb-16 sm:pb-24 space-y-10 sm:space-y-12">
      {/* 1. Introductory Hero (Centered within Shared Middle Column) */}
      <header className="space-y-3.5 sm:space-y-4 text-center">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-heading leading-[1.08] uppercase">
          Projects
        </h1>

        <p className="font-body text-xs sm:text-sm text-[#171717] leading-relaxed max-w-xl mx-auto font-normal">
          Live applications, engineering systems, and technical experiments
          spanning web development, backend engineering, AI, and search visibility.
        </p>
      </header>

      {/* 2. Marquee (Constrained within the Shared Middle Column) */}
      <div
        className="w-full overflow-hidden border-y border-border py-3 sm:py-3.5 select-none"
        role="region"
        aria-label="Capabilities Marquee"
      >
        <Marquee
          speed="normal"
          pauseOnHover={true}
          fadeEdges={true}
          className="py-0.5"
        >
          {Array.from({ length: 8 }).map((_, groupIdx) => (
            <div key={groupIdx} className="flex items-center shrink-0">
              {MARQUEE_PHRASES.map((phrase, phraseIdx) => (
                <div key={phraseIdx} className="flex items-center shrink-0">
                  <span className="text-xs font-sans font-medium tracking-[0.14em] text-[#171717] uppercase whitespace-nowrap px-3 sm:px-4">
                    {phrase}
                  </span>
                  <span
                    className="text-heading select-none text-xs font-bold"
                    aria-hidden="true"
                  >
                    ·
                  </span>
                </div>
              ))}
            </div>
          ))}
        </Marquee>
      </div>

      {/* 4. Must Checkout (Preserved Intact) */}
      <section aria-labelledby="must-checkout-heading" className="space-y-4 sm:space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border pb-2.5">
          <h2
            id="must-checkout-heading"
            className="font-display text-lg sm:text-xl font-medium tracking-tight text-heading"
          >
            Checkout
          </h2>
        </div>

        <ul className="space-y-3.5 sm:space-y-4 list-none pl-0">
          {mustCheckoutProjects.map((project) => (
            <ProjectListItem key={project.id} project={project} />
          ))}
        </ul>
      </section>

      {/* 5. Developed Software (Preserved Intact) */}
      <section aria-labelledby="developed-software-heading" className="space-y-4 sm:space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border pb-2.5">
          <h2
            id="developed-software-heading"
            className="font-display text-lg sm:text-xl font-medium tracking-tight text-heading"
          >
            Developed Software
          </h2>
        </div>

        <ul className="space-y-3.5 sm:space-y-4 list-none pl-0">
          {developedSoftwareProjects.map((project) => (
            <ProjectListItem key={project.id} project={project} />
          ))}
        </ul>
      <section aria-labelledby="areas-of-work-heading" className="space-y-4 sm:space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border pb-2.5">
          <h2
            id="areas-of-work-heading"
            className="font-display text-lg sm:text-xl font-medium tracking-tight text-heading"
          >
            Areas of Work
          </h2>
        </div>

        {/* Continuous Horizontal Cycling Card Track (Pauses on Hover, Reduced-Motion Safe) */}
        <div
          className="relative w-full overflow-hidden select-none motion-reduce:hidden"
          role="region"
          aria-label="Areas of Work Cycling Cards"
        >
          {/* Subtle gradient masks for smooth edge fade within the middle column */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Continuous Loop Track */}
          <div className="flex w-max group hover:[animation-play-state:paused]">
            <div
              className="flex shrink-0 animate-marquee group-hover:[animation-play-state:paused]"
              style={{ animationDuration: "36s" }}
            >
              {areasCardTrack}
            </div>
            <div
              className="flex shrink-0 animate-marquee group-hover:[animation-play-state:paused]"
              style={{ animationDuration: "36s" }}
              aria-hidden="true"
            >
              {areasCardTrack}
            </div>
          </div>
        </div>

        {/* Accessible Static Presentation for reduced motion preference */}
        <div className="hidden motion-reduce:grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
          {AREAS_OF_WORK.map((item) => (
            <div
              key={item.title}
              className="p-4 sm:p-5 bg-white border border-border space-y-2"
            >
              <h3 className="font-display text-sm sm:text-base font-semibold tracking-tight text-heading uppercase leading-[1.2]">
                {item.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#171717] leading-relaxed">
                {item.statement}
              </p>
            </div>
          ))}
        </div>
      </section>
        {/* 6. GitHub Archive Link (Preserved Intact) */}
        <div className="pt-4 text-xs sm:text-sm text-[#171717] border-t border-border/40">
          Looking for older prototypes, course projects, or training modules?{" "}
          <a
            href="https://github.com/vaibhv19"
            target="_blank"
            rel="noopener noreferrer"
            className="link-interactive font-medium inline-flex items-center gap-1"
          >
            Explore all projects on GitHub ↗
          </a>
        </div>
      </section>
    </Container>
  );
}
