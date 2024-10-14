import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ToDoListCreateManyInputSchema: z.ZodType<Prisma.ToDoListCreateManyInput> = z.object({
  id: z.number().int().optional(),
  label: z.string(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional()
}).strict();

export default ToDoListCreateManyInputSchema;
