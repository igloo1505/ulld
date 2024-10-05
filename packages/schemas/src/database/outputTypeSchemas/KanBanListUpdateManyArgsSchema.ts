import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KanBanListUpdateManyMutationInputSchema } from '../inputTypeSchemas/KanBanListUpdateManyMutationInputSchema'
import { KanBanListUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/KanBanListUncheckedUpdateManyInputSchema'
import { KanBanListWhereInputSchema } from '../inputTypeSchemas/KanBanListWhereInputSchema'

export const KanBanListUpdateManyArgsSchema: z.ZodType<Prisma.KanBanListUpdateManyArgs> = z.object({
  data: z.union([ KanBanListUpdateManyMutationInputSchema,KanBanListUncheckedUpdateManyInputSchema ]),
  where: KanBanListWhereInputSchema.optional(),
}).strict() ;

export default KanBanListUpdateManyArgsSchema;
