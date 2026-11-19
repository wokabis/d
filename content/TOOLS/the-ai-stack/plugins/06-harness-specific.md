# 06 · Harness-Specific

> Client-native extension catalogs: Grok, Kimi Code, DeepSeek Harness, OpenCode, Oh My Pi, and ZCode. For the cross-client economy — skills and MCP servers — see the themed pages.

## Grok Build

Bundles skills, commands, agents, hooks, MCP servers, and language-server config; installed with `grok plugin install owner/repo --trust`.

| Plugin | What it does | Target |
| :----- | :----------- | :----- |
| [BlindOracle](https://github.com/craigmbrown/blindoracle-plugin) | Joins a Grok agent to the BlindOracle marketplace: ERC-8004 passport, role-scoped tools, counterparty-risk controls. | Grok |
| [Grok Imagine Cinematic Studio](https://github.com/FineComputer14451/Grok-Imagine-Cinematic-Studio) | 25 role-card agents, 64 skills, and a Production Bible workflow with Character DNA locking for video. | Grok |
| [HTML/CSS to Image API](https://github.com/htmlcsstoimage/agent-plugins) | Live website screenshots and HTML/CSS rendered to images or PDFs, no browser to manage. | Grok · Kimi · Multi |
| [hypergrok-trading-desk](https://github.com/galleonlabs/hypergrok-trading-desk) | Seven-agent Hyperliquid trading desk: research, sizing, execution, review — with your approval. | Grok |
| [ppl](https://github.com/ppl-crm/ppl-grok-plugin) | Personal CRM: contacts, notes, reminders, relationship memory through hosted MCP. | Grok |
| [taskflow](https://github.com/heggria/taskflow) | Declarative DAG orchestration for subagents: fan-out, gates, loops, tournaments, approvals. | Grok |

## Kimi Code

Packages skills, agents, and MCP servers; installed with `/plugins install https://github.com/owner/repo`.

| Plugin | What it does | Target |
| :----- | :----------- | :----- |
| [CloudBase AI Toolkit](https://github.com/TencentCloudBase/CloudBase-AI-Toolkit) | Tencent CloudBase backend: database, auth, and functions via plugin, skills, and MCP. | Kimi · Multi |
| [deja](https://github.com/vshulcz/deja-vu) | Recalls sessions other coding agents on the machine already wrote to disk — even before it was installed. | Kimi · Multi |
| [GoodMemory](https://github.com/hjqcan/GoodMemory) | Local-first, auditable cross-session project memory with scoped recall and approval-gated writes. | Kimi |

## DeepSeek Harness (DSH)

Cordis modules or npm packages exposing a `dsh.bundle` manifest, installed with `dsh plugin add`.

| Plugin | What it does | Target |
| :----- | :----------- | :----- |
| [dsh-agent-team](https://github.com/Contexera/dsh-agent-team) | Persistent team agents with per-member memory, channels, and durable task threads. | DSH |
| [dsh-api-balance](https://github.com/Kihara777/dsh-api-balance) | Usage/balance tab for the web UI: account balance and daily/monthly cost with charts. | DSH |
| [dsh-blender-plugin](https://github.com/sixtysevenlf/dsh-blender-plugin) | Drives Blender over direct TCP: viewport frames, renders, Python execution, headless offload — 183 ops. | DSH |
| [dsh-config-manager](https://github.com/xiajiajun516/dsh-config-manager) | Backs up, restores, migrates, and syncs a complete DSH configuration in one click. | DSH |
| [dsh-deja](https://github.com/vshulcz/deja-vu) | Brings the session history of nineteen other coding agents into DSH: recall, digests, per-file history. | DSH |
| [dsh-im-companion](https://github.com/FeatherHunter/dsh-im-companion) | Workspace presence companion: which workspaces have an assistant on duty and whether they are online. | DSH |
| [dsh-mattpocock-skills-deck](https://github.com/FeatherHunter/dsh-mattpocock-skills-deck) | Renders GitHub issues as a task-board panel; bundles 25 TypeScript skills for one-click loading. | DSH |
| [dsh-oh-my-claude](https://github.com/lcestou/dsh-oh-my-claude) | Uses the logged-in Claude Code CLI as a native DSH provider — no API key, with resume, approval relay, and workspaces. | DSH |
| [dsh-opencode-palette](https://github.com/FeatherHunter/dsh-opencode-palette) | Multi-theme engine for DSH Web supporting all 38 OpenCode themes. | DSH |
| [dsh-plugin-hub](https://github.com/wingsky-1/dsh-plugin-hub) | Plugin collection for the DSH web GUI: task notifications, provider usage tracking, MCP management, LAN access. | DSH |
| [dsh-prompt](https://github.com/FeatherHunter/dsh-prompt) | Prompt toolbox: preset and custom templates with one-click insert. | DSH |
| [dsh-product-subagent-console](https://github.com/Jokasa7/dsh-product-subagent-console) | Designs multi-agent plans, observes child-session trees, compares approved tasks with runtime attempts, prepares recovery. | DSH |
| [dsh-vision-router](https://github.com/ysr666/dsh-vision-router) | Gives text-only agents image understanding: no-key vision chain plus fourteen tools for Q&A, grounding, OCR, diffing. | DSH |
| [dsh-whale-girl-pet](https://github.com/yanzwzz/dsh-whale-girl-pet) | Desktop pet reporting token usage, per-turn cost, and hourly spend. | DSH |
| [dsh-whale-musume](https://github.com/Sutera-Diffusus/dsh-whale-musume) | Whale-girl desktop pet: pat-to-raise growth, work-state poses, 494 dialogue lines, 30 achievements — local-first. | DSH |
| [Engramory](https://github.com/tinqiao-oss/engramory) | Curated file-based long-term memory: plain markdown notes shared across hosts, enforced index caps. | DSH |
| [LocalForge](https://github.com/orfeomorello/dsh-localforge) | LM Studio, Ollama, and vLLM adapter with live discovery, auto-load, concurrency limits, fallback chains, Prometheus metrics. | DSH |
| [memory-eternal](https://github.com/EternalNight996/memory-eternal) | Distills finished conversations into audited knowledge cards in a searchable local Markdown vault. | DSH |
| [Vibe-Mathematics](https://github.com/ChongCyrus/Vibe-Mathematics) | Four multi-agent math problem-solving and cross-verification presets. | DSH |

## OpenCode

npm packages or local directories registered in `opencode.json(c)`; installed with `opencode plugin add`.

| Plugin | What it does | Target |
| :----- | :----------- | :----- |
| [hiai-opencode](https://github.com/HiAi-gg/hiai-opencode) | Multi-agent team: 10 specialists, execution gates, LSP tools, browser automation, memory search. | OpenCode |
| [OpenCode Orchestrator](https://github.com/agnusdei1207/opencode-orchestrator) | Multi-agent mission control with Commander, Planner, Worker, and Reviewer workflows. | OpenCode |
| [OpenCode Power Pack](https://github.com/waybarrios/opencode-power-pack) | 54 portable development and security workflows, with opt-in native sandbox profiles. | Codex · Claude Code · OpenCode · Pi |
| [opencode-9router](https://github.com/vheins/opencode-9router) | Registers 9Router as a provider with automatic model discovery and caching. | OpenCode |
| [opencode-chromium](https://github.com/Quindart-com/opencode-chromium) | Chromium automation collection: MCP server, plugin, browser skill, SDK with four browser tools. | OpenCode · MCP |
| [opencode-cursor](https://github.com/Nomadcxx/opencode-cursor) | Uses Cursor subscription models: streaming, thinking, tool calls, MCP, browser login. | OpenCode |
| [opencode-failover](https://github.com/bulutmuf/opencode-failover) | Automatic API-key failover and rotation across provider keys. | OpenCode |
| [opencode-goal-plugin](https://github.com/prevalentWare/opencode-goal-plugin) | Persistent goals, completion evidence, and idle auto-continuation. | OpenCode |
| [opencode-litellm](https://github.com/yuseferi/opencode-litellm) | Auto-detects a LiteLLM proxy and registers its models in the picker. | OpenCode |
| [opencode-mempalace-persistence](https://github.com/geco/opencode-mempalace-persistence) | Archives conversations to local memory; recalls past decisions verbatim. | OpenCode |
| [opencode-models-discovery](https://github.com/yuhp/opencode-models-discovery) | Discovers models from OpenAI-compatible providers and injects them into provider config. | OpenCode |
| [opencode-nexus](https://github.com/mohammad154/opencode-nexus) | Fixed three-agent workflow with conditional planning, impact analysis, deterministic verification. | OpenCode |
| [opencode-openai-compact](https://github.com/partment/opencode-openai-compact) | OpenAI Responses API native compaction with SQLite checkpoints. | OpenCode |
| [opencode-plugin-loop](https://github.com/jkrandom-sudo/opencode-plugin-loop) | `/loop` command running prompts on fixed, adaptive, or one-shot schedules. | OpenCode |
| [opencode-plugin-peers](https://github.com/jkrandom-sudo/opencode-plugin-peers) | Cross-session messaging: instances discover each other and exchange messages. | OpenCode |
| [opencode-see-image](https://github.com/alfaoz/opencode-see-image) | Gives non-vision models image understanding by routing attachments to a vision-capable model. | OpenCode |
| [opencode-skills-collection](https://github.com/FrancoStino/opencode-skills-collection) | Bundles 1,595+ skills with local sync and on-demand loading via pointer files. | OpenCode |
| [opencode-synced](https://github.com/iHildy/opencode-synced) | Syncs global configuration and skills across machines via Git. | OpenCode |
| [opencode-toolrouter](https://github.com/Nsilswal/opencode-toolrouter) | Sends only the MCP tools each request needs — about 92% fewer tool-schema tokens in a 296-tool benchmark. | OpenCode |
| [opencode-weave](https://github.com/weave-io/weave) | Multi-agent orchestration with specialized agents, category dispatch, background execution. | OpenCode |
| [RTL_OpenCode](https://github.com/programmer-1998/RTL_OpenCode) | Fixes bidirectional Persian, Arabic, and Hebrew rendering with Unicode isolates, keeping code blocks intact. | OpenCode |

## Oh My Pi (omp)

| Plugin | What it does | Target |
| :----- | :----------- | :----- |
| [omp-rewrite](https://github.com/zPeppOz/omp-rewrite) | `/rewrite` command: asks clarifying questions about a rough prompt, then puts a thorough rewrite in the composer. | omp |
| [omp-sidelight](https://github.com/Mannan-Goyal/omp-sidelight) | Turns long answers into full-screen documents; select any passage and ask about it in a side thread. | omp |

## ZCode

| Plugin | What it does | Target |
| :----- | :----------- | :----- |
| [zcode-ru](https://github.com/warment/zcode-ru) | Russian (ru-RU) localization pack: 5,018 UI strings, one-command installer with backup/restore. MIT. | ZCode |

**Related:** [03 · Development Workflow](03-development-workflow.md) · [07 · Formats and Guides](07-formats-and-guides.md)
