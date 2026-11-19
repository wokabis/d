"""Replace credential values with placeholders before the repository is published.

Run from the repository root:

    python3 scripts/sanitize_secrets.py

The script rewrites the listed files in place. It is idempotent: running it
again leaves already-sanitised placeholders alone.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

# Files that were found to carry credentials in their current revision.
TARGETS = [
    "content/IDEAS/research/termux-functions-2.md",
    "content/PROJECTS/google apps scripts/drive gallery ecommerce/gas20.js",
    "content/PROJECTS/google apps scripts/gas prompts/gas 2 next.md",
    "content/PROJECTS/google apps scripts/gas prompts/gas 2 next + prompt+ env.md",
    "content/PROJECTS/google apps scripts/gas prompts/gas 2 next (1).md",
    "content/PROJECTS/google apps scripts/gas prompts/next 2 gas + env.md",
]

# Ordered rules. The first rule that matches a span wins, so provider-specific
# token shapes are listed before the generic KEY=value rule.
RULES: list[tuple[re.Pattern[str], str]] = [
    (re.compile(r"ghp_[A-Za-z0-9]{20,}"), "YOUR_GITHUB_TOKEN_HERE"),
    (re.compile(r"github_pat_[A-Za-z0-9_]{30,}"), "YOUR_GITHUB_FINE_GRAINED_TOKEN_HERE"),
    (re.compile(r"GOCSPX-[A-Za-z0-9_-]{10,}"), "YOUR_GOOGLE_CLIENT_SECRET_HERE"),
    (re.compile(r"AIza[0-9A-Za-z_-]{30,}"), "YOUR_GEMINI_API_KEY_HERE"),
    (
        re.compile(r"([0-9]{6,}-[A-Za-z0-9]{20,}\.apps\.googleusercontent\.com)"),
        r"YOUR_CLIENT_ID.apps.googleusercontent.com",
    ),
    # Assignment style: KEY=value, KEY: value, KEY="value", KEY='value'.
    (
        re.compile(
            r"(?im)^(\s*(?:export\s+)?(?:[A-Z0-9_]*(?:API_KEY|SECRET|TOKEN|PASSWORD|PAT)[A-Z0-9_]*)\s*[:=]\s*)(\"[^\"]*\"|'[^']*'|[^\s#]+)"
        ),
        r"\1YOUR_VALUE_HERE",
    ),
    # Bare 39-character API keys ending in "=".
    (re.compile(r"\b[A-Za-z0-9_-]{38}="), "YOUR_API_KEY_HERE"),
]


def sanitize(text: str) -> str:
    for pattern, replacement in RULES:
        text = pattern.sub(replacement, text)
    return text


def main() -> int:
    changed = 0
    for name in TARGETS:
        path = Path(name)
        if not path.exists():
            print(f"skip (missing): {name}")
            continue
        original = path.read_text(encoding="utf-8", errors="surrogateescape")
        updated = sanitize(original)
        if updated != original:
            path.write_text(updated, encoding="utf-8", errors="surrogateescape")
            changed += 1
            print(f"sanitised: {name}")
        else:
            print(f"unchanged: {name}")
    print(f"{changed} file(s) rewritten")
    return 0


if __name__ == "__main__":
    sys.exit(main())
