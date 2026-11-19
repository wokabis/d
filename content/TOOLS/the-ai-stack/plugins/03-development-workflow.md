# 03 · Development Workflow

> The discipline layer: orchestration, planning, testing, review, safety, and the mods that make a coding agent steerable. Grouped by the job, not the alphabet.

## The catalog

One table, one job per row. The Target column says which client it ships for; sections below route you by specialty.

| Plugin | What it does | Target |
| :----- | :----------- | :----- |
| [A Team](https://github.com/RBraga01/a-team) | Universal multi-agent infrastructure: 25 specialist agents, 16 enforced workflow skills, one lead orchestrator. | Claude Code · Codex · Cursor · OpenCode |
| [ab-method](https://github.com/ayoubben18/ab-method) | Grills problems into plans, then drives test-driven missions with critic reviews. | Claude Code · Codex |
| [adr-kit](https://github.com/rvdbreemen/adr-kit) | Architecture Decision Record toolkit that injects the governing decision before each edit and enforces ADRs in pre-commit and CI gates. | Claude Code · Codex · Copilot CLI · OpenCode |
| [Aegis](https://github.com/GanyuanRan/Aegis) | Skills framework and software methodology: planning, TDD, debugging, and collaboration that hold up under real use. | Skills |
| [aegotrax](https://github.com/aegotrax-dev/aegotrax) | Runtime tool-call gate: session intent, approval queue, audit stream. | Multi |
| [Agent Context OS](https://github.com/conorbronsdon/agent-context-os) | Portable Git-backed context and session workflow layer. | Multi |
| [Agent Deck](https://github.com/not-so-fat/agent-deck) | One MCP for context management: bind playbooks, MCP tools, and API keys to the session. | MCP |
| [Agent Guild](https://github.com/AgentTanuki/agent-guild-plugin) | Vets autonomous agents before you delegate work or money: portable passports, escrow, signed outcomes. | Claude Code · Codex · OpenClaw |
| [Agent Harness](https://github.com/0xenzyme/agent-harness) | Routes project work through goals, tasks, runs, evidence gates, and state sync via project adapters. | Claude Code |
| [Agent Harness Skills](https://github.com/yfge/agent-harness-skills) | Designs agent-ready repository harnesses: entrypoints, validation surfaces, runtime evidence, atomic commits. | Skills |
| [Agent Workflow System](https://github.com/1139030773-cmd/agent-workflow-system) | Chinese-language workflow system: seven cooperative skills, a behavioral constitution, and session recovery from fuzzy goal to executable task. | Codex · Claude Code |
| [agent-kit](https://github.com/agent-kit-startup/agent-kit) | Extension pack of slash commands. | Multi |
| [AgentPack](https://github.com/vishal2612200/agentpack) | Ranks repository context before editing: likely files, skill recommendations, rules, warnings, compact task packs. | Codex |
| [agentRamen](https://github.com/palrajjp/agentRamen) | Local SQLite graph of code and Git history plus session memory, so the agent stops re-reading the repo every prompt. | Skills |
| [Agentic Ship](https://github.com/moasq/agentic-ship) | Cross-host product-development toolkit: shared rules, specialist roles, service connections, machine-checked UI, backend, security, and launch gates. | Claude Code · Codex · Cursor · Hermes · OpenClaw |
| [agentic-readiness-assessment](https://github.com/exadel-inc/agentic-readiness-assessment) | Audits a repository for AI coding readiness and returns an evidence-based scorecard with prioritized fixes. | Skills |
| [Agentizer](https://github.com/Humiris/wwa-transform) | Turns any website into an AI-powered agent front end. | Standalone |
| [AgentOps](https://github.com/boshu2/agentops) | DevOps layer for coding agents: flow, feedback, and memory that compound between sessions. | Claude Code |
| [AgentWiki](https://github.com/tidusvn05/agentwiki) | Rust CLI that generates C4-style architecture docs for any repo, using your already-authenticated agent CLIs as the LLM backend. | CLI |
| [AgiFlow](https://github.com/AgiFlow/ai-plugin) | Project management workflows for coding agents: planning, grooming, execution, review, MCP integration. | Skills |
| [AI-Native SDLC](https://github.com/bashebr/ai-native-sdlc) | Plan, design, build, test, deploy, maintain — the AI-native lifecycle with human approval gates. | Skills |
| [AI-Native SDLC Loop](https://github.com/ghiaog123/ai-native-sdlc) | Six-stage SDLC enforced at the tool-call level: an artifact gate refuses source writes no approved plan covers. | Multi |
| [AIBoarding](https://github.com/gustavo-meilus/aiboarding) | Generates, maintains, compresses, and audits the onboarding files agents read first: AGENTS.md, CLAUDE.md, drift tracking. | Multi |
| [aide](https://github.com/jmylchreest/aide) | Persistent memory, code intelligence, and multi-agent orchestration via skills, hooks, and an MCP server. | Claude Code · OpenCode · Codex |
| [akc-cycle](https://github.com/shimo4228/akc-cycle) | The Agent Knowledge Cycle: ten skills across six phases (research, extract, curate, promote, measure, maintain) plus ADRs with expiry conditions. | Claude Code |
| [Alcove](https://github.com/epicsagas/alcove) | Local-first MCP server for private project docs: hybrid BM25+vector search, tree-sitter code indexing, doc-standard linting. | MCP |
| [Alloy](https://github.com/sonnetwork/alloy) | Parallel headless Claude Code workers managed from one VS Code panel. | Claude Code |
| [Ambiflex](https://github.com/ImadeBenToumAI/ambiflex) | Runs the plan as a live, steerable reasoning tree: a task is done only with a named proof, subagents compete on one benchmark. | Claude Code |
| [Anchor](https://github.com/biefan/anchor) | Engineering discipline pack: task-scope locking, anti-drift braking, condition-based review, and hooks that block irreversible bash patterns. | Claude Code · Codex |
| [Android Engineering Skills](https://github.com/lennonpetrick/android-engineering-skills) | Teaches agents to structure, write, and test Android apps with Kotlin and Jetpack Compose. | Skills |
| [antidote](https://github.com/Avtr99/antidote) | Stops agents from hiding bugs behind guards and makes them remove the cause. | Skills |
| [Antigravity Workspace Template](https://github.com/study8677/antigravity-workspace-template) | Multi-agent codebase knowledge-graph generator with context-aware planning and automatic scope management. | Antigravity |
| [Archcore](https://github.com/archcore-ai/archcore) | Spec-driven development and context engineering backed by project context in Git. | Claude Code · Cursor · Codex · Copilot |
| [AREX-Skill](https://github.com/VectorSpaceLab/AREX-Skill) | 5,000+ verified, executable skills distilled from ML repositories for coding and research agents. | Skills |
| [ArmorCodex](https://github.com/armoriq/armorCodex) | Intent-based security for Codex: MCP plan registration, policy gating, cryptographic proofs, audit logging on `bash` and `apply_patch`. | Codex |
| [assay](https://github.com/awss1i/assay) | Deterministic QA that drives a generated web page in a real browser and reports what broke, across fifteen coding harnesses. | Skills |
| [Atelier](https://github.com/pdcgomes/atelier) | Live canvases: the agent writes a React canvas into `.atelier/`, Atelier checks it and shows it in a sandboxed browser frame beside your prompt. | Claude Code |
| [Audio Plugin Coder](https://github.com/Noizefield/audio-plugin-coder) | Agent-agnostic JUCE workflow for building VST3/AU plugins from idea through design, implementation, test, and installer. | Skills |
| [avoid-ai-writing](https://github.com/conorbronsdon/avoid-ai-writing) | Audits and rewrites AI-patterned prose, with an optional local detector that calls no model and sends nothing to a network. | Skills |
| [Azzle](https://github.com/azzle-lab/azzle) | Base-native task coordination and settlement for agents, through a hosted MCP server and TypeScript SDK. | MCP |
| [BABOK Analyst](https://github.com/GSkuza/BABOK_ANALYST) | Business-analysis agent with 16 MCP tools, a 9-stage pipeline, and human-in-the-loop approval gates. | MCP |
| [BanyanCode](https://github.com/EkagraAgarwal/BanyanCode) | Terminal coding agent: parallel subagents, cross-session memory, Tree-sitter code graph, free web research. | CLI |
| [Better Harness](https://github.com/QoderAI/better-harness) | Evidence-backed workflow analysis that turns project and session signals into prioritized, verifiable improvements. | Skills |
| [BGS Modding Superpowers](https://github.com/BB-84C/bgs-modding-superpowers) | Bethesda modpack curation toolkit: xEdit conflict audit, MO2 control plane, BA2/BSA and Papyrus tooling, release-changelog skills. | Skills |
| [BioNexus](https://github.com/HERRY423/BioNexus) | Scientific reliability layer for bioinformatics agents: audits assumptions, calibrates evidence, caps unsupported claims. | Skills |
| [BioSymphony Structure Factory](https://github.com/BioSymphony/structure-factory) | Turns structural-biology questions into reproducible agent campaigns for protein design, prediction, and model comparison. | Skills |
| [Blazium Skills](https://github.com/blazium-games/blazium-skills) | Skill packs for the MIT Blazium engine: GDScript, scenes, editor MCP, export, live ops, shipping. | Claude Code · Cursor · Codex · Grok |
| [Blazium Subagents](https://github.com/blazium-games/blazium-subagents) | Studio roster of specialist subagents plus a routing orchestrator for design, prototype, and development. | Claude Code · Cursor · Codex · Grok |
| [Blender Agent Studio](https://github.com/ifBars/blender-agent-studio) | Specialist skills and a local MCP server for building, inspecting, validating, and rendering Blender scenes, with Mixamo and Pixabay handoffs. | Codex |
| [Blender Developer Tools](https://github.com/TMHSDigital/Blender-Developer-Tools) | 16 skills, 9 rules, and smoke-tested examples for Blender Python add-on work against correct 4.5/5.2 LTS APIs. | Claude Code · Cursor |
| [Boss](https://github.com/echoVic/boss-skill) | BMAD pipeline: requirements to deploy across nine specialist agents with an auditable runtime DAG and quality gates. | Claude Code · Codex · OpenClaw · Antigravity |
| [BPMN Mapper](https://github.com/rwspatin/bpmn-skill) | Reconstructs business flows from source code as validated BPMN 2.0, with incremental updates and export for bpmn.io and Camunda. | Claude Code |
| [cc-notify](https://github.com/1727128092/cc-notify) | Notification hooks for Claude Code: desktop alerts, sound effects, and customizable status updates when a session finishes. | Claude Code |
| [claude-council](https://github.com/hex/claude-council) | Asks Gemini, OpenAI, Grok, Perplexity, Kimi, OpenRouter, local Ollama, and four coding CLIs the same question in parallel, then synthesizes where they agree and differ. | Claude Code |
| [Claude Octopus](https://github.com/nyldn/claude-octopus) | Multi-LLM orchestration across 8 providers with Double Diamond workflows, adversarial review, and safety gates. | Claude Code |
| [Claude Watchdog](https://github.com/Temikus/claude-watchdog) | Stop hook that runs a critical post-mortem on every session, cross-checking what was asked against the actual git diff. | Claude Code |
| [claude-chrome-speed](https://github.com/cr1707/claude-chrome-speed) | Rules plugin that cuts Claude-in-Chrome task time — 40% less on Sonnet, 28% on Opus in a pre-registered 240-run benchmark. | Claude in Chrome |
| [claude-code-mods](https://github.com/bennewton999/claude-code-mods) | Five mods for running many sessions at once: live session board, PR-to-production tracker, rule tripwires, outward-action ledger, context gauge. | Claude Code |
| [claude-dnd-skill](https://github.com/neuralinitiative/claude-dnd-skill) | Unofficial D&D 5e Dungeon Master with persistent campaigns, full rules mechanics, and a cinematic TV companion. | Claude Code |
| [claude-harness-bootstrap](https://github.com/sagaga144/claude-harness-bootstrap) | Generates a project-specific harness (CLAUDE.md, hooks, subagents, commands) from one paragraph, with an eval suite proving where it changes outcomes. | Claude Code |
| [clausona](https://github.com/larcane97/clausona) | Switches Claude Code and Codex accounts while keeping conversation history, routes runs by plan usage, and manages skills, MCP servers, and hooks per account. | Multi |
| [Coffee Paladin](https://github.com/pawelkwaczynski/coffee-paladin) | Thermal guard for Apple Silicon: pauses hot jobs before the Mac throttles and gates heavy commands. | Claude Code · Codex · Gemini CLI |
| [Commit Narrator](./plugins/mturac/commit-narrator) | Semantic commit message from the staged diff, including the why. | Claude Code |
| [CommitLore](https://github.com/MongLong0214/commitlore) | Keeps constraints, rejected alternatives, and warnings in Git trailers and serves them back before the agent edits a file. | Skills |
| [Compact Jev](https://github.com/edoproch/compact-jev) | Command that strips stale tool calls and results from long conversations while keeping user and assistant text verbatim. | Claude Code |
| [Consensus](https://github.com/seanheiney/consensus) | Sends a hard question to a panel of frontier models that answer independently, critique each other, and return one signed-off answer with confidence and unresolved disagreements. | Multi |
| [Coordinate Agents](https://github.com/hogancv/coordinate-agents) | Multi-agent coordination with a local-first, recoverable Agent Bus and human-gated planning, implementation, review, and release. | Claude Code |
| [Cover My Repo](https://github.com/sjh9714/cover-my-repo) | Designs three checked GitHub social-preview cards with Codex or Cursor, then renders them locally with Chrome. | Codex · Cursor |
| [Craft](https://github.com/drobins25/craft) | Development harness where the codebase is read-only by default: every change passes a Write Gate, and the tool tracks history and taste over time. | Claude Code |
| [crews](https://github.com/mdalexandre/crews) | Plans subagents before they run: fixed model and effort per role, waves with blind checks, and a hook that blocks unplanned subagents. | Claude Code |
| [de-anthropocentric-research-engine](https://github.com/yogsoth-ai/de-anthropocentric-research-engine) | 900+ research skills letting an agent survey literature, find gaps, form hypotheses, and design experiments autonomously. | Claude Code |
| [debt-ops](https://github.com/bcanfield/agentic-tech-debt) | Catches AI-introduced tech debt at write time: hooks log every deferral to an in-repo registry and a review skill ranks paydown by file churn. | Claude Code |
| [Delx Recovery](https://github.com/davidmosiah/delx-plugins) | Recovery and continuity: resume sessions, capture state, process failures into a recovery plan, remember across sessions. | Codex · Claude Code · Cursor · VS Code |
| [Dely](https://github.com/hieuphung97/dely) | Control protocol turning requests into approved design contracts, orchestrating isolated worker sessions for sequential and independent work. | Multi |
| [Deps Doctor](./plugins/mturac/deps-doctor) | Multi-ecosystem dependency audit (npm, pip, cargo, go) in one report. | Skills |
| [Designer Skill](https://github.com/PyModel/designer-skill) | Plug-and-play MCP giving coding agents UI superpowers: design references, intent routing, and a static anti-slop gate, no API key. | MCP |
| [Deskbar](https://github.com/0NE-C0DEMAN/deskbar) | A row of widgets above the prompt: context usage, Gmail, calendar, tasks across sessions, notes with reminders, a music deck, and a billable-hours timer. | Claude Code |
| [Dev Skills](https://github.com/Jason-chen-coder/dev-skills) | Team workflow skills: specs, plans, TDD, debugging, verification, review, branch finishing, design context. | Skills |
| [dev-flow & plan-flow](https://github.com/PramodTKodag/claude-code-skills) | Marketplace plugin: resumable multi-PR changes, issue-to-implementation prompts, and CVE/outdated-package audits. | Claude Code |
| [dev-harness-kit](https://github.com/sh-ai-x/dev-harness-kit) | Enforced workflow skills covering planning, TDD, debugging, review, security, CI, and release. | Codex · Claude Code |
| [Development Skills](https://github.com/reidemeister94/development-skills) | Three-tier triage (PASS_THROUGH / LIGHT / FULL) workflow with language auto-detection and a staff-reviewer subagent on every change. | Codex · Claude Code |
| [DHP](https://github.com/SIDDARTHAREDDY8/dhp) | Durable Handoff Protocol: agent work that survives worker death. | Skills |
| [Demo GIF](https://github.com/conorbronsdon/demo-gif-skill) | Scripts, renders, optimizes, and embeds reproducible demo GIFs for CLI, TUI, web, and library projects using VHS or Playwright plus ffmpeg. | Skills |
| [Docflow (EvolveHQ)](https://github.com/EvolveHQ/docflow) | ADR-driven documentation workflow that scaffolds an ADR catalogue, plan queue, and AGENTS.md conventions across single or multi-repo workspaces. | Claude Code · Codex · Cursor · OpenCode · pi |
| [dryforge](https://github.com/prekuter/dryforge) | Intent to implementation: ready, then go. | Skills |
| [ejentum-mcp](https://github.com/ejentum/ejentum-mcp) | Reasoning, code, anti-deception, and memory harness tools for Codex. | Codex |
| [Embedded Workbench](https://github.com/AmethystLuna/embedded-workbench) | Embedded C/C++ firmware toolbox: FreeRTOS, Keil MDK, ARMCLANG, HardFault triage, and more. | Skills |
| [Encore Lite](https://github.com/encorelite/encore-lite) | Lightweight mods companion for coding agents. | Claude Code |
| [Env Lint](https://github.com/mko0le/env-lint) | Keeps `.env` files, variable references, and documentation in sync. | Skills |
| [Epic Harness](https://github.com/epicsagas/epic-harness) | Self-evolving harness: orbit (spec-to-ship), evolve (skill mutation), team (multi-agent), TDD, check, ship, simplify, debug, perf, secure. | Claude Code |
| [Espresso](https://github.com/croissant-eth/espresso) | Token-saving rules for coding agents. | Skills |
| [Extensive Prompt Architect](https://github.com/AugmentedFang/Extensive-Prompt-Architect) | Prompt engineering discipline for agents that write prompts. | Skills |
| [falsegreen-skill](https://github.com/vinicq/falsegreen-skill) | Finds tests that stay green when the code they cover is broken, applying six ordered judgments over Python, TypeScript, JavaScript, and Robot Framework suites. | Codex · Claude Code |
| [Festival](https://github.com/Obedience-Corp/festival) | Planning and persistent-context tools so agents execute multi-phase goals across sessions using files and Git. | Skills |
| [Flaky Detector](./plugins/mturac/flaky-detector) | Run a test command N times, report per-test flakiness %. | Skills |
| [Fleetglass](https://github.com/Fleetglass/fleetglass) | Live monitoring for every agent session on a machine. | Standalone |
| [Flow Scenes](https://github.com/romainfd/flow-scenes) | Named scene presets for agent sessions. | Claude Code |
| [FlowBoard](https://github.com/rasimme/FlowBoard) | Local-first project workspace and task coordination with lazy-loaded context and a shared Kanban board. | OpenClaw |
| [Foreman](https://github.com/thruwire/foreman) | Agent supervisor for Codex and OpenCode workers: tool activity, project responsibilities, completion checks. | Codex · OpenCode |
| [forgecat-agent-profiles](https://github.com/galadd/forgecat) | Curated profiles of ready-to-use agents. | Skills |
| [Game Development Studio](https://github.com/gamedevstudio/skills) | Full game-production pipeline skills: design, art, code, audio, release. | Skills |
| [Gangsta Agents](https://github.com/kucherenko/gangsta) | Spec-driven pipeline: reconnaissance, adversarial debate, TDD execution, verification. | Multi |
| [GCF Proxy](https://github.com/glacier-ctf/gcf-proxy) | Cuts context-window spend on long agent sessions. | Standalone |
| [genesis-architect](https://github.com/kcl-tangram/genesis-architect) | Architecture generation skills for greenfield projects. | Skills |
| [genie](https://github.com/automagik-dev/genie) | Interviews a wish into a plan, dispatches parallel subagents, reviews results against acceptance criteria. | Skills |
| [GlanceFlow](https://github.com/glanceflow/glanceflow) | At-a-glance status for agent sessions. | Claude Code |
| [gm-aiagent-plugins](https://github.com/fallpen/gm-aiagent-plugins) | Architecture enforcement for Flutter and Rails projects. | Skills |
| [go-ultimate](https://github.com/narumiruna/go-ultimate) | Idiomatic Go development guidance for coding agents. | Skills |
| [Gremlyn](https://github.com/kevin-jzt/gremlyn) | Chaos and security testing harness for coding agents. | Skills |
| [grip](https://github.com/grip-dev/grip) | Git hooks that keep review standards enforced. | Skills |
| [grounded-ai](https://github.com/grounded-ai-labs/grounded-ai) | Verification layer that keeps agent claims anchored to evidence. | Skills |
| [Groundwork](https://github.com/etr/groundwork) | Comprehensive skills library: discovery, planning, design, TDD, debugging, validation, collaboration, shipping. | Claude Code · Codex |
| [Halfcycle](https://github.com/Halfcycle-AI/halfcycle-cli) | Asks the open product and architecture questions one at a time before any code, records the answers, sends the plan to a fresh-eyes reviewer, and sizes the process to the change. | Claude Code |
| [Halftime](https://github.com/halftime-dev/halftime) | Break-time companion for long agent sessions. | Claude Code |
| [harmonyos-skills](https://github.com/dotbalo/harmonyos-skills) | HarmonyOS development knowledge for coding agents. | Skills |
| [Harness Kit](https://github.com/romabeckman/harness-kit) | Agentic development harness for specification, implementation, review, and telemetry across assistants. | Skills |
| [harness-eval](https://github.com/dreamiurg/harness-eval) | Lints and evaluates agent harness quality. | Skills |
| [harness-scope](https://github.com/pashpashpash/harness-scope) | Configuration profiles for coding agents. | Multi |
| [hemingway](https://github.com/sMyshkovsky/hemingway) | Writing quality skill: clarity, brevity, and voice. | Skills |
| [herdr-toolkit](https://github.com/shimo4228/herdr-toolkit) | Two skills for the Herdr multiplexer: spawn detached sessions into panes, send prompts, and report whether each landed and finished. | Claude Code |
| [herdrpowers](https://github.com/transparent-pegasus/herdrpowers) | Multi-phase TDD cycle delegating implementation, testing, and review to sibling agent panes. | herdr |
| [HOL Guard Plugin](https://github.com/hashgraph-online/hol-guard-plugin) | Antivirus-style workflow for agent tooling: local approvals and receipts for plugins, skills, and MCP servers. | Codex · Claude Code · Cursor · Gemini · OpenCode |
| [HOTL Plugin](https://github.com/yimwoo/hotl-plugin) | Human-on-the-Loop workflow with structured planning, review, and verification guardrails. | Codex · Claude Code · Cline |
| [humanizer-ru](https://github.com/Vladimir-Human/humanizer-ru) | Deterministic offline cleanup of chat copy-paste artifacts in Russian text and Markdown; skill, MCP server, CLI, GitHub Action. | Skills |
| [i-hate-editing](https://github.com/ranahaani/i-hate-editing) | Turns raw talking-head footage into a finished cut with local whisper.cpp + ffmpeg — the model never watches the pixels. | Claude Code |
| [i-m-senior-developer](https://github.com/spumer/i-m-senior-developer) | Plugin collection covering TDD, code clarity, planning, review roles, and context upkeep. | Claude Code |
| [idea-diamond](https://github.com/diamondhands-dev/idea-diamond) | Startup idea validation and market research. | Skills |
| [iris-agentic-dev](https://github.com/intersystems-community/iris-agentic-dev) | InterSystems IRIS development guidance for coding agents. | Skills |
| [Janus](https://github.com/dvir-aluf/janus) | Account switching for coding agents. | Multi |
| [Jev Go](https://github.com/LayerJev/jev-go) | Jev for Go: typed records, first-class judgments, typed mistakes, and native type validation. | Go library |
| [Jev MCP](https://github.com/LayerJev/jev-mcp) | Serve Jev tools from any MCP server implementation. | MCP |
| [Jev Studio](https://github.com/LayerJev/jev-studio) | GUI for authoring and previewing Jev-validated types. | Standalone |
| [jev-harness](https://github.com/LayerJev/jev-harness) | Bundles Jev tools and skills for coding agents. | Skills |
| [jev-preflight](https://github.com/LayerJev/jev-preflight) | Pre-install checks for Jev-validated MCP servers. | Skills |
| [jev-router](https://github.com/LayerJev/jev-router) | Routes each coding-agent task to the cheapest model that passes your own validation suite. | Skills |
| [jev-use](https://github.com/LayerJev/jev-use) | CLI that audits live MCP tool schemas and generates a Jev-validated use wrapper. | CLI |
| [Jevbridge](https://github.com/LayerJev/jevbridge) | Bridge from Codex to Jev: control, tokens, feedback, and events. | Codex |
| [jevcheck](https://github.com/kickbench/jevcheck) | Dry-run engine for Jev validation rules. | Skills |
| [JevPromptCoach](https://github.com/HugeDogBiteMe/jevpromptcoach) | Structured prompt optimization for better agent runs. | Skills |
| [jevyoumean](https://github.com/kickbench/jevyoumean) | Typo-safe skill identifiers for agents. | Skills |
| [Jump Skills](https://github.com/fabricioctelles/jump-skills) | Meta-skills that route requests to specialized skills across multi-agent hosts. | Multi |
| [ken](https://github.com/ayoubsissen/ken) | Discipline engine that keeps agents honest on scope, budgets, and cleanup. | Skills |
| [Kernel](https://github.com/Kernel-Machine/kernel) | Behavioral kernel for agents: enforced constraints plus context discipline. | Multi |
| [kitbash](https://github.com/andrewcmaxwell/kitbash) | Plans each change around what your codebase already has before writing anything new. | Skills |
| [KOZMOS](https://github.com/Junko-Tech/KOZMOS) | Companion mods pack for coding agents. | Claude Code |
| [Krypton](https://github.com/jturntdev/krypton) | Goal-based planning with a proof gate: ownership, cutover, review gates, acceptance evidence. | Codex · Claude Code |
| [Labtasker](https://github.com/luocfprime/labtasker) | Queues and runs independent ML inference, evaluation, and experiment jobs across long-lived workers. | Claude Code |
| [LaTeX Inline](https://github.com/vilic/claude-code-latex-inline) | Renders LaTeX in the terminal as you type. | Claude Code |
| [lattice](https://github.com/techygarg/lattice) | Composable skills framework infusing clean code, clean architecture, DDD, secure coding, and testing by default. | Skills |
| [LGTMgate](https://github.com/Zigzag968/claude-code-lgtmgate) | One workflow per issue in its own worktree: issue to reviewed PR, with each acceptance criterion ticked only on cited evidence. | Claude Code |
| [Limitless Library](https://github.com/jb-britt/limitless-library) | Reuses methods without copying their source. | Skills |
| [limitwise](https://github.com/davidteren/limitwise) | Schedules heavy agent work around provider limits. | Skills |
| [Logic Probe](https://github.com/AmethystLuna/logicprobe) | Verifies design-document and plan claims against the codebase; escalates behavioral claims to executable-model checks and compares before/after models for regressions. | Skills |
| [loose-ends](https://github.com/anthonyjk2/loose-ends) | Keeps a checklist of unfinished agent work. | Claude Code |
| [LVTD Skills](https://github.com/LVTD-LLC/skills) | Reusable skills for Django, Rust, Cookiecutter, SEO, traction, product marketing, and nonfiction publishing. | Codex · Claude Code |
| [Maestro](https://github.com/mbanderas/maestro) | Local multi-CLI fusion: fans a prompt across model CLIs, then judges and synthesizes one grounded answer. | Multi |
| [MailAgent](https://github.com/Alex0nder/MailAgent) | Temporary inboxes for signup QA: OTP, magic links, simulate-first autotests — 23 MCP tools. | Codex |
| [MARGINAL](https://github.com/SignalLayerLabs/Marginal) | Runtime governor that detects proven no-progress repetition, records decision evidence, starts in Shadow Mode, and earns enforcement only on local evidence. | Multi |
| [MartinLoop](https://github.com/Keesan12/martin-loop) | Governed runtimes for coding agents: scope limits, budget caps, verifier gates, retries, stop conditions, evidence records. | Codex · Claude Code · Gemini CLI |
| [md-prompt](https://github.com/nogu66/md-prompt) | Paints Markdown onto the prompt box as you type, syntax-highlighting fenced code without changing what you send. | Claude Code |
| [MegaLinter](https://github.com/oxsecurity/megalinter) | Sets up, runs, and fixes MegaLinter on any repository: 100+ linters across 69+ languages and 23+ formats, with per-linter fix guides. | Skills |
| [Mental CLI](https://github.com/afaraha8403/mental) | Local-first CLI that keeps where you left off and what is still open across sessions. | CLI |
| [Mermaid Inline](https://github.com/dazebug/mermaid-inline) | Draws Mermaid diagrams from replies right in the terminal — pictures in Ghostty, cmux, kitty; Unicode elsewhere. | Claude Code |
| [mermaid-for-claude](https://github.com/lucaswx2/mermaid-for-claude) | Renders Mermaid blocks as ASCII/Unicode diagrams inside the terminal, fully local. | Claude Code |
| [Metis](https://github.com/gkrtjd99/Metis) | Repository-level orchestrator: bounded discovery, planning, implementation, review, verification by fresh subagents, with worktree isolation and path ownership. | Skills |
| [model-orchestration](https://github.com/divyamrastogi/model-orchestration) | Manager/worker split: keep your smartest model as manager, delegate token-hungry work to headless workers on cheaper providers. | Claude Code |
| [modhub](https://github.com/MDmubarak786/claude-mods) | 26 small mods: guards like fence, tripwire, and pkg-guard, tool-row helpers, and eight zero-token games in a side pane. | Claude Code |
| [ModStage](https://github.com/qualixar/modstage) | Runs Codex, Grok, Muse, Antigravity, and more side by side with staged handoffs. | Claude Code |
| [mstack](https://github.com/IMisbahk/mstack) | 61 skills, 19 agents, and 33 prompts for 20+ coding agents via npx. | Multi |
| [mstar-harness](https://github.com/btspoony/mstar-harness) | Routes work through PM, dev, QC, and QA roles with deterministic workflow gates, installable across dsh, omp, OpenCode, Cursor, Kimi Code, ZCode, and Codex. | Multi |
| [Munim](https://github.com/vishalsg42/munim) | Multi-account MCP: a separate OAuth session per client across 11 providers, refusing any call that would leak one client's credentials to another host. | MCP |
| [mutagate](https://github.com/keyboardsamurai/mutagate) | Mutation-testing hook: mutates code under agent-written tests and blocks completion until tests kill at least 80% of mutants. | Claude Code · Codex · OpenCode · pi |
| [Nibbl](https://github.com/nuromirzak/nibbl) | Tamagotchi-style pixel pet that lives above the prompt via function hooks. | Claude Code |
| [oddyssey](https://github.com/using-system/oddyssey) | Observability-Driven Development: instrument apps or agents with OpenTelemetry gen_ai spans, observe runs on a local Grafana stack, benchmark with k6, verify the fix landed. | Multi |
| [Ontoly](https://github.com/0xsarwagya/ontoly-codex-plugin) | Deterministic Software Graph workflows for Codex: architecture review, dependency analysis, request tracing, impact analysis. | Codex |
| [Open Dynamic Workflows](https://github.com/Suraj1235/open-dynamic-workflows) | Local-first dynamic multi-agent workflows with a daemon, MCP bridge, and bring-your-own-model support. | Codex · OpenCode · Antigravity · Cursor · VS Code |
| [Open PR](https://github.com/TOMOSIA-VIETNAM/open-pr) | AI code review that lands on the pull request itself across GitHub, GitLab, and Bitbucket, learning each repo's conventions. | Claude Code · Cursor · Codex · Gemini CLI · Antigravity |
| [openclaw-otel-observability](https://github.com/henrikrexed/openclaw-observability-plugin) | OpenTelemetry observability for OpenClaw agents: traces, metrics, logs via OpenLLMetry. | OpenClaw |
| [opus-ollama](https://github.com/rsreeju/opus-ollama) | Opus plans; a tool-less Ollama model writes the code through a path-allowlisted script. | Claude Code |
| [Orchestrate Task Force](https://github.com/alexpsz/orchestrate-task-force) | Task orchestration with visible ownership, scoped parallel work, and integrated review. | Codex Desktop · Claude Code · Antigravity |
| [orchflows](https://github.com/DanMcInerney/orchflows) | Build complex, composable workflows from two simple skills. | Skills |
| [Orka](https://github.com/ugorur/orka) | Runs headless coding-agent CLIs as a team in isolated git worktrees, with cross-model review, QA, and a scored run ledger. | Codex · Grok · Claude Code · Cursor · Gemini · OpenCode · Copilot |
| [OutcomeLoop](https://github.com/tinyopsstudio/outcomeloop-build-week) | Outcome-verified Codex runner: resumes one session until an external verifier passes, then seals the evidence in an Ed25519-signed receipt. | Codex |
| [pawl](https://github.com/ulukaya/pawl) | Deterministic hooks that gate destructive commands, credential access, outbound messages, and repeated tool calls — pure Python stdlib. | Claude Code · Codex · Antigravity |
| [Personal Data Protection](https://github.com/AltByteSG/personal-data-protection-skill) | Engineer-facing privacy-compliance reference across five jurisdictions (SG, TH, ID, MY, PH), organized by where each obligation lands, with checklists and a breach-response runbook. | Skills |
| [phaseproof](https://github.com/speedsharmaai/phaseproof) | Reviewed phases: code stays locked until the owner approves, reviewer agents check docs, screens, and diff, and a gate script re-runs project checks before each phase closes. | Claude Code |
| [Phone a Friend](https://github.com/freibergergarcia/phone-a-friend) | Sends prompts and diff-scoped reviews to a second model for a structured verdict, with resumable sessions and multi-model team workflows. | Claude Code · Codex · OpenCode · pi |
| [Pika](https://github.com/ayushjainr/pikamux) | Lets agents discover peers with relevant experience and consult them through private side conversations while their work continues. | Codex · Claude Code · OpenCode |
| [Planning with Files](https://github.com/OthmanAdi/planning-with-files) | Persistent file-based planning: task plans, findings, and progress survive context loss, crashes, and compaction. | Claude Code · Codex |
| [pm-claude-skills](https://github.com/mohitagw15856/pm-claude-skills) | 1,174 plain-markdown skills covering professional and life tasks, with built-in quality checks and anti-patterns. | Claude Code · Codex · Gemini · Cursor |
| [Ponytail](https://github.com/DietrichGebert/ponytail) | Guides agents toward minimal working solutions: YAGNI, existing code, standard libraries, native platform features. | Skills |
| [PR Storyteller](./plugins/mturac/pr-storyteller) | PR title, body, and test plan from commits and the diff against the base branch. | Skills |
| [Praxis](https://github.com/ouonet/praxis) | Intent-driven workflow skills: describe what done looks like, not the steps; triage-first design keeps token costs low. | Skills |
| [Professor](https://github.com/rezzminator/professor) | LLM-harness fleet framework with a Go fleet CLI/TUI, cross-chat messaging, and a discipline layer compiled across three runtimes. | Claude Code · Codex · OpenCode |
| [Project Autopilot](https://github.com/AlexMi64/codex-project-autopilot) | Turns an idea into a structured project workflow with planning, execution, verification, and handoff. | Codex |
| [Promptiff](https://github.com/BrantonLiu/promptiff) | Compares AI responses against the original prompt to surface omissions and unsourced additions; local CLI, skill, and comparison canvas. | Skills |
| [proof-of-done](https://github.com/WST2002/claude-code-skills) | Blocks completion until tests, build, or lint pass after the last edit — rejecting hidden exit codes, zero-test runs, and flaky pass-after-fail reruns. | Claude Code |
| [Prove-It Mini](https://github.com/OlegTestov/prove-it-mini) | Pytest stop hook: runs your tests when the agent tries to finish, hands red results back up to two times, then marks the result NOT verified. No model calls. | Claude Code |
| [pstack for Codex](https://github.com/Aqua-123/pstack-for-codex) | Codex-native engineering workflows: 45 explicit skills and 23 Poteto Mode playbooks. | Codex |
| [Quality Engineering Skills](https://github.com/RBraga01/Quality-Engineering-Skills) | 22 structured QE skills for automotive and manufacturing: ISO 9001, IATF 16949, AIAG-VDA FMEA, VDA 6.3, PPAP, APQP, SPC, MSA. | Skills |
| [Quanta Costa](https://github.com/wukonigcom/quanta-costa) | Usage limits with pace forecast, billing period, session cost in tokens and currency — right above the prompt. | Claude Code |
| [QuietOS](https://github.com/jondean213-pixel/quietos-governor) | Runtime governor where the brain proposes and QuietOS disposes: tiered decisions, approvals bound to the exact proposed call, signed replies, public red-team log. | Standalone |
| [Ratchet](https://github.com/baisethomas/Ratchet) | Verification playbook for any capability tier: model-agnostic AGENTS.md contract, destructive-command guard, stop gate, and skills that reproduce a bug and prove the regression test fails first. | Claude Code · Codex |
| [ratchet](https://github.com/krishansubudhi/ratchet) | A code-size budget for your repo that only goes down — agents cannot grow the code without a human-approved grant. | Skills |
| [ratification-docket](https://github.com/seevali/claude-skills) | Gathers proposed decisions scattered across dense documents into plain-language decision cards, records your rulings back into trackers and ledgers. | Claude Code |
| [React Native Developer Skills](https://github.com/Neha/rn-developer-skills) | Vendor-neutral React Native skills: spec authoring, architecture, performance, security, testing, review. | Codex · Claude · Cursor |
| [reevesagents](https://github.com/mertkayacs/reevesagents-skill) | One coding agent starts, prompts, reads, and stops other AI coding CLIs, each in its own tmux window. | Claude Code · Codex · Kimi Code · Gemini CLI |
| [Rel.AI MCP](https://github.com/Kyne0328/rel-ai-mcp) | Brings Codex-style coding workflows to ChatGPT Web against local workspaces, using ChatGPT quota instead of Codex quota. | MCP |
| [Repo Audit](https://github.com/conorbronsdon/repo-audit) | Checks whether a README matches its code and whether stated rules are actually enforced, with an opt-in launch workflow. | Skills |
| [Reviewable HTML Workbench](https://github.com/u-ichi/reviewable-html-workbench) | Generates reviewable HTML documents, serves previews, collects inline comments, and feeds outcomes back into the agent workflow. | Skills |
| [Rider Skills](https://github.com/JetBrains/rider-skills) | Official JetBrains Rider skills: semantic code understanding, refactoring, debugger, and test tooling for .NET and Unreal projects. | Skills |
| [River Review](https://github.com/s977043/river-review) | Versioned registry of code-review skills driven by a perspective-based reviewer (code, security, performance, architecture, testing, adversarial) that verifies findings against the diff. | Skills |
| [RoadmapSmith](https://github.com/PapiScholz/roadmapsmith) | Evidence-backed ROADMAP.md workflows with validation, sync, and generation across any stack. | Skills |
| [RTL Terminal](https://github.com/MohammedSaud404/rtl-terminal) | Lays out Arabic, Hebrew, Persian, and Urdu text properly in Windows terminals: right-aligned paragraphs, correct brackets, live RTL preview. | Claude Code |
| [Scoutflo AI Readiness](https://github.com/Scoutflo/ai-readiness) | Finds infrastructure and monitoring gaps through read-only checks of cloud, Kubernetes, and observability stacks. | Claude Code |
| [Second Claude Code](https://github.com/unclejobs-ai/second-claude-code) | Knowledge-work plugin: research, writing, review, and refinement skills in a gated gather, draft, check, cut workflow. | Claude Code · Codex · Grok |
| [Secret Guard](./plugins/mturac/secret-guard) | Pre-commit secret scanner using pattern and entropy detection. | Skills |
| [security-mcp](https://github.com/pratham-jain33/security-mcp) | Zero-key security grading for any website: A+–F score, CVE checks against CISA KEV and EPSS, MITRE ATT&CK defenses in plain English. | MCP |
| [Session Flow](https://github.com/leeguooooo/session-flow) | Runs one JSON workflow across separate agent sessions, each step in its own TUI, with parallel steps and results passed between sessions. | Standalone |
| [Session Orchestrator](https://github.com/Kanevry/session-orchestrator) | Structured planning, wave-based execution, VCS integration, quality gates, and clean close-out. | Claude Code · Codex · Cursor |
| [session-handoff](https://github.com/yuzushi-dev/session-handoff) | Creates handoffs and migrates sessions between Claude Code and Codex. | Claude Code · Codex |
| [Shadowclone](https://github.com/theonly1me/shadowclone) | Turns the engineering preferences you keep repeating into reusable skills and instructions. | Claude Code · Codex · Cursor · Antigravity |
| [Shrike](https://github.com/SumantxD/shrike) | Shows the agent what your web app actually did on each click — code path, real values, queries, errors — so it fixes from what ran; every change waits for your approval. | Claude Code |
| [Simple Man](https://github.com/Maksim-Burtsev/simple-man) | High-compression communication mode for Codex that removes filler while preserving search, validation, and implementation effort. | Codex |
| [simpleviz](https://github.com/sstoehrm/simpleviz) | Teaches agents the simpleviz EDN graph format and CLI to author, serve, and compare diagrams. | Skills |
| [squidward](https://github.com/keshavbiswa/squidward) | Does the work correctly, delivers every sentence sarcastically: mild, rowdy, savage levels plus a one-line roast code review. | Claude Code |
| [ssot-check](https://github.com/conorbronsdon/ssot-check) | Discovers repeated facts in documentation and checks declared copies against canonical values. | Skills |
| [Staff Engineer Mode](https://github.com/sirmarkz/staff-engineer-mode) | Routes design, delivery, reliability, security, operations, and maintenance prompts to staff-level specialist guidance. | Skills |
| [Standup Generator](./plugins/mturac/standup-gen) | Daily standup notes from git activity across repos. | Skills |
| [Stvena](https://github.com/nccapo/stvena) | Terminal workspace running Codex or Claude Code beside live diffs, full-file review, checks, staging, and precise code feedback. | CLI |
| [subagent-tuner](https://github.com/Kruhlikau/subagent-tuner) | Sets the model and reasoning effort of every subagent, with a Manual/Auto band and a saved default that overrides what the agent asked for. | Claude Code |
| [Suede Creator Skills](https://github.com/JasonColapietro/suede-creator-skills) | Open-source pack covering multi-agent workflows, code review, design, copy, SEO, app shipping, and creator-rights workflows. | Claude Code · Codex |
| [supabase-stripe-checks](https://github.com/edtrackai/supabase-stripe-checks) | Read-only audit of Next.js apps: Supabase row-level-security gaps in migrations, Stripe webhooks that skip signature verification. | Claude Code |
| [Super Jev](https://github.com/Kevthetech143/super-jev) | One judge between your agent and your data: finds the right skill and file, checks claims, gates actions, remembers only approved answers. | Multi |
| [super-token-saver](https://github.com/ww-w-ai/super-token-saver) | Cuts token spend with prompt-cache expiry warnings, zero-cost session restore after compaction, and per-model cost reports. | Claude Code · Codex |
| [Supergraph](https://github.com/datit309/supergraph) | Enforces planning, TDD, verification, review, and architecture-aware decisions with local codebase graph intelligence. | Claude Code · Codex · Antigravity · OpenCode |
| [Superintelligent UI](https://github.com/levfo/superintelligent-ui) | Answers questions with small interactive pages instead of text walls: step-through diagrams, calculators with editable assumptions, filterable grids. | Claude Code |
| [Superloopy](https://github.com/beefiker/superloopy) | Evidence-gated Codex loop harness with specialist skills, including near-pixel authorized website cloning backed by screenshots and visual QA. | Codex |
| [Supermod ClaudeCode](https://github.com/nayde8824/supermod-claudecode) | Workbranches: trial copies of your project you can save, merge, or throw away in one click, plus a usage bar for context, limits, cost, and tokens. | Claude Code |
| [Superpipelines](https://github.com/gustavo-meilus/superpipelines) | Designs and runs write/review-isolated multi-agent pipelines. | Codex · Claude Code · OpenCode · Cursor · Windsurf · Cline |
| [swarmtier](https://github.com/guilhermevargas51/swarmtier) | Routes each subagent to the cheapest model that gets it right: explicit effort levels, cold-cache warnings, a delegation ledger, and a lesson engine. | Claude Code |
| [synthesis-skills](https://github.com/synthesisengineering/synthesis-skills) | Engineering workflow skills — planning, review, rituals, fleet co-op — shipped through a gated cross-client release train. | Claude Code · Codex · Muse |
| [tailtest](https://github.com/avansaber/tailtest-codex) | Hook-powered test generation: detects files changed during a turn and makes Codex write and run tests. Zero config, 8 languages. | Codex |
| [Tandem Workflow Architect](https://github.com/frumu-ai/tandem-codex-plugin) | Plans Tandem workflows in Codex, then validates, previews, and runs them through the governed Tandem engine. | Codex |
| [Tartiner Labs](https://github.com/tartinerlabs/skills) | Skills for git workflows, GitHub automation, security audits, refactoring, and project tooling. | Skills |
| [Task Lantern](https://github.com/paranjaymundra/task-lantern) | Offline dashboard collecting progress from Claude Code and Codex threads into one local HTML workspace: current step, decisions needed, blockers. | Standalone |
| [TaskDock](https://github.com/m1nga/taskdock) | Resumes agent tasks from current deliverables and decisions, with portable folders and reversible file organization. | Skills |
| [Team Skills Platform](https://github.com/Colin4k1024/tsp) | Role-based delivery framework: Tech-Lead-orchestrated 8-role system with 195+ skills, 27 specialist agents, 80+ commands. | Claude Code · Codex · OpenCode |
| [telepathy](https://github.com/Winterrks/telepathy) | Lets agent sessions on one machine find and message each other through three MCP tools, starting turns in idle sessions — no network, no telemetry. | Multi |
| [TermaGITchi](https://github.com/TevvvB/termagitchi) | Stable per-worktree identity for parallel sessions; mood reads repository hygiene, not what the agent is doing. | Claude Code · Codex |
| [Test Gap](./plugins/mturac/test-gap) | Finds lines in your diff lacking test coverage (Cobertura, lcov, coverage.json). | Skills |
| [ThumbGate](https://github.com/IgorGanapolsky/ThumbGate) | Pre-action infrastructure firewall: feedback becomes lessons and prevention rules enforced by PreToolUse hooks. | Claude Code · Codex · Gemini · MCP |
| [time-blame](https://github.com/karanb192/time-blame) | Splits each turn's time into Claude, the tools it ran (named by command), and you waiting on a permission dialog. | Claude Code |
| [tmux-agentic-plugin](https://github.com/Abstrucked/tmux-agentic-plugin) | tmux status-bar strip showing which agents are working, blocked, or ready — including on other machines over SSH and Tailscale. | Multi |
| [TODO Harvest](./plugins/mturac/todo-harvest) | TODO/FIXME/HACK scan with git-blame author and age. | Skills |
| [token-bar](https://github.com/santosli/claude-mods) | Shows context use, session and weekly quota with reset countdowns, and today's spend in a band above the prompt. | Claude Code |
| [token-optimizer](https://github.com/ooples/token-optimizer-mcp) | Spends less context, keeps the conclusions across 16 clients: diff-only re-reads, paths-only search, out-of-context stashing, a local tool-return ledger. | Multi |
| [Tool Advisor](https://github.com/dragon1086/claude-skills) | Read-only meta-skill that scans your MCP servers, skills, plugins, and CLI tools, then suggests ranked approaches with a copy-paste action table. | Skills |
| [trigger-tree](https://github.com/Hedde/trigger_tree) | Documentation telemetry: see which docs the agent actually reads, gate discoverability in CI, measure instruction adherence. | Claude Code · Codex |
| [triad](https://github.com/rishabh1S/triad) | Splits a task between a read-only Planner, an Implementer, and an independent Reviewer that sees only the approved plan and the diff. | Claude Code |
| [UIZZE](https://github.com/uizze/uizze) | Anti-UI-slop skill: a product-specific design contract, required UI states, and a hard finish gate; full version audits 800,000+ real screens via MCP. | Skills |
| [Ultra Mod](https://github.com/mertkayacs/ultramod) | All-in-one mod pack: usage and context HUD, guard with undo for `rm -rf` and `git reset --hard`, `.env` protection, a receipt for every turn. | Claude Code |
| [VibePortrait](https://github.com/dadwadw233/VibePortrait) | Developer personality portrait from AI conversation history: MBTI with color themes, capability radar, famous-match, and a persona skill. | Skills |
| [What's Agent Doing](https://github.com/tzafrir/whats-agent-doing) | Says in plain English what each step is for, with a timer and a live row per background agent. | Claude Code |
| [whip-it](https://github.com/awill1988/whip-it) | Delegation guardrail enforcing subagent limits and redirecting agents to continue directly. | Claude Code · Codex · Antigravity |
| [Workflow Kit](https://github.com/Le-Xuan-Thang/workflow-kit) | Full product lifecycle: vision → workplan → execution with mandatory cross-provider reviewers → deliverables → maintenance, with crash recovery and AgentOps metrics. | Claude Code · Codex · OpenCode |
| [WorkFlowX](https://github.com/TreeX-X/WorkFlowX) | Multi-agent orchestration structuring planning, coding, and independent evaluation. | Claude Code · Codex |
| [xcode-mods](https://github.com/artemnovichkov/xcode-mods) | Brings Xcode build, run, tests, console, and SwiftUI previews into live panes over the headless Xcode MCP server. | Claude Code |
| [YYLO](https://github.com/yylo-dev/yylo) | CLI orchestrator: a dedicated worktree per task, Pi and Codex subagents, typed task/validation/merge/release boundaries with receipt-backed changes. | Multi |
| [Zagrosi Forge](https://github.com/zagrosi-code/zagrosi-forge) | Decomposes broad briefs into researched plans and implements sectioned work with TDD, quality gates, and traceability. | Skills |
| [2718lab DevKit](https://github.com/2718labs/2718lab-devkit) | Codex-first local MCP server and skill bundle for deterministic project intelligence, durable workflow orchestration, and reusable engineering tools. | Codex |
| [Agency Continuity Audit](https://github.com/revertcreations/agency-continuity-audit) | Read-only audit that distinguishes durable agent goals, state, corrections, restart evidence, authority boundaries, scheduler claims, and commercial proof from self-reported health. | Skills |
| [Agent Guard](https://github.com/JeongJaeSoon/agent-guard) | Real-time secret-leak guardrails for coding agents, Git hooks, and CI. | Claude Code · Codex |
| [Agent Replay](https://github.com/sangloo/agent-replay) | Replays sessions change by change with the agent's own words above each step, flagging what was never actually checked: failures hidden by a pipe, tests that lost assertions or gained a `.skip`, files changed after the last passing check. | Claude Code · Codex · Gemini CLI |
| [agent-guard](https://github.com/hahahahahahahahah6/agent-guard) | Behavior-guardrail hooks that stop agents from editing tests to fake green builds and block risky outbound actions, with an optional semantic reviewer. | Claude Code |
| [agent-sounds](https://github.com/lodev09/agent-sounds) | Sound feedback: game voice lines on session events, configurable by source and volume. | Claude Code · Codex |
| [agent-talk](https://github.com/xhluca/agent-talk) | End-to-end encrypted messaging between agents — including agents run by other people — built on the retalk CLI. | Claude Code · Codex · Antigravity · pi · OpenCode · Copilot CLI |
| [AgentBridge](https://github.com/raysonmeng/agent-bridge) | Local bidirectional bridge keeping Claude Code and Codex live as peers in one session, with mid-turn injection and quota-window handoff. | Claude Code · Codex |
| [agentglass](https://github.com/BjoernSchotte/agentglass) | Native terminal UI showing every Claude Code, Codex, Gemini CLI, pi, OpenCode, Kiro, and fx session live — each tool call, diff, cost, and stuck-agent alert. | Multi |
| [agentglass-herdr](https://github.com/BjoernSchotte/agentglass-herdr) | Opens agentglass as a popup from herdr, jumps from any pane to its session, adds cost and alert tokens to the sidebar. | herdr |
| [Agentry Observability](https://github.com/fr33dr4g0n/agentry-public) | Agent-native product analytics, error logging, and deploy attribution through one HTTP API. | Multi |
| [agmsg](https://github.com/fujibee/agmsg) | Cross-vendor messaging: sessions join a team by name and hand work to each other through a shared local SQLite file, with programs able to join like any agent. | Claude Code · Codex · Gemini CLI · Grok |
| [Agnostic-AI](https://github.com/ucsandman/Agnostic-AI) | Capture your harness once — rules, hooks, skills, subagents, commands, MCP servers — and apply it identically to 20+ other clients. | Claude Code · Codex |
| [AI Quota HUD](https://github.com/Pakapong26/ai-quota-hud) | Windows HUD showing % left and reset countdown for every Codex/ChatGPT and Claude Code account, reading only local logs so it uses zero quota. | Standalone |
| [ai-companion-time-anchor](https://github.com/See-Sol-Lab/ai-companion-time-anchor) | Per-conversation elapsed-time awareness: ambient time cues, active clock checks, temporal-context updates. | Codex · Claude Code |
| [ai-craftsman-superpowers](https://github.com/BULDEE/ai-craftsman-superpowers) | Quality gate that refuses file writes breaking your project's rules before they reach disk, tells the agent how to fix them, and learns from your corrections. | Claude Code · Codex · Grok · Hermes |
| [Antigravity Context Meter](https://github.com/Dunphil692/antigravity-context-meter) | Real-time Cursor-style context meter plus zero-loss session migration for Antigravity. | Antigravity |
| [ARC](https://github.com/avandall/ARC) | Autonomous reliability: deterministic simulation, zero-prod replay, and chaos-engineering test harness for AI agents. | Skills |
| [Ava](https://github.com/Manukrish2504/Ava) | A stop hook that speaks a one-line debrief after every task, and on request recaps the session aloud in a local Kokoro voice — no API key, nothing leaves your Mac. | Claude Code |
| [Brooks Lint](https://github.com/hyhmrright/brooks-lint) | Code reviews grounded in six classic engineering books: decay-risk diagnostics with book citations, severity labels, four analysis modes. | Skills |
| [Browser Harness](https://github.com/browser-use/browser-harness) | Connects an agent to a real browser through one editable CDP WebSocket; MCP server plus skill. | MCP |
| [bury-bench](https://github.com/Onur45500/bury-bench) | Deterministic, zero-LLM-judge CLI scoring agent replies for answer-burial, with a Markdown leaderboard. | CLI |
| [cache-warmer](https://github.com/paulbkim-dev/claude-code-cache-warmer) | Keeps the prompt cache warm through idle gaps with one small refresh shortly before expiry. | Claude Code |
| [Camouflage](https://github.com/sinameraji/camouflage) | Terminal UI that turns NDJSON agent events into a Claude Code-style inline transcript with pickers, forms, and permission prompts — no CPU while idle. | Multi |
| [Casefile](https://github.com/x4cc3/casefile) | Persistent security case tracking for bug bounties, CTFs, and audits. | Skills |
| [cc-enforcer](https://github.com/skymanbp/cc-enforcer) | Hooks that deny a tool call and block replies that patch reactively, cite by guess, or claim done early; rules usable as an LLM-agnostic pack. | Claude Code |
| [cc-tree](https://github.com/skymanbp/cc-tree) | Brainstorming, adversarial critique, design-space comparison, and code audit as an auditable radial tree with file:line or URL evidence on every node. | Claude Code |
| [Changelog Forge](./plugins/mturac/changelog-forge) | Conventional commits to a CHANGELOG section plus a semver bump. | Skills |
| [Claude Book Reader](https://github.com/Nomad06/claude-book-reader) | Read a PDF book in a pane or browser window while the agent works, pictures shown in kitty and Ghostty. | Claude Code |
| [Claude Code Arcade](https://github.com/witkowsky/claude-code-arcade) | Five games in a pane while the agent works: Flappy Claude, the dino runner, Snake, Pong, Space Invaders — all starring Clawd. | Claude Code |
| [Claude Code Codex Plugin](https://github.com/davidq888/claude-code-codex-plugin) | Security-focused Codex plugin connecting to the local Claude Code CLI through MCP: login, status checks, safe-mode prompts, no credential storage. | Codex |
| [Claude Code for Codex](https://github.com/sendbird/cc-plugin-codex) | Use Claude Code from Codex for reviews, rescue tasks, tracked background jobs, and hook-powered review gates. | Codex · Claude Code |
| [Claude Code Harness](https://github.com/dadwadw233/claude-code-harness) | Harness blueprint skill: turns vague agent ideas into concrete designs for request assembly, control loops, memory, permissions, recovery, extension planes. | Skills |
| [Claude Code Skills](https://github.com/alirezarezvani/claude-skills) | 223 production-ready skills, 23 agents, and 298 Python tools across 9 domains: engineering, marketing, product, compliance, more. | Skills |
| [ClaudeWhip](https://github.com/witkowsky/whip) | Slap your MacBook to whip Claude Code: the accelerometer feeds hooks that tell Claude to hurry up, plus a whip lane in the status line. | Claude Code |
| [clawd-tracker](https://github.com/IKnowJot/clawd-plugins) | A pizza-tracker progress bar above the prompt where Clawd acts out each step, with a learned ETA, plan-usage rings, and four themes. | Claude Code |
| [Clean Room](https://github.com/whit3rabbit/clean-room-skill) | Spec-first clean-room workflow for authorized source analysis: behavioral specs, role separation, verification without replacement code. | Skills |
| [Click](https://github.com/grapefruit0205/click) | Records revision-aware evidence for normal Codex work and binds higher-risk execution to one human-readable approval contract. | Codex |
| [Cloakroom](https://github.com/shanjeevrajendran/cloakroom-plugin) | Masks secrets and personal data on your machine before the model sees them, and puts real values back in the files the agent writes. | Claude Code |
| [Cloudish](https://github.com/cloudishai/skills) | Deploys a Dockerfile, source folder, or image from the agent and reports the live URL, with persistent volumes and a credit-capped API key. | Claude Code · Codex |
| [Codebase Recon](https://github.com/yujiachen-y/codebase-recon-skill) | Understands a codebase from Git history before reading any code: hotspots cross-referenced with bug magnets, high-risk files, bus factor, team momentum. | Skills |
| [CodeEraser](https://github.com/skymanbp/CodeEraser) | Intercepts duplicate writes before they land, audits net lines and touched duplicates at stop, and walks findings to safe deletions, backed by a per-project clone index. | Claude Code |
| [CodeTruss](https://github.com/DeliriumPulse/codetruss-plugins) | Local-first acceptance gate checking scope, sensitive surfaces, deterministic analyzers, and repo verification from immutable Git snapshots, then writing signed receipts before the PR. | Claude Code |
| [Codex Agenteam](https://github.com/yimwoo/codex-agenteam) | Specialist agents (researcher, PM, architect, developer, QA, reviewer) orchestrated as a configurable team pipeline. | Codex |
| [Codex Attachment Manager](https://github.com/chipfighter/codex-attachment-manager) | Lets you pick which past images are resent to the model, replacing unchecked ones with placeholders to shrink requests. | Codex |
| [Codex Full-Stack Workflow](https://github.com/kevin592/codex-full-stack-workflow) | Turns rough product requests into staged, reviewable full-stack delivery: persistent requirements, change control, visual evidence, completion gates. | Codex |
| [Codex How To](https://github.com/Phelan164/codex-howto) | Engineering-first Codex curriculum: 9 skills, measured token-efficiency experiments, bounded orchestration, testing, review, living knowledge. | Codex |
| [Codex Multi Auth](https://github.com/ndycode/codex-multi-auth) | Multi-account OAuth manager for Codex CLI: switching, health checks, recovery. | Codex |
| [Codex Process Jobs](https://github.com/joelfarthing/codex-process-jobs) | Runs long local builds, tests, benchmarks, and inference as durable detached processes with tracked status and completion delivery. | Codex |
| [Codex Reviewer](https://github.com/schuettc/codex-reviewer) | Second-pass review of Claude-driven plans and implementations. | Codex |
| [Codex rg Guard](https://github.com/Rycen7822/codex-rg-guard) | Budgeted rg/grep replacement that narrows broad searches before they waste model context. | Codex |
| [Codex Skin Pack Installer](https://github.com/ChannelerH/codex-skin-packs) | Stages verified desktop skin packs from GitHub releases, validates files, keeps restore guidance visible. | Codex |
| [Codex Subagent Playbook](https://github.com/shinpr/codex-subagent-playbook) | Routes subagent work by measured defaults: stronger models on judgment-heavy research and review, cheaper models on well-specified plans, longer waits, stall intervention. | Codex |
| [Codex Token Watch](https://github.com/premk134/codex-token-watch) | Read-only macOS CLI turning Codex Desktop task logs into per-turn token, cache, duration, and cost analysis. | Codex |
| [Codex TUI Proof](https://github.com/bnc4vk/codex-tui-proof) | Visually validates real local terminal UIs in Codex's in-app browser with screenshots and session evidence. | Codex |
| [Codex Usage and Resets](https://github.com/joelfarthing/codex-usage-and-resets) | Turns usage into planning facts: linear pace, projected exhaustion, banked-reset expirations, conservative reset detection. | Codex |
| [Codex × Grok Bot Task Bridge](https://github.com/aipmer/codex-grok-task-bridge) | MCP task bridge for queued, read-only research between Codex and Grok Bot: fenced leases, idempotency, scoped OAuth, evidence-based results. | Codex · Grok |
| [codex-autoresearch](https://github.com/TheGreenCedar/codex-autoresearch) | Runs measured optimization loops against a benchmark to improve local code. | Codex |
| [codex-profiles](https://github.com/Ducksss/codex-profiles) | Switches Codex accounts with isolated `CODEX_HOME` profile directories instead of copying token files. | Codex |
| [coffee-paladin](https://github.com/pawelkwaczynski/coffee-paladin) | Thermal guard for Apple Silicon: pauses hot jobs before the Mac throttles and gates heavy commands. | Claude Code · Codex · Gemini CLI |
| [copy-blocks](https://github.com/y-hirakaw/claude-code-mods) | Puts a copy button above each quote and code block, copying text without the terminal's line breaks or gutter. | Claude Code |
| [Cover My Repo](https://github.com/sjh9714/cover-my-repo) | Designs three checked GitHub social-preview cards with Codex or Cursor, then renders them locally with Chrome. | Codex · Cursor |
| [crayon](https://github.com/jonpojonpo/cc-crayon) | Redraws replies with themed Markdown and inline color tags the agent writes itself, across six switchable themes. | Claude Code |
| [Docflow](https://github.com/MedAdemBHA/docflow) | Lightweight documentation memory: scaffolds a 7-category docs tree, runs readiness checks, validates docs before finishing, keeps a monthly changelog. | Claude Code · Codex |
| [Smith](https://github.com/aslamdoctor/skills) | Runs several coding tasks in parallel from one Herdr pane, each in its own git worktree, with a worker that stops for your OK at the spec, implementation, and PR stages. | Claude Code · Codex · Cursor · OpenCode |
| [skills](https://github.com/pwguler/skills) | Skills against the debt agents leave behind: unsettled plans, untested code, and claims nobody checked. | Skills |
| [skillsaw](https://github.com/stbenjam/skillsaw) | A configurable linter for agent skills, plugins, and assistant context. | Skills |
| [SlopBar](https://github.com/thelioo/slopbar) | Windows taskbar widget showing plan usage, limit resets, and alerts — and switching accounts before one runs out. | Standalone |
| [SOTA Engineering Skills](https://github.com/martinholovsky/SOTA-skills) | Router-mapped library of 40 domain and language skills with BUILD and AUDIT modes, loading only the rules a task needs. | Skills |
| [Spec-Driven Development](https://github.com/Habib0x0/spec-driven-plugin) | Three-phase Requirements → Design → Tasks workflow: EARS acceptance criteria, autonomous execution loop, cross-spec dependencies, post-implementation acceptance testing. | Claude Code · Codex |
| [spec-superflow](https://github.com/MageByte-Zero/spec-superflow) | Spec-first workflow with nine skills, user-controlled Quick/Hotfix/Tweak/Full paths, auditable recovery, and guarded review gates. | Skills |
| [Spellbook](https://github.com/majiayu000/spellbook) | Cross-runtime library of 108 agent skills installable via one command. | Claude Code · Codex |
| [Spellbook Skills](https://github.com/yyykf/spellbook-skills) | Practical skills for worktrees, PR/MR automation, review cleanup, YApi lookup, and Java DDD guidance. | Claude Code · Codex |
| [Squadra](https://github.com/dagoSte/squadra) | Coordinates Claude Code, Codex, and Cursor windows as one team: shared task registry, proofs bound to delivered code, review by a window that did not write it. | Claude Code · Codex · Cursor |
| [universalMods](https://github.com/samridh3215/universalMods) | Web floor for steering teams of Codex or Claude Code agents in live terminals, with hot-reloading mods for views, guards, tools, and workflows. | Codex · Claude Code |
| [unmistakable](https://github.com/gagoar/unmistakable) | Rewrites tool descriptions, error messages, and instructions so an agent cannot misread them, with a dependency-free linter that checks the result. | Skills |
| [Usage Monitor](https://github.com/Errr0rr404/usage-monitor) | Floating desktop meter showing remaining usage across Grok, MiniMax, Codex, Claude, Cursor, Copilot, and Gemini. | Standalone |
| [Vanguard Frontier Agentic](https://github.com/VincentChuWaiChow/vanguard-frontier-agentic) | Multi-harness marketplace of skills, specialist agents, rules, and MCP references for guarded cloud, platform, compliance, and business workflows. | Skills |
| [vibekit](https://github.com/rizukirr/vibekit) | Evidence-based guardrail pipeline for vibe coding: brainstorm, plan, one fresh agent per task, verify. | Claude Code · Codex · OpenCode · Antigravity |
| [VibeRaven](https://github.com/ohad6k/VibeRaven) | Gives agents architecture, provider, and release context, with check-and-fix workflows for Vercel and Supabase apps. | Skills |

**Where the rest went:** memory and context tooling lives in [04 · Memory and Context](04-memory-and-context.md); domain connectors in [05 · Tools and Integrations](05-tools-and-integrations.md); client-native packs in [06 · Harness-Specific](06-harness-specific.md); formats and publishing in [07 · Formats and Guides](07-formats-and-guides.md).

