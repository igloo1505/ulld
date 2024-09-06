import { globSync } from "glob";
import fs from "fs";
import path from 'path'

const lineMatchesRegex = (x: string) => {
    let a = /from\s*[\'\"][\S\w\_]+\.json[\'\"]/gim.test(x)
    let b = /with\s+\{\s*type:\s*[\'\"]json[\'\"]\s*\}/gmi.test(x)
    return a && !b
};

const fileHasImportWithoutAttribute = (p: string) => {
    let content = fs.readFileSync(p, { encoding: "utf-8" });
    let lines = content.split("\n").filter((x) => x.trim().startsWith("import"));
    return lines.some((x) => lineMatchesRegex(x));
};

export const findJsonImportsWithoutAnnotation = (
    rootDir: string,
    glob: string = "**/*.{ts,tsx,js,jsx}",
    ignore: string[] = [],
) => {
    let files = globSync(glob, {
        cwd: rootDir,
        nodir: true,
        ignore: ["**node_modules**", ...ignore],
    });
    let filesWithImportsAndNoAnnotation = files.filter((f) => fileHasImportWithoutAttribute(path.join(rootDir, f)))
    console.log(filesWithImportsAndNoAnnotation)
};


findJsonImportsWithoutAnnotation("/Users/bigsexy/Desktop/current/ulld/packages/build/src/")
