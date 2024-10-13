import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/RandomImageUpdateManyMutationInputSchema.js
..//inputTypeSchemas/RandomImageUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/RandomImageWhereInputSchema.js
export const RandomImageUpdateManyArgsSchema: z.ZodType<Prisma.RandomImageUpdateManyArgs> = z.object({
  data: z.union([ RandomImageUpdateManyMutationInputSchema,RandomImageUncheckedUpdateManyInputSchema ]),
  where: RandomImageWhereInputSchema.optional(),
}).strict() ;
export default RandomImageUpdateManyArgsSchema;