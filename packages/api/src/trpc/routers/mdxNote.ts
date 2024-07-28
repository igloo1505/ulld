import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { markdownExtensions } from "@ulld/configschema/zod/secondaryConfigParse/getParsableExtensions";
import { prisma } from "@ulld/database/db";
import { getRemoteMdx } from "../../trpcInternalMethods/notes/mdx/getRemoteMdx";
import { getDatabaseMdxFromPathname } from "../../trpcInternalMethods/notes/mdx/getDatabaseMdxFromPathname";
import { getFsMdx } from "../../trpcInternalMethods/filesystem/fsnotes";
import { makeArrayTransform } from "@ulld/utilities/schemas/transforms";
import { parseMdxString } from "@ulld/parsers/mdx";
import { parseMdxProps } from "@ulld/utilities/schemas/mdx/parseMdxStringProps";

const idOrIdArray = z
    .union([z.number().int(), z.number().int().array()])
    .transform(makeArrayTransform);

export const mdxNoteActionsRouter = router({
    deleteNoteById: publicProcedure
        .input(idOrIdArray)
        .mutation(async ({ input }) => {
            return await prisma.mdxNote.deleteMany({
                where: {
                    id: {
                        in: input,
                    },
                },
            });
        }),
    toggleBookmarkedById: publicProcedure
        .input(z.number().int())
        .mutation(async (opts) => {
            let note = await prisma.mdxNote.findFirst({ where: { id: opts.input } });
            let newNote = await prisma.mdxNote.update({
                where: {
                    id: opts.input,
                },
                data: {
                    bookmarked: !note?.bookmarked,
                },
                select: {
                    bookmarked: true,
                },
            });
            return Boolean(note?.bookmarked !== newNote.bookmarked);
        }),
    getDatabaseMdx: publicProcedure.input(z.string()).query(async (opts) => {
        return getRemoteMdx(opts.input);
    }),
    getDatabaseMdxFromPathname: publicProcedure
        .input(z.string())
        .query(async (opts) => {
            return await getDatabaseMdxFromPathname(opts.input);
        }),
    getFsMdx: publicProcedure
        .input(
            z.object({
                rootRelativePath: z.string(),
                extension: markdownExtensions,
                useProcessRoot: z.boolean().default(false),
            }),
        )
        .query(async ({ input }) => {
            let content = await getFsMdx(
                input.rootRelativePath,
                input.extension,
                null,
                input.useProcessRoot,
            );
            let noteDetails = await prisma.mdxNote.findFirst({
                where: {
                    rootRelativePath: input.rootRelativePath,
                },
                select: {
                    bookmarked: true,
                    quickLink: true,
                    id: true,
                    sequentialKey: true,
                    sequentialIndex: true,
                    firstSync: true,
                    lastSync: true
                },
            });
            return {
                content: content,
                details: noteDetails,
            };
        }),
    parseMdxString: publicProcedure
        .input(parseMdxProps)
        .mutation(async ({ input }) => {
             throw new Error(`This method should be removed and replaced with the parseMdxString method exported from @ulld/parsers. This backend method can not accept user defined components.`)
            // return await parseMdxString(input);
        }),
});
