import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntFilterSchema } from '../IntFilterSchema.js';
import { StringNullableFilterSchema } from '../StringNullableFilterSchema.js';
import { IntNullableFilterSchema } from '../IntNullableFilterSchema.js';
export const KanBanListScalarWhereInputSchema: z.ZodType<Prisma.KanBanListScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => KanBanListScalarWhereInputSchema),z.lazy(() => KanBanListScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => KanBanListScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => KanBanListScalarWhereInputSchema),z.lazy(() => KanBanListScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  indexWithinBoard: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  boardId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();
export default KanBanListScalarWhereInputSchema;