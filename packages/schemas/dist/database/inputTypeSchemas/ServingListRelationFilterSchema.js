import { z } from 'zod';
import { ServingWhereInputSchema } from './ServingWhereInputSchema.js';
export const ServingListRelationFilterSchema = z.object({
    every: z.lazy(() => ServingWhereInputSchema).optional(),
    some: z.lazy(() => ServingWhereInputSchema).optional(),
    none: z.lazy(() => ServingWhereInputSchema).optional()
}).strict();
export default ServingListRelationFilterSchema;
