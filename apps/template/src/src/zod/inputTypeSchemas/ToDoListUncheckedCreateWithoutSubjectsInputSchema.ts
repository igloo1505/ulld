import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoUncheckedCreateNestedManyWithoutToDoListInputSchema } from './ToDoUncheckedCreateNestedManyWithoutToDoListInputSchema';
import { TagUncheckedCreateNestedManyWithoutTodoListInputSchema } from './TagUncheckedCreateNestedManyWithoutTodoListInputSchema';
import { TopicUncheckedCreateNestedManyWithoutTodoListInputSchema } from './TopicUncheckedCreateNestedManyWithoutTodoListInputSchema';

export const ToDoListUncheckedCreateWithoutSubjectsInputSchema: z.ZodType<Prisma.ToDoListUncheckedCreateWithoutSubjectsInput> = z.object({
  id: z.number().int().optional(),
  label: z.string(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  tasks: z.lazy(() => ToDoUncheckedCreateNestedManyWithoutToDoListInputSchema).optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutTodoListInputSchema).optional(),
  topics: z.lazy(() => TopicUncheckedCreateNestedManyWithoutTodoListInputSchema).optional()
}).strict();

export default ToDoListUncheckedCreateWithoutSubjectsInputSchema;
