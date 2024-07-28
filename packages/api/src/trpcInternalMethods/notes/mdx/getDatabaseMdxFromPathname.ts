import { prisma } from "@ulld/database/db"
import { defaultFindRemoteMdxArgs } from "@ulld/utilities/defaults/prisma/notes"



export const getDatabaseMdxFromPathname = async (pathname: string) => {
    return await prisma.mdxNote.findFirst({
        where: {
            href: pathname
        },
        ...defaultFindRemoteMdxArgs
    })
}
