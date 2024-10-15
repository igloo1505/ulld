import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { RandomImageCreateManyInputSchema } from '../inputTypeSchemas/RandomImageCreateManyInputSchema.js'
export const RandomImageCreateManyArgsSchema: z.ZodType<Prisma.RandomImageCreateManyArgs> = z.object({
  data: z.union([ RandomImageCreateManyInputSchema,RandomImageCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default RandomImageCreateManyArgsSchema;