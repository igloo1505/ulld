import { prisma } from "#/db"
import fs from 'fs'
import path from 'path'



export const dailyFocus = async () => {
    let f = await prisma.dailyFocus.findMany({})

    let _json = {
        data: f
    }

    await fs.promises.writeFile(path.join(process.cwd(), "backup/dailyFocus.json"), JSON.stringify(_json), { encoding: "utf-8" })

}
