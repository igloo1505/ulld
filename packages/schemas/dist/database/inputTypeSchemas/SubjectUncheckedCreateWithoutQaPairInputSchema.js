import { z } from 'zod';
import { MdxNoteUncheckedCreateNestedManyWithoutSubjectsInputSchema } from './MdxNoteUncheckedCreateNestedManyWithoutSubjectsInputSchema.js';
import { IpynbUncheckedCreateNestedManyWithoutSubjectsInputSchema } from './IpynbUncheckedCreateNestedManyWithoutSubjectsInputSchema.js';
import { PracticeExamUncheckedCreateNestedManyWithoutSubjectsInputSchema } from './PracticeExamUncheckedCreateNestedManyWithoutSubjectsInputSchema.js';
import { ToDoListUncheckedCreateNestedManyWithoutSubjectsInputSchema } from './ToDoListUncheckedCreateNestedManyWithoutSubjectsInputSchema.js';
import { ToDoUncheckedCreateNestedManyWithoutSubjectsInputSchema } from './ToDoUncheckedCreateNestedManyWithoutSubjectsInputSchema.js';
import { BibEntryUncheckedCreateNestedManyWithoutSubjectsInputSchema } from './BibEntryUncheckedCreateNestedManyWithoutSubjectsInputSchema.js';
import { EquationUncheckedCreateNestedManyWithoutSubjectsInputSchema } from './EquationUncheckedCreateNestedManyWithoutSubjectsInputSchema.js';
export const SubjectUncheckedCreateWithoutQaPairInputSchema = z.object({
    value: z.string(),
    kanbanId: z.number().int().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    lastAccess: z.coerce.date().optional(),
    MdxNotes: z.lazy(() => MdxNoteUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
    IpynbNotes: z.lazy(() => IpynbUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
    practiceExam: z.lazy(() => PracticeExamUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
    todoList: z.lazy(() => ToDoListUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
    toDo: z.lazy(() => ToDoUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
    bibEntries: z.lazy(() => BibEntryUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
    equations: z.lazy(() => EquationUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional()
}).strict();
export default SubjectUncheckedCreateWithoutQaPairInputSchema;
