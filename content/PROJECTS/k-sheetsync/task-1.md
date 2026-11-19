1. TODO

Build a production-grade SaaS called SheetSync using:

- Next.js 16 App Router
- React 19
- TypeScript
- TailwindCSS
- Supabase
- TanStack Table, Query, Virtualization 
- Vercel deployment
- Google Sheets API via Service Account only

The platform converts public or shared Google Sheets into:

- SEO-optimized webpages
- embeddable tables
- JSON APIs
- CSV exports
- auto-rendered visualizations

The project must prioritize:

- scalability
- maintainability
- clean architecture
- server-side rendering
- caching
- SEO 

---
2. PRODUCT OVERVIEW

Users:

i. create account  
ii. connect public Google Sheet or via Service Account email  
iii. configure visibility + column rendering  
iv. publish sheet as:
   - public webpage
   - embeddable widget
   - API endpoint  

vi. view analytics of clicked links and diffs for single previous sheet edit only.  
vii. add LIPIA_API_KEY that should be used to process payments via lipia online mpesa payment method. (https://justpaste.it/lipia-docs), whenever their sheets uses products' tanstack tables layout

Admin:
i. A WordPress-like admin panel for website settings, content management, analytics, error logs viewing.

The platform is:

- optimized for SEO, API access and embeds
- syncs from Google Sheets → Supabase
- also has product tables layout which allows a user to sell products from sheets to tantables. a buyer enters a phone number and everything else is processed via a popup. (payment polling, payment success or failure, transaction logging, feedback)

- For a user to publish their sheet using the product tanstack tables layout, they must submit contact info, delivery info, refund policy, shop location, thank notes which will be shown to the buyer after successful purchase.

- After a user publishes using tantables layout of products, a seller dashboard should be shown on their profile with orders, sales, LIPIA key settings etc

---
3. CORE ARCHITECTURE

Data Flow

Google Sheets
→ Next.js sync route
→ Next.js Zustand store
→ Supabase normalized storage
→ frontend rendering layer
→ Supabase sends webhook to sheets if frontend edits (if shared using service account as Editor)


Supabase is the cached database layer. 

Google Sheets remains source of truth, unless if sheet shared with service account as Editor, the frontend becomes source of truth

---
4. AUTHENTICATION

Use Supabase auth:

- Email & Google sign in
- password reset (email is sent via smtp settings in admin)
- always ensure default admin and demo users.

After login:

- redirect to "/dashboard"

---
4. GOOGLE SHEETS INTEGRATION

Use public sheets or Service Account authentication only.

Do NOT use:

- Google OAuth
- Drive Picker
- refresh tokens

Users must:

a. share spreadsheet with public or service account email
b. grant Editor access to service account 
c. paste spreadsheet URL for ID extraction 

System validates access.

Store:

- spreadsheetId
- sheetName
- ownerId
- incremental delta edits

---
5. SYNC SYSTEM

Create:

- manual sync button 
- automatic sync endpoint
- both buttons should queue the sheet in Zustand store then batch write to Supabase 

Use:
- 500 processing rows per invocation
- Chain function calls or use Supabase Edge Functions
- GitHub Actions cron every 20 minutes as fallback 

Requirements:

- batch row ingestion
- incremental updates (delta)
- retry failed syncs
- prevent duplicate rows

---
6. IMPORTANT: ROW IDENTITY

Every row MUST contain immutable internal ID.

If missing:

- automatically generate hidden UUID column

Example:
__sheet_sync_id

This is mandatory.

---
7. DATABASE REQUIREMENTS

Use Supabase Postgres.

Use website name as prefix for supabase tables e.g. {website_name}_users, {website_name}_sheets etc  

Create normalized schema for:

- users
- sheets
- sheet_columns
- sheet_rows
- posts
- categories
- sync_logs
- embeds
- api_usage
- other as you deem necessary

Include:

- indexes
- foreign keys
- timestamps
- soft deletes
- RLS policies

---
8. TABLE RENDERING ENGINE

Use TanStack Table, Tanstack Query, Tanstack Virtualization, Tanstack nesting etc

Requirements:

- search
- sorting
- filtering
- pagination
- use virtualization
- nesting support
- user selects to view 10, 25, 100, 200, 500 items
- tanstack query
- responsive design
- sticky headers and same footer as headers
- loading skeletons
- first column shows a frontend-only dynamic numbering row that resets dynamically on search, sorting etc because it should not exist in the database

Do NOT load massive datasets at once.

Always use:

- server pagination
- cursor pagination
- tanstack virtualization (load only visible)
- tanstack query
- limiting 

---
9. AUTOMATIC COLUMN DETECTION & MANUAL COLUMNS 

Do NOT use AI APIs.

Implement deterministic rule-based detection only.

Sheet owner should be able to change sheet column types

Infer column types using:

- regex
- MIME patterns
- URL detection
- numeric analysis

Supported types:

text

default fallback

---
image

detect:

- image extensions
- image URLs

Render:

- optimized image preview

---
video

detect:

- YouTube URLs
- Vimeo URLs
- other URLs containing different video formats

Render:

- thumbnail cards
- modal video player

---
audio

detect:

- mp3
- wav
- ogg
- other URLs containing different audio formats

Render:

- play button
- modal audio player 

---
document

detect:

- pdf/doc/docx/google-doc links

Render:

- use the Google document embed cdn
- open document button in new tab

---
external_links

detect:

- URLs

Render:

- external link preview

---
currency

detect:

- currency symbols
- decimal patterns

Render:

- formatted numeric cells

---
percentage

detect:

- values ending with %

Render:

- progress bar visualization

---
date

detect:

- ISO dates
- common date formats

Render:

- localized date formatting

---
10. SMART LAYOUT DETECTION

Use rule-based heuristics only.

The sheet owner should be able to change the layout style

Examples:

If:

- few rows + many columns
  → render comparison table

If:

- label/value pairs
  → render pricing/features layout

If:

- date + numeric column
  → enable chart rendering

If:

- image-heavy sheet
  → render card/grid layout
  
If:

- single 'price' or 'SKU' detected sheet
  → render products table layout

No AI services allowed.

---

11. CHARTS

Use Recharts.

Support:

- line charts
- bar charts
- pie charts
- area charts

Only enable charts when:

- numeric columns detected
- user manually configures.

---
12. PUBLIC PAGES

Homepage

Sections:

1. navbar
2. hero
3. Featured sheets (all public sheets paginated)
4. SEO content
5. footer

---
13. PUBLIC SHEET (POST DETAILS) PAGE

Route:
"/@username/sheet-name-slug"

Features:

- SEO metadata
- OpenGraph images
- table rendering
- chart rendering
- export buttons
- embed button

---
14. EMBED SYSTEM

Generate:

- iframe embed
- script embed

Examples:

<iframe src="..."></iframe>

<script src="..."></script>

Embeds must:

- be responsive
- lazy loaded
- theme aware

---
15. API SYSTEM

Every public sheet automatically gets:

JSON endpoint

"/api/public/:user/:sheet-name"

CSV endpoint

"/api/public/:user/:sheet-name.csv"

Requirements:

- rate limiting
- caching
- pagination

---
16. WEBSITE MONETIZATION

Premium Features
- CSV export
- API access
- embeds
- private sheets
- charts
- products layout

Read and implement LIPIA online mpesa payments method here: https://justpaste.it/lipia-docs

If a user wants to use the products tanstack tables layout, they must have added their own LIPIA key

---
17. SEO REQUIREMENTS

Implement:

- metadata generation
- structured data
- JSON_LD for schema validators
- sitemap
- robots.txt
- feed.rss
- canonical URLs
- OpenGraph images
- pagination metadata

Pages must be:

- indexable
- server-rendered
- fast (95%+ load speed score)

---
18. PERFORMANCE REQUIREMENTS

Implement:

- ISR
- caching
- route segment loading
- streaming where useful
- image optimization
- pagination
- query optimization
- Compress JSONB data
- Only store deltas.
- Archive old sync logs aggressively.
- Add a storage usage dashboard in admin.
- Aggressive request batching.

Avoid:

- client-side fetching everywhere
- large hydration payloads

---
19. SECURITY REQUIREMENTS

Implement:

- RLS policies
- rate limiting
- input validation
- sanitization
- SSR-safe rendering
- XSS prevention
- CSV injection prevention

Never trust spreadsheet content.

Escape:

- formulas
- scripts
- HTML

---
20. UI/UX REQUIREMENTS

Use:

- modern SaaS aesthetics
- responsive design
- light/dark mode switch in nav
- skeleton loaders
- optimistic-feeling navigation
- modern trendy color gradients 

Avoid:

- clutter
- excessive animations

---
21. FOLDER STRUCTURE

Generate scalable folder structure using:

- app router (src directory)
- feature-based organization
- reusable components
- typed server actions
- typed database layer
- read rules.md for more folder structuring rules

---
22. PWA/ TWA STANDARDS

- behave reliably
- install cleanly
- function offline where possible
- feel native-like
- remain performant on mobile devices
H TWA apk must be generated using Google's Bubblewrap CLI and provided inside public folder.

Core Requirements

Always include:
- manifest.json
- service worker
- installability support
- offline fallback strategy
- responsive viewport configuration
- generate PWA/TWA apk using Google's Bubblewrap cli inside public folder

Manifest must define:
- name
- short_name
- description
- icons
- theme_color
- background_color
- display mode
- start_url

Provide:
- maskable icons
- multiple icon sizes

Use service workers for:
- asset caching
- offline pages
- network resilience
- background sync where applicable

Avoid:
- over-aggressive caching
- stale critical data

Caching Preference:
- cache-first for static assets
- network-first for dynamic data
- stale-while-revalidate where appropriate

Never:
- cache sensitive authenticated responses insecurely

Offline Experience
Provide:
- offline fallback pages
- retry handling
- graceful degradation

Avoid:
- blank screens
- broken navigation

Installability
Ensure:
- valid manifest
- HTTPS
- install prompts
- mobile compatibility

PWA Performance
Optimize:
- Lighthouse scores
- Time to Interactive
- First Contentful Paint
- Largest Contentful Paint

Target:
- minimal JS bundles
- efficient caching
- optimized assets

PWA Mobile UX
Support:
- touch-friendly interactions
- safe area insets
- smooth scrolling
- responsive layouts

If PWA push notifications are used:
- require explicit opt-in
- provide unsubscribe mechanisms
- avoid notification spam

PWA Security

Always:
- serve over HTTPS
- validate cached responses
- avoid caching secrets

---
23. DELIVERABLES

Generate:

1. full folder structure
2. Supabase schema
3. migration files
4. RLS policies
5. sync engine
6. API routes
7. embed system
8. chart system
9. table renderer
10. caching strategy
11. Vercel deployment setup
12. environment variables
13. reusable hooks
14. typed utilities
15. production-ready architecture
16. PWA/TWA android apk must be generated and put inside public folder by utilizing Google Bubblewrap CLI 

Prioritize:

- clean architecture
- maintainability
- scalability
- Vercel compatibility
- Supabase compatibility
- Always update GitHub readme file
-  from vercel always add production URL to GitHub description (website link section in GitHub)