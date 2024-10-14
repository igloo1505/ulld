import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WaitlistRequestSumOrderByAggregateInputSchema: z.ZodType<Prisma.WaitlistRequestSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  emailsSent: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default WaitlistRequestSumOrderByAggregateInputSchema;
