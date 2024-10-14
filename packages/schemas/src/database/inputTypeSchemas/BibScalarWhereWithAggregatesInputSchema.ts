import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const BibScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BibScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BibScalarWhereWithAggregatesInputSchema),z.lazy(() => BibScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BibScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BibScalarWhereWithAggregatesInputSchema),z.lazy(() => BibScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  filename: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  firstSync: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  lastSync: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default BibScalarWhereWithAggregatesInputSchema;
