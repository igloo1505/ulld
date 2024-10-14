import { z } from 'zod';
import type { MdxNoteWithRelations } from './MdxNoteSchema'
import type { MdxNotePartialWithRelations } from './MdxNoteSchema'
import type { IpynbWithRelations } from './IpynbSchema'
import type { IpynbPartialWithRelations } from './IpynbSchema'
import type { QAPairWithRelations } from './QAPairSchema'
import type { QAPairPartialWithRelations } from './QAPairSchema'
import type { PracticeExamWithRelations } from './PracticeExamSchema'
import type { PracticeExamPartialWithRelations } from './PracticeExamSchema'
import type { ToDoWithRelations } from './ToDoSchema'
import type { ToDoPartialWithRelations } from './ToDoSchema'
import type { KanbanWithRelations } from './KanbanSchema'
import type { KanbanPartialWithRelations } from './KanbanSchema'
import type { ToDoListWithRelations } from './ToDoListSchema'
import type { ToDoListPartialWithRelations } from './ToDoListSchema'
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
import { ToDoWithRelationsSchema } from './ToDoSchema'
import { ToDoPartialWithRelationsSchema } from './ToDoSchema'
import { KanbanWithRelationsSchema } from './KanbanSchema'
import { KanbanPartialWithRelationsSchema } from './KanbanSchema'
import { ToDoListWithRelationsSchema } from './ToDoListSchema'
import { ToDoListPartialWithRelationsSchema } from './ToDoListSchema'
import { BibEntryWithRelationsSchema } from './BibEntrySchema'
import { BibEntryPartialWithRelationsSchema } from './BibEntrySchema'
import { EquationWithRelationsSchema } from './EquationSchema'
import { EquationPartialWithRelationsSchema } from './EquationSchema'

/////////////////////////////////////////
// TOPIC SCHEMA
/////////////////////////////////////////

export const TopicSchema = z.object({
  value: z.string(),
  kanbanId: z.number().int().nullable(),
  createdAt: z.coerce.date(),
  lastAccess: z.coerce.date(),
})

export type Topic = z.infer<typeof TopicSchema>

/////////////////////////////////////////
// TOPIC PARTIAL SCHEMA
/////////////////////////////////////////

export const TopicPartialSchema = TopicSchema.partial()

export type TopicPartial = z.infer<typeof TopicPartialSchema>

/////////////////////////////////////////
// TOPIC RELATION SCHEMA
/////////////////////////////////////////

export type TopicRelations = {
  MdxNotes: MdxNoteWithRelations[];
  ipynbNotes: IpynbWithRelations[];
  QAPair: QAPairWithRelations[];
  practiceExam: PracticeExamWithRelations[];
  toDo: ToDoWithRelations[];
  Kanban?: KanbanWithRelations | null;
  todoList: ToDoListWithRelations[];
  bibEntries: BibEntryWithRelations[];
  equations: EquationWithRelations[];
};

export type TopicWithRelations = z.infer<typeof TopicSchema> & TopicRelations

export const TopicWithRelationsSchema: z.ZodType<TopicWithRelations> = TopicSchema.merge(z.object({
  MdxNotes: z.lazy(() => MdxNoteWithRelationsSchema).array(),
  ipynbNotes: z.lazy(() => IpynbWithRelationsSchema).array(),
  QAPair: z.lazy(() => QAPairWithRelationsSchema).array(),
  practiceExam: z.lazy(() => PracticeExamWithRelationsSchema).array(),
  toDo: z.lazy(() => ToDoWithRelationsSchema).array(),
  Kanban: z.lazy(() => KanbanWithRelationsSchema).nullable(),
  todoList: z.lazy(() => ToDoListWithRelationsSchema).array(),
  bibEntries: z.lazy(() => BibEntryWithRelationsSchema).array(),
  equations: z.lazy(() => EquationWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// TOPIC PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type TopicPartialRelations = {
  MdxNotes?: MdxNotePartialWithRelations[];
  ipynbNotes?: IpynbPartialWithRelations[];
  QAPair?: QAPairPartialWithRelations[];
  practiceExam?: PracticeExamPartialWithRelations[];
  toDo?: ToDoPartialWithRelations[];
  Kanban?: KanbanPartialWithRelations | null;
  todoList?: ToDoListPartialWithRelations[];
  bibEntries?: BibEntryPartialWithRelations[];
  equations?: EquationPartialWithRelations[];
};

export type TopicPartialWithRelations = z.infer<typeof TopicPartialSchema> & TopicPartialRelations

export const TopicPartialWithRelationsSchema: z.ZodType<TopicPartialWithRelations> = TopicPartialSchema.merge(z.object({
  MdxNotes: z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  ipynbNotes: z.lazy(() => IpynbPartialWithRelationsSchema).array(),
  QAPair: z.lazy(() => QAPairPartialWithRelationsSchema).array(),
  practiceExam: z.lazy(() => PracticeExamPartialWithRelationsSchema).array(),
  toDo: z.lazy(() => ToDoPartialWithRelationsSchema).array(),
  Kanban: z.lazy(() => KanbanPartialWithRelationsSchema).nullable(),
  todoList: z.lazy(() => ToDoListPartialWithRelationsSchema).array(),
  bibEntries: z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  equations: z.lazy(() => EquationPartialWithRelationsSchema).array(),
})).partial()

export type TopicWithPartialRelations = z.infer<typeof TopicSchema> & TopicPartialRelations

export const TopicWithPartialRelationsSchema: z.ZodType<TopicWithPartialRelations> = TopicSchema.merge(z.object({
  MdxNotes: z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  ipynbNotes: z.lazy(() => IpynbPartialWithRelationsSchema).array(),
  QAPair: z.lazy(() => QAPairPartialWithRelationsSchema).array(),
  practiceExam: z.lazy(() => PracticeExamPartialWithRelationsSchema).array(),
  toDo: z.lazy(() => ToDoPartialWithRelationsSchema).array(),
  Kanban: z.lazy(() => KanbanPartialWithRelationsSchema).nullable(),
  todoList: z.lazy(() => ToDoListPartialWithRelationsSchema).array(),
  bibEntries: z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  equations: z.lazy(() => EquationPartialWithRelationsSchema).array(),
}).partial())

export default TopicSchema;
