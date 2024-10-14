import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';

export const KanBanListScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.KanBanListScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => KanBanListScalarWhereWithAggregatesInputSchema),z.lazy(() => KanBanListScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => KanBanListScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => KanBanListScalarWhereWithAggregatesInputSchema),z.lazy(() => KanBanListScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  indexWithinBoard: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  boardId: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export default KanBanListScalarWhereWithAggregatesInputSchema;
