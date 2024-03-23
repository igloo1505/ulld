import { prisma } from '@ulld/database/db'
import fs from 'fs'
import path from 'path'



export const backupGoogleAuth = async () => {
    let auth = await prisma.googleCalendarAuth.findFirst({})

    if (auth) {
        await fs.promises.writeFile(path.join(process.cwd(), "backup/calendarAuth.json"), JSON.stringify({ data: auth }), { encoding: "utf-8" })
    }
}
