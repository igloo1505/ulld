import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DietWhereInputSchema } from './DietWhereInputSchema.js';
export const DietNullableRelationFilterSchema: z.ZodType<Prisma.DietNullableRelationFilter> = z.object({
  is: z.lazy(() => DietWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => DietWhereInputSchema).optional().nullable()
}).strict();
export default DietNullableRelationFilterSchema;