TANTABLE SHEETS

LET'S BRAINSTORM ON THIS IDEA;

(previous brainstorms
1. https://gist.github.com/komputeks/5109fbc21710185d45348dfde061fd57

2. https://gist.github.com/komputeks/165fd02313709f39be6ffeb5f7791d97
)
A template for Tantables and Google Sheets Two way sync Using free tiers only.

Stack: Github, Nextjs, Supabase, Google Sheets.

MY THOUGHTS;
Admin must have Google email and set credentials for Google Sheets API access on vercel.

In admin panel, posts are created by entering a Google Sheet URL.

After entering a Google sheet url it should be copied to supabase where all edits will be saved, then batch written back to sheets.

Also any sheet edits should sync to supabase hence the frontend.

1. Be CMS style with Admin panel
- allow disallow registrations
- CRUD; sheets, columns, cells in admin panel.
- Sheet (Post) Categories should be 2 level deep, and editable.
- Each sheet displays a Tantables table on frontend
- Each Sheet becomes one post
- Each Sheet can be edited on frontend, if user is owner, or allowed emails
- Admin can add allowed emails, and that should sync with Google.

2. More Features
(i). The Monetizable Column (set when editing post)
- these columns may contain links to eg resources or downnloads. 
- That Column Should be hidden behind a paywall.
- Another Column Should be auto created, where each row of monetized column is sent to shrink.me, ouo.io or exe.io api
- the returned short link is the one to be shown on frontend.
(ii). Column display (to frontend)
- Admin can set if column contains a link to;
a. image, show thumbnail on tantables frontend
b. audio, show a player & downloader on tantables frontend 
c. document (pdf), show thumbnail preview on tantables frontend
d. Video, fetch thumbnail on tantables frontend

- Admin can also set;
a. Column prefix or suffix
b. Column find & replace
(iii). All other Tantables features should be adjustable by admin

(iv) GitHub style editor (WYSIWYG)

3. Continue helping me on more ideas, viability, loopholes, market needs etc etc


Sheet-sync (tantables table om frontend)

