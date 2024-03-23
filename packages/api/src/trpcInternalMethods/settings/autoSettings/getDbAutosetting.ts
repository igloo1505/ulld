import { prisma } from "@ulld/database/db"
import { autoSetting } from "@ulld/database/internalDatabaseTypes"



export const getDbAutoSettings = async (type?: autoSetting) => {
    return await prisma.autoSetting.findMany({
        ...(type && {
            where: {
                type: type
            }
        })
    })
}
