I dug into the repository itself rather than just its README. The picture is clearer now.

NexiBase is a strong base — but it is not yet XenForo

[NexiBase GitHub repository](https://github.com/nexibase/nexibase?utm_source=chatgpt.com) has 1,191 commits, 6 forks, and is MIT-licensed. It is a Next.js 16 / React 19 application using MySQL + Prisma, NextAuth, Tiptap and Sharp.  

Its architecture is unusually suitable for this project because plugins can contain their own Prisma schema, routes, APIs, admin pages, widgets and menus.  

What it already covers

XenForo-style capability	NexiBase

Forums / boards	✅
Forum permissions	✅
Threads/posts	✅
Rich text editor	✅ Tiptap
Replies/comments	✅
Nested replies	✅
Reactions	✅
Attachments	✅
Image processing	✅
Search	✅ MySQL FULLTEXT
Notices/pinned content	✅
Private/secret posts	✅
@mentions	✅
Notifications	✅
Email notifications	✅
Private messages	✅
User profiles/members	✅
User roles	✅ user/mod/admin
Admin dashboard	✅
Theme system	✅
Plugin system	✅
Homepage widgets	✅
Social login	✅
Email verification	✅


Those aren't guesses from the project name—the repository explicitly documents these features.  


---

Where it falls short of XenForo

This is the important part.

NexiBase's Boards plugin is community-oriented, but XenForo has a much deeper forum information model.

I'd expect you to add these:

1. Thread-specific metadata

You'd want something closer to:

Thread
├── id
├── forumId
├── userId
├── title
├── slug
├── prefixId
├── status
├── type
├── views
├── replyCount
├── lastPostId
├── lastPostAt
├── pinned
├── locked
├── featured
├── discussionOpen
├── createdAt
└── updatedAt

Then:

Post
├── id
├── threadId
├── userId
├── body
├── position
├── ipAddress
├── editedAt
├── deletedAt
└── createdAt

This gives you proper XenForo-style thread pagination, "last post", unread position, moderation and SEO URLs.


---

2. Prefixes

A big missing piece for a serious forum:

Thread Prefix
----------------
[News]
[Question]
[Guide]
[Solved]
[Official]
[Release]

With permissions such as:

Who can use prefix?
Who can create prefix?
Which forums allow it?
Can prefix be required?
Can moderators change it?


---

3. Tags

Separate tags from prefixes:

Thread
 ├── prefix: "Question"
 └── tags:
      ├── nextjs
      ├── prisma
      └── typescript

This becomes particularly useful for search and discovery.


---

4. User groups + granular permissions

NexiBase currently documents user/mod/admin roles.  

For a XenForo-like system I'd change that into:

User
  ↓
UserGroup[]
  ↓
Permissions

For example:

Registered
Moderator
Super Moderator
Administrator
VIP
Verified
Contributor
Banned

And permissions should be forum-specific, e.g.:

view
post
reply
edit
delete
upload
createPoll
createThread
usePrefix
moderate
sticky
lock
move
merge

This is probably one of the biggest architectural additions I'd make.


---

5. Moderation needs to become its own subsystem

NexiBase has admin/member management, but for a XenForo-style product I'd create:

Moderation
├── Reports
├── Report comments
├── Moderation queue
├── Warnings
├── User bans
├── IP bans
├── Content deletion
├── Soft deletion
├── Thread lock
├── Thread move
├── Thread merge
├── Thread split
├── Post moderation
└── Moderator actions log

And never permanently delete content by default.

Use:

deletedAt
deletedBy
deleteReason

so moderators can restore it.


---

6. User reputation / reactions

NexiBase already has reactions.  

But I'd separate:

Reaction

from:

ReactionScore

so you can eventually support:

👍 Like
❤️ Love
😂 Funny
😮 Wow
😢 Sad
🎉 Celebrate

plus:

reputation = +1 / -1 / custom

if desired.


---

7. XenForo-style user profile

I'd build this as a first-class feature:

/profile/username

┌─────────────────────────────┐
│ Avatar       Username       │
│              @username      │
│              Member since   │
│              Messages       │
│              Reactions      │
└─────────────────────────────┘

About
Posts
Threads
Reactions
Media
Profile posts
Followers
Following

NexiBase already has members/profiles as part of its core community functionality, so this is an extension rather than a completely new subsystem.  


---

8. Alerts need more sophistication

NexiBase already has notifications for replies, comments and mentions, including email delivery and per-user preferences.  

I'd extend the event system:

user.mentioned
post.quoted
thread.replied
thread.followed
thread.moved
thread.locked
post.reacted
profile.posted
conversation.received
content.reported
warning.received

Then notifications become event-driven rather than hard-coded into individual features.


---

9. Follow/watch system

This is another major forum feature I'd add:

WatchThread
WatchForum
WatchUser

For example:

> Watch this thread



and:

> Watch forum



with notification preferences:

Immediately
Daily digest
Weekly digest
No email
In-app only


---

10. Polls

I'd add:

Poll
├── question
├── multipleChoice
├── anonymous
├── closesAt
└── options[]

PollVote
├── pollId
├── optionId
└── userId

This is a relatively small addition but makes the forum feel much more complete.


---

The architecture I'd actually use

Rather than trying to turn the whole NexiBase application into XenForo, I'd keep its plugin architecture and make Forum the central plugin.

src/
│
├── app/
│
├── plugins/
│   │
│   ├── forum/
│   │   ├── schema.prisma
│   │   │
│   │   ├── routes/
│   │   │   ├── forums/
│   │   │   ├── threads/
│   │   │   ├── members/
│   │   │   └── search/
│   │   │
│   │   ├── api/
│   │   │   ├── threads/
│   │   │   ├── posts/
│   │   │   ├── reactions/
│   │   │   └── reports/
│   │   │
│   │   ├── admin/
│   │   │   ├── forums/
│   │   │   ├── prefixes/
│   │   │   ├── tags/
│   │   │   ├── users/
│   │   │   └── moderation/
│   │   │
│   │   └── widgets/
│   │
│   ├── conversations/
│   ├── notifications/
│   ├── members/
│   └── media/
│
├── components/
├── layouts/
└── lib/

The nice thing is that this follows the architecture NexiBase already establishes: plugins can have their own schema, API routes, admin interface, widgets and menus.  


---

One thing I would not do

I wouldn't fork a Reddit clone and attempt to transform it into XenForo.

The forum-specific architecture is too different.

I'd use:

NexiBase → forum engine → XenForo-inspired features

rather than:

Reddit clone → try to turn it into XenForo

NexiBase already gives you the unusually valuable infrastructure: plugin loading, themes, widgets, authentication, admin, MySQL/Prisma, boards, rich text, attachments, notifications and DMs.  

And there is one other project worth examining

GitHub's Tiptap topic currently surfaces luannguyenQV/turborepo-nextjs-prisma-postgres, described as a full-stack forum using NestJS, Prisma, Auth.js, Postgres, shadcn/ui, Tailwind, Tiptap and React Query.  

That one is interesting specifically if you prefer PostgreSQL over NexiBase's MySQL.

So I'd now narrow the candidates to:

1. NexiBase — best architectural starting point for a XenForo-like product.


2. turborepo-nextjs-prisma-postgres — worth studying for a Postgres/forum architecture.


3. Circus / next_discussion_platform — useful reference for community mechanics.


4. Forumgw — useful UI/reference implementation.



If you want, I can go even deeper and design the actual XenForo-like Prisma schema for NexiBase—User → UserGroup → Forum → Thread → Post → Prefix → Tag → Reaction → Attachment → Report → Warning → Conversation → Alert—so you can see exactly what we'd need to build. 








I searched GitHub specifically for XenForo-style/forum clones built with Next.js. There don’t appear to be many exact XenForo clones; most relevant projects are Reddit/forum-style implementations.

Closest matches

1. [KayTwenty/forrum](https://github.com/KayTwenty/forrum?utm_source=chatgpt.com)
Next.js + TypeScript + Firebase. Thread creation, comments, voting, authentication, and profiles. This is probably the closest simple starting point for a XenForo-like forum UI. 


2. [neilgebhard/reddit-clone](https://github.com/neilgebhard/reddit-clone?utm_source=chatgpt.com)
Next.js 14 + TypeScript + Supabase + Tailwind. Includes authentication, posts, threaded comments, voting, and responsive UI. 


3. [Zeztron/reddit-clone](https://github.com/Zeztron/reddit-clone?utm_source=chatgpt.com)
Next.js + React + SQL/Supabase + GraphQL + TypeScript + Tailwind. Another useful foundation for a modern forum/community application. 


4. [peterkibuchi/shreddit](https://github.com/peterkibuchi/shreddit?utm_source=chatgpt.com)
A more modern full-stack Reddit clone using Next.js, Tailwind, Prisma, NextAuth, Zod, Upstash, shadcn/ui and UploadThing. GitHub currently lists it as updated in July 2026. 



Interesting but not Next.js

[KONDORDEVSECURITYCORP/xenforo-forum](https://github.com/KONDORDEVSECURITYCORP/xenforo-forum?utm_source=chatgpt.com) is actually much closer to what you mean functionally: it explicitly describes itself as an independent XenForo-inspired forum system with polls, attachments, reports, drafts, profile walls, trophies, tags, bookmarks, statistics, etc. However, it's Laravel 12/PHP, not Next.js. 

Also, [Y4SIIIIN/xenforo](https://github.com/Y4SIIIIN/xenforo?utm_source=chatgpt.com) is actual XenForo software/files rather than a Next.js clone, and requires PHP/MySQL. 

Bottom line: if your goal is specifically “XenForo UI/features, but rebuilt in Next.js”, I don't see a strong 1:1 open-source clone in the current GitHub results. The best approach may be to combine a Next.js forum foundation with XenForo's feature model.

If you want, I can do a deeper GitHub search and find 10–20 projects, filtering for Next.js + PostgreSQL/Prisma + authentication + threads/replies + user profiles + admin/moderation, which would be much more useful for building a XenForo alternative.





