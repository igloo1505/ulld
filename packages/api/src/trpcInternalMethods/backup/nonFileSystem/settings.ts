import { prisma } from '@ulld/database/db'
import fs from 'fs'
import path from 'path'


export const backupSettings = async () => {
    let settings = await prisma.settings.findFirst({})
    if (settings) {
        await fs.promises.writeFile(path.join(process.cwd(), "backup/settings.json"), JSON.stringify({ data: settings }), { encoding: "utf-8" })
    }
}
