import { z } from 'zod';
import { ToDoCreateNestedManyWithoutToDoListInputSchema } from './ToDoCreateNestedManyWithoutToDoListInputSchema.js';
import { TopicCreateNestedManyWithoutTodoListInputSchema } from './TopicCreateNestedManyWithoutTodoListInputSchema.js';
import { SubjectCreateNestedManyWithoutTodoListInputSchema } from './SubjectCreateNestedManyWithoutTodoListInputSchema.js';
export const ToDoListCreateWithoutTagsInputSchema = z.object({
    label: z.string(),
    createdAt: z.coerce.date().optional(),
    lastUpdate: z.coerce.date().optional(),
    lastAccess: z.coerce.date().optional(),
    tasks: z.lazy(() => ToDoCreateNestedManyWithoutToDoListInputSchema).optional(),
    topics: z.lazy(() => TopicCreateNestedManyWithoutTodoListInputSchema).optional(),
    subjects: z.lazy(() => SubjectCreateNestedManyWithoutTodoListInputSchema).optional()
}).strict();
export default ToDoListCreateWithoutTagsInputSchema;
