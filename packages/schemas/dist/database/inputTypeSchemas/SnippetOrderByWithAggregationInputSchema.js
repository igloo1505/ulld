import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { SnippetCountOrderByAggregateInputSchema } from './SnippetCountOrderByAggregateInputSchema.js';
import { SnippetAvgOrderByAggregateInputSchema } from './SnippetAvgOrderByAggregateInputSchema.js';
import { SnippetMaxOrderByAggregateInputSchema } from './SnippetMaxOrderByAggregateInputSchema.js';
import { SnippetMinOrderByAggregateInputSchema } from './SnippetMinOrderByAggregateInputSchema.js';
import { SnippetSumOrderByAggregateInputSchema } from './SnippetSumOrderByAggregateInputSchema.js';
export const SnippetOrderByWithAggregationInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    content: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    keywords: z.lazy(() => SortOrderSchema).optional(),
    language: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => SnippetCountOrderByAggregateInputSchema).optional(),
    _avg: z.lazy(() => SnippetAvgOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => SnippetMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => SnippetMinOrderByAggregateInputSchema).optional(),
    _sum: z.lazy(() => SnippetSumOrderByAggregateInputSchema).optional()
}).strict();
export default SnippetOrderByWithAggregationInputSchema;
