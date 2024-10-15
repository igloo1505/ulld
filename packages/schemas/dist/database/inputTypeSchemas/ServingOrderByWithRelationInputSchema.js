import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { SortOrderInputSchema } from './SortOrderInputSchema.js';
import { DietaryItemOrderByWithRelationInputSchema } from './DietaryItemOrderByWithRelationInputSchema.js';
export const ServingOrderByWithRelationInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    dietaryItemId: z.lazy(() => SortOrderSchema).optional(),
    quant_oz: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
    quant_guess: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
    item: z.lazy(() => DietaryItemOrderByWithRelationInputSchema).optional()
}).strict();
export default ServingOrderByWithRelationInputSchema;
