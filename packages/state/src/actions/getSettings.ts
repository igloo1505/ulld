import {prisma} from "@ulld/database/db"

// VERSION_NEXT: Consider adding the ability to have multiple settings and attach the id to the window object and interchange them using the command-palette.
export const getSettings = async () => {
    return await prisma.settings.findFirst({
        where: {
            id: 1
        }
    })
}
