import { z } from 'zod';
import { SnippetWhereInputSchema } from './SnippetWhereInputSchema.js';
import { StringFilterSchema } from './StringFilterSchema.js';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema.js';
import { DateTimeFilterSchema } from './DateTimeFilterSchema.js';
export const SnippetWhereUniqueInputSchema = z.object({
    id: z.number().int()
})
    .and(z.object({
    id: z.number().int().optional(),
    AND: z.union([z.lazy(() => SnippetWhereInputSchema), z.lazy(() => SnippetWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => SnippetWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => SnippetWhereInputSchema), z.lazy(() => SnippetWhereInputSchema).array()]).optional(),
    content: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    description: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    keywords: z.lazy(() => StringNullableListFilterSchema).optional(),
    language: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
}).strict());
export default SnippetWhereUniqueInputSchema;
