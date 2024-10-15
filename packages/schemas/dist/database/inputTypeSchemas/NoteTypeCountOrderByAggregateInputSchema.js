import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const NoteTypeCountOrderByAggregateInputSchema = z.object({
    name: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default NoteTypeCountOrderByAggregateInputSchema;
