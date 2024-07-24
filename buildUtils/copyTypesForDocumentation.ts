import { appData } from "../packages/utilities/src/appData";
import path from "path";
import fs from "fs";
import { globSync } from "glob";

const root: string = process.env.ULLD_DEV_ROOT!;

if (!root) {
    throw new Error("No ULLD_DEV_ROOT variable found.");
}

const outputPath: string = path.join(
    root,
    "apps/website/content/embeddedDocs/generated",
);

const copyFile = (f: string) => {    
    if (!fs.existsSync(f)) {
        throw new Error(
            `File does not exist while copy types for documentation at ${f}`,
        );
    }
    if(fs.statSync(f).isDirectory()){
        return
    }
    console.log(`Copying file ${f.replace(root, "")} for documentation.`)
    let fileName = path.basename(f).split(".")[0];
    let content = fs.readFileSync(f, { encoding: "utf-8" });
    let withoutImports = content.split("\n").filter((f) => Boolean(!f.startsWith("import") && f.trim() !== "")).join("\n")
    fs.writeFileSync(path.join(outputPath, `${fileName}.txt`), withoutImports, {
        encoding: "utf-8",
    });
    }

for (const f of appData.pathsToCopyForDocumentation) {
    let filePaths = globSync(f, {
        cwd: process.env.ULLD_DEV_ROOT,
        ignore: [
            "**node_modules**"
        ]
    }).map((f) => path.join(root, f))
    for (const f of filePaths) {
       copyFile(f) 
    }
}
