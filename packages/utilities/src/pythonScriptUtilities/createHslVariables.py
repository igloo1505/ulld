import os
from pathlib import Path


def getHslVars(line: str):
    c = line.split(":")[1].strip().split(" ")
    h = c[0]
    s = c[1]
    l = c[2].replace(";", "")
    return f"""    --primary-h: {h};
    --primary-s: {s};
    --primary-l: {l};
"""


for p in Path("/Users/bigsexy/Desktop/currentProjects/ulld/packages/tailwindAndShad/src/shad/defaultThemes").rglob("*.scss"):
    content = p.read_text().splitlines()
    s = ""
    for line in content:
        if not line.strip().startswith("--primary:"):
            s += f"""{line}
"""
        else:
            s += f"""{line}
"""
            s += getHslVars(line)
    p.write_text(s)
