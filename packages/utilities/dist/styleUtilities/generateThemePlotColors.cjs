'use strict';

var path = require('path');
var glob = require('glob');
var fs = require('fs');
var coloringPalette = require('coloring-palette');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var path__default = /*#__PURE__*/_interopDefault(path);
var fs__default = /*#__PURE__*/_interopDefault(fs);
var coloringPalette__default = /*#__PURE__*/_interopDefault(coloringPalette);

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var FileData = class {
  constructor(path3, _isDir) {
    __publicField(this, "path");
    __publicField(this, "_isDir");
    __publicField(this, "dirname");
    __publicField(this, "content");
    this.path = path3;
    this._isDir = _isDir;
    this.dirname = this.getDirname(_isDir);
  }
  getFileName() {
    let s = path__default.default.basename(this.path).split(".");
    return s[0];
  }
  getExtension() {
    let s = path__default.default.basename(this.path).split(".");
    return `.${s[s.length - 1]}`;
  }
  getStat() {
    return fs__default.default.statSync(this.path);
  }
  isDir() {
    let s = this.getStat();
    return Boolean(s?.isDirectory());
  }
  getDirname(isDir) {
    let _isDir = typeof isDir === "boolean" ? isDir : this.isDir();
    if (_isDir) {
      return this.path;
    }
    try {
      return path__default.default.dirname(this.path);
    } catch (err) {
      console.error(`Could not get dirname. Path likely does not exist at ${this.path}`);
      return this.path;
    }
  }
  mkdirIfNotExists() {
    if (!fs__default.default.existsSync(this.dirname)) {
      fs__default.default.mkdirSync(this.dirname, { recursive: true });
    }
  }
  getContent() {
    if (this.content)
      return this.content;
    let data = fs__default.default.readFileSync(this.path, { encoding: "utf-8" });
    this.content = data;
    return data;
  }
  exists() {
    return fs__default.default.existsSync(this.path);
  }
  getLines() {
    return this.getContent().split("\n");
  }
  filterLines(cb) {
    let lines = this.getLines().filter((l) => cb(l));
    this.content = lines.join("\n");
  }
  getImportLines() {
    let lines = this.getLines();
    let lineData = [];
    lines.forEach((l, i) => {
      if (l.trim().startsWith("import")) {
        lineData.push({ content: l, index: i });
      }
    });
    return lineData;
  }
  throwIfNotExists() {
    let exists = this.exists();
    if (!exists) {
      throw new Error(`No file exists at ${this.path}. Aborting.`);
    }
  }
  getAsJson() {
    return JSON.parse(this.getContent());
  }
  writeContent(content) {
    let newContent = content || this.content;
    if (!newContent) {
      return console.error("Could not write file content as none was found.");
    }
    this.mkdirIfNotExists();
    fs__default.default.writeFileSync(this.path, newContent, { encoding: "utf-8" });
  }
};
var JsonFile = class extends FileData {
  constructor(path3) {
    super(path3, false);
    __publicField(this, "path");
    this.path = path3;
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
    fs__default.default.writeFileSync(this.path, newContent, { encoding: "utf-8" });
  }
};
var formatHslString = (s) => {
  return s.replace("hsl(", "").replace(")", "").split(",").map((s2) => s2.trim()).join(" ");
};
var flattenColorPalette = (c, format = "hsl") => {
  let lightData = coloringPalette__default.default(c, format);
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
  const colorMapPath = path__default.default.join(
    root,
    "packages/tailwindAndShad/src/shad/defaultThemes/colorMaps"
  );
  let files = glob.globSync("*.json", {
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
  fs__default.default.writeFileSync(
    path__default.default.join(__dirname, "./themeColorGradients.json"),
    JSON.stringify(colorData, null, 4),
    {
      encoding: "utf-8"
    }
  );
};
generateThemePlotColors();
//# sourceMappingURL=out.js.map
//# sourceMappingURL=generateThemePlotColors.cjs.map