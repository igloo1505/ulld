import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { WaitlistRequestCountOrderByAggregateInputSchema } from './WaitlistRequestCountOrderByAggregateInputSchema.js';
import { WaitlistRequestAvgOrderByAggregateInputSchema } from './WaitlistRequestAvgOrderByAggregateInputSchema.js';
import { WaitlistRequestMaxOrderByAggregateInputSchema } from './WaitlistRequestMaxOrderByAggregateInputSchema.js';
import { WaitlistRequestMinOrderByAggregateInputSchema } from './WaitlistRequestMinOrderByAggregateInputSchema.js';
import { WaitlistRequestSumOrderByAggregateInputSchema } from './WaitlistRequestSumOrderByAggregateInputSchema.js';
export const WaitlistRequestOrderByWithAggregationInputSchema = z.object({
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
