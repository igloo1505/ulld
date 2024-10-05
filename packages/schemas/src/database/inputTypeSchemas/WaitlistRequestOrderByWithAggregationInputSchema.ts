import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { WaitlistRequestCountOrderByAggregateInputSchema } from './WaitlistRequestCountOrderByAggregateInputSchema';
import { WaitlistRequestAvgOrderByAggregateInputSchema } from './WaitlistRequestAvgOrderByAggregateInputSchema';
import { WaitlistRequestMaxOrderByAggregateInputSchema } from './WaitlistRequestMaxOrderByAggregateInputSchema';
import { WaitlistRequestMinOrderByAggregateInputSchema } from './WaitlistRequestMinOrderByAggregateInputSchema';
import { WaitlistRequestSumOrderByAggregateInputSchema } from './WaitlistRequestSumOrderByAggregateInputSchema';

export const WaitlistRequestOrderByWithAggregationInputSchema: z.ZodType<Prisma.WaitlistRequestOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  receivedOn: z.lazy(() => SortOrderSchema).optional(),
  emailsSent: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => WaitlistRequestCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => WaitlistRequestAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => WaitlistRequestMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => WaitlistRequestMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => WaitlistRequestSumOrderByAggregateInputSchema).optional()
}).strict();

export default WaitlistRequestOrderByWithAggregationInputSchema;
