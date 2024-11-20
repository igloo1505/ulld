import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoCreateNestedManyWithoutToDoListInputSchema } from './ToDoCreateNestedManyWithoutToDoListInputSchema';
import { TagCreateNestedManyWithoutTodoListInputSchema } from './TagCreateNestedManyWithoutTodoListInputSchema';
import { SubjectCreateNestedManyWithoutTodoListInputSchema } from './SubjectCreateNestedManyWithoutTodoListInputSchema';

export const ToDoListCreateWithoutTopicsInputSchema: z.ZodType<Prisma.ToDoListCreateWithoutTopicsInput> = z.object({
  label: z.string(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  tasks: z.lazy(() => ToDoCreateNestedManyWithoutToDoListInputSchema).optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutTodoListInputSchema).optional(),
  subjects: z.lazy(() => SubjectCreateNestedManyWithoutTodoListInputSchema).optional()
}).strict();

export default ToDoListCreateWithoutTopicsInputSchema;
