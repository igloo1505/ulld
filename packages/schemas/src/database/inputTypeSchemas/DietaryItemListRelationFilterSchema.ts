import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DietaryItemWhereInputSchema } from './DietaryItemWhereInputSchema.js';
export const DietaryItemListRelationFilterSchema: z.ZodType<Prisma.DietaryItemListRelationFilter> = z.object({
  every: z.lazy(() => DietaryItemWhereInputSchema).optional(),
  some: z.lazy(() => DietaryItemWhereInputSchema).optional(),
  none: z.lazy(() => DietaryItemWhereInputSchema).optional()
}).strict();
export default DietaryItemListRelationFilterSchema;