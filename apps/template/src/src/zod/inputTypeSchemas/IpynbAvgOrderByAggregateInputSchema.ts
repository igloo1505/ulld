import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const IpynbAvgOrderByAggregateInputSchema: z.ZodType<Prisma.IpynbAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  importantValues: z.lazy(() => SortOrderSchema).optional(),
  sequentialIndex: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default IpynbAvgOrderByAggregateInputSchema;
