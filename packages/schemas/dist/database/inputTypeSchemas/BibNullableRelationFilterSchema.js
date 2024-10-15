import { z } from 'zod';
import { BibWhereInputSchema } from './BibWhereInputSchema.js';
export const BibNullableRelationFilterSchema = z.object({
    is: z.lazy(() => BibWhereInputSchema).optional().nullable(),
    isNot: z.lazy(() => BibWhereInputSchema).optional().nullable()
}).strict();
export default BibNullableRelationFilterSchema;
