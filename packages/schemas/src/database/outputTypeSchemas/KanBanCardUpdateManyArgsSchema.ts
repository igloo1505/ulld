import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { KanBanCardUpdateManyMutationInputSchema } from '../inputTypeSchemas/KanBanCardUpdateManyMutationInputSchema.js'
import { KanBanCardUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/KanBanCardUncheckedUpdateManyInputSchema.js'
import { KanBanCardWhereInputSchema } from '../inputTypeSchemas/KanBanCardWhereInputSchema.js'
export const KanBanCardUpdateManyArgsSchema: z.ZodType<Prisma.KanBanCardUpdateManyArgs> = z.object({
  data: z.union([ KanBanCardUpdateManyMutationInputSchema,KanBanCardUncheckedUpdateManyInputSchema ]),
  where: KanBanCardWhereInputSchema.optional(),
}).strict() ;
export default KanBanCardUpdateManyArgsSchema;