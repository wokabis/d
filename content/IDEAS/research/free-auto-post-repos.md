I searched deeper. There are 20+ relevant repos/projects, but they fall into three groups: actually close to $0 cloud automation, AI + automatic publishing but requiring hosting/API costs, and affiliate-focused systems.

🟢 Closest to your $0-server requirement # Repo What it does 1 youtube-instagram-auto-uploader Google Drive → AI metadata → YouTube + Instagram Reels, twice daily, GitHub Actions; explicitly says no server/laptop required. 2 ig-autopilot-template Claude captions + Instagram publishing + GitHub Actions; content factory can generate branded statement cards. 3 instagram-scheduler Images/Reels/carousels, multiple IG accounts, token refresh, GitHub Actions. 4 ig-reel-automation Google Drive → scheduled Instagram Reels through GitHub Actions; explicitly no server. 5 Cogentic Gemini-generated daily content + optional LinkedIn publishing through GitHub Actions. 6 automated-twitter-content GPT-generated Twitter content + GitHub Actions daily scheduling. 7 linkedin-auto-poster Industry-news research → AI drafting → GitHub PR approval → LinkedIn publishing. 8 linkedin-post GitHub Action specifically for posting text/images to LinkedIn. 9 mslavov/linkedin Claude-powered LinkedIn content generation orchestrated through GitHub Actions. Publishing remains manual, though. ⭐ Particularly interesting 

youtube-instagram-auto-uploader is the closest match I've found to your original request:

Google Drive ↓ GitHub Actions ↓ Groq AI ↓ title + description + tags + caption ↓ YouTube + Instagram Reels 

It says it runs twice daily, uses free API access where available, and requires no server to maintain. 

🟡 AI + automatic social publishing 10. Social Agent AI 

Gemini-generated content, Instagram, X, YouTube and TikTok publishing, analytics and an autonomous strategy optimizer. It can use free Gemini API access, but it's designed as a self-hosted application rather than GitHub Actions. 

11. Social Agent AI — alternate implementation 

Another fairly complete implementation: Gemini → platform-specific content → Twitter/Instagram/YouTube/TikTok → analytics → weekly strategy optimization. 

12. PostSider 

Open-source scheduler supporting 30+ platforms, API/SDK/MCP, queues, recurring/evergreen content and optional AI assistance. More of a general publishing engine than an income bot. 

13. Postrail 

AI generates posts from newsletter content and automatically schedules/publishes to LinkedIn, Facebook and X using QStash. 

14. Postweave 

AI-powered content generation/scheduling for Instagram, Facebook, LinkedIn and Telegram, with Claude/GPT/Gemini support. 

15. AI Social Media Scheduler 

Gemini/Leonardo AI content generation plus scheduling and automatic publishing to X, LinkedIn, Facebook and Instagram. 

16. Social Media Automation 

Gemini-generated posts + cross-platform accounts + cron-based publishing to Facebook, X, Instagram and LinkedIn. 

17. AI-SocialMedia-Automation 

Gemini → platform-specific captions → Pollinations image generation → Telegram/LinkedIn posting → Google Sheets logging. 

18. n8n-social-media-automation 

Pexels stock video → Gemini captions → Facebook/Instagram/TikTok through Buffer. Runs on a schedule. 

19. Make Social Media Automation 

OpenAI generates captions/hashtags and Make.com schedules posts to Facebook, Instagram and LinkedIn. 

🔥 Affiliate / “make money” focused 

These are more relevant if your end goal isn't merely automation but affiliate content → clicks → commissions.

20. TikTok Viral Factory 

This is probably the most interesting one in the entire search.

It has 7 AI agents:

TikTok Shop product ↓ trend research ↓ content strategy ↓ script ↓ Kling AI visuals ↓ ElevenLabs voice ↓ FFmpeg video ↓ SEO/caption ↓ TikTok Content Posting API 

It is explicitly designed around TikTok Shop affiliate videos and claims a 100-video/month pipeline. The repo says the required APIs include an LLM, Kling/fal.ai, ElevenLabs, Pixabay and Pexels. 

Important: despite its “~$0/mo” claim, that does not mean all of those external AI services are guaranteed to remain free.

21. Ricky Affiliate Agent 

Amazon product URL → AI-generated promotional assets → Instagram/X/Pinterest content. It generates multiple images for each product and has a --post mode for automated publishing. 

This is one of the better matches for:

product → AI content → affiliate promotion → social distribution

22. Money Printer Pro 

This is an unusually broad one:

AI scripts TTS AI images/stock footage captions/subtitles YouTube Shorts TikTok X/Twitter Amazon affiliate product scraping affiliate pitches cross-posting cost tracking 

It also has a scheduler. 

This is much closer to an automated faceless-content business toolkit than a normal social scheduler.

23. TikTok Affiliate Promo Generator 

Product list → AI generates TikTok promo scripts/captions/hashtags → scheduled workflow.

It's specifically designed for high-volume TikTok affiliate content. 

It doesn't appear to be a complete hands-off publisher in its current testing state, so I'd classify it as a content-generation component rather than a finished autopilot.

24. ClickTok 

TikTok Shop affiliate automation:

Find products ↓ Filter by commission ↓ Generate promotional video ↓ Generate caption ↓ Affiliate tracking ↓ TikTok 

It supports automated video creation and affiliate-link tracking, but posting has a manual-review step rather than being completely autonomous. 

25. Instagram + TikTok Affiliate Automation 

Trending topics → Canva media → AI captions → Instagram posting → TikTok affiliate integration → analytics. 

This one is conceptually almost exactly what you're looking for, but it uses n8n Cloud/Railway/Render, so it isn't the $0-server option.

🟠 AI faceless video generators 26. Faceless AI 

GPT-4o-mini scripts → Flux images → OpenAI TTS → FFmpeg → vertical TikTok/YouTube videos. 

It doesn't provide the full affiliate/posting pipeline by itself, but it could be plugged into one of the GitHub Actions publishers.

27. Faceless 

AI-agent-guided narrated-video production targeting TikTok, Reels, Shorts and LinkedIn. It emphasizes reviewed production rather than blind publishing. 

🔵 Other useful automation pieces 28. Instagram Agent 

Gemini analyzes images → hashtag trend analysis → caption generation → public media upload → Instagram Graph API publishing. 

29. Instagram Comment Automation Agent 

Not a content generator, but useful as a second stage: automatically analyzes Instagram comments, generates replies with OpenAI and can send follow-up DMs. 

30. AutoPoster-AI 

An n8n workflow that picks products, generates AI product photos, generates AI video, writes platform-specific captions and automatically posts to Facebook and Instagram. 

🏆 The ones I'd investigate first 

For your specific combination:

AI content + automatic posting + no localhost + possibility of monetization

I'd narrow the 30 down to:

A — Cheapest/cloud-first 

youtube-instagram-auto-uploader
GitHub Actions + Groq + YouTube + Instagram. 

B — Instagram autopilot 

ig-autopilot-template
Official Instagram API + GitHub Actions + AI captions/content factory. 

C — Affiliate-first 

TikTok Viral Factory
Product → AI video → TikTok Shop → automatic publishing. 

D — Affiliate multi-platform 

Ricky Affiliate Agent
Amazon products → AI promotional content → Instagram/X/Pinterest. 

E — All-in-one faceless/affiliate 

Money Printer Pro
Short videos + social posting + Amazon affiliate workflow + cost tracking. 

F — Multi-platform infrastructure 

PostSider
30+ platforms + scheduling/API/MCP; useful if you want one content engine feeding many networks. 

One caveat: I wouldn't interpret repo claims like “$0/mo,” “fully automated,” or “make money” as verified earnings. They're project descriptions/claims, not evidence that the automation produces revenue. Also, API access and platform rules change, so official APIs are preferable to browser automation where available.

