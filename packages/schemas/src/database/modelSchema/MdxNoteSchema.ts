import { z } from 'zod';
import type { TopicWithRelations } from '../TopicSchema.js'
import type { TopicPartialWithRelations } from '../TopicSchema.js'
import type { SubjectWithRelations } from '../SubjectSchema.js'
import type { SubjectPartialWithRelations } from '../SubjectSchema.js'
import type { TagWithRelations } from '../TagSchema.js'
import type { TagPartialWithRelations } from '../TagSchema.js'
import type { BibEntryWithRelations } from '../BibEntrySchema.js'
import type { BibEntryPartialWithRelations } from '../BibEntrySchema.js'
import type { SequentialNoteListWithRelations } from '../SequentialNoteListSchema.js'
import type { SequentialNoteListPartialWithRelations } from '../SequentialNoteListSchema.js'
import type { ReadingListWithRelations } from '../ReadingListSchema.js'
import type { ReadingListPartialWithRelations } from '../ReadingListSchema.js'
import type { EquationWithRelations } from '../EquationSchema.js'
import type { EquationPartialWithRelations } from '../EquationSchema.js'
import type { DefinitionWithRelations } from '../DefinitionSchema.js'
import type { DefinitionPartialWithRelations } from '../DefinitionSchema.js'
import type { ToDoWithRelations } from '../ToDoSchema.js'
import type { ToDoPartialWithRelations } from '../ToDoSchema.js'
import { TopicWithRelationsSchema } from '../TopicSchema.js'
import { TopicPartialWithRelationsSchema } from '../TopicSchema.js'
import { SubjectWithRelationsSchema } from '../SubjectSchema.js'
import { SubjectPartialWithRelationsSchema } from '../SubjectSchema.js'
import { TagWithRelationsSchema } from '../TagSchema.js'
import { TagPartialWithRelationsSchema } from '../TagSchema.js'
import { BibEntryWithRelationsSchema } from '../BibEntrySchema.js'
import { BibEntryPartialWithRelationsSchema } from '../BibEntrySchema.js'
import { SequentialNoteListWithRelationsSchema } from '../SequentialNoteListSchema.js'
import { SequentialNoteListPartialWithRelationsSchema } from '../SequentialNoteListSchema.js'
import { ReadingListWithRelationsSchema } from '../ReadingListSchema.js'
import { ReadingListPartialWithRelationsSchema } from '../ReadingListSchema.js'
import { EquationWithRelationsSchema } from '../EquationSchema.js'
import { EquationPartialWithRelationsSchema } from '../EquationSchema.js'
import { DefinitionWithRelationsSchema } from '../DefinitionSchema.js'
import { DefinitionPartialWithRelationsSchema } from '../DefinitionSchema.js'
import { ToDoWithRelationsSchema } from '../ToDoSchema.js'
import { ToDoPartialWithRelationsSchema } from '../ToDoSchema.js'
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