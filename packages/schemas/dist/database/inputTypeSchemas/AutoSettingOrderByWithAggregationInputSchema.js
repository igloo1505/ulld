import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { AutoSettingCountOrderByAggregateInputSchema } from './AutoSettingCountOrderByAggregateInputSchema.js';
import { AutoSettingAvgOrderByAggregateInputSchema } from './AutoSettingAvgOrderByAggregateInputSchema.js';
import { AutoSettingMaxOrderByAggregateInputSchema } from './AutoSettingMaxOrderByAggregateInputSchema.js';
import { AutoSettingMinOrderByAggregateInputSchema } from './AutoSettingMinOrderByAggregateInputSchema.js';
import { AutoSettingSumOrderByAggregateInputSchema } from './AutoSettingSumOrderByAggregateInputSchema.js';
export const AutoSettingOrderByWithAggregationInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    glob: z.lazy(() => SortOrderSchema).optional(),
    value: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => AutoSettingCountOrderByAggregateInputSchema).optional(),
    _avg: z.lazy(() => AutoSettingAvgOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => AutoSettingMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => AutoSettingMinOrderByAggregateInputSchema).optional(),
    _sum: z.lazy(() => AutoSettingSumOrderByAggregateInputSchema).optional()
}).strict();
export default AutoSettingOrderByWithAggregationInputSchema;
