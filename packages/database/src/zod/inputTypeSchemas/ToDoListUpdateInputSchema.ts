import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ToDoUpdateManyWithoutToDoListNestedInputSchema } from './ToDoUpdateManyWithoutToDoListNestedInputSchema';
import { TagUpdateManyWithoutTodoListNestedInputSchema } from './TagUpdateManyWithoutTodoListNestedInputSchema';
import { TopicUpdateManyWithoutTodoListNestedInputSchema } from './TopicUpdateManyWithoutTodoListNestedInputSchema';
import { SubjectUpdateManyWithoutTodoListNestedInputSchema } from './SubjectUpdateManyWithoutTodoListNestedInputSchema';

export const ToDoListUpdateInputSchema: z.ZodType<Prisma.ToDoListUpdateInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastUpdate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastAccess: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tasks: z.lazy(() => ToDoUpdateManyWithoutToDoListNestedInputSchema).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutTodoListNestedInputSchema).optional(),
  topics: z.lazy(() => TopicUpdateManyWithoutTodoListNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUpdateManyWithoutTodoListNestedInputSchema).optional()
}).strict();

export default ToDoListUpdateInputSchema;
