Komputeks becomes an event-driven, multi-agent developer launch platform — not a template store — where visitors discover, buy, and provision working apps into their own GitHub / Vercel / Netlify / Cloudflare / Supabase accounts, then edit them by chatting with AI.

Here is a practical, free-tier-first architecture plan.

1. Free-tier reality check

Frontend / API = Vercel (Next.js 16) Serverless timeout ~10s (Hobby). Streaming responses can run longer because the connection is kept alive, but a single Serverless Function invocation must complete within the limit.

Database /  Storage  / Vector = SupabasePostgres + pgvector + Auth + Storage + Realtime + Edge Functions. Free tier is generous for an MVP.

Long-running / heavy compute = GitHub Actions has 2,000 min/month on private repos; public repos get more. This is the “unlimited worker” for builds, AI code generation, multi-step provisioning, Python scripts, Docker, etc.

Scheduled tasks use a mix of GitHub Actions schedule + Railway Cron + Supabase Edge Functions: Railway cron/Supabase Edge/Vercel edge/ for lightweight polling, GitHub Actions for heavy scheduled agent runs.

AI inference = User brings own keys OpenAI Custom, Anthropic, Groq, Gemini, OpenRouter, Ollama, DeepSeek, etc. Fallback to sitewide AI inference from a provider set by admin or in Komputeks-home vercel env vars

Hosting of provisioned apps = User’s own Github repo is auto created, then connected to their Vercel / Netlify / Cloudflare and Supabase via OAuth to Komputeks-home.vercel.app, OR a user can just add tge platforms PAT token.

Code execution sandbox = GitHub Actions runners OR browser WASM, For user-provided code, run in ephemeral GitHub Actions or sandboxed WASM in the browser. Never eval() on Vercel.

Core principle: Never keep a worker alive. The Postgres database is the state machine. Every agent step is a row. Work is chunked into units that fit inside Supabase Edge Functions or Vercel Serverless timeouts; anything heavier is delegated to a GitHub Actions workflow run.


2. Recommended architecture
User (Browser / CLI / SDK / Telegram / MCP)
        ↓
Next.js 16 App (Vercel)
        ↓
Server Actions / API Routes / Edge Routes
        ↓
Supabase Postgres (state machine + memory + RAG)
        ↓
Supabase Edge Functions (lightweight tools, webhooks)
        ↓
GitHub Actions (heavy/long-running tasks, provisioning, code gen)
        ↓
External APIs (OpenAI, GitHub, Vercel, Netlify, Cloudflare, Stripe, Lipia, etc.)
Everything is event-driven:
A request creates a task or run row with status queued.
A lightweight executor picks it up, runs one or more steps, updates the row.
If a step is too heavy or long, it triggers a GitHub Actions workflow and returns immediately.
The workflow reports progress back to Supabase via API calls.
Supabase Realtime pushes updates to the frontend.
3. Multi-agent orchestration on free tiers
Don’t run a persistent orchestrator. Use the database as the coordinator.

Agent primitives
// agents table
id, org_id, name, system_prompt, model, tools[], memory_strategy, created_at

// agent_runs table
id, agent_id, status, input, output, current_step, context, created_at, updated_at

// agent_steps table
run_id, step_number, role, content, tool_calls, tool_results, state, tokens, latency_ms
Custom orchestration (no CrewAI dependency)
Build a small Agent Runner that:

Loads the agent’s system prompt + tool schemas.
Calls the user’s LLM with the current context.
Parses the response for tool calls.
Executes each tool via the Tool Registry.
Saves the result as a new agent_steps row.
Loops until the agent returns final_answer or a max-step limit is hit.
Because each loop is a discrete function invocation, you can:

Run it in a Vercel Server Action for quick chat responses.
Run it in a GitHub Actions workflow for long research/code tasks.
Pause/resume by reading the latest agent_steps row.
Multi-agent patterns
Pattern	Implementation
Manager → Workers	One agent run creates child agent_runs rows. A GitHub Actions workflow processes children in parallel and aggregates results.
Sequential pipeline	Each agent’s output is the next agent’s input, stored as rows. A scheduler advances the pipeline.
Debate / review	Two agent runs produce competing outputs; a third agent run evaluates and picks a winner.
Human-in-the-loop	Status pauses at awaiting_human. User approves via UI; next step continues.
4. The three interaction modes
A. Simple chat with RAG
Frontend: AI SDK streaming UI (useChat).
Memory: Every message saved to chat_messages.
RAG: User uploads documents → chunked → embeddings stored in documents + document_chunks with pgvector.
Retrieval: Before each LLM call, search relevant chunks and inject into context.
Tools: Chat can call tools (web search, read file, query DB) through the Tool Registry.
B. Background tasks
User submits a task (e.g., “Generate a landing page for Joe’s Pizza”).
You create a tasks row with status queued.
A GitHub Actions workflow is triggered via workflow_dispatch.
The workflow runs the agent loop, writes outputs to Storage/Postgres, and updates status to completed.
Frontend watches Supabase Realtime for progress.
C. Autonomous / scheduled mode
User configures an agent to run on a schedule.
Store in scheduled_jobs table: cron, agent_id, input_template, status.
A GitHub Actions scheduled workflow runs every 5–15 minutes.
It queries scheduled_jobs, enqueues due jobs, and executes them.
Results are stored; notifications sent via email/Telegram/Slack.
5. Agent tools: the Tool Registry
Build a single registry so every agent uses the same tools.

// tools table
id, name, description, schema, executor_type, config, is_public
Built-in tools:

Built-in tools:

Tool	Executor	Notes
web_search	Edge Function or API route	Use Serper, Tavily, or DuckDuckGo free tier.
http_request	Edge Function	Validate URL, timeout, rate limit.
db_query	Server Action (read-only by default)	Run against user’s Supabase project, never raw SQL injection.
file_read / file_write	Supabase Storage	Scoped to org.
github_create_repo	GitHub API	Uses user’s OAuth token.
vercel_deploy / netlify_deploy / cloudflare_deploy	Provider APIs	Adapter pattern.
code_generate	GitHub Actions workflow	Writes code to a temporary branch/repo.
code_review	GitHub Actions workflow	Runs lint/tests via the template’s own scripts.
send_email	Resend API	User brings Resend key.
payment_lipia	Lipia Online API	For M-Pesa.
stripe_*	Stripe API	User connects Stripe.
Security:

Every tool execution is logged in tool_executions.
Tools can be scoped per org/role.
Code execution only happens in GitHub Actions, never on Vercel.
6. From “View Source Code” → “Deploy in minutes”
This is the biggest product shift. The button becomes a provisioning wizard.

Customer flow
Discover → project page.
Buy → payment verified.
Connect accounts → GitHub, Vercel/Netlify/Cloudflare, Supabase, AI provider.
Customize → business name, color, logo, contact info.
Deploy → progress bar streams via Realtime.
Live → customer gets joes-pizza.vercel.app.
Edit later → chat with AI to modify their provisioned repo.
Backend: the Provisioning Engine
Use a directed acyclic graph (DAG) of nodes.

# komputeks.yaml inside each template
project: ai-restaurant
framework: nextjs
hosting: [vercel, netlify, cloudflare]
required:
  - github
  - github
  - supabase
  - openai
customization:
  - app_name
  - primary_color
  - logo
  - contact_email
  - phone
env:
  - OPENAI_API_KEY
  - NEXT_PUBLIC_SUPABASE_URL
  - NEXT_PUBLIC_SUPABASE_ANON_KEY
  - SUPABASE_SERVICE_ROLE_KEY
  - RESEND_API_KEY
Nodes example:

payment_complete
    ├── create_github_repo → outputs repoUrl, repoId
    ├── create_supabase_project → outputs dbUrl, anonKey, serviceKey
    ├── generate_branding → outputs logo.png, favicon.ico, hero.md
    └── generate_legal_pages → outputs privacy.md, terms.md
              ↓
    configure_environment_variables
              ↓
    deploy_to_provider
              ↓
    create_initial_release
Each node is a row in provision_runs / provision_steps. Dependencies are explicit. Parallel nodes run together.
Connectors (adapters)
/connectors
  github.ts
  gitlab.ts
  bitbucket.ts
  vercel.ts
  netlify.ts
  cloudflare.ts
  supabase.ts
  neon.ts
  stripe.ts
  lipia.ts
Each connector exposes:

authURL() → OAuth initiation.
handleCallback(code) → store token.
createProject(opts) / createRepo(opts) /
deploy(opts).
Store user tokens encrypted in your Supabase with RLS. Never expose them client-side.

7. GitHub Actions as the unlimited worker
For anything that exceeds serverless limits:

Use case	GitHub Actions workflow
Multi-step code generation	.github/workflows/agent-codegen.yml
Template provisioning	.github/workflows/provision.yml
Long-running research agent	.github/workflows/research-agent.yml
Site auto-optimization	.github/workflows/site-optimizer.yml
Code execution sandbox	.github/workflows/sandbox.yml
Database migrations	.github/workflows/migrate.yml
Workflow receives inputs via workflow_dispatch, reports progress by POSTing to your /api/progress endpoint, and writes final artifacts to Supabase Storage or the user’s repo.

8. Supabase schema essentials
-- Organizations & users
organizations, members, roles

-- AI
agents, agent_runs, agent_steps, chat_threads, chat_messages

-- Memory / RAG
documents, document_chunks (with vector column)

-- Tools
tools, tool_executions

-- Workflows
workflows, workflow_nodes, workflow_edges, workflow_runs, workflow_logs

-- Scheduling
scheduled_jobs, job_runs

-- Provisioning
projects, templates, provision_runs, provision_steps, connectors, user_connections

-- Marketplace
marketplace_items, marketplace_versions, marketplace_reviews

-- Events (event bus)
events, event_handlers, event_deliveries
Enable RLS on everything. Public read only for marketplace content.

9. Suggested build phases
Don’t build it all at once. Each phase is a shippable milestone.

Phase 1 — Foundation
NextAuth (email, Google, GitHub OAuth).
Org/member model.
Connectors framework with GitHub + Vercel OAuth.
Basic “Deploy in minutes” for one template.
Phase 2 — AI Chat
Persistent chat threads.
Streaming via AI SDK.
User brings own LLM keys.
Basic tool calling (web search, file read).
Phase 3 — Provisioning Graph
DAG executor.
Parallel node execution.
Supabase auto-provisioning connector.
Progress streaming via Realtime.
Phase 4 — RAG & Memory
Document uploads.
pgvector chunks.
Long-term memory for agents.
Phase 5 — Workflows & Agents
Visual workflow builder (React Flow).
Agent templates built on workflows.
Tool registry expanded.
Phase 6 — Scheduler & Autonomy
GitHub Actions scheduled workflows.
Autonomous agent mode.
Background tasks UI.
Phase 7 — Platform interfaces
Public REST API.
TypeScript SDK.
CLI.
MCP server.
Telegram/SMS bots.
10. Free-tier guardrails
No long-running Vercel functions. Chunk everything.
No customer apps on your infra. They deploy to their own accounts.
No paid AI inference. Users bring keys; you only orchestrate.
No persistent workers. Use GitHub Actions + Postgres state machine.
No raw eval/code execution on Vercel. Isolate to GitHub Actions.
Cache aggressively. Vector embeddings, search results, provider metadata.
Use public GitHub repos for Actions-heavy templates if you hit private-repo minute limits.
11. The “Source Code” button plan (concrete)
Replace the current project detail CTA with this:

// In src/app/projects/[slug]/page.tsx
// Replace the repo_url/Source Code block with:

<DeployWizard
  projectId={p.id}
  projectSlug={p.slug}
  templateRepo={p.template_repo}   // e.g. "komputeks/k-sheetpress-template"
  framework={p.framework}
  requiredProviders={p.required_providers}
/>
DeployWizard is a client component that:
Checks if user is signed in (NextAuth).
Checks connected accounts (user_connections table).
If missing accounts, opens OAuth flows.
Collects customization inputs + env vars.
Submits to /api/provision which:
Verifies purchase/license.
Creates a provision_runs row.
Triggers a GitHub Actions workflow.
Returns the run ID.
Opens a progress panel listening to Supabase Realtime.
Shows the final live URL.

And finally remember these too:
1. Payment integration (read docs of Lipia Online Mpesa at justpaste.it/lipia-docs)

- Used for Komputeks website so users can buy before deployment
- Also user should add own LIPIA key (during Connector?), if needed by the template deployment

2. AI provider keys for AI customizations 

- Offer both user's BYOK preferred but with fallback to sitewide provided keys in env vars

3. OAuth apps and other keys
If possible, create the required OAuth apps using the PATs I sent (or ask for them and show instructions on how to create them)
- add option for user to enter their own PAT, if they don't want to use OAuth
- or ask me to create the OAuth and show them to you e.g GitLab OAuth, Supabase OAuth etc. These are needed for user to Authenticate with the external platforms. Auth token should be stored per user so that subsequent deployment or edits will be automatic. In user dashboard, create a tab show all these connectors and options to Connect (Or use PAT) and disconnect. eg Hosting | Github/Gitlab/BitBucket | Connect/Disconnect/Use PAT (masked PAT form)



Proposed Build Plan — Komputeks Agentic AI (MVP)

1. Foundation & Repo

Create a new repo komputeks-agentic (or extend komputeks if you prefer) on your GitHub account.

Next.js 16 App Router, TypeScript strict, Tailwind v4, Supabase client/server/admin setup.

Validate all env vars with Zod.

2. Database Schema (Supabase)

agentic_users / orgs / members (RLS-isolated).

agentic_llm_keys — encrypted per-user API keys (BYOK).

agentic_agents — agent definitions (name, system prompt, model, tools, max steps).

agentic_workflows — node/edge graphs stored as JSONB.

agentic_threads / agentic_messages — chat history.

agentic_steps — chunked agent execution steps (state machine: queued → thinking → tool_call → complete/error).

agentic_tasks — background / scheduled tasks.

agentic_knowledge — documents + pgvector embeddings for RAG.

agentic_tool_calls — audit log of every tool execution.

agentic_integrations — OAuth tokens / PATs for GitHub, Vercel, etc.

3. Custom AI SDK (no Vercel AI SDK)

Thin client wrappers for OpenAI, Anthropic, Groq, Gemini, OpenRouter, Ollama, DeepSeek, Mistral.

Unified streamCompletion() that returns a ReadableStream of SSE chunks.

Token usage tracking per call.

4. Tool Registry Built-in tools:

web_search

api_call / HTTP connector

database_query (read-only against Supabase)

file_read, file_write, file_list

code_execute → triggers GitHub Actions workflow for sandboxed execution

github_action_trigger → dispatch long-running workflows

memory_search → pgvector RAG

5. Multi-Agent Orchestration

ReAct-style loop but chunked: each step is a DB row.

Supervisor agent can delegate to specialist agents.

Workflow engine interprets node/edge graphs.

Step execution inside Supabase Edge Functions (fits timeout) or short Next.js API routes.

For steps that exceed timeout, persist state and trigger GitHub Actions to resume.

6. Frontend

/agentic dashboard.

Chat UI with streaming, tool-call visualization, step inspector.

Agent builder (prompt, model, tools).

Workflow visual builder (nodes/edges).

Knowledge base upload + RAG settings.

Background tasks list with realtime status.

User settings: add/manage LLM keys and OAuth connections.

7. Background & Scheduled Modes

GitHub Actions workflow that polls Supabase for queued / resumable tasks.

Scheduled cron workflows for autonomous agents.

Realtime updates back to UI via NextJS events stream polling NOT Supabase Realtime.

8. Auth

NextAuth with credentials + Google + GitHub.

Role-based access (admin/user).

Organization-scoped data.

9. Deployment

Build green locally, then deploy to Vercel komputeks-home project.

Seed realistic demo agents, workflows, and knowledge docs.

Push to GitHub and verify Vercel auto-deploy.

10. Docs & Changelog
Update /docs/changelog with architecture decisions.

Add setup instructions and env checklist.

FOLLOW THE RULES: https://github.com/komputeks/prompts/raw/refs/heads/main/da-rules.md

Decision before you start:

THIS MUST BE ADDED INTO THE EXISTING KOMPUTEKS repo.

