import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DJTSumOrderByAggregateInputSchema: z.ZodType<Prisma.DJTSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  utilityNumberField: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default DJTSumOrderByAggregateInputSchema;
