import { z } from 'zod';
import type { TopicWithRelations } from './TopicSchema'
import type { TopicPartialWithRelations } from './TopicSchema'
import type { SubjectWithRelations } from './SubjectSchema'
import type { SubjectPartialWithRelations } from './SubjectSchema'
import type { TagWithRelations } from './TagSchema'
import type { TagPartialWithRelations } from './TagSchema'
import type { BibEntryWithRelations } from './BibEntrySchema'
import type { BibEntryPartialWithRelations } from './BibEntrySchema'
import type { SequentialNoteListWithRelations } from './SequentialNoteListSchema'
import type { SequentialNoteListPartialWithRelations } from './SequentialNoteListSchema'
import type { ReadingListWithRelations } from './ReadingListSchema'
import type { ReadingListPartialWithRelations } from './ReadingListSchema'
import type { EquationWithRelations } from './EquationSchema'
import type { EquationPartialWithRelations } from './EquationSchema'
import type { DefinitionWithRelations } from './DefinitionSchema'
import type { DefinitionPartialWithRelations } from './DefinitionSchema'
import type { ToDoWithRelations } from './ToDoSchema'
import type { ToDoPartialWithRelations } from './ToDoSchema'
import { TopicWithRelationsSchema } from './TopicSchema'
import { TopicPartialWithRelationsSchema } from './TopicSchema'
import { SubjectWithRelationsSchema } from './SubjectSchema'
import { SubjectPartialWithRelationsSchema } from './SubjectSchema'
import { TagWithRelationsSchema } from './TagSchema'
import { TagPartialWithRelationsSchema } from './TagSchema'
import { BibEntryWithRelationsSchema } from './BibEntrySchema'
import { BibEntryPartialWithRelationsSchema } from './BibEntrySchema'
import { SequentialNoteListWithRelationsSchema } from './SequentialNoteListSchema'
import { SequentialNoteListPartialWithRelationsSchema } from './SequentialNoteListSchema'
import { ReadingListWithRelationsSchema } from './ReadingListSchema'
import { ReadingListPartialWithRelationsSchema } from './ReadingListSchema'
import { EquationWithRelationsSchema } from './EquationSchema'
import { EquationPartialWithRelationsSchema } from './EquationSchema'
import { DefinitionWithRelationsSchema } from './DefinitionSchema'
import { DefinitionPartialWithRelationsSchema } from './DefinitionSchema'
import { ToDoWithRelationsSchema } from './ToDoSchema'
import { ToDoPartialWithRelationsSchema } from './ToDoSchema'

/////////////////////////////////////////
// MDX NOTE SCHEMA
/////////////////////////////////////////

export const MdxNoteSchema = z.object({
  id: z.number().int(),
  isProtected: z.boolean().nullable(),
  dietSummaryKey: z.string().nullable(),
  title: z.string(),
  latexTitle: z.string().nullable(),
  rootRelativePath: z.string(),
  noteType: z.string(),
  content: z.string(),
  formatted: z.string().nullable(),
  summary: z.string().nullable(),
  citationsListOrder: z.string().array(),
  importantValues: z.number().array(),
  imageSrc: z.string().nullable(),
  href: z.string(),
  sequentialKey: z.string().nullable(),
  sequentialIndex: z.number().nullable(),
  floatImages: z.boolean(),
  remoteUrl: z.string().nullable(),
  trackRemote: z.boolean(),
  outgoingQuickLinks: z.string().array(),
  quickLink: z.string().nullable(),
  bookmarked: z.boolean(),
  firstSync: z.coerce.date(),
  lastSync: z.coerce.date(),
  lastAccess: z.coerce.date(),
})

export type MdxNote = z.infer<typeof MdxNoteSchema>

/////////////////////////////////////////
// MDX NOTE PARTIAL SCHEMA
/////////////////////////////////////////

export const MdxNotePartialSchema = MdxNoteSchema.partial()

export type MdxNotePartial = z.infer<typeof MdxNotePartialSchema>

/////////////////////////////////////////
// MDX NOTE RELATION SCHEMA
/////////////////////////////////////////

export type MdxNoteRelations = {
  topics: TopicWithRelations[];
  subjects: SubjectWithRelations[];
  tags: TagWithRelations[];
  citations: BibEntryWithRelations[];
  sequentialList?: SequentialNoteListWithRelations | null;
  ReadingList: ReadingListWithRelations[];
  equations: EquationWithRelations[];
  definitions: DefinitionWithRelations[];
  toDo: ToDoWithRelations[];
};

export type MdxNoteWithRelations = z.infer<typeof MdxNoteSchema> & MdxNoteRelations

export const MdxNoteWithRelationsSchema: z.ZodType<MdxNoteWithRelations> = MdxNoteSchema.merge(z.object({
  topics: z.lazy(() => TopicWithRelationsSchema).array(),
  subjects: z.lazy(() => SubjectWithRelationsSchema).array(),
  tags: z.lazy(() => TagWithRelationsSchema).array(),
  citations: z.lazy(() => BibEntryWithRelationsSchema).array(),
  sequentialList: z.lazy(() => SequentialNoteListWithRelationsSchema).nullable(),
  ReadingList: z.lazy(() => ReadingListWithRelationsSchema).array(),
  equations: z.lazy(() => EquationWithRelationsSchema).array(),
  definitions: z.lazy(() => DefinitionWithRelationsSchema).array(),
  toDo: z.lazy(() => ToDoWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// MDX NOTE PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type MdxNotePartialRelations = {
  topics?: TopicPartialWithRelations[];
  subjects?: SubjectPartialWithRelations[];
  tags?: TagPartialWithRelations[];
  citations?: BibEntryPartialWithRelations[];
  sequentialList?: SequentialNoteListPartialWithRelations | null;
  ReadingList?: ReadingListPartialWithRelations[];
  equations?: EquationPartialWithRelations[];
  definitions?: DefinitionPartialWithRelations[];
  toDo?: ToDoPartialWithRelations[];
};

export type MdxNotePartialWithRelations = z.infer<typeof MdxNotePartialSchema> & MdxNotePartialRelations

export const MdxNotePartialWithRelationsSchema: z.ZodType<MdxNotePartialWithRelations> = MdxNotePartialSchema.merge(z.object({
  topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
  tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
  citations: z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  sequentialList: z.lazy(() => SequentialNoteListPartialWithRelationsSchema).nullable(),
  ReadingList: z.lazy(() => ReadingListPartialWithRelationsSchema).array(),
  equations: z.lazy(() => EquationPartialWithRelationsSchema).array(),
  definitions: z.lazy(() => DefinitionPartialWithRelationsSchema).array(),
  toDo: z.lazy(() => ToDoPartialWithRelationsSchema).array(),
})).partial()

export type MdxNoteWithPartialRelations = z.infer<typeof MdxNoteSchema> & MdxNotePartialRelations

export const MdxNoteWithPartialRelationsSchema: z.ZodType<MdxNoteWithPartialRelations> = MdxNoteSchema.merge(z.object({
  topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
  tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
  citations: z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  sequentialList: z.lazy(() => SequentialNoteListPartialWithRelationsSchema).nullable(),
  ReadingList: z.lazy(() => ReadingListPartialWithRelationsSchema).array(),
  equations: z.lazy(() => EquationPartialWithRelationsSchema).array(),
  definitions: z.lazy(() => DefinitionPartialWithRelationsSchema).array(),
  toDo: z.lazy(() => ToDoPartialWithRelationsSchema).array(),
}).partial())

export default MdxNoteSchema;
