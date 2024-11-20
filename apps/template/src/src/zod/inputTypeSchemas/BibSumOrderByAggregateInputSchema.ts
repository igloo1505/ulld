import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BibSumOrderByAggregateInputSchema: z.ZodType<Prisma.BibSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BibSumOrderByAggregateInputSchema;
