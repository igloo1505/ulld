import { globSync } from "glob";
import path from "path";
import fs from "fs";

interface TunnelFile {
    /** Relative to project root */
    file: `${string}/index.ts`;
    /** Directory. Defaults to path.dirname */
    dir?: string;
    ignore?: string[];
    label: string;
    exportType?: boolean;
}

const tunnelFiles: TunnelFile[] = [
    {
        file: "./src/zod/refinedConfigs/index.ts",
        label: "refined configs",
        exportType: false,
    },
];

const getExportString = (
    filePath: string,
    sourceFile: string,
    exportType: boolean,
) => {

    if(!exportType){
        let fpData = path.parse(filePath)
        filePath = path.join(fpData.dir, `${fpData.name}.js`)
    }
    let fp = path.relative(path.dirname(sourceFile), filePath);
    if (!fp.startsWith(".")) {
        fp = fp.startsWith("/") ? `.${fp}` : `./${fp}`;
    }
    if (exportType) {
        return `export type * from "${fp}";`;
    }
    return `export * from "${fp}";`;
};

let projectRoot = path.resolve(import.meta.dirname, "../../");

for (const t of tunnelFiles) {
    let absPath = path.resolve(projectRoot, t.file);
    let cwd = t.dir ? t.dir : path.dirname(absPath);
    let files = globSync("**/*.{ts,tsx}", {
        cwd,
        nodir: true,
        ignore: t.ignore ? [...t.ignore, "index.ts"] : ["index.ts"],
    });
    let exportString = files
        .map((x) => getExportString(path.join(cwd, x), absPath, t.exportType))
        .join("\n");
    fs.writeFileSync(absPath, exportString, {
        encoding: "utf-8",
    });
    if (t.label) {
        console.info(`Generated tunnel file for ${t.label}`);
    }
}

console.info("Generated config tunnel files successfully.")
