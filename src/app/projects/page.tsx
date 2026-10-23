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

interface MustCheckoutProject {
  id: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  demoUrl: string;
  githubUrl?: string;
  image?: string;
}

const MUST_CHECKOUT: MustCheckoutProject[] = [
  {
    id: "checkmate-analyze",
    title: "CheckMate",
    tagline: "Post-chess clarity, engine-assisted — built so tactical blunders get analyzed instead of ignored.",
    description:
      "A client-side chess analysis workbench running Stockfish 16 WASM in a dedicated Web Worker with SharedArrayBuffer concurrency, requiring zero backend servers, subscriptions, or telemetry.",
    techStack: ["TypeScript", "React", "Stockfish 16 WASM", "Web Workers", "SharedArrayBuffer", "Tailwind CSS"],
    demoUrl: "https://checkmate.vaibhv19.dev/",
    githubUrl: "https://github.com/vaibhv19/Check-Mate-Analyse",
    image: "/images/projects/checkmate-preview.png",
  },
  {
    id: "trajectory",
    title: "Trajectory",
    tagline: "Started as a spreadsheet fix and ended up needing its own AWS bill.",
    description:
      "An enterprise career operations platform with dual-token JWT auth rotation, automated ghost-detection cron schedulers, AWS S3 resume versioning, Groq LLM parsing, and EC2 production deployment.",
    techStack: ["Java 21", "Spring Boot 3.3.1", "PostgreSQL", "AWS EC2 / RDS / S3", "Docker", "React 19"],
    demoUrl: "https://trajectory.vaibhv19.dev",
    githubUrl: "https://github.com/vaibhv19/Trajectory",
  },
  {
    id: "1nfinity",
    title: "1nfinity.online",
    tagline: "High-credibility digital agency platform designed from scratch with a 99/92 Lighthouse score.",
    description:
      "A bespoke production web platform designed and engineered from scratch for an influencer marketing agency, guided by 'Restraint Over Decoration' with desktop-only entrance animations and serverless email delivery.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Resend API", "Vercel"],
    demoUrl: "https://1nfinity.online",
    image: "/images/projects/1nfinity-preview.webp",
  },
  {
    id: "the-tiffin-dispatch",
    title: "The Tiffin Dispatch",
    tagline: "Real-time subscription food delivery web platform with role-based ordering.",
    description:
      "Full-stack MERN application handling recurring meal subscriptions, daily order state transitions, and real-time delivery status coordination across customers and kitchen admins.",
    techStack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    demoUrl: "https://the-tiffin-dispatch.vercel.app",
    githubUrl: "https://github.com/vaibhv19/The-Tiffin-Dispatch",
  },
  {
    id: "birthday-wish",
    title: "Birthday Wish",
    tagline: "Interactive 3D canvas balloon-bursting experience with particle physics.",
    description:
      "Pure browser canvas interactive celebration experience featuring custom particle explosion physics, multi-layer depth rendering, and responsive audio triggers with zero third-party framework overhead.",
    techStack: ["HTML5 Canvas", "JavaScript (ES6+)", "CSS3 Animations", "Web Audio API"],
    demoUrl: "https://birthday-wish-three.vercel.app",
    githubUrl: "https://github.com/vaibhv19/Birthday-Wish",
  },
];

// Developed software catalog categorized
const CATEGORIZED_SOFTWARE = [
  {
    group: "Systems & Infrastructure",
    description: "Distributed architectures, AI orchestration, and memory-safe tooling",
    items: PROJECTS.filter((p) =>
      ["conclave", "phoenix", "email-job-scheduler", "redis-lite", "load-balancer"].includes(p.id)
    ),
  },
  {
    group: "Applied Web Applications",
    description: "Production web platforms, full-stack backends, and multi-tenant architectures",
    items: PROJECTS.filter((p) =>
      ["fintrack", "eventhub", "devconnect", "studylink", "ai-mock-interview"].includes(p.id)
    ),
  },
  {
    group: "Security Guardrails & DevSecOps",
    description: "System integrity scanners, automated auditing, and baseline enforcement",
    items: PROJECTS.filter((p) => p.category === "System Integrity & DevSecOps Guardrails"),
  },
  {
    group: "Academic Milestones & Experiments",
    description: "Low-level implementations, algorithm visualizers, and core computing foundations",
    items: PROJECTS.filter((p) =>
      p.category === "Academic Milestones — Formal Coursework Projects" ||
      p.category === "Built for No Reason Other Than Wanting To"
    ),
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-16 space-y-12 text-slate-300">
      {/* Editorial Page Header */}
      <div className="space-y-2 border-b border-slate-800/80 pb-6">
        <div className="text-xs font-mono font-semibold tracking-widest text-copper uppercase">
          ENGINEERING REPERTOIRE
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-100">
          Projects
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed italic pt-1">
          A curated selection of interactive deployed applications visitors can experience directly, alongside the broader catalog of developed systems, developer tooling, and distributed software.
        </p>
      </div>

      {/* SECTION 1: MUST CHECKOUT (FLAGSHIP DEPLOYED SOFTWARE) */}
      <section className="space-y-8">
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold tracking-widest text-copper flex items-center justify-between">
            <span>01 / MUST CHECKOUT</span>
            <span className="text-[11px] text-slate-400 font-normal">Interactive Live Deployments</span>
          </div>
          <div className="border-b border-slate-800/80" />
        </div>

        <div className="space-y-10">
          {MUST_CHECKOUT.map((project, idx) => (
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

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.description}
              </p>

              {/* Genuine Preview Asset when available */}
              {project.image && (
                <div className="relative mt-2 mb-2 rounded border border-slate-800/90 overflow-hidden bg-slate-950/60 aspect-[16/9] max-h-56 w-full">
                  <Image
                    src={project.image}
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
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-copper hover:bg-copper-hover text-slate-950 font-semibold text-xs tracking-wide transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-copper/50"
                >
                  <span>Open Live Application</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-950" />
                </a>

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

      {/* SECTION 2: DEVELOPED SOFTWARE (BROADER CATALOGUE) */}
      <section className="space-y-8 pt-4">
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold tracking-widest text-slate-400 flex items-center justify-between">
            <span>02 / DEVELOPED SOFTWARE</span>
            <span className="text-[11px] text-slate-400 font-normal">Broader Engineering Catalog</span>
          </div>
          <div className="border-b border-slate-800/80" />
        </div>

        <div className="space-y-10">
          {CATEGORIZED_SOFTWARE.map((category) => {
            if (category.items.length === 0) return null;

            return (
              <div key={category.group} className="space-y-4">
                {/* Category Header */}
                <div>
                  <h3 className="text-sm font-bold font-mono text-copper uppercase tracking-wider">
                    {category.group}
                  </h3>
                  <p className="text-xs text-slate-400 italic">
                    {category.description}
                  </p>
                </div>

                {/* Compact Item List */}
                <div className="space-y-4 pl-0">
                  {category.items.map((item: Project) => (
                    <div
                      key={item.id}
                      className="group pt-2 pb-3 border-b border-slate-800/40 last:border-b-0 space-y-1.5"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <h4 className="text-sm sm:text-base font-bold text-slate-100 group-hover:text-sky-400 transition-colors">
                          {item.title}
                        </h4>
                        {item.githubUrl && (
                          <a
                            href={item.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-sky-400 hover:underline transition-colors shrink-0"
                          >
                            <GithubIcon className="w-3 h-3 text-current" />
                            <span>Repository</span>
                            <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                          </a>
                        )}
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.tagline}
                      </p>

                      <div className="text-[11px] font-mono text-slate-400">
                        {item.techStack.join(" · ")}
                      </div>
                    </div>
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
