# 07 · Formats and Guides

> How extensions are built, packaged, validated, and published — the anatomy behind every entry in this catalog.

## Formats at a glance

AI extensions overlap: **Agent Skills** provide reusable instructions, **MCP servers** expose tools and data, client manifests package both for installation. Prefer open formats where practical, then add client adapters.

| Format | What it is | Where it runs |
| :----- | :--------- | :------------ |
| Agent Skills | A `SKILL.md` with instructions plus optional scripts and references, loaded on demand | Claude Code, Codex, Gemini CLI, Cursor, and other skill-aware clients |
| MCP server | A tool/data server speaking Model Context Protocol | Any MCP client |
| Codex plugin | A `.codex-plugin/plugin.json` manifest bundling skills, apps, and MCP config | Codex CLI/Desktop |
| DSH bundle | A Cordis module exporting an `apply` function, declared as `dsh.bundle` in package.json | DeepSeek Harness |
| Grok plugin | Optional `.grok-plugin/plugin.json` grouping skills, commands, agents, hooks, MCP, LSP | Grok Build |
| Kimi plugin | `kimi.plugin.json` (or legacy `.kimi-plugin/`) exposing skills, agents, MCP servers | Kimi Code |
| OpenCode plugin | npm package or local directory registered in `opencode.json(c)` | OpenCode |
| ZCode pack | Locale/UI dictionaries layered over the desktop app | ZCode desktop |

## Anatomy

### Codex-compatible plugin

```
my-plugin/
├── .codex-plugin/
│   └── plugin.json          # Required: name, version, description, skills path
├── skills/
│   └── my-skill/
│       ├── SKILL.md          # Required: skill instructions + metadata
│       ├── scripts/          # Optional: executable scripts
│       └── references/       # Optional: docs and templates
├── apps/                     # Optional: app integrations
└── mcp.json                  # Optional: MCP server configuration
```

### DeepSeek Harness bundle

```ts
import type { Context } from '@deepseek-ai/cordis'

export const name = 'my-plugin'

export function apply(ctx: Context) {
  // Register services, tools, or UI contributions with ctx.
}
```

```bash
dsh plugin add <npm-package-or-github-spec>
```

### Grok plugin

```
my-plugin/
├── .grok-plugin/
│   └── plugin.json          # Optional native manifest
├── skills/                  # Optional Agent Skills
├── commands/                # Optional slash commands
├── agents/                  # Optional subagents
└── .mcp.json                # Optional MCP servers
```

```bash
grok plugin install owner/repo --trust
```

### Kimi plugin

```
my-plugin/
├── kimi.plugin.json         # Current Kimi Code manifest
├── skills/                  # Optional skills
├── agents/                  # Optional agents
└── mcpServers/              # Optional MCP server definitions
```

```text
/plugins install https://github.com/owner/repo
```

## Official documentation

| Resource | What it covers |
| :------- | :------------- |
| [Agent Skills docs](https://developers.openai.com/codex/skills) | The skill authoring format. |
| [Build Plugins docs](https://developers.openai.com/codex/plugins/build) | Authoring and packaging plugins. |
| [Plugin structure](https://developers.openai.com/codex/plugins/build#create-a-plugin-manually) | The `.codex-plugin/plugin.json` manifest. |
| [Grok plugin guide](https://github.com/xai-org/grok-build/blob/main/crates/codegen/xai-grok-pager/docs/user-guide/09-plugins.md) | Grok Build plugin authoring. |
| [Grok plugin marketplace](https://github.com/xai-org/plugin-marketplace) | Official Grok catalog format. |
| [Kimi plugin docs](https://github.com/MoonshotAI/kimi-code/blob/main/docs/en/customization/plugins.md) | Kimi Code plugin authoring. |
| [DSH plugin tutorial](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/cordis-tutorial/01-first-plugin.md) | Your first Cordis plugin. |
| [dsh-plugin topic](https://github.com/topics/dsh-plugin) | Community DSH plugin discovery. |

## Ecosystem tooling

| Plugin | What it does | Target |
| :----- | :----------- | :----- |
| [Easy-MCP](https://github.com/Mark007-R/Easy-MCP) | Turns plain Python functions into secure MCP servers, with ready-made read-only GitHub and Postgres servers. | Standalone |
| [effect-actions](https://github.com/gjermundgaraba/effect-actions) | Define a typed action once; serve it over HTTP, MCP, AI Toolkit, and CLI. | Skills |
| [geml](https://github.com/geml-spec/geml) | Agent-native markup language: deterministic block-level editing and built-in validation. | Skills |
| [jevalyzer](https://github.com/kasim/kasim_mcp) | Analyzes MCP tool definitions: structured JSON, annotated source, scores. | MCP |
| [MCP Migration Check](https://github.com/AlpayC/mcp-migration-check) | Deterministic MCP spec migration checker: skill, CLI, GitHub Action, hosted probe. | Skills |
| [otelyssey](https://github.com/using-system/otelyssey) | OpenTelemetry agent-plugin marketplace that validates, reviews, lists, and follows releases. | Multi |
| [Plugin Directory Preflight](https://github.com/gagoar/plugin-directory-preflight) | Runs the plugin directory's upload checks locally and reads the scan report in a screenful. | Skills |
| [Registry Broker](https://github.com/hashgraph-online/registry-broker-codex-plugin) | Delegates tasks to specialist agents via a registry: plan, find, summon, recover sessions. | Codex |
| [skill-sync-publisher](https://github.com/liuyewang/skill-sync-publisher) | Safely synchronizes a skill across public agent-skill registries. | Skills |
| [Skillstore](https://github.com/aiskillstore/marketplace) | Security-audited skills marketplace with one-command installation. | Claude Code · Codex |

## Guides and further reading

| Source | What it covers |
| :----- | :------------- |
| [Codex Plugins, Visually Explained](https://adithyan.io/blog/codex-plugins-visual-explainer) | Visual walkthrough of the plugin system. |
| [Codex Plugins: Slack, Figma, Google Drive](https://arstechnica.com/ai/2026/03/openai-brings-plugins-to-codex-closing-some-of-the-gap-with-claude-code/) | Feature deep dive on the plugin ecosystem. |
| [HostDeFi](https://hostdefi.com) | Token-safety scanner example: on-chain grading across Solana + 7 EVM chains. |
| [OpenAI's Codex Gets Plugins](https://thenewstack.io/openais-codex-gets-plugins/) | Ecosystem overview. |

## Related catalogs

| Catalog | What it offers |
| :------ | :------------- |
| [Awesome DeepSeek Harness Plugins](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin) | Community DSH plugin list and discovery reference. |
| [awesome-codex-plugins](https://github.com/hashgraph-online/awesome-codex-plugins) | Codex-focused catalog. |
| [HOL Plugin Registry](https://hol.org/registry/plugins) | Browsable registry with scanner-backed security analysis. |
| [Kimi Code](https://github.com/MoonshotAI/kimi-code) | Official Kimi runtime and plugin documentation. |
| [xAI Grok Plugin Marketplace](https://github.com/xai-org/plugin-marketplace) | Official Grok marketplace and catalog format. |

**Related:** [06 · Harness-Specific](06-harness-specific.md) · [Plugins index](README.md)
