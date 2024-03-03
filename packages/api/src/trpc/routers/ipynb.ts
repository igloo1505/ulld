import { getRemoteIpynbFromPathname } from "#/trpcInternalMethods/notes/ipynb"
import { z } from "zod"
import { publicProcedure, router } from "../trpc"
import fs from 'fs'
import { prisma } from "#/db"
import { getRootRelativePathsOfFiletype } from "#/trpcInternalMethods/filesystem/getRootRelativePathsOfFiletype"


export const ipynbRouter = router({
    getRemoteIpynbFromPathname: publicProcedure.input(z.string()).query(async (opts) => {
        return await getRemoteIpynbFromPathname(opts.input)
    }),
    getFsIpynb: publicProcedure.input(z.object({ absolutePath: z.string() })).query(async (opts) => {
        return await fs.promises.readFile(opts.input.absolutePath, { encoding: "utf-8" })
    }),
    getPrismaIpynb: publicProcedure.input(z.string()).query(async (opts) => {
        return await prisma.ipynb.findFirst({
            where: {
                rootRelativePath: opts.input
            },
            include: {
                tags: true,
                citations: true,
                topics: true,
                readingList: true
            }
        })
    }),
    getAllNotebookPaths: publicProcedure.query(async (opts) => {
        let d = await getRootRelativePathsOfFiletype(".ipynb")
        return d
    }),
})
