import { prisma } from "#/db"
import { getZodArrayUnionSchema } from "@ulld/utilities"
import { z } from "zod"
import { publicProcedure, router } from "../trpc"
import { getRemoteMdx } from "#/trpcInternalMethods/notes/mdx/getRemoteMdx"
import { getRemoteMdxFromPathname } from "#/trpcInternalMethods/notes/mdx/getRemoteMdxFromPathname"
import { getFsMdx } from "#/trpcInternalMethods/filesystem/fsnotes"
import { markdownExtensions } from "@ulld/config"

const idOrIdArray = getZodArrayUnionSchema(z.number())

export const mdxNoteActionsRouter = router({
    deleteNoteById: publicProcedure.input(idOrIdArray).mutation(async ({ input }) => {
        return await prisma.mdxNote.deleteMany({
            where: {
                id: {
                    in: input
                }
            }
        })
    }),
    toggleBookmarkedById: publicProcedure.input(z.number().int()).mutation(async (opts) => {
        let note = await prisma.mdxNote.findFirst({ where: { id: opts.input } })
        let newNote = await prisma.mdxNote.update({
            where: {
                id: opts.input
            },
            data: {
                bookmarked: !note?.bookmarked
            },
            select: {
                bookmarked: true
            }
        })
        return Boolean(note?.bookmarked !== newNote.bookmarked)
    }),
    getRemoteMdx: publicProcedure.input(z.string()).query(async (opts) => {
        return getRemoteMdx(opts.input)
    }),
    getRemoteMdxFromPathname: publicProcedure.input(z.string()).query(async (opts) => {
        return await getRemoteMdxFromPathname(opts.input)
    }),
    getFsMdx: publicProcedure.input(z.object({ rootRelativePath: z.string(), extension: markdownExtensions })).query(async (opts) => {
        return getFsMdx(opts.input.rootRelativePath, opts.input.extension)
    }),

})
