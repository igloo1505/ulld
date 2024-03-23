import { prisma } from "@ulld/database/db"
import { defaultFindRemoteMdxArgs } from "@ulld/utilities/defaults/prisma/notes"





export const getRemoteIpynbFromPathname = async (pathname: string) => {
    let nb = await prisma.ipynb.findFirst({
        where: {
            href: pathname
        },
        ...defaultFindRemoteMdxArgs
    })
    if (nb) {
        /// @ts-ignore
        nb.htmlOutput = nb.htmlOutput.toString("utf-8")
    }
    return nb
}
