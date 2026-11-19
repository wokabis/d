trending 

Worked for 7s

Yep. I treated “not more than a month old” as repos created on/after September 1, 2026, not merely repos that got a recent commit. That cuts out a lot of older projects pretending to be “new.”

Here are the ones I’d actually open:

Repo	Created	What it does	Why it’s interesting

feder-cr/dots	Sep 29	Browser for AI agents	Gives an AI agent its own browser and is explicitly designed around avoiding bot blocking. It hit ~1.9K stars extremely quickly. 
kaankiziltug/logo-design-skill	Sep 26	Design skill for AI agents	A reusable agent skill with SVG guidance, testing tools, and a 1,400+ logo reference library. Already ~1.1K stars. 
mikehasa/golive-skill	Sep 23	Let agents deploy products	Agent skill + Node CLI for provisioning hosting, databases, domains, email and payments, with an explicit approve/apply/verify workflow. ~1.1K stars. 
qiz029/dscode	Sep 11	DeepSeek coding-agent harness	Persistent shell, subagents, Chrome MCP and session telemetry. ~599 stars according to a Sep 29 snapshot. 
To3akaRin/mac-computer-use	Sep 8	Give LLMs control of computers	Cross-platform computer-use experiments with CDP/agent skills and live demos. ~1.1K stars. 
kitze/skillbox	Sep 17	Self-hosted AI-agent skill library	Versioned skills library with MCP and scoped clients. Small but already ~249 stars. 
qiz029/dscode	Sep 11	Coding-agent infrastructure	Particularly interesting if you're building your own Claude/Codex-style terminal agent rather than just using one. 
HarjjotSinghh/helicon	Sep 11	Desktop UI for Muse Code	Native-ish desktop experience around an AI coding CLI, with diffs, approvals and installers across Windows/macOS/WSL. ~64 stars, 12 forks. 
groundboxerrespect/Dlls5-auto	Sep 12	AI image enhancement	Self-hosted image/video enhancement service with REST API, batching and Docker. ~437 stars. 
bridge-mind/bridgeclip	Sep 24	AI video clipping desktop app	Turns longer video into clips; very early but already ~346 stars. 


The ones I'd investigate first

1. mikehasa/golive-skill
This is the kind of thing I find especially interesting: rather than building another chatbot, they're building an actual capability for agents—take a software project from “it works locally” to “it's deployed.” 

2. feder-cr/dots
The speed of adoption is notable: created September 29, and reported at roughly 1,930 stars by September 30. The idea—an agent-controlled browser that isn't trivially identified as an automated browser—is a very practical agent-infrastructure problem. 

3. qiz029/dscode
This is closer to the current “build your own coding agent” wave: persistent terminal state + subagents + browser/MCP + telemetry. If you're interested in how people are constructing agent harnesses rather than just consuming them, this is worth studying. 

4. To3akaRin/mac-computer-use
Computer-use is moving rapidly from demos toward reusable infrastructure. This one was created September 8 and had already reached ~1.1K stars by the end of the month. 

5. kitze/skillbox
Small, but strategically interesting: skills are becoming a software distribution mechanism for agents. A self-hosted, versioned skill registry/library is a useful primitive if that ecosystem keeps growing. 

One pattern jumps out

The most interesting new repos aren't mostly “AI apps.” They're increasingly infrastructure around agents:

agent → skills → tools → browser/computer → deployment → verification

That's a much more interesting layer to watch than the 500th “ChatGPT wrapper.” GitHub's own current Explore page is showing the same shift, with projects around agent skills, agent orchestration, agent memory and agentic workflows appearing prominently. 

If you want, I can do a much deeper “GitHub radar” next: 20–30 repos created in September 2026, sorted into AI agents / devtools / automation / local AI / infra / weird-but-useful, with stars, creation date, what the code actually does, and **“worth cloning vs. just watching.”**









Absolutely. I dug further, and there’s a second wave of interesting September repos. The pattern is getting clearer: people are building the plumbing that makes coding agents actually useful.

More fresh repos worth watching

[`paperclipai/paperclip`](https://github.com/paperclipai/paperclip?utm_source=chatgpt.com) — “the open-source app everyone uses to manage agents at work.” Think management/orchestration layer for teams of agents. GitHub itself is currently surfacing it prominently. 

[`mvschwarz/openrig`](https://github.com/mvschwarz/openrig?utm_source=chatgpt.com) — runs Claude Code and Codex together as one multi-agent system, using tmux/CLI orchestration. This is exactly the sort of “glue” people are starting to build around coding agents. 

[`Silbercue/public-browser`](https://github.com/Silbercue/public-browser?utm_source=chatgpt.com) — an MCP browser for Claude Code/Cursor. The interesting bit isn't merely browser automation: its September benchmark reports 30/30 tasks, with substantially fewer tokens/tool calls than several alternatives in its own controlled test. Treat those numbers as author-reported benchmarks, but the engineering approach is interesting. 

[`maksugr/acp-devtools`](https://github.com/maksugr/acp-devtools?utm_source=chatgpt.com) — debugging/observability for coding agents. It proxies the JSON-RPC conversation between your editor and agent, stores sessions in SQLite, and gives you replay/diff/spec-validation plus an MCP server. This is a very practical problem. 

[`wlsdks/ontology-atlas`](https://github.com/wlsdks/ontology-atlas?utm_source=chatgpt.com) — attempts to answer: “What does this codebase actually build, why is it structured this way, and what will my change affect?” The tracker showed 137 stars shortly after its September 25 appearance. 

[`qodeca/erfana`](https://github.com/qodeca/erfana?utm_source=chatgpt.com) — an agent-native Markdown workspace, letting you run Claude Code and other terminal agents alongside your editor. Very early, but conceptually interesting. 

[`joseamair/agent-quota-tracker`](https://github.com/joseamair/agent-quota-tracker?utm_source=chatgpt.com) — local monitor/watchdog/dashboard for AI coding-agent rate limits and quotas. Tiny today, but solving an annoyingly real problem as people run multiple agents. 

[`forgeprint/forgeprint`](https://github.com/forgeprint/forgeprint?utm_source=chatgpt.com) — an MCP tool that returns the appropriate AGENTS.md, skills, MCP configuration and project blueprint for a coding task. Essentially “context packaging” for agents. 

[`letta-ai/claude-subconscious`](https://github.com/letta-ai/claude-subconscious?utm_source=chatgpt.com) — gives Claude Code a persistent “subconscious”/memory layer. It had already reached roughly 2.9K stars in the September snapshot. 

[`MemTensor/memmy-agent`](https://github.com/MemTensor/memmy-agent?utm_source=chatgpt.com) — a local memory hub intended to give different AI agents one shared persistent memory. Roughly 1.9K stars in the snapshot I found. 

[`MemTensor/MemOS`](https://github.com/MemTensor/MemOS?utm_source=chatgpt.com) — goes further: an OS-like memory layer for agents, with persistent memory, retrieval and cross-task skill reuse. Roughly 11K stars in the current listing. 

[`dzhng/jevgrep`](https://github.com/dzhng/jevgrep?utm_source=chatgpt.com) — search code by asking what it does, rather than just matching strings. It showed ~1.2K stars in a September 28 new-repo radar. 

[`yetone/magpie`](https://github.com/yetone/magpie?utm_source=chatgpt.com) — one place to run different coding models/agents, e.g. Codex on one model and Claude Code on another. It had ~1.6K stars in the September 28 radar. 

[`Niko1221/Strata`](https://github.com/Niko1221/Strata?utm_source=chatgpt.com) — attempts to run a 125B Qwen model on an 8GB+ NVIDIA GPU, with one-click Windows/Linux setup. If the hardware efficiency holds up beyond the project's own claims, that's potentially useful for local AI. 


And one category I think is getting really interesting

Agent context compression.

[`headroomlabs-ai/headroom`](https://github.com/headroomlabs-ai/headroom?utm_source=chatgpt.com)** compresses tool outputs, logs, files and RAG chunks before they hit the LLM. The project claims 20% fewer tokens for coding agents and 60–95% for some JSON workloads. Again, those are project-reported numbers, but the problem is fundamental: agents are increasingly bottlenecked by context, not just model intelligence. 

And there's a complementary project:

[`rtk-ai/rtk`](https://github.com/rtk-ai/rtk?utm_source=chatgpt.com) — compresses shell output specifically for coding agents. A September agent-tool catalog lists it alongside Headroom, code-graph tools, agent harnesses and skills. 

What I'm seeing overall

The new stuff is clustering into roughly six primitives:

┌── Browser / computer control
             │
Agent ───────┼── Memory
             │
             ├── Skills
             │
             ├── Context compression
             │
             ├── Multi-agent orchestration
             │
             └── Observability / debugging

That's more interesting to me than another standalone AI app. The ecosystem is starting to look like an operating system around agents.

If you want to go deeper, I can do the next pass specifically for “small repos with disproportionately high utility” — the weird 50–500 star projects that might save you 10 hours a week, rather than the obvious 2K+ star stuff.








Got it — online-first changes the list substantially. I’m interpreting that as things you can use over the web, deploy as a web service, automate websites with, or build SaaS around, rather than local developer utilities.

I also checked current GitHub activity rather than relying only on the earlier list. One caveat: GitHub's public topic/repository pages expose recent updates more reliably than exact creation dates, so I’m only calling something “fresh” when I can establish that from the available data.

🌐 The interesting online stuff

1. OpenCLI — turn websites into APIs/CLIs

[OpenCLI on GitHub](https://github.com/jackwener/OpenCLI?utm_source=chatgpt.com)

This one is particularly compelling. The idea is basically:

> “I already have a website and I'm logged in. Let an AI agent operate it.”



Instead of waiting for a website to expose an API, OpenCLI can use your logged-in browser context and expose website actions to agents. GitHub currently lists it under browser automation/AI-agent projects and shows activity in late September. 

Useful for: personal automation, SaaS integrations, research agents, workflows.


---

2. Tencent BrowserSkill — agents using your real browser

[BrowserSkill](https://github.com/Tencent/BrowserSkill?utm_source=chatgpt.com)

This is one I'd keep an eye on.

The premise is AI agents operating your actual logged-in browser, rather than a sterile browser session. It provides a CLI + extension and is designed to work across shell-based AI agents. GitHub shows it being updated September 29. 

That opens up things like:

Agent
  ↓
your Chrome session
  ↓
Gmail / Salesforce / LinkedIn / Shopify / internal tools
  ↓
real actions

That's much closer to “AI employee” infrastructure than chatbot infrastructure.


---

3. rtrvr-cli — web → structured data

[rtrvr-cli](https://github.com/rtrvr-ai/rtrvr-cli?utm_source=chatgpt.com)

This is another useful direction: scrape/search/extract the web from a single interface, with cloud or local browser support.

It exposes CLI + SDK + MCP interfaces, so you can use the same web capability from humans or agents. GitHub's web-agent topic currently lists it with September 13 activity. 

Potentially useful for:

competitor monitoring

price monitoring

research

lead generation

extracting structured information

agent research pipelines



---

4. Fuji — an AI agent living in your browser

[Fuji Web](https://github.com/normal-computing/fuji-web?utm_source=chatgpt.com)

This is a browser side-panel agent: give it a command and it performs tasks online.

The interesting part isn't “AI browser” by itself. It's the UX:

you're on a website → tell the side panel what you want → agent works on the current page.

GitHub's web-agent topic shows it with September 12 activity. 


---

5. agent-browser-plugin-firecrawl

[Firecrawl's agent-browser plugin](https://github.com/firecrawl/agent-browser-plugin-firecrawl?utm_source=chatgpt.com)

This one is more infrastructure-oriented.

It combines browser automation + search/scraping/crawling so an agent can navigate the web and extract information.

GitHub currently shows it as a September project with cloud-browser/CDP functionality. 

If you're thinking:

> “I want to build an agent that researches the internet continuously”



this is much more relevant than another chat UI.


---

🔥 Something even more interesting: WebMCP

[OpenTiny WebMCP SDK](https://github.com/opentiny/webmcp-sdk?utm_source=chatgpt.com)

This is one of the bigger architectural ideas hiding in the new repos.

The project is trying to make websites themselves AI-native through WebMCP/WebSkills, allowing agents to control web applications without requiring every interaction to be solved through screenshots and mouse clicks.

GitHub describes it as a toolkit for building AI-native apps and allowing LLM agents to remote-control webpages. 

The distinction is important:

Old approach

AI → screenshot → vision → click button → screenshot → repeat

Web-native approach

AI → semantic web capability → structured action → result

If the ecosystem around this develops, that could be a pretty meaningful change to how websites expose functionality to agents.


---

🕸️ Another one: webcmd

[webcmd](https://github.com/agentrhq/webcmd?utm_source=chatgpt.com)

GitHub describes it as a self-learning agent browser. It's TypeScript and appears in the current browser-use ecosystem with September activity. 

The “self-learning” angle is what makes this worth watching: instead of repeatedly figuring out how a website works, the agent can potentially accumulate reusable knowledge about operating it.


---

💡 And this one is quietly useful: invisible_playwright_mcp

[invisible_playwright_mcp](https://github.com/feder-cr/invisible_playwright_mcp?utm_source=chatgpt.com)

It's a Playwright/MCP-based browser automation project aimed at agents doing web research, scraping, market research, job search, etc. GitHub's productivity topic currently shows it with September 25 activity. 

The use cases are much more “business automation” than “AI demo”:

Find 200 companies
       ↓
Visit their websites
       ↓
Extract pricing / contacts / products
       ↓
Normalize data
       ↓
Return spreadsheet / database


---

What I'd watch in the online category

The projects are converging on something pretty interesting:

Layer	What people are building

🌐 Browser	Agents that operate websites
🔑 Identity	Agents using your existing logged-in sessions
🧩 Web APIs	Turning websites into callable tools
🔎 Research	Search → crawl → extract → reason
🧠 Memory	Remembering how websites work
🔄 Automation	Turning browser actions into reusable workflows
🛠️ WebMCP	Websites exposing capabilities directly to agents


And that's where I'd focus if your definition of “useful” is something you could actually build a business/product on top of.

My next rabbit hole would be different

Rather than giving you another list of generic GitHub projects, I can hunt specifically for new online products people are quietly open-sourcing:

🧑‍💻 SaaS

🤖 AI agents that actually do things online

🔍 research/search tools

📊 data/lead-generation tools

🛒 e-commerce automation

💰 money-making / business automation

🔗 APIs that turn websites/services into programmable infrastructure

🚀 tiny projects (<500 stars) that could become real products


That's probably the more interesting rabbit hole.



Yes — Android + drone security is a much better rabbit hole. I’d keep this strictly to authorized security research, pentesting, forensics, and lab/CTF work, rather than tools for taking over someone else’s device or drone.

I searched current GitHub activity, and there are some genuinely interesting things.

🤖 Android

Apkx-Hunter — GitHub
Created/active in the current September window. It's an Android static-analysis framework packaged for Debian, with OWASP MASVS checks, 166 detection patterns, secret scoring, malware analysis and APK analysis. 

This is one I'd actually clone if you're doing Android research.

LockKnife — GitHub
A newer unified Android security-research workspace/CLI. It combines APK analysis, runtime inspection, forensics and security-research workflows, with Python orchestration and a Rust core. GitHub shows it updated September 10. 

The interesting idea here is “one cockpit for Android security research” rather than having 15 separate tools open.

FirmwareDroid — GitHub
Android firmware + app analysis framework, updated September 21. Useful if you're interested in going below the APK level and examining vendor firmware. 

morf — GitHub
Mobile reconnaissance framework, updated September 18. It's aimed at finding sensitive information and security issues in mobile applications. 

TrashDroid — GitHub
Automates a multi-phase Android security-testing workflow using ADB, drozer and apktool. Updated September 15. 

🕵️ Android forensics is particularly interesting right now

MVT / Mobile Verification Toolkit — GitHub

This isn't new, but the current development is very active. MVT is maintained by Amnesty International and focuses on finding forensic traces of compromise on Android/iOS. Its Android tooling was updated September 30, and the project is sitting around 15K stars. 

There's also androidqf, the Android Quick Forensics companion project, updated September 23. 

If your interest is “is this Android phone compromised?”, I'd pay considerably more attention to these than to random “Android hacking” repositories.

🛩️ Drones / RF / BLE

The drone side is thinner in terms of brand-new GitHub repos, but there's an interesting adjacent area:

GhostBLE — GitHub

It's a BLE privacy scanner running on the M5Stack Cardputer. It discovers nearby BLE devices, analyzes their privacy characteristics and visualizes BLE activity. GitHub currently tags it for drone detection, IoT security testing, wardriving and ethical hacking, with activity September 24. 

That's interesting because many modern drones/controllers/peripherals expose Bluetooth or BLE-related surfaces.

For drone research I'd actually broaden the search from “drone hacking” → “RF/BLE/IoT security”. That's where more of the useful tooling lives.

🔬 Existing Android tools that are still worth knowing

Don't overlook the established projects just because they're older:

MobSF — automated Android/iOS/Windows application security analysis. Its main repo was updated September 26, 2026 and has ~21.9K stars. 

Frida — dynamic instrumentation, particularly useful for controlled Android app research.

JADX — APK/DEX decompilation.

apktool — APK disassembly/rebuilding.

drozer — Android attack-surface assessment.

MVT — mobile compromise/forensic analysis.


A current Android security assessment list also tracks MobSF, drozer, Reversense/Dexcalibur, APKLab and apk.sh as maintained tooling. 

🧠 One particularly interesting direction

There are now projects combining AI agents + security research.

For example, ai-security-arsenal packages security-research skills/workflows for AI coding tools, including Android testing workflows involving ADB, Frida, JADX, apktool and OWASP MASTG. 

That's the rabbit hole I'd investigate next:

AI agent → APK → static analysis → emulator/device → runtime instrumentation → findings → report

rather than an AI that simply generates exploit commands.

If you want, I can go much deeper specifically into drones next — DJI / Autel / Parrot / FPV, RF, Wi-Fi, BLE, MAVLink, flight controllers, firmware reversing, drone detection, and find the newest GitHub projects around each.