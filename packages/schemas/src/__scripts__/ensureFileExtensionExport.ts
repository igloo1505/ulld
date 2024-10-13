import path from "path";
import fs from "fs";
import { globSync } from "glob";

const databaseTunnelFiles = globSync("**/index.ts", {
    cwd: path.resolve(import.meta.dirname, "../database"),
    nodir: true,
    absolute: true,
});

const replaceLine = (l: string): string => {
    if (l.endsWith("';") && !l.endsWith(".js';")) {
        return `${l.slice(0, l.lastIndexOf("'"))}.js';`
    }
    return l;
};

for (const f of databaseTunnelFiles) {
    const content = fs.readFileSync(f, { encoding: "utf-8" });
    const newContent = content.split("\n").map(replaceLine).join("\n")
    fs.writeFileSync(f, newContent, {encoding: "utf-8"})
}


replaceLine("export { SubjectArgsSchema } from './SubjectArgsSchema';")
