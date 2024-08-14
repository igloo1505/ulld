import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoWhereInputSchema } from './ToDoWhereInputSchema';

export const ToDoNullableRelationFilterSchema: z.ZodType<Prisma.ToDoNullableRelationFilter> = z.object({
  is: z.lazy(() => ToDoWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ToDoWhereInputSchema).optional().nullable()
}).strict();

export default ToDoNullableRelationFilterSchema;
