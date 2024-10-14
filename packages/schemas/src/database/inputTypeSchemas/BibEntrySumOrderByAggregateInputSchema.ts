import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BibEntrySumOrderByAggregateInputSchema: z.ZodType<Prisma.BibEntrySumOrderByAggregateInput> = z.object({
  BibId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BibEntrySumOrderByAggregateInputSchema;
