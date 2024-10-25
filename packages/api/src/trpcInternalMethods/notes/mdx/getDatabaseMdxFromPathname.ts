import { prisma } from "@ulld/database/db"
import { defaultFindRemoteMdxArgs } from "@ulld/utilities/defaults/prisma/notes"


/* eslint-disable @typescript-eslint/explicit-function-return-type -- Need to infer return type. */
export const getDatabaseMdxFromPathname = async (pathname: string) => {
    return prisma.mdxNote.findFirst({
        where: {
            href: pathname
        },
        ...defaultFindRemoteMdxArgs
    })
}
