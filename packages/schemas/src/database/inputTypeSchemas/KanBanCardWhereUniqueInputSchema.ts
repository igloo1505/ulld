import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanBanCardWhereInputSchema } from './KanBanCardWhereInputSchema.js';
import { IntNullableFilterSchema } from './IntNullableFilterSchema.js';
import { IntFilterSchema } from './IntFilterSchema.js';
import { StringNullableFilterSchema } from './StringNullableFilterSchema.js';
import { KanBanListNullableRelationFilterSchema } from './KanBanListNullableRelationFilterSchema.js';
import { KanBanListWhereInputSchema } from './KanBanListWhereInputSchema.js';
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