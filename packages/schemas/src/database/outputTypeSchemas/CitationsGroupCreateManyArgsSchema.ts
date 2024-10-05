import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CitationsGroupCreateManyInputSchema } from '../inputTypeSchemas/CitationsGroupCreateManyInputSchema'

export const CitationsGroupCreateManyArgsSchema: z.ZodType<Prisma.CitationsGroupCreateManyArgs> = z.object({
  data: z.union([ CitationsGroupCreateManyInputSchema,CitationsGroupCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default CitationsGroupCreateManyArgsSchema;
