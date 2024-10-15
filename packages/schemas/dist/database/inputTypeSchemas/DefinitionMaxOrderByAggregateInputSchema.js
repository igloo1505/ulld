import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const DefinitionMaxOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    label: z.lazy(() => SortOrderSchema).optional(),
    content: z.lazy(() => SortOrderSchema).optional(),
    alphabeticalLabel: z.lazy(() => SortOrderSchema).optional(),
    mdxNoteId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    lastAccess: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default DefinitionMaxOrderByAggregateInputSchema;
