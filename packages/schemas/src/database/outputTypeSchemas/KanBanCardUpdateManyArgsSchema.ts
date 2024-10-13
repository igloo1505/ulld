import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/KanBanCardUpdateManyMutationInputSchema.js
..//inputTypeSchemas/KanBanCardUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/KanBanCardWhereInputSchema.js
export const KanBanCardUpdateManyArgsSchema: z.ZodType<Prisma.KanBanCardUpdateManyArgs> = z.object({
  data: z.union([ KanBanCardUpdateManyMutationInputSchema,KanBanCardUncheckedUpdateManyInputSchema ]),
  where: KanBanCardWhereInputSchema.optional(),
}).strict() ;
export default KanBanCardUpdateManyArgsSchema;