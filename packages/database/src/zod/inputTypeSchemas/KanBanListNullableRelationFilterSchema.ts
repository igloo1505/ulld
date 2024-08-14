import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanBanListWhereInputSchema } from './KanBanListWhereInputSchema';

export const KanBanListNullableRelationFilterSchema: z.ZodType<Prisma.KanBanListNullableRelationFilter> = z.object({
  is: z.lazy(() => KanBanListWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => KanBanListWhereInputSchema).optional().nullable()
}).strict();

export default KanBanListNullableRelationFilterSchema;
