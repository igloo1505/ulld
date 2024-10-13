import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/RandomImageCreateManyInputSchema.js
export const RandomImageCreateManyAndReturnArgsSchema: z.ZodType<Prisma.RandomImageCreateManyAndReturnArgs> = z.object({
  data: z.union([ RandomImageCreateManyInputSchema,RandomImageCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default RandomImageCreateManyAndReturnArgsSchema;