import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BibEntryListRelationFilterSchema } from './BibEntryListRelationFilterSchema';

export const CitationsGroupWhereInputSchema: z.ZodType<Prisma.CitationsGroupWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CitationsGroupWhereInputSchema),z.lazy(() => CitationsGroupWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CitationsGroupWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CitationsGroupWhereInputSchema),z.lazy(() => CitationsGroupWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  entries: z.lazy(() => BibEntryListRelationFilterSchema).optional()
}).strict();

export default CitationsGroupWhereInputSchema;
