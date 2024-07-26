import { PrismaClient } from "@ulld/types"
import { getConfigAutoSettings } from "./getAutosettingWithRegex"



export const syncAutoSettings = async (prisma: PrismaClient) => {
    let d = getConfigAutoSettings()
    for await (const k of d) {
        let as = await prisma.autoSetting.findFirst({
            where: {
                AND: [
                    { glob: k.glob },
                    { type: k.type },
                    { value: k.value }
                ]
            }
        })
        await prisma.autoSetting.upsert({
            where: {
                id: as ? as.id : -1,
                AND: [
                    { glob: k.glob },
                    { type: k.type },
                    { value: k.value }
                ]
            },
            create: {
                glob: k.glob,
                value: k.value,
                type: k.type
            },
            update: {
                glob: k.glob,
                value: k.value,
                type: k.type
            }
        })
    }

}
