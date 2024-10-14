import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { RandomImageWhereInputSchema } from '../inputTypeSchemas/RandomImageWhereInputSchema.js'
export const RandomImageDeleteManyArgsSchema: z.ZodType<Prisma.RandomImageDeleteManyArgs> = z.object({
  where: RandomImageWhereInputSchema.optional(),
}).strict() ;
export default RandomImageDeleteManyArgsSchema;