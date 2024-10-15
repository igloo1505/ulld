import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema.js';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema.js';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema.js';
export const KanBanCardScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.KanBanCardScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => KanBanCardScalarWhereWithAggregatesInputSchema),z.lazy(() => KanBanCardScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => KanBanCardScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => KanBanCardScalarWhereWithAggregatesInputSchema),z.lazy(() => KanBanCardScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  listId: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  indexWithinList: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  label: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  details: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();
export default KanBanCardScalarWhereWithAggregatesInputSchema;