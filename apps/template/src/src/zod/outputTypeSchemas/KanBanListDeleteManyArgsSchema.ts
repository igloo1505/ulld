import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KanBanListWhereInputSchema } from '../inputTypeSchemas/KanBanListWhereInputSchema'

export const KanBanListDeleteManyArgsSchema: z.ZodType<Prisma.KanBanListDeleteManyArgs> = z.object({
  where: KanBanListWhereInputSchema.optional(),
}).strict() ;

export default KanBanListDeleteManyArgsSchema;
