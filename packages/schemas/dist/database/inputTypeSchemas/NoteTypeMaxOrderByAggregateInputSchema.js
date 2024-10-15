import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const NoteTypeMaxOrderByAggregateInputSchema = z.object({
    name: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default NoteTypeMaxOrderByAggregateInputSchema;
