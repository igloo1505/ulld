import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoWhereInputSchema } from './ToDoWhereInputSchema';

export const ToDoListRelationFilterSchema: z.ZodType<Prisma.ToDoListRelationFilter> = z.object({
  every: z.lazy(() => ToDoWhereInputSchema).optional(),
  some: z.lazy(() => ToDoWhereInputSchema).optional(),
  none: z.lazy(() => ToDoWhereInputSchema).optional()
}).strict();

export default ToDoListRelationFilterSchema;
