import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { CitationsGroupCreateManyInputSchema } from '../inputTypeSchemas/CitationsGroupCreateManyInputSchema.js'
export const CitationsGroupCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CitationsGroupCreateManyAndReturnArgs> = z.object({
  data: z.union([ CitationsGroupCreateManyInputSchema,CitationsGroupCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default CitationsGroupCreateManyAndReturnArgsSchema;