import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanBanListWhereInputSchema } from './KanBanListWhereInputSchema';

export const KanBanListListRelationFilterSchema: z.ZodType<Prisma.KanBanListListRelationFilter> = z.object({
  every: z.lazy(() => KanBanListWhereInputSchema).optional(),
  some: z.lazy(() => KanBanListWhereInputSchema).optional(),
  none: z.lazy(() => KanBanListWhereInputSchema).optional()
}).strict();

export default KanBanListListRelationFilterSchema;
