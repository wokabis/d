## 1.  CHATBOT/AI/LLM/AGENT
- inspired by AMC-CHAT, Odysseus, Google jules, Google Stitch

- per user memory, persistent chat, streaming is true, button to create new chat, conversations list
- dropdown select on top for adding LLM providers and selecting the models to chat with. 
- cached, compressed, saved to supabase
- rag, pgvector, graph etc

### Model Capability Registry + Task Router

(a) LLMs & providers
(i) User adds LLM provider display name, defaultModel, AI API key, endpoint url & rate limit
- on save; models auto fetch & populate a dropdown, where user selects a model to start chatting.
- for every model called; Store in user's Supabase whether it's working/not working - in frontend add ❌ prefix to models returning false (fails or limits reached), add ✅ prefix model returns true (is working).
 
- Also per user's LLMs, capture, save to Supabase, display returned LLM metadata; always re-calculate average latency, tool calls, input+output+total tokens, max context size, thinking/reasoning, modalities etc

(iii) adjustable parameters per user's selected model; 
- working✅/not working ❌ 
- system instructions (first one is system default, then user can add their own)
- temperature
- modalities (input/output of text, image (vision), audio, video, embeddings, others etc)
- tool/functions call abilities, json output etc
- rate limit; TPS, TPM, TPD, RPS, RPM, RPD, neurons per day etc (multiple options can exist per LLM provider or models e.g. 1500 RPD & 40 RPM)
- tokens used (input, output, total, thinking, reasoning, coding etc)
- max context size cap (if available)
- minimum & maximum I/O (if available)

(iv) The Chat interface
- select input modalities (text, image, audio, video, other)
- below sent user prompt, show icons to re-prompt , copy prompt (to clipboard), copy and edit prompt (append to current cursor point in prompt input area), etc
- below returned prompt, show icons to copy, quote in reply, share etc
- create new chat/list previous chats button
- select preset system instructions (or add and save new system instructions per user)
- output modalities (text, image, audio, video, other)
- show input, output, total tokens after each chat call (re-calculate)
- setting to show or hide thinking/reasoning
- selection of agent mode or chat mode
- live suggestions (which should sends as prompt on click)

### Agentic 
- uses tools & functions
- Agent chooses (& re-calculates) correct model, tools or sub-agents, that should be assigned or called depending on the user's prompt/settings/task requirements and available user's LLMs & LLMs providers capabilities.

- Every Agent first determines the most suitable suitable fronteer model depending on prompt/task difficulty, prompt size, tool calls, input/output types, tool & function calling ability, max context size, minimum & maximum input and output, rate limits (tpd, tpm, rps etc), latency, x-headers, tokens, modalities etc

(a) Komputeks Assistant
- AI Agent (with mcp) that knows and reads everything required to assist users do everything on the Komputeks website. Reads visitors journey, session, account info, can use web search tool
- onboards site viditors
- shows live suggestions of what they maybe interested in, based on their particular analytics, interests, preset rules etc

(b) User AI Agent

(d) System AI Agent (Autonomous)
(i) Recursive Self Improvement 
(ii) auto creation and listing of deployable projects in Komputeks GitHub account, Supabase and Vercel
- system admin agent
- site administration work
- ensure everything on the website is working perfectly as expected
- generates reports and suggestions
- then shows it on admin user's admin panel to approve if they should be delegated to other AIs.
- collects user feedback, contact forms
- converts collected data and suggestions and creates a plan for recursive self improvement engine
- delegates/gives/reviews the work appropriate Recursive Self Improvement sub-agents 
- the recursive selft improvement loop
(a) send whole code and usage signals (analytics) to LLMs and ask it to improve the code
(b) the ai should learn, store good & bad memories, and have a loop to checklist if what's done has been implemented then retry, then if the stats say it has worked well for the users keep it, if not try another A/B test.
(c) runs as many times as possible within free limits of GitHub Actions, Codespaces, Vercel/Supabase Edge Functions, Railway/Render Cron etc

### Agent mode execution
Strategies
- user chooses if a task done will be done  live immediately, or in background (default) or is it scheduled, repeated via a GitHub actions Cron?

(i) Agentic deployment to users GitHub repo
- create/edit (if selected) a private repo in user's GitHub account 
- add environment variables eg connect user's Supabase, Vercel etc
- start a codespace in user's connected GitHub account repo
- perform required actions 
- commit back to repo
- iterate user's Vercel deployment build logs of the connected repo, fixing until build succeeds.
- save to Komputeks user's Supabase/Cache etc
- show what happened to user in the chat interface, live

(ii) create GitHub actions workflows with artifacts for output in komputeks repo, then send to user's Supabase
(iii) Use Server Sent Events, Vercel/Supabase Edge Functions for live streaming 
(iv) deployment via Cron (Railway or GitHub Actions)



### 3. User Dashboard
(a) Use Octokit for GitHub Adapter; https://octokit.github.io/rest.js/v22

(b) Account Status; active | deactivated (voluntarily by user)| banned/kicked (by admin or AI if they misbehave e.g bypass usage limits, chat bombing) | deleted (by user)


(i) top part - CTA section
- Profile pic {Username}
- 'Ugrade to Pro' (or 'You got Pro')

(a) if upgraded
- no CTA button, just 'You got Pro' and benefits
(b) if not upgraded
- Show upgrade CTA section
- with upgrade benefits (tick list)
- and button that calls upgrade payment modal via lipia online mpesa payments method.

(ii) Tabs
(a) tab 1; Analytics
- AI router token usage
- current setting of deployment targets
- deployment logs (latest only)

(b) tab 2; My Projects (template name, version, changelog and diff if update available)
(c) tab 3; AI Providers (with test chat)

(d) tab 4; Deployment
- Hosting (repo); OAuth or PAT to connect GitHub, Gitlab, BitBucket 
- Deployment; OAuth or PAT to connect Vercel, Cloudflare, Netlify, GitHub pages
- Database; OAuth or PAT to connect Supabase, Neon

(e) tab 5; Environments
- User can save their env vars for use by AI and agents

(f) tab 6; Edit Profile
- edit profile details, renew password (enter current, then new password twice), delete, 

(g) ETC All other required tabs

- All tabs should be in different pages route, but sharing some layout in order to enable dynamic pre-rendering


### 2. PROJECT DEPLOYMENT
- project deployment is done via GitHub RESTA API or codespaces
- Clone with Agentic AI Edit Mode

(a) Product/Project template should have .env.example

During deployment Komputeks website auto fills (or asks);

AI API Key (e.g Custom OpenAI, Claude, Ollama etc)

Payments Key

Supabase URL

Supabase Key

Google OAuth

Resend API

Etc

The Komputeks backend should injects these values through each provider's API before the first deployment.

The customer never edits a .env file.

---

Example of AI customization before the repository is created

Business Name: Joe's Pizza

Primary Color: Midnight Express

Logo: auto

Contact Email: hello@...

Phone Number: +123 456 7890

The backend does this:

Download my private GitHub template from komputeks GitHub account.

↓

Replace placeholders & inject env vars (GitHub repo env vars & secrets)

↓

Generate assets

↓

Commit to a user's GitHub account into a private repo

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

From the user's perspective, it must feel magial—they don't clone repositories, upload ZIP files, or manually configure hosting.

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

## features of a deployable product (project template)
- must be first created in Komputeks GitHub account repos then copied over from there to user's repo via REST API.

(a) highly customizable like WordPress CMS, theme templates and customizer 
(b) 
- about template, source, licence, version, where to update it etc
- core parts vs customizable parts
- allow user to edit their deployed  template site using Komputeks Agentic AI
- allow Komputeks admin to select & edit any templates on Komputeks GitHub account repos with AI



## 4. OTHER IMPROVEMENTS
(a) Projects
(i) delete all current projects (from listing in Komputeks website but not from komputeks GitHub account), so that we will create new ones tailored to be deployed by this Komputeks.vercel.app AI Agent system.
(ii) Examples we will create;
- simple html, bootstrap css landing page deployed to GitHub pages
- simple NextJS, TailwindCSS landing page deployed to Vercel
- medium NextJS blog, TailwindCSS, Supabase and admin panel deployed to Cloudflare pages
- finally, a NextJS + Supabase ecommerce site deployed to Netlify
(iii) permalink base/product/{category}/{product_slug}
(iv) featured image, related, next prev nav with title, breadcrumbs nav, social sharing buttons
(v) paginated single category page

(b) Services
- featured image, related, next prev navigation, breadcrumbs nav, reviews system, book appointment button, social sharing buttons
- permalink base/services/{category}/{service_slug}
- paginated single category page

(c) Blog
- permalink base/blog/{category}/{blog_title_slug}
- featured image, next prev navigation, breadcrumbs nav, tags, reading time, related
- paginated single category page, paginated single tag page, 

(d) Search results page
- URL should have search params like base/search&q=
- paginated, category fillters, post type filters (product, service, blog posts)

(e) AI Chat Page

(f) AI Agent page 



### more UI UX design
(a) Website Colors exactly like Klane.framer.site
- do not remove the grid pattern in bg
- change the colors only to use these three professionally; 
- Primary font color; #1D1B40 (Midnight Express); 
- Main Menu wrapper & CTAs bg; #93F3AA (Pale green); 
- Header, hero, footer bg; #7335FF (Blue Violet) 
- Complimentary Hero sections: #FB733C (Burnt Orange) to #FD472B (Red orange) gradients
- Body bg; #EAEDF6 (Grey 90%) + #CED1F5 (Lavender Blue) + #F2F0EF + #E7E8EA; 
- #7F5F4A (Dark Wood); Images & Placeholders

(b) testimonials section marquee
- two rows testimonials, top ones scroll to right while bottom ones scroll to left, infinitely.

(c) mobile floating bottom nav
(i) Mobile links
- Home
- Browse
- Chat; larger button, of different color with sweeping effects
- Community
- My Account

(ii) Desktop; Floating bottom nav should be hidden in desktop, where only the floating chat button should be shown on right bottom.

(d) On homepage/landing page, immediately after first hero, Show trust & authority building section e.g. caption like 'you are in good company/award winning/trusted by'. Then show a marquee of client badges scrolling infinitely to the left, of webp images or svg icons of Google, Microsoft, Bing, Duck Duck Go, Claude, ChatGPT, Trust Pilot, Google Reviews, and other tech companies.


### What Komputeks really is (actually)
- Komputeks is a platform for deployment & editing of ready-made and ai generated web apps to users' infrastructure.




