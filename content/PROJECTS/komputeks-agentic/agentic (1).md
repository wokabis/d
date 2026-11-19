
# Add these
---
PART A: Read;
(i) Rules: https://github.com/komputeks/prompts/raw/refs/heads/main/da-rules.md

(ii) For copywriting, merge with these 
- all pages in: https://komputeks-home.vercel.app
- all files in: https://github.com/komputeks/prompts/tree/90c5622e0bd1bd558bdf02ab7e2c4d83202356e6/copywriting/Komputeks%20brand/*
- this book: https://github.com/komputeks/prompts/raw/refs/heads/main/books/Billionaire%20Copywriting/Billionaire-Writes.md

PART B: Add these features;
1. Blog & blog details page (pagination, paginated search and categories, prev/next navigation with titles, related)
2. Services & service details page (pagination, paginated search and categories, prev/next navigation with titles, related)
3. Search Page (search icon on topnav for full site search, and for each projects, services and blog)
4. Product (existing products/projects) & product details page (pagination, paginated search and category filters, prev/next navigation with titles, related section)
5. Permalinks should be base/{post-type}/{category}/{post}. E.g komputeks/services/ai/ai-integration or komputeks/products/data/sheetsync
6. Use NextAuth to add Sign in, Sign Out, Password Reset, Google Auth, Google One Tap Login

6. AI Agents integration
- infrastructure: GitHub actions workflows etc

- Admin to set the AI providers e.g OpenAI, Custom OpenAI, Groq, Ollama Cloud, Gemini, Claude, Custom Anthropic Compatible

- for internal use: auto-runs multiple times daily optimizing the site code based on real world signals collected from multiple sources (e.g on website, Supabase, Google search, Google my Business, Google Trends, Custom Sources etc) like traffic & seo, site errors, growth recommendations, visitors interactions, user buying habits, carts, Google search, Google my Business, knowledge panel etc

- fallback for users without own keys

- MCP


8. Payments integration
9. Authentication & authorization
10. In product details page, replace "View Source Code" with "Deploy in minutes"
- 

- Free-tier friendly, live and working, real world production-ready applications, delivered instantly into your own GitHub and cloud hosting accounts and with AI customizations.

         Discover → Buy → Deploy → Update

                     │
     ┌───────────────┼────────────────┐
     │               │                │
     ▼               ▼                ▼
 GitHub         Vercel          Cloudflare
   OAuth          OAuth             OAuth
     │               │                │
     └───────────────┼────────────────┘
                     │
             Deployment Engine
                     │
        Private Template Storage

The first time a customer logs in, or if customer clicks "Buy & Deploy in minutes"

Instead of asking them to deploy immediately, ask them to connect the services they use.

Connected Accounts

✅ GitHub

❌ Vercel

❌ Netlify

❌ Cloudflare

This only happens once.

Komputeks Supabase stores user details like: 

github_access_token
github_refresh_token
vercel_access_token
netlify_access_token
cloudflare_access_token

(for the providers they choose to add on their account dashboard)

---

Now user buying a project, and click "Buy & Deploy in minutes"

After payment:

Choose deployment

○ GitHub pages

○ Vercel

○ Netlify

○ Cloudflare

---

GitHub flow

Instead of giving access to my private GitHub repositories...

The backend does this automatically.

Private GitHub template

↓

Download

↓

Modify with AI

↓

Create NEW repository

↓

Push commits

↓

Done

Now the customer owns

github.com/customer's-github-username/K-SheetPress

They never see the original repository.

---

Then Vercel or Netlify or Cloudflare 

Customer

↓

Connect

↓

Select repository

↓

Deploy

or...

Your backend can do it automatically.

GitHub

↓

Create repo

↓

Push

↓

Vercel API

↓

Import repository

↓

Deploy

The customer just watches a progress bar.


---

Even better...

You can completely automate GitHub.

Buy

↓

GitHub OAuth

↓

Create repo

↓

Commit files

↓

Enable Issues

↓

Create README

↓

Push

↓

Done


---

Then deploy

If they connected Vercel

Repository

↓

Import

↓

Environment variables

↓

Deploy

↓

Done


---

Cloudflare

Exactly the same.

Repository

↓

Pages Project

↓

Connect repository

↓

Deploy


---

Netlify

Again

Repository

↓

Create Site

↓

Connect GitHub

↓

Deploy


---

Template should have .env.example

During deployment Komputeks website asks

AI API Key (e.g Custom OpenAI, Claude, Ollama etc)

Payments Key

Supabase URL

Supabase Key

Google OAuth

Resend API

Etc

The backend injects these values through each provider's API before the first deployment.

The customer never edits a .env file.

---

Example of AI customization before the repository is created

Business Name: Joe's Pizza

Primary Color: Red

Logo: upload

Contact Email: hello@...

Phone Number: 123 456 7890

The backend does this:

Download my private GitHub template

↓

Replace placeholders

↓

Generate assets

↓

Commit to a user's GitHub into a private repo

↓

Push

↓

Deploy to Vercel, Netlify or Cloudflare 

Every customer gets a personalized repository instead of a generic template.


---

The Komputeks experience becomes:

Browse project

↓

Buy

↓

Connect GitHub

↓

Connect Vercel, Netlify or Cloudflare 

↓

Customize with AI

↓

☕ Making your project...

✓ Creating repository...

✓ Personalizing code...

✓ Pushing commits...

✓ Creating Vercel project...

✓ Configuring environment...

✓ Deploying...

✓ Live!

https://customer-app.vercel.app

From the user's perspective, it feels magical—they don't clone repositories, upload ZIP files, or manually configure hosting.

The technical architecture behind it could be broken into a few reusable services:

Auth Service
├── GitHub OAuth
├── Vercel OAuth
├── Netlify OAuth
└── Cloudflare OAuth

Purchase Service
├── License validation
├── Payment webhooks
└── Entitlements

Template Engine
├── Fetch template
├── Personalize files
├── Generate README
├── Generate LICENSE
└── Inject secrets/placeholders

GitHub Service
├── Create repository
├── Push commits
├── Create releases
└── Configure repository

Deployment Service
├── Vercel adapter
├── Netlify adapter
└── Cloudflare Pages adapter

This modular design also should fit well with the built architecture for Komputeks. Each service has a single responsibility, making it easier to add new deployment providers or template types over time without rewriting the whole system.
