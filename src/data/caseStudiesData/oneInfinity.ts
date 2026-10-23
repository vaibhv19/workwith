import { CaseStudyNarrative } from "./types";

export const oneInfinityNarrative: CaseStudyNarrative = {
  slug: "1nfinity",
  number: "06",
  title: "1nfinity.online",
  subtitle: "Performance Budgets & Anti-Overdesign Correction",
  period: "October 2026",
  date: "2026-10-15",
  category: "Commercial Client Work & Frontend Architecture",
  techFocus: "Next.js · Tailwind CSS · Resend · Core Web Vitals · CSS Animation",
  status: "Production Live",
  image: "/images/case-studies/1nfinity-preview.webp",
  excerpt: "A commercial agency web platform engineered from scratch under an uncompromising 'Restraint Over Decoration' philosophy, achieving 99/92 Lighthouse performance.",
  metaDescription: "In-depth engineering retrospective of 1nfinity.online: client agency delivery, desktop-only entrance choreography, eliminating Framer Motion bloat, and serverless Resend integration.",
  liveUrl: "https://1nfinity.online",
  repoUrl: undefined,
  role: "Lead Frontend Engineer & Digital Designer (Contract Client Delivery)",
  evidenceTags: [
    { label: "Client Work Confirmed", type: "conversation" },
    { label: "Founder Pivot Commit 62012c7", type: "repo" },
    { label: "Desktop Entrance ESC Logic", type: "repo" },
    { label: "Historical Lighthouse Audit", type: "verified" },
  ],
  quickMetrics: [
    { label: "Desktop Performance", value: "99 / 100", detail: "Lighthouse audit score at deployment" },
    { label: "Mobile Performance", value: "92 / 100", detail: "Heavy JS eliminated for mobile devices" },
    { label: "Cumulative Layout Shift", value: "0.000", detail: "Zero layout jumping during load" },
    { label: "Third-Party Motion Libs", value: "0 Bytes", detail: "Pure CSS hardware-accelerated transforms" },
  ],
  sections: [
    {
      id: "client-context-and-mandate",
      title: "1. Client Context: Engineering for an Influencer Agency",
      lead: "Delivering a bespoke web presence for a creator marketing startup under tight deadlines.",
      content: [
        "In October 2026, I was engaged by college colleagues who had founded 1nfinity, a creator and influencer marketing agency connecting high-growth brands with digital talent. They needed a distinctive, high-converting digital storefront to present to prospective enterprise brand partners.",
        "Crucially, this was a **commercial client engagement**, not a venture I founded. The client provided only a vectorized brand logo. The information architecture, design tokens, responsive typography, visual layout, and entire frontend implementation were authored from scratch.",
        "The mandate was dual-pronged: create a visual impression of modern creative authority while adhering strictly to high performance and Core Web Vitals standards.",
      ],
      callout: {
        type: "insight",
        title: "Role & Attribution Clarity",
        text: "The case study maintains strict factual attribution: I served as the external design and engineering contractor. Strategic commercial decisions—such as eliminating pricing packages—belonged entirely to the agency's founder.",
      },
    },
    {
      id: "restraint-over-decoration",
      title: "2. The 'Restraint Over Decoration' Philosophy",
      lead: "Rejecting generic developer templates and visual noise in favor of editorial clarity.",
      content: [
        "Agency websites frequently fall into a predictable aesthetic trap: gratuitous purple-and-cyan ambient blur spheres, cards that float and tilt on mouse movement, and dozens of decorative elements that convey little information while consuming CPU cycles.",
        "For 1nfinity, we adopted an explicit design directive: **Restraint Over Decoration**.",
        "1. **No Framer Motion Dependency:** Heavy third-party motion libraries (often 30kB+ gzipped) were strictly banned. All transitions and layout reveals rely on native, hardware-accelerated CSS keyframes and opacity transforms.",
        "2. **Content-First Hierarchy:** Visual interest is generated through high-contrast typography, disciplined negative space, and custom monochrome surfaces, rather than distracting visual gimmicks.",
      ],
    },
    {
      id: "entrance-choreography-and-lcp",
      title: "3. Desktop Entrance Choreography & Mobile LCP Protection",
      lead: "Delivering cinematic branding without penalizing mobile Largest Contentful Paint.",
      content: [
        "The client requested a bold, 4-second cinematic entrance animation sequence displaying the agency's emblem and mission statement before fading into the main navigation.",
        "While engaging on high-end desktop monitors, running a 4-second animation overlay on mobile devices introduces severe performance degradation: it destroys the Largest Contentful Paint (LCP) metric and frustrates mobile visitors on cellular connections.",
        "To balance client branding desire with web performance discipline, the entrance sequence was engineered with two strict constraints:",
        "- **Desktop-Only Viewport Gate:** The entrance animation only triggers on viewports wider than 1024px. Mobile and tablet viewports bypass the sequence entirely, rendering the hero content immediately.",
        "- **Keyboard ESC Bypass:** On desktop, pressing the Escape (`ESC`) key or clicking anywhere instantly cancels the animation and completes the fade transition in 150ms.",
      ],
      codeBlock: {
        title: "Keyboard Bypass & Viewport Gating in Entrance Hook",
        language: "typescript",
        code: `useEffect(() => {
  // 1. Immediately skip sequence on mobile screens to preserve Core Web Vitals
  if (window.innerWidth < 1024) {
    setHasCompletedEntrance(true);
    return;
  }

  // 2. Allow power users to dismiss entrance via ESC key
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setHasCompletedEntrance(true);
    }
  };

  window.addEventListener("keydown", handleKeyDown);
  const timer = setTimeout(() => setHasCompletedEntrance(true), 4000);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
    clearTimeout(timer);
  };
}, []);`,
      },
    },
    {
      id: "the-founder-pricing-pivot",
      title: "4. The Founder's Strategic Repositioning (Commit 62012c7)",
      lead: "Adapting frontend architecture to client business model changes.",
      content: [
        "Initial mockups included structured pricing comparison tables with tiers (e.g., 'Starter', 'Growth', 'Scale').",
        "During pre-launch review, the founder made an executive business decision: fixed pricing tables commoditized their services, making them look like a self-serve SaaS rather than an elite bespoke agency.",
        "In commit `62012c7`, the package comparison tables were completely excised. The page was restructured around high-touch lead capture: case studies, talent rosters, and an interactive contact intake modal directing prospects to tailored consultations.",
      ],
    },
    {
      id: "serverless-pipeline-and-delivery",
      title: "5. Serverless Contact Pipeline & Architecture Trade-offs",
      lead: "Transitioning from static export to serverless API routes with Resend.",
      content: [
        "Initially, the site was conceived as a static export (`output: 'export'`) hosted on edge CDNs. However, the client required a secure, instant contact form that delivered inbound brand inquiries directly to the team's inbox.",
        "To accomplish this without third-party form-handling embeds (which inject tracking scripts and layout shift), the project pivoted to a serverless Next.js App Router deployment on Vercel.",
        "The `/api/contact` route integrates the Resend SDK with multiple security layers:",
        "- **Honeypot Trap:** Hidden form field that immediately drops submissions from automated spam bots.",
        "- **HTML Entity Sanitization:** Stripping malicious tags before injecting user input into email templates.",
        "- **Strict Field Validation:** Enforcing valid corporate email formats and message length limits.",
      ],
    },
    {
      id: "performance-audit-results",
      title: "6. Performance Verification & Production Status",
      lead: "Documented Lighthouse audit metrics and current deployment state.",
      content: [
        "At the time of client handoff and initial production launch, full Lighthouse audits were executed across desktop and mobile profiles:",
        "- **Desktop Performance:** 99 / 100 with 0.000 Cumulative Layout Shift (CLS) and 0.4s First Contentful Paint.",
        "- **Mobile Performance:** 92 / 100, driven by the complete elimination of entrance scripts and heavy animation libraries.",
        "The site was deployed to production at `1nfinity.online`, fulfilling all client deliverables and operating as their primary commercial face.",
      ],
      callout: {
        type: "caveat",
        title: "Historical Snapshot Verification",
        text: "The 99 Desktop / 92 Mobile Lighthouse figures represent verified audit measurements taken during the deployment milestone. They are presented as a documented historical performance benchmark rather than a guarantee for every external network condition.",
      },
    },
  ],
  openQuestionsAndExclusions: [
    {
      question: "Did Vaibhav co-found or own 1nfinity.online?",
      resolutionOrLimitation: "Clearly attributed. The project was contracted client work for college colleagues. Vaibhav served as the external designer and frontend developer.",
    },
    {
      question: "Who decided to remove the pricing packages?",
      resolutionOrLimitation: "Documented accurately. The removal of pricing tiers was an executive commercial pivot made by the agency's founder in commit 62012c7.",
    },
  ],
};
