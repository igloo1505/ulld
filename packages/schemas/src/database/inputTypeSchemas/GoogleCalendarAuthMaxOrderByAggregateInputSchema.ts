import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const GoogleCalendarAuthMaxOrderByAggregateInputSchema: z.ZodType<Prisma.GoogleCalendarAuthMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  auth: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default GoogleCalendarAuthMaxOrderByAggregateInputSchema;