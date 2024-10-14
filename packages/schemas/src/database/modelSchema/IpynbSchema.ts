import { z } from 'zod';
import type { TagWithRelations } from './TagSchema'
import type { TagPartialWithRelations } from './TagSchema'
import type { TopicWithRelations } from './TopicSchema'
import type { TopicPartialWithRelations } from './TopicSchema'
import type { SubjectWithRelations } from './SubjectSchema'
import type { SubjectPartialWithRelations } from './SubjectSchema'
import type { BibEntryWithRelations } from './BibEntrySchema'
import type { BibEntryPartialWithRelations } from './BibEntrySchema'
import type { SequentialNoteListWithRelations } from './SequentialNoteListSchema'
import type { SequentialNoteListPartialWithRelations } from './SequentialNoteListSchema'
import type { ReadingListWithRelations } from './ReadingListSchema'
import type { ReadingListPartialWithRelations } from './ReadingListSchema'
import { TagWithRelationsSchema } from './TagSchema'
import { TagPartialWithRelationsSchema } from './TagSchema'
import { TopicWithRelationsSchema } from './TopicSchema'
import { TopicPartialWithRelationsSchema } from './TopicSchema'
import { SubjectWithRelationsSchema } from './SubjectSchema'
import { SubjectPartialWithRelationsSchema } from './SubjectSchema'
import { BibEntryWithRelationsSchema } from './BibEntrySchema'
import { BibEntryPartialWithRelationsSchema } from './BibEntrySchema'
import { SequentialNoteListWithRelationsSchema } from './SequentialNoteListSchema'
import { SequentialNoteListPartialWithRelationsSchema } from './SequentialNoteListSchema'
import { ReadingListWithRelationsSchema } from './ReadingListSchema'
import { ReadingListPartialWithRelationsSchema } from './ReadingListSchema'

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
})

export type Ipynb = z.infer<typeof IpynbSchema>

/////////////////////////////////////////
// IPYNB PARTIAL SCHEMA
/////////////////////////////////////////

export const IpynbPartialSchema = IpynbSchema.partial()

export type IpynbPartial = z.infer<typeof IpynbPartialSchema>

/////////////////////////////////////////
// IPYNB RELATION SCHEMA
/////////////////////////////////////////

export type IpynbRelations = {
  tags: TagWithRelations[];
  topics: TopicWithRelations[];
  subjects: SubjectWithRelations[];
  citations: BibEntryWithRelations[];
  sequentialList?: SequentialNoteListWithRelations | null;
  readingList: ReadingListWithRelations[];
};

export type IpynbWithRelations = z.infer<typeof IpynbSchema> & IpynbRelations

export const IpynbWithRelationsSchema: z.ZodType<IpynbWithRelations> = IpynbSchema.merge(z.object({
  tags: z.lazy(() => TagWithRelationsSchema).array(),
  topics: z.lazy(() => TopicWithRelationsSchema).array(),
  subjects: z.lazy(() => SubjectWithRelationsSchema).array(),
  citations: z.lazy(() => BibEntryWithRelationsSchema).array(),
  sequentialList: z.lazy(() => SequentialNoteListWithRelationsSchema).nullable(),
  readingList: z.lazy(() => ReadingListWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// IPYNB PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type IpynbPartialRelations = {
  tags?: TagPartialWithRelations[];
  topics?: TopicPartialWithRelations[];
  subjects?: SubjectPartialWithRelations[];
  citations?: BibEntryPartialWithRelations[];
  sequentialList?: SequentialNoteListPartialWithRelations | null;
  readingList?: ReadingListPartialWithRelations[];
};

export type IpynbPartialWithRelations = z.infer<typeof IpynbPartialSchema> & IpynbPartialRelations

export const IpynbPartialWithRelationsSchema: z.ZodType<IpynbPartialWithRelations> = IpynbPartialSchema.merge(z.object({
  tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
  citations: z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  sequentialList: z.lazy(() => SequentialNoteListPartialWithRelationsSchema).nullable(),
  readingList: z.lazy(() => ReadingListPartialWithRelationsSchema).array(),
})).partial()

export type IpynbWithPartialRelations = z.infer<typeof IpynbSchema> & IpynbPartialRelations

export const IpynbWithPartialRelationsSchema: z.ZodType<IpynbWithPartialRelations> = IpynbSchema.merge(z.object({
  tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
  citations: z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  sequentialList: z.lazy(() => SequentialNoteListPartialWithRelationsSchema).nullable(),
  readingList: z.lazy(() => ReadingListPartialWithRelationsSchema).array(),
}).partial())

export default IpynbSchema;
