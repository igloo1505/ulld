import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ServingOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ServingOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ServingOrderByRelationAggregateInputSchema;
