import { prisma } from "@ulld/database"
import { defaultFindRemoteMdxArgs } from "@ulld/utilities"



export const getRemoteMdxFromPathname = async (pathname: string) => {
    return await prisma.mdxNote.findFirst({
        where: {
            href: pathname
        },
        ...defaultFindRemoteMdxArgs
    })
}
