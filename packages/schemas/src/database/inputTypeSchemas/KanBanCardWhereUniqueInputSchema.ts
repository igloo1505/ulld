import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanBanCardWhereInputSchema } from './KanBanCardWhereInputSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { KanBanListNullableRelationFilterSchema } from './KanBanListNullableRelationFilterSchema';
import { KanBanListWhereInputSchema } from './KanBanListWhereInputSchema';

export const KanBanCardWhereUniqueInputSchema: z.ZodType<Prisma.KanBanCardWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => KanBanCardWhereInputSchema),z.lazy(() => KanBanCardWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => KanBanCardWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => KanBanCardWhereInputSchema),z.lazy(() => KanBanCardWhereInputSchema).array() ]).optional(),
  listId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  indexWithinList: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  label: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  details: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  KanBanList: z.union([ z.lazy(() => KanBanListNullableRelationFilterSchema),z.lazy(() => KanBanListWhereInputSchema) ]).optional().nullable(),
}).strict());

export default KanBanCardWhereUniqueInputSchema;
