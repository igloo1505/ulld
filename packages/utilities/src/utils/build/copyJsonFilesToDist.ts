import { globSync } from "glob";
import fs from 'fs'
import path from 'path'


export const copyJsonFilesToDist = (cwd: string, glob: string = "src/**/*.json", files?: string[]) => {
    if(!files){
        files = globSync(glob, {
            cwd: cwd,
            nodir: true
        })
    }
    for (const f of files) {
        fs.cpSync(path.join(cwd, f), path.join(cwd, f.replace("src/", "dist/")))
    }
}

const prependUseClient = (p: string) => {
    let content = fs.readFileSync(p, {
        encoding: "utf-8",
    });
    fs.writeFileSync(
        p,
        `"use client"
${content}`,
        {
            encoding: "utf-8",
        },
    );
};



export const prependDirectives = async (dirName: string, ignore?: string[]) => {
    let files = globSync("**/*.{tsx,ts}", {
        cwd: path.join(dirName, "src"),
        nodir: true,
        absolute: true,
        ignore
    });
    files.forEach((f) => {
        let distPaths = {
            cjs: f.replace("/src/", "/dist/").replace(/\.tsx?/, ".cjs"),
            esm: f.replace("/src/", "/dist/").replace(/\.tsx?/, ".mjs"),
        };
        if (!fs.existsSync(distPaths.cjs)) {
            console.error(`Could not find dist path ${distPaths.cjs}`);
            process.exit();
        }

        if (!fs.existsSync(distPaths.esm)) {
            console.error(`Could not find dist path ${distPaths.esm}`);
            process.exit();
        }

        let content = fs.readFileSync(f, {
            encoding: "utf-8",
        });

        if (content.includes('"use client"') || content.includes("'use client'")) {
            prependUseClient(distPaths.cjs);
            prependUseClient(distPaths.esm);
        }
    });
    copyJsonFilesToDist(__dirname);
};
