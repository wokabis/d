# 03 · Web Agents

> Software that operates the web for you: autonomous browser agents, automation libraries, scrapers and crawlers, search APIs, and the benchmarks that measure them.

## Autonomous web agents

Agents that navigate and interact with the web through a user-friendly interface — the "browser agents".

| Tool | What it does | Form |
| :--- | :----------- | :--- |
| [OpenAI Operator](https://openai.com/index/introducing-operator/) | OpenAI's agents that browse the web for you. | Web app |
| [Browser-Use](https://www.browser-use.com) | State-of-the-art agent and framework that makes the web LLM-friendly. | Open Source · Library |
| [Skyvern](https://www.skyvern.com/) | Framework to automate browser-based workflows. | Open Source · Library |
| [Google Project Mariner](https://deepmind.google.com/technologies/project-mariner/) | Research prototype exploring human-agent interaction, starting with the browser. | Research |
| [Sentience API](https://www.sentienceapi.com) | Builds more deterministic, explainable web agents using semantic geometry on web content. | API |
| [Runner H](https://www.hcompany.ai/) | Automates complex, multi-step tasks without repetitive manual input. | Web app |
| [WebVoyager](https://github.com/MinorJerry/WebVoyager) | Vision-enabled web agent. | Open Source · Research |
| [AgentGPT](https://github.com/reworkd/AgentGPT) | Deploys autonomous agents in your browser. | Open Source · Web app |
| [Agent-E](https://github.com/EmergenceAI/Agent-E) | Browser automation agent that works with your existing browser. | Open Source · Extension |
| [Manus](https://manus.im/) | General agent that runs long tasks across browsers, terminals, and text editors. | Web app |
| [doBrowser](https://www.dobrowser.io) | Chrome extension that understands natural language and acts in your browser. | Extension |
| [MultimodalWebSurfer](https://microsoft.github.io/autogen/stable/reference/python/autogen_ext.agents.web_surfer.html#autogen_ext.agents.web_surfer.MultimodalWebSurfer) | AutoGen's multimodal agent that searches the web and visits pages. | Open Source · Library |
| [Magentic-One](https://www.microsoft.com/en-us/research/articles/magentic-one-a-generalist-multi-agent-system-for-solving-complex-tasks/) | Generalist multi-agent system for complex tasks, including web surfing via AutoGen. | Research |
| [Harpa.ai](https://harpa.ai/) | Chrome extension and browser agent that acts on natural language. | Extension |
| [Yutori](https://yutori.com/) | Multi-agent system executing browser tasks in parallel. | Web app |
| [rtrvr.ai](https://www.rtrvr.ai/) | Chrome extension agent that does tasks, scrapes to Sheets, and calls APIs from your own browser. | Extension |
| [Nanobrowser](https://nanobrowser.ai) | Open-source, local-first Chrome extension agent with flexible LLM options and multi-agent support. | Open Source · Extension |
| [Browserable](https://browserable.ai) | Open-source, self-hostable browser automation library for agents. | Open Source · Library |
| [Tongyi WebAgent](https://github.com/Alibaba-NLP/WebAgent) | Language-driven web automation agent for planning and browsing. | Open Source · Research |
| [Agent-E](https://github.com/EmergenceAI/Agent-E) | See above. | |
| [WebVoyager (Agent)](https://github.com/MinorJerry/WebVoyager) | See above. | |

### Computer-use agents

Agents that operate the whole desktop, not just the browser.

| Tool | What it does | Form |
| :--- | :----------- | :--- |
| [UI-TARS](https://github.com/bytedance/UI-TARS) | End-to-end model for GUI agents that perceives screens and acts. | Open Source · Model |
| [Open Interpreter](https://github.com/OpenInterpreter/open-interpreter) | Natural language interface to your computer's capabilities. | Open Source · CLI |
| [Self-Operating Computer](https://github.com/OthersideAI/self-operating-computer) | Framework for letting models take mouse and keyboard control. | Open Source · Library |
| [GPT Computer Assistant](https://github.com/Upsonic/gpt-computer-assistant) | Desktop framework for building computer-use assistants. | Open Source · Desktop |
| [Aster](https://github.com/astral-sh/aster) | Desktop assistant that can take actions on the computer. | Open Source · Desktop |
| [Anthropic Computer Use](https://www.anthropic.com/news/computer-use) | Reference implementation of a computer-use agent from Anthropic. | Research |

## Web automation tools

Libraries and services that make browser control reliable and repeatable.

| Tool | What it does | Form |
| :--- | :----------- | :--- |
| [Playwright](https://playwright.dev/) | Cross-browser automation library with first-class agent support. | Open Source · Library |
| [Puppeteer](https://pptr.dev/) | Chrome control via a high-level Node API. | Open Source · Library |
| [Steel](https://github.com/steel-dev/steel-browser) | Open-source browser API built for AI agents: sessions, proxies, stealth. | Open Source · API |
| [BrowserAct](https://github.com/browser-act/skills) | CLI and skills for agents to operate real browsers, manage sessions, and capture evidence. | Open Source · CLI |
| [Agent Browser Shield](https://github.com/pixiebrix/agent-browser-shield) | Extension between agent and page that strips prompt injection, masks PII, and removes dark patterns. | Open Source · Extension |
| [Webagent Cloud](https://webagent.cloud) | Open-source API for automating repetitive browser workflows with a self-healing action cache. | Open Source · API |
| [BrowserTrace](https://github.com/aaronlab/browsertrace) | Local-first trace viewer for debugging browser-agent runs with redacted shareable exports. | Open Source · Dev tool |
| [Notte](https://notte.cc) | Browser infrastructure for agents: managed sessions, runtime, credential vault, personas. | Open Source · API |
| [invisible-playwright](https://github.com/feder-cr/invisible_playwright) | Playwright wrapper over a stealth-patched Firefox for evasion with no JS overrides. | Open Source · Library |
| [Webwright](https://github.com/microsoft/Webwright) | Microsoft Research framework where the agent writes and runs Playwright scripts in a terminal. | Open Source · Framework |
| [HUD](https://github.com/hud-evals/hud-python) | SDK for building browser and computer-use RL environments to evaluate and train web agents. | Open Source · Library |
| [Webfuse](https://www.webfuse.com) | Web proxy and browser-as-a-service for operating agents in a sandbox over any third-party site. | API |
| [Webcmd](https://github.com/agentrhq/webcmd) | Self-learning browser infrastructure that records navigation and compiles it into deterministic CLI adapters. | Open Source · API |
| [Hermes Connector](https://github.com/CorsenAI/hermes-connector) | Chrome extension letting Hermes Agent control only explicitly attached tabs. | Open Source · Extension |

### Dev tools

| Tool | What it does | Form |
| :--- | :----------- | :--- |
| [Stagehand](https://github.com/browserbase/stagehand) | AI-powered browser automation framework built on Playwright primitives. | Open Source · Library |
| [AgentQL](https://www.agentql.com/) | Query language and toolkit that makes the web AI-ready. | Open Source · Library |
| [Visual Agent QA](https://github.com/bsorrentino/visual-agent-qa) | Vision-driven QA for UI. | Open Source · Library |
| [ControlFlow](https://github.com/PrefectHQ/ControlFlow) | Framework for building agents with structured workflows and tools. | Open Source · Library |

## Scrapers and crawlers

AI-driven crawlers and scrapers that turn web pages into structured, LLM-friendly data.

| Tool | What it does | Form |
| :--- | :----------- | :--- |
| [FireCrawl](https://www.firecrawl.dev/) | APIs for turning websites into LLM-friendly markdown. | API |
| [Crawl4AI](https://crawl4ai.com) | Open-source, LLM-friendly web crawler and scraper. | Open Source · Library |
| [ScrapeGraphAI](https://scrapegraphai.com/) | Python scraper built on AI. | Open Source · Library |
| [WebAgent (OpenAgents)](https://github.com/xlang-ai/OpenAgents) | Web-browsing agent module of the OpenAgents platform (HKU). | Open Source · Library |
| [Expand.ai](https://www.expand.ai/) | Turns any website into a type-safe API. | API |
| [LLM Scraper](https://github.com/mishushakov/llm-scraper) | Uses LLMs for intelligent scraping and content understanding. | Open Source · Library |
| [Plasmate](https://github.com/plasmate-labs/plasmate) | Open-source headless browser engine for agents; compiles HTML to a Semantic Object Model with 17.5× token compression, plus 13 MCP tools. | Open Source · Engine |
| [SpiderCreator](https://github.com/carlosplanchon/spidercreator) | Create complex Playwright spiders from natural language prompts. | Open Source · CLI |
| [DataLens](https://datalens.uk) | Plans browser scraping tasks, extracts structured fields, and learns as it goes. | API |
| [Context.dev](https://www.context.dev/) | Web APIs and MCP tools for search, scraping, crawling, schema-based extraction, parsing, and monitoring. | API |

## Search and query

Utilities that give agents fast, real, structured access to the open web.

| Tool | What it does | Form |
| :--- | :----------- | :--- |
| [SerpAPI](https://serpapi.com/) | Google Search results as a clean API. | API |
| [Serper.dev](https://serper.dev/) | Performant, cost-effective Google Search API. | API |
| [Jina.ai](https://jina.ai/) | Neural search platform for web data. | API |
| [Exa.ai](https://exa.ai) | Fast, accurate web search API designed for AI agents. | API |
| [Not Human Search](https://nothumansearch.ai) | Engine indexing 1,750+ agent-first tools ranked by agentic readiness; ships as an MCP server. | API · MCP |
| [Superhighway](https://superhighway.walls.sh) | Web search API with search, news, images, scrape, and research tools; pay-per-call USDC via x402 or free key. | API |
| [Zoom Search](https://github.com/goofrey/zoom-search) | Open-source search and evidence tool with query rewriting, source zoom-in, and structured outputs. | Open Source · Library |
| [SocialCrawl](https://www.socialcrawl.dev) | Unified social and commerce data API over 50+ platforms. | API |

## Benchmarks and research

Datasets and benchmarks for evaluating and advancing web-capable agents.

| Tool | What it does | Form |
| :--- | :----------- | :--- |
| [Web Agent Leaderboard](https://leaderboard.steel.dev) | Compiles agent products and their WebVoyager performance. | Dataset |
| [Web Games](https://webgames.convergence.ai/) | Challenges for testing general-purpose browsing agents. | Dataset |
| [Bananalyzer](https://github.com/reworkd/bananalyzer) | Evaluation framework for web-based agents. | Open Source · Benchmark |
| [Mind2Web](https://osu-nlp-group.github.io/Mind2Web) | Large-scale dataset for generalist web agents. | Open Source · Dataset |
| [World of Bits](https://proceedings.mlr.press/v70/shi17a/shi17a.pdf) | Platform where agents complete tasks on the internet via low-level keyboard and mouse actions. | Research paper |
| [MiniWoB++](https://miniwob.farama.org) | Classic suite of 104 mini browser tasks. | Open Source · Benchmark |
| [WebTaskBench](https://github.com/plasmate-labs/plasmate-benchmarks) | 51-URL benchmark comparing HTML vs Markdown vs SOM representations for token efficiency, latency, and accuracy. | Open Source · Benchmark |
| [WebArena](https://webarena.dev) | Realistic, self-hostable web environment with a public leaderboard. | Open Source · Benchmark |
| [WebCanvas](https://github.com/iMeanAI/WebCanvas) | Online evaluation framework for dynamic web environments. | Open Source · Benchmark |
| [WebGPT](https://openai.com/research/webgpt) | Browser-assisted question answering research. | Research |
| [WebShop](https://webshop-pnlp.github.io) | Simulated e-commerce environment with 1.18M real Amazon products. | Open Source · Benchmark |
| [WebVoyager (Benchmark)](https://arxiv.org/abs/2401.13919) | Vision-enabled benchmark for real-world website interaction. | Research |

## Tutorials and guides

| Tool | What it does |
| :--- | :----------- |
| [LangGraph WebVoyager Tutorial](https://langchain-ai.github.io/langgraph/tutorials/web-navigation/web_voyager/) | Build a web-navigation agent with LangGraph, vision models, and WebVoyager. |
| [Build an AI Browser Agent](https://dzone.com/articles/build-ai-browser-agent-llms-playwright-browser-use) | Step-by-step: create a browser agent with Playwright + Browser-Use. |
| [Install and Run Browser-Use Locally](https://aleksandarhaber.com/install-and-run-browser-use-ai-agents-locally-using-ollama/) | Run the open-source Browser-Use agent with a local LLM. |
| [Build a Browser Agent with DeepSeek](https://dev.to/nodeshiftcloud/build-a-browser-use-agent-with-deepseek-a-step-by-step-guide-2n59) | Deploy a Browser-Use web-UI agent powered by DeepSeek on a cloud VM. |

**Related:** [Agent Platforms](01-agent-platforms.md) · [LLM Apps and Templates](04-llm-apps-and-templates.md)
