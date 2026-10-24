export type ProjectCategory =
  | "Applied Projects"
  | "System Integrity & DevSecOps Guardrails"
  | "Academic Milestones — Formal Coursework Projects"
  | "Technical Training Frameworks and Practical Modules"
  | "Built for No Reason Other Than Wanting To"
  | "Retired Explorations and Early Builds Used to Learn System Architecture"
  | "Client Work & Collaborations"
  | "Personal Websites & Platforms";

export interface ParentFramework {
  id: string;
  name: string;
  githubUrl: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  bullets: string[];
  category: ProjectCategory;
  techStack: string[];
  featured?: boolean;
  homepagePreview?: boolean;
  demoUrl?: string;
  githubUrl?: string;
  highlights?: string[];
  parentFrameworkId?: string;
  mustCheckout?: boolean;
  curatedSoftware?: boolean;
  shortDescription?: string;
  previewImage?: string;
}

export const TRAINING_PARENTS: ParentFramework[] = [
  {
    id: "lenovo-leap",
    name: "Lenovo LEAP NextGen Scholar",
    githubUrl: "https://github.com/vaibhv19/Lenovo-leap-Internship",
    description: "Learned a few things. Got a certificate too."
  },
  {
    id: "ibm-skillsbuild",
    name: "IBM SkillsBuild",
    githubUrl: "https://github.com/vaibhv19/IBM-Skillbuild",
    description: "Same, but IBM branded."
  },
  {
    id: "ibm-pbel",
    name: "IBM-PBEL",
    githubUrl: "https://github.com/vaibhv19/IBM-PBEL",
    description: "Four full-stack builds and a Gold-category assessment, because IBM wanted receipts."
  }
];

export const PROJECTS: Project[] = [
  // 1. Applied Projects
  {
    id: "checkmate-analyze",
    title: "CheckMate",
    tagline: "Post-chess clarity, engine-assisted — built so tactical blunders get analyzed instead of ignored.",
    bullets: [
      "Executed Stockfish 16 UCI engine compiled into WebAssembly for local, in-browser chess analysis.",
      "Built multi-threaded analysis worker threads leveraging SharedArrayBuffer and Web Workers.",
      "Implemented dynamic move-branch trees, centipawn evaluation charts, and automated blunder detection.",
      "Configured Cross-Origin Isolation headers (COOP/COEP) enabling SharedArrayBuffer concurrency for multi-PV engine evaluation."
    ],
    category: "Applied Projects",
    techStack: ["TypeScript", "React", "WebAssembly", "Web Workers", "SharedArrayBuffer", "chess.js"],
    featured: true,
    homepagePreview: false,
    mustCheckout: true,
    shortDescription: "A browser-based chess analysis tool powered by Stockfish 16 WebAssembly, running client-side with multi-threaded Web Workers and automated blunder detection.",
    previewImage: "/images/projects/checkmate-preview.png",
    demoUrl: "https://checkmate.vaibhv19.dev/",
    githubUrl: "https://github.com/vaibhv19/Check-Mate-Analyse"
  },
  {
    id: "trajectory",
    title: "Trajectory",
    tagline: "Started as a spreadsheet fix and ended up needing its own AWS bill.",
    bullets: [
      "Built Spring Boot REST microservices and PostgreSQL relational schemas for tracking application pipelines.",
      "Implemented JWT session authorization, OAuth2 workflows, recruiter sequences, and funnel metrics.",
      "Containerized services via Docker Compose and deployed to AWS EC2 behind an Nginx reverse proxy.",
      "Integrated Spring AI with Groq for automated job description parsing and scheduled cron workers for application ghost detection."
    ],
    category: "Applied Projects",
    techStack: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "AWS EC2", "Docker", "Nginx", "GitHub Actions"],
    featured: true,
    homepagePreview: true,
    mustCheckout: true,
    shortDescription: "A career operations platform with Spring Boot REST microservices, dual-token JWT authentication, LLM job description extraction, and AWS EC2 hosting.",
    demoUrl: "https://trajectory.vaibhv19.dev",
    githubUrl: "https://github.com/vaibhv19/Trajectory"
  },
  {
    id: "phoenix",
    title: "Phoenix",
    tagline: "A hybrid RAG engine that shows its retrieval score math instead of bluffing when it's unsure.",
    bullets: [
      "Engineered a dual-backend hybrid RAG pipeline pairing a Spring Boot 3.3 gateway with a FastAPI retrieval orchestrator.",
      "Fused dense semantic vector search (PostgreSQL pgvector) with sparse BM25 scoring via Weighted Linear Combination.",
      "Implemented self-healing fallback loops triggering query rewrites, FlashRank Cross-Encoder reranking, or user clarification prompts.",
      "Exposed step-by-step query scoring math, agreement confidence metrics, and visual execution traces in a React console."
    ],
    category: "Applied Projects",
    techStack: ["Java", "Spring Boot", "Python", "FastAPI", "PostgreSQL", "pgvector", "SentenceTransformers", "BM25", "Docker"],
    featured: true,
    homepagePreview: true,
    curatedSoftware: true,
    shortDescription: "A hybrid RAG engine fusing pgvector semantic search with BM25 lexical scoring, a 4-tier fallback state machine, and transparent scoring traces.",
    githubUrl: "https://github.com/vaibhv19/Phoenix"
  },
  {
    id: "conclave",
    title: "Conclave",
    tagline: "Models arguing in a single structured room instead of eight disconnected browser tabs.",
    bullets: [
      "Orchestrated multi-model agent collaboration workflows across local Ollama instances (Llama 3, Mistral, Gemma).",
      "Implemented shared canonical state management over real-time WebSocket and STOMP event streams.",
      "Implemented pessimistic database locking (SELECT FOR UPDATE) to allow real-time human pauses and interventions during active pipelines.",
      "Built dynamic prompt context translation across distinct model token formats with automated context compression."
    ],
    category: "Applied Projects",
    techStack: ["Java", "Spring Boot", "Spring AI", "WebSockets", "STOMP", "React", "Zustand", "Ollama", "PostgreSQL"],
    featured: false,
    homepagePreview: false,
    curatedSoftware: true,
    shortDescription: "A real-time multi-agent consensus platform orchestrating local Ollama language models over STOMP WebSockets with pessimistic concurrency locks.",
    githubUrl: "https://github.com/vaibhv19/Conclave"
  },
  {
    id: "foundry",
    title: "Foundry",
    tagline: "Three AI agents argue about your startup architecture so you don't have to — and remember the output.",
    bullets: [
      "Built stateful multi-agent evaluation workflows powered by LangGraph state machine graphs.",
      "Implemented PostgreSQL state persistence for checkpointing multi-agent decision histories.",
      "Offloaded heavy async tasks and evaluation routines to Celery worker clusters backed by Redis queues.",
      "Designed a Django and React dashboard for real-time graph visualization and task tracking."
    ],
    category: "Applied Projects",
    techStack: ["Python", "Django", "LangGraph", "Celery", "Redis", "PostgreSQL", "React"],
    featured: false,
    homepagePreview: false,
    curatedSoftware: true,
    shortDescription: "A stateful multi-agent evaluation pipeline with LangGraph state machine graphs, PostgreSQL checkpointing, and Celery worker queues on Redis.",
    githubUrl: "https://github.com/vaibhv19/Foundry"
  },
  {
    id: "shard",
    title: "Shard",
    tagline: "Building an in-memory cache from scratch so I stop trusting Redis blindly.",
    bullets: [
      "Developed an in-memory concurrent key-value cache service in Python using Django and Django REST Framework.",
      "Implemented Murmur3-32 consistent hashing with 150 virtual nodes per physical host for uniform key distribution.",
      "Engineered thread-safe LRU/LFU eviction strategies and background daemon thread TTL sweeps.",
      "Integrated Prometheus metrics handlers to track p50/p99 cache hit and miss latencies."
    ],
    category: "Applied Projects",
    techStack: ["Python", "Django", "Django REST Framework", "Consistent Hashing", "Prometheus", "Docker"],
    featured: false,
    homepagePreview: false,
    githubUrl: "https://github.com/vaibhv19/Shard"
  },
  {
    id: "cairn",
    title: "Cairn",
    tagline: "Same distributed cache architecture as Shard, rebuilt in Java 21 to see which runtime complains less under load.",
    bullets: [
      "Rebuilt distributed key-value cache engine in Java 21 and Spring Boot leveraging OS-level multi-threading and fine-grained lock-striping.",
      "Applied Murmur3 consistent hashing across a TreeMap-backed ring with 150 virtual nodes to minimize scale-event key churn.",
      "Utilized thread-safe ConcurrentHashMap structures and ReentrantReadWriteLock controls for high-concurrency throughput.",
      "Exposed Prometheus scrapers and Grafana dashboards for monitoring memory pools and request latencies."
    ],
    category: "Applied Projects",
    techStack: ["Java", "Spring Boot", "ConcurrentHashMap", "Consistent Hashing", "Prometheus", "Grafana", "Docker"],
    featured: false,
    homepagePreview: true,
    curatedSoftware: true,
    shortDescription: "A distributed in-memory key-value cache in Java 21 featuring Murmur3 consistent hashing on a 150-node virtual ring and Prometheus telemetry.",
    githubUrl: "https://github.com/vaibhv19/Cairn"
  },
  {
    id: "studylink",
    title: "StudyLink",
    tagline: "Study notes that don't vanish into dead group chats, and textbooks that stay indexed.",
    bullets: [
      "Built an academic resource vault featuring RAG document Q&A over course PDFs using Google Gemini and pgvector cosine search.",
      "Engineered a peer-to-peer textbook marketplace with an ACID listing state machine and pessimistic row locking (select_for_update).",
      "Integrated JWT authentication, Supabase S3-compatible cloud storage, and community discussion boards.",
      "Designed a responsive client using React 18, Zustand, Tailwind CSS, and in-browser PDF rendering."
    ],
    category: "Applied Projects",
    techStack: ["Python", "Django", "React", "PostgreSQL", "pgvector", "Google Gemini API", "Tailwind CSS"],
    featured: false,
    homepagePreview: false,
    githubUrl: "https://github.com/vaibhv19/StudyLink"
  },
  {
    id: "vigil",
    title: "Vigil",
    tagline: "Watches autonomous AI agents run inside isolated sandboxes, just in case they get ideas.",
    bullets: [
      "Developed AI agent safety harness executing agent tool calls inside ephemeral Docker containers with CPU/RAM resource limits.",
      "Implemented tool call interception capturing stdout, exit codes, and execution durations across bash and filesystem actions.",
      "Engineered real-time anomaly detection identifying path traversal attempts, shell injection metacharacters, and command loops.",
      "Built run comparison analytics and evaluation reporting backed by PostgreSQL, FastAPI, and a Typer CLI."
    ],
    category: "Applied Projects",
    techStack: ["Python", "FastAPI", "Docker SDK", "PostgreSQL", "SQLAlchemy", "Typer", "LangGraph"],
    featured: true,
    homepagePreview: true,
    curatedSoftware: true,
    shortDescription: "An autonomous AI agent safety harness executing tool calls inside ephemeral Docker containers with real-time shell and filesystem anomaly detection.",
    githubUrl: "https://github.com/vaibhv19/Vigil"
  },
  {
    id: "email-job-scheduler",
    title: "Email Job Scheduler",
    tagline: "Distributed email scheduling engine with delayed queues, atomic rate limits, and multi-tenant search.",
    bullets: [
      "Architected distributed email scheduling system using BullMQ, Redis, and PostgreSQL for delayed job processing.",
      "Engineered atomic per-sender rate limiting with minimum interval spacing and hourly quotas via Redis Lua scripts.",
      "Integrated Elasticsearch for isolated full-text search across scheduled and delivered email records.",
      "Built React dashboard with batch CSV recipient uploads, Ethereal SMTP preview capture, and queue monitoring."
    ],
    category: "Applied Projects",
    techStack: ["TypeScript", "React", "Node.js", "Express", "BullMQ", "Redis", "PostgreSQL", "Elasticsearch", "Docker"],
    featured: false,
    homepagePreview: false,
    mustCheckout: true,
    shortDescription: "A distributed email scheduling platform using BullMQ worker queues, atomic Redis Lua rate limiters, and full-text Elasticsearch search.",
    demoUrl: "https://email-job-scheduler.vaibhv19.dev",
    githubUrl: "https://github.com/vaibhv19/Email-Job-Scheduler"
  },

  // 2. System Integrity & DevSecOps Guardrails
  {
    id: "aegis",
    title: "Aegis",
    tagline: "Tests my own apps so I don't have to pretend they work.",
    bullets: [
      "Built an enterprise test automation framework and continuous integration pipeline targeting the Trajectory platform.",
      "Implemented modular Page Object Models and programmatic API client verification layers using TypeScript and Playwright.",
      "Integrated automated HTML and Allure test reports into containerized GitHub Actions CI workflows."
    ],
    category: "System Integrity & DevSecOps Guardrails",
    techStack: ["TypeScript", "Playwright", "Allure", "Docker", "GitHub Actions"],
    githubUrl: "https://github.com/vaibhv19/Aegis"
  },
  {
    id: "pulse",
    title: "Pulse",
    tagline: "Finds out how many users it takes to break something I built.",
    bullets: [
      "Engineered an automated load, stress, and resilience testing framework using k6 to validate backend service limits.",
      "Defined centralized performance budgets and evaluated latency degradation curves across Phoenix and Trajectory endpoints.",
      "Configured InfluxDB telemetry persistence and provisioned Grafana dashboards for real-time concurrency metrics."
    ],
    category: "System Integrity & DevSecOps Guardrails",
    techStack: ["k6", "JavaScript", "InfluxDB", "Grafana", "Docker", "GitHub Actions"],
    curatedSoftware: true,
    shortDescription: "An automated load and stress testing framework using k6 to evaluate backend service degradation curves with InfluxDB and Grafana telemetry.",
    githubUrl: "https://github.com/vaibhv19/Pulse"
  },
  {
    id: "warden",
    title: "Warden",
    tagline: "Politely tries to break into my own apps before someone else does.",
    bullets: [
      "Developed automated security audit suite integrating a custom OWASP ZAP API client with Python and Pydantic.",
      "Implemented evidence-based vulnerability scanners targeting SQL injection, cross-site scripting (XSS), and missing auth guards.",
      "Engineered multi-tenant broken access control (IDOR) verification and parameter-based intelligent input fuzzing.",
      "Built structured JSON and human-readable Markdown reporting engines with signature-based finding deduplication."
    ],
    category: "System Integrity & DevSecOps Guardrails",
    techStack: ["Python", "OWASP ZAP", "Pydantic", "Docker", "Security Audit", "Click"],
    curatedSoftware: true,
    shortDescription: "An automated security audit suite integrating the OWASP ZAP API for evidence-based vulnerability scanning, IDOR verification, and parameter fuzzing.",
    githubUrl: "https://github.com/vaibhv19/Warden"
  },

  // 3. Academic Milestones — Formal Coursework Projects
  {
    id: "ecolens",
    title: "EcoLens",
    tagline: "Prototype Flask application using Google Gemini to detect litter, waste, and hazards from geotagged photos.",
    bullets: [
      "Built a prototype web application integrating the Google Gemini API to identify litter, garbage, and environmental hazards in uploaded images.",
      "Extracted GPS coordinates from image EXIF metadata to plot identified hazard locations on an interactive Leaflet map.",
      "Designed a browser dashboard featuring image uploads, severity-tagged alert generation, and recent analysis history."
    ],
    category: "Academic Milestones — Formal Coursework Projects",
    techStack: ["Python", "Flask", "Google Gemini API", "Leaflet", "Pillow", "HTML/CSS"],
    githubUrl: "https://github.com/vaibhv19/EcoLens"
  },
  {
    id: "smart-surveillance-system",
    title: "Smart Surveillance System",
    tagline: "Academic system design and integration specifications for an AI-based campus surveillance rule-violation detection system.",
    bullets: [
      "Authored technical specifications and integration contracts for campus surveillance rule-violation monitoring as team Integration Lead (M4).",
      "Designed architectural blueprints for proposed FastAPI services, SQLAlchemy database schemas, and WebSocket alert dispatch channels.",
      "Specified a two-phase evidence compilation workflow detailing keyframe extraction, FFmpeg H.264 video clipping, and HTTP 206 streaming protocols.",
      "Defined cross-module interface boundaries, event payload contracts, and verification test plans across detection, tracking, and UI teams."
    ],
    category: "Academic Milestones — Formal Coursework Projects",
    techStack: ["System Architecture", "Integration Planning", "Technical Documentation", "API Specification"],
    featured: false,
    homepagePreview: false,
    githubUrl: "https://github.com/vaibhv19/Smart-Survellience-System"
  },

  // 4. Technical Training Frameworks and Practical Modules
  {
    id: "vidyalink",
    title: "VidyaLink",
    tagline: "Open-access resource vault and Q&A prototype running entirely client-side on browser storage.",
    bullets: [
      "Built a zero-backend educational resource vault and community Q&A board prototype operating entirely in the browser.",
      "Utilized localStorage for resource and doubt persistence, with sessionStorage tracking to prevent duplicate upvotes.",
      "Implemented real-time client-side keyword search, subject filtering, and solution-acceptance toggles in vanilla JavaScript."
    ],
    category: "Technical Training Frameworks and Practical Modules",
    parentFrameworkId: "lenovo-leap",
    techStack: ["JavaScript", "HTML5", "CSS3", "LocalStorage", "SessionStorage"],
    githubUrl: "https://github.com/vaibhv19/VidyaLink"
  },
  {
    id: "startup-blueprint-generator",
    title: "Startup Blueprint Generator",
    tagline: "Sequential multi-agent AI pipeline built with Langflow to convert startup concepts into investor-ready blueprints.",
    bullets: [
      "Orchestrated a sequential multi-agent pipeline across 4 specialized domain agents (Market, Business Model, Financials, Synthesis).",
      "Constructed visual pipeline graph and node execution definitions in Langflow to synthesize comprehensive venture blueprints.",
      "Integrated regulatory alignment, 9-box Business Model Canvas generation, and 12-24 month seed runway projections."
    ],
    category: "Technical Training Frameworks and Practical Modules",
    parentFrameworkId: "ibm-skillsbuild",
    techStack: ["Python", "Langflow", "Multi-Agent Systems", "Prompt Engineering"],
    githubUrl: "https://github.com/vaibhv19/startup-blueprint-generator"
  },
  {
    id: "the-tiffin-dispatch",
    title: "The Tiffin Dispatch",
    tagline: "A vintage cafe frontend ordering simulation with deterministic pricing, guest checkout, and printable receipts.",
    bullets: [
      "Developed a client-side restaurant ordering simulation consuming TheMealDB API with deterministic INR pricing and dietary filters.",
      "Engineered shopping cart state via React Context API, featuring item steppers, modal ingredient recipes, and favorite bookmarks.",
      "Simulated guest pickup and delivery checkout flows generating uniquely numbered kitchen tickets and printable receipts."
    ],
    category: "Technical Training Frameworks and Practical Modules",
    parentFrameworkId: "ibm-pbel",
    techStack: ["React", "JavaScript", "Tailwind CSS", "React Router", "Vite", "Context API"],
    mustCheckout: false,
    shortDescription: "A client-side restaurant ordering simulation featuring deterministic pricing, React Context cart state, and printable kitchen receipts.",
    demoUrl: "https://thetiffindispatch.vaibhv19.dev/",
    githubUrl: "https://github.com/vaibhv19/food-ordering-system"
  },
  {
    id: "e-commerce-website",
    title: "E-commerce Website",
    tagline: "Auth, cart ledger, order history — a full-stack catalog backed by Express and MongoDB.",
    bullets: [
      "Built full-stack catalog web app featuring user signup/login with JWT stored in HTTP-only cookies and bcrypt password hashing.",
      "Engineered a session-persistent client cart with server-side order recalculation, order history, and product catalog filters.",
      "Persisted user accounts and order records to MongoDB document storage using Mongoose models.",
    ],
    category: "Technical Training Frameworks and Practical Modules",
    parentFrameworkId: "ibm-pbel",
    techStack: ["Node.js", "Express", "MongoDB", "React", "JWT", "Tailwind CSS"],
    githubUrl: "https://github.com/vaibhv19/E--commerce-Website"
  },
  {
    id: "social-media-backend",
    title: "Social Media Backend",
    tagline: "Social graph backend with posts, likes, comments, and role-based moderation.",
    bullets: [
      "Engineered a Node.js and Express REST backend with EJS views supporting posts, comments, likes, and user relationships.",
      "Implemented user authentication via JWT in HTTP-only cookies, password hashing with bcrypt, and session handling.",
      "Built role-based moderation rules allowing administrators to delete flagged content across the platform.",
    ],
    category: "Technical Training Frameworks and Practical Modules",
    parentFrameworkId: "ibm-pbel",
    techStack: ["Node.js", "Express", "MongoDB", "Mongoose", "EJS", "JWT"],
    githubUrl: "https://github.com/vaibhv19/Social-Media-Backend"
  },
  {
    id: "weather-app",
    title: "Weather App",
    tagline: "Industrial telemetry console featuring debounced city search and 5-day forecast.",
    bullets: [
      "Developed responsive meteorological dashboard consuming Open-Meteo geocoding and forecast APIs without server keys.",
      "Implemented input debouncing on city search queries with a keyboard-navigable autocomplete dropdown.",
      "Engineered real-time telemetry readouts for temperature, wind direction compass, relative humidity, and 5-day outlook.",
    ],
    category: "Technical Training Frameworks and Practical Modules",
    parentFrameworkId: "ibm-pbel",
    techStack: ["JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Open-Meteo API"],
    githubUrl: "https://github.com/vaibhv19/Weather-App"
  },

  // 5. Built for No Reason Other Than Wanting To
  {
    id: "birthday-wish",
    title: "Birthday Wish",
    tagline: "A birthday wish, coded instead of texted.",
    bullets: [
      "Crafted interactive celebration web app with custom HTML5 Canvas particle physics.",
      "Integrated embedded audio controllers and smooth visual state animations.",
      "Synchronized interactive stage reveals with background audio playback and responsive canvas viewports."
    ],
    category: "Built for No Reason Other Than Wanting To",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Canvas API"],
    mustCheckout: false,
    shortDescription: "An interactive celebration webpage built with custom HTML5 Canvas particle physics and audio-synchronized state reveals.",
    demoUrl: "https://zoya.vaibhv19.dev/",
    githubUrl: "https://github.com/vaibhv19/Happy-Birthday-Zoya"
  },

  // 6. Retired Explorations and Early Builds Used to Learn System Architecture
  {
    id: "fitness-application",
    title: "Fitness Application",
    tagline: "Overengineered for a to-do list, honestly.",
    bullets: [
      "Architected a distributed microservices fitness platform using Spring Boot 3.4, Spring Cloud Gateway, Eureka, and Config Server.",
      "Implemented event-driven activity ingestion via RabbitMQ, profile storage in PostgreSQL, and activity logs in MongoDB.",
      "Secured endpoints with Keycloak OAuth2 PKCE/JWT authorization and integrated Google Gemini for personalized workout advice."
    ],
    category: "Retired Explorations and Early Builds Used to Learn System Architecture",
    techStack: ["Java", "Spring Boot", "Spring Cloud", "RabbitMQ", "PostgreSQL", "MongoDB", "Keycloak", "React", "Gemini API"],
    curatedSoftware: true,
    shortDescription: "A distributed microservices platform built with Spring Boot 3.4, Spring Cloud Gateway, Eureka discovery, RabbitMQ messaging, and Keycloak OAuth2.",
    githubUrl: "https://github.com/vaibhv19/AI-Powered-Fittness-application"
  },
  {
    id: "audio-transcriber",
    title: "Audio Transcriber",
    tagline: "Made a computer listen so I didn't have to.",
    bullets: [
      "Built a decoupled audio transcription web app pairing a Java 21 Spring Boot backend with a React 19 and Vite frontend.",
      "Integrated OpenAI Whisper models through Spring AI to process audio file uploads and stream back transcribed text.",
      "Configured CORS-enabled REST endpoints for browser audio uploads and real-time transcription display."
    ],
    category: "Retired Explorations and Early Builds Used to Learn System Architecture",
    techStack: ["Java 21", "Spring Boot", "Spring AI", "React 19", "Vite", "OpenAI Whisper"],
    githubUrl: "https://github.com/vaibhv19/AI-Audio-Transcriber"
  },
  {
    id: "authentication-service",
    title: "Authentication Service",
    tagline: "Everyone builds one of these eventually.",
    bullets: [
      "Created a stateless authentication service in Java 21 and Spring Boot 3.2 using Spring Security and Spring Data JPA.",
      "Implemented user registration, login authentication, BCrypt password hashing, and MySQL database persistence.",
      "Engineered JWT access-token generation with refresh-token creation and validation via a custom security filter."
    ],
    category: "Retired Explorations and Early Builds Used to Learn System Architecture",
    techStack: ["Java 21", "Spring Boot", "Spring Security", "Spring Data JPA", "MySQL", "JWT", "BCrypt", "Gradle"],
    githubUrl: "https://github.com/vaibhv19/Authentication-Service"
  },
  {
    id: "ticket-booking-system",
    title: "Ticket Booking System",
    tagline: "Concurrency practice disguised as a booking app.",
    bullets: [
      "Built a menu-driven CLI train ticket booking application in Core Java 21 simulating railway reservation workflows.",
      "Implemented user management, train search, interactive seat booking, and cancellation with JSON file persistence.",
      "Applied BCrypt password hashing, Jackson data-binding, and Java Streams without relying on external database engines."
    ],
    category: "Retired Explorations and Early Builds Used to Learn System Architecture",
    techStack: ["Java 21", "Jackson", "BCrypt", "Gradle", "OOP", "JSON"],
    githubUrl: "https://github.com/vaibhv19/Ticket-booking-system"
  },
  {
    id: "desktop-applications-suite",
    title: "Desktop Applications Suite",
    tagline: "Because browsers felt too easy.",
    bullets: [
      "Developed a collection of desktop GUI utilities in Java SE using the Swing framework and event-driven architectures.",
      "Built interactive applications including a Calculator, Tic Tac Toe, Paint canvas, To-Do list, and real-time Morse code translator.",
      "Implemented custom canvas mouse listeners, color selectors, and audio tone playback using the Java Sound API."
    ],
    category: "Retired Explorations and Early Builds Used to Learn System Architecture",
    techStack: ["Java SE", "Swing", "Java Sound API", "Event-Driven Programming", "OOP"],
    githubUrl: "https://github.com/vaibhv19/Desktop-Applications-Suite"
  },
  {
    id: "streamverse-ui",
    title: "StreamVerse UI",
    tagline: "AI helped, I take the credit.",
    bullets: [
      "Developed a responsive, multi-page streaming media interface prototype using semantic HTML5, CSS3, and vanilla JavaScript.",
      "Built a searchable movie catalog browse page, sticky navigation, and a dynamic watch page updating per selected title.",
      "Implemented lightweight client-side state handling and layout transitions without external frontend frameworks."
    ],
    category: "Retired Explorations and Early Builds Used to Learn System Architecture",
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    githubUrl: "https://github.com/vaibhv19/StreamVerse-UI"
  },
  {
    id: "high-performance-socket-servers",
    title: "High-Performance Socket Servers",
    tagline: "Talked to sockets until they talked back.",
    bullets: [
      "Programmed low-level TCP socket server architectures in Java demonstrating network I/O and resource concurrency.",
      "Implemented single-threaded, multi-threaded per-connection, and fixed thread pool models using Java ExecutorService.",
      "Enforced socket and stream resource cleanup using try-with-resources patterns and structured request-response exchanges."
    ],
    category: "Retired Explorations and Early Builds Used to Learn System Architecture",
    techStack: ["Java", "TCP Sockets", "Multithreading", "ExecutorService", "Network I/O"],
    githubUrl: "https://github.com/vaibhv19/High-Performance-Socket-Servers"
  },
  {
    id: "smart-research-assistant",
    title: "Smart Research Assistant",
    tagline: "AI-powered browser research companion for webpage summarisation and contextual analysis.",
    bullets: [
      "Developed a browser extension paired with a Java and Spring Boot REST backend for real-time web research.",
      "Integrated the Google Gemini API to generate concise webpage summaries and contextual insights directly in the browser side panel.",
      "Built client-server communication channels to capture active webpage content and return structured research notes."
    ],
    category: "Retired Explorations and Early Builds Used to Learn System Architecture",
    techStack: ["Java", "Spring Boot", "Google Gemini API", "Browser Extension", "REST API", "JavaScript"],
    githubUrl: "https://github.com/vaibhv19/Smart-Research-Assistant"
  },
  {
    id: "content-generator-platform",
    title: "Content Generator Platform",
    tagline: "Full-stack AI studio for text chat, stock image generation, and recipe creation.",
    bullets: [
      "Built a decoupled full-stack generative AI application pairing a Java 21 Spring Boot backend with a React dashboard.",
      "Integrated Spring AI with OpenAI endpoints for conversational chat, prompt-to-image synthesis, and custom recipe generation.",
      "Implemented CORS-enabled REST endpoints connecting React state managers to backend AI service handlers."
    ],
    category: "Retired Explorations and Early Builds Used to Learn System Architecture",
    techStack: ["Java 21", "Spring Boot", "Spring AI", "React", "OpenAI API"],
    githubUrl: "https://github.com/vaibhv19/AI-Content-Generator-Platform"
  },
  {
    id: "ca-portfolio",
    title: "CA Portfolio",
    tagline: "Practiced being organized, once.",
    bullets: [
      "Built a full-stack executive monorepo portfolio pairing a Next.js App Router frontend with a Django REST Framework backend.",
      "Implemented AES-256 Fernet symmetric database encryption at rest for sensitive client inquiries and contact submissions.",
      "Engineered server-side parallel fetching via Promise.all and responsive dark theme styling with Tailwind CSS."
    ],
    category: "Retired Explorations and Early Builds Used to Learn System Architecture",
    techStack: ["Next.js", "TypeScript", "Django REST Framework", "Python", "Tailwind CSS", "Cryptography (AES-256)"],
    githubUrl: "https://github.com/vaibhv19/CA----Portfolio"
  },
  {
    id: "my-portfolio",
    title: "My-Portfolio",
    tagline: "My personal portfolio.",
    bullets: [
      "Explored rapid generative UI prototyping using Google AI Studio with React 19, TypeScript, and Vite.",
      "Integrated the Google Gen AI SDK (@google/genai) alongside Tailwind CSS 4 and Motion animations."
    ],
    category: "Retired Explorations and Early Builds Used to Learn System Architecture",
    techStack: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "@google/genai", "Motion"],
    githubUrl: "https://github.com/vaibhv19/My-Portfolio"
  },

  // 7. Client Work & Collaborations
  {
    id: "1nfinity",
    title: "1nfinity",
    tagline: "Client website and digital presence for an influencer marketing and creator partnership agency.",
    bullets: [
      "Designed and developed the brand showcase website for an influencer marketing and creator partnership agency.",
      "Implemented a responsive dark aesthetic using Next.js App Router, Tailwind CSS, and custom typography.",
      "Built fluid marquee motion tracks, video media integrations, and consultation lead-capture workflows."
    ],
    category: "Client Work & Collaborations",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    mustCheckout: true,
    shortDescription: "A commercial client website engineered for an influencer marketing agency using Next.js App Router under strict performance budgets.",
    previewImage: "/images/projects/1nfinity-preview.webp",
    demoUrl: "https://1nfinity.online"
  },

  // 8. Personal Websites & Platforms
  {
    id: "portfolio-blog",
    title: "vaibhv19.dev",
    tagline: "Main personal portfolio and technical blog covering distributed systems, AI tooling, and engineering essays.",
    bullets: [
      "Designed and built primary professional portfolio and publication platform using Next.js 16 App Router and React 19.",
      "Developed custom Markdown parsing pipelines, dark aesthetic token system, and static route generation.",
      "Authored long-form technical essays and engineering deep dives spanning systems architecture and developer tooling.",
      "Implemented interactive project catalog indexes, responsive reading layouts, and dynamic metadata."
    ],
    category: "Personal Websites & Platforms",
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Markdown"],
    featured: true,
    homepagePreview: false,
    mustCheckout: true,
    shortDescription: "A technical publication platform and engineering journal covering distributed systems and systems architecture on Next.js 16.",
    demoUrl: "https://vaibhv19.dev",
    githubUrl: "https://github.com/vaibhv19/Portfolio-BLog"
  },
  {
    id: "life",
    title: "Life",
    tagline: "A personal digital scrapbook for the parts of life that don't fit on a résumé.",
    bullets: [
      "Curated a personal digital scrapbook showcasing creative artwork, sketches, and fitness milestones.",
      "Designed an editorial journal layout with paper grain textures, typography pairings, and responsive image galleries.",
      "Built with Next.js App Router and Tailwind CSS for smooth client transitions and lightweight media presentation."
    ],
    category: "Personal Websites & Platforms",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    mustCheckout: true,
    shortDescription: "A personal digital scrapbook and habit archive featuring an editorial paper-grain aesthetic and responsive media galleries.",
    demoUrl: "https://life.vaibhv19.dev"
  }
];