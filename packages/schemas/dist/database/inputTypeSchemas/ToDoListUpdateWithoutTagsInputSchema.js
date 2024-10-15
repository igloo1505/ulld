import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema.js';
import { ToDoUpdateManyWithoutToDoListNestedInputSchema } from './ToDoUpdateManyWithoutToDoListNestedInputSchema.js';
import { TopicUpdateManyWithoutTodoListNestedInputSchema } from './TopicUpdateManyWithoutTodoListNestedInputSchema.js';
import { SubjectUpdateManyWithoutTodoListNestedInputSchema } from './SubjectUpdateManyWithoutTodoListNestedInputSchema.js';
export const ToDoListUpdateWithoutTagsInputSchema = z.object({
    label: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    lastUpdate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    lastAccess: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    tasks: z.lazy(() => ToDoUpdateManyWithoutToDoListNestedInputSchema).optional(),
    topics: z.lazy(() => TopicUpdateManyWithoutTodoListNestedInputSchema).optional(),
    subjects: z.lazy(() => SubjectUpdateManyWithoutTodoListNestedInputSchema).optional()
}).strict();
export default ToDoListUpdateWithoutTagsInputSchema;
