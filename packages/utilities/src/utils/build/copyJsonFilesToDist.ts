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
