import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DietaryItemOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DietaryItemOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default DietaryItemOrderByRelationAggregateInputSchema;
