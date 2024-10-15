import { z } from 'zod';
import { CitationsGroupWhereInputSchema } from './CitationsGroupWhereInputSchema.js';
import { StringNullableFilterSchema } from './StringNullableFilterSchema.js';
import { BibEntryListRelationFilterSchema } from './BibEntryListRelationFilterSchema.js';
export const CitationsGroupWhereUniqueInputSchema = z.object({
    name: z.string()
})
    .and(z.object({
    name: z.string().optional(),
    AND: z.union([z.lazy(() => CitationsGroupWhereInputSchema), z.lazy(() => CitationsGroupWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => CitationsGroupWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => CitationsGroupWhereInputSchema), z.lazy(() => CitationsGroupWhereInputSchema).array()]).optional(),
    description: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    entries: z.lazy(() => BibEntryListRelationFilterSchema).optional()
}).strict());
export default CitationsGroupWhereUniqueInputSchema;
