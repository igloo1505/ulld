import { prisma } from '@ulld/database/db'
import fs from 'fs'
import path from 'path'


export const backupAutoSettings = async () => {
    let auto = await prisma.autoSetting.findMany({})
    let _json = {
        data: auto
    }
    await fs.promises.writeFile(path.join(process.cwd(), "backup/autoSettings.json"), JSON.stringify(_json), { encoding: "utf-8" })
}
