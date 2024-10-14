import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AutoSettingSumOrderByAggregateInputSchema: z.ZodType<Prisma.AutoSettingSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default AutoSettingSumOrderByAggregateInputSchema;
