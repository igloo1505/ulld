import { z } from 'zod';
import { ToDoUncheckedCreateNestedManyWithoutToDoListInputSchema } from './ToDoUncheckedCreateNestedManyWithoutToDoListInputSchema.js';
import { TagUncheckedCreateNestedManyWithoutTodoListInputSchema } from './TagUncheckedCreateNestedManyWithoutTodoListInputSchema.js';
import { SubjectUncheckedCreateNestedManyWithoutTodoListInputSchema } from './SubjectUncheckedCreateNestedManyWithoutTodoListInputSchema.js';
export const ToDoListUncheckedCreateWithoutTopicsInputSchema = z.object({
    id: z.number().int().optional(),
    label: z.string(),
    createdAt: z.coerce.date().optional(),
    lastUpdate: z.coerce.date().optional(),
    lastAccess: z.coerce.date().optional(),
    tasks: z.lazy(() => ToDoUncheckedCreateNestedManyWithoutToDoListInputSchema).optional(),
    tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutTodoListInputSchema).optional(),
    subjects: z.lazy(() => SubjectUncheckedCreateNestedManyWithoutTodoListInputSchema).optional()
}).strict();
export default ToDoListUncheckedCreateWithoutTopicsInputSchema;
