import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntFilterSchema } from '../IntFilterSchema.js';
import { IntNullableFilterSchema } from '../IntNullableFilterSchema.js';
import { StringNullableFilterSchema } from '../StringNullableFilterSchema.js';
import { KanBanListNullableRelationFilterSchema } from '../KanBanListNullableRelationFilterSchema.js';
import { KanBanListWhereInputSchema } from '../KanBanListWhereInputSchema.js';
export const KanBanCardWhereInputSchema: z.ZodType<Prisma.KanBanCardWhereInput> = z.object({
  AND: z.union([ z.lazy(() => KanBanCardWhereInputSchema),z.lazy(() => KanBanCardWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => KanBanCardWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => KanBanCardWhereInputSchema),z.lazy(() => KanBanCardWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  listId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  indexWithinList: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  label: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  details: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  KanBanList: z.union([ z.lazy(() => KanBanListNullableRelationFilterSchema),z.lazy(() => KanBanListWhereInputSchema) ]).optional().nullable(),
}).strict();
export default KanBanCardWhereInputSchema;