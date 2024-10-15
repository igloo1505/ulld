import { z } from 'zod';
import { MdxNoteUncheckedCreateNestedManyWithoutTagsInputSchema } from './MdxNoteUncheckedCreateNestedManyWithoutTagsInputSchema.js';
import { IpynbUncheckedCreateNestedManyWithoutTagsInputSchema } from './IpynbUncheckedCreateNestedManyWithoutTagsInputSchema.js';
import { QAPairUncheckedCreateNestedManyWithoutTagsInputSchema } from './QAPairUncheckedCreateNestedManyWithoutTagsInputSchema.js';
import { PracticeExamUncheckedCreateNestedManyWithoutTagsInputSchema } from './PracticeExamUncheckedCreateNestedManyWithoutTagsInputSchema.js';
import { EquationUncheckedCreateNestedManyWithoutTagsInputSchema } from './EquationUncheckedCreateNestedManyWithoutTagsInputSchema.js';
import { ToDoUncheckedCreateNestedManyWithoutTagsInputSchema } from './ToDoUncheckedCreateNestedManyWithoutTagsInputSchema.js';
import { ToDoListUncheckedCreateNestedManyWithoutTagsInputSchema } from './ToDoListUncheckedCreateNestedManyWithoutTagsInputSchema.js';
export const TagUncheckedCreateWithoutBibEntriesInputSchema = z.object({
    value: z.string(),
    kanbanId: z.number().int().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    lastAccess: z.coerce.date().optional(),
    MdxNotes: z.lazy(() => MdxNoteUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
    ipynbNotes: z.lazy(() => IpynbUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
    QAPair: z.lazy(() => QAPairUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
    practiceExam: z.lazy(() => PracticeExamUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
    equations: z.lazy(() => EquationUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
    toDo: z.lazy(() => ToDoUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
    todoList: z.lazy(() => ToDoListUncheckedCreateNestedManyWithoutTagsInputSchema).optional()
}).strict();
export default TagUncheckedCreateWithoutBibEntriesInputSchema;
