"use client";

import { useState } from "react";
import { Mail, Copy, Check } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { GithubIcon, LinkedinIcon, XIcon, BlueskyIcon } from "@/components/BrandIcons";
import Container from "@/components/ui/Container";
import SectionReveal from "@/components/ui/SectionReveal";
import Button from "@/components/ui/Button";

const CONVERSATION_AREAS = [
  {
    number: "01",
    title: "Engineering Roles & Opportunities",
    description:
      "Full-time software engineering roles focused on backend architecture, distributed systems, developer tooling, and production platforms.",
  },
  {
    number: "02",
    title: "Technical Architecture & Systems",
    description:
      "Deep discussions on local LLM orchestration, hybrid RAG retrieval mechanics, browser WebAssembly with SharedArrayBuffer concurrency, or worker queues.",
  },
  {
    number: "03",
    title: "Production Web Platforms",
    description:
      "Full-stack web architecture and frontend engineering with strict 'Restraint Over Decoration' standards, Lighthouse 95+ performance budgets, and zero template bloat.",
  },
  {
    number: "04",
    title: "Open-Source Collaboration",
    description:
      "Inquiries, architectural feedback, and discussions regarding CheckMate, Trajectory, Conclave, Phoenix, or mutual open-source software.",
  },
];

export default function StartConversationPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <Container size="narrow" className="py-12 sm:py-16 md:py-20 space-y-12 sm:space-y-16">
      {/* Editorial Header */}
      <SectionReveal className="space-y-4 border-b border-border pb-8">
        <div className="font-eyebrow text-accent">
          DIRECT COMMUNICATION
        </div>
        <h1 className="font-display-h1 text-foreground">
          Start a Conversation
        </h1>
        <p className="font-body-lead text-foreground-muted max-w-2xl">
          Open for discussions around full-time software engineering roles, complex systems challenges, technical consulting, and open-source collaboration.
        </p>
      </SectionReveal>

      {/* Direct Contact Bar */}
      <SectionReveal delayMs={100}>
        <div className="p-5 sm:p-6 rounded-md border border-border bg-surface surface-card space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-[2px] bg-surface-elevated border border-border flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-accent" />
              </div>
              <span className="font-mono text-xs sm:text-sm text-foreground select-all font-medium">
                contact@vaibhv19.dev
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => copyToClipboard("contact@vaibhv19.dev")}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-foreground-muted hover:text-foreground bg-surface-elevated hover:bg-surface-subtle border border-border hover:border-border-light rounded-[2px] transition-colors cursor-pointer"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <Button
                variant="accent"
                size="sm"
                href="mailto:contact@vaibhv19.dev"
                external
                icon="arrow-up-right"
              >
                Mailto Link
              </Button>
            </div>
          </div>

          <div className="pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-foreground-subtle">
            <span>Greater Noida / New Delhi, India (IST · UTC+5:30)</span>

            {/* Social Channels */}
            <div className="flex items-center gap-4 text-foreground-muted">
              <a
                href="https://github.com/vaibhv19"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-current" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/vaibhav-gupta-728b93288/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-current" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://x.com/vaibhv_19"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <XIcon className="w-3.5 h-3.5 text-current" />
                <span>X</span>
              </a>
              <a
                href="https://bsky.app/profile/vaibhv19.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <BlueskyIcon className="w-3.5 h-3.5 text-current" />
                <span>Bluesky</span>
              </a>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Form Section */}
      <SectionReveal delayMs={150} className="space-y-4">
        <div className="space-y-1.5">
          <div className="font-eyebrow text-accent">DIRECT NOTE</div>
          <h2 className="font-display-h2 text-foreground text-xl sm:text-2xl">
            Send a Direct Note
          </h2>
          <p className="text-xs sm:text-sm text-foreground-muted">
            Messages are dispatched directly to my personal inbox via serverless pipeline.
          </p>
        </div>

        <ContactForm />
      </SectionReveal>

      {/* Welcome Conversation Topics */}
      <SectionReveal delayMs={200} className="space-y-6 pt-4">
        <div className="space-y-1.5 border-b border-border pb-4">
          <div className="font-eyebrow text-accent">COLLABORATION AREAS</div>
          <h2 className="font-display-h2 text-foreground text-xl sm:text-2xl">
            Topics Welcome Here
          </h2>
          <p className="text-xs sm:text-sm text-foreground-muted">
            Core areas where I can contribute technical depth, engineering leadership, or architecture review.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CONVERSATION_AREAS.map((topic) => (
            <div
              key={topic.number}
              className="p-5 rounded-md border border-border bg-surface surface-card space-y-2 hover:border-border-light transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="font-metric text-xs font-semibold text-accent">
                  {topic.number} /
                </span>
                <h3 className="text-xs sm:text-sm font-semibold text-foreground">
                  {topic.title}
                </h3>
              </div>
              <p className="text-xs text-foreground-muted leading-relaxed pl-5">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </SectionReveal>
    </Container>
  );
}
