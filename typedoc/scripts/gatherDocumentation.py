from pathlib import Path
import json
import os
import re
import urllib.parse
from pprint import pprint


root = Path("/Users/bigsexy/Desktop/current/ulld/packages")
t = Path("/Users/bigsexy/Desktop/current/ulld/apps/website/src/mdx/docs/")

allMaps = root.glob("*/docs/map.json")

items = {}

for m in allMaps:
    content = json.loads(m.read_text())
    for category in content:
        if category not in items:
            items[category] = []
        for component in content[category]:
            items[category].append(
                {
                    "component": component,
                    "path": m.parent / "output" / content[category][component],
                }
            )


def makeValidDirectory(value: str):
    return value.replace(r"&", "").replace(" ", "")


validIdChars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]


def makeValidId(value: str):
    return "".join([c.lower() for c in list(value) if c.lower() in validIdChars])


def removeSourceSection(content: str):
    return content[0 : content.index("### Source")]


def replaceLinks(content: str, category: str, path: Path) -> str:
    c = content
    matches = re.finditer(r"\[[^]]+\]\((?P<linkContent>[^)]+)\)", content)
    for match in matches:
        matchText = match[0]
        pathText = f"{path}".split("docs/output/")[-1]
        if matchText.__contains__(pathText):
            urlParams = urllib.parse.urlencode({"category": category})
            newMatchContent = matchText.replace(
                pathText, f"docs/user/components?" + urlParams
            )
            print(f"replacing {matchText}")
            c = c.replace(matchText, newMatchContent)
    return c


for category in items:
    target = t / makeValidDirectory(category)
    if not target.exists():
        os.mkdir(target)
    for item in items[category]:
        targetFile = target / f"{item['component']}.mdx"
        content = item["path"].read_text()
        content = removeSourceSection(content)
        targetFile.write_text(
            f"""---
category: {category}
component: {item['component']}
id: {makeValidId(item['component'])}
---

{replaceLinks(content, category, item["path"])}
"""
        )

print("Moved docs")
