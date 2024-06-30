import fs from "fs";
import path from "path";
import { globSync } from "glob";


const outputPath = path.join(__dirname, "../fumaDocs/source/sourceMap.json");
const docsRoot = path.join(__dirname, "../../content/docs");




let docFiles = globSync("**/*.mdx", {
    cwd: docsRoot,
});

let sourceMap: Record<string, string | Record<string, any>> = {
    files: docFiles
};

fs.writeFileSync(outputPath, JSON.stringify(sourceMap, null, 4), {
    encoding: "utf-8",
});
