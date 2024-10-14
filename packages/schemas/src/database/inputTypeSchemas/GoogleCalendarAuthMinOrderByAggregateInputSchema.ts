import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const GoogleCalendarAuthMinOrderByAggregateInputSchema: z.ZodType<Prisma.GoogleCalendarAuthMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  auth: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default GoogleCalendarAuthMinOrderByAggregateInputSchema;
