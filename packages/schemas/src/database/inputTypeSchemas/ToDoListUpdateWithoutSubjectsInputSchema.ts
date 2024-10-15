import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema.js';
import { ToDoUpdateManyWithoutToDoListNestedInputSchema } from './ToDoUpdateManyWithoutToDoListNestedInputSchema.js';
import { TagUpdateManyWithoutTodoListNestedInputSchema } from './TagUpdateManyWithoutTodoListNestedInputSchema.js';
import { TopicUpdateManyWithoutTodoListNestedInputSchema } from './TopicUpdateManyWithoutTodoListNestedInputSchema.js';
export const ToDoListUpdateWithoutSubjectsInputSchema: z.ZodType<Prisma.ToDoListUpdateWithoutSubjectsInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastUpdate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastAccess: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tasks: z.lazy(() => ToDoUpdateManyWithoutToDoListNestedInputSchema).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutTodoListNestedInputSchema).optional(),
  topics: z.lazy(() => TopicUpdateManyWithoutTodoListNestedInputSchema).optional()
}).strict();
export default ToDoListUpdateWithoutSubjectsInputSchema;