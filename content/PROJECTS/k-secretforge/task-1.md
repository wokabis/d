You are a principal staff engineer and SaaS architect.

Design and implement a complete production-ready SaaS called SecretForge.

The goal is to create an open-source alternative to Infisical focused on solo developers, indie hackers, AI coding agents, GitHub, Vercel, and modern Next.js applications.

Tech Stack Constraints

You MUST use:

- Next.js 16 App Router

- React 19

- TypeScript

- Tailwind CSS

- shadcn/ui

- Supabase

- PostgreSQL

- Auth

- Storage

- Row Level Security


Vercel

GitHub

No Docker

No Redis

No external paid services

Must work entirely on free tiers


Architecture Requirements

Create a true SaaS architecture.

Generate:

Folder structure

Database schema

Supabase SQL migrations

TypeScript types

API routes

Server actions

Security architecture

Encryption architecture

GitHub integration architecture

Vercel integration architecture

CLI architecture

AI agent integration architecture


Do NOT create mock implementations.

Generate real production-ready code.


---

Product Overview

SecretForge is a centralized secret management platform.

Users can:

Create projects

Store secrets

Encrypt secrets

Import .env files

Export .env files

Sync secrets to GitHub

Sync secrets to Vercel

Access secrets through APIs

Use secrets with AI coding agents



---

Development Roadmap

Implement the system in phases.


---

V1

Projects

Users can create projects.

Project fields:

id

name

slug

description

owner_id

created_at

updated_at



---

Secrets

Users can create secrets.

Fields:

id

project_id

key

encrypted_value

description

environment

created_at

updated_at


Environments:

development

preview

production



---

Encryption

All secrets must be encrypted before database storage.

Requirements:

AES-256-GCM

Per-project encryption keys

Master encryption key stored in environment variables

Random IV generation

Authentication tags


Never store plaintext secrets.

Provide:

encryptSecret()

decryptSecret()


Production-ready TypeScript implementation.


---

Import .env

Users can upload:

.env

Example:

DATABASE_URL=xxx OPENAI_API_KEY=xxx

System parses and imports automatically.

Handle:

comments

empty lines

multiline values

duplicate keys



---

Export .env

Generate:

.env

from stored secrets.

Support:

single environment export

full project export



---

GitHub Sync

Users connect GitHub.

Requirements:

GitHub OAuth

Repository selection

Repository secret synchronization


Support:

Create secrets

Update secrets

Delete secrets


Use official GitHub REST API.

Do NOT require GitHub CLI.

Generate full implementation.


---

Vercel Sync

Users connect Vercel.

Requirements:

Vercel OAuth

Project selection

Environment variable synchronization


Support:

development

preview

production


Generate full implementation.


---

API Access

Provide REST API.

Endpoints:

GET /api/projects

POST /api/projects

GET /api/projects/:id/secrets

POST /api/projects/:id/secrets

PATCH /api/projects/:id/secrets/:secretId

DELETE /api/projects/:id/secrets/:secretId

Generate:

request validation

rate limiting strategy

authentication

authorization



---

V2

Teams

Support:

Team owners

Admins

Members


Create:

database schema

invitations

permissions



---

Secret Versioning

Every secret update creates a new version.

Store:

old value

new value

timestamp

actor


Provide rollback functionality.


---

Audit Logs

Track:

secret created

secret updated

secret deleted

export performed

GitHub sync

Vercel sync


Create searchable audit UI.


---

V3

CLI

Create SecretForge CLI.

Commands:

secretforge login

secretforge projects list

secretforge secrets list

secretforge secrets get

secretforge secrets set

secretforge import .env

secretforge export .env

secretforge sync github

secretforge sync vercel

Generate:

CLI architecture

package structure

authentication flow


Must work in:

Linux

macOS

Windows

Termux



---

AI Agent Integrations

Support:

Claude Code

GitHub Copilot Coding Agent

OpenAI Codex

OpenHands

Roo Code

Cline


Generate:

API endpoints

authentication methods

environment injection patterns

example integrations



---

Secret Rotation

Create rotation framework.

Support:

manual rotation

scheduled rotation


Design for future providers:

OpenAI

Anthropic

Supabase

GitHub

Vercel



---

V4

Ephemeral Credentials

Generate temporary secrets.

Examples:

temporary API keys

temporary environment variables


Configurable expiration:

1 minute

15 minutes

1 hour

24 hours



---

Vault-Style Dynamic Secrets

Design architecture for:

dynamic database credentials

temporary access tokens

lease management


Include:

issuance

renewal

revocation



---

SaaS Requirements

Create:

Landing page

Dashboard

Project pages

Secret management UI

Team management UI

Audit log UI

Settings UI


Use:

shadcn/ui

Server Components

Server Actions



---

Security Requirements

Must include:

Row Level Security policies

CSRF protection

XSS protection

Rate limiting architecture

Encryption key management

Secure API token generation

Secret masking

Secret reveal permissions

Audit trails


Generate complete SQL policies.


---

Deliverables

Output in this order:

1. System architecture


2. Database schema


3. Supabase migrations


4. RLS policies


5. Folder structure


6. Type definitions


7. Encryption implementation


8. API architecture


9. GitHub integration


10. Vercel integration


11. CLI architecture


12. AI agent architecture


13. Security review


14. Scaling strategy


15. Development roadmap


16. Complete implementation plan



For every design decision explain:

Why it was chosen

Alternatives considered

Tradeoffs

Free-tier limitations

Future scaling path


Act as a principal engineer building a venture-backed SaaS that must start on free tiers but scale to tens of thousands of users. Do not simplify the architecture. Use modern 2026 best practices.