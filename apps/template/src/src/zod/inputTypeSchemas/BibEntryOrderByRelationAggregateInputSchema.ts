import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BibEntryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BibEntryOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BibEntryOrderByRelationAggregateInputSchema;
