import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { WhiteboardCountOrderByAggregateInputSchema } from './WhiteboardCountOrderByAggregateInputSchema.js';
import { WhiteboardMaxOrderByAggregateInputSchema } from './WhiteboardMaxOrderByAggregateInputSchema.js';
import { WhiteboardMinOrderByAggregateInputSchema } from './WhiteboardMinOrderByAggregateInputSchema.js';
export const WhiteboardOrderByWithAggregationInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    data: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => WhiteboardCountOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => WhiteboardMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => WhiteboardMinOrderByAggregateInputSchema).optional()
}).strict();
export default WhiteboardOrderByWithAggregationInputSchema;
