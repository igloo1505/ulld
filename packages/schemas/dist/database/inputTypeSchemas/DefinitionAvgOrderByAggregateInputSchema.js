import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const DefinitionAvgOrderByAggregateInputSchema = z.object({
    mdxNoteId: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default DefinitionAvgOrderByAggregateInputSchema;
