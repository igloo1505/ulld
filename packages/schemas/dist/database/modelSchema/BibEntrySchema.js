import { z } from 'zod';
import { BibWithRelationsSchema } from './BibSchema.js';
import { BibPartialWithRelationsSchema } from './BibSchema.js';
import { CitationsGroupWithRelationsSchema } from './CitationsGroupSchema.js';
import { CitationsGroupPartialWithRelationsSchema } from './CitationsGroupSchema.js';
import { TagWithRelationsSchema } from './TagSchema.js';
import { TagPartialWithRelationsSchema } from './TagSchema.js';
import { TopicWithRelationsSchema } from './TopicSchema.js';
import { TopicPartialWithRelationsSchema } from './TopicSchema.js';
import { SubjectWithRelationsSchema } from './SubjectSchema.js';
import { SubjectPartialWithRelationsSchema } from './SubjectSchema.js';
import { MdxNoteWithRelationsSchema } from './MdxNoteSchema.js';
import { MdxNotePartialWithRelationsSchema } from './MdxNoteSchema.js';
import { IpynbWithRelationsSchema } from './IpynbSchema.js';
import { IpynbPartialWithRelationsSchema } from './IpynbSchema.js';
import { ReadingListWithRelationsSchema } from './ReadingListSchema.js';
import { ReadingListPartialWithRelationsSchema } from './ReadingListSchema.js';
/////////////////////////////////////////
// BIB ENTRY SCHEMA
/////////////////////////////////////////
export const BibEntrySchema = z.object({
    id: z.string(),
    BibId: z.number().int().nullable(),
    OwnWork: z.boolean(),
    ColleaguesWork: z.boolean(),
    read: z.boolean(),
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
    type: z.string().nullable(),
    year: z.string().nullable(),
    numpages: z.string().nullable(),
    url: z.string().nullable(),
    issue: z.string().nullable(),
    issn: z.string().nullable(),
    abstract: z.string().nullable(),
    urldate: z.string().nullable(),
    keywords: z.string().nullable(),
    copyright: z.string().nullable(),
    createdAt: z.coerce.date(),
    lastAccess: z.coerce.date(),
});
/////////////////////////////////////////
// BIB ENTRY PARTIAL SCHEMA
/////////////////////////////////////////
export const BibEntryPartialSchema = BibEntrySchema.partial();
export const BibEntryWithRelationsSchema = BibEntrySchema.merge(z.object({
    Bib: z.lazy(() => BibWithRelationsSchema).nullable(),
    citationGroups: z.lazy(() => CitationsGroupWithRelationsSchema).array(),
    tags: z.lazy(() => TagWithRelationsSchema).array(),
    topics: z.lazy(() => TopicWithRelationsSchema).array(),
    subjects: z.lazy(() => SubjectWithRelationsSchema).array(),
    MdxNotes: z.lazy(() => MdxNoteWithRelationsSchema).array(),
    ipynbNotes: z.lazy(() => IpynbWithRelationsSchema).array(),
    readingList: z.lazy(() => ReadingListWithRelationsSchema).array(),
}));
export const BibEntryPartialWithRelationsSchema = BibEntryPartialSchema.merge(z.object({
    Bib: z.lazy(() => BibPartialWithRelationsSchema).nullable(),
    citationGroups: z.lazy(() => CitationsGroupPartialWithRelationsSchema).array(),
    tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
    topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
    subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
    MdxNotes: z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
    ipynbNotes: z.lazy(() => IpynbPartialWithRelationsSchema).array(),
    readingList: z.lazy(() => ReadingListPartialWithRelationsSchema).array(),
})).partial();
export const BibEntryWithPartialRelationsSchema = BibEntrySchema.merge(z.object({
    Bib: z.lazy(() => BibPartialWithRelationsSchema).nullable(),
    citationGroups: z.lazy(() => CitationsGroupPartialWithRelationsSchema).array(),
    tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
    topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
    subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
    MdxNotes: z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
    ipynbNotes: z.lazy(() => IpynbPartialWithRelationsSchema).array(),
    readingList: z.lazy(() => ReadingListPartialWithRelationsSchema).array(),
}).partial());
export default BibEntrySchema;
