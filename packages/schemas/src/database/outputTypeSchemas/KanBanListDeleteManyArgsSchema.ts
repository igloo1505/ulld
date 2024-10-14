import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { KanBanListWhereInputSchema } from '../inputTypeSchemas/KanBanListWhereInputSchema.js'
export const KanBanListDeleteManyArgsSchema: z.ZodType<Prisma.KanBanListDeleteManyArgs> = z.object({
  where: KanBanListWhereInputSchema.optional(),
}).strict() ;
export default KanBanListDeleteManyArgsSchema;