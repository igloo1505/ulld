import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RandomImageUpdateManyMutationInputSchema } from '../inputTypeSchemas/RandomImageUpdateManyMutationInputSchema'
import { RandomImageUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/RandomImageUncheckedUpdateManyInputSchema'
import { RandomImageWhereInputSchema } from '../inputTypeSchemas/RandomImageWhereInputSchema'

export const RandomImageUpdateManyArgsSchema: z.ZodType<Prisma.RandomImageUpdateManyArgs> = z.object({
  data: z.union([ RandomImageUpdateManyMutationInputSchema,RandomImageUncheckedUpdateManyInputSchema ]),
  where: RandomImageWhereInputSchema.optional(),
}).strict() ;

export default RandomImageUpdateManyArgsSchema;
