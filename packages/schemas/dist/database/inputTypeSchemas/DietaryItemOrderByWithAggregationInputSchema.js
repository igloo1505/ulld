import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { SortOrderInputSchema } from './SortOrderInputSchema.js';
import { DietaryItemCountOrderByAggregateInputSchema } from './DietaryItemCountOrderByAggregateInputSchema.js';
import { DietaryItemAvgOrderByAggregateInputSchema } from './DietaryItemAvgOrderByAggregateInputSchema.js';
import { DietaryItemMaxOrderByAggregateInputSchema } from './DietaryItemMaxOrderByAggregateInputSchema.js';
import { DietaryItemMinOrderByAggregateInputSchema } from './DietaryItemMinOrderByAggregateInputSchema.js';
import { DietaryItemSumOrderByAggregateInputSchema } from './DietaryItemSumOrderByAggregateInputSchema.js';
export const DietaryItemOrderByWithAggregationInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    barcode: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
    gi: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
    calsPerOz: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
    glutenFree: z.lazy(() => SortOrderSchema).optional(),
    minimalFructose: z.lazy(() => SortOrderSchema).optional(),
    natural: z.lazy(() => SortOrderSchema).optional(),
    organic: z.lazy(() => SortOrderSchema).optional(),
    impactScore: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => DietaryItemCountOrderByAggregateInputSchema).optional(),
    _avg: z.lazy(() => DietaryItemAvgOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => DietaryItemMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => DietaryItemMinOrderByAggregateInputSchema).optional(),
    _sum: z.lazy(() => DietaryItemSumOrderByAggregateInputSchema).optional()
}).strict();
export default DietaryItemOrderByWithAggregationInputSchema;
