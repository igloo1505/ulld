import { prisma } from "#/db"
import { autoSetting } from "@prisma/client"

export const getDbAutoSettings = async (type?: autoSetting) => {
    return await prisma.autoSetting.findMany({
        ...(type && {
            where: {
                type: type
            }
        })
    })
}
