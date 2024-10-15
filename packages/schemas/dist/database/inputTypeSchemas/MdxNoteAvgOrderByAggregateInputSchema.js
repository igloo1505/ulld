import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const MdxNoteAvgOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    importantValues: z.lazy(() => SortOrderSchema).optional(),
    sequentialIndex: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default MdxNoteAvgOrderByAggregateInputSchema;
