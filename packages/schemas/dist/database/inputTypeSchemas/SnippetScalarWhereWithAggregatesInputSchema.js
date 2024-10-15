import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema.js';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema.js';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema.js';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema.js';
export const SnippetScalarWhereWithAggregatesInputSchema = z.object({
    AND: z.union([z.lazy(() => SnippetScalarWhereWithAggregatesInputSchema), z.lazy(() => SnippetScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: z.lazy(() => SnippetScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => SnippetScalarWhereWithAggregatesInputSchema), z.lazy(() => SnippetScalarWhereWithAggregatesInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
    content: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    description: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    keywords: z.lazy(() => StringNullableListFilterSchema).optional(),
    language: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
}).strict();
export default SnippetScalarWhereWithAggregatesInputSchema;
