import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const SnippetCountOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    content: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    keywords: z.lazy(() => SortOrderSchema).optional(),
    language: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default SnippetCountOrderByAggregateInputSchema;
