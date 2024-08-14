import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BibAvgOrderByAggregateInputSchema: z.ZodType<Prisma.BibAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BibAvgOrderByAggregateInputSchema;
