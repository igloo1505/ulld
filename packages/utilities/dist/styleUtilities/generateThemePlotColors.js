import { FileData } from '../chunk-IGUAPEDC.js';
import { __publicField } from '../chunk-F3FYYIAV.js';
import path from 'path';
import { globSync } from 'glob';
import fs from 'fs';
import coloringPalette from 'coloring-palette';

var JsonFile = class extends FileData {
  constructor(path2) {
    super(path2, false);
    __publicField(this, "path");
    this.path = path2;
  }
  getJsonContent() {
    this.throwIfNotExists();
    return JSON.parse(this.getContent());
  }
  writeContent(content, indentation = 2) {
    let newContent = content || this.content;
    if (!newContent) {
      throw new Error(`Cannot write content. No content was found.`);
    }
    if (typeof newContent === "object") {
      newContent = JSON.stringify(newContent, null, indentation);
    }
    fs.writeFileSync(this.path, newContent, { encoding: "utf-8" });
  }
};
var formatHslString = (s) => {
  return s.replace("hsl(", "").replace(")", "").split(",").map((s2) => s2.trim()).join(" ");
};
var flattenColorPalette = (c, format = "hsl") => {
  let lightData = coloringPalette(c, format);
  let items = [];
  for (const item in lightData) {
    items.push({
      color: formatHslString(lightData[item].color),
      foreground: formatHslString(lightData[item].contrastText)
    });
  }
  return items;
};
var generateThemePlotColors = () => {
  let root = process.env.ULLD_DEV_ROOT;
  if (!root) {
    throw new Error(
      `No dev root env variable found. Can not continue writing theme colors.`
    );
  }
  const colorMapPath = path.join(
    root,
    "packages/tailwindAndShad/src/shad/defaultThemes/colorMaps"
  );
  let files = globSync("*.json", {
    cwd: colorMapPath,
    absolute: true
  }).filter((p) => !p.includes("-raw")).map((p) => new JsonFile(p));
  let colorData = {};
  for (const file of files) {
    let content = file.getJsonContent();
    let primary = {
      light: content.light.primary,
      dark: content.dark.primary
    };
    let colorMap = {
      light: flattenColorPalette(primary.light),
      dark: flattenColorPalette(primary.dark)
    };
    let fn = file.getFileName();
    colorData[fn] = colorMap;
  }
  fs.writeFileSync(
    path.join(__dirname, "./themeColorGradients.json"),
    JSON.stringify(colorData, null, 4),
    {
      encoding: "utf-8"
    }
  );
};
generateThemePlotColors();
//# sourceMappingURL=out.js.map
//# sourceMappingURL=generateThemePlotColors.js.map