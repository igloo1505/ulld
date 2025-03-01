import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { RandomImageUpdateManyMutationInputSchema } from '../inputTypeSchemas/RandomImageUpdateManyMutationInputSchema.js'
import { RandomImageUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/RandomImageUncheckedUpdateManyInputSchema.js'
import { RandomImageWhereInputSchema } from '../inputTypeSchemas/RandomImageWhereInputSchema.js'
export const RandomImageUpdateManyArgsSchema: z.ZodType<Prisma.RandomImageUpdateManyArgs> = z.object({
  data: z.union([ RandomImageUpdateManyMutationInputSchema,RandomImageUncheckedUpdateManyInputSchema ]),
  where: RandomImageWhereInputSchema.optional(),
}).strict() ;
export default RandomImageUpdateManyArgsSchema;