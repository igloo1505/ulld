import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { GoogleCalendarAuthCountOrderByAggregateInputSchema } from './GoogleCalendarAuthCountOrderByAggregateInputSchema';
import { GoogleCalendarAuthAvgOrderByAggregateInputSchema } from './GoogleCalendarAuthAvgOrderByAggregateInputSchema';
import { GoogleCalendarAuthMaxOrderByAggregateInputSchema } from './GoogleCalendarAuthMaxOrderByAggregateInputSchema';
import { GoogleCalendarAuthMinOrderByAggregateInputSchema } from './GoogleCalendarAuthMinOrderByAggregateInputSchema';
import { GoogleCalendarAuthSumOrderByAggregateInputSchema } from './GoogleCalendarAuthSumOrderByAggregateInputSchema';

export const GoogleCalendarAuthOrderByWithAggregationInputSchema: z.ZodType<Prisma.GoogleCalendarAuthOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  auth: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => GoogleCalendarAuthCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => GoogleCalendarAuthAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => GoogleCalendarAuthMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => GoogleCalendarAuthMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => GoogleCalendarAuthSumOrderByAggregateInputSchema).optional()
}).strict();

export default GoogleCalendarAuthOrderByWithAggregationInputSchema;
