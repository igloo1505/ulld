import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { SortOrderInputSchema } from './SortOrderInputSchema.js';
import { GoogleCalendarAuthCountOrderByAggregateInputSchema } from './GoogleCalendarAuthCountOrderByAggregateInputSchema.js';
import { GoogleCalendarAuthAvgOrderByAggregateInputSchema } from './GoogleCalendarAuthAvgOrderByAggregateInputSchema.js';
import { GoogleCalendarAuthMaxOrderByAggregateInputSchema } from './GoogleCalendarAuthMaxOrderByAggregateInputSchema.js';
import { GoogleCalendarAuthMinOrderByAggregateInputSchema } from './GoogleCalendarAuthMinOrderByAggregateInputSchema.js';
import { GoogleCalendarAuthSumOrderByAggregateInputSchema } from './GoogleCalendarAuthSumOrderByAggregateInputSchema.js';
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