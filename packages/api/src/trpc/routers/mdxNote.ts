import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { markdownExtensions } from "@ulld/configschema/zod/secondaryConfigParse/getParsableExtensions";
import { prisma } from "@ulld/database/db";
import {
    getRemoteMdx,
} from "../../trpcInternalMethods/notes/mdx/getRemoteMdx";
import {
    getRemoteMdxFromPathname,
} from "../../trpcInternalMethods/notes/mdx/getRemoteMdxFromPathname";
import {
    getFsMdx,
} from "../../trpcInternalMethods/filesystem/fsnotes";
import { makeArrayTransform } from "@ulld/utilities/schemas/transforms";
import { parseMdxString } from "@ulld/parsers/mdx";
import { parseMdxStringSchema } from "@ulld/utilities/schemas/mdx/parseMdxStringSchema";
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
    getRemoteMdx: publicProcedure.input(z.string()).query(async (opts) => {
        return getRemoteMdx(opts.input);
    }),
    getRemoteMdxFromPathname: publicProcedure
        .input(z.string())
        .query(async (opts) => {
            return await getRemoteMdxFromPathname(opts.input);
        }),
    getFsMdx: publicProcedure
        .input(
            z.object({ rootRelativePath: z.string(), extension: markdownExtensions }),
        )
        .query(async (opts) => {
            return getFsMdx(opts.input.rootRelativePath, opts.input.extension);
        }),
    parseMdxString: publicProcedure
        .input(parseMdxProps)
        .mutation(async ({ input }) => {
            return await parseMdxString(input);
        }),
});
