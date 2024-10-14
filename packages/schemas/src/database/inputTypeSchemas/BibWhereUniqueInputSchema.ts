import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibWhereInputSchema } from './BibWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BibEntryListRelationFilterSchema } from './BibEntryListRelationFilterSchema';

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
