import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { RelatedValuesWhereInputSchema } from '../RelatedValuesWhereInputSchema.js';
export const RelatedValuesListRelationFilterSchema: z.ZodType<Prisma.RelatedValuesListRelationFilter> = z.object({
  every: z.lazy(() => RelatedValuesWhereInputSchema).optional(),
  some: z.lazy(() => RelatedValuesWhereInputSchema).optional(),
  none: z.lazy(() => RelatedValuesWhereInputSchema).optional()
}).strict();
export default RelatedValuesListRelationFilterSchema;