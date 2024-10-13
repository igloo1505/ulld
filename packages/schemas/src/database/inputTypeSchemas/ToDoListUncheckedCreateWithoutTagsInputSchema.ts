import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoUncheckedCreateNestedManyWithoutToDoListInputSchema } from '../ToDoUncheckedCreateNestedManyWithoutToDoListInputSchema.js';
import { TopicUncheckedCreateNestedManyWithoutTodoListInputSchema } from '../TopicUncheckedCreateNestedManyWithoutTodoListInputSchema.js';
import { SubjectUncheckedCreateNestedManyWithoutTodoListInputSchema } from '../SubjectUncheckedCreateNestedManyWithoutTodoListInputSchema.js';
export const ToDoListUncheckedCreateWithoutTagsInputSchema: z.ZodType<Prisma.ToDoListUncheckedCreateWithoutTagsInput> = z.object({
  id: z.number().int().optional(),
  label: z.string(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  tasks: z.lazy(() => ToDoUncheckedCreateNestedManyWithoutToDoListInputSchema).optional(),
  topics: z.lazy(() => TopicUncheckedCreateNestedManyWithoutTodoListInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedCreateNestedManyWithoutTodoListInputSchema).optional()
}).strict();
export default ToDoListUncheckedCreateWithoutTagsInputSchema;