import { z } from 'zod';
import { MdxNoteWithRelationsSchema } from './MdxNoteSchema.js';
import { MdxNotePartialWithRelationsSchema } from './MdxNoteSchema.js';
import { BibEntryWithRelationsSchema } from './BibEntrySchema.js';
import { BibEntryPartialWithRelationsSchema } from './BibEntrySchema.js';
import { IpynbWithRelationsSchema } from './IpynbSchema.js';
import { IpynbPartialWithRelationsSchema } from './IpynbSchema.js';
import { QAPairWithRelationsSchema } from './QAPairSchema.js';
import { QAPairPartialWithRelationsSchema } from './QAPairSchema.js';
import { PracticeExamWithRelationsSchema } from './PracticeExamSchema.js';
import { PracticeExamPartialWithRelationsSchema } from './PracticeExamSchema.js';
import { EquationWithRelationsSchema } from './EquationSchema.js';
import { EquationPartialWithRelationsSchema } from './EquationSchema.js';
import { ToDoWithRelationsSchema } from './ToDoSchema.js';
import { ToDoPartialWithRelationsSchema } from './ToDoSchema.js';
import { KanbanWithRelationsSchema } from './KanbanSchema.js';
import { KanbanPartialWithRelationsSchema } from './KanbanSchema.js';
import { ToDoListWithRelationsSchema } from './ToDoListSchema.js';
import { ToDoListPartialWithRelationsSchema } from './ToDoListSchema.js';
/////////////////////////////////////////
// TAG SCHEMA
/////////////////////////////////////////
export const TagSchema = z.object({
    value: z.string(),
    kanbanId: z.number().int().nullable(),
    createdAt: z.coerce.date(),
    lastAccess: z.coerce.date(),
});
/////////////////////////////////////////
// TAG PARTIAL SCHEMA
/////////////////////////////////////////
export const TagPartialSchema = TagSchema.partial();
export const TagWithRelationsSchema = TagSchema.merge(z.object({
    MdxNotes: z.lazy(() => MdxNoteWithRelationsSchema).array(),
    bibEntries: z.lazy(() => BibEntryWithRelationsSchema).array(),
    ipynbNotes: z.lazy(() => IpynbWithRelationsSchema).array(),
    QAPair: z.lazy(() => QAPairWithRelationsSchema).array(),
    practiceExam: z.lazy(() => PracticeExamWithRelationsSchema).array(),
    equations: z.lazy(() => EquationWithRelationsSchema).array(),
    toDo: z.lazy(() => ToDoWithRelationsSchema).array(),
    Kanban: z.lazy(() => KanbanWithRelationsSchema).nullable(),
    todoList: z.lazy(() => ToDoListWithRelationsSchema).array(),
}));
export const TagPartialWithRelationsSchema = TagPartialSchema.merge(z.object({
    MdxNotes: z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
    bibEntries: z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
    ipynbNotes: z.lazy(() => IpynbPartialWithRelationsSchema).array(),
    QAPair: z.lazy(() => QAPairPartialWithRelationsSchema).array(),
    practiceExam: z.lazy(() => PracticeExamPartialWithRelationsSchema).array(),
    equations: z.lazy(() => EquationPartialWithRelationsSchema).array(),
    toDo: z.lazy(() => ToDoPartialWithRelationsSchema).array(),
    Kanban: z.lazy(() => KanbanPartialWithRelationsSchema).nullable(),
    todoList: z.lazy(() => ToDoListPartialWithRelationsSchema).array(),
})).partial();
export const TagWithPartialRelationsSchema = TagSchema.merge(z.object({
    MdxNotes: z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
    bibEntries: z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
    ipynbNotes: z.lazy(() => IpynbPartialWithRelationsSchema).array(),
    QAPair: z.lazy(() => QAPairPartialWithRelationsSchema).array(),
    practiceExam: z.lazy(() => PracticeExamPartialWithRelationsSchema).array(),
    equations: z.lazy(() => EquationPartialWithRelationsSchema).array(),
    toDo: z.lazy(() => ToDoPartialWithRelationsSchema).array(),
    Kanban: z.lazy(() => KanbanPartialWithRelationsSchema).nullable(),
    todoList: z.lazy(() => ToDoListPartialWithRelationsSchema).array(),
}).partial());
export default TagSchema;
