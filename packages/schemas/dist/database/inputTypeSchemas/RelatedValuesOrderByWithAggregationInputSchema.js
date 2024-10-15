import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { RelatedValuesCountOrderByAggregateInputSchema } from './RelatedValuesCountOrderByAggregateInputSchema.js';
import { RelatedValuesAvgOrderByAggregateInputSchema } from './RelatedValuesAvgOrderByAggregateInputSchema.js';
import { RelatedValuesMaxOrderByAggregateInputSchema } from './RelatedValuesMaxOrderByAggregateInputSchema.js';
import { RelatedValuesMinOrderByAggregateInputSchema } from './RelatedValuesMinOrderByAggregateInputSchema.js';
import { RelatedValuesSumOrderByAggregateInputSchema } from './RelatedValuesSumOrderByAggregateInputSchema.js';
export const RelatedValuesOrderByWithAggregationInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    input: z.lazy(() => SortOrderSchema).optional(),
    output: z.lazy(() => SortOrderSchema).optional(),
    equationId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => RelatedValuesCountOrderByAggregateInputSchema).optional(),
    _avg: z.lazy(() => RelatedValuesAvgOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => RelatedValuesMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => RelatedValuesMinOrderByAggregateInputSchema).optional(),
    _sum: z.lazy(() => RelatedValuesSumOrderByAggregateInputSchema).optional()
}).strict();
export default RelatedValuesOrderByWithAggregationInputSchema;
