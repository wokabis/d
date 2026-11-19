free Hosting CPU, GPU, TPU


I have 0 budget, no laptop, not a student, no credit card. I want you to research free places where to run apps like n8n or telegram bots or python etc
1. deplexo.com probably plus Supabase 
2. blitz.cloud
3. GitHub codespaces or actions
4. render, railway 
5. Google colab


Yes — let's turn this into a real $0 infrastructure map, not just another list of "free hosting" websites.

I checked the current 2026 documentation again, and there are a few important additions/corrections.

The most interesting new option: Google Cloud Starter Tier

Google quietly introduced something particularly relevant to your situation.

Google Cloud Starter Tier

Google now has a Starter Tier that doesn't require a Cloud Billing account or credit card. It lets you deploy certain applications with a Google account, subject to restricted quotas and supported products. 

This is different from ordinary Google Cloud.

Normally:

> Google Cloud → billing account → potentially card required



But the new Starter Tier says:

> Google account → Starter Tier → no credit card / no billing account



That's potentially very useful for someone in your situation.

Google also announced in May 2026 that new users can deploy up to two full-stack applications through Google AI Studio into the Starter Tier without a billing account. 

Important limitation

Don't confuse this with getting a free VM.

It's not:

Google Cloud
    ↓
Ubuntu VPS
    ↓
Docker
    ↓
n8n 24/7

It's more like:

Google AI Studio
       ↓
full-stack application
       ↓
Google-managed Starter Tier

So it's particularly interesting for web apps, not as an Oracle-Cloud replacement.


---

The really useful discovery: Cloud Run

Google Cloud Run itself has a substantial always-free allowance:

240,000 vCPU-seconds/month

450,000 GiB-seconds RAM/month

2 million requests/month


and Cloud Run is available in Jakarta (asia-southeast2), among many other regions. 

Cloud Run is also explicitly designed for containerized applications and jobs. 

BUT there is a giant catch for you

Ordinary Cloud Run requires a billing account.

So:

Cloud Run free allowance ≠ no-credit-card hosting.

Google's Firebase documentation explicitly confirms that Cloud Run requires a billing account to get started. 

Therefore:

Requirement	Cloud Run

$0 usage possible	✅
Free tier	✅
Docker	✅
Python	✅
n8n	✅ technically
Indonesia region	✅ Jakarta
No billing account	❌
Your current situation	❌


So don't waste time trying to force standard Cloud Run into your current setup.


---

Another interesting option: Firebase

Firebase's Spark plan is genuinely no-cost and does not require a payment method. 

It gives you useful pieces such as:

Firestore

Authentication

Firebase Hosting

various Firebase services


This can be useful as the backend for a bot.

For example:

Telegram bot
      ↓
Cloudflare Worker
      ↓
Firebase / Firestore

But don't expect Firebase Spark to give you a normal Python server.

Firebase's server-side options such as Cloud Run/App Hosting have billing-account requirements. 

So I'd classify Firebase as:

🟢 free backend/database

rather than:

🟢 free VPS


---

Firebase Studio is interesting — but there's a huge 2026 change

Firebase Studio is a browser-based development environment, which sounds perfect for someone without a laptop.

However, Google's documentation now says:

> As of June 22, 2026, new workspace creation is disabled.



Existing workspaces remain accessible. 

So I would not build your plan around Firebase Studio if you don't already have a workspace.

That's an important correction compared with older articles/videos.


---

GitHub remains one of your strongest tools

Your free GitHub account currently includes:

Codespaces

120 core-hours/month + 15 GB-month storage. 

That is roughly:

120 hours
÷ 4 weeks
≈ 30 hours/week

if you spread it out.

But you don't need to keep it running continuously.

Use it like:

Phone
 ↓
Chrome
 ↓
GitHub Codespace
 ↓
Linux terminal
 ↓
write/build/test
 ↓
stop Codespace

This is basically your cloud laptop.


---

GitHub Actions is even more interesting

GitHub Free currently gives 2,000 Actions minutes/month for private repositories. Standard GitHub-hosted runners are free for public repositories. 

This means you can build surprisingly sophisticated automation without a server.

For example:

GitHub Actions
     │
     │ every 15 minutes
     ▼
Python script
     │
     ├── API request
     ├── scrape data
     ├── process data
     ├── Supabase
     └── Telegram

If each execution takes 30 seconds:

30 sec × 4/hour × 24 × 30
≈ 86,400 sec
≈ 1,440 minutes

That fits inside the 2,000-minute private-repo allowance.

That's a genuinely useful free automation server.

But don't do this:

GitHub Actions
       ↓
while True:
    telegram_bot()

That's wasting your allowance and isn't what Actions is for.

Use webhooks or scheduled short jobs instead.


---

Cloudflare deserves a much bigger place in your plan

This is probably the most important addition to your original list.

Cloudflare's free Workers platform supports 100,000 requests/day. 

And Cloudflare D1 provides a free SQL database allowance of:

5 million row reads/day

100,000 row writes/day

5 GB storage


according to the current documentation. 

That creates an extremely powerful architecture:

TELEGRAM
                    │
                    ▼
            Cloudflare Worker
                    │
             ┌──────┴──────┐
             ▼             ▼
            D1        Telegram API
             │
             ▼
          persistent
            data

No VPS.

No Python process.

No n8n.

No laptop.

No credit card.

The trick

Use a Telegram webhook, rather than:

while True:
    get_updates()

Telegram calls your Worker when an event happens.

So instead of paying for a computer that waits around doing nothing:

24/7 server
████████████████████████

you get:

Telegram event
      ↓
Worker starts
      ↓
processes event
      ↓
responds
      ↓
done

That's exactly the sort of workload serverless platforms are good at.


---

And there's another layer: specialized free bot hosts

I found several newer/smaller services that weren't in your original list.

These need more caution than Cloudflare/GitHub/Supabase, because they're much smaller providers. I would not put your passwords, private keys, sensitive databases, or valuable production workload on them without investigating their security and longevity.

But for throwaway hobby bots, they're interesting.

VisiHost

VisiHost currently advertises a free Telegram hosting tier:

256 MB RAM

20% CPU

1 GB NVMe

Pterodactyl

SFTP

browser console

no credit card

no sleep mode

24/7 Telegram bot hosting


according to its current site. 

That's substantially more interesting for a simple Python Telegram bot than something like Colab.

I'd put it in:

🟡 "worth testing, but don't trust it with anything important yet."


---

NxCreate

NxCreate is another Telegram-specific platform.

It currently advertises:

free Starter plan

no credit card

JavaScript and Python

webhook automatically registered

10 bot deployments/day

5 web projects

4-second execution timeout per message


and says the bots remain available through managed webhook infrastructure. 

This is conceptually very interesting because you don't have to deal with:

VPS
Docker
systemd
PM2
nginx
SSL
webhook setup

Instead:

Telegram
   ↓
NxCreate
   ↓
your bot code

I'd consider this for small Telegram bots, not general-purpose hosting.


---

Infrlo

I also found Infrlo, which advertises:

512 MB RAM

2 GB storage

24/7 uptime

Telegram bots

Discord bots

Python

Node

APIs

no credit card

free forever


Its public GitHub repository documents those claims. 

Again:

interesting, but very small/new provider → don't make it your only copy of anything.


---

Temalix

Temalix is more specialized toward Discord bots, but it provides:

Python

Docker isolation

200 MB RAM

0.5 CPU

up to 3 bots

no credit card

free hosting


It says containers run continuously but explicitly doesn't guarantee uptime. 

For Telegram specifically, I'd put this lower on the list.


---

What about Netrun?

Netrun illustrates an important problem with "free bot hosting."

Its free plan lets a bot run for 3 hours, then shuts it down. 

That's technically free hosting.

But for a real 24/7 bot:

not useful.

This is why you have to distinguish:

> "I can run a bot for free"



from:

> "I can run a bot continuously for free."



Those are completely different things.


---

So here's my expanded map

🟢 Strong candidates

Service	Main purpose

GitHub Codespaces	Your cloud laptop
GitHub Actions	Scheduled automation
Cloudflare Workers	Serverless bots/APIs
Cloudflare D1	SQL database
Supabase	PostgreSQL/backend
blitz.cloud	n8n/Docker experiments
Deplexo	Tiny persistent apps/bots
Firebase Spark	Backend/database/static hosting


🟡 Interesting alternatives

Service	Main purpose

VisiHost	Telegram bots
NxCreate	Telegram bots/webhooks
Infrlo	Small bots/web apps
Deno Deploy	JS/TS serverless
Vercel	Webhooks/API
Koyeb	Small web services
Render	Web services
Railway	Small deployments


🔴 Don't count on these for your exact constraints

Service	Why

Google Cloud Run	Billing account required
Oracle Cloud	Usually card required
Firebase App Hosting	Blaze/billing required
Google Colab	Not a permanent server
PythonAnywhere Free	Current free tier is heavily restricted
Netrun Free	3-hour bot limit



---

One important correction about Supabase

I would still use Supabase, but don't assume:

> "Free database = runs forever."



Supabase currently says Free Plan projects can be automatically paused after 7 days of insufficient activity. 

Current free resources include:

500 MB database

500 MB RAM/shared compute

1 GB file storage

5 GB egress

50,000 MAU

2 active free projects


and free projects can be paused after inactivity. 

For a small bot that's actively receiving requests, that may not be an issue.


---

The stack I'd personally experiment with first

Not as a "best" political-style ranking—just matching components to their documented functions:

📱 PHONE
                    │
                    ▼
          ┌──────────────────┐
          │ GitHub Codespaces│
          │  cloud laptop    │
          └────────┬─────────┘
                   │
          ┌────────┴──────────┐
          │                   │
          ▼                   ▼
    Cloudflare             blitz.cloud
     Workers                  │
          │                   ├── n8n
          │                   └── Docker
          ▼
       D1 / KV
          │
          │
          ▼
      Supabase

And separately:

GitHub Actions
                   │
           scheduled Python
                   │
          ┌────────┼────────┐
          ▼        ▼        ▼
       Telegram  Supabase   API

And for a simple conventional bot:

Python Telegram Bot
        │
        ▼
 Deplexo / VisiHost /
 Infrlo / similar


---

The really powerful part

You don't actually need one free server.

You can combine free quotas.

For example:

Project A — n8n

blitz.cloud
     ↓
    n8n
     ↓
Supabase

Project B — Telegram bot

Cloudflare Worker
       ↓
      D1

Project C — Python automation

GitHub Actions
       ↓
    Python
       ↓
 Telegram

Project D — learning

GitHub Codespace
       ↓
Python / Node / Docker

Project E — AI/data experiments

Google Colab
       ↓
Python
       ↓
GPU when available

You have now effectively assembled a little cloud computer ecosystem without owning a computer.

And importantly, you're not depending on Colab staying alive, nor trying to turn GitHub Actions into a VPS.


---

One last thing I'd strongly recommend

Before putting a real Telegram bot or n8n instance on any of the smaller "free forever" hosts, don't give them your main passwords, personal database, API master keys, or anything you can't afford to lose.

For the obscure hosts, I'd start with a disposable bot token and test:

1. Does it actually stay alive?


2. Does it restart after crashes?


3. Can you retrieve your files?


4. Can you delete the account/data?


5. Does it require Discord verification?


6. Does it suddenly impose a usage limit?


7. Does it disappear after a few weeks?



That's especially important because some of these services are tiny independent projects, unlike GitHub, Google, Cloudflare, or Supabase.

If your goal is "I want to build real automation businesses from only my phone and $0", the next step I'd take is to design the actual architecture for your first project—for example n8n + Telegram + Supabase + Python + GitHub Actions, with exactly which component goes on which free service and how you deploy everything from an Android phone.















Worked for 31s

Yes. I went specifically hunting for VPS-like options, not just generic free app hosting, and the picture is more interesting than I expected.

The important finding is that true $0 VPS + no credit card + suitable for n8n is extremely rare. But I found several candidates worth testing, plus a couple of unconventional options.

🏆 The shortlist for n8n

Provider	Type	Free	Card	Resources	n8n potential

Openworld	Real VPS	✅	❌	Linux/root; exact resources vary	🟢
ZenDevz	Real VM / community cloud	✅	❌	Example: 2 CPU / 4 GB / 40 GB	🟢
blitz.cloud	Container hosting	✅	❌	2 GB shared / 10 GB storage across free account	🟢
Serv00	Shared server	✅	❌	512 MB RAM / 3 GB / SSH	🟡
Raven Host	App/bot hosting	✅	❌	1.5 GB / 10 GB	🟡
RocketVPS	Real VPS	✅	❌	0.5 vCPU / 512 MB / 5 GB	🔴/🟡
Deplexo	Container	✅	❌	128 MB / 250 MB	🔴
ModVC	Bot/container hosting	✅	❌	128 MB / 300 MB	🔴
JustRunMy.App	Container hosting	✅	❌	0.15 CPU / 256 MB / 300 MB	🔴
Oracle Cloud	Real VPS	✅	Usually ✅	Huge Always Free allocation	🟢 but violates your card requirement


The first three are the ones I'd investigate most seriously.


---

1. Openworld — actual free VPS

[Openworld](https://openworld.eu.org/?utm_source=chatgpt.com)

This is one of the few things I found that really fits the word VPS.

Openworld currently advertises:

free VPS

no credit card

root SSH

Linux

Docker

nginx

cron

bots

public IPv6

NAT IPv4

7-day free VPS periods

renewal once every 24 hours to reset the 7-day countdown




The important catch:

It isn't automatically permanent.

You have to renew it.

Day 1
  ↓
VPS
  ↓
7-day countdown
  ↓
renew
  ↓
another 7 days

If you stop renewing, it gets suspended. 

For n8n

This is actually interesting because you have root + Docker.

You could theoretically run:

Ubuntu/Debian
      │
    Docker
      │
      ├── n8n
      └── PostgreSQL

The biggest question is how much RAM/CPU your particular Openworld node gives you. Their public page doesn't give me a single universal free-tier specification.

Also, the free VPS has dedicated IPv6 but NAT IPv4, so for n8n webhooks I'd probably put Cloudflare Tunnel in front of it rather than worrying about direct inbound IPv4.

My assessment

Very interesting for n8n testing.

But I would not call it a hands-off 24/7 production server because of the renewal requirement.


---

2. ZenDevz — this is the weird one, but potentially huge

[ZenDevz](https://www.zendevz.com/?utm_source=chatgpt.com)

I found this one only because I specifically searched deeper for card-free VPS infrastructure.

ZenDevz describes itself as a community-owned decentralized cloud.

It claims:

$0 compute

no credit card

full root

SSH

isolated VMs

open ports

free subdomain

free VM

community-operated physical machines


And its example VM is:

2 vCPU + 4 GB RAM + 40 GB NVMe. 

That's dramatically more suitable for n8n than 128/256/512 MB containers.

But there's a catch you really need to understand.

ZenDevz's model is:

> You get a VM, but the ecosystem is powered by people contributing machines.



Their documentation says that for every private VM you keep running, you contribute a machine's capacity back to the pool. 

So this isn't the traditional:

> Google has a datacenter and gives you a free VM.



It's closer to:

> a decentralized cloud where community hardware supplies the compute.



They're also explicitly describing the platform as early alpha/open beta. 

And their privacy policy acknowledges that workloads run on community-operated infrastructure, with node operators hosting the underlying machines. 

Would I put n8n there?

For experimentation:

Absolutely worth testing.

For storing sensitive client credentials:

I wouldn't yet.

For your situation, though, this is probably the most interesting true VPS-like discovery.


---

3. blitz.cloud — probably the easiest n8n route

[blitz.cloud](https://blitz.cloud/?utm_source=chatgpt.com)

This isn't technically a VPS.

But honestly, for n8n, that may not matter.

blitz.cloud explicitly has n8n in its application store. 

The current free plan advertises:

€0

no credit card

15 apps

2 GB shared memory

10 GB storage

one database

nightly backups

Docker support




You can deploy:

n8n

without:

SSH
Docker Compose
nginx
SSL setup
Postgres installation

That's a huge advantage when you're working entirely from a phone.

But there is a major catch

Their current Docker guide says:

> an app nobody visits for two hours goes to sleep.



It wakes on the next visit. 

That's potentially problematic for n8n triggers/webhooks.

So I would test:

n8n
 ↓
Telegram Trigger
 ↓
wait 3 hours
 ↓
Telegram message

before trusting it.

If it doesn't reliably wake/respond to the Telegram webhook, then blitz isn't suitable for that particular workflow.


---

4. Serv00 — surprisingly capable shared hosting

[Serv00](https://www.serv00.com/?utm_source=chatgpt.com)

This isn't a VPS.

But do not dismiss it.

The free account currently gives:

3 GB storage

512 MB RAM

unlimited transfer

100 websites

10 MySQL databases

3 PostgreSQL databases

3 MongoDB databases

3 TCP/UDP ports

SSH

SSH tunneling

cron

Node.js

Python

Docker-like alternatives aren't available because you don't have root




They officially support Python 3.8–3.12 and Node.js, and Node.js applications can use WebSockets. 

And here's the crazy part:

Someone just reported getting n8n 2.35.7 running on Serv00's free tier in September 2026.

They had to solve several problems involving:

limited processes

limited disk

native npm modules

n8n's task-runner broker

file descriptor limits


but they got the editor and REST endpoint working and tested a restart through cron. 

That's not official Serv00 support for n8n, and the author explicitly says it should be treated as a learning/small-workload setup rather than production infrastructure. 

But for $0 and no card, it's extremely interesting.

The architecture

Serv00
  │
  ├── Node.js
  ├── n8n
  ├── SQLite
  └── cron

No Docker.

No root.

But potentially working.

I'd put this in the "mad scientist n8n project" category.


---

5. Raven Host — 1.5 GB free

[Raven Host](https://ravenhost.space/?utm_source=chatgpt.com)

This one is more conventional free application hosting.

Its current free tier advertises:

1.5 GB RAM

10 GB NVMe

100% CPU

1 server slot

1 database

Python

Node.js

Java

Go

24/7 app hosting

auto-restart

no credit card

free forever




That's substantially more RAM than Deplexo or ModVC.

Problem

It doesn't advertise itself as a generic Docker VPS.

It's more like:

Raven Host panel
      ↓
Python/Node app

rather than:

root@ubuntu
docker compose up -d

So I'd test whether their runtime can accommodate n8n's Node dependencies.

If they allow a persistent Node application with the required ports/processes, it could be interesting.


---

6. RocketVPS — genuine VPS, but too small for comfortable n8n

[RocketVPS](https://rocketvps.io/cloud-vps?utm_source=chatgpt.com)

This is another actual VPS.

Their free Dart plan currently advertises:

0.5 vCPU

512 MB RAM

5 GB NVMe

25 Mbps

100 GB transfer

shared IP/subdomain

full root access

no credit card




This is interesting because you get the thing you actually asked for:

> a real Linux VPS



But...

512 MB is the problem.

n8n is not a tiny application.

I'd regard:

512 MB

as experimental territory, particularly if you have workflows, executions, task runners, and database activity.

You might get it running with careful memory management/swap, but I wouldn't build around it.

And RocketVPS itself offers a paid managed n8n product starting at $4.99/month with 2 vCPU, 4 GB RAM and 20 GB NVMe. 

That gives you a useful indication of what they consider a comfortable n8n environment.


---

7. JustRunMy.App

[JustRunMy.App](https://justrunmy.app/?utm_source=chatgpt.com)

Another interesting container platform.

Free allocation:

0.15 vCPU

0.25 GB RAM

0.3 GB disk

1 app

no credit card

automatic HTTPS

shell

logs

file browser

Docker deployment




But:

256 MB RAM → n8n is not where I'd spend this resource.

It's much more suitable for a tiny Python/Node API.


---

8. Deplexo

[Deplexo](https://deplexo.com/free-hosting?utm_source=chatgpt.com)

Deplexo is genuinely interesting because it explicitly says:

no card

no sleep timer

always-on

128 MB RAM

0.25 CPU

250 MB disk

one app




But for n8n:

No.

I'd use it for:

Python Telegram bot

not:

n8n

The 128 MB memory ceiling is simply too restrictive for the kind of n8n environment you're looking for.


---

9. ModVC

[ModVC](https://panel.modvc.org/?utm_source=chatgpt.com)

Free:

128 MB RAM

0.25 CPU

300 MB storage

Docker

Python

Node.js

24/7

no card




Again:

good bot host, bad n8n host.


---

10. Google Compute Engine — still worth knowing about

Google's standard free tier currently includes an e2-micro Compute Engine VM in eligible US regions. Google's current free-products page confirms the e2-micro VM allowance. 

That's a real VM.

But it doesn't solve your current problem because ordinary Google Cloud generally requires billing verification/payment information.

So:

Google Compute Engine
      ↓
real VPS
      ↓
n8n

is technically excellent.

But:

no credit card

makes it unsuitable for your current situation.


---

The important n8n issue

n8n itself recommends self-hosting using Docker or npm, and its documentation includes Docker, Docker Compose and VPS setups. 

For a serious self-hosted installation, I would target roughly:

2 GB RAM+
1 vCPU+
10 GB+ disk
Docker
persistent storage
HTTPS

rather than trying to squeeze n8n into 128–512 MB.

That's why your choices divide naturally:

🟢 n8n candidates

ZenDevz

Potentially 4 GB / 2 CPU example.

Openworld

Real VPS; resources depend on node.

blitz.cloud

2 GB shared free account + ready-made n8n.

Serv00

512 MB but someone has actually made current n8n work there.

🟡 Experimental

Raven Host

1.5 GB, potentially enough if their runtime allows it.

RocketVPS

512 MB actual VPS.

🔴 Not worth trying for n8n

Deplexo

128 MB.

ModVC

128 MB.

JustRunMy.App

256 MB.


---

There's an even better trick: don't insist on "VPS"

If your goal is specifically:

> I need n8n running 24/7 for Telegram/webhooks



then a VPS isn't necessarily mandatory.

Consider:

Telegram
                    │
                    ▼
              Cloudflare
                Tunnel
                    │
                    ▼
              Openworld VPS
                    │
                 Docker
                    │
                   n8n
                    │
                    ▼
                Supabase

The Cloudflare layer can solve the networking problem if the VPS has awkward IPv4/NAT limitations.

Or:

Telegram
    │
    ▼
Cloudflare Worker
    │
    ▼
Supabase

for workflows that don't actually require n8n.


---

What I'd test, in this order

Not as a "best service" ranking, but as an experiment sequence based on your constraints:

Experiment A

blitz.cloud → one-click n8n

This is the easiest.

[blitz.cloud n8n deployment](https://blitz.cloud/?utm_source=chatgpt.com)

Test whether your Telegram webhook survives the free-tier sleep behavior.


---

Experiment B

Openworld → Ubuntu/Debian → Docker → n8n

[Openworld VPS](https://openworld.eu.org/?utm_source=chatgpt.com)

This is much closer to a genuine VPS.

Use Cloudflare Tunnel if necessary.


---

Experiment C

ZenDevz → 2 CPU / 4 GB VM → Docker → n8n

[ZenDevz](https://www.zendevz.com/?utm_source=chatgpt.com)

This is the wild-card.

If you can actually get the advertised resources without having to contribute hardware yourself, it becomes extremely interesting.

But because it's early/open beta and community infrastructure, I'd treat it as experimental.


---

Experiment D

Serv00 → Node.js → n8n

[Serv00](https://www.serv00.com/?utm_source=chatgpt.com)

This is the "I don't care if it's unconventional; I want to see if I can make $0 n8n work" option.

Someone has already demonstrated it on the current n8n 2.35.7 release, although with substantial workarounds. 


---

Experiment E

Raven Host → Node/Python

[Raven Host](https://ravenhost.space/?utm_source=chatgpt.com)

Worth testing because 1.5 GB is substantially more realistic than 128 MB.


---

And here's the key conclusion from the deeper search

I found very few credible services offering all four simultaneously:

> actual VPS + $0 forever + no credit card + enough RAM for n8n



That's why the genuinely interesting candidates are unusual:

Openworld → real VPS but renewal requirement.

ZenDevz → real VM but decentralized/community infrastructure and early beta.

blitz.cloud → not a VPS, but n8n is first-class and the free resources are much more substantial.

Serv00 → not a VPS, but current users have managed to get n8n running.

Meanwhile, the major cloud providers' free VPS offerings don't solve your no-card constraint.

And one correction from my earlier answer: I would move blitz.cloud considerably higher for n8n now that I've verified its current documentation. It explicitly has n8n in its app store and currently advertises a no-card free plan with 15 apps, 2 GB shared memory and 10 GB storage. 

If you want the most interesting next step:

I can go even deeper into free VPS communities / Discord-hosted VPS / student-free VPS / IPv6 VPS / free ARM VPS / shared VPS, and specifically hunt for 1–4 GB RAM machines that don't require a card, including obscure providers that don't show up in normal "best free VPS" articles.

That's where I expect we'll find the remaining candidates for actual Docker + n8n.


















I pushed the search further, and I found two genuinely interesting new directions, plus several offers I would now remove from your shortlist after checking them more carefully.

The biggest new find: ClodHost

[ClodHost](https://clodhost.com/?utm_source=chatgpt.com) is offering a real persistent Ubuntu VPS during its beta.

Their advertised free S server is:

2 vCPU

4 GB RAM

40 GB NVMe

20 TB/month transfer

persistent Ubuntu VPS

free subdomain + SSL

no usage-based billing

described as free forever during the beta. 


That is excellent n8n hardware.

BUT it fails your requirement

Their FAQ explicitly says a card is required to verify you through Stripe, even though the authorization is $0.00. 

So:

ClodHost: ❌ for you

If you eventually get access to a card, it's worth remembering.


---

RAW: another false positive

I found a package listing claiming RAW had:

> 2 vCPU + 4 GB + 40 GB free forever



but I checked the actual RAW website, and its current pricing is different.

RAW currently lists its smallest 2-vCPU/4-GB server at $9/month, not free. 

There appears to be stale/old documentation or package metadata still describing a raw-free tier. 

Therefore:

RAW: ❌ remove it from the $0 list.

This is exactly why I'm checking the providers individually rather than trusting "free VPS 2026" lists.


---

VPSWALA: possible, but there's a serious n8n problem

The current VPSWALA storefront advertises a free Linux VPS with:

1 ARM64 vCPU

2 GB RAM

500 MB NVMe

10 GB bandwidth

root SSH

no credit card. 


The 2 GB RAM sounds good.

500 MB disk is the problem.

I wouldn't attempt a normal n8n installation there. The OS itself plus Docker/images/database/logs can make 500 MB extremely uncomfortable.

There is also contradictory VPSWALA material: some pages describe 1 GB/20 GB and 30-day trials, while the current storefront shows 2 GB/500 MB as the permanent free starter. 

And a current Trustpilot review describes a discrepancy between the advertised free plan and the signup experience. That's a user report, not independent proof of what every signup sees, but it's another reason to verify carefully. 

For your n8n search:

VPSWALA → 🟡 interesting, but probably not enough disk.


---

FreeVPS.edu.pl — theoretically almost perfect

This one claims:

4 AMD Ryzen cores

4 GB RAM

4 TB bandwidth

IPv4 + IPv6

root/admin

Singapore, USA and Europe

$0 forever

no credit card. 


If those resources are actually provisioned, this would be excellent for n8n.

You could run:

4 CPU
4 GB RAM
      │
      ├── Docker
      │    └── n8n
      │
      └── PostgreSQL/SQLite

But here's the problem

I haven't found enough independent evidence that the advertised VPS is actually being provisioned at those specifications.

The site's claims are essentially self-reported, and its public social footprint appears relatively young. Its own Linktree says the account joined in September 2025. 

So I would classify it:

🟠 Potentially amazing, but unverified.

If you test it, use a throwaway email and don't put important credentials there until you've established that the service is legitimate and stable.


---

GratisVPS: I am removing this one

This is an important correction from my previous answer.

I previously mentioned GratisVPS because it advertises generous resources.

But I found a longer-running Reddit investigation from someone who actually tried it.

The user reported:

VPS never arrived

support didn't respond

no actual usable server

later concluded the service appeared to be harvesting data

another commenter said they also never received a VPS. 


That's user-generated evidence, so it doesn't prove the service is fraudulent by itself.

But combined with the lack of credible evidence of working infrastructure:

GratisVPS → ❌ remove it from your list.

This is exactly the kind of provider I don't want you giving your personal information to just because a website says "6 GB FREE."


---

FreeVPSTrial.net — actually interesting for a temporary n8n lab

[FreeVPSTrial.net](https://www.freevpstrial.net/?utm_source=chatgpt.com) currently advertises:

2 GB RAM

2 vCPU

NVMe

root

30 days

no credit card. 


There's also a public community area with discussions specifically about Docker on 2 GB VPSes. 

This is NOT a forever solution.

But it's useful for:

> Build n8n → learn Docker → build workflows → export everything → migrate.



I'd call this:

🟢 good disposable n8n laboratory

rather than permanent hosting.


---

HOKAS — useful for bots, not n8n

[HOKAS](https://hokas.net/?utm_source=chatgpt.com) supports:

Telegram bots

Discord bots

Python

Node.js

containers

free subdomain

browser console

no card. 


But its free uptime is not actually permanent 24/7.

HOKAS says free containers have limited running time and you need to watch an ad/link flow to add more uptime. An expired container stops; containers left offline for 3 days are deleted. 

So:

Telegram bot → 🟢/🟡

n8n → 🔴


---

Waifly — another one to skip for n8n

Waifly's free tier is:

300 MB RAM

1 GB storage

30% CPU

one MySQL database

€0

no card

no expiry


but free servers are suspended after 3 days offline. 

300 MB is nowhere near where I'd want n8n.

n8n → 🔴


---

Here's a more honest n8n shortlist now

After the additional research, I'd use this:

Provider	Real VPS?	RAM	Storage	Card?	n8n

ZenDevz	✅	~4 GB example	~40 GB example	❌	🟢 experimental
Openworld	✅	varies	varies	❌	🟢 experimental
FreeVPS.edu.pl	claims 4 GB	4 GB	unspecified	❌ claimed	🟠 verify
blitz.cloud	❌ container	2 GB shared	10 GB account	❌	🟢
Serv00	❌ shared	512 MB	3 GB	❌	🟠 proven experimental
FreeVPSTrial	✅	2 GB	NVMe	❌	🟢 30-day
VPSWALA	✅	2 GB	500 MB	❌ claimed	🔴/🟠
RocketVPS	✅	512 MB	5 GB	❌	🔴/🟠
Deplexo	❌	128 MB	250 MB	❌	🔴
HOKAS	❌	unspecified	—	❌	🔴
GratisVPS	claimed	claimed	claimed	❌	❌ remove
ClodHost	✅	4 GB	40 GB	✅	🟢 technically, ❌ for you
RAW	✅	4 GB	40 GB	—	❌ no longer free



---

One thing I found that changes the strategy

There is a very recent real-world n8n example on Serv00.

Someone reported getting n8n 2.35.7 running on Serv00's free FreeBSD hosting in September 2026. They had to work around:

low disk/process quotas

native npm modules

n8n task-runner broker

file-descriptor limits

SQLite/native dependencies


They even documented the installation and restart mechanism. 

That makes Serv00 much more interesting than its specs suggest.

It's not a VPS, but it's evidence that:

> You don't necessarily need a 2–4 GB VPS to experiment with n8n.



You can potentially use weird shared environments.


---

But I would not use 512 MB as your target

Recent n8n users are reporting that 2 GB RAM is a much more comfortable starting point, especially once you add multiple workflows/services. One recent self-hosting discussion specifically recommends around 2 vCPU/2 GB for n8n-heavy setups. 

Another recent user reported running a 2 GB VPS with dozens of workflows in parallel, although that's obviously workload-dependent. 

So I'd target:

Minimum experiment

1 GB

Sensible target

2 GB RAM + 1–2 CPU

Comfortable

4 GB RAM + 2 CPU

n8n + Postgres + Qdrant/AI/etc.

4–8 GB


---

🚨 There's another route I want you to investigate

Instead of finding a "free VPS company," we can hunt for free compute donated to open-source/developer communities.

These are fundamentally different.

For example:

GitHub project
     ↓
open-source status
     ↓
community compute grant
     ↓
actual VM/container

And there are also:

developer cloud grants

open-source infrastructure grants

community VPS programs

hackathon credits

free ARM instances

university-independent developer programs

open-source CI runners

public compute pools


Those can sometimes provide much better machines than commercial free tiers, without requiring student status.


---

And there's one particularly promising lead

LinuxOne Community Cloud has historically offered real VPS instances around 2 vCPU + 4 GB RAM without a credit card, generally as a time-limited community service. An older community discussion describes approximately 90 days of free access. 

I don't want to tell you it's currently available without verifying the 2026 signup status, though.

That's exactly the kind of thing I would investigate next rather than filling the list with questionable "free VPS" SEO sites.

So the next search should be:

LinuxONE Community Cloud + current 2026 availability + Open Source cloud programs + community VPS + ARM free VM + no card + non-student

because that is much more likely to produce a legitimate 2–4 GB machine than another random "FREE 8 GB VPS" website.

And I would also specifically investigate Singapore/Indonesia-region options, because you're in Indonesia and a Singapore VM can give you much better latency than a US/EU free VPS.





