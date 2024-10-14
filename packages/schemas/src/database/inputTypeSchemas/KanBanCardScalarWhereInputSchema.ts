import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const KanBanCardScalarWhereInputSchema: z.ZodType<Prisma.KanBanCardScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => KanBanCardScalarWhereInputSchema),z.lazy(() => KanBanCardScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => KanBanCardScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => KanBanCardScalarWhereInputSchema),z.lazy(() => KanBanCardScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  listId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  indexWithinList: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  label: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  details: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default KanBanCardScalarWhereInputSchema;
