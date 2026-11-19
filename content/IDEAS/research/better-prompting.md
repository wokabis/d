Absolutely. The biggest upgrade is to stop thinking of prompting as “asking nicely” and start thinking of it as specifying a task.

The core formula

A strong prompt usually has 6 ingredients:

> Goal + Context + Inputs + Constraints + Process + Output



For example, instead of:

> “Help me write a better CV.”



Try:

> “I’m applying for a product manager role at a B2B SaaS company. Here’s my current CV: [CV]. Identify the 5 biggest weaknesses relative to the job description: [JD]. Prioritize issues that could prevent me from getting an interview. For each issue, explain why it matters and give a specific revision. Don't invent experience I don't have.”



That gives the model something much more concrete to work with.


---

1. Tell me the outcome, not just the topic

Weak:

> “Tell me about investing.”



Better:

> “Teach me the basics of investing so I can understand a beginner-level portfolio. Assume I know nothing. Focus on stocks, bonds, index funds, diversification, risk, and fees. Use simple examples and finish with a 5-question quiz.”



The difference is what you want to be able to do afterward.

A useful question to ask yourself:

> “What would a successful answer allow me to do?”




---

2. Give relevant context

AI doesn't automatically know which details matter.

Compare:

> “Plan me a workout.”



with:

> “I want to improve general fitness. I can train 3 days a week for 45 minutes, have access to dumbbells and a pull-up bar, and I'm a beginner. Create a progressive 8-week plan.”



The second prompt dramatically reduces guesswork.

Useful context includes:

Your experience level

Your goal

Your audience

Available resources

Constraints

What you've already tried

Examples of what you like/dislike


Don't give every detail you know. Give the details that could change the answer.


---

3. Specify constraints

This is one of the most underused techniques.

Instead of:

> “Explain quantum computing.”



Try:

> “Explain quantum computing to a software engineer who understands classical computing but has never studied quantum mechanics. Keep it under 800 words. Avoid equations initially. Use one concrete analogy, then explain where the analogy breaks down.”



Constraints make the answer predictably shaped.

Useful constraints include:

Length

Difficulty

Tone

Audience

Number of examples

Things to include

Things to avoid

Time/budget/resources

Geographic or technical limitations



---

4. Ask for a particular structure

Don't make the model guess how information should be organized.

Instead of:

> “Analyze this business idea.”



Try:

> “Analyze this business idea using this structure:

1. Customer problem


2. Target customer


3. Existing alternatives


4. Competitive advantage


5. Biggest risks


6. What I'd need to validate first


7. Your overall assessment”





This is especially powerful for research, decision-making, learning, and analysis.


---

5. Give examples

Examples are often more powerful than lengthy instructions.

Suppose you want concise explanations.

You could say:

> “Explain concepts in this style:

Concept: Opportunity cost
Simple definition: What you give up when choosing one option over another.
Example: Spending £20 on a movie means you can't spend that £20 on dinner.

Now explain inflation, compound interest, and diversification in the same format.”



This technique is often called few-shot prompting.

You're effectively saying:

> “Don't just follow my description of the style. Infer the pattern from these examples.”




---

6. Tell the model what not to do

Negative instructions can be extremely useful.

For example:

> “Review my presentation. Be critical. Don't praise it unless the praise is genuinely useful. Don't rewrite the entire thing. Identify the three changes most likely to improve it.”



Compare that with:

> “Can you improve my presentation?”



The second invites a generic rewrite. The first defines the job.

A particularly useful pattern is:

> “Don't X; instead, do Y.”



Examples:

> “Don't give me 20 ideas; give me the 3 strongest.”



> “Don't assume missing information; flag it.”



> “Don't rewrite everything; preserve my voice and change only what is necessary.”




---

7. Make the AI expose assumptions

This is excellent for complicated tasks.

Try:

> “Before answering, identify any assumptions that could materially change your recommendation. If one is important and unknown, ask me about it. Otherwise proceed and clearly state the assumption.”



This prevents the model from quietly filling gaps with guesses.

For decisions, an even better version is:

> “Separate facts, assumptions, and recommendations.”



That distinction can dramatically improve analytical answers.


---

8. Ask for alternatives, not just one answer

Instead of:

> “What's the best way to learn Python?”



Try:

> “Give me three learning approaches:

fastest

most thorough

most practical


Explain the tradeoffs and recommend one based on someone with 5 hours per week.”



Now you're getting decision support, rather than a single potentially arbitrary answer.


---

9. Use iterative prompting

You don't need to write one gigantic perfect prompt.

A powerful workflow is:

Step 1 — Explore

> “Give me 5 possible approaches to solving this.”



Step 2 — Critique

> “Compare them. What are the weaknesses and hidden assumptions of each?”



Step 3 — Choose

> “I care most about speed and low cost. Which approach wins?”



Step 4 — Execute

> “Now implement that approach.”



Step 5 — Review

> “Critically review the result. Find anything that could be improved.”



This is often better than trying to cram the entire task into one prompt.


---

10. Give the AI a role—but don't overdo it

Roles can help establish the right perspective:

> “Act as a skeptical hiring manager reviewing this CV.”



or:

> “Approach this as a senior software architect doing a design review.”



But:

> “You are the world's greatest genius expert in everything…”



usually adds little.

The actual task, context, criteria, and examples matter much more than theatrical role-play.


---

11. Ask for evaluation criteria

This is an advanced technique.

Instead of:

> “Make this better.”



Define what better means:

> “Improve this landing page copy. Optimize for clarity, credibility, and conversion. Preserve the core message. Don't make claims that aren't supported by the original text.”



Now the model has an objective function.

You can go further:

> “Score the current version from 1–10 on clarity, specificity, credibility, and persuasiveness. Explain the lowest scores, then revise it.”



That's much more useful than simply asking for a rewrite.


---

12. Use the model as a collaborator, not just an answer machine

One of my favorite prompting patterns is:

> “Challenge my thinking.”



For example:

> “Here's my plan: [plan].

Don't simply agree with me. Identify the strongest argument against it, the assumption most likely to be wrong, and the thing I'm probably overlooking.”



Or:

> “Try to falsify my conclusion rather than confirm it.”



This is particularly valuable because AI can otherwise be overly accommodating.


---

A powerful general-purpose template

When you're unsure how to prompt, start here:

> Goal: What I want to accomplish
Context: What you need to know
Input: The material/data you're working with
Constraints: What you must/mustn't do
Criteria: What makes the answer good
Output: Exactly how I want the result structured

Before answering, flag any missing information that would materially affect the result.



You don't need to literally use those headings every time. They're a mental checklist.


---

Let's upgrade a mediocre prompt

Suppose your original prompt is:

> “Help me start a business.”



I'd turn it into:

> “I want to start a small online business that could eventually replace a £3,000/month income. I can invest up to £2,000 and have about 10 hours per week. I have experience in [X] and [Y], but no coding skills.

Generate 5 business models that fit these constraints. For each, estimate startup complexity, time to first revenue, scalability, major risks, and why I might have an advantage.

Then rank them. Be skeptical: eliminate ideas that depend on unrealistic assumptions. Finish by giving me the 3 cheapest experiments I could run in the next 14 days to validate the top idea.”



Notice what happened.

We went from:

topic → objective → constraints → evaluation → decision → action

That's the fundamental progression in good prompting.


---

The 5 techniques I'd learn first

If you only remember five things:

1. Specify the outcome.
“What do I want to accomplish?”

2. Provide context.
“What does the model need to know to make a good decision?”

3. Define constraints.
“What should the answer include/exclude?”

4. Define success.
“What makes one answer better than another?”

5. Iterate.
“Explore → critique → choose → execute → review.”

And here's the most important mindset shift:

> A good prompt isn't necessarily long. It's precise about the things that matter.



If you want to get really good at this, the next level is learning prompt patterns for different tasks—research, coding, writing, learning, brainstorming, decision-making, and working with documents all benefit from different techniques.



Good. Now let's move from basic prompting to professional prompting.

The key realization is:

> Different tasks require different prompt architectures.



You shouldn't use the same style of prompt for debugging code, researching a market, learning a concept, or making a business decision.


---

Level 2 — Prompting by task

1. Research prompts

A weak research prompt:

> “Research AI agents.”



A much stronger one:

> “Research the current AI-agent ecosystem as of August 2026. I'm a developer trying to decide what technologies to learn and build with.

Compare agent frameworks, model providers, MCP, RAG, workflow automation, and agent orchestration.

For each:

What problem does it solve?

When should I use it?

When should I not use it?

Current maturity

Major alternatives

Learning difficulty

Production considerations

Free/low-cost options


Separate established facts from your interpretation. Prioritize primary sources and current documentation. Flag anything that may have changed recently.

Finish with a recommended learning sequence for a developer starting from fundamentals.”



Notice that this prompt specifies research methodology, not merely a topic.

Advanced research instruction

Add:

> “Don't stop at the first plausible answer. Look for evidence that could contradict the initial conclusion.”



That's a huge upgrade.

You're asking for adversarial research, rather than confirmation.


---

2. Coding prompts

A weak coding prompt:

> “Fix my Bash script.”



Better:

> “Debug this Bash script.

Environment:

Termux on Android

Bash

GitHub CLI


Goal: The script should upload variables to a GitHub repository.

Problem: [error/output]

Code: [code]

First explain the root cause. Then propose the smallest safe fix. Don't rewrite unrelated parts. Afterward, give me commands to test the fix, including at least one failure case.”



That's already substantially better.

But there's an even better pattern:

Diagnose → Hypothesize → Test → Fix → Verify

Tell the AI:

> “Don't immediately rewrite the code. First diagnose the likely cause, state your hypothesis, propose a test that would confirm it, and only then recommend the fix.”



That's closer to how experienced engineers actually debug production systems.


---

3. Learning prompts

Don't simply ask:

> “Teach me Docker.”



Instead:

> “Teach me Docker from beginner to practical proficiency.

First assess what concepts I need to understand.

Build a progression from:

1. mental model


2. basic concepts


3. hands-on commands


4. common mistakes


5. real-world architecture


6. production considerations



After each major concept, give me a small exercise. Don't reveal the answer immediately. If I make a mistake, diagnose my misunderstanding rather than simply giving me the correct answer.”



This turns AI into a tutor, rather than a textbook.


---

4. Decision-making prompts

This is one of the most valuable categories.

Don't ask:

> “Should I use Supabase?”



Instead:

> “Help me decide whether Supabase is appropriate for this project.

Project: [description]

Constraints: [budget, scale, team, timeline]

Compare Supabase against: [alternatives]

Evaluate:

development speed

cost

scalability

operational complexity

lock-in

security

migration difficulty

ecosystem


Give each criterion a score and explain the score.

Then argue both sides before giving your recommendation.”



You're forcing the model to perform comparative reasoning.


---

5. Brainstorming prompts

Most people ask:

> “Give me SaaS ideas.”



That's almost guaranteed to produce generic garbage.

Instead:

> “Generate 20 SaaS opportunities for developers.

Constraints:

$0–$50 initial budget

solo founder

should be buildable by one developer

preferably recurring revenue

avoid heavily regulated industries


Don't optimize for novelty alone. Look for painful, frequent problems with identifiable paying customers.

For each idea provide: problem → customer → existing workaround → proposed solution → why they might pay → acquisition channel.

Then eliminate the weakest 15 and explain why.”



That last step is important.

Generation + filtering is much better than generation alone.


---

Level 3 — Meta-prompting

Now we get interesting.

Instead of asking AI to solve your problem immediately, ask it to improve the problem definition first.

For example:

> “Before solving my problem, determine whether my request is well-defined. Identify ambiguity, missing requirements, conflicting constraints, and assumptions. Then propose a better version of my prompt. Don't solve the problem yet.”



This is meta-prompting.

It lets AI help you become better at communicating with AI.


---

A very powerful prompt for you specifically

Since you want to become faster and more organized, I'd use this frequently:

> “First, improve my prompt. Preserve my actual intent but make it clearer, more precise, and easier to execute. Explain the important changes briefly. Then answer the improved prompt.”



That means you don't need to already know how to formulate perfect requests.

You can simply dump your rough thought into ChatGPT.

For example:

> “I need curl commands for all the GitHub secrets stuff and variables and environments and I want to test everything but I don't know what API endpoints exist.”



The AI can transform that into a structured engineering task.


---

Level 4 — Give the AI an operating procedure

For complicated work, don't just describe the desired result.

Describe the process.

For example:

> “Follow this process:

1. Understand the objective.


2. Identify missing information.


3. List viable approaches.


4. Compare their tradeoffs.


5. Recommend the best approach.


6. Execute it.


7. Verify the result.


8. Report failures and remaining risks.”





This is particularly useful for:

coding

infrastructure

research

business analysis

automation

troubleshooting


You're essentially turning the model into an agent with a procedure.


---

Level 5 — Verification

This is where prompting starts becoming much more serious.

Never assume:

> “The AI gave me an answer, therefore it's correct.”



Instead ask:

> “Now audit your answer. Identify factual claims, assumptions, possible errors, and anything that should be verified externally.”



For code:

> “Review this implementation for bugs, security issues, edge cases, portability problems, and incorrect assumptions.”



For research:

> “Identify which claims require primary-source verification.”



For business:

> “Find the assumptions most likely to invalidate this business case.”




---

The professional loop

For important work, think:

PROMPT → RESULT → CRITIQUE → REVISION → VERIFY

Not:

PROMPT → RESULT → DONE

That's probably one of the biggest differences between casual AI usage and serious AI-assisted work.


---

One more advanced trick: separate exploration from execution

Suppose you say:

> “Build me an automated GitHub secrets management system.”



That's potentially dangerous because you've jumped straight into implementation.

Instead:

Phase 1 — Explore

> “Map the problem. Identify requirements, APIs, security concerns, architectures, and alternatives. Don't write code.”



Phase 2 — Decide

> “Compare the architectures and recommend one given my constraints.”



Phase 3 — Design

> “Create the technical design.”



Phase 4 — Implement

> “Now implement the design.”



Phase 5 — Test

> “Create tests including failure and security cases.”



Phase 6 — Audit

> “Perform a production-readiness review.”



This dramatically reduces wasted work.


---

Your new mental model

Think of prompting as giving an AI engineer a ticket.

Bad ticket:

> “Make the app better.”



Good ticket:

> Objective:
Reduce API response time.

Current state:
Average latency is 1.8 seconds.

Target:
<500ms for 95% of requests.

Constraints:
Don't change the public API. Don't introduce paid infrastructure.

Evidence:
[logs/code]

Acceptance criteria:
p95 <500ms, tests pass, no regression in functionality.

Process:
Diagnose first, propose options, then implement the smallest safe change.



That's prompting at an engineering level.


---

And here's a rule I want you to internalize

When you catch yourself typing:

> “Can you help me with…”



stop for two seconds.

Ask yourself:

What exactly am I trying to accomplish?

Then add:

What does the AI need to know?

Then:

What constraints matter?

Then:

How will I know the answer is good?

That tiny mental routine will improve almost every prompt you write.

And for your particular goal of becoming extremely fast with AI, the next major skill after this is prompt chaining / AI workflows: turning one large task into a sequence where the output of one AI operation becomes the input to the next, with research, critique, verification, tools, GitHub, code execution, and automation connected together. That's where prompting starts becoming AI systems engineering, rather than merely “writing good prompts.”




Let's go one level deeper: prompting as system design.

At this point, stop thinking:

> “What magic words make ChatGPT smarter?”



Think:

> “How do I design a workflow in which the model has enough information, makes fewer assumptions, produces useful intermediate artifacts, and verifies its own work?”



That's the real skill.


---

Level 6 — Prompt chaining

A complex task should often become a chain:

Understand → Research → Analyze → Decide → Execute → Test → Audit

For example, imagine you want to add GitHub Variables support to ghenv.

Don't start with:

> “Add variables support.”



Instead:

Prompt 1 — Understand the problem

> “Analyze the current ghenv architecture and determine exactly what needs to change to support GitHub Variables. Don't modify anything yet.”



Prompt 2 — Research

> “Research the current GitHub REST API endpoints for repository, environment, organization, and user-level variables. Verify against official GitHub documentation.”



Prompt 3 — Design

> “Using the existing architecture and verified API capabilities, design the smallest coherent implementation.”



Prompt 4 — Implementation

> “Implement the approved design. Preserve existing behavior.”



Prompt 5 — Testing

> “Create a test matrix covering successful operations, invalid inputs, missing environments, authentication failures, and API errors.”



Prompt 6 — Audit

> “Review the implementation as a senior production engineer. Look specifically for security issues, incorrect API assumptions, backwards compatibility problems, and poor error handling.”



That's vastly more reliable than one giant prompt.


---

Level 7 — Give the AI artifacts

AI works much better when you give it evidence.

Instead of:

> “Why isn't my script working?”



Give:

Environment:
Termux / Android
Bash 5.x
GitHub CLI version: ...

Command:
...

Expected:
...

Actual:
...

Exit code:
...

Relevant code:
...

Recent changes:
...

What I've already tested:
...

Now the model has something resembling a real incident report.

This is essentially prompting with structured evidence.


---

Level 8 — Context engineering

This is one of the biggest concepts you'll encounter as you get deeper into AI.

A model's performance isn't determined only by the prompt.

It's determined by the context you give it.

Think:

> Model + Instructions + Context + Tools + State



For a coding task, context might include:

repository structure

relevant files

configuration

error logs

Git history

tests

API documentation


For research:

primary sources

competing sources

dates

datasets

previous conclusions


For business:

customer interviews

pricing

competitors

financial assumptions

market evidence


So instead of endlessly trying to perfect a sentence, ask:

> “What information would a highly competent human need before attempting this task?”



Then provide that information.

That's context engineering.


---

Level 9 — Control the model's uncertainty

One of the biggest AI mistakes is treating uncertainty as certainty.

Tell the model explicitly:

> “If you aren't confident, say so. Don't fill missing information with guesses.”



Better:

> “Classify important claims as:

Verified

Strong inference

Assumption

Unknown


Do not present assumptions as facts.”



For technical work:

> “If the API behavior is uncertain, verify it from current official documentation before recommending an implementation.”



This is especially important for things that change frequently.


---

Level 10 — Separate facts from decisions

This is an extremely useful pattern.

Suppose you're deciding whether to use a technology.

Ask:

Facts

> “What is objectively true?”



Interpretation

> “What do those facts imply?”



Decision

> “Given my constraints, what should I do?”



Don't mix all three together.

For example:

> Fact: Service X has feature Y.



> Interpretation: This reduces implementation complexity.



> Decision: Therefore X is preferable for this particular project.



That makes reasoning much easier to inspect.


---

Level 11 — Force tradeoffs

Bad AI answers often recommend everything.

> “Use React, Next.js, Supabase, PostgreSQL, Redis, Kubernetes, Terraform, Docker, MCP, RAG, agents…”



Congratulations—you now have a startup's infrastructure department.

Instead ask:

> “You must choose one approach. What would you choose if speed mattered most?”



Or:

> “You have to eliminate 3 of these technologies. Which ones and why?”



Or:

> “What would a senior engineer deliberately not build here?”



This produces much more practical answers.


---

Level 12 — Ask for the simplest viable solution

This is especially important for developers.

Try:

> “Optimize for the smallest solution that reliably solves the problem. Don't introduce abstractions, dependencies, infrastructure, or features unless they provide a concrete benefit.”



This protects you from overengineering.

You can then deliberately escalate:

> “Now show me what the production-grade version would look like at larger scale.”



That's much better than prematurely building the enterprise version of a problem nobody has validated.


---

Level 13 — Use acceptance criteria

This is one of the strongest techniques from software engineering.

Instead of:

> “Build a GitHub secrets CLI.”



Define:

> “Success means:

existing functionality remains compatible

secrets can be uploaded

variables can be uploaded

missing environments produce a clear error

authentication errors are surfaced

malformed input is rejected

exit codes are meaningful

no secret values appear in logs”




Now the AI has a definition of done.

Without acceptance criteria, you are asking:

> “Build something that seems right.”



With them, you're asking:

> “Satisfy these observable conditions.”



Huge difference.


---

Level 14 — Use adversarial prompting

Here's a powerful pattern:

> “Assume your proposed solution is wrong. Try to break it.”



For code:

> “Attack this implementation with edge cases.”



For architecture:

> “Give me the strongest argument against this architecture.”



For business:

> “Assume this business will fail. What are the three most likely reasons?”



For research:

> “Search specifically for evidence contradicting the conclusion.”



This fights confirmation bias.


---

Level 15 — Have multiple perspectives

You don't necessarily need multiple AI models.

You can ask one model to change perspective.

For example:

> “Evaluate this design from four perspectives:

1. developer


2. security engineer


3. operations engineer


4. end user



Identify conflicts between their priorities.”



Now you're getting multi-perspective analysis.


---

Level 16 — Progressive disclosure

Don't dump everything into the first prompt.

A powerful workflow is:

First

> “Give me a high-level map.”



Then

> “Expand section 3.”



Then

> “Now go deep on the implementation.”



Then

> “Give me the exact commands.”



This keeps the reasoning manageable and lets you steer.


---

Level 17 — Ask AI to improve your own thinking

This is probably particularly valuable for you.

Don't just ask:

> “Answer my question.”



Ask:

> “First determine whether I'm asking the right question.”



For example:

> “I think I should build X. Before discussing implementation, challenge whether X is actually the right problem to solve.”



Or:

> “Identify what I'm assuming without realizing it.”



Or:

> “What question should I actually be asking?”



That turns AI into a thinking partner.


---

Level 18 — Build reusable prompt patterns

Eventually, you shouldn't reinvent prompts.

Build a personal library.

For example:

Debugging

> Diagnose → reproduce → hypothesis → test → fix → regression test.



Research

> Scope → sources → evidence → contradiction → synthesis → recommendation.



Learning

> Explain → example → exercise → feedback → harder exercise → assessment.



Business

> Problem → customer → alternatives → economics → acquisition → validation.



Coding

> Requirements → architecture → implementation → tests → security → review.



Decision

> Options → criteria → tradeoffs → uncertainty → recommendation → failure conditions.



These become mental macros.


---

The really important transition

At the beginner level, you ask:

> “What prompt should I use?”



At the intermediate level:

> “How do I structure this prompt?”



At the advanced level:

> “What workflow should the AI follow?”



And eventually:

> “Which parts should be automated?”



That last transition is where your interests in MCP, agents, RAG, GitHub, automation, and AI-assisted development become relevant.

Prompting becomes just one component of a larger system:

┌─────────────┐
          │   Goal      │
          └──────┬──────┘
                 ↓
        ┌─────────────────┐
        │ Context / Data  │
        └────────┬────────┘
                 ↓
        ┌─────────────────┐
        │ AI Reasoning    │
        └────────┬────────┘
                 ↓
        ┌─────────────────┐
        │ Tool Execution  │
        └────────┬────────┘
                 ↓
        ┌─────────────────┐
        │ Verification    │
        └────────┬────────┘
                 ↓
        ┌─────────────────┐
        │ Feedback / State │
        └────────┬────────┘
                 │
                 └──────→ next iteration

That's an AI workflow.

And here's the principle I want you to remember:

> Don't optimize the prompt when the real problem is the workflow.



If the AI doesn't know something, improve the context.

If it repeatedly makes the same mistake, improve the instructions or verification.

If the task requires external information, give it tools/data.

If the task is repetitive, automate the workflow.

If the task is too large, decompose it.

If the answer is unreliable, add tests and verification.

That is the bridge from “prompt engineering” → “AI engineering.”