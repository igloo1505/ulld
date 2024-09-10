from pathlib import Path
import colorsys as c
import re
import json

regex = {
    "popover": r"^\s*--popover:\s+(?P<H>\d+\.?\d*)\s+(?P<S>\d+\.?\d*)%\s+(?P<L>\d+\.?\d*)%",
    "popoverForeground": r"^\s*--popover-foreground:\s+(?P<H>\d+\.?\d*)\s+(?P<S>\d+\.?\d*)%\s+(?P<L>\d+\.?\d*)%",
    "card": r"^\s*--card:\s+(?P<H>\d+\.?\d*)\s+(?P<S>\d+\.?\d*)%\s+(?P<L>\d+\.?\d*)%",
    "cardForeground": r"^\s*--card-foreground:\s+(?P<H>\d+\.?\d*)\s+(?P<S>\d+\.?\d*)%\s+(?P<L>\d+\.?\d*)%",
    "primary": r"^\s*--primary:\s+(?P<H>\d+\.?\d*)\s+(?P<S>\d+\.?\d*)%\s+(?P<L>\d+\.?\d*)%",
    "primaryForeground": r"^\s*--primary-foreground:\s+(?P<H>\d+\.?\d*)\s+(?P<S>\d+\.?\d*)%\s+(?P<L>\d+\.?\d*)%",
    "secondary": r"^\s*--secondary:\s+(?P<H>\d+\.?\d*)\s+(?P<S>\d+\.?\d*)%\s+(?P<L>\d+\.?\d*)%",
    "secondaryForeground": r"^\s*--secondary-foreground:\s+(?P<H>\d+\.?\d*)\s+(?P<S>\d+\.?\d*)%\s+(?P<L>\d+\.?\d*)%",
    "muted": r"^\s*--muted:\s+(?P<H>\d+\.?\d*)\s+(?P<S>\d+\.?\d*)%\s+(?P<L>\d+\.?\d*)%",
    "mutedForeground": r"^\s*--muted-foreground:\s+(?P<H>\d+\.?\d*)\s+(?P<S>\d+\.?\d*)%\s+(?P<L>\d+\.?\d*)%",
    "border": r"^\s*--border:\s+(?P<H>\d+\.?\d*)\s+(?P<S>\d+\.?\d*)%\s+(?P<L>\d+\.?\d*)%",
    "destructive": r"^\s*--destructive:\s+(?P<H>\d+\.?\d*)\s+(?P<S>\d+\.?\d*)%\s+(?P<L>\d+\.?\d*)%",
    "destructiveForeground": r"^\s*--destructive-foreground:\s+(?P<H>\d+\.?\d*)\s+(?P<S>\d+\.?\d*)%\s+(?P<L>\d+\.?\d*)%",
    "input": r"^\s*--input:\s+(?P<H>\d+\.?\d*)\s+(?P<S>\d+\.?\d*)%\s+(?P<L>\d+\.?\d*)%",
    "ring": r"^\s*--ring:\s+(?P<H>\d+\.?\d*)\s+(?P<S>\d+\.?\d*)%\s+(?P<L>\d+\.?\d*)%",
    "background": r"^\s*--background:\s+(?P<H>\d+\.?\d*)\s+(?P<S>\d+\.?\d*)%\s+(?P<L>\d+\.?\d*)%",
    "foreground": r"^\s*--foreground:\s+(?P<H>\d+\.?\d*)\s+(?P<S>\d+\.?\d*)%\s+(?P<L>\d+\.?\d*)%",
}

p = Path(
    "/Users/bigsexy/Desktop/current/ulld/packages/tailwindAndShad/src/shad/defaultThemes/"
)
target = Path(
    "/Users/bigsexy/Desktop/current/ulld/packages/tailwindAndShad/src/shad/defaultThemes/colorMaps/"
)

files = p.rglob("*.scss")


data = {}


def getNumber(v: float, denominator: float):
    return round(v * denominator, 2)


for f in files:
    content = f.read_text()
    item = {"dark": {}, "light": {}}
    raw = {"dark": {}, "light": {}}
    name = f.name[0 : f.name.index(".")]
    for key in regex:
        matches = re.findall(regex[key], content, re.M)
        rgbLight = c.hls_to_rgb(
            float(matches[0][0]) / 360,
            float(matches[0][2]) / 100,
            float(matches[0][1]) / 100,
        )
        if matches.__len__() >= 2:
            rgbDark = c.hls_to_rgb(
                float(matches[1][0]) / 360,
                float(matches[1][2]) / 100,
                float(matches[1][1]) / 100,
            )
            raw["dark"][key] = rgbDark
        raw["light"][key] = rgbLight
        item["light"][
            key
        ] = f"rgb({getNumber(rgbLight[0], 255)}, {getNumber(rgbLight[1], 255)}, {getNumber(rgbLight[2], 255)})"
        if rgbDark:
            item["dark"][
                key
            ] = f"rgb({getNumber(rgbDark[0], 255)}, {getNumber(rgbDark[1], 255)}, {getNumber(rgbDark[2], 255)})"
    t = target / f"{name}.json"
    rawTarget = target / f"{name}-raw.json"
    _json = json.dumps(item)
    _rawJson = json.dumps(raw)
    t.write_text(_json)
    rawTarget.write_text(_rawJson)
    data[name] = item

print(data)
