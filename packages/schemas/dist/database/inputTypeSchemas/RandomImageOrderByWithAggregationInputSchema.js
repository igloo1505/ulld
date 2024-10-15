import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { RandomImageCountOrderByAggregateInputSchema } from './RandomImageCountOrderByAggregateInputSchema.js';
import { RandomImageMaxOrderByAggregateInputSchema } from './RandomImageMaxOrderByAggregateInputSchema.js';
import { RandomImageMinOrderByAggregateInputSchema } from './RandomImageMinOrderByAggregateInputSchema.js';
export const RandomImageOrderByWithAggregationInputSchema = z.object({
    path: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => RandomImageCountOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => RandomImageMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => RandomImageMinOrderByAggregateInputSchema).optional()
}).strict();
export default RandomImageOrderByWithAggregationInputSchema;
