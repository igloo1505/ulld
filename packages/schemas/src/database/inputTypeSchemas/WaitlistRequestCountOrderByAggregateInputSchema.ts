import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const WaitlistRequestCountOrderByAggregateInputSchema: z.ZodType<Prisma.WaitlistRequestCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  receivedOn: z.lazy(() => SortOrderSchema).optional(),
  emailsSent: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default WaitlistRequestCountOrderByAggregateInputSchema;