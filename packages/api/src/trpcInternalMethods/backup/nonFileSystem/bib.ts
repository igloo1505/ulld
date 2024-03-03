import { prisma } from "#/db"
import fs from 'fs'
import path from 'path'



export const backupBib = async () => {
    let entries = await prisma.bib.findMany({
        include: {
            entries: {
                include: {
                    citationGroups: true,
                    tags: true,
                    MdxNotes: {
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
                }
            }
        }
    })

    let _json = {
        data: entries
    }

    await fs.promises.writeFile(path.join(process.cwd(), "backup/bib.json"), JSON.stringify(_json), { encoding: "utf-8" })

}
