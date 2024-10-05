import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BibEntryAvgOrderByAggregateInputSchema: z.ZodType<Prisma.BibEntryAvgOrderByAggregateInput> = z.object({
  BibId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BibEntryAvgOrderByAggregateInputSchema;
