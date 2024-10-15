import { z } from 'zod';
import { MdxNoteCreateNestedManyWithoutSubjectsInputSchema } from './MdxNoteCreateNestedManyWithoutSubjectsInputSchema.js';
import { QAPairCreateNestedManyWithoutSubjectsInputSchema } from './QAPairCreateNestedManyWithoutSubjectsInputSchema.js';
import { PracticeExamCreateNestedManyWithoutSubjectsInputSchema } from './PracticeExamCreateNestedManyWithoutSubjectsInputSchema.js';
import { KanbanCreateNestedOneWithoutSubjectsInputSchema } from './KanbanCreateNestedOneWithoutSubjectsInputSchema.js';
import { ToDoListCreateNestedManyWithoutSubjectsInputSchema } from './ToDoListCreateNestedManyWithoutSubjectsInputSchema.js';
import { ToDoCreateNestedManyWithoutSubjectsInputSchema } from './ToDoCreateNestedManyWithoutSubjectsInputSchema.js';
import { BibEntryCreateNestedManyWithoutSubjectsInputSchema } from './BibEntryCreateNestedManyWithoutSubjectsInputSchema.js';
import { EquationCreateNestedManyWithoutSubjectsInputSchema } from './EquationCreateNestedManyWithoutSubjectsInputSchema.js';
export const SubjectCreateWithoutIpynbNotesInputSchema = z.object({
    value: z.string(),
    createdAt: z.coerce.date().optional(),
    lastAccess: z.coerce.date().optional(),
    MdxNotes: z.lazy(() => MdxNoteCreateNestedManyWithoutSubjectsInputSchema).optional(),
    QaPair: z.lazy(() => QAPairCreateNestedManyWithoutSubjectsInputSchema).optional(),
    practiceExam: z.lazy(() => PracticeExamCreateNestedManyWithoutSubjectsInputSchema).optional(),
    Kanban: z.lazy(() => KanbanCreateNestedOneWithoutSubjectsInputSchema).optional(),
    todoList: z.lazy(() => ToDoListCreateNestedManyWithoutSubjectsInputSchema).optional(),
    toDo: z.lazy(() => ToDoCreateNestedManyWithoutSubjectsInputSchema).optional(),
    bibEntries: z.lazy(() => BibEntryCreateNestedManyWithoutSubjectsInputSchema).optional(),
    equations: z.lazy(() => EquationCreateNestedManyWithoutSubjectsInputSchema).optional()
}).strict();
export default SubjectCreateWithoutIpynbNotesInputSchema;
