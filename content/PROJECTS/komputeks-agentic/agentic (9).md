
# KOMPUTEKS Home
- URL: https://komputeks-home.vercel.app
- GitHub repo: https://github.com/komputeks/komputeks
- Skills/Rules: https://github.com/komputeks/prompts/raw/refs/heads/main/da-rules.md
- Copywriting: https://github.com/komputeks/prompts/raw/refs/heads/main/Copywriting/Billionaire-Writes.md

## The Source Code button in Project's details page

- Make Komputeks become an agentic AI developer launch platform that provisions (and edits with AI) complete applications into the customer's own ecosystem with a single click, like n8n but focused on software provisioning instead of general automation.

- Value proposition changes from "here's some code" to "here's a working application in your own infrastructure." Competition is on how fast a customer reaches production and can make edits by chatting with an AI.

- Komputeks will copy private repos (projects) from the Komputeks (https://github.com/komputeks) owner GitHub account, customize with AI, and deploy to user's connected accounts.

- Instead of buy zip (or download or view source), signed in user buys the project, deploys and gets back a URL to their complete website (e.g user-project.vercel.app or user-project.netlify.app or user-project.pages.dev)

- Create GitHub/Gitlab/BitBucket repo; Automatic
- Create hosting project; Automatic
- Configure env vars & secrets; Automatic
- First deployment; Automatic

## Komputeks backend infrastructure (free tiers)
- GitHub Actions Workflows (node, python, curl etc)
- Supabase Edge Functions
- Any other services that you deem necessary e.g railway, fly.io, render, vercel cron, in-browser or NextJS events streaming etc

## 
- Visitors visit komputeks-home.vercel.app
- They discover and explore products (projects)
- They buy, then deployment starts.

1. User login with Nextauth (email, Google sign in, Google One Tap Login)

2. A straightforward bring your own cloud, bring your own keys provisioning engine with reusable connectors (adapters):
- User connects accounts (OAuth) or adds PATs and AI API keys e.g Connect GitHub, Vercel, Netlify, Cloudflare Pages, Supabase, Neon, Stripe, Lipia Online Mpesa Payments Method etc, then their AI API keys e.g OpenAI, Custom OpenAI, Anthropic, Ollama, Openrouter, Gemini, Groq, Deepseek, Kimi, Mistral, LLMio etc
- 

3. 

## ARCHITECTURE SUGGESTIONS

### Komputeks suggesed additional features:

- Authentication, organizations, and projects.
- AI chat with persistent history and streaming.
- Tool registry and function execution.
- Visual workflow engine (nodes & edges).
- Multi-agent orchestration on top of workflows.
- Scheduler, queues, and background workers.
- OAuth integrations and plugin framework.
- Public API, TypeScript SDK, CLI, and MCP server.
- Marketplace for workflows, agents, integrations, and deployable projects.

---

### Somehow similar tools and platforms
- n8n
- Flowise
- Odysseus
- Google Jules
- ActivePieces
- Coolify
- Postiz

---

### The Provisioning engine
- It may have these examples and more features, in order to understand that:

createRepository

dependsOn:
    payment

createDatabase

dependsOn:
    payment

deploy

dependsOn:

    repository

    database

Now the engine decides execution order.

---

### This unlocks parallel execution

Example.

Payment Complete

Immediately:

Worker 1
↓
Create GitHub Repository

At the same time

Worker 2
↓
Create or Get or Activate Supabase Project

At the same time

Worker 3
↓
Generate Branding

Instead of waiting one after another.

---

Then AI nodes

Generate Logo
↓
Generate repo README
↓
Generate Privacy Policy
↓
Generate Terms
↓
Generate Landing Page Copy
↓
Generate About Page Copy
↓
Generate Contact Page Copy

These don't depend on GitHub so they run immediately.

---

Every node produces outputs

For example

GitHub Repository
↓
repositoryUrl
repositoryId

Supabase
↓
databaseUrl
anonKey
serviceKey

AI
↓
logo.png
favicon.ico
hero.ts

The next nodes consume those outputs.

---

### Environment variables should be automatic

Suppose deployment needs

SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY

The deploy node doesn't ask the customer.

It already exists.

Because

Create or fetch or activate user's Supabase 
↓
returned
↓
SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY

The engine passes it automatically.

---

### Visual Workflow Builder (using React flow?)

Exposes visually so users can build a project like this.

Buy Project
↓
GitHub (or GitLab or BitBucket)
↓
Repository
↓
connect to
↓
Vercel
↓
connect to
↓
OpenAI
↓
connect to
↓
Supabase
↓
Almost like n8n, but focused on software provisioning instead of general automation.



