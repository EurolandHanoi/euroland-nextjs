from __future__ import annotations

import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PAGES_DIR = ROOT / "src" / "pages"
OUT_PATH = ROOT / "site-text-inventory.json"

EXCLUDED_FILES = {
    "SiteMap.tsx",
}

EXCLUDED_DIR_PARTS = {
    "legal",
}

EXCLUDED_PHRASES = {
    "Book a Demo",
    "Book a demo",
    "Talk to Us",
    "Contact us",
    "Contact Us",
    "Submit",
    "Apply",
    "Read more",
    "Read article",
    "View all articles",
    "View all articles ->",
    "Explore our tools",
    "Get Started",
    "See it in action",
    "Switch to English",
    "Talk to us",
    "Subscribe",
    "Search",
}

EXCLUDED_KEYWORDS = (
    "privacy",
    "terms of use",
    "cookie policy",
    "cookies",
    "gdpr",
    "accessibility",
    "security at euroland ir",
    "site map",
    "navigation",
    "legal",
)

STRING_RE = re.compile(r'"((?:[^"\\]|\\.)*)"')
T_FALLBACK_RE = re.compile(r't\(\s*"[^"]+"\s*,\s*"((?:[^"\\]|\\.)*)"', re.MULTILINE)


def is_content_string(value: str) -> bool:
    text = value.strip()
    if not text:
      return False
    lower = text.lower()
    if text in EXCLUDED_PHRASES:
        return False
    if any(keyword in lower for keyword in EXCLUDED_KEYWORDS):
        return False
    if text.startswith("/") or text.startswith("http"):
        return False
    if text.startswith("rgb(") or text.startswith("var("):
        return False
    if text.endswith((".svg", ".jpg", ".jpeg", ".png", ".webp", ".mp4", ".avif")):
        return False
    if any(token in text for token in ("@/", "className", "px", "geo:", "node[", "aria-label", "style={{", "href=", "src=")):
        return False
    if re.fullmatch(r"[A-Za-z0-9_\-./:#+ ]{1,18}", text) and (" " not in text or text.isupper()):
        return False
    if re.fullmatch(r"[0-9 .:+\-/()]+", text):
        return False
    if len(text) < 4:
        return False
    return True


def normalize(text: str) -> str:
    text = bytes(text, "utf-8").decode("unicode_escape")
    text = text.replace("\u2014", "-").replace("\u2013", "-").replace("\u2019", "'").replace("\u201c", '"').replace("\u201d", '"')
    text = re.sub(r"\s+", " ", text).strip()
    return text


def extract_strings(content: str) -> list[str]:
    values: list[str] = []
    seen: set[str] = set()

    for match in T_FALLBACK_RE.finditer(content):
        text = normalize(match.group(1))
        if is_content_string(text) and text not in seen:
            seen.add(text)
            values.append(text)

    for match in STRING_RE.finditer(content):
        text = normalize(match.group(1))
        if is_content_string(text) and text not in seen:
            seen.add(text)
            values.append(text)

    return values


def main() -> None:
    pages = []
    for path in sorted(PAGES_DIR.rglob("*.tsx")):
        if path.name in EXCLUDED_FILES:
            continue
        if any(part in EXCLUDED_DIR_PARTS for part in path.parts):
            continue
        rel = path.relative_to(ROOT).as_posix()
        strings = extract_strings(path.read_text(encoding="utf-8"))
        if strings:
            pages.append({
                "page": rel,
                "strings": strings,
            })

    OUT_PATH.write_text(json.dumps({"pages": pages}, ensure_ascii=False, indent=2), encoding="utf-8")


if __name__ == "__main__":
    main()
