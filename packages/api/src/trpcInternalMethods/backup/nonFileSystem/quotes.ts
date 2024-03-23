import { prisma } from '@ulld/database/db'
import fs from 'fs'
import path from 'path'



export const backupQuotes = async () => {
    let q = await prisma.quote.findMany({})

    let _json = {
        data: q
    }

    await fs.promises.writeFile(path.join(process.cwd(), "backup/quotes.json"), JSON.stringify(_json), { encoding: "utf-8" })

}
