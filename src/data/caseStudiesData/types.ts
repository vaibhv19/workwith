export interface NarrativeSection {
  id: string;
  title: string;
  badge?: string;
  lead?: string;
  content: string[]; // markdown-formatted paragraphs
  contentAfter?: string[]; // optional paragraphs rendered after diagram/code/table
  callout?: {
    type: "dilemma" | "insight" | "caveat" | "invariant";
    title: string;
    text: string;
  };
  diagram?: {
    title: string;
    caption: string;
    ascii: string;
  };
  codeBlock?: {
    title: string;
    language: string;
    code: string;
  };
  table?: {
    headers: string[];
    rows: string[][];
    caption?: string;
  };
}

export interface CaseStudyNarrative {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  period: string;
  date: string;
  category: string;
  techFocus: string;
  status: string;
  image?: string;
  excerpt: string;
  metaDescription: string;
  liveUrl?: string;
  repoUrl?: string;
  role: string;
  evidenceTags: {
    label: string;
    type: "repo" | "conversation" | "verified";
  }[];
  quickMetrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  sections: NarrativeSection[];
  openQuestionsAndExclusions: {
    question: string;
    resolutionOrLimitation: string;
  }[];
}
