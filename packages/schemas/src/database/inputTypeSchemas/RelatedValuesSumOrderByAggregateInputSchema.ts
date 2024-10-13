import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const RelatedValuesSumOrderByAggregateInputSchema: z.ZodType<Prisma.RelatedValuesSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  output: z.lazy(() => SortOrderSchema).optional(),
  equationId: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default RelatedValuesSumOrderByAggregateInputSchema;