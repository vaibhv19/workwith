import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Marquee from "@/components/ui/Marquee";

export const metadata: Metadata = {
  title: "Vaibhav Gupta — Software Engineer & Systems Architecture",
  description:
    "Technical companion to vaibhv19.dev. Engineering case studies, distributed systems, client-side WebAssembly, and production web platforms by Vaibhav Gupta.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Vaibhav Gupta — Software Engineer & Systems Architecture",
    description:
      "Technical companion to vaibhv19.dev. Engineering case studies, distributed systems, client-side WebAssembly, and production web platforms by Vaibhav Gupta.",
    url: "/",
  },
};

const MARQUEE_DOMAINS = [
  "WEB & PRODUCT ENGINEERING",
  "BACKEND & DISTRIBUTED SYSTEMS",
  "AI ORCHESTRATION & RAG",
  "CLIENT-SIDE WEBASSEMBLY",
];

export default function WorkWithMePage() {
  return (
    <Container
      size="default"
      className="pt-6 sm:pt-8 md:pt-10 pb-16 sm:pb-24 space-y-10 sm:space-y-12"
    >
      {/* 1. Hero Section */}
      <header className="space-y-4 sm:space-y-5 text-center">
        <div className="space-y-1.5 sm:space-y-2">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-heading leading-[1.1] uppercase">
            Hi, I&apos;m @Vaibhv19
          </h1>
        </div>

        <p className="font-body text-xs sm:text-sm text-[#171717] leading-relaxed max-w-xl mx-auto font-normal">
          I engineer production web platforms, distributed backend microservices,
          and AI orchestration systems. MyWork serves as the technical companion to{" "}
          <a
            href="https://vaibhv19.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link hover:text-link-hover underline decoration-[#355C7D]/30 underline-offset-2"
          >
            vaibhv19.dev
          </a>
          —providing a deeper exploration into architecture decisions, source code, and
          verifiable performance under real-world constraints.
        </p>
      </header>

      {/* 5. Book a Meeting (Inline Google Calendar Embed) */}
      <section
        id="book-meeting"
        aria-labelledby="book-meeting-heading"
        className="max-w-[720px] mx-auto w-full space-y-3 sm:space-y-3.5 border-t border-border pt-6 sm:pt-7"
      >
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 border-b border-border pb-2">
          <div className="space-y-0.5">
            <h2
              id="book-meeting-heading"
              className="font-display text-lg sm:text-xl font-medium tracking-tight text-heading uppercase"
            >
              Book a Meeting
            </h2>
            <p className="text-xs text-[#171717]/80 font-normal">
              Select a date and time that works best for your schedule.
            </p>
          </div>
        </div>

        {/* Embedded Google Calendar Appointment Schedule */}
        <div className="w-full rounded-[2px] border border-border bg-white overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3Z-l5Ev8LHzyxn4ZiIv8APZDEqI7ES5_XmRJKdy_5W7XnAru7iM4pV9srd4kIZU1QneAY8UDws?gv=true"
            title="Book an appointment with Vaibhav Gupta via Google Calendar"
            className="w-full border-0 block"
            style={{ minHeight: "540px", height: "550px" }}
            loading="lazy"
          />
        </div>

        <p className="text-[11px] font-mono text-[#171717]/60 text-center pt-0.5">
          Schedule managed directly by Google Calendar. If the scheduler does not load, use the{" "}
          <a
            href="https://calendar.app.google/9SPAp6kwTNYcksBb8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link hover:text-link-hover underline underline-offset-2"
          >
            direct booking link
          </a>
          .
        </p>
      </section>

      {/* 2. Horizontal Marquee of Core Disciplines */}
      <div
        className="w-full overflow-hidden border-y border-border py-3 sm:py-3.5 select-none"
        role="region"
        aria-label="Core Engineering Domains"
      >
        <Marquee speed="normal" pauseOnHover={true} fadeEdges={true} className="py-0.5">
          {Array.from({ length: 8 }).map((_, groupIdx) => (
            <div key={groupIdx} className="flex items-center shrink-0">
              {MARQUEE_DOMAINS.map((phrase, phraseIdx) => (
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
    </Container>
  );
}
