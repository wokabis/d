# Sheet-sync 

A website where every users' Google Sheets becomes a monetizable table on the web — with two way sync.

a. Supabase (backend)  
b. Google Sheets sync via NextJS api routes then to supabase.  
c. GitHub Action for heartbeat (5 mins cron) and batching. (syncing from sheets api to NextJS api routes then to supabase)(also from NextJS user's backend to supabase then to Google sheets)   
d. Next.js frontend (Tantables-style output).  
e. NextJS also for user editing their sheet. Saves to supabase first then batches to sheet.  

- repo = GitHub.com/komputeks/sheetsync
- vercel link = sheetsync.vercel.app
- rules = github.com/komputeks/prompt-os/nextjs-rules.md
- task = github.com/prompt-os/sheetsync/task-1.md


## Core Idea
- User signs in with Google only. Redirected to their profile page.
- In profile they grant access to their Google drive and sheets. Then select a spreadsheet and sheet name or number.
- This activates the next tab; Edit Sheet tab.
- In Edit Sheet tab, show a toggle switch which if they switch to public, their sheet becomes publicly viewable on the website as a post with the post details containing a tantables table of the sheet they selected. Next to button switch is a dropdown to select post category 1 and category 2 (dependent on cat1). If none selected, default to Other (cat1), Uncategorized (cat2). Categories should be created by the website admin only inside admin Interface.
- 


## Pages
1. Homepage (publicly viewable, 
- Top nav; logo + website name on right, while left has a search + user profile pic or avatar that on click, directly goes to user profile page.
-  Hero landing with CTA; 'Turn your Google Sheets into beatiful monetized tables'
- Masonry + timeline of post like list of tantables tables that users have added and made public. Numbered pagination.
- SEO Content Section; Here, in about 400 words use modern world-class web page ux presentation style; h2 and h3 titles camelCase, precise bullets & very few emoji to write a landing page copy description of the site.
- Footer; 3 sections  
(a) Sitename + Newsletter sign up  
(b) Show 5 random top Cat1 categories  
(c) About us pages (about, contact, privacy, terms 
) + social follow icons  
- Bottom footer: small copyright footer.

2. Admin Interface 
- only accessible by admins who sign in as normal users first.
- Then in profile tab, they have a button linking to admin dashboard.
3. Profile page
- Tabs; 
(a) Tab 1: Profile
	- edit profile (name only)
	- Google Connect Option 1: connect your Google sheet button; (on click, redirect to Google auth asking Sheet & Drive access permission). After permission successful, show popup to search and select the user's available Google sheets in their drive.If already selected, always show connected spreadsheet and sheet name.
	- Google connect Option 2: Service Account; Show the service account email to the user and instructions telling the user to share their spreadsheet with and grant Editor access. If already shared, show their spreadsheet name.
	- If user has successfully completed Sheet connection using either option 1 or 2, disable the other.
	- Add API keys; every user can add these keys to use supported features (ie Full Sheet, Per Row Monetization and Column Ads )
(i) LIPIA_KEY (
- to process lipia online mpesa payments method and settle directly to sheet owner account.
- Check lipia online documentation ( )
- If a user adds this key, the Full Sheet & Per Row Monetization options will settle payments to the sheet owner.
(ii) ADS_KEY
- If sheet owner adds this key, they can now set  column Monetization as Column Ads.
- If user sets a column Monetization as Column Ads, send the links in that column in batches of 50 per cron job run, to the respective ad network, and derive another tantables table column for the newly shortened ad-supported links. This is the one that must be shown on the frontend, while the original monetized column should not be displayed.
- Shorten links by reading and using the api docs of SHRINK.ME, OUO.io, EXE.io
- the returned links should be saved in supabase too in a new column for fast reads.

(b) Tab 2: Table options
- This tab determines how the sheet data is displayed in tantables. 
- Show a switch to toggle between private or public. Public makes the sheet published as a post on main website, with post details being the tantables table. Also activates a form to change post title.
- Show a switch to toggle if the sheet owner wants to allow the sheet data export via tantables table.
- Show a Select category dropdown. If parent category Cat1 not selected, defaults to 'Other'. If child Cat2 not set, defaults to 'Uncategorized'.
- Monetization; 
(i) Per Row
- sheet must have a price column. (show warning and remove this option if not)
- add two horizontal buttons in the last cell. First button is 'add to cart', second is 'Buy now'.
-on clicking either button, show a popup so the buyer can input their phone number for payment.
- if payment succeed, (i) if it's a digital product, reveal the original content (link) of the cell in that row to the buyer forever. if it's a physical product, show the owner's sheet email and phone.

(ii) Column Ads
- sheet owner is shown a form to add their 
(iii) Full Sheet
- 


- All tables must have caching, sort, search, pagination and number of items to show per page.
- 


(i) Row options 
- User should be able to set if all rows will be Collapsible, Nested or Grouped rows.
- Empty cells should show 'null'


(ii) Column options
This setting applies to a whole column. Except for Text content, all other column types must contain links, except the header column.
The footer column equals the sheet header columns in the tantables table.
Warn the user if sheet lacks all or any headers.

Display the sheet headers so a user can select any and get to choose what it contains hence how it will be displayed in frontend tantables table;
- Text; reveal another dropdown to select if the text will be displayed in tantables table frontend as just pure text, markdown, code or preformatted text.
- Monetizable; determined by user's Monetization setting in Table options tab. Reveal another dropdown to select either of the three options, per row, column ads or whole sheet.
- Video; reveal another dropdown to select if Vimeo or YouTube fetch thumbnail, if 'Other' show a placeholder with play icon at center. On frontend,  Clicking the thumbnail should open a lightbox video player and start video playback.
- Audio; on frontend show 'Play' button that opens a music player in a lightbox and starts playing the audio.
- Document: on frontend, show a 'Open Document' button in the cell per row that opens the doc in a new tab using Google documents embed url.
- Image; display an image beautifully inside the cell of every row.
- External link; should fetch and cache the title of the external link for frontend display, clicking opens the link in a new browser tab.

(c) Tab 2: Editor
- Shows an editable tantables table.
- Edits should be saved in supabase then a GitHub action with cron job running every 5 minutes will dispatch the batch changes to Google sheets. Also show a counter below the table of when the next sync will happen (next GitHub action cron job will run).
- 
- 


(c) Tab 3: Get Premium

	

4. Category Pages (2 levels)
- Parent categories (cat1); show posts from all its children categories, with horizontal scroll menu of children categories at top.
- Children categories (cat2); show posts from own category.
- Use numbered pagination.

5. Search Page

6. Legal and Help; About us, Contact Us, Privacy, Terms 

## Rules 
- Brand voice: friendly, semi-conversational tone—still professional, but more approachable and easier for everyday users to connect with. Use the title in H2 and others in H3
- Sheet 
- If user deletes their account, do a soft delete in supabase by adding deleted to that users row" 

## Design
- Light Dark modes 
- Optimistic UI, button must have loading states
- Prefer skeleton loaders over spinners
- Prefer modern gradients colors — professionally 
- 

## Glossary 
1. Post: A tantables table showing a connected Google sheets data. The post author is the sheet owner.
2. 

- 

- 