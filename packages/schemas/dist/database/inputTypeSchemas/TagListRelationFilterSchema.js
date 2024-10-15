import { z } from 'zod';
import { TagWhereInputSchema } from './TagWhereInputSchema.js';
export const TagListRelationFilterSchema = z.object({
    every: z.lazy(() => TagWhereInputSchema).optional(),
    some: z.lazy(() => TagWhereInputSchema).optional(),
    none: z.lazy(() => TagWhereInputSchema).optional()
}).strict();
export default TagListRelationFilterSchema;
