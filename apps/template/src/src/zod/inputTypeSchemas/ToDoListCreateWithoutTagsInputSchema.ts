import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoCreateNestedManyWithoutToDoListInputSchema } from './ToDoCreateNestedManyWithoutToDoListInputSchema';
import { TopicCreateNestedManyWithoutTodoListInputSchema } from './TopicCreateNestedManyWithoutTodoListInputSchema';
import { SubjectCreateNestedManyWithoutTodoListInputSchema } from './SubjectCreateNestedManyWithoutTodoListInputSchema';

export const ToDoListCreateWithoutTagsInputSchema: z.ZodType<Prisma.ToDoListCreateWithoutTagsInput> = z.object({
  label: z.string(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  tasks: z.lazy(() => ToDoCreateNestedManyWithoutToDoListInputSchema).optional(),
  topics: z.lazy(() => TopicCreateNestedManyWithoutTodoListInputSchema).optional(),
  subjects: z.lazy(() => SubjectCreateNestedManyWithoutTodoListInputSchema).optional()
}).strict();

export default ToDoListCreateWithoutTagsInputSchema;
