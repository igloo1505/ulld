import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const ServingCountOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    dietaryItemId: z.lazy(() => SortOrderSchema).optional(),
    quant_oz: z.lazy(() => SortOrderSchema).optional(),
    quant_guess: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default ServingCountOrderByAggregateInputSchema;
