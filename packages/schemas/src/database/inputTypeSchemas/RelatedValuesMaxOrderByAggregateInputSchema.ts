import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RelatedValuesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RelatedValuesMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  output: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RelatedValuesMaxOrderByAggregateInputSchema;
