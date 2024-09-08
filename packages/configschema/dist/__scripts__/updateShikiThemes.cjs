"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/__scripts__/updateShikiThemes.ts
var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _shikiThemes = require('@ulld/utilities/shikiThemes'); var _shikiThemes2 = _interopRequireDefault(_shikiThemes);
var _shiki = require('shiki');
if (_shikiThemes2.default.length !== Object.keys(_shiki.bundledThemes).length) {
  throw new Error(`Missing a theme most likely. Current theme list has ${_shikiThemes2.default.length} items, and the Shiki package exports ${Object.keys(_shiki.bundledThemes).length} items.`);
}
var targetFile = _path2.default.join(__dirname, "../zod/codeThemeSchemas.ts");
var shikiLanguagePath = _path2.default.join(__dirname, "../../../utilities/src/shiki/languageList.ts");
if (!_fs2.default.existsSync(targetFile)) {
  throw new Error("Target file not found in updateShikiThemes.ts");
}
var quotedThemes = _shikiThemes2.default.map((t) => `"${t}"`);
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
${Object.keys(_shiki.bundledLanguages).map((p) => `    "${p}"`).join(",\n")}
] as const;

export type ShikiLanguage = typeof shikiLanguageList[number]

export default shikiLanguageList`;
_fs2.default.writeFileSync(targetFile, s, { encoding: "utf-8" });
_fs2.default.writeFileSync(shikiLanguagePath, shikiLanguageFileContent, { encoding: "utf-8" });
//# sourceMappingURL=updateShikiThemes.cjs.map