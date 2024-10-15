import { z } from 'zod';
import { SubjectWhereInputSchema } from './SubjectWhereInputSchema.js';
export const SubjectListRelationFilterSchema = z.object({
    every: z.lazy(() => SubjectWhereInputSchema).optional(),
    some: z.lazy(() => SubjectWhereInputSchema).optional(),
    none: z.lazy(() => SubjectWhereInputSchema).optional()
}).strict();
export default SubjectListRelationFilterSchema;
