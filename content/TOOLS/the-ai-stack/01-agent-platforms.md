# 01 · Agent Platforms

> Software that takes work off your hands: persistent agents you delegate to, the frameworks developers build them with, and the automation rails they run on.

An agent here is not autocomplete. It signs in to your tools, holds context, runs on a schedule, and returns finished work. This page maps the whole supply chain — from finished coworkers to the raw frameworks underneath.

## Coworkers and teammates

Platforms that give an individual or a team persistent agents they delegate to through chat, a desktop app, or a shared workspace.

| Platform | What it does | License | Hosting |
| :------- | :----------- | :------ | :------ |
| [Agent Zero](https://github.com/frdel/agent-zero) | Personal agent with its own Linux desktop, browser, files, skills, and plugins — hand it work, come back to it done. | MIT | Self-hosted (Docker); desktop launcher available |
| [Agenta](https://github.com/agenta-ai/agenta) | Build AI coworkers and automations through chat, share them with a team, and run them interactively or in the background. | MIT core; enterprise features separately licensed | Self-hosted; hosted service available |
| [Eigent](https://github.com/eigent-ai/eigent) | Desktop app for assembling and managing a workforce of agents that completes multi-step tasks. | Apache-2.0 | Local desktop |
| [General Input](https://www.generalinput.com) | Turns everyday business processes into AI-powered systems the whole team can understand, monitor, and share. | Proprietary | Vendor-hosted; managed on-prem available |
| [Hermes Agent](https://github.com/NousResearch/hermes-agent) | Personal agent with memory, skills, tools, scheduled jobs, and messaging channels. | MIT | Self-hosted; desktop application available |
| [Kuse Cowork](https://github.com/kuse-ai/kuse_cowork) | Local-first desktop coworker that works across documents and tasks with the models you choose. | MIT | Local desktop; optional Docker isolation |
| [LibreChat](https://github.com/danny-avila/LibreChat) | Multi-model AI workspace with agents, tools, memory, code execution, and shared access controls. | MIT | Self-hosted |
| [LobeChat](https://github.com/lobehub/lobe-chat) | Multi-model agent workspace with knowledge bases and plugins, deployable in one click or via Docker. | LobeHub Community License (source-available) | Self-hosted or vendor-hosted |
| [Open WebUI](https://github.com/open-webui/open-webui) | Extensible workspace for local and cloud models with knowledge, tools, and full offline operation. | Open WebUI License (source-available) | Self-hosted; vendor-hosted available |
| [OpenClaw](https://github.com/openclaw/openclaw) | One gateway connecting models, tools, messaging channels, and companion applications. | MIT | Self-hosted on a device or server |
| [OpenWork](https://github.com/different-ai/openwork) | Desktop workspace for using and sharing agent workflows across files and connected services. | Mixed: open-source core, separately licensed portions | Local desktop or organization-managed |
| [OpenWorker](https://github.com/andrewyng/openworker) | Desktop coworker that completes everyday tasks across files, applications, and Slack. | MIT | Local desktop |
| [Orkas](https://github.com/Orkas-AI/Orkas) | Local-first desktop workforce where one Commander coordinates specialist agents from a single chat. | MIT | Local desktop |
| [Paperclip](https://github.com/paperclipai/paperclip) | Control plane for assigning goals, roles, budgets, and work to teams of external agents. | MIT | Self-hosted |

## Builders and frameworks

Frameworks and visual tools for creating, connecting, running, and inspecting agents.

| Platform | What it does | License | Hosting |
| :------- | :----------- | :------ | :------ |
| [Agno](https://github.com/agno-agi/agno) | Python framework and runtime for building agents, serving them through an API, and managing them in a web UI. | Apache-2.0 | Self-hosted; vendor cloud available |
| [CAMEL](https://github.com/camel-ai/camel) | Python framework for researching and building agents, multi-agent systems, tasks, and simulated environments. | Apache-2.0 | Library for self-managed applications |
| [CrewAI](https://github.com/crewAIInc/crewAI) | Python framework coordinating role-based agents and structured task flows. | MIT | Self-hosted framework; vendor platform available |
| [Dify](https://github.com/langgenius/dify) | Platform for AI workflows, retrieval pipelines, and agentic applications with broad model support. | Dify Open Source License (Apache-2.0 based, with conditions) | Self-hosted; vendor cloud available |
| [Flowise](https://github.com/FlowiseAI/Flowise) | Visual builder for agents and language-model workflows. | Apache-2.0 core; enterprise features separately licensed | Self-hosted; vendor cloud available |
| [Haystack](https://github.com/deepset-ai/haystack) | Python framework for production retrieval, document-processing pipelines, and agents. | Apache-2.0 | Library for self-managed applications; vendor cloud available |
| [Langflow](https://github.com/langflow-ai/langflow) | Visual and code-based platform for agents and workflows that run as APIs or MCP servers. | MIT | Self-hosted; vendor-hosted available |
| [LangGraph](https://github.com/langchain-ai/langgraph) | Low-level framework for long-running, stateful agents with explicit control over the execution graph. | MIT | Library for self-managed applications; vendor platform available |
| [Letta](https://github.com/letta-ai/letta) | Framework and server for stateful agents with persistent memory. | Apache-2.0 | Self-hosted server; vendor-hosted available |
| [LlamaIndex](https://github.com/run-llama/llama_index) | Framework for agentic applications over documents and data: parsing, extraction, multi-agent workflows. | MIT | Library for self-managed applications; vendor cloud available |
| [MetaGPT](https://github.com/geekan/MetaGPT) | Multi-agent framework that models software and business roles as coordinated agent workflows. | MIT | Library for self-managed applications |
| [Microsoft Agent Framework](https://github.com/microsoft/agent-framework) | Framework for building and coordinating agents across Python and .NET applications. | MIT | Library for self-managed or cloud applications |
| [OpenAI Agents SDK](https://github.com/openai/openai-agents-python) | Python framework for agent and multi-agent workflows with tools, handoffs, guardrails, sessions, and tracing. | MIT | Library for self-managed applications |
| [Pydantic AI](https://github.com/pydantic/pydantic-ai) | Typed Python agent framework with model portability, tools, and durable execution. | MIT | Library for self-managed applications; vendor platform available |
| [Sim](https://github.com/simstudioai/sim) | Collaborative visual workspace for building, deploying, and monitoring agents and workflows. | Apache-2.0 | Self-hosted; vendor cloud available |
| [smolagents](https://github.com/huggingface/smolagents) | Compact Python library for agents that act through code or tool calls. | Apache-2.0 | Library for self-managed applications |

## Workflow automation

Platforms and runtimes for repeatable workflows, scheduled jobs, and event-driven processes — with or without AI steps.

| Platform | What it does | License | Hosting |
| :------- | :----------- | :------ | :------ |
| [Activepieces](https://github.com/activepieces/activepieces) | Visual automation platform with integrations, AI steps, and a TypeScript extension framework. | MIT core; enterprise features separately licensed | Self-hosted or vendor cloud |
| [Apache Airflow](https://github.com/apache/airflow) | Python platform for developing, scheduling, and monitoring batch workflows as code. | Apache-2.0 | Self-hosted; third-party managed services available |
| [Automatisch](https://github.com/automatisch/automatisch) | Visual business automation for connecting services and running workflows without code. | AGPL-3.0 core; enterprise files separately licensed | Self-hosted; vendor cloud available |
| [Dagster](https://github.com/dagster-io/dagster) | Python orchestrator for building and operating data assets, pipelines, and automation. | Apache-2.0 | Self-hosted; vendor cloud available |
| [Huginn](https://github.com/huginn/huginn) | System of agents that watches events and acts on a schedule or when things change. | MIT | Self-hosted |
| [Kestra](https://github.com/kestra-io/kestra) | Workflow orchestration for data, infrastructure, and AI processes, defined in code or a UI. | Apache-2.0 core; enterprise features separately licensed | Self-hosted or vendor cloud |
| [n8n](https://github.com/n8n-io/n8n) | Visual platform for connecting applications and building workflows that include code and AI agents. | Sustainable Use License (fair-code, source-available) | Self-hosted or vendor cloud |
| [Node-RED](https://github.com/node-red/node-red) | Flow-based programming for connecting devices, APIs, and online services. | Apache-2.0 | Self-hosted |
| [Pipedream](https://github.com/PipedreamHQ/pipedream) | Event-driven automation with prebuilt integrations and steps in Node.js, Python, Go, or Bash. | Pipedream Source Available License | Vendor-hosted |
| [Prefect](https://github.com/PrefectHQ/prefect) | Python framework for building, deploying, and observing workflows with schedules and event triggers. | Apache-2.0 | Self-hosted server or vendor cloud |
| [StackStorm](https://github.com/StackStorm/st2) | Event-driven automation that connects services and acts through rules and workflows. | Apache-2.0 | Self-hosted |
| [Temporal](https://github.com/temporalio/temporal) | Durable execution that preserves application state and retries workflow steps through failures. | MIT | Self-hosted or vendor cloud |
| [Trigger.dev](https://github.com/triggerdotdev/trigger.dev) | TypeScript platform for background jobs, workflows, and long-running AI tasks. | Apache-2.0 | Self-hosted or vendor cloud |
| [Windmill](https://github.com/windmill-labs/windmill) | Developer platform that turns scripts into APIs, background jobs, workflows, and internal apps. | AGPL-3.0 and Apache-2.0 core; enterprise features separately licensed | Self-hosted or vendor cloud |

## Browser agents

Agents specialized in operating browsers and automating work on websites.

| Platform | What it does | License | Hosting |
| :------- | :----------- | :------ | :------ |
| [Browser Use](https://github.com/browser-use/browser-use) | Python library that lets agents control web browsers and automate online tasks. | MIT | Self-hosted; vendor cloud available |
| [Skyvern](https://github.com/Skyvern-AI/skyvern) | Browser automation that uses agents and computer vision to complete website workflows. | AGPL-3.0 | Self-hosted; vendor cloud available |

For the deeper browsing stack — automation tools, scrapers, search, and benchmarks — see [Web Agents](03-web-agents.md).

## Coding agents

Agents specialized in writing, editing, and shipping code.

| Platform | What it does | License | Hosting |
| :------- | :----------- | :------ | :------ |
| [Aider](https://github.com/Aider-AI/aider) | Terminal pair programmer that creates and edits codebases across many model providers. | Apache-2.0 | Runs locally in the terminal |
| [Cline](https://github.com/cline/cline) | Autonomous coding agent available as an IDE extension, CLI, and SDK. | Apache-2.0 | Runs locally in the IDE or terminal |
| [Goose](https://github.com/block/goose) | Coding agent that runs locally as a CLI or desktop app and extends beyond code tasks. | Apache-2.0 | Runs locally |
| [Hotdog](https://github.com/devoidfury/hotdog) | Coding agent that runs straight from source on Bun — no install step, fully auditable, extensible. | MIT | Runs locally |
| [Open Interpreter](https://github.com/openinterpreter/open-interpreter) | Coding agent optimized for low-cost models that emulates multiple agent harnesses. | Apache-2.0 | Runs locally |
| [OpenHands](https://github.com/All-Hands-AI/OpenHands) | Platform for software development agents across local, remote, and cloud backends. | MIT | Self-hosted; vendor cloud available |

For editors, extensions, and the commercial coding layer, see [Coding Environments](02-coding-environments.md).

## How entries were chosen

An entry needs an active official repository or product page, a working product or runtime you can actually use, enough public information to verify its license and hosting model, and signs of ongoing maintenance. Each tool appears once, under the section that matches its main job. Inclusion is not an endorsement, and popularity is not a criterion.

**Related:** [Coding Environments](02-coding-environments.md) · [Web Agents](03-web-agents.md) · [LLM Apps and Templates](04-llm-apps-and-templates.md)
