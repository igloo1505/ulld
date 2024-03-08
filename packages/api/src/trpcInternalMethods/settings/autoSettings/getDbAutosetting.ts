import { prisma, autoSetting } from "@ulld/database"



export const getDbAutoSettings = async (type?: autoSetting) => {
    return await prisma.autoSetting.findMany({
        ...(type && {
            where: {
                type: type
            }
        })
    })
}
