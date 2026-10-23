"use client";

import { useState } from "react";
import {
  Mail,
  MessageSquare,
  Copy,
  Check,
  Briefcase,
  Layers,
  Code2,
  Clock,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { GithubIcon, LinkedinIcon, XIcon, BlueskyIcon } from "@/components/BrandIcons";

const WELCOME_TOPICS = [
  {
    icon: Briefcase,
    title: "Engineering Roles & Opportunities",
    description:
      "Full-time software engineering roles focused on backend architecture, distributed systems, full-stack web platforms, and production-grade developer tooling."
  },
  {
    icon: Layers,
    title: "Systems Architecture & Consulting",
    description:
      "Deep technical discussions on local LLM orchestration, hybrid RAG retrieval mechanics, browser WebAssembly with SharedArrayBuffer concurrency, or worker queues."
  },
  {
    icon: Code2,
    title: "Contract Web Platforms & Client Systems",
    description:
      "End-to-end web architecture and frontend engineering with strict 'Restraint Over Decoration' standards, Lighthouse 95+ performance budgets, and zero template bloat."
  },
  {
    icon: MessageSquare,
    title: "Open-Source Collaboration",
    description:
      "Inquiries, bug discussions, and architectural feedback regarding CheckMate, Trajectory, Conclave, Phoenix, or mutual open-source engineering."
  }
];

export default function StartConversationPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Header */}
      <div className="mb-12 border-b border-white/10 pb-10">
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#E8913A] font-semibold mb-3">
          <MessageSquare className="w-4 h-4 text-[#E8913A]" />
          <span>01 / DIRECT CONTACT & COLLABORATION</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F4EFE6] tracking-tight mb-4">
          Start a Conversation
        </h1>
        <p className="max-w-2xl text-base sm:text-lg text-[#9E9A91] leading-relaxed">
          I am always open to discussing new software engineering roles, complex systems challenges, open-source initiatives, or freelance web architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        {/* Left Column: Direct Contact & Welcome Topics */}
        <div className="lg:col-span-5 space-y-8">
          {/* Direct Email Card */}
          <div className="p-6 rounded-md bg-[#111622]/80 border border-white/10 shadow-lg">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#E8913A] mb-3">
              Direct Contact Endpoint
            </h2>
            <div className="flex items-center justify-between gap-3 p-3 rounded bg-black/40 border border-white/5 mb-3">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <Mail className="w-4 h-4 text-[#E8913A] shrink-0" />
                <span className="font-mono text-sm text-[#F4EFE6] truncate select-all">
                  contact@vaibhv19.dev
                </span>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard("contact@vaibhv19.dev")}
                className="p-1.5 rounded hover:bg-white/10 text-[#9E9A91] hover:text-[#F4EFE6] transition-colors shrink-0"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            <div className="space-y-2 text-xs text-[#9E9A91]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E8913A] shrink-0" />
                <span>Greater Noida / New Delhi, India (IST · UTC+5:30)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#E8913A] shrink-0" />
                <span>Typical response window: 24 to 48 hours</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-5 mt-5 border-t border-white/10">
              <div className="text-xs font-mono uppercase tracking-wider text-[#9E9A91] mb-3">
                Verified Social Channels
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://github.com/vaibhv19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded bg-black/30 border border-white/5 hover:border-[#E8913A]/50 text-xs font-mono text-[#D4CEC4] hover:text-[#E8913A] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-current shrink-0" />
                  <span>GitHub</span>
                  <ExternalLink className="w-2.5 h-2.5 ml-auto opacity-50" />
                </a>
                <a
                  href="https://www.linkedin.com/in/vaibhav-gupta-728b93288/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded bg-black/30 border border-white/5 hover:border-[#E8913A]/50 text-xs font-mono text-[#D4CEC4] hover:text-[#E8913A] transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-current shrink-0" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-2.5 h-2.5 ml-auto opacity-50" />
                </a>
                <a
                  href="https://x.com/vaibhv_19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded bg-black/30 border border-white/5 hover:border-[#E8913A]/50 text-xs font-mono text-[#D4CEC4] hover:text-[#E8913A] transition-colors"
                >
                  <XIcon className="w-3.5 h-3.5 text-current shrink-0" />
                  <span>X / Twitter</span>
                  <ExternalLink className="w-2.5 h-2.5 ml-auto opacity-50" />
                </a>
                <a
                  href="https://bsky.app/profile/vaibhv19.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded bg-black/30 border border-white/5 hover:border-[#E8913A]/50 text-xs font-mono text-[#D4CEC4] hover:text-[#E8913A] transition-colors"
                >
                  <BlueskyIcon className="w-3.5 h-3.5 text-current shrink-0" />
                  <span>Bluesky</span>
                  <ExternalLink className="w-2.5 h-2.5 ml-auto opacity-50" />
                </a>
              </div>
            </div>
          </div>

          {/* Kinds of Conversations That Are Welcome */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#9E9A91]">
              Conversations Welcome Here
            </h2>
            <div className="space-y-3">
              {WELCOME_TOPICS.map((topic, index) => {
                const IconComponent = topic.icon;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-md bg-[#111622]/60 border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <IconComponent className="w-4 h-4 text-[#E8913A] shrink-0" />
                      <h3 className="text-sm font-semibold text-[#F4EFE6]">
                        {topic.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#9E9A91] leading-relaxed pl-6.5">
                      {topic.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Functional Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
