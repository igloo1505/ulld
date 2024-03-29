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
import { zodDocTypeInput } from "@ulld/configschema/zod/documentConfigSchema";
import { BibEntry } from "../BibEntry";
import { BibCore } from "../Bib";
import { ReadingList } from "../readingList";
import { CitationGroup } from "../CitationGroup";

const taggableFields = z.object({
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

export const readingListSchema = z.object({
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

export type ReadingListPropsInput = z.input<typeof readingListSchema>;
export type ReadingListPropsOutput = z.output<typeof readingListSchema>;

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
        readingList: readingListSchema
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
        citationGroups: citationGroupSchema.array().transform((a) => a.map((b) => new CitationGroup(b))),
        added: z
            .union([z.string().datetime(), z.date()])
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

export type ParsedBibEntryProps = z.output<typeof bibEntryPropsSchema>;

export const mdxNotePropsSchema = z
    .object({
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
        quickLinkId: z.string().nullish(),
        href: z.string().nullish(),
        citationsListOrder: z.string().array().default([]),
        outgoingQuickLinks: z.string().array().default([]),
        rootRelativePath: z.string().nullish(),
        equationIds: z.string().array().default([]),
        isProtected: z.boolean().default(false),
        sequentialKey: z.string().nullish(),
        sequentialIndex: z.number().nullish(),
        remoteUrl: z.string().nullish(),
        noLog: z.boolean().default(true),
        saveFormatted: z.boolean().default(true),
        noteType: zodDocTypeInput,
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
            frontMatter: fm,
            topics: fm.topics
                ? [...a.topics, ...fm.topics.map((l) => new Topic({ value: l }))]
                : a.topics,
            subjects: fm.subjects
                ? [...a.subjects, ...fm.subjects.map((l) => new Subject({ value: l }))]
                : a.subjects,
            tags: fm.tags
                ? [
                    ...a.tags,
                    ...fm.tags.map((l) => new Tag({ value: l, kanbanId: null })),
                ]
                : a.tags,
            firstSync: fm.created ? new Date(fm.created) : a.firstSync,
        };
    });

export type MdxNotePropsInput = z.input<typeof mdxNotePropsSchema>;
