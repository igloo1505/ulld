import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoListWhereInputSchema } from './ToDoListWhereInputSchema';

export const ToDoListNullableRelationFilterSchema: z.ZodType<Prisma.ToDoListNullableRelationFilter> = z.object({
  is: z.lazy(() => ToDoListWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ToDoListWhereInputSchema).optional().nullable()
}).strict();

export default ToDoListNullableRelationFilterSchema;
