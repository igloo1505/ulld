import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanBanCardWhereInputSchema } from '../KanBanCardWhereInputSchema.js';
export const KanBanCardListRelationFilterSchema: z.ZodType<Prisma.KanBanCardListRelationFilter> = z.object({
  every: z.lazy(() => KanBanCardWhereInputSchema).optional(),
  some: z.lazy(() => KanBanCardWhereInputSchema).optional(),
  none: z.lazy(() => KanBanCardWhereInputSchema).optional()
}).strict();
export default KanBanCardListRelationFilterSchema;