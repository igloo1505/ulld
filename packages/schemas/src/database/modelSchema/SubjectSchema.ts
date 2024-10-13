import { z } from 'zod';
import type { MdxNoteWithRelations } from '../MdxNoteSchema.js'
import type { MdxNotePartialWithRelations } from '../MdxNoteSchema.js'
import type { IpynbWithRelations } from '../IpynbSchema.js'
import type { IpynbPartialWithRelations } from '../IpynbSchema.js'
import type { QAPairWithRelations } from '../QAPairSchema.js'
import type { QAPairPartialWithRelations } from '../QAPairSchema.js'
import type { PracticeExamWithRelations } from '../PracticeExamSchema.js'
import type { PracticeExamPartialWithRelations } from '../PracticeExamSchema.js'
import type { KanbanWithRelations } from '../KanbanSchema.js'
import type { KanbanPartialWithRelations } from '../KanbanSchema.js'
import type { ToDoListWithRelations } from '../ToDoListSchema.js'
import type { ToDoListPartialWithRelations } from '../ToDoListSchema.js'
import type { ToDoWithRelations } from '../ToDoSchema.js'
import type { ToDoPartialWithRelations } from '../ToDoSchema.js'
import type { BibEntryWithRelations } from '../BibEntrySchema.js'
import type { BibEntryPartialWithRelations } from '../BibEntrySchema.js'
import type { EquationWithRelations } from '../EquationSchema.js'
import type { EquationPartialWithRelations } from '../EquationSchema.js'
import { MdxNoteWithRelationsSchema } from '../MdxNoteSchema.js'
import { MdxNotePartialWithRelationsSchema } from '../MdxNoteSchema.js'
import { IpynbWithRelationsSchema } from '../IpynbSchema.js'
import { IpynbPartialWithRelationsSchema } from '../IpynbSchema.js'
import { QAPairWithRelationsSchema } from '../QAPairSchema.js'
import { QAPairPartialWithRelationsSchema } from '../QAPairSchema.js'
import { PracticeExamWithRelationsSchema } from '../PracticeExamSchema.js'
import { PracticeExamPartialWithRelationsSchema } from '../PracticeExamSchema.js'
import { KanbanWithRelationsSchema } from '../KanbanSchema.js'
import { KanbanPartialWithRelationsSchema } from '../KanbanSchema.js'
import { ToDoListWithRelationsSchema } from '../ToDoListSchema.js'
import { ToDoListPartialWithRelationsSchema } from '../ToDoListSchema.js'
import { ToDoWithRelationsSchema } from '../ToDoSchema.js'
import { ToDoPartialWithRelationsSchema } from '../ToDoSchema.js'
import { BibEntryWithRelationsSchema } from '../BibEntrySchema.js'
import { BibEntryPartialWithRelationsSchema } from '../BibEntrySchema.js'
import { EquationWithRelationsSchema } from '../EquationSchema.js'
import { EquationPartialWithRelationsSchema } from '../EquationSchema.js'
/////////////////////////////////////////
// SUBJECT SCHEMA
/////////////////////////////////////////
export const SubjectSchema = z.object({
  value: z.string(),
  kanbanId: z.number().int().nullable(),
  createdAt: z.coerce.date(),
  lastAccess: z.coerce.date(),
})
export type Subject = z.infer<typeof SubjectSchema>
/////////////////////////////////////////
// SUBJECT PARTIAL SCHEMA
/////////////////////////////////////////
export const SubjectPartialSchema = SubjectSchema.partial()
export type SubjectPartial = z.infer<typeof SubjectPartialSchema>
/////////////////////////////////////////
// SUBJECT RELATION SCHEMA
/////////////////////////////////////////
export type SubjectRelations = {
  MdxNotes: MdxNoteWithRelations[];
  IpynbNotes: IpynbWithRelations[];
  QaPair: QAPairWithRelations[];
  practiceExam: PracticeExamWithRelations[];
  Kanban?: KanbanWithRelations | null;
  todoList: ToDoListWithRelations[];
  toDo: ToDoWithRelations[];
  bibEntries: BibEntryWithRelations[];
  equations: EquationWithRelations[];
};
export type SubjectWithRelations = z.infer<typeof SubjectSchema> & SubjectRelations
export const SubjectWithRelationsSchema: z.ZodType<SubjectWithRelations> = SubjectSchema.merge(z.object({
  MdxNotes: z.lazy(() => MdxNoteWithRelationsSchema).array(),
  IpynbNotes: z.lazy(() => IpynbWithRelationsSchema).array(),
  QaPair: z.lazy(() => QAPairWithRelationsSchema).array(),
  practiceExam: z.lazy(() => PracticeExamWithRelationsSchema).array(),
  Kanban: z.lazy(() => KanbanWithRelationsSchema).nullable(),
  todoList: z.lazy(() => ToDoListWithRelationsSchema).array(),
  toDo: z.lazy(() => ToDoWithRelationsSchema).array(),
  bibEntries: z.lazy(() => BibEntryWithRelationsSchema).array(),
  equations: z.lazy(() => EquationWithRelationsSchema).array(),
}))
/////////////////////////////////////////
// SUBJECT PARTIAL RELATION SCHEMA
/////////////////////////////////////////
export type SubjectPartialRelations = {
  MdxNotes?: MdxNotePartialWithRelations[];
  IpynbNotes?: IpynbPartialWithRelations[];
  QaPair?: QAPairPartialWithRelations[];
  practiceExam?: PracticeExamPartialWithRelations[];
  Kanban?: KanbanPartialWithRelations | null;
  todoList?: ToDoListPartialWithRelations[];
  toDo?: ToDoPartialWithRelations[];
  bibEntries?: BibEntryPartialWithRelations[];
  equations?: EquationPartialWithRelations[];
};
export type SubjectPartialWithRelations = z.infer<typeof SubjectPartialSchema> & SubjectPartialRelations
export const SubjectPartialWithRelationsSchema: z.ZodType<SubjectPartialWithRelations> = SubjectPartialSchema.merge(z.object({
  MdxNotes: z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  IpynbNotes: z.lazy(() => IpynbPartialWithRelationsSchema).array(),
  QaPair: z.lazy(() => QAPairPartialWithRelationsSchema).array(),
  practiceExam: z.lazy(() => PracticeExamPartialWithRelationsSchema).array(),
  Kanban: z.lazy(() => KanbanPartialWithRelationsSchema).nullable(),
  todoList: z.lazy(() => ToDoListPartialWithRelationsSchema).array(),
  toDo: z.lazy(() => ToDoPartialWithRelationsSchema).array(),
  bibEntries: z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  equations: z.lazy(() => EquationPartialWithRelationsSchema).array(),
})).partial()
export type SubjectWithPartialRelations = z.infer<typeof SubjectSchema> & SubjectPartialRelations
export const SubjectWithPartialRelationsSchema: z.ZodType<SubjectWithPartialRelations> = SubjectSchema.merge(z.object({
  MdxNotes: z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  IpynbNotes: z.lazy(() => IpynbPartialWithRelationsSchema).array(),
  QaPair: z.lazy(() => QAPairPartialWithRelationsSchema).array(),
  practiceExam: z.lazy(() => PracticeExamPartialWithRelationsSchema).array(),
  Kanban: z.lazy(() => KanbanPartialWithRelationsSchema).nullable(),
  todoList: z.lazy(() => ToDoListPartialWithRelationsSchema).array(),
  toDo: z.lazy(() => ToDoPartialWithRelationsSchema).array(),
  bibEntries: z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  equations: z.lazy(() => EquationPartialWithRelationsSchema).array(),
}).partial())
export default SubjectSchema;