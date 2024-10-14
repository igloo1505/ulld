import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DietaryItemWhereInputSchema } from './DietaryItemWhereInputSchema.js';
export const DietaryItemRelationFilterSchema: z.ZodType<Prisma.DietaryItemRelationFilter> = z.object({
  is: z.lazy(() => DietaryItemWhereInputSchema).optional(),
  isNot: z.lazy(() => DietaryItemWhereInputSchema).optional()
}).strict();
export default DietaryItemRelationFilterSchema;