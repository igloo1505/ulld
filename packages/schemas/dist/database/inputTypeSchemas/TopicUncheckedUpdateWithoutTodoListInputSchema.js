import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema.js';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema.js';
import { MdxNoteUncheckedUpdateManyWithoutTopicsNestedInputSchema } from './MdxNoteUncheckedUpdateManyWithoutTopicsNestedInputSchema.js';
import { IpynbUncheckedUpdateManyWithoutTopicsNestedInputSchema } from './IpynbUncheckedUpdateManyWithoutTopicsNestedInputSchema.js';
import { QAPairUncheckedUpdateManyWithoutTopicsNestedInputSchema } from './QAPairUncheckedUpdateManyWithoutTopicsNestedInputSchema.js';
import { PracticeExamUncheckedUpdateManyWithoutTopicsNestedInputSchema } from './PracticeExamUncheckedUpdateManyWithoutTopicsNestedInputSchema.js';
import { ToDoUncheckedUpdateManyWithoutTopicsNestedInputSchema } from './ToDoUncheckedUpdateManyWithoutTopicsNestedInputSchema.js';
import { BibEntryUncheckedUpdateManyWithoutTopicsNestedInputSchema } from './BibEntryUncheckedUpdateManyWithoutTopicsNestedInputSchema.js';
import { EquationUncheckedUpdateManyWithoutTopicsNestedInputSchema } from './EquationUncheckedUpdateManyWithoutTopicsNestedInputSchema.js';
export const TopicUncheckedUpdateWithoutTodoListInputSchema = z.object({
    value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    kanbanId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    lastAccess: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    MdxNotes: z.lazy(() => MdxNoteUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional(),
    ipynbNotes: z.lazy(() => IpynbUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional(),
    QAPair: z.lazy(() => QAPairUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional(),
    practiceExam: z.lazy(() => PracticeExamUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional(),
    toDo: z.lazy(() => ToDoUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional(),
    bibEntries: z.lazy(() => BibEntryUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional(),
    equations: z.lazy(() => EquationUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional()
}).strict();
export default TopicUncheckedUpdateWithoutTodoListInputSchema;
