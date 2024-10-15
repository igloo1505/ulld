import { z } from 'zod';
import { MdxNoteCreateNestedManyWithoutTopicsInputSchema } from './MdxNoteCreateNestedManyWithoutTopicsInputSchema.js';
import { IpynbCreateNestedManyWithoutTopicsInputSchema } from './IpynbCreateNestedManyWithoutTopicsInputSchema.js';
import { QAPairCreateNestedManyWithoutTopicsInputSchema } from './QAPairCreateNestedManyWithoutTopicsInputSchema.js';
import { PracticeExamCreateNestedManyWithoutTopicsInputSchema } from './PracticeExamCreateNestedManyWithoutTopicsInputSchema.js';
import { ToDoCreateNestedManyWithoutTopicsInputSchema } from './ToDoCreateNestedManyWithoutTopicsInputSchema.js';
import { ToDoListCreateNestedManyWithoutTopicsInputSchema } from './ToDoListCreateNestedManyWithoutTopicsInputSchema.js';
import { BibEntryCreateNestedManyWithoutTopicsInputSchema } from './BibEntryCreateNestedManyWithoutTopicsInputSchema.js';
import { EquationCreateNestedManyWithoutTopicsInputSchema } from './EquationCreateNestedManyWithoutTopicsInputSchema.js';
export const TopicCreateWithoutKanbanInputSchema = z.object({
    value: z.string(),
    createdAt: z.coerce.date().optional(),
    lastAccess: z.coerce.date().optional(),
    MdxNotes: z.lazy(() => MdxNoteCreateNestedManyWithoutTopicsInputSchema).optional(),
    ipynbNotes: z.lazy(() => IpynbCreateNestedManyWithoutTopicsInputSchema).optional(),
    QAPair: z.lazy(() => QAPairCreateNestedManyWithoutTopicsInputSchema).optional(),
    practiceExam: z.lazy(() => PracticeExamCreateNestedManyWithoutTopicsInputSchema).optional(),
    toDo: z.lazy(() => ToDoCreateNestedManyWithoutTopicsInputSchema).optional(),
    todoList: z.lazy(() => ToDoListCreateNestedManyWithoutTopicsInputSchema).optional(),
    bibEntries: z.lazy(() => BibEntryCreateNestedManyWithoutTopicsInputSchema).optional(),
    equations: z.lazy(() => EquationCreateNestedManyWithoutTopicsInputSchema).optional()
}).strict();
export default TopicCreateWithoutKanbanInputSchema;
