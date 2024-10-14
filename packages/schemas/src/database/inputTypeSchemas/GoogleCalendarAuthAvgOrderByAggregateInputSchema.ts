import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const GoogleCalendarAuthAvgOrderByAggregateInputSchema: z.ZodType<Prisma.GoogleCalendarAuthAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default GoogleCalendarAuthAvgOrderByAggregateInputSchema;