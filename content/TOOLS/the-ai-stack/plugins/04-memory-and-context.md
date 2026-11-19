# 04 · Memory and Context

> The difference between an agent that forgets and one that compounds: persistent memory, context discipline, session continuity, and code intelligence that replaces whole-file reads.

## Memory systems

Persistent stores that survive compaction, restarts, and machines.

| Plugin | What it does | Target |
| :----- | :----------- | :----- |
| [agent-memory-kit](https://github.com/awrshift/agent-memory-kit) | Memory that asks before it writes: the agent proposes dated notes, you approve them, and they live as plain files injected by hooks. | Claude Code · Cursor CLI · OpenCode · Codex · Copilot CLI |
| [Bilinc](https://github.com/atakanelik34/Bilinc) | Persistent memory over MCP: commit, recall, revise, snapshot, roll back. | MCP |
| [ChatVault](https://github.com/ssanaullahrais/Chat-Vault) | Windows app that reads, searches, backs up, and continues chats across accounts and clients. | Standalone |
| [claude-remember](https://github.com/Digital-Process-Tools/claude-remember) | Persistent memory with identity, context, and continuity carried across sessions. | Claude Code |
| [cc-memory](https://github.com/skymanbp/cc-memory) | Memory across compaction and sessions: reconcile-on-write dedup, a forced PROGRESS.md handoff, a live PLAN.md anchor, FTS5 search — pure stdlib Python. | Claude Code |
| [Contorium](https://github.com/ContoriumLabs/contorium) | Runtime continuity layer: persistent workspace state, Git-aware sessions, MCP-based retrieval across tools and runs. | MCP |
| [ContextStream](https://github.com/contextstream/mcp-server) | Persistent memory, semantic search, and shared project context with traceable sources and scoped access. | MCP |
| [daimon](https://github.com/Daily-Nerd/daimon) | Checkpoints at session close; the next session opens with a briefing of decisions and open loops — quotes marked as such, claims checked against live state. | Claude Code · Codex |
| [Emulo](https://github.com/tristast/Emulo) | Memory profiles for coding agents. | Claude Code |
| [GitCortex](https://github.com/bharath03-a/GitCortex) | Branch-aware knowledge graph of a repo, incrementally re-indexed via tree-sitter, served over MCP. | MCP |
| [GrayMatter](https://github.com/ValkyrLabs/GrayMatter) | Durable memory and shared graph state with live schema awareness. | Codex · OpenClaw |
| [Honcho](https://github.com/plastic-labs/codex-honcho) | Cross-session memory via lifecycle hooks that capture each session and inject relevant context at start. | Codex |
| [jevmem](https://github.com/Avinash-jetwani/jevmem) | Saves decisions, rules, and dead ends to JEVMEM.md and recalls them later. | Claude Code · MCP |
| [keep-the-why](https://github.com/oliver-zehentleitner/keep-the-why) | Preserves the reasoning behind a codebase: decisions, rejected alternatives, workarounds, incident learnings, constraints. | Skills |
| [kgai](https://github.com/tanchongmin/kgai) | Shared decision memory for teams of coding agents. | MCP |
| [Knowl](https://github.com/dat999zx/knowl) | Local-first memory over MCP: a SQLite store that retires facts when they change, retrieved by hybrid search. | MCP |
| [Knowledge Loom](https://github.com/s-poikonen/knowledge-loom) | Grounds agent work in curated knowledge vaults, starting with AWS documentation. | Skills |
| [Knowledge Manager](https://github.com/treylom/knowledge-manager) | Extracts web pages, files, Notion, and images into an Obsidian vault with GraphRAG-backed search. | MCP |
| [LLMSlim](https://github.com/Thanatos9404/llmslim) | Long-term memory with no LLM in the loop: word-for-word SQLite storage, recall within a token budget. | Claude Code · Codex · MCP |
| [local-memory-mcp](https://github.com/vheins/local-memory-mcp) | Lightweight persistent memory with semantic search, backed by SQLite. | MCP |
| [LoreConvo](https://github.com/labyrinth-analytics/loreconvo) | Auto-saves and recalls conversation context, decisions, and artifacts. | MCP |
| [LoreDocs](https://github.com/labyrinth-analytics/loredocs) | Knowledge vault for durable docs, specs, and guides with FTS5 search, tagging, cross-project loading. | MCP |
| [lumberroom-claude-code](https://github.com/lumberroom/lumberroom-claude-code) | Replaces built-in memory with shared memory: session digests, per-prompt recall, automatic fact extraction, token accounting. | Claude Code |
| [mcp-local-memory](https://github.com/Beledarian/mcp-local-memory) | Local memory server supporting text, entities, relations, and time-based recall. | MCP |
| [mcp-md-reader](https://github.com/JoseEstevez520/mcp-md-reader) | Finds Markdown structure and reads only the relevant section, metadata, or vault links. | MCP |
| [MeMesh](https://github.com/PCIRCLE-AI/memesh) | Shared SQLite memory captured automatically by hooks and injected at the moment the agent acts. | MCP |
| [memi](https://github.com/sarveshsea/memi) | Interface understanding and design-system memory: UI audits, Tailwind token extraction, shadcn workflows. | Codex · Claude Code · Cursor |
| [memory-mcp](https://github.com/Donk338/memory-mcp) | Hosted memory with semantic recall — your wallet address is the namespace, paid per call in USDC via x402, free wallet-signed tier. | MCP |
| [metabrain](https://github.com/ariaxhan/metabrain) | Memory over MCP: SQLite, zero dependencies; patterns graduate to hypotheses, then preferences. | MCP |
| [miru-code](https://github.com/takara-ai/miru-code) | Semantic and hybrid code search for coding agents. | Multi |
| [MisakaNet](https://github.com/Ikalus1988/MisakaNet) | Git-backed failure memory: 290 indexed lessons served over MCP. | MCP |
| [Mycelium](https://github.com/arjunrajlaboratory/mycelium) | Durable memory for analytical repositories: decisions, findings, provenance, conventions. | Claude Code · Codex |
| [NeatContext](https://github.com/XTSoftwareLabs/neatcontext-plugins) | Saves durable knowledge from conversations as structured, reusable contexts to reconnect or share. | Claude Code · Codex · Copilot · Kimi Code · pi |
| [Neo](https://github.com/Parslee-ai/neo) | Multi-agent code reasoning over relevant files with a local semantic memory; lessons promoted only after verification in Git. | Claude Code · Codex |
| [obsidian-wiki](https://github.com/Ar9av/obsidian-wiki) | Builds an Obsidian vault from docs, URLs, and session history, cross-links it, answers with citations. | MCP |
| [Off the Wall](https://github.com/toranalytics/off-the-wall) | Quotes your own past corrections back, word for word, before each answer; reports what you correct most. | Claude Code · Codex |
| [PAI](https://github.com/mnott/PAI) | Personal AI infrastructure: hybrid-search memory, session continuity, a knowledge graph, headless workers. | Claude Code |
| [pi-recall](https://github.com/pratikgajjar/recall) | Searches past AI chat history across clients, backed by a local SQLite FTS5 index. | pi |
| [piia-engram](https://github.com/Patdolitse/piia-engram) | Local-first identity and memory layer sharing preferences, lessons, decisions, playbooks across MCP tools. | MCP |
| [Pixel](https://github.com/Pixel-CLI/pixel) | Deterministic code index queried for signatures, callers, impact, and Git history instead of whole-file reads. | Multi |
| [remcycle](https://github.com/lianmatsuo/remcycle) | Garbage collection for memory: rereads sessions daily, keeps what you decided, questions stale notes. | Claude Code |
| [remembrandt](https://github.com/rishibanota/remembrandt) | Preserves decisions, gotchas, and changelogs across sessions. | Claude Code · Cursor · Codex |
| [silica](https://github.com/kiycoh/silica-harness) | Serves an Obsidian vault as the agent's memory: semantic and literal recall, gated writes, session-opening hooks. | MCP |
| [sqlite-graph-memory](https://github.com/tonydzi/sqlite-graph-memory) | Memory over your own markdown notes: vector retrieval, hand-curated wikilink graph, cross-encoder rerank, one SQLite file. | Claude Code · Codex · Cursor |
| [trace-mcp](https://github.com/nikolai-vysotskyi/trace-mcp) | Precomputed code-intelligence graph: symbol search, call graphs, change impact, test mapping as structured answers. | MCP |
| [Tree Ring Memory](https://github.com/TerminallyLazy/tree-ring-memory-codex-plugin) | Memory lifecycle guidance: recall, evidence-backed lessons, privacy-safe capture, audit, consolidation, explicit forgetting. | Codex |
| [Unforgit](https://github.com/MiguelMedeiros/unforgit-codex-plugin) | Git-backed repository memory: decisions, conventions, gotchas, playbooks. | Codex |
| [vybe-intelligence-vault](https://github.com/rxmna8502/vybe-intelligence-vault) | Exposes a 160,000+ node knowledge graph for query and context injection. | MCP |
| [Waggle](https://github.com/Abhigyan-Shekhar/Waggle-mcp) | Graph-backed conversational memory recalling decisions, constraints, preferences, outcomes across sessions. | Codex |
| [Wingman](https://github.com/lsshym/wingman.ai) | Repo-local project memory, data-contract checks, and project-map discovery before agents edit code. | Claude Code |

## Context engineering

Feeding the model less, better.

| Plugin | What it does | Target |
| :----- | :----------- | :----- |
| [claude-jit-context](https://github.com/Digital-Process-Tools/claude-jit-context) | Project knowledge that loads only when needed — matched against the prompt, the file, or the tool. | Claude Code |
| [claude-supertool](https://github.com/Digital-Process-Tools/claude-supertool) | Batches file, Git, and tracker operations into one round-trip: fewer output tokens, less wall time. | Claude Code |
| [Contexo](https://github.com/maheedhar132/Contexo) | Portable context and cost control across every coding harness. | Skills |
| [Context Guard](https://github.com/GreenLv/codex-context-guard) | Preserves requirements and verification evidence across long tasks and compaction. | Codex |
| [Context Optimizer](https://github.com/evermeer/context-optimizer) | On compaction: reranks the relevant, drops duplicates, compresses the rest with a local ML pipeline. | Skills |
| [ContextPilot](https://github.com/EfficientContext/ContextPilot) | Reorders and deduplicates context blocks to raise cache hits. | OpenClaw · Hermes |
| [LLM Transpile](https://github.com/surfercat/llm-transpile) | Context compression that fits long conversations through tighter windows. | Skills |
| [Codebase Recon](https://github.com/yujiachen-y/codebase-recon-skill) | Understands a codebase from Git history before reading code: hotspots vs bug magnets, high-risk files, bus factor. | Skills |

**Related:** [03 · Development Workflow](03-development-workflow.md) · [05 · Tools and Integrations](05-tools-and-integrations.md)
