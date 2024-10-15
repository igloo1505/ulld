import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const RelatedValuesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RelatedValuesMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  output: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default RelatedValuesMaxOrderByAggregateInputSchema;