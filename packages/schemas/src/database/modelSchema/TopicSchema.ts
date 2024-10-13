import { z } from 'zod';
import type { MdxNoteWithRelations } from '../MdxNoteSchema.js'
import type { MdxNotePartialWithRelations } from '../MdxNoteSchema.js'
import type { IpynbWithRelations } from '../IpynbSchema.js'
import type { IpynbPartialWithRelations } from '../IpynbSchema.js'
import type { QAPairWithRelations } from '../QAPairSchema.js'
import type { QAPairPartialWithRelations } from '../QAPairSchema.js'
import type { PracticeExamWithRelations } from '../PracticeExamSchema.js'
import type { PracticeExamPartialWithRelations } from '../PracticeExamSchema.js'
import type { ToDoWithRelations } from '../ToDoSchema.js'
import type { ToDoPartialWithRelations } from '../ToDoSchema.js'
import type { KanbanWithRelations } from '../KanbanSchema.js'
import type { KanbanPartialWithRelations } from '../KanbanSchema.js'
import type { ToDoListWithRelations } from '../ToDoListSchema.js'
import type { ToDoListPartialWithRelations } from '../ToDoListSchema.js'
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
import { ToDoWithRelationsSchema } from '../ToDoSchema.js'
import { ToDoPartialWithRelationsSchema } from '../ToDoSchema.js'
import { KanbanWithRelationsSchema } from '../KanbanSchema.js'
import { KanbanPartialWithRelationsSchema } from '../KanbanSchema.js'
import { ToDoListWithRelationsSchema } from '../ToDoListSchema.js'
import { ToDoListPartialWithRelationsSchema } from '../ToDoListSchema.js'
import { BibEntryWithRelationsSchema } from '../BibEntrySchema.js'
import { BibEntryPartialWithRelationsSchema } from '../BibEntrySchema.js'
import { EquationWithRelationsSchema } from '../EquationSchema.js'
import { EquationPartialWithRelationsSchema } from '../EquationSchema.js'
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