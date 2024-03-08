import { prisma } from '@ulld/database'
import fs from 'fs'
import path from 'path'


export const backupReadingLists = async () => {
    let lists = await prisma.readingList.findMany({
        include: {
            mdxNotes: {
                select: {
                    rootRelativePath: true,
                    title: true
                }
            },
            ipynbNotes: {
                select: {
                    rootRelativePath: true,
                    title: true
                }
            },
            bibEntries: {
                select: {
                    id: true
                }
            }
        }
    })

    let _json = {
        data: lists
    }

    await fs.promises.writeFile(path.join(process.cwd(), "backup/readingLists.json"), JSON.stringify(_json), { encoding: "utf-8" })
}
