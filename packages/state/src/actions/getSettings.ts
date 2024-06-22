import {prisma} from "@ulld/database/db"
import { settingSchema } from "@ulld/parsers/settings/settingsParser";


// VERSION_NEXT: Consider adding the ability to have multiple settings and attach the id to the window object and interchange them using the command-palette.
export const getSettings = async () => {
    let res = await prisma.settings.findFirst({
        where: {
            id: 1
        }
    })
    return await settingSchema.parse(res)
}
