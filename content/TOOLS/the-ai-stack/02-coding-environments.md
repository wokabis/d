# 02 · Coding Environments

> The software that writes software with you — commercial editors and assistants first, then the open-source editors, CLI agents, and specialized tooling.

The coding landscape has shifted from small autocomplete to agentic environments that plan, edit, run, and verify. This page covers both ends: the big SaaS platforms and the open-source projects.

## Commercial editors and assistants

The majors, ordered by what they bring to the table rather than by valuation.

| Tool | Works with | What it does | Pricing | Free tier | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [GitHub Copilot](https://github.com/features/copilot) | VS Code, JetBrains, Visual Studio, Neovim | AI pair programmer that completes, chats, and edits inline. | From $10/mo individual, $19/user/mo business | 2,000 completions/mo, 50 premium requests/mo (free for verified students, teachers, OSS maintainers) | Runs on Microsoft |
| [Amazon Q Developer](https://aws.amazon.com/q/developer/) | VS Code, JetBrains, terminal | AWS-native assistant for codegen, explanation, and security scanning. | $19/user/mo Pro | 50 chat/mo, 1,000 LOC transformation/mo, 25 account queries/mo | Runs on Amazon |
| [Cody by Sourcegraph](https://sourcegraph.com/cody) | VS Code, JetBrains, Neovim | Coding assistant powered by code-search context, multi-model. | Pro $9/mo, Enterprise $19/user/mo | 500 autocompletions/mo, 20 chats/mo | Sourcegraph |
| [Codeium](https://codeium.com/) | 40+ editors | Fast completion with repository-wide search and chat. | Free; Teams $15/user/mo; Enterprise $45/user/mo | Unlimited single-user completions, limited advanced features | Codeium / Exafunction |
| [Tabnine](https://www.tabnine.com/) | VS Code, JetBrains, Visual Studio, Sublime, Neovim | Private, secure completion with self-hosted/local model support. | Pro $12/user/mo, Enterprise $39/user/mo | Basic completions, 90-day Pro trial | Tabnine |
| [Double.bot](https://www.double.bot/) | VS Code | Lightweight assistant with fast completions and latest models. | Pro $20/mo | 50 premium requests/mo | Seed / YC |

## AI-native editors

Editors rebuilt around agentic workflows.

| Tool | What it does | Pricing |
| :--- | :----------- | :------ |
| [Cursor](https://cursor.com/) | Editor built around codebase-aware chat and multi-file edits. | Freemium |
| [Zed](https://github.com/zed-industries/zed) | High-performance Rust editor with native AI capabilities. | Open Source |
| [Windsurf](https://codeium.com/windsurf) | Editor with agentic flow-mode edits; now the Codeium CLI + IDE line. | Freemium |
| [Devin](https://devin.ai/) | Coding agent that became a desktop IDE; autonomously plans, codes, and ships. | Paid |
| [Replit](https://replit.com/) | Browser IDE whose agent scaffolds, runs, and hosts projects. | Freemium |

## Open-source editors and agents

| Tool | Works with | What it does | License |
| :--- | :--- | :----------- | :------ |
| [Cline](https://github.com/cline/cline) | VS Code, CLI, SDK | Model-agnostic autonomous agent for planning, file edits, command execution, and browser use. | Apache-2.0 |
| [Roo Code](https://github.com/RooCodeInc/Roo-Code) | VS Code | Advanced agentic coding framework descended from Cline. | Apache-2.0 |
| [Continue](https://github.com/continuedev/continue) | VS Code, JetBrains | The leading open-source autopilot: autocomplete and chat pointed at any model, local or remote. | Apache-2.0 |
| [Melty](https://github.com/meltylabs/melty) | Built-in editor | First open-source AI editor that tracks changes across your entire stack. | Apache-2.0 |
| [Tabby](https://github.com/TabbyML/tabby) | VS Code, JetBrains, Vim/Neovim | Self-hosted, private AI coding assistant. | Apache-2.0 |
| [Continue CLI](https://github.com/continuedev/continue) | Terminal | Agentic CLI variants of the Continue editor. | Apache-2.0 |
| [Sweep](https://github.com/sweepai/sweep) | GitHub App | AI-powered GitHub App for automated issue fixing. | AGPL-3.0 |

## How to pick

- **Don't want to leave your editor:** a SaaS extension like Copilot, Cody, or Codeium one-liners into the editors you already use.
- **Want the agent to own the whole task:** Cline, Roo Code, or an AI-native editor like Cursor or Zed.
- **Privacy is non-negotiable:** self-hosted Continue or Tabby keeps everything local.
- **Autonomous maintenance:** Sweep runs as a GitHub App and fixes issues without you.

**Context:** the extension economy that supercharges most of these agents lives in the [Plugins](plugins/README.md) catalog.
