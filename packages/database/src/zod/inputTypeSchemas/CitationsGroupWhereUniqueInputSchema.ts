import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CitationsGroupWhereInputSchema } from './CitationsGroupWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BibEntryListRelationFilterSchema } from './BibEntryListRelationFilterSchema';

export const CitationsGroupWhereUniqueInputSchema: z.ZodType<Prisma.CitationsGroupWhereUniqueInput> = z.object({
  name: z.string()
})
.and(z.object({
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => CitationsGroupWhereInputSchema),z.lazy(() => CitationsGroupWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CitationsGroupWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CitationsGroupWhereInputSchema),z.lazy(() => CitationsGroupWhereInputSchema).array() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  entries: z.lazy(() => BibEntryListRelationFilterSchema).optional()
}).strict());

export default CitationsGroupWhereUniqueInputSchema;
