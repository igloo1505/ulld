import { z } from 'zod';
import { bibCoreSchema } from '../bibCore/classProps.js';
import { readingListZodObject } from '../../readingList/classProps.js';
import { subjectZodObject, tagZodObject, topicZodObject } from '../../taggables/classProps.js';
import { dateTimeStringTransform } from '../../../../transforms/index.js';
export const citationGroupSchema = z.object({
    name: z.string(),
    description: z.string().nullish(),
    entries: z.any().array(),
});
// WARN: Had to remove all automatic transformations into classes in the api package to avoid circular imports. Need to handle this outside of this zod object now.
//
const bibEntryPropsSchemaInner = z
    .object({
    Bib: bibCoreSchema.optional()
    // .transform((a) => new BibCore(a))
    ,
    BibId: z.number().int().default(1),
    readingList: readingListZodObject
        .array()
        .default([])
    // .transform((a) => {
    //     return a.map((b) => new ReadingList(b));
    // })
    ,
    topics: topicZodObject
        .array()
        .default([])
    // .transform((a) => a.map((b) => new Topic(b)))
    ,
    subjects: subjectZodObject
        .array()
        .default([])
    // .transform((a) => a.map((b) => new Subject(b)))
    ,
    tags: tagZodObject
        .array()
        .default([])
    // .transform((a) => a.map((b) => new Tag(b)))
    ,
    id: z.string().toLowerCase(),
    type: z.string().nullish(),
    htmlCitation: z.string().nullish(),
    PdfPath: z.string().nullish(),
    address: z.string().nullish(),
    annote: z.string().nullish(),
    author: z.string().nullish(),
    booktitle: z.string().nullish(),
    chapter: z.string().nullish(),
    crossref: z.string().nullish(),
    doi: z.string().nullish(),
    edition: z.string().nullish(),
    editor: z.string().nullish(),
    email: z.string().nullish(),
    howpublished: z.string().nullish(),
    institution: z.string().nullish(),
    journal: z.string().nullish(),
    month: z.string().nullish(),
    note: z.string().nullish(),
    number: z.string().nullish(),
    organization: z.string().nullish(),
    pages: z.string().nullish(),
    publisher: z.string().nullish(),
    school: z.string().nullish(),
    series: z.string().nullish(),
    title: z.string().nullish(),
    volume: z.string().nullish(),
    year: z.string().nullish(),
    numpages: z.string().nullish(),
    url: z.string().nullish(),
    issue: z.string().nullish(),
    issn: z.string().nullish(),
    abstract: z.string().nullish(),
    urldate: z.string().nullish(),
    keywords: z.string().nullish(),
    copyright: z.string().nullish(),
    tempPageIndex: z.number().int().nullish(),
    read: z.boolean().default(false),
    OwnWork: z.boolean().default(false),
    ColleaguesWork: z.boolean().default(false),
    MdxNotes: z.any().array().nullish(),
    createdAt: z
        .union([z.string().datetime(), z.date(), z.string()])
        .nullish()
        .transform(dateTimeStringTransform),
    lastAccess: z
        .union([z.string().datetime(), z.date(), z.string()])
        .nullish()
        .transform(dateTimeStringTransform),
    citationGroups: citationGroupSchema
        .array()
        .default([])
    // .transform((a) => a.map((b) => new CitationGroup(b)))
    ,
    added: z
        .union([z.string().datetime(), z.date(), z.string()])
        .nullish()
        .transform(dateTimeStringTransform),
});
export const bibEntryTransform = (x) => {
    return {
        ...x,
        BibId: (x.BibId === 1 && x.Bib) ? x.Bib.id : x.BibId,
    };
};
export const bibEntryPropsSchema = bibEntryPropsSchemaInner.catchall(z.string()).transform(bibEntryTransform);
