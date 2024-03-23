import { prisma } from "@ulld/database/db"
import { defaultFindRemoteMdxArgs } from "@ulld/utilities/defaults/prisma/notes"



export const getRemoteMdxFromPathname = async (pathname: string) => {
    return await prisma.mdxNote.findFirst({
        where: {
            href: pathname
        },
        ...defaultFindRemoteMdxArgs
    })
}
