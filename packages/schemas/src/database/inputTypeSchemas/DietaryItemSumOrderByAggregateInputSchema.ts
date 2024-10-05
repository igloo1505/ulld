import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DietaryItemSumOrderByAggregateInputSchema: z.ZodType<Prisma.DietaryItemSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  gi: z.lazy(() => SortOrderSchema).optional(),
  calsPerOz: z.lazy(() => SortOrderSchema).optional(),
  impactScore: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default DietaryItemSumOrderByAggregateInputSchema;
