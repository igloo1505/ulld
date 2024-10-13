import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoListWhereInputSchema } from '../ToDoListWhereInputSchema.js';
export const ToDoListNullableRelationFilterSchema: z.ZodType<Prisma.ToDoListNullableRelationFilter> = z.object({
  is: z.lazy(() => ToDoListWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ToDoListWhereInputSchema).optional().nullable()
}).strict();
export default ToDoListNullableRelationFilterSchema;