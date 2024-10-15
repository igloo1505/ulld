import { z } from 'zod';
import { RelatedValuesWhereInputSchema } from './RelatedValuesWhereInputSchema.js';
export const RelatedValuesListRelationFilterSchema = z.object({
    every: z.lazy(() => RelatedValuesWhereInputSchema).optional(),
    some: z.lazy(() => RelatedValuesWhereInputSchema).optional(),
    none: z.lazy(() => RelatedValuesWhereInputSchema).optional()
}).strict();
export default RelatedValuesListRelationFilterSchema;
