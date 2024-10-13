import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TagUncheckedCreateNestedManyWithoutTodoListInputSchema } from '../TagUncheckedCreateNestedManyWithoutTodoListInputSchema.js';
import { TopicUncheckedCreateNestedManyWithoutTodoListInputSchema } from '../TopicUncheckedCreateNestedManyWithoutTodoListInputSchema.js';
import { SubjectUncheckedCreateNestedManyWithoutTodoListInputSchema } from '../SubjectUncheckedCreateNestedManyWithoutTodoListInputSchema.js';
export const ToDoListUncheckedCreateWithoutTasksInputSchema: z.ZodType<Prisma.ToDoListUncheckedCreateWithoutTasksInput> = z.object({
  id: z.number().int().optional(),
  label: z.string(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutTodoListInputSchema).optional(),
  topics: z.lazy(() => TopicUncheckedCreateNestedManyWithoutTodoListInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedCreateNestedManyWithoutTodoListInputSchema).optional()
}).strict();
export default ToDoListUncheckedCreateWithoutTasksInputSchema;