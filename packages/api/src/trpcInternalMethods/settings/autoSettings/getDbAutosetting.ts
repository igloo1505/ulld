import { autoSetting } from "@ulld/database/internalDatabaseTypes"
import { PrismaClient } from "@ulld/types"



export const getDbAutoSettings = async (prisma: PrismaClient, type?: autoSetting) => {
    return await prisma.autoSetting.findMany({
        ...(type && {
            where: {
                type: type
            }
        })
    })
}
