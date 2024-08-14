import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DietOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DietOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default DietOrderByRelationAggregateInputSchema;
