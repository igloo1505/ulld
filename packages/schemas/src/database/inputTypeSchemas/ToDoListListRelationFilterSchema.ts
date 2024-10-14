import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoListWhereInputSchema } from './ToDoListWhereInputSchema';

export const ToDoListListRelationFilterSchema: z.ZodType<Prisma.ToDoListListRelationFilter> = z.object({
  every: z.lazy(() => ToDoListWhereInputSchema).optional(),
  some: z.lazy(() => ToDoListWhereInputSchema).optional(),
  none: z.lazy(() => ToDoListWhereInputSchema).optional()
}).strict();

export default ToDoListListRelationFilterSchema;
