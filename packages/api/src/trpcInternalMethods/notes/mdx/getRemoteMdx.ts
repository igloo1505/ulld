import { prisma } from "@ulld/database";
import { defaultFindRemoteMdxArgs } from "@ulld/utilities/defaults/prisma/notes";

export const getRemoteMdx = async (rootRelativePath: string) => {
    let note = await prisma.mdxNote.findFirst({
        where: {
            rootRelativePath: rootRelativePath,
        },
        ...defaultFindRemoteMdxArgs,
    });
    return note;
};
