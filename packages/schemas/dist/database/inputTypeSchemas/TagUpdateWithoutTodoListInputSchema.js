import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema.js';
import { MdxNoteUpdateManyWithoutTagsNestedInputSchema } from './MdxNoteUpdateManyWithoutTagsNestedInputSchema.js';
import { BibEntryUpdateManyWithoutTagsNestedInputSchema } from './BibEntryUpdateManyWithoutTagsNestedInputSchema.js';
import { IpynbUpdateManyWithoutTagsNestedInputSchema } from './IpynbUpdateManyWithoutTagsNestedInputSchema.js';
import { QAPairUpdateManyWithoutTagsNestedInputSchema } from './QAPairUpdateManyWithoutTagsNestedInputSchema.js';
import { PracticeExamUpdateManyWithoutTagsNestedInputSchema } from './PracticeExamUpdateManyWithoutTagsNestedInputSchema.js';
import { EquationUpdateManyWithoutTagsNestedInputSchema } from './EquationUpdateManyWithoutTagsNestedInputSchema.js';
import { ToDoUpdateManyWithoutTagsNestedInputSchema } from './ToDoUpdateManyWithoutTagsNestedInputSchema.js';
import { KanbanUpdateOneWithoutTagsNestedInputSchema } from './KanbanUpdateOneWithoutTagsNestedInputSchema.js';
export const TagUpdateWithoutTodoListInputSchema = z.object({
    value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    lastAccess: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    MdxNotes: z.lazy(() => MdxNoteUpdateManyWithoutTagsNestedInputSchema).optional(),
    bibEntries: z.lazy(() => BibEntryUpdateManyWithoutTagsNestedInputSchema).optional(),
    ipynbNotes: z.lazy(() => IpynbUpdateManyWithoutTagsNestedInputSchema).optional(),
    QAPair: z.lazy(() => QAPairUpdateManyWithoutTagsNestedInputSchema).optional(),
    practiceExam: z.lazy(() => PracticeExamUpdateManyWithoutTagsNestedInputSchema).optional(),
    equations: z.lazy(() => EquationUpdateManyWithoutTagsNestedInputSchema).optional(),
    toDo: z.lazy(() => ToDoUpdateManyWithoutTagsNestedInputSchema).optional(),
    Kanban: z.lazy(() => KanbanUpdateOneWithoutTagsNestedInputSchema).optional()
}).strict();
export default TagUpdateWithoutTodoListInputSchema;
