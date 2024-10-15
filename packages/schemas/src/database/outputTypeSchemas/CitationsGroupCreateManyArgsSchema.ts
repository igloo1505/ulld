import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { CitationsGroupCreateManyInputSchema } from '../inputTypeSchemas/CitationsGroupCreateManyInputSchema.js'
export const CitationsGroupCreateManyArgsSchema: z.ZodType<Prisma.CitationsGroupCreateManyArgs> = z.object({
  data: z.union([ CitationsGroupCreateManyInputSchema,CitationsGroupCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default CitationsGroupCreateManyArgsSchema;