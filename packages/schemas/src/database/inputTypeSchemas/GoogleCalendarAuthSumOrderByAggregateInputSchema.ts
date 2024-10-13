import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const GoogleCalendarAuthSumOrderByAggregateInputSchema: z.ZodType<Prisma.GoogleCalendarAuthSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default GoogleCalendarAuthSumOrderByAggregateInputSchema;