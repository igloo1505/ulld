import fs from 'fs'
import path from 'path'
import themes from "@ulld/utilities/shikiThemes";
import { bundledThemes } from 'shiki';


if(themes.length !== Object.keys(bundledThemes).length){
    throw new Error(`Missing a theme most likely. Current theme list has ${themes.length} items, and the Shiki package exports ${Object.keys(bundledThemes).length} items.`)
}



const targetFile = path.join(__dirname, "../zod/codeThemeSchemas.ts")


if(!fs.existsSync(targetFile)){
    throw new Error("Target file not found in updateShikiThemes.ts")
}

const quotedThemes = themes.map((t) => `"${t}"`)

const s = `import {z} from 'zod';


export const availableShikiThemes = [
${quotedThemes.join(",\n")}
] as const;


export const shikiThemeValidator = z.union([
${quotedThemes.map((t) => `z.literal(${t})`).join(",\n")}
]);
`



fs.writeFileSync(targetFile, s, {encoding: "utf-8"})

