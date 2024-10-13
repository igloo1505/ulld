import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntFilterSchema } from '../IntFilterSchema.js';
import { StringFilterSchema } from '../StringFilterSchema.js';
import { StringNullableListFilterSchema } from '../StringNullableListFilterSchema.js';
import { DateTimeFilterSchema } from '../DateTimeFilterSchema.js';
export const SnippetWhereInputSchema: z.ZodType<Prisma.SnippetWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SnippetWhereInputSchema),z.lazy(() => SnippetWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SnippetWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SnippetWhereInputSchema),z.lazy(() => SnippetWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  keywords: z.lazy(() => StringNullableListFilterSchema).optional(),
  language: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();
export default SnippetWhereInputSchema;