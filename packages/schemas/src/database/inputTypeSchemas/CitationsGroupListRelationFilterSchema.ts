import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { CitationsGroupWhereInputSchema } from '../CitationsGroupWhereInputSchema.js';
export const CitationsGroupListRelationFilterSchema: z.ZodType<Prisma.CitationsGroupListRelationFilter> = z.object({
  every: z.lazy(() => CitationsGroupWhereInputSchema).optional(),
  some: z.lazy(() => CitationsGroupWhereInputSchema).optional(),
  none: z.lazy(() => CitationsGroupWhereInputSchema).optional()
}).strict();
export default CitationsGroupListRelationFilterSchema;