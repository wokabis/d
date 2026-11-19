find what I can deploy to Vercel or Netlify or Cloudflare etc and that researches, executes tasks, watches things 24/7, remembers what happened, and gets better over time, supports BYOK LLMs.





I found several better matches than the previous batch, especially once I searched specifically for repos that combine autonomous execution + persistence + scheduled/background operation + learning.

Strongest new candidates

Repo	Research	Execute	24/7 / cron	Memory	Improves	BYOK

POLYROB	✅	✅	✅	✅	✅	✅
OpenAgent	✅	✅	✅	✅	🟡	✅
OpenLegion	🟡	✅	✅	✅	🟡	🟡
Web Agent	✅	✅	✅	✅	✅	🟡
AI-Employee	🟡	✅	✅	✅	🟡	🟡
Crow	✅	✅	🟡	✅	🟡	✅
KBots	🟡	✅	✅	✅	✅	✅
Autonomous Agent	🟡	✅	✅	✅	🟡	🟡


1. POLYROB — probably the most interesting one I found

[POLYROB GitHub repository](https://github.com/theselfruleorg/polyrob?utm_source=chatgpt.com)

This is very close to your exact specification.

It explicitly describes itself as a self-hosted autonomous agent that:

pursues goals

keeps working unattended

has a durable goal board in SQLite

schedules its own recurring work

wakes itself up

delegates to sub-agents

reviews its own work

distills new skills from experience

retires unused skills

has browser automation

can execute code

has web fetching

has GitHub

has MCP

has persistent knowledge

can communicate through Telegram/email/WhatsApp/Discord/Slack/X. 


The self-improvement loop is particularly relevant:

> work → review → distill skill → reuse skill → retire bad/unused skill



That's much closer to what you mean by "gets better over time" than simply storing conversation history. 

Architecture

POLYROB
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
       Research      Execute      Browser
          │            │            │
          └────────────┼────────────┘
                       ▼
                  Goal Board
                       │
              ┌────────┴────────┐
              ▼                 ▼
          Persistent          Cron
           Memory              │
              │                ▼
              │            Self-wake
              │                │
              └────────┬───────┘
                       ▼
                    Review
                       │
                       ▼
                 New / better
                   skills

This is currently my number one repo for you.


---

2. OpenAgent — extremely strong

[OpenAgent GitHub repository](https://github.com/CodewithMubasher/OpenAgent?utm_source=chatgpt.com)

This one surprised me.

It calls itself a self-hosted AI agent OS and has:

persistent memory

multi-agent teams

specialist agents

tool/MCP management

coding agents

browser/web research tools

scheduled tasks

cron

interval execution

one-shot jobs

resumable work

15+ model providers

local/cloud models

configurable agent models

observability

self-healing skill

skill installation

MCP installation. 


And its memory isn't simply a vector database.

It has:

USER.md
   +
knowledge pages
   +
session notes
   +
dream agent
       ↓
source summaries
       ↓
related knowledge
       ↓
updated wiki

The "dream agent" periodically processes sessions and notes into durable knowledge. 

That's very close to your "remember what happened" requirement.

It also supports 15 model providers, including OpenAI, Anthropic, Gemini, OpenRouter, Bedrock, Grok, DeepSeek and Ollama. 

Interesting detail

It has a built-in self-healing skill capable of editing its own configuration, models, tools and MCP settings. 

That's safer than letting an agent arbitrarily rewrite its production source code.


---

3. OpenLegion — autonomous AI team

[OpenLegion GitHub repository](https://github.com/openlegion-ai/openlegion?utm_source=chatgpt.com)

This is another one I'd put on the shortlist.

Its core execution loop is explicitly:

DECIDE
  ↓
ACT
  ↓
LEARN
  ↓
repeat

It has autonomous triggering through:

persistent cron

self-scheduled jobs

heartbeat monitoring

deterministic probes

agent dispatch only when something requires reasoning. 


That last part is particularly good for 24/7 economics.

Instead of:

every minute
    ↓
LLM call

you can do:

every minute
    ↓
cheap probe
    ↓
anything interesting?
   / \
 no   yes
 │     │
sleep  LLM

That's exactly how I'd design a serious monitoring agent.

It also has a persistent workspace/memory system and supports teams of agents. 


---

4. Web Agent — unusually interesting if you want Vercel/browser-first

[Web Agent GitHub repository](https://github.com/nikola66/web-agent?utm_source=chatgpt.com)

This one is different.

It's browser-native and runs using WebContainers rather than requiring a traditional server/VPS.

It provides:

persistent profiles

50 tools

19 skills

sessions

reflections

learnings

cron

planning

knowledge vault

self-improving runtime

browser automation. 


The interesting part is that the project explicitly calls itself self-evolving.

So if your desired product is:

> "Open a browser, create an AI worker, give it a job, let it remember and improve"



this deserves serious investigation.

The downside is that its architecture is more browser-local than a true 24/7 server-side worker.


---

5. AI-Employee

[AI-Employee GitHub repository](https://github.com/greeves89/AI-Employee?utm_source=chatgpt.com)

This is particularly relevant to your phrase "AI employee."

It supports proactive agents that:

inspect outstanding work

plan what to do

pull the next task forward

create recurring schedules

respond to event triggers

operate within working-hour constraints

maintain semantic memory

maintain a per-user knowledge graph

maintain an activity timeline. 


That makes the architecture less like:

> chatbot + tools



and more like:

> digital employee + workload + calendar + memory.




---

6. KBots — very interesting for "agents that get smarter"

[KBots GitHub repository](https://github.com/karvidsson/kbots?utm_source=chatgpt.com)

This one has an especially interesting philosophy:

> agents remember, build their own tools, and train the model that replaces them.



It supports scheduled tasks where an agent can say:

> "Every morning at 8, check the news and summarize it."



The scheduler then re-invokes the agent with its full tools and memory. 

More importantly, it has a reward-based lessons layer that is intended to make agents improve over time. 

That makes this another strong candidate for your "learn from experience" requirement.


---

7. Autonomous Agent

[lythelab/autonomous-agent GitHub repository](https://github.com/lythelab/autonomous-agent?utm_source=chatgpt.com)

This is much smaller/simpler, but technically it nails several pieces:

continuous execution

long-running tasks

planning/adaptation

secure code execution through E2B

SQLite long-term memory

resumable sessions

API control

frontend. 


The architecture is:

Goal
 ↓
Planner
 ↓
Execute
 ↓
Reflect
 ↓
Memory
 ↓
next iteration

It's less feature-complete than POLYROB/OpenAgent, but potentially easier to understand and fork.


---

8. Crow

[Crow GitHub repository](https://github.com/kh0pper/crow?utm_source=chatgpt.com)

Crow describes itself as a modular agentic framework + MCP platform.

It combines:

persistent memory

research

agents

local models

cloud models

email

Discord

voice

MCP

self-hosted applications. 


I like this one more as an AI infrastructure platform than as a turnkey autonomous employee.


---

9. Open Computer Use

[Open Computer Use GitHub repository](https://github.com/Wide-Moat/open-computer-use?utm_source=chatgpt.com)

This isn't the complete agent OS, but it solves an important part of your requirement exceptionally well:

> Give an LLM an actual computer.



It provides:

Docker workspaces

live browser

terminal

code execution

documents

autonomous sub-agents

model agnosticism

self-hosting. 


I'd consider this a component if the main agent needs to actually operate arbitrary websites/apps, rather than only call APIs.


---

10. A particularly interesting memory layer

[Mnemos GitHub repository](https://github.com/Riley-Coyote/mnemos?utm_source=chatgpt.com)

Not a complete agent, but worth knowing about.

It treats memory as a living system:

typed connections

beliefs

decay

reconsolidation

connection discovery

consolidation

background reflection

scheduled maintenance. 


That is closer to the memory architecture I'd want behind an autonomous worker than a basic vector store.


---

My revised shortlist

After this second search, I'd put the candidates into three groups:

🟢 Closest to your exact idea

1. POLYROB

Research + work + browser + cron + self-wake + memory + learning + skills + subagents. 

2. OpenAgent

Agent OS + multi-agent + persistent memory + scheduled work + research + coding + BYOK providers + self-healing. 

3. OpenLegion

Agent teams + persistent cron + heartbeat + autonomous task execution + memory/workspace. 

4. KBots

Scheduled autonomous agents + memory + reward-based lessons + self-built tools. 

🟡 Interesting but with a specific emphasis

5. Web Agent — browser-native/self-evolving. 

6. AI-Employee — proactive digital employee/work management. 

7. Crow — agent/MCP ecosystem + memory. 

8. Autonomous Agent — simple continuous agent architecture. 

🔵 Components I'd potentially combine

Open Computer Use — actual computer/browser/terminal. 

Mnemos — sophisticated persistent memory. 


---

One thing stands out now

POLYROB is the first repo I'd actually test against your requirements rather than merely read.

The test I'd give it is brutally simple:

> "Monitor 20 competitors continuously. Every morning research what changed. If something significant happens, investigate it. Create tasks from the findings. Execute whatever actions are authorized. Remember the outcomes. Review which approaches worked and turn successful approaches into reusable skills."



If a repo can genuinely run that loop unattended, with BYOK models, persistent memory, browser/tool execution and safe self-improvement, that's the repo you're looking for.

I'd test POLYROB vs OpenAgent vs OpenLegion first. Those three now look substantially closer to your desired "24/7 autonomous worker" than generic deep-research projects. 