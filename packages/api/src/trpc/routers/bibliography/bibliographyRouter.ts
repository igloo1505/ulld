import { z } from "zod";
import fs from "fs";
import { publicProcedure, router } from "@ulld/api";
import { getInternalConfig } from "@ulld/configschema/zod/getInternalConfig";
import { prisma } from "@ulld/database/db";
import { bibItemTagParser } from "./bibItemTagParser";
import { getBibWithEntries, getBibFilename } from "./methods";
import { syncBib } from "./syncBib";
import { readAppConfig } from "@ulld/developer/readAppConfig";

export default router({
    getPrismaBib: publicProcedure.query(async () => {
        return await getBibWithEntries();
    }),
    syncBib: publicProcedure.input(z.object({
        bibId: z.number().int().default(1)
    })).mutation(async ({input}) => {
        let appConfig = await readAppConfig()
        return await syncBib(appConfig, input.bibId)
    }),
    syncBibServerSide: publicProcedure
        .input(z.number().int().optional())
        .mutation(async (opts) => {
            let appConfig = await readAppConfig()
            return await syncBib(appConfig, opts.input);
        }),
    readBibFromFileSystem: publicProcedure.query(async () => {
        const file = getInternalConfig().bibPath;
        if (!file) return;
        return await fs.promises.readFile(file, { encoding: "utf-8" });
    }),
    setBibEntryPdfPath: publicProcedure.input(z.object({
        bibEntryId: z.string(),
        pdfPath: z.union([
            z.string(),
            z.null()
        ])
    })).mutation(async ({input}) => {
        console.log("input: ", input)
        return await prisma.bibEntry.update({
            where: {
                id: input.bibEntryId
            },
            data: {
                PdfPath: input.pdfPath
            }
        })
    }),
    getBib: publicProcedure.input(z.number().int()).query(async (opts) => {
        return await prisma.bib.findFirst({
            where: {
                id: opts.input || 1,
            },
            include: {
                entries: {
                    include: {
                        citationGroups: true,
                        tags: true,
                        MdxNotes: {
                            include: {
                                topics: true,
                                tags: true,
                                subjects: true,
                            },
                        },
                        readingList: true,
                    },
                },
            },
        });
    }),
    getBibCitation: publicProcedure
        .input(z.string().array())
        .query(async (opts) => {
            return await prisma.bibEntry.findMany({
                where: {
                    id: {
                        in: opts.input,
                    },
                },
                select: {
                    id: true,
                    htmlCitation: true,
                    type: true
                },
                distinct: ["id"],
            });
        }),
    getBibEntry: publicProcedure.input(z.string()).query(async (opts) => {
        return await prisma.bibEntry.findFirst({
            where: {
                id: opts.input,
            },
            include: {
                tags: true,
                MdxNotes: {
                    include: {
                        tags: true,
                        citations: true,
                        subjects: true,
                        topics: true,
                    },
                },
                readingList: {
                    include: {
                        bibEntries: {
                            select: {
                                title: true,
                                createdAt: true,
                                id: true,
                            },
                        },
                    },
                },
                citationGroups: {
                    include: {
                        entries: true,
                    },
                },
            },
        });
    }),
    addBibItemTag: publicProcedure
        .input(bibItemTagParser)
        .mutation(async (opts) => {
            let bibEntry = await prisma.bibEntry.update({
                where: {
                    id: opts.input.bibItemId,
                },
                include: {
                    tags: true,
                },
                data: {
                    tags: {
                        connectOrCreate: {
                            where: {
                                value: opts.input.tag,
                            },
                            create: {
                                value: opts.input.tag,
                            },
                        },
                    },
                },
            });
            return bibEntry;
        }),
    removeBibEntryTag: publicProcedure
        .input(
            z.object({
                bibEntryId: z.string(),
                tag: z.string(),
            }),
        )
        .mutation(async (opts) => {
            return prisma.bibEntry.update({
                where: {
                    id: opts.input.bibEntryId,
                },
                data: {
                    tags: {
                        disconnect: {
                            value: opts.input.tag,
                        },
                    },
                },
            });
        }),
    bibEntryUpsert: publicProcedure.input(z.any()).mutation(async (opts) => {
        return await prisma.bibEntry.upsert(opts.input);
    }),
    bibFilename: publicProcedure
        .input(z.number().optional())
        .query(async (opts) => {
            return await getBibFilename(opts.input);
        }),
    getCitationGroup: publicProcedure.input(z.string()).query(async (opts) => {
        return await prisma.citationsGroup.findFirst({
            where: {
                name: opts.input,
            },
            include: {
                entries: {
                    include: {
                        tags: true,
                        MdxNotes: {
                            select: {
                                id: true,
                                title: true,
                                summary: true,
                            },
                        },
                    },
                },
            },
        });
    }),
});
