import { z } from 'zod';
import type { MdxNoteWithRelations } from './MdxNoteSchema'
import type { MdxNotePartialWithRelations } from './MdxNoteSchema'
import type { BibEntryWithRelations } from './BibEntrySchema'
import type { BibEntryPartialWithRelations } from './BibEntrySchema'
import type { IpynbWithRelations } from './IpynbSchema'
import type { IpynbPartialWithRelations } from './IpynbSchema'
import type { QAPairWithRelations } from './QAPairSchema'
import type { QAPairPartialWithRelations } from './QAPairSchema'
import type { PracticeExamWithRelations } from './PracticeExamSchema'
import type { PracticeExamPartialWithRelations } from './PracticeExamSchema'
import type { EquationWithRelations } from './EquationSchema'
import type { EquationPartialWithRelations } from './EquationSchema'
import type { ToDoWithRelations } from './ToDoSchema'
import type { ToDoPartialWithRelations } from './ToDoSchema'
import type { KanbanWithRelations } from './KanbanSchema'
import type { KanbanPartialWithRelations } from './KanbanSchema'
import type { ToDoListWithRelations } from './ToDoListSchema'
import type { ToDoListPartialWithRelations } from './ToDoListSchema'
import { MdxNoteWithRelationsSchema } from './MdxNoteSchema'
import { MdxNotePartialWithRelationsSchema } from './MdxNoteSchema'
import { BibEntryWithRelationsSchema } from './BibEntrySchema'
import { BibEntryPartialWithRelationsSchema } from './BibEntrySchema'
import { IpynbWithRelationsSchema } from './IpynbSchema'
import { IpynbPartialWithRelationsSchema } from './IpynbSchema'
import { QAPairWithRelationsSchema } from './QAPairSchema'
import { QAPairPartialWithRelationsSchema } from './QAPairSchema'
import { PracticeExamWithRelationsSchema } from './PracticeExamSchema'
import { PracticeExamPartialWithRelationsSchema } from './PracticeExamSchema'
import { EquationWithRelationsSchema } from './EquationSchema'
import { EquationPartialWithRelationsSchema } from './EquationSchema'
import { ToDoWithRelationsSchema } from './ToDoSchema'
import { ToDoPartialWithRelationsSchema } from './ToDoSchema'
import { KanbanWithRelationsSchema } from './KanbanSchema'
import { KanbanPartialWithRelationsSchema } from './KanbanSchema'
import { ToDoListWithRelationsSchema } from './ToDoListSchema'
import { ToDoListPartialWithRelationsSchema } from './ToDoListSchema'

/////////////////////////////////////////
// TAG SCHEMA
/////////////////////////////////////////

export const TagSchema = z.object({
  value: z.string(),
  kanbanId: z.number().int().nullable(),
  createdAt: z.coerce.date(),
  lastAccess: z.coerce.date(),
})

export type Tag = z.infer<typeof TagSchema>

/////////////////////////////////////////
// TAG PARTIAL SCHEMA
/////////////////////////////////////////

export const TagPartialSchema = TagSchema.partial()

export type TagPartial = z.infer<typeof TagPartialSchema>

/////////////////////////////////////////
// TAG RELATION SCHEMA
/////////////////////////////////////////

export type TagRelations = {
  MdxNotes: MdxNoteWithRelations[];
  bibEntries: BibEntryWithRelations[];
  ipynbNotes: IpynbWithRelations[];
  QAPair: QAPairWithRelations[];
  practiceExam: PracticeExamWithRelations[];
  equations: EquationWithRelations[];
  toDo: ToDoWithRelations[];
  Kanban?: KanbanWithRelations | null;
  todoList: ToDoListWithRelations[];
};

export type TagWithRelations = z.infer<typeof TagSchema> & TagRelations

export const TagWithRelationsSchema: z.ZodType<TagWithRelations> = TagSchema.merge(z.object({
  MdxNotes: z.lazy(() => MdxNoteWithRelationsSchema).array(),
  bibEntries: z.lazy(() => BibEntryWithRelationsSchema).array(),
  ipynbNotes: z.lazy(() => IpynbWithRelationsSchema).array(),
  QAPair: z.lazy(() => QAPairWithRelationsSchema).array(),
  practiceExam: z.lazy(() => PracticeExamWithRelationsSchema).array(),
  equations: z.lazy(() => EquationWithRelationsSchema).array(),
  toDo: z.lazy(() => ToDoWithRelationsSchema).array(),
  Kanban: z.lazy(() => KanbanWithRelationsSchema).nullable(),
  todoList: z.lazy(() => ToDoListWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// TAG PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type TagPartialRelations = {
  MdxNotes?: MdxNotePartialWithRelations[];
  bibEntries?: BibEntryPartialWithRelations[];
  ipynbNotes?: IpynbPartialWithRelations[];
  QAPair?: QAPairPartialWithRelations[];
  practiceExam?: PracticeExamPartialWithRelations[];
  equations?: EquationPartialWithRelations[];
  toDo?: ToDoPartialWithRelations[];
  Kanban?: KanbanPartialWithRelations | null;
  todoList?: ToDoListPartialWithRelations[];
};

export type TagPartialWithRelations = z.infer<typeof TagPartialSchema> & TagPartialRelations

export const TagPartialWithRelationsSchema: z.ZodType<TagPartialWithRelations> = TagPartialSchema.merge(z.object({
  MdxNotes: z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  bibEntries: z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  ipynbNotes: z.lazy(() => IpynbPartialWithRelationsSchema).array(),
  QAPair: z.lazy(() => QAPairPartialWithRelationsSchema).array(),
  practiceExam: z.lazy(() => PracticeExamPartialWithRelationsSchema).array(),
  equations: z.lazy(() => EquationPartialWithRelationsSchema).array(),
  toDo: z.lazy(() => ToDoPartialWithRelationsSchema).array(),
  Kanban: z.lazy(() => KanbanPartialWithRelationsSchema).nullable(),
  todoList: z.lazy(() => ToDoListPartialWithRelationsSchema).array(),
})).partial()

export type TagWithPartialRelations = z.infer<typeof TagSchema> & TagPartialRelations

export const TagWithPartialRelationsSchema: z.ZodType<TagWithPartialRelations> = TagSchema.merge(z.object({
  MdxNotes: z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  bibEntries: z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  ipynbNotes: z.lazy(() => IpynbPartialWithRelationsSchema).array(),
  QAPair: z.lazy(() => QAPairPartialWithRelationsSchema).array(),
  practiceExam: z.lazy(() => PracticeExamPartialWithRelationsSchema).array(),
  equations: z.lazy(() => EquationPartialWithRelationsSchema).array(),
  toDo: z.lazy(() => ToDoPartialWithRelationsSchema).array(),
  Kanban: z.lazy(() => KanbanPartialWithRelationsSchema).nullable(),
  todoList: z.lazy(() => ToDoListPartialWithRelationsSchema).array(),
}).partial())

export default TagSchema;
