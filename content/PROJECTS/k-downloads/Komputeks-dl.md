NEVER EVER USE VITE EVER! ALWAYS USE NEXTJS LATEST (16.2.9?)

# Create Komputeks Downloads from screenshot

- Screenshot URL: https://github.com/komputeks/prompts/raw/refs/heads/main/screenshots/Clan-War-Gaming-Website-Template~01.jpg
- Create new GitHub repo: https://github.com/komputeks/komputeks-dl
- Create new Vercel project and URL: https://komputeks-dl.vercel.app
- Read Skills/Rules: https://github.com/komputeks/prompts/raw/refs/heads/main/da-rules.md
- Read Copywriting https://github.com/komputeks/prompts/raw/refs/heads/main/Copywriting/Billionaire-Writes.md

TO DO 2 (CONTINUATION)a
[README](../../README.md) 
1. make the open top nav menu (on mobile?) auto close on clicking away. 

2. create admin and dashboard pages and redirect sign in pages there. Admin must be able to CRUD downloads too. 

3. Ensure pagination on downloads listing, category and search pages. 

4. each download must belong to two-evel categories. 

5. create dedicated search page using the categories and/or /search?q=. 

6. Also add breadcrumbs, prev/next navigation with titles, related, social sharing buttons. 

7. permalink structure should be base/category/subcategory/title

8. add the search icon and the light/dark mode toggle on top nav (ensure both modes exist with localStorage)

9. Ensure you use my Supabase PAT to connect to supabase rest API (management API), get my credentials (SUPABASE_URL, ANON_KEY and SERVICE_ROLE_KEY) and add them to my GitHub secrets and my Vercel env vars (using Vercel API)
