import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CitationsGroupMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CitationsGroupMaxOrderByAggregateInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CitationsGroupMaxOrderByAggregateInputSchema;
