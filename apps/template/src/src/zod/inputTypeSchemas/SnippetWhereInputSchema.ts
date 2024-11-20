import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

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
