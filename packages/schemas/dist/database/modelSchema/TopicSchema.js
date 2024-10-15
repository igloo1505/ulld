import { z } from 'zod';
import { MdxNoteWithRelationsSchema } from './MdxNoteSchema.js';
import { MdxNotePartialWithRelationsSchema } from './MdxNoteSchema.js';
import { IpynbWithRelationsSchema } from './IpynbSchema.js';
import { IpynbPartialWithRelationsSchema } from './IpynbSchema.js';
import { QAPairWithRelationsSchema } from './QAPairSchema.js';
import { QAPairPartialWithRelationsSchema } from './QAPairSchema.js';
import { PracticeExamWithRelationsSchema } from './PracticeExamSchema.js';
import { PracticeExamPartialWithRelationsSchema } from './PracticeExamSchema.js';
import { ToDoWithRelationsSchema } from './ToDoSchema.js';
import { ToDoPartialWithRelationsSchema } from './ToDoSchema.js';
import { KanbanWithRelationsSchema } from './KanbanSchema.js';
import { KanbanPartialWithRelationsSchema } from './KanbanSchema.js';
import { ToDoListWithRelationsSchema } from './ToDoListSchema.js';
import { ToDoListPartialWithRelationsSchema } from './ToDoListSchema.js';
import { BibEntryWithRelationsSchema } from './BibEntrySchema.js';
import { BibEntryPartialWithRelationsSchema } from './BibEntrySchema.js';
import { EquationWithRelationsSchema } from './EquationSchema.js';
import { EquationPartialWithRelationsSchema } from './EquationSchema.js';
/////////////////////////////////////////
// TOPIC SCHEMA
/////////////////////////////////////////
export const TopicSchema = z.object({
    value: z.string(),
    kanbanId: z.number().int().nullable(),
    createdAt: z.coerce.date(),
    lastAccess: z.coerce.date(),
});
/////////////////////////////////////////
// TOPIC PARTIAL SCHEMA
/////////////////////////////////////////
export const TopicPartialSchema = TopicSchema.partial();
export const TopicWithRelationsSchema = TopicSchema.merge(z.object({
    MdxNotes: z.lazy(() => MdxNoteWithRelationsSchema).array(),
    ipynbNotes: z.lazy(() => IpynbWithRelationsSchema).array(),
    QAPair: z.lazy(() => QAPairWithRelationsSchema).array(),
    practiceExam: z.lazy(() => PracticeExamWithRelationsSchema).array(),
    toDo: z.lazy(() => ToDoWithRelationsSchema).array(),
    Kanban: z.lazy(() => KanbanWithRelationsSchema).nullable(),
    todoList: z.lazy(() => ToDoListWithRelationsSchema).array(),
    bibEntries: z.lazy(() => BibEntryWithRelationsSchema).array(),
    equations: z.lazy(() => EquationWithRelationsSchema).array(),
}));
export const TopicPartialWithRelationsSchema = TopicPartialSchema.merge(z.object({
    MdxNotes: z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
    ipynbNotes: z.lazy(() => IpynbPartialWithRelationsSchema).array(),
    QAPair: z.lazy(() => QAPairPartialWithRelationsSchema).array(),
    practiceExam: z.lazy(() => PracticeExamPartialWithRelationsSchema).array(),
    toDo: z.lazy(() => ToDoPartialWithRelationsSchema).array(),
    Kanban: z.lazy(() => KanbanPartialWithRelationsSchema).nullable(),
    todoList: z.lazy(() => ToDoListPartialWithRelationsSchema).array(),
    bibEntries: z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
    equations: z.lazy(() => EquationPartialWithRelationsSchema).array(),
})).partial();
export const TopicWithPartialRelationsSchema = TopicSchema.merge(z.object({
    MdxNotes: z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
    ipynbNotes: z.lazy(() => IpynbPartialWithRelationsSchema).array(),
    QAPair: z.lazy(() => QAPairPartialWithRelationsSchema).array(),
    practiceExam: z.lazy(() => PracticeExamPartialWithRelationsSchema).array(),
    toDo: z.lazy(() => ToDoPartialWithRelationsSchema).array(),
    Kanban: z.lazy(() => KanbanPartialWithRelationsSchema).nullable(),
    todoList: z.lazy(() => ToDoListPartialWithRelationsSchema).array(),
    bibEntries: z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
    equations: z.lazy(() => EquationPartialWithRelationsSchema).array(),
}).partial());
export default TopicSchema;
