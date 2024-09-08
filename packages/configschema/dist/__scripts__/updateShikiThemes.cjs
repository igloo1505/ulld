'use strict';

var fs = require('fs');
var path = require('path');
var themes = require('@ulld/utilities/shikiThemes');
var shiki = require('shiki');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var fs__default = /*#__PURE__*/_interopDefault(fs);
var path__default = /*#__PURE__*/_interopDefault(path);
var themes__default = /*#__PURE__*/_interopDefault(themes);

// src/__scripts__/updateShikiThemes.ts
if (themes__default.default.length !== Object.keys(shiki.bundledThemes).length) {
  throw new Error(`Missing a theme most likely. Current theme list has ${themes__default.default.length} items, and the Shiki package exports ${Object.keys(shiki.bundledThemes).length} items.`);
}
var targetFile = path__default.default.join(__dirname, "../zod/codeThemeSchemas.ts");
var shikiLanguagePath = path__default.default.join(__dirname, "../../../utilities/src/shiki/languageList.ts");
if (!fs__default.default.existsSync(targetFile)) {
  throw new Error("Target file not found in updateShikiThemes.ts");
}
var quotedThemes = themes__default.default.map((t) => `"${t}"`);
var s = `import {z} from 'zod';


export const availableShikiThemes = [
${quotedThemes.map((x) => `    ${x}`).join(",\n")}
] as const;

export type ShikiTheme = typeof availableShikiThemes[number]

export const shikiThemeValidator = z.union([
${quotedThemes.map((t) => `    z.literal(${t})`).join(",\n")}
]);
`;
var shikiLanguageFileContent = `const shikiLanguageList = [
${Object.keys(shiki.bundledLanguages).map((p) => `    "${p}"`).join(",\n")}
] as const;

export type ShikiLanguage = typeof shikiLanguageList[number]

export default shikiLanguageList`;
fs__default.default.writeFileSync(targetFile, s, { encoding: "utf-8" });
fs__default.default.writeFileSync(shikiLanguagePath, shikiLanguageFileContent, { encoding: "utf-8" });
//# sourceMappingURL=out.js.map
//# sourceMappingURL=updateShikiThemes.cjs.map