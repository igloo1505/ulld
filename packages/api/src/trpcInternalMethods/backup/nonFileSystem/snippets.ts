import { prisma } from '@ulld/database/db'
import fs from 'fs'
import path from 'path'

export const backupSnippets = async () => {
    let snippets = await prisma.snippet.findMany({
    })

    let _json = {
        data: snippets.map((s) => ({
            content: s.content,
            description: s.description,
            keywords: s.keywords,
            language: s.language
        }))
    }

    await fs.promises.writeFile(path.join(process.cwd(), "backup/snippets.json"), JSON.stringify(_json), { encoding: "utf-8" })
}

