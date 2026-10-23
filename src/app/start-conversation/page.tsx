"use client";

import { useState } from "react";
import { Mail, Copy, Check, ExternalLink } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { GithubIcon, LinkedinIcon, XIcon, BlueskyIcon } from "@/components/BrandIcons";

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
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-16 space-y-10 text-slate-300">
      {/* Editorial Header */}
      <div className="space-y-2 border-b border-slate-800/80 pb-6">
        <div className="text-xs font-mono font-semibold tracking-widest text-copper uppercase">
          DIRECT COMMUNICATION
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-100">
          Start a Conversation
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed italic pt-1">
          Open for discussions around full-time software engineering roles, complex systems challenges, technical consulting, and open-source collaboration.
        </p>
      </div>

      {/* Direct Contact Bar */}
      <div className="p-4 sm:p-5 rounded border border-slate-800/80 bg-slate-900/30 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-copper shrink-0" />
            <span className="font-mono text-xs sm:text-sm text-slate-100 select-all">
              contact@vaibhv19.dev
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => copyToClipboard("contact@vaibhv19.dev")}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-slate-300 hover:text-slate-100 bg-slate-800/70 hover:bg-slate-800 border border-slate-700/60 rounded transition-colors"
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

            <a
              href="mailto:contact@vaibhv19.dev"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-copper hover:text-copper-hover bg-copper/10 border border-copper/30 rounded transition-colors"
            >
              <span>Mailto Link</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-800/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-slate-400">
          <span>Greater Noida / New Delhi, India (IST · UTC+5:30)</span>

          {/* Social Channels */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/vaibhv19"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-sky-400 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5 text-current" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/vaibhav-gupta-728b93288/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-sky-400 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-current" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://x.com/vaibhv_19"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-sky-400 transition-colors"
            >
              <XIcon className="w-3.5 h-3.5 text-current" />
              <span>X</span>
            </a>
            <a
              href="https://bsky.app/profile/vaibhv19.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-sky-400 transition-colors"
            >
              <BlueskyIcon className="w-3.5 h-3.5 text-current" />
              <span>Bluesky</span>
            </a>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-base font-bold font-mono text-slate-100 uppercase tracking-wider">
            Send a Direct Note
          </h2>
          <p className="text-xs text-slate-400 italic">
            Messages are delivered directly to my personal inbox via serverless dispatch.
          </p>
        </div>

        <ContactForm />
      </section>

      {/* Welcome Conversation Topics */}
      <section className="space-y-4 pt-4">
        <div className="space-y-1">
          <h2 className="text-base font-bold font-mono text-slate-100 uppercase tracking-wider">
            Topics Welcome Here
          </h2>
          <p className="text-xs text-slate-400 italic">
            Core areas where I can contribute technical depth, engineering leadership, or architecture review.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CONVERSATION_AREAS.map((topic) => (
            <div
              key={topic.number}
              className="p-4 rounded border border-slate-800/70 bg-slate-900/20 space-y-1.5"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-copper">
                  {topic.number} /
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-slate-200">
                  {topic.title}
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pl-5.5">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
