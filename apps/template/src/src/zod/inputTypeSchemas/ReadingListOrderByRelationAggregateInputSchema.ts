import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ReadingListOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ReadingListOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ReadingListOrderByRelationAggregateInputSchema;
