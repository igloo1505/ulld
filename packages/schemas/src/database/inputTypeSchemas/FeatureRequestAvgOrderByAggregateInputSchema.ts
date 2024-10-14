import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const FeatureRequestAvgOrderByAggregateInputSchema: z.ZodType<Prisma.FeatureRequestAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default FeatureRequestAvgOrderByAggregateInputSchema;