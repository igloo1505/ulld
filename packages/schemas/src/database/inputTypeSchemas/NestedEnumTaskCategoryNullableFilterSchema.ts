import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TaskCategorySchema } from './TaskCategorySchema.js';
export const NestedEnumTaskCategoryNullableFilterSchema: z.ZodType<Prisma.NestedEnumTaskCategoryNullableFilter> = z.object({
  equals: z.lazy(() => TaskCategorySchema).optional().nullable(),
  in: z.lazy(() => TaskCategorySchema).array().optional().nullable(),
  notIn: z.lazy(() => TaskCategorySchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => TaskCategorySchema),z.lazy(() => NestedEnumTaskCategoryNullableFilterSchema) ]).optional().nullable(),
}).strict();
export default NestedEnumTaskCategoryNullableFilterSchema;