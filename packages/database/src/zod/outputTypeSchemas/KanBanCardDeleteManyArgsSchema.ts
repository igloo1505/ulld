import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KanBanCardWhereInputSchema } from '../inputTypeSchemas/KanBanCardWhereInputSchema'

export const KanBanCardDeleteManyArgsSchema: z.ZodType<Prisma.KanBanCardDeleteManyArgs> = z.object({
  where: KanBanCardWhereInputSchema.optional(),
}).strict() ;

export default KanBanCardDeleteManyArgsSchema;
