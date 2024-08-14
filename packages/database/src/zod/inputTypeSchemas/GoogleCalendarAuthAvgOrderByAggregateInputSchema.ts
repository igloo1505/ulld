import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const GoogleCalendarAuthAvgOrderByAggregateInputSchema: z.ZodType<Prisma.GoogleCalendarAuthAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default GoogleCalendarAuthAvgOrderByAggregateInputSchema;
