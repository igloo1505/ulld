import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema.js';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema.js';
import { ToDoUncheckedUpdateManyWithoutToDoListNestedInputSchema } from './ToDoUncheckedUpdateManyWithoutToDoListNestedInputSchema.js';
import { TagUncheckedUpdateManyWithoutTodoListNestedInputSchema } from './TagUncheckedUpdateManyWithoutTodoListNestedInputSchema.js';
import { TopicUncheckedUpdateManyWithoutTodoListNestedInputSchema } from './TopicUncheckedUpdateManyWithoutTodoListNestedInputSchema.js';
export const ToDoListUncheckedUpdateWithoutSubjectsInputSchema: z.ZodType<Prisma.ToDoListUncheckedUpdateWithoutSubjectsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastUpdate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastAccess: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tasks: z.lazy(() => ToDoUncheckedUpdateManyWithoutToDoListNestedInputSchema).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutTodoListNestedInputSchema).optional(),
  topics: z.lazy(() => TopicUncheckedUpdateManyWithoutTodoListNestedInputSchema).optional()
}).strict();
export default ToDoListUncheckedUpdateWithoutSubjectsInputSchema;