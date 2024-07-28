import type { PrismaClient, autoSetting } from "@ulld/database"



export const getDbAutoSettings = async (prisma: PrismaClient, type?: autoSetting) => {
    return await prisma.autoSetting.findMany({
        ...(type && {
            where: {
                type: type
            }
        })
    })
}
