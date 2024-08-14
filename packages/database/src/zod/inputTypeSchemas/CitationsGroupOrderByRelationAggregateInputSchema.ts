import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CitationsGroupOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CitationsGroupOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CitationsGroupOrderByRelationAggregateInputSchema;
