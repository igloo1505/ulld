import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BibEntryListRelationFilterSchema } from './BibEntryListRelationFilterSchema';

export const BibWhereInputSchema: z.ZodType<Prisma.BibWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BibWhereInputSchema),z.lazy(() => BibWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BibWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BibWhereInputSchema),z.lazy(() => BibWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  filename: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  firstSync: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastSync: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  entries: z.lazy(() => BibEntryListRelationFilterSchema).optional()
}).strict();

export default BibWhereInputSchema;
