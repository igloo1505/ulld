import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { KanBanListUpdateManyMutationInputSchema } from '../inputTypeSchemas/KanBanListUpdateManyMutationInputSchema.js'
import { KanBanListUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/KanBanListUncheckedUpdateManyInputSchema.js'
import { KanBanListWhereInputSchema } from '../inputTypeSchemas/KanBanListWhereInputSchema.js'
export const KanBanListUpdateManyArgsSchema: z.ZodType<Prisma.KanBanListUpdateManyArgs> = z.object({
  data: z.union([ KanBanListUpdateManyMutationInputSchema,KanBanListUncheckedUpdateManyInputSchema ]),
  where: KanBanListWhereInputSchema.optional(),
}).strict() ;
export default KanBanListUpdateManyArgsSchema;