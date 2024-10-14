import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RelatedValuesOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RelatedValuesOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RelatedValuesOrderByRelationAggregateInputSchema;
