import { publicProcedure, router } from "../trpc";
import { z } from "zod";
import { prisma } from "@ulld/database/db";
import { getFsNote } from "../../trpcInternalMethods/filesystem/fsnotes";

export const universalNoteRouter = router({
    getSummaryOfAllNotes: publicProcedure.query(async () => {
        return await prisma.mdxNote.findMany({
            select: {
                title: true,
                tags: true,
                summary: true,
                subjects: true,
                _count: true,
            },
        });
    }),
    getNoteIdByHref: publicProcedure.input(z.string()).query(async (opts) => {
        let mdx = await prisma.mdxNote.findFirst({
            where: {
                href: opts.input,
            },
            select: {
                id: true,
            },
        });
        let ipynb = await prisma.ipynb.findFirst({
            where: {
                href: opts.input,
            },
            select: {
                id: true,
            },
        });
        return mdx ? mdx.id : ipynb ? ipynb.id : null;
    }),
    getFsNoteOfUnknownFormat: publicProcedure
        .input(z.string())
        .query(async (opts) => {
            return await getFsNote(opts.input);
        }),
    getQuickLinkHref: publicProcedure.input(z.string()).query(async (opts) => {
        return await prisma.mdxNote.findFirst({
            where: {
                quickLink: opts.input,
            },
            select: {
                href: true,
            },
        });
    }),
    getUniqueNoteTypes: publicProcedure.query(async () => {
        let res = await prisma.mdxNote.findMany({
            select: {
                noteType: true
            }
        })
        let noteTypes: string[] = []
        for (const n of res) {
            if(!noteTypes.includes(n.noteType)){
                noteTypes.push(n.noteType)
            }
        }
        return noteTypes
    }),
    getCategoryNoteCount: publicProcedure.input(z.string()).query(async ({input}) => {
        return await prisma.mdxNote.count({
            where: {
                noteType: input
            }
        })
    }),
    getUserOverview: publicProcedure.query(async () => {
        let noteCount = await prisma.mdxNote.count()
        let notebookCount = await prisma.ipynb.count()
        let notes = await prisma.mdxNote.findMany({
            select: {
                id: true,
                title: true,
                firstSync: true,
                lastSync: true,
                lastAccess: true,
                noteType: true
            },
            orderBy: {
                firstSync: "asc",
            },
        });
        let notebooks = await prisma.ipynb.findMany({
            select: {
                id: true,
                title: true,
                lastSync: true,
                firstSync: true,
                lastAccess: true,
            },
            orderBy: {
                firstSync: "asc",
            },
        });
        let overallFirstSync =
            notes.length && notebooks.length
                ? Math.min(
                    notes[0].firstSync.valueOf(),
                    notebooks[0].firstSync.valueOf(),
                )
                : notes.length
                    ? notes?.[0]?.firstSync
                    : notebooks?.[0]?.firstSync;
        let noteTypes: string[] = []
        let combinedNotes = [
            ...notes.map((n) => ({
                ...n,
                type: "mdxNote",
            })),
            ...notebooks.map((x) => ({
                ...x,
                type: "notebook",
            })),
        ].sort((a, b) => a.lastSync < b.lastSync ? -1 : 1)

        for (const n of notes) {
            if(!noteTypes.includes(n.noteType)){
                noteTypes.push(n.noteType)
            }
        }

        return {
            overallFirstSync: overallFirstSync
                ? new Date(overallFirstSync)
                : undefined,
            totalNotes: {
                mdx: noteCount,
                notebook: notebookCount,
                total: noteCount + notebookCount,
            },
            uniqueNoteTypes: noteTypes,
            lastAccessNotes: combinedNotes
        };
    }),
});
