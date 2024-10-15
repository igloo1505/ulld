import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const SequentialNoteListCountOrderByAggregateInputSchema = z.object({
    sequentialKey: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default SequentialNoteListCountOrderByAggregateInputSchema;
