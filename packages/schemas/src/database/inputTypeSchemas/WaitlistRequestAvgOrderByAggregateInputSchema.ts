import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const WaitlistRequestAvgOrderByAggregateInputSchema: z.ZodType<Prisma.WaitlistRequestAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  emailsSent: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default WaitlistRequestAvgOrderByAggregateInputSchema;