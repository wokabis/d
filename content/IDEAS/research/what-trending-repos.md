Worked for 13s

Yes. I’d frame this as a “what are builders actually building right now?” intelligence scan, rather than a conventional list of popular projects.

I searched across GitHub/GitLab, SaaS/product launches, Hacker News, Reddit, Devpost/hackathons, developer blogs, Medium/Hashnode/Dev.to and related sources. The strongest signal as of October 3, 2026 is that the interesting frontier has moved well beyond “AI chatbot + wrapper.”

The big picture

The most striking shift is:

> People are building infrastructure around AI agents, not merely AI applications.



GitHub’s current trending projects are heavily concentrated around agent harnesses, skills, context management, autonomous execution, agent security and multi-agent coordination. For example, current trending projects include ponytail, skills, NVIDIA OpenShell, openrig, Cursor plugins, superpowers, context-mode, hyperframes, and Pi. 

A separate daily-tracking repository currently has DeepSeek's agent harness, OpenCode, Claude Code, Codex, Pi, Gemini CLI and Zed among the leading AI developer projects, with very large recent star growth. 

That produces several very interesting categories.


---

1. AI software factories

This is probably one of the most important things happening.

Instead of:

Human → IDE → writes code

the emerging architecture is:

Human → specification → agents → implementation → tests → review → deployment

GitHub itself is moving in this direction with GitHub Agentic Workflows, where repository automation can be expressed in Markdown and executed by coding agents inside GitHub Actions. Examples include automated issue triage, documentation and code-quality work. 

There are also projects specifically trying to coordinate multiple coding agents.

For example, openrig is designed to build persistent teams from Claude Code, Codex and Pi, with roles, shared context and owned work. 

And GitLab currently has projects such as:

emage.code — multi-platform AI dev-team orchestration

canonical knowledge base

Plan → Approve → Execute workflows

validation gates

support for Copilot, Gemini CLI, OpenCode and Cursor

GitLab CI integration 


The deeper idea

The product isn't necessarily an AI coder.

It is an AI software-production operating system.

That's a considerably bigger category.


---

2. Agent harnesses

A new layer is appearing between the LLM and the application.

Think:

LLM
                 │
        ┌────────▼────────┐
        │  Agent Harness  │
        ├─────────────────┤
        │ tools           │
        │ memory          │
        │ context         │
        │ skills          │
        │ planning        │
        │ permissions     │
        │ retries         │
        │ state           │
        │ evaluation      │
        │ security        │
        └────────┬────────┘
                 │
        ┌────────▼────────┐
        │ Real world      │
        │ files / APIs    │
        │ browsers / Git  │
        │ databases etc.  │
        └─────────────────┘

This is becoming a substantial software category.

Pi is an especially interesting example: it combines a unified multi-provider LLM API, agent runtime, terminal UI and coding-agent CLI. Its ecosystem has also grown to thousands of extensions. 

GitHub's current trending page similarly shows projects concentrating on the harness rather than the underlying model. 


---

3. "Skills" are becoming software components

This is one of the most interesting developments.

Instead of giving an agent a gigantic system prompt, developers are packaging capabilities.

For example:

skills/
   ├── github/
   ├── terraform/
   ├── seo/
   ├── testing/
   ├── browser/
   ├── postgres/
   ├── documentation/
   ├── deployment/
   └── security/

The agent loads the capability when necessary.

There are now dedicated GitHub repositories containing hundreds of these skills.

One current survey identifies repositories such as planning-with-files, web-quality-skills, HashiCorp's Agent Skills and various Claude Code development workflows. 

HashiCorp, for example, has published skills for Terraform code generation, module generation and testing. 

Hashnode has gone further and created an official GraphQL Agent Skill that lets Claude Code, Cursor or Copilot operate its publishing API using documented rules and schema knowledge. 

That suggests something important:

APIs are increasingly being packaged for agents, not humans.


---

4. Agent memory

This is another huge emerging category.

People are building:

persistent memory

semantic memory

episodic memory

project memory

cross-agent memory

organizational memory

user preference memory

session handoff

long-term task state


For example, GitLab currently has opencode-memory, a persistent semantic memory system for OpenCode sessions using an MCP server and hybrid full-text/vector search. 

Another GitLab project, beautiful-brain, describes itself as a living memory system for AI agents assisting daily work, with both managed and self-hosted versions. 

And Hacker News recently featured Decispher, which is explicitly trying to let humans and AI agents share engineering context. It includes things like branch history and session-context transfer between agents, chats and machines. 

This points toward:

> The repository is becoming the memory of the software team.




---

5. Context engineering

This is becoming its own discipline.

Not:

> "Which model has the highest benchmark?"



but:

> "How do I give an agent exactly the information it needs without drowning it in context?"



Current GitHub projects are attacking:

context compression

context routing

session persistence

tool-output reduction

repository indexing

knowledge graphs

specification graphs

project state

cross-agent context transfer


context-mode, for example, is explicitly designed to reduce context consumption for AI coding agents, sandbox tool output and persist session memory. 

The GitLab ecosystem has projects doing similar things through knowledge layers and specification graphs. 

This is a very different market from "AI chatbot."


---

6. Agent-to-agent infrastructure

Another emerging layer is:

Agent A
   │
   ├──── Agent B
   │
   ├──── Agent C
   │
   └──── Agent D
          │
          ▼
       shared state

Builders are working on:

MCP

A2A

ACP

agent registries

agent discovery

agent cards

tool catalogs

agent authentication

inter-agent messaging

delegation

permissions

orchestration


GitLab's current projects include things like agent-tool catalogs containing MCP servers, APIs and A2A cards. 

And projects such as Bridge are explicitly experimenting with protocol reconciliation across ACP, MCP and A2A in multi-agent environments. 


---

7. Agents that actually operate computers

This is moving beyond APIs.

Developers are building agents that:

open browsers

click things

interact with websites

operate desktop applications

use visual interfaces

perform tasks humans normally perform manually


A particularly fun current GitLab example is an IKEA Kitchen Planner agent using Claude Code and a visible browser. 

That's a tiny project, but conceptually important.

The direction is:

API agent
   ↓
browser agent
   ↓
computer-use agent
   ↓
general digital worker


---

8. Agents controlling physical things

The same architecture is spilling into IoT.

GitLab currently has projects for:

Zigbee/MQTT control

smart homes

weather agents

hardware

edge agents

autonomous systems


For example, Oremi Iṣakoso is an MCP server for controlling Zigbee2MQTT smart-home devices. 

And just today there are reports of Meta publishing open-source firmware and a Linux SDK for ESP32-based hardware connected to its AI system. 

So the stack becomes:

LLM
 ↓
Agent
 ↓
MCP / device protocol
 ↓
ESP32 / Raspberry Pi / IoT
 ↓
Physical world


---

9. Agent security is becoming a standalone market

This one is especially interesting because agents create an entirely new security problem.

A normal application has:

user → application → database

An autonomous agent might have:

agent
 ├── browser
 ├── shell
 ├── GitHub
 ├── email
 ├── database
 ├── cloud
 ├── payment API
 └── internal company systems

So developers are building:

agent sandboxes

permission systems

capability controls

execution policies

audit logs

agent identity

prompt-injection defenses

tool verification

agent observability

AI BOMs

action approval systems


NVIDIA's current OpenShell project is described as a private, secure runtime for autonomous AI agents. 

GitLab currently has agentic-security-demos, covering authority confinement, verification, AIBOMs, prompt injection and agent security testing. 

Another project, Proofward, is explicitly building evidence-first tools for bounded agent decisions, resumable runs, cross-agent handoffs and reviewable releases. 


---

10. "AI agent observability"

A new version of Datadog/New Relic is emerging for agents.

Instead of:

HTTP request
 ↓
service
 ↓
database

you need to observe:

user goal
 ↓
agent
 ↓
reasoning/planning
 ↓
tool call
 ↓
model call
 ↓
tool result
 ↓
retry
 ↓
another agent
 ↓
human approval
 ↓
final action

Builders are therefore creating:

traces

agent execution graphs

token/cost monitoring

tool-call monitoring

evaluation

replay

debugging

trajectory analysis

agent benchmarking


Output.ai, for example, was presented on Hacker News as an open-source framework extracted from work with hundreds of production AI agents. Its creators specifically described problems involving prompt iteration, API orchestration, costs, nondeterministic testing and production datasets. 


---

11. AI agent testing

This is another category I would watch closely.

Traditional:

input → function → expected output

Agent:

goal
 ↓
unknown sequence of actions
 ↓
unknown tool calls
 ↓
unknown intermediate state
 ↓
final outcome

Therefore developers are building:

agent benchmarks

trajectory evaluators

tool-use testing

synthetic tasks

adversarial tests

regression testing

autonomous QA

"did the agent actually accomplish the goal?" systems


GitLab currently has jig, for example, which tests how an LLM-driven agent uses a tool's CLI and scores its behavior. 

There are also projects supervising agents with independent auditors after each long-running task. 


---

12. AI-native Git

This is particularly relevant to your Software Factory idea.

The old model is:

Git
 ↓
human commits
 ↓
human PR
 ↓
human review

The new model is potentially:

Agent creates change
        ↓
checkpoint
        ↓
agent explanation
        ↓
automated verification
        ↓
second agent review
        ↓
human approval
        ↓
merge

That's why products/projects around agent checkpoints, context transfer, agent-generated branches and AI-aware code review are appearing.

Entire, founded by former GitHub CEO Thomas Dohmke, is explicitly targeting the problem of software teams managing fleets of AI coding agents rather than individual human programmers. 

That's a major signal.


---

13. AI-native IDEs are becoming orchestration environments

The IDE isn't merely:

> code editor + autocomplete



anymore.

It's increasingly:

Editor
 ├── agent
 ├── terminal
 ├── browser
 ├── Git
 ├── MCP
 ├── skills
 ├── memory
 ├── multiple models
 ├── background agents
 └── review

Current Product Hunt launches reflect this shift toward repo-wide automation, orchestration, shared context, remote execution, monitoring and human approvals rather than simple autocomplete. 


---

14. "AI team" products

This is one of the more interesting SaaS directions.

Instead of:

> "Here is an AI assistant."



developers are building:

> "Here is your AI engineering team."



For example:

Manager Agent
                         │
       ┌─────────────────┼─────────────────┐
       ↓                 ↓                 ↓
   Architect          Developer          QA
       ↓                 ↓                 ↓
       └─────────────────┼─────────────────┘
                         ↓
                      Reviewer
                         ↓
                      Release

Projects like Agent-Native are explicitly exploring agent teams and specialist agents operating in shared workspaces. Its examples include agents for meetings, design, slides, analytics, calendars, mail, assets, content and planning. 


---

15. AI-native applications rather than AI features

This distinction matters.

Old SaaS:

> CRM + AI button



New SaaS:

> The AI itself performs the workflow.



The awesome-ai-native ecosystem explicitly categorizes products where the LLM is the product rather than an add-on. Its developer-tool category includes agent frameworks, MCP integrations, memory, vector search and evaluation/observability. 

Product Hunt's current AI-agent landscape similarly spans engineering, data science, sales, operations, design, voice and domain-specific copilots. 


---

16. Extremely narrow agents

This is something Reddit/Indie Hackers discussions make particularly visible.

People aren't necessarily trying to build:

> "AGI for everything."



They're building:

> "An agent that does this one annoying job."



For example, recent builder discussions include:

AI SaaS generators

marketing agents

security tooling

developer productivity

lead generation

specialized workflow automation. 


An Indie Hackers discussion from April makes essentially the same observation: builders are moving toward narrow agents tied to specific workflows, integrations and reliable execution rather than generic chatbots. 

This is probably one of the most important lessons from the indie-builder side.


---

17. "AI SaaS builder builds the SaaS"

This is another major meta-category.

Instead of:

Idea
 ↓
developer
 ↓
weeks of development
 ↓
SaaS

people are building:

Idea
 ↓
AI
 ↓
application
 ↓
database
 ↓
auth
 ↓
deployment

One recent Reddit builder describes Episolo as going from one prompt to a deployed application with authentication, database, AI layer and deployment already wired together. 

Product Hunt's current landscape likewise describes the prompt-to-app category around generation, visual editing, GitHub synchronization and deployment. 


---

18. Agent-native media generation

A particularly interesting newer direction is that agents aren't just generating text/code.

They're orchestrating:

images

presentations

video

audio

UI

3D

websites


GitHub's current trending page includes Hyperframes, which describes itself as:

> Write HTML. Render video. Built for agents.



That's a fascinating example of turning a traditionally visual workflow into something an agent can operate programmatically. 


---

19. Agent APIs / "everything is a tool"

This is perhaps the most important infrastructure shift.

Imagine a SaaS company exposing:

/search
/create
/analyze
/publish
/deploy
/approve
/delete

for humans.

The new version is:

Agent
 ↓
tool/API
 ↓
business capability

And then developers create marketplaces/catalogs of these capabilities.

GitLab currently contains projects combining MCP servers, APIs, A2A cards and agent-tool catalogs. 


---

20. Agents are becoming economic actors

This is much more experimental, but worth watching.

Some current projects are experimenting with:

x402

machine payments

paid APIs

agent wallets

verifiable execution receipts

agent-to-agent commerce

tool marketplaces


For example, the current GitLab ecosystem includes a project combining MCP servers, x402 and a paid API gateway aimed explicitly at an agent economy. 

This could become important if agents start independently choosing and paying for services.


---

21. Local-first/private agents

There's also a countertrend to cloud AI.

Developers are building agents that run:

locally

on a laptop

on a home server

on a VPS

on Raspberry Pi

in private enterprise infrastructure


GitLab currently has projects explicitly describing local-first, hardware-controlled AI runtimes, including Yana AI and Relagent. 

Pi's ecosystem is also explicitly oriented around running the agent locally. 

This is being driven by:

privacy + cost + control + latency + independence from one provider.


---

22. Model routers

Rather than choosing one model, developers are building:

┌── Claude
                    │
Request → Router ───┼── GPT
                    │
                    ├── Gemini
                    │
                    ├── Qwen
                    │
                    └── local model

GitLab currently has pi-classifier-router, which uses classification to choose among models with circuit breaking and fallback chains. 

This is another sign that the "model" is becoming an interchangeable infrastructure component.


---

23. AI SRE / autonomous operations

There's a particularly interesting category emerging around:

monitor
 ↓
detect
 ↓
diagnose
 ↓
fix
 ↓
test
 ↓
deploy
 ↓
verify

GitLab currently has an AI SRE agent project called Korvus. 

That points toward autonomous DevOps/SRE rather than simply AI-assisted coding.


---

24. Domain-specific agents are exploding

The interesting thing isn't just "AI agents."

It's:

AI agent + weirdly specific domain.

Examples currently appearing include:

IKEA kitchen planning

sewing-pattern generation

climate/weather

smart homes

cybersecurity

GitLab CI

Terraform

blogging

analytics

presentations

calendars

email

content operations

software engineering


GitLab's current agent listings provide a particularly good snapshot of this fragmentation. 

This is where I think the number of projects is going to explode.


---

25. Hackathons are revealing where developers are experimenting

This isn't just GitHub hobby activity.

The Google Cloud Rapid Agent Hackathon brought together Google Cloud and partners including Arize, Elastic, Dynatrace, GitLab, MongoDB and Fivetran specifically around functional agents using MCP integrations. 

The Multiagents Hackathon in London is explicitly focused on multi-agent systems. 

And Google's large All Things Agentic Hackathon was designed around agents that operate asynchronously in the background and handle complex workflows and large datasets. 

That's significant because hackathon themes often reveal what developers are experimenting with before commercial products mature.


---

The pattern underneath all of this

If I compress the entire research into one diagram, this is what I'm seeing:

AI MODELS
                             │
              ┌──────────────┼──────────────┐
              │              │              │
           Claude           GPT          Gemini
              │              │              │
              └──────────────┼──────────────┘
                             │
                       MODEL ROUTING
                             │
                      AGENT HARNESS
                             │
       ┌──────────┬──────────┼─────────┬──────────┐
       │          │          │         │          │
    Memory     Skills     Context    Tools     Planning
       │          │          │         │          │
       └──────────┴──────────┼─────────┴──────────┘
                             │
                     AGENT ORCHESTRATION
                             │
          ┌──────────────────┼──────────────────┐
          │                  │                  │
       Agent A            Agent B            Agent C
          │                  │                  │
          └──────────────────┼──────────────────┘
                             │
                    EXECUTION RUNTIME
                             │
       ┌──────────┬──────────┼──────────┬──────────┐
       │          │          │          │          │
     Shell      Browser     Git       APIs       IoT
       │          │          │          │          │
       └──────────┴──────────┼──────────┴──────────┘
                             │
                       VERIFICATION
                             │
              ┌──────────────┼──────────────┐
              │              │              │
           Testing       Security      Observability
              │              │              │
              └──────────────┼──────────────┘
                             │
                         HUMAN
                       APPROVAL
                             │
                             ▼
                          ACTION

That is a much bigger opportunity surface than "build an AI SaaS."


---

And there is a particularly interesting meta-trend

The community is increasingly building tools for people who build tools for agents.

For example:

Level 1

AI agent.

↓

Level 2

Agent framework.

↓

Level 3

Agent memory / skills / context / orchestration.

↓

Level 4

Agent testing / security / observability.

↓

Level 5

Platforms for building all of the above.

That recursive stack is where I would spend a lot of research time.


---

What I would investigate next

Given what you've previously been exploring around a Software Factory, I wouldn't stop at the obvious projects.

I'd conduct a much deeper scan across roughly 15–20 categories, including:

1. AI software factories


2. autonomous coding agents


3. agent harnesses


4. agent skills


5. MCP ecosystems


6. A2A ecosystems


7. agent memory


8. context engineering


9. agent orchestration


10. multi-agent teams


11. agent security


12. agent observability


13. agent evaluation/testing


14. AI-native Git


15. autonomous DevOps/SRE


16. prompt-to-SaaS builders


17. browser/computer-use agents


18. local/private AI infrastructure


19. agent marketplaces/economies


20. weird/niche domain-specific agents



And importantly, I'd separate projects into four buckets:

Bucket	What we're looking for

🔥 Exploding	Rapid GitHub stars/users/activity
🧪 Emerging	Small projects showing unusual ideas
💰 Commercializing	Open-source idea becoming SaaS/startup
🧠 Underexplored	Small signals suggesting a potentially important category


That last category is the one I'd focus on if the goal is finding things to build, rather than simply discovering what's already popular.

The initial scan is already showing some unusually early signals—for example GitLab projects with only 0–6 stars that are nevertheless building agent execution kernels, persistent memory, specification graphs, agent governance, agent security, A2A/MCP infrastructure and autonomous execution. 

**That is much more interesting than another list of 100 famous AI repos.**