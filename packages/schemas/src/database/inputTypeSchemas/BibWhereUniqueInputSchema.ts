import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibWhereInputSchema } from '../BibWhereInputSchema.js';
import { StringFilterSchema } from '../StringFilterSchema.js';
import { DateTimeFilterSchema } from '../DateTimeFilterSchema.js';
import { BibEntryListRelationFilterSchema } from '../BibEntryListRelationFilterSchema.js';
export const BibWhereUniqueInputSchema: z.ZodType<Prisma.BibWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => BibWhereInputSchema),z.lazy(() => BibWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BibWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BibWhereInputSchema),z.lazy(() => BibWhereInputSchema).array() ]).optional(),
  filename: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  firstSync: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastSync: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  entries: z.lazy(() => BibEntryListRelationFilterSchema).optional()
}).strict());
export default BibWhereUniqueInputSchema;