#!/usr/bin/env -S pnpm tsx
import fs from "fs";
import path from "path";
import { globSync } from "glob";
import { MdxNote } from "@ulld/api/classes/prismaMdxRelations/mdxNote";


const rootPath = path.join(__dirname, "../../content")

export const convertUlldSyntax = async () => {
    const files = globSync("**/*.pre.mdx", {
        cwd: rootPath
    })
    
    
    // RESUME: Give up on this approach. Create a new source following the docs here: https://fumadocs.vercel.app/docs/headless/source-api

    for await (const k of files) {
        const p = path.join(rootPath, k)
        const content = fs.readFileSync(p, {encoding: "utf-8"})
        let note = await MdxNote.fromMdxString({
            raw: content
        }, {
            getBookmarkState: false
        }) 
        console.log(`note`, note.formatted)
    }
}
