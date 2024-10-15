import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const FeatureRequestSumOrderByAggregateInputSchema: z.ZodType<Prisma.FeatureRequestSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default FeatureRequestSumOrderByAggregateInputSchema;