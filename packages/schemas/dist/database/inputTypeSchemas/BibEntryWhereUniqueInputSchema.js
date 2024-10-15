import { z } from 'zod';
import { BibEntryWhereInputSchema } from './BibEntryWhereInputSchema.js';
import { IntNullableFilterSchema } from './IntNullableFilterSchema.js';
import { BoolFilterSchema } from './BoolFilterSchema.js';
import { StringNullableFilterSchema } from './StringNullableFilterSchema.js';
import { DateTimeFilterSchema } from './DateTimeFilterSchema.js';
import { BibNullableRelationFilterSchema } from './BibNullableRelationFilterSchema.js';
import { BibWhereInputSchema } from './BibWhereInputSchema.js';
import { CitationsGroupListRelationFilterSchema } from './CitationsGroupListRelationFilterSchema.js';
import { TagListRelationFilterSchema } from './TagListRelationFilterSchema.js';
import { TopicListRelationFilterSchema } from './TopicListRelationFilterSchema.js';
import { SubjectListRelationFilterSchema } from './SubjectListRelationFilterSchema.js';
import { MdxNoteListRelationFilterSchema } from './MdxNoteListRelationFilterSchema.js';
import { IpynbListRelationFilterSchema } from './IpynbListRelationFilterSchema.js';
import { ReadingListListRelationFilterSchema } from './ReadingListListRelationFilterSchema.js';
export const BibEntryWhereUniqueInputSchema = z.object({
    id: z.string()
})
    .and(z.object({
    id: z.string().optional(),
    AND: z.union([z.lazy(() => BibEntryWhereInputSchema), z.lazy(() => BibEntryWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => BibEntryWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => BibEntryWhereInputSchema), z.lazy(() => BibEntryWhereInputSchema).array()]).optional(),
    BibId: z.union([z.lazy(() => IntNullableFilterSchema), z.number().int()]).optional().nullable(),
    OwnWork: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
    ColleaguesWork: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
    read: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
    htmlCitation: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    PdfPath: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    address: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    annote: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    author: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    booktitle: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    chapter: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    crossref: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    doi: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    edition: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    editor: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    email: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    howpublished: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    institution: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    journal: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    month: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    note: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    number: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    organization: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    pages: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    publisher: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    school: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    series: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    title: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    volume: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    type: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    year: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    numpages: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    url: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    issue: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    issn: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    abstract: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    urldate: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    keywords: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    copyright: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    lastAccess: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    Bib: z.union([z.lazy(() => BibNullableRelationFilterSchema), z.lazy(() => BibWhereInputSchema)]).optional().nullable(),
    citationGroups: z.lazy(() => CitationsGroupListRelationFilterSchema).optional(),
    tags: z.lazy(() => TagListRelationFilterSchema).optional(),
    topics: z.lazy(() => TopicListRelationFilterSchema).optional(),
    subjects: z.lazy(() => SubjectListRelationFilterSchema).optional(),
    MdxNotes: z.lazy(() => MdxNoteListRelationFilterSchema).optional(),
    ipynbNotes: z.lazy(() => IpynbListRelationFilterSchema).optional(),
    readingList: z.lazy(() => ReadingListListRelationFilterSchema).optional()
}).strict());
export default BibEntryWhereUniqueInputSchema;
