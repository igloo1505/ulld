import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RandomImageWhereInputSchema } from '../inputTypeSchemas/RandomImageWhereInputSchema'

export const RandomImageDeleteManyArgsSchema: z.ZodType<Prisma.RandomImageDeleteManyArgs> = z.object({
  where: RandomImageWhereInputSchema.optional(),
}).strict() ;

export default RandomImageDeleteManyArgsSchema;
