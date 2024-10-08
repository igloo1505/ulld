import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { markdownExtensions } from "@ulld/configschema/zod/secondaryConfigParse/getParsableExtensions";
import { prisma } from "@ulld/database";
import { getRemoteMdx } from "../../trpcInternalMethods/notes/mdx/getRemoteMdx";
import { getDatabaseMdxFromPathname } from "../../trpcInternalMethods/notes/mdx/getDatabaseMdxFromPathname";
import { getFsMdx } from "../../trpcInternalMethods/filesystem/fsnotes";
import { makeArrayTransform } from "@ulld/utilities/schemas/transforms";
import { readAppConfig } from "@ulld/developer/readAppConfig";
import { parseMdxString } from "@ulld/parsers";
import { parseMdxStringParamTRPCSchema } from "@ulld/parsers/mdx/compilerTypes";
import { formatMdxString } from "@ulld/parsers/formatMdxString";
import { internalMdxStringParseParamSchemaOptionalAppConfig } from "@ulld/schemas/mdx-parsing-params";
import {
    mdxToHtmlWithoutRender,
} from "@ulld/parsers/serverMdxToHtml";
import { getComponentMap } from "@ulld/component-map/server";

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
            let note = await prisma.mdxNote.findFirst({
                where: {
                    id: opts.input,
                },
                select: {
                    bookmarked: true,
                },
            });
            if (!note) {
                console.error(
                    `Could not find note to toggle bookmark state for note id ${opts.input}`,
                );
                return false;
            }
            let newNote = await prisma.mdxNote.update({
                where: {
                    id: opts.input,
                },
                data: {
                    bookmarked: !Boolean(note?.bookmarked),
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
            let appConfig = await readAppConfig();
            let content = await getFsMdx(
                input.rootRelativePath,
                input.extension,
                appConfig,
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
                    lastSync: true,
                },
            });
            return {
                content: content,
                details: noteDetails
                    ? {
                        ...noteDetails,
                        quickLink: noteDetails.quickLink || undefined,
                        sequentialKey: noteDetails.sequentialKey || undefined,
                        sequentialIndex: noteDetails.sequentialIndex || undefined,
                        firstSync: noteDetails.firstSync?.toString() as string | Date,
                        lastSync: noteDetails.lastSync?.toString() as string | Date,
                    }
                    : undefined,
            };
        }),
    setMdxAccessed: publicProcedure
        .input(z.object({ rootRelativePath: z.string() }))
        .mutation(async ({ input }) => {
            let _now = new Date();
            let mdxNote = await prisma.mdxNote.findFirst({
                where: {
                    rootRelativePath: input.rootRelativePath,
                },
                select: {
                    id: true,
                    tags: {
                        select: {
                            value: true,
                        },
                    },
                    subjects: {
                        select: {
                            value: true,
                        },
                    },
                    topics: {
                        select: {
                            value: true,
                        },
                    },
                    citations: {
                        select: {
                            id: true,
                        },
                    },
                },
            });
            if (!mdxNote) {
                console.warn(
                    `Could not find mdxNote while attempting to execute setMdxAccessed method. Attempted with path ${input.rootRelativePath}`,
                );
                return;
            }
            let values = {
                tags: mdxNote.tags.map((x) => x.value),
                subjects: mdxNote.subjects.map((x) => x.value),
                topics: mdxNote.topics.map((x) => x.value),
                bibEntry: mdxNote.citations.map((x) => x.id),
            };
            await prisma.mdxNote.update({
                where: {
                    id: mdxNote.id,
                },
                data: {
                    lastAccess: _now,
                },
            });
            if (values.tags && values.tags.length) {
                await prisma.tag.updateMany({
                    where: {
                        value: {
                            in: values.tags,
                        },
                    },
                    data: {
                        lastAccess: _now,
                    },
                });
            }
            if (values.topics && values.topics.length) {
                await prisma.topic.updateMany({
                    where: {
                        value: {
                            in: values.topics,
                        },
                    },
                    data: {
                        lastAccess: _now,
                    },
                });
            }
            if (values.subjects && values.subjects.length) {
                await prisma.subject.updateMany({
                    where: {
                        value: {
                            in: values.subjects,
                        },
                    },
                    data: {
                        lastAccess: _now,
                    },
                });
            }
            if (values.bibEntry && values.bibEntry.length) {
                await prisma.bibEntry.updateMany({
                    where: {
                        id: {
                            in: values.bibEntry,
                        },
                    },
                    data: {
                        lastAccess: _now,
                    },
                });
            }
        }),
    // NOTE: parseAndCompileMdxString method is completely untested. Definitely need to test and likely refine.
    parseAndCompileMdxString: publicProcedure
        .input(internalMdxStringParseParamSchemaOptionalAppConfig)
        .query(async ({ input }) => {
            let appConfig = input.parseParams.appConfig
                ? input.parseParams.appConfig
                : await readAppConfig();
            if (!input.parseParams.appConfig) {
                input.parseParams.appConfig = appConfig;
            }
            let content = await formatMdxString(
                input as typeof input & {
                    parseParams: (typeof input)["parseParams"] & {
                        appConfig: any;
                    };
                },
            );
            return await parseMdxString({
                content,
                appConfig: appConfig as any,
            });
        }),
    compileMdxString: publicProcedure
        .input(parseMdxStringParamTRPCSchema)
        .query(async ({ input }) => {
            let appConfig = await readAppConfig();
            return await parseMdxString({
                ...input,
                appConfig,
            });
        }),
    streamMdxContent: publicProcedure
        .input(z.string())
        .mutation(async ({ input }) => {
            const appConfig = await readAppConfig();
            let data = await mdxToHtmlWithoutRender({
                rawContent: input,
                appConfig: appConfig,
                components: [],
            });
            const toString = await import("react-dom/server").then(
                (a) => a.renderToPipeableStream,
            );
            const T = data.content
            /* let htmlData = toString(<T {...data.content.props}/>); */
            /* TODO: Handle these additional props properly with a zod schema and some reasonable default values. Will also have to make the generated component map available everywhere, likely by writing component map directly to the node_modules directory instead of in the generated app itself, similar to how prisma does it. */
            const _components = getComponentMap(input, {}, []);
            let htmlData = toString(<T components={_components}/>);
            console.log("htmlData: ", htmlData);
            return "";
            /* /* const appConfig = await readAppConfig(); */
            /*   /* ts.renderToReadableStream */
            /* let em = <MdxContentRSC content={input} /> */
            /* return toString(em) */
        }),
});
