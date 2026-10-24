import { CaseStudyNarrative } from "./types";
import { checkmateNarrative } from "./checkmate";
import { trajectoryNarrative } from "./trajectory";
import { conclaveNarrative } from "./conclave";
import { phoenixNarrative } from "./phoenix";
import { emailJobSchedulerNarrative } from "./emailJobScheduler";
import { oneInfinityNarrative } from "./oneInfinity";

export * from "./types";
export {
  checkmateNarrative,
  trajectoryNarrative,
  conclaveNarrative,
  phoenixNarrative,
  emailJobSchedulerNarrative,
  oneInfinityNarrative,
};

export const CASE_STUDY_NARRATIVES: Record<string, CaseStudyNarrative> = {
  checkmate: checkmateNarrative,
  trajectory: trajectoryNarrative,
  conclave: conclaveNarrative,
  phoenix: phoenixNarrative,
  "email-job-scheduler": emailJobSchedulerNarrative,
  "1nfinity": oneInfinityNarrative,
};
