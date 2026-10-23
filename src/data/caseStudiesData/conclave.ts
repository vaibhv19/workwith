import { CaseStudyNarrative } from "./types";

export const conclaveNarrative: CaseStudyNarrative = {
  slug: "conclave",
  number: "04",
  title: "Conclave",
  subtitle: "Multi-Agent Consensus & Local Inference Limits",
  period: "August 2026",
  date: "2026-08-02",
  category: "Local AI Orchestration & Concurrency",
  techFocus: "Java 21 · Spring AI · Ollama (Llama 3/Mistral/Gemma) · STOMP WebSocket",
  status: "v1.0.0 Architecture",
  image: "/images/case-studies/conclave-live.png",
  excerpt: "A real-time multi-agent debate platform orchestrating local LLM consensus, documenting the prompt adapter migration alongside consumer hardware thermal ceilings.",
  metaDescription: "Detailed engineering case study of Conclave: orchestrating multi-LLM consensus in Java 21/Spring AI, adapting model-specific prompt tokens for Ollama, and handling human intervention with PostgreSQL pessimistic locks.",
  liveUrl: undefined,
  repoUrl: "https://github.com/vaibhv19/conclave",
  role: "Sole Architect & Systems Engineer",
  evidenceTags: [
    { label: "Verified Java 21 Codebase", type: "repo" },
    { label: "Prompt Token Adapters Verified", type: "repo" },
    { label: "SELECT FOR UPDATE Locks", type: "repo" },
    { label: "Hardware Thermal Constraints", type: "verified" },
  ],
  quickMetrics: [
    { label: "Execution Environment", value: "100% Local", detail: "Zero cloud API token dependencies" },
    { label: "Supported Local Models", value: "3 Topologies", detail: "Llama 3, Mistral 7B, Gemma 2" },
    { label: "Concurrency Control", value: "Pessimistic", detail: "SELECT FOR UPDATE in PostgreSQL" },
    { label: "Real-Time Protocol", value: "STOMP / WS", detail: "Streaming turn tokens to clients" },
  ],
  sections: [
    {
      id: "origin-and-context-tax",
      title: "1. Origin: Eliminating the 'Context Tax'",
      lead: "Why copy-pasting between 8 browser tabs inspired a real-time consensus room.",
      content: [
        "In complex engineering problem-solving, single-model LLM responses frequently exhibit idiosyncratic biases or subtle hallucinations. A common workflow is to open several tabs—Claude, ChatGPT, Gemini, and local LLMs—and manually copy-paste the question and responses back and forth to synthesize a balanced solution.",
        "This manual relay imposes a severe 'Context Tax': the engineer spends more mental energy formatting and transferring prompts than evaluating the actual ideas. Furthermore, models cannot directly critique each other's assumptions in real time.",
        "Conclave was designed as an interactive virtual meeting room. Multiple AI agents—each powered by a different language model with distinct personas and system prompts—engage in structured sequential debate, review each other's drafts, negotiate compromises, and stream the debate live to the user.",
      ],
    },
    {
      id: "evolutionary-arc",
      title: "2. The Three-Phase Evolution: Cloud to Mock to Local Ollama",
      lead: "How architectural constraints reshaped the AI inference backend.",
      content: [
        "The architecture of Conclave underwent three distinct evolutionary phases:",
        "**Phase 1 — Direct Cloud API Adapters:** Initial prototypes implemented HTTP clients calling Anthropic Claude, OpenAI, and Google Gemini endpoints. While fast, running multi-turn debates with 3 to 5 agents quickly burned through API token credits. A single complex debate could trigger 15 LLM calls in two minutes, making cloud APIs financially unsustainable for casual development.",
        "**Phase 2 — Simulated Mock ChatClients:** To build the WebSocket streaming UI and turn-taking state machine without API costs, the system was refactored around mock `ChatClient` implementations that emitted canned or randomized responses. While excellent for frontend testing, this provided no real consensus capability.",
        "**Phase 3 — 100% Local Inference via Ollama:** The final, verified architecture pivoted completely to local execution. Conclave connects directly to a local Ollama daemon running open-weights models (`Llama 3`, `Mistral 7B`, and `Gemma 2`). This eliminated token costs and preserved absolute privacy.",
      ],
      callout: {
        type: "insight",
        title: "The Prompt Adapter Transformation",
        text: "Because Ollama exposes a standardized REST endpoint (`/api/chat`) for all hosted models, the traditional adapter pattern—which usually translates differing HTTP JSON request/response formats—underwent an architectural pivot. Instead of adapting wire schemas, Conclave's adapters inject model-specific prompt tokens (Llama header tags vs Mistral [INST] tags vs Gemma turn tags) to ensure each model adheres to its expected instruction formatting.",
      },
    },
    {
      id: "prompt-token-adapters",
      title: "3. Model-Specific Prompt Token Adapters",
      lead: "Preserving model behavior through specialized token formatting.",
      content: [
        "Different open-weights models respond poorly if their specific instruction delimiters are omitted. Passing a raw system prompt intended for Llama 3 into Mistral often leads to role confusion or instruction leakage.",
        "Conclave implements specialized adapters registered in `ModelRegistryImpl.java`:",
        "- **LlamaAdapter.java:** Wraps prompts with Llama 3 header tokens (`<|start_header_id|>system<|end_header_id|>...<|eot_id|>`).",
        "- **MistralAdapter.java:** Formats conversations into strict `[INST]` and `[/INST]` instruction blocks.",
        "- **GemmaAdapter.java:** Employs Google's `<start_of_turn>user` and `<start_of_turn>model` syntax.",
      ],
      codeBlock: {
        title: "ModelRegistry and Prompt Token Adapter Implementation",
        language: "java",
        code: `public interface ModelAdapter {
    String formatPrompt(String systemPrompt, List<ChatMessage> history, String userMessage);
    ChatResponse callModel(String formattedPrompt);
}

@Component("llama3Adapter")
public class LlamaAdapter implements ModelAdapter {
    @Override
    public String formatPrompt(String systemPrompt, List<ChatMessage> history, String userMessage) {
        StringBuilder sb = new StringBuilder();
        sb.append("<|begin_of_text|>");
        sb.append("<|start_header_id|>system<|end_header_id|>\\n").append(systemPrompt).append("<|eot_id|>\\n");
        for (ChatMessage msg : history) {
            sb.append("<|start_header_id|>").append(msg.getRole()).append("<|end_header_id|>\\n")
              .append(msg.getContent()).append("<|eot_id|>\\n");
        }
        sb.append("<|start_header_id|>user<|end_header_id|>\\n").append(userMessage).append("<|eot_id|>\\n");
        sb.append("<|start_header_id|>assistant<|end_header_id|>\\n");
        return sb.toString();
    }
}`,
      },
    },
    {
      id: "concurrency-and-human-intervention",
      title: "4. STOMP WebSockets & Pessimistic Lock Interventions",
      lead: "Allowing human moderators to pause and redirect active multi-agent debates.",
      content: [
        "Debates are conducted in rooms identified by UUID, broadcasting token streams to connected clients over STOMP WebSockets at `/topic/room/{roomId}`.",
        "A critical feature of Conclave is **Human Intervention (`isIntervention`)**. In many multi-agent systems, once an autonomous loop starts, the human is powerless to stop it until the loop concludes or times out.",
        "In Conclave, a user can hit 'Intervene' and submit a mid-flight correction. Because agents execute on asynchronous virtual threads, an intervention could cause a race condition where an agent commits a turn based on obsolete debate state.",
        "Conclave handles this via **pessimistic database locking** in PostgreSQL using `SELECT FOR UPDATE`. When an intervention is triggered, the room's transaction acquires an exclusive row lock on the active debate state, setting the `intervention_pending` flag and aborting pending agent token generation before committing the user's corrective prompt.",
      ],
      diagram: {
        title: "Pessimistic Locking During Human Intervention",
        caption: "Database write lock freezes turn progression, allowing safe state injection without orphaned generations.",
        ascii: `Agent A (Llama 3)        Human Moderator              PostgreSQL Room Record
       |                             |                                  |
       |--- Streaming Turn 2 ------->|                                  |
       |                             |-- Click 'Intervene' ------------>|
       |                             |   BEGIN TRANSACTION              |
       |                             |   SELECT FOR UPDATE (room_id) ---+-> [LOCK ACQUIRED]
       |                             |   Set intervention_pending=true  |
       |<-- WS Interrupted ----------|   Commit user instruction        |
       |    (Token stream killed)    |   COMMIT & RELEASE LOCK ---------+-> [LOCK RELEASED]
       |                             |                                  |
       |--- Read Updated Context -------------------------------------->|
       |--- Resume with User Correction ------------------------------->|`,
      },
    },
    {
      id: "context-janitor",
      title: "5. Token Window Management & The Context Janitor",
      lead: "Compressing conversational history to fit smaller local context limits.",
      content: [
        "While cloud frontier models feature 128k to 1M token context windows, local models running on consumer hardware perform best within 4k to 8k tokens. In a 5-round debate among 3 models, raw token counts quickly exhaust local memory.",
        "Conclave implements a `WorkflowStateService` acting as a **Context Janitor**. After each debate round, the janitor compresses previous discussion into a structured `WorkflowState` object containing:",
        "1. The Core Objective and Constraints.",
        "2. The Current Working Draft (the synthesized agreement so far).",
        "3. Active Open Critiques (dissenting points yet to be reconciled).",
        "Subsequent agent turns receive this condensed state rather than the raw, repetitive conversational transcript, keeping context usage below 2,500 tokens throughout extended debates.",
      ],
    },
    {
      id: "thermal-limits-and-hardware-reality",
      title: "6. The Reality of Local Hardware & Thermal Ceilings",
      lead: "The practical engineering consequences of running concurrent LLMs on a laptop.",
      content: [
        "A truly honest engineering case study must document physical hardware constraints:",
        "Running three 8B-parameter quantization models sequentially on a consumer laptop generates immense sustained thermal load. During prolonged multi-round benchmarks, CPU and GPU core temperatures triggered hardware thermal throttling, measurably decreasing token-per-second generation rates.",
        "Furthermore, inference latency is inherently higher than cloud clusters: waiting 15–30 seconds for a local 8B model to generate a thorough critique changes the user experience from conversational instant messaging to a deliberative batch process. This required building clear UI status indicators ('Model Thinking...', 'Validating Token Stream') to prevent users from assuming the session had crashed.",
      ],
    },
  ],
  openQuestionsAndExclusions: [
    {
      question: "Are old cloud API keys or endpoints still active in Conclave?",
      resolutionOrLimitation: "Confirmed negative. The repository completed its migration to 100% local Ollama inference. Cloud API adapters are documented as historical Phase 1 milestones and are not presented as active endpoints.",
    },
  ],
};
