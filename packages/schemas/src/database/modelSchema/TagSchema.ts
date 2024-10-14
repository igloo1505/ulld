import { z } from 'zod';
import type { MdxNoteWithRelations } from './MdxNoteSchema.js'
import type { MdxNotePartialWithRelations } from './MdxNoteSchema.js'
import type { BibEntryWithRelations } from './BibEntrySchema.js'
import type { BibEntryPartialWithRelations } from './BibEntrySchema.js'
import type { IpynbWithRelations } from './IpynbSchema.js'
import type { IpynbPartialWithRelations } from './IpynbSchema.js'
import type { QAPairWithRelations } from './QAPairSchema.js'
import type { QAPairPartialWithRelations } from './QAPairSchema.js'
import type { PracticeExamWithRelations } from './PracticeExamSchema.js'
import type { PracticeExamPartialWithRelations } from './PracticeExamSchema.js'
import type { EquationWithRelations } from './EquationSchema.js'
import type { EquationPartialWithRelations } from './EquationSchema.js'
import type { ToDoWithRelations } from './ToDoSchema.js'
import type { ToDoPartialWithRelations } from './ToDoSchema.js'
import type { KanbanWithRelations } from './KanbanSchema.js'
import type { KanbanPartialWithRelations } from './KanbanSchema.js'
import type { ToDoListWithRelations } from './ToDoListSchema.js'
import type { ToDoListPartialWithRelations } from './ToDoListSchema.js'
import { MdxNoteWithRelationsSchema } from './MdxNoteSchema.js'
import { MdxNotePartialWithRelationsSchema } from './MdxNoteSchema.js'
import { BibEntryWithRelationsSchema } from './BibEntrySchema.js'
import { BibEntryPartialWithRelationsSchema } from './BibEntrySchema.js'
import { IpynbWithRelationsSchema } from './IpynbSchema.js'
import { IpynbPartialWithRelationsSchema } from './IpynbSchema.js'
import { QAPairWithRelationsSchema } from './QAPairSchema.js'
import { QAPairPartialWithRelationsSchema } from './QAPairSchema.js'
import { PracticeExamWithRelationsSchema } from './PracticeExamSchema.js'
import { PracticeExamPartialWithRelationsSchema } from './PracticeExamSchema.js'
import { EquationWithRelationsSchema } from './EquationSchema.js'
import { EquationPartialWithRelationsSchema } from './EquationSchema.js'
import { ToDoWithRelationsSchema } from './ToDoSchema.js'
import { ToDoPartialWithRelationsSchema } from './ToDoSchema.js'
import { KanbanWithRelationsSchema } from './KanbanSchema.js'
import { KanbanPartialWithRelationsSchema } from './KanbanSchema.js'
import { ToDoListWithRelationsSchema } from './ToDoListSchema.js'
import { ToDoListPartialWithRelationsSchema } from './ToDoListSchema.js'
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