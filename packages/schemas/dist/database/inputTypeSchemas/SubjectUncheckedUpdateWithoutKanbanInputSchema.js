import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema.js';
import { MdxNoteUncheckedUpdateManyWithoutSubjectsNestedInputSchema } from './MdxNoteUncheckedUpdateManyWithoutSubjectsNestedInputSchema.js';
import { IpynbUncheckedUpdateManyWithoutSubjectsNestedInputSchema } from './IpynbUncheckedUpdateManyWithoutSubjectsNestedInputSchema.js';
import { QAPairUncheckedUpdateManyWithoutSubjectsNestedInputSchema } from './QAPairUncheckedUpdateManyWithoutSubjectsNestedInputSchema.js';
import { PracticeExamUncheckedUpdateManyWithoutSubjectsNestedInputSchema } from './PracticeExamUncheckedUpdateManyWithoutSubjectsNestedInputSchema.js';
import { ToDoListUncheckedUpdateManyWithoutSubjectsNestedInputSchema } from './ToDoListUncheckedUpdateManyWithoutSubjectsNestedInputSchema.js';
import { ToDoUncheckedUpdateManyWithoutSubjectsNestedInputSchema } from './ToDoUncheckedUpdateManyWithoutSubjectsNestedInputSchema.js';
import { BibEntryUncheckedUpdateManyWithoutSubjectsNestedInputSchema } from './BibEntryUncheckedUpdateManyWithoutSubjectsNestedInputSchema.js';
import { EquationUncheckedUpdateManyWithoutSubjectsNestedInputSchema } from './EquationUncheckedUpdateManyWithoutSubjectsNestedInputSchema.js';
export const SubjectUncheckedUpdateWithoutKanbanInputSchema = z.object({
    value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    lastAccess: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    MdxNotes: z.lazy(() => MdxNoteUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
    IpynbNotes: z.lazy(() => IpynbUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
    QaPair: z.lazy(() => QAPairUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
    practiceExam: z.lazy(() => PracticeExamUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
    todoList: z.lazy(() => ToDoListUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
    toDo: z.lazy(() => ToDoUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
    bibEntries: z.lazy(() => BibEntryUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
    equations: z.lazy(() => EquationUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional()
}).strict();
export default SubjectUncheckedUpdateWithoutKanbanInputSchema;
