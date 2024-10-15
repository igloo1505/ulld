import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const DefinitionSumOrderByAggregateInputSchema = z.object({
    mdxNoteId: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default DefinitionSumOrderByAggregateInputSchema;
