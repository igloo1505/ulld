import fs from "fs";
import { globSync } from "glob";
import path from "path";

export const removeTypeDeclarations = (paths: string[], recursive?: boolean) => {
    for (const p of paths) {
        globSync(`${recursive ? "**/*" : "*"}.{d.ts,d.ts.map}`, {
            cwd: p,
        })
            .map((f) => path.join(p, f))
            .forEach((f) => fs.rmSync(f));
    }
};

removeTypeDeclarations([
    "/Users/bigsexy/Desktop/current/ulld/packages/configschema/src",
], true);
