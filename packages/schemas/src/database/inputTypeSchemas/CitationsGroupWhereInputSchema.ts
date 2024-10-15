import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema.js';
import { StringNullableFilterSchema } from './StringNullableFilterSchema.js';
import { BibEntryListRelationFilterSchema } from './BibEntryListRelationFilterSchema.js';
export const CitationsGroupWhereInputSchema: z.ZodType<Prisma.CitationsGroupWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CitationsGroupWhereInputSchema),z.lazy(() => CitationsGroupWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CitationsGroupWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CitationsGroupWhereInputSchema),z.lazy(() => CitationsGroupWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  entries: z.lazy(() => BibEntryListRelationFilterSchema).optional()
}).strict();
export default CitationsGroupWhereInputSchema;