import { z } from 'zod';
import { TagWithRelationsSchema } from './TagSchema.js';
import { TagPartialWithRelationsSchema } from './TagSchema.js';
import { TopicWithRelationsSchema } from './TopicSchema.js';
import { TopicPartialWithRelationsSchema } from './TopicSchema.js';
import { SubjectWithRelationsSchema } from './SubjectSchema.js';
import { SubjectPartialWithRelationsSchema } from './SubjectSchema.js';
import { BibEntryWithRelationsSchema } from './BibEntrySchema.js';
import { BibEntryPartialWithRelationsSchema } from './BibEntrySchema.js';
import { SequentialNoteListWithRelationsSchema } from './SequentialNoteListSchema.js';
import { SequentialNoteListPartialWithRelationsSchema } from './SequentialNoteListSchema.js';
import { ReadingListWithRelationsSchema } from './ReadingListSchema.js';
import { ReadingListPartialWithRelationsSchema } from './ReadingListSchema.js';
/////////////////////////////////////////
// IPYNB SCHEMA
/////////////////////////////////////////
export const IpynbSchema = z.object({
    id: z.number().int(),
    rootRelativePath: z.string(),
    isProtected: z.boolean().nullable(),
    title: z.string(),
    latexTitle: z.string().nullable(),
    citationsListOrder: z.string().array(),
    importantValues: z.number().array(),
    href: z.string(),
    outgoingQuickLinks: z.string().array(),
    raw: z.instanceof(Buffer),
    sequentialKey: z.string().nullable(),
    sequentialIndex: z.number().int().nullable(),
    bookmarked: z.boolean(),
    firstSync: z.coerce.date(),
    lastSync: z.coerce.date(),
    lastAccess: z.coerce.date(),
});
/////////////////////////////////////////
// IPYNB PARTIAL SCHEMA
/////////////////////////////////////////
export const IpynbPartialSchema = IpynbSchema.partial();
export const IpynbWithRelationsSchema = IpynbSchema.merge(z.object({
    tags: z.lazy(() => TagWithRelationsSchema).array(),
    topics: z.lazy(() => TopicWithRelationsSchema).array(),
    subjects: z.lazy(() => SubjectWithRelationsSchema).array(),
    citations: z.lazy(() => BibEntryWithRelationsSchema).array(),
    sequentialList: z.lazy(() => SequentialNoteListWithRelationsSchema).nullable(),
    readingList: z.lazy(() => ReadingListWithRelationsSchema).array(),
}));
export const IpynbPartialWithRelationsSchema = IpynbPartialSchema.merge(z.object({
    tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
    topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
    subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
    citations: z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
    sequentialList: z.lazy(() => SequentialNoteListPartialWithRelationsSchema).nullable(),
    readingList: z.lazy(() => ReadingListPartialWithRelationsSchema).array(),
})).partial();
export const IpynbWithPartialRelationsSchema = IpynbSchema.merge(z.object({
    tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
    topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
    subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
    citations: z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
    sequentialList: z.lazy(() => SequentialNoteListPartialWithRelationsSchema).nullable(),
    readingList: z.lazy(() => ReadingListPartialWithRelationsSchema).array(),
}).partial());
export default IpynbSchema;
