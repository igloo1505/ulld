import { z } from 'zod';
import type { MdxNoteWithRelations } from './MdxNoteSchema'
import type { MdxNotePartialWithRelations } from './MdxNoteSchema'
import type { IpynbWithRelations } from './IpynbSchema'
import type { IpynbPartialWithRelations } from './IpynbSchema'
import type { QAPairWithRelations } from './QAPairSchema'
import type { QAPairPartialWithRelations } from './QAPairSchema'
import type { PracticeExamWithRelations } from './PracticeExamSchema'
import type { PracticeExamPartialWithRelations } from './PracticeExamSchema'
import type { KanbanWithRelations } from './KanbanSchema'
import type { KanbanPartialWithRelations } from './KanbanSchema'
import type { ToDoListWithRelations } from './ToDoListSchema'
import type { ToDoListPartialWithRelations } from './ToDoListSchema'
import type { ToDoWithRelations } from './ToDoSchema'
import type { ToDoPartialWithRelations } from './ToDoSchema'
import type { BibEntryWithRelations } from './BibEntrySchema'
import type { BibEntryPartialWithRelations } from './BibEntrySchema'
import type { EquationWithRelations } from './EquationSchema'
import type { EquationPartialWithRelations } from './EquationSchema'
import { MdxNoteWithRelationsSchema } from './MdxNoteSchema'
import { MdxNotePartialWithRelationsSchema } from './MdxNoteSchema'
import { IpynbWithRelationsSchema } from './IpynbSchema'
import { IpynbPartialWithRelationsSchema } from './IpynbSchema'
import { QAPairWithRelationsSchema } from './QAPairSchema'
import { QAPairPartialWithRelationsSchema } from './QAPairSchema'
import { PracticeExamWithRelationsSchema } from './PracticeExamSchema'
import { PracticeExamPartialWithRelationsSchema } from './PracticeExamSchema'
import { KanbanWithRelationsSchema } from './KanbanSchema'
import { KanbanPartialWithRelationsSchema } from './KanbanSchema'
import { ToDoListWithRelationsSchema } from './ToDoListSchema'
import { ToDoListPartialWithRelationsSchema } from './ToDoListSchema'
import { ToDoWithRelationsSchema } from './ToDoSchema'
import { ToDoPartialWithRelationsSchema } from './ToDoSchema'
import { BibEntryWithRelationsSchema } from './BibEntrySchema'
import { BibEntryPartialWithRelationsSchema } from './BibEntrySchema'
import { EquationWithRelationsSchema } from './EquationSchema'
import { EquationPartialWithRelationsSchema } from './EquationSchema'

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
