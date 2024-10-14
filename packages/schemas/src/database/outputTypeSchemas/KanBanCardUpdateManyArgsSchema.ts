import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KanBanCardUpdateManyMutationInputSchema } from '../inputTypeSchemas/KanBanCardUpdateManyMutationInputSchema'
import { KanBanCardUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/KanBanCardUncheckedUpdateManyInputSchema'
import { KanBanCardWhereInputSchema } from '../inputTypeSchemas/KanBanCardWhereInputSchema'

export const KanBanCardUpdateManyArgsSchema: z.ZodType<Prisma.KanBanCardUpdateManyArgs> = z.object({
  data: z.union([ KanBanCardUpdateManyMutationInputSchema,KanBanCardUncheckedUpdateManyInputSchema ]),
  where: KanBanCardWhereInputSchema.optional(),
}).strict() ;

export default KanBanCardUpdateManyArgsSchema;
