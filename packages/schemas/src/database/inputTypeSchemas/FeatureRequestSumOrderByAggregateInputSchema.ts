import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const FeatureRequestSumOrderByAggregateInputSchema: z.ZodType<Prisma.FeatureRequestSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default FeatureRequestSumOrderByAggregateInputSchema;
