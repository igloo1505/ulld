import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/KanBanCardWhereInputSchema.js
export const KanBanCardDeleteManyArgsSchema: z.ZodType<Prisma.KanBanCardDeleteManyArgs> = z.object({
  where: KanBanCardWhereInputSchema.optional(),
}).strict() ;
export default KanBanCardDeleteManyArgsSchema;