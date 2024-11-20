import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DJTAvgOrderByAggregateInputSchema: z.ZodType<Prisma.DJTAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  utilityNumberField: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default DJTAvgOrderByAggregateInputSchema;
