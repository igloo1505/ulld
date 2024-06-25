from pathlib import Path
import json
import os
import re
from typing import List
import urllib.parse


root = Path("/Users/bigsexy/Desktop/current/ulld/packages")
t = Path("/Users/bigsexy/Desktop/current/ulld/apps/website/src/mdx/docs/")


replacements = json.loads(
    Path(
        "/Users/bigsexy/Desktop/current/ulld/packages/embeddable-components/docs/replacements.json"
    ).read_text()
)

allMaps = root.glob("*/docs/map.json")

items = {}

for m in allMaps:
    content = json.loads(m.read_text())
    for category in content:
        if category not in items:
            items[category] = []
        for component in content[category]:
            data = content[category][component]
            items[category].append(
                {
                    "component": component,
                    "path": m.parent / "output" / data["path"],
                    "removeSections": (
                        data["removeSections"] if "removeSections" in data else []
                    ),
                    "removePropertyTableColumns": (
                        data["removePropertyTableColumns"]
                        if "removePropertyTableColumns" in data
                        else []
                    ),
                    "deleteUpTo": data["deleteUpTo"] if "deleteUpTo" in data else None,
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


def extendTableCode(content: str) -> str:
    newLines = []
    lines = content.splitlines()
    for l in lines:
        if l.startswith("|"):
            vals = re.split(r"(?<!\\)\|", l)
            newVals = []
            for v in vals:
                if v.__contains__("`"):
                    # Adjust code for table cell here.
                    tempVal = v.replace("`", "").replace("\\", "")
                    v = f"`{tempVal}`"
                newVals.append(v)
            l = "|".join(newVals)
        newLines.append(l)

    return f"""
""".join(
        newLines
    )


def deleteUpTo(content: str, deleteTo: str):
    match = re.search(rf"{deleteTo}", content)
    if match:
        return content[match.span()[0] :]
    return content


def removePropertyTableColumns(content: str, columns: List[str] = []) -> str:
    if columns.__len__() == 0:
        return content
    newLines = []
    lines = content.splitlines()
    isTable = False
    isHeading = False
    removeIndices = []
    for line in lines:
        l = line
        if line.startswith("| Property"):
            isTable = True
            isHeading = True
            cols = line.split("|")
            for i, col in enumerate(cols):
                if col.strip() in columns:
                    removeIndices.append(i)
            headingLine = "|".join(
                [c for i, c in enumerate(cols) if i not in removeIndices]
            )
            l = headingLine
        else:
            isHeading = False
        if isTable and not isHeading:
            l = "|".join(
                [c for i, c in enumerate(line.split("|")) if i not in removeIndices]
            )
        if not line.startswith("|"):
            isTable = False
        newLines.append(l)

    return f"""
""".join(
        newLines
    )


def removeSection(
    content: str, heading: str = "Source", depth: int = 2, sectionIndex: int = 1
) -> str:
    headingContent = f"{''.join(['#' for _ in range(depth)])} {heading}"
    secOccurance = 0
    if headingContent not in content:
        if depth == 6:
            return content
        return removeSection(content, heading, depth + 1)
    newLines = []
    lines = content.splitlines()
    isModuleSection = False
    for l in lines:
        isModuleLine = l.startswith(headingContent)
        if isModuleLine:
            if secOccurance == sectionIndex - 1:
                isModuleSection = True
            else:
                secOccurance = secOccurance + 1
        if isModuleSection and l.startswith("#") and not isModuleLine:
            isModuleSection = False
        if not isModuleSection and not isModuleLine:
            newLines.append(l)
    return f"""
""".join(
        newLines
    )


def insertReplacements(content: str) -> str:
    matches = re.finditer(r"INSERT-(?P<id>[^!]*)!", content)
    c = content
    for match in matches:
        matchText = match[0]
        id = match[1]
        if id not in replacements:
            print(f"No replacement found for {id}")
            return c
        replacement = replacements[id]
        print(f"Replacing {id}")
        c = c.replace(matchText, replacement)
    return c


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
        if item["deleteUpTo"]:
            content = deleteUpTo(content, item["deleteUpTo"])
        content = removeSection(content, "Source", 4)
        content = removeSection(content, "Modules", 3)
        aliases = ", ".join(
            [f"'{x}'" for x in item["aliases"]] if "aliases" in item else []
        )
        # removeCols = ", ".join(
        #     [f"'{x}'" for x in item["removePropertyTableColumns"]]
        #     if "removePropertyTableColumns" in item
        #     else []
        # )
        for removeSec in item["removeSections"]:
            content = removeSection(
                content,
                removeSec["heading"],
                removeSec["depth"] if "depth" in removeSec else 2,
                removeSec["index"] if "index" in removeSec else 1,
            )
        # content = removePropertyTableColumns(
        #     content, item["removePropertyTableColumns"]
        # )
        content = replaceLinks(content, category, item["path"])
        content = insertReplacements(content)
        # content = extendTableCode(content)
        targetFile.write_text(
            f"""---
category: {category}
component: {item['component']}
id: {makeValidId(item['component'])}
aliases: [{aliases}]
---

{content}
"""
        )

print("Moved docs")
