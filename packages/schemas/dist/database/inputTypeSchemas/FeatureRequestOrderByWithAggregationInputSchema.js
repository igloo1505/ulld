import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { FeatureRequestCountOrderByAggregateInputSchema } from './FeatureRequestCountOrderByAggregateInputSchema.js';
import { FeatureRequestAvgOrderByAggregateInputSchema } from './FeatureRequestAvgOrderByAggregateInputSchema.js';
import { FeatureRequestMaxOrderByAggregateInputSchema } from './FeatureRequestMaxOrderByAggregateInputSchema.js';
import { FeatureRequestMinOrderByAggregateInputSchema } from './FeatureRequestMinOrderByAggregateInputSchema.js';
import { FeatureRequestSumOrderByAggregateInputSchema } from './FeatureRequestSumOrderByAggregateInputSchema.js';
export const FeatureRequestOrderByWithAggregationInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    message: z.lazy(() => SortOrderSchema).optional(),
    category: z.lazy(() => SortOrderSchema).optional(),
    userBase: z.lazy(() => SortOrderSchema).optional(),
    receivedOn: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => FeatureRequestCountOrderByAggregateInputSchema).optional(),
    _avg: z.lazy(() => FeatureRequestAvgOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => FeatureRequestMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => FeatureRequestMinOrderByAggregateInputSchema).optional(),
    _sum: z.lazy(() => FeatureRequestSumOrderByAggregateInputSchema).optional()
}).strict();
export default FeatureRequestOrderByWithAggregationInputSchema;
