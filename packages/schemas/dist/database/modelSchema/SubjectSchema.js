import { z } from 'zod';
import { MdxNoteWithRelationsSchema } from './MdxNoteSchema.js';
import { MdxNotePartialWithRelationsSchema } from './MdxNoteSchema.js';
import { IpynbWithRelationsSchema } from './IpynbSchema.js';
import { IpynbPartialWithRelationsSchema } from './IpynbSchema.js';
import { QAPairWithRelationsSchema } from './QAPairSchema.js';
import { QAPairPartialWithRelationsSchema } from './QAPairSchema.js';
import { PracticeExamWithRelationsSchema } from './PracticeExamSchema.js';
import { PracticeExamPartialWithRelationsSchema } from './PracticeExamSchema.js';
import { KanbanWithRelationsSchema } from './KanbanSchema.js';
import { KanbanPartialWithRelationsSchema } from './KanbanSchema.js';
import { ToDoListWithRelationsSchema } from './ToDoListSchema.js';
import { ToDoListPartialWithRelationsSchema } from './ToDoListSchema.js';
import { ToDoWithRelationsSchema } from './ToDoSchema.js';
import { ToDoPartialWithRelationsSchema } from './ToDoSchema.js';
import { BibEntryWithRelationsSchema } from './BibEntrySchema.js';
import { BibEntryPartialWithRelationsSchema } from './BibEntrySchema.js';
import { EquationWithRelationsSchema } from './EquationSchema.js';
import { EquationPartialWithRelationsSchema } from './EquationSchema.js';
/////////////////////////////////////////
// SUBJECT SCHEMA
/////////////////////////////////////////
export const SubjectSchema = z.object({
    value: z.string(),
    kanbanId: z.number().int().nullable(),
    createdAt: z.coerce.date(),
    lastAccess: z.coerce.date(),
});
/////////////////////////////////////////
// SUBJECT PARTIAL SCHEMA
/////////////////////////////////////////
export const SubjectPartialSchema = SubjectSchema.partial();
export const SubjectWithRelationsSchema = SubjectSchema.merge(z.object({
    MdxNotes: z.lazy(() => MdxNoteWithRelationsSchema).array(),
    IpynbNotes: z.lazy(() => IpynbWithRelationsSchema).array(),
    QaPair: z.lazy(() => QAPairWithRelationsSchema).array(),
    practiceExam: z.lazy(() => PracticeExamWithRelationsSchema).array(),
    Kanban: z.lazy(() => KanbanWithRelationsSchema).nullable(),
    todoList: z.lazy(() => ToDoListWithRelationsSchema).array(),
    toDo: z.lazy(() => ToDoWithRelationsSchema).array(),
    bibEntries: z.lazy(() => BibEntryWithRelationsSchema).array(),
    equations: z.lazy(() => EquationWithRelationsSchema).array(),
}));
export const SubjectPartialWithRelationsSchema = SubjectPartialSchema.merge(z.object({
    MdxNotes: z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
    IpynbNotes: z.lazy(() => IpynbPartialWithRelationsSchema).array(),
    QaPair: z.lazy(() => QAPairPartialWithRelationsSchema).array(),
    practiceExam: z.lazy(() => PracticeExamPartialWithRelationsSchema).array(),
    Kanban: z.lazy(() => KanbanPartialWithRelationsSchema).nullable(),
    todoList: z.lazy(() => ToDoListPartialWithRelationsSchema).array(),
    toDo: z.lazy(() => ToDoPartialWithRelationsSchema).array(),
    bibEntries: z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
    equations: z.lazy(() => EquationPartialWithRelationsSchema).array(),
})).partial();
export const SubjectWithPartialRelationsSchema = SubjectSchema.merge(z.object({
    MdxNotes: z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
    IpynbNotes: z.lazy(() => IpynbPartialWithRelationsSchema).array(),
    QaPair: z.lazy(() => QAPairPartialWithRelationsSchema).array(),
    practiceExam: z.lazy(() => PracticeExamPartialWithRelationsSchema).array(),
    Kanban: z.lazy(() => KanbanPartialWithRelationsSchema).nullable(),
    todoList: z.lazy(() => ToDoListPartialWithRelationsSchema).array(),
    toDo: z.lazy(() => ToDoPartialWithRelationsSchema).array(),
    bibEntries: z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
    equations: z.lazy(() => EquationPartialWithRelationsSchema).array(),
}).partial());
export default SubjectSchema;
