TO DO

0. The rules: https://github.com/komputeks/prompts/raw/refs/heads/main/da-rules.md

1. NEVER EVER USE VITE. YOU MUST USE NEXTJS LATEST (16.2.9?)

2. The job is to create a new repo to my GitHub account and modify the provided screenshot, then connect the repo to my vercel for automatic deployment on GitHub push

3. You modify to make the template support replication of content and syncing between Google sheets and Supabase bi-directionally

4. every markdown post and its metadata eg likes, comments etc should be in sync

5. Supabase ensures fast reads and writes, while Google sheets enables the author to edit and share the post data easily.

6. A user signs in
- is instructed to create an empty spreadsheet
- shown the admin's service account which they should share their spreadsheet with, as Editor
- shown a button to initialize their sheet (clicking the button edits their Google spreadsheet by renaming it and adding necessary post columns, sample row)
- if successful, the user gets an editor where they can add posts, which are first saved to supabase, then replicated to their spreadsheet.

- Also if they edit in their spreadsheet, it replicates over to Supabase 

- Sheets should have columns such as cat1, cat2, post_description, post_description, post_excerpt, post_tags, post_comments, post_likes etc

- the site's post permalink structure should be 'base/cat1/cat2/post-slug

- every user (author) should have a public profile page listing their posts (paginated, searchable, filters etc)