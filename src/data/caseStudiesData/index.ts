export * from "./types";
export { checkmateNarrative } from "./checkmate";
export { trajectoryNarrative } from "./trajectory";
export { conclaveNarrative } from "./conclave";
export { phoenixNarrative } from "./phoenix";
export { emailJobSchedulerNarrative } from "./emailJobScheduler";
export { oneInfinityNarrative } from "./oneInfinity";

import { CaseStudyNarrative } from "./types";
import { checkmateNarrative } from "./checkmate";
import { trajectoryNarrative } from "./trajectory";
import { conclaveNarrative } from "./conclave";
import { phoenixNarrative } from "./phoenix";
import { emailJobSchedulerNarrative } from "./emailJobScheduler";
import { oneInfinityNarrative } from "./oneInfinity";

export const CASE_STUDY_NARRATIVES: Record<string, CaseStudyNarrative> = {
  checkmate: checkmateNarrative,
  trajectory: trajectoryNarrative,
  conclave: conclaveNarrative,
  phoenix: phoenixNarrative,
  "email-job-scheduler": emailJobSchedulerNarrative,
  "1nfinity": oneInfinityNarrative,
};
