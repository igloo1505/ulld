from pathlib import Path
import json
import os


root = Path("/Users/bigsexy/Desktop/current/ulld/packages")
t = Path(
    "/Users/bigsexy/Desktop/current/ulld/apps/website/src/components/pageSpecific/docs/"
)

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


for category in items:
    target = t / makeValidDirectory(category)
    if not target.exists():
        os.mkdir(target)
    for item in items[category]:
        targetFile = target / f"{item["component"]}.mdx"
        content = item["path"].read_text()
        targetFile.write_text(f"""---
category: {category}
component: {item["component"]}
---

{content}
""")
