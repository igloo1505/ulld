import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/KanBanListUpdateManyMutationInputSchema.js
..//inputTypeSchemas/KanBanListUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/KanBanListWhereInputSchema.js
export const KanBanListUpdateManyArgsSchema: z.ZodType<Prisma.KanBanListUpdateManyArgs> = z.object({
  data: z.union([ KanBanListUpdateManyMutationInputSchema,KanBanListUncheckedUpdateManyInputSchema ]),
  where: KanBanListWhereInputSchema.optional(),
}).strict() ;
export default KanBanListUpdateManyArgsSchema;