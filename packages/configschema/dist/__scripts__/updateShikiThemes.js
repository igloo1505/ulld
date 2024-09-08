import {
  __dirname
} from "../chunk-OJYONR4K.js";

// src/__scripts__/updateShikiThemes.ts
import fs from "fs";
import path from "path";
import themes from "@ulld/utilities/shikiThemes";
import { bundledThemes, bundledLanguages } from "shiki";
if (themes.length !== Object.keys(bundledThemes).length) {
  throw new Error(`Missing a theme most likely. Current theme list has ${themes.length} items, and the Shiki package exports ${Object.keys(bundledThemes).length} items.`);
}
var targetFile = path.join(__dirname, "../zod/codeThemeSchemas.ts");
var shikiLanguagePath = path.join(__dirname, "../../../utilities/src/shiki/languageList.ts");
if (!fs.existsSync(targetFile)) {
  throw new Error("Target file not found in updateShikiThemes.ts");
}
var quotedThemes = themes.map((t) => `"${t}"`);
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
${Object.keys(bundledLanguages).map((p) => `    "${p}"`).join(",\n")}
] as const;

export type ShikiLanguage = typeof shikiLanguageList[number]

export default shikiLanguageList`;
fs.writeFileSync(targetFile, s, { encoding: "utf-8" });
fs.writeFileSync(shikiLanguagePath, shikiLanguageFileContent, { encoding: "utf-8" });
//# sourceMappingURL=updateShikiThemes.js.map