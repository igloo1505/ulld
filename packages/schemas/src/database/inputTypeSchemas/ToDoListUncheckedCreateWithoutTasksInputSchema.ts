import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagUncheckedCreateNestedManyWithoutTodoListInputSchema } from './TagUncheckedCreateNestedManyWithoutTodoListInputSchema';
import { TopicUncheckedCreateNestedManyWithoutTodoListInputSchema } from './TopicUncheckedCreateNestedManyWithoutTodoListInputSchema';
import { SubjectUncheckedCreateNestedManyWithoutTodoListInputSchema } from './SubjectUncheckedCreateNestedManyWithoutTodoListInputSchema';

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
