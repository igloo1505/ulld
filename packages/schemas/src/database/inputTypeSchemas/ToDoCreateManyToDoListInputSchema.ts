import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TaskCategorySchema } from './TaskCategorySchema';

export const ToDoCreateManyToDoListInputSchema: z.ZodType<Prisma.ToDoCreateManyToDoListInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  task: z.string(),
  dueAt: z.coerce.date().optional().nullable(),
  details: z.string().optional().nullable(),
  parentId: z.number().int().optional().nullable(),
  category: z.lazy(() => TaskCategorySchema).optional().nullable(),
  bookmarked: z.boolean().optional(),
  status: z.string().optional(),
  priority: z.number().int().optional(),
  completedOn: z.coerce.date().optional().nullable()
}).strict();

export default ToDoCreateManyToDoListInputSchema;
