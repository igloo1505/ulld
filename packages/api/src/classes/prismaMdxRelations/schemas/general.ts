import {
    subjectZodObject,
    tagZodObject,
    topicZodObject,
} from "@ulld/configschema/configUtilityTypes/docTypes";
import { zodFrontMatterObject } from "@ulld/state/classes/frontMatter/zodFrontMatterObject";
import { z } from "zod";
import { Topic } from "../topic";
import { Subject } from "../subject";
import { Tag } from "../tag";
import matter from "gray-matter";
import {
    documentTypeConfigSchema,
    zodDocTypeInput,
} from "@ulld/configschema/zod/documentConfigSchema";
import { BibEntry } from "../BibEntry";
import { BibCore } from "../Bib";
import { ReadingList } from "../readingList";
import { CitationGroup } from "../CitationGroup";
import { withForwardSlash } from "@ulld/utilities/fsUtils";
import {
    TaskCategory,
    ToDoListStatus,
} from "@ulld/database/internalDatabaseTypes";

export const taggableFields = z.object({
    topics: topicZodObject
        .array()
        .default([])
        .transform((a) => {
            return a.map((b) => new Topic(b));
        }),
    subjects: subjectZodObject
        .array()
        .default([])
        .transform((a) => {
            return a.map((b) => new Subject(b));
        }),
    tags: tagZodObject
        .array()
        .default([])
        .transform((a) => {
            return a.map((b) => new Tag(b));
        }),
});

export const bibCoreSchema = z.object({
    firstSync: z
        .union([z.string().datetime(), z.date()])
        .nullish()
        .transform((a) => (typeof a === "string" ? new Date(a) : a)),
    lastSync: z
        .union([z.string().datetime(), z.date()])
        .nullish()
        .transform((a) => (typeof a === "string" ? new Date(a) : a)),
    filename: z.string().default("citations.bib"),
    id: z.number().int().default(1),
    entries: z.any().array().default([]),
});

export type BibPropsInput = z.input<typeof bibCoreSchema>;
export type BibPropsOutput = z.output<typeof bibCoreSchema>;

export const readingListZodObject = z.object({
    name: z.string(),
    description: z.string().nullable(),
    bibEntries: z.any().array(),
    mdxNotes: z.any().array(),
    ipynbNotes: z.any().array(),
    createdAt: z
        .union([z.string().datetime(), z.date()])
        .nullish()
        .transform((a) =>
            typeof a === "string" ? new Date(a) : a instanceof Date ? a : new Date(),
        ),
    lastUpdate: z
        .union([z.string().datetime(), z.date()])
        .nullish()
        .transform((a) =>
            typeof a === "string" ? new Date(a) : a instanceof Date ? a : new Date(),
        ),
});

export type ReadingListPropsInput = z.input<typeof readingListZodObject>;
export type ReadingListPropsOutput = z.output<typeof readingListZodObject>;

export const citationGroupSchema = z.object({
    name: z.string(),
    description: z.string().nullish(),
    entries: z.any().array(),
});

export type CitationGroupPropsInput = z.input<typeof citationGroupSchema>;
export type CitationGroupPropsOutput = z.output<typeof citationGroupSchema>;

export const bibEntryPropsSchema = z
    .object({
        Bib: bibCoreSchema.transform((a) => new BibCore(a)),
        BibId: z.number().int().default(1),
        readingList: readingListZodObject
            .array()
            .default([])
            .transform((a) => {
                return a.map((a) => new ReadingList(a));
            }),
        topics: topicZodObject
            .array()
            .default([])
            .transform((a) => a.map((b) => new Topic(b))),
        subjects: subjectZodObject
            .array()
            .default([])
            .transform((a) => a.map((b) => new Subject(b))),
        tags: tagZodObject
            .array()
            .default([])
            .transform((a) => a.map((b) => new Tag(b))),
        type: z.string(),
        id: z.string().toLowerCase(),
        htmlCitation: z.string().nullable(),
        PdfPath: z.string().nullable(),
        address: z.string().nullable(),
        annote: z.string().nullable(),
        author: z.string().nullable(),
        booktitle: z.string().nullable(),
        chapter: z.string().nullable(),
        crossref: z.string().nullable(),
        doi: z.string().nullable(),
        edition: z.string().nullable(),
        editor: z.string().nullable(),
        email: z.string().nullable(),
        howpublished: z.string().nullable(),
        institution: z.string().nullable(),
        journal: z.string().nullable(),
        month: z.string().nullable(),
        note: z.string().nullable(),
        number: z.string().nullable(),
        organization: z.string().nullable(),
        pages: z.string().nullable(),
        publisher: z.string().nullable(),
        school: z.string().nullable(),
        series: z.string().nullable(),
        title: z.string().nullable(),
        volume: z.string().nullable(),
        year: z.string().nullable(),
        numpages: z.string().nullable(),
        url: z.string().nullable(),
        issue: z.string().nullable(),
        issn: z.string().nullable(),
        abstract: z.string().nullable(),
        urldate: z.string().nullable(),
        keywords: z.string().nullable(),
        copyright: z.string().nullable(),
        tempPageIndex: z.number().int().nullable(),
        read: z.boolean().default(false),
        OwnWork: z.boolean().default(false),
        ColleaguesWork: z.boolean().default(false),
        citationGroups: citationGroupSchema
            .array()
            .transform((a) => a.map((b) => new CitationGroup(b))),
        added: z
            .union([z.string().datetime(), z.date(), z.string()])
            .nullish()
            .transform((a) =>
                typeof a === "string"
                    ? new Date(a)
                    : a instanceof Date
                        ? a
                        : new Date(),
            ),
    })
    .catchall(z.string());

export const sequentialListPropsSchema = z.object({
    sequentialKey: z.string(),
    MdxNote: z.any().array().default([]),
    Ipynb: z.any().array().default([]),
});

export type ParsedBibEntryProps = z.output<typeof bibEntryPropsSchema>;

export const todoListZodObject = z
    .object({
        id: z.number().int(),
        label: z.string(),
        tasks: z.any().array().default([]),
    })
    .merge(
        readingListZodObject.pick({
            createdAt: true,
            lastUpdate: true,
        }),
    )
    .merge(taggableFields);

export const todoTaskZodObject = z.object({
    id: z.number().int(),
    createdAt: z
        .union([z.string().datetime(), z.date()])
        .nullish()
        .transform((a) =>
            typeof a === "string" ? new Date(a) : a instanceof Date ? a : new Date(),
        ),
    task: z.string(),
    dueAt: z
        .union([z.string().datetime(), z.date()])
        .nullish()
        .transform((a) =>
            typeof a === "string" ? new Date(a) : a instanceof Date ? a : new Date(),
        ),
    details: z.string().nullish(),
    associatedNotes: z.any().array().default([]),
    tags: tagZodObject.array().default([]),
    topics: topicZodObject.array().default([]),
    subjects: subjectZodObject.array().default([]),
    parentId: z.number().int().nullish(),
    category: z.nativeEnum(TaskCategory),
    bookmarked: z.boolean().default(false),
    status: z.nativeEnum(ToDoListStatus),
    priority: z.number().min(0).max(10),
    parent: z.any().nullish().default(null),
    child: z.any().nullish().default(null),
    ToDoList: todoListZodObject,
    toDoListId: z.number().int(),
});

export const mdxNotePropsSchema = z
    .object({
        content: z.string().nullish(),
        id: z.number().nullish(),
        title: z.string().nullish(),
        latexTitle: z.string().nullish(),
        raw: z.string(),
        floatImages: z.boolean().default(false),
        formatted: z.string().nullish(),
        citations: bibEntryPropsSchema
            .array()
            .default([])
            .transform((a) => {
                return a.map((b) => new BibEntry(b));
            }),
        importantValues: z.number().array().default([]),
        bookmarked: z.boolean().default(false),
        quickLinkId: z.string().nullish(),
        href: z.string().nullish(),
        citationsListOrder: z.string().array().default([]),
        outgoingQuickLinks: z.string().array().default([]),
        rootRelativePath: z
            .string()
            .nullish()
            .transform((a) => (typeof a === "string" ? withForwardSlash(a) : a)),
        equationIds: z.string().array().default([]),
        isProtected: z.boolean().nullish().default(false),
        sequentialKey: z.string().nullish(),
        sequentialIndex: z.number().nullish(),
        sequentialList: sequentialListPropsSchema.optional(),
        remoteUrl: z.string().nullish(),
        noLog: z.boolean().default(true),
        saveFormatted: z.boolean().default(true),
        noteType: zodDocTypeInput,
        trackRemote: z.boolean().default(false),
        toDo: todoTaskZodObject.array().default([]),
        summary: z.string().nullish(),
        firstSync: z
            .union([
                z
                    .string()
                    .datetime()
                    .transform((a) => new Date(a)),
                z.date(),
            ])
            .nullish()
            .transform((a) => (typeof a === "string" ? new Date(a) : a)),
        lastSync: z
            .union([
                z
                    .string()
                    .datetime()
                    .transform((a) => new Date(a)),
                z.date(),
            ])
            .nullish(),
    })
    .merge(taggableFields)
    .transform((a) => {
        const fm = zodFrontMatterObject.parse(matter(a.raw));
        return {
            ...a,
            raw: a.raw || a.content,
            importantValues: fm.importantValues || [],
            frontMatter: fm,
            // floatImages: fm.float,
            quickLinkId: fm.id || a.quickLinkId,
            sequentialKey: fm.sequentialKey || a.sequentialKey,
            sequentialIndex: fm.sequential || a.sequentialIndex,
            // remoteUrl: fm.remote?.url || a.remoteUrl,
            // trackRemote: fm.remote?.track || a.trackRemote,
            topics: fm.topics
                ? [
                    ...a.topics,
                    ...fm.topics.map((l: string) => new Topic({ value: l })),
                ]
                : ([] as Topic[]),
            subjects: fm.subjects
                ? [
                    ...a.subjects,
                    ...fm.subjects.map((l: string) => new Subject({ value: l })),
                ]
                : ([] as Subject[]),
            tags: fm.tags
                ? [
                    ...a.tags,
                    ...fm.tags.map(
                        (l: string) => new Tag({ value: l, kanbanId: null }),
                    ),
                ]
                : ([] as Tag[]),
            firstSync: fm.created ? new Date(fm.created) : a.firstSync,
        };
    });

export const mdxNoteSummaryPropSchema = mdxNotePropsSchema
    .innerType()
    .omit({
        raw: true,
        citations: true,
        content: true,
        toDo: true,
        sequentialList: true,
    })
    .required({
        subjects: true,
        noteType: true,
        id: true,
        title: true,
        latexTitle: true,
        lastSync: true,
        tags: true,
        rootRelativePath: true,
        // summary: true,
        href: true,
        firstSync: true,
        sequentialIndex: true,
        bookmarked: true,
    })
    .merge(
        z.object({
            sequentialList: sequentialListPropsSchema
                .pick({ sequentialKey: true })
                .nullish(),
        }),
    )
    .transform((a) => {
        return {
            ...a,
            firstSync:
                typeof a.firstSync === "string" ? new Date(a.firstSync) : a.firstSync,
        };
    });

export const fromMdxStringOptSchema = z
    .object({
        noteTypeId: z.string().optional(),
    })
    .default({});

export const mdxNoteFromStringPropsSchema = mdxNotePropsSchema
    .innerType()
    .pick({
        raw: true,
        rootRelativePath: true,
        bookmarked: true,
    })
    .merge(
        z.object({
            docTypeData: documentTypeConfigSchema,
        }),
    );

export const mdxNoteIntriguingValSummaryPropsSchema = mdxNotePropsSchema
    .innerType()
    .omit({
        latexTitle: true,
        raw: true,
        floatImages: true,
        formatted: true,
        citations: true,
        quickLinkId: true,
        citationsListOrder: true,
        outgoingQuickLinks: true,
        equationIds: true,
        isProtected: true,
        sequentialKey: true,
        sequentialIndex: true,
        remoteUrl: true,
        noLog: true,
        saveFormatted: true,
        trackRemote: true,
        topics: true,
        tags: true,
        subjects: true,
    });

export type FromMdxStringOpts = z.input<typeof fromMdxStringOptSchema>;

export type MdxNotePropsInput = z.input<typeof mdxNotePropsSchema>;
export type MdxNotePropsOutput = z.output<typeof mdxNotePropsSchema>;

export type MdxNoteSummaryInput = z.input<typeof mdxNoteSummaryPropSchema>;
export type MdxNoteSummaryOutput = z.output<typeof mdxNoteSummaryPropSchema>;

export type MdxNoteFromStringInput = z.input<
    typeof mdxNoteFromStringPropsSchema
>;
export type MdxNoteFromStringOutput = z.output<
    typeof mdxNoteFromStringPropsSchema
>;

export type MdxNoteIntriguingValSummaryInput = z.input<
    typeof mdxNoteIntriguingValSummaryPropsSchema
>;
export type MdxNoteIntriguingValSummaryOutput = z.output<
    typeof mdxNoteIntriguingValSummaryPropsSchema
>;
